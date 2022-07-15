# build stage
# from node image
FROM node:lts-alpine as build-stage

# app as work directory
WORKDIR /app

# coping package json file
COPY package*.json ./

# running npm install
RUN npm install

# copy all of the files
COPY . .

# building our application
RUN npm run build

# production stage
# from nginx image
FROM nginx:stable-alpine as production-stage

# copy build files from build stage into nginx directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# exposing nginx on port 80
EXPOSE 80

# starting nginx
CMD ["nginx", "-g", "daemon off;"]
