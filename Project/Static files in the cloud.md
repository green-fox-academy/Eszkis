# Static files in the cloud

You need to log in to AWS, and go to services. Here you need to find S3, by looking for it, or by write it into the search bar.

## Create S3 bucket

Here click on the "+ Create bucket" to start the process. 

### Name and Region

Here you need to give a name to your bucket, that is unique across all existing bucket name in the AWS. You can choose a region. I recomend your own region. If you have an existing bucket, you can copy it's setting to the new bucket.

### Configurate options

Basic configuration is good enough for basic bucket setup.

### Set permissions

In "Manage public access control lists (ACLs)" check out both box, to be false.

### Rewiev

You can look through the setting, to check everything. 

## Upload file

After bucket is created, find it, and click on it's name in the list. Click on the 'Upload' button to start the upload process.

### Select file

Drag and dropp, or select specific file from your pc, then click on 'Next'.

### Set permissions

Here change "Manage public permissions" to "Grant public read access to this object(s)", then click on "Next".

### Set properties

Use default setup.

### Rewiev

You can look through the setting, to check everything. If everything is fine click on "Upload", and you are finished.

## Properties

Go to properties, and click on "Static website hosting", to start to set up your static site.
Here select "Use this bucket to host a website", and fill the field like the example. If everything is filled, click on "Save". Right now your static site is running and you can check it in the link, you find under "Static website hosting"