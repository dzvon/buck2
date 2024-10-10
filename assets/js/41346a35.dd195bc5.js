"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[280],{15680:(n,e,t)=>{t.r(e),t.d(e,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=t(96540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(){return a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),p=function(n){return function(e){var t=d(e.components);return r.createElement(n,a({},e,{components:t}))}},d=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},m=function(n){var e=d(n.components);return r.createElement(u.Provider,{value:e},n.children)},c="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=d(t),m=i,c=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(c,s(s({ref:e},u),{},{components:t})):r.createElement(c,s({ref:e},u))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[c]="string"==typeof n?n:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},88405:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const a={id:"configuration_transitions",title:"Configuration Transitions"},o=void 0,s={unversionedId:"rule_authors/configuration_transitions",id:"rule_authors/configuration_transitions",title:"Configuration Transitions",description:"Configuration transition is a mechanism for changing the configuration when",source:"@site/../docs/rule_authors/configuration_transitions.md",sourceDirName:"rule_authors",slug:"/rule_authors/configuration_transitions",permalink:"/docs/rule_authors/configuration_transitions",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration_transitions",title:"Configuration Transitions"},sidebar:"mainSidebar",previous:{title:"Configurations",permalink:"/docs/rule_authors/configurations"},next:{title:"Dynamic Dependencies",permalink:"/docs/rule_authors/dynamic_dependencies"}},l={},u=[{value:"Transition rule",id:"transition-rule",level:2},{value:"Per rule transition",id:"per-rule-transition",level:2},{value:"Per attribute transition",id:"per-attribute-transition",level:2},{value:"Per target transition",id:"per-target-transition",level:2},{value:"Request transition on command line",id:"request-transition-on-command-line",level:2},{value:"Access rule attributes in transition function implementation",id:"access-rule-attributes-in-transition-function-implementation",level:2}],p={toc:u},d="wrapper";function m(n){let{components:e,...t}=n;return(0,i.mdx)(d,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Configuration transition is a mechanism for changing the configuration when\ndepending on a target."),(0,i.mdx)("p",null,"Currently, Buck2 has incoming and outgoing transitions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Incoming")," - (or per-rule transitions) declared on the rule."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Outgoing")," - (or per-attribute transitions) declared on the attribute.")),(0,i.mdx)("h2",{id:"transition-rule"},"Transition rule"),(0,i.mdx)("p",null,"Transition rules are defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},".bzl")," files using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," built-in."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," function creates a configuration-related object. The\n",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," object is opaque, it does not have any operations, and can only be\nused as an argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"rule")," function or attribute constructor. The\n",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," function call must be assigned to a global variable (this is\nsimilar to user-defined provider declarations)."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," function takes three arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"implementation")," - a function."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"refs")," - references to configuration rules to be resolved and passed to the\nimplementation function."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"split")," - (optional) ",(0,i.mdx)("inlineCode",{parentName:"li"},"bool")," flag (default ",(0,i.mdx)("inlineCode",{parentName:"li"},"False"),") to indicate whether\ntransition is a split transition (used in per attribute transitions).")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"implementation")," function takes two arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"platform")," - a configuration to transition."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"refs")," - resolved references as a struct.")),(0,i.mdx)("p",null,"Example transition from ios to watchos (for example, to build a watchOS bundle\nas part of an iOS build):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl(platform: PlatformInfo.type, refs: struct.type) -> PlatformInfo.type:\n    # Operating system constraint setting.\n    os = refs.os[ConstraintSettingInfo]\n    # Watchos constraint value.\n    watchos = refs.watchos[ConstraintValueInfo]\n    # Remove operating system constraint from input platform.\n    constraints = {\n        s: v\n        for (s, v) in platform.configuration.constraints.items()\n        if s != os.label\n    }\n    # Add watchos constraint value.\n    constraints[watchos.setting.label] = watchos\n    # Construct configuration structure.\n    new_cfg = ConfigurationInfo(\n        # Updated constraints.\n        constraints = constraints,\n        # Keep original config values.\n        values = platform.configuration.values,\n    )\n    # And return new configuration,\n    # or a dict of marker to configuration in case of split transition.\n    return PlatformInfo(\n        # ... supplying configuration label.\n        label = "<transitioned-to-watch>",\n        configuration = new_cfg,\n    )\n\niphone_to_watch_transition = transition(_impl, refs = {\n    "os": "//constraints:os",\n    "watchos": "//constraints:watchos",\n})\n')),(0,i.mdx)("p",null,"A transition function applied twice must produce the configuration identical to\nthe configuration produced after applying transition once."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"assert tr(tr(platform=platform, refs=refs), refs=refs) == tr(platform=platform, refs=refs)\n")),(0,i.mdx)("p",null,"If this invariant is not held, certain operations produce incorrect and possibly\ninfinite graphs. This is not yet enforced."),(0,i.mdx)("h2",{id:"per-rule-transition"},"Per rule transition"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"rule")," function has an optional ",(0,i.mdx)("inlineCode",{parentName:"p"},"cfg")," attribute, which takes a reference to\nthe ",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," object (created with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"transition")," function; not a string)."),(0,i.mdx)("p",null,"When such a rule is called, it is instantiated, not with the requested\nconfiguration, but with the requested configuration transformed with a given\nrule transition."),(0,i.mdx)("p",null,"For example, the transition for watchos when the iOS target depends on watchos\nresource:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"watchos_resource = rule(\n    cfg = iphone_to_watch_transition,\n    ...\n)\n")),(0,i.mdx)("h2",{id:"per-attribute-transition"},"Per attribute transition"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs")," object has two attribute constructors:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"attrs.transition_dep(cfg)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"attrs.split_transition_dep(cfg)"))),(0,i.mdx)("p",null,"These attributes are similar to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dep")," attribute. When dependencies are\nresolved for the rule instance, then they are resolved not with the rule\ninstance configuration, but with the configuration transformed with the given\ntransition."),(0,i.mdx)("p",null,"For split transition, each dependency is resolved into a dict of marker to\nproviders."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'android_binary = rule(\n    ...\n    attrs = {\n        "deps": attrs.list(attrs.split_transition_dep(cfg = cpu_split_transition), default = []),\n    },\n)\n')),(0,i.mdx)("p",null,"When the above is invoked as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'android_binary(\n    deps = ["//foo:bar", "//qux:quux"],\n)\n')),(0,i.mdx)("p",null,"Then the rule implementation gets something like the following in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"deps"),"\nattribute:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'{\n    [\n        {\n            # Key in this dict is the marker returned from split transition impl function.\n            "arm64": "providers for //foo:bar configured for arm64",\n            "armv7": "providers for //foo:bar configured for armv7",\n        },\n        {\n            "arm64": "providers for //qux:quux configured for arm64",\n            "armv7": "providers for //qux:quux configured for armv7",\n        },\n    ]\n}\n')),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"It is an error to pass a split transition object to ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.transition_dep")," and a non-split transition to ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.split_transition_dep"),".")),(0,i.mdx)("h2",{id:"per-target-transition"},"Per target transition"),(0,i.mdx)("p",null,"The Buck2 team is considering the implementation of per target transitions (that\nis, transitions referenced at a rule instantiation site as opposed to rule\ndeclaration site). No specific plans or APIs exists at the moment."),(0,i.mdx)("p",null,"It ",(0,i.mdx)("em",{parentName:"p"},"could")," be something like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'cxx_binary(\n    name = "foo",\n    cfg = "//transitions:opengl-es-1.0",\n    ...\n)\n')),(0,i.mdx)("h2",{id:"request-transition-on-command-line"},"Request transition on command line"),(0,i.mdx)("p",null,"For information, see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/rfcs/drafts/configuration-at-syntax"},"RFC"),"."),(0,i.mdx)("h2",{id:"access-rule-attributes-in-transition-function-implementation"},"Access rule attributes in transition function implementation"),(0,i.mdx)("p",null,"It might be useful for the transition function to be able to query rule\nattributes (for example, to perform transition to different configurations\ndepending on ",(0,i.mdx)("inlineCode",{parentName:"p"},"java_version")," attribute)."),(0,i.mdx)("p",null,"Both incoming (per rule) and outgoing (per dependency) transitions can access\nrule attributes. For outgoing transitions, transition rule implementation\naccesses the attributes of the target that has dependencies with transitions,\nnot attributes of dependency targets."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def _tr(platform, refs, attrs):\n    # NB: There are some restrictions on what attrs can be made accessible:\n    # - Only primitive values for now (providers are not resolved)\n    # - Only unconfigured attributes for now\n    attrs.my_list_attribute # == [12345, 67890]\n\ntr = transition(\n  _tr,\n  refs = {},\n  attrs = {\n    "my_list_attribute": attr.list(...),\n  },\n)\n\nmy_rule = rule(..., cfg=tr)\n\nmy_rule(\n  ...,\n  my_list_attribute = [12345, 67890],\n)\n')))}m.isMDXComponent=!0}}]);