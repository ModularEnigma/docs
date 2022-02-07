"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6135],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},1221:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4695),s=["components"],c={title:"POST vote/cast",description:"Process a vote from Votifier.",sidebar_label:"Cast a vote",slug:"cast"},p='<Highlight color="',l={unversionedId:"api/vote/cast",id:"api/vote/cast",title:"POST vote/cast",description:"Process a vote from Votifier.",source:"@site/docs/api/vote/cast.mdx",sourceDirName:"api/vote",slug:"/api/vote/cast",permalink:"/docs/api/vote/cast",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/vote/cast.mdx",tags:[],version:"current",frontMatter:{title:"POST vote/cast",description:"Process a vote from Votifier.",sidebar_label:"Cast a vote",slug:"cast"},sidebar:"tutorialSidebar",previous:{title:"Link with Youtube",permalink:"/docs/api/user/profile/$username/authenticate/youtube"},next:{title:"Get monthly votes",permalink:"/docs/api/vote/get"}},u=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-votecast"},(0,o.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," vote/cast"),(0,o.kt)("p",null,"Process a vote from Votifier."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dateTime")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The date and time for the vote."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"service")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The website that the user cast the vote on."),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))}d.isMDXComponent=!0}}]);