FROM node:alpine as builder
RUN npm install -g @angular/cli@7
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html