"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6981],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>l,withMDXComponents:()=>s});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){return function(n){var t=l(n.components);return r.createElement(e,i({},n,{components:t}))}},l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const i={id:"configurations",title:"Configurations"},a=void 0,c={unversionedId:"concepts/configurations",id:"concepts/configurations",title:"Configurations",description:"For rule authors see also: Configurations",source:"@site/../docs/concepts/configurations.md",sourceDirName:"concepts",slug:"/concepts/configurations",permalink:"/docs/concepts/configurations",draft:!1,tags:[],version:"current",frontMatter:{id:"configurations",title:"Configurations"},sidebar:"mainSidebar",previous:{title:".buckconfig",permalink:"/docs/concepts/buckconfig"},next:{title:"Glossary of Terms",permalink:"/docs/concepts/glossary"}},u={},p=[],s={toc:p},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.mdx)(l,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"For rule authors see also: ",(0,o.mdx)("a",{parentName:"p",href:"/docs/rule_authors/configurations"},"Configurations")),(0,o.mdx)("p",null,'When building a target, buck always builds it in a particular "configuration."\nThe configuration typically includes information like the target os, target\narch, sanitizers, opt level, etc. One way to understand the effect that a\nconfiguration has is via the ',(0,o.mdx)("inlineCode",{parentName:"p"},"cquery")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"uquery")," commands. The cquery command\nwill compute the appropriate configuration for a target and display a version of\nthat target's attributes with the configuration applied. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"uquery")," command\nwill not apply a configuration."),(0,o.mdx)("p",null,"Here is a heavily trimmed version of the outputs of invoking ",(0,o.mdx)("inlineCode",{parentName:"p"},"uquery")," and\n",(0,o.mdx)("inlineCode",{parentName:"p"},"cquery")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"//buck2/app/buck2_core:buck2_core"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'> buck2 uquery -A \'"//buck2/app/buck2_core:buck2_core"\'\n{\n  "fbcode//buck2/app/buck2_core:buck2_core": {\n    "buck.type": "rust_library",\n    "buck.package": "fbcode//buck2/app/buck2_core:TARGETS",\n    "name": "buck2_core",\n    "visibility": [\n      "PUBLIC"\n    ],\n    "deps": {\n      "fbsource//third-party/rust:anyhow",\n      "fbsource//third-party/rust:arc-swap",\n      "fbsource//third-party/rust:blake3",\n      "fbsource//third-party/rust:compact_str",\n      "fbsource//third-party/rust:dashmap",\n      {\n        "__type": "selector",\n        "entries": {\n          "DEFAULT": [],\n          "ovr_config//os:windows": [\n            "fbsource//third-party/rust:common-path"\n          ]\n        }\n      },\n      {\n        "__type": "selector",\n        "entries": {\n          "DEFAULT": [],\n          "ovr_config//os:linux": [\n            "fbsource//third-party/rust:nix"\n          ]\n        }\n      },\n    },\n  }\n}\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'> buck2 cquery -A \'"//buck2/app/buck2_core:buck2_core"\'\n{\n  "fbcode//buck2/app/buck2_core:buck2_core (ovr_config//platform/linux:<OMITTED>)": {\n    "buck.type": "rust_library",\n    "buck.package": "fbcode//buck2/app/buck2_core:TARGETS",\n    "buck.target_configuration": "ovr_config//platform/linux:<OMITTED>",\n    "buck.execution_platform": "fbcode//buck2/platform/<OMITTED>",\n    "name": "buck2_core",\n    "visibility": [\n      "PUBLIC"\n    ],\n    "deps": [\n      "fbsource//third-party/rust:anyhow (ovr_config//platform/linux:<OMITTED>)",\n      "fbsource//third-party/rust:arc-swap (ovr_config//platform/linux:<OMITTED>)",\n      "fbsource//third-party/rust:blake3 (ovr_config//platform/linux:<OMITTED>)",\n      "fbsource//third-party/rust:compact_str (ovr_config//platform/linux:<OMITTED>)",\n      "fbsource//third-party/rust:dashmap (ovr_config//platform/linux:<OMITTED>)",\n      "fbsource//third-party/rust:nix (ovr_config//platform/linux:<OMITTED>)"\n    ]\n}\n')),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"cquery")," output has additional ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck.target_configuration")," and\n",(0,o.mdx)("inlineCode",{parentName:"p"},"buck.execution_platform")," attributes which tell you what the target is being\nbuilt for and what it's being built on, respectively. ",(0,o.mdx)("inlineCode",{parentName:"p"},"uquery")," doesn't have\nthose."),(0,o.mdx)("p",null,"The deps in ",(0,o.mdx)("inlineCode",{parentName:"p"},"uquery")," also have a number of selects; these indicate that the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"common-path")," dependency should only be included when building for Windows,\nwhile the ",(0,o.mdx)("inlineCode",{parentName:"p"},"nix")," dependency is needed only for Linux. In ",(0,o.mdx)("inlineCode",{parentName:"p"},"cquery")," that\ndistinction has been resolved; because the target has been configured for Linux,\nthe ",(0,o.mdx)("inlineCode",{parentName:"p"},"nix")," dependency is present and indistinguishable from any other, while the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"common-path")," dependency is gone."))}d.isMDXComponent=!0}}]);