# eslint-config-axway

Axway JavaScript coding standards shareable config for [eslint](http://eslint.org/).

- [Installation](#installation)
- [Overview](#overview)
- [Usage](#usage)
- [Extend the configuration with your own overrides](#extend-the-configuration-with-your-own-overrides)
  - [Unit test lint configuration](#unit-test-lint-configuration)
  - [Running eslint](#running-eslint)

## Installation

```console
$ npm i --save-dev eslint eslint-config-axway
```

## Overview

There are several ways to incorporate this eslint configuration into your project.

### Step 1

Determine which environment you wish to target. Choose __ONE__ per configuration entry:

| Target Environment   | Description                           |
| :------------------- | :------------------------------------ |
| `axway`              | General JavaScript                    |
| `axway/env-browser`  | Web browser support (extends `axway`) |
| `axway/env-node`     | Node.js support (extends `axway`)     |

> [!NOTE]
> The default `axway` configuration automatically includes the [`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x), [`eslint-plugin-security`](https://www.npmjs.com/package/eslint-plugin-security), and [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise) plugins.
> These help improve the quality of your JavaScript code.

### Step 2 (optional)

Select additional configurations. These require you to add dependencies to your project:

```console
$ npm i --save-dev <additional deps>
```

| Addon               | Description                      | Additional Dependencies                                   |
| :------------------ | :------------------------------- | :-------------------------------------------------------- |
| `axway/+chai`       | Chai support                     | `eslint-plugin-chai-expect` `eslint-plugin-chai-friendly` |
| `axway/+mocha`      | Mocha unit test rules            | `eslint-plugin-mocha`                                     |
| `axway/+node-test`  | Node.js test runner and `assert` | `eslint-node-test`                                        |
| `axway/+typescript` | TypeScript support               | `@typescript-eslint/eslint-plugin`                        |
| `axway/+vue`        | Vue.js support                   | `eslint-plugin-vue`                                       |

> [!NOTE]
> `axway/+node-test` requires eslint >=10.4.0 and Node.js >=22, stricter than this package's own minimums.

## Usage

> [!WARNING]
> `eslint-config-axway` requires eslint >=10.0.0. If you need to use eslint 9, then use `eslint-config-axway` v10.x. If you need to use eslint 8 or earlier then use `eslint-config-axway` v9.0.0.

<!-- -->

> [!WARNING]
> `eslint-config-axway` is now an ES module. If your `eslint.config.js` is CommonJS, loading it with `require('eslint-config-axway')` (or any of its `/env-*` or `/+*` subpaths) returns the module namespace object, not the config directly — destructure the `default` property (e,g, `const { default: axwayRecommended } = require(...`) or add `.default` to the require (e.g. `... = require('eslint-config-axway/env-node').default`) to use in CommonJS config files.
> Projects using an ESM `eslint.config.js` (or `.mjs`) can `import` it as before with no changes.

### `eslint.config.js`

The simples way of getting started with the configuration is adding a `eslint.config.js` file at the root of your repository. With just this in place you'll be ready to start linting your codebase.

```js
// eslint.config.js

import axwayRecommended from 'eslint-config-axway';
export default axwayRecommended;
```

### Extend the configuration with your own overrides

A custom `eslint.config.js` config is useful for using different configurations per directory or file type, defining global variables, including additional plugins, and overriding rules.

To extend the axway config, Update the `eslint.config.js` file in the root of your project and add the axway configuration to an extends array.

```js
// eslint.config.js

import axwayRecommended from 'eslint-config-axway';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        extends: [
            axwayRecommended
        ],
        languageOptions: {
            globals: {
                // declare globals here...
            }
        },
        rules: {
            // project specific overrides...
        }
    }
]);
```

#### Unit test lint configuration

You will probably also want a test-specific configuration. Extend your `eslint.config.js` file to add specific handling for your test directory.
If you're using mocha like in this scenario you may also want to replace the base axway recommended config with the Node.JS env base.

```js
// eslint.config.js

import axwayRecommended from 'eslint-config-axway/env-node';
import axwayMocha from 'eslint-config-axway/+mocha';
import axwayChai from 'eslint-config-axway/+chai';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        extends: [
            axwayRecommended
        ],
        languageOptions: {
            globals: {
                // declare globals here...
            }
        },
        rules: {
            // project specific overrides...
        }
    },
    {
        files: [ './test/**/*.js' ],
        extends: [
            axwayMocha,
            axwayChai
        ],
        rules: {
            // test specific overrides...
        }
    }
]);
```

```console
$ npm i --save-dev eslint-plugin-mocha eslint-plugin-chai-expect eslint-plugin-chai-friendly
```

#### Running eslint

The easiest way to run eslint in your project is to add it as an NPM scrpit. To do this, add an item to the `scripts` object in your projects `package.json`:

```json
// package.json

{
    "scripts": {
        "lint": "eslint"
    }
}
```

With that in place, running is as easy as using the npm cli

```console
$ npm run lint
```

## License

This project is open source and provided under the Apache Public License (version 2). Please make sure you see the LICENSE file included in this distribution for more details on the license.
Also, please take notice of the privacy notice at the end of the file.

(C) Copyright 2017-2026, [Axway, Inc](http://www.axway.com) All Rights Reserved.
