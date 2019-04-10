# dva-for-taro

[![NPM version](https://img.shields.io/npm/v/@zcorky/dva-for-taro.svg?style=flat)](https://www.npmjs.com/package/@zcorky/dva-for-taro)
[![NPM quality](http://npm.packagequality.com/shield/%40zcorky%2Fdva-for-taro.svg)](http://packagequality.com/#?package=@zcorky/dva-for-taro)
[![Coverage Status](https://codecov.io/gh/zcorky/dva-for-taro/branch/master/graph/badge.svg)](https://codecov.io/gh/zcorky/dva-for-taro)
[![Dependencies](https://img.shields.io/david/zcorky/dva-for-taro.svg?style=flat-square)](https://david-dm.org/zcorky/dva-for-taro)
[![Build Status](https://travis-ci.com/zcorky/dva-for-taro.svg?branch=master)](https://travis-ci.com/zcorky/dva-for-taro)
[![Known Vulnerabilities](https://snyk.io/test/npm/@zcorky/dva-for-taro/badge.svg?style=flat-square)](https://snyk.io/test/npm/@zcorky/dva-for-taro)
[![NPM download](https://img.shields.io/npm/dm/@zcorky/dva-for-taro.svg?style=flat-square)](https://www.npmjs.com/package/@zcorky/dva-for-taro)
![license](https://img.shields.io/github/license/zcorky/dva-for-taro.svg)
[![issues](https://img.shields.io/github/issues/zcorky/dva-for-taro.svg)](https://github.com/zcorky/dva-for-taro/issues)

> Connect dva with taro. It is written fully with Typescript.

* 🕒 Familiar `dva` API & patterns
* 💪 Node and Browser Support
* 🔥 TypeScript

## Install

```
$ npm install @zcorky/dva-for-taro
```

## Usage

```js
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { createStore } from '@zcorky/dva-for-taro';

const store = createStore({
  models: [
    require('./models/count').default,
  ],
})

class App extends Component {
  config = {
    pages: [
      'pages/Index/index',
    ],
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
```

### API
* See the detailed [API Reference](./docs).

### Examples
* [WIP]

### Relatived

## License

MIT © [Moeover](https://moeover.com)
