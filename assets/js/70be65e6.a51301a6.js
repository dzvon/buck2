"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[899],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.createElement(e,l({},t,{components:n}))}},d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(u,".").concat(m)]||s[m]||x[m]||l;return n?r.createElement(c,o(o({ref:t},i),{},{components:n})):r.createElement(c,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},36002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(58168),a=(n(96540),n(15680));const l={id:"bxl.OutputStream"},u="bxl.OutputStream type",o={unversionedId:"api/bxl/bxl.OutputStream",id:"api/bxl/bxl.OutputStream",title:"bxl.OutputStream type",description:"The output stream for bxl to print values to the console as their result",source:"@site/../docs/api/bxl/bxl.OutputStream.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl.OutputStream",permalink:"/docs/api/bxl/bxl.OutputStream",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl.OutputStream"},sidebar:"apiSidebar",previous:{title:"bxl.LazyResolvedAttrs type",permalink:"/docs/api/bxl/bxl.LazyResolvedAttrs"},next:{title:"bxl.Result type",permalink:"/docs/api/bxl/bxl.Result"}},p={},i=[{value:"bxl.OutputStream.ensure",id:"bxloutputstreamensure",level:2},{value:"bxl.OutputStream.ensure_multiple",id:"bxloutputstreamensure_multiple",level:2},{value:"bxl.OutputStream.print",id:"bxloutputstreamprint",level:2},{value:"bxl.OutputStream.print_json",id:"bxloutputstreamprint_json",level:2}],s={toc:i},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.mdx)(d,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"bxloutputstream-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"bxl.OutputStream")," type"),(0,a.mdx)("p",null,"The output stream for bxl to print values to the console as their result"),(0,a.mdx)("h2",{id:"bxloutputstreamensure"},"bxl.OutputStream.ensure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.OutputStream.ensure(artifact: artifact) -> bxl.EnsuredArtifact\n")),(0,a.mdx)("p",null,"Marks the artifact as an artifact that should be available to the users at the end of the bxl invocation. Any artifacts that do not get registered via this call is not accessible by users at the end of bxl script."),(0,a.mdx)("p",null,"This function returns an ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensured_artifact")," type that can be printed via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),"\nto print its actual path on disk."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_ensure(ctx):\n    actions = ctx.bxl_actions().actions\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output)\n    ctx.output.print(ensured)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxloutputstreamensure_multiple"},"bxl.OutputStream.ensure","_","multiple"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.OutputStream.ensure_multiple(\n    artifacts: CellPath | None | artifact | bxl.BuildResult | bxl_built_artifacts_iterable | cell_root | cmd_args | label | output_artifact | project_root | resolved_macro | str | tagged_command_line | target_label | transitive_set_args_projection | write_json_cli_args | list[artifact] | dict[typing.Any, bxl.BuildResult] | RunInfo,\n)\n")),(0,a.mdx)("p",null,"Same as ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensure"),", but for multiple artifacts. Will preserve the shape of the inputs (i.e. if the resulting ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dict")," of a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.build()")," is passed in, the output will be a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dict")," where the key is preserved, and the values are converted to ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensured_artifact"),"s)."),(0,a.mdx)("p",null,"Note that is slower to loop through objects and ensure them one by one than it is to call ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensure_multiple()"),"\non all the objects at once (if possible).\nSo, it is suggested to use this method when you are only ensuring a few individual artifacts that are not stored in an iterable."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl_ensure_multiple(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n    outputs.update({target.raw_target(): ctx.output.ensure_multiple(value.artifacts())})\n    ctx.output.print_json(outputs)\n")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxloutputstreamprint"},"bxl.OutputStream.print"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl.OutputStream.print(*args, sep: str = " ") -> None\n')),(0,a.mdx)("p",null,'Outputs results to the console via stdout. These outputs are considered to be the results of a bxl script, which will be displayed to stdout by buck2 even when the script is cached. Accepts an optional separator that defaults to " ".'),(0,a.mdx)("p",null,"Prints that are not result of the bxl should be printed via stderr via the stdlib ",(0,a.mdx)("inlineCode",{parentName:"p"},"print"),"\nand ",(0,a.mdx)("inlineCode",{parentName:"p"},"pprint"),". Note that ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()")," is intended for simple outputs. For more complex\noutputs, the recommendation would be to write them to a file."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_print(ctx):\n    ctx.output.print("test")\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxloutputstreamprint_json"},"bxl.OutputStream.print","_","json"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.OutputStream.print_json(value, *, pretty: bool = True) -> None\n")),(0,a.mdx)("p",null,"Outputs results to the console via stdout as pretty-printed json. Pretty printing can be turned off by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"pretty")," keyword-only parameter. These outputs are considered to be the results of a bxl script, which will be displayed to stdout by buck2 even when the script is cached."),(0,a.mdx)("p",null,"Prints that are not result of the bxl should be printed via stderr via the stdlib ",(0,a.mdx)("inlineCode",{parentName:"p"},"print"),"\nand ",(0,a.mdx)("inlineCode",{parentName:"p"},"pprint"),"."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_print_json(ctx):\n    outputs = {}\n    outputs.update({"foo": bar})\n    ctx.output.print_json("test")\n')))}m.isMDXComponent=!0}}]);