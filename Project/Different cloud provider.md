# Different cloud provider (Google Cloud)

## Compute Engine

It is simmilar to AWS's EB and EC2 service. To start setting it up click on the "Navigation menu" on the top left corner. (3 horizontal line) Find "Compute Engine" on the pop up bar. You may need to scroll down a bit.

<img src="./Images/Compute Engine.png">

Move you mouse over "Compute Engine", then a new bar will show up. Find "VM instances" and click on it to start the setup. You should see a similar site.

<img src="./Images/VM creation.png">

Here you can choose to Create, Import, or Take a quickstart. To select specification click on "Create". On the next page you can set every parameter for your VM similar like in AWS.

## App Engine



## Cloud SQL

You can find "Cloud Storage" in the "STORAGE" section of the "Navigation menu"
It is simmilar to AWS's RDS service. To start your "Cloud SQL" you can "Create instance", or "Migrate data". On clicking on the "Create instance" you can choose what kind of DB engine would you like to use. After DB engine selection you need to give the following parameter: <br/>
- Instance ID <br/>
- Root password(can select not to give, or to generate it)<br/>
- Location with Region, and Zone<br/>
- DB version<br/>
- Configuration options is optional<br/>

After everything is given you cn click on "Create", and the creation process will start. It may take a few minutes.

After creation is finished, you cn click on the instance, and check every deail about it. Google Cloud have documentation how to connenct to your DBs.

## Cloud Storage

You can find "Cloud Storage" in the "STORAGE" section of the "Navigation menu"
It is simmilar to AWS's S3 bucket service. You can create your own bucket, or click on Take a quickstart to make a bucket with default settings. 
You can set name, Default storae class( Multi-regional, Regional, Nearline, Coldline), Location depanding on Default storae class, and Access control model, and some advanced settings. In the end Google Cloud will show you the cost. After clicking on the create button, you can upload files through site, or with console.