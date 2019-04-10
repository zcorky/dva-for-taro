import { create } from 'dva-core';
import { Options, Model, Hooks, Store, Action, DvaInstance } from './typings';

declare module 'dva-core' {
  export function create(options?: Options): DvaInstance;
}

declare var window: any;

export {
  Action,
  Model,
}

export interface IOptions extends Options {
  hooks?: Hooks;
  models: Model[];
}

const injectRemoteReduxDevtools = (options: IOptions) => {
  const extraEnhancers = options.extraEnhancers || [];

  // @TODO
  if (process.env.NODE_ENV !== 'production') {
    // not miniprogram, return
    if (!window || !window.wx) return ;

    extraEnhancers.push(require('../packages/remote-redux-devtools').default({
      hostname: 'localhost',
      port: 5678,
      secure: false,
    }));
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
