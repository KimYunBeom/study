# 10도커 기본 명령어 (run)

## ubuntu 20.04 컨테이너 만들기

```
# 로컬에 이미지가 없으면 원격(도커허브)에서 pull(다운로드)하고 run(실행)
# 명령어 옵션을 주지 않았기 때문에 기동하자마자 종료됨(terminated)
$ docker run ubuntu:20.04
```

```
# 기존에 로컬에 이미지가 있다면 이미지 삭제(rmi)
$ docker rmi ubuntu:20.04
```

## /bin/sh 실행하기

```
# -it : 컨테이너 내부에 진입하여 shell을 실행하고 키보드 입력을 가능하게 함
# --rm : 컨테이너 종료 후 컨테이너 자동 삭제
$ docker run --rm -it ubuntu:20.04 /bin/sh

# 현재 디렉토리의 폴더/파일 목록 보기
$ ls
bin   dev  home  lib32  libx32  mnt  proc  run
srv  tmp  var
boot  etc  lib   lib64  media   opt  root  sbin  sys  usr

# 우분투 버전 확인
$ cat /etc/issue
Ubuntu 20.04.4 LTS \n \l

# 종료
$ exit
```

## CentOS 실행하기

```
$ docker run --rm -it centos:8 /bin/sh

$ ls

$ cat /etc/issue
\S
Kernel \r on an \m

$exit
```

## 웹 어플리케이션 실행하기

```
# -p : 호스트 포트(도커 실행 중인 환경)와 컨테이너 포트(독립된 가상 영역)를 연결
$ docker run --rm -p 8080:8080 jxlwqq/http-echo --text="hello world"

# 웹 앱에 url 요청
$ curl localhost:8080

$ docker run --rm -p 8081:8080 jxlwqq/http-echo --text="docker"

$ curl localhost:8081
```

## Redis 실행하기

```
$ docker run --rm -p 1234:6379 redis

$ telnet localhost 1234

$ set hello world
+OK
$ get hello
$5
world
$ exit
```

## MySQL 실행하기

```
-d : detached mode(백그라운드 실행 모드)

$ docker run -d -p 3307:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --name mysql2 mysql

# MySQL 데이터베이스 실행
$ docker exec -it mysql2 mysql
> create database wp CHARACTER SET utf8;
> create user 'wp'@'%' identified by 'wp';
> grant all privileges on *.* to 'wp'@'%';
> flush privileges;
> quit
```

## 워드프레스 블로그 실행하기

```
$ docker run -d -p 8080:80 -e WORDPRESS_DB_HOST=host.docker.internal:3307 -e WORDPRESS_DB_NAME=wp -e WORDPRESS_DB_USER=wp -e WORDPRESS_DB_PASSWORD=wp wordpress

# 웹 브라우저 접속
http://localhost:8080

$ docker exec -it mysql2 mysql
> show databases;
> use wp
> show tables;
> select * from wp_users;
> quit
```
