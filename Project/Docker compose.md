# Docker Compose

## Prerequisites

A running web application, that need a DB connection.
example.sql file that creates DB table for the app.

## Creating docker-compose-yml

```
version: "3"
services:

  db:
    image: mysql:8.0.2
    environment:
      MYSQL_DATABASE: usersDB
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: eszkis
      MYSQL_PASSWORD: password
    ports:
      - "8080:3306"

  web:
    build: .  
    ports:
      - "8000:8000"
    depends_on:
      - db
```