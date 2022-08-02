# 12도커 기본 명령어 (volume)

## volume mount (-v) 명령어

```
# mysql2 삭제 후 재실행하면 DB 오류 확인됨
$ docker stop mysql2
$ docker rm mysql2
$ docker run -d -p 3307:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --network=app-network --name mysql2 mysql

# -v 옵션 추가하여 재실행
$ docker stop mysql2
$ docker rm mysql2
$ docker run -d -p 3307:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --network=app-network -v /data/dev/workspace3/study-docker:/var/lib/mysql --name mysql2 mysql

# MySQL 데이터베이스 실행
$ docker exec -it mysql2 mysql
> create database wp CHARACTER SET utf8;
> create user 'wp'@'%' identified by 'wp';
> grant all privileges on *.* to 'wp'@'%';
> flush privileges;
> quit

# 웹 브라우저 접속, 글 제목 수정
http://localhost:8080

# 재실행
$ docker stop mysql2
$ docker rm mysql2
$ docker run -d -p 3307:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --network=app-network -v /data/dev/workspace3/study-docker:/var/lib/mysql --name mysql2 mysql

# 웹 브라우저 접속, 수정된 글 제목 재확인 가능. 즉 데이터가 로컬에 남음.
http://localhost:8080
```
