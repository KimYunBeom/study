# 17도커 이미지 만들기 - 웹 애플리케이션 (nodejs)

## 1. Nodejs 웹 어플리케이션

```
$ npm init -y
$ npm i fastify
```

## 2. app.js 추가

```
# https://www.fastify.io 에서 예제를 복사-붙여넣기
# 아래는 도커를 위해 host 추가
await fastify.listen({ port: 3000, host: '0.0.0.0' });
```

## 3. 웹 브라우저에서 접속 및 확인

http://localhost:3000

## 4. .dockerignore 추가

Dockerfile에 의해 이미지가 생성될 때 node_modules가 이미지 내부에 COPY 되지 않도록 미리 지정 필요

```
node_modules/*
```

## 5. Dockerfile 추가

```
# 1. node 설치
FROM ubuntu:20.04

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs npm

# 2. 소스 복사
COPY . /usr/src/app

# 3. Nodejs 패키지 설치
WORKDIR /usr/src/app
RUN npm i

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000
CMD node app.js
```

## 6. 이미지 빌드 by Dockerfile, .dockerignore

```
$ cd web
$ docker build -t web .
```

## 7. 이미지 -> 컨테이너, 실행

```
$ docker run -p 3000:3000 --name web web
```

## 8. 웹 브라우저에서 접속 및 확인

http://localhost:3000

## 9. app.js 소스 수정 후 재확인

```
return { hello: 'world' };
```

↓

```
return { hello: 'docker' };
```

## 10. 이미지 빌드 by Dockerfile, .dockerignore

이미지를 다시 빌드해야 소스를 수정 내용이 반영된다

```
$ docker build -t web .
```

## 11. 이미지 -> 컨테이너, 실행

```
$ docker run -p 3000:3000 --name web web
```

## 12. 웹 브라우저에서 접속 및 확인

http://localhost:3001

## 13. Dockerfile 최적화를 위한 수정

```
FROM ubuntu:20.04
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
```

↓

```
FROM node:lts-alpine
```

## 14. 이미지 빌드 by Dockerfile, .dockerignore

이미지를 다시 빌드해야 소스를 수정 내용이 반영된다

```
$ docker build -t web .
```

## 15. 이미지 빌드 by Dockerfile, .dockerignore CACHED

같은 명령을 반복하면 CACHED 가 표시되며 빠르게 빌드한다.
여기서 소스를 수정하고 다시 빌드하면 npm i 부분의 CACHED가 해제되어 다시 빌드하게 된다.

```
$ docker build -t web .
```

## 16. 패키지 우선 복사를 적용

소스 생략

## 17. 이미지 빌드 by Dockerfile, .dockerignore CACHED

패키지 우선 복사를 적용하면 소스를 수정해도 npm i 부분이 CACHED 되므로 이전보다 빌드가 빨라진다.

```
$ docker build -t web .
```
