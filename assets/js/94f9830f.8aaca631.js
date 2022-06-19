"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4670],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),s=n(2389),i=n(7392),l=n(7094),u=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,s=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,a.useState)(k),E=T[0],x=T[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=N[v];null!=C&&C!==E&&y.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,n=P.indexOf(t),r=y[n].value;r!==E&&(j(t),x(r),null!=v&&O(v,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,s=P.indexOf(e.currentTarget)-1;n=null!=(o=P[s])?o:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:Z,onFocus:D,onClick:D},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(4695),i=n(5488),l=n(5162),u=["components"],c={title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:29},d='<Highlight color="#FF6E26">POST</Highlight> `session/destroy`',p={unversionedId:"products/zander/api/session/destroy",id:"products/zander/api/session/destroy",title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",source:"@site/docs/products/zander/api/session/destroy.mdx",sourceDirName:"products/zander/api/session",slug:"/products/zander/api/session/destroy",permalink:"/docs/products/zander/api/session/destroy",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/session/destroy.mdx",tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"Update for server switch",permalink:"/docs/products/zander/api/session/switch"},next:{title:"Create user",permalink:"/docs/products/zander/api/user/create"}},m={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-sessiondestroy"},(0,o.kt)(s.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"session/destroy")),(0,o.kt)("p",null,"Update session record to indicate end of session and logout."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The UUID for the Minecraft user."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"No session",value:"second"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,o.kt)("p",null,"shadowolfyt's session has been destroyed.")),(0,o.kt)(l.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("p",null,"When shadowolfyt does not have an ongoing session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n')),(0,o.kt)("h2",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);