# blog

---

## Introduction
Vite + Vue3 + vue-router + Vuex + Typescript + element-plus

## husky 5.x.x、lint-staged

```shell script
    yarn add husky lint-staged -D && npx husky install

    npx husky add .husky/pre-commit "npx lint-staged"

    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## vite 1.x.x -> 2.x.x

``` typescript
    import.meta 为{} 未按照预期包含env, vite仓库中有一个issue yyx说是一个bug，在未来版本中会解决。

    import { defineConfig, loadEnv } from 'vite'

    export default defineConfig(({ mode }) => ({
      /**
       * Base public path when served in production.
       * @default '/'
       */
      base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
    }))
```
