# dva4taro

[![NPM version](https://img.shields.io/npm/v/@zcorky/dva4taro.svg?style=flat)](https://www.npmjs.com/package/@zcorky/dva4taro)
[![NPM quality](http://npm.packagequality.com/shield/%40zcorky%2Fdva4taro.svg)](http://packagequality.com/#?package=@zcorky/dva4taro)
[![Coverage Status](https://codecov.io/gh/zcorky/dva4taro/branch/master/graph/badge.svg)](https://codecov.io/gh/zcorky/dva4taro)
[![Dependencies](https://img.shields.io/david/zcorky/dva4taro.svg?style=flat-square)](https://david-dm.org/zcorky/dva4taro)
[![Build Status](https://travis-ci.com/zcorky/dva4taro.svg?branch=master)](https://travis-ci.com/zcorky/dva4taro)
[![Known Vulnerabilities](https://snyk.io/test/npm/@zcorky/dva4taro/badge.svg?style=flat-square)](https://snyk.io/test/npm/@zcorky/dva4taro)
[![NPM download](https://img.shields.io/npm/dm/@zcorky/dva4taro.svg?style=flat-square)](https://www.npmjs.com/package/@zcorky/dva4taro)
![license](https://img.shields.io/github/license/zcorky/dva4taro.svg)
[![issues](https://img.shields.io/github/issues/zcorky/dva4taro.svg)](https://github.com/zcorky/dva4taro/issues)

> Connect dva with taro. It is written fully with Typescript.

* 🕒 Familiar `dva` API & patterns
* 💪 Node and Browser Support
* 🔥 TypeScript

## Install

```
$ npm install @zcorky/dva4taro
```

## Usage

```js
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { createStore } from '@zcorky/dva4taro';

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
