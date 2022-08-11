# 14[개인실습] nginx 컨테이너 만들기

## 1. 경로 생성 및 이동

```
$ mkdir nginx
$ cd nginx
```

## 2. index.html 파일 생성

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>docker nginx test</title>
  </head>
  <body>
    <div>hello world</div>
  </body>
</html>
```

## 3. docker run

```
docker run -d --rm -p 50000:80 -v [ABSOLUTE PATH]/index.html:/usr/share/nginx/html/index.html --name nginxtest nginx:alpine

$ docker run -d --rm -p 50000:80 -v c:/data/dev/workspace3/study-docker/nginx/index.html:/usr/share/nginx/html/index.html --name nginxtest nginx:alpine
```
