import { Model } from '@zcorky/dva-for-taro';

export default {
  namespace: 'count',

  state: 1000,

  reducers: {
    '+'(state: number) {
      return state + 1;
    },
    '-'(state: number) {
      return state - 1;
    },
  },
} as Model;