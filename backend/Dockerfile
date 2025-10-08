# Этап 1: сборка проекта
FROM node:18-alpine AS build

# Устанавливаем системные зависимости
RUN apk add --no-cache python3 make g++ bash openssl

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходники 
COPY . .
RUN npm run build

# Этап 2
FROM node:16-alpine

WORKDIR /app

# Устанавливаем pm2 и минимальные системные пакеты
RUN apk add --no-cache bash openssl libressl \
    && npm install -g pm2

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

COPY ecosystem.config.js ./

EXPOSE 3000

# Запуск
CMD ["pm2-runtime", "ecosystem.config.js"]
