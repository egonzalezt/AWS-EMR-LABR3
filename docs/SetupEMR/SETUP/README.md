# AWS EMR SETUP

This is a basic setup to initialice AWS EMR, first go to AWS Console and search EMR. 

## Before Start

EMR requires a keypair to access to Master/Slave for that reason it is required to [Setup KeyPair](https://github.com/egonzalezt/AWS-EMR-LABR3/blob/b9f30aa44a700c3518022f6b2e2eae861ae674e0/KeyPair/README.md)

## Software and Steps

![image](https://user-images.githubusercontent.com/53051438/170106339-46552b4a-4936-4a0b-9774-3c3ff2cb054a.png)

Then create a new cluster with `EMR-6.3.1` with that version choose these Software
* Hadoop
* JupyterHub
* Hive
* Sqoop
* Zeppelin
* Tez
* JupyterEnterpriseGateway
* Hue
* Spark
* Livy
* HCatalog

![image](https://user-images.githubusercontent.com/53051438/170106812-3f788581-fcd8-4c6d-81c8-604c542ed905.png)

### Edit Software 

on edit software settings set the persistency bucket AWS S3 for this step please follow [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html)

```json
[
    {
        "Classification": "jupyter-s3-conf",
        "Properties": {
            "s3.persistence.enabled": "true",
            "s3.persistence.bucket": "YourBucketName"
        }
    }
]
```
set this json (modified by you) on the input text, then go to next and set the other settings by default 

## Hardware

Leave this options by default

![image](https://user-images.githubusercontent.com/53051438/170107900-c7ed3c29-f29c-4db6-8248-ce70499ff1f4.png)

### Cluster Nodes

![image](https://user-images.githubusercontent.com/53051438/170108010-e3485538-00e3-4828-8805-65d3df990612.png)

for Master and core choose M4.xlarge and set Spot to reduce costs, this settings is set to reduce costs on AWS EDUCATE ACCOUNT also it cannot have access to create M5 machines

![image](https://user-images.githubusercontent.com/53051438/170108469-d8206a2c-fa1b-40c9-b8b7-27465043e155.png)

### Auto-Termination

Clusters consume a lot of credits for that reason the cluster terminate if there is an inactivity of 1 hour

### Volume

Set a volume of 20gb of storage it is no necesary more store for this activity.

## General Cluster Settings

![image](https://user-images.githubusercontent.com/53051438/170108667-5c1941bf-969b-4288-96c3-6d2f883f9acc.png)

## Security

### Create Key Pair
[Setup KeyPair](https://github.com/egonzalezt/AWS-EMR-LABR3/blob/b9f30aa44a700c3518022f6b2e2eae861ae674e0/KeyPair/README.md)

### Security Options

On your EMR setup on Security Options choose your KeyPair

![image](https://user-images.githubusercontent.com/53051438/170110183-aa51ff20-715e-4e8b-b5aa-901978e2e369.png)

## End Setup

When everything is done you need to wait about `25 Minutes`

![image](https://user-images.githubusercontent.com/53051438/170110429-ae1b18a8-c234-4dbe-bfae-4c93e142cb6e.png)

Cluster Done 

![image](https://user-images.githubusercontent.com/53051438/170110492-09972227-7e3d-4f45-ba41-104e92d1772e.png)

## Final Setps

### Setup Security Group

[Security Group Setup](https://github.com/egonzalezt/AWS-EMR-LABR3/blob/92d9a93b37bd41fb3eefdd61504eb5cee0ad6553/SecurityGroups/README.md)

### Create Bucket (AWS S3)

[Bucket Setup](https://github.com/egonzalezt/AWS-EMR-LABR3/blob/9fa40b4feb3a91552d16bb259ccea97c3a1cd5f1/Buckets/README.md)