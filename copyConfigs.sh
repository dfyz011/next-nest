#!/bin/sh
cp frontend/.env.local-example frontend/.env.local

cp backend/.env-example backend/.env

cp ./.env-example ./.env

cp ./docker-compose.common.yml-example ./docker-compose.common.yml
