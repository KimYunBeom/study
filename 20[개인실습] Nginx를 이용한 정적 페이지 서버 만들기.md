# 20[개인실습] Nginx를 이용한 정적 페이지 서버 만들기

## 1. 경로 생성 및 이동

```
$ mkdir ex
$ cd ex
$ mkdir nginx
$ cd nginx
```

## 2. index.html 파일 생성

```
<html>
  <head>
    <title>도커 이미지 예제</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  </head>
  <body>
    <h1>Nginx 서버를 도커 이미지로 만들었습니다.</h1>
  </body>
</html>
```

## 3. docker pull

```
$ docker pull nginx:latest
```

## 4. Dockerfile 생성

```
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD nginx
```

## 5. docker build

```
$ docker build -t img_nginx .
```

## 6. docker run

```
$ docker run -d --rm -p 80:80 --name ctn_nginx img_nginx
```

## 7. docker exec

```
$ docker exec -it ctn_nginx /bin/sh
```

파일 반영 여부 확인

```
$ cat /usr/share/nginx/html/index.html
```

파일이 반영되어있지 않다면 아래 cat 명령어를 입력 후 CTRL + D로 파일 덮어쓰기

```
$ cat /usr/share/nginx/html/index.html
<html>
  <head>
    <title>도커 이미지 예제</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>
    <h1>Nginx 서버를 도커 이미지로 만들었습니다.</h1>
  </body>
</html>
```

컨테이너 접속(exec) 종료

```
$ exit
```

## 8. 웹 브라우저에서 접속 및 확인

http://localhost:3000
