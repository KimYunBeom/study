# 23[최종실습1] ghost 블로그 컨테이너 생성

## 1. 경로 생성 및 이동

```
$ cd ..
$ mkdir ghost
$ cd ghost
```

## 2. docker-compose.yml 파일 생성

```
version: '3'

services:
  ghost:
    image: ghost
    ports:
      - "60000:2368"
    volumes:
      - ./ghost_data:/var/lib/ghost/content
    environment:
      url: http://localhost:60000
```

## 3. docker-compose 실행

로컬에 이미지가 없으면 자동으로 docker pull이 실행된다.

```
$ docker-compose up
```

## 4. 웹 브라우저에서 접속 및 확인

http://localhost:60000
