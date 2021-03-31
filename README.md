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
