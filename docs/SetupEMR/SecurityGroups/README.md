# Setup

Go to AWS EC2 console then choose Security Groups and choose `ElasticMapReduce-master` Security Group

## Edit Inbound rules 

add new rules depend on which services do you want to access 

### EMR Services

Go to your cluster and view the `Application user Interfaces`

![image](https://user-images.githubusercontent.com/53051438/170112577-1f63a328-aaea-4d75-be6a-957ce3434e91.png)

On the end of each link there is the port that you need to add on the inbound rules

**Required Ports**
These ports are anywhere ipv4

* 8888
* 8890
* 9443
* 22

![image](https://user-images.githubusercontent.com/53051438/170112804-424b5fa8-4372-4f83-9810-24e6d8e09674.png)

And save the changes

## Note

This setup is only required for the Master Node

## EMR SETUP 

Go to your cluster and choose the `Block Public Access` and setup the same ports that you give to the Inbound Rules on the Security Group

![image](https://user-images.githubusercontent.com/53051438/170113185-b99e0460-aedc-42c7-9972-f1abc788ae6a.png)

### Note

You can also choose Block Public Access to Off and cluster accepts all the traffic

![image](https://user-images.githubusercontent.com/53051438/170113318-7a78b592-3c6a-421e-8977-65111af6e631.png)

