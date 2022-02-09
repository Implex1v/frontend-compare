FROM node:17.4.0-bullseye as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21.6-alpine
ENV NODE_ENV production

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
