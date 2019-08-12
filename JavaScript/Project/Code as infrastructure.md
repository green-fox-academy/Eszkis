# Code as infrastructure

## Prerequisites

AWS IAM user with the following permissions:<br/>
- AmazonEC2FullAccess<br/>

AWS EC2 Key pairs, and the associated example.pem file

You will need terraform on your PC/laptop also. In the following [link](https://github.com/hashicorp/terraform/blob/master/website/intro/getting-started/install.html.markdown) you can find instructions, how to install terraform.

You will need a web application. Later on we will use a basic web application, that print out "Hello World" to the web site.

## Creating terraform files

You need an empty folder to start your work. For this example you will need 3 .tf file(connections.tf, variables.tf, terraform.tf), and the example.pem file. 

### variables.tf

In this file we will define some variable, so later it is easier to change some parameter. The file should look like this.

```
variable "ami_id_example" {
  default = ["ami-0ebe657bc328d4e82"]
}
variable "ami_key_pair_name_example" { 
  default ="example_key_pair_name"
}
variable "access_key_example" {
  default = "exampleKLBADS65ASFKBexample"
}
variable "secret_key_example" {
  default = "exampleBjkasdboexampleAnlafnsajfexample"
}
```

ami_id: you can find some ID in [this](https://cloud-images.ubuntu.com/locator/ec2/) site. The example id is usuable for now.
ami_key_pair_name: name of the key pair
access_key: AMI user's access key
secret_key AMI user's secret key

### Connections.tf

This file define where to connect, an what access key, and secret key to use. For easy change we use parameters, that is defined in variables.tf.

```
provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region = "eu-central-1"
}
```

### terraform.tf

This file take care of setting up the EC2  instances. 

```
resource "aws_instance" "staging" {
  ami = "${var.ami_id[0]}"
  instance_type = "t2.micro"
  key_name = "${var.ami_key_pair_name}"
  tags = {
    Name ="staging"
  }
   provisioner "remote-exec" {
    inline = [
      "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash",
      ". ~/.nvm/nvm.sh",
      "nvm install 4.4.5",
      "sudo yum install -y git",
      "git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git",
      "cd malachite_ops_adam_ec2",
      "npm install",
      "npm install pm2 -g",
      "echo start",
      "pm2 start hello.js"
    ]
  connection {
   type = "ssh" 
   user = "ec2-user"
   private_key = "${file("./example.pem")}"
  }
  }
} 
resource "aws_instance" "Dev" {
  ami = "${var.ami_id[0]}"
  instance_type = "t2.micro"
  key_name = "${var.ami_key_pair_name}"
  tags = {
    Name ="Dev"
  }
   provisioner "remote-exec" {
    inline = [
      "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash",
      ". ~/.nvm/nvm.sh",
      "nvm install 4.4.5",
      "sudo yum install -y git",
      "git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git",
      "cd malachite_ops_adam_ec2",
      "npm install",
      "npm install pm2 -g",
      "echo start",
      "pm2 start hello.js"
    ]
  connection {
   type = "ssh" 
   user = "ec2-user"
   private_key = "${file("./example.pem")}"
  }
  }
} 
resource "aws_instance" "Production" {
  ami = "${var.ami_id[0]}"
  instance_type = "t2.micro"
  key_name = "${var.ami_key_pair_name}"
  tags = {
    Name ="Production"
  }
   provisioner "remote-exec" {
    inline = [
      "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash",
      ". ~/.nvm/nvm.sh",
      "nvm install 4.4.5",
      "sudo yum install -y git",
      "git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git",
      "cd malachite_ops_adam_ec2",
      "npm install",
      "npm install pm2 -g",
      "echo start",
      "pm2 start hello.js"
    ]
  connection {
   type = "ssh" 
   user = "ec2-user"
   private_key = "${file("./example.pem")}"
  }
  }
} 
```

## Run tf files

To create the EC2 instances first run the following code, to let the system check for error.

``` terraform plan```

This code will check for error. It you get back error, check the code, before run the next line.

``` terraform apply```

This code start the process to create the instances. You will need to type "yes" into the console to confirm the process. It could take a few minutes to finish it. To check if it works, go to AWS's site end check the EC2 instances. Go to one of the instances's url and use 9005 port. You should see "Hello Word" on the screen.

To terminate all instances type in the following code.

``` terraform destroy```

You will need to type yes here also, for the same reason.
