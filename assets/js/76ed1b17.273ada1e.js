"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2562],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,p=d["".concat(s,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},91876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const i={id:"why",title:"Why Buck2"},s=void 0,o={unversionedId:"about/why",id:"about/why",title:"Why Buck2",description:"Buck2 is a build system from Meta. This page answers the questions:",source:"@site/../docs/about/why.md",sourceDirName:"about",slug:"/about/why",permalink:"/docs/about/why",draft:!1,tags:[],version:"current",frontMatter:{id:"why",title:"Why Buck2"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Getting Started",permalink:"/docs/about/getting_started"}},l={},u=[{value:"Why does Buck2 exist?",id:"why-does-buck2-exist",level:2},{value:"What&#39;s different about Buck2?",id:"whats-different-about-buck2",level:2},{value:"Why use Buck2?",id:"why-use-buck2",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.mdx)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Buck2 is a build system from Meta. This page answers the questions:\n",(0,r.mdx)("a",{parentName:"p",href:"#why-does-buck2-exist"},"why does Buck2 exist"),",\n",(0,r.mdx)("a",{parentName:"p",href:"#whats-different-about-buck2"},"what's different about Buck2"),", and\n",(0,r.mdx)("a",{parentName:"p",href:"#why-use-buck2"},"why use Buck2"),"."),(0,r.mdx)("h2",{id:"why-does-buck2-exist"},"Why does Buck2 exist?"),(0,r.mdx)("p",null,"Meta employs a very large monorepo, consisting of a variety of programming\nlanguages, including C++, Python, Rust, Kotlin, Swift, Objective-C, Haskell,\nOCaml, and more. Google employs a different but functionally similar monorepo."),(0,r.mdx)("p",null,"These large scale and multi-language repositories are generally beyond the\ncapabilities of traditional build systems like ",(0,r.mdx)("inlineCode",{parentName:"p"},"make"),". To optimize the build and\nperformance of these large systems, Facebook and Google developed their own\nbuild systems, respectively Buck and Bazel. While the internal version of Bazel\nwas started first (also known as Blaze), Buck was open sourced first (back in\nMarch 2013), followed by Bazel a few years later (March 2015)."),(0,r.mdx)("p",null,"The retroactively named Buck1 was a capable build system and is still in use\ntoday at Meta (although many users have migrated). Buck2 is a rewrite that aims\nto keep the best bits of Buck1 (with a high degree of target compatibility) but\nalso borrows ideas from ",(0,r.mdx)("a",{parentName:"p",href:"https://ndmitchell.com/#shake_10_sep_2012"},"academic"),"\n",(0,r.mdx)("a",{parentName:"p",href:"https://ndmitchell.com/#shake_21_apr_2020"},"research")," and build systems,\nincluding ",(0,r.mdx)("a",{parentName:"p",href:"https://bazel.build/"},"Bazel"),", ",(0,r.mdx)("a",{parentName:"p",href:"https://www.pantsbuild.org/"},"Pants"),",\n",(0,r.mdx)("a",{parentName:"p",href:"https://shakebuild.com/"},"Shake"),", ",(0,r.mdx)("a",{parentName:"p",href:"https://gittup.org/tup/"},"Tup"),", and more."),(0,r.mdx)("p",null,"Following are aspects common to Buck1 and Buck2 (and in most cases, Bazel):"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Targets that can be queried")," - the build is defined as a series of targets,\nspecified in ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK")," files, that depend on other targets. This graph of targets\ncan be queried to understand how they relate to each other and what the\npotential impact of a change might be."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Remote execution")," - the build can send actions to a set of remote servers\nto be executed, increasing the parallelism significantly."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Multi-language composability")," - there can be lots of different languages in\na single build, and they can be put together. For example, you could have a\nPython library that depends on a Rust library, which, in turn depends on a C\nlibrary."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"File watching")," - at large enough scale, simply looking for changed files is\nprohibitively expensive. Buck can integrate with\n",(0,r.mdx)("a",{parentName:"li",href:"https://facebook.github.io/watchman/"},"Watchman")," to discover which files have\nchanged efficiently. However, for simplicity of setup, the open-source version\ndefaults to using ",(0,r.mdx)("inlineCode",{parentName:"li"},"inotify")," or similar functionality."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Uses Starlark")," - Starlark is a deterministic Python-like language used to\nspecify the targets, enabling the definition of targets as literals and more\nadvanced manipulation/sharing.")),(0,r.mdx)("h2",{id:"whats-different-about-buck2"},"What's different about Buck2?"),(0,r.mdx)("p",null,"Buck2 has many minor differences from Buck1, but there are a number that give\nnew efficiency or expressiveness that are of note (most of these are also\ndifferent from Bazel)."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 is written in Rust")," - Buck1 was written in Java. One of the\nadvantages of using Rust is the absence of GC pauses, However, Java also has\nadvantages, such as better memory profiling tools."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 is remote execution first")," - local execution is considered a special\ncase of remote execution, in contrast to Buck1 where it was added after. That\nmeans that things such as directory hashes can be pre-computed ready to send\nto remote execution, giving efficiency benefits."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"All Buck2 rules are written in Starlark")," - whereas, in Buck1, they were\nwritten in Java as part of the binary, which makes iteration on rules much\nfaster."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"The Buck2 binary is entirely language agnostic")," - as a consequence of\nhaving all the rules external to the binary, the most important and complex\nrule (such as in C++), don't have access to magic internal features. As a\nresult, features have been made available to all rules, including:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/rule_authors/dep_files"},"Dep files")," - the ability to declare that a\nsubset of the files weren't actually used, and thus not be sensitive to\nchanges within them."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/rule_authors/incremental_actions"},"Incremental actions")," - the ability\nto have the action short-circuit some subset of the work if run again."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 uses a dynamic (aka monadic) graph as its underlying computation\nengine")," - while most dependencies are specified statically, there are two\nparticular features that expose dynamic power to rule authors:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/rule_authors/dynamic_dependencies"},"Dynamic dependencies")," - enable\nrules to build a file then look at its contents before specifying the\ndependencies and steps in future actions. Common uses are languages where\nthe dependency structure within a project must follow imports (e.g. Haskell,\nOCaml) and distributed ThinLTO (where the best optimization plan is\ngenerated from summaries)."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/rule_authors/anon_targets"},"Anonymous targets")," - enable rules to\ncreate a graph that has more sharing than the original user graph. As a\nresult, two unrelated binaries can compile shared code only once, despite\nthe shared code not knowing about this commonality. This feature is useful\nfor rules like Swift feature resolution."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"/docs/rule_authors/transitive_sets"},"Transitive-sets"))," - similar in purpose\nto Bazel's ",(0,r.mdx)("a",{parentName:"li",href:"https://bazel.build/rules/lib/depset"},"depset"),". But, instead of\nbeing just a memory optimization, are also wired into the dependency graph,\nproviding a reduction in the size of the dependency graph."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 is not phased")," - there are no target graph/action graph phases, just\na series of dependencies in a\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/buck2/blob/main/dice/dice/docs/index.md"},"single graph on DICE"),"\nthat result in whatever the user requested. That means that Buck2 can\nsometimes parallelise different phases and track changes very precisely."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 can integrate with the virtual filesystem\n",(0,r.mdx)("a",{parentName:"strong",href:"https://github.com/facebook/sapling"},"Eden"))," - this provides good\nperformance, even when the file system is backed by source control fetches.\nHowever, Eden is not required, and a normal file system will also work well."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"The Buck2 Starlark implementation is available\n",(0,r.mdx)("a",{parentName:"strong",href:"https://developers.facebook.com/blog/post/2021/04/08/rust-starlark-library/"},"as a standalone library"))," -\nthis provides features such as IDE integration (both LSP and DAP bindings),\nlinters, typecheckers, and more. These features are integrated into Buck2 to\ngive a better developer experience (which is still evolving)."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 supports configurations")," - (such as ",(0,r.mdx)("inlineCode",{parentName:"li"},"select"),") to provide\nmulti-platform/architecture builds, which are heavily inspired by Bazel.\nWithin that space, there is a number of small differences, such as\n",(0,r.mdx)("inlineCode",{parentName:"li"},"toolchain_deps"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Buck2 is fast")," - in our internal tests, we observed that Buck2 completed\nbuilds 2x as fast as Buck1.")),(0,r.mdx)("p",null,"For a comprehensive list of benefits, see\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/about/benefits/compared_to_buck1"},"Benefits Compared to Buck1"),"."),(0,r.mdx)("h2",{id:"why-use-buck2"},"Why use Buck2?"),(0,r.mdx)("p",null,"It would be delightful if you tried out Buck2! But it is early-stage software,\nso users may run into unexpected issues. If you encounter an issue, please\nreport it via ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/issues"},"Github issues"),"."),(0,r.mdx)("p",null,"Buck2 is being used internally within Meta and is available as open-source\nfrom 2023."),(0,r.mdx)("p",null,"There are several differences between the internal and open-source versions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Meta uses an internal version of remote execution with builds always hooked up\nto remote execution. The open-source binding, which uses Buck2 without remote\nexecution, may be less polished."),(0,r.mdx)("li",{parentName:"ul"},"There are some configuration differences between the open source and internal\nversions. For example, file changes default to ",(0,r.mdx)("inlineCode",{parentName:"li"},"inotify")," in open-source, and\nto Watchman internally."),(0,r.mdx)("li",{parentName:"ul"},"The prelude (containing all the rules) is the same for open-source as\ninternal, but toolchains are not open-sourced. The required custom toolchains\nmay not work as well.")),(0,r.mdx)("p",null,"There are also some things that aren't quite yet finished:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"There are not yet mechanisms to build in release mode (that should be achieved\nby modifying the toolchain)."),(0,r.mdx)("li",{parentName:"ul"},"Windows/Mac builds are still in progress; open-source code is mostly tested on\nLinux.")),(0,r.mdx)("p",null,"If none of that puts you off, ",(0,r.mdx)("a",{parentName:"p",href:"/docs/about/getting_started"},"give Buck2 a go"),"!"))}m.isMDXComponent=!0}}]);