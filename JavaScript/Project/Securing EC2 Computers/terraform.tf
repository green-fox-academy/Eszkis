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