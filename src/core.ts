import { RemoteReduxDevToolsOptions } from './../packages/remote-redux-devtools.d';
import { create } from 'dva-core';
import { getEnv, ENV_TYPE } from '@tarojs/taro';
import { Options, Model, Hooks, Store, Action, DvaInstance } from './typings';

declare module 'dva-core' {
  export function create(options?: Options): DvaInstance;
}

declare var window: any;

export {
  Action,
  Model,
}

const DEFAULT_REMOTE_REDUX_DEVTOOLS_OPTIONS = {
  hostname: 'localhost',
  port: 5678,
  secure: false,
};

export interface IOptions extends Options {
  hooks?: Hooks;
  models: Model[];
  remoteReduxDevTools?: RemoteReduxDevToolsOptions & {
    enable?: boolean;
  };
}

const injectRemoteReduxDevtools = (options: IOptions) => {
  const extraEnhancers = options.extraEnhancers || [];

  // @TODO
  if (process.env.NODE_ENV !== 'production') {
    if (!options.remoteReduxDevTools || !options.remoteReduxDevTools.enable) {
      return options;
    }

    // because packages/remote-redux-devtools use wx variable, so only wechat miniprogram works
    if (getEnv() !== ENV_TYPE.WEAPP) {
      return options;
    }

    const devtoolsOptions = {
      ...DEFAULT_REMOTE_REDUX_DEVTOOLS_OPTIONS,
      ...options.remoteReduxDevTools,
    };

    extraEnhancers.push(require('../packages/remote-redux-devtools').default(devtoolsOptions));
  }

  return {
    ...options,
    extraEnhancers,
  } as IOptions
}

export function createStore<S = any>(options: IOptions): Store<S> {
  // try to inject remote redux devtools for development, will remove in production
  const dvaOptions = injectRemoteReduxDevtools(options);

  const app = create(dvaOptions);

  if (options.hooks) {
    app.use(options.hooks);
  }

  options.models.forEach(model => {
    app.model(model);
  });

  // app.getStore = () => (app as any)._store;

  app.start();

  return (app as any)._store as any as Store<S>;
}
