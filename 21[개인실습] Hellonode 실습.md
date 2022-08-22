# 21[개인실습] Hellonode 실습

## 1. 경로 생성 및 이동

```
$ cd ..
$ mkdir node
$ cd node
```

## 2. app.js 파일 생성

```
const http = require('http');
const PORT = process.env.PORT || 80;
const os = require('os');
const HOSTNAME = os.hostname();

http
  .createServer((req, res) => {
    console.log(`req : ${req.url}`);
    res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
    res.write(`Hello, World!\n`);
    res.write(`Hostname: ${HOSTNAME}`);
    res.end();
  })
  .listen(PORT);

console.log(`Server is on port : ${PORT}`);
```

## 3. docker pull

```
$ docker pull node:lts-alpine
```

## 4. Dockerfile 생성

```
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 80
CMD node app.js
```

## 5. docker build

```
$ docker build -t img_node .
```

## 6. docker run

```
$ docker run -d --rm -p 80:80 --name ctn_node img_node
```

## 7. 웹 브라우저에서 접속 및 확인

http://localhost
