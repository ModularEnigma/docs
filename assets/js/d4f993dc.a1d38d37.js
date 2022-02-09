"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3846],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,r.useState)(k),O=N[0],T=N[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&T(j)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==O&&(E(t),T(a),null!=m&&w(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},4695:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.color;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},4263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4695),l=n(9877),s=n(8215),u=["components"],c={title:"POST knowledgebase/section/update",description:"Update an existing section for the knowledgebase.",sidebar_label:"Update section",slug:"section/update",sidebar_position:37},p='<Highlight color="',d={unversionedId:"api/knowledgebase/section-update",id:"api/knowledgebase/section-update",title:"POST knowledgebase/section/update",description:"Update an existing section for the knowledgebase.",source:"@site/docs/api/knowledgebase/section-update.mdx",sourceDirName:"api/knowledgebase",slug:"/api/knowledgebase/section/update",permalink:"/docs/api/knowledgebase/section/update",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/knowledgebase/section-update.mdx",tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"POST knowledgebase/section/update",description:"Update an existing section for the knowledgebase.",sidebar_label:"Update section",slug:"section/update",sidebar_position:37},sidebar:"tutorialSidebar",previous:{title:"Create section",permalink:"/docs/api/knowledgebase/section/create"},next:{title:"Delete section",permalink:"/docs/api/knowledgebase/section/delete"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-knowledgebasesectionupdate"},(0,o.kt)(i.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"knowledgebase/section/update")),(0,o.kt)("p",null,"Update an existing section for the knowledgebase."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sectionSlug")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The unique identifier for the section."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sectionName")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The display name for the section."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"description")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","A description to summarise the section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sectionIcon")," ",(0,o.kt)("em",{parentName:"p"},"string"),(0,o.kt)("br",{parentName:"p"}),"\n","The Font Awesome icon to use on the section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"position")," ",(0,o.kt)("em",{parentName:"p"},"integer"),(0,o.kt)("br",{parentName:"p"}),"\n","Where on the page it should it be displayed"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing sectionSlug",value:"second"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"create"},(0,o.kt)("inlineCode",{parentName:"a"},"knowledgebase/section/create")))),(0,o.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("p",null,"When an section with slug 'missing-sectionSlug' does not exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sectionSlug": "missing-sectionSlug",\n    "sectionName": "Getting Started",\n    "description": "Just joined? Read these to get started on the Server",\n    "sectionIcon": "<url>",\n    "position": 3\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);