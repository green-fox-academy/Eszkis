resource "aws_instance" "staging" {
  ami = "${var.ami_id[0]}"
  instance_type = "t2.micro"
  key_name = "${var.ami_key_pair_name}"
  tags = {
    Name ="staging"
  }
  connection {
   type = "ssh" 
   user = "ec2-user"
   private_key = "${file("./test1.pem")}"
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
  }
} 