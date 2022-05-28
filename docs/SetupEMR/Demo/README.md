# DEMO

On this section we'll explore the different applications enabled on the EMR setup

## Accessing to EMR

On your cluster Dashboard go to Master Public DNS and access to the node
![connect](https://user-images.githubusercontent.com/53051438/170118423-16b7c146-c9f2-4e04-8a6c-419ebc813e47.png)
![image](https://user-images.githubusercontent.com/53051438/170118465-d62890db-3ce6-4c17-a3fa-2a8f9e46eecb.png)
![image](https://user-images.githubusercontent.com/53051438/170118482-88a54991-ff32-4df9-b6eb-e63a4ad02635.png)
![image](https://user-images.githubusercontent.com/53051438/170118493-cd8abeab-0517-4bb5-a990-b2d2e36d7ff0.png)

## Apache HUE

[Official WebPage](https://gethue.com/)

_"Hue is a web-based interactive query editor that enables you to interact with data warehouses. For example, the following image shows a graphic representation of Impala SQL query results that you can generate with Hue:"_
Taken from [Introduction to Hue](https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/hue.html)

### Access to HUE

Go to your cluster and choose `Application user Interfaces` and access to HUE link

![image](https://user-images.githubusercontent.com/53051438/170113990-027a21c8-1a0b-4036-acc8-8c30eac015be.png)

![image](https://user-images.githubusercontent.com/53051438/170114052-cf1f5922-5bfe-421d-af9a-145ab06b3b73.png)

### Create User

![image](https://user-images.githubusercontent.com/53051438/170114146-3bf383a2-7858-47c8-b0f1-97b258a910ed.png)

### Hue Dashboard

![image](https://user-images.githubusercontent.com/53051438/170114193-7cba0737-552a-4646-9b19-46ee6f3db816.png)
![image](https://user-images.githubusercontent.com/53051438/170114209-bb63ad4c-dbfd-4aff-90c5-d3a47676f4be.png)

#### HDFS

On HDFS view take care with the data that you save because these data is not persistent because you terminate the cluster and all your data is gone

![image](https://user-images.githubusercontent.com/53051438/170114225-eae07912-13f9-4e6d-8144-5b3fc7a0df87.png)
![image](https://user-images.githubusercontent.com/53051438/170114231-99035bc8-acb2-4598-be0f-0a61af9206b9.png)

#### Bucket 

unlike HDFS, Buckets can persist your data so here you can store your datalakes, processed data. if you terminate your cluster, this data is not deleted.

![Bucket](https://user-images.githubusercontent.com/53051438/170114645-ad3b6805-8c4a-4fc3-a00e-13f710eed477.png)
![image](https://user-images.githubusercontent.com/53051438/170115110-8a48fda0-f39e-48dc-81d7-0ec0cee348e0.png)


## JupyterHub

Get your jupyter Link and visit it (it may say that the connection it's not secure just access there is no danger) 

![image](https://user-images.githubusercontent.com/53051438/170115368-0291dc34-fc18-42ac-9b35-ba74992f8321.png)

Over there it requests autenthication 

[Login With default user](https://docs.amazonaws.cn/en_us/emr/latest/ReleaseGuide/emr-jupyterhub-user-access.html)

for version 6.3.1 default user is:

* UserName: `jovyan`
* PassWord: `jupyter`

![image](https://user-images.githubusercontent.com/53051438/170115457-df491af6-43ad-41d2-b461-294adda1c162.png)

![image](https://user-images.githubusercontent.com/53051438/170115837-04274525-7b2d-466d-83ec-844aa66a5958.png)

![JupyterNotebook](https://user-images.githubusercontent.com/53051438/170116163-2066cd0f-efdd-4682-a0e3-55835f8f9d18.png)

## Apache Zeppelin

[Official Website](https://zeppelin.apache.org/)

_"Web-based notebook that enables data-driven,interactive data analytics and collaborative documents with SQL, Scala, Python, R and more."_

Get your Zeppelin Link and visit it 

![image](https://user-images.githubusercontent.com/53051438/170116285-076aff81-2e93-4087-bd61-af56b32d5525.png)

Unlike JupyterHub, Zeppelin doesn't require any user to access.

![image](https://user-images.githubusercontent.com/53051438/170116377-c1207c0d-3e84-46cd-8dff-aab05e67d004.png)

![image](https://user-images.githubusercontent.com/53051438/170116404-a3c2c1ae-4d7b-4152-a0c4-b5c2aa7aa00c.png)

