import { create } from 'dva-core';

export const getStore = (options?: any) => {
  const app = create(options);

  app.model(require('./models/count').default);

  app.start();

  return app._store;
};