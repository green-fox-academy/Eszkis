provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region = "eu-central-1"
}
resource "aws_security_group" "ec2-allow-ssh" {
  name= "ec2-allow-ssh"

  ingress{
    from_port=22
    to_port=22

    protocol = "tcp"
    cidr_blocks= ["0.0.0.0/0"]
  }

  ingress{
    from_port=9005
    to_port=9005

    protocol = "tcp"
    cidr_blocks= ["0.0.0.0/0"]
  }

  ingress{
    from_port=80
    to_port=80

    protocol = "tcp"
    cidr_blocks= ["0.0.0.0/0"]
  }

  egress{
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}