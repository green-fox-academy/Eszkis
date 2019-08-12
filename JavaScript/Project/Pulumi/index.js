"use strict"
const aws = require("@pulumi/aws");

const size = "t2.micro";
const ami  = "ami-0ebe657bc328d4e82";
let userData =`#cloud-boothook
#!/bin/bash
sudo echo "Hello, World!" >> index.html
sudo nohup python -m SimpleHTTPServer 80 &`;

let group = new aws.ec2.SecurityGroup("webserver-secgrp", {
  ingress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] }
  ],
  egress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] }
  ]
});

let server = new aws.ec2.Instance("webserver-www", {
    instanceType: size,
    ami: ami,
    tags: {"Name":"HelloWorld"},
    securityGroups: [group.name],
    userData: userData,
    keyName: "megalotis-devops"
});

exports.publicIp = server.publicIp;
exports.publicHostName = server.publicDns;