# Securing EC2 Computers

## Creating EC2 instance

To make a running EC2 instance with an accessible site you need to follow the steps in [this](https://github.com/green-fox-academy/Eszkis/blob/master/Project/Code%20as%20infrastructure.md) link.

## Creating new user with password for instance

To make a new user, you need to log into the EC2 instance, that is already running. There you need to type in the following codes.

```sudo passwd test_user```

This will create a new user. You will need to type in the password 2 times. After tha password is confirmed, you need to edit the config file. To open the "sshd_config" file type in the following command.

```sudo nano /etc/ssh/sshd_config```

In the config file find "PasswordAuthentication". If you found it change the "NO" to "YES", save the file and exit. If it is already "YES" you just need to exit.

After you already in the instance's console type in the following command to reload the config file.

```sudo systemctl reload sshd```

Now everything is set. You can exit the terminal. To log into the instance oyu have to type in a similar code like this.

## Test new user

```ssh example_user@example_url.compute.amazonaws.com```

After this line the console will ask for the password. If you type in the password, then you logged into the instance with the new user. The console should look like this.

```[example_user@ip-255-255-255-255 ~]$```