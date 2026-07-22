# Changlog

## Unreleased

* BREAKING CHANGE: Drops support for eslint 9. Requires eslint >=10.0.0.
* BREAKING CHANGE: Replaces unmaintained `eslint-plugin-import` with `eslint-plugin-import-x`. Any `import/*` rule overrides in consuming projects need to be renamed to `import-x/*`.
* BREAKING CHANGE: Raises minimum Node.js version to match eslint 10's requirement (`^20.19.0 || ^22.13.0 || >=24`).
* BREAKING CHANGE: `eslint-config-axway` is now an ES module. A CommonJS `eslint.config.js` must add `.default` when requiring it or any `/env-*` or `/+*` subpath (e.g. `require('eslint-config-axway/env-node').default`); an ESM `eslint.config.js`/`.mjs` needs no changes.
* BREAKING CHANGE: Replaces `eslint-plugin-react` (has no eslint 10 compatible release and crashes at runtime under eslint 10) with [`@eslint-react/eslint-plugin`](https://github.com/Rel1cx/eslint-react) in `axway/+react`.
* BREAKING CHANGE: Removes the `verify-peer-dependency` helper and the `find-root`/`semver` dependencies it needed. A missing or incompatible optional peer (e.g. `eslint-plugin-mocha` for `axway/+mocha`) now surfaces as a plain Node.js "Cannot find package" error instead of a custom message with the required version range.
* feat: Adds `axway/+node-test` extension for linting the Node.js native test runner (`node:test`) and `node:assert` usage, using [`eslint-node-test`](https://github.com/sindresorhus/eslint-node-test). Requires eslint >=10.4.0 and Node.js >=22.
* chore: Updated dependencies to versions with eslint 10 support (`@eslint/js`, `@stylistic/eslint-plugin`, `eslint-plugin-promise`, `eslint-plugin-security`, `eslint-plugin-vue`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-chai-expect`).
* note: `eslint-plugin-jsx-a11y` (used by `axway/+react`) still has no eslint 10 peer range, so installing it alongside eslint 10 requires `--legacy-peer-deps`; it should work correctly at runtime once installed.

## v10.0.0 (Dec 18, 2025)

* BREAKING CHANGE: Drops support for eslint 8.
* BREAKING CHANGE: Removes `+babel` extension.
* BREAKING CHANGE: Removes support for `env-alloy` and `env-titanium` environments.
* feat: Adds support for eslint 9.
* feat: Adds `+vue` extension.
* chore: Updated dependencies.

## v9.0.0 (Oct 31, 2023)

* BREAKING CHANGE: Add minimum Node.JS version of 18.18.2
* chore: Updated dependencies.

## v8.0.0 (Feb 28, 2023)

* BREAKING CHANGE: Replaces unmaintained `eslint-plugin-node` with `eslint-plugin-n`. Any uses of `env-node` with `node/` scoped rule overrides will need to be replaced as `n/` scoped.
* chore: Updated dependencies.

## v7.0.1 (May 18, 2022)

* fix: Ignore unsupported ES module syntax warnings.
* chore: Bumped Node.js ECMAScript version from `9` to `2021`.
* chore: Updated dependencies.

## v7.0.0 (Jan 20, 2022)

* BREAKING CHANGE: Drops support for eslint 7.
* BREAKING CHANGE: Drops support for @typescript-eslint 4.x packages.
* BREAKING CHANGE: Drops support for eslint-plugin-mocha 9.x.
* BREAKING CHANGE: Updates to latest versions of built in eslint plugins.
* feat: Add support for eslint 8.

## v6.0.1 (Mar 15, 2021)

* fix: Added `@babel/core` as an optional peer dependency so that the Babel eslint parser will
   function properly.

## v6.0.0 (Mar 3, 2021)

* BREAKING CHANGE: Replaced the deprecated `babel-eslint` with `@babel/eslint-parser` and
   `@babel/eslint-plugin`.
* BREAKING CHANGE: Removed support for old peer dependencies: `eslint`, `eslint-plugin-mocha`,
   `@typescript-eslint/parser`, and `@typescript-eslint/eslint-plugin`.
* chore: Updated dependencies.
