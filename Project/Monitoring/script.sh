#!/bin/bash
# My first script

sudo yum update -y
sudo yum install -y docker
sudo usermod -aG docker ec2-user
sudo service docker start
sudo docker pull docker.elastic.co/kibana/kibana:7.0.1
sudo docker run -p 5601:5601 -it --name kibana docker.elastic.co/kibana/kibana:7.0.1