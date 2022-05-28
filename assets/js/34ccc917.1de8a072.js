"use strict";(self.webpackChunkaws_emr_labr_3=self.webpackChunkaws_emr_labr_3||[]).push([[7528],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,g=m["".concat(i,".").concat(d)]||m[d]||l[d]||s;return a?n.createElement(g,c(c({ref:t},p),{},{components:a})):n.createElement(g,c({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<s;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1566:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),c=["components"],o={author:"esteban",tags:["Demo","ApacheTools"]},i="DEMO",u={unversionedId:"SetupEMR/Demo/README",id:"SetupEMR/Demo/README",title:"DEMO",description:"On this section we'll explore the different applications enabled on the EMR setup",source:"@site/docs/SetupEMR/Demo/README.md",sourceDirName:"SetupEMR/Demo",slug:"/SetupEMR/Demo/",permalink:"/AWS-EMR-LABR3/docs/SetupEMR/Demo/",draft:!1,editUrl:"https://github.com/egonzalezt/AWS-EMR-LABR3/tree/main/docs/SetupEMR/Demo/README.md",tags:[{label:"Demo",permalink:"/AWS-EMR-LABR3/docs/tags/demo"},{label:"ApacheTools",permalink:"/AWS-EMR-LABR3/docs/tags/apache-tools"}],version:"current",frontMatter:{author:"esteban",tags:["Demo","ApacheTools"]},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/AWS-EMR-LABR3/docs/category/demo"}},p={},l=[{value:"Accessing to EMR",id:"accessing-to-emr",level:2},{value:"Apache HUE",id:"apache-hue",level:2},{value:"Access to HUE",id:"access-to-hue",level:3},{value:"Create User",id:"create-user",level:3},{value:"Hue Dashboard",id:"hue-dashboard",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"Bucket",id:"bucket",level:4},{value:"JupyterHub",id:"jupyterhub",level:2},{value:"Apache Zeppelin",id:"apache-zeppelin",level:2}],m={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"demo"},"DEMO"),(0,s.kt)("p",null,"On this section we'll explore the different applications enabled on the EMR setup"),(0,s.kt)("h2",{id:"accessing-to-emr"},"Accessing to EMR"),(0,s.kt)("p",null,"On your cluster Dashboard go to Master Public DNS and access to the node\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170118423-16b7c146-c9f2-4e04-8a6c-419ebc813e47.png",alt:"connect"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170118465-d62890db-3ce6-4c17-a3fa-2a8f9e46eecb.png",alt:"image"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170118482-88a54991-ff32-4df9-b6eb-e63a4ad02635.png",alt:"image"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170118493-cd8abeab-0517-4bb5-a990-b2d2e36d7ff0.png",alt:"image"})),(0,s.kt)("h2",{id:"apache-hue"},"Apache HUE"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://gethue.com/"},"Official WebPage")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'"Hue is a web-based interactive query editor that enables you to interact with data warehouses. For example, the following image shows a graphic representation of Impala SQL query results that you can generate with Hue:"'),"\nTaken from ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/hue.html"},"Introduction to Hue")),(0,s.kt)("h3",{id:"access-to-hue"},"Access to HUE"),(0,s.kt)("p",null,"Go to your cluster and choose ",(0,s.kt)("inlineCode",{parentName:"p"},"Application user Interfaces")," and access to HUE link"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170113990-027a21c8-1a0b-4036-acc8-8c30eac015be.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114052-cf1f5922-5bfe-421d-af9a-145ab06b3b73.png",alt:"image"})),(0,s.kt)("h3",{id:"create-user"},"Create User"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114146-3bf383a2-7858-47c8-b0f1-97b258a910ed.png",alt:"image"})),(0,s.kt)("h3",{id:"hue-dashboard"},"Hue Dashboard"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114193-7cba0737-552a-4646-9b19-46ee6f3db816.png",alt:"image"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114209-bb63ad4c-dbfd-4aff-90c5-d3a47676f4be.png",alt:"image"})),(0,s.kt)("h4",{id:"hdfs"},"HDFS"),(0,s.kt)("p",null,"On HDFS view take care with the data that you save because these data is not persistent because you terminate the cluster and all your data is gone"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114225-eae07912-13f9-4e6d-8144-5b3fc7a0df87.png",alt:"image"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114231-99035bc8-acb2-4598-be0f-0a61af9206b9.png",alt:"image"})),(0,s.kt)("h4",{id:"bucket"},"Bucket"),(0,s.kt)("p",null,"unlike HDFS, Buckets can persist your data so here you can store your datalakes, processed data. if you terminate your cluster, this data is not deleted."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170114645-ad3b6805-8c4a-4fc3-a00e-13f710eed477.png",alt:"Bucket"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170115110-8a48fda0-f39e-48dc-81d7-0ec0cee348e0.png",alt:"image"})),(0,s.kt)("h2",{id:"jupyterhub"},"JupyterHub"),(0,s.kt)("p",null,"Get your jupyter Link and visit it (it may say that the connection it's not secure just access there is no danger) "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170115368-0291dc34-fc18-42ac-9b35-ba74992f8321.png",alt:"image"})),(0,s.kt)("p",null,"Over there it requests autenthication "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.amazonaws.cn/en_us/emr/latest/ReleaseGuide/emr-jupyterhub-user-access.html"},"Login With default user")),(0,s.kt)("p",null,"for version 6.3.1 default user is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"UserName: ",(0,s.kt)("inlineCode",{parentName:"li"},"jovyan")),(0,s.kt)("li",{parentName:"ul"},"PassWord: ",(0,s.kt)("inlineCode",{parentName:"li"},"jupyter"))),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170115457-df491af6-43ad-41d2-b461-294adda1c162.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170115837-04274525-7b2d-466d-83ec-844aa66a5958.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170116163-2066cd0f-efdd-4682-a0e3-55835f8f9d18.png",alt:"JupyterNotebook"})),(0,s.kt)("h2",{id:"apache-zeppelin"},"Apache Zeppelin"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://zeppelin.apache.org/"},"Official Website")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'"Web-based notebook that enables data-driven,interactive data analytics and collaborative documents with SQL, Scala, Python, R and more."')),(0,s.kt)("p",null,"Get your Zeppelin Link and visit it "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170116285-076aff81-2e93-4087-bd61-af56b32d5525.png",alt:"image"})),(0,s.kt)("p",null,"Unlike JupyterHub, Zeppelin doesn't require any user to access."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170116377-c1207c0d-3e84-46cd-8dff-aab05e67d004.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170116404-a3c2c1ae-4d7b-4152-a0c4-b5c2aa7aa00c.png",alt:"image"})))}d.isMDXComponent=!0}}]);