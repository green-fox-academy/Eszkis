"use strict"
const aws = require("@pulumi/aws");

let size = "t2.micro";     // t2.micro is available in the AWS free tier
let ami  = "ami-0ebe657bc328d4e82"; // AMI for Amazon Linux in us-east-1 (Virginia)
let userData=`#cloud-boothook
#!/bin/bashv
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
sudo yum install -y git
git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git
cd malachite_ops_adam_ec2
npm install
npm install pm2 -g
echo start
pm2 start hello.js
`;

let group = new aws.ec2.SecurityGroup("ec2-allow-ssh", { 
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 9005, toPort: 9005, cidrBlocks: ["0.0.0.0/0"] },
    ],
    egress:[
      { fromPort: 22, toPort: 22, protocol: "tcp", cidrBlocks: ["0.0.0.0/0"] },
      { fromPort: 9005, toPort: 9005, protocol: "tcp", cidrBlocks: ["0.0.0.0/0"] },
    ],
});

let server = new aws.ec2.Instance("webserver-www", {
    instanceType: size,
    securityGroups: [ group.name ], // reference the security group resource above
    ami: ami,
    tags: {"Name":"HelloWorld"},
    userData: userData,
    keyName: "megalotis-devops"
});

exports.publicIp = server.publicIp;
exports.publicHostName = server.publicDns;