# HDFS

## Using HDFS CLI

### Access to your cluster via SSH

![image](https://user-images.githubusercontent.com/53051438/170835749-b39a4d30-70ad-4c0f-b94f-7f2e0b97976c.png)

```powershell
ssh -i Your.pem hadoop@ec2-x-x-x-x.compute-1.amazonaws.com
```

![image](https://user-images.githubusercontent.com/53051438/170835750-daeca323-22a0-462a-b806-dc38a1928547.png)

### Use SuperUser

When you login you will see your user in this case is **hadoop**@ec2-x-x-x-x.compute-1.amazonaws.com.

with your user access as super user `sudo su - hadoop`

![image](https://user-images.githubusercontent.com/53051438/170835956-bbc09d34-7ce9-4230-b689-f04c69c04336.png)


### Create HDFS Dir

First create your dir to save your data on your HDFS

```powershell
hdfs dfs -mkdir /user/hadoop/datasets
```

### Upload Datasets

Upload the [datasets](https://github.com/ST0263/st0263-2022-1/tree/main/Big%20Data/datasets) to the master machine using scp

```powershell
sudo scp -r -i Your.pem /yourdir/datasets/ hadoop@ec2-x-x-x-x.compute-1.amazonaws.com:~/.
```

![image](https://user-images.githubusercontent.com/53051438/170836035-f1218455-4efa-4c0e-97db-ba0713e82fa6.png)

#### Upload datasets to HDFS
```powershell
hdfs dfs -copyFromLocal datasets/* /user/hadoop/datasets/
```
![image](https://user-images.githubusercontent.com/53051438/170836117-b4f92ab5-bbba-48d9-9d20-da355ed15d6d.png)

#### Check if data is saved

```powershell
hdfs dfs -ls /user/hadoop/datasets/gutenberg-small/
```

![image](https://user-images.githubusercontent.com/53051438/170836123-f0edf491-152b-49db-8a82-4432de02e3ba.png)

## Using HUE

Sign in into your hadoop hue user account and go to file browser

### Create dir

Create dir `/datasets/hadoop/onu/`

![image](https://user-images.githubusercontent.com/53051438/170836211-7609ea67-bff4-4592-9506-6009f3ddcf00.png)

#### Upload datasets

Upload datasets from the dir `datasets/onu` and upload `export-data.csv` and `hdi-data.csv`

![image](https://user-images.githubusercontent.com/53051438/170836219-01a418de-305f-4060-a060-9c62973cefe8.png)

![image](https://user-images.githubusercontent.com/53051438/170836248-24e393b7-fec4-4999-9ebe-16dec0d4c24f.png)



