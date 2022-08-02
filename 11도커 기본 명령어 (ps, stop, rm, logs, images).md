# 11도커 기본 명령어 (ps, stop, rm, logs, images, pull, rmi, network create/connect/option)

## ps 명령어

```
# 실행 중인 컨테이너 목록 보기
$ docker ps

# 중지된 컨테이너까지 보기
$ docker ps -a
```

## stop 명령어

```
# 실행중인 컨테이너 중지
docker stop [OPTIONS] [CONTAINER_ID OR NAMES]
```

## rm 명령어

```
# 종료된 컨테이너 삭제
docker rm [OPTIONS] [CONTAINER_ID OR NAMES]
```

## logs 명령어

```
# 컨테이너 정상 동작 여부를 로그로 확인
# -f : 실시간
docker logs [OPTIONS] [CONTAINER_ID OR NAMES]
```

## images 명령어

```
# 도커가 다운로드한 이미지 목록 보기
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

## pull 명령어

```
# 이미지를 다운로드
docker pull [OPTIONS] [REPOSITORY[:TAG]]
$ docker pull ubuntu:20.04
```

## rmi 명령어

```
# 실행중이지 않은 이미지를 삭제
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

## network create 명령어

```
# 도커 컨테이너끼리 이름으로 통신할 수 있는 가상 네트워크 생성
docker network create [OPTIONS] NETWORK
$ docker network create app-network
```

## network connect 명령어

```
# 기존에 생성된 컨테이너에 네트워크를 추가
docker network connect [OPTIONS] NETWORK CONTAINER
$ docker network connect app-network mysql2
```

## network option 명령어

```
# 워드프레스를 app-network에 추가, mysql2를 이름으로 접근
$ docker run -d -p 8080:80 --network=app-network -e WORDPRESS_DB_HOST=mysql2 -e WORDPRESS_DB_NAME=wp -e WORDPRESS_DB_USER=wp -e WORDPRESS_DB_PASSWORD=wp wordpress

# 웹 브라우저 접속
http://localhost:8080
```
