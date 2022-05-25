"use strict";(self.webpackChunkaws_emr_labr_3=self.webpackChunkaws_emr_labr_3||[]).push([[335],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],u={},i="Buckets Setup",s={unversionedId:"Buckets/README",id:"Buckets/README",title:"Buckets Setup",description:"On AWS console go search S3 and choose the option show in the picture",source:"@site/docs/Buckets/README.md",sourceDirName:"Buckets",slug:"/Buckets/",permalink:"/AWS-EMR-LABR3/docs/Buckets/",draft:!1,editUrl:"https://github.com/egonzalezt/AWS-EMR-LABR3/tree/main/docs/Buckets/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buckets",permalink:"/AWS-EMR-LABR3/docs/category/buckets"},next:{title:"Demo",permalink:"/AWS-EMR-LABR3/docs/category/demo"}},p={},l=[{value:"Create new S3",id:"create-new-s3",level:2},{value:"Set Name",id:"set-name",level:3},{value:"Options",id:"options",level:3}],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buckets-setup"},"Buckets Setup"),(0,a.kt)("p",null,"On AWS console go search S3 and choose the option show in the picture\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170110703-d120113a-b56c-4897-8de5-603f0ba0ccdd.png",alt:"image"})),(0,a.kt)("h2",{id:"create-new-s3"},"Create new S3"),(0,a.kt)("p",null,"Choose Create Bucket option"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170110789-39e423a7-4866-4b47-96b7-402a5c99fd8d.png",alt:"image"})),(0,a.kt)("h3",{id:"set-name"},"Set Name"),(0,a.kt)("p",null,"The name of your bucket must be the same the you set on (EMR S3)","[https://github.com/egonzalezt/AWS-EMR-LABR3/tree/b1cb3cc018e523bffa9d7aa45fdd0b36e75026f1/SETUP#edit-software]"),(0,a.kt)("p",null,"please follow AWS ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html"},"Bucket naming rules")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"Leave the other options as default"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111026-2a93b962-4875-4b45-b6b2-dee8ad5d07b2.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111103-53361f16-a459-4961-899d-4f9e4d2d88d7.png",alt:"image"})),(0,a.kt)("p",null,"Finally create Bucket "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53051438/170111533-02d65bdc-dbeb-4f9d-8c7b-7565ac3b7c5c.png",alt:"image"})))}f.isMDXComponent=!0}}]);