# Deploying NodeJS to EBS via AWSCLI
## Install EB CLI to your computer

The following AWS site helps you to install EB CLI to your computer. It has a complete solution for Window, macOS, Linux, or even virtualenv. To fisit the site clink on the [link](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)

## Require your access id and secret key from AWS

Log in to your account in aws, then go to IAM setup page. It should look like this:

<img src='Images/aws_IAM_page.png'>

Here click on "Activate MFA on your root account" and then to "Manage MFA". Here click on "Access keys (access key ID and secret access key)" to show your access key. If you don't have one create a new one.  From here download your access id and secret key.

## Create a foldel for your EB, and start setting up your application

Useing your console, create a folder in you computer, which will be used for EB. 
After the folder is created, you need to enter into it. Using the command line you need to setup your new EB application by entering the following command:

``` eb init ```

