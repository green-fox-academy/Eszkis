# Final exam requirement

## Endpoint
### params

Usualy used for search. Dinamicly change with every search.

### header

- req egy része, tartalmazhat információt<br/>
- csomag címzése, minden más adat a requesttel kapcsolatban<br/>
- content-type, status code, token, <br/>
- Specifys some informations and rules about the data e.g.:Host, Accept-language,Accept<br/>
- Optional to add header in http<br/>
- Key-value pairs<br/>
-  form depends if its request or response<br/>

### body

- req része, abban van az payload maga, amit küldünk
- Optional to add body to http
- It contains every other/plus information about the data

### request / response

- request contains the detail what we want to ask from the server, browser sends it to the server, 
- http method: 
- URL
- protocol verziója, 1.1, 2.1

### status (200, 404)

- httpstatusdogs.com
- 200 - successful
- 404- not found, client side problem
- 500 - server side error

### API

API and Web service serve as a means of communication. The only difference is that a Web service facilitates interaction between two machines over a network. An API acts as an interface between two different applications so that they can communicate with each other. An API is a method by which the third-party vendors can write programs that interface easily with other programs.
[moar](https://medium.com/@programmerasi/difference-between-api-and-web-service-73c873573c9d)

### REST

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
[more](https://www.codecademy.com/articles/what-is-rest)


### AJAX

Asynchronous JavaScript And XML. Browser technology.
No need to refresh page all the time, send data in the background.

### PROMISE & FETCH

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
Resolve and reject are functions that return a value.

[examples](https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513)

### HTTP, HTTPS
### parts of URL
### Examples:
#### Download pdf endpoint
#### GET/POST/PUT * endpoint call or implementation or refactor
#### Modify status of an endpoint
#### Add error handling to an endpoint

## Data flow
### layers

- frontend layer<br/>
- backend layer<br/>
- database layer<br/>
- separate layers do separate things<br/>
- one layer should be responsible only for the necessary things<br/>
- in a sense MVC is kind of 3 layers<br/>
- we creating layers by separating our code with the intention of keep the functionality<br/>
- redux is also a layer<br/>

### service

- foreign ministry of our application<br/>
- hides the communicational syntax and the specific code that needs to be used to access data and return that data to the service caller<br/>
- connection between the different layers (pzl. frontend-backend, backend-database);<br/>
- different name for functions


### MVC

Model-View-Controller is a architectural pattern that divides an application into 3 different parts.<br/>
Model: The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.<br/>
View: Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.<br/>
Controller: Accepts input and converts it to commands for the model or view.

### joined models

java stuff

### components

java stuff

### communication between layers and components

How data flow between layers. 

## Testing
### model, unit

[Unit test with mocha & chai](https://github.com/green-fox-academy/adambhun/tree/master/cheatsheet/testing)<br/>
unit: w-4 d-4

### integration, endpoint

endpoint: w-9 d-1

### end to end

testing whole application, from every perspective

### Mocking (mock, stub, spy)

[example1](https://javapointers.com/tutorial/difference-between-spy-and-mock-in-mockito/)<br/>
[example2](https://dzone.com/articles/mockito-mock-vs-spy-in-spring-boot-tests)<br/>

### assertions

## DB
### ORM

programban lévő objektumok és az DB lévő relációk között hidat képez (összemappeli őket object relation mapping)

### CRUD
### foreign key
### SQL syntax
### join
### Examples:
#### New specific query from database
#### Creating one-to-many, many-to-many connections
#### Basic SQL commands in terminal

[Basic SQL commands in terminal](https://github.com/green-fox-academy/adambhun/blob/master/cheatsheet/SQL/shell.txt)

#### Cascading deletion for connected records

```
CREATE TABLE buildings (
    building_no INT PRIMARY KEY AUTO_INCREMENT,
    building_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE rooms (
    room_no INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(255) NOT NULL,
    building_no INT NOT NULL,
    FOREIGN KEY (building_no)
        REFERENCES buildings (building_no)
        ON DELETE CASCADE
);
```

#### Normal forms

first
foreign key is used to reference tables -> no repeating

second
intersection tables are used (relational tables)

third
All the non-prime attributes must depend on the primary key only.

#### Other snippets
[exercises](https://github.com/green-fox-academy/adambhun/blob/master/cheatsheet/SQL/sql-exercises.txt)
[GFA cheatsheet](https://github.com/green-fox-academy/adambhun/blob/master/cheatsheet/SQL/mysqlcheatsheet.pdf)
[Adam's stuff](https://github.com/green-fox-academy/adambhun/blob/master/cheatsheet/SQL/cheatsheet.txt)


## Container
### Create image using Dockerfile

To create a Docker image you need a docker file. If you want to create a container with your own server, you need the files in the same folder as your Docker file, or a Repository. 

The docker file need to contain the following things: <br/>
  - what type of OP system should it run<br/>
  - what command should it run<br/>
  - from where should it copy the program files, and to where<br/> 
  - which port should it open to the outworld<br/>
  - command to start the application<br/>

After you have the docker file, you need to run a basic command in your console. With your console go to the folder that contains the docker file and run this.

```docker build .```

After the image is build you get back the image ID.

### Start / stop containers (using doom is ok :D)

You can run image that is in your computer, or in the internet. You need to run the following command.

```docker run image_name```

For image_name you can use image id, or 'repository':'tag'.

To stop a running container you need the containers's ID. You need to type in the following command.

```docker stop container_id```

### Push and Pull from dockerhub

To pull an image, you need it's repository's name, and tha image's tag. If you have both you can pull it with the follwong command.

```docker pull repository:image_tag```

To push an image, you need repository which you have access to, and an image. First you need to tag the image with the follwing command.

```docker tag image_name/image_ID tag_name```

After you taged the image, to push it you need the following command.

```docker push repository_name:image_tag```

### Set environment variables and ports

If you want to open a port on the container, you need to add a '-p host_port:container:port' optional parameter to the run command.

```docker run example_image -p host_port:container:port```

For enviroment variable you can also use an optinal parameter on run command. This parameter is '-e variable_name= example_value'.

```docker run example_image -e POSTGRES_ENV_POSTGRES_PASSWORD='foo'```

## Compose
### using volumes

Docker volumes is a folder that lives outside the container. Through this folder you can add, delete, and modify files in your container. Example if you need to add a file in a container while it is running, then add it to the volume folder.

To create volumes, you need to give the container to folder. First is where the folder/file is in your host computer, second is where the folder/file is in your container.

```host_folder:container_folder```

### using compose.yml

It is used to run multiple container beside eah other. This way you can connect them together, and set a multicomponenet application. If one of the container collapse, you just need to restart that specific one, not all of them.

[Basic compose file](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Docker%20compose.md)

### start and stop containers

Run this command in the folder where the compose.yml file is. Build up everything from scratch.

```docker-compose up```

Run this command in the folder where the compose.yml file is. Stop the containers, end delet every volumes, connections.

```docker-compose down```

Start a containers connected together. The containers need to be built before it.

```docker-compose start```

Stops continers that are running, but dont destroies it. Later you are able to start these continers.

```docker-compose stop```

## Cloud
### Deploy to EBS

You can deploy to ebs via console or website. For both of them ou need an AWS IAM user or root user(IAM user is better), and an application. 

[AWSCLI deploy](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Deploying_Docker_to_EBS_via_AWSCLI.md)<br/>

[Website deploy](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html)

### Manage EBS of EC2 instance

You can manage EBS of EC2 similar like a simple EBS. When creating EC2, an EBS also created with same name as EC2 Name. You can change EBS parameters in EBS services. If you need to delete it, you need to delete EC2 also.

### Push files to S3

[Basic S3 bucket setup](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Static%20files%20in%20the%20cloud.md)

### Manage an RDS instance

[Basic RDS setup](https://github.com/green-fox-academy/Eszkis/blob/master/Project/DB%20in%20the%20cloud.md)

## CI Advanced
### Create new Jenkins job

You have to sing in to Jenkins. Go to "New Item" in the top left corner. Here you can select the type of your project, and give it a name.

[Whole freestyle project](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Jenkins_pipeline.md)


[Whole multibranch pipeline](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Continuos%20Delivery.md)

### Configure GitHub hooks


<b>Build Triggers</b>

In "Build Triggers" you need to select "GitHub Pull Request Builder". In here you need to click on "Advenced..." and look for "Build every pull request automatically without asking (Dangerous!)." ad check it in.

<b>Build</b>

Last thing you have to set up, is what should jenkins do on Pull Requests. Click on "Add build step" and select "GitHub PR: set 'pending' status". This will tell GitHub, to wait for check from Jenkins. After add "Execute shell" build step. Here you can add a code that check for errors, or use it to call a program, that check everythng for you.

After everything is set click on "Save" in the bottom left corner.

<b>Set up webhook on GitHub repo</b>

You have to go back to the repo, where you left it. We have to add two webhhooks to your repo. In "Settings" go to "Webhooks", and click on "Add webhook". 

<b>GitHub webhook</b>

For URL type in a similar url: http://Your-Jenkins_url:port/github-webhook/

Select "Content type" to be "application/json". Your webhook should send everything, and should be "Active". Then click on "Add webhook". Your first webhook is ready. 

<b>PR webhhok</b>

For URL type in a similar url: http://Your-Jenkins_url:port/ghprbhook/

Select "Content type" to be "application/json". Your webhook should send everything, and should be "Active". Then click on "Add webhook". Your second webhook is ready.

If you go back to "Settings/Webhooks" you should see your two webhook. If both of them are up and running there should be a green tick next to it.

[Whole freestyle project](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Jenkins_pipeline.md)  

### Use deployment plugins or scripts

Jenkins has many plugins that helps you to deploy your application to many different cloud provider. Jenkins has plugins nearly everything.

If you want to specify the steps, Jenkins should do, you can write a Jenkinsfile for it. If it is writen you can set Jenkins to use this filem to know what it should do.

[Jenkinsfile example in end of the document](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Continuos%20Delivery.md)