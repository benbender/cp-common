# @benbender/browserslist-config

[browserslist](https://github.com/browserslist/browserslist) configuration to be shared across repositories.

## Usage

**Install**:

```bash
$ yarn add --dev @benbender/browserslist-config
```

**Edit `package.json`**:

```js
{
  "browserslist": [
    "extends @benbender/browserslist-config"
  ]
}
```

When manually configuring a tool that uses Browserslist, importing this package returns the array of supported browsers.

For example, when configuring [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) via JavaScript:

```js
{
  presets: [
    ['env', {
      targets: {
        browsers: require('@benbender/browserslist-config')
      }
    }]
  ]
}
```