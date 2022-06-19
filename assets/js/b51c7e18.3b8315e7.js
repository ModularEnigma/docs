"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6764],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),s=r(7392),l=r(7094),c=r(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,i=e.lazy,p=e.block,m=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,a.useState)(y),E=T[0],x=T[1],P=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==E&&g.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,r=P.indexOf(t),n=g[r].value;n!==E&&(j(t),x(n),null!=f&&O(f,String(n)))},S=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;r=null!=(o=P[i])?o:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:S,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},812:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return v}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4695),s=r(5488),l=r(5162),c=["components"],u={title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",sidebar_label:"Log chat",slug:"chat",sidebar_position:7},d='<Highlight color="#FF6E26">POST</Highlight> `discord/chat`',p={unversionedId:"products/zander/api/discord/chat",id:"products/zander/api/discord/chat",title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",source:"@site/docs/products/zander/api/discord/chat.mdx",sourceDirName:"products/zander/api/discord",slug:"/products/zander/api/discord/chat",permalink:"/docs/products/zander/api/discord/chat",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/discord/chat.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",sidebar_label:"Log chat",slug:"chat",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Log server switch",permalink:"/docs/products/zander/api/discord/switch"},next:{title:"Log direct message",permalink:"/docs/products/zander/api/discord/directMessage"}},m={},v=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],f={toc:v};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-discordchat"},(0,o.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"discord/chat")),(0,o.kt)("p",null,"Log a message to a Discord channel when user send a public chat message."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"username")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"server")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","Server display name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"content")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","Chat content."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(s.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "server": "Survival",\n    "content": "This server is awesome"\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,o.kt)("p",null,"A Discord message will be created that says,"),(0,o.kt)("p",null,'"',(0,o.kt)("strong",{parentName:"p"},"Survival"),"  |  ",(0,o.kt)("inlineCode",{parentName:"p"},"shadowolfyt"),' :: This server is awesome"')),(0,o.kt)(l.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}h.isMDXComponent=!0}}]);