#!/bin/bash
# My first script

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
sudo yum install -y git
git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git
cd malachite_ops_adam_ec2
npm install
node hello.js