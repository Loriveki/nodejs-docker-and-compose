# Докеризация и деплой сервиса КупиПодариДай

## 📡 Доступ к проекту

IP сервера: 158.160.185.102

Frontend: https://my-mesto.space.nomorepartiessbs.ru  
Backend: https://api.my-mesto.space.nomorepartiessbs.ru

## 🚀 О проекте

Проектная работа по докеризации и деплою сервиса КупиПодариДай — приложения, состоящего из трёх частей:
  
  🔹 Бэкенд — Node.js API с авторизацией по JWT и подключением к PostgreSQL;  
  🔹 Фронтенд — React-приложение, раздающееся через nginx;  
  🔹 База данных — PostgreSQL.

Проект полностью развёрнут в контейнерах и запущен на виртуальной машине в Яндекс Облаке с поддержкой HTTPS (сертификаты Let's Encrypt, certbot).
Все компоненты объединены с помощью Docker Compose.

## 🛠 Используемые технологии  
🔹 Node.js  
🔹 TypeScript  
🔹 PostgreSQL  
🔹 pm2-runtime  
🔹 React  
🔹 Webpack  
🔹 Certbot (Let's Encrypt)  
🔹 Docker

##  📦 Структура проекта  

🔹 backend/ — серверная часть.  
🔹 frontend/ — клиентская часть.  
🔹 docker-compose.yml  — описание сервисов backend, frontend, db

##  📥 Установка и запуск локально

Склонируйте репозиторий:
```
https://github.com/Loriveki/nodejs-docker-and-compose.git
```
Создайте .env на основе примера:
```
cp .env.example .env
```  

Запустите сборку и поднятие контейнеров:  
```
docker-compose up -d --build
```

## 📬 Контакты

👩‍💻 Автор: Анастасия
