resource "aws_instance" "meglotis-devops-monitoring" {
  ami = "${var.ami_id}"
  instance_type = "t2.medium"
  key_name = "${var.ami_key_pair_name}"
  security_groups=["${aws_security_group.ec2-allow-ssh.name}"]
  tags = {
    Name ="meglotis-devops-monitoring"
  }
  provisioner "local-exec" {
    command ="echo hello"
  }
  connection {
   type = "ssh" 
   user = "ec2-user"
   private_key = "${file("./megalotis-devops.pem")}"
  }
  provisioner "file" {
    source      = "script.sh"
    destination = "/tmp/script.sh"
  }
  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/script.sh",
      "/tmp/script.sh args",
    ]
  }
}