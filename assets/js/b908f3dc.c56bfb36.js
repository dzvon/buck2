"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7274],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={id:"bxl",title:"Why BXL"},i=void 0,l={unversionedId:"developers/bxl",id:"developers/bxl",title:"Why BXL",description:"Buck2 Extension Language (BXL)",source:"@site/../docs/developers/bxl.md",sourceDirName:"developers",slug:"/developers/bxl",permalink:"/docs/developers/bxl",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl",title:"Why BXL"},sidebar:"mainSidebar",previous:{title:"Dep Files",permalink:"/docs/rule_authors/dep_files"},next:{title:"Getting Started",permalink:"/docs/developers/bxl_getting_started"}},s={},u=[{value:"Buck2 Extension Language (BXL)",id:"buck2-extension-language-bxl",level:2},{value:"When should I use BXL over Buck2 API/CLI?",id:"when-should-i-use-bxl-over-buck2-apicli",level:2},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Generate a project for IDE",id:"generate-a-project-for-ide",level:3},{value:"Build an LSP",id:"build-an-lsp",level:3},{value:"Perform graph analysis",id:"perform-graph-analysis",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.mdx)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"buck2-extension-language-bxl"},"Buck2 Extension Language (BXL)"),(0,r.mdx)("p",null,"BXL is a Starlark-based script that enables integrators to inspect and interact\nwith the Buck2 graph."),(0,r.mdx)("p",null,"Integrators are able to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Write Starlark code that queries, analyzes, and builds on the Buck2 graph."),(0,r.mdx)("li",{parentName:"ul"},"Introspect and interact with the Buck2 graph structures natively, via\nStarlark, in a safe, controlled manner.")),(0,r.mdx)("p",null,"Introspection of the Buck2 graph can occur at the unconfigured, configured,\nproviders, and action stages. There are also APIs offered to allow BXL to accept\ncustom command line argument, output artifacts, and print results to stdout."),(0,r.mdx)("p",null,"BXL leverages Buck2 core's incremental\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/bxl_faqs#when-is-my-bxl-script-cached"},"caching"),". It also has support for\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/bxl_how_tos#running-actions"},"running actions"),",\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/dynamic_output"},"dynamic outputs"),", and\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/anon_targets"},"anonymous targets"),". In addition, BXL has\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/bxl_how_tos#profiling-testing-and-debugging-a-bxl-script"},"profiling"),"\ncapabilities, and allows users to add their own ",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/bxl_telemetry"},"telemetry"),"\ndirectly within the BXL scripts."),(0,r.mdx)("p",null,"BXL is considered to be mostly stable, with a bit more active development here\nand there."),(0,r.mdx)("h2",{id:"when-should-i-use-bxl-over-buck2-apicli"},"When should I use BXL over Buck2 API/CLI?"),(0,r.mdx)("p",null,"There are many overlaps between BXL and Buck2 (for example, both can run cquery\nand both can build targets). It\u2019s possible that one use case could be handled by\nboth BXL and Buck2."),(0,r.mdx)("p",null,"Following are some specific recommendations to help decide when to use BXL over\nregular Buck2:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Use/inspect resolved attributes that are not exposed/accessible to users via\nnormal Buck2 operations."),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"This includes introspecting the Starlark object of providers, analyzing the\nStarlark object of a rule\u2019s attr before and after coercing and resolution,\nand introspecting intermediate query results."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Reduce/eliminate the need to make several Buck2 calls within your program,\nsuch as running several subprocesses to call ",(0,r.mdx)("inlineCode",{parentName:"strong"},"cquery")," several times."),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"With BXL, you can just call the BXL script once in a subprocess, potentially\nreducing the amount of code you need to write in your program. For example,\nif you need to call cquery and build several times, you can put that all\nwithin a single BXL script and run ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 bxl")," once, rather than running\n",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 cquery")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 build")," several times."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Reduce/eliminate the need to manually parse Buck2 output format within your\nprogram, and any bugs that may come with manual parsing"),".",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Some languages are more verbose than others when it comes to string parsing."),(0,r.mdx)("li",{parentName:"ul"},"BXL scripts are written in Starlark, which is basically a deterministic,\nimmutable Python. BXL is able to directly introspect Starlark objects (such\nas rules and target nodes, and so on) and call methods on these objects\ninstead of parsing them over Buck2\u2019s output.")))),(0,r.mdx)("h2",{id:"example-use-cases"},"Example Use Cases"),(0,r.mdx)("h3",{id:"generate-a-project-for-ide"},"Generate a project for IDE"),(0,r.mdx)("p",null,"IDE project generation is roughly as follows:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Form the target graph for the project target"),(0,r.mdx)("li",{parentName:"ul"},"Perform some filtering on the graph targets if needed. This depends on the\ntarget's configuration."),(0,r.mdx)("li",{parentName:"ul"},"For each target, generate the project target metadata, including:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"compiler flags"),(0,r.mdx)("li",{parentName:"ul"},"linker flags"),(0,r.mdx)("li",{parentName:"ul"},"paths to generated files"),(0,r.mdx)("li",{parentName:"ul"},"inputs and outputs for each targets"),(0,r.mdx)("li",{parentName:"ul"},"the paths relative to some ",(0,r.mdx)("inlineCode",{parentName:"li"},"PATH")))),(0,r.mdx)("li",{parentName:"ul"},"Write a single file translating this metadata into a format understood by the\nIDE")),(0,r.mdx)("p",null,"An example BXL flow for generating a project for IDE might be:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add some command line arguments to accept a target (or subtarget) to generate\nthe project"),(0,r.mdx)("li",{parentName:"ul"},"Run analysis on the project target with a specific configuration to filter the\ngraph targets"),(0,r.mdx)("li",{parentName:"ul"},"For each resulting target, inspect the providers and attributes to extract the\nrequired metadata information. BXL uses filesystem operations to handle paths\nwithin the project"),(0,r.mdx)("li",{parentName:"ul"},"Run actions based on the linker/compiler flags, and build artifacts as needed\nto generate a project"),(0,r.mdx)("li",{parentName:"ul"},"Write a single file containing the metadata obtained from previous steps")),(0,r.mdx)("h3",{id:"build-an-lsp"},"Build an LSP"),(0,r.mdx)("p",null,"A compilation database is a database containing information about which compile\noptions are used to build the files in a project. Language Server Protocols\n(LSPs) uses the compilation database to provide language features like auto\ncomplete, go to definition, and find all references for the user within an\nIDE/editor."),(0,r.mdx)("p",null,"An example BXL flow for building a C++ LSP might be:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add a command line argument to accept a file"),(0,r.mdx)("li",{parentName:"ul"},"Run owners cquery in BXL to get the owning target of the file"),(0,r.mdx)("li",{parentName:"ul"},"Run analysis on the owning target to get the desired clang flags"),(0,r.mdx)("li",{parentName:"ul"},"Use BXL to write the clang flags to the disk in compilation database format")),(0,r.mdx)("h3",{id:"perform-graph-analysis"},"Perform graph analysis"),(0,r.mdx)("p",null,"Some example graph analysis functionalities might be:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Run an analysis in BXL on a set of targets, and then inspect their providers,\nand build some subtargets"),(0,r.mdx)("li",{parentName:"ul"},"Run a uquery on some set of targets, and inspect the resulting nodes' coerced\nattributes"),(0,r.mdx)("li",{parentName:"ul"},"Run a cquery on some set of targets with a specific configuration, and inspect\nthe resulting nodes' attributes before and after resolution")))}c.isMDXComponent=!0}}]);