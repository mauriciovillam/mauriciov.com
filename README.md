# Mauricio Villalobos Personal Website

## Included

- Barebone eleventy
- Fast build with per env configs ([babel-env](https://babeljs.io/docs/en/babel-preset-env), [postcss-preset-env](https://github.com/csstools/postcss-preset-env), [webpack](https://webpack.js.org/configuration/#use-different-configuration-file)...)
- `.js` (ES6, Babel and its polyfills)
- `.css` (Sass, Autoprefixer)
- [Prettier](https://prettier.io/) for formatting

## Usage

First install the dependencies:

```sh
npm install
```

Then you can:

| Command               | Description                                  |
| --------------------- | -------------------------------------------- |
| **`npm run start`**   | Run your website on http://localhost:8080    |
| **`npm run build`**   | Build your production website inside `/dist` |
| **`npm run format`**  | Run prettier on all filles except `/dist`    |
| **`npm run analyze`** | Output info on your bundle size              |


## Thanks

- https://github.com/clenemt/eleventy-webpack