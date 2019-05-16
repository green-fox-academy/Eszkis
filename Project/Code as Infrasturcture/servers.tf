resource "aws_instance" "test-ec2-instance" {
  ami = "${var.ami_id[0]}"
  instance_type = "t2.micro"
  key_name = "${var.ami_key_pair_name}"
  //security_groups = ["${aws_security_group.ingress-all-test.id}"]
tags {
    Name = "${var.ami_name}"
  }
subnet_id = "${aws_subnet.subnet-uno.id}"
/* provisioner "remote-exec" {
    inline = [
      "echo csá"
    ]
} */
/* 
provisioner "remote-exec" {
    inline = [
      "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash",
      ". ~/.nvm/nvm.sh",
      "nvm install 4.4.5",
      "sudo yum install -y git",
      "git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git",
      "cd malachite_ops_adam_ec2",
      "npm install",
      "node hello.js" 
    ]
connection {
   type = "ssh" 
   user = "TF_user"
   private_key = "${file("~/Greenfox/Eszkis/Project/Code as Infrasturcture/test1.pem")}"
  }
  } */
}
