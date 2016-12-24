# vue-ga

[![NPM version](https://img.shields.io/npm/v/vue-ga.svg?style=flat-square)](https://npmjs.com/package/vue-ga) [![NPM downloads](https://img.shields.io/npm/dm/vue-ga.svg?style=flat-square)](https://npmjs.com/package/vue-ga) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-ga/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-ga) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

Simple Google Analytics binding for Vue.js apps, 534 bytes gzipped.

## Install

```bash
yarn add vue-ga
```

## Usage

### vue-router

```js
// ./router/index.js
import VueRouter from 'vue-router'
import ga from 'vue-ga'

Vue.use(VueRouter)

const router = new VueRouter()
ga(router, 'UA-XXXXX-Y')

export default router
```

### non vue-router

Just invoke the `collect` function after route changes, for example:

```js
ga(collect => {
  // when hash changes
  window.onhashchange = () => {
    collect(location.href)
  }
}, 'UA-XXXXX-Y')
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vue-ga** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/vue-ga/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
