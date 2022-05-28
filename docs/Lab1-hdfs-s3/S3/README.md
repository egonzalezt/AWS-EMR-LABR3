# S3

## Using Apache Hue

### Go to S3

Search S3 option on Hue dashboard

![image](https://user-images.githubusercontent.com/53051438/170836383-548567c9-d7c3-4eb0-9dc1-9b6faa9f63e3.png)

### Create dir

Go to your AWS S3 bucket and create dir `/datasets/onu`

![image](https://user-images.githubusercontent.com/53051438/170836426-b2f03952-a597-442c-92de-68a36b3a8bbe.png)

![image](https://user-images.githubusercontent.com/53051438/170836432-b92349ea-f4f8-48f6-8fce-6bee489d8cb2.png)
![image](https://user-images.githubusercontent.com/53051438/170836438-a0991c84-c181-4c73-8864-dbe25de19063.png)
![image](https://user-images.githubusercontent.com/53051438/170836450-8569e453-c6ee-446d-b235-d2b4e99aa070.png)

### Upload datasets

using [datasets](https://github.com/ST0263/st0263-2022-1/tree/main/Big%20Data/datasets) upload datasets `export-data.csv` and `hdi-data.csv`

![image](https://user-images.githubusercontent.com/53051438/170836473-7f22061f-94f9-4682-9356-61cd25a1732e.png)


## Using HDFS CLI

### Before start

You need to do [HDFS](https://github.com/egonzalezt/AWS-EMR-LABR3/blob/3f193bcecc81c833f2ed70514a10c0a8611e009d/docs/Lab1-hdfs-s3/HDFS/README.md)

### Upload to AWS S3

Hadoop uses a user command interface on your EMR master machine that you can use to upload all your datasets located on your HDFS to your S3 Bucket.
![image](https://user-images.githubusercontent.com/53051438/170836631-fc954d88-6321-4214-863c-1ce706e80beb.png)


```powershell
hadoop distcp hdfs://source_directory/Files s3a://destination_directory
```
#### Example
```powershell
hadoop distcp hdfs:/user/hadoop/datasets s3a://davesnotebooks/datasetshadoop
```
![image](https://user-images.githubusercontent.com/53051438/170836668-64dfd31d-ce85-4bc9-a86f-66507ab290cf.png)

![image](https://user-images.githubusercontent.com/53051438/170836676-58fc87d6-8067-4e7c-81f3-1bbdefabc831.png)

### Final result

![image](https://user-images.githubusercontent.com/53051438/170836690-b20f50ae-8138-4ad4-8d93-fd095d581957.png)

## Make Bucket public `ready-only`

Information provided by [AWS](https://aws.amazon.com/premiumsupport/knowledge-center/read-access-objects-s3-bucket/)

### Go to your bucket

![image](https://user-images.githubusercontent.com/53051438/170836774-0b309e43-8ad8-4344-95e7-231cecdbd737.png)

### Go to permissions

![image](https://user-images.githubusercontent.com/53051438/170836798-349a929f-4477-4511-9f2f-f2fa8f903e30.png)

Edit Block public access (bucket settings) and remove Block all public access option

![image](https://user-images.githubusercontent.com/53051438/170836880-c4ad1c55-3810-45ed-b8c7-d79aacc93147.png)
![image](https://user-images.githubusercontent.com/53051438/170836903-ce597cd8-f4f6-4c89-a478-fc73056bddb5.png)

### Go to Bucket policy
 Edit the bucket policy
 ![image](https://user-images.githubusercontent.com/53051438/170836922-95706cce-1b99-48ec-bc00-5f788a29e698.png)

### Give public access to your bucket

![image](https://user-images.githubusercontent.com/53051438/170836950-6eb4f331-ebee-40e5-bae0-667efee48cb5.png)

Add your policy rule and save config
```json 
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicAccess",
            "Principal": "*",
            "Effect": "Allow",
            "Action":["s3:GetObject"],
            "Resource":["arn:aws:s3:::davesnotebooks/*"]
        }
    ]
}
```

### Final result

### S3 URLS

* [Datasets](https://davesnotebooks.s3.us-east-1.amazonaws.com/datasets/)
* [HadoopDatasets](https://davesnotebooks.s3.us-east-1.amazonaws.com/datasetshadoop/)

#### Demo

Select one file and select copy url

![image](https://user-images.githubusercontent.com/53051438/170837055-fbfd289d-249a-4533-843a-4687ab920df5.png)

![image](https://user-images.githubusercontent.com/53051438/170837068-674489f1-bc45-4720-b175-2b06453f1362.png)

On this case url was search un incoginito mode to check if already has public access

![image](https://user-images.githubusercontent.com/53051438/170837075-26d51abf-d712-4c69-8920-3e12cd23d08c.png)

##### Hadoop Datasets

![image](https://user-images.githubusercontent.com/53051438/170837175-6550c790-5f19-4903-b9c4-3d007d43396a.png)

