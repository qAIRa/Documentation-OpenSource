(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(t),f=n,m=p["".concat(i,".").concat(f)]||p[f]||s[f]||a;return t?o.a.createElement(m,c(c({ref:r},u),{},{components:t})):o.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"Highlight",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(116)),i={id:"viewController",title:"View Controller",sidebar_label:"View Controller"},c={unversionedId:"viewController",id:"viewController",isDocsHomePage:!1,title:"View Controller",description:"viewController.js",source:"@site/WEBresources/viewController.md",permalink:"/WEBresources/viewController",sidebar_label:"View Controller",sidebar:"WEBresources",previous:{title:"Picker Errors",permalink:"/WEBresources/pickerErrors"},next:{title:"Dashboard View",permalink:"/WEBresources/dashboardView"}},l=[],u=function(e){var r=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},r)},b={rightToc:l,Highlight:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"viewController.js")),Object(a.b)("p",null,"This file shows the functions to turn a .json file to a .csv file and downloads it."),Object(a.b)("h4",{id:"changeview-router-"},Object(a.b)(u,{color:"#b2e4f7",mdxType:"Highlight"},"changeView( router )")),Object(a.b)("p",null,"Changes the current view for a given router value."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Parameters"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"router")," (",Object(a.b)("em",{parentName:"li"},"string"),") - Selector variable."))),Object(a.b)("h4",{id:"goto-location-"},Object(a.b)(u,{color:"#b2e4f7",mdxType:"Highlight"},"goTo( location )")),Object(a.b)("p",null,"Router for the URLs."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Parameters"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"location")," (",Object(a.b)("em",{parentName:"li"},"string"),") - Selector variable"))))}p.isMDXComponent=!0}}]);