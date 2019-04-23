# DB in the cloud

## Create a new RDS in AWS

You have to sign in to AWS, and go to "Services". Here look up RDS, or write it in to the search bar. This will bring you to the RDS's main page. It should look like this.

<img src="Images/RDS_main.png">

## Select DB type

Here click on "Create database", then this will start a process to create an actual DB. First you have to select the type of DB you would like to setup. For the example we will set up a MYSQL DB. After you selected the type click on next, in the bottom right corner.

## Select use case

In the next page you can choose the "use case". Depending on what you going to use this DB you can choose from 3 differetn type. For now we will use "Production - Amazon Aurora". After selection click on "Next".

## Specify DB details

In the next page you can specify DB details, which mean that you can choose capacity type, DB engine verison,  DB instance class and Multi-AZ deployment. For easy setup you sould choose "Serverless" capacty type. This will scale resources based on your workload.

Next you a