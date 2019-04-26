# Continuous Integration/Continuos Delivery

## Prerequisites

AWS IAM user with the following permissions:
                                      - AmazonRDSFullAccess
                                      - AmazonEC2FullAccess
                                      - AmazonS3FullAccess
                                      - AWSCodeDeployFullAccess
                                      - AWSElasticBeanstalkFullAccess
                                      - AmazonRDSDataFullAccess
                                      - AmazonEC2ContainerServiceFullAccess

You will also need the following: Jenkins, GitHub repo.

## Create multibranch pipeline in Jenkins

You have to sing in to Jenkins. Go to "New Item" in the top left corner. Here you can select the type of your project, and give it a name. I recomend "Multibranch pipleline" for this example. After you gave a name, and selected project type, press "OK" on bottom left corner. On the next page you have to set up how should the project work.

### Branch Sources

Here add GitHub as source. Here you will need to add your credentials, owner of the repo nad the name of the repo. For behaviours add the following to "Discover branches" and "Discover pull requests from origin". For "Discover branches" select "All branches", and for "Discover pull requests from origin" select "Merging the pull request with current target branch revision".

### Build Configuration

For mode select "by Jenkinsfile", and then set the Jenkinsfile relative path. It the Jenkinsfile will be in the main foldel in the repo just write "Jenkinsfile".

The pipeline is set up, you only need to click on "Save" button. Right now jenkins will check you repo, and set up basic structure.

## Set up GitHub webhook.

You have to go back to the repo. We have to add two webhhooks to your repo. In "Settings" go to "Webhooks", and click on "Add webhook". 

### GitHub webhook

For URL type in a similar url: http://Your-Jenkins_url:port/github-webhook/

Select "Content type" to be "application/json". Your webhook should send everything, and should be "Active". Then click on "Add webhook". Your first webhook is ready. 

### PR webhhok

For URL type in a similar url: http://Your-Jenkins_url:port/ghprbhook/

Select "Content type" to be "application/json". Your webhook should send everything, and should be "Active". Then click on "Add webhook". Your second webhook is ready.

If you go back to "Settings/Webhooks" you should see your two webhook. If both of them are up and running there should be a green tick next to it.

You set up everything, and it should run perfectly. 

## Creating Elastic Beanstalk application, and enviroment for pipeline.

