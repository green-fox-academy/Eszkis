# Continuous Integration/Continuos Delivery

## Prerequisites

AWS IAM user with the following permissions:<br/>
- AmazonRDSFullAccess<br/>
- AmazonEC2FullAccess<br/>
- AmazonS3FullAccess<br/>
- AWSCodeDeployFullAccess<br/>
- AWSElasticBeanstalkFullAccess<br/>
- AmazonRDSDataFullAccess<br/>
- AmazonEC2ContainerServiceFullAccess<br/>

You will also need the following: Jenkins, Jenkins credentials for AWS IAM user, and for GitHub GitHub repo.

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

You need to log in to AWS, and go to services. Here you need to find S3, by looking for it, or by write it into the search bar.
On the top right corner you can schoose the region, by clicking on the city, and select a different one.

### Create application

After you selected the region, click on "Create New Application", to start the process. You have to add a name to your application. Everything else is optional. After filling out everything click on "Create".

### Create enviroment

After application is created you will see a grey button with "Actions" title. Click on it and select "Create enviroment". Here select "Web server environment", and click on "Select".
On the next page you need to give an "Environment name" and a "Domain". Both have to be unique. You can check it by clicking on the "Check availability" button. After that you have to scroll down and select "Docker" platform. 
After that you can upload your starting server's file, by make a zip file from them, and select "Upload your code" on the site.
Then click on "Create enviroment", and AWS will start the process. It will take minutes to make. After the server is running, check the "Running Version", because you will need it later.

## Create Jenkinsfile

```
environment {
  registryDocker = 'example/test_repo'
  registryCredentialDocker = 'example-docker'
  dockerImage = ''
}
```
Here you have to write your Docker's repo name, and your Jenkins's docker credentials.

```
stage('Run basic test') {
  post {
    always {
      echo 'Test is finished'
    }
    success {
      echo 'Test is executed succesfully'
    }
    failure {
      echo 'Test is execution failed'
    }
  }
  steps {
    sh 'node basicTest.js'
  }
}
```

In this stage you run you basic test. You will always see the result in the console, depending on the test's result.

```
stage('build image') {
  when {
    branch 'master'
  }
  steps {
    script {
      dockerImage = docker.build registryDocker + ":$BUILD_NUMBER"
    }
  }
}
```
The whole process will only wun on the master branch. Here Jenkins will build your image from the files in your repo, using the dockerfile. The tag wil be the build number.

```
stage('push image') {
  when {
    branch 'master'
  }
  steps {
    script {
      docker.withRegistry('',registryCredentialDocker){
        dockerImage.push()
        dockerImage.push('latest')
      }
    }
  }
}
```
The whole process will only wun on the master branch. Here Jenkins will push your image to DockerHub, and also overwrite the latest image. It will use your credentials from Jenkins's credentials database.

```
stage('Remove created image from server') {
  when {
    branch 'master'
  }
  steps {
    echo '====++++Remove created image from server++++===='
    sh 'docker rmi $registryDocker:$BUILD_NUMBER'
  }
}
```
The whole process will only wun on the master branch. Jenkins removes the image you created, so it will not take memory from your machine.

```
stage('Uploading image to EBS') {
  agent any
  when {
    branch 'master'
  }
  steps{
    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'example-IAM-ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
      sh 'pip install awsebcli --upgrade --user'
      sh 'eb deploy example-enviroment --version envirment's-verison'
    }
  }
}
```
The whole process will only wun on the master branch. This stage will deploy your files to the Elastic Beanstalk server you created earlier.

Whole file is here for easy copy:
```
pipeline {
  environment {
    registryDocker = 'eszkis/test_repo'
    registryCredentialDocker = 'eszkis-docker'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Run basic test') {
      post {
        always {
          echo 'Test is finished'
        }

        success {
          echo 'Test is executed succesfully'
        }

        failure {
          echo 'Test is execution failed'
        }
      }
      steps {
        sh 'node AnagramTest.js'
      }
    }
    stage('build image') {
      when {
        branch 'master'
      }
      steps {
        script {
          dockerImage = docker.build registryDocker + ":$BUILD_NUMBER"
        }
      }
    }
    stage('push image') {
      when {
        branch 'master'
      }
      steps {
        script {
          docker.withRegistry('',registryCredentialDocker){
            dockerImage.push()
            dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove created image from server') {
      when {
        branch 'master'
      }
      steps {
        echo '====++++Remove created image from server++++===='
        sh 'docker rmi $registryDocker:$BUILD_NUMBER'
      }
    }
    stage('Uploading image to EBS') {
      agent any
      when {
        branch 'master'
      }
      steps{
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'eszkis-IAM', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
          sh 'pip install awsebcli --upgrade --user'
          sh 'echo test'
          sh 'eb deploy Multibranch2-env --version multibranch2-source'
        }
      }
    }
  }
}
```