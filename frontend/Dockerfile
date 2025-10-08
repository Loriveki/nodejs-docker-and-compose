#Этап 1: сборка фронта
FROM node:16-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG REACT_APP_API_URL=http://api.my-mesto.space.nomorepartiessbs.ru
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Этап 2: nginx
FROM nginx:latest

# Копируем билд фронта в nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфиг nginx
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
