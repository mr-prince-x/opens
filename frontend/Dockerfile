
#FROM nginx:alpine
#COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
#COPY dist/ElearningManagement/* usr/share/nginx/html/
#EXPOSE:80

# Stage 1: Build the Angular application
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG API_URL
ENV API_URL=http://18.144.58.109:8080/api
ENV API_URL=$API_URL
RUN echo "export const environment = { production: true, apiUrl: '$API_URL' };" > src/environments/environment.ts

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/ElearningManagement /usr/share/nginx/html
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

