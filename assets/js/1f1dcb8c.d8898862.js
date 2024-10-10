"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[329],{15680:(e,l,a)=>{a.r(l),a.d(l,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>b,withMDXComponents:()=>c});var t=a(96540);function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function n(){return n=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function o(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?o(Object(a),!0).forEach((function(l){r(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function d(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){return function(l){var a=b(l.components);return t.createElement(e,n({},l,{components:a}))}},b=function(e){var l=t.useContext(p),a=l;return e&&(a="function"==typeof e?e(l):i(i({},l),e)),a},u=function(e){var l=b(e.components);return t.createElement(p.Provider,{value:l},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},f=t.forwardRef((function(e,l){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=b(a),u=r,m=c["".concat(o,".").concat(u)]||c[u]||s[u]||n;return a?t.createElement(m,i(i({ref:l},p),{},{components:a})):t.createElement(m,i({ref:l},p))}));function g(e,l){var a=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=f;var i={};for(var d in l)hasOwnProperty.call(l,d)&&(i[d]=l[d]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35751:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const n={id:"label"},o="label type",i={unversionedId:"api/bxl/label",id:"api/bxl/label",title:"label type",description:"A label is used to represent a configured target.",source:"@site/../docs/api/bxl/label.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/label",permalink:"/docs/api/bxl/label",draft:!1,tags:[],version:"current",frontMatter:{id:"label"},sidebar:"apiSidebar",previous:{title:"instant type",permalink:"/docs/api/bxl/instant"},next:{title:"lazy_attrs type",permalink:"/docs/api/bxl/lazy_attrs"}},d={},p=[{value:"label.cell",id:"labelcell",level:2},{value:"label.cell_root",id:"labelcell_root",level:2},{value:"label.configured_target",id:"labelconfigured_target",level:2},{value:"label.name",id:"labelname",level:2},{value:"label.package",id:"labelpackage",level:2},{value:"label.path",id:"labelpath",level:2},{value:"label.project_root",id:"labelproject_root",level:2},{value:"label.raw_target",id:"labelraw_target",level:2},{value:"label.sub_target",id:"labelsub_target",level:2}],c={toc:p},b="wrapper";function u(e){let{components:l,...a}=e;return(0,r.mdx)(b,(0,t.A)({},c,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"label-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"label")," type"),(0,r.mdx)("p",null,"A label is used to represent a configured target."),(0,r.mdx)("h2",{id:"labelcell"},"label.cell"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.cell: str\n")),(0,r.mdx)("p",null,"For the label ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world (ovr_config//platform/linux:x86_64-fbcode-46b26edb4b80a905)")," this gives back ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelcell_root"},"label.cell","_","root"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.cell_root: cell_root\n")),(0,r.mdx)("p",null,"Obtain a reference to this target label's cell root. This can be used as if it were an artifact in places that expect one, such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args().relative_to"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelconfigured_target"},"label.configured","_","target"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def label.configured_target() -> configured_target_label\n")),(0,r.mdx)("p",null,"Returns the underlying configured target label, dropping the sub target"),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelname"},"label.name"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.name: str\n")),(0,r.mdx)("p",null,"For the label ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world (ovr_config//platform/linux:x86_64-fbcode-46b26edb4b80a905)")," this gives back ",(0,r.mdx)("inlineCode",{parentName:"p"},"world")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelpackage"},"label.package"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.package: str\n")),(0,r.mdx)("p",null,"For the label ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world (ovr_config//platform/linux:x86_64-fbcode-46b26edb4b80a905)")," this gives back ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2/hello")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelpath"},"label.path"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.path: CellPath\n")),(0,r.mdx)("p",null,"For the label ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world (ovr_config//platform/linux:x86_64-fbcode-46b26edb4b80a905)")," this gives back ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2/hello")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelproject_root"},"label.project","_","root"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.project_root: project_root\n")),(0,r.mdx)("p",null,"Obtain a reference to the project's root. This can be used as if it were an artifact in places that expect one, such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args().relative_to"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelraw_target"},"label.raw","_","target"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def label.raw_target() -> target_label\n")),(0,r.mdx)("p",null,"For the label ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world (ovr_config//platform/linux:x86_64-fbcode-46b26edb4b80a905)")," this returns the unconfigured underlying target label (",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode//buck2/hello:world"),")"),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"labelsub_target"},"label.sub","_","target"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"label.sub_target: None | list[str]\n")))}u.isMDXComponent=!0}}]);