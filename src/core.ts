import { create } from 'dva-core';
import { Options, Model, Hooks, Store, Action, DvaInstance } from './typings';

declare module 'dva-core' {
  export function create(options?: Options): DvaInstance;
}

export {
  Action,
  Model,
}

export interface IOptions extends Options {
  hooks?: Hooks;
  models: Model[];
}

export function createStore<S = any>(options: IOptions): Store<S> {
  const app = create(options);

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
