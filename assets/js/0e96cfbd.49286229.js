(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),i=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=i(r),f=n,O=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?o.a.createElement(O,l(l({ref:t},c),{},{components:r})):o.a.createElement(O,l({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(135)),s={id:"gas_sensorMod",title:"Gas Sensor Module",sidebar_label:"Gas Sensor Module"},l={unversionedId:"gas_sensorMod",id:"gas_sensorMod",isDocsHomePage:!1,title:"Gas Sensor Module",description:"The file shows the functions that register and request data related to the Gas Sensor table.",source:"@site/APIresources/business.gas_sensor.md",slug:"/gas_sensorMod",permalink:"/APIresources/gas_sensorMod",version:"current",sidebar_label:"Gas Sensor Module",sidebar:"APIresources",previous:{title:"Eca Noise Module",permalink:"/APIresources/eca_noiseMod"},next:{title:"Get Business Helper Module",permalink:"/APIresources/get_business_helperMod"}},b=[],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},i={toc:b,Highlight:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The file shows the functions that register and request data related to the Gas Sensor table."),Object(a.b)("h4",{id:"gas_sensorrequestoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.requestOffsets()")),Object(a.b)("p",null,"Endpoint to list offsets variable filter by qHAWAX ID."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ID")," (",Object(a.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(a.b)("h4",{id:"gas_sensorrequestcontrolledoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.requestControlledOffsets()")),Object(a.b)("p",null,"Endpoint to list controlled offsets variable filter by qHAWAX ID."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ID")," (",Object(a.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(a.b)("h4",{id:"gas_sensorrequestnoncontrolledoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.requestNonControlledOffsets()")),Object(a.b)("p",null,"Endpoint to list non-controlled offsets variable filter by qHAWAX ID."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ID")," (",Object(a.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(a.b)("h4",{id:"gas_sensorsaveoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.saveOffsets()")),Object(a.b)("p",null,"Endpoint to save offset variables."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"ID")," (",Object(a.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"offsets")," (",Object(a.b)("em",{parentName:"p"},"Json"),") - Json of offset variable of qHAWAX")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"description")," (",Object(a.b)("em",{parentName:"p"},"string"),") - description of change")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(a.b)("em",{parentName:"p"},"string"),") - person in charge"))),Object(a.b)("h4",{id:"gas_sensorsavecontrolledoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.saveControlledOffsets()")),Object(a.b)("p",null,"Endpoint to save controlled offset variables."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"product_id")," (",Object(a.b)("em",{parentName:"p"},"integer"),") - qHAWAX name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"controlled_offsets")," (",Object(a.b)("em",{parentName:"p"},"Json"),") - Json of controlled offset variable of qHAWAX"))),Object(a.b)("h4",{id:"gas_sensorsavenoncontrolledoffsets"},Object(a.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"gas_sensor.saveNonControlledOffsets()")),Object(a.b)("p",null,"Endpoint to save non-controlled offset variables."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"product_id")," (",Object(a.b)("em",{parentName:"p"},"integer"),") - qHAWAX name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"controlled_offsets")," (",Object(a.b)("em",{parentName:"p"},"Json"),") - Json of controlled offset variable of qHAWAX"))))}p.isMDXComponent=!0}}]);