"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3793],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(v,l(l({ref:r},p),{},{components:t})):n.createElement(v,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(7462),a=t(7294),i=t(2389),l=t(9548),o=t(6010),s="tabItem_LplD";function u(e){var r,t,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),h=(0,l.lx)(b,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(r=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,a.useState)(k),O=w[0],T=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==O&&b.some((function(e){return e.value===C}))&&T(C)}var P=function(e){var r=e.currentTarget,t=x.indexOf(r),n=b[t].value;n!==O&&(E(r),T(n),null!=m&&N(m,n))},j=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==O})}))))}function p(e){var r=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(r)},e))}},4695:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.color;return n.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},r)}},319:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(4695),o=t(9877),s=t(8215),u=["components"],p={title:"POST server/create",description:"Create a server.",sidebar_label:"Create server",slug:"create",sidebar_position:58},c='<Highlight color="',d={unversionedId:"api/server/create",id:"api/server/create",title:"POST server/create",description:"Create a server.",source:"@site/docs/api/server/create.mdx",sourceDirName:"api/server",slug:"/api/server/create",permalink:"/docs/api/server/create",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/server/create.mdx",tags:[],version:"current",sidebarPosition:58,frontMatter:{title:"POST server/create",description:"Create a server.",sidebar_label:"Create server",slug:"create",sidebar_position:58},sidebar:"tutorialSidebar",previous:{title:"Get servers",permalink:"/docs/api/server/get"},next:{title:"Edit server",permalink:"/docs/api/server/edit"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2}],v={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-servercreate"},(0,i.kt)(l.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"server/create")),(0,i.kt)("p",null,"Create a server."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Display name for the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fqdn")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Fully Qualified Domain Name. Non-shortened domain name."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ipAddress")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","IP Address of the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"port")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","Port for the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"visible")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Whether it should be displayed on the /play page"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"position")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The display position the server should be on for the /play page"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Java",\n    "fqdn": "www.minecraft-server.com/java",\n    "ipAddress": "123.45.678.9",\n    "port": 1337,\n    "visible": true,\n    "position": 1\n}\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "The server Java (www.minecraft-server.com/java) has been successfully created!"\n}\n')),(0,i.kt)("p",null,"A new minecraft server has been created. The ipAddress and port are there\nbecause the API will query the server every (",(0,i.kt)("em",{parentName:"p"},"TODO: x minutes"),") amount of\nminutes and will notify via Discord in a chat that it struggled to ping\ncorrectly and may notify for maintainence.")),(0,i.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);