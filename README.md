# webpack + es6 + starter kit
> a quick head-start on creating JS module/library...for now.

## Table of Contents
* [Background](#background)
* [Folder Structure](#folder-structure)
* [Todo](#todo)

## Background
I feel that I need to brush up my basic skills related to web development especially for JS (I know you know why)

* Webpack 3 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Folder Structure
    .
    ├── dist
    │   ├── hello-world.js
    │   ├── hello-world.min.js
    │   ├── hello-world.js.map
    ├── src
    │   ├── hello-world.js
    │   ├── index.js
    ├── test
    │   ├── hello-world.spec.js
    └── README.md

## Todo
  * add webpack live-reload for dev env
  * replace mocha+chai with jest.
  * use airbnb styleguide.

## Big Thanks
thanks you @krasimir for doing this [tutorial](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6) for helping me doing this starter kit.

## License

[MIT](https://opensource.org/licenses/MIT)
