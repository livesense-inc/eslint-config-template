# eslint-config

eslint および prettier の設定をまとめた npm パッケージです

## 利用方法

### パッケージインストール

- `https://github.com/settings/tokens` から `read:packages`権限を持つトークンを生成して、`GPR_READ_TOKEN`として環境変数を定義

- `.npmrc` ファイルをリポジトリのルートに追加

```
registry=https://registry.yarnpkg.com/

@orgname:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GPR_READ_TOKEN}
//npm.pkg.github.com/${organizationName}/:_authToken=${GPR_READ_TOKEN}
always-auth=true
```

- パッケージインストール

```bash
$ yarn add -D @{organization-name}/eslint-config
# または
$ npm i -D @{organization-name}/eslint-config
```

### eslint および prettier の設定追加

- `.eslintrc.js`追加

```js
module.exports = {
  extends: ["@orgname/eslint-config"],
  rules: {
    // リポジトリ固有のルールを追加
  },
};
```

- `.prettierrc.js`追加

```js
const sharedConfig = require("@orgname/eslint-config/prettier-config");

module.exports = {
  ...sharedConfig,
  // リポジトリ固有のルールを追加
};
```

- `package.json`にコマンド追加

```json
{
  "scripts": {
    ...
    "lint": "yarn lint:eslint && yarn lint:prettier",
    "lint:test": "yarn lint:eslint && yarn lint:prettier --check",
    "lint:fix": "yarn lint:eslint --fix && yarn lint:prettier --write",
    "lint:eslint": "eslint --cache .",
    "lint:prettier": "prettier ."
  },
}
```

### 動作確認

```bash
$ yarn lint:test
```
