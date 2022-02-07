"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4035],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},8433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=n(4695),p=["components"],o={title:"POST punishment/issue",description:"Issues a punishment to a user.",sidebar_label:"Issue a punishment",slug:"issue"},u='<Highlight color="',l={unversionedId:"api/punishment/issue",id:"api/punishment/issue",title:"POST punishment/issue",description:"Issues a punishment to a user.",source:"@site/docs/api/punishment/issue.mdx",sourceDirName:"api/punishment",slug:"/api/punishment/issue",permalink:"/docs/api/punishment/issue",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/punishment/issue.mdx",tags:[],version:"current",frontMatter:{title:"POST punishment/issue",description:"Issues a punishment to a user.",sidebar_label:"Issue a punishment",slug:"issue"},sidebar:"tutorialSidebar",previous:{title:"Delete a punishment",permalink:"/docs/api/punishment/delete"},next:{title:"Get the latest punishments",permalink:"/docs/api/punishment/latest"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-punishmentissue"},(0,i.kt)(s.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," punishment/issue"),(0,i.kt)("p",null,"Issues a punishment to a user."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"playerUsername")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Username of the punished user."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"staffUsername")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Username of the punishing Staff Member."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"platform")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify the platform to be punished from (server/discord)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Type of punishment to issue (warn/kick/tempBan/ban/ipBan)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"length")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The length of the punishment (if applicable)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reason")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Reason for the punishement."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))}d.isMDXComponent=!0}}]);