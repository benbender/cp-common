# @benbender/jest-config

[Jest](http://jestjs.io/) configuration to be shared across repositories.

## Usage

**Install**:

```bash
$ yarn add --dev @benbender/jest-config
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "jest": {
    "preset": "@benbender/jest-config"
  },
}
```

or for preact:

```jsonc
{
  // ...
  "jest": {
    "preset": "@benbender/jest-config/jest-preset-preact"
  },
}
```