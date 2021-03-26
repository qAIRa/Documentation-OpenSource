(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(135)),i={id:"FAQs",title:"FAQs",sidebar_label:"FAQs"},s={unversionedId:"FAQs",id:"FAQs",isDocsHomePage:!1,title:"FAQs",description:"Current version",source:"@site/docs/FAQs.md",slug:"/FAQs",permalink:"/docs/FAQs",editUrl:"https://github.com/qAIRa/Documentation-OpenSource/docs/FAQs.md",version:"current",sidebar_label:"FAQs",sidebar:"Docs",previous:{title:"License",permalink:"/docs/doc2"},next:{title:"Powered by MDX",permalink:"/docs/mdx"}},c=[{value:"Current version",id:"current-version",children:[]},{value:"Media types",id:"media-types",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"current-version"},"Current version"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Important"),": The default version of the API may change in the future. If you're building an application and care about the stability of the API, be sure to fork the master branch."),Object(a.b)("h2",{id:"media-types"},"Media types"),Object(a.b)("p",null,"The Media Type is specified in header of request. The most basic media types the API supports are:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"application/json")),Object(a.b)("p",null,"Method fetch:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},"    body: JSON.stringify(data),\n        headers: {\n            'Content-Type': 'application/json',\n        },\n")),Object(a.b)("p",null,"Neither of these specify a version, so you will always get the current default JSON representation of resources."),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("p",null,"If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Why am I getting a 404?")),Object(a.b)("p",null,"The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Why am I getting a 405?")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Not Allowed")," - It occurs when the web server is configured in a way that does not allow you to perform an action for a particular URL. Maybe when you run an endpoint with GET instead of POST."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Why am I not seeing all my results?")),Object(a.b)("p",null,"Most API calls accessing a list of resources (e.g., users, issues, etc.). If you're making requests and receiving an incomplete set of results, a response is specified in an unsupported content type."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Why am I getting a 500?")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Server Mistake")," - Indicates that something went wrong on the server that prevent the server from fulfilling the request."))}u.isMDXComponent=!0}}]);