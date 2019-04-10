# IAM users setup guid

## Sign in to AWS

Sign in to AWS useing the following link. You need your root email address and password.
https://aws.amazon.com/console/

After signed in successfully, press "Services" button in the top left corner. Find IAM in the "Security, Identity, & Compliance" group, or simply write "IAM" in the search bar. If you click on the found link, it should  bring you to a similar site.

<img src="Images/Security, Identity, & Compliance.png">

## Create new user

### User details
Go to users menu, clicking on "Users". It is on the left side of the site. To create a new user click on the blue "Add user" button. The button direct you to a new site, where you can start setting up the new user.
You have to add a User name. After it is given go below, and select the check box next to "AWS Management Console access". If you done both new options should pop up. Here you can set up a custom password, or you can let the system generate one for the user. Last option you can choose to make the new users, after first log in, to make a new password, or let him/her use the given password.
After this you can continue the new user set up, by clicking on the "Next:Permissions" button.

### Set permissions
In this site, you can assign permissions to the users 3 different way.
#### Add user to group
Select "Add user to group", by clicking in the button.
This way you can add the user to an existing group, or create a new group.
To select a group check the box next to it's name. If you are interested in the permissions, you can click on next to the group name to the under the  "Atteched policies"
To create new group click on the "Create group" button. In the pop up window you have to give a name to the roup, and select the policies to the group. You can seach for a policy by write it's name in the search bar. You can add a policy by check the box next to the policy name in the left. After all needed policies added to the group, click on the "Create group" button. After clicking the pop up window will disappear. The new group will be in the group list, and can be selected.
#### Copy permissions from existing user
Select "Copy permissions from existing user", by clicking in the button.
To select a user check the box next to it's name. If you are interested in the group it's in, you can click on next to the user name to the under the  "Groups"
#### Attach existing policies directly
Select "Attach existing policies directly", by clicking in the button.
You can add policies to the users the same way, we can give policies to a group.

After policies asign to the user you can continue to the next, by clicking on the "Next:Tags" button.

### Add tags
Adding tags is optional. Here you can add key, and values to the user. This helps us later to know which users what can do.
You can continue the setup, by clicking on the "Next:Rewiev" button.

### Review
This page display the choices you made during the user creation. If something is not right, you can go back by useing the "Previous" button. If everything is perfect you can finished the user creation by clicking on the "Create user" button.

### Last informations
This page displays the user name, password, and url where you can log in with it. In this page you have an option to send the log in information in email to the new user. By clicking on the "Close" button the new user creation is complete. 