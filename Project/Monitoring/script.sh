#!/bin/bash
# My first script

sudo yum update -y
sudo yum install -y docker
sudo usermod -aG docker ec2-user
sudo service docker start
sudo sysctl -w vm.max_map_count=262144
sudo docker pull docker.elastic.co/elasticsearch/elasticsearch:7.1.0
sudo docker run -d -p 9200:9200 -p 9300:9300 -it -m 2g -h elasticsearch --name elasticsearch docker.elastic.co/elasticsearch/elasticsearch:7.1.0
#sudo docker pull docker.elastic.co/kibana/kibana:7.0.1
#sudo docker run -p 5601:5601 -it --name kibana --link elasticsearch:elasticsearch docker.elastic.co/kibana/kibana:7.0.1