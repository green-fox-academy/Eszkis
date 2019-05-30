# Final exam requirement
## Endpoint
### params
### header
### body
### request / response
### status (200, 404)
### REST
### HTTP, HTTPS
### parts of URL
### Examples:
#### Download pdf endpoint
#### GET/POST/PUT * endpoint call or implementation or refactor
#### Modify status of an endpoint
#### Add error handling to an endpoint

## Data flow
### layers
### service
### MVC
### joined models
### components
### communication between layers and components

## Testing
### model, unit
### integration, endpoint
### end to end
### Mocking (mock, stub, spy)
### assertions

## DB
### ORM
### CRUD
### foreign key
### SQL syntax
### join
### Examples:
#### New specific query from database
#### Creating one-to-many, many-to-many connections
#### Basic SQL commands in terminal
#### Cascading deletion for connected records

## Container
### Create image using Dockerfile
### Start / stop containers (using doom is ok :D)
### Push and Pull from dockerhub
### Set environment variables and ports

## Compose
### using volumes
### using compose.yml
### start and stop containers

## Cloud
### Deploy to EBS
### Manage EBS of EC2 instance
### Push files to S3
### Manage an RDS instance

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

[Jenkinsfile example end of the document](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Continuos%20Delivery.md)