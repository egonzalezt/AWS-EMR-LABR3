"use strict";(self.webpackChunkaws_emr_labr_3=self.webpackChunkaws_emr_labr_3||[]).push([[1962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],u={author:"esteban",tags:["Storage","S3"]},s="Buckets Setup",i={unversionedId:"SetupEMR/Buckets/README",id:"SetupEMR/Buckets/README",title:"Buckets Setup",description:"On AWS console go search S3 and choose the option show in the picture",source:"@site/docs/SetupEMR/Buckets/README.md",sourceDirName:"SetupEMR/Buckets",slug:"/SetupEMR/Buckets/",permalink:"/AWS-EMR-LABR3/docs/SetupEMR/Buckets/",draft:!1,editUrl:"https://github.com/egonzalezt/AWS-EMR-LABR3/tree/main/docs/SetupEMR/Buckets/README.md",tags:[{label:"Storage",permalink:"/AWS-EMR-LABR3/docs/tags/storage"},{label:"S3",permalink:"/AWS-EMR-LABR3/docs/tags/s-3"}],version:"current",frontMatter:{author:"esteban",tags:["Storage","S3"]},sidebar:"tutorialSidebar",previous:{title:"Buckets",permalink:"/AWS-EMR-LABR3/docs/category/buckets"},next:{title:"Demo",permalink:"/AWS-EMR-LABR3/docs/category/demo"}},p={},l=[{value:"Create new S3",id:"create-new-s3",level:2},{value:"Set Name",id:"set-name",level:3},{value:"Options",id:"options",level:3}],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buckets-setup"},"Buckets Setup"),(0,o.kt)("p",null,"On AWS console go search S3 and choose the option show in the picture\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170110703-d120113a-b56c-4897-8de5-603f0ba0ccdd.png",alt:"image"})),(0,o.kt)("h2",{id:"create-new-s3"},"Create new S3"),(0,o.kt)("p",null,"Choose Create Bucket option"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170110789-39e423a7-4866-4b47-96b7-402a5c99fd8d.png",alt:"image"})),(0,o.kt)("h3",{id:"set-name"},"Set Name"),(0,o.kt)("p",null,"The name of your bucket must be the same the you set on (EMR S3)","[https://github.com/egonzalezt/AWS-EMR-LABR3/tree/b1cb3cc018e523bffa9d7aa45fdd0b36e75026f1/SETUP#edit-software]"),(0,o.kt)("p",null,"please follow AWS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html"},"Bucket naming rules")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"Leave the other options as default"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111026-2a93b962-4875-4b45-b6b2-dee8ad5d07b2.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111103-53361f16-a459-4961-899d-4f9e4d2d88d7.png",alt:"image"})),(0,o.kt)("p",null,"Finally create Bucket "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111533-02d65bdc-dbeb-4f9d-8c7b-7565ac3b7c5c.png",alt:"image"})))}d.isMDXComponent=!0}}]);