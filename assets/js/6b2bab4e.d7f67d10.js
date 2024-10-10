"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[523],{15680:(e,a,n)=>{n.r(a),n.d(a,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),m=function(e){return function(a){var n=u(a.components);return t.createElement(e,i({},a,{components:n}))}},u=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,c=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return n?t.createElement(c,o(o({ref:a},d),{},{components:n})):t.createElement(c,o({ref:a},d))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66624:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(58168),r=(n(96540),n(15680));const i={id:"alias",title:"Alias"},l=void 0,o={unversionedId:"rule_authors/alias",id:"rule_authors/alias",title:"Alias",description:"The alias rule creates another name by which an existing rule can be referred",source:"@site/../docs/rule_authors/alias.md",sourceDirName:"rule_authors",slug:"/rule_authors/alias",permalink:"/docs/rule_authors/alias",draft:!1,tags:[],version:"current",frontMatter:{id:"alias",title:"Alias"},sidebar:"mainSidebar",previous:{title:"Incremental Actions",permalink:"/docs/rule_authors/incremental_actions"},next:{title:"Local Resources For Tests Execution",permalink:"/docs/rule_authors/local_resources"}},s={},d=[{value:"alias",id:"alias",level:2},{value:"versioned_alias",id:"versioned_alias",level:2},{value:"configured_alias",id:"configured_alias",level:2}],m={toc:d},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.mdx)(u,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"alias")," rule creates another name by which an existing rule can be referred\nto. There two variants: ",(0,r.mdx)("a",{parentName:"p",href:"#versionedalias"},"versioned_alias")," and\n",(0,r.mdx)("a",{parentName:"p",href:"#configuredalias"},"configured_alias"),", which are detailed below."),(0,r.mdx)("h2",{id:"alias"},"alias"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"alias")," rule has the following relevant attributes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name")," - (required) what the ",(0,r.mdx)("inlineCode",{parentName:"li"},"actual"),"'s label should be aliased as."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"actual")," - (required) a target label."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"default_host_platform")," - default host platform to use for the aliased target.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'filegroup(\n    name = "foo",\n    srcs = ["foo.txt"],\n)\n\nalias(\n    name = "other_foo",\n    actual = ":foo",\n)\n')),(0,r.mdx)("h2",{id:"versioned_alias"},"versioned_alias"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"versioned_alias")," rule has the following relevant attributes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name")," - (required) what the ",(0,r.mdx)("inlineCode",{parentName:"li"},"actual"),"'s label should be aliased as."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"versions")," - (required) a map of versions to their respective versioned target\nlabels.")),(0,r.mdx)("p",null,"Under the hood, any versioned parameters from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"versioned_alias"),"'s underlying\n",(0,r.mdx)("inlineCode",{parentName:"p"},"actual")," are translated into their ",(0,r.mdx)("inlineCode",{parentName:"p"},"select"),"-based equivalents, which rely on\nconstraint settings added to the target platform."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-Python"},'versioned_alias(\n    name = "foo",\n    versions = {\n        # Target labels for foo versions\n        "1.1": "//path/to/lib/1.1:foo",\n        "1.2": "//path/to/lib/1.2:foo",\n    },\n    visibility = [\n        "PUBLIC",\n    ],\n)\n')),(0,r.mdx)("h2",{id:"configured_alias"},"configured_alias"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"configured_alias")," rule has the following relevant attributes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name")," - (required) what the ",(0,r.mdx)("inlineCode",{parentName:"li"},"actual"),"'s label should be aliased as."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"configured_actual")," - a configured label (mapped to a configured dep under the\nhood so the providers can be simply forwarded)."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"fallback_actual")," - if ",(0,r.mdx)("inlineCode",{parentName:"li"},"configured_actual")," is not set, then fallback to this\nvalue, which is an unconfigured dep. If ",(0,r.mdx)("inlineCode",{parentName:"li"},"configured_actual")," is not set, then\n",(0,r.mdx)("inlineCode",{parentName:"li"},"fallback_actual")," must be set."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"platform")," - the platform to build the aliased target with.")),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"actual")," field is available for ",(0,r.mdx)("inlineCode",{parentName:"p"},"configured_alias")," but it is not used under the hood (to keep compatibility of output format with Buck1 queries).")),(0,r.mdx)("p",null,"Outside of simply pointing at another target, this target has one other useful\nfeature - it contains a platform argument."),(0,r.mdx)("p",null,"This makes the alias rule useful for two distinct scenarios:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Configuration switching during the build"),". For example, there is an iOS\ntarget that needs to build a dependency for WatchOS so it can include it in\nthe bundle. This can be represented by the iOS target having a dependency on\nan alias of the Watch app with ",(0,r.mdx)("inlineCode",{parentName:"li"},'platform = "//the/desired/watchos:platform"'),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Using a target to refer to another in a non-standard configuration"),". For\nexample, if you want to have an experimental version of an app, you could\nrepresent that as an alias with an 'experimental' configuration pointing to\nthe original target.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-Python"},'configured_alias(\n    name = "foo-with-platform1",\n    actual = "//lib:foo",\n    platform = "//some_config:platform1",\n    visibility = ["PUBLIC"],\n)\n')))}p.isMDXComponent=!0}}]);