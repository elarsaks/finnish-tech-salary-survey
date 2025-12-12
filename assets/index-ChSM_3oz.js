(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function c3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xv={exports:{}},Zo={},Sv={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),p3=Symbol.for("react.portal"),f3=Symbol.for("react.fragment"),h3=Symbol.for("react.strict_mode"),m3=Symbol.for("react.profiler"),g3=Symbol.for("react.provider"),y3=Symbol.for("react.context"),v3=Symbol.for("react.forward_ref"),_3=Symbol.for("react.suspense"),w3=Symbol.for("react.memo"),$3=Symbol.for("react.lazy"),xh=Symbol.iterator;function b3(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,Ev={};function Di(e,t,r){this.props=e,this.context=t,this.refs=Ev,this.updater=r||kv}Di.prototype.isReactComponent={};Di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tv(){}Tv.prototype=Di.prototype;function Dc(e,t,r){this.props=e,this.context=t,this.refs=Ev,this.updater=r||kv}var Mc=Dc.prototype=new Tv;Mc.constructor=Dc;Cv(Mc,Di.prototype);Mc.isPureReactComponent=!0;var Sh=Array.isArray,Iv=Object.prototype.hasOwnProperty,Bc={current:null},zv={key:!0,ref:!0,__self:!0,__source:!0};function Av(e,t,r){var n,i={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Iv.call(t,n)&&!zv.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:es,type:e,key:a,ref:s,props:i,_owner:Bc.current}}function x3(e,t){return{$$typeof:es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===es}function S3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var kh=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S3(""+e.key):t.toString(36)}function Ks(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case es:case p3:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Vl(s,0):n,Sh(i)?(r="",e!=null&&(r=e.replace(kh,"$&/")+"/"),Ks(i,t,r,"",function(d){return d})):i!=null&&(Lc(i)&&(i=x3(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(kh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Sh(e))for(var o=0;o<e.length;o++){a=e[o];var u=n+Vl(a,o);s+=Ks(a,t,r,u,i)}else if(u=b3(e),typeof u=="function")for(e=u.call(e),o=0;!(a=e.next()).done;)a=a.value,u=n+Vl(a,o++),s+=Ks(a,t,r,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gs(e,t,r){if(e==null)return e;var n=[],i=0;return Ks(e,n,"","",function(a){return t.call(r,a,i++)}),n}function k3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Qs={transition:null},C3={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:Bc};function Ov(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:gs,forEach:function(e,t,r){gs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Di;ye.Fragment=f3;ye.Profiler=m3;ye.PureComponent=Dc;ye.StrictMode=h3;ye.Suspense=_3;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C3;ye.act=Ov;ye.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Cv({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Bc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)Iv.call(t,u)&&!zv.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:es,type:e.type,key:i,ref:a,props:n,_owner:s}};ye.createContext=function(e){return e={$$typeof:y3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g3,_context:e},e.Consumer=e};ye.createElement=Av;ye.createFactory=function(e){var t=Av.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:v3,render:e}};ye.isValidElement=Lc;ye.lazy=function(e){return{$$typeof:$3,_payload:{_status:-1,_result:e},_init:k3}};ye.memo=function(e,t){return{$$typeof:w3,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=Qs.transition;Qs.transition={};try{e()}finally{Qs.transition=t}};ye.unstable_act=Ov;ye.useCallback=function(e,t){return mt.current.useCallback(e,t)};ye.useContext=function(e){return mt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return mt.current.useEffect(e,t)};ye.useId=function(){return mt.current.useId()};ye.useImperativeHandle=function(e,t,r){return mt.current.useImperativeHandle(e,t,r)};ye.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return mt.current.useMemo(e,t)};ye.useReducer=function(e,t,r){return mt.current.useReducer(e,t,r)};ye.useRef=function(e){return mt.current.useRef(e)};ye.useState=function(e){return mt.current.useState(e)};ye.useSyncExternalStore=function(e,t,r){return mt.current.useSyncExternalStore(e,t,r)};ye.useTransition=function(){return mt.current.useTransition()};ye.version="18.3.1";Sv.exports=ye;var Mt=Sv.exports;const Tr=c3(Mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E3=Mt,T3=Symbol.for("react.element"),I3=Symbol.for("react.fragment"),z3=Object.prototype.hasOwnProperty,A3=E3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O3={key:!0,ref:!0,__self:!0,__source:!0};function Rv(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)z3.call(t,n)&&!O3.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:T3,type:e,key:a,ref:s,props:i,_owner:A3.current}}Zo.Fragment=I3;Zo.jsx=Rv;Zo.jsxs=Rv;xv.exports=Zo;var se=xv.exports,Nv={exports:{}},Rt={},Pv={exports:{}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,L){var Y=W.length;W.push(L);e:for(;0<Y;){var N=Y-1>>>1,U=W[N];if(0<i(U,L))W[N]=L,W[Y]=U,Y=N;else break e}}function r(W){return W.length===0?null:W[0]}function n(W){if(W.length===0)return null;var L=W[0],Y=W.pop();if(Y!==L){W[0]=Y;e:for(var N=0,U=W.length,ie=U>>>1;N<ie;){var ce=2*(N+1)-1,D=W[ce],ue=ce+1,Ve=W[ue];if(0>i(D,Y))ue<U&&0>i(Ve,D)?(W[N]=Ve,W[ue]=Y,N=ue):(W[N]=D,W[ce]=Y,N=ce);else if(ue<U&&0>i(Ve,Y))W[N]=Ve,W[ue]=Y,N=ue;else break e}}return L}function i(W,L){var Y=W.sortIndex-L.sortIndex;return Y!==0?Y:W.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var u=[],d=[],p=1,f=null,h=3,y=!1,_=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(W){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=W)n(d),L.sortIndex=L.expirationTime,t(u,L);else break;L=r(d)}}function S(W){if($=!1,b(W),!_)if(r(u)!==null)_=!0,re(C);else{var L=r(d);L!==null&&Q(S,L.startTime-W)}}function C(W,L){_=!1,$&&($=!1,v(z),z=-1),y=!0;var Y=h;try{for(b(L),f=r(u);f!==null&&(!(f.expirationTime>L)||W&&!G());){var N=f.callback;if(typeof N=="function"){f.callback=null,h=f.priorityLevel;var U=N(f.expirationTime<=L);L=e.unstable_now(),typeof U=="function"?f.callback=U:f===r(u)&&n(u),b(L)}else n(u);f=r(u)}if(f!==null)var ie=!0;else{var ce=r(d);ce!==null&&Q(S,ce.startTime-L),ie=!1}return ie}finally{f=null,h=Y,y=!1}}var I=!1,T=null,z=-1,P=5,j=-1;function G(){return!(e.unstable_now()-j<P)}function Z(){if(T!==null){var W=e.unstable_now();j=W;var L=!0;try{L=T(!0,W)}finally{L?ae():(I=!1,T=null)}}else I=!1}var ae;if(typeof g=="function")ae=function(){g(Z)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,de=K.port2;K.port1.onmessage=Z,ae=function(){de.postMessage(null)}}else ae=function(){k(Z,0)};function re(W){T=W,I||(I=!0,ae())}function Q(W,L){z=k(function(){W(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,re(C))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(W){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var Y=h;h=L;try{return W()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,L){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=h;h=W;try{return L()}finally{h=Y}},e.unstable_scheduleCallback=function(W,L,Y){var N=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?N+Y:N):Y=N,W){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,W={id:p++,callback:L,priorityLevel:W,startTime:Y,expirationTime:U,sortIndex:-1},Y>N?(W.sortIndex=Y,t(d,W),r(u)===null&&W===r(d)&&($?(v(z),z=-1):$=!0,Q(S,Y-N))):(W.sortIndex=U,t(u,W),_||y||(_=!0,re(C))),W},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(W){var L=h;return function(){var Y=h;h=L;try{return W.apply(this,arguments)}finally{h=Y}}}})(Dv);Pv.exports=Dv;var R3=Pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=Mt,Ot=R3;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,Ra={};function Gn(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(Ra[e]=t,e=0;e<t.length;e++)Mv.add(t[e])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,P3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},Eh={};function D3(e){return vd.call(Eh,e)?!0:vd.call(Ch,e)?!1:P3.test(e)?Eh[e]=!0:(Ch[e]=!0,!1)}function M3(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B3(e,t,r,n){if(t===null||typeof t>"u"||M3(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,r,n,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function jc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uc,jc);it[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uc,jc);it[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uc,jc);it[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wc(e,t,r,n){var i=it.hasOwnProperty(t)?it[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B3(t,r,i,n)&&(r=null),n||i===null?D3(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Dr=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),Th=Symbol.iterator;function Gi(e){return e===null||typeof e!="object"?null:(e=Th&&e[Th]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,ql;function pa(e){if(ql===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Hl=!1;function Gl(e,t){if(!e||Hl)return"";Hl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=o);break}}}finally{Hl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?pa(e):""}function L3(e){switch(e.tag){case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function bd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ri:return"Fragment";case ti:return"Portal";case _d:return"Profiler";case Fc:return"StrictMode";case wd:return"Suspense";case $d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lv:return(e.displayName||"Context")+".Consumer";case Bv:return(e._context.displayName||"Context")+".Provider";case Vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qc:return t=e.displayName||null,t!==null?t:bd(e.type)||"Memo";case Kr:t=e._payload,e=e._init;try{return bd(e(t))}catch{}}return null}function U3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(t);case 8:return t===Fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j3(e){var t=jv(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){e._valueTracker||(e._valueTracker=j3(e))}function Wv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jv(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xd(e,t){var r=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ih(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=dn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fv(e,t){t=t.checked,t!=null&&Wc(e,"checked",t,!1)}function Sd(e,t){Fv(e,t);var r=dn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kd(e,t.type,r):t.hasOwnProperty("defaultValue")&&kd(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function kd(e,t,r){(t!=="number"||ho(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fa=Array.isArray;function gi(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+dn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ah(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(H(92));if(fa(r)){if(1<r.length)throw Error(H(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:dn(r)}}function Vv(e,t){var r=dn(t.value),n=dn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Oh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ed(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Hv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Na(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W3=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(e){W3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$a[t]=$a[e]})});function Gv(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||$a.hasOwnProperty(e)&&$a[e]?(""+t).trim():t+"px"}function Kv(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Gv(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var F3=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(e,t){if(t){if(F3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Id(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ad=null,yi=null,vi=null;function Rh(e){if(e=ns(e)){if(typeof Ad!="function")throw Error(H(280));var t=e.stateNode;t&&(t=rl(t),Ad(e.stateNode,e.type,t))}}function Qv(e){yi?vi?vi.push(e):vi=[e]:yi=e}function Yv(){if(yi){var e=yi,t=vi;if(vi=yi=null,Rh(e),t)for(e=0;e<t.length;e++)Rh(t[e])}}function Zv(e,t){return e(t)}function Xv(){}var Kl=!1;function Jv(e,t,r){if(Kl)return e(t,r);Kl=!0;try{return Zv(e,t,r)}finally{Kl=!1,(yi!==null||vi!==null)&&(Xv(),Yv())}}function Pa(e,t){var r=e.stateNode;if(r===null)return null;var n=rl(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(H(231,t,typeof r));return r}var Od=!1;if(Or)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Od=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Od=!1}function V3(e,t,r,n,i,a,s,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var ba=!1,mo=null,go=!1,Rd=null,q3={onError:function(e){ba=!0,mo=e}};function H3(e,t,r,n,i,a,s,o,u){ba=!1,mo=null,V3.apply(q3,arguments)}function G3(e,t,r,n,i,a,s,o,u){if(H3.apply(this,arguments),ba){if(ba){var d=mo;ba=!1,mo=null}else throw Error(H(198));go||(go=!0,Rd=d)}}function Kn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function e_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nh(e){if(Kn(e)!==e)throw Error(H(188))}function K3(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(H(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Nh(i),e;if(a===n)return Nh(i),t;a=a.sibling}throw Error(H(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s)throw Error(H(189))}}if(r.alternate!==n)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?e:t}function t_(e){return e=K3(e),e!==null?r_(e):null}function r_(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=r_(e);if(t!==null)return t;e=e.sibling}return null}var n_=Ot.unstable_scheduleCallback,Ph=Ot.unstable_cancelCallback,Q3=Ot.unstable_shouldYield,Y3=Ot.unstable_requestPaint,Fe=Ot.unstable_now,Z3=Ot.unstable_getCurrentPriorityLevel,Gc=Ot.unstable_ImmediatePriority,i_=Ot.unstable_UserBlockingPriority,yo=Ot.unstable_NormalPriority,X3=Ot.unstable_LowPriority,a_=Ot.unstable_IdlePriority,Xo=null,mr=null;function J3(e){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:rS,eS=Math.log,tS=Math.LN2;function rS(e){return e>>>=0,e===0?32:31-(eS(e)/tS|0)|0}var ws=64,$s=4194304;function ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~i;o!==0?n=ha(o):(a&=s,a!==0&&(n=ha(a)))}else s=r&~i,s!==0?n=ha(s):a!==0&&(n=ha(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-nr(t),i=1<<r,n|=e[r],t&=~i;return n}function nS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-nr(a),o=1<<s,u=i[s];u===-1?(!(o&r)||o&n)&&(i[s]=nS(o,t)):u<=t&&(e.expiredLanes|=o),a&=~o}}function Nd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function s_(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function Ql(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ts(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nr(t),e[t]=r}function aS(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-nr(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Kc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-nr(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var Ce=0;function o_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var l_,Qc,u_,d_,c_,Pd=!1,bs=[],en=null,tn=null,rn=null,Da=new Map,Ma=new Map,Yr=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function Qi(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ns(t),t!==null&&Qc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oS(e,t,r,n,i){switch(t){case"focusin":return en=Qi(en,e,t,r,n,i),!0;case"dragenter":return tn=Qi(tn,e,t,r,n,i),!0;case"mouseover":return rn=Qi(rn,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Da.set(a,Qi(Da.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Ma.set(a,Qi(Ma.get(a)||null,e,t,r,n,i)),!0}return!1}function p_(e){var t=zn(e.target);if(t!==null){var r=Kn(t);if(r!==null){if(t=r.tag,t===13){if(t=e_(r),t!==null){e.blockedOn=t,c_(e.priority,function(){u_(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Dd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);zd=n,r.target.dispatchEvent(n),zd=null}else return t=ns(r),t!==null&&Qc(t),e.blockedOn=r,!1;t.shift()}return!0}function Mh(e,t,r){Ys(e)&&r.delete(t)}function lS(){Pd=!1,en!==null&&Ys(en)&&(en=null),tn!==null&&Ys(tn)&&(tn=null),rn!==null&&Ys(rn)&&(rn=null),Da.forEach(Mh),Ma.forEach(Mh)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,Pd||(Pd=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,lS)))}function Ba(e){function t(i){return Yi(i,e)}if(0<bs.length){Yi(bs[0],e);for(var r=1;r<bs.length;r++){var n=bs[r];n.blockedOn===e&&(n.blockedOn=null)}}for(en!==null&&Yi(en,e),tn!==null&&Yi(tn,e),rn!==null&&Yi(rn,e),Da.forEach(t),Ma.forEach(t),r=0;r<Yr.length;r++)n=Yr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Yr.length&&(r=Yr[0],r.blockedOn===null);)p_(r),r.blockedOn===null&&Yr.shift()}var _i=Dr.ReactCurrentBatchConfig,_o=!0;function uS(e,t,r,n){var i=Ce,a=_i.transition;_i.transition=null;try{Ce=1,Yc(e,t,r,n)}finally{Ce=i,_i.transition=a}}function dS(e,t,r,n){var i=Ce,a=_i.transition;_i.transition=null;try{Ce=4,Yc(e,t,r,n)}finally{Ce=i,_i.transition=a}}function Yc(e,t,r,n){if(_o){var i=Dd(e,t,r,n);if(i===null)au(e,t,n,wo,r),Dh(e,n);else if(oS(i,e,t,r,n))n.stopPropagation();else if(Dh(e,n),t&4&&-1<sS.indexOf(e)){for(;i!==null;){var a=ns(i);if(a!==null&&l_(a),a=Dd(e,t,r,n),a===null&&au(e,t,n,wo,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else au(e,t,n,null,r)}}var wo=null;function Dd(e,t,r,n){if(wo=null,e=Hc(n),e=zn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=e_(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function f_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z3()){case Gc:return 1;case i_:return 4;case yo:case X3:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Xr=null,Zc=null,Zs=null;function h_(){if(Zs)return Zs;var e,t=Zc,r=t.length,n,i="value"in Xr?Xr.value:Xr.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[a-n];n++);return Zs=i.slice(e,1<n?1-n:void 0)}function Xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function Bh(){return!1}function Nt(e){function t(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xs:Bh,this.isPropagationStopped=Bh,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=Nt(Mi),rs=Le({},Mi,{view:0,detail:0}),cS=Nt(rs),Yl,Zl,Zi,Jo=Le({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zi&&(Zi&&e.type==="mousemove"?(Yl=e.screenX-Zi.screenX,Zl=e.screenY-Zi.screenY):Zl=Yl=0,Zi=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Lh=Nt(Jo),pS=Le({},Jo,{dataTransfer:0}),fS=Nt(pS),hS=Le({},rs,{relatedTarget:0}),Xl=Nt(hS),mS=Le({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=Nt(mS),yS=Le({},Mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vS=Nt(yS),_S=Le({},Mi,{data:0}),Uh=Nt(_S),wS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bS[e])?!!t[e]:!1}function Jc(){return xS}var SS=Le({},rs,{key:function(e){if(e.key){var t=wS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$S[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(e){return e.type==="keypress"?Xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kS=Nt(SS),CS=Le({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Nt(CS),ES=Le({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),TS=Nt(ES),IS=Le({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),zS=Nt(IS),AS=Le({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Nt(AS),RS=[9,13,27,32],ep=Or&&"CompositionEvent"in window,xa=null;Or&&"documentMode"in document&&(xa=document.documentMode);var NS=Or&&"TextEvent"in window&&!xa,m_=Or&&(!ep||xa&&8<xa&&11>=xa),Wh=" ",Fh=!1;function g_(e,t){switch(e){case"keyup":return RS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function PS(e,t){switch(e){case"compositionend":return y_(t);case"keypress":return t.which!==32?null:(Fh=!0,Wh);case"textInput":return e=t.data,e===Wh&&Fh?null:e;default:return null}}function DS(e,t){if(ni)return e==="compositionend"||!ep&&g_(e,t)?(e=h_(),Zs=Zc=Xr=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return m_&&t.locale!=="ko"?null:t.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!MS[e.type]:t==="textarea"}function v_(e,t,r,n){Qv(n),t=$o(t,"onChange"),0<t.length&&(r=new Xc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Sa=null,La=null;function BS(e){I_(e,0)}function el(e){var t=si(e);if(Wv(t))return e}function LS(e,t){if(e==="change")return t}var __=!1;if(Or){var Jl;if(Or){var eu="oninput"in document;if(!eu){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),eu=typeof qh.oninput=="function"}Jl=eu}else Jl=!1;__=Jl&&(!document.documentMode||9<document.documentMode)}function Hh(){Sa&&(Sa.detachEvent("onpropertychange",w_),La=Sa=null)}function w_(e){if(e.propertyName==="value"&&el(La)){var t=[];v_(t,La,e,Hc(e)),Jv(BS,t)}}function US(e,t,r){e==="focusin"?(Hh(),Sa=t,La=r,Sa.attachEvent("onpropertychange",w_)):e==="focusout"&&Hh()}function jS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(La)}function WS(e,t){if(e==="click")return el(t)}function FS(e,t){if(e==="input"||e==="change")return el(t)}function VS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var or=typeof Object.is=="function"?Object.is:VS;function Ua(e,t){if(or(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!vd.call(t,i)||!or(e[i],t[i]))return!1}return!0}function Gh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kh(e,t){var r=Gh(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gh(r)}}function $_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function b_(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ho(e.document)}return t}function tp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qS(e){var t=b_(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&$_(r.ownerDocument.documentElement,r)){if(n!==null&&tp(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Kh(r,a);var s=Kh(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var HS=Or&&"documentMode"in document&&11>=document.documentMode,ii=null,Md=null,ka=null,Bd=!1;function Qh(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bd||ii==null||ii!==ho(n)||(n=ii,"selectionStart"in n&&tp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ka&&Ua(ka,n)||(ka=n,n=$o(Md,"onSelect"),0<n.length&&(t=new Xc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ii)))}function Ss(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ai={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},tu={},x_={};Or&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function tl(e){if(tu[e])return tu[e];if(!ai[e])return e;var t=ai[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in x_)return tu[e]=t[r];return e}var S_=tl("animationend"),k_=tl("animationiteration"),C_=tl("animationstart"),E_=tl("transitionend"),T_=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){T_.set(e,t),Gn(t,[e])}for(var ru=0;ru<Yh.length;ru++){var nu=Yh[ru],GS=nu.toLowerCase(),KS=nu[0].toUpperCase()+nu.slice(1);fn(GS,"on"+KS)}fn(S_,"onAnimationEnd");fn(k_,"onAnimationIteration");fn(C_,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(E_,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Zh(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,G3(n,t,void 0,e),e.currentTarget=null}function I_(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==a&&i.isPropagationStopped())break e;Zh(i,o,d),a=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,d=o.currentTarget,o=o.listener,u!==a&&i.isPropagationStopped())break e;Zh(i,o,d),a=u}}}if(go)throw e=Rd,go=!1,Rd=null,e}function Oe(e,t){var r=t[Fd];r===void 0&&(r=t[Fd]=new Set);var n=e+"__bubble";r.has(n)||(z_(t,e,2,!1),r.add(n))}function iu(e,t,r){var n=0;t&&(n|=4),z_(r,e,n,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function ja(e){if(!e[ks]){e[ks]=!0,Mv.forEach(function(r){r!=="selectionchange"&&(QS.has(r)||iu(r,!1,e),iu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,iu("selectionchange",!1,t))}}function z_(e,t,r,n){switch(f_(t)){case 1:var i=uS;break;case 4:i=dS;break;default:i=Yc}r=i.bind(null,t,r,e),i=void 0,!Od||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function au(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;o!==null;){if(s=zn(o),s===null)return;if(u=s.tag,u===5||u===6){n=a=s;continue e}o=o.parentNode}}n=n.return}Jv(function(){var d=a,p=Hc(r),f=[];e:{var h=T_.get(e);if(h!==void 0){var y=Xc,_=e;switch(e){case"keypress":if(Xs(r)===0)break e;case"keydown":case"keyup":y=kS;break;case"focusin":_="focus",y=Xl;break;case"focusout":_="blur",y=Xl;break;case"beforeblur":case"afterblur":y=Xl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=TS;break;case S_:case k_:case C_:y=gS;break;case E_:y=zS;break;case"scroll":y=cS;break;case"wheel":y=OS;break;case"copy":case"cut":case"paste":y=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=jh}var $=(t&4)!==0,k=!$&&e==="scroll",v=$?h!==null?h+"Capture":null:h;$=[];for(var g=d,b;g!==null;){b=g;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,v!==null&&(S=Pa(g,v),S!=null&&$.push(Wa(g,S,b)))),k)break;g=g.return}0<$.length&&(h=new y(h,_,null,r,p),f.push({event:h,listeners:$}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==zd&&(_=r.relatedTarget||r.fromElement)&&(zn(_)||_[Rr]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=r.relatedTarget||r.toElement,y=d,_=_?zn(_):null,_!==null&&(k=Kn(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=d),y!==_)){if($=Lh,S="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=jh,S="onPointerLeave",v="onPointerEnter",g="pointer"),k=y==null?h:si(y),b=_==null?h:si(_),h=new $(S,g+"leave",y,r,p),h.target=k,h.relatedTarget=b,S=null,zn(p)===d&&($=new $(v,g+"enter",_,r,p),$.target=b,$.relatedTarget=k,S=$),k=S,y&&_)t:{for($=y,v=_,g=0,b=$;b;b=Xn(b))g++;for(b=0,S=v;S;S=Xn(S))b++;for(;0<g-b;)$=Xn($),g--;for(;0<b-g;)v=Xn(v),b--;for(;g--;){if($===v||v!==null&&$===v.alternate)break t;$=Xn($),v=Xn(v)}$=null}else $=null;y!==null&&Xh(f,h,y,$,!1),_!==null&&k!==null&&Xh(f,k,_,$,!0)}}e:{if(h=d?si(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=LS;else if(Vh(h))if(__)C=FS;else{C=jS;var I=US}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=WS);if(C&&(C=C(e,d))){v_(f,C,r,p);break e}I&&I(e,h,d),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&kd(h,"number",h.value)}switch(I=d?si(d):window,e){case"focusin":(Vh(I)||I.contentEditable==="true")&&(ii=I,Md=d,ka=null);break;case"focusout":ka=Md=ii=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,Qh(f,r,p);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":Qh(f,r,p)}var T;if(ep)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ni?g_(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(m_&&r.locale!=="ko"&&(ni||z!=="onCompositionStart"?z==="onCompositionEnd"&&ni&&(T=h_()):(Xr=p,Zc="value"in Xr?Xr.value:Xr.textContent,ni=!0)),I=$o(d,z),0<I.length&&(z=new Uh(z,e,null,r,p),f.push({event:z,listeners:I}),T?z.data=T:(T=y_(r),T!==null&&(z.data=T)))),(T=NS?PS(e,r):DS(e,r))&&(d=$o(d,"onBeforeInput"),0<d.length&&(p=new Uh("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=T))}I_(f,t)})}function Wa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function $o(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Pa(e,r),a!=null&&n.unshift(Wa(e,a,i)),a=Pa(e,t),a!=null&&n.push(Wa(e,a,i))),e=e.return}return n}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xh(e,t,r,n,i){for(var a=t._reactName,s=[];r!==null&&r!==n;){var o=r,u=o.alternate,d=o.stateNode;if(u!==null&&u===n)break;o.tag===5&&d!==null&&(o=d,i?(u=Pa(r,a),u!=null&&s.unshift(Wa(r,u,o))):i||(u=Pa(r,a),u!=null&&s.push(Wa(r,u,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var YS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function Jh(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(ZS,"")}function Cs(e,t,r){if(t=Jh(t),Jh(e)!==t&&r)throw Error(H(425))}function bo(){}var Ld=null,Ud=null;function jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(e){return em.resolve(null).then(e).catch(ek)}:Wd;function ek(e){setTimeout(function(){throw e})}function su(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ba(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ba(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),hr="__reactFiber$"+Bi,Fa="__reactProps$"+Bi,Rr="__reactContainer$"+Bi,Fd="__reactEvents$"+Bi,tk="__reactListeners$"+Bi,rk="__reactHandles$"+Bi;function zn(e){var t=e[hr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rr]||r[hr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=tm(e);e!==null;){if(r=e[hr])return r;e=tm(e)}return t}e=r,r=e.parentNode}return null}function ns(e){return e=e[hr]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function rl(e){return e[Fa]||null}var Vd=[],oi=-1;function hn(e){return{current:e}}function Ne(e){0>oi||(e.current=Vd[oi],Vd[oi]=null,oi--)}function ze(e,t){oi++,Vd[oi]=e.current,e.current=t}var cn={},dt=hn(cn),wt=hn(!1),Ln=cn;function xi(e,t){var r=e.type.contextTypes;if(!r)return cn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $t(e){return e=e.childContextTypes,e!=null}function xo(){Ne(wt),Ne(dt)}function rm(e,t,r){if(dt.current!==cn)throw Error(H(168));ze(dt,t),ze(wt,r)}function A_(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(H(108,U3(e)||"Unknown",i));return Le({},r,n)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Ln=dt.current,ze(dt,e),ze(wt,wt.current),!0}function nm(e,t,r){var n=e.stateNode;if(!n)throw Error(H(169));r?(e=A_(e,t,Ln),n.__reactInternalMemoizedMergedChildContext=e,Ne(wt),Ne(dt),ze(dt,e)):Ne(wt),ze(wt,r)}var Cr=null,nl=!1,ou=!1;function O_(e){Cr===null?Cr=[e]:Cr.push(e)}function nk(e){nl=!0,O_(e)}function mn(){if(!ou&&Cr!==null){ou=!0;var e=0,t=Ce;try{var r=Cr;for(Ce=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Cr=null,nl=!1}catch(i){throw Cr!==null&&(Cr=Cr.slice(e+1)),n_(Gc,mn),i}finally{Ce=t,ou=!1}}return null}var li=[],ui=0,ko=null,Co=0,Bt=[],Lt=0,Un=null,Ir=1,zr="";function kn(e,t){li[ui++]=Co,li[ui++]=ko,ko=e,Co=t}function R_(e,t,r){Bt[Lt++]=Ir,Bt[Lt++]=zr,Bt[Lt++]=Un,Un=e;var n=Ir;e=zr;var i=32-nr(n)-1;n&=~(1<<i),r+=1;var a=32-nr(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Ir=1<<32-nr(t)+i|r<<i|n,zr=a+e}else Ir=1<<a|r<<i|n,zr=e}function rp(e){e.return!==null&&(kn(e,1),R_(e,1,0))}function np(e){for(;e===ko;)ko=li[--ui],li[ui]=null,Co=li[--ui],li[ui]=null;for(;e===Un;)Un=Bt[--Lt],Bt[Lt]=null,zr=Bt[--Lt],Bt[Lt]=null,Ir=Bt[--Lt],Bt[Lt]=null}var zt=null,It=null,Pe=!1,er=null;function N_(e,t){var r=Ut(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function im(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,It=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Un!==null?{id:Ir,overflow:zr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ut(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,zt=e,It=null,!0):!1;default:return!1}}function qd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hd(e){if(Pe){var t=It;if(t){var r=t;if(!im(e,t)){if(qd(e))throw Error(H(418));t=nn(r.nextSibling);var n=zt;t&&im(e,t)?N_(n,r):(e.flags=e.flags&-4097|2,Pe=!1,zt=e)}}else{if(qd(e))throw Error(H(418));e.flags=e.flags&-4097|2,Pe=!1,zt=e}}}function am(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Es(e){if(e!==zt)return!1;if(!Pe)return am(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jd(e.type,e.memoizedProps)),t&&(t=It)){if(qd(e))throw P_(),Error(H(418));for(;t;)N_(e,t),t=nn(t.nextSibling)}if(am(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){It=nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}It=null}}else It=zt?nn(e.stateNode.nextSibling):null;return!0}function P_(){for(var e=It;e;)e=nn(e.nextSibling)}function Si(){It=zt=null,Pe=!1}function ip(e){er===null?er=[e]:er.push(e)}var ik=Dr.ReactCurrentBatchConfig;function Xi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var n=r.stateNode}if(!n)throw Error(H(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sm(e){var t=e._init;return t(e._payload)}function D_(e){function t(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function r(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=ln(v,g),v.index=0,v.sibling=null,v}function a(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=2,g):b):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function o(v,g,b,S){return g===null||g.tag!==6?(g=hu(b,v.mode,S),g.return=v,g):(g=i(g,b),g.return=v,g)}function u(v,g,b,S){var C=b.type;return C===ri?p(v,g,b.props.children,S,b.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kr&&sm(C)===g.type)?(S=i(g,b.props),S.ref=Xi(v,g,b),S.return=v,S):(S=ao(b.type,b.key,b.props,null,v.mode,S),S.ref=Xi(v,g,b),S.return=v,S)}function d(v,g,b,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=mu(b,v.mode,S),g.return=v,g):(g=i(g,b.children||[]),g.return=v,g)}function p(v,g,b,S,C){return g===null||g.tag!==7?(g=Pn(b,v.mode,S,C),g.return=v,g):(g=i(g,b),g.return=v,g)}function f(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hu(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:return b=ao(g.type,g.key,g.props,null,v.mode,b),b.ref=Xi(v,null,g),b.return=v,b;case ti:return g=mu(g,v.mode,b),g.return=v,g;case Kr:var S=g._init;return f(v,S(g._payload),b)}if(fa(g)||Gi(g))return g=Pn(g,v.mode,b,null),g.return=v,g;Ts(v,g)}return null}function h(v,g,b,S){var C=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:o(v,g,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:return b.key===C?u(v,g,b,S):null;case ti:return b.key===C?d(v,g,b,S):null;case Kr:return C=b._init,h(v,g,C(b._payload),S)}if(fa(b)||Gi(b))return C!==null?null:p(v,g,b,S,null);Ts(v,b)}return null}function y(v,g,b,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(b)||null,o(g,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ys:return v=v.get(S.key===null?b:S.key)||null,u(g,v,S,C);case ti:return v=v.get(S.key===null?b:S.key)||null,d(g,v,S,C);case Kr:var I=S._init;return y(v,g,b,I(S._payload),C)}if(fa(S)||Gi(S))return v=v.get(b)||null,p(g,v,S,C,null);Ts(g,S)}return null}function _(v,g,b,S){for(var C=null,I=null,T=g,z=g=0,P=null;T!==null&&z<b.length;z++){T.index>z?(P=T,T=null):P=T.sibling;var j=h(v,T,b[z],S);if(j===null){T===null&&(T=P);break}e&&T&&j.alternate===null&&t(v,T),g=a(j,g,z),I===null?C=j:I.sibling=j,I=j,T=P}if(z===b.length)return r(v,T),Pe&&kn(v,z),C;if(T===null){for(;z<b.length;z++)T=f(v,b[z],S),T!==null&&(g=a(T,g,z),I===null?C=T:I.sibling=T,I=T);return Pe&&kn(v,z),C}for(T=n(v,T);z<b.length;z++)P=y(T,v,z,b[z],S),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?z:P.key),g=a(P,g,z),I===null?C=P:I.sibling=P,I=P);return e&&T.forEach(function(G){return t(v,G)}),Pe&&kn(v,z),C}function $(v,g,b,S){var C=Gi(b);if(typeof C!="function")throw Error(H(150));if(b=C.call(b),b==null)throw Error(H(151));for(var I=C=null,T=g,z=g=0,P=null,j=b.next();T!==null&&!j.done;z++,j=b.next()){T.index>z?(P=T,T=null):P=T.sibling;var G=h(v,T,j.value,S);if(G===null){T===null&&(T=P);break}e&&T&&G.alternate===null&&t(v,T),g=a(G,g,z),I===null?C=G:I.sibling=G,I=G,T=P}if(j.done)return r(v,T),Pe&&kn(v,z),C;if(T===null){for(;!j.done;z++,j=b.next())j=f(v,j.value,S),j!==null&&(g=a(j,g,z),I===null?C=j:I.sibling=j,I=j);return Pe&&kn(v,z),C}for(T=n(v,T);!j.done;z++,j=b.next())j=y(T,v,z,j.value,S),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?z:j.key),g=a(j,g,z),I===null?C=j:I.sibling=j,I=j);return e&&T.forEach(function(Z){return t(v,Z)}),Pe&&kn(v,z),C}function k(v,g,b,S){if(typeof b=="object"&&b!==null&&b.type===ri&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:e:{for(var C=b.key,I=g;I!==null;){if(I.key===C){if(C=b.type,C===ri){if(I.tag===7){r(v,I.sibling),g=i(I,b.props.children),g.return=v,v=g;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kr&&sm(C)===I.type){r(v,I.sibling),g=i(I,b.props),g.ref=Xi(v,I,b),g.return=v,v=g;break e}r(v,I);break}else t(v,I);I=I.sibling}b.type===ri?(g=Pn(b.props.children,v.mode,S,b.key),g.return=v,v=g):(S=ao(b.type,b.key,b.props,null,v.mode,S),S.ref=Xi(v,g,b),S.return=v,v=S)}return s(v);case ti:e:{for(I=b.key;g!==null;){if(g.key===I)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){r(v,g.sibling),g=i(g,b.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else t(v,g);g=g.sibling}g=mu(b,v.mode,S),g.return=v,v=g}return s(v);case Kr:return I=b._init,k(v,g,I(b._payload),S)}if(fa(b))return _(v,g,b,S);if(Gi(b))return $(v,g,b,S);Ts(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,b),g.return=v,v=g):(r(v,g),g=hu(b,v.mode,S),g.return=v,v=g),s(v)):r(v,g)}return k}var ki=D_(!0),M_=D_(!1),Eo=hn(null),To=null,di=null,ap=null;function sp(){ap=di=To=null}function op(e){var t=Eo.current;Ne(Eo),e._currentValue=t}function Gd(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function wi(e,t){To=e,ap=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(ap!==e)if(e={context:e,memoizedValue:t,next:null},di===null){if(To===null)throw Error(H(308));di=e,To.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return t}var An=null;function lp(e){An===null?An=[e]:An.push(e)}function B_(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,lp(t)):(r.next=i.next,i.next=r),t.interleaved=r,Nr(e,n)}function Nr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Qr=!1;function up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$e&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Nr(e,r)}return i=n.interleaved,i===null?(t.next=t,lp(n)):(t.next=i.next,i.next=t),n.interleaved=t,Nr(e,r)}function Js(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Kc(e,r)}}function om(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Io(e,t,r,n){var i=e.updateQueue;Qr=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,d=u.next;u.next=null,s===null?a=d:s.next=d,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==s&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=u))}if(a!==null){var f=i.baseState;s=0,p=d=u=null,o=a;do{var h=o.lane,y=o.eventTime;if((n&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=e,$=o;switch(h=t,y=r,$.tag){case 1:if(_=$.payload,typeof _=="function"){f=_.call(y,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=$.payload,h=typeof _=="function"?_.call(y,f,h):_,h==null)break e;f=Le({},f,h);break e;case 2:Qr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else y={eventTime:y,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=y,u=f):p=p.next=y,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(u=f),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Wn|=s,e.lanes=s,e.memoizedState=f}}function lm(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(H(191,i));i.call(n)}}}var is={},gr=hn(is),Va=hn(is),qa=hn(is);function On(e){if(e===is)throw Error(H(174));return e}function dp(e,t){switch(ze(qa,t),ze(Va,e),ze(gr,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ed(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ed(t,e)}Ne(gr),ze(gr,t)}function Ci(){Ne(gr),Ne(Va),Ne(qa)}function U_(e){On(qa.current);var t=On(gr.current),r=Ed(t,e.type);t!==r&&(ze(Va,e),ze(gr,r))}function cp(e){Va.current===e&&(Ne(gr),Ne(Va))}var Me=hn(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lu=[];function pp(){for(var e=0;e<lu.length;e++)lu[e]._workInProgressVersionPrimary=null;lu.length=0}var eo=Dr.ReactCurrentDispatcher,uu=Dr.ReactCurrentBatchConfig,jn=0,Be=null,Ke=null,Je=null,Ao=!1,Ca=!1,Ha=0,ak=0;function at(){throw Error(H(321))}function fp(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!or(e[r],t[r]))return!1;return!0}function hp(e,t,r,n,i,a){if(jn=a,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?uk:dk,e=r(n,i),Ca){a=0;do{if(Ca=!1,Ha=0,25<=a)throw Error(H(301));a+=1,Je=Ke=null,t.updateQueue=null,eo.current=ck,e=r(n,i)}while(Ca)}if(eo.current=Oo,t=Ke!==null&&Ke.next!==null,jn=0,Je=Ke=Be=null,Ao=!1,t)throw Error(H(300));return e}function mp(){var e=Ha!==0;return Ha=0,e}function pr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Be.memoizedState=Je=e:Je=Je.next=e,Je}function Ft(){if(Ke===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Je===null?Be.memoizedState:Je.next;if(t!==null)Je=t,Ke=e;else{if(e===null)throw Error(H(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Be.memoizedState=Je=e:Je=Je.next=e}return Je}function Ga(e,t){return typeof t=="function"?t(e):t}function du(e){var t=Ft(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=Ke,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var o=s=null,u=null,d=a;do{var p=d.lane;if((jn&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=f,s=n):u=u.next=f,Be.lanes|=p,Wn|=p}d=d.next}while(d!==null&&d!==a);u===null?s=n:u.next=o,or(n,t.memoizedState)||(_t=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Be.lanes|=a,Wn|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function cu(e){var t=Ft(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);or(a,t.memoizedState)||(_t=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function j_(){}function W_(e,t){var r=Be,n=Ft(),i=t(),a=!or(n.memoizedState,i);if(a&&(n.memoizedState=i,_t=!0),n=n.queue,gp(q_.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,Ka(9,V_.bind(null,r,n,i,t),void 0,null),tt===null)throw Error(H(349));jn&30||F_(r,t,i)}return i}function F_(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function V_(e,t,r,n){t.value=r,t.getSnapshot=n,H_(t)&&G_(e)}function q_(e,t,r){return r(function(){H_(t)&&G_(e)})}function H_(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!or(e,r)}catch{return!0}}function G_(e){var t=Nr(e,1);t!==null&&ir(t,e,1,-1)}function um(e){var t=pr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:e},t.queue=e,e=e.dispatch=lk.bind(null,Be,e),[t.memoizedState,e]}function Ka(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function K_(){return Ft().memoizedState}function to(e,t,r,n){var i=pr();Be.flags|=e,i.memoizedState=Ka(1|t,r,void 0,n===void 0?null:n)}function il(e,t,r,n){var i=Ft();n=n===void 0?null:n;var a=void 0;if(Ke!==null){var s=Ke.memoizedState;if(a=s.destroy,n!==null&&fp(n,s.deps)){i.memoizedState=Ka(t,r,a,n);return}}Be.flags|=e,i.memoizedState=Ka(1|t,r,a,n)}function dm(e,t){return to(8390656,8,e,t)}function gp(e,t){return il(2048,8,e,t)}function Q_(e,t){return il(4,2,e,t)}function Y_(e,t){return il(4,4,e,t)}function Z_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function X_(e,t,r){return r=r!=null?r.concat([e]):null,il(4,4,Z_.bind(null,t,e),r)}function yp(){}function J_(e,t){var r=Ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&fp(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function e1(e,t){var r=Ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&fp(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function t1(e,t,r){return jn&21?(or(r,t)||(r=s_(),Be.lanes|=r,Wn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=r)}function sk(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var n=uu.transition;uu.transition={};try{e(!1),t()}finally{Ce=r,uu.transition=n}}function r1(){return Ft().memoizedState}function ok(e,t,r){var n=on(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},n1(e))i1(t,r);else if(r=B_(e,t,r,n),r!==null){var i=ht();ir(r,e,n,i),a1(r,t,n)}}function lk(e,t,r){var n=on(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(n1(e))i1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,r);if(i.hasEagerState=!0,i.eagerState=o,or(o,s)){var u=t.interleaved;u===null?(i.next=i,lp(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=B_(e,t,i,n),r!==null&&(i=ht(),ir(r,e,n,i),a1(r,t,n))}}function n1(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function i1(e,t){Ca=Ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function a1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Kc(e,r)}}var Oo={readContext:Wt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},uk={readContext:Wt,useCallback:function(e,t){return pr().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:dm,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,to(4194308,4,Z_.bind(null,t,e),r)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var r=pr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=pr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ok.bind(null,Be,e),[n.memoizedState,e]},useRef:function(e){var t=pr();return e={current:e},t.memoizedState=e},useState:um,useDebugValue:yp,useDeferredValue:function(e){return pr().memoizedState=e},useTransition:function(){var e=um(!1),t=e[0];return e=sk.bind(null,e[1]),pr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Be,i=pr();if(Pe){if(r===void 0)throw Error(H(407));r=r()}else{if(r=t(),tt===null)throw Error(H(349));jn&30||F_(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,dm(q_.bind(null,n,a,e),[e]),n.flags|=2048,Ka(9,V_.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=pr(),t=tt.identifierPrefix;if(Pe){var r=zr,n=Ir;r=(n&~(1<<32-nr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ha++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ak++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dk={readContext:Wt,useCallback:J_,useContext:Wt,useEffect:gp,useImperativeHandle:X_,useInsertionEffect:Q_,useLayoutEffect:Y_,useMemo:e1,useReducer:du,useRef:K_,useState:function(){return du(Ga)},useDebugValue:yp,useDeferredValue:function(e){var t=Ft();return t1(t,Ke.memoizedState,e)},useTransition:function(){var e=du(Ga)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:j_,useSyncExternalStore:W_,useId:r1,unstable_isNewReconciler:!1},ck={readContext:Wt,useCallback:J_,useContext:Wt,useEffect:gp,useImperativeHandle:X_,useInsertionEffect:Q_,useLayoutEffect:Y_,useMemo:e1,useReducer:cu,useRef:K_,useState:function(){return cu(Ga)},useDebugValue:yp,useDeferredValue:function(e){var t=Ft();return Ke===null?t.memoizedState=e:t1(t,Ke.memoizedState,e)},useTransition:function(){var e=cu(Ga)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:j_,useSyncExternalStore:W_,useId:r1,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Kd(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var al={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ht(),i=on(e),a=Ar(n,i);a.payload=t,r!=null&&(a.callback=r),t=an(e,a,i),t!==null&&(ir(t,e,i,n),Js(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ht(),i=on(e),a=Ar(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=an(e,a,i),t!==null&&(ir(t,e,i,n),Js(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),n=on(e),i=Ar(r,n);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,n),t!==null&&(ir(t,e,n,r),Js(t,e,n))}};function cm(e,t,r,n,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ua(r,n)||!Ua(i,a):!0}function s1(e,t,r){var n=!1,i=cn,a=t.contextType;return typeof a=="object"&&a!==null?a=Wt(a):(i=$t(t)?Ln:dt.current,n=t.contextTypes,a=(n=n!=null)?xi(e,i):cn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function pm(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Qd(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},up(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Wt(a):(a=$t(t)?Ln:dt.current,i.context=xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Kd(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&al.enqueueReplaceState(i,i.state,null),Io(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ei(e,t){try{var r="",n=t;do r+=L3(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function pu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Yd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var pk=typeof WeakMap=="function"?WeakMap:Map;function o1(e,t,r){r=Ar(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){No||(No=!0,sc=n),Yd(e,t)},r}function l1(e,t,r){r=Ar(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Yd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Yd(e,t),typeof n!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function fm(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new pk;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Ck.bind(null,e,t,r),t.then(e,e))}function hm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mm(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ar(-1,1),t.tag=2,an(r,t,1))),r.lanes|=1),e)}var fk=Dr.ReactCurrentOwner,_t=!1;function ft(e,t,r,n){t.child=e===null?M_(t,null,r,n):ki(t,e.child,r,n)}function gm(e,t,r,n,i){r=r.render;var a=t.ref;return wi(t,i),n=hp(e,t,r,n,a,i),r=mp(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Pe&&r&&rp(t),t.flags|=1,ft(e,t,n,i),t.child)}function ym(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!kp(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,u1(e,t,a,n,i)):(e=ao(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ua,r(s,n)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=ln(a,n),e.ref=t.ref,e.return=t,t.child=e}function u1(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Ua(a,n)&&e.ref===t.ref)if(_t=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return Zd(e,t,r,n,i)}function d1(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(pi,Et),Et|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(pi,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ze(pi,Et),Et|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,ze(pi,Et),Et|=n;return ft(e,t,i,r),t.child}function c1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zd(e,t,r,n,i){var a=$t(r)?Ln:dt.current;return a=xi(t,a),wi(t,i),r=hp(e,t,r,n,a,i),n=mp(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Pe&&n&&rp(t),t.flags|=1,ft(e,t,r,i),t.child)}function vm(e,t,r,n,i){if($t(r)){var a=!0;So(t)}else a=!1;if(wi(t,i),t.stateNode===null)ro(e,t),s1(t,r,n),Qd(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var u=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Wt(d):(d=$t(r)?Ln:dt.current,d=xi(t,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||u!==d)&&pm(t,s,n,d),Qr=!1;var h=t.memoizedState;s.state=h,Io(t,n,s,i),u=t.memoizedState,o!==n||h!==u||wt.current||Qr?(typeof p=="function"&&(Kd(t,r,p,n),u=t.memoizedState),(o=Qr||cm(t,r,o,n,h,u,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,L_(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Xt(t.type,o),s.props=d,f=t.pendingProps,h=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=$t(r)?Ln:dt.current,u=xi(t,u));var y=r.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==u)&&pm(t,s,n,u),Qr=!1,h=t.memoizedState,s.state=h,Io(t,n,s,i);var _=t.memoizedState;o!==f||h!==_||wt.current||Qr?(typeof y=="function"&&(Kd(t,r,y,n),_=t.memoizedState),(d=Qr||cm(t,r,d,n,h,_,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,_,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,_,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=_),s.props=n,s.state=_,s.context=u,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Xd(e,t,r,n,a,i)}function Xd(e,t,r,n,i,a){c1(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&nm(t,r,!1),Pr(e,t,a);n=t.stateNode,fk.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=ki(t,e.child,null,a),t.child=ki(t,null,o,a)):ft(e,t,o,a),t.memoizedState=n.state,i&&nm(t,r,!0),t.child}function p1(e){var t=e.stateNode;t.pendingContext?rm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rm(e,t.context,!1),dp(e,t.containerInfo)}function _m(e,t,r,n,i){return Si(),ip(i),t.flags|=256,ft(e,t,r,n),t.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function f1(e,t,r){var n=t.pendingProps,i=Me.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ze(Me,i&1),e===null)return Hd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ll(s,n,0,null),e=Pn(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ec(r),t.memoizedState=Jd,e):vp(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return hk(e,t,s,n,o,i,r);if(a){a=n.fallback,s=t.mode,i=e.child,o=i.sibling;var u={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=ln(i,u),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=ln(o,a):(a=Pn(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?ec(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=Jd,n}return a=e.child,e=a.sibling,n=ln(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function vp(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Is(e,t,r,n){return n!==null&&ip(n),ki(t,e.child,null,r),e=vp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hk(e,t,r,n,i,a,s){if(r)return t.flags&256?(t.flags&=-257,n=pu(Error(H(422))),Is(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=ll({mode:"visible",children:n.children},i,0,null),a=Pn(a,i,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&ki(t,e.child,null,s),t.child.memoizedState=ec(s),t.memoizedState=Jd,a);if(!(t.mode&1))return Is(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,a=Error(H(419)),n=pu(a,n,void 0),Is(e,t,s,n)}if(o=(s&e.childLanes)!==0,_t||o){if(n=tt,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Nr(e,i),ir(n,e,i,-1))}return Sp(),n=pu(Error(H(421))),Is(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ek.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,It=nn(i.nextSibling),zt=t,Pe=!0,er=null,e!==null&&(Bt[Lt++]=Ir,Bt[Lt++]=zr,Bt[Lt++]=Un,Ir=e.id,zr=e.overflow,Un=t),t=vp(t,n.children),t.flags|=4096,t)}function wm(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Gd(e.return,t,r)}function fu(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function h1(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(ft(e,t,n.children,r),n=Me.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,r,t);else if(e.tag===19)wm(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ze(Me,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&zo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fu(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fu(t,!0,r,null,a);break;case"together":fu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,r=ln(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ln(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function mk(e,t,r){switch(t.tag){case 3:p1(t),Si();break;case 5:U_(t);break;case 1:$t(t.type)&&So(t);break;case 4:dp(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ze(Eo,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ze(Me,Me.current&1),t.flags|=128,null):r&t.child.childLanes?f1(e,t,r):(ze(Me,Me.current&1),e=Pr(e,t,r),e!==null?e.sibling:null);ze(Me,Me.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return h1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ze(Me,Me.current),n)break;return null;case 22:case 23:return t.lanes=0,d1(e,t,r)}return Pr(e,t,r)}var m1,tc,g1,y1;m1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tc=function(){};g1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,On(gr.current);var a=null;switch(r){case"input":i=xd(e,i),n=xd(e,n),a=[];break;case"select":i=Le({},i,{value:void 0}),n=Le({},n,{value:void 0}),a=[];break;case"textarea":i=Cd(e,i),n=Cd(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=bo)}Td(r,n);var s;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ra.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in n){var u=n[d];if(o=i?.[d],n.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&o[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(a||(a=[]),a.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Oe("scroll",e),a||o===u||(a=[])):(a=a||[]).push(d,u))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};y1=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ji(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function gk(e,t,r){var n=t.pendingProps;switch(np(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return $t(t.type)&&xo(),st(t),null;case 3:return n=t.stateNode,Ci(),Ne(wt),Ne(dt),pp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,er!==null&&(uc(er),er=null))),tc(e,t),st(t),null;case 5:cp(t);var i=On(qa.current);if(r=t.type,e!==null&&t.stateNode!=null)g1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(H(166));return st(t),null}if(e=On(gr.current),Es(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[hr]=t,n[Fa]=a,e=(t.mode&1)!==0,r){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(i=0;i<ma.length;i++)Oe(ma[i],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Ih(n,a),Oe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Oe("invalid",n);break;case"textarea":Ah(n,a),Oe("invalid",n)}Td(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?n.textContent!==o&&(a.suppressHydrationWarning!==!0&&Cs(n.textContent,o,e),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Cs(n.textContent,o,e),i=["children",""+o]):Ra.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Oe("scroll",n)}switch(r){case"input":vs(n),zh(n,a,!0);break;case"textarea":vs(n),Oh(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=bo)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qv(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[hr]=t,e[Fa]=n,m1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Id(r,n),r){case"dialog":Oe("cancel",e),Oe("close",e),i=n;break;case"iframe":case"object":case"embed":Oe("load",e),i=n;break;case"video":case"audio":for(i=0;i<ma.length;i++)Oe(ma[i],e);i=n;break;case"source":Oe("error",e),i=n;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=n;break;case"details":Oe("toggle",e),i=n;break;case"input":Ih(e,n),i=xd(e,n),Oe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Le({},n,{value:void 0}),Oe("invalid",e);break;case"textarea":Ah(e,n),i=Cd(e,n),Oe("invalid",e);break;default:i=n}Td(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="style"?Kv(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hv(e,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Na(e,u):typeof u=="number"&&Na(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ra.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Oe("scroll",e):u!=null&&Wc(e,a,u,s))}switch(r){case"input":vs(e),zh(e,n,!1);break;case"textarea":vs(e),Oh(e);break;case"option":n.value!=null&&e.setAttribute("value",""+dn(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?gi(e,!!n.multiple,a,!1):n.defaultValue!=null&&gi(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)y1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(H(166));if(r=On(qa.current),On(gr.current),Es(t)){if(n=t.stateNode,r=t.memoizedProps,n[hr]=t,(a=n.nodeValue!==r)&&(e=zt,e!==null))switch(e.tag){case 3:Cs(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cs(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[hr]=t,t.stateNode=n}return st(t),null;case 13:if(Ne(Me),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&It!==null&&t.mode&1&&!(t.flags&128))P_(),Si(),t.flags|=98560,a=!1;else if(a=Es(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(H(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(H(317));a[hr]=t}else Si(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),a=!1}else er!==null&&(uc(er),er=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Qe===0&&(Qe=3):Sp())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Ci(),tc(e,t),e===null&&ja(t.stateNode.containerInfo),st(t),null;case 10:return op(t.type._context),st(t),null;case 17:return $t(t.type)&&xo(),st(t),null;case 19:if(Ne(Me),a=t.memoizedState,a===null)return st(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)Ji(a,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=zo(e),s!==null){for(t.flags|=128,Ji(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ze(Me,Me.current&1|2),t.child}e=e.sibling}a.tail!==null&&Fe()>Ti&&(t.flags|=128,n=!0,Ji(a,!1),t.lanes=4194304)}else{if(!n)if(e=zo(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ji(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Pe)return st(t),null}else 2*Fe()-a.renderingStartTime>Ti&&r!==1073741824&&(t.flags|=128,n=!0,Ji(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Fe(),t.sibling=null,r=Me.current,ze(Me,n?r&1|2:r&1),t):(st(t),null);case 22:case 23:return xp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Et&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function yk(e,t){switch(np(t),t.tag){case 1:return $t(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),Ne(wt),Ne(dt),pp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cp(t),null;case 13:if(Ne(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Me),null;case 4:return Ci(),null;case 10:return op(t.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var zs=!1,lt=!1,vk=typeof WeakSet=="function"?WeakSet:Set,ee=null;function ci(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){je(e,t,n)}else r.current=null}function rc(e,t,r){try{r()}catch(n){je(e,t,n)}}var $m=!1;function _k(e,t){if(Ld=_o,e=b_(),tp(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,u=-1,d=0,p=0,f=e,h=null;t:for(;;){for(var y;f!==r||i!==0&&f.nodeType!==3||(o=s+i),f!==a||n!==0&&f.nodeType!==3||(u=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break t;if(h===r&&++d===i&&(o=s),h===a&&++p===n&&(u=s),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}r=o===-1||u===-1?null:{start:o,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ud={focusedElem:e,selectionRange:r},_o=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var $=_.memoizedProps,k=_.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?$:Xt(t.type,$),k);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(S){je(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return _=$m,$m=!1,_}function Ea(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&rc(t,r,a)}i=i.next}while(i!==n)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function nc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function v1(e){var t=e.alternate;t!==null&&(e.alternate=null,v1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hr],delete t[Fa],delete t[Fd],delete t[tk],delete t[rk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _1(e){return e.tag===5||e.tag===3||e.tag===4}function bm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=bo));else if(n!==4&&(e=e.child,e!==null))for(ic(e,t,r),e=e.sibling;e!==null;)ic(e,t,r),e=e.sibling}function ac(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ac(e,t,r),e=e.sibling;e!==null;)ac(e,t,r),e=e.sibling}var rt=null,Jt=!1;function Fr(e,t,r){for(r=r.child;r!==null;)w1(e,t,r),r=r.sibling}function w1(e,t,r){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Xo,r)}catch{}switch(r.tag){case 5:lt||ci(r,t);case 6:var n=rt,i=Jt;rt=null,Fr(e,t,r),rt=n,Jt=i,rt!==null&&(Jt?(e=rt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):rt.removeChild(r.stateNode));break;case 18:rt!==null&&(Jt?(e=rt,r=r.stateNode,e.nodeType===8?su(e.parentNode,r):e.nodeType===1&&su(e,r),Ba(e)):su(rt,r.stateNode));break;case 4:n=rt,i=Jt,rt=r.stateNode.containerInfo,Jt=!0,Fr(e,t,r),rt=n,Jt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&rc(r,t,s),i=i.next}while(i!==n)}Fr(e,t,r);break;case 1:if(!lt&&(ci(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){je(r,t,o)}Fr(e,t,r);break;case 21:Fr(e,t,r);break;case 22:r.mode&1?(lt=(n=lt)||r.memoizedState!==null,Fr(e,t,r),lt=n):Fr(e,t,r);break;default:Fr(e,t,r)}}function xm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new vk),t.forEach(function(n){var i=Tk.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ht(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:rt=o.stateNode,Jt=!1;break e;case 3:rt=o.stateNode.containerInfo,Jt=!0;break e;case 4:rt=o.stateNode.containerInfo,Jt=!0;break e}o=o.return}if(rt===null)throw Error(H(160));w1(a,s,i),rt=null,Jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){je(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$1(t,e),t=t.sibling}function $1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),dr(e),n&4){try{Ea(3,e,e.return),sl(3,e)}catch($){je(e,e.return,$)}try{Ea(5,e,e.return)}catch($){je(e,e.return,$)}}break;case 1:Ht(t,e),dr(e),n&512&&r!==null&&ci(r,r.return);break;case 5:if(Ht(t,e),dr(e),n&512&&r!==null&&ci(r,r.return),e.flags&32){var i=e.stateNode;try{Na(i,"")}catch($){je(e,e.return,$)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Fv(i,a),Id(o,s);var d=Id(o,a);for(s=0;s<u.length;s+=2){var p=u[s],f=u[s+1];p==="style"?Kv(i,f):p==="dangerouslySetInnerHTML"?Hv(i,f):p==="children"?Na(i,f):Wc(i,p,f,d)}switch(o){case"input":Sd(i,a);break;case"textarea":Vv(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?gi(i,!!a.multiple,y,!1):h!==!!a.multiple&&(a.defaultValue!=null?gi(i,!!a.multiple,a.defaultValue,!0):gi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Fa]=a}catch($){je(e,e.return,$)}}break;case 6:if(Ht(t,e),dr(e),n&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch($){je(e,e.return,$)}}break;case 3:if(Ht(t,e),dr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch($){je(e,e.return,$)}break;case 4:Ht(t,e),dr(e);break;case 13:Ht(t,e),dr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||($p=Fe())),n&4&&xm(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(lt=(d=lt)||p,Ht(t,e),lt=d):Ht(t,e),dr(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(ee=e,p=e.child;p!==null;){for(f=ee=p;ee!==null;){switch(h=ee,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ea(4,h,h.return);break;case 1:ci(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch($){je(n,r,$)}}break;case 5:ci(h,h.return);break;case 22:if(h.memoizedState!==null){km(f);continue}}y!==null?(y.return=h,ee=y):km(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Gv("display",s))}catch($){je(e,e.return,$)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch($){je(e,e.return,$)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ht(t,e),dr(e),n&4&&xm(e);break;case 21:break;default:Ht(t,e),dr(e)}}function dr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_1(r)){var n=r;break e}r=r.return}throw Error(H(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Na(i,""),n.flags&=-33);var a=bm(e);ac(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,o=bm(e);ic(e,o,s);break;default:throw Error(H(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wk(e,t,r){ee=e,b1(e)}function b1(e,t,r){for(var n=(e.mode&1)!==0;ee!==null;){var i=ee,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||zs;if(!s){var o=i.alternate,u=o!==null&&o.memoizedState!==null||lt;o=zs;var d=lt;if(zs=s,(lt=u)&&!d)for(ee=i;ee!==null;)s=ee,u=s.child,s.tag===22&&s.memoizedState!==null?Cm(i):u!==null?(u.return=s,ee=u):Cm(i);for(;a!==null;)ee=a,b1(a),a=a.sibling;ee=i,zs=o,lt=d}Sm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ee=a):Sm(e)}}function Sm(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||sl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!lt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Xt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&lm(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}lm(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}lt||t.flags&512&&nc(t)}catch(h){je(t,t.return,h)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function km(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function Cm(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{sl(4,t)}catch(u){je(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){je(t,i,u)}}var a=t.return;try{nc(t)}catch(u){je(t,a,u)}break;case 5:var s=t.return;try{nc(t)}catch(u){je(t,s,u)}}}catch(u){je(t,t.return,u)}if(t===e){ee=null;break}var o=t.sibling;if(o!==null){o.return=t.return,ee=o;break}ee=t.return}}var $k=Math.ceil,Ro=Dr.ReactCurrentDispatcher,_p=Dr.ReactCurrentOwner,jt=Dr.ReactCurrentBatchConfig,$e=0,tt=null,Ge=null,nt=0,Et=0,pi=hn(0),Qe=0,Qa=null,Wn=0,ol=0,wp=0,Ta=null,vt=null,$p=0,Ti=1/0,Sr=null,No=!1,sc=null,sn=null,As=!1,Jr=null,Po=0,Ia=0,oc=null,no=-1,io=0;function ht(){return $e&6?Fe():no!==-1?no:no=Fe()}function on(e){return e.mode&1?$e&2&&nt!==0?nt&-nt:ik.transition!==null?(io===0&&(io=s_()),io):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:f_(e.type)),e):1}function ir(e,t,r,n){if(50<Ia)throw Ia=0,oc=null,Error(H(185));ts(e,r,n),(!($e&2)||e!==tt)&&(e===tt&&(!($e&2)&&(ol|=r),Qe===4&&Zr(e,nt)),bt(e,n),r===1&&$e===0&&!(t.mode&1)&&(Ti=Fe()+500,nl&&mn()))}function bt(e,t){var r=e.callbackNode;iS(e,t);var n=vo(e,e===tt?nt:0);if(n===0)r!==null&&Ph(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ph(r),t===1)e.tag===0?nk(Em.bind(null,e)):O_(Em.bind(null,e)),JS(function(){!($e&6)&&mn()}),r=null;else{switch(o_(n)){case 1:r=Gc;break;case 4:r=i_;break;case 16:r=yo;break;case 536870912:r=a_;break;default:r=yo}r=z1(r,x1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function x1(e,t){if(no=-1,io=0,$e&6)throw Error(H(327));var r=e.callbackNode;if($i()&&e.callbackNode!==r)return null;var n=vo(e,e===tt?nt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Do(e,n);else{t=n;var i=$e;$e|=2;var a=k1();(tt!==e||nt!==t)&&(Sr=null,Ti=Fe()+500,Nn(e,t));do try{Sk();break}catch(o){S1(e,o)}while(!0);sp(),Ro.current=a,$e=i,Ge!==null?t=0:(tt=null,nt=0,t=Qe)}if(t!==0){if(t===2&&(i=Nd(e),i!==0&&(n=i,t=lc(e,i))),t===1)throw r=Qa,Nn(e,0),Zr(e,n),bt(e,Fe()),r;if(t===6)Zr(e,n);else{if(i=e.current.alternate,!(n&30)&&!bk(i)&&(t=Do(e,n),t===2&&(a=Nd(e),a!==0&&(n=a,t=lc(e,a))),t===1))throw r=Qa,Nn(e,0),Zr(e,n),bt(e,Fe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(H(345));case 2:Cn(e,vt,Sr);break;case 3:if(Zr(e,n),(n&130023424)===n&&(t=$p+500-Fe(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wd(Cn.bind(null,e,vt,Sr),t);break}Cn(e,vt,Sr);break;case 4:if(Zr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-nr(n);a=1<<s,s=t[s],s>i&&(i=s),n&=~a}if(n=i,n=Fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*$k(n/1960))-n,10<n){e.timeoutHandle=Wd(Cn.bind(null,e,vt,Sr),n);break}Cn(e,vt,Sr);break;case 5:Cn(e,vt,Sr);break;default:throw Error(H(329))}}}return bt(e,Fe()),e.callbackNode===r?x1.bind(null,e):null}function lc(e,t){var r=Ta;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=vt,vt=r,t!==null&&uc(t)),e}function uc(e){vt===null?vt=e:vt.push.apply(vt,e)}function bk(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!or(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zr(e,t){for(t&=~wp,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-nr(t),n=1<<r;e[r]=-1,t&=~n}}function Em(e){if($e&6)throw Error(H(327));$i();var t=vo(e,0);if(!(t&1))return bt(e,Fe()),null;var r=Do(e,t);if(e.tag!==0&&r===2){var n=Nd(e);n!==0&&(t=n,r=lc(e,n))}if(r===1)throw r=Qa,Nn(e,0),Zr(e,t),bt(e,Fe()),r;if(r===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,vt,Sr),bt(e,Fe()),null}function bp(e,t){var r=$e;$e|=1;try{return e(t)}finally{$e=r,$e===0&&(Ti=Fe()+500,nl&&mn())}}function Fn(e){Jr!==null&&Jr.tag===0&&!($e&6)&&$i();var t=$e;$e|=1;var r=jt.transition,n=Ce;try{if(jt.transition=null,Ce=1,e)return e()}finally{Ce=n,jt.transition=r,$e=t,!($e&6)&&mn()}}function xp(){Et=pi.current,Ne(pi)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,XS(r)),Ge!==null)for(r=Ge.return;r!==null;){var n=r;switch(np(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xo();break;case 3:Ci(),Ne(wt),Ne(dt),pp();break;case 5:cp(n);break;case 4:Ci();break;case 13:Ne(Me);break;case 19:Ne(Me);break;case 10:op(n.type._context);break;case 22:case 23:xp()}r=r.return}if(tt=e,Ge=e=ln(e.current,null),nt=Et=t,Qe=0,Qa=null,wp=ol=Wn=0,vt=Ta=null,An!==null){for(t=0;t<An.length;t++)if(r=An[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}An=null}return e}function S1(e,t){do{var r=Ge;try{if(sp(),eo.current=Oo,Ao){for(var n=Be.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ao=!1}if(jn=0,Je=Ke=Be=null,Ca=!1,Ha=0,_p.current=null,r===null||r.return===null){Qe=1,Qa=t,Ge=null;break}e:{var a=e,s=r.return,o=r,u=t;if(t=nt,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=o,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=hm(s);if(y!==null){y.flags&=-257,mm(y,s,o,a,t),y.mode&1&&fm(a,d,t),t=y,u=d;var _=t.updateQueue;if(_===null){var $=new Set;$.add(u),t.updateQueue=$}else _.add(u);break e}else{if(!(t&1)){fm(a,d,t),Sp();break e}u=Error(H(426))}}else if(Pe&&o.mode&1){var k=hm(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mm(k,s,o,a,t),ip(Ei(u,o));break e}}a=u=Ei(u,o),Qe!==4&&(Qe=2),Ta===null?Ta=[a]:Ta.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=o1(a,u,t);om(a,v);break e;case 1:o=u;var g=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(sn===null||!sn.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=l1(a,o,t);om(a,S);break e}}a=a.return}while(a!==null)}E1(r)}catch(C){t=C,Ge===r&&r!==null&&(Ge=r=r.return);continue}break}while(!0)}function k1(){var e=Ro.current;return Ro.current=Oo,e===null?Oo:e}function Sp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Wn&268435455)&&!(ol&268435455)||Zr(tt,nt)}function Do(e,t){var r=$e;$e|=2;var n=k1();(tt!==e||nt!==t)&&(Sr=null,Nn(e,t));do try{xk();break}catch(i){S1(e,i)}while(!0);if(sp(),$e=r,Ro.current=n,Ge!==null)throw Error(H(261));return tt=null,nt=0,Qe}function xk(){for(;Ge!==null;)C1(Ge)}function Sk(){for(;Ge!==null&&!Q3();)C1(Ge)}function C1(e){var t=I1(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?E1(e):Ge=t,_p.current=null}function E1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=yk(r,t),r!==null){r.flags&=32767,Ge=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ge=null;return}}else if(r=gk(r,t,Et),r!==null){Ge=r;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Qe===0&&(Qe=5)}function Cn(e,t,r){var n=Ce,i=jt.transition;try{jt.transition=null,Ce=1,kk(e,t,r,n)}finally{jt.transition=i,Ce=n}return null}function kk(e,t,r,n){do $i();while(Jr!==null);if($e&6)throw Error(H(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(aS(e,a),e===tt&&(Ge=tt=null,nt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||As||(As=!0,z1(yo,function(){return $i(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=jt.transition,jt.transition=null;var s=Ce;Ce=1;var o=$e;$e|=4,_p.current=null,_k(e,r),$1(r,e),qS(Ud),_o=!!Ld,Ud=Ld=null,e.current=r,wk(r),Y3(),$e=o,Ce=s,jt.transition=a}else e.current=r;if(As&&(As=!1,Jr=e,Po=i),a=e.pendingLanes,a===0&&(sn=null),J3(r.stateNode),bt(e,Fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=sc,sc=null,e;return Po&1&&e.tag!==0&&$i(),a=e.pendingLanes,a&1?e===oc?Ia++:(Ia=0,oc=e):Ia=0,mn(),null}function $i(){if(Jr!==null){var e=o_(Po),t=jt.transition,r=Ce;try{if(jt.transition=null,Ce=16>e?16:e,Jr===null)var n=!1;else{if(e=Jr,Jr=null,Po=0,$e&6)throw Error(H(331));var i=$e;for($e|=4,ee=e.current;ee!==null;){var a=ee,s=a.child;if(ee.flags&16){var o=a.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(ee=d;ee!==null;){var p=ee;switch(p.tag){case 0:case 11:case 15:Ea(8,p,a)}var f=p.child;if(f!==null)f.return=p,ee=f;else for(;ee!==null;){p=ee;var h=p.sibling,y=p.return;if(v1(p),p===d){ee=null;break}if(h!==null){h.return=y,ee=h;break}ee=y}}}var _=a.alternate;if(_!==null){var $=_.child;if($!==null){_.child=null;do{var k=$.sibling;$.sibling=null,$=k}while($!==null)}}ee=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ee=s;else e:for(;ee!==null;){if(a=ee,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ea(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,ee=v;break e}ee=a.return}}var g=e.current;for(ee=g;ee!==null;){s=ee;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,ee=b;else e:for(s=g;ee!==null;){if(o=ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:sl(9,o)}}catch(C){je(o,o.return,C)}if(o===s){ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ee=S;break e}ee=o.return}}if($e=i,mn(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Xo,e)}catch{}n=!0}return n}finally{Ce=r,jt.transition=t}}return!1}function Tm(e,t,r){t=Ei(r,t),t=o1(e,t,1),e=an(e,t,1),t=ht(),e!==null&&(ts(e,1,t),bt(e,t))}function je(e,t,r){if(e.tag===3)Tm(e,e,r);else for(;t!==null;){if(t.tag===3){Tm(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sn===null||!sn.has(n))){e=Ei(r,e),e=l1(t,e,1),t=an(t,e,1),e=ht(),t!==null&&(ts(t,1,e),bt(t,e));break}}t=t.return}}function Ck(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(nt&r)===r&&(Qe===4||Qe===3&&(nt&130023424)===nt&&500>Fe()-$p?Nn(e,0):wp|=r),bt(e,t)}function T1(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var r=ht();e=Nr(e,t),e!==null&&(ts(e,t,r),bt(e,r))}function Ek(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),T1(e,r)}function Tk(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(H(314))}n!==null&&n.delete(t),T1(e,r)}var I1;I1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)_t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return _t=!1,mk(e,t,r);_t=!!(e.flags&131072)}else _t=!1,Pe&&t.flags&1048576&&R_(t,Co,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ro(e,t),e=t.pendingProps;var i=xi(t,dt.current);wi(t,r),i=hp(null,t,n,e,i,r);var a=mp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(n)?(a=!0,So(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(t),i.updater=al,t.stateNode=i,i._reactInternals=t,Qd(t,n,e,r),t=Xd(null,t,n,!0,a,r)):(t.tag=0,Pe&&a&&rp(t),ft(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=zk(n),e=Xt(n,e),i){case 0:t=Zd(null,t,n,e,r);break e;case 1:t=vm(null,t,n,e,r);break e;case 11:t=gm(null,t,n,e,r);break e;case 14:t=ym(null,t,n,Xt(n.type,e),r);break e}throw Error(H(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Xt(n,i),Zd(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Xt(n,i),vm(e,t,n,i,r);case 3:e:{if(p1(t),e===null)throw Error(H(387));n=t.pendingProps,a=t.memoizedState,i=a.element,L_(e,t),Io(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ei(Error(H(423)),t),t=_m(e,t,n,r,i);break e}else if(n!==i){i=Ei(Error(H(424)),t),t=_m(e,t,n,r,i);break e}else for(It=nn(t.stateNode.containerInfo.firstChild),zt=t,Pe=!0,er=null,r=M_(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Si(),n===i){t=Pr(e,t,r);break e}ft(e,t,n,r)}t=t.child}return t;case 5:return U_(t),e===null&&Hd(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,jd(n,i)?s=null:a!==null&&jd(n,a)&&(t.flags|=32),c1(e,t),ft(e,t,s,r),t.child;case 6:return e===null&&Hd(t),null;case 13:return f1(e,t,r);case 4:return dp(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ki(t,null,n,r):ft(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Xt(n,i),gm(e,t,n,i,r);case 7:return ft(e,t,t.pendingProps,r),t.child;case 8:return ft(e,t,t.pendingProps.children,r),t.child;case 12:return ft(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ze(Eo,n._currentValue),n._currentValue=s,a!==null)if(or(a.value,s)){if(a.children===i.children&&!wt.current){t=Pr(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var u=o.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=Ar(-1,r&-r),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),Gd(a.return,r,t),o.lanes|=r;break}u=u.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(H(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Gd(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}ft(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,wi(t,r),i=Wt(i),n=n(i),t.flags|=1,ft(e,t,n,r),t.child;case 14:return n=t.type,i=Xt(n,t.pendingProps),i=Xt(n.type,i),ym(e,t,n,i,r);case 15:return u1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Xt(n,i),ro(e,t),t.tag=1,$t(n)?(e=!0,So(t)):e=!1,wi(t,r),s1(t,n,i),Qd(t,n,i,r),Xd(null,t,n,!0,e,r);case 19:return h1(e,t,r);case 22:return d1(e,t,r)}throw Error(H(156,t.tag))};function z1(e,t){return n_(e,t)}function Ik(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,r,n){return new Ik(e,t,r,n)}function kp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zk(e){if(typeof e=="function")return kp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vc)return 11;if(e===qc)return 14}return 2}function ln(e,t){var r=e.alternate;return r===null?(r=Ut(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ao(e,t,r,n,i,a){var s=2;if(n=e,typeof e=="function")kp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ri:return Pn(r.children,i,a,t);case Fc:s=8,i|=8;break;case _d:return e=Ut(12,r,t,i|2),e.elementType=_d,e.lanes=a,e;case wd:return e=Ut(13,r,t,i),e.elementType=wd,e.lanes=a,e;case $d:return e=Ut(19,r,t,i),e.elementType=$d,e.lanes=a,e;case Uv:return ll(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bv:s=10;break e;case Lv:s=9;break e;case Vc:s=11;break e;case qc:s=14;break e;case Kr:s=16,n=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Ut(s,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Pn(e,t,r,n){return e=Ut(7,e,n,t),e.lanes=r,e}function ll(e,t,r,n){return e=Ut(22,e,n,t),e.elementType=Uv,e.lanes=r,e.stateNode={isHidden:!1},e}function hu(e,t,r){return e=Ut(6,e,null,t),e.lanes=r,e}function mu(e,t,r){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ak(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cp(e,t,r,n,i,a,s,o,u){return e=new Ak(e,t,r,o,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(a),e}function Ok(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function A1(e){if(!e)return cn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var r=e.type;if($t(r))return A_(e,r,t)}return t}function O1(e,t,r,n,i,a,s,o,u){return e=Cp(r,n,!0,e,i,a,s,o,u),e.context=A1(null),r=e.current,n=ht(),i=on(r),a=Ar(n,i),a.callback=t??null,an(r,a,i),e.current.lanes=i,ts(e,i,n),bt(e,n),e}function ul(e,t,r,n){var i=t.current,a=ht(),s=on(i);return r=A1(r),t.context===null?t.context=r:t.pendingContext=r,t=Ar(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=an(i,t,s),e!==null&&(ir(e,i,s,a),Js(e,i,s)),s}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ep(e,t){Im(e,t),(e=e.alternate)&&Im(e,t)}function Rk(){return null}var R1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tp(e){this._internalRoot=e}dl.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));ul(e,t,null,null)};dl.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){ul(null,e,null,null)}),t[Rr]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=d_();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Yr.length&&t!==0&&t<Yr[r].priority;r++);Yr.splice(r,0,e),r===0&&p_(e)}};function Ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zm(){}function Nk(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var d=Mo(s);a.call(d)}}var s=O1(t,n,e,0,null,!1,!1,"",zm);return e._reactRootContainer=s,e[Rr]=s.current,ja(e.nodeType===8?e.parentNode:e),Fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var d=Mo(u);o.call(d)}}var u=Cp(e,0,!1,null,null,!1,!1,"",zm);return e._reactRootContainer=u,e[Rr]=u.current,ja(e.nodeType===8?e.parentNode:e),Fn(function(){ul(t,u,r,n)}),u}function pl(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var u=Mo(s);o.call(u)}}ul(t,s,e,i)}else s=Nk(r,t,e,i,n);return Mo(s)}l_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ha(t.pendingLanes);r!==0&&(Kc(t,r|1),bt(t,Fe()),!($e&6)&&(Ti=Fe()+500,mn()))}break;case 13:Fn(function(){var n=Nr(e,1);if(n!==null){var i=ht();ir(n,e,1,i)}}),Ep(e,1)}};Qc=function(e){if(e.tag===13){var t=Nr(e,134217728);if(t!==null){var r=ht();ir(t,e,134217728,r)}Ep(e,134217728)}};u_=function(e){if(e.tag===13){var t=on(e),r=Nr(e,t);if(r!==null){var n=ht();ir(r,e,t,n)}Ep(e,t)}};d_=function(){return Ce};c_=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}};Ad=function(e,t,r){switch(t){case"input":if(Sd(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=rl(n);if(!i)throw Error(H(90));Wv(n),Sd(n,i)}}}break;case"textarea":Vv(e,r);break;case"select":t=r.value,t!=null&&gi(e,!!r.multiple,t,!1)}};Zv=bp;Xv=Fn;var Pk={usingClientEntryPoint:!1,Events:[ns,si,rl,Qv,Yv,bp]},ea={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dk={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=t_(e),e===null?null:e.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Rk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{Xo=Os.inject(Dk),mr=Os}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pk;Rt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(t))throw Error(H(200));return Ok(e,t,null,r)};Rt.createRoot=function(e,t){if(!Ip(e))throw Error(H(299));var r=!1,n="",i=R1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cp(e,1,!1,null,null,r,!1,n,i),e[Rr]=t.current,ja(e.nodeType===8?e.parentNode:e),new Tp(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=t_(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Fn(e)};Rt.hydrate=function(e,t,r){if(!cl(t))throw Error(H(200));return pl(null,e,t,!0,r)};Rt.hydrateRoot=function(e,t,r){if(!Ip(e))throw Error(H(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=R1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=O1(t,null,e,1,r??null,i,!1,a,s),e[Rr]=t.current,ja(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new dl(t)};Rt.render=function(e,t,r){if(!cl(t))throw Error(H(200));return pl(null,e,t,!1,r)};Rt.unmountComponentAtNode=function(e){if(!cl(e))throw Error(H(40));return e._reactRootContainer?(Fn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};Rt.unstable_batchedUpdates=bp;Rt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!cl(r))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return pl(e,t,r,!1,n)};Rt.version="18.3.1-next-f1338f8080-20240426";function N1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N1)}catch(e){console.error(e)}}N1(),Nv.exports=Rt;var Mk=Nv.exports,P1,Am=Mk;P1=Am.createRoot,Am.hydrateRoot;var ut=function(){return ut=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},ut.apply(this,arguments)};function Ya(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var Re="-ms-",za="-moz-",ke="-webkit-",D1="comm",fl="rule",zp="decl",Bk="@import",M1="@keyframes",Lk="@layer",B1=Math.abs,Ap=String.fromCharCode,dc=Object.assign;function Uk(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function L1(e){return e.trim()}function kr(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,r){return e.replace(t,r)}function so(e,t,r){return e.indexOf(t,r)}function et(e,t){return e.charCodeAt(t)|0}function Ii(e,t,r){return e.slice(t,r)}function fr(e){return e.length}function U1(e){return e.length}function ga(e,t){return t.push(e),e}function jk(e,t){return e.map(t).join("")}function Om(e,t){return e.filter(function(r){return!kr(r,t)})}var hl=1,zi=1,j1=0,Vt=0,He=0,Li="";function ml(e,t,r,n,i,a,s,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:hl,column:zi,length:s,return:"",siblings:o}}function Gr(e,t){return dc(ml("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jn(e){for(;e.root;)e=Gr(e.root,{children:[e]});ga(e,e.siblings)}function Wk(){return He}function Fk(){return He=Vt>0?et(Li,--Vt):0,zi--,He===10&&(zi=1,hl--),He}function ar(){return He=Vt<j1?et(Li,Vt++):0,zi++,He===10&&(zi=1,hl++),He}function Dn(){return et(Li,Vt)}function oo(){return Vt}function gl(e,t){return Ii(Li,e,t)}function cc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vk(e){return hl=zi=1,j1=fr(Li=e),Vt=0,[]}function qk(e){return Li="",e}function gu(e){return L1(gl(Vt-1,pc(e===91?e+2:e===40?e+1:e)))}function Hk(e){for(;(He=Dn())&&He<33;)ar();return cc(e)>2||cc(He)>3?"":" "}function Gk(e,t){for(;--t&&ar()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return gl(e,oo()+(t<6&&Dn()==32&&ar()==32))}function pc(e){for(;ar();)switch(He){case e:return Vt;case 34:case 39:e!==34&&e!==39&&pc(He);break;case 40:e===41&&pc(e);break;case 92:ar();break}return Vt}function Kk(e,t){for(;ar()&&e+He!==57;)if(e+He===84&&Dn()===47)break;return"/*"+gl(t,Vt-1)+"*"+Ap(e===47?e:ar())}function Qk(e){for(;!cc(Dn());)ar();return gl(e,Vt)}function Yk(e){return qk(lo("",null,null,null,[""],e=Vk(e),0,[0],e))}function lo(e,t,r,n,i,a,s,o,u){for(var d=0,p=0,f=s,h=0,y=0,_=0,$=1,k=1,v=1,g=0,b="",S=i,C=a,I=n,T=b;k;)switch(_=g,g=ar()){case 40:if(_!=108&&et(T,f-1)==58){so(T+=me(gu(g),"&","&\f"),"&\f",B1(d?o[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=gu(g);break;case 9:case 10:case 13:case 32:T+=Hk(_);break;case 92:T+=Gk(oo()-1,7);continue;case 47:switch(Dn()){case 42:case 47:ga(Zk(Kk(ar(),oo()),t,r,u),u);break;default:T+="/"}break;case 123*$:o[d++]=fr(T)*v;case 125*$:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+p:v==-1&&(T=me(T,/\f/g,"")),y>0&&fr(T)-f&&ga(y>32?Nm(T+";",n,r,f-1,u):Nm(me(T," ","")+";",n,r,f-2,u),u);break;case 59:T+=";";default:if(ga(I=Rm(T,t,r,d,p,i,o,b,S=[],C=[],f,a),a),g===123)if(p===0)lo(T,t,I,I,S,a,f,o,C);else switch(h===99&&et(T,3)===110?100:h){case 100:case 108:case 109:case 115:lo(e,I,I,n&&ga(Rm(e,I,I,0,0,i,o,b,i,S=[],f,C),C),i,C,f,o,n?S:C);break;default:lo(T,I,I,I,[""],C,0,o,C)}}d=p=y=0,$=v=1,b=T="",f=s;break;case 58:f=1+fr(T),y=_;default:if($<1){if(g==123)--$;else if(g==125&&$++==0&&Fk()==125)continue}switch(T+=Ap(g),g*$){case 38:v=p>0?1:(T+="\f",-1);break;case 44:o[d++]=(fr(T)-1)*v,v=1;break;case 64:Dn()===45&&(T+=gu(ar())),h=Dn(),p=f=fr(b=T+=Qk(oo())),g++;break;case 45:_===45&&fr(T)==2&&($=0)}}return a}function Rm(e,t,r,n,i,a,s,o,u,d,p,f){for(var h=i-1,y=i===0?a:[""],_=U1(y),$=0,k=0,v=0;$<n;++$)for(var g=0,b=Ii(e,h+1,h=B1(k=s[$])),S=e;g<_;++g)(S=L1(k>0?y[g]+" "+b:me(b,/&\f/g,y[g])))&&(u[v++]=S);return ml(e,t,r,i===0?fl:o,u,d,p,f)}function Zk(e,t,r,n){return ml(e,t,r,D1,Ap(Wk()),Ii(e,2,-2),0,n)}function Nm(e,t,r,n,i){return ml(e,t,r,zp,Ii(e,0,n),Ii(e,n+1,-1),n,i)}function W1(e,t,r){switch(Uk(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+e+e;case 4789:return za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+za+e+Re+e+e;case 5936:switch(et(e,t+11)){case 114:return ke+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Re+e+e;case 6165:return ke+e+Re+"flex-"+e+e;case 5187:return ke+e+me(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return ke+e+Re+"flex-item-"+me(e,/flex-|-self/g,"")+(kr(e,/flex-|baseline/)?"":Re+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Re+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Re+me(e,"shrink","negative")+e;case 5292:return ke+e+Re+me(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+me(e,"-grow","")+ke+e+Re+me(e,"grow","positive")+e;case 4554:return ke+me(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+e+e;case 4200:if(!kr(e,/flex-|baseline/))return Re+"grid-column-align"+Ii(e,t)+e;break;case 2592:case 3360:return Re+me(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,kr(n.props,/grid-\w+-end/)})?~so(e+(r=r[t].value),"span",0)?e:Re+me(e,"-start","")+e+Re+"grid-row-span:"+(~so(r,"span",0)?kr(r,/\d+/):+kr(r,/\d+/)-+kr(e,/\d+/))+";":Re+me(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return kr(n.props,/grid-\w+-start/)})?e:Re+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fr(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+za+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~so(e,"stretch",0)?W1(me(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,a,s,o,u,d){return Re+i+":"+a+d+(s?Re+i+"-span:"+(o?u:+u-+a)+d:"")+e});case 4949:if(et(e,t+6)===121)return me(e,":",":"+ke)+e;break;case 6444:switch(et(e,et(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(et(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Re+"$2box$3")+e;case 100:return me(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function Bo(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Xk(e,t,r,n){switch(e.type){case Lk:if(e.children.length)break;case Bk:case zp:return e.return=e.return||e.value;case D1:return"";case M1:return e.return=e.value+"{"+Bo(e.children,n)+"}";case fl:if(!fr(e.value=e.props.join(",")))return""}return fr(r=Bo(e.children,n))?e.return=e.value+"{"+r+"}":""}function Jk(e){var t=U1(e);return function(r,n,i,a){for(var s="",o=0;o<t;o++)s+=e[o](r,n,i,a)||"";return s}}function eC(e){return function(t){t.root||(t=t.return)&&e(t)}}function tC(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case zp:e.return=W1(e.value,e.length,r);return;case M1:return Bo([Gr(e,{value:me(e.value,"@","@"+ke)})],n);case fl:if(e.length)return jk(r=e.props,function(i){switch(kr(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jn(Gr(e,{props:[me(i,/:(read-\w+)/,":"+za+"$1")]})),Jn(Gr(e,{props:[i]})),dc(e,{props:Om(r,n)});break;case"::placeholder":Jn(Gr(e,{props:[me(i,/:(plac\w+)/,":"+ke+"input-$1")]})),Jn(Gr(e,{props:[me(i,/:(plac\w+)/,":"+za+"$1")]})),Jn(Gr(e,{props:[me(i,/:(plac\w+)/,Re+"input-$1")]})),Jn(Gr(e,{props:[i]})),dc(e,{props:Om(r,n)});break}return""})}}var rC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},Ai=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",F1="active",V1="data-styled-version",yl="6.1.19",Op=`/*!sc*/
`,Lo=typeof window<"u"&&typeof document<"u",nC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),iC={},vl=Object.freeze([]),Oi=Object.freeze({});function q1(e,t,r){return r===void 0&&(r=Oi),e.theme!==r.theme&&e.theme||t||r.theme}var H1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sC=/(^-|-$)/g;function Pm(e){return e.replace(aC,"-").replace(sC,"")}var oC=/(a)(d)/gi,Rs=52,Dm=function(e){return String.fromCharCode(e+(e>25?39:97))};function fc(e){var t,r="";for(t=Math.abs(e);t>Rs;t=t/Rs|0)r=Dm(t%Rs)+r;return(Dm(t%Rs)+r).replace(oC,"$1-$2")}var yu,G1=5381,fi=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},K1=function(e){return fi(G1,e)};function Q1(e){return fc(K1(e)>>>0)}function lC(e){return e.displayName||e.name||"Component"}function vu(e){return typeof e=="string"&&!0}var Y1=typeof Symbol=="function"&&Symbol.for,Z1=Y1?Symbol.for("react.memo"):60115,uC=Y1?Symbol.for("react.forward_ref"):60112,dC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},X1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pC=((yu={})[uC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yu[Z1]=X1,yu);function Mm(e){return("type"in(t=e)&&t.type.$$typeof)===Z1?X1:"$$typeof"in e?pC[e.$$typeof]:dC;var t}var fC=Object.defineProperty,hC=Object.getOwnPropertyNames,Bm=Object.getOwnPropertySymbols,mC=Object.getOwnPropertyDescriptor,gC=Object.getPrototypeOf,Lm=Object.prototype;function J1(e,t,r){if(typeof t!="string"){if(Lm){var n=gC(t);n&&n!==Lm&&J1(e,n,r)}var i=hC(t);Bm&&(i=i.concat(Bm(t)));for(var a=Mm(e),s=Mm(t),o=0;o<i.length;++o){var u=i[o];if(!(u in cC||r&&r[u]||s&&u in s||a&&u in a)){var d=mC(t,u);try{fC(e,u,d)}catch{}}}}return e}function Ri(e){return typeof e=="function"}function Rp(e){return typeof e=="object"&&"styledComponentId"in e}function Rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hc(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Za(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mc(e,t,r){if(r===void 0&&(r=!1),!r&&!Za(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=mc(e[n],t[n]);else if(Za(t))for(var n in t)e[n]=mc(e[n],t[n]);return e}function Np(e,t){Object.defineProperty(e,"toString",{value:t})}function as(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,a=i;t>=a;)if((a<<=1)<0)throw as(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(t+1),u=(s=0,r.length);s<u;s++)this.tag.insertRule(o,r[s])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var a=n;a<i;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n,s=i;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(Op);return r},e}(),uo=new Map,Uo=new Map,co=1,Ns=function(e){if(uo.has(e))return uo.get(e);for(;Uo.has(co);)co++;var t=co++;return uo.set(e,t),Uo.set(t,e),t},vC=function(e,t){co=t+1,uo.set(e,t),Uo.set(t,e)},_C="style[".concat(Ai,"][").concat(V1,'="').concat(yl,'"]'),wC=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$C=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},bC=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Op),i=[],a=0,s=n.length;a<s;a++){var o=n[a].trim();if(o){var u=o.match(wC);if(u){var d=0|parseInt(u[1],10),p=u[2];d!==0&&(vC(p,d),$C(e,p,u[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(o)}}},Um=function(e){for(var t=document.querySelectorAll(_C),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Ai)!==F1&&(bC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function xC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ew=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(o){var u=Array.from(o.querySelectorAll("style[".concat(Ai,"]")));return u[u.length-1]}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(Ai,F1),n.setAttribute(V1,yl);var s=xC();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},SC=function(){function e(t){this.element=ew(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,a=n.length;i<a;i++){var s=n[i];if(s.ownerNode===r)return s}throw as(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),kC=function(){function e(t){this.element=ew(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),CC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),jm=Lo,EC={isServer:!Lo,useCSSOMInjection:!nC},jo=function(){function e(t,r,n){t===void 0&&(t=Oi),r===void 0&&(r={});var i=this;this.options=ut(ut({},EC),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Lo&&jm&&(jm=!1,Um(this)),Np(this,function(){return function(a){for(var s=a.getTag(),o=s.length,u="",d=function(f){var h=function(v){return Uo.get(v)}(f);if(h===void 0)return"continue";var y=a.names.get(h),_=s.getGroup(f);if(y===void 0||!y.size||_.length===0)return"continue";var $="".concat(Ai,".g").concat(f,'[id="').concat(h,'"]'),k="";y!==void 0&&y.forEach(function(v){v.length>0&&(k+="".concat(v,","))}),u+="".concat(_).concat($,'{content:"').concat(k,'"}').concat(Op)},p=0;p<o;p++)d(p);return u}(i)})}return e.registerId=function(t){return Ns(t)},e.prototype.rehydrate=function(){!this.server&&Lo&&Um(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ut(ut({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new CC(i):n?new SC(i):new kC(i)}(this.options),new yC(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Ns(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Ns(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ns(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),TC=/&/g,IC=/^\s*\/\/.*$/gm;function tw(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=tw(r.children,t)),r})}function zC(e){var t,r,n,i=Oi,a=i.options,s=a===void 0?Oi:a,o=i.plugins,u=o===void 0?vl:o,d=function(h,y,_){return _.startsWith(r)&&_.endsWith(r)&&_.replaceAll(r,"").length>0?".".concat(t):h},p=u.slice();p.push(function(h){h.type===fl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(TC,r).replace(n,d))}),s.prefix&&p.push(tC),p.push(Xk);var f=function(h,y,_,$){y===void 0&&(y=""),_===void 0&&(_=""),$===void 0&&($="&"),t=$,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var k=h.replace(IC,""),v=Yk(_||y?"".concat(_," ").concat(y," { ").concat(k," }"):k);s.namespace&&(v=tw(v,s.namespace));var g=[];return Bo(v,Jk(p.concat(eC(function(b){return g.push(b)})))),g};return f.hash=u.length?u.reduce(function(h,y){return y.name||as(15),fi(h,y.name)},G1).toString():"",f}var AC=new jo,gc=zC(),rw=Tr.createContext({shouldForwardProp:void 0,styleSheet:AC,stylis:gc});rw.Consumer;Tr.createContext(void 0);function yc(){return Mt.useContext(rw)}var OC=function(){function e(t,r){var n=this;this.inject=function(i,a){a===void 0&&(a=gc);var s=n.name+a.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Np(this,function(){throw as(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gc),this.name+t.hash},e}(),RC=function(e){return e>="A"&&e<="Z"};function Wm(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;RC(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var nw=function(e){return e==null||e===!1||e===""},iw=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!nw(a)&&(Array.isArray(a)&&a.isCss||Ri(a)?n.push("".concat(Wm(i),":"),a,";"):Za(a)?n.push.apply(n,Ya(Ya(["".concat(i," {")],iw(a),!1),["}"],!1)):n.push("".concat(Wm(i),": ").concat((t=i,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in rC||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function un(e,t,r,n){if(nw(e))return[];if(Rp(e))return[".".concat(e.styledComponentId)];if(Ri(e)){if(!Ri(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return un(i,t,r,n)}var a;return e instanceof OC?r?(e.inject(r,n),[e.getName(n)]):[e]:Za(e)?iw(e):Array.isArray(e)?Array.prototype.concat.apply(vl,e.map(function(s){return un(s,t,r,n)})):[e.toString()]}function aw(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ri(r)&&!Rp(r))return!1}return!0}var NC=K1(yl),PC=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&aw(t),this.componentId=r,this.baseHash=fi(NC,r),this.baseStyle=n,jo.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Rn(i,this.staticRulesId);else{var a=hc(un(this.rules,t,r,n)),s=fc(fi(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var o=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,o)}i=Rn(i,s),this.staticRulesId=s}else{for(var u=fi(this.baseHash,n.hash),d="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")d+=f;else if(f){var h=hc(un(f,t,r,n));u=fi(u,h+p),d+=h}}if(d){var y=fc(u>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(d,".".concat(y),void 0,this.componentId)),i=Rn(i,y)}}return i},e}(),Pp=Tr.createContext(void 0);Pp.Consumer;var _u={};function DC(e,t,r){var n=Rp(e),i=e,a=!vu(e),s=t.attrs,o=s===void 0?vl:s,u=t.componentId,d=u===void 0?function(S,C){var I=typeof S!="string"?"sc":Pm(S);_u[I]=(_u[I]||0)+1;var T="".concat(I,"-").concat(Q1(yl+I+_u[I]));return C?"".concat(C,"-").concat(T):T}(t.displayName,t.parentComponentId):u,p=t.displayName,f=p===void 0?function(S){return vu(S)?"styled.".concat(S):"Styled(".concat(lC(S),")")}(e):p,h=t.displayName&&t.componentId?"".concat(Pm(t.displayName),"-").concat(t.componentId):t.componentId||d,y=n&&i.attrs?i.attrs.concat(o).filter(Boolean):o,_=t.shouldForwardProp;if(n&&i.shouldForwardProp){var $=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;_=function(S,C){return $(S,C)&&k(S,C)}}else _=$}var v=new PC(r,h,n?i.componentStyle:void 0);function g(S,C){return function(I,T,z){var P=I.attrs,j=I.componentStyle,G=I.defaultProps,Z=I.foldedComponentIds,ae=I.styledComponentId,K=I.target,de=Tr.useContext(Pp),re=yc(),Q=I.shouldForwardProp||re.shouldForwardProp,W=q1(T,de,G)||Oi,L=function(D,ue,Ve){for(var xe,_e=ut(ut({},ue),{className:void 0,theme:Ve}),Ie=0;Ie<D.length;Ie+=1){var vr=Ri(xe=D[Ie])?xe(_e):xe;for(var yt in vr)_e[yt]=yt==="className"?Rn(_e[yt],vr[yt]):yt==="style"?ut(ut({},_e[yt]),vr[yt]):vr[yt]}return ue.className&&(_e.className=Rn(_e.className,ue.className)),_e}(P,T,W),Y=L.as||K,N={};for(var U in L)L[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&L.theme===W||(U==="forwardedAs"?N.as=L.forwardedAs:Q&&!Q(U,Y)||(N[U]=L[U]));var ie=function(D,ue){var Ve=yc(),xe=D.generateAndInjectStyles(ue,Ve.styleSheet,Ve.stylis);return xe}(j,L),ce=Rn(Z,ae);return ie&&(ce+=" "+ie),L.className&&(ce+=" "+L.className),N[vu(Y)&&!H1.has(Y)?"class":"className"]=ce,z&&(N.ref=z),Mt.createElement(Y,N)}(b,S,C)}g.displayName=f;var b=Tr.forwardRef(g);return b.attrs=y,b.componentStyle=v,b.displayName=f,b.shouldForwardProp=_,b.foldedComponentIds=n?Rn(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=h,b.target=n?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(C){for(var I=[],T=1;T<arguments.length;T++)I[T-1]=arguments[T];for(var z=0,P=I;z<P.length;z++)mc(C,P[z],!0);return C}({},i.defaultProps,S):S}}),Np(b,function(){return".".concat(b.styledComponentId)}),a&&J1(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Fm(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Vm=function(e){return Object.assign(e,{isCss:!0})};function sw(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ri(e)||Za(e))return Vm(un(Fm(vl,Ya([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?un(n):Vm(un(Fm(n,t)))}function vc(e,t,r){if(r===void 0&&(r=Oi),!t)throw as(1,t);var n=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,sw.apply(void 0,Ya([i],a,!1)))};return n.attrs=function(i){return vc(e,t,ut(ut({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return vc(e,t,ut(ut({},r),i))},n}var ow=function(e){return vc(DC,e)},xt=ow;H1.forEach(function(e){xt[e]=ow(e)});var MC=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=aw(t),jo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var a=i(hc(un(this.rules,r,n,i)),""),s=this.componentId+t;n.insertRules(s,s,a)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&jo.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function BC(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=sw.apply(void 0,Ya([e],t,!1)),i="sc-global-".concat(Q1(JSON.stringify(n))),a=new MC(n,i),s=function(u){var d=yc(),p=Tr.useContext(Pp),f=Tr.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&o(f,u,d.styleSheet,p,d.stylis),Tr.useLayoutEffect(function(){if(!d.styleSheet.server)return o(f,u,d.styleSheet,p,d.stylis),function(){return a.removeStyles(f,d.styleSheet)}},[f,u,d.styleSheet,p,d.stylis]),null};function o(u,d,p,f,h){if(a.isStatic)a.renderStyles(u,iC,p,h);else{var y=ut(ut({},d),{theme:q1(d,f,s.defaultProps)});a.renderStyles(u,y,p,h)}}return Tr.memo(s)}const LC=[{value:"21_25",label:"21-25"},{value:"26_30",label:"26-30"},{value:"31_35",label:"31-35"},{value:"36_40",label:"36-40"},{value:"41_45",label:"41-45"},{value:"46_50",label:"46-50"},{value:"51_55",label:"51-55"},{value:"55_plus",label:"55+"},{value:"unknown",label:"Prefer not to say"}],UC=[{value:"female",label:"Female"},{value:"male",label:"Male"},{value:"other",label:"Other"},{value:"unknown",label:"Prefer not to say"}],jC=[{value:"consulting",label:"Consulting"},{value:"product_company",label:"Product company"},{value:"enterprise",label:"Enterprise (software as support)"},{value:"public_sector",label:"Public sector"},{value:"agency",label:"Digital/Advertising agency"},{value:"maintenance",label:"Maintenance company"},{value:"unknown",label:"Unknown"}],WC=[{value:"data_ml_analytics",label:"Data / ML / Analytics"},{value:"design_ux",label:"Design / UX"},{value:"devops_infrastructure",label:"DevOps / Infrastructure"},{value:"junior_developer",label:"Junior Developer"},{value:"lead_developer",label:"Lead Developer"},{value:"management_leadership",label:"Management / Leadership"},{value:"other",label:"Other"},{value:"product_project",label:"Product / Project"},{value:"senior_developer",label:"Senior Developer"},{value:"software_developer_engineer",label:"Software Developer / Engineer"}],FC=[{value:"bachelor",label:"Bachelor's degree"},{value:"master",label:"Master's degree"},{value:"phd",label:"PhD"},{value:"vocational",label:"Vocational degree"},{value:"secondary_or_less",label:"Secondary school or less"},{value:"other",label:"Other"},{value:"unknown",label:"Prefer not to say"}],VC=[{value:"capital_region",label:"Capital region (Helsinki area)"},{value:"rest_of_finland",label:"Rest of Finland"}],qC=[{value:"en",label:"English"},{value:"fi",label:"Finnish"}],HC={experienceYears:5,officeTimePercent:50,sourceLanguage:"en",age:"31_35",gender:"unknown",companyType:"product_company",roleGroup:"software_developer_engineer",educationLevel:"bachelor",locationCategory:"capital_region"};/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Dp=Object.defineProperty,GC=Object.getOwnPropertyDescriptor,KC=Object.getOwnPropertyNames,QC=Object.prototype.hasOwnProperty,YC=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),Ui=(e,t)=>{for(var r in t)Dp(e,r,{get:t[r],enumerable:!0})},ZC=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of KC(t))!QC.call(e,i)&&i!==r&&Dp(e,i,{get:()=>t[i],enumerable:!(n=GC(t,i))||n.enumerable});return e},Xa=e=>ZC(Dp({},"__esModule",{value:!0}),e),ta,Vr,hi,qm,lw,uw=V(()=>{ta=new Map,Vr=[],hi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=ta.get(e);if(n===void 0)ta.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Vr.indexOf(e);i!==-1&&Vr.splice(i,1);for(let a=0;a<Vr.length;a++)if(ta.get(Vr[a]).priority<=r){Vr.splice(a,0,e);return}Vr.push(e)}return}throw new TypeError("not a valid backend")},qm=async e=>{let t=ta.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},lw=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?Vr:r,i,a=[],s=new Set;for(let u of n){let d=await qm(u);typeof d=="string"?a.push({name:u,err:d}):(i||(i=d),i===d&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),XC=V(()=>{uw()}),dw,JC=V(()=>{dw="1.23.2"}),wu,Ze,cw=V(()=>{JC(),wu="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:dw},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wu=e}},get logLevel(){return wu}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),Ee,eE=V(()=>{cw(),Ee=Ze}),pw,fw,tE=V(()=>{pw=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*i,f=0,h=p,y=p*2,_=-1;s==="RGBA"?(f=0,h=p,y=p*2,_=p*3):s==="RGB"?(f=0,h=p,y=p*2):s==="RBG"&&(f=0,y=p,h=p*2);for(let $=0;$<a;$++)for(let k=0;k<i;k++){let v=(e.data[f++]-d[0])*u[0],g=(e.data[h++]-d[1])*u[1],b=(e.data[y++]-d[2])*u[2],S=_===-1?255:(e.data[_++]-d[3])*u[3];n.fillStyle="rgba("+v+","+g+","+b+","+S+")",n.fillRect(k,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},fw=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let f=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,y=0,_=1,$=2,k=3,v=0,g=f,b=f*2,S=-1;o==="RGBA"?(v=0,g=f,b=f*2,S=f*3):o==="RGB"?(v=0,g=f,b=f*2):o==="RBG"&&(v=0,b=f,g=f*2),n=r.createImageData(i,a);for(let C=0;C<a*i;y+=h,_+=h,$+=h,k+=h,C++)n.data[y]=(e.data[v++]-p[0])*d[0],n.data[_]=(e.data[g++]-p[1])*d[1],n.data[$]=(e.data[b++]-p[2])*d[2],n.data[k]=S===-1?255:(e.data[S++]-p[3])*d[3]}else throw new Error("Can not access image data");return n}}),Ps,hw,mw,gw,yw,vw,rE=V(()=>{Mp(),Ps=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,y=1,_=2,$=3,k=0,v=d,g=d*2,b=-1;o==="RGB"&&(f=3,h=0,y=1,_=2,$=-1),u==="RGBA"?b=d*3:u==="RBG"?(k=0,g=d,v=d*2):u==="BGR"&&(g=0,v=d,k=d*2);for(let S=0;S<d;S++,h+=f,_+=f,y+=f,$+=f)p[k++]=(e[h]+s[0])/a[0],p[v++]=(e[y]+s[1])/a[1],p[g++]=(e[_]+s[2])/a[2],b!==-1&&$!==-1&&(p[b++]=(e[$]+s[3])/a[3]);return u==="RGBA"?new Tt("float32",p,[1,4,r,n]):new Tt("float32",p,[1,3,r,n])},hw=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=y}else o.tensorFormat="RGBA",o.height=h,o.width=y;f.drawImage(e,0,0),s=f.getImageData(0,0,y,h).data}else throw new Error("Can not access image data")}else if(n){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let h=u();h.width=f,h.height=p;let y=d(h);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,y=e.width;return f.drawImage(e,0,0,y,h),s=f.getImageData(0,0,y,h).data,o.height=h,o.width=y,Ps(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,f)=>{let h=u(),y=d(h);if(!e||!y)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,y.drawImage(_,0,0,h.width,h.height);let $=y.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,p(Ps($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Ps(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},mw=(e,t)=>{let{width:r,height:n,download:i,dispose:a}=t,s=[1,n,r,4];return new Tt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},gw=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new Tt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},yw=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new Tt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},vw=(e,t,r)=>new Tt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),En,ya,$u,_w,nE=V(()=>{En=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ya=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$u=!1,_w=()=>{if(!$u){$u=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(En.set("int64",BigInt64Array),ya.set(BigInt64Array,"int64")),t&&(En.set("uint64",BigUint64Array),ya.set(BigUint64Array,"uint64")),n?(En.set("float16",r),ya.set(r,"float16")):En.set("float16",Uint16Array)}}}),ww,$w,iE=V(()=>{Mp(),ww=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},$w=(e,t)=>{switch(e.location){case"cpu":return new Tt(e.type,e.data,t);case"cpu-pinned":return new Tt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Tt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Tt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Tt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Tt,Mp=V(()=>{tE(),rE(),nE(),iE(),Tt=class{constructor(e,t,r){_w();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=En.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=En.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=ya.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=ww(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return hw(e,t)}static fromTexture(e,t){return mw(e,t)}static fromGpuBuffer(e,t){return gw(e,t)}static fromMLTensor(e,t){return yw(e,t)}static fromPinnedBuffer(e,t,r){return vw(e,t,r)}toDataURL(e){return pw(this,e)}toImageData(e){return fw(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return $w(this,e)}}}),rr,bw=V(()=>{Mp(),rr=Tt}),Wo,bu,yr,sr,Mn,Bn,xw=V(()=>{cw(),Wo=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},bu=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Wo("CPU",a);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},yr=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||bu("BEGIN",e)},sr=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||bu("END",e)},Mn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},Bn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),Sw,aE=V(()=>{uw(),bw(),xw(),Sw=class kw{constructor(t){this.handler=t}async run(t,r,n){yr(),Mn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof rr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof rr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof rr)&&(d=!0,s=!1,i[f]=h)}if(d){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof rr?u[d]=p:u[d]=new rr(p.type,p.data,p.dims)}return Bn("InferenceSession.run"),sr(),u}async release(){return this.handler.dispose()}static async create(t,r,n,i){yr(),Mn("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(h=t.byteLength-f,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await lw(s),d=await o.createInferenceSessionHandler(a,u);return Bn("InferenceSession.create"),sr(),new kw(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Bp,sE=V(()=>{aE(),Bp=Sw}),oE=V(()=>{}),lE=V(()=>{}),uE=V(()=>{}),dE=V(()=>{}),cE={};Ui(cE,{InferenceSession:()=>Bp,TRACE:()=>Wo,TRACE_EVENT_BEGIN:()=>Mn,TRACE_EVENT_END:()=>Bn,TRACE_FUNC_BEGIN:()=>yr,TRACE_FUNC_END:()=>sr,Tensor:()=>rr,env:()=>Ee,registerBackend:()=>hi});var qt=V(()=>{XC(),eE(),sE(),bw(),oE(),lE(),xw(),uE(),dE()}),Lp=V(()=>{}),Cw={};Ui(Cw,{default:()=>Ew});var xu,Su,Ew,pE=V(()=>{Ob(),Qn(),Up(),xu="ort-wasm-proxy-worker",Su=globalThis.self?.name===xu,Su&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":jp(r.wasm).then(()=>{af(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;sf(i,n).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:n}=r,i=Qo(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;of(n,i).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":lf(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:a,outputIndices:s,options:o}=r;uf(n,i,a,s,new Array(s.length).fill(null),o).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},cf([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":df(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),Ew=Su?null:e=>new Worker(e??kt,{type:"module",name:xu})}),Tw={};Ui(Tw,{default:()=>Iw});var ku,Iw,Hm,fE=V(()=>{ku=async function(e={}){var t,r,n=e,i=new Promise((l,c)=>{t=l,r=c}),a=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=s&&self.name?.startsWith("em-pthread");n.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(n.Fb||(n.Fb=new Map)).set(l,c)},n.unmountExternalData=()=>{delete n.Fb};var u=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=l=>async(...c)=>{try{if(n.Gb)throw Error("Session already started");let m=n.Gb={ec:c[0],errors:[]},w=await l(...c);if(n.Gb!==m)throw Error("Session mismatch");n.Kb?.flush();let x=m.errors;if(0<x.length){let E=await Promise.all(x);if(E=E.filter(A=>A),0<E.length)throw Error(E.join(`
`))}return w}finally{n.Gb=null}};n.jsepInit=(l,c)=>{if(l==="webgpu"){[n.Kb,n.Vb,n.Zb,n.Lb,n.Yb,n.Ab,n.$b,n.bc,n.Wb,n.Xb,n.ac]=c;let m=n.Kb;n.jsepRegisterBuffer=(w,x,E,A)=>m.registerBuffer(w,x,E,A),n.jsepGetBuffer=w=>m.getBuffer(w),n.jsepCreateDownloader=(w,x,E)=>m.createDownloader(w,x,E),n.jsepOnCreateSession=w=>{m.onCreateSession(w)},n.jsepOnReleaseSession=w=>{m.onReleaseSession(w)},n.jsepOnRunStart=w=>m.onRunStart(w),n.cc=(w,x)=>{m.upload(w,x)}}else if(l==="webnn"){let m=c[0];[n.oc,n.Ob,n.webnnEnsureTensor,n.Pb,n.webnnDownloadTensor,n.nc,n.webnnEnableTraceEvent]=c.slice(1),n.webnnReleaseTensorId=n.Ob,n.webnnUploadTensor=n.Pb,n.webnnRegisterMLContext=n.nc,n.webnnOnRunStart=w=>m.onRunStart(w),n.webnnOnRunEnd=m.onRunEnd.bind(m),n.webnnOnReleaseSession=w=>{m.onReleaseSession(w)},n.webnnCreateMLTensorDownloader=(w,x)=>m.createMLTensorDownloader(w,x),n.webnnRegisterMLTensor=(w,x,E,A)=>m.registerMLTensor(w,x,E,A),n.webnnCreateMLContext=w=>m.createMLContext(w),n.webnnRegisterMLConstant=(w,x,E,A,R,F)=>m.registerMLConstant(w,x,E,A,R,n.Fb,F),n.webnnRegisterGraphInput=m.registerGraphInput.bind(m),n.webnnIsGraphInput=m.isGraphInput.bind(m),n.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),n.webnnIsGraphOutput=m.isGraphOutput.bind(m),n.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),n.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let p=()=>{let l=(c,m,w)=>(...x)=>{let E=ur,A=m?.();x=c(...x);let R=m?.();return A!==R&&(c=R,w(A),m=w=null),ur!=E?new Promise((F,q)=>{Rl={resolve:F,reject:q}}):x};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])n[c]=l(n[c],()=>n[c],m=>n[c]=m)})(),d!==void 0&&(n._OrtRun=d(n._OrtRun),n._OrtRunWithBinding=d(n._OrtRunWithBinding)),p=void 0};n.asyncInit=()=>{p?.()};var f,h,y=(l,c)=>{throw c},_=import.meta.url,$="";if(a||s){try{$=new URL(".",_).href}catch{}s&&(h=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),f=async l=>{if(Y(l))return new Promise((m,w)=>{var x=new XMLHttpRequest;x.open("GET",l,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):w(x.status)},x.onerror=w,x.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var k,v,g,b,S,C,I,T,z,P,j,G,Z,ae,K,de=console.log.bind(console),re=console.error.bind(console),Q=de,W=re,L=!1,Y=l=>l.startsWith("file://");function N(){return v.buffer!=S.buffer&&Ie(),S}function U(){return v.buffer!=S.buffer&&Ie(),C}function ie(){return v.buffer!=S.buffer&&Ie(),I}function ce(){return v.buffer!=S.buffer&&Ie(),T}function D(){return v.buffer!=S.buffer&&Ie(),z}function ue(){return v.buffer!=S.buffer&&Ie(),P}function Ve(){return v.buffer!=S.buffer&&Ie(),j}function xe(){return v.buffer!=S.buffer&&Ie(),ae}if(o){let l=function(c){try{var m=c.data,w=m.Db;if(w==="load"){let x=[];self.onmessage=E=>x.push(E),self.startWorker=()=>{postMessage({Db:"loaded"});for(let E of x)l(E);self.onmessage=l};for(let E of m.Sb)n[E]&&!n[E].proxy||(n[E]=(...A)=>{postMessage({Db:"callHandler",Rb:E,args:A})},E=="print"&&(Q=n[E]),E=="printErr"&&(W=n[E]));v=m.kc,Ie(),K(m.lc)}else if(w==="run"){qb(m.Bb),Ll(m.Bb,0,0,1,0,0),_f(),Al(m.Bb),_e||(ch(),_e=!0);try{Hb(m.hc,m.Jb)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(w==="checkMailbox"?_e&&ss():w&&(W(`worker: received unknown command ${w}`),W(m)))}catch(x){throw ph(),x}};var _e=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}function Ie(){var l=v.buffer;n.HEAP8=S=new Int8Array(l),I=new Int16Array(l),n.HEAPU8=C=new Uint8Array(l),T=new Uint16Array(l),n.HEAP32=z=new Int32Array(l),n.HEAPU32=P=new Uint32Array(l),j=new Float32Array(l),ae=new Float64Array(l),G=new BigInt64Array(l),Z=new BigUint64Array(l)}function vr(){o?startWorker(n):M.Da()}var yt,ji=0,Wi=null;function pf(){if(--ji==0&&Wi){var l=Wi;Wi=null,l()}}function Br(l){throw W(l="Aborted("+l+")"),L=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),r(l),l}function ff(){return{a:{L:u3,Aa:l3,b:Kb,$:xf,A:Cf,pa:Ef,X:Tf,Z:If,qa:zf,na:Af,ga:Of,ma:Rf,J:Nf,Y:Pf,V:Df,oa:Mf,W:Bf,va:Qb,E:Yb,Q:Zb,O:Jb,D:tx,v:rx,s:nx,P:ix,z:cx,R:px,ja:fx,T:hx,aa:mx,M:gx,F:yx,ia:Al,sa:vx,r:_x,Ca:wx,w:xx,o:Sx,m:Cx,c:El,Ba:Ex,n:Tx,j:Ax,u:Ox,p:Rx,f:Nx,t:Px,l:Dx,e:Mx,k:Bx,h:Lx,g:Ux,d:jx,da:Wx,ea:Fx,fa:Vx,ba:Zf,ca:Xf,N:Jf,xa:Hx,ua:Kx,i:Qx,C:Yx,G:Zx,ta:Gx,x:Xx,ra:Jx,U:e3,q:qx,y:t3,K:r3,S:n3,za:i3,ya:a3,ka:nh,la:ih,_:xl,B:ah,I:sh,ha:oh,H:lh,a:v,wa:bl}}}class wl{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var hf=l=>{l.terminate(),l.onmessage=()=>{}},$l=[],mf=l=>{Ur.length==0&&($f(),wf(Ur[0]));var c=Ur.pop();if(!c)return 6;Fi.push(c),yn[l.Bb]=c,c.Bb=l.Bb;var m={Db:"run",hc:l.fc,Jb:l.Jb,Bb:l.Bb};return c.postMessage(m,l.Nb),0},Lr=0,Ae=(l,c,...m)=>{for(var w=2*m.length,x=Wl(),E=jl(8*w),A=E>>>3,R=0;R<m.length;R++){var F=m[R];typeof F=="bigint"?(G[A+2*R]=1n,G[A+2*R+1]=F):(G[A+2*R]=0n,xe()[A+2*R+1>>>0]=F)}return l=fh(l,0,w,E,c),ms(x),l};function bl(l){if(o)return Ae(0,1,l);if(b=l,!(0<Lr)){for(var c of Fi)hf(c);for(c of Ur)hf(c);Ur=[],Fi=[],yn={},L=!0}y(0,new wl(l))}function gf(l){if(o)return Ae(1,0,l);xl(l)}var xl=l=>{if(b=l,o)throw gf(l),"unwind";bl(l)},Ur=[],Fi=[],yf=[],yn={},vf=l=>{var c=l.Bb;delete yn[c],Ur.push(l),Fi.splice(Fi.indexOf(l),1),l.Bb=0,hh(c)};function _f(){yf.forEach(l=>l())}var wf=l=>new Promise(c=>{l.onmessage=x=>{var E=(x=x.data).Db;if(x.Hb&&x.Hb!=Bl()){var A=yn[x.Hb];A?A.postMessage(x,x.Nb):W(`Internal error! Worker sent a message "${E}" to target pthread ${x.Hb}, but that thread no longer exists!`)}else E==="checkMailbox"?ss():E==="spawnThread"?mf(x):E==="cleanupThread"?vf(yn[x.ic]):E==="loaded"?(l.loaded=!0,c(l)):x.target==="setimmediate"?l.postMessage(x):E==="callHandler"?n[x.Rb](...x.args):E&&W(`worker sent an unknown command ${E}`)},l.onerror=x=>{throw W(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,w=[];for(m of[])n.propertyIsEnumerable(m)&&w.push(m);l.postMessage({Db:"load",Sb:w,kc:v,lc:g})});function $f(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ur.push(l)}var qb=l=>{Ie();var c=ue()[l+52>>>2>>>0];l=ue()[l+56>>>2>>>0],yh(c,c-l),ms(c)},Hb=(l,c)=>{Lr=0,l=vh(l,c),0<Lr?b=l:Ul(l)};class Gb{constructor(c){this.Ib=c-24}}function Kb(l,c,m){var w=new Gb(l>>>=0);throw c>>>=0,m>>>=0,ue()[w.Ib+16>>>2>>>0]=0,ue()[w.Ib+4>>>2>>>0]=c,ue()[w.Ib+8>>>2>>>0]=m,l}function bf(l,c,m,w){return o?Ae(2,1,l,c,m,w):xf(l,c,m,w)}function xf(l,c,m,w){if(l>>>=0,m>>>=0,w>>>=0,u===void 0)return 6;var x=[];return o&&x.length===0?bf(l,c>>>=0,m,w):(l={fc:m,Bb:l,Jb:w,Nb:x},o?(l.Db="spawnThread",postMessage(l,x),0):mf(l))}var Sf=typeof TextDecoder<"u"?new TextDecoder:void 0,kf=(l,c=0,m=NaN)=>{var w=(c>>>=0)+m;for(m=c;l[m]&&!(m>=w);)++m;if(16<m-c&&l.buffer&&Sf)return Sf.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,m):l.slice(c,m));for(w="";c<m;){var x=l[c++];if(128&x){var E=63&l[c++];if((224&x)==192)w+=String.fromCharCode((31&x)<<6|E);else{var A=63&l[c++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|A:(7&x)<<18|E<<12|A<<6|63&l[c++])?w+=String.fromCharCode(x):(x-=65536,w+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else w+=String.fromCharCode(x)}return w},We=(l,c)=>(l>>>=0)?kf(U(),l,c):"";function Cf(l,c,m){return o?Ae(3,1,l,c,m):0}function Ef(l,c){if(o)return Ae(4,1,l,c)}function Tf(l,c){if(o)return Ae(5,1,l,c)}function If(l,c,m){if(o)return Ae(6,1,l,c,m)}function zf(l,c,m){return o?Ae(7,1,l,c,m):0}function Af(l,c){if(o)return Ae(8,1,l,c)}function Of(l,c,m){if(o)return Ae(9,1,l,c,m)}function Rf(l,c,m,w){if(o)return Ae(10,1,l,c,m,w)}function Nf(l,c,m,w){if(o)return Ae(11,1,l,c,m,w)}function Pf(l,c,m,w){if(o)return Ae(12,1,l,c,m,w)}function Df(l){if(o)return Ae(13,1,l)}function Mf(l,c){if(o)return Ae(14,1,l,c)}function Bf(l,c,m){if(o)return Ae(15,1,l,c,m)}var Lf,Qb=()=>Br(""),lr=l=>{for(var c="";U()[l>>>0];)c+=Lf[U()[l++>>>0]];return c},Sl={},kl={},Zn=n.BindingError=class extends Error{constructor(l){super(l),this.name="BindingError"}};function _r(l,c,m={}){return function(w,x,E={}){var A=x.name;if(!w)throw new Zn(`type "${A}" must have a positive integer typeid pointer`);if(kl.hasOwnProperty(w)){if(E.Tb)return;throw new Zn(`Cannot register type '${A}' twice`)}kl[w]=x,Sl.hasOwnProperty(w)&&(x=Sl[w],delete Sl[w],x.forEach(R=>R()))}(l,c,m)}var Uf=(l,c,m)=>{switch(c){case 1:return m?w=>N()[w>>>0]:w=>U()[w>>>0];case 2:return m?w=>ie()[w>>>1>>>0]:w=>ce()[w>>>1>>>0];case 4:return m?w=>D()[w>>>2>>>0]:w=>ue()[w>>>2>>>0];case 8:return m?w=>G[w>>>3]:w=>Z[w>>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function Yb(l,c,m){m>>>=0,_r(l>>>=0,{name:c=lr(c>>>0),fromWireType:w=>w,toWireType:function(w,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":(w=typeof x)=="object"||w==="array"||w==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},Cb:jr,readValueFromPointer:Uf(c,m,c.indexOf("u")==-1),Eb:null})}var jr=8;function Zb(l,c,m,w){_r(l>>>=0,{name:c=lr(c>>>0),fromWireType:function(x){return!!x},toWireType:function(x,E){return E?m:w},Cb:jr,readValueFromPointer:function(x){return this.fromWireType(U()[x>>>0])},Eb:null})}var Cl=[],wr=[];function El(l){9<(l>>>=0)&&--wr[l+1]==0&&(wr[l]=void 0,Cl.push(l))}var ct=l=>{if(!l)throw new Zn(`Cannot use deleted val. handle = ${l}`);return wr[l]},Pt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Cl.pop()||wr.length;return wr[c]=l,wr[c+1]=1,c}};function Tl(l){return this.fromWireType(ue()[l>>>2>>>0])}var Xb={name:"emscripten::val",fromWireType:l=>{var c=ct(l);return El(l),c},toWireType:(l,c)=>Pt(c),Cb:jr,readValueFromPointer:Tl,Eb:null};function Jb(l){return _r(l>>>0,Xb)}var ex=(l,c)=>{switch(c){case 4:return function(m){return this.fromWireType(Ve()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(xe()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function tx(l,c,m){m>>>=0,_r(l>>>=0,{name:c=lr(c>>>0),fromWireType:w=>w,toWireType:(w,x)=>x,Cb:jr,readValueFromPointer:ex(c,m),Eb:null})}function rx(l,c,m,w,x){if(l>>>=0,m>>>=0,c=lr(c>>>0),x===-1&&(x=4294967295),x=R=>R,w===0){var E=32-8*m;x=R=>R<<E>>>E}var A=c.includes("unsigned")?function(R,F){return F>>>0}:function(R,F){return F};_r(l,{name:c,fromWireType:x,toWireType:A,Cb:jr,readValueFromPointer:Uf(c,m,w!==0),Eb:null})}function nx(l,c,m){function w(E){var A=ue()[E>>>2>>>0];return E=ue()[E+4>>>2>>>0],new x(N().buffer,E,A)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];_r(l>>>=0,{name:m=lr(m>>>0),fromWireType:w,Cb:jr,readValueFromPointer:w},{Tb:!0})}var vn=(l,c,m)=>{var w=U();if(c>>>=0,0<m){var x=c;m=c+m-1;for(var E=0;E<l.length;++E){var A=l.charCodeAt(E);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&l.charCodeAt(++E)),127>=A){if(c>=m)break;w[c++>>>0]=A}else{if(2047>=A){if(c+1>=m)break;w[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=m)break;w[c++>>>0]=224|A>>12}else{if(c+3>=m)break;w[c++>>>0]=240|A>>18,w[c++>>>0]=128|A>>12&63}w[c++>>>0]=128|A>>6&63}w[c++>>>0]=128|63&A}}w[c>>>0]=0,l=c-x}else l=0;return l},Il=l=>{for(var c=0,m=0;m<l.length;++m){var w=l.charCodeAt(m);127>=w?c++:2047>=w?c+=2:55296<=w&&57343>=w?(c+=4,++m):c+=3}return c};function ix(l,c){_r(l>>>=0,{name:c=lr(c>>>0),fromWireType:function(m){for(var w,x=ue()[m>>>2>>>0],E=m+4,A=E,R=0;R<=x;++R){var F=E+R;R!=x&&U()[F>>>0]!=0||(A=We(A,F-A),w===void 0?w=A:(w+="\0",w+=A),A=F+1)}return $r(m),w},toWireType:function(m,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var x=typeof w=="string";if(!(x||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Zn("Cannot pass non-string to std::string");var E=x?Il(w):w.length,A=hs(4+E+1),R=A+4;return ue()[A>>>2>>>0]=E,x?vn(w,R,E+1):U().set(w,R>>>0),m!==null&&m.push($r,A),A},Cb:jr,readValueFromPointer:Tl,Eb(m){$r(m)}})}var jf=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ax=(l,c)=>{for(var m=l>>1,w=m+c/2;!(m>=w)&&ce()[m>>>0];)++m;if(32<(m<<=1)-l&&jf)return jf.decode(U().slice(l,m));for(m="",w=0;!(w>=c/2);++w){var x=ie()[l+2*w>>>1>>>0];if(x==0)break;m+=String.fromCharCode(x)}return m},sx=(l,c,m)=>{if(m??=2147483647,2>m)return 0;var w=c;m=(m-=2)<2*l.length?m/2:l.length;for(var x=0;x<m;++x){var E=l.charCodeAt(x);ie()[c>>>1>>>0]=E,c+=2}return ie()[c>>>1>>>0]=0,c-w},ox=l=>2*l.length,lx=(l,c)=>{for(var m=0,w="";!(m>=c/4);){var x=D()[l+4*m>>>2>>>0];if(x==0)break;++m,65536<=x?(x-=65536,w+=String.fromCharCode(55296|x>>10,56320|1023&x)):w+=String.fromCharCode(x)}return w},ux=(l,c,m)=>{if(c>>>=0,m??=2147483647,4>m)return 0;var w=c;m=w+m-4;for(var x=0;x<l.length;++x){var E=l.charCodeAt(x);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&l.charCodeAt(++x)),D()[c>>>2>>>0]=E,(c+=4)+4>m)break}return D()[c>>>2>>>0]=0,c-w},dx=l=>{for(var c=0,m=0;m<l.length;++m){var w=l.charCodeAt(m);55296<=w&&57343>=w&&++m,c+=4}return c};function cx(l,c,m){if(l>>>=0,c>>>=0,m=lr(m>>>=0),c===2)var w=ax,x=sx,E=ox,A=R=>ce()[R>>>1>>>0];else c===4&&(w=lx,x=ux,E=dx,A=R=>ue()[R>>>2>>>0]);_r(l,{name:m,fromWireType:R=>{for(var F,q=ue()[R>>>2>>>0],X=R+4,oe=0;oe<=q;++oe){var he=R+4+oe*c;oe!=q&&A(he)!=0||(X=w(X,he-X),F===void 0?F=X:(F+="\0",F+=X),X=he+c)}return $r(R),F},toWireType:(R,F)=>{if(typeof F!="string")throw new Zn(`Cannot pass non-string to C++ string type ${m}`);var q=E(F),X=hs(4+q+c);return ue()[X>>>2>>>0]=q/c,x(F,X+4,q+c),R!==null&&R.push($r,X),X},Cb:jr,readValueFromPointer:Tl,Eb(R){$r(R)}})}function px(l,c){_r(l>>>=0,{Ub:!0,name:c=lr(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function fx(l){Ll(l>>>0,!s,1,!a,131072,!1),_f()}var zl=l=>{if(!L)try{if(l(),!(0<Lr))try{o?Ul(b):xl(b)}catch(c){c instanceof wl||c=="unwind"||y(0,c)}}catch(c){c instanceof wl||c=="unwind"||y(0,c)}};function Al(l){l>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(D(),l>>>2,l).value.then(ss),l+=128,Atomics.store(D(),l>>>2,1))}var ss=()=>{var l=Bl();l&&(Al(l),zl(gh))};function hx(l,c){(l>>>=0)==c>>>0?setTimeout(ss):o?postMessage({Hb:l,Db:"checkMailbox"}):(l=yn[l])&&l.postMessage({Db:"checkMailbox"})}var Ol=[];function mx(l,c,m,w,x){for(c>>>=0,w/=2,Ol.length=w,m=x>>>0>>>3,x=0;x<w;x++)Ol[x]=G[m+2*x]?G[m+2*x+1]:xe()[m+2*x+1>>>0];return(c?Ml[c]:o3[l])(...Ol)}var gx=()=>{Lr=0};function yx(l){l>>>=0,o?postMessage({Db:"cleanupThread",ic:l}):vf(yn[l])}function vx(l){}var os=(l,c)=>{var m=kl[l];if(m===void 0)throw l=dh(l),m=lr(l),$r(l),new Zn(`${c} has unknown type ${m}`);return m},Wf=(l,c,m)=>{var w=[];return l=l.toWireType(w,m),w.length&&(ue()[c>>>2>>>0]=Pt(w)),l};function _x(l,c,m){return c>>>=0,m>>>=0,l=ct(l>>>0),c=os(c,"emval::as"),Wf(c,m,l)}function wx(l,c){return c>>>=0,l=ct(l>>>0),(c=os(c,"emval::as")).toWireType(null,l)}var ls=l=>{try{l()}catch(c){Br(c)}},Wr=0,ur=null,Ff=0,us=[],Vf={},qf={},$x=0,Rl=null,bx=[];function Hf(l){return function(c){if(!L){if(Wr===0){var m=!1,w=!1;c((x=0)=>{if(!L&&(Ff=x,m=!0,w)){Wr=2,ls(()=>$h(ur)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),x=!1;try{var E=function(){var F=D()[ur+8>>>2>>>0];return F=M[qf[F]],--Lr,F()}()}catch(F){E=F,x=!0}var A=!1;if(!ur){var R=Rl;R&&(Rl=null,(x?R.reject:R.resolve)(E),A=!0)}if(x&&!A)throw E}}),w=!0,m||(Wr=1,ur=function(){var x=hs(65548),E=x+12;ue()[x>>>2>>>0]=E,ue()[x+4>>>2>>>0]=E+65536,E=us[0];var A=Vf[E];return A===void 0&&(A=$x++,Vf[E]=A,qf[A]=E),E=A,D()[x+8>>>2>>>0]=E,x}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),ls(()=>_h(ur)))}else Wr===2?(Wr=0,ls(bh),$r(ur),ur=null,bx.forEach(zl)):Br(`invalid state: ${Wr}`);return Ff}}(c=>{l().then(c)})}function xx(l){return l>>>=0,Hf(async()=>{var c=await ct(l);return Pt(c)})}var ds=[];function Sx(l,c,m,w){return m>>>=0,w>>>=0,(l=ds[l>>>0])(null,c=ct(c>>>0),m,w)}var kx={},cs=l=>{var c=kx[l];return c===void 0?lr(l):c};function Cx(l,c,m,w,x){return m>>>=0,w>>>=0,x>>>=0,(l=ds[l>>>0])(c=ct(c>>>0),c[m=cs(m)],w,x)}function Ex(l,c){return c>>>=0,(l=ct(l>>>0))==ct(c)}var Gf=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Tx(l){return(l>>>=0)==0?Pt(Gf()):(l=cs(l),Pt(Gf()[l]))}var Ix=l=>{var c=ds.length;return ds.push(l),c},zx=(l,c)=>{for(var m=Array(l),w=0;w<l;++w)m[w]=os(ue()[c+4*w>>>2>>>0],`parameter ${w}`);return m};function Ax(l,c,m){var w=(c=zx(l,c>>>0)).shift();l--;var x=`return function (obj, func, destructorsRef, args) {
`,E=0,A=[];m===0&&A.push("obj");for(var R=["retType"],F=[w],q=0;q<l;++q)A.push(`arg${q}`),R.push(`argType${q}`),F.push(c[q]),x+=`  var arg${q} = argType${q}.readValueFromPointer(args${E?"+"+E:""});
`,E+=c[q].Cb;return x+=`  var rv = ${m===1?"new func":"func.call"}(${A.join(", ")});
`,w.Ub||(R.push("emval_returnValue"),F.push(Wf),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),l=new Function(...R,x+`};
`)(...F),m=`methodCaller<(${c.map(X=>X.name).join(", ")}) => ${w.name}>`,Ix(Object.defineProperty(l,"name",{value:m}))}function Ox(l){return l=cs(l>>>0),Pt(n[l])}function Rx(l,c){return c>>>=0,l=ct(l>>>0),c=ct(c),Pt(l[c])}function Nx(l){9<(l>>>=0)&&(wr[l+1]+=1)}function Px(){return Pt([])}function Dx(l){l=ct(l>>>0);for(var c=Array(l.length),m=0;m<l.length;m++)c[m]=l[m];return Pt(c)}function Mx(l){return Pt(cs(l>>>0))}function Bx(){return Pt({})}function Lx(l){for(var c=ct(l>>>=0);c.length;){var m=c.pop();c.pop()(m)}El(l)}function Ux(l,c,m){c>>>=0,m>>>=0,l=ct(l>>>0),c=ct(c),m=ct(m),l[c]=m}function jx(l,c){return c>>>=0,l=(l=os(l>>>0,"_emval_take_value")).readValueFromPointer(c),Pt(l)}function Wx(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),D()[c>>>2>>>0]=l.getUTCSeconds(),D()[c+4>>>2>>>0]=l.getUTCMinutes(),D()[c+8>>>2>>>0]=l.getUTCHours(),D()[c+12>>>2>>>0]=l.getUTCDate(),D()[c+16>>>2>>>0]=l.getUTCMonth(),D()[c+20>>>2>>>0]=l.getUTCFullYear()-1900,D()[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[c+28>>>2>>>0]=l}var Kf=l=>l%4==0&&(l%100!=0||l%400==0),Qf=[0,31,60,91,121,152,182,213,244,274,305,335],Yf=[0,31,59,90,120,151,181,212,243,273,304,334];function Fx(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),D()[c>>>2>>>0]=l.getSeconds(),D()[c+4>>>2>>>0]=l.getMinutes(),D()[c+8>>>2>>>0]=l.getHours(),D()[c+12>>>2>>>0]=l.getDate(),D()[c+16>>>2>>>0]=l.getMonth(),D()[c+20>>>2>>>0]=l.getFullYear()-1900,D()[c+24>>>2>>>0]=l.getDay();var m=(Kf(l.getFullYear())?Qf:Yf)[l.getMonth()]+l.getDate()-1|0;D()[c+28>>>2>>>0]=m,D()[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),m=new Date(l.getFullYear(),6,1).getTimezoneOffset();var w=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(m!=w&&l.getTimezoneOffset()==Math.min(w,m)),D()[c+32>>>2>>>0]=l}function Vx(l){l>>>=0;var c=new Date(D()[l+20>>>2>>>0]+1900,D()[l+16>>>2>>>0],D()[l+12>>>2>>>0],D()[l+8>>>2>>>0],D()[l+4>>>2>>>0],D()[l>>>2>>>0],0),m=D()[l+32>>>2>>>0],w=c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,x);return 0>m?D()[l+32>>>2>>>0]=+(x!=E&&A==w):0<m!=(A==w)&&(x=Math.max(E,x),c.setTime(c.getTime()+6e4*((0<m?A:x)-w))),D()[l+24>>>2>>>0]=c.getDay(),m=(Kf(c.getFullYear())?Qf:Yf)[c.getMonth()]+c.getDate()-1|0,D()[l+28>>>2>>>0]=m,D()[l>>>2>>>0]=c.getSeconds(),D()[l+4>>>2>>>0]=c.getMinutes(),D()[l+8>>>2>>>0]=c.getHours(),D()[l+12>>>2>>>0]=c.getDate(),D()[l+16>>>2>>>0]=c.getMonth(),D()[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Zf(l,c,m,w,x,E,A){return o?Ae(16,1,l,c,m,w,x,E,A):-52}function Xf(l,c,m,w,x,E){if(o)return Ae(17,1,l,c,m,w,x,E)}var Vi={},qx=()=>performance.timeOrigin+performance.now();function Jf(l,c){if(o)return Ae(18,1,l,c);if(Vi[l]&&(clearTimeout(Vi[l].id),delete Vi[l]),!c)return 0;var m=setTimeout(()=>{delete Vi[l],zl(()=>mh(l,performance.timeOrigin+performance.now()))},c);return Vi[l]={id:m,rc:c},0}function Hx(l,c,m,w){l>>>=0,c>>>=0,m>>>=0,w>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var A=Math.max(E,x);ue()[l>>>2>>>0]=60*A,D()[c>>>2>>>0]=+(E!=x),l=(c=R=>{var F=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(F/60)).padStart(2,"0")}${String(F%60).padStart(2,"0")}`})(E),c=c(x),x<E?(vn(l,m,17),vn(c,w,17)):(vn(l,w,17),vn(c,m,17))}var Gx=()=>Date.now();function Kx(l,c,m){return 0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),G[m>>>0>>>3]=BigInt(Math.round(1e6*l)),0):28}var Nl=[],eh=(l,c)=>{Nl.length=0;for(var m;m=U()[l++>>>0];){var w=m!=105;c+=(w&=m!=112)&&c%8?4:0,Nl.push(m==112?ue()[c>>>2>>>0]:m==106?G[c>>>3]:m==105?D()[c>>>2>>>0]:xe()[c>>>3>>>0]),c+=w?8:4}return Nl};function Qx(l,c,m){return l>>>=0,c=eh(c>>>0,m>>>0),Ml[l](...c)}function Yx(l,c,m){return l>>>=0,c=eh(c>>>0,m>>>0),Ml[l](...c)}var Zx=()=>{};function Xx(l,c){return W(We(l>>>0,c>>>0))}var Jx=()=>{throw Lr+=1,"unwind"};function e3(){return 4294901760}var t3=()=>navigator.hardwareConcurrency;function r3(){return Br("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function n3(l){l>>>=0;var c=U().length;if(l<=c||4294901760<l)return!1;for(var m=1;4>=m;m*=2){var w=c*(1+.2/m);w=Math.min(w,l+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(l,w)/65536))-v.buffer.byteLength+65535)/65536|0;try{v.grow(w),Ie();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}var ps=()=>(Br("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),qi={},th=l=>{l.forEach(c=>{ps()})};function i3(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),th(l),qi.Mb=ps(),qi.dc=l,qi.Mb}function a3(l,c,m){if(l>>>=0,c>>>=0,qi.Mb==l)var w=qi.dc;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),th(w);for(var x=3;w[x]&&ps()!=l;)++x;for(l=0;l<m&&w[l+x];++l)D()[c+4*l>>>2>>>0]=ps();return l}var Pl,Dl={},rh=()=>{if(!Pl){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Dl)Dl[l]===void 0?delete c[l]:c[l]=Dl[l];var m=[];for(l in c)m.push(`${l}=${c[l]}`);Pl=m}return Pl};function nh(l,c){if(o)return Ae(19,1,l,c);l>>>=0,c>>>=0;var m,w=0,x=0;for(m of rh()){var E=c+w;ue()[l+x>>>2>>>0]=E,w+=vn(m,E,1/0)+1,x+=4}return 0}function ih(l,c){if(o)return Ae(20,1,l,c);l>>>=0,c>>>=0;var m=rh();for(var w of(ue()[l>>>2>>>0]=m.length,l=0,m))l+=Il(w)+1;return ue()[c>>>2>>>0]=l,0}function ah(l){return o?Ae(21,1,l):52}function sh(l,c,m,w){return o?Ae(22,1,l,c,m,w):52}function oh(l,c,m,w){return o?Ae(23,1,l,c,m,w):70}var s3=[null,[],[]];function lh(l,c,m,w){if(o)return Ae(24,1,l,c,m,w);c>>>=0,m>>>=0,w>>>=0;for(var x=0,E=0;E<m;E++){var A=ue()[c>>>2>>>0],R=ue()[c+4>>>2>>>0];c+=8;for(var F=0;F<R;F++){var q=l,X=U()[A+F>>>0],oe=s3[q];X===0||X===10?((q===1?Q:W)(kf(oe)),oe.length=0):oe.push(X)}x+=R}return ue()[w>>>2>>>0]=x,0}o||function(){for(var l=n.numThreads-1;l--;)$f();$l.push(()=>{ji++,function(c){o?c():Promise.all(Ur.map(wf)).then(c)}(()=>pf())})}();for(var uh=Array(256),fs=0;256>fs;++fs)uh[fs]=String.fromCharCode(fs);Lf=uh,wr.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=()=>wr.length/2-5-Cl.length,o||(v=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ie()),n.wasmBinary&&(k=n.wasmBinary),n.stackSave=()=>Wl(),n.stackRestore=l=>ms(l),n.stackAlloc=l=>jl(l),n.setValue=function(l,c,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":N()[l>>>0]=c;break;case"i16":ie()[l>>>1>>>0]=c;break;case"i32":D()[l>>>2>>>0]=c;break;case"i64":G[l>>>3]=BigInt(c);break;case"float":Ve()[l>>>2>>>0]=c;break;case"double":xe()[l>>>3>>>0]=c;break;case"*":ue()[l>>>2>>>0]=c;break;default:Br(`invalid type for setValue: ${m}`)}},n.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return N()[l>>>0];case"i16":return ie()[l>>>1>>>0];case"i32":return D()[l>>>2>>>0];case"i64":return G[l>>>3];case"float":return Ve()[l>>>2>>>0];case"double":return xe()[l>>>3>>>0];case"*":return ue()[l>>>2>>>0];default:Br(`invalid type for getValue: ${c}`)}},n.UTF8ToString=We,n.stringToUTF8=vn,n.lengthBytesUTF8=Il;var o3=[bl,gf,bf,Cf,Ef,Tf,If,zf,Af,Of,Rf,Nf,Pf,Df,Mf,Bf,Zf,Xf,Jf,nh,ih,ah,sh,oh,lh],Ml={893836:(l,c,m,w,x)=>{if(n===void 0||!n.Fb)return 1;if((l=We(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=n.Fb.get(l)))return 2;if(c=Number(c>>>0),m=Number(m>>>0),w=Number(w>>>0),c+m>l.byteLength)return 3;try{let E=l.subarray(c,c+m);switch(x){case 0:U().set(E,w>>>0);break;case 1:n.mc?n.mc(w,E):n.cc(w,E);break;default:return 4}return 0}catch{return 4}},894660:(l,c,m)=>{n.Pb(l,U().subarray(c>>>0,c+m>>>0))},894724:()=>n.oc(),894766:l=>{n.Ob(l)},894803:()=>{n.Wb()},894834:()=>{n.Xb()},894863:()=>{n.ac()},894888:l=>n.Vb(l),894921:l=>n.Zb(l),894953:(l,c,m)=>{n.Lb(Number(l),Number(c),Number(m),!0)},895016:(l,c,m)=>{n.Lb(Number(l),Number(c),Number(m))},895073:()=>typeof wasmOffsetConverter<"u",895130:l=>{n.Ab("Abs",l,void 0)},895181:l=>{n.Ab("Neg",l,void 0)},895232:l=>{n.Ab("Floor",l,void 0)},895285:l=>{n.Ab("Ceil",l,void 0)},895337:l=>{n.Ab("Reciprocal",l,void 0)},895395:l=>{n.Ab("Sqrt",l,void 0)},895447:l=>{n.Ab("Exp",l,void 0)},895498:l=>{n.Ab("Erf",l,void 0)},895549:l=>{n.Ab("Sigmoid",l,void 0)},895604:(l,c,m)=>{n.Ab("HardSigmoid",l,{alpha:c,beta:m})},895683:l=>{n.Ab("Log",l,void 0)},895734:l=>{n.Ab("Sin",l,void 0)},895785:l=>{n.Ab("Cos",l,void 0)},895836:l=>{n.Ab("Tan",l,void 0)},895887:l=>{n.Ab("Asin",l,void 0)},895939:l=>{n.Ab("Acos",l,void 0)},895991:l=>{n.Ab("Atan",l,void 0)},896043:l=>{n.Ab("Sinh",l,void 0)},896095:l=>{n.Ab("Cosh",l,void 0)},896147:l=>{n.Ab("Asinh",l,void 0)},896200:l=>{n.Ab("Acosh",l,void 0)},896253:l=>{n.Ab("Atanh",l,void 0)},896306:l=>{n.Ab("Tanh",l,void 0)},896358:l=>{n.Ab("Not",l,void 0)},896409:(l,c,m)=>{n.Ab("Clip",l,{min:c,max:m})},896478:l=>{n.Ab("Clip",l,void 0)},896530:(l,c)=>{n.Ab("Elu",l,{alpha:c})},896588:l=>{n.Ab("Gelu",l,void 0)},896640:l=>{n.Ab("Relu",l,void 0)},896692:(l,c)=>{n.Ab("LeakyRelu",l,{alpha:c})},896756:(l,c)=>{n.Ab("ThresholdedRelu",l,{alpha:c})},896826:(l,c)=>{n.Ab("Cast",l,{to:c})},896884:l=>{n.Ab("Add",l,void 0)},896935:l=>{n.Ab("Sub",l,void 0)},896986:l=>{n.Ab("Mul",l,void 0)},897037:l=>{n.Ab("Div",l,void 0)},897088:l=>{n.Ab("Pow",l,void 0)},897139:l=>{n.Ab("Equal",l,void 0)},897192:l=>{n.Ab("Greater",l,void 0)},897247:l=>{n.Ab("GreaterOrEqual",l,void 0)},897309:l=>{n.Ab("Less",l,void 0)},897361:l=>{n.Ab("LessOrEqual",l,void 0)},897420:(l,c,m,w,x)=>{n.Ab("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},897595:(l,c,m,w,x)=>{n.Ab("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},897769:(l,c,m,w,x)=>{n.Ab("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},897943:(l,c,m,w,x)=>{n.Ab("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898118:(l,c,m,w,x)=>{n.Ab("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898292:(l,c,m,w,x)=>{n.Ab("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898465:(l,c,m,w,x)=>{n.Ab("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898638:(l,c,m,w,x)=>{n.Ab("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898815:(l,c,m,w,x)=>{n.Ab("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},898995:(l,c,m,w,x)=>{n.Ab("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},899175:l=>{n.Ab("Where",l,void 0)},899228:(l,c,m)=>{n.Ab("Transpose",l,{perm:c?Array.from(D().subarray(Number(c)>>>0,Number(m)>>>0)):[]})},899352:(l,c,m,w)=>{n.Ab("DepthToSpace",l,{blocksize:c,mode:We(m),format:w?"NHWC":"NCHW"})},899485:(l,c,m,w)=>{n.Ab("DepthToSpace",l,{blocksize:c,mode:We(m),format:w?"NHWC":"NCHW"})},899618:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe)=>{n.Ab("ConvTranspose",l,{format:F?"NHWC":"NCHW",autoPad:c,dilations:[m],group:w,kernelShape:[x],pads:[E,A],strides:[R],wIsConst:()=>!!N()[q>>>0],outputPadding:X?Array.from(D().subarray(Number(X)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from(D().subarray(Number(he)>>>0,Number(we)>>>0)):[],activation:We(qe)})},900051:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("ConvTranspose",l,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:w,kernelShape:Array.from(D().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(D().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(D().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!N()[F>>>0],outputPadding:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],outputShape:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[],activation:We(we)})},900712:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe)=>{n.Ab("ConvTranspose",l,{format:F?"NHWC":"NCHW",autoPad:c,dilations:[m],group:w,kernelShape:[x],pads:[E,A],strides:[R],wIsConst:()=>!!N()[q>>>0],outputPadding:X?Array.from(D().subarray(Number(X)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from(D().subarray(Number(he)>>>0,Number(we)>>>0)):[],activation:We(qe)})},901145:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("ConvTranspose",l,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:w,kernelShape:Array.from(D().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(D().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(D().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!N()[F>>>0],outputPadding:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],outputShape:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[],activation:We(we)})},901806:(l,c)=>{n.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},901897:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("AveragePool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:w,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(D().subarray(Number(R)>>>0,Number(F)>>>0)):[],pads:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],strides:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},902376:(l,c)=>{n.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},902467:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("AveragePool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:w,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(D().subarray(Number(R)>>>0,Number(F)>>>0)):[],pads:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],strides:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},902946:(l,c)=>{n.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903033:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("MaxPool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:w,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(D().subarray(Number(R)>>>0,Number(F)>>>0)):[],pads:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],strides:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},903508:(l,c)=>{n.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903595:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>{n.Ab("MaxPool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:w,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(D().subarray(Number(R)>>>0,Number(F)>>>0)):[],pads:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],strides:oe?Array.from(D().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},904070:(l,c,m,w,x)=>{n.Ab("Gemm",l,{alpha:c,beta:m,transA:w,transB:x})},904174:l=>{n.Ab("MatMul",l,void 0)},904228:(l,c,m,w)=>{n.Ab("ArgMax",l,{keepDims:!!c,selectLastIndex:!!m,axis:w})},904336:(l,c,m,w)=>{n.Ab("ArgMin",l,{keepDims:!!c,selectLastIndex:!!m,axis:w})},904444:(l,c)=>{n.Ab("Softmax",l,{axis:c})},904507:(l,c)=>{n.Ab("Concat",l,{axis:c})},904567:(l,c,m,w,x)=>{n.Ab("Split",l,{axis:c,numOutputs:m,splitSizes:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},904723:l=>{n.Ab("Expand",l,void 0)},904777:(l,c)=>{n.Ab("Gather",l,{axis:Number(c)})},904848:(l,c)=>{n.Ab("GatherElements",l,{axis:Number(c)})},904927:(l,c)=>{n.Ab("GatherND",l,{batch_dims:Number(c)})},905006:(l,c,m,w,x,E,A,R,F,q,X)=>{n.Ab("Resize",l,{antialias:c,axes:m?Array.from(D().subarray(Number(m)>>>0,Number(w)>>>0)):[],coordinateTransformMode:We(x),cubicCoeffA:E,excludeOutside:A,extrapolationValue:R,keepAspectRatioPolicy:We(F),mode:We(q),nearestMode:We(X)})},905368:(l,c,m,w,x,E,A)=>{n.Ab("Slice",l,{starts:c?Array.from(D().subarray(Number(c)>>>0,Number(m)>>>0)):[],ends:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[],axes:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[]})},905632:l=>{n.Ab("Tile",l,void 0)},905684:(l,c,m)=>{n.Ab("InstanceNormalization",l,{epsilon:c,format:m?"NHWC":"NCHW"})},905798:(l,c,m)=>{n.Ab("InstanceNormalization",l,{epsilon:c,format:m?"NHWC":"NCHW"})},905912:l=>{n.Ab("Range",l,void 0)},905965:(l,c)=>{n.Ab("Einsum",l,{equation:We(c)})},906046:(l,c,m,w,x)=>{n.Ab("Pad",l,{mode:c,value:m,pads:w?Array.from(D().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},906189:(l,c,m,w,x,E)=>{n.Ab("BatchNormalization",l,{epsilon:c,momentum:m,spatial:!!x,trainingMode:!!w,format:E?"NHWC":"NCHW"})},906358:(l,c,m,w,x,E)=>{n.Ab("BatchNormalization",l,{epsilon:c,momentum:m,spatial:!!x,trainingMode:!!w,format:E?"NHWC":"NCHW"})},906527:(l,c,m)=>{n.Ab("CumSum",l,{exclusive:Number(c),reverse:Number(m)})},906624:(l,c,m)=>{n.Ab("DequantizeLinear",l,{axis:c,blockSize:m})},906714:(l,c,m,w,x)=>{n.Ab("GridSample",l,{align_corners:c,mode:We(m),padding_mode:We(w),format:x?"NHWC":"NCHW"})},906884:(l,c,m,w,x)=>{n.Ab("GridSample",l,{align_corners:c,mode:We(m),padding_mode:We(w),format:x?"NHWC":"NCHW"})},907054:(l,c)=>{n.Ab("ScatterND",l,{reduction:We(c)})},907139:(l,c,m,w,x,E,A,R,F)=>{n.Ab("Attention",l,{numHeads:c,isUnidirectional:m,maskFilterValue:w,scale:x,doRotary:E,qkvHiddenSizes:A?Array.from(D().subarray(Number(R)>>>0,Number(R)+A>>>0)):[],pastPresentShareBuffer:!!F})},907411:l=>{n.Ab("BiasAdd",l,void 0)},907466:l=>{n.Ab("BiasSplitGelu",l,void 0)},907527:l=>{n.Ab("FastGelu",l,void 0)},907583:(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St)=>{n.Ab("Conv",l,{format:oe?"NHWC":"NCHW",auto_pad:c,dilations:m?Array.from(D().subarray(Number(m)>>>0,Number(w)>>>0)):[],group:x,kernel_shape:E?Array.from(D().subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:R?Array.from(D().subarray(Number(R)>>>0,Number(F)>>>0)):[],strides:q?Array.from(D().subarray(Number(q)>>>0,Number(X)>>>0)):[],w_is_const:()=>!!N()[Number(he)>>>0],activation:We(we),activation_params:qe?Array.from(Ve().subarray(Number(qe)>>>0,Number(St)>>>0)):[]})},908167:l=>{n.Ab("Gelu",l,void 0)},908219:(l,c,m,w,x,E,A,R,F)=>{n.Ab("GroupQueryAttention",l,{numHeads:c,kvNumHeads:m,scale:w,softcap:x,doRotary:E,rotaryInterleaved:A,smoothSoftmax:R,localWindowSize:F})},908436:(l,c,m,w)=>{n.Ab("LayerNormalization",l,{axis:c,epsilon:m,simplified:!!w})},908547:(l,c,m,w)=>{n.Ab("LayerNormalization",l,{axis:c,epsilon:m,simplified:!!w})},908658:(l,c,m,w,x,E)=>{n.Ab("MatMulNBits",l,{k:c,n:m,accuracyLevel:w,bits:x,blockSize:E})},908785:(l,c,m,w,x,E)=>{n.Ab("MultiHeadAttention",l,{numHeads:c,isUnidirectional:m,maskFilterValue:w,scale:x,doRotary:E})},908944:(l,c)=>{n.Ab("QuickGelu",l,{alpha:c})},909008:(l,c,m,w,x)=>{n.Ab("RotaryEmbedding",l,{interleaved:!!c,numHeads:m,rotaryEmbeddingDim:w,scale:x})},909147:(l,c,m)=>{n.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!m})},909249:(l,c,m)=>{n.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!m})},909351:(l,c,m,w)=>{n.Ab("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:m,blockSize:w})},909472:l=>{n.$b(l)},909506:(l,c)=>n.bc(Number(l),Number(c),n.Gb.ec,n.Gb.errors)};function l3(l,c,m){return Hf(async()=>{await n.Yb(Number(l),Number(c),Number(m))})}function u3(){return typeof wasmOffsetConverter<"u"}var M=await async function(){function l(w,x){return M=w.exports,M=function(){var E=M,A={};for(let[R,F]of Object.entries(E))A[R]=typeof F=="function"?(...q)=>{us.push(R);try{return F(...q)}finally{L||(us.pop(),ur&&Wr===1&&us.length===0&&(Wr=0,Lr+=1,ls(wh),typeof Fibers<"u"&&Fibers.sc()))}}:F;return A}(),M=function(){var E=M,A=F=>q=>F(q)>>>0,R=F=>()=>F()>>>0;return(E=Object.assign({},E)).Ea=A(E.Ea),E.gb=R(E.gb),E.ib=A(E.ib),E.tb=A(E.tb),E.ub=R(E.ub),E.__cxa_get_exception_ptr=A(E.__cxa_get_exception_ptr),E}(),yf.push(M.jb),g=x,pf(),M}ji++;var c=ff();if(n.instantiateWasm)return new Promise(w=>{n.instantiateWasm(c,(x,E)=>{w(l(x,E))})});if(o)return new Promise(w=>{K=x=>{var E=new WebAssembly.Instance(x,ff());w(l(E,x))}});yt??=n.locateFile?n.locateFile?n.locateFile("ort-wasm-simd-threaded.jsep.wasm",$):$+"ort-wasm-simd-threaded.jsep.wasm":new URL("/finnish-tech-salary-survey/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href;try{var m=await async function(w){var x=yt;if(!k&&typeof WebAssembly.instantiateStreaming=="function"&&!Y(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,w)}catch(A){W(`wasm streaming compile failed: ${A}`),W("falling back to ArrayBuffer instantiation")}return async function(A,R){try{var F=await async function(q){if(!k)try{var X=await f(q);return new Uint8Array(X)}catch{}if(q==yt&&k)q=new Uint8Array(k);else{if(!h)throw"both async and sync fetching of the wasm failed";q=h(q)}return q}(A);return await WebAssembly.instantiate(F,R)}catch(q){W(`failed to asynchronously prepare wasm: ${q}`),Br(q)}}(x,w)}(c);return l(m.instance,m.module)}catch(w){return r(w),Promise.reject(w)}}(),dh=l=>(dh=M.Ea)(l),ch=()=>(ch=M.Fa)();n._OrtInit=(l,c)=>(n._OrtInit=M.Ga)(l,c),n._OrtGetLastError=(l,c)=>(n._OrtGetLastError=M.Ha)(l,c),n._OrtCreateSessionOptions=(l,c,m,w,x,E,A,R,F,q)=>(n._OrtCreateSessionOptions=M.Ia)(l,c,m,w,x,E,A,R,F,q),n._OrtAppendExecutionProvider=(l,c,m,w,x)=>(n._OrtAppendExecutionProvider=M.Ja)(l,c,m,w,x),n._OrtAddFreeDimensionOverride=(l,c,m)=>(n._OrtAddFreeDimensionOverride=M.Ka)(l,c,m),n._OrtAddSessionConfigEntry=(l,c,m)=>(n._OrtAddSessionConfigEntry=M.La)(l,c,m),n._OrtReleaseSessionOptions=l=>(n._OrtReleaseSessionOptions=M.Ma)(l),n._OrtCreateSession=(l,c,m)=>(n._OrtCreateSession=M.Na)(l,c,m),n._OrtReleaseSession=l=>(n._OrtReleaseSession=M.Oa)(l),n._OrtGetInputOutputCount=(l,c,m)=>(n._OrtGetInputOutputCount=M.Pa)(l,c,m),n._OrtGetInputOutputMetadata=(l,c,m,w)=>(n._OrtGetInputOutputMetadata=M.Qa)(l,c,m,w),n._OrtFree=l=>(n._OrtFree=M.Ra)(l),n._OrtCreateTensor=(l,c,m,w,x,E)=>(n._OrtCreateTensor=M.Sa)(l,c,m,w,x,E),n._OrtGetTensorData=(l,c,m,w,x)=>(n._OrtGetTensorData=M.Ta)(l,c,m,w,x),n._OrtReleaseTensor=l=>(n._OrtReleaseTensor=M.Ua)(l),n._OrtCreateRunOptions=(l,c,m,w)=>(n._OrtCreateRunOptions=M.Va)(l,c,m,w),n._OrtAddRunConfigEntry=(l,c,m)=>(n._OrtAddRunConfigEntry=M.Wa)(l,c,m),n._OrtReleaseRunOptions=l=>(n._OrtReleaseRunOptions=M.Xa)(l),n._OrtCreateBinding=l=>(n._OrtCreateBinding=M.Ya)(l),n._OrtBindInput=(l,c,m)=>(n._OrtBindInput=M.Za)(l,c,m),n._OrtBindOutput=(l,c,m,w)=>(n._OrtBindOutput=M._a)(l,c,m,w),n._OrtClearBoundOutputs=l=>(n._OrtClearBoundOutputs=M.$a)(l),n._OrtReleaseBinding=l=>(n._OrtReleaseBinding=M.ab)(l),n._OrtRunWithBinding=(l,c,m,w,x)=>(n._OrtRunWithBinding=M.bb)(l,c,m,w,x),n._OrtRun=(l,c,m,w,x,E,A,R)=>(n._OrtRun=M.cb)(l,c,m,w,x,E,A,R),n._OrtEndProfiling=l=>(n._OrtEndProfiling=M.db)(l),n._JsepOutput=(l,c,m)=>(n._JsepOutput=M.eb)(l,c,m),n._JsepGetNodeName=l=>(n._JsepGetNodeName=M.fb)(l);var Bl=()=>(Bl=M.gb)(),$r=n._free=l=>($r=n._free=M.hb)(l),hs=n._malloc=l=>(hs=n._malloc=M.ib)(l),Ll=(l,c,m,w,x,E)=>(Ll=M.kb)(l,c,m,w,x,E),ph=()=>(ph=M.lb)(),fh=(l,c,m,w,x)=>(fh=M.mb)(l,c,m,w,x),hh=l=>(hh=M.nb)(l),Ul=l=>(Ul=M.ob)(l),mh=(l,c)=>(mh=M.pb)(l,c),gh=()=>(gh=M.qb)(),yh=(l,c)=>(yh=M.rb)(l,c),ms=l=>(ms=M.sb)(l),jl=l=>(jl=M.tb)(l),Wl=()=>(Wl=M.ub)(),vh=n.dynCall_ii=(l,c)=>(vh=n.dynCall_ii=M.vb)(l,c);n.dynCall_vii=(l,c,m)=>(n.dynCall_vii=M.dynCall_vii)(l,c,m),n.dynCall_iiiii=(l,c,m,w,x)=>(n.dynCall_iiiii=M.dynCall_iiiii)(l,c,m,w,x),n.dynCall_iii=(l,c,m)=>(n.dynCall_iii=M.dynCall_iii)(l,c,m),n.dynCall_iiiiii=(l,c,m,w,x,E)=>(n.dynCall_iiiiii=M.dynCall_iiiiii)(l,c,m,w,x,E),n.dynCall_iiiiiiii=(l,c,m,w,x,E,A,R)=>(n.dynCall_iiiiiiii=M.dynCall_iiiiiiii)(l,c,m,w,x,E,A,R),n.dynCall_iiiiiii=(l,c,m,w,x,E,A)=>(n.dynCall_iiiiiii=M.dynCall_iiiiiii)(l,c,m,w,x,E,A),n.dynCall_vi=(l,c)=>(n.dynCall_vi=M.dynCall_vi)(l,c),n.dynCall_iiii=(l,c,m,w)=>(n.dynCall_iiii=M.dynCall_iiii)(l,c,m,w),n.dynCall_i=l=>(n.dynCall_i=M.dynCall_i)(l),n.dynCall_viiiiiiii=(l,c,m,w,x,E,A,R,F)=>(n.dynCall_viiiiiiii=M.dynCall_viiiiiiii)(l,c,m,w,x,E,A,R,F),n.dynCall_viii=(l,c,m,w)=>(n.dynCall_viii=M.dynCall_viii)(l,c,m,w),n.dynCall_viijj=(l,c,m,w,x)=>(n.dynCall_viijj=M.dynCall_viijj)(l,c,m,w,x),n.dynCall_viiiiii=(l,c,m,w,x,E,A)=>(n.dynCall_viiiiii=M.dynCall_viiiiii)(l,c,m,w,x,E,A),n.dynCall_viiii=(l,c,m,w,x)=>(n.dynCall_viiii=M.dynCall_viiii)(l,c,m,w,x),n.dynCall_viiiii=(l,c,m,w,x,E)=>(n.dynCall_viiiii=M.dynCall_viiiii)(l,c,m,w,x,E),n.dynCall_vfiii=(l,c,m,w,x)=>(n.dynCall_vfiii=M.dynCall_vfiii)(l,c,m,w,x),n.dynCall_viiiiff=(l,c,m,w,x,E,A)=>(n.dynCall_viiiiff=M.dynCall_viiiiff)(l,c,m,w,x,E,A),n.dynCall_viiiiiff=(l,c,m,w,x,E,A,R)=>(n.dynCall_viiiiiff=M.dynCall_viiiiiff)(l,c,m,w,x,E,A,R),n.dynCall_ffff=(l,c,m,w)=>(n.dynCall_ffff=M.dynCall_ffff)(l,c,m,w),n.dynCall_viiff=(l,c,m,w,x)=>(n.dynCall_viiff=M.dynCall_viiff)(l,c,m,w,x),n.dynCall_fffffff=(l,c,m,w,x,E,A)=>(n.dynCall_fffffff=M.dynCall_fffffff)(l,c,m,w,x,E,A),n.dynCall_jjjjjjj=(l,c,m,w,x,E,A)=>(n.dynCall_jjjjjjj=M.dynCall_jjjjjjj)(l,c,m,w,x,E,A),n.dynCall_jjjjjj=(l,c,m,w,x,E)=>(n.dynCall_jjjjjj=M.dynCall_jjjjjj)(l,c,m,w,x,E),n.dynCall_iijjii=(l,c,m,w,x,E)=>(n.dynCall_iijjii=M.dynCall_iijjii)(l,c,m,w,x,E),n.dynCall_viiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we)=>(n.dynCall_viiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we),n.dynCall_viiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X)=>(n.dynCall_viiiiiiiiii=M.dynCall_viiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X),n.dynCall_viiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe)=>(n.dynCall_viiiiiiiiiii=M.dynCall_viiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe),n.dynCall_viiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he)=>(n.dynCall_viiiiiiiiiiii=M.dynCall_viiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he),n.dynCall_viiiiiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi)=>(n.dynCall_viiiiiiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi),n.dynCall_viiiiiiiii=(l,c,m,w,x,E,A,R,F,q)=>(n.dynCall_viiiiiiiii=M.dynCall_viiiiiiiii)(l,c,m,w,x,E,A,R,F,q),n.dynCall_viiiiiiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi,Fl)=>(n.dynCall_viiiiiiiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi,Fl),n.dynCall_viiiiiii=(l,c,m,w,x,E,A,R)=>(n.dynCall_viiiiiii=M.dynCall_viiiiiii)(l,c,m,w,x,E,A,R),n.dynCall_viiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St)=>(n.dynCall_viiiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St),n.dynCall_jiji=(l,c,m,w)=>(n.dynCall_jiji=M.dynCall_jiji)(l,c,m,w),n.dynCall_v=l=>(n.dynCall_v=M.dynCall_v)(l),n.dynCall_iidiiii=(l,c,m,w,x,E,A)=>(n.dynCall_iidiiii=M.dynCall_iidiiii)(l,c,m,w,x,E,A),n.dynCall_iiiiiiiii=(l,c,m,w,x,E,A,R,F)=>(n.dynCall_iiiiiiiii=M.dynCall_iiiiiiiii)(l,c,m,w,x,E,A,R,F),n.dynCall_iiij=(l,c,m,w)=>(n.dynCall_iiij=M.dynCall_iiij)(l,c,m,w),n.dynCall_iiiiiiiiii=(l,c,m,w,x,E,A,R,F,q)=>(n.dynCall_iiiiiiiiii=M.dynCall_iiiiiiiiii)(l,c,m,w,x,E,A,R,F,q),n.dynCall_iiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he)=>(n.dynCall_iiiiiiiiiiiii=M.dynCall_iiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he),n.dynCall_iiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X)=>(n.dynCall_iiiiiiiiiii=M.dynCall_iiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X),n.dynCall_ji=(l,c)=>(n.dynCall_ji=M.dynCall_ji)(l,c),n.dynCall_iijii=(l,c,m,w,x)=>(n.dynCall_iijii=M.dynCall_iijii)(l,c,m,w,x),n.dynCall_vij=(l,c,m)=>(n.dynCall_vij=M.dynCall_vij)(l,c,m),n.dynCall_viiijii=(l,c,m,w,x,E,A)=>(n.dynCall_viiijii=M.dynCall_viiijii)(l,c,m,w,x,E,A),n.dynCall_viijiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n)=>(n.dynCall_viijiiiiiiiiiiiiii=M.dynCall_viijiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n),n.dynCall_viiiji=(l,c,m,w,x,E)=>(n.dynCall_viiiji=M.dynCall_viiiji)(l,c,m,w,x,E),n.dynCall_fiii=(l,c,m,w)=>(n.dynCall_fiii=M.dynCall_fiii)(l,c,m,w),n.dynCall_viijii=(l,c,m,w,x,E)=>(n.dynCall_viijii=M.dynCall_viijii)(l,c,m,w,x,E),n.dynCall_viij=(l,c,m,w)=>(n.dynCall_viij=M.dynCall_viij)(l,c,m,w),n.dynCall_jiij=(l,c,m,w)=>(n.dynCall_jiij=M.dynCall_jiij)(l,c,m,w),n.dynCall_fi=(l,c)=>(n.dynCall_fi=M.dynCall_fi)(l,c),n.dynCall_fii=(l,c,m)=>(n.dynCall_fii=M.dynCall_fii)(l,c,m),n.dynCall_jii=(l,c,m)=>(n.dynCall_jii=M.dynCall_jii)(l,c,m),n.dynCall_dii=(l,c,m)=>(n.dynCall_dii=M.dynCall_dii)(l,c,m),n.dynCall_fiiii=(l,c,m,w,x)=>(n.dynCall_fiiii=M.dynCall_fiiii)(l,c,m,w,x),n.dynCall_fif=(l,c,m)=>(n.dynCall_fif=M.dynCall_fif)(l,c,m),n.dynCall_jfi=(l,c,m)=>(n.dynCall_jfi=M.dynCall_jfi)(l,c,m),n.dynCall_viiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe)=>(n.dynCall_viiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe),n.dynCall_viiiiiiiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi,Fl,d3)=>(n.dynCall_viiiiiiiiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br,_n,Hi,Fl,d3),n.dynCall_viiiiiiiiiiiiiiii=(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br)=>(n.dynCall_viiiiiiiiiiiiiiii=M.dynCall_viiiiiiiiiiiiiiii)(l,c,m,w,x,E,A,R,F,q,X,oe,he,we,qe,St,br),n.dynCall_iif=(l,c,m)=>(n.dynCall_iif=M.dynCall_iif)(l,c,m),n.dynCall_jiiii=(l,c,m,w,x)=>(n.dynCall_jiiii=M.dynCall_jiiii)(l,c,m,w,x),n.dynCall_jiii=(l,c,m,w)=>(n.dynCall_jiii=M.dynCall_jiii)(l,c,m,w),n.dynCall_viif=(l,c,m,w)=>(n.dynCall_viif=M.dynCall_viif)(l,c,m,w),n.dynCall_viiij=(l,c,m,w,x)=>(n.dynCall_viiij=M.dynCall_viiij)(l,c,m,w,x),n.dynCall_viiiijii=(l,c,m,w,x,E,A,R)=>(n.dynCall_viiiijii=M.dynCall_viiiijii)(l,c,m,w,x,E,A,R),n.dynCall_iiiiij=(l,c,m,w,x,E)=>(n.dynCall_iiiiij=M.dynCall_iiiiij)(l,c,m,w,x,E),n.dynCall_iiiiid=(l,c,m,w,x,E)=>(n.dynCall_iiiiid=M.dynCall_iiiiid)(l,c,m,w,x,E),n.dynCall_iiiiijj=(l,c,m,w,x,E,A)=>(n.dynCall_iiiiijj=M.dynCall_iiiiijj)(l,c,m,w,x,E,A),n.dynCall_iiiiiijj=(l,c,m,w,x,E,A,R)=>(n.dynCall_iiiiiijj=M.dynCall_iiiiiijj)(l,c,m,w,x,E,A,R);var _h=l=>(_h=M.wb)(l),wh=()=>(wh=M.xb)(),$h=l=>($h=M.yb)(l),bh=()=>(bh=M.zb)();return function l(){if(0<ji)Wi=l;else if(o)t(n),vr();else{for(;0<$l.length;)$l.shift()(n);0<ji?Wi=l:(n.calledRun=!0,L||(vr(),t(n)))}}(),n.PTR_SIZE=4,i},Iw=ku,Hm=globalThis.self?.name?.startsWith("em-pthread"),Hm&&ku()}),Cu,_c,Gm,kt,zw,Ds,Km,Qm,Eu,Ym,Tu,Aw,Iu,Ow,Up=V(()=>{Lp(),Cu=typeof location>"u"?void 0:location.origin,_c=import.meta.url>"file:"&&import.meta.url<"file;",Gm=()=>{{if(_c){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Cu).href}return import.meta.url}},kt=Gm(),zw=()=>{if(kt&&!kt.startsWith("blob:"))return kt.substring(0,kt.lastIndexOf("/")+1)},Ds=(e,t)=>{try{let r=t??kt;return(r?new URL(e,r):new URL(e)).origin===Cu}catch{return!1}},Km=(e,t)=>{let r=t??kt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Qm=(e,t)=>`${t??"./"}${e}`,Eu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ym=async e=>(await import(e)).default,Tu=(pE(),Xa(Cw)).default,Aw=async()=>{if(!kt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ds(kt))return[void 0,Tu()];let e=await Eu(kt);return[e,Tu(e)]},Iu=(fE(),Xa(Tw)).default,Ow=async(e,t,r,n)=>{let i=Iu&&!(e||t);if(i)if(kt)i=Ds(kt);else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Iu];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Km(a,t),o=r&&s&&!Ds(s,t),u=o?await Eu(s):s??Qm(a,t);return[o?u:void 0,await Ym(u)]}}}),zu,Ms,ra,Au,Zm,Xm,Jm,jp,Te,Qn=V(()=>{Up(),Ms=!1,ra=!1,Au=!1,Zm=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Xm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Jm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},jp=async e=>{if(Ms)return Promise.resolve();if(ra)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Au)throw new Error("previous call to 'initializeWebAssembly()' failed.");ra=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Jm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Xm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Zm();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i?.mjs,o=s?.href??s,u=i?.wasm,d=u?.href??u,p=e.wasmBinary,[f,h]=await Ow(o,a,r>1,!!p||!!d),y=!1,_=[];if(t>0&&_.push(new Promise($=>{setTimeout(()=>{y=!0,$()},t)})),_.push(new Promise(($,k)=>{let v={numThreads:r};if(p)v.wasmBinary=p;else if(d||a)v.locateFile=g=>d??a+g;else if(o&&o.indexOf("blob:")!==0)v.locateFile=g=>new URL(g,o).href;else if(f){let g=zw();g&&(v.locateFile=b=>g+b)}h(v).then(g=>{ra=!1,Ms=!0,zu=g,$(),f&&URL.revokeObjectURL(f)},g=>{ra=!1,Au=!0,k(g)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(Ms&&zu)return zu;throw new Error("WebAssembly is not initialized yet.")}}),tr,Fo,Se,Wp=V(()=>{Qn(),tr=(e,t)=>{let r=Te(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Fo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")Fo(a,s+".",r,n);else if(typeof a=="string"||typeof a=="number")n(s,a.toString());else if(typeof a=="boolean")n(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Se=e=>{let t=Te(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let a=Number(t.getValue(i,n===4?"i32":"i64")),s=t.getValue(i+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Rw,hE=V(()=>{Qn(),Wp(),Rw=e=>{let t=Te(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=tr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&Se("Can't create run options."),e?.extra!==void 0&&Fo(e.extra,"",new WeakSet,(s,o)=>{let u=tr(s,n),d=tr(o,n);t._OrtAddRunConfigEntry(r,u,d)!==0&&Se(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),a}}}),eg,tg,rg,na,ng,Nw,mE=V(()=>{Qn(),Wp(),eg=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},tg=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},rg=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},na=(e,t,r,n)=>{let i=tr(t,n),a=tr(r,n);Te()._OrtAddSessionConfigEntry(e,i,a)!==0&&Se(`Can't set a session config entry: ${t} - ${r}.`)},ng=async(e,t,r)=>{for(let n of t){let i=typeof n=="string"?n:n.name,a=[];switch(i){case"webnn":if(i="WEBNN",typeof n!="string"){let p=n?.deviceType;p&&na(e,"deviceType",p,r)}break;case"webgpu":if(i="JS",typeof n!="string"){let p=n;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);na(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=tr(i,r),o=a.length,u=0,d=0;if(o>0){u=Te()._malloc(o*Te().PTR_SIZE),r.push(u),d=Te()._malloc(o*Te().PTR_SIZE),r.push(d);for(let p=0;p<o;p++)Te().setValue(u+p*Te().PTR_SIZE,a[p][0],"*"),Te().setValue(d+p*Te().PTR_SIZE,a[p][1],"*")}await Te()._OrtAppendExecutionProvider(e,s,u,d,o)!==0&&Se(`Can't append execution provider: ${i}.`)}},Nw=async e=>{let t=Te(),r=0,n=[],i=e||{};rg(i);try{let a=eg(i.graphOptimizationLevel??"all"),s=tg(i.executionMode??"sequential"),o=typeof i.logId=="string"?tr(i.logId,n):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?tr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,d,p),r===0&&Se("Can't create session options."),i.executionProviders&&await ng(r,i.executionProviders,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);na(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[f,h]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let y=tr(f,n);t._OrtAddFreeDimensionOverride(r,y,h)!==0&&Se(`Can't set a free dimension override: ${f} - ${h}.`)}return i.extra!==void 0&&Fo(i.extra,"",new WeakSet,(f,h)=>{na(r,f,h,n)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Se("Can't release session options."),n.forEach(s=>t._free(s)),a}}}),Tn,Er,In,_l,Vo,Fp,Vp,wc,le=V(()=>{Tn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Er=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},In=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},_l=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Vo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",wc=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),qp,Pw=V(()=>{Lp(),qp=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ig,ag,sg,og,Hp,lg,ge,Mr=V(()=>{le(),ig=["V","I","W","E","F"],ag=(e,t)=>{console.log(`[${ig[e]},${new Date().toISOString()}]${t}`)},Hp=(e,t)=>{sg=e,og=t},lg=(e,t)=>{let r=Vo(e),n=Vo(sg);r>=n&&ag(r,typeof t=="function"?t():t)},ge=(...e)=>{og&&lg(...e)}}),ug,Ni,O,qo,Dw,Mw,Bw,pe=V(()=>{ug=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ni=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(n<2||i<2)return;let o=ug.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},O=class po{static size(t){return po.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return po.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return po.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},qo=class va{static adjustPoolAttributes(t,r,n,i,a,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)va.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return va.computeShapeHelper(t,r,u,n,i,a,s,o),u}static computeConvOutputShape(t,r,n,i,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return va.computeShapeHelper(!1,t,u,n,i,a,s,o),u}static computeShapeHelper(t,r,n,i,a,s,o,u){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(va.adjustPadAndReturnShape(r[d+2],i[d],a[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,i,a,s,o,u){let d=n*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},Dw=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Ni.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Mw=-34028234663852886e22,Bw=34028234663852886e22}),Gp,Lw=V(()=>{le(),Gp=(e,t)=>new(_l(t))(e)}),Ou,$c,Ru,dg,Nu,cg,Pu,Du,Mu,pg,Uw,gE=V(()=>{le(),Mr(),Ou=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),$c=(e,t)=>{if(t==="int32")return e;let r=Ou.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,a=new(_l(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ru=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},dg=1,Nu=()=>dg++,cg=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Pu=(e,t)=>{let r=Ou.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Du=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Pu(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ru(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Mu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),a;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(a=cg.get(t),!a||!i.opSupportLimits().input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Pu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=$c(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Ru(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},pg=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Nu();return this.tensorTrackersById.set(e,new Mu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),a=Nu(),s=new Du({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(a,new Mu(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,n,i,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:i,readable:a});return new Du({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Uw=(...e)=>new pg(...e)}),ia,fg,jw,yE=V(()=>{le(),Qn(),Lw(),gE(),Mr(),ia=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),fg=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,a)=>i===n[a]&&e[i]===t[i])},jw=class{constructor(e){this.tensorManager=Uw(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Hp(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>fg(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let a=ia.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,n,i)}async createTemporaryTensor(e,t,r){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=ia.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Gp(r,t)}}registerMLTensor(e,t,r,n){let i=ia.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,i,n);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,n,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=$c(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),i.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),i=ia.get(Tn(t));return typeof i>"u"?!1:r?!!n?.opSupportLimits().input.dataTypes.includes(i):!!n?.opSupportLimits().output.dataTypes.includes(i)}flush(){}}}),Kp=V(()=>{}),Bu,Bs,Ls,hg,mg,Lu,bc,gg,Ww,vE=V(()=>{Mr(),Kp(),Bu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Bs=[],Ls=e=>Math.ceil(Number(e)/16)*16,hg=e=>{for(let t=0;t<Bs.length;t++){let r=Bs[t];if(e<=r)return r}return Math.ceil(e/16)*16},mg=1,Lu=()=>mg++,bc=async(e,t,r,n)=>{let i=Ls(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},gg=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Bu)Bs.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,a=Ls(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ls(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Lu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=hg(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:Lu(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await bc(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Bu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ww=(...e)=>new gg(...e)}),yg,be,Ue=V(()=>{yg=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},be=e=>new yg(e)}),Pi,Us,Ye,ot,ne,De,xc,mi,pn,te,aa,B,J,Fw,Qp,vg,Vw,fe=V(()=>{le(),pe(),Pi=64,Us=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let r=Us(e,t);return typeof r=="string"?r:r[0]},ot=(e,t=1)=>{let r=Us(e,t);return typeof r=="string"?r:r[1]},ne=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},De=e=>e%4===0?4:e%2===0?2:1,xc=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,mi=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,pn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,aa=(e,t,r,n,i)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Us(t,i),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:u,value:p,storage:f,tensor:t},y=N=>typeof N=="string"?N:`${N}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=a?"uniforms.":"",k=`${$}${e}_shape`,v=`${$}${e}_strides`,g="";for(let N=0;N<s-1;N++)g+=`
    let dim${N} = current / ${te(v,N,s)};
    let rest${N} = current % ${te(v,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;g+=`indices[${s-1}] = current;`;let b=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${g}
    return indices;
  }`,S=N=>(_.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),C=[];if(s>=2)for(let N=s-1;N>=0;N--)C.push(`${te(v,N,s)} * (indices[${N}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${C.join("+")};
  }`,T=N=>(_.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),z=(...N)=>s===0?"0u":`${h.indices}(${N.map(y).join(",")})`,P=(N,U)=>s<2?`${N}`:`${te(N,U,s)}`,j=(N,U,ie)=>s<2?`${N}=${ie};`:`${te(N,U,s)}=${ie};`,G={},Z=(N,U)=>{_.broadcastedIndicesToOffset=!0;let ie=`${U.name}broadcastedIndicesTo${e}Offset`;if(ie in G)return`${ie}(${N})`;let ce=[];for(let D=s-1;D>=0;D--){let ue=U.indicesGet("outputIndices",D+U.rank-s);ce.push(`${P(v,D)} * (${ue} % ${P(k,D)})`)}return G[ie]=`fn ${ie}(outputIndices: ${U.type.indices}) -> u32 {
             return ${ce.length>0?ce.join("+"):"0u"};
           }`,`${ie}(${N})`},ae=(N,U)=>(()=>{if(h.storage===h.value)return`${e}[${N}]=${U};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${U}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),K=N=>(()=>{if(h.storage===h.value)return`${e}[${N}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${N}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${N}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),de=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${p} {
    return ${K(`i2o_${e}(indices)`)};
  }`,re=s<2?"":(()=>{let N=o.map(ie=>`d${ie}: u32`).join(", "),U=o.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${N}) -> ${p} {
    return get_${e}ByIndices(${z(U)});
  }`})(),Q=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let U=N.map(y).join(",");return s===0?K("0u"):s===1?K(U[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${U})`)},W=N=>s<2?K(N):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${N})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${p}) {
    ${ae(`i2o_${e}(indices)`,"value")}
  }`,Y=s<2?"":(()=>{let N=o.map(ie=>`d${ie}: u32`).join(", "),U=o.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${N}, value: ${p}) {
    set_${e}ByIndices(${z(U)}, value);
  }`})();return{impl:()=>{let N=[],U=!1;return _.offsetToIndices&&(N.push(b),U=!0),_.indicesToOffset&&(N.push(I),U=!0),_.broadcastedIndicesToOffset&&(Object.values(G).forEach(ie=>N.push(ie)),U=!0),_.set&&(N.push(Y),U=!0),_.setByIndices&&(N.push(L),U=!0),_.get&&(N.push(re),U=!0),_.getByIndices&&(N.push(de),U=!0),!a&&U&&N.unshift(`const ${k} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${O.computeStrides(r).join(",")});`),N.join(`
`)},type:h,offsetToIndices:S,indicesToOffset:T,broadcastedIndicesToOffset:Z,indices:z,indicesGet:P,indicesSet:j,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let U=N[s];if(typeof U!="string")throw new Error("value must be string");let ie=N.slice(0,s).map(y).join(",");return s===0?ae("0u",U):s===1?ae(ie[0],U):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${ie}, ${U})`)},setByOffset:ae,setByIndices:(N,U)=>s<2?ae(N,U):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${U});`),get:Q,getByOffset:K,getByIndices:W,usage:n,name:e,strides:v,shape:k,rank:s}},B=(e,t,r,n=1)=>aa(e,t,r,"input",n),J=(e,t,r,n=1)=>aa(e,t,r,"output",n),Fw=(e,t,r)=>aa(e,t,r,"atomicOutput",1),Qp=(e,t,r,n=1)=>aa(e,t,r,"internal",n),vg=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Vw=(e,t)=>new vg(e,t)}),_g,Uu,wg,$g,bg,xg,At,qw,Hw,gn=V(()=>{le(),pe(),Ue(),fe(),_g=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Uu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),wg=(e,t)=>O.sortBasedOnPerm(e,Uu(e.length,t)),$g=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},bg=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},xg=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},At=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Uu(n,t),a=wg(e.dims,i),s=e.dims,o=a,u=n<2||xg(i,e.dims),d;if(u)return d=_=>{let $=B("input",r,s,4),k=J("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables($,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=bg(e.dims,i),h=O.areEqual(f,[2,3,1]),y=O.areEqual(f,[3,1,2]);if(p.length===2||h||y){s=h?[p[0],p[1]*p[2]]:y?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let _=16;return d=$=>{let k=B("a",r,s.length),v=J("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${$.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:$},...ne(s,o)]}},getShaderSource:d}}return d=_=>{let $=B("a",r,s.length),k=J("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables($,k)}

  ${$g(i,n,$,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ne(s,o)]}},getShaderSource:d}},qw=(e,t)=>{_g(e.inputs,t.perm),e.compute(At(e.inputs[0],t.perm))},Hw=e=>be({perm:e.perm})}),Sg,kg,Cg,Eg,Tg,Ig,zg,Ag,Og,Rg,Gt,Gw,Kw,Qw,Yw,Zw,Xw,Jw,e$,t$,r$,_E=V(()=>{le(),pe(),fe(),Yp(),gn(),Sg={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},kg={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Cg={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Eg={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Tg=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Ig=(e,t)=>{let r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);let i=t.map(a=>e[a]);return[r,i]},zg=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},Ag=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Og=(e,t)=>{let r=[];if(!Ag(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Rg=(e,t,r,n,i,a,s)=>{let o=r[0].dims,u=O.size(a),d=O.size(s),p=B("_A",r[0].dataType,o),f=J("output",i,a),h=64;u===1&&(h=256);let y=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Cg[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Sg[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${kg[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Eg[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Gt=(e,t,r,n)=>{let i=e.inputs.length===1?r:Sc(e.inputs,r),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,_)=>_));let s=O.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=Og(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(At(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Tg(o.length,u.dims.length));let[p,f]=Ig(u.dims,o),h=p;i.keepDims&&(h=zg(p,s)),e.compute(Rg(t,i.cacheKey,[u],n,e.inputs[0].dataType,h,f),{inputs:[u]})},Gw=(e,t)=>{Gt(e,"ReduceMeanShared",t,"mean")},Kw=(e,t)=>{Gt(e,"ReduceL1Shared",t,"l1")},Qw=(e,t)=>{Gt(e,"ReduceL2Shared",t,"l2")},Yw=(e,t)=>{Gt(e,"ReduceLogSumExpShared",t,"logSumExp")},Zw=(e,t)=>{Gt(e,"ReduceMaxShared",t,"max")},Xw=(e,t)=>{Gt(e,"ReduceMinShared",t,"min")},Jw=(e,t)=>{Gt(e,"ReduceProdShared",t,"prod")},e$=(e,t)=>{Gt(e,"ReduceSumShared",t,"sum")},t$=(e,t)=>{Gt(e,"ReduceSumSquareShared",t,"sumSquare")},r$=(e,t)=>{Gt(e,"ReduceLogSumShared",t,"logSum")}}),Kt,Ng,Ho,Sc,Qt,Pg,Dg,Mg,Bg,Lg,Ug,jg,Wg,Fg,Vg,Yt,n$,i$,a$,s$,o$,l$,u$,d$,c$,p$,Yp=V(()=>{le(),pe(),Ue(),fe(),_E(),Kt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ng=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ho=(e,t,r,n,i,a,s=!1,o=!1)=>{let u=[],d=r[0].dims,p=d.length,f=O.normalizeAxes(i,p),h=!o&&f.length===0;d.forEach(($,k)=>{h||f.indexOf(k)>=0?s&&u.push(1):u.push($)});let y=u.length,_=O.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{let k=[],v=B("_A",r[0].dataType,p),g=J("output",a,y),b=n(v,g,f),S=b[2];for(let C=0,I=0;C<p;C++)h||f.indexOf(C)>=0?(s&&I++,S=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${b[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${S}
                }`):(k.push(`${v.indicesSet("input_indices",C,g.indicesGet("output_indices",I))};`),I++);return`

        ${$.registerUniform("output_size","u32").declareVariables(v,g)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${g.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${b[0]}       // init ops for reduce max/min
          ${b[1]}
          ${S}
          ${b[3]}
          ${b.length===4?g.setByOffset("global_idx","value"):b.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ne(d,u)]})}},Sc=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),be({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Qt=(e,t,r,n)=>{let i=e.inputs,a=i.length===1?r:Sc(i,r);e.compute(Ho(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Ng:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Pg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Dg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Mg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Bg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Lg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMax",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Ug=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMean",t,(r,n,i)=>{let a=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${a});`]})},jg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMin",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Wg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Fg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Vg=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Yt=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},n$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ug(e,t):Gw(e,t)},i$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dg(e,t):Kw(e,t)},a$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mg(e,t):Qw(e,t)},s$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bg(e,t):Yw(e,t)},o$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lg(e,t):Zw(e,t)},l$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jg(e,t):Xw(e,t)},u$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wg(e,t):Jw(e,t)},d$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fg(e,t):e$(e,t)},c$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vg(e,t):t$(e,t)},p$=(e,t)=>{Yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pg(e,t):r$(e,t)}}),ju,f$,h$,kc,wE=V(()=>{le(),Ue(),Yp(),ju=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},f$=(e,t)=>{ju(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ho("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},h$=(e,t)=>{ju(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ho("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},kc=e=>be(e)}),qg,js,Hg,Gg,Kg,Ja,Qg,m$,Zp=V(()=>{le(),pe(),Kp(),fe(),qg=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],p=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,h=f,y=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let b of t.qkvHiddenSizes)if(b%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+h+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(h!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let k=_+$,v=-1,g=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:p,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},js=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Hg=(e,t,r,n,i,a,s,o)=>{let u=De(s?1:a),d=64,p=a/u;p<d&&(d=32);let f=Math.ceil(a/u/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:p},{type:12,data:f}],y=Ye(e.dataType,u),_=ot(1,u),$=["type"];s&&$.push("type"),o&&$.push("type");let k=v=>{let g=J("x",e.dataType,e.dims,u),b=[g],S=s?B("seq_lens",s.dataType,s.dims):void 0;S&&b.push(S);let C=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;C&&b.push(C);let I=ot(e.dataType),T=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(T).declareVariables(...b)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${js(S,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${g.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${g.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${u}`,inputDependencies:$},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},Gg=(e,t,r,n,i,a,s,o,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],f=e>1&&n,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,h,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,$=a.scale===0?1/Math.sqrt(a.headSize):a.scale,k=De(a.headSize),v=a.headSize/k,g=12,b={x:Math.ceil(d/g),y:Math.ceil(a.sequenceLength/g),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],C=f&&n&&O.size(n.dims)>0,I=["type","type"];C&&I.push("type"),i&&I.push("type"),o&&I.push("type"),u&&I.push("type");let T=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:y,dataType:t.dataType,gpuDataType:0});let z=P=>{let j=B("q",t.dataType,t.dims,k),G=B("key",r.dataType,r.dims,k),Z=[j,G];if(C){let L=B("past_key",n.dataType,n.dims,k);Z.push(L)}i&&Z.push(B("attention_bias",i.dataType,i.dims));let ae=o?B("seq_lens",o.dataType,o.dims):void 0;ae&&Z.push(ae);let K=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;K&&Z.push(K);let de=J("output",t.dataType,p),re=[de];f&&re.push(J("present_key",t.dataType,y,k));let Q=ot(1,k),W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${j.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${j.type.storage}, ${g*g}>;
  ${P.registerUniforms(W).declareVariables(...Z,...re)}
  ${P.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${js(ae,K,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${i!==void 0};${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:b,programUniforms:S}),getShaderSource:z}},Kg=(e,t,r,n,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,p=i.vHiddenSize*d,f=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=f?[i.batchSize,h,u,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,p],$=12,k={x:Math.ceil(i.vHeadSize/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],g=f&&n&&O.size(n.dims)>0,b=["type","type"];g&&b.push("type"),s&&b.push("type"),o&&b.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let C=I=>{let T=B("probs",t.dataType,t.dims),z=B("v",r.dataType,r.dims),P=[T,z];g&&P.push(B("past_value",n.dataType,n.dims));let j=s?B("seq_lens",s.dataType,s.dims):void 0;s&&P.push(j);let G=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&P.push(G);let Z=[J("output",t.dataType,_)];f&&Z.push(J("present_value",t.dataType,y));let ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${T.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${T.type.value}, ${$*$}>;
  ${I.registerUniforms(ae).declareVariables(...P,...Z)}
  ${I.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${js(j,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${g&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:b},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:v}),getShaderSource:C}},Ja=(e,t,r,n,i,a,s,o,u,d,p=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),y=h>1?d.pastSequenceLength:0,_=y+d.kvSequenceLength,$=u&&O.size(u.dims)>0?u:void 0,k=[t,r];h>1&&s&&O.size(s.dims)>0&&k.push(s),$&&k.push($),p&&k.push(p),f&&k.push(f);let v=e.compute(Gg(h,t,r,s,$,d,y,p,f),{inputs:k,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Hg(v,d.batchSize,d.numHeads,y,d.sequenceLength,_,p,f),{inputs:p&&f?[v,p,f]:[v],outputs:[]});let g=[v,n];h>1&&o&&O.size(o.dims)>0&&g.push(o),p&&g.push(p),f&&g.push(f),e.compute(Kg(h,v,n,o,d,y,p,f),{inputs:g,outputs:h>1?[0,2]:[0]})},Qg=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let h=J("output_q",u[0].dataType,r),y=J("output_k",u[0].dataType,r),_=J("output_v",u[0].dataType,r),$=B("input",u[0].dataType,u[0].dims),k=B("weight",u[1].dataType,u[1].dims),v=B("bias",u[2].dataType,u[2].dims),g=$.type.storage,b=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${g}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${g}, ${s*s}>;
  var<workgroup> tileWeightK: array<${g}, ${s*s}>;
  var<workgroup> tileWeightV: array<${g}, ${s*s}>;
  ${f.registerUniforms(b).declareVariables($,k,v,h,y,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},m$=(e,t)=>{let r=qg(e.inputs,t),[n,i,a]=Qg(e,r);return Ja(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Yg,Zg,Xg,g$,$E=V(()=>{qt(),le(),pe(),Ue(),fe(),Yg=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,a)=>{let s=i.length;if(s!==n.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==n[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Zg=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,s=n?De(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=O.size(a)/s,d=n,p=d?a.length:a,f=B("x",e[0].dataType,e[0].dims,s),h=B("scale",e[1].dataType,e[1].dims,o),y=B("bias",e[2].dataType,e[2].dims,o),_=B("inputMean",e[3].dataType,e[3].dims,o),$=B("inputVar",e[4].dataType,e[4].dims,o),k=J("y",e[0].dataType,p,s),v=()=>{let b="";if(n)b=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")b=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{b=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<h.rank;S++)b+=`cIndices[${S}] = outputIndices[${S}];`;b+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return b},g=b=>`
  const epsilon = ${r};
  ${b.registerUniform("outputSize","u32").declareVariables(f,h,y,_,$,k)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ne(a)]:[{type:12,data:u}]})}},Xg=e=>be(e),g$=(e,t)=>{let{inputs:r,outputCount:n}=e,i=Xg({...t,outputCount:n});if(Ee.webgpu.validateInputContent&&Yg(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Zg(r,i))}}),Jg,ey,y$,bE=V(()=>{pe(),fe(),Jg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ey=e=>{let t=e[0].dims,r=e[0].dims[2],n=O.size(t)/4,i=e[0].dataType,a=B("input",i,t,4),s=B("bias",i,[r],4),o=B("residual",i,t,4),u=J("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},y$=e=>{Jg(e.inputs),e.compute(ey(e.inputs))}}),ty,ve,v$,_$,w$,$$,b$,x$,S$,k$,C$,ry,E$,T$,I$,z$,_a,A$,fo,O$,R$,N$,P$,D$,M$,B$,L$,U$,j$,W$,F$,V$,q$,H$,G$,Wu,K$,Cc,Ec,Q$,Y$,Z$,ny,iy,X$,Xp=V(()=>{le(),pe(),Ue(),fe(),ty=(e,t,r,n,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=B("inputData",r,[o],4),p=J("outputData",n,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},ve=(e,t,r,n,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>ty(d,O.size(e.dims),e.dataType,a,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:u})}},v$=e=>{e.compute(ve(e.inputs[0],"Abs","abs"))},_$=e=>{e.compute(ve(e.inputs[0],"Acos","acos"))},w$=e=>{e.compute(ve(e.inputs[0],"Acosh","acosh"))},$$=e=>{e.compute(ve(e.inputs[0],"Asin","asin"))},b$=e=>{e.compute(ve(e.inputs[0],"Asinh","asinh"))},x$=e=>{e.compute(ve(e.inputs[0],"Atan","atan"))},S$=e=>{e.compute(ve(e.inputs[0],"Atanh","atanh"))},k$=e=>be(e),C$=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ve(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},ry=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return be({min:t,max:r})},E$=(e,t)=>{let r=t||ry(e.inputs),n=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},T$=e=>{e.compute(ve(e.inputs[0],"Ceil","ceil"))},I$=e=>{e.compute(ve(e.inputs[0],"Cos","cos"))},z$=e=>{e.compute(ve(e.inputs[0],"Cosh","cosh"))},_a=e=>be(e),A$=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},fo=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,O$=e=>{let t=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,fo(t)))},R$=e=>{e.compute(ve(e.inputs[0],"Exp","exp"))},N$=e=>{e.compute(ve(e.inputs[0],"Floor","floor"))},P$=e=>{let t=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,fo(t)))},D$=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},M$=e=>{e.compute(ve(e.inputs[0],"Not",t=>`!${t}`))},B$=e=>{e.compute(ve(e.inputs[0],"Neg",t=>`-${t}`))},L$=e=>{e.compute(ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},U$=e=>{let t=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},j$=e=>{e.compute(ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},W$=e=>be(e),F$=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},V$=e=>{e.compute(ve(e.inputs[0],"Sin","sin"))},q$=e=>{e.compute(ve(e.inputs[0],"Sinh","sinh"))},H$=e=>{e.compute(ve(e.inputs[0],"Sqrt","sqrt"))},G$=e=>{e.compute(ve(e.inputs[0],"Tan","tan"))},Wu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,K$=e=>{e.compute(ve(e.inputs[0],"Tanh",Wu))},Cc=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Wu("v")};
}
`,Ec=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Q$=e=>{let t=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"FastGelu",Ec,Cc(t),void 0,e.inputs[0].dataType))},Y$=(e,t)=>{let r=ot(e.inputs[0].dataType);return e.compute(ve(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Z$=e=>{e.compute(ve(e.inputs[0],"Log","log"))},ny=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,iy=e=>`quick_gelu_impl(${e})`,X$=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"QuickGelu",iy,ny(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ay,sy,J$,xE=V(()=>{pe(),fe(),Xp(),ay=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},sy=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),n=B("bias",e[0].dataType,[e[0].dims[2]],4),i=J("output",e[0].dataType,t,4),a=O.size(t)/4,s=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${fo(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},J$=e=>{ay(e.inputs),e.compute(sy(e.inputs))}}),oy,ly,Zt,e2,t2,r2,n2,i2,a2,s2,o2,l2,u2,SE=V(()=>{le(),pe(),fe(),oy=(e,t,r,n,i,a,s,o,u,d,p,f)=>{let h,y;typeof o=="string"?h=y=(g,b)=>`${o}((${g}),(${b}))`:typeof o=="function"?h=y=o:(h=o.scalar,y=o.vector);let _=J("outputData",p,n.length,4),$=B("aData",u,t.length,4),k=B("bData",d,r.length,4),v;if(i)if(a){let g=O.size(t)===1,b=O.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;g||b?v=_.setByOffset("global_idx",y(g?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),b?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||S?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y($.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let g=(b,S,C="")=>{let I=`aData[indexA${S}][componentA${S}]`,T=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${$.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${b}[${S}] = ${C}(${h(I,T)});
          `};p===9?v=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,k,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},ly=(e,t,r,n,i,a,s=r.dataType)=>{let o=r.dims.map($=>Number($)??1),u=n.dims.map($=>Number($)??1),d=!O.areEqual(o,u),p=o,f=O.size(o),h=!1,y=!1,_=[d];if(d){let $=Ni.calcShape(o,u,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),f=O.size(p);let k=O.size(o)===1,v=O.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,b=u.length>0&&u[u.length-1]%4===0;_.push(k),_.push(v),_.push(g),_.push(b);let S=1;for(let C=1;C<p.length;C++){let I=o[o.length-C],T=u[u.length-C];if(I===T)S*=I;else break}S%4===0?(y=!0,h=!0):(k||v||g||b)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>oy($,o,u,p,h,d,y,i,r.dataType,n.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(p)/4)},...ne(o,u,p)]})}},Zt=(e,t,r,n,i,a)=>{e.compute(ly(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},e2=e=>{Zt(e,"Add",(t,r)=>`${t}+${r}`)},t2=e=>{Zt(e,"Div",(t,r)=>`${t}/${r}`)},r2=e=>{Zt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},n2=e=>{Zt(e,"Mul",(t,r)=>`${t}*${r}`)},i2=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Zt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},a2=e=>{Zt(e,"Sub",(t,r)=>`${t}-${r}`)},s2=e=>{Zt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},o2=e=>{Zt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},l2=e=>{Zt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},u2=e=>{Zt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),uy,dy,cy,py,d2,c2,kE=V(()=>{le(),pe(),Ue(),fe(),uy=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},dy=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,cy=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},py=(e,t,r,n)=>{let i=O.size(r),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],p=[{type:12,data:i}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],a[$]=o,d.push(e[$].dims.length),s[$]=B(`input${$}`,n,d[$]),u.push("rank"),p.push({type:12,data:a[$]});for(let $=0;$<e.length;++$)p.push(...ne(e[$].dims));p.push(...ne(r));let f=J("output",n,r.length),h=f.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),_=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)$.registerUniform(`sizeInConcatAxis${k}`,"u32");return $.declareVariables(...s,f)})()}

  ${dy(a.length,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${cy(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:_}},d2=(e,t)=>{let r=e.inputs,n=r[0].dims,i=O.normalizeAxis(t.axis,n.length);uy(r,i);let a=n.slice();a[i]=r.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=r.filter(o=>O.size(o.dims)>0);e.compute(py(s,i,a,r[0].dataType),{inputs:s})},c2=e=>be({axis:e.axis})}),Vn,qn,Hn,Jp,Yn=V(()=>{le(),pe(),Vn=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Hn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Jp=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[Mw,Bw];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Xe,p2,ef=V(()=>{Xe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},p2=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),f2,CE=V(()=>{f2=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Aa,tf,rf=V(()=>{le(),pe(),fe(),Yn(),Aa=(e,t,r,n,i)=>{let a=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${te(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,te(i,o+a,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},tf=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],f=De(d),h=De(p),y=De(u),_=O.size(r)/f/y,$=e.length>2,k=n?n.slice(0,-2):r.slice(0,-2),v=[O.size(k),u,d],g=[{type:12,data:_},{type:12,data:u},{type:12,data:d},{type:12,data:p}];qn(t,g),g.push(...ne(k,s,o)),$&&g.push(...ne(e[2].dims)),g.push(...ne(v));let b=S=>{let C=Qp("batch_dims",e[0].dataType,k.length),I=B("a",e[0].dataType,s.length,h),T=B("b",e[1].dataType,o.length,f),z=J("output",e[0].dataType,v.length,f),P=Ye(z.type.tensor),j=Vn(t,z.type.value,P),G=[I,T],Z="";if($){let de=i?f:1;G.push(B("bias",e[2].dataType,e[2].dims.length,de)),Z=`${i?`value += bias[col / ${de}];`:`value += ${z.type.value}(bias[row + i]);`}`}let ae=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Hn(t,ae);let K=()=>{let de=`var a_data: ${I.type.value};`;for(let re=0;re<h;re++)de+=`
              let b_data${re} = b[(b_offset + (k + ${re}) * uniforms.N + col) / ${f}];`;for(let re=0;re<y;re++){de+=`a_data = a[(a_offset + (row + ${re}) * uniforms.K + k) / ${h}];`;for(let Q=0;Q<h;Q++)de+=`
            values[${re}] = fma(${T.type.value}(a_data${h===1?"":`[${Q}]`}), b_data${Q}, values[${re}]);
`}return de};return`
  ${S.registerUniforms(ae).registerInternalVariables(C).declareVariables(...G,z)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${Aa("a_indices",I,I.rank-2,C.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${T.type.indices};
    ${Aa("b_indices",T,T.rank-2,C.rank,"batch_indices")}
    ${T.indicesSet("b_indices",T.rank-2,0)}
    ${T.indicesSet("b_indices",T.rank-1,0)}
    let b_offset = ${T.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${K()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${Z}
      ${j}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${y};${i}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:g}),getShaderSource:b}}}),fy,hy,Tc,Fu,my,Ic,gy,Go,nf=V(()=>{le(),pe(),fe(),Yn(),rf(),ef(),fy=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,hy=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Tc=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=i?u:a,f=i?a:u,h=p/t[0],y=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${p/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${fy(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${hy(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Fu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,my=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ic=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=i?d:a,h=i?a:d;if(!(h%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=h/t[1],_=f/t[0],$=a/t[1],k=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Fu(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Fu(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${my(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},gy=(e,t,r,n,i=!1)=>{let[a,s,o,u]=n,d=Ye(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Aa("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Aa("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Xe(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Xe(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Go=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),f=O.size(p),h=s[s.length-2],y=s[s.length-1],_=o[o.length-1],$=y%4===0&&_%4===0,k=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],g=[Math.ceil(_/v[0]/k[0]),Math.ceil(h/v[1]/k[1]),Math.ceil(f/v[2]/k[2])],b=$?4:1,S=[...u,h,y/b],C=S.length,I=[...d,y,_/b],T=I.length,z=[f,h,_/b],P=[{type:6,data:h},{type:6,data:_},{type:6,data:y}];qn(t,P),P.push(...ne(p,S,I));let j=["rank","rank"],G=e.length>2;G&&(P.push(...ne(e[2].dims)),j.push("rank")),P.push(...ne(z));let Z=ae=>{let K=p.length,de=Qp("batchDims",e[0].dataType,K,1),re=Ye(e[0].dataType),Q=B("a",e[0].dataType,C,b),W=B("b",e[1].dataType,T,b),L=J("result",e[0].dataType,z.length,b),Y=[Q,W];if(G){let D=i?b:1;Y.push(B("bias",e[2].dataType,e[2].dims.length,D))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Hn(t,N);let U=Ye(L.type.tensor),ie=Vn(t,L.type.value,U),ce=gy(b,G,ie,[de,Q,W,L],i);return`
  ${ae.registerUniforms(N).registerInternalVariables(de).declareVariables(...Y,L)}
  ${ce}
  ${$?Tc(k,v,re,de):Ic(k,v,re,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${$};${i}`,inputDependencies:j},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:P}),getShaderSource:Z}}}),yy,h2,EE=V(()=>{le(),Mr(),fe(),Yn(),ef(),CE(),nf(),yy=(e,t,r,n,i=!1,a,s=4,o=4,u=4,d="f32")=>{let p=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},f=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Xe(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${$}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,b=e?t&&n?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${Xe(s,d)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${Xe(s,d)}(0.0);`,S=e?n&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Xe(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Xe(o,d)}(0.0);`,C=Xe(u,d),I=Xe(e?s:o,d),T=Xe(e?o:s,d),z=Vn(a,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?b:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?S:b}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${p2(i)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},h2=(e,t,r,n,i,a,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],$=d&&(p%4===0||p%3===0)&&_%4===0,k=d?_:h*y,v=d?h*y:_,g=[8,8,1],b=n<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/g[0]/b[0]),Math.ceil(v/g[1]/b[1]),Math.ceil(f/g[2]/b[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let C=$?d&&p%4!==0?3:4:1,I=g[1]*b[1],T=g[0]*b[0],z=Math.max(g[0]*C,g[1]),P=n%I===0,j=i%T===0,G=a%z===0,Z=$?[C,4,4]:[1,1,1],ae=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qn(t,ae),ae.push(...ne(e[0].dims,e[1].dims));let K=["rank","rank"];s&&(ae.push(...ne(e[2].dims)),K.push("rank")),ae.push(...ne(r));let de=re=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Hn(t,Q);let W=$?4:1,L=Ye(e[0].dataType),Y=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${L}>`:L}) {
        result[flatIndex] = ${$?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,N=B("x",e[0].dataType,e[0].dims.length,C===3?1:C),U=B("w",e[1].dataType,e[1].dims.length,W),ie=[N,U],ce=J("result",e[0].dataType,r.length,W);if(s){let D=B("bias",e[2].dataType,e[2].dims.length,W);ie.push(D),Y+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${L}>`:L} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${f2("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${re.registerUniforms(Q).declareVariables(...ie,ce)}
        ${Y}
        ${yy(d,P,j,G,s,t,Z[0],Z[1],Z[2],L)}
        ${$?Tc(b,g,L,void 0,!d,z):Ic(b,g,L,void 0,!d,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${$};${P};${j};${G};${I};${T};${z}`,inputDependencies:K},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:ae}),getShaderSource:de}}}),vy,Vu,sa,_y,qu,wy,m2,g2,TE=V(()=>{le(),Mr(),pe(),fe(),Yn(),ef(),vy=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Vu=e=>typeof e=="number"?[e,e,e]:e,sa=(e,t)=>t<=1?e:e+(e-1)*(t-1),_y=(e,t,r,n=1)=>{let i=sa(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},qu=(e,t,r,n,i)=>{i==null&&(i=_y(e,t[0],n[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/n[s]+1));return a},wy=(e,t,r,n,i,a,s,o,u,d)=>{let p,f,h,y;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=qu([t,r,n,1],[o,u,d],1,[i,a,s],e);f=_[0],h=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every(($,k,v)=>$===v[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=qu([t,r,n,1],[o,u,d],1,[i,a,s],e[0]);f=_[0],h=_[1],y=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),h=Math.ceil(r/a),y=Math.ceil(n/s);let _=(f-1)*i+o-t,$=(h-1)*a+u-r,k=(y-1)*s+d-n,v=Math.floor(_/2),g=_-v,b=Math.floor($/2),S=$-b,C=Math.floor(k/2),I=k-C;p={top:b,bottom:S,left:C,right:I,front:v,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:h,outWidth:y}},m2=(e,t,r,n,i,a=!1,s="channelsLast")=>{let o,u,d,p,f;if(s==="channelsLast")[o,u,d,p,f]=e;else if(s==="channelsFirst")[o,f,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,y,_,$]=t,[k,v,g]=Vu(r),[b,S,C]=Vu(n),I=sa(y,b),T=sa(_,S),z=sa($,C),{padInfo:P,outDepth:j,outHeight:G,outWidth:Z}=wy(i,u,d,p,k,v,g,I,T,z),ae=a?h*f:h,K=[0,0,0,0,0];return s==="channelsFirst"?K=[o,ae,j,G,Z]:s==="channelsLast"&&(K=[o,j,G,Z,ae]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:f,outDepth:j,outHeight:G,outWidth:Z,outChannels:ae,padInfo:P,strideDepth:k,strideHeight:v,strideWidth:g,filterDepth:y,filterHeight:_,filterWidth:$,effectiveFilterDepth:I,effectiveFilterHeight:T,effectiveFilterWidth:z,dilationDepth:b,dilationHeight:S,dilationWidth:C,inShape:e,outShape:K,filterShape:t}},g2=(e,t,r,n,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((k,v)=>v)},d=[Math.ceil(vy(u.x.map(k=>r[k]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=O.size(r),h=[{type:12,data:f},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];qn(t,h),h.push(...ne(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(h.push(...ne(e[2].dims)),y.push("rank")),h.push(...ne(r));let $=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Hn(t,v);let g=1,b=Ye(e[0].dataType),S=B("x",e[0].dataType,e[0].dims.length,p),C=B("W",e[1].dataType,e[1].dims.length,g),I=[S,C],T=J("result",e[0].dataType,r.length,g),z="";if(_){let G=B("bias",e[2].dataType,e[2].dims.length,g);I.push(G),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${b} {
          return bias[${s?te("coords",4,5):te("coords",1,5)}];
        }`}let P=Xe(p,b),j=Vn(t,P,b);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...I,T)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${T.offsetToIndices("global_idx")};
              let batch = ${te("coords",0,S.rank)};
              let d2 = ${s?te("coords",S.rank-1,S.rank):te("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?te("coords",1,S.rank):te("coords",2,S.rank)},
              ${s?te("coords",2,S.rank):te("coords",3,S.rank)},
              ${s?te("coords",3,S.rank):te("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?te("uniforms.x_shape",1,S.rank):te("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?te("uniforms.x_shape",2,S.rank):te("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?te("uniforms.x_shape",3,S.rank):te("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?te("uniforms.x_shape",4,S.rank):te("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${j}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:$}}}),y2,v2,IE=V(()=>{le(),pe(),fe(),Yn(),y2=(e,t,r,n)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],p=d/t.group,f=u&&p>=4?De(d):1,h=O.size(r)/f,y=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];qn(t,y),y.push(...ne(s,[o[0],o[1],o[2],o[3]/f]));let _=i?["rank","rank","rank"]:["rank","rank"];y.push(...ne([r[0],r[1],r[2],r[3]/f]));let $=k=>{let v=J("output",e[0].dataType,r.length,f),g=Ye(v.type.tensor),b=Vn(t,v.type.value,g),S=B("x",e[0].dataType,s.length),C=B("w",e[1].dataType,o.length,f),I=[S,C];i&&I.push(B("b",e[2].dataType,e[2].dims,f));let T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Hn(t,T);let z=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(T).declareVariables(...I,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${z}
    ${a}
    ${b}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:$}},v2=(e,t,r,n)=>{let i=e.length>2,a=De(r[3]),s=De(r[2]),o=O.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qn(t,f),f.push(...ne(u,d,p));let h=(s-1)*t.strides[1]+d[1],y=_=>{let $=J("output",e[0].dataType,p.length,a),k=Ye($.type.tensor),v=Vn(t,$.type.value,k),g=B("x",e[0].dataType,u.length,a),b=B("w",e[1].dataType,d.length,a),S=[g,b];i&&S.push(B("b",e[2].dataType,e[2].dims,a));let C=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Hn(t,I),`
  ${_.registerUniforms(I).declareVariables(...S,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${h}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${b.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:y}}}),$y,Ws,by,Fs,zc,Hu,xy,Sy,Ac,zE=V(()=>{pe(),EE(),TE(),nf(),IE(),Yn(),rf(),gn(),$y=(e,t,r,n,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],p=t.slice(2).map((h,y)=>h+(h-1)*(r[y]-1)),f=o.map((h,y)=>h+n[y]+n[y+u]).map((h,y)=>Math.floor((h-p[y]+i[y])/i[y]));return f.splice(0,0,s),f.splice(a?3:1,0,d),f},Ws=[2,3,1,0],by=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fs=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let n=e.pads.slice();qo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},zc=e=>{let t=Jp(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Hu=(e,t,r,n)=>{let i=r.format==="NHWC",a=$y(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let I=[t[0]];if(i){let T=e.kernelCustomData.wT??e.compute(At(t[1],Ws),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T),I.push(T)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(v2(I,r,a,n),{inputs:I}):e.compute(y2(I,r,a,n),{inputs:I});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],f=t[1].dims[3],h=a[i?1:2],y=a[i?2:3],_=a[i?3:1],$=i&&p===o&&f===u&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=a[0],T,z,P,j=[];if(i){let ae=e.kernelCustomData.wT??e.compute(At(t[1],Ws),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ae),$){let K=o*u*d;T=t[0].reshape([1,I,K]),z=ae.reshape([1,K,_]),P=[1,I,_]}else T=t[0].reshape([I,o*u,d]),z=ae.reshape([1,d,_]),P=[I,h*y,_];j.push(T),j.push(z)}else T=t[0].reshape([I,d,o*u]),z=t[1].reshape([1,_,d]),P=[I,_,h*y],j.push(z),j.push(T);s&&j.push(t[2]);let G=P[2],Z=j[0].dims[j[0].dims.length-1];G<8&&Z<8?e.compute(tf(j,r,a,P,i,n),{inputs:j}):e.compute(Go(j,r,a,P,i,n),{inputs:j});return}let k=!0,v=e.kernelCustomData.wT??e.compute(At(t[1],Ws),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let g=[t[0],v];s&&g.push(t[2]);let b=i?h*y:_,S=i?_:h*y,C=p*f*d;e.compute(h2(g,r,a,b,S,C,s,k,n),{inputs:g})},xy=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Fs({...t,pads:i,strides:a,dilations:s,kernelShape:o},n);Hu(e,n,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Sy=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Fs(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=m2(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(g2(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Ac=(e,t)=>{if(by(e.inputs,t),e.inputs[0].dims.length===3)xy(e,t);else if(e.inputs[0].dims.length===5)Sy(e,e.inputs,t);else{let r=Fs(t,e.inputs);Hu(e,e.inputs,r)}}}),_2,AE=V(()=>{le(),Mr(),pe(),fe(),_2=(e,t,r)=>{let n=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=a?De(u):1,f=a&&d===1&&u>=4,h=f?Math.floor(u/4)*4:Math.floor(u/p)*p,y=u-h,_=a?De(d):1,$=a?d===1?p:_:1,k=O.size(i)/_,v=[Math.ceil(k/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let g=["rank","rank"],b=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],C=[t.dilations[0],t.dilations[1]],I=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],T=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:k},{type:12,data:b},{type:12,data:S},{type:12,data:C},{type:12,data:I},{type:6,data:T},{type:12,data:h},{type:12,data:u},{type:12,data:d},...ne(e[0].dims,e[1].dims)];n&&(z.push(...ne(e[2].dims)),g.push("rank")),z.push(...ne(i));let P=j=>{let G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:b.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Z=Ye(e[0].dataType),ae=a?1:2,K=a?2:3,de=a?3:1,re=B("W",e[1].dataType,e[1].dims.length,$),Q=B("Dy",e[0].dataType,e[0].dims.length,p),W=[Q,re];n&&W.push(B("bias",e[2].dataType,[i[de]].length,_));let L=J("result",e[0].dataType,i.length,_),Y=()=>{let ie="";if(f)p===4?ie+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${re.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?ie+=`
          dotProd = dotProd + dot(vec4<${Z}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${Z}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(ie+=`
          dotProd = dotProd + dot(vec4<${Z}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${Z}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}, ${re.getByOffset("w_offset + 2u")}, ${re.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ie+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,p===1)ie+=`
          let w_offset = ${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${re.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ce=0;ce<p;ce++)ie+=`
            let wValue${ce} = ${re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return ie},N=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let ie="";if(p===1){ie+="dotProd = dotProd";for(let ce=0;ce<y;ce++)ie+=`
            + ${Q.getByOffset(`x_offset + ${ce}`)} * ${re.getByOffset(`w_offset + ${ce}`)}`;ie+=";"}else if(p===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);ie+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${re.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ie},U=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",de)};
            let r = ${L.indicesGet("outputIndices",ae)};
            let c = ${L.indicesGet("outputIndices",K)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Z}(dyRCorner) + ${Z}(wR)) / ${Z}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Z}(uniforms.Dy_shape[${ae}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Z}(dyCCorner) + ${Z}(wC)) / ${Z}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Z}(uniforms.Dy_shape[${K}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${re.indicesToOffset(`${re.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${Y()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${N()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${_}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${j.registerUniforms(G).declareVariables(...W,L)}
      ${j.mainStart()}
      ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${U}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${_}${f}${y}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:P}}}),ky,Cy,Ey,Gu,w2,Ty,Ku,Iy,$2,OE=V(()=>{AE(),Yn(),gn(),ky=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,Cy=(e,t,r,n,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},Ey=(e,t,r,n,i,a,s,o,u,d)=>{let p=e.length-2,f=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let h=e[0],y=t[o?3:1]*i;for(let _=0,$=e.length-p-(o?1:0);_<p;++_,++$){let k=e[$],v=f?k*s[_]:d[_],g=ky(k,s[_],a[_],t[$],r[_],v);Cy(g,n,a,_,_+p),f&&d.push(s[_]*(k-1)+u[_]+(t[$]-1)*r[_]+1-a[_]-a[_+p])}d.splice(0,0,h),d.splice(o?3:1,0,y)},Gu=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Ey(o,r,u,e.autoPad,e.group,i,d,n,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},w2=e=>{let t=Jp(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ty=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ku=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(At(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(_2(a,r,n),{inputs:a})},Iy=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=Gu({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},n);Ku(e,n,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},$2=(e,t)=>{if(Ty(e.inputs,t),e.inputs[0].dims.length===3)Iy(e,t);else{let r=Gu(t,e.inputs);Ku(e,e.inputs,r)}}}),zy,b2,x2,RE=V(()=>{le(),pe(),Ue(),fe(),zy=(e,t,r,n)=>{let i=O.size(t),a=t.length,s=B("input",e,a),o=J("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(u,a),p=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=te("uniforms.input_shape","uniforms.axis",a),_=n.reverse?h+(n.exclusive?" + 1":""):"0",$=n.reverse?y:h+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ne(t,t)]}),getShaderSource:p}},b2=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(zy(n,r,i,t),{inputs:[0]})},x2=e=>{let t=e.exclusive===1,r=e.reverse===1;return be({exclusive:t,reverse:r})}}),Ay,Oy,Ry,S2,k2,NE=V(()=>{le(),pe(),Ue(),fe(),Ay=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Oy=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Ry=(e,t)=>{let r,n,i,a,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([r,n,i,a]=e.dims,s=p?[r,n,i,d,d,a/d**2]:[r,n,i,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,n,i]:[r,a/d**2,d,d,n,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,y=e.dataType,_=B("a",y,h),$=J("output",y,h),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,$)}

  ${Oy(o,h,_,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let g=u?[r,n*d,i*d,a/d**2]:[r,a/d**2,n*d,i*d],b=O.size(g),S=f.dims,C=O.sortBasedOnPerm(S,o);return{outputs:[{dims:g,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ne(S,C)]}},getShaderSource:k}},S2=(e,t)=>{Ay(e.inputs),e.compute(Ry(e.inputs[0],t))},k2=e=>be({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Vs,oa,Qu,Ny,Py,Dy,My,Yu,By,C2,E2,PE=V(()=>{le(),pe(),Ue(),fe(),Vs="[a-zA-Z]|\\.\\.\\.",oa="("+Vs+")+",Qu="^"+oa+"$",Ny="("+oa+",)*"+oa,Py="^"+Ny+"$",Dy=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},My=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Py)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,a)=>{let s=e[a].dims.slice();if(!i.match(RegExp(Qu)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,s,a);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,a])=>a.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(oa)))throw new Error("Invalid RHS");n.match(RegExp(Vs,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(i);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Qu))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Vs,"g")),d=new Dy(n);return u?.forEach((p,f)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,f+y),this.addSymbol(_,r[o++],n)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],n)}),d}},Yu=e=>e+"_max",By=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,p)=>B(`input${p}`,t,d)),a=O.size(n),s=J("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let p=[],f="var prod = 1.0;",h="var sum = 0.0;",y="sum += prod;",_=[],$=[],k=[],v=[],g=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,C)=>{if(r.rhs.symbolToIndices.has(C)){let I=r.rhs.symbolToIndices.get(C)?.[0];I!==void 0&&r.lhs.forEach((T,z)=>{if(S.inputIndices.includes(z)){let P=T.symbolToIndices.get(C);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(j=>{p.push(`${i[z].indicesSet(`input${z}Indices`,j,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,T)=>{if(S.inputIndices.includes(T)){let z=I.symbolToIndices.get(C);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(P=>{_.push(`${i[T].indicesSet(`input${T}Indices`,P,`${C}`)}`)}),v.push(`prod *= ${i[T].getByIndices(`input${T}Indices`)};`)}}),$.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${Yu(C)}; ${C}++) {`),k.push("}")});let b=g?[...p,`let sum = ${i.map((S,C)=>S.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...p,h,...$,..._,f,...v,y,...k];return`
            ${d.registerUniforms(o.map(S=>({name:`${Yu(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,C)=>`var input${C}Indices: ${i[C].type.indices};`).join(`
`)}
            ${b.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:a});let p=e.map((f,h)=>[...ne(f)]).reduce((f,h)=>f.concat(h),d);return p.push(...ne(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},C2=(e,t)=>{let r=new My(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(By(i,e.inputs[0].dataType,r,n))},E2=e=>{let t=e.equation.replace(/\s+/g,"");return be({equation:t})}}),Ly,Zu,Uy,jy,T2,DE=V(()=>{le(),pe(),fe(),Ly=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Zu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Uy=(e,t)=>e.length>t.length?Zu(e,t):Zu(t,e),jy=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Uy(t,r),i=e[0].dataType,a=i===9||O.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(O.size(n)/o),d=f=>{let h=B("input",i,t.length,s),y=J("output",i,n.length,o),_;if(i===9){let $=(k,v,g="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${h.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${g}(${h.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},p=[{type:12,data:u},...ne(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},T2=e=>{Ly(e.inputs),e.compute(jy(e.inputs),{inputs:[0]})}}),Wy,I2,ME=V(()=>{le(),pe(),fe(),Xp(),Wy=e=>{let t=e[0].dataType,r=O.size(e[0].dims),n=O.size(e[1].dims),i=n%4===0,a=s=>{let o=B("x",t,[1],4),u=B("bias",t,[1],4),d=J("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${u.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${Cc(ot(t))}

    ${s.mainStart(Pi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Ec("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Pi/4)}})}},I2=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Q$(e):e.compute(Wy(e.inputs))}}),Fy,Vy,z2,A2,BE=V(()=>{le(),pe(),Ue(),fe(),Fy=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Vy=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=O.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(a,1,...n);let o=r[a],u=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ne(e[0].dims,e[1].dims,s)],f=h=>{let y=B("data",e[0].dataType,e[0].dims.length,u),_=B("inputIndices",e[1].dataType,e[1].dims.length),$=J("output",e[0].dataType,s.length,u),k=g=>{let b=n.length,S=`var indicesIndices${g}  = ${_.type.indices}(0);`;for(let C=0;C<b;C++)S+=`${b>1?`indicesIndices${g}[${C}]`:`indicesIndices${g}`} = ${s.length>1?`outputIndices${g}[uniforms.axis + ${C}]`:`outputIndices${g}`};`;S+=`
          var idx${g} = ${_.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${y.type.indices};
        `;for(let C=0,I=0;C<i;C++)C===a?(S+=`${i>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = u32(idx${g});`,I+=b):(S+=`${i>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = ${s.length>1?`outputIndices${g}[${I}]`:`outputIndices${g}`};`,I++);return S},v;if(e[0].dataType===9){let g=(b,S,C="")=>`
          let outputIndices${S} = ${$.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${b}[${S}] = ${C}(${y.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${y.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,$)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},z2=e=>be({axis:e.axis}),A2=(e,t)=>{let r=e.inputs;Fy(r),e.compute(Vy(e.inputs,t))}}),qy,O2,R2,LE=V(()=>{le(),pe(),fe(),qy=(e,t,r,n,i,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];d.push(...ne(t.dims,p));let f=h=>{let y=B("indices_data",t.dataType,t.dims.length),_=J("input_slice_offsets_data",12,1,1),$=[y,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(k).declareVariables(...$)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},O2=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=O.sizeToDimension(a,a.length-1),u=O.sizeFromDimension(n,t.batchDims+s),d=O.sizeToDimension(n,t.batchDims),p=O.sizeFromDimension(n,t.batchDims),f=o/d,h=new Array(s),y=u;for(let S=0;S<s;++S)h[s-1-S]=y,y*=n[t.batchDims+s-1-S];let _=qy(e,r[1],h,t.batchDims,n,o,f,p,s),$=t.batchDims+s;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=a.slice(0,-1).concat(n.slice($)),v=O.size(k),g=[{type:12,data:v},{type:12,data:u},...ne(r[0].dims,_.dims,k)],b=S=>{let C=B("data",r[0].dataType,r[0].dims.length),I=B("slice_offsets",12,_.dims.length),T=J("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,I,T)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:i}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:g}),getShaderSource:b},{inputs:[r[0],_]})},R2=e=>({batchDims:e.batch_dims,cacheKey:""})}),Hy,Gy,N2,P2,UE=V(()=>{le(),pe(),Ue(),fe(),Hy=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===r?Math.ceil(o/n)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Gy=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=O.normalizeAxis(t.gatherAxis,i),s=O.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(a,1,...n);let u=O.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ne(...e.map((y,_)=>y.dims),o)],h=y=>{let _=B("data",e[0].dataType,e[0].dims.length),$=B("inputIndices",e[1].dataType,e[1].dims.length),k=B("scales",e[2].dataType,e[2].dims.length),v=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,g=J("output",d,o.length),b=[_,$,k];v&&b.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...b,g)}
        ${y.mainStart()}
        let output_indices = ${g.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${g.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${g.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${g.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${g.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ot(d)}(quantized_data - zero_point) * scale;
        ${g.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:h}},N2=(e,t)=>{let r=e.inputs;Hy(r,t),e.compute(Gy(e.inputs,t))},P2=e=>be({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Ky,Qy,D2,M2,jE=V(()=>{le(),pe(),Ue(),fe(),Ky=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Qy=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,s=e[1].dataType,o=O.normalizeAxis(t.axis,i),u=r[o],d=a.slice(0),p=O.size(d),f=B("input",n,i),h=B("indicesInput",s,a.length),y=J("output",n,d.length),_=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return _.push(...ne(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:_}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,y)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},D2=e=>be({axis:e.axis}),M2=(e,t)=>{let r=e.inputs;Ky(r),e.compute(Qy(e.inputs,t))}}),Yy,Zy,B2,L2,WE=V(()=>{le(),pe(),fe(),Yy=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Zy=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,s]=Dw.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(i/u),f=!0,h=O.size(o),y=[{type:12,data:f?d:h},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...ne(e[2].dims)),_.push("rank")),y.push(...ne(o));let $=v=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let b=t.alpha===1?"":"value *= uniforms.alpha;",S=B("a",e[0].dataType,e[0].dims),C=B("b",e[1].dataType,e[1].dims),I=S.type.value,T=null,z=[S,C];e.length===3&&(T=B("c",e[2].dataType,e[2].dims.length),z.push(T));let P=J("output",e[0].dataType,o.length);z.push(P);let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(j).declareVariables(...z)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${b}
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${I}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let g=B("a",e[0].dataType,e[0].dims),b=B("b",e[1].dataType,e[1].dims),S=null,C=[g,b];e.length===3&&(S=B("c",e[2].dataType,e[2].dims.length),C.push(S));let I=J("output",e[0].dataType,o.length);C.push(I);let T=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let j=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(T).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${g.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${b.type.storage}, ${u}>, ${u}>;
  ${v.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${j}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:y}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:$}},B2=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},L2=(e,t)=>{Yy(e.inputs),e.compute(Zy(e.inputs,t))}}),cr,xr,wn,$n,Xy,Jy,e0,t0,r0,n0,i0,a0,U2,j2,FE=V(()=>{le(),pe(),Ue(),fe(),[cr,xr,wn,$n]=[0,1,2,3],Xy=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Jy=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,e0=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,t0=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,r0=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,n0=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${cr}] = batch;
     indices[${xr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${wn}] = u32(r);
            indices[${$n}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${wn}] = u32(clamp(r, 0, H - 1));
          indices[${$n}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${wn}] = gs_reflect(r, border[1], border[3]);
          indices[${$n}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,i0=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${cr}], indices[${xr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${cr}], indices[${xr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${cr}], indices[${xr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${cr}], indices[${xr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${cr}], indices[${xr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${cr}], indices[${xr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,a0=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=B("grid",e[1].dataType,n.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[cr,xr,wn,$n]=[0,3,1,2]);let s=J("output",e[0].dataType,a.length),o=r.type.value,u=O.size(a),d=[{type:12,data:u},...ne(e[0].dims,n,a)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${Jy}
  ${e0(o)}
  ${t0(t)}
  ${r0(t)}
  ${n0(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${wn}]);
      let W_in = i32(uniforms.x_shape[${$n}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${cr}], indices[${wn}], indices[${$n}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${i0(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=O.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:p}},U2=(e,t)=>{Xy(e.inputs),e.compute(a0(e.inputs,t))},j2=e=>be({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,s0,W2,Xu,o0,wa,F2,V2=V(()=>{le(),pe(),Ue(),Kp(),Zp(),fe(),gn(),pt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,s0=(e,t)=>{let r=e[0],n=pt(e,1),i=pt(e,2),a=pt(e,3),s=pt(e,4),o=pt(e,5),u=pt(e,6),d=pt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,_=0,$=0,k=Math.floor(h/t.numHeads);if(u&&d&&O.size(u.dims)&&O.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=u.dims[2],$=u.dims[2]}else if(u&&O.size(u.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(n&&O.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(a&&O.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let g=_+y,b=0;if(s&&O.size(s.dims)>0){b=8;let T=s.dims;throw T.length===1?T[0]===p?b=1:T[0]===3*p+2&&(b=3):T.length===2&&T[0]===p&&T[1]===g&&(b=5),b===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,C=h;if(i&&O.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(y!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=i.dims[2]}else{if(y!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=i.dims[1]*i.dims[3],S=!0}}let I=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&O.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:g,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:h,vHiddenSize:C,headSize:k,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:I,passPastInKv:S,qkvFormat:v}},W2=e=>be({...e}),Xu=be({perm:[0,2,1,3]}),o0=(e,t,r,n,i,a,s)=>{let o=[n,i,a],u=O.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=f=>{let h=J("qkv_with_bias",t.dataType,o),y=B("qkv",t.dataType,o),_=B("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(y,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},wa=(e,t,r,n,i,a,s,o)=>{let u=a;if(s&&O.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=o0(e,a,s,t,n,r*i,o),u=u.reshape([t,n,r,i]),r===1||n===1?u:e.compute(At(u,Xu.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,n,r,i])),r===1||n===1?u:e.compute(At(u,Xu.perm),{inputs:[u],outputs:[-1]})[0]},F2=(e,t)=>{let r=s0(e.inputs,t),n=e.inputs[0],i=pt(e.inputs,1),a=pt(e.inputs,2),s=pt(e.inputs,3),o=pt(e.inputs,4),u=pt(e.inputs,5),d=pt(e.inputs,6),p=pt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&a&&i.dims.length===4&&a.dims.length===4,h=wa(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(f)return Ja(e,h,i,a,o,void 0,d,p,u,r);if(!i||!a)throw new Error("key and value must be provided");let y=wa(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),_=wa(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Ja(e,h,y,_,o,void 0,d,p,u,r)}}),l0,u0,d0,c0,Oc,q2,H2,G2=V(()=>{le(),pe(),Ue(),fe(),l0=e=>{if(!e||e.length<1)throw new Error("too few inputs")},u0=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),be({numOutputs:n,axis:t.axis,splitSizes:r})},d0=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,c0=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Oc=(e,t)=>{let r=e[0].dims,n=O.size(r),i=e[0].dataType,a=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",i,r.length),u=new Array(t.numOutputs),d=[],p=[],f=0,h=[{type:12,data:n}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],u[_]=f;let $=r.slice();$[a]=t.splitSizes[_],p.push($),s[_]=J(`output${_}`,i,$.length),d.push({dims:p[_],dataType:e[0].dataType})}h.push({type:12,data:u},...ne(r,...p));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${d0(u.length)}
  ${c0(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${te("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},q2=(e,t)=>{l0(e.inputs);let r=e.inputs.length===1?t:u0(e.inputs,t);e.compute(Oc(e.inputs,r),{inputs:[0]})},H2=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return be({axis:t,numOutputs:n,splitSizes:r})}}),p0,Ko,K2,Q2=V(()=>{le(),pe(),Ue(),fe(),p0=(e,t)=>{let[r,n,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(n.dims,[])&&!O.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!O.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],p=i.dims[0],f=O.sizeFromDimension(r.dims,1)/d,h=o===0?i.dims[1]*2:f/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Ko=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=O.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],f=i===0?p*2:d/n,h=new Array(s,u,d/f,f-p),y=O.computeStrides(h),_=[{type:1,data:a},{type:12,data:h},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,u*f,1]}):[],...ne(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=k=>{let v=B("input",e[0].dataType,e[0].dims.length),g=B("position_ids",e[1].dataType,e[1].dims.length),b=B("cos_cache",e[2].dataType,e[2].dims.length),S=B("sin_cache",e[3].dataType,e[3].dims.length),C=J("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${k.declareVariables(v,g,b,S,C)}

        ${k.mainStart(Pi)}
          let half_rotary_emb_dim = uniforms.${b.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",J("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:be({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(h)/Pi)},programUniforms:_})}},K2=(e,t)=>{p0(e.inputs,t),e.compute(Ko(e.inputs,t))}}),f0,h0,Ju,m0,Y2,VE=V(()=>{Ue(),le(),Zp(),V2(),G2(),gn(),Q2(),fe(),f0=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,y=!n||n.dims.length===0,_=Math.floor(y?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);y&&(p=_*t.numHeads);let $=a&&a.dims.length!==0,k=s&&s.dims.length!==0;if($&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if($&&k){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if($||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let g=0,b=!1,S=t.kvNumHeads?_*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],b=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:v}},h0=be({perm:[0,2,1,3]}),Ju=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(At(n,h0.perm),{inputs:[n],outputs:[-1]})[0]),n},m0=(e,t,r,n)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=B("seq_lens",r.dataType,r.dims),h=B("total_seq_lens",n.dataType,n.dims),y=J("pos_ids",i,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(f,h,y)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Y2=(e,t)=>{let r=f0(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=be({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,y,_]=!i&&!a?e.compute(Oc([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,a],$,k;if(t.doRotary){let S=e.compute(m0(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],I=e.inputs[8],T=be({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[h,S,C,I],P=[-1];$=e.compute(Ko(z,T),{inputs:z,outputs:P})[0],z.splice(0,1,y);let j=be({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(Ko(z,j),{inputs:z,outputs:P})[0]}let v=wa(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:h,void 0,0),g=Ju(e,t.doRotary?k:y,r),b=Ju(e,_,r);Ja(e,v,g,b,void 0,void 0,s,o,void 0,r,u,d)}}),ed,g0,y0,Z2,qE=V(()=>{le(),pe(),gn(),fe(),ed=(e,t,r,n,i,a,s,o)=>{let u=De(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,f=i*s,h=64;f===1&&(h=256);let y=[i,s,a/u],_=[i,s,2],$=["rank","type","type"],k=[];k.push(...ne(y,_));let v=g=>{let b=B("x",t.dataType,3,u),S=B("scale",r.dataType,r.dims),C=B("bias",n.dataType,n.dims),I=J("output",1,3,2),T=[b,S,C,I];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${g.declareVariables(...T)}
  ${g.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${b.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${pn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${pn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:v},{inputs:[t,r,n],outputs:[-1]})[0]},g0=(e,t,r)=>{let n=t[0].dims,i=n,a=2,s=n[0],o=n[1],u=O.sizeFromDimension(n,a),d=De(u),p=O.size(i)/d,f=ed(e,t[0],t[1],t[2],s,u,o,r.epsilon),h=[s,o,u/d],y=[s,o],_=["type","none"],$=k=>{let v=B("x",t[0].dataType,h.length,d),g=B("scale_shift",1,y.length,2),b=J("output",t[0].dataType,h.length,d),S=[v,g,b];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${b.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${b.type.value}(scale_shift.x) + ${b.type.value}(scale_shift.y);
      ${b.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ne(h,y,h)]}),getShaderSource:$},{inputs:[t[0],f]})},y0=(e,t,r)=>{let n=t[0].dims,i=n,a=n[0],s=n[n.length-1],o=O.sizeFromDimension(n,1)/s,u=De(s),d=O.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],f=["type","type"],h=!1,y=[0,n.length-1];for(let v=0;v<n.length-2;v++)h=h||n[v+1]!==1,y.push(v+1);h=h&&n[n.length-1]!==1;let _=h?e.compute(At(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(v,g)=>n[y[g]])),$=ed(e,_,t[1],t[2],a,o,s,r.epsilon),k=v=>{let g=Ye(t[0].dataType),b=u===1?"vec2f":`mat${u}x2f`,S=T=>{let z=T===0?"x":"y",P=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${P}(scale.${z}))`;case 2:return`vec2<${g}>(${P}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${g}>(${P}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=B("input",t[0].dataType,t[0].dims,u),I=J("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${b}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:k},{inputs:[t[0],$]})},Z2=(e,t)=>{t.format==="NHWC"?y0(e,e.inputs,t):g0(e,e.inputs,t)}}),v0,_0,X2,HE=V(()=>{le(),pe(),fe(),v0=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},_0=(e,t,r)=>{let n=t.simplified,i=e[0].dims,a=e[1],s=!n&&e[2],o=i,u=O.normalizeAxis(t.axis,i.length),d=O.sizeToDimension(i,u),p=O.sizeFromDimension(i,u),f=O.size(a.dims),h=s?O.size(s.dims):0;if(f!==p||s&&h!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let y=[];for(let C=0;C<i.length;++C)C<u?y.push(i[C]):y.push(1);let _=De(p),$=["type","type"],k=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/_)},{type:1,data:t.epsilon}];s&&$.push("type");let v=r>1,g=r>2,b=C=>{let I=Ye(e[0].dataType),T=[B("x",e[0].dataType,e[0].dims,_),B("scale",a.dataType,a.dims,_)];s&&T.push(B("bias",s.dataType,s.dims,_)),T.push(J("output",e[0].dataType,o,_)),v&&T.push(J("mean_data_output",1,y)),g&&T.push(J("inv_std_output",1,y));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(z).declareVariables(...T)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${xc("f32",_)};
    var mean_square_vector = ${xc("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${mi(I,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${pn("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${pn("mean_square_vector",_)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${mi(I,_,"x[j + offset]")};
      let f32scale = ${mi(I,_,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${mi(I,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return v&&S.push({dims:y,dataType:1}),g&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:b}},X2=(e,t)=>{v0(e.inputs),e.compute(_0(e.inputs,t,e.outputCount))}}),w0,J2,GE=V(()=>{pe(),rf(),nf(),w0=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},J2=e=>{w0(e.inputs);let t=Ni.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(tf(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,n]),u=e.inputs[1].reshape([1,n,r]),d=[1,a,r],p=[o,u];e.compute(Go(p,{activation:""},t,d),{inputs:p})}else e.compute(Go(e.inputs,{activation:""},t))}}}),$0,b0,x0,eb,tb,KE=V(()=>{le(),pe(),Ue(),fe(),$0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(O.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(O.size(u)!==d)throw new Error("zeroPoints input size error.")}},b0=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=O.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=De(t.k),h=De(d),y=De(s),_=o.concat([i,s]),$=i>1&&s/y%2===0?2:1,k=O.size(_)/y/$,v=64,g=[],b=[u,i,a/f],S=O.convertShape(e[1].dims).slice();S.splice(-1,1,d/h),g.push(...ne(b)),g.push(...ne(S)),g.push(...ne(e[2].dims)),e.length===4&&g.push(...ne(O.convertShape(e[3].dims)));let C=[u,i,s/y];g.push(...ne(C));let I=T=>{let z=b.length,P=B("a",e[0].dataType,z,f),j=B("b",12,S.length,h),G=B("scales",e[2].dataType,e[2].dims.length),Z=[P,j,G],ae=e.length===4?B("zero_points",12,e[3].dims.length):void 0;ae&&Z.push(ae);let K=C.length,de=J("output",e[0].dataType,K,y),re=Ye(e[0].dataType),Q=(()=>{switch(f){case 1:return`array<${re}, 8>`;case 2:return`mat4x2<${re}>`;case 4:return`mat2x4<${re}>`;default:throw new Error(`${f}-component is not supported.`)}})(),W=()=>{let N=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Q};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<y*$;U++)N+=`
            b_value = ${h===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Q}(${Array.from({length:4},(ie,ce)=>`${re}(b_value_lower[${ce}]), ${re}(b_value_upper[${ce}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Q}(${Array.from({length:8},(ie,ce)=>`(b_quantized_values[${ce}] - ${ae?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${ae?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(U/y)}]${y>1?`[${U%y}]`:""} += ${Array.from({length:8/f},(ie,ce)=>`${f===1?`a_data[${ce}] * b_dequantized_values[${ce}]`:`dot(a_data[${ce}], b_dequantized_values[${ce}])`}`).join(" + ")};
          `;return N},L=()=>{let N=`
            var col_index = col * ${y};
            ${ae?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${re}(8);`}
            `;for(let U=0;U<y*$;U++)N+=`
            let scale${U} = ${G.getByOffset("col_index * nBlocksPerCol + block")};
            ${ae?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${re}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},Y=()=>{let N=`col_index = col * ${y};`;for(let U=0;U<y*$;U++)N+=`
            let b${U}_data = ${j.getByIndices(`${j.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,N};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${$*v}>;
        ${T.declareVariables(...Z,de)}
        ${T.mainStart([v,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${v}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${L()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${Y()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${W()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${y};${$};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:k},programUniforms:g}),getShaderSource:I}},x0=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=O.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=De(t.k),h=De(d),y=o.concat([i,s]),_=128,$=s%8===0?8:s%4===0?4:1,k=_/$,v=k*h*8,g=v/f,b=v/t.blockSize,S=O.size(y)/$,C=[],I=[u,i,a/f],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/h),C.push(...ne(I)),C.push(...ne(T)),C.push(...ne(e[2].dims)),e.length===4&&C.push(...ne(O.convertShape(e[3].dims)));let z=[u,i,s];C.push(...ne(z));let P=j=>{let G=I.length,Z=B("a",e[0].dataType,G,f),ae=B("b",12,T.length,h),K=B("scales",e[2].dataType,e[2].dims.length),de=[Z,ae,K],re=e.length===4?B("zero_points",12,e[3].dims.length):void 0;re&&de.push(re);let Q=z.length,W=J("output",e[0].dataType,Q),L=Ye(e[0].dataType),Y=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${L}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${L}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${L}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${L}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Z.type.value}, ${g}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${k}>, ${$}>;
        ${j.declareVariables(...de,W)}
        ${j.mainStart([k,$,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${b} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${g};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${g}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Z.getByIndices(`${Z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${b} + local_id.x;
            ${re?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${L}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${L}(8);`}
            let scale = ${K.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ae.getByIndices(`${ae.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${Y()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${L}>(${Array.from({length:4},(N,U)=>`${L}(b_value_lower[${U}]), ${L}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${L}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${k};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x:S},programUniforms:C}),getShaderSource:P}},eb=(e,t)=>{$0(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(x0(e.inputs,t)):e.compute(b0(e.inputs,t))},tb=e=>be(e)}),S0,k0,C0,E0,T0,I0,z0,A0,rb,QE=V(()=>{le(),pe(),fe(),S0=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},k0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${te("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${te("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},C0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${te("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${te("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},E0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${te("uniforms.x_shape",i,t)})) {
                  k = i32(${te("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},T0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${te("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${te("uniforms.x_shape",i,t)})) {
                  k -= i32(${te("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},I0=(e,t,r)=>{switch(r.mode){case 0:return k0(e,t,r.pads.length);case 1:return C0(e,t,r.pads.length);case 2:return E0(e,t,r.pads.length);case 3:return T0(e,t,r.pads.length);default:throw new Error("Invalid mode")}},z0=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=O.size(r),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ne(e[0].dims,r));let o=["rank"],u=d=>{let p=J("output",e[0].dataType,r.length),f=B("x",e[0].dataType,n.length),h=f.type.value,y=I0(p,n.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:a}),getShaderSource:u}},A0=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+i]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},rb=(e,t)=>{S0(e.inputs);let r=A0(e.inputs,t);e.compute(z0(e.inputs,r),{inputs:[0]})}}),la,td,rd,nd,id,O0,R0,ad,sd,nb,ib,od,ab,sb,ld,ob,lb,ub,db,YE=V(()=>{qt(),le(),pe(),fe(),la=e=>{if(Ee.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},td=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();qo.adjustPoolAttributes(r,i,s,o,u,d);let p=qo.computePoolOutputShape(r,i,o,u,s,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[f,n?h:p]},rd=(e,t)=>{let r=t.format==="NHWC",n=O.size(e),i=O.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];h=!!($+k),a.push({type:12,data:y},{type:12,data:_},{type:12,data:$},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=O.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},nd=(e,t,r,n,i,a,s,o,u,d,p,f)=>{let h=i.format==="NHWC",y=t.type.value,_=J("output",t.type.tensor,n);if(i.kernelShape.length<=2){let $="",k="",v="",g=r-(h?2:1);if(p?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let b=r-(h?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${b}] < 0 || xIndices[${b}] >= uniforms.x_shape[${b}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${k}
              ${$}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=i.kernelShape.length,k=i.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${te("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${te("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${te("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${te("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},id=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,O0=e=>`${id(e)};${e.countIncludePad}`,R0=e=>`${id(e)};${e.storageOrder};${e.dilations}`,ad=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),sd=(e,t,r,n)=>{let[i,a]=td(t,n,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,h,y,_]=rd(a,i);p.push(...ne(t.dims,a));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${y};${_}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:p}),getShaderSource:k=>nd(k,s,t.dims.length,a.length,i,u,d,0,f,h,y,_)}},nb=e=>{let t=e.count_include_pad!==0,r=ad(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:O0(n)}},ib=(e,t)=>{la(e.inputs),e.compute(sd("AveragePool",e.inputs[0],!1,t))},od={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ab=e=>{let t=e.format;return{format:t,...od,cacheKey:t}},sb=(e,t)=>{la(e.inputs),e.compute(sd("GlobalAveragePool",e.inputs[0],!0,t))},ld=(e,t,r,n)=>{let[i,a]=td(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=B("x",t.dataType,t.dims.length),d=["rank"],[p,f,h,y,_]=rd(a,i);return p.push(...ne(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:p}),getShaderSource:$=>nd($,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,f,h,y,_)}},ob=(e,t)=>{la(e.inputs),e.compute(ld("MaxPool",e.inputs[0],!1,t))},lb=e=>{let t=e.storage_order,r=e.dilations,n=ad(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:R0(i)}},ub=e=>{let t=e.format;return{format:t,...od,cacheKey:t}},db=(e,t)=>{la(e.inputs),e.compute(ld("GlobalMaxPool",e.inputs[0],!0,t))}}),N0,P0,cb,pb,ZE=V(()=>{le(),pe(),Ue(),fe(),N0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},P0=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,s=e[1].dataType,o=O.size(a),u=n===3||n===2,d=u?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,h=f?u?[Math.ceil(O.size(f.dims)/4)]:f.dims:void 0,y=p.length===0||p.length===1&&p[0]===1,_=y===!1&&p.length===1,$=De(o),k=y&&(!u||$===4),v=k?$:1,g=k&&!u?$:1,b=B("input",u?12:n,d.length,g),S=B("scale",s,p.length),C=f?B("zero_point",u?12:n,h.length):void 0,I=J("output",s,a.length,v),T=[b,S];C&&T.push(C);let z=[d,p];f&&z.push(h);let P=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...ne(...z,a)],j=G=>{let Z=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(Z).declareVariables(...T,I)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${b.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${b.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?y?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:_?u?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":b.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:j,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:P})}},cb=(e,t)=>{N0(e.inputs,t),e.compute(P0(e.inputs,t))},pb=e=>be({axis:e.axis,blockSize:e.blockSize})}),D0,M0,fb,XE=V(()=>{qt(),le(),fe(),D0=(e,t,r)=>{let n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},M0=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),a=[i],s=i,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ne(a)],u=d=>{let p=J("output",n,a.length),f=p.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},fb=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Ee.webgpu.validateInputContent&&D0(t,r,n),e.compute(M0(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),B0,L0,hb,mb,JE=V(()=>{le(),pe(),Ue(),fe(),B0=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${a}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${a}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},L0=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,a=1,s=Math.ceil(O.sizeToDimension(n,n.length-1)/a),o=n[n.length-1],u=O.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ne(e[1].dims,e[2].dims,i)],p=f=>{let h=B("indices",e[1].dataType,e[1].dims.length),y=B("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?Fw("output",e[0].dataType,i.length):J("output",e[0].dataType,i.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,y,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${B0(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},hb=e=>be({reduction:e.reduction}),mb=(e,t)=>{e.compute(L0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),U0,j0,W0,ud,F0,V0,q0,H0,G0,K0,Q0,Y0,dd,Z0,X0,J0,ev,tv,gb,yb,eT=V(()=>{le(),pe(),Ue(),fe(),U0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},j0=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},W0=(e,t,r,n,i,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");U0(n,t),t.axes.length>0&&j0(n,t.axes,d).forEach((p,f)=>n[f]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ud=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,F0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ud("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ud("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",V0=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",q0=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,s)=>{n[a]=i[s],n[s+r]=i[t.length+s]}),n):i},H0=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,s)=>i[a]=r[s])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},G0=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},K0=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${te("uniforms.scales","i",n)};
        var roi_low = ${te("uniforms.roi","i",i)};
        var roi_hi = ${te("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${te("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Q0=(e,t,r,n,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${te("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${te("uniforms.roi","i",a)};
          var roi_hi = ${te("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${te("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Y0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,dd=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Z0=(e,t,r,n,i)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${dd(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},X0=(e,t,r,n,i,a,s,o,u,d)=>{let p=r.length===2,[f,h]=p?[0,1]:[2,3],y=e.type.value,_=$=>{let k=$===f?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[$]},
        ${n[$]}, ${r[$]}, ${a[$]}, ${a[$]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${u};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${y} = originalIdx + ${y}(i);
          if (${k} < 0 || ${k} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${k} = max(0, min(${k}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${k})`)};
          data[i + 1] = ${$===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(h)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},J0=(e,t,r,n,i)=>{let[a,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${dd(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ev=(e,t,r,n,i,a)=>{let s=e.dims,o=q0(a,t.axes,s.length),u=H0(s,n,i,t.axes),d=n.slice();n.length===0&&(d=s.map((g,b)=>g===0?1:u[b]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=G0(s,d,t)));let p=J("output",e.dataType,u.length),f=B("input",e.dataType,s.length),h=O.size(u),y=s.length===u.length&&s.every((g,b)=>g===u[b]),_=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,k=f.type.value,v=g=>`
      ${y?"":`
      ${F0(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Y0(f,s)};
              ${V0(t.nearestMode,r,k)};
              ${Q0(f,p,s,u,d.length,o.length,_)};
              `;case"linear":return`
              ${K0(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Z0(f,p,s,_,$)}`;if(s.length===3||s.length===5)return`${J0(f,p,s,_,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${X0(f,p,s,u,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...ne(s,u)]})}},tv=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},gb=(e,t)=>{let r=[],n=[],i=[],a=tv(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");W0(e.inputs,t,a,r,n,i),e.compute(ev(e.inputs[0],t,a,r,n,i),{inputs:[0]})},yb=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return be({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),rv,nv,vb,tT=V(()=>{le(),pe(),fe(),rv=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},nv=(e,t,r,n)=>{let i=t.simplified,a=e[0].dims,s=O.size(a),o=a,u=s,d=a.slice(-1)[0],p=n?a.slice(0,-1).concat(1):[],f=!i&&e.length>3,h=e.length>4,y=n&&r>1,_=n&&r>2,$=r>3,k=64,v=De(d),g=[{type:12,data:u},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],b=C=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[B("x",e[0].dataType,e[0].dims,v),B("skip",e[1].dataType,e[1].dims,v),B("gamma",e[2].dataType,e[2].dims,v)];f&&T.push(B("beta",e[3].dataType,e[3].dims,v)),h&&T.push(B("bias",e[4].dataType,e[4].dims,v)),T.push(J("output",e[0].dataType,o,v)),y&&T.push(J("mean_output",1,p)),_&&T.push(J("inv_std_output",1,p)),$&&T.push(J("input_skip_bias_sum",e[0].dataType,o,v));let z=Ye(e[0].dataType),P=Ye(1,v);return`

      ${C.registerUniforms(I).declareVariables(...T)}
      var<workgroup> sum_shared : array<${P}, ${k}>;
      var<workgroup> sum_squared_shared : array<${P}, ${k}>;

      ${C.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${mi(z,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${pn("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${pn("square_sum",v)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:p,dataType:1}),r>2&&S.push({dims:p,dataType:1}),r>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${$}`,inputDependencies:e.map((C,I)=>"type")},getShaderSource:b,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:g})}},vb=(e,t)=>{rv(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(nv(e.inputs,t,e.outputCount,!1),{outputs:r})}}),iv,ua,av,cd,sv,ov,_b,wb,rT=V(()=>{le(),pe(),Ue(),fe(),iv=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},ua=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},av=(e,t)=>{if(e.length>1){let r=ua(e,1),n=ua(e,2),i=ua(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),be({starts:r,ends:n,axes:i})}else return t},cd=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},sv=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${te("uniforms.input_shape","i",r.length)};
            let steps_i = ${te("uniforms.steps","i",r.length)};
            let signs_i = ${te("uniforms.signs","i",r.length)};
            let starts_i = ${te("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,ov=(e,t)=>{let r=e[0].dims,n=O.size(r),i=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=ua(e,4);a.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((v,g)=>cd(v,g,r,i,a)),o=t.ends.map((v,g)=>cd(v,g,r,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let v=0;v<r.length;++v)i.includes(v)||(s.splice(v,0,0),o.splice(v,0,r[v]),a.splice(v,0,1));let u=a.map(v=>Math.sign(v));a.forEach((v,g,b)=>{if(v<0){let S=(o[g]-s[g])/v,C=s[g],I=C+S*a[g];s[g]=I,o[g]=C,b[g]=-v}});let d=r.slice(0);i.forEach((v,g)=>{d[v]=Math.ceil((o[v]-s[v])/a[v])});let p={dims:d,dataType:e[0].dataType},f=J("output",e[0].dataType,d.length),h=B("input",e[0].dataType,e[0].dims.length),y=O.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],$=[{type:12,data:y},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ne(e[0].dims,d)],k=v=>`
      ${v.registerUniforms(_).declareVariables(h,f)}
        ${sv(h,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},_b=(e,t)=>{iv(e.inputs,t);let r=av(e.inputs,t);e.compute(ov(e.inputs,r),{inputs:[0]})},wb=e=>{let t=e.starts,r=e.ends,n=e.axes;return be({starts:t,ends:r,axes:n})}}),lv,uv,$b,bb,nT=V(()=>{le(),pe(),Ue(),gn(),fe(),lv=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},uv=(e,t)=>{let r=e.inputs[0],n=r.dims,i=O.size(n),a=n.length,s=O.normalizeAxis(t.axis,a),o=s<n.length-1,u,d=[];o?(d=Array.from({length:a},(T,z)=>z),d[s]=a-1,d[a-1]=s,u=e.compute(At(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,f=p[a-1],h=i/f,y=De(f),_=f/y,$=64;h===1&&($=256);let k=(T,z)=>z===4?`max(max(${T}.x, ${T}.y), max(${T}.z, ${T}.w))`:z===2?`max(${T}.x, ${T}.y)`:z===3?`max(max(${T}.x, ${T}.y), ${T}.z)`:T,v=B("x",u.dataType,u.dims,y),g=J("result",u.dataType,u.dims,y),b=v.type.value,S=Ye(u.dataType)==="f32"?`var threadMax = ${b}(-3.402823e+38f);`:`var threadMax = ${b}(-65504.0h);`,C=T=>`
      var<workgroup> rowMaxShared : ${b};
      var<workgroup> rowSumShared : ${b};
      var<workgroup> threadShared : array<${b}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${b} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${b}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${T.registerUniform("packedCols","i32").declareVariables(v,g)}
      ${T.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${b}(${k("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${b}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${b}(${pn("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${b}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${y};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:C},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(At(I,d),{inputs:[I]})},$b=(e,t)=>{lv(e.inputs),uv(e,t)},bb=e=>be({axis:e.axis})}),pd,dv,cv,pv,xb,iT=V(()=>{le(),pe(),fe(),pd=e=>Array.from(e.getBigInt64Array(),Number),dv=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(pd(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},cv=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},pv=(e,t)=>{let r=e[0].dims,n=t??pd(e[1]),i=cv(r,n),a=O.size(i),s=e[0].dataType,o=B("input",s,r.length),u=J("output",s,i.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ne(e[0].dims,i)]}),getShaderSource:d}},xb=e=>{dv(e.inputs),e.compute(pv(e.inputs),{inputs:[0]})}}),fv,hv,Sb,aT=V(()=>{le(),pe(),fe(),fv=(e,t,r,n,i)=>{let a=J("output_data",i,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),u=B("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,h,y)=>`select(${h}, ${f}, ${y})`;if(!n)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(h,y,_="")=>{let $=`a_data[index_a${y}][component_a${y}]`,k=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${h}[${y}] = ${_}(${p($,k,v)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},hv=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(O.areEqual(t,r)&&O.areEqual(r,n)),s=t,o=O.size(t);if(a){let d=Ni.calcShape(Ni.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=O.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>fv(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ne(n,t,r,s)]})}},Sb=e=>{e.compute(hv(e.inputs))}}),kb,sT=V(()=>{wE(),Zp(),$E(),bE(),xE(),SE(),kE(),zE(),OE(),RE(),NE(),PE(),DE(),ME(),BE(),LE(),UE(),jE(),WE(),FE(),VE(),qE(),HE(),GE(),KE(),V2(),QE(),YE(),ZE(),XE(),JE(),Yp(),eT(),Q2(),tT(),rT(),nT(),G2(),iT(),gn(),Xp(),aT(),kb=new Map([["Abs",[v$]],["Acos",[_$]],["Acosh",[w$]],["Add",[e2]],["ArgMax",[h$,kc]],["ArgMin",[f$,kc]],["Asin",[$$]],["Asinh",[b$]],["Atan",[x$]],["Atanh",[S$]],["Attention",[m$]],["AveragePool",[ib,nb]],["BatchNormalization",[g$]],["BiasAdd",[y$]],["BiasSplitGelu",[J$]],["Cast",[C$,k$]],["Ceil",[T$]],["Clip",[E$]],["Concat",[d2,c2]],["Conv",[Ac,zc]],["ConvTranspose",[$2,w2]],["Cos",[I$]],["Cosh",[z$]],["CumSum",[b2,x2]],["DepthToSpace",[S2,k2]],["DequantizeLinear",[cb,pb]],["Div",[t2]],["Einsum",[C2,E2]],["Elu",[A$,_a]],["Equal",[r2]],["Erf",[O$]],["Exp",[R$]],["Expand",[T2]],["FastGelu",[I2]],["Floor",[N$]],["FusedConv",[Ac,zc]],["Gather",[A2,z2]],["GatherElements",[M2,D2]],["GatherBlockQuantized",[N2,P2]],["GatherND",[O2,R2]],["Gelu",[P$]],["Gemm",[L2,B2]],["GlobalAveragePool",[sb,ab]],["GlobalMaxPool",[db,ub]],["Greater",[s2]],["GreaterOrEqual",[l2]],["GridSample",[U2,j2]],["GroupQueryAttention",[Y2]],["HardSigmoid",[F$,W$]],["InstanceNormalization",[Z2]],["LayerNormalization",[X2]],["LeakyRelu",[D$,_a]],["Less",[o2]],["LessOrEqual",[u2]],["Log",[Z$]],["MatMul",[J2]],["MatMulNBits",[eb,tb]],["MaxPool",[ob,lb]],["Mul",[n2]],["MultiHeadAttention",[F2,W2]],["Neg",[B$]],["Not",[M$]],["Pad",[rb]],["Pow",[i2]],["QuickGelu",[X$,_a]],["Range",[fb]],["Reciprocal",[L$]],["ReduceMin",[l$]],["ReduceMean",[n$]],["ReduceMax",[o$]],["ReduceSum",[d$]],["ReduceProd",[u$]],["ReduceL1",[i$]],["ReduceL2",[a$]],["ReduceLogSum",[p$]],["ReduceLogSumExp",[s$]],["ReduceSumSquare",[c$]],["Relu",[U$]],["Resize",[gb,yb]],["RotaryEmbedding",[K2]],["ScatterND",[mb,hb]],["Sigmoid",[j$]],["Sin",[V$]],["Sinh",[q$]],["Slice",[_b,wb]],["SkipLayerNormalization",[vb]],["Split",[q2,H2]],["Sqrt",[H$]],["Softmax",[$b,bb]],["Sub",[a2]],["Tan",[G$]],["Tanh",[K$]],["ThresholdedRelu",[Y$,_a]],["Tile",[xb]],["Transpose",[qw,Hw]],["Where",[Sb]]])}),Cb,oT=V(()=>{qt(),Mr(),fe(),Cb=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){yr(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),sr(e.programInfo.name)}dispose(){}build(e,t){yr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Vw(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${n.join(`
`)}
${i.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return sr(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let a=t*r*n,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Eb={};Ui(Eb,{WebGpuBackend:()=>Tb});var mv,gv,yv,Tb,lT=V(()=>{qt(),le(),Mr(),Lw(),vE(),sT(),oT(),mv=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{let a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},gv=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${mv(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},yv=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Tb=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=a=>t.features.has(a)&&r.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new yv(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Ww(this),this.programManager=new Cb(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Hp(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;yr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],a=i.kernelId,s=this.kernels.get(a),o=s.kernelType,u=s.kernelName,d=i.programName,p=i.inputTensorViews,f=i.outputTensorViews,h=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let _=Number(h-this.queryTimeBase),$=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(k=>({dims:k.dims,dataType:Er(k.dataType)})),outputsMetadata:f.map(k=>({dims:k.dims,dataType:Er(k.dataType)})),kernelId:a,kernelType:o,kernelName:u,programName:d,startTime:_,endTime:$});else{let k="";p.forEach((g,b)=>{k+=`input[${b}]: [${g.dims}] | ${Er(g.dataType)}, `});let v="";f.forEach((g,b)=>{v+=`output[${b}]: [${g.dims}] | ${Er(g.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${u}|${d}" ${k}${v}start time: ${_} ns, execution time: ${$-_} ns`)}Wo("GPU",`${d}::${h}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),sr()}run(e,t,r,n,i,a){yr(e.name);let s=[];for(let g=0;g<t.length;++g){let b=t[g].data;if(b===0)continue;let S=this.gpuDataManager.get(b);if(!S)throw new Error(`no GPU data for input: ${b}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((g,b)=>b):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],h=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(p[g])||p[g]<-3||p[g]>=a)throw new Error(`Invalid output index: ${p[g]}`);if(p[g]===-3)continue;let b=p[g]===-1,S=p[g]===-2,C=b||S?i(o[g].dataType,o[g].dims):n(p[g],o[g].dataType,o[g].dims);if(f.push(C),C.data===0)continue;let I=this.gpuDataManager.get(C.data);if(!I)throw new Error(`no GPU data for output: ${C.data}`);if(b&&this.temporaryData.push(I),S){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(I)}h.push(I)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return sr(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let g=0,b=[];d.forEach(T=>{let z=typeof T.data=="number"?[T.data]:T.data;if(z.length===0)return;let P=T.type===10?2:4,j,G;T.type===10?(G=z.length>4?16:z.length>2?8:z.length*P,j=z.length>4?16:P*z.length):(G=z.length<=2?z.length*P:16,j=16),g=Math.ceil(g/G)*G,b.push(g);let Z=T.type===10?8:4;g+=z.length>4?Math.ceil(z.length/Z)*j:z.length*P});let S=16;g=Math.ceil(g/S)*S;let C=new ArrayBuffer(g);d.forEach((T,z)=>{let P=b[z],j=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(C,P,j.length).set(j);else if(T.type===12)new Uint32Array(C,P,j.length).set(j);else if(T.type===10)new Uint16Array(C,P,j.length).set(j);else if(T.type===1)new Float32Array(C,P,j.length).set(j);else throw new Error(`Unsupported uniform type: ${Er(T.type)}`)});let I=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,C,0,g),this.gpuDataManager.release(I.id),y={offset:0,size:g,buffer:I.buffer}}let _=this.programManager.normalizeDispatchGroupSize(u),$=_[1]===1&&_[2]===1,k=gv(e,t,$),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(k,v),ge("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let g=0;g<d.length;g++){let b=d[g],S=b.type,C=typeof b.data=="number"?1:b.data.length,[I,T]=v.uniformVariablesInfo[g];if(S!==I||C!==T)throw new Error(`Uniform variable ${g} mismatch: expect type ${I} with size ${T}, got type ${S} with size ${C} in program "${v.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let g={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(v,s,h,_,y),sr(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=kb.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,a=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await bc(this,e,t);return Gp(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ib={};Ui(Ib,{init:()=>zb});var qs,vv,zb,uT=V(()=>{le(),Mr(),pe(),yE(),qs=class Ab{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Ab(this.module,this.dataType,this.data,t)}},vv=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,a=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,a));let s=Number(e.getValue(n*i++,a));this.outputCount=Number(e.getValue(n*i++,a)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(n*i++,a)),p=Number(e.getValue(n*i++,"*")),f=Number(e.getValue(n*i++,a)),h=[];for(let y=0;y<f;y++)h.push(Number(e.getValue(n*i++,a)));o.push(new qs(e,d,p,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,n=t?.outputs??[],i=(s,o,u)=>new qs(this.module,o,this.output(s,u),u),a=(s,o)=>{let u=In(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new qs(this.module,s,d,o)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*n);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+n*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},zb=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(lT(),Xa(Eb)).WebGpuBackend,s=new a;await s.initialize(r,n),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),f)}},async(o,u,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let f=new vv(t,s,Number(u));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new jw(r);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,p)=>a.ensureTensor(s,o,u,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),_v,af,sf,qr,wv,fd,Qo,of,lf,hd,uf,df,cf,Ob=V(()=>{qt(),hE(),mE(),le(),Qn(),Wp(),Pw(),_v=(e,t)=>{Te()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},af=async e=>{_v(e.wasm.numThreads,Vo(e.logLevel))},sf=async(e,t)=>{Te().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(uT(),Xa(Ib)).init;t==="webgpu"&&await n("webgpu",Te(),e,r),t==="webnn"&&await n("webnn",Te(),e)}},qr=new Map,wv=e=>{let t=Te(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&Se("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+n,a))]}finally{t.stackRestore(r)}},fd=(e,t)=>{let r=Te(),n=r.stackSave(),i=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Se("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));i=Number(r.getValue(s+a,"*"));let u=r.HEAP32[i/4];if(u===0)return[o,0];let d=r.HEAPU32[i/4+1],p=[];for(let f=0;f<d;f++){let h=Number(r.getValue(i+8+f*a,"*"));p.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(f+d)*a,"*")))}return[o,u,p]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Qo=e=>{let t=Te(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},of=async(e,t)=>{let r,n,i=Te();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Qo(e);let a=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await Nw(t),t?.externalData&&i.mountExternalData){let S=[];for(let C of t.externalData){let I=typeof C=="string"?C:C.path;S.push(qp(typeof C=="string"?C:C.data).then(T=>{i.mountExternalData(I,T)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let C=S,I=C?.context,T=C?.gpuDevice,z=C?.deviceType,P=C?.powerPreference;I?i.currentContext=I:T?i.currentContext=await i.webnnCreateMLContext(T):i.currentContext=await i.webnnCreateMLContext({deviceType:z,powerPreference:P})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(r,n,s),i.webgpuOnCreateSession?.(a),a===0&&Se("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,h]=wv(a),y=!!t?.enableGraphCapture,_=[],$=[],k=[],v=[],g=[];for(let S=0;S<f;S++){let[C,I,T]=fd(a,S);C===0&&Se("Can't get an input name."),d.push(C);let z=i.UTF8ToString(C);_.push(z),k.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Er(I),shape:T})}for(let S=0;S<h;S++){let[C,I,T]=fd(a,S+f);C===0&&Se("Can't get an output name."),p.push(C);let z=i.UTF8ToString(C);$.push(z),v.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Er(I),shape:T});{if(y&&t?.preferredOutputLocation===void 0){g.push("gpu-buffer");continue}let P=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[z]??"cpu",j=i.webnnIsGraphOutput;if(P==="cpu"&&j&&j(a,z)){g.push("ml-tensor-cpu-output");continue}if(P!=="cpu"&&P!=="cpu-pinned"&&P!=="gpu-buffer"&&P!=="ml-tensor")throw new Error(`Not supported preferred output location: ${P}.`);if(y&&P!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${P}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);g.push(P)}}let b=null;return g.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Se("Can't create IO binding."),b={handle:o,outputPreferredLocations:g,outputPreferredLocationsEncoded:g.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>wc(S))}),qr.set(a,[a,d,p,b,y,!1]),[a,_,$,k,v]}catch(f){throw d.forEach(h=>i._OrtFree(h)),p.forEach(h=>i._OrtFree(h)),o!==0&&i._OrtReleaseBinding(o)!==0&&Se("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Se("Can't release session."),f}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Se("Can't release session options."),u.forEach(f=>i._free(f)),i.unmountExternalData?.()}},lf=e=>{let t=Te(),r=qr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Se("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(n)!==0&&Se("Can't release session."),qr.delete(e)},hd=async(e,t,r,n,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Te(),u=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],h=f,y,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=In(Tn(d),p);{let g=o.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=g(n,a,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=In(Tn(d),p);let g=o.webnnRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=g(n,v,Tn(d),p)}else{let v=e[2];if(Array.isArray(v)){_=u*v.length,y=o._malloc(_),r.push(y);for(let g=0;g<v.length;g++){if(typeof v[g]!="string")throw new TypeError(`tensor data at index ${g} is not a string`);o.setValue(y+g*u,tr(v[g],r),"*")}}else{let g=o.webnnIsGraphInput,b=o.webnnIsGraphOutput;if(d!=="string"&&g&&b){let S=o.UTF8ToString(i);if(g(n,S)||b(n,S)){let C=Tn(d);_=In(C,p),h="ml-tensor";let I=o.webnnCreateTemporaryTensor,T=o.webnnUploadTensor;if(!I||!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await I(n,C,p);T(z,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=z}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let $=o.stackSave(),k=o.stackAlloc(4*p.length);try{p.forEach((g,b)=>o.setValue(k+b*u,g,u===4?"i32":"i64"));let v=o._OrtCreateTensor(Tn(d),y,_,k,p.length,wc(h));v===0&&Se(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(v)}finally{o.stackRestore($)}},uf=async(e,t,r,n,i,a)=>{let s=Te(),o=s.PTR_SIZE,u=qr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],f=u[2],h=u[3],y=u[4],_=u[5],$=t.length,k=n.length,v=0,g=[],b=[],S=[],C=[],I=s.stackSave(),T=s.stackAlloc($*o),z=s.stackAlloc($*o),P=s.stackAlloc(k*o),j=s.stackAlloc(k*o);try{[v,g]=Rw(a),Mn("wasm prepareInputOutputTensor");for(let K=0;K<$;K++)await hd(r[K],b,C,e,p[t[K]],t[K],y);for(let K=0;K<k;K++)await hd(i[K],S,C,e,f[n[K]],$+n[K],y);Bn("wasm prepareInputOutputTensor");for(let K=0;K<$;K++)s.setValue(T+K*o,b[K],"*"),s.setValue(z+K*o,p[t[K]],"*");for(let K=0;K<k;K++)s.setValue(P+K*o,S[K],"*"),s.setValue(j+K*o,f[n[K]],"*");if(h&&!_){let{handle:K,outputPreferredLocations:de,outputPreferredLocationsEncoded:re}=h;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);Mn("wasm bindInputsOutputs");for(let Q=0;Q<$;Q++){let W=t[Q];await s._OrtBindInput(K,p[W],b[Q])!==0&&Se(`Can't bind input[${Q}] for session=${e}.`)}for(let Q=0;Q<k;Q++){let W=n[Q];i[Q]?.[3]?s._OrtBindOutput(K,f[W],S[Q],0)!==0&&Se(`Can't bind pre-allocated output[${Q}] for session=${e}.`):s._OrtBindOutput(K,f[W],0,re[W])!==0&&Se(`Can't bind output[${Q}] to ${de[Q]} for session=${e}.`)}Bn("wasm bindInputsOutputs"),qr.set(e,[d,p,f,h,y,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let G;h?G=await s._OrtRunWithBinding(d,h.handle,k,P,v):G=await s._OrtRun(d,z,T,$,j,k,P,v),G!==0&&Se("failed to call OrtRun().");let Z=[],ae=[];Mn("wasm ProcessOutputTensor");for(let K=0;K<k;K++){let de=Number(s.getValue(P+K*o,"*"));if(de===S[K]){Z.push(i[K]);continue}let re=s.stackSave(),Q=s.stackAlloc(4*o),W=!1,L,Y=0;try{s._OrtGetTensorData(de,Q,Q+o,Q+2*o,Q+3*o)!==0&&Se(`Can't access output tensor data on index ${K}.`);let N=o===4?"i32":"i64",U=Number(s.getValue(Q,N));Y=s.getValue(Q+o,"*");let ie=s.getValue(Q+o*2,"*"),ce=Number(s.getValue(Q+o*3,N)),D=[];for(let xe=0;xe<ce;xe++)D.push(Number(s.getValue(ie+xe*o,N)));s._OrtFree(ie)!==0&&Se("Can't free memory for tensor dims.");let ue=D.reduce((xe,_e)=>xe*_e,1);L=Er(U);let Ve=h?.outputPreferredLocations[n[K]];if(L==="string"){if(Ve==="gpu-buffer"||Ve==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let _e=0;_e<ue;_e++){let Ie=s.getValue(Y+_e*o,"*"),vr=s.getValue(Y+(_e+1)*o,"*"),yt=_e===ue-1?void 0:vr-Ie;xe.push(s.UTF8ToString(Ie,yt))}Z.push([L,D,xe,"cpu"])}else if(Ve==="gpu-buffer"&&ue>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let _e=xe(Y),Ie=In(U,ue);if(Ie===void 0||!Fp(L))throw new Error(`Unsupported data type: ${L}`);W=!0,Z.push([L,D,{gpuBuffer:_e,download:s.jsepCreateDownloader(_e,Ie,L),dispose:()=>{s._OrtReleaseTensor(de)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(Ve==="ml-tensor"&&ue>0){let xe=s.webnnEnsureTensor,_e=s.webnnIsGraphInputOutputTypeSupported;if(!xe||!_e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(In(U,ue)===void 0||!Vp(L))throw new Error(`Unsupported data type: ${L}`);if(!_e(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let Ie=await xe(e,Y,U,D,!1);W=!0,Z.push([L,D,{mlTensor:Ie,download:s.webnnCreateMLTensorDownloader(Y,L),dispose:()=>{s.webnnReleaseTensorId(Y),s._OrtReleaseTensor(de)}},"ml-tensor"])}else if(Ve==="ml-tensor-cpu-output"&&ue>0){let xe=s.webnnCreateMLTensorDownloader(Y,L)(),_e=Z.length;W=!0,ae.push((async()=>{let Ie=[_e,await xe];return s.webnnReleaseTensorId(Y),s._OrtReleaseTensor(de),Ie})()),Z.push([L,D,[],"cpu"])}else{let xe=_l(L),_e=new xe(ue);new Uint8Array(_e.buffer,_e.byteOffset,_e.byteLength).set(s.HEAPU8.subarray(Y,Y+_e.byteLength)),Z.push([L,D,_e,"cpu"])}}finally{s.stackRestore(re),L==="string"&&Y&&s._free(Y),W||s._OrtReleaseTensor(de)}}h&&!y&&(s._OrtClearBoundOutputs(h.handle)!==0&&Se("Can't clear bound outputs."),qr.set(e,[d,p,f,h,y,!1]));for(let[K,de]of await Promise.all(ae))Z[K][2]=de;return Bn("wasm ProcessOutputTensor"),Z}finally{s.webnnOnRunEnd?.(d),s.stackRestore(I),b.forEach(G=>s._OrtReleaseTensor(G)),S.forEach(G=>s._OrtReleaseTensor(G)),C.forEach(G=>s._free(G)),v!==0&&s._OrtReleaseRunOptions(v),g.forEach(G=>s._free(G))}},df=e=>{let t=Te(),r=qr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&Se("Can't get an profile file name."),t._OrtFree(i)},cf=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Hr,Dt,ei,da,ca,Hs,md,Gs,bn,xn,$v,Rb,Nb,Pb,Db,Mb,Bb,Lb,Ub=V(()=>{qt(),Ob(),Qn(),Up(),Hr=()=>!!Ee.wasm.proxy&&typeof document<"u",ei=!1,da=!1,ca=!1,Gs=new Map,bn=(e,t)=>{let r=Gs.get(e);r?r.push(t):Gs.set(e,[t])},xn=()=>{if(ei||!da||ca||!Dt)throw new Error("worker not ready")},$v=e=>{switch(e.data.type){case"init-wasm":ei=!1,e.data.err?(ca=!0,md[1](e.data.err)):(da=!0,md[0]()),Hs&&(URL.revokeObjectURL(Hs),Hs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Rb=async()=>{if(!da){if(ei)throw new Error("multiple calls to 'initWasm()' detected.");if(ca)throw new Error("previous call to 'initWasm()' failed.");if(ei=!0,Hr())return new Promise((e,t)=>{Dt?.terminate(),Aw().then(([r,n])=>{try{Dt=n,Dt.onerror=a=>t(a),Dt.onmessage=$v,md=[e,t];let i={type:"init-wasm",in:Ee};!i.in.wasm.wasmPaths&&(r||_c)&&(i.in.wasm.wasmPaths={wasm:new URL("/finnish-tech-salary-survey/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href}),Dt.postMessage(i),Hs=r}catch(i){t(i)}},t)});try{await jp(Ee.wasm),await af(Ee),da=!0}catch(e){throw ca=!0,e}finally{ei=!1}}},Nb=async e=>{if(Hr())return xn(),new Promise((t,r)=>{bn("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Ee}};Dt.postMessage(n)});await sf(Ee,e)},Pb=async e=>Hr()?(xn(),new Promise((t,r)=>{bn("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Dt.postMessage(n,[e.buffer])})):Qo(e),Db=async(e,t)=>{if(Hr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xn(),new Promise((r,n)=>{bn("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Dt.postMessage(i,a)})}else return of(e,t)},Mb=async e=>{if(Hr())return xn(),new Promise((t,r)=>{bn("release",[t,r]);let n={type:"release",in:e};Dt.postMessage(n)});lf(e)},Bb=async(e,t,r,n,i,a)=>{if(Hr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return xn(),new Promise((s,o)=>{bn("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:a}};Dt.postMessage(d,cf(u))})}else return uf(e,t,r,n,i,a)},Lb=async e=>{if(Hr())return xn(),new Promise((t,r)=>{bn("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Dt.postMessage(n)});df(e)}}),gd,bv,jb,dT=V(()=>{qt(),Ub(),le(),Lp(),Pw(),gd=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},bv=e=>{switch(e[3]){case"cpu":return new rr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fp(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return rr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Vp(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return rr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},jb=class{async fetchModelAndCopyToWasmMemory(e){return Pb(await qp(e))}async loadModel(e,t){yr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Db(r,t),sr()}async dispose(){return Mb(this.sessionId)}async run(e,t,r){yr();let n=[],i=[];Object.entries(e).forEach(f=>{let h=f[0],y=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);n.push(y),i.push(_)});let a=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],y=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);a.push(y),s.push(_)});let o=n.map((f,h)=>gd(f,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((f,h)=>f?gd(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await Bb(this.sessionId,i,o,s,u,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=a[f]??bv(d[f]);return sr(),p}startProfiling(){}endProfiling(){Lb(this.sessionId)}}}),Wb={};Ui(Wb,{OnnxruntimeWebAssemblyBackend:()=>Nc,initializeFlags:()=>Rc,wasmBackend:()=>Fb});var Rc,Nc,Fb,cT=V(()=>{qt(),Ub(),dT(),Rc=()=>{(typeof Ee.wasm.initTimeout!="number"||Ee.wasm.initTimeout<0)&&(Ee.wasm.initTimeout=0);let e=Ee.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ee.wasm.simd=!1),typeof Ee.wasm.proxy!="boolean"&&(Ee.wasm.proxy=!1),typeof Ee.wasm.trace!="boolean"&&(Ee.wasm.trace=!1),typeof Ee.wasm.numThreads!="number"||!Number.isInteger(Ee.wasm.numThreads)||Ee.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ee.wasm.numThreads=1;else{let t=typeof navigator>"u"?YC("node:os").cpus().length:navigator.hardwareConcurrency;Ee.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Nc=class{async init(e){Rc(),await Rb(),await Nb(e)}async createInferenceSessionHandler(e,t){let r=new jb;return await r.loadModel(e,t),r}},Fb=new Nc});qt();qt();qt();var pT="1.23.2";{let e=(cT(),Xa(Wb)).wasmBackend;hi("webgpu",e,5),hi("webnn",e,5),hi("cpu",e,10),hi("wasm",e,10)}Object.defineProperty(Ee.versions,"web",{value:pT,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yo=["experience_years","office_time_percent","source_language_fi","age_26_30","age_31_35","age_36_40","age_41_45","age_46_50","age_51_55","age_55_plus","age_unknown","gender_male","gender_other","gender_unknown","company_type_en_consulting","company_type_en_enterprise","company_type_en_maintenance","company_type_en_product_company","company_type_en_public_sector","company_type_en_unknown","role_group_data_ml_analytics","role_group_design_ux","role_group_devops_infrastructure","role_group_junior_developer","role_group_lead_developer","role_group_management_leadership","role_group_other","role_group_product_project","role_group_senior_developer","role_group_software_developer_engineer","education_level_master","education_level_other","education_level_phd","education_level_secondary_or_less","education_level_unknown","education_level_vocational","location_category_rest_of_finland"];let Oa=null;async function Vb(){Oa||(Ee.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/",Ee.wasm.numThreads=1,Oa=await Bp.create("/salary_predictor_v1.0.0.onnx",{executionProviders:["wasm"]}))}function fT(e){const t=new Float32Array(Yo.length);t.fill(0);const r={};return r.experience_years=e.experienceYears,r.office_time_percent=e.officeTimePercent,r.source_language_fi=e.sourceLanguage==="fi"?1:0,["26_30","31_35","36_40","41_45","46_50","51_55","55_plus","unknown"].forEach(o=>{r[`age_${o}`]=e.age===o?1:0}),r.gender_male=e.gender==="male"?1:0,r.gender_other=e.gender==="other"?1:0,r.gender_unknown=e.gender==="unknown"?1:0,["consulting","enterprise","maintenance","product_company","public_sector","unknown"].forEach(o=>{r[`company_type_en_${o}`]=e.companyType===o?1:0}),["data_ml_analytics","design_ux","devops_infrastructure","junior_developer","lead_developer","management_leadership","other","product_project","senior_developer","software_developer_engineer"].forEach(o=>{r[`role_group_${o}`]=e.roleGroup===o?1:0}),["master","other","phd","secondary_or_less","unknown","vocational"].forEach(o=>{r[`education_level_${o}`]=e.educationLevel===o?1:0}),r.location_category_rest_of_finland=e.locationCategory==="rest_of_finland"?1:0,Yo.forEach((o,u)=>{t[u]=r[o]??0}),t}async function hT(e){if(Oa||await Vb(),!Oa)throw new Error("Failed to load model");const t=fT(e);console.log("Input data length:",t.length),console.log("Expected features:",Yo.length),console.log("Form data:",e);const r=new rr("float32",t,[1,Yo.length]),i=(await Oa.run({float_input:r})).variable.data[0];return Math.round(i)}const mT=xt.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, sans-serif;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`,gT=xt.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #1a1a2e;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`,yT=xt.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #856404;
  text-align: center;

  a {
    color: #856404;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`,vT=xt.form`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 1rem;
  }
`,yd=xt.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.2rem;
    color: #1a1a2e;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #007bff;
  }
`,Pc=xt.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input[type="number"],
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  input[type="number"]:focus,
  select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  input[type="range"] {
    width: calc(100% - 60px);
    vertical-align: middle;
  }
`,_T=xt.span`
  display: inline-block;
  width: 50px;
  text-align: right;
  font-weight: 500;
  color: #007bff;
`,wT=xt.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,$T=xt.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c00;
`,bT=xt.div`
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-radius: 12px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #2e7d32;
  }
`,xT=xt.p`
  font-size: 3rem;
  font-weight: 700;
  color: #1b5e20;
  margin: 0.5rem 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`,ST=xt.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
`,kT=xt.footer`
  margin-top: 2rem;
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.6;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .disclaimer {
    margin-top: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    font-size: 0.8rem;
    color: #888;
  }

  .section {
    margin-bottom: 0.75rem;
  }
`;function Sn({id:e,label:t,value:r,options:n,onChange:i}){return se.jsxs(Pc,{children:[se.jsx("label",{htmlFor:e,children:t}),se.jsx("select",{id:e,value:r,onChange:a=>i(a.target.value),children:n.map(a=>se.jsx("option",{value:a.value,children:a.label},a.value))})]})}function CT(){const[e,t]=Mt.useState(HC),[r,n]=Mt.useState(null),[i,a]=Mt.useState(!1),[s,o]=Mt.useState(null),[u,d]=Mt.useState(!1);Mt.useEffect(()=>{Vb().then(()=>d(!0)).catch(h=>{const y=h instanceof Error?h.message:String(h);o(`Failed to load model: ${y}`)})},[]);const p=(h,y)=>{t(_=>({..._,[h]:y}))},f=async h=>{h.preventDefault(),a(!0),o(null);try{const y=await hT(e);n(y)}catch(y){o(y instanceof Error?y.message:"Prediction failed: "+String(y))}finally{a(!1)}};return se.jsxs(mT,{children:[se.jsxs(gT,{children:[se.jsx("h1",{children:"🇫🇮 Finnish Tech Salary Predictor"}),se.jsxs("p",{children:["Estimate your monthly salary based on the"," ",se.jsx("a",{href:"https://koodiklinikka.github.io/palkkakysely/2024",target:"_blank",rel:"noopener noreferrer",children:"2024 Koodiklinikka Salary Survey"})," ","data"]})]}),se.jsxs(yT,{children:["⚠️ ",se.jsx("strong",{children:"School Project Disclaimer:"})," This is an educational assignment with no affiliation to"," ",se.jsx("a",{href:"https://koodiklinikka.fi",target:"_blank",rel:"noopener noreferrer",children:"Koodiklinikka"}),". Predictions are estimates and should not be used for salary negotiations."]}),se.jsxs(vT,{onSubmit:f,children:[se.jsxs(yd,{children:[se.jsx("h2",{children:"Experience & Work Style"}),se.jsxs(Pc,{children:[se.jsx("label",{htmlFor:"experienceYears",children:"Years of Experience"}),se.jsx("input",{type:"number",id:"experienceYears",min:"0",max:"50",value:e.experienceYears,onChange:h=>p("experienceYears",parseInt(h.target.value)||0)})]}),se.jsxs(Pc,{children:[se.jsx("label",{htmlFor:"officeTimePercent",children:"Office Time (%)"}),se.jsx("input",{type:"range",id:"officeTimePercent",min:"0",max:"100",value:e.officeTimePercent,onChange:h=>p("officeTimePercent",parseInt(h.target.value))}),se.jsxs(_T,{children:[e.officeTimePercent,"%"]})]}),se.jsx(Sn,{id:"sourceLanguage",label:"Survey Language",value:e.sourceLanguage,options:qC,onChange:h=>p("sourceLanguage",h)})]}),se.jsxs(yd,{children:[se.jsx("h2",{children:"Personal Information"}),se.jsx(Sn,{id:"age",label:"Age Group",value:e.age,options:LC,onChange:h=>p("age",h)}),se.jsx(Sn,{id:"gender",label:"Gender",value:e.gender,options:UC,onChange:h=>p("gender",h)}),se.jsx(Sn,{id:"educationLevel",label:"Education Level",value:e.educationLevel,options:FC,onChange:h=>p("educationLevel",h)})]}),se.jsxs(yd,{children:[se.jsx("h2",{children:"Work Details"}),se.jsx(Sn,{id:"roleGroup",label:"Role",value:e.roleGroup,options:WC,onChange:h=>p("roleGroup",h)}),se.jsx(Sn,{id:"companyType",label:"Company Type",value:e.companyType,options:jC,onChange:h=>p("companyType",h)}),se.jsx(Sn,{id:"locationCategory",label:"Location",value:e.locationCategory,options:VC,onChange:h=>p("locationCategory",h)})]}),se.jsx(wT,{type:"submit",disabled:i||!u,children:i?"Predicting...":u?"Predict Salary":"Loading model..."})]}),s&&se.jsx($T,{children:se.jsxs("p",{children:["❌ ",s]})}),r!==null&&se.jsxs(bT,{children:[se.jsx("h2",{children:"Predicted Monthly Salary"}),se.jsxs(xT,{children:["€",r.toLocaleString("fi-FI")]}),se.jsx(ST,{children:"This prediction is based on the 2024 Koodiklinikka Salary Survey data. Actual salaries may vary significantly based on many factors not captured in this model."})]}),se.jsxs(kT,{children:[se.jsxs("div",{className:"links",children:[se.jsx("a",{href:"https://koodiklinikka.fi",target:"_blank",rel:"noopener noreferrer",children:"🔗 Koodiklinikka"}),se.jsx("a",{href:"https://github.com/elarsaks/finnish-tech-salary-survey",target:"_blank",rel:"noopener noreferrer",children:"📦 GitHub Repository"})]}),se.jsxs("div",{className:"section",children:[se.jsx("strong",{children:"📊 Data Lineage & Methodology:"}),se.jsx("br",{}),se.jsx("a",{href:"https://github.com/elarsaks/finnish-tech-salary-survey/blob/master/data/finnish-tech-salary-survey-2024-data-cleaning.ipynb",target:"_blank",rel:"noopener noreferrer",children:"Data Cleaning Notebook"})," | ",se.jsx("a",{href:"https://github.com/elarsaks/finnish-tech-salary-survey/blob/master/data/finnish-tech-salary-survey-2024-data-analytics.ipynb",target:"_blank",rel:"noopener noreferrer",children:"Model Training Notebook"})]}),se.jsxs("div",{className:"section",children:[se.jsx("strong",{children:"📈 Model Performance:"})," R² = 0.44 | MAE = €834",se.jsx("br",{}),se.jsx("small",{children:"Based on 532 survey responses from Finnish tech professionals"})]})]})]})}function ET(){return se.jsx(CT,{})}const TT=BC`
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light;
    color: #213547;
    background-color: #ffffff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  #root {
    width: 100%;
  }
`;P1(document.getElementById("root")).render(se.jsxs(Mt.StrictMode,{children:[se.jsx(TT,{}),se.jsx(ET,{})]}));
