/*! For license information please see content---docs-making-a-progressive-web-appb-0-e-aca.bee76daca15aaa4b520f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,f=u[s+"."+p]||u[p]||c[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,s],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||w}function j(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||w}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var N=k.prototype=new j;N.constructor=k,r(N,O.prototype),N.isPureReactComponent=!0;var _={current:null},x={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,A=[];function $(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var u=n+M(s=t[c],c);l+=e(s,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),c=0;!(s=t.next()).done;)l+=e(s=s.value,u=n+M(s,c++),r,o);else"object"===s&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function W(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),I(e,q,t=$(t,a,r,o)),R(t)}function U(){var e=_.current;return null===e&&g("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,W,t=$(null,null,t,n)),R(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return T(e)||g("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:s,StrictMode:l,Suspense:d,createElement:P,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,i=r({},e.props),s=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)C.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==u?u[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){u=Array(o);for(var p=0;p<o;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:a,type:e.type,key:s,ref:l,props:i,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentOwner:x,assign:r}},D={default:L},H=D&&L||D;e.exports=H.default||H},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,l=i(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))o.call(n,u)&&(l[u]=n[u]);if(r){s=r(n);for(var p=0;p<s.length;p++)a.call(n,s[p])&&(l[s[p]]=n[s[p]])}}return l}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={id:"making-a-progressive-web-app",title:"Making a Progressive Web App"},s=[{value:"Why Opt-in?",id:"why-opt-in",children:[]},{value:"Offline-First Considerations",id:"offline-first-considerations",children:[]},{value:"Progressive Web App Metadata",id:"progressive-web-app-metadata",children:[]}],l={rightToc:s},c="wrapper";function u(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The production build has all the tools necessary to generate a first-class\n",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/progressive-web-apps/"}),"Progressive Web App"),",\nbut ",Object(r.b)("strong",{parentName:"p"},"the offline/cache-first behavior is opt-in only"),". By default,\nthe build process will generate a service worker file, but it will not be\nregistered, so it will not take control of your production web app."),Object(r.b)("p",null,"In order to opt-in to the offline-first behavior, developers should look for the\nfollowing in their ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/src/index.js"}),Object(r.b)("inlineCode",{parentName:"a"},"src/index.js"))," file:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")),Object(r.b)("p",null,"As the comment states, switching ",Object(r.b)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," to\n",Object(r.b)("inlineCode",{parentName:"p"},"serviceWorker.register()")," will opt you in to using the service worker."),Object(r.b)("h2",{id:"why-opt-in"},"Why Opt-in?"),Object(r.b)("p",null,"Offline-first Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background."),Object(r.b)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway."),Object(r.b)("li",{parentName:"ul"},"On mobile devices, your app can be added directly to the user's home screen, app icon and all. This eliminates the need for the app store.")),Object(r.b)("p",null,"However, they ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2398"}),"can make debugging deployments more challenging")," so, starting with Create React App 2, service workers are opt-in."),Object(r.b)("p",null,"The ",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin"}),Object(r.b)("inlineCode",{parentName:"a"},"workbox-webpack-plugin")),"\nis integrated into production configuration,\nand it will take care of generating a service worker file that will automatically\nprecache all of your local assets and keep them up to date as you deploy updates.\nThe service worker will use a ",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"}),"cache-first strategy"),"\nfor handling all requests for local assets, including\n",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"}),"navigation requests"),"\nfor your HTML, ensuring that your web app is consistently fast, even on a slow\nor unreliable network."),Object(r.b)("h2",{id:"offline-first-considerations"},"Offline-First Considerations"),Object(r.b)("p",null,"If you do decide to opt-in to service worker registration, please take the\nfollowing into account:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After the initial caching is done, the ",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"}),"service worker lifecycle"),"\ncontrols when updated content ends up being shown to users. In order to guard against\n",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430"}),"race conditions with lazy-loaded content"),',\nthe default behavior is to conservatively keep the updated service worker in the "',Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting"}),"waiting"),'"\nstate. This means that users will end up seeing older content until they close (reloading is not\nenough) their existing, open tabs. See ',Object(r.b)("a",o({parentName:"p"},{href:"https://jeffy.info/2018/10/10/sw-in-c-r-a.html"}),"this blog post"),"\nfor more details about this behavior.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Users aren't always familiar with offline-first web apps. It can be useful to\n",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption"}),"let the user know"),'\nwhen the service worker has finished populating your caches (showing a "This web\napp works offline!" message) and also let them know when the service worker has\nfetched the latest updates that will be available the next time they load the\npage (showing a "New content is available once existing tabs are closed." message). Showing\nthese messages is currently left as an exercise to the developer, but as a\nstarting point, you can make use of the logic included in ',Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/src/serviceWorker.js"}),Object(r.b)("inlineCode",{parentName:"a"},"src/serviceWorker.js")),", which\ndemonstrates which service worker lifecycle events to listen for to detect each\nscenario, and which as a default, just logs appropriate messages to the\nJavaScript console.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Service workers ",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https"}),"require HTTPS"),",\nalthough to facilitate local testing, that policy\n",Object(r.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385"}),"does not apply to ",Object(r.b)("inlineCode",{parentName:"a"},"localhost")),".\nIf your production web server does not support HTTPS, then the service worker\nregistration will fail, but the rest of your web app will remain functional.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The service worker is only enabled in the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/deployment"}),"production environment"),",\ne.g. the output of ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build"),". It's recommended that you do not enable an\noffline-first service worker in a development environment, as it can lead to\nfrustration when previously cached assets are used and do not include the latest\nchanges you've made locally.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you ",Object(r.b)("em",{parentName:"p"},"need")," to test your offline-first service worker locally, build\nthe application (using ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build"),") and run a simple http server from your\nbuild directory. After running the build script, ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," will give\ninstructions for one way to test your production build locally and the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/deployment"}),"deployment instructions")," have\ninstructions for using other methods. ",Object(r.b)("em",{parentName:"p"},"Be sure to always use an\nincognito window to avoid complications with your browser cache."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"By default, the generated service worker file will not intercept or cache any\ncross-origin traffic, like HTTP ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/integrating-with-an-api-backend"}),"API requests"),",\nimages, or embeds loaded from a different domain."))),Object(r.b)("h2",{id:"progressive-web-app-metadata"},"Progressive Web App Metadata"),Object(r.b)("p",null,"The default configuration includes a web app manifest located at\n",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/public/manifest.json"}),Object(r.b)("inlineCode",{parentName:"a"},"public/manifest.json")),", that you can customize with\ndetails specific to your web application."),Object(r.b)("p",null,"When a user adds a web app to their homescreen using Chrome or Firefox on\nAndroid, the metadata in ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/public/manifest.json"}),Object(r.b)("inlineCode",{parentName:"a"},"manifest.json"))," determines what\nicons, names, and branding colors to use when the web app is displayed.\n",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"}),"The Web App Manifest guide"),"\nprovides more context about what each field means, and how your customizations\nwill affect your users' experience."),Object(r.b)("p",null,"Progressive web apps that have been added to the homescreen will load faster and\nwork offline when there's an active service worker. That being said, the\nmetadata from the web app manifest will still be used regardless of whether or\nnot you opt-in to service worker registration."))}u.isMDXComponent=!0}}]);