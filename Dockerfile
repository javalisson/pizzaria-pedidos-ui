# base stage
FROM node:12-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install

EXPOSE 8080

ENV VUE_APP_PEDIDOS_API_HOST localhost
ENV VUE_APP_PEDIDOS_API_PORT 3000

CMD [ "npm", "run", "serve" ]

# build stage
FROM base as build
WORKDIR /app
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
