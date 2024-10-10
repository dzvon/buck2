"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3323],{15680:(e,n,o)=>{o.r(n),o.d(n,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>s,withMDXComponents:()=>d});var t=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var m=t.createContext({}),d=function(e){return function(n){var o=s(n.components);return t.createElement(e,r({},n,{components:o}))}},s=function(e){var n=t.useContext(m),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(m.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(o),p=a,u=d["".concat(l,".").concat(p)]||d[p]||f[p]||r;return o?t.createElement(u,i(i({ref:n},m),{},{components:o})):t.createElement(u,i({ref:n},m))}));function v(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=o[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},34681:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=o(58168),a=(o(96540),o(15680));const r={id:"build_file",title:"Build File"},l="Build File",i={unversionedId:"concepts/build_file",id:"concepts/build_file",title:"Build File",description:"A build file is a file, typically named BUCK, that defines one or more",source:"@site/../docs/concepts/build_file.md",sourceDirName:"concepts",slug:"/concepts/build_file",permalink:"/docs/concepts/build_file",draft:!1,tags:[],version:"current",frontMatter:{id:"build_file",title:"Build File"},sidebar:"mainSidebar",previous:{title:"Build Rule",permalink:"/docs/concepts/build_rule"},next:{title:"Build Target",permalink:"/docs/concepts/build_target"}},c={},m=[],d={toc:m},s="wrapper";function p(e){let{components:n,...o}=e;return(0,a.mdx)(s,(0,t.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"build-file"},"Build File"),(0,a.mdx)("p",null,"A ",(0,a.mdx)("em",{parentName:"p"},"build file")," is a file, typically named ",(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK"),", that defines one or more\n",(0,a.mdx)("a",{parentName:"p",href:"/docs/concepts/build_rule"},"build rule"),"s. Note that you can change the name that Buck2 uses\nfor the build file in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"buildfile")," section of ",(0,a.mdx)("inlineCode",{parentName:"p"},".buckconfig"),'. A source file in\nyour project can only be referenced by rules in its "nearest" build file, where\n"nearest" means its closest direct ancestor in your project\'s file tree. (If a\nsource file has a build file as a sibling, then that is its nearest ancestor.)\nFor example, if your project had the following ',(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK")," files:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"java/com/facebook/base/BUCK\njava/com/facebook/common/BUCK\njava/com/facebook/common/collect/BUCK\n")),(0,a.mdx)("p",null,"Then your build rules would have the following constraints:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Rules in ",(0,a.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/base/BUCK")," can reference any file under\n",(0,a.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/base/"),"."),(0,a.mdx)("li",{parentName:"ul"},"Rules in ",(0,a.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/common/")," can reference any files under that\ndirectory, except for those under ",(0,a.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/common/collect/"),', as\nthose "belong" to the ',(0,a.mdx)("inlineCode",{parentName:"li"},"BUCK")," file in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"collect")," directory.")),(0,a.mdx)("p",null,"The set of source files accessible to a build file is also known as its ",(0,a.mdx)("em",{parentName:"p"},"build\npackage"),". The way to refer to code across build packages is to create build\nrules and use ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," to refer to that code. Going back to the previous example,\nsuppose code in ",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/concurrent/")," wants to depend on code\nin ",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/"),". Presumably\n",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/BUCK")," has a build rule like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'collect',\n  srcs = glob(['*.java']),\n  deps = ['//java/com/facebook/base:base',],)\n")),(0,a.mdx)("p",null,"Then ",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/BUCK")," could have a rule like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'concurrent',\n  srcs = glob(['concurrent/*.java']),\n  deps = ['//java/com/facebook/base:base','//java/com/facebook/common/collect:collect',],)\n")),(0,a.mdx)("p",null,"whereas the following ",(0,a.mdx)("strong",{parentName:"p"},"would be invalid")," because\n",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/")," has its own build file, so\n",(0,a.mdx)("inlineCode",{parentName:"p"},"//java/com/facebook/common/collect:concurrent")," cannot list\n",(0,a.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/*.java")," in its ",(0,a.mdx)("inlineCode",{parentName:"p"},"srcs"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'concurrent',\n  srcs = glob(['collect/*.java', 'concurrent/*.java']),\n  deps = ['//java/com/facebook/base:base',],)\n")))}p.isMDXComponent=!0}}]);