# study-vue

---

## 0. 개요

### 출처

- https://kyounghwan01.github.io/blog/Vue
- https://v2.vuejs.org/v2/guide (vue2-cdn)
- https://vuejs.org (vue3 Official)
- https://v3-docs.vuejs-korea.org/guide/introduction.html (vue3 Korean)

### 기술 비교

#### BackEnd

- 1 Java - 2 Servlet & 3 JSP - 4 Spring - 5 Spring Boot
- 1 JavaScript - Google V8 Engine - Node.js - 2 Express.js & 3 ejs - 4 Nest.js

#### FrontEnd

- 1 JavaScript - 2 jQuery
- 1 JavaScript - Google V8 Engine - Node.js - 2 React.js, 2 Vue.js

### Visual Studio Code(vscode) 설치

#### vscode EXTENSIONS 설치 혹은 활성화

- Active File in StatusBar
- Auto Rename Tag
- indent-rainbow
- Live Server
- Markdown Preview Enhanced
- Material Icon Theme
- open in browser
- Prettier - Code formmater

- Vue Language Features (Volar)

### 과정(curriculum)

#### vue2-cdn, vue2-webpack, vue3-vite, vue3-vite-sfc : Ex01 ~ Ex09

1. Declarative Rendering 1: \{\{ variable \}\}
1. Declarative Rendering 2: :prop="variable"
1. Conditionals : v-if
1. Loops : v-for
1. Reactivity 1 : ref vs reactive & Event Handling : v-on:click or @click
1. Handling User Input : v-model
1. Composing with Components 1: \<ComponentName \/\>
1. Composing with Components 2: \<ComponentName \/\>
1. Composing with Components 3: \<ComponentName \/\>

#### vue-class : C01 ~ C12

1. Compare v-model with ref to v-model without ref
1. vue-router
1. props : 부모의 값 -> 자식
1. emits : 자식의 함수 -> 부모
1. Lifecycle Hooks : onMounted(), onUpdated(), onUnmounted() ... , onDeactivated()
1. computed 1
1. computed 2
1. computed vs watch
1. JavaScript Web API, ajax : fetch
1. Node.js ajax : axios
1. vue-spinner
1. State Management : Vuex(X), Pinia(O)

### 구현 방식(API Preference)

https://vuejs.org/tutorial/#step-1

1. vue2-cdn : Options(Vue 2) + HTML(\*.html)
1. vue2-webpack : Options(Vue 2) + SFC(\*.vue)
1. vue3-vite : Composition(Vue 3) + SFC(\*.vue) + \<script\> & setup()
1. vue3-vite-sfc : Composition(Vue 3) + SFC(\*.vue) + \<script setup\>

---

## 1. vue2-cdn

---

## 2. vue2-webpack

### Install vue/cli

```
$ npm i -g @vue/cli-init
$ vue --version
@vue/cli 4.5.13
```

### Init vue project

```
$ vue init webpack "vue2-webpack"

? Project name ENTER
? Project description ENTER
? Author ENTER
? Vue build ENTER
? Install vue-router? ENTER
? Use ESLint to lint your code? n
? Set up unit tests n
? Setup e2e tests with Nightwatch? n
? Should we run `npm install` for you after the project has been created? (recommended) ENTER
```

### Run vue

```
$ cd vue2-webpack
$ npm run dev
```

### Connect with URL in Web browser

http://localhost:8080

### Build vue

```
$ npm run build
# Check dist folder
```

---

## 3. vue3-vite

vue2 - options API
vue3 - composition API

### Init vue project

```
$ npm init vue@latest
Need to install the following packages:
  create-vue@3.4.0
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue3-vite
√ Add TypeScript? ... No
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... No
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No

Scaffolding project in C:\data\dev\workspace3\study\vue\vue3-vite...

Done. Now run:

  cd vue3-vite
  npm install
  npm run dev

$ cd vue3-vite
$ npm i
$ npm run dev
```

---

## 4. vue3-vite-sfc

sfc : Single File Components

### Init vue project

```
$ npm init vue@latest
Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue3-vite-sfc
√ Add TypeScript? ... No
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... No
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No

Scaffolding project in C:\data\dev\workspace3\study\vue\vue3-vite-sfc...

Done. Now run:

  cd vue3-vite-sfc
  npm install
  npm run dev
$cd vue3-vite-sfc
$npm i
$npm run dev
```

---

## 5. vue-class

### Init vue project

```
$ npm init vue@latest
Need to install the following packages:
  create-vue@3.4.1
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue-class
√ Add TypeScript? ... No
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... No
√ Add Pinia for state management? ... No
√ Add Vitest for Unit Testing? ... No
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No

Scaffolding project in C:\data\dev\workspace3\study\vue\vue-class...

Done. Now run:

  cd vue-class
  npm install
  npm run dev
$cd vue-class
$npm i
$npm run dev
```

### add vue-router

```
$npm i vue-router
```
