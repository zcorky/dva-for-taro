
import { delay } from '@zcorky/delay';
import { createStore, Model } from '../src';

const a = function *() {}

describe('dva4taro', () => {
  const model = {
    namespace: 'count',
    state: 0,
    reducers: {
      '+'(state: number) {
        return state + 1;
      },
      '-'(state: number) {
        return state - 1;
      },
    },
    effects: {
      *'services/+'(action, { call, put }) {
        yield call(delay, 100);
        yield put({ type: '+' });
      },
      *'services/-'(action, { call, put }) {
        yield call(delay, 100);
        yield put({ type: '-' });
      },
    },
  } as Model

  const store = createStore({
    models: [model],
  });

  it('reducer', () => {
    expect(store.getState().count).toBe(0);
    store.dispatch({ type: 'count/+' });
    expect(store.getState().count).toBe(1);
    store.dispatch({ type: 'count/-' });
    expect(store.getState().count).toBe(0);
  });

  it('effect', async () => {
    expect(store.getState().count).toBe(0);

    store.dispatch({ type: 'count/services/+' });
    expect(store.getState().count).toBe(0);
    await delay(100);
    expect(store.getState().count).toBe(1);

    store.dispatch({ type: 'count/services/-' });
    expect(store.getState().count).toBe(1);
    await delay(100);
    expect(store.getState().count).toBe(0);
  });
});
