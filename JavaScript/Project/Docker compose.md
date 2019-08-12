# Docker Compose

## Prerequisites

A running web application, that need a DB connection.
example.sql file that creates DB table for the app.

## Creating docker-compose.yml

You need to create a docker-compose.yml file in your application folder. It will hae teh following part.

```
  db:
    image: mysql:8.0.2
    environment:
      MYSQL_DATABASE: exampleDB
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: exampleUser
      MYSQL_PASSWORD: password
    ports:
      - "HostPort:3306"
```

Here you tell the system to create a VM with a DB using mysql 8.0.2. You configurate the basic user, and password, and tell the VM to connect it's port with your host machine's port.

```
  web:
    build: .  
    ports:
      - "hostPort:VMport"
    depends_on:
      - db
```

Here you create a VM with the application. Connect the VM's port with your host's port. It will use the files in you folder. VM will wait until the DB is alread started.

The whole docker-compose.yml will loke like this.

```
version: "3"
services:
  db:
    image: mysql:8.0.2
    environment:
      MYSQL_DATABASE: exampleDB
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: exampleUser
      MYSQL_PASSWORD: password
    ports:
      - "HostPort:3306"
  web:
    build: .  
    ports:
      - "hostPort:VMport"
    depends_on:
      - db
```

## DB coonection info

In your folder, you should have a variable that stores the information , how to connect to your DB. it should look like this.

```
RDS_HOST=DB VM's service name
RDS_USER=exampleUser
RDS_PASSWORD=password
RDS_PORT=3306
RDS_DATABASE=usersDB
```

## Set up your DB's table

In your server, you need to create your table using the data.sql file, the first time it has been run.

## Start your VMs

With commandline go to your application folder. To start the whole process type in the following command in your command line.

```docker-compose up```

This will take a few minutes to finish initialization. To look your web application go to the following url

``` localhost:host port added at web application```