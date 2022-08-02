# 13도커 컴포즈 (docker compose) 기본

## 설치 확인

```
$ docker-compose version
Docker Compose version v2.6.1
```

## wp 디렉토리 생성 및 접근

```
$ mkdir wp
$ cd wp
```

## wp 디렉토리에서 docker-compose.yml 파일 생성, 코드 추가

```
version: '2'
services:
  db:
    image: mysql
    volumes:
      - ./mysql:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
  wordpress:
    image: wordpress:latest
    volumes:
      - ./wp:/var/www/html
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    ports:
      - '8000:80'
```

## 기존 mysql, wordpress 삭제

```
$ docker stop mysql2
$ docker rm mysql2
$ docker stop [CONTAINER_NAME]
$ docker rm [CONTAINER_NAME]
```

## docker-compose.yml 파일 실행

```
$ docker-compose up
```

## 웹 브라우저 접속

```
http://localhost:8000
```
