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

## 45. Visual Studio Code로 디버깅하기

EXTENSION 설치 및 활성화 여부 확인

- ESLint
- Prettier

## 1. tsconfig.json 옵션 활성화

```
"sourceMap": true
```

## 2. 동작할 ts 파일 소스에 Break Point 추가

## 3. tsc: watch Terminal 활성화

```
tsc: watch - tsconfig.json
```

단축키 : Ctrl + Shift + B

## 4. lite-server 동작

```
$npm start
```

## 5. 디버그 창 이동

단축키 : Ctrl + Shift + D

## 6. 디버깅 실행 (Start Debugging)

단축키 : F5

## 7. Web Browser(Chrome)에서 2번 동작

ex) 버튼 클릭

## 8. ts 소스에서 Break Point에 동작이 멈춤 확인
