# 15[개인실습] php cli 컨테이너 실행하기

## 1. 경로 생성 및 이동

```
$ mkdir php
$ cd php
```

## 2. hello.php 파일 생성

```
<?php phpinfo() ?>
```

## 3. docker run

```
$ docker run -v c:/data/dev/workspace3/study-docker/php/hello.php:/app/hello.php php:7 php /app/hello.php
```
