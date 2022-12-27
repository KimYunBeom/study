# study-typescript

---

## 초기설정

```
$npm i typescript -g
$tsc app.ts
```

```
$npm init -y
$npm i lite-server
$npm start
```

---

## 34. "watch 모드" 사용하기

$tsc app.ts --watch

---

## 35. 전체 프로젝트 컴파일 / 다수의 파일

$tsc --init
Created a new tsconfig.json with:  
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig

$tsc
$tsc -w
$tsc --watch
