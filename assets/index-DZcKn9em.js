(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var fc={exports:{}},wo={},hc={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function A0(){if(sp)return ut;sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function _(I,oe,be){this.props=I,this.context=oe,this.refs=E,this.updater=be||S}_.prototype.isReactComponent={},_.prototype.setState=function(I,oe){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,oe,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=_.prototype;function P(I,oe,be){this.props=I,this.context=oe,this.refs=E,this.updater=be||S}var R=P.prototype=new g;R.constructor=P,w(R,_.prototype),R.isPureReactComponent=!0;var L=Array.isArray,q=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function $(I,oe,be){var Z,ce={},xe=null,_e=null;if(oe!=null)for(Z in oe.ref!==void 0&&(_e=oe.ref),oe.key!==void 0&&(xe=""+oe.key),oe)q.call(oe,Z)&&!U.hasOwnProperty(Z)&&(ce[Z]=oe[Z]);var Le=arguments.length-2;if(Le===1)ce.children=be;else if(1<Le){for(var ze=Array(Le),$e=0;$e<Le;$e++)ze[$e]=arguments[$e+2];ce.children=ze}if(I&&I.defaultProps)for(Z in Le=I.defaultProps,Le)ce[Z]===void 0&&(ce[Z]=Le[Z]);return{$$typeof:s,type:I,key:xe,ref:_e,props:ce,_owner:O.current}}function b(I,oe){return{$$typeof:s,type:I.type,key:oe,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var oe={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return oe[be]})}var ue=/\/+/g;function W(I,oe){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):oe.toString(36)}function Q(I,oe,be,Z,ce){var xe=typeof I;(xe==="undefined"||xe==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(xe){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case s:case e:_e=!0}}if(_e)return _e=I,ce=ce(_e),I=Z===""?"."+W(_e,0):Z,L(ce)?(be="",I!=null&&(be=I.replace(ue,"$&/")+"/"),Q(ce,oe,be,"",function($e){return $e})):ce!=null&&(C(ce)&&(ce=b(ce,be+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace(ue,"$&/")+"/")+I)),oe.push(ce)),1;if(_e=0,Z=Z===""?".":Z+":",L(I))for(var Le=0;Le<I.length;Le++){xe=I[Le];var ze=Z+W(xe,Le);_e+=Q(xe,oe,be,ze,ce)}else if(ze=x(I),typeof ze=="function")for(I=ze.call(I),Le=0;!(xe=I.next()).done;)xe=xe.value,ze=Z+W(xe,Le++),_e+=Q(xe,oe,be,ze,ce);else if(xe==="object")throw oe=String(I),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return _e}function ee(I,oe,be){if(I==null)return I;var Z=[],ce=0;return Q(I,Z,"","",function(xe){return oe.call(be,xe,ce++)}),Z}function ie(I){if(I._status===-1){var oe=I._result;oe=oe(),oe.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=oe)}if(I._status===1)return I._result.default;throw I._result}var ae={current:null},B={transition:null},de={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function le(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:ee,forEach:function(I,oe,be){ee(I,function(){oe.apply(this,arguments)},be)},count:function(I){var oe=0;return ee(I,function(){oe++}),oe},toArray:function(I){return ee(I,function(oe){return oe})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ut.Component=_,ut.Fragment=n,ut.Profiler=a,ut.PureComponent=P,ut.StrictMode=r,ut.Suspense=p,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,ut.act=le,ut.cloneElement=function(I,oe,be){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=w({},I.props),ce=I.key,xe=I.ref,_e=I._owner;if(oe!=null){if(oe.ref!==void 0&&(xe=oe.ref,_e=O.current),oe.key!==void 0&&(ce=""+oe.key),I.type&&I.type.defaultProps)var Le=I.type.defaultProps;for(ze in oe)q.call(oe,ze)&&!U.hasOwnProperty(ze)&&(Z[ze]=oe[ze]===void 0&&Le!==void 0?Le[ze]:oe[ze])}var ze=arguments.length-2;if(ze===1)Z.children=be;else if(1<ze){Le=Array(ze);for(var $e=0;$e<ze;$e++)Le[$e]=arguments[$e+2];Z.children=Le}return{$$typeof:s,type:I.type,key:ce,ref:xe,props:Z,_owner:_e}},ut.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ut.createElement=$,ut.createFactory=function(I){var oe=$.bind(null,I);return oe.type=I,oe},ut.createRef=function(){return{current:null}},ut.forwardRef=function(I){return{$$typeof:d,render:I}},ut.isValidElement=C,ut.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ie}},ut.memo=function(I,oe){return{$$typeof:m,type:I,compare:oe===void 0?null:oe}},ut.startTransition=function(I){var oe=B.transition;B.transition={};try{I()}finally{B.transition=oe}},ut.unstable_act=le,ut.useCallback=function(I,oe){return ae.current.useCallback(I,oe)},ut.useContext=function(I){return ae.current.useContext(I)},ut.useDebugValue=function(){},ut.useDeferredValue=function(I){return ae.current.useDeferredValue(I)},ut.useEffect=function(I,oe){return ae.current.useEffect(I,oe)},ut.useId=function(){return ae.current.useId()},ut.useImperativeHandle=function(I,oe,be){return ae.current.useImperativeHandle(I,oe,be)},ut.useInsertionEffect=function(I,oe){return ae.current.useInsertionEffect(I,oe)},ut.useLayoutEffect=function(I,oe){return ae.current.useLayoutEffect(I,oe)},ut.useMemo=function(I,oe){return ae.current.useMemo(I,oe)},ut.useReducer=function(I,oe,be){return ae.current.useReducer(I,oe,be)},ut.useRef=function(I){return ae.current.useRef(I)},ut.useState=function(I){return ae.current.useState(I)},ut.useSyncExternalStore=function(I,oe,be){return ae.current.useSyncExternalStore(I,oe,be)},ut.useTransition=function(){return ae.current.useTransition()},ut.version="18.3.1",ut}var op;function Ad(){return op||(op=1,hc.exports=A0()),hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function C0(){if(ap)return wo;ap=1;var s=Ad(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(y[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var lp;function R0(){return lp||(lp=1,fc.exports=C0()),fc.exports}var F=R0(),ft=Ad(),Wa={},pc={exports:{}},Mn={},mc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function P0(){return up||(up=1,(function(s){function e(B,de){var le=B.length;B.push(de);e:for(;0<le;){var I=le-1>>>1,oe=B[I];if(0<a(oe,de))B[I]=de,B[le]=oe,le=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var de=B[0],le=B.pop();if(le!==de){B[0]=le;e:for(var I=0,oe=B.length,be=oe>>>1;I<be;){var Z=2*(I+1)-1,ce=B[Z],xe=Z+1,_e=B[xe];if(0>a(ce,le))xe<oe&&0>a(_e,ce)?(B[I]=_e,B[xe]=le,I=xe):(B[I]=ce,B[Z]=le,I=Z);else if(xe<oe&&0>a(_e,le))B[I]=_e,B[xe]=le,I=xe;else break e}}return de}function a(B,de){var le=B.sortIndex-de.sortIndex;return le!==0?le:B.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,y=null,x=3,S=!1,w=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=B)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function L(B){if(E=!1,R(B),!w)if(n(p)!==null)w=!0,ie(q);else{var de=n(m);de!==null&&ae(L,de.startTime-B)}}function q(B,de){w=!1,E&&(E=!1,g($),$=-1),S=!0;var le=x;try{for(R(de),y=n(p);y!==null&&(!(y.expirationTime>de)||B&&!H());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var oe=I(y.expirationTime<=de);de=s.unstable_now(),typeof oe=="function"?y.callback=oe:y===n(p)&&r(p),R(de)}else r(p);y=n(p)}if(y!==null)var be=!0;else{var Z=n(m);Z!==null&&ae(L,Z.startTime-de),be=!1}return be}finally{y=null,x=le,S=!1}}var O=!1,U=null,$=-1,b=5,C=-1;function H(){return!(s.unstable_now()-C<b)}function ue(){if(U!==null){var B=s.unstable_now();C=B;var de=!0;try{de=U(!0,B)}finally{de?W():(O=!1,U=null)}}else O=!1}var W;if(typeof P=="function")W=function(){P(ue)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ee=Q.port2;Q.port1.onmessage=ue,W=function(){ee.postMessage(null)}}else W=function(){_(ue,0)};function ie(B){U=B,O||(O=!0,W())}function ae(B,de){$=_(function(){B(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ie(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var le=x;x=de;try{return B()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,de){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=x;x=B;try{return de()}finally{x=le}},s.unstable_scheduleCallback=function(B,de,le){var I=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?I+le:I):le=I,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=le+oe,B={id:v++,callback:de,priorityLevel:B,startTime:le,expirationTime:oe,sortIndex:-1},le>I?(B.sortIndex=le,e(m,B),n(p)===null&&B===n(m)&&(E?(g($),$=-1):E=!0,ae(L,le-I))):(B.sortIndex=oe,e(p,B),w||S||(w=!0,ie(q))),B},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(B){var de=x;return function(){var le=x;x=de;try{return B.apply(this,arguments)}finally{x=le}}}})(gc)),gc}var cp;function b0(){return cp||(cp=1,mc.exports=P0()),mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function L0(){if(dp)return Mn;dp=1;var s=Ad(),e=b0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return p.call(y,t)?!0:p.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,P);_[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,P);_[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,P);_[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,o,l){var c=_.hasOwnProperty(i)?_[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),B=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,I;function oe(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var be=!1;function Z(t,i){if(!t||be)return"";be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var z=`
`+c[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?oe(t):""}function ce(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case $:return"StrictMode";case W:return"Suspense";case Q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case ie:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(t){var i=ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=$e(t))}function k(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=ze(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pt(t,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Le(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function We(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function It(t,i){We(t,i);var o=Le(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?nt(t,i.type,o):i.hasOwnProperty("defaultValue")&&nt(t,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function nt(t,i,o){(i!=="number"||Pt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var N=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Le(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function re(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ve(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(N(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Le(o)}}function Se(t,i){var o=Le(i.value),l=Le(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Re(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ue,rt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ue=Ue||document.createElement("div"),Ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ue.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ct=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){ct.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Fe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var it=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function At(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function Te(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fe=null,he=null,we=null;function Ke(t){if(t=uo(t)){if(typeof fe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=sa(i),fe(t.stateNode,t.type,i))}}function dt(t){he?we?we.push(t):we=[t]:he=t}function Ot(){if(he){var t=he,i=we;if(we=he=null,Ke(t),i)for(t=0;t<i.length;t++)Ke(i[t])}}function Vt(t,i){return t(i)}function mt(){}var Rn=!1;function Pn(t,i,o){if(Rn)return t(i,o);Rn=!0;try{return Vt(t,i,o)}finally{Rn=!1,(he!==null||we!==null)&&(mt(),Ot())}}function Oi(t,i){var o=t.stateNode;if(o===null)return null;var l=sa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Yn=!1;if(d)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Yn=!1}function zo(t,i,o,l,c,h,M,D,z){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ge){this.onError(ge)}}var ki=!1,pi=null,xr=!1,zi=null,Bo={onError:function(t){ki=!0,pi=t}};function Ho(t,i,o,l,c,h,M,D,z){ki=!1,pi=null,zo.apply(Bo,arguments)}function Il(t,i,o,l,c,h,M,D,z){if(Ho.apply(this,arguments),ki){if(ki){var te=pi;ki=!1,pi=null}else throw Error(n(198));xr||(xr=!0,zi=te)}}function mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function A(t){if(mi(t)!==t)throw Error(n(188))}function X(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return A(c),t;if(h===l)return A(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function J(t){return t=X(t),t!==null?ne(t):null}function ne(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ne(t);if(i!==null)return i;t=t.sibling}return null}var j=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Ne=e.unstable_shouldYield,Be=e.unstable_requestPaint,Ce=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,Ze=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,ht=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,bt=e.unstable_IdlePriority,Kt=null,ot=null;function Ge(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Kt,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Bi,_t=Math.log,bn=Math.LN2;function Bi(t){return t>>>=0,t===0?32:31-(_t(t)/bn|0)|0}var Zt=64,Hi=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ln(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=Ct(D):(h&=M,h!==0&&(l=Ct(h)))}else M=o&~c,M!==0?l=Ct(M):h!==0&&(l=Ct(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-St(i),c=1<<o,l|=t[o],i&=~c;return l}function Xs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-St(h),D=1<<M,z=c[M];z===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Xs(D,i)):z<=i&&(t.expiredLanes|=D),h&=~D}}function yr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Go(){var t=Zt;return Zt<<=1,(Zt&4194240)===0&&(Zt=64),t}function qr(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function js(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-St(i),t[i]=o}function Ym(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-St(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Ul(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-St(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Mt=0;function Fd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Od,Fl,kd,zd,Bd,Ol=!1,Wo=[],Vi=null,Gi=null,Wi=null,Ys=new Map,qs=new Map,Xi=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function $m(t,i,o,l,c){switch(i){case"focusin":return Vi=$s(Vi,t,i,o,l,c),!0;case"dragenter":return Gi=$s(Gi,t,i,o,l,c),!0;case"mouseover":return Wi=$s(Wi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,o,l,c)),!0}return!1}function Vd(t){var i=Sr(t.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Vo(o),i!==null){t.blockedOn=i,Bd(t.priority,function(){kd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);G=l,o.target.dispatchEvent(l),G=null}else return i=uo(o),i!==null&&Fl(i),t.blockedOn=o,!1;i.shift()}return!0}function Gd(t,i,o){Xo(t)&&o.delete(i)}function Km(){Ol=!1,Vi!==null&&Xo(Vi)&&(Vi=null),Gi!==null&&Xo(Gi)&&(Gi=null),Wi!==null&&Xo(Wi)&&(Wi=null),Ys.forEach(Gd),qs.forEach(Gd)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Km)))}function Zs(t){function i(c){return Ks(c,t)}if(0<Wo.length){Ks(Wo[0],t);for(var o=1;o<Wo.length;o++){var l=Wo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&Ks(Vi,t),Gi!==null&&Ks(Gi,t),Wi!==null&&Ks(Wi,t),Ys.forEach(i),qs.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)Vd(o),o.blockedOn===null&&Xi.shift()}var $r=L.ReactCurrentBatchConfig,jo=!0;function Zm(t,i,o,l){var c=Mt,h=$r.transition;$r.transition=null;try{Mt=1,kl(t,i,o,l)}finally{Mt=c,$r.transition=h}}function Qm(t,i,o,l){var c=Mt,h=$r.transition;$r.transition=null;try{Mt=4,kl(t,i,o,l)}finally{Mt=c,$r.transition=h}}function kl(t,i,o,l){if(jo){var c=zl(t,i,o,l);if(c===null)nu(t,i,l,Yo,o),Hd(t,l);else if($m(c,t,i,o,l))l.stopPropagation();else if(Hd(t,l),i&4&&-1<qm.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&Od(h),h=zl(t,i,o,l),h===null&&nu(t,i,l,Yo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else nu(t,i,l,null,o)}}var Yo=null;function zl(t,i,o,l){if(Yo=null,t=Te(l),t=Sr(t),t!==null)if(i=mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Yo=t,null}function Wd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ze:return 1;case je:return 4;case ht:case Ut:return 16;case bt:return 536870912;default:return 16}default:return 16}}var ji=null,Bl=null,qo=null;function Xd(){if(qo)return qo;var t,i=Bl,o=i.length,l,c="value"in ji?ji.value:ji.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return qo=c.slice(t,1<l?1-l:void 0)}function $o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function jd(){return!1}function Dn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ko:jd,this.isPropagationStopped=jd,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Dn(Kr),Qs=le({},Kr,{view:0,detail:0}),Jm=Dn(Qs),Vl,Gl,Js,Zo=le({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Vl=t.screenX-Js.screenX,Gl=t.screenY-Js.screenY):Gl=Vl=0,Js=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),Yd=Dn(Zo),eg=le({},Zo,{dataTransfer:0}),tg=Dn(eg),ng=le({},Qs,{relatedTarget:0}),Wl=Dn(ng),ig=le({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Dn(ig),sg=le({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Dn(sg),ag=le({},Kr,{data:0}),qd=Dn(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function Xl(){return dg}var fg=le({},Qs,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Dn(fg),pg=le({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Dn(pg),mg=le({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),gg=Dn(mg),_g=le({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Dn(_g),xg=le({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Dn(xg),Sg=[9,13,27,32],jl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Mg=d&&"TextEvent"in window&&!eo,Kd=d&&(!jl||eo&&8<eo&&11>=eo),Zd=" ",Qd=!1;function Jd(t,i){switch(t){case"keyup":return Sg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Eg(t,i){switch(t){case"compositionend":return ef(i);case"keypress":return i.which!==32?null:(Qd=!0,Zd);case"textInput":return t=i.data,t===Zd&&Qd?null:t;default:return null}}function Tg(t,i){if(Zr)return t==="compositionend"||!jl&&Jd(t,i)?(t=Xd(),qo=Bl=ji=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!wg[t.type]:i==="textarea"}function nf(t,i,o,l){dt(l),i=na(i,"onChange"),0<i.length&&(o=new Hl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Ag(t){Sf(t,0)}function Qo(t){var i=ns(t);if(k(i))return t}function Cg(t,i){if(t==="change")return i}var rf=!1;if(d){var Yl;if(d){var ql="oninput"in document;if(!ql){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),ql=typeof sf.oninput=="function"}Yl=ql}else Yl=!1;rf=Yl&&(!document.documentMode||9<document.documentMode)}function of(){to&&(to.detachEvent("onpropertychange",af),no=to=null)}function af(t){if(t.propertyName==="value"&&Qo(no)){var i=[];nf(i,no,t,Te(t)),Pn(Ag,i)}}function Rg(t,i,o){t==="focusin"?(of(),to=i,no=o,to.attachEvent("onpropertychange",af)):t==="focusout"&&of()}function Pg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(no)}function bg(t,i){if(t==="click")return Qo(i)}function Lg(t,i){if(t==="input"||t==="change")return Qo(i)}function Dg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:Dg;function io(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!qn(t[c],i[c]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,i){var o=lf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lf(o)}}function cf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?cf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function df(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Pt(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ng(t){var i=df(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&cf(o.ownerDocument.documentElement,o)){if(l!==null&&$l(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=uf(o,h);var M=uf(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ig=d&&"documentMode"in document&&11>=document.documentMode,Qr=null,Kl=null,ro=null,Zl=!1;function ff(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||Qr==null||Qr!==Pt(l)||(l=Qr,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=na(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Qr)))}function Jo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Jr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Ql={},hf={};d&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function ea(t){if(Ql[t])return Ql[t];if(!Jr[t])return t;var i=Jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in hf)return Ql[t]=i[o];return t}var pf=ea("animationend"),mf=ea("animationiteration"),gf=ea("animationstart"),_f=ea("transitionend"),vf=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){vf.set(t,i),u(i,[t])}for(var Jl=0;Jl<xf.length;Jl++){var eu=xf[Jl],Ug=eu.toLowerCase(),Fg=eu[0].toUpperCase()+eu.slice(1);Yi(Ug,"on"+Fg)}Yi(pf,"onAnimationEnd"),Yi(mf,"onAnimationIteration"),Yi(gf,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(_f,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function yf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Il(l,i,void 0,t),t.currentTarget=null}function Sf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],z=D.instance,te=D.currentTarget;if(D=D.listener,z!==h&&c.isPropagationStopped())break e;yf(c,D,te),h=z}else for(M=0;M<l.length;M++){if(D=l[M],z=D.instance,te=D.currentTarget,D=D.listener,z!==h&&c.isPropagationStopped())break e;yf(c,D,te),h=z}}}if(xr)throw t=zi,xr=!1,zi=null,t}function Lt(t,i){var o=i[lu];o===void 0&&(o=i[lu]=new Set);var l=t+"__bubble";o.has(l)||(Mf(i,t,2,!1),o.add(l))}function tu(t,i,o){var l=0;i&&(l|=4),Mf(o,t,l,i)}var ta="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ta]){t[ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(Og.has(o)||tu(o,!1,t),tu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ta]||(i[ta]=!0,tu("selectionchange",!1,i))}}function Mf(t,i,o,l){switch(Wd(i)){case 1:var c=Zm;break;case 4:c=Qm;break;default:c=kl}o=c.bind(null,i,o,t),c=void 0,!Yn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function nu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Sr(D),M===null)return;if(z=M.tag,z===5||z===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Pn(function(){var te=h,ge=Te(o),ye=[];e:{var pe=vf.get(t);if(pe!==void 0){var Ie=Hl,ke=t;switch(t){case"keypress":if($o(o)===0)break e;case"keydown":case"keyup":Ie=hg;break;case"focusin":ke="focus",Ie=Wl;break;case"focusout":ke="blur",Ie=Wl;break;case"beforeblur":case"afterblur":Ie=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=gg;break;case pf:case mf:case gf:Ie=rg;break;case _f:Ie=vg;break;case"scroll":Ie=Jm;break;case"wheel":Ie=yg;break;case"copy":case"cut":case"paste":Ie=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=$d}var He=(i&4)!==0,Ht=!He&&t==="scroll",Y=He?pe!==null?pe+"Capture":null:pe;He=[];for(var V=te,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=Oi(V,Y),Ee!=null&&He.push(ao(V,Ee,K)))),Ht)break;V=V.return}0<He.length&&(pe=new Ie(pe,ke,null,o,ge),ye.push({event:pe,listeners:He}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",pe&&o!==G&&(ke=o.relatedTarget||o.fromElement)&&(Sr(ke)||ke[gi]))break e;if((Ie||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(ke=o.relatedTarget||o.toElement,Ie=te,ke=ke?Sr(ke):null,ke!==null&&(Ht=mi(ke),ke!==Ht||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=te),Ie!==ke)){if(He=Yd,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=$d,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Ht=Ie==null?pe:ns(Ie),K=ke==null?pe:ns(ke),pe=new He(Ee,V+"leave",Ie,o,ge),pe.target=Ht,pe.relatedTarget=K,Ee=null,Sr(ge)===te&&(He=new He(Y,V+"enter",ke,o,ge),He.target=K,He.relatedTarget=Ht,Ee=He),Ht=Ee,Ie&&ke)t:{for(He=Ie,Y=ke,V=0,K=He;K;K=es(K))V++;for(K=0,Ee=Y;Ee;Ee=es(Ee))K++;for(;0<V-K;)He=es(He),V--;for(;0<K-V;)Y=es(Y),K--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=es(He),Y=es(Y)}He=null}else He=null;Ie!==null&&Ef(ye,pe,Ie,He,!1),ke!==null&&Ht!==null&&Ef(ye,Ht,ke,He,!0)}}e:{if(pe=te?ns(te):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var Ve=Cg;else if(tf(pe))if(rf)Ve=Lg;else{Ve=Pg;var Ye=Rg}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Ve=bg);if(Ve&&(Ve=Ve(t,te))){nf(ye,Ve,o,ge);break e}Ye&&Ye(t,pe,te),t==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&nt(pe,"number",pe.value)}switch(Ye=te?ns(te):window,t){case"focusin":(tf(Ye)||Ye.contentEditable==="true")&&(Qr=Ye,Kl=te,ro=null);break;case"focusout":ro=Kl=Qr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,ff(ye,o,ge);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":ff(ye,o,ge)}var qe;if(jl)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Zr?Jd(t,o)&&(et="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(et="onCompositionStart");et&&(Kd&&o.locale!=="ko"&&(Zr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Zr&&(qe=Xd()):(ji=ge,Bl="value"in ji?ji.value:ji.textContent,Zr=!0)),Ye=na(te,et),0<Ye.length&&(et=new qd(et,t,null,o,ge),ye.push({event:et,listeners:Ye}),qe?et.data=qe:(qe=ef(o),qe!==null&&(et.data=qe)))),(qe=Mg?Eg(t,o):Tg(t,o))&&(te=na(te,"onBeforeInput"),0<te.length&&(ge=new qd("onBeforeInput","beforeinput",null,o,ge),ye.push({event:ge,listeners:te}),ge.data=qe))}Sf(ye,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function na(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Oi(t,o),h!=null&&l.unshift(ao(t,h,c)),h=Oi(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,z=D.alternate,te=D.stateNode;if(z!==null&&z===l)break;D.tag===5&&te!==null&&(D=te,c?(z=Oi(o,h),z!=null&&M.unshift(ao(o,z,D))):c||(z=Oi(o,h),z!=null&&M.push(ao(o,z,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var kg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function Tf(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(zg,"")}function ia(t,i,o){if(i=Tf(i),Tf(t)!==i&&o)throw Error(n(425))}function ra(){}var iu=null,ru=null;function su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(t){return wf.resolve(null).then(t).catch(Vg)}:ou;function Vg(t){setTimeout(function(){throw t})}function au(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),oi="__reactFiber$"+ts,lo="__reactProps$"+ts,gi="__reactContainer$"+ts,lu="__reactEvents$"+ts,Gg="__reactListeners$"+ts,Wg="__reactHandles$"+ts;function Sr(t){var i=t[oi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[gi]||o[oi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Af(t);t!==null;){if(o=t[oi])return o;t=Af(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[oi]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function sa(t){return t[lo]||null}var uu=[],is=-1;function $i(t){return{current:t}}function Dt(t){0>is||(t.current=uu[is],uu[is]=null,is--)}function Rt(t,i){is++,uu[is]=t.current,t.current=i}var Ki={},on=$i(Ki),_n=$i(!1),Mr=Ki;function rs(t,i){var o=t.type.contextTypes;if(!o)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function vn(t){return t=t.childContextTypes,t!=null}function oa(){Dt(_n),Dt(on)}function Cf(t,i,o){if(on.current!==Ki)throw Error(n(168));Rt(on,i),Rt(_n,o)}function Rf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return le({},o,l)}function aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Mr=on.current,Rt(on,t),Rt(_n,_n.current),!0}function Pf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Rf(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,Dt(_n),Dt(on),Rt(on,t)):Dt(_n),Rt(_n,o)}var _i=null,la=!1,cu=!1;function bf(t){_i===null?_i=[t]:_i.push(t)}function Xg(t){la=!0,bf(t)}function Zi(){if(!cu&&_i!==null){cu=!0;var t=0,i=Mt;try{var o=_i;for(Mt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}_i=null,la=!1}catch(c){throw _i!==null&&(_i=_i.slice(t+1)),j(Ze,Zi),c}finally{Mt=i,cu=!1}}return null}var ss=[],os=0,ua=null,ca=0,kn=[],zn=0,Er=null,vi=1,xi="";function Tr(t,i){ss[os++]=ca,ss[os++]=ua,ua=t,ca=i}function Lf(t,i,o){kn[zn++]=vi,kn[zn++]=xi,kn[zn++]=Er,Er=t;var l=vi;t=xi;var c=32-St(l)-1;l&=~(1<<c),o+=1;var h=32-St(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,vi=1<<32-St(i)+c|o<<c|l,xi=h+t}else vi=1<<h|o<<c|l,xi=t}function du(t){t.return!==null&&(Tr(t,1),Lf(t,1,0))}function fu(t){for(;t===ua;)ua=ss[--os],ss[os]=null,ca=ss[--os],ss[os]=null;for(;t===Er;)Er=kn[--zn],kn[zn]=null,xi=kn[--zn],kn[zn]=null,vi=kn[--zn],kn[zn]=null}var Nn=null,In=null,Ft=!1,$n=null;function Df(t,i){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Nf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,In=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Er!==null?{id:vi,overflow:xi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,In=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(Ft){var i=In;if(i){var o=i;if(!Nf(t,i)){if(hu(t))throw Error(n(418));i=qi(o.nextSibling);var l=Nn;i&&Nf(t,i)?Df(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(hu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function da(t){if(t!==Nn)return!1;if(!Ft)return If(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!su(t.type,t.memoizedProps)),i&&(i=In)){if(hu(t))throw Uf(),Error(n(418));for(;i;)Df(t,i),i=qi(i.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Nn?qi(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=In;t;)t=qi(t.nextSibling)}function as(){In=Nn=null,Ft=!1}function mu(t){$n===null?$n=[t]:$n.push(t)}var jg=L.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function fa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ff(t){var i=t._init;return i(t._payload)}function Of(t){function i(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function c(Y,V){return Y=sr(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,K,Ee){return V===null||V.tag!==6?(V=oc(K,Y.mode,Ee),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function z(Y,V,K,Ee){var Ve=K.type;return Ve===U?ge(Y,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ie&&Ff(Ve)===V.type)?(Ee=c(V,K.props),Ee.ref=co(Y,V,K),Ee.return=Y,Ee):(Ee=Fa(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=co(Y,V,K),Ee.return=Y,Ee)}function te(Y,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=ac(K,Y.mode,Ee),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function ge(Y,V,K,Ee,Ve){return V===null||V.tag!==7?(V=Dr(K,Y.mode,Ee,Ve),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function ye(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=oc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return K=Fa(V.type,V.key,V.props,null,Y.mode,K),K.ref=co(Y,null,V),K.return=Y,K;case O:return V=ac(V,Y.mode,K),V.return=Y,V;case ie:var Ee=V._init;return ye(Y,Ee(V._payload),K)}if(N(V)||de(V))return V=Dr(V,Y.mode,K,null),V.return=Y,V;fa(Y,V)}return null}function pe(Y,V,K,Ee){var Ve=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ve!==null?null:D(Y,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case q:return K.key===Ve?z(Y,V,K,Ee):null;case O:return K.key===Ve?te(Y,V,K,Ee):null;case ie:return Ve=K._init,pe(Y,V,Ve(K._payload),Ee)}if(N(K)||de(K))return Ve!==null?null:ge(Y,V,K,Ee,null);fa(Y,K)}return null}function Ie(Y,V,K,Ee,Ve){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,D(V,Y,""+Ee,Ve);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case q:return Y=Y.get(Ee.key===null?K:Ee.key)||null,z(V,Y,Ee,Ve);case O:return Y=Y.get(Ee.key===null?K:Ee.key)||null,te(V,Y,Ee,Ve);case ie:var Ye=Ee._init;return Ie(Y,V,K,Ye(Ee._payload),Ve)}if(N(Ee)||de(Ee))return Y=Y.get(K)||null,ge(V,Y,Ee,Ve,null);fa(V,Ee)}return null}function ke(Y,V,K,Ee){for(var Ve=null,Ye=null,qe=V,et=V=0,en=null;qe!==null&&et<K.length;et++){qe.index>et?(en=qe,qe=null):en=qe.sibling;var vt=pe(Y,qe,K[et],Ee);if(vt===null){qe===null&&(qe=en);break}t&&qe&&vt.alternate===null&&i(Y,qe),V=h(vt,V,et),Ye===null?Ve=vt:Ye.sibling=vt,Ye=vt,qe=en}if(et===K.length)return o(Y,qe),Ft&&Tr(Y,et),Ve;if(qe===null){for(;et<K.length;et++)qe=ye(Y,K[et],Ee),qe!==null&&(V=h(qe,V,et),Ye===null?Ve=qe:Ye.sibling=qe,Ye=qe);return Ft&&Tr(Y,et),Ve}for(qe=l(Y,qe);et<K.length;et++)en=Ie(qe,Y,et,K[et],Ee),en!==null&&(t&&en.alternate!==null&&qe.delete(en.key===null?et:en.key),V=h(en,V,et),Ye===null?Ve=en:Ye.sibling=en,Ye=en);return t&&qe.forEach(function(or){return i(Y,or)}),Ft&&Tr(Y,et),Ve}function He(Y,V,K,Ee){var Ve=de(K);if(typeof Ve!="function")throw Error(n(150));if(K=Ve.call(K),K==null)throw Error(n(151));for(var Ye=Ve=null,qe=V,et=V=0,en=null,vt=K.next();qe!==null&&!vt.done;et++,vt=K.next()){qe.index>et?(en=qe,qe=null):en=qe.sibling;var or=pe(Y,qe,vt.value,Ee);if(or===null){qe===null&&(qe=en);break}t&&qe&&or.alternate===null&&i(Y,qe),V=h(or,V,et),Ye===null?Ve=or:Ye.sibling=or,Ye=or,qe=en}if(vt.done)return o(Y,qe),Ft&&Tr(Y,et),Ve;if(qe===null){for(;!vt.done;et++,vt=K.next())vt=ye(Y,vt.value,Ee),vt!==null&&(V=h(vt,V,et),Ye===null?Ve=vt:Ye.sibling=vt,Ye=vt);return Ft&&Tr(Y,et),Ve}for(qe=l(Y,qe);!vt.done;et++,vt=K.next())vt=Ie(qe,Y,et,vt.value,Ee),vt!==null&&(t&&vt.alternate!==null&&qe.delete(vt.key===null?et:vt.key),V=h(vt,V,et),Ye===null?Ve=vt:Ye.sibling=vt,Ye=vt);return t&&qe.forEach(function(w0){return i(Y,w0)}),Ft&&Tr(Y,et),Ve}function Ht(Y,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case q:e:{for(var Ve=K.key,Ye=V;Ye!==null;){if(Ye.key===Ve){if(Ve=K.type,Ve===U){if(Ye.tag===7){o(Y,Ye.sibling),V=c(Ye,K.props.children),V.return=Y,Y=V;break e}}else if(Ye.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ie&&Ff(Ve)===Ye.type){o(Y,Ye.sibling),V=c(Ye,K.props),V.ref=co(Y,Ye,K),V.return=Y,Y=V;break e}o(Y,Ye);break}else i(Y,Ye);Ye=Ye.sibling}K.type===U?(V=Dr(K.props.children,Y.mode,Ee,K.key),V.return=Y,Y=V):(Ee=Fa(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=co(Y,V,K),Ee.return=Y,Y=Ee)}return M(Y);case O:e:{for(Ye=K.key;V!==null;){if(V.key===Ye)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(Y,V.sibling),V=c(V,K.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=ac(K,Y.mode,Ee),V.return=Y,Y=V}return M(Y);case ie:return Ye=K._init,Ht(Y,V,Ye(K._payload),Ee)}if(N(K))return ke(Y,V,K,Ee);if(de(K))return He(Y,V,K,Ee);fa(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(Y,V.sibling),V=c(V,K),V.return=Y,Y=V):(o(Y,V),V=oc(K,Y.mode,Ee),V.return=Y,Y=V),M(Y)):o(Y,V)}return Ht}var ls=Of(!0),kf=Of(!1),ha=$i(null),pa=null,us=null,gu=null;function _u(){gu=us=pa=null}function vu(t){var i=ha.current;Dt(ha),t._currentValue=i}function xu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function cs(t,i){pa=t,gu=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(xn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:i,next:null},us===null){if(pa===null)throw Error(n(308));us=t,pa.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return i}var wr=null;function yu(t){wr===null?wr=[t]:wr.push(t)}function zf(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,yu(i)):(o.next=c.next,c.next=o),i.interleaved=o,yi(t,l)}function yi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,yi(t,o)}return c=l.interleaved,c===null?(i.next=i,yu(l)):(i.next=c.next,c.next=i),l.interleaved=i,yi(t,o)}function ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ul(t,o)}}function Hf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ga(t,i,o,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var z=D,te=z.next;z.next=null,M===null?h=te:M.next=te,M=z;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==M&&(D===null?ge.firstBaseUpdate=te:D.next=te,ge.lastBaseUpdate=z))}if(h!==null){var ye=c.baseState;M=0,ge=te=z=null,D=h;do{var pe=D.lane,Ie=D.eventTime;if((l&pe)===pe){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,He=D;switch(pe=i,Ie=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){ye=ke.call(Ie,ye,pe);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,pe=typeof ke=="function"?ke.call(Ie,ye,pe):ke,pe==null)break e;ye=le({},ye,pe);break e;case 2:Qi=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,pe=c.effects,pe===null?c.effects=[D]:pe.push(D))}else Ie={eventTime:Ie,lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(te=ge=Ie,z=ye):ge=ge.next=Ie,M|=pe;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;pe=D,D=pe.next,pe.next=null,c.lastBaseUpdate=pe,c.shared.pending=null}}while(!0);if(ge===null&&(z=ye),c.baseState=z,c.firstBaseUpdate=te,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Rr|=M,t.lanes=M,t.memoizedState=ye}}function Vf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},ai=$i(fo),ho=$i(fo),po=$i(fo);function Ar(t){if(t===fo)throw Error(n(174));return t}function Mu(t,i){switch(Rt(po,i),Rt(ho,t),Rt(ai,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Re(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Re(i,t)}Dt(ai),Rt(ai,i)}function ds(){Dt(ai),Dt(ho),Dt(po)}function Gf(t){Ar(po.current);var i=Ar(ai.current),o=Re(i,t.type);i!==o&&(Rt(ho,t),Rt(ai,o))}function Eu(t){ho.current===t&&(Dt(ai),Dt(ho))}var kt=$i(0);function _a(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function wu(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var va=L.ReactCurrentDispatcher,Au=L.ReactCurrentBatchConfig,Cr=0,zt=null,jt=null,Qt=null,xa=!1,mo=!1,go=0,Yg=0;function an(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!qn(t[o],i[o]))return!1;return!0}function Ru(t,i,o,l,c,h){if(Cr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,va.current=t===null||t.memoizedState===null?Zg:Qg,t=o(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Qt=jt=null,i.updateQueue=null,va.current=Jg,t=o(l,c)}while(mo)}if(va.current=Ma,i=jt!==null&&jt.next!==null,Cr=0,Qt=jt=zt=null,xa=!1,i)throw Error(n(300));return t}function Pu(){var t=go!==0;return go=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Hn(){if(jt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Qt===null?zt.memoizedState:Qt.next;if(i!==null)Qt=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function _o(t,i){return typeof i=="function"?i(t):i}function bu(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=jt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,z=null,te=h;do{var ge=te.lane;if((Cr&ge)===ge)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(D=z=ye,M=l):z=z.next=ye,zt.lanes|=ge,Rr|=ge}te=te.next}while(te!==null&&te!==h);z===null?M=l:z.next=D,qn(l,i.memoizedState)||(xn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,zt.lanes|=h,Rr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lu(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);qn(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Wf(){}function Xf(t,i){var o=zt,l=Hn(),c=i(),h=!qn(l.memoizedState,c);if(h&&(l.memoizedState=c,xn=!0),l=l.queue,Du(qf.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,vo(9,Yf.bind(null,o,l,c,i),void 0,null),Jt===null)throw Error(n(349));(Cr&30)!==0||jf(o,i,c)}return c}function jf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Yf(t,i,o,l){i.value=o,i.getSnapshot=l,$f(i)&&Kf(t)}function qf(t,i,o){return o(function(){$f(i)&&Kf(t)})}function $f(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!qn(t,o)}catch{return!0}}function Kf(t){var i=yi(t,1);i!==null&&Jn(i,t,1,-1)}function Zf(t){var i=li();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,zt,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Qf(){return Hn().memoizedState}function ya(t,i,o,l){var c=li();zt.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Sa(t,i,o,l){var c=Hn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var M=jt.memoizedState;if(h=M.destroy,l!==null&&Cu(l,M.deps)){c.memoizedState=vo(i,o,h,l);return}}zt.flags|=t,c.memoizedState=vo(1|i,o,h,l)}function Jf(t,i){return ya(8390656,8,t,i)}function Du(t,i){return Sa(2048,8,t,i)}function eh(t,i){return Sa(4,2,t,i)}function th(t,i){return Sa(4,4,t,i)}function nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ih(t,i,o){return o=o!=null?o.concat([t]):null,Sa(4,4,nh.bind(null,i,t),o)}function Nu(){}function rh(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function sh(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function oh(t,i,o){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=o):(qn(o,i)||(o=Go(),zt.lanes|=o,Rr|=o,t.baseState=!0),i)}function qg(t,i){var o=Mt;Mt=o!==0&&4>o?o:4,t(!0);var l=Au.transition;Au.transition={};try{t(!1),i()}finally{Mt=o,Au.transition=l}}function ah(){return Hn().memoizedState}function $g(t,i,o){var l=ir(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},lh(t))uh(i,o);else if(o=zf(t,i,o,l),o!==null){var c=pn();Jn(o,t,l,c),ch(o,i,l)}}function Kg(t,i,o){var l=ir(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(lh(t))uh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,qn(D,M)){var z=i.interleaved;z===null?(c.next=c,yu(i)):(c.next=z.next,z.next=c),i.interleaved=c;return}}catch{}finally{}o=zf(t,i,c,l),o!==null&&(c=pn(),Jn(o,t,l,c),ch(o,i,l))}}function lh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function uh(t,i){mo=xa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ch(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ul(t,o)}}var Ma={readContext:Bn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},Zg={readContext:Bn,useCallback:function(t,i){return li().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Jf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ya(4194308,4,nh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ya(4194308,4,t,i)},useInsertionEffect:function(t,i){return ya(4,2,t,i)},useMemo:function(t,i){var o=li();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=li();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=$g.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=li();return t={current:t},i.memoizedState=t},useState:Zf,useDebugValue:Nu,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Zf(!1),i=t[0];return t=qg.bind(null,t[1]),li().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,c=li();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Cr&30)!==0||jf(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Jf(qf.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,Yf.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=li(),i=Jt.identifierPrefix;if(Ft){var o=xi,l=vi;o=(l&~(1<<32-St(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Yg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Du,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:bu,useRef:Qf,useState:function(){return bu(_o)},useDebugValue:Nu,useDeferredValue:function(t){var i=Hn();return oh(i,jt.memoizedState,t)},useTransition:function(){var t=bu(_o)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:Xf,useId:ah,unstable_isNewReconciler:!1},Jg={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Du,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:Lu,useRef:Qf,useState:function(){return Lu(_o)},useDebugValue:Nu,useDeferredValue:function(t){var i=Hn();return jt===null?i.memoizedState=t:oh(i,jt.memoizedState,t)},useTransition:function(){var t=Lu(_o)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:Xf,useId:ah,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:le({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ea={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Si(l,c);h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Jn(i,t,c,l),ma(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Si(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Jn(i,t,c,l),ma(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=pn(),l=ir(t),c=Si(o,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(Jn(i,t,l,o),ma(i,t,l))}};function dh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,h):!0}function fh(t,i,o){var l=!1,c=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(c=vn(i)?Mr:on.current,l=i.contextTypes,h=(l=l!=null)?rs(t,c):Ki),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ea,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function hh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ea.enqueueReplaceState(i,i.state,null)}function Uu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Su(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Bn(h):(h=vn(i)?Mr:on.current,c.context=rs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Iu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ea.enqueueReplaceState(c,c.state,null),ga(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ou(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function ph(t,i,o){o=Si(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ba||(ba=!0,Qu=l),Ou(t,i)},o}function mh(t,i,o){o=Si(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Ou(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Ou(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function gh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new e0;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=p0.bind(null,t,i,o),i.then(t,t))}function _h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function vh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Si(-1,1),i.tag=2,Ji(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var t0=L.ReactCurrentOwner,xn=!1;function hn(t,i,o,l){i.child=t===null?kf(i,null,o,l):ls(i,t.child,o,l)}function xh(t,i,o,l,c){o=o.render;var h=i.ref;return cs(i,c),l=Ru(t,i,o,l,h,c),o=Pu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Mi(t,i,c)):(Ft&&o&&du(i),i.flags|=1,hn(t,i,l,c),i.child)}function yh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!sc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Sh(t,i,h,l,c)):(t=Fa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Mi(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Sh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Mi(t,i,c)}return ku(t,i,o,l,c)}function Mh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(ps,Un),Un|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Rt(ps,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Rt(ps,Un),Un|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Rt(ps,Un),Un|=l;return hn(t,i,c,o),i.child}function Eh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ku(t,i,o,l,c){var h=vn(o)?Mr:on.current;return h=rs(i,h),cs(i,c),o=Ru(t,i,o,l,h,c),l=Pu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Mi(t,i,c)):(Ft&&l&&du(i),i.flags|=1,hn(t,i,o,c),i.child)}function Th(t,i,o,l,c){if(vn(o)){var h=!0;aa(i)}else h=!1;if(cs(i,c),i.stateNode===null)wa(t,i),fh(i,o,l),Uu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var z=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Bn(te):(te=vn(o)?Mr:on.current,te=rs(i,te));var ge=o.getDerivedStateFromProps,ye=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||z!==te)&&hh(i,M,l,te),Qi=!1;var pe=i.memoizedState;M.state=pe,ga(i,l,M,c),z=i.memoizedState,D!==l||pe!==z||_n.current||Qi?(typeof ge=="function"&&(Iu(i,o,ge,l),z=i.memoizedState),(D=Qi||dh(i,o,D,l,pe,z,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Bf(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:Kn(i.type,D),M.props=te,ye=i.pendingProps,pe=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=Bn(z):(z=vn(o)?Mr:on.current,z=rs(i,z));var Ie=o.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||pe!==z)&&hh(i,M,l,z),Qi=!1,pe=i.memoizedState,M.state=pe,ga(i,l,M,c);var ke=i.memoizedState;D!==ye||pe!==ke||_n.current||Qi?(typeof Ie=="function"&&(Iu(i,o,Ie,l),ke=i.memoizedState),(te=Qi||dh(i,o,te,l,pe,ke,z)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=z,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return zu(t,i,o,l,h,c)}function zu(t,i,o,l,c,h){Eh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Pf(i,o,!1),Mi(t,i,h);l=i.stateNode,t0.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ls(i,t.child,null,h),i.child=ls(i,null,D,h)):hn(t,i,D,h),i.memoizedState=l.state,c&&Pf(i,o,!0),i.child}function wh(t){var i=t.stateNode;i.pendingContext?Cf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Cf(t,i.context,!1),Mu(t,i.containerInfo)}function Ah(t,i,o,l,c){return as(),mu(c),i.flags|=256,hn(t,i,o,l),i.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ch(t,i,o){var l=i.pendingProps,c=kt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Rt(kt,c&1),t===null)return pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Oa(M,l,0,null),t=Dr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hu(o),i.memoizedState=Bu,t):Vu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return n0(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=sr(c,z),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=sr(D,h):(h=Dr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Hu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Bu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Vu(t,i){return i=Oa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ta(t,i,o,l){return l!==null&&mu(l),ls(i,t.child,null,o),t=Vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n0(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Fu(Error(n(422))),Ta(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Oa({mode:"visible",children:l.children},c,0,null),h=Dr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ls(i,t.child,null,M),i.child.memoizedState=Hu(M),i.memoizedState=Bu,h);if((i.mode&1)===0)return Ta(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Fu(h,l,void 0),Ta(t,i,M,l)}if(D=(M&t.childLanes)!==0,xn||D){if(l=Jt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,yi(t,c),Jn(l,t,c,-1))}return rc(),l=Fu(Error(n(421))),Ta(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=m0.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,In=qi(c.nextSibling),Nn=i,Ft=!0,$n=null,t!==null&&(kn[zn++]=vi,kn[zn++]=xi,kn[zn++]=Er,vi=t.id,xi=t.overflow,Er=i),i=Vu(i,l.children),i.flags|=4096,i)}function Rh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xu(t.return,i,o)}function Gu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Ph(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(hn(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rh(t,o,i);else if(t.tag===19)Rh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Rt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&_a(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Gu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&_a(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Gu(i,!0,o,null,h);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function wa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Mi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=sr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=sr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function i0(t,i,o){switch(i.tag){case 3:wh(i),as();break;case 5:Gf(i);break;case 1:vn(i.type)&&aa(i);break;case 4:Mu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Rt(ha,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Rt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ch(t,i,o):(Rt(kt,kt.current&1),t=Mi(t,i,o),t!==null?t.sibling:null);Rt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Ph(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Rt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Mh(t,i,o)}return Mi(t,i,o)}var bh,Wu,Lh,Dh;bh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},Lh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Ar(ai.current);var h=null;switch(o){case"input":c=pt(t,c),l=pt(t,l),h=[];break;case"select":c=le({},c,{value:void 0}),l=le({},l,{value:void 0}),h=[];break;case"textarea":c=re(t,c),l=re(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ra)}st(o,l);var M;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var D=c[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var z=l[te];if(D=c?.[te],l.hasOwnProperty(te)&&z!==D&&(z!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&D[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(h||(h=[]),h.push(te,o)),o=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(h=h||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&Lt("scroll",t),h||D===z||(h=[])):(h=h||[]).push(te,z))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},Dh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function r0(t,i,o){var l=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return vn(i.type)&&oa(),ln(i),null;case 3:return l=i.stateNode,ds(),Dt(_n),Dt(on),wu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$n!==null&&(tc($n),$n=null))),Wu(t,i),ln(i),null;case 5:Eu(i);var c=Ar(po.current);if(o=i.type,t!==null&&i.stateNode!=null)Lh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Ar(ai.current),da(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[oi]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Lt(so[c],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":xt(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":ve(l,h),Lt("invalid",l)}st(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ia(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ia(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Lt("scroll",l)}switch(o){case"input":wt(l),tt(l,h,!0);break;case"textarea":wt(l),me(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ra)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[oi]=i,t[lo]=l,bh(t,i,!1,!1),i.stateNode=t;e:{switch(M=At(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),c=l;break;case"iframe":case"object":case"embed":Lt("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Lt(so[c],t);c=l;break;case"source":Lt("error",t),c=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),c=l;break;case"details":Lt("toggle",t),c=l;break;case"input":xt(t,l),c=pt(t,l),Lt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=le({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":ve(t,l),c=re(t,l),Lt("invalid",t);break;default:c=l}st(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var z=D[h];h==="style"?Fe(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&rt(t,z)):h==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Me(t,z):typeof z=="number"&&Me(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Lt("scroll",t):z!=null&&R(t,h,z,M))}switch(o){case"input":wt(t),tt(t,l,!1);break;case"textarea":wt(t),me(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Le(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ra)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)Dh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ar(po.current),Ar(ai.current),da(i)){if(l=i.stateNode,o=i.memoizedProps,l[oi]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:ia(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[oi]=i,i.stateNode=l}return ln(i),null;case 13:if(Dt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uf(),as(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[oi]=i}else as(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else $n!==null&&(tc($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Yt===0&&(Yt=3):rc())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ds(),Wu(t,i),t===null&&oo(i.stateNode.containerInfo),ln(i),null;case 10:return vu(i.type._context),ln(i),null;case 17:return vn(i.type)&&oa(),ln(i),null;case 19:if(Dt(kt),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=_a(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Rt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ce()>ms&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=_a(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return ln(i),null}else 2*Ce()-h.renderingStartTime>ms&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ce(),i.sibling=null,o=kt.current,Rt(kt,l?o&1|2:o&1),i):(ln(i),null);case 22:case 23:return ic(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function s0(t,i){switch(fu(i),i.tag){case 1:return vn(i.type)&&oa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Dt(_n),Dt(on),wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Dt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));as()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return ds(),null;case 10:return vu(i.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Aa=!1,un=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function hs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Xu(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var Nh=!1;function a0(t,i){if(iu=jo,t=df(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,z=-1,te=0,ge=0,ye=t,pe=null;t:for(;;){for(var Ie;ye!==o||c!==0&&ye.nodeType!==3||(D=M+c),ye!==h||l!==0&&ye.nodeType!==3||(z=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)pe=ye,ye=Ie;for(;;){if(ye===t)break t;if(pe===o&&++te===c&&(D=M),pe===h&&++ge===l&&(z=M),(Ie=ye.nextSibling)!==null)break;ye=pe,pe=ye.parentNode}ye=Ie}o=D===-1||z===-1?null:{start:D,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(ru={focusedElem:t,selectionRange:o},jo=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,Ht=ke.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Kn(i.type,He),Ht);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Bt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ke=Nh,Nh=!1,ke}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Xu(i,o,h)}c=c.next}while(c!==l)}}function Ca(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ju(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ih(t){var i=t.alternate;i!==null&&(t.alternate=null,Ih(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[oi],delete i[lo],delete i[lu],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uh(t){return t.tag===5||t.tag===3||t.tag===4}function Fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ra));else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,o),t=t.sibling;t!==null;)Yu(t,i,o),t=t.sibling}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}var rn=null,Zn=!1;function er(t,i,o){for(o=o.child;o!==null;)Oh(t,i,o),o=o.sibling}function Oh(t,i,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Kt,o)}catch{}switch(o.tag){case 5:un||hs(o,i);case 6:var l=rn,c=Zn;rn=null,er(t,i,o),rn=l,Zn=c,rn!==null&&(Zn?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(Zn?(t=rn,o=o.stateNode,t.nodeType===8?au(t.parentNode,o):t.nodeType===1&&au(t,o),Zs(t)):au(rn,o.stateNode));break;case 4:l=rn,c=Zn,rn=o.stateNode.containerInfo,Zn=!0,er(t,i,o),rn=l,Zn=c;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Xu(o,i,M),c=c.next}while(c!==l)}er(t,i,o);break;case 1:if(!un&&(hs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Bt(o,i,D)}er(t,i,o);break;case 21:er(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,er(t,i,o),un=l):er(t,i,o);break;default:er(t,i,o)}}function kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new o0),i.forEach(function(l){var c=g0.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Qn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:rn=D.stateNode,Zn=!1;break e;case 3:rn=D.stateNode.containerInfo,Zn=!0;break e;case 4:rn=D.stateNode.containerInfo,Zn=!0;break e}D=D.return}if(rn===null)throw Error(n(160));Oh(h,M,c),rn=null,Zn=!1;var z=c.alternate;z!==null&&(z.return=null),c.return=null}catch(te){Bt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zh(i,t),i=i.sibling}function zh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),ui(t),l&4){try{yo(3,t,t.return),Ca(3,t)}catch(He){Bt(t,t.return,He)}try{yo(5,t,t.return)}catch(He){Bt(t,t.return,He)}}break;case 1:Qn(i,t),ui(t),l&512&&o!==null&&hs(o,o.return);break;case 5:if(Qn(i,t),ui(t),l&512&&o!==null&&hs(o,o.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(He){Bt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&We(c,h),At(D,M);var te=At(D,h);for(M=0;M<z.length;M+=2){var ge=z[M],ye=z[M+1];ge==="style"?Fe(c,ye):ge==="dangerouslySetInnerHTML"?rt(c,ye):ge==="children"?Me(c,ye):R(c,ge,ye,te)}switch(D){case"input":It(c,h);break;case"textarea":Se(c,h);break;case"select":var pe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?T(c,!!h.multiple,Ie,!1):pe!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(He){Bt(t,t.return,He)}}break;case 6:if(Qn(i,t),ui(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Bt(t,t.return,He)}}break;case 3:if(Qn(i,t),ui(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(He){Bt(t,t.return,He)}break;case 4:Qn(i,t),ui(t);break;case 13:Qn(i,t),ui(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Zu=Ce())),l&4&&kh(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(un=(te=un)||ge,Qn(i,t),un=te):Qn(i,t),ui(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ge&&(t.mode&1)!==0)for(Oe=t,ge=t.child;ge!==null;){for(ye=Oe=ge;Oe!==null;){switch(pe=Oe,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:yo(4,pe,pe.return);break;case 1:hs(pe,pe.return);var ke=pe.stateNode;if(typeof ke.componentWillUnmount=="function"){l=pe,o=pe.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){Bt(l,o,He)}}break;case 5:hs(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Vh(ye);continue}}Ie!==null?(Ie.return=pe,Oe=Ie):Vh(ye)}ge=ge.sibling}e:for(ge=null,ye=t;;){if(ye.tag===5){if(ge===null){ge=ye;try{c=ye.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=Je("display",M))}catch(He){Bt(t,t.return,He)}}}else if(ye.tag===6){if(ge===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(He){Bt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ge===ye&&(ge=null),ye=ye.return}ge===ye&&(ge=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Qn(i,t),ui(t),l&4&&kh(t);break;case 21:break;default:Qn(i,t),ui(t)}}function ui(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Uh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var h=Fh(t);qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Fh(t);Yu(t,D,M);break;default:throw Error(n(161))}}catch(z){Bt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function l0(t,i,o){Oe=t,Bh(t)}function Bh(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Aa;if(!M){var D=c.alternate,z=D!==null&&D.memoizedState!==null||un;D=Aa;var te=un;if(Aa=M,(un=z)&&!te)for(Oe=c;Oe!==null;)M=Oe,z=M.child,M.tag===22&&M.memoizedState!==null?Gh(c):z!==null?(z.return=M,Oe=z):Gh(c);for(;h!==null;)Oe=h,Bh(h),h=h.sibling;Oe=c,Aa=D,un=te}Hh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Oe=h):Hh(t)}}function Hh(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Ca(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Kn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Vf(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Vf(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ye=ge.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&ju(i)}catch(pe){Bt(i,i.return,pe)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Vh(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Gh(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ca(4,i)}catch(z){Bt(i,o,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(z){Bt(i,c,z)}}var h=i.return;try{ju(i)}catch(z){Bt(i,h,z)}break;case 5:var M=i.return;try{ju(i)}catch(z){Bt(i,M,z)}}}catch(z){Bt(i,i.return,z)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var u0=Math.ceil,Ra=L.ReactCurrentDispatcher,$u=L.ReactCurrentOwner,Vn=L.ReactCurrentBatchConfig,gt=0,Jt=null,Gt=null,sn=0,Un=0,ps=$i(0),Yt=0,So=null,Rr=0,Pa=0,Ku=0,Mo=null,yn=null,Zu=0,ms=1/0,Ei=null,ba=!1,Qu=null,tr=null,La=!1,nr=null,Da=0,Eo=0,Ju=null,Na=-1,Ia=0;function pn(){return(gt&6)!==0?Ce():Na!==-1?Na:Na=Ce()}function ir(t){return(t.mode&1)===0?1:(gt&2)!==0&&sn!==0?sn&-sn:jg.transition!==null?(Ia===0&&(Ia=Go()),Ia):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:Wd(t.type)),t)}function Jn(t,i,o,l){if(50<Eo)throw Eo=0,Ju=null,Error(n(185));js(t,o,l),((gt&2)===0||t!==Jt)&&(t===Jt&&((gt&2)===0&&(Pa|=o),Yt===4&&rr(t,sn)),Sn(t,l),o===1&&gt===0&&(i.mode&1)===0&&(ms=Ce()+500,la&&Zi()))}function Sn(t,i){var o=t.callbackNode;gn(t,i);var l=Ln(t,t===Jt?sn:0);if(l===0)o!==null&&Ae(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Ae(o),i===1)t.tag===0?Xg(Xh.bind(null,t)):bf(Xh.bind(null,t)),Hg(function(){(gt&6)===0&&Zi()}),o=null;else{switch(Fd(l)){case 1:o=Ze;break;case 4:o=je;break;case 16:o=ht;break;case 536870912:o=bt;break;default:o=ht}o=Jh(o,Wh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Wh(t,i){if(Na=-1,Ia=0,(gt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(gs()&&t.callbackNode!==o)return null;var l=Ln(t,t===Jt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ua(t,l);else{i=l;var c=gt;gt|=2;var h=Yh();(Jt!==t||sn!==i)&&(Ei=null,ms=Ce()+500,br(t,i));do try{f0();break}catch(D){jh(t,D)}while(!0);_u(),Ra.current=h,gt=c,Gt!==null?i=0:(Jt=null,sn=0,i=Yt)}if(i!==0){if(i===2&&(c=yr(t),c!==0&&(l=c,i=ec(t,c))),i===1)throw o=So,br(t,0),rr(t,l),Sn(t,Ce()),o;if(i===6)rr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!c0(c)&&(i=Ua(t,l),i===2&&(h=yr(t),h!==0&&(l=h,i=ec(t,h))),i===1))throw o=So,br(t,0),rr(t,l),Sn(t,Ce()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,yn,Ei);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Zu+500-Ce(),10<i)){if(Ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){pn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ou(Lr.bind(null,t,yn,Ei),i);break}Lr(t,yn,Ei);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-St(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Ce()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*u0(l/1960))-l,10<l){t.timeoutHandle=ou(Lr.bind(null,t,yn,Ei),l);break}Lr(t,yn,Ei);break;case 5:Lr(t,yn,Ei);break;default:throw Error(n(329))}}}return Sn(t,Ce()),t.callbackNode===o?Wh.bind(null,t):null}function ec(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Ua(t,i),t!==2&&(i=yn,yn=o,i!==null&&tc(i)),t}function tc(t){yn===null?yn=t:yn.push.apply(yn,t)}function c0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!qn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Ku,i&=~Pa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-St(i),l=1<<o;t[o]=-1,i&=~l}}function Xh(t){if((gt&6)!==0)throw Error(n(327));gs();var i=Ln(t,0);if((i&1)===0)return Sn(t,Ce()),null;var o=Ua(t,i);if(t.tag!==0&&o===2){var l=yr(t);l!==0&&(i=l,o=ec(t,l))}if(o===1)throw o=So,br(t,0),rr(t,i),Sn(t,Ce()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,yn,Ei),Sn(t,Ce()),null}function nc(t,i){var o=gt;gt|=1;try{return t(i)}finally{gt=o,gt===0&&(ms=Ce()+500,la&&Zi())}}function Pr(t){nr!==null&&nr.tag===0&&(gt&6)===0&&gs();var i=gt;gt|=1;var o=Vn.transition,l=Mt;try{if(Vn.transition=null,Mt=1,t)return t()}finally{Mt=l,Vn.transition=o,gt=i,(gt&6)===0&&Zi()}}function ic(){Un=ps.current,Dt(ps)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Bg(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(fu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&oa();break;case 3:ds(),Dt(_n),Dt(on),wu();break;case 5:Eu(l);break;case 4:ds();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:vu(l.type._context);break;case 22:case 23:ic()}o=o.return}if(Jt=t,Gt=t=sr(t.current,null),sn=Un=i,Yt=0,So=null,Ku=Pa=Rr=0,yn=Mo=null,wr!==null){for(i=0;i<wr.length;i++)if(o=wr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}wr=null}return t}function jh(t,i){do{var o=Gt;try{if(_u(),va.current=Ma,xa){for(var l=zt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}xa=!1}if(Cr=0,Qt=jt=zt=null,mo=!1,go=0,$u.current=null,o===null||o.return===null){Yt=1,So=i,Gt=null;break}e:{var h=t,M=o.return,D=o,z=i;if(i=sn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,ge=D,ye=ge.tag;if((ge.mode&1)===0&&(ye===0||ye===11||ye===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=_h(M);if(Ie!==null){Ie.flags&=-257,vh(Ie,M,D,h,i),Ie.mode&1&&gh(h,te,i),i=Ie,z=te;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(z),i.updateQueue=He}else ke.add(z);break e}else{if((i&1)===0){gh(h,te,i),rc();break e}z=Error(n(426))}}else if(Ft&&D.mode&1){var Ht=_h(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),vh(Ht,M,D,h,i),mu(fs(z,D));break e}}h=z=fs(z,D),Yt!==4&&(Yt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=ph(h,z,i);Hf(h,Y);break e;case 1:D=z;var V=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(tr===null||!tr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=mh(h,D,i);Hf(h,Ee);break e}}h=h.return}while(h!==null)}$h(o)}catch(Ve){i=Ve,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function Yh(){var t=Ra.current;return Ra.current=Ma,t===null?Ma:t}function rc(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||(Rr&268435455)===0&&(Pa&268435455)===0||rr(Jt,sn)}function Ua(t,i){var o=gt;gt|=2;var l=Yh();(Jt!==t||sn!==i)&&(Ei=null,br(t,i));do try{d0();break}catch(c){jh(t,c)}while(!0);if(_u(),gt=o,Ra.current=l,Gt!==null)throw Error(n(261));return Jt=null,sn=0,Yt}function d0(){for(;Gt!==null;)qh(Gt)}function f0(){for(;Gt!==null&&!Ne();)qh(Gt)}function qh(t){var i=Qh(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?$h(t):Gt=i,$u.current=null}function $h(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=r0(o,i,Un),o!==null){Gt=o;return}}else{if(o=s0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Lr(t,i,o){var l=Mt,c=Vn.transition;try{Vn.transition=null,Mt=1,h0(t,i,o,l)}finally{Vn.transition=c,Mt=l}return null}function h0(t,i,o,l){do gs();while(nr!==null);if((gt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ym(t,h),t===Jt&&(Gt=Jt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||La||(La=!0,Jh(ht,function(){return gs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var M=Mt;Mt=1;var D=gt;gt|=4,$u.current=null,a0(t,o),zh(o,t),Ng(ru),jo=!!iu,ru=iu=null,t.current=o,l0(o),Be(),gt=D,Mt=M,Vn.transition=h}else t.current=o;if(La&&(La=!1,nr=t,Da=c),h=t.pendingLanes,h===0&&(tr=null),Ge(o.stateNode),Sn(t,Ce()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(ba)throw ba=!1,t=Qu,Qu=null,t;return(Da&1)!==0&&t.tag!==0&&gs(),h=t.pendingLanes,(h&1)!==0?t===Ju?Eo++:(Eo=0,Ju=t):Eo=0,Zi(),null}function gs(){if(nr!==null){var t=Fd(Da),i=Vn.transition,o=Mt;try{if(Vn.transition=null,Mt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Da=0,(gt&6)!==0)throw Error(n(331));var c=gt;for(gt|=4,Oe=t.current;Oe!==null;){var h=Oe,M=h.child;if((Oe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var z=0;z<D.length;z++){var te=D[z];for(Oe=te;Oe!==null;){var ge=Oe;switch(ge.tag){case 0:case 11:case 15:yo(8,ge,h)}var ye=ge.child;if(ye!==null)ye.return=ge,Oe=ye;else for(;Oe!==null;){ge=Oe;var pe=ge.sibling,Ie=ge.return;if(Ih(ge),ge===te){Oe=null;break}if(pe!==null){pe.return=Ie,Oe=pe;break}Oe=Ie}}}var ke=h.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var Ht=He.sibling;He.sibling=null,He=Ht}while(He!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Oe=M;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var V=t.current;for(Oe=V;Oe!==null;){M=Oe;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Oe=K;else e:for(M=V;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ca(9,D)}}catch(Ve){Bt(D,D.return,Ve)}if(D===M){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(gt=c,Zi(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Kt,t)}catch{}l=!0}return l}finally{Mt=o,Vn.transition=i}}return!1}function Kh(t,i,o){i=fs(o,i),i=ph(t,i,1),t=Ji(t,i,1),i=pn(),t!==null&&(js(t,1,i),Sn(t,i))}function Bt(t,i,o){if(t.tag===3)Kh(t,t,o);else for(;i!==null;){if(i.tag===3){Kh(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=fs(o,t),t=mh(i,t,1),i=Ji(i,t,1),t=pn(),i!==null&&(js(i,1,t),Sn(i,t));break}}i=i.return}}function p0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=pn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(sn&o)===o&&(Yt===4||Yt===3&&(sn&130023424)===sn&&500>Ce()-Zu?br(t,0):Ku|=o),Sn(t,i)}function Zh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var o=pn();t=yi(t,i),t!==null&&(js(t,i,o),Sn(t,o))}function m0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Zh(t,o)}function g0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Zh(t,o)}var Qh;Qh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)xn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return xn=!1,i0(t,i,o);xn=(t.flags&131072)!==0}else xn=!1,Ft&&(i.flags&1048576)!==0&&Lf(i,ca,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;wa(t,i),t=i.pendingProps;var c=rs(i,on.current);cs(i,o),c=Ru(null,i,l,t,c,o);var h=Pu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(l)?(h=!0,aa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Su(i),c.updater=Ea,i.stateNode=c,c._reactInternals=i,Uu(i,l,t,o),i=zu(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&du(i),hn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(wa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=v0(l),t=Kn(l,t),c){case 0:i=ku(null,i,l,t,o);break e;case 1:i=Th(null,i,l,t,o);break e;case 11:i=xh(null,i,l,t,o);break e;case 14:i=yh(null,i,l,Kn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),ku(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Th(t,i,l,c,o);case 3:e:{if(wh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Bf(t,i),ga(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=fs(Error(n(423)),i),i=Ah(t,i,l,o,c);break e}else if(l!==c){c=fs(Error(n(424)),i),i=Ah(t,i,l,o,c);break e}else for(In=qi(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,$n=null,o=kf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(as(),l===c){i=Mi(t,i,o);break e}hn(t,i,l,o)}i=i.child}return i;case 5:return Gf(i),t===null&&pu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,su(l,c)?M=null:h!==null&&su(l,h)&&(i.flags|=32),Eh(t,i),hn(t,i,M,o),i.child;case 6:return t===null&&pu(i),null;case 13:return Ch(t,i,o);case 4:return Mu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,o):hn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),xh(t,i,l,c,o);case 7:return hn(t,i,i.pendingProps,o),i.child;case 8:return hn(t,i,i.pendingProps.children,o),i.child;case 12:return hn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Rt(ha,l._currentValue),l._currentValue=M,h!==null)if(qn(h.value,M)){if(h.children===c.children&&!_n.current){i=Mi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var z=D.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=Si(-1,o&-o),z.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),te.pending=z}}h.lanes|=o,z=h.alternate,z!==null&&(z.lanes|=o),xu(h.return,o,i),D.lanes|=o;break}z=z.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),xu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}hn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,cs(i,o),c=Bn(c),l=l(c),i.flags|=1,hn(t,i,l,o),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),yh(t,i,l,c,o);case 15:return Sh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),wa(t,i),i.tag=1,vn(l)?(t=!0,aa(i)):t=!1,cs(i,o),fh(i,l,c),Uu(i,l,c,o),zu(null,i,l,!0,t,o);case 19:return Ph(t,i,o);case 22:return Mh(t,i,o)}throw Error(n(156,i.tag))};function Jh(t,i){return j(t,i)}function _0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,o,l){return new _0(t,i,o,l)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v0(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===ee)return 14}return 2}function sr(t,i){var o=t.alternate;return o===null?(o=Gn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Fa(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")sc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Dr(o.children,c,h,i);case $:M=8,c|=8;break;case b:return t=Gn(12,o,i,c|2),t.elementType=b,t.lanes=h,t;case W:return t=Gn(13,o,i,c),t.elementType=W,t.lanes=h,t;case Q:return t=Gn(19,o,i,c),t.elementType=Q,t.lanes=h,t;case ae:return Oa(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case H:M=9;break e;case ue:M=11;break e;case ee:M=14;break e;case ie:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Dr(t,i,o,l){return t=Gn(7,t,l,i),t.lanes=o,t}function Oa(t,i,o,l){return t=Gn(22,t,l,i),t.elementType=ae,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,i,o){return t=Gn(6,t,null,i),t.lanes=o,t}function ac(t,i,o){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function x0(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function lc(t,i,o,l,c,h,M,D,z){return t=new x0(t,i,o,D,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(h),t}function y0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function ep(t){if(!t)return Ki;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return Rf(t,o,i)}return i}function tp(t,i,o,l,c,h,M,D,z){return t=lc(o,l,!0,t,c,h,M,D,z),t.context=ep(null),o=t.current,l=pn(),c=ir(o),h=Si(l,c),h.callback=i??null,Ji(o,h,c),t.current.lanes=c,js(t,c,l),Sn(t,l),t}function ka(t,i,o,l){var c=i.current,h=pn(),M=ir(c);return o=ep(o),i.context===null?i.context=o:i.pendingContext=o,i=Si(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(Jn(t,c,M,h),ma(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uc(t,i){np(t,i),(t=t.alternate)&&np(t,i)}function S0(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function cc(t){this._internalRoot=t}Ba.prototype.render=cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ka(t,i,null,null)},Ba.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){ka(null,t,null,null)}),i[gi]=null}};function Ba(t){this._internalRoot=t}Ba.prototype.unstable_scheduleHydration=function(t){if(t){var i=zd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&Vd(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ha(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function M0(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=za(M);h.call(te)}}var M=tp(i,l,t,0,null,!1,!1,"",rp);return t._reactRootContainer=M,t[gi]=M.current,oo(t.nodeType===8?t.parentNode:t),Pr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var te=za(z);D.call(te)}}var z=lc(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=z,t[gi]=z.current,oo(t.nodeType===8?t.parentNode:t),Pr(function(){ka(i,z,o,l)}),z}function Va(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var z=za(M);D.call(z)}}ka(i,M,t,c)}else M=M0(o,i,t,c,l);return za(M)}Od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ct(i.pendingLanes);o!==0&&(Ul(i,o|1),Sn(i,Ce()),(gt&6)===0&&(ms=Ce()+500,Zi()))}break;case 13:Pr(function(){var l=yi(t,1);if(l!==null){var c=pn();Jn(l,t,1,c)}}),uc(t,1)}},Fl=function(t){if(t.tag===13){var i=yi(t,134217728);if(i!==null){var o=pn();Jn(i,t,134217728,o)}uc(t,134217728)}},kd=function(t){if(t.tag===13){var i=ir(t),o=yi(t,i);if(o!==null){var l=pn();Jn(o,t,i,l)}uc(t,i)}},zd=function(){return Mt},Bd=function(t,i){var o=Mt;try{return Mt=t,i()}finally{Mt=o}},fe=function(t,i,o){switch(i){case"input":if(It(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=sa(l);if(!c)throw Error(n(90));k(l),It(l,c)}}}break;case"textarea":Se(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},Vt=nc,mt=Pr;var E0={usingClientEntryPoint:!1,Events:[uo,ns,sa,dt,Ot,nc]},To={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T0={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Kt=Ga.inject(T0),ot=Ga}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0,Mn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return y0(t,i,null,o)},Mn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,l="",c=ip;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=lc(t,1,!1,null,null,o,!1,l,c),t[gi]=i.current,oo(t.nodeType===8?t.parentNode:t),new cc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return Pr(t)},Mn.hydrate=function(t,i,o){if(!Ha(i))throw Error(n(200));return Va(null,t,i,!0,o)},Mn.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=ip;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=tp(i,null,t,1,o??null,c,!1,h,M),t[gi]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ba(i)},Mn.render=function(t,i,o){if(!Ha(i))throw Error(n(200));return Va(null,t,i,!1,o)},Mn.unmountComponentAtNode=function(t){if(!Ha(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){Va(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1},Mn.unstable_batchedUpdates=nc,Mn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ha(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Va(t,i,o,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var fp;function D0(){if(fp)return pc.exports;fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pc.exports=L0(),pc.exports}var hp;function N0(){if(hp)return Wa;hp=1;var s=D0();return Wa.createRoot=s.createRoot,Wa.hydrateRoot=s.hydrateRoot,Wa}var I0=N0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="166",U0=0,pp=1,F0=2,fm=1,O0=2,Pi=3,gr=0,wn=1,bi=2,pr=0,Us=1,mp=2,gp=3,_p=4,k0=5,Hr=100,z0=101,B0=102,H0=103,V0=104,G0=200,W0=201,X0=202,j0=203,Xc=204,jc=205,Y0=206,q0=207,$0=208,K0=209,Z0=210,Q0=211,J0=212,e_=213,t_=214,n_=0,i_=1,r_=2,El=3,s_=4,o_=5,a_=6,l_=7,hm=0,u_=1,c_=2,mr=0,d_=1,f_=2,h_=3,p_=4,m_=5,g_=6,__=7,pm=300,ks=301,zs=302,Yc=303,qc=304,Pl=306,$c=1e3,Gr=1001,Kc=1002,jn=1003,v_=1004,Xa=1005,ii=1006,_c=1007,Wr=1008,Ii=1009,mm=1010,gm=1011,Do=1012,Rd=1013,jr=1014,Li=1015,No=1016,Pd=1017,bd=1018,Bs=1020,_m=35902,vm=1021,xm=1022,ri=1023,ym=1024,Sm=1025,Fs=1026,Hs=1027,Mm=1028,Ld=1029,Em=1030,Dd=1031,Nd=1033,_l=33776,vl=33777,xl=33778,yl=33779,Zc=35840,Qc=35841,Jc=35842,ed=35843,td=36196,nd=37492,id=37496,rd=37808,sd=37809,od=37810,ad=37811,ld=37812,ud=37813,cd=37814,dd=37815,fd=37816,hd=37817,pd=37818,md=37819,gd=37820,_d=37821,Sl=36492,vd=36494,xd=36495,Tm=36283,yd=36284,Sd=36285,Md=36286,x_=3200,y_=3201,S_=0,M_=1,hr="",ci="srgb",vr="srgb-linear",Id="display-p3",bl="display-p3-linear",Tl="linear",Nt="srgb",wl="rec709",Al="p3",_s=7680,vp=519,E_=512,T_=513,w_=514,wm=515,A_=516,C_=517,R_=518,P_=519,xp=35044,yp="300 es",Di=2e3,Cl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,Ed=180/Math.PI;function Io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function b_(s,e){return(s%e+e)%e}function xc(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,r,a,u,f,d,p,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],y=r[7],x=r[2],S=r[5],w=r[8],E=a[0],_=a[3],g=a[6],P=a[1],R=a[4],L=a[7],q=a[2],O=a[5],U=a[8];return u[0]=f*E+d*P+p*q,u[3]=f*_+d*R+p*O,u[6]=f*g+d*L+p*U,u[1]=m*E+v*P+y*q,u[4]=m*_+v*R+y*O,u[7]=m*g+v*L+y*U,u[2]=x*E+S*P+w*q,u[5]=x*_+S*R+w*O,u[8]=x*g+S*L+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=v*f-d*m,x=d*p-v*u,S=m*u-f*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(a*m-v*r)*E,e[2]=(d*r-a*f)*E,e[3]=x*E,e[4]=(v*n-a*p)*E,e[5]=(a*u-d*n)*E,e[6]=S*E,e[7]=(r*p-m*n)*E,e[8]=(f*n-r*u)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(yc.makeScale(e,n)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new lt;function Am(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function L_(){const s=Rl("canvas");return s.style.display="block",s}const Sp={};function Cm(s){s in Sp||(Sp[s]=!0,console.warn(s))}function D_(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Mp=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[vr]:{transfer:Tl,primaries:wl,toReference:s=>s,fromReference:s=>s},[ci]:{transfer:Nt,primaries:wl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bl]:{transfer:Tl,primaries:Al,toReference:s=>s.applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp)},[Id]:{transfer:Nt,primaries:Al,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp).convertLinearToSRGB()}},N_=new Set([vr,bl]),Et={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!N_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=ja[e].toReference,a=ja[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ja[s].primaries},getTransfer:function(s){return s===hr?Tl:ja[s].transfer}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class I_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Rl("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Os(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U_=0;class Rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Mc(a[f].image)):u.push(Mc(a[f]))}else u=Mc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F_=0;class An extends Gs{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Gr,a=Gr,u=ii,f=Wr,d=ri,p=Ii,m=An.DEFAULT_ANISOTROPY,v=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Io(),this.name="",this.source=new Rm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $c:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $c:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=pm;An.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,r=0,a=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],y=p[8],x=p[1],S=p[5],w=p[9],E=p[2],_=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(y-E)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+E)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,L=(S+1)/2,q=(g+1)/2,O=(v+x)/4,U=(y+E)/4,$=(w+_)/4;return R>L&&R>q?R<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(R),a=O/r,u=U/r):L>q?L<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(L),r=O/a,u=$/a):q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(q),r=U/u,a=$/u),this.set(r,a,u,n),this}let P=Math.sqrt((_-w)*(_-w)+(y-E)*(y-E)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(_-w)/P,this.y=(y-E)/P,this.z=(x-v)/P,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Rm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends O_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Pm extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],E=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=E;return}if(y!==E||p!==x||m!==S||v!==w){let _=1-d;const g=p*x+m*S+v*w+y*E,P=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const q=Math.sqrt(R),O=Math.atan2(q,g*P);_=Math.sin(_*O)/q,d=Math.sin(d*O)/q}const L=d*P;if(p=p*_+x*L,m=m*_+S*L,v=v*_+w*L,y=y*_+E*L,_===1-d){const q=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=q,m*=q,v*=q,y*=q}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],y=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+v*y+p*S-m*x,e[n+1]=p*w+v*x+m*y-d*S,e[n+2]=m*w+v*S+d*x-p*y,e[n+3]=v*w-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"YXZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"ZXY":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"ZYX":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"YZX":this._x=x*v*y+m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y-x*S*w;break;case"XZY":this._x=x*v*y-m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(v-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),y=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*v,this.y=r+p*v+d*m-u*y,this.z=a+p*y+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new se,Tp=new Uo;class Fo{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ei):ei.fromBufferAttribute(u,f),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ya.copy(r.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),qa.subVectors(this.max,Co),xs.subVectors(e.a,Co),ys.subVectors(e.b,Co),Ss.subVectors(e.c,Co),ar.subVectors(ys,xs),lr.subVectors(Ss,ys),Nr.subVectors(xs,Ss);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Nr.z,Nr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Nr.z,0,-Nr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Nr.y,Nr.x,0];return!Tc(n,xs,ys,Ss,qa)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,xs,ys,Ss,qa))?!1:($a.crossVectors(ar,lr),n=[$a.x,$a.y,$a.z],Tc(n,xs,ys,Ss,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new se,new se,new se,new se,new se,new se,new se,new se],ei=new se,Ya=new Fo,xs=new se,ys=new se,Ss=new se,ar=new se,lr=new se,Nr=new se,Co=new se,qa=new se,$a=new se,Ir=new se;function Tc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Ir.fromArray(s,u);const d=a.x*Math.abs(Ir.x)+a.y*Math.abs(Ir.y)+a.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),v=r.dot(Ir);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const z_=new Fo,Ro=new se,wc=new se;class Ll{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):z_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(wc)),this.expandByPoint(Ro.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new se,Ac=new se,Ka=new se,ur=new se,Cc=new se,Za=new se,Rc=new se;class bm{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ac.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Ac);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ka),d=ur.dot(this.direction),p=-ur.dot(Ka),m=ur.lengthSq(),v=Math.abs(1-f*f);let y,x,S,w;if(v>0)if(y=f*p-d,x=f*d-p,w=u*v,y>=0)if(x>=-w)if(x<=w){const E=1/v;y*=E,x*=E,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Ac).addScaledVector(Ka,x),S}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const r=wi.dot(this.direction),a=wi.dot(wi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),Za.subVectors(r,e),Rc.crossVectors(Cc,Za);let f=this.direction.dot(Rc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(ur,Za));if(p<0)return null;const m=d*this.direction.dot(Cc.cross(ur));if(m<0||p+m>f)return null;const v=-d*ur.dot(Rc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,f,d,p,m,v,y,x,S,w,E,_){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,E,_)}set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,E,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=y,g[14]=x,g[3]=S,g[7]=w,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ms.setFromMatrixColumn(e,0).length(),u=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*v,S=f*y,w=d*v,E=d*y;n[0]=p*v,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-E*m,n[9]=-d*p,n[2]=E-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,S=p*y,w=m*v,E=m*y;n[0]=x+E*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*v,n[9]=-d,n[2]=S*d-w,n[6]=E+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,S=p*y,w=m*v,E=m*y;n[0]=x-E*d,n[4]=-f*y,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*v,n[9]=E-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,S=f*y,w=d*v,E=d*y;n[0]=p*v,n[4]=w*m-S,n[8]=x*m+E,n[1]=p*y,n[5]=E*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,E=d*m;n[0]=p*v,n[4]=E-x*y,n[8]=w*y+S,n[1]=y,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*y+w,n[10]=x-E*y}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,E=d*m;n[0]=p*v,n[4]=-y,n[8]=m*v,n[1]=x*y+E,n[5]=f*v,n[9]=S*y-w,n[2]=w*y-S,n[6]=d*v,n[10]=E*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,H_)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),cr.crossVectors(r,Fn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),cr.crossVectors(r,Fn)),cr.normalize(),Qa.crossVectors(Fn,cr),a[0]=cr.x,a[4]=Qa.x,a[8]=Fn.x,a[1]=cr.y,a[5]=Qa.y,a[9]=Fn.y,a[2]=cr.z,a[6]=Qa.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],y=r[5],x=r[9],S=r[13],w=r[2],E=r[6],_=r[10],g=r[14],P=r[3],R=r[7],L=r[11],q=r[15],O=a[0],U=a[4],$=a[8],b=a[12],C=a[1],H=a[5],ue=a[9],W=a[13],Q=a[2],ee=a[6],ie=a[10],ae=a[14],B=a[3],de=a[7],le=a[11],I=a[15];return u[0]=f*O+d*C+p*Q+m*B,u[4]=f*U+d*H+p*ee+m*de,u[8]=f*$+d*ue+p*ie+m*le,u[12]=f*b+d*W+p*ae+m*I,u[1]=v*O+y*C+x*Q+S*B,u[5]=v*U+y*H+x*ee+S*de,u[9]=v*$+y*ue+x*ie+S*le,u[13]=v*b+y*W+x*ae+S*I,u[2]=w*O+E*C+_*Q+g*B,u[6]=w*U+E*H+_*ee+g*de,u[10]=w*$+E*ue+_*ie+g*le,u[14]=w*b+E*W+_*ae+g*I,u[3]=P*O+R*C+L*Q+q*B,u[7]=P*U+R*H+L*ee+q*de,u[11]=P*$+R*ue+L*ie+q*le,u[15]=P*b+R*W+L*ae+q*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],y=e[6],x=e[10],S=e[14],w=e[3],E=e[7],_=e[11],g=e[15];return w*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+E*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*v-u*p*v)+_*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*v-r*m*v)+g*(-a*d*v-n*p*y+n*d*x+a*f*y-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=e[9],x=e[10],S=e[11],w=e[12],E=e[13],_=e[14],g=e[15],P=y*_*m-E*x*m+E*p*S-d*_*S-y*p*g+d*x*g,R=w*x*m-v*_*m-w*p*S+f*_*S+v*p*g-f*x*g,L=v*E*m-w*y*m+w*d*S-f*E*S-v*d*g+f*y*g,q=w*y*p-v*E*p-w*d*x+f*E*x+v*d*_-f*y*_,O=n*P+r*R+a*L+u*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=P*U,e[1]=(E*x*u-y*_*u-E*a*S+r*_*S+y*a*g-r*x*g)*U,e[2]=(d*_*u-E*p*u+E*a*m-r*_*m-d*a*g+r*p*g)*U,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*U,e[4]=R*U,e[5]=(v*_*u-w*x*u+w*a*S-n*_*S-v*a*g+n*x*g)*U,e[6]=(w*p*u-f*_*u-w*a*m+n*_*m+f*a*g-n*p*g)*U,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*S+n*p*S)*U,e[8]=L*U,e[9]=(w*y*u-v*E*u-w*r*S+n*E*S+v*r*g-n*y*g)*U,e[10]=(f*E*u-w*d*u+w*r*m-n*E*m-f*r*g+n*d*g)*U,e[11]=(v*d*u-f*y*u-v*r*m+n*y*m+f*r*S-n*d*S)*U,e[12]=q*U,e[13]=(v*E*a-w*y*a+w*r*x-n*E*x-v*r*_+n*y*_)*U,e[14]=(w*d*a-f*E*a-w*r*p+n*E*p+f*r*_-n*d*_)*U,e[15]=(f*y*a-v*d*a+v*r*p-n*y*p-f*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,y=d+d,x=u*m,S=u*v,w=u*y,E=f*v,_=f*y,g=d*y,P=p*m,R=p*v,L=p*y,q=r.x,O=r.y,U=r.z;return a[0]=(1-(E+g))*q,a[1]=(S+L)*q,a[2]=(w-R)*q,a[3]=0,a[4]=(S-L)*O,a[5]=(1-(x+g))*O,a[6]=(_+P)*O,a[7]=0,a[8]=(w+R)*U,a[9]=(_-P)*U,a[10]=(1-(x+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ms.set(a[0],a[1],a[2]).length();const f=Ms.set(a[4],a[5],a[6]).length(),d=Ms.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const m=1/u,v=1/f,y=1/d;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=v,ti.elements[5]*=v,ti.elements[6]*=v,ti.elements[8]*=y,ti.elements[9]*=y,ti.elements[10]*=y,n.setFromRotationMatrix(ti),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Di){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Di)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Cl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Di){const p=this.elements,m=1/(n-e),v=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*v;let w,E;if(d===Di)w=(f+u)*y,E=-2*y;else if(d===Cl)w=u*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=E,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ms=new se,ti=new Xt,B_=new se(0,0,0),H_=new se(1,1,1),cr=new se,Qa=new se,Fn=new se,wp=new Xt,Ap=new Uo;class Ui{constructor(e=0,n=0,r=0,a=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V_=0;const Cp=new se,Es=new Uo,Ai=new Xt,Ja=new se,Po=new se,G_=new se,W_=new Uo,Rp=new se(1,0,0),Pp=new se(0,1,0),bp=new se(0,0,1),Lp={type:"added"},X_={type:"removed"},Ts={type:"childadded",child:null},Pc={type:"childremoved",child:null};class Cn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new se,n=new Ui,r=new Uo,a=new se(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new lt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Po,Ja,this.up):Ai.lookAt(Ja,Po,this.up),this.quaternion.setFromRotationMatrix(Ai),a&&(Ai.extractRotation(a.matrixWorld),Es.setFromRotationMatrix(Ai),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(X_),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Cn.DEFAULT_UP=new se(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new se,Ci=new se,bc=new se,Ri=new se,ws=new se,As=new se,Dp=new se,Lc=new se,Dc=new se,Nc=new se;class fi{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ni.subVectors(e,n),a.cross(ni);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ni.subVectors(a,n),Ci.subVectors(r,n),bc.subVectors(e,n);const f=ni.dot(ni),d=ni.dot(Ci),p=ni.dot(bc),m=Ci.dot(Ci),v=Ci.dot(bc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ri)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ri.x),p.addScaledVector(f,Ri.y),p.addScaledVector(d,Ri.z),p)}static isFrontFacing(e,n,r,a){return ni.subVectors(r,n),Ci.subVectors(e,n),ni.cross(Ci).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;ws.subVectors(a,r),As.subVectors(u,r),Lc.subVectors(e,r);const p=ws.dot(Lc),m=As.dot(Lc);if(p<=0&&m<=0)return n.copy(r);Dc.subVectors(e,a);const v=ws.dot(Dc),y=As.dot(Dc);if(v>=0&&y<=v)return n.copy(a);const x=p*y-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(ws,f);Nc.subVectors(e,u);const S=ws.dot(Nc),w=As.dot(Nc);if(w>=0&&S<=w)return n.copy(u);const E=S*m-p*w;if(E<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(As,d);const _=v*w-S*y;if(_<=0&&y-v>=0&&S-w>=0)return Dp.subVectors(u,a),d=(y-v)/(y-v+(S-w)),n.copy(a).addScaledVector(Dp,d);const g=1/(_+E+x);return f=E*g,d=x*g,n.copy(r).addScaledVector(ws,f).addScaledVector(As,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=b_(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Ic(f,u,e+1/3),this.g=Ic(f,u,e),this.b=Ic(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const r=Dm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Et.fromWorkingColorSpace(dn.copy(this),e),Math.round(Tn(dn.r*255,0,255))*65536+Math.round(Tn(dn.g*255,0,255))*256+Math.round(Tn(dn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,a=dn.g,u=dn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=v<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ci){Et.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,a=dn.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(el);const r=xc(dr.h,el.h,n),a=xc(dr.s,el.s,n),u=xc(dr.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Tt;Tt.NAMES=Dm;let j_=0;class Oo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Us,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=jc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xc&&(r.blendSrc=this.blendSrc),this.blendDst!==jc&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Nm extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new se,tl=new yt;class si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=xp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array),u=En(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class Im extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Um extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xr extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Y_=0;const Wn=new Xt,Uc=new Cn,Cs=new se,On=new Fo,bo=new Fo,tn=new se;class Fi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Um:Im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(On.min,bo.min),On.expandByPoint(tn),tn.addVectors(On.max,bo.max),On.expandByPoint(tn)):(On.expandByPoint(bo.min),On.expandByPoint(bo.max))}On.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)tn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),tn.add(Cs)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new se,p[$]=new se;const m=new se,v=new se,y=new se,x=new yt,S=new yt,w=new yt,E=new se,_=new se;function g($,b,C){m.fromBufferAttribute(r,$),v.fromBufferAttribute(r,b),y.fromBufferAttribute(r,C),x.fromBufferAttribute(u,$),S.fromBufferAttribute(u,b),w.fromBufferAttribute(u,C),v.sub(m),y.sub(m),S.sub(x),w.sub(x);const H=1/(S.x*w.y-w.x*S.y);isFinite(H)&&(E.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(H),_.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(H),d[$].add(E),d[b].add(E),d[C].add(E),p[$].add(_),p[b].add(_),p[C].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let $=0,b=P.length;$<b;++$){const C=P[$],H=C.start,ue=C.count;for(let W=H,Q=H+ue;W<Q;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new se,L=new se,q=new se,O=new se;function U($){q.fromBufferAttribute(a,$),O.copy(q);const b=d[$];R.copy(b),R.sub(q.multiplyScalar(q.dot(b))).normalize(),L.crossVectors(O,b);const H=L.dot(p[$])<0?-1:1;f.setXYZW($,R.x,R.y,R.z,H)}for(let $=0,b=P.length;$<b;++$){const C=P[$],H=C.start,ue=C.count;for(let W=H,Q=H+ue;W<Q;W+=3)U(e.getX(W+0)),U(e.getX(W+1)),U(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new se,u=new se,f=new se,d=new se,p=new se,m=new se,v=new se,y=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),E=e.getX(x+1),_=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,_),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,_),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,y=d.normalized,x=new m.constructor(p.length*v);let S=0,w=0;for(let E=0,_=p.length;E<_;E++){d.isInterleavedBufferAttribute?S=p[E]*d.data.stride+d.offset:S=p[E]*v;for(let g=0;g<v;g++)x[w++]=m[S++]}return new si(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,y=m.length;v<y;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],y=u[m];for(let x=0,S=y.length;x<S;x++)v.push(y[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Xt,Ur=new bm,nl=new Ll,Ip=new se,Rs=new se,Ps=new se,bs=new se,Fc=new se,il=new se,rl=new yt,sl=new yt,ol=new yt,Up=new se,Fp=new se,Op=new se,al=new se,ll=new se;class Ni extends Cn{constructor(e=new Fi,n=new Nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){il.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],y=u[p];v!==0&&(Fc.fromBufferAttribute(y,e),f?il.addScaledVector(Fc,v):il.addScaledVector(Fc.sub(n),v))}n.add(il)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Ur.copy(e.ray).recast(e.near),!(nl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(nl,Ip)===null||Ur.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Np.copy(u).invert(),Ur.copy(e.ray).applyMatrix4(Np),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,E=x.length;w<E;w++){const _=x[w],g=f[_.materialIndex],P=Math.max(_.start,S.start),R=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let L=P,q=R;L<q;L+=3){const O=d.getX(L),U=d.getX(L+1),$=d.getX(L+2);a=ul(this,g,e,r,m,v,y,O,U,$),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const P=d.getX(_),R=d.getX(_+1),L=d.getX(_+2);a=ul(this,f,e,r,m,v,y,P,R,L),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,E=x.length;w<E;w++){const _=x[w],g=f[_.materialIndex],P=Math.max(_.start,S.start),R=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let L=P,q=R;L<q;L+=3){const O=L,U=L+1,$=L+2;a=ul(this,g,e,r,m,v,y,O,U,$),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const P=_,R=_+1,L=_+2;a=ul(this,f,e,r,m,v,y,P,R,L),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function q_(s,e,n,r,a,u,f,d){let p;if(e.side===wn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===gr,d),p===null)return null;ll.copy(d),ll.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:s}}function ul(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,Rs),s.getVertexPosition(p,Ps),s.getVertexPosition(m,bs);const v=q_(s,e,n,r,Rs,Ps,bs,al);if(v){a&&(rl.fromBufferAttribute(a,d),sl.fromBufferAttribute(a,p),ol.fromBufferAttribute(a,m),v.uv=fi.getInterpolation(al,Rs,Ps,bs,rl,sl,ol,new yt)),u&&(rl.fromBufferAttribute(u,d),sl.fromBufferAttribute(u,p),ol.fromBufferAttribute(u,m),v.uv1=fi.getInterpolation(al,Rs,Ps,bs,rl,sl,ol,new yt)),f&&(Up.fromBufferAttribute(f,d),Fp.fromBufferAttribute(f,p),Op.fromBufferAttribute(f,m),v.normal=fi.getInterpolation(al,Rs,Ps,bs,Up,Fp,Op,new se),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new se,materialIndex:0};fi.getNormal(Rs,Ps,bs,y.normal),v.face=y}return v}class ko extends Fi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(v,3)),this.setAttribute("uv",new Xr(y,2));function w(E,_,g,P,R,L,q,O,U,$,b){const C=L/U,H=q/$,ue=L/2,W=q/2,Q=O/2,ee=U+1,ie=$+1;let ae=0,B=0;const de=new se;for(let le=0;le<ie;le++){const I=le*H-W;for(let oe=0;oe<ee;oe++){const be=oe*C-ue;de[E]=be*P,de[_]=I*R,de[g]=Q,m.push(de.x,de.y,de.z),de[E]=0,de[_]=0,de[g]=O>0?1:-1,v.push(de.x,de.y,de.z),y.push(oe/U),y.push(1-le/$),ae+=1}}for(let le=0;le<$;le++)for(let I=0;I<U;I++){const oe=x+I+ee*le,be=x+I+ee*(le+1),Z=x+(I+1)+ee*(le+1),ce=x+(I+1)+ee*le;p.push(oe,be,ce),p.push(be,Z,ce),B+=6}d.addGroup(S,B,b),S+=B,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function mn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const a in r)e[a]=r[a]}return e}function $_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Fm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const K_={clone:Vs,merge:mn};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=Q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=$_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Om extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new se,kp=new yt,zp=new yt;class Xn extends Om{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,kp,zp),n.subVectors(zp,kp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class J_ extends Cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const u=new Xn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Xn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new Xn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new Xn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Xn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class km extends An{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ev extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new km(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ko(5,5,5),u=new _r({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:pr});u.uniforms.tEquirect.value=n;const f=new Ni(a,u),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=ii),new J_(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Oc=new se,tv=new se,nv=new lt;class zr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(tv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||nv.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ll,cl=new se;class zm{constructor(e=new zr,n=new zr,r=new zr,a=new zr,u=new zr,f=new zr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Di){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],y=a[6],x=a[7],S=a[8],w=a[9],E=a[10],_=a[11],g=a[12],P=a[13],R=a[14],L=a[15];if(r[0].setComponents(p-u,x-m,_-S,L-g).normalize(),r[1].setComponents(p+u,x+m,_+S,L+g).normalize(),r[2].setComponents(p+f,x+v,_+w,L+P).normalize(),r[3].setComponents(p-f,x-v,_-w,L-P).normalize(),r[4].setComponents(p-d,x-y,_-E,L-R).normalize(),n===Di)r[5].setComponents(p+d,x+y,_+E,L+R).normalize();else if(n===Cl)r[5].setComponents(d,y,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function iv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const v=p.array,y=p._updateRange,x=p.updateRanges;if(s.bindBuffer(m,d),y.count===-1&&x.length===0&&s.bufferSubData(m,0,v),x.length!==0){for(let S=0,w=x.length;S<w;S++){const E=x[S];s.bufferSubData(m,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}p.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count),y.count=-1),p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Dl extends Fi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,y=e/d,x=n/p,S=[],w=[],E=[],_=[];for(let g=0;g<v;g++){const P=g*x-f;for(let R=0;R<m;R++){const L=R*y-u;w.push(L,-P,0),E.push(0,0,1),_.push(R/d),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const R=P+m*g,L=P+m*(g+1),q=P+1+m*(g+1),O=P+1+m*g;S.push(R,L,O),S.push(L,q,O)}this.setIndex(S),this.setAttribute("position",new Xr(w,3)),this.setAttribute("normal",new Xr(E,3)),this.setAttribute("uv",new Xr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,My=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ty=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:uv,aomap_fragment:cv,aomap_pars_fragment:dv,batching_pars_vertex:fv,batching_vertex:hv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:vv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:Ev,color_pars_fragment:Tv,color_pars_vertex:wv,color_vertex:Av,common:Cv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:bv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Nv,colorspace_fragment:Iv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:kv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Kv,envmap_vertex:Bv,fog_vertex:Hv,fog_pars_vertex:Vv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:jv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:qv,lights_pars_begin:$v,lights_toon_fragment:Zv,lights_toon_pars_fragment:Qv,lights_phong_fragment:Jv,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:rx,lights_fragment_end:sx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:lx,logdepthbuf_vertex:ux,map_fragment:cx,map_pars_fragment:dx,map_particle_fragment:fx,map_particle_pars_fragment:hx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:_x,morphnormal_vertex:vx,morphtarget_pars_vertex:xx,morphtarget_vertex:yx,normal_fragment_begin:Sx,normal_fragment_maps:Mx,normal_pars_fragment:Ex,normal_pars_vertex:Tx,normal_vertex:wx,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Px,iridescence_pars_fragment:bx,opaque_fragment:Lx,packing:Dx,premultiplied_alpha_fragment:Nx,project_vertex:Ix,dithering_fragment:Ux,dithering_pars_fragment:Fx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Bx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:jx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:$x,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:Qx,uv_pars_fragment:Jx,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:ry,backgroundCube_vert:sy,backgroundCube_frag:oy,cube_vert:ay,cube_frag:ly,depth_vert:uy,depth_frag:cy,distanceRGBA_vert:dy,distanceRGBA_frag:fy,equirect_vert:hy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:xy,meshlambert_frag:yy,meshmatcap_vert:Sy,meshmatcap_frag:My,meshnormal_vert:Ey,meshnormal_frag:Ty,meshphong_vert:wy,meshphong_frag:Ay,meshphysical_vert:Cy,meshphysical_frag:Ry,meshtoon_vert:Py,meshtoon_frag:by,points_vert:Ly,points_frag:Dy,shadow_vert:Ny,shadow_frag:Iy,sprite_vert:Uy,sprite_frag:Fy},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},di={basic:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:mn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:mn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:mn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:mn([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};di.physical={uniforms:mn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const dl={r:0,b:0,g:0},Or=new Ui,Oy=new Xt;function ky(s,e,n,r,a,u,f){const d=new Tt(0);let p=u===!0?0:1,m,v,y=null,x=0,S=null;function w(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?n:e).get(R)),R}function E(P){let R=!1;const L=w(P);L===null?g(d,p):L&&L.isColor&&(g(L,1),R=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,f):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(P,R){const L=w(R);L&&(L.isCubeTexture||L.mapping===Pl)?(v===void 0&&(v=new Ni(new ko(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(q,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Or.copy(R.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(Or)),v.material.toneMapped=Et.getTransfer(L.colorSpace)!==Nt,(y!==L||x!==L.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,y=L,x=L.version,S=s.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Ni(new Dl(2,2),new _r({name:"BackgroundMaterial",uniforms:Vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Et.getTransfer(L.colorSpace)!==Nt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=L,x=L.version,S=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function g(P,R){P.getRGB(dl,Fm(s)),r.buffers.color.setClear(dl.r,dl.g,dl.b,R,f)}return{getClearColor:function(){return d},setClearColor:function(P,R=1){d.set(P),p=R,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:E,addToRenderList:_}}function zy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(C,H,ue,W,Q){let ee=!1;const ie=y(W,ue,H);u!==ie&&(u=ie,m(u.object)),ee=S(C,W,ue,Q),ee&&w(C,W,ue,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ee||f)&&(f=!1,L(C,H,ue,W),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function y(C,H,ue){const W=ue.wireframe===!0;let Q=r[C.id];Q===void 0&&(Q={},r[C.id]=Q);let ee=Q[H.id];ee===void 0&&(ee={},Q[H.id]=ee);let ie=ee[W];return ie===void 0&&(ie=x(p()),ee[W]=ie),ie}function x(C){const H=[],ue=[],W=[];for(let Q=0;Q<n;Q++)H[Q]=0,ue[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ue,attributeDivisors:W,object:C,attributes:{},index:null}}function S(C,H,ue,W){const Q=u.attributes,ee=H.attributes;let ie=0;const ae=ue.getAttributes();for(const B in ae)if(ae[B].location>=0){const le=Q[B];let I=ee[B];if(I===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),le===void 0||le.attribute!==I||I&&le.data!==I.data)return!0;ie++}return u.attributesNum!==ie||u.index!==W}function w(C,H,ue,W){const Q={},ee=H.attributes;let ie=0;const ae=ue.getAttributes();for(const B in ae)if(ae[B].location>=0){let le=ee[B];le===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const I={};I.attribute=le,le&&le.data&&(I.data=le.data),Q[B]=I,ie++}u.attributes=Q,u.attributesNum=ie,u.index=W}function E(){const C=u.newAttributes;for(let H=0,ue=C.length;H<ue;H++)C[H]=0}function _(C){g(C,0)}function g(C,H){const ue=u.newAttributes,W=u.enabledAttributes,Q=u.attributeDivisors;ue[C]=1,W[C]===0&&(s.enableVertexAttribArray(C),W[C]=1),Q[C]!==H&&(s.vertexAttribDivisor(C,H),Q[C]=H)}function P(){const C=u.newAttributes,H=u.enabledAttributes;for(let ue=0,W=H.length;ue<W;ue++)H[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),H[ue]=0)}function R(C,H,ue,W,Q,ee,ie){ie===!0?s.vertexAttribIPointer(C,H,ue,Q,ee):s.vertexAttribPointer(C,H,ue,W,Q,ee)}function L(C,H,ue,W){E();const Q=W.attributes,ee=ue.getAttributes(),ie=H.defaultAttributeValues;for(const ae in ee){const B=ee[ae];if(B.location>=0){let de=Q[ae];if(de===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const le=de.normalized,I=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const be=oe.buffer,Z=oe.type,ce=oe.bytesPerElement,xe=Z===s.INT||Z===s.UNSIGNED_INT||de.gpuType===Rd;if(de.isInterleavedBufferAttribute){const _e=de.data,Le=_e.stride,ze=de.offset;if(_e.isInstancedInterleavedBuffer){for(let $e=0;$e<B.locationSize;$e++)g(B.location+$e,_e.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let $e=0;$e<B.locationSize;$e++)_(B.location+$e);s.bindBuffer(s.ARRAY_BUFFER,be);for(let $e=0;$e<B.locationSize;$e++)R(B.location+$e,I/B.locationSize,Z,le,Le*ce,(ze+I/B.locationSize*$e)*ce,xe)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)g(B.location+_e,de.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<B.locationSize;_e++)_(B.location+_e);s.bindBuffer(s.ARRAY_BUFFER,be);for(let _e=0;_e<B.locationSize;_e++)R(B.location+_e,I/B.locationSize,Z,le,I*ce,I/B.locationSize*_e*ce,xe)}}else if(ie!==void 0){const le=ie[ae];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(B.location,le);break;case 3:s.vertexAttrib3fv(B.location,le);break;case 4:s.vertexAttrib4fv(B.location,le);break;default:s.vertexAttrib1fv(B.location,le)}}}}P()}function q(){$();for(const C in r){const H=r[C];for(const ue in H){const W=H[ue];for(const Q in W)v(W[Q].object),delete W[Q];delete H[ue]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const ue in H){const W=H[ue];for(const Q in W)v(W[Q].object),delete W[Q];delete H[ue]}delete r[C.id]}function U(C){for(const H in r){const ue=r[H];if(ue[C.id]===void 0)continue;const W=ue[C.id];for(const Q in W)v(W[Q].object),delete W[Q];delete ue[C.id]}}function $(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:b,dispose:q,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:_,disableUnusedAttributes:P}}function By(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,y){y!==0&&(s.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function d(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let S=0;for(let w=0;w<y;w++)S+=v[w];n.update(S,r,1)}function p(m,v,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let w=0;for(let E=0;E<y;E++)w+=v[E];for(let E=0;E<x.length;E++)n.update(w,r,x[E])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Hy(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(O){return!(O!==ri&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const U=O===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Li&&!U)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,q=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:g,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:L,maxSamples:q}}function Vy(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new zr,d=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=v(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,E=y.clipIntersection,_=y.clipShadows,g=s.get(y);if(!a||w===null||w.length===0||u&&!_)u?v(null):m();else{const P=u?0:r,R=P*4;let L=g.clippingState||null;p.value=L,L=v(w,x,R,S);for(let q=0;q!==R;++q)L[q]=n[q];g.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,S,w){const E=y!==null?y.length:0;let _=null;if(E!==0){if(_=p.value,w!==!0||_===null){const g=S+E*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,L=S;R!==E;++R,L+=4)f.copy(y[R]).applyMatrix4(P,d),f.normal.toArray(_,L),_[L+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function Gy(s){let e=new WeakMap;function n(f,d){return d===Yc?f.mapping=ks:d===qc&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Yc||d===qc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ev(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Wy extends Om{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Bp=[.125,.215,.35,.446,.526,.582],Vr=20,kc=new Wy,Hp=new Tt;let zc=null,Bc=0,Hc=0,Vc=!1;const Br=(1+Math.sqrt(5))/2,Ns=1/Br,Vp=[new se(-Br,Ns,0),new se(Br,Ns,0),new se(-Ns,0,Br),new se(Ns,0,Br),new se(0,Br,-Ns),new se(0,Br,Ns),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:No,format:ri,colorSpace:vr,depthBuffer:!1},a=Wp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(u)),this._blurMaterial=jy(u,e,n)}return a}_compileMaterial(e){const n=new Ni(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a){const d=new Xn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(Hp),v.toneMapping=mr,v.autoClear=!1;const S=new Nm({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),w=new Ni(new ko,S);let E=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,E=!0):(S.color.copy(Hp),E=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):P===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const R=this._cubeSize;fl(a,P*R,g>2?R:0,R,R),v.setRenderTarget(a),E&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Vp[(a-u-1)%Vp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Ni(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),E=u/w,_=isFinite(u)?1+Math.floor(v*E):Vr;_>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vr}`);const g=[];let P=0;for(let U=0;U<Vr;++U){const $=U/E,b=Math.exp(-$*$/2);g.push(b),U===0?P+=b:U<_&&(P+=2*b)}for(let U=0;U<g.length;U++)g[U]=g[U]/P;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:R}=this;x.dTheta.value=w,x.mipInt.value=R-r;const L=this._sizeLods[a],q=3*L*(a>R-Is?a-R+Is:0),O=4*(this._cubeSize-L);fl(n,q,O,3*L,2*L),p.setRenderTarget(n),p.render(y,kc)}}function Xy(s){const e=[],n=[],r=[];let a=s;const u=s-Is+1+Bp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Is?p=Bp[f-s+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,E=3,_=2,g=1,P=new Float32Array(E*w*S),R=new Float32Array(_*w*S),L=new Float32Array(g*w*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,$=O>2?0:-1,b=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];P.set(b,E*w*O),R.set(x,_*w*O);const C=[O,O,O,O,O,O];L.set(C,g*w*O)}const q=new Fi;q.setAttribute("position",new si(P,E)),q.setAttribute("uv",new si(R,_)),q.setAttribute("faceIndex",new si(L,g)),e.push(q),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Wp(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function jy(s,e,n){const r=new Float32Array(Vr),a=new se(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Xp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function jp(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Yc||p===qc,v=p===ks||p===zs;if(m||v){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Gp(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new Gp(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function qy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Cm("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function $y(s,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const E=x.morphAttributes[w];for(let _=0,g=E.length;_<g;_++)e.remove(E[_])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const E=S[w];for(let _=0,g=E.length;_<g;_++)e.update(E[_],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let E=0;if(S!==null){const P=S.array;E=S.version;for(let R=0,L=P.length;R<L;R+=3){const q=P[R+0],O=P[R+1],U=P[R+2];x.push(q,O,O,U,U,q)}}else if(w!==void 0){const P=w.array;E=w.version;for(let R=0,L=P.length/3-1;R<L;R+=3){const q=R+0,O=R+1,U=R+2;x.push(q,O,O,U,U,q)}}else return;const _=new(Am(x)?Um:Im)(x,1);_.version=E;const g=u.get(y);g&&e.remove(g),u.set(y,_)}function v(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:v}}function Ky(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let _=0;for(let g=0;g<w;g++)_+=S[g];n.update(_,r,1)}function y(x,S,w,E){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],E[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,E,0,w);let g=0;for(let P=0;P<w;P++)g+=S[P];for(let P=0;P<E.length;P++)n.update(g,r,E[P])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function Zy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Qy(s,e,n){const r=new WeakMap,a=new nn;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let C=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),E===!0&&(L=2),_===!0&&(L=3);let q=d.attributes.position.count*L,O=1;q>e.maxTextureSize&&(O=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*O*4*y),$=new Pm(U,q,O,y);$.type=Li,$.needsUpdate=!0;const b=L*4;for(let H=0;H<y;H++){const ue=g[H],W=P[H],Q=R[H],ee=q*O*4*H;for(let ie=0;ie<ue.count;ie++){const ae=ie*b;w===!0&&(a.fromBufferAttribute(ue,ie),U[ee+ae+0]=a.x,U[ee+ae+1]=a.y,U[ee+ae+2]=a.z,U[ee+ae+3]=0),E===!0&&(a.fromBufferAttribute(W,ie),U[ee+ae+4]=a.x,U[ee+ae+5]=a.y,U[ee+ae+6]=a.z,U[ee+ae+7]=0),_===!0&&(a.fromBufferAttribute(Q,ie),U[ee+ae+8]=a.x,U[ee+ae+9]=a.y,U[ee+ae+10]=a.z,U[ee+ae+11]=Q.itemSize===4?a.w:1)}}x={count:y,texture:$,size:new yt(q,O)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const E=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function Jy(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,y=e.get(p,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Hm extends An{constructor(e,n,r,a,u,f,d,p,m,v=Fs){if(v!==Fs&&v!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Fs&&(r=jr),r===void 0&&v===Hs&&(r=Bs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:jn,this.minFilter=p!==void 0?p:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vm=new An,Yp=new Hm(1,1),Gm=new Pm,Wm=new k_,Xm=new km,qp=[],$p=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function Ws(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=qp[a];if(u===void 0&&(u=new Float32Array(a),qp[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function qt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function $t(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Nl(s,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function eS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function tS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2fv(this.addr,e),$t(n,e)}}function nS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;s.uniform3fv(this.addr,e),$t(n,e)}}function iS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4fv(this.addr,e),$t(n,e)}}function rS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;Qp.set(r),s.uniformMatrix2fv(this.addr,!1,Qp),$t(n,r)}}function sS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;Zp.set(r),s.uniformMatrix3fv(this.addr,!1,Zp),$t(n,r)}}function oS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;Kp.set(r),s.uniformMatrix4fv(this.addr,!1,Kp),$t(n,r)}}function aS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2iv(this.addr,e),$t(n,e)}}function uS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;s.uniform3iv(this.addr,e),$t(n,e)}}function cS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4iv(this.addr,e),$t(n,e)}}function dS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function fS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2uiv(this.addr,e),$t(n,e)}}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;s.uniform3uiv(this.addr,e),$t(n,e)}}function pS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4uiv(this.addr,e),$t(n,e)}}function mS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Yp.compareFunction=wm,u=Yp):u=Vm,n.setTexture2D(e||u,a)}function gS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Wm,a)}function _S(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Xm,a)}function vS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Gm,a)}function xS(s){switch(s){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return lS;case 35668:case 35672:return uS;case 35669:case 35673:return cS;case 5125:return dS;case 36294:return fS;case 36295:return hS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}function yS(s,e){s.uniform1fv(this.addr,e)}function SS(s,e){const n=Ws(e,this.size,2);s.uniform2fv(this.addr,n)}function MS(s,e){const n=Ws(e,this.size,3);s.uniform3fv(this.addr,n)}function ES(s,e){const n=Ws(e,this.size,4);s.uniform4fv(this.addr,n)}function TS(s,e){const n=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wS(s,e){const n=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function AS(s,e){const n=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function CS(s,e){s.uniform1iv(this.addr,e)}function RS(s,e){s.uniform2iv(this.addr,e)}function PS(s,e){s.uniform3iv(this.addr,e)}function bS(s,e){s.uniform4iv(this.addr,e)}function LS(s,e){s.uniform1uiv(this.addr,e)}function DS(s,e){s.uniform2uiv(this.addr,e)}function NS(s,e){s.uniform3uiv(this.addr,e)}function IS(s,e){s.uniform4uiv(this.addr,e)}function US(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Vm,u[f])}function FS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Wm,u[f])}function OS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Xm,u[f])}function kS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Gm,u[f])}function zS(s){switch(s){case 5126:return yS;case 35664:return SS;case 35665:return MS;case 35666:return ES;case 35674:return TS;case 35675:return wS;case 35676:return AS;case 5124:case 35670:return CS;case 35667:case 35671:return RS;case 35668:case 35672:return PS;case 35669:case 35673:return bS;case 5125:return LS;case 36294:return DS;case 36295:return NS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return kS}}class BS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=xS(n.type)}}class HS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zS(n.type)}}class VS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Jp(s,e){s.seq.push(e),s.map[e.id]=e}function GS(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),f=Gc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Jp(n,m===void 0?new BS(d,s,e):new HS(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new VS(d),Jp(n,y)),n=y}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);GS(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const WS=37297;let XS=0;function jS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function YS(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===Al&&n===wl?r="LinearDisplayP3ToLinearSRGB":e===wl&&n===Al&&(r="LinearSRGBToLinearDisplayP3"),s){case vr:case bl:return[r,"LinearTransferOETF"];case ci:case Id:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+jS(s.getShaderSource(e),f)}else return a}function qS(s,e){const n=YS(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $S(s,e){let n;switch(e){case d_:n="Linear";break;case f_:n="Reinhard";break;case h_:n="OptimizedCineon";break;case p_:n="ACESFilmic";break;case g_:n="AgX";break;case __:n="Neutral";break;case m_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function KS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function ZS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function QS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Lo(s){return s!==""}function nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(JS,tM)}const eM=new Map;function tM(s,e){let n=at[e];if(n===void 0){const r=eM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(s){return s.replace(nM,iM)}function iM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function sm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case zs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function lM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function uM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=rM(n),m=sM(n),v=oM(n),y=aM(n),x=lM(n),S=KS(n),w=ZS(u),E=a.createProgram();let _,g,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(_=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?at.tonemapping_pars_fragment:"",n.toneMapping!==mr?$S("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,qS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),f=Td(f),f=nm(f,n),f=im(f,n),d=Td(d),d=nm(d,n),d=im(d,n),f=rm(f),d=rm(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=P+_+f,L=P+g+d,q=em(a,a.VERTEX_SHADER,R),O=em(a,a.FRAGMENT_SHADER,L);a.attachShader(E,q),a.attachShader(E,O),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function U(H){if(s.debug.checkShaderErrors){const ue=a.getProgramInfoLog(E).trim(),W=a.getShaderInfoLog(q).trim(),Q=a.getShaderInfoLog(O).trim();let ee=!0,ie=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,q,O);else{const ae=tm(a,q,"vertex"),B=tm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ue+`
`+ae+`
`+B)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(W===""||Q==="")&&(ie=!1);ie&&(H.diagnostics={runnable:ee,programLog:ue,vertexShader:{log:W,prefix:_},fragmentShader:{log:Q,prefix:g}})}a.deleteShader(q),a.deleteShader(O),$=new Ml(a,E),b=QS(a,E)}let $;this.getUniforms=function(){return $===void 0&&U(this),$};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(E,WS)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=q,this.fragmentShader=O,this}let cM=0;class dM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new fM(e),n.set(e,r)),r}}class fM{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}}function hM(s,e,n,r,a,u,f){const d=new Lm,p=new dM,m=new Set,v=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function _(b,C,H,ue,W){const Q=ue.fog,ee=W.geometry,ie=b.isMeshStandardMaterial?ue.environment:null,ae=(b.isMeshStandardMaterial?n:e).get(b.envMap||ie),B=ae&&ae.mapping===Pl?ae.image.height:null,de=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=le!==void 0?le.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let be,Z,ce,xe;if(de){const mt=di[de];be=mt.vertexShader,Z=mt.fragmentShader}else be=b.vertexShader,Z=b.fragmentShader,p.update(b),ce=p.getVertexShaderID(b),xe=p.getFragmentShaderID(b);const _e=s.getRenderTarget(),Le=W.isInstancedMesh===!0,ze=W.isBatchedMesh===!0,$e=!!b.map,wt=!!b.matcap,k=!!ae,Pt=!!b.aoMap,pt=!!b.lightMap,xt=!!b.bumpMap,We=!!b.normalMap,It=!!b.displacementMap,tt=!!b.emissiveMap,nt=!!b.metalnessMap,N=!!b.roughnessMap,T=b.anisotropy>0,re=b.clearcoat>0,ve=b.dispersion>0,Se=b.iridescence>0,me=b.sheen>0,Xe=b.transmission>0,Re=T&&!!b.anisotropyMap,Ue=re&&!!b.clearcoatMap,rt=re&&!!b.clearcoatNormalMap,Me=re&&!!b.clearcoatRoughnessMap,De=Se&&!!b.iridescenceMap,ct=Se&&!!b.iridescenceThicknessMap,Je=me&&!!b.sheenColorMap,Fe=me&&!!b.sheenRoughnessMap,it=!!b.specularMap,st=!!b.specularColorMap,At=!!b.specularIntensityMap,G=Xe&&!!b.transmissionMap,Te=Xe&&!!b.thicknessMap,fe=!!b.gradientMap,he=!!b.alphaMap,we=b.alphaTest>0,Ke=!!b.alphaHash,dt=!!b.extensions;let Ot=mr;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Vt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:be,fragmentShader:Z,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:ze,batchingColor:ze&&W._colorsTexture!==null,instancing:Le,instancingColor:Le&&W.instanceColor!==null,instancingMorph:Le&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:vr,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:wt,envMap:k,envMapMode:k&&ae.mapping,envMapCubeUVHeight:B,aoMap:Pt,lightMap:pt,bumpMap:xt,normalMap:We,displacementMap:x&&It,emissiveMap:tt,normalMapObjectSpace:We&&b.normalMapType===M_,normalMapTangentSpace:We&&b.normalMapType===S_,metalnessMap:nt,roughnessMap:N,anisotropy:T,anisotropyMap:Re,clearcoat:re,clearcoatMap:Ue,clearcoatNormalMap:rt,clearcoatRoughnessMap:Me,dispersion:ve,iridescence:Se,iridescenceMap:De,iridescenceThicknessMap:ct,sheen:me,sheenColorMap:Je,sheenRoughnessMap:Fe,specularMap:it,specularColorMap:st,specularIntensityMap:At,transmission:Xe,transmissionMap:G,thicknessMap:Te,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Us&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:we,alphaHash:Ke,combine:b.combine,mapUv:$e&&E(b.map.channel),aoMapUv:Pt&&E(b.aoMap.channel),lightMapUv:pt&&E(b.lightMap.channel),bumpMapUv:xt&&E(b.bumpMap.channel),normalMapUv:We&&E(b.normalMap.channel),displacementMapUv:It&&E(b.displacementMap.channel),emissiveMapUv:tt&&E(b.emissiveMap.channel),metalnessMapUv:nt&&E(b.metalnessMap.channel),roughnessMapUv:N&&E(b.roughnessMap.channel),anisotropyMapUv:Re&&E(b.anisotropyMap.channel),clearcoatMapUv:Ue&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(b.sheenRoughnessMap.channel),specularMapUv:it&&E(b.specularMap.channel),specularColorMapUv:st&&E(b.specularColorMap.channel),specularIntensityMapUv:At&&E(b.specularIntensityMap.channel),transmissionMapUv:G&&E(b.transmissionMap.channel),thicknessMapUv:Te&&E(b.thicknessMap.channel),alphaMapUv:he&&E(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(We||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ee.attributes.uv&&($e||he),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:W.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Et.getTransfer(b.map.colorSpace)===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bi,flipSided:b.side===wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:dt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&b.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function g(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)C.push(H),C.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(P(C,b),R(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function P(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function R(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.skinning&&d.enable(4),C.morphTargets&&d.enable(5),C.morphNormals&&d.enable(6),C.morphColors&&d.enable(7),C.premultipliedAlpha&&d.enable(8),C.shadowMapEnabled&&d.enable(9),C.doubleSided&&d.enable(10),C.flipSided&&d.enable(11),C.useDepthPacking&&d.enable(12),C.dithering&&d.enable(13),C.transmission&&d.enable(14),C.sheen&&d.enable(15),C.opaque&&d.enable(16),C.pointsUvs&&d.enable(17),C.decodeVideoTexture&&d.enable(18),C.alphaToCoverage&&d.enable(19),b.push(d.mask)}function L(b){const C=w[b.type];let H;if(C){const ue=di[C];H=K_.clone(ue.uniforms)}else H=b.uniforms;return H}function q(b,C){let H;for(let ue=0,W=v.length;ue<W;ue++){const Q=v[ue];if(Q.cacheKey===C){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new uM(s,C,b,u),v.push(H)),H}function O(b){if(--b.usedTimes===0){const C=v.indexOf(b);v[C]=v[v.length-1],v.pop(),b.destroy()}}function U(b){p.remove(b)}function $(){p.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:L,acquireProgram:q,releaseProgram:O,releaseShaderCache:U,programs:v,dispose:$}}function pM(){let s=new WeakMap;function e(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function n(u){s.delete(u)}function r(u,f,d){s.get(u)[f]=d}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function mM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function am(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,w,E,_){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:E,group:_},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=y.renderOrder,g.z=E,g.group=_),e++,g}function d(y,x,S,w,E,_){const g=f(y,x,S,w,E,_);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(y,x,S,w,E,_){const g=f(y,x,S,w,E,_);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||mM),r.length>1&&r.sort(x||om),a.length>1&&a.sort(x||om)}function v(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function gM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new am,s.set(r,[f])):a>=u.length?(f=new am,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function _M(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Tt};break;case"SpotLight":n={position:new se,direction:new se,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=n,n}}}function vM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let xM=0;function yM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SM(s){const e=new _M,n=vM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const a=new se,u=new Xt,f=new Xt;function d(m){let v=0,y=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,E=0,_=0,g=0,P=0,R=0,L=0,q=0,O=0,U=0;m.sort(yM);for(let b=0,C=m.length;b<C;b++){const H=m[b],ue=H.color,W=H.intensity,Q=H.distance,ee=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ue.r*W,y+=ue.g*W,x+=ue.b*W;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(H.sh.coefficients[ie],W);U++}else if(H.isDirectionalLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ae=H.shadow,B=n.get(H);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=H.shadow.matrix,P++}r.directional[S]=ie,S++}else if(H.isSpotLight){const ie=e.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(ue).multiplyScalar(W),ie.distance=Q,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,r.spot[E]=ie;const ae=H.shadow;if(H.map&&(r.spotLightMap[q]=H.map,q++,ae.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[E]=ae.matrix,H.castShadow){const B=n.get(H);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,r.spotShadow[E]=B,r.spotShadowMap[E]=ee,L++}E++}else if(H.isRectAreaLight){const ie=e.get(H);ie.color.copy(ue).multiplyScalar(W),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=ie,_++}else if(H.isPointLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const ae=H.shadow,B=n.get(H);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,B.shadowCameraNear=ae.camera.near,B.shadowCameraFar=ae.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ee,r.pointShadowMatrix[w]=H.shadow.matrix,R++}r.point[w]=ie,w++}else if(H.isHemisphereLight){const ie=e.get(H);ie.skyColor.copy(H.color).multiplyScalar(W),ie.groundColor.copy(H.groundColor).multiplyScalar(W),r.hemi[g]=ie,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const $=r.hash;($.directionalLength!==S||$.pointLength!==w||$.spotLength!==E||$.rectAreaLength!==_||$.hemiLength!==g||$.numDirectionalShadows!==P||$.numPointShadows!==R||$.numSpotShadows!==L||$.numSpotMaps!==q||$.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+q-O,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,$.directionalLength=S,$.pointLength=w,$.spotLength=E,$.rectAreaLength=_,$.hemiLength=g,$.numDirectionalShadows=P,$.numPointShadows=R,$.numSpotShadows=L,$.numSpotMaps=q,$.numLightProbes=U,r.version=xM++)}function p(m,v){let y=0,x=0,S=0,w=0,E=0;const _=v.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const R=m[g];if(R.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(_),y++}else if(R.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(_),S++}else if(R.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),f.identity(),u.copy(R.matrixWorld),u.premultiply(_),f.extractRotation(u),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),w++}else if(R.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),x++}else if(R.isHemisphereLight){const L=r.hemi[E];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(_),E++}}}return{setup:d,setupView:p,state:r}}function lm(s){const e=new SM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function MM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new lm(s),e.set(a,[d])):u>=f.length?(d=new lm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class EM extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CM(s,e,n){let r=new zm;const a=new yt,u=new yt,f=new nn,d=new EM({depthPacking:y_}),p=new TM,m={},v=n.maxTextureSize,y={[gr]:wn,[wn]:gr,[bi]:bi},x=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:wM,fragmentShader:AM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Fi;w.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ni(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let g=this.type;this.render=function(O,U,$){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(pr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const W=g!==Pi&&this.type===Pi,Q=g===Pi&&this.type!==Pi;for(let ee=0,ie=O.length;ee<ie;ee++){const ae=O[ee],B=ae.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const de=B.getFrameExtents();if(a.multiply(de),u.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/de.x),a.x=u.x*de.x,B.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/de.y),a.y=u.y*de.y,B.mapSize.y=u.y)),B.map===null||W===!0||Q===!0){const I=this.type!==Pi?{minFilter:jn,magFilter:jn}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(a.x,a.y,I),B.map.texture.name=ae.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const le=B.getViewportCount();for(let I=0;I<le;I++){const oe=B.getViewport(I);f.set(u.x*oe.x,u.y*oe.y,u.x*oe.z,u.y*oe.w),ue.viewport(f),B.updateMatrices(ae,I),r=B.getFrustum(),L(U,$,B.camera,ae,this.type)}B.isPointLightShadow!==!0&&this.type===Pi&&P(B,$),B.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(b,C,H)};function P(O,U){const $=e.update(E);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,$,x,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,$,S,E,null)}function R(O,U,$,b){let C=null;const H=$.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)C=H;else if(C=$.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ue=C.uuid,W=U.uuid;let Q=m[ue];Q===void 0&&(Q={},m[ue]=Q);let ee=Q[W];ee===void 0&&(ee=C.clone(),Q[W]=ee,U.addEventListener("dispose",q)),C=ee}if(C.visible=U.visible,C.wireframe=U.wireframe,b===Pi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:y[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=$}return C}function L(O,U,$,b,C){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Pi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,O.matrixWorld);const W=e.update(O),Q=O.material;if(Array.isArray(Q)){const ee=W.groups;for(let ie=0,ae=ee.length;ie<ae;ie++){const B=ee[ie],de=Q[B.materialIndex];if(de&&de.visible){const le=R(O,de,b,C);O.onBeforeShadow(s,O,U,$,W,le,B),s.renderBufferDirect($,null,W,le,O,B),O.onAfterShadow(s,O,U,$,W,le,B)}}}else if(Q.visible){const ee=R(O,Q,b,C);O.onBeforeShadow(s,O,U,$,W,ee,null),s.renderBufferDirect($,null,W,ee,O,null),O.onAfterShadow(s,O,U,$,W,ee,null)}}const ue=O.children;for(let W=0,Q=ue.length;W<Q;W++)L(ue[W],U,$,b,C)}function q(O){O.target.removeEventListener("dispose",q);for(const $ in m){const b=m[$],C=O.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function RM(s){function e(){let G=!1;const Te=new nn;let fe=null;const he=new nn(0,0,0,0);return{setMask:function(we){fe!==we&&!G&&(s.colorMask(we,we,we,we),fe=we)},setLocked:function(we){G=we},setClear:function(we,Ke,dt,Ot,Vt){Vt===!0&&(we*=Ot,Ke*=Ot,dt*=Ot),Te.set(we,Ke,dt,Ot),he.equals(Te)===!1&&(s.clearColor(we,Ke,dt,Ot),he.copy(Te))},reset:function(){G=!1,fe=null,he.set(-1,0,0,0)}}}function n(){let G=!1,Te=null,fe=null,he=null;return{setTest:function(we){we?xe(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(we){Te!==we&&!G&&(s.depthMask(we),Te=we)},setFunc:function(we){if(fe!==we){switch(we){case n_:s.depthFunc(s.NEVER);break;case i_:s.depthFunc(s.ALWAYS);break;case r_:s.depthFunc(s.LESS);break;case El:s.depthFunc(s.LEQUAL);break;case s_:s.depthFunc(s.EQUAL);break;case o_:s.depthFunc(s.GEQUAL);break;case a_:s.depthFunc(s.GREATER);break;case l_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=we}},setLocked:function(we){G=we},setClear:function(we){he!==we&&(s.clearDepth(we),he=we)},reset:function(){G=!1,Te=null,fe=null,he=null}}}function r(){let G=!1,Te=null,fe=null,he=null,we=null,Ke=null,dt=null,Ot=null,Vt=null;return{setTest:function(mt){G||(mt?xe(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!G&&(s.stencilMask(mt),Te=mt)},setFunc:function(mt,Rn,Pn){(fe!==mt||he!==Rn||we!==Pn)&&(s.stencilFunc(mt,Rn,Pn),fe=mt,he=Rn,we=Pn)},setOp:function(mt,Rn,Pn){(Ke!==mt||dt!==Rn||Ot!==Pn)&&(s.stencilOp(mt,Rn,Pn),Ke=mt,dt=Rn,Ot=Pn)},setLocked:function(mt){G=mt},setClear:function(mt){Vt!==mt&&(s.clearStencil(mt),Vt=mt)},reset:function(){G=!1,Te=null,fe=null,he=null,we=null,Ke=null,dt=null,Ot=null,Vt=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,x=[],S=null,w=!1,E=null,_=null,g=null,P=null,R=null,L=null,q=null,O=new Tt(0,0,0),U=0,$=!1,b=null,C=null,H=null,ue=null,W=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ie=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ee=ie>=1):ae.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ee=ie>=2);let B=null,de={};const le=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),oe=new nn().fromArray(le),be=new nn().fromArray(I);function Z(G,Te,fe,he){const we=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(G,Ke),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<fe;dt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Te+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Ke}const ce={};ce[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),u.setFunc(El),xt(!1),We(pp),xe(s.CULL_FACE),Pt(pr);function xe(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function _e(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Le(G,Te){return v[G]!==Te?(s.bindFramebuffer(G,Te),v[G]=Te,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function ze(G,Te){let fe=x,he=!1;if(G){fe=y.get(Te),fe===void 0&&(fe=[],y.set(Te,fe));const we=G.textures;if(fe.length!==we.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,dt=we.length;Ke<dt;Ke++)fe[Ke]=s.COLOR_ATTACHMENT0+Ke;fe.length=we.length,he=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,he=!0);he&&s.drawBuffers(fe)}function $e(G){return S!==G?(s.useProgram(G),S=G,!0):!1}const wt={[Hr]:s.FUNC_ADD,[z0]:s.FUNC_SUBTRACT,[B0]:s.FUNC_REVERSE_SUBTRACT};wt[H0]=s.MIN,wt[V0]=s.MAX;const k={[G0]:s.ZERO,[W0]:s.ONE,[X0]:s.SRC_COLOR,[Xc]:s.SRC_ALPHA,[Z0]:s.SRC_ALPHA_SATURATE,[$0]:s.DST_COLOR,[Y0]:s.DST_ALPHA,[j0]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[K0]:s.ONE_MINUS_DST_COLOR,[q0]:s.ONE_MINUS_DST_ALPHA,[Q0]:s.CONSTANT_COLOR,[J0]:s.ONE_MINUS_CONSTANT_COLOR,[e_]:s.CONSTANT_ALPHA,[t_]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(G,Te,fe,he,we,Ke,dt,Ot,Vt,mt){if(G===pr){w===!0&&(_e(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),G!==k0){if(G!==E||mt!==$){if((_!==Hr||R!==Hr)&&(s.blendEquation(s.FUNC_ADD),_=Hr,R=Hr),mt)switch(G){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.ONE,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}g=null,P=null,L=null,q=null,O.set(0,0,0),U=0,E=G,$=mt}return}we=we||Te,Ke=Ke||fe,dt=dt||he,(Te!==_||we!==R)&&(s.blendEquationSeparate(wt[Te],wt[we]),_=Te,R=we),(fe!==g||he!==P||Ke!==L||dt!==q)&&(s.blendFuncSeparate(k[fe],k[he],k[Ke],k[dt]),g=fe,P=he,L=Ke,q=dt),(Ot.equals(O)===!1||Vt!==U)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Vt),O.copy(Ot),U=Vt),E=G,$=!1}function pt(G,Te){G.side===bi?_e(s.CULL_FACE):xe(s.CULL_FACE);let fe=G.side===wn;Te&&(fe=!fe),xt(fe),G.blending===Us&&G.transparent===!1?Pt(pr):Pt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const he=G.stencilWrite;f.setTest(he),he&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){b!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),b=G)}function We(G){G!==U0?(xe(s.CULL_FACE),G!==C&&(G===pp?s.cullFace(s.BACK):G===F0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),C=G}function It(G){G!==H&&(ee&&s.lineWidth(G),H=G)}function tt(G,Te,fe){G?(xe(s.POLYGON_OFFSET_FILL),(ue!==Te||W!==fe)&&(s.polygonOffset(Te,fe),ue=Te,W=fe)):_e(s.POLYGON_OFFSET_FILL)}function nt(G){G?xe(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function N(G){G===void 0&&(G=s.TEXTURE0+Q-1),B!==G&&(s.activeTexture(G),B=G)}function T(G,Te,fe){fe===void 0&&(B===null?fe=s.TEXTURE0+Q-1:fe=B);let he=de[fe];he===void 0&&(he={type:void 0,texture:void 0},de[fe]=he),(he.type!==G||he.texture!==Te)&&(B!==fe&&(s.activeTexture(fe),B=fe),s.bindTexture(G,Te||ce[G]),he.type=G,he.texture=Te)}function re(){const G=de[B];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){oe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),oe.copy(G))}function Fe(G){be.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function it(G,Te){let fe=p.get(Te);fe===void 0&&(fe=new WeakMap,p.set(Te,fe));let he=fe.get(G);he===void 0&&(he=s.getUniformBlockIndex(Te,G.name),fe.set(G,he))}function st(G,Te){const he=p.get(Te).get(G);d.get(Te)!==he&&(s.uniformBlockBinding(Te,he,G.__bindingPointIndex),d.set(Te,he))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},B=null,de={},v={},y=new WeakMap,x=[],S=null,w=!1,E=null,_=null,g=null,P=null,R=null,L=null,q=null,O=new Tt(0,0,0),U=0,$=!1,b=null,C=null,H=null,ue=null,W=null,oe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:xe,disable:_e,bindFramebuffer:Le,drawBuffers:ze,useProgram:$e,setBlending:Pt,setMaterial:pt,setFlipSided:xt,setCullFace:We,setLineWidth:It,setPolygonOffset:tt,setScissorTest:nt,activeTexture:N,bindTexture:T,unbindTexture:re,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:De,texImage3D:ct,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:Me,texSubImage2D:me,texSubImage3D:Xe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:Je,viewport:Fe,reset:At}}function um(s,e,n,r){const a=PM(r);switch(n){case vm:return s*e;case ym:return s*e;case Sm:return s*e*2;case Mm:return s*e/a.components*a.byteLength;case Ld:return s*e/a.components*a.byteLength;case Em:return s*e*2/a.components*a.byteLength;case Dd:return s*e*2/a.components*a.byteLength;case xm:return s*e*3/a.components*a.byteLength;case ri:return s*e*4/a.components*a.byteLength;case Nd:return s*e*4/a.components*a.byteLength;case _l:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qc:case ed:return Math.max(s,16)*Math.max(e,8)/4;case Zc:case Jc:return Math.max(s,8)*Math.max(e,8)/2;case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ad:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case vd:case xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tm:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PM(s){switch(s){case Ii:case mm:return{byteLength:1,components:1};case Do:case gm:case No:return{byteLength:2,components:1};case Pd:case bd:return{byteLength:2,components:4};case jr:case Rd:case Li:return{byteLength:4,components:1};case _m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,v=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,T){return S?new OffscreenCanvas(N,T):Rl("canvas")}function E(N,T,re){let ve=1;const Se=nt(N);if((Se.width>re||Se.height>re)&&(ve=re/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(ve*Se.width),Xe=Math.floor(ve*Se.height);y===void 0&&(y=w(me,Xe));const Re=T?w(me,Xe):y;return Re.width=me,Re.height=Xe,Re.getContext("2d").drawImage(N,0,0,me,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+me+"x"+Xe+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function _(N){return N.generateMipmaps&&N.minFilter!==jn&&N.minFilter!==ii}function g(N){s.generateMipmap(N)}function P(N,T,re,ve,Se=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=T;if(T===s.RED&&(re===s.FLOAT&&(me=s.R32F),re===s.HALF_FLOAT&&(me=s.R16F),re===s.UNSIGNED_BYTE&&(me=s.R8)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(me=s.R8UI),re===s.UNSIGNED_SHORT&&(me=s.R16UI),re===s.UNSIGNED_INT&&(me=s.R32UI),re===s.BYTE&&(me=s.R8I),re===s.SHORT&&(me=s.R16I),re===s.INT&&(me=s.R32I)),T===s.RG&&(re===s.FLOAT&&(me=s.RG32F),re===s.HALF_FLOAT&&(me=s.RG16F),re===s.UNSIGNED_BYTE&&(me=s.RG8)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(me=s.RG8UI),re===s.UNSIGNED_SHORT&&(me=s.RG16UI),re===s.UNSIGNED_INT&&(me=s.RG32UI),re===s.BYTE&&(me=s.RG8I),re===s.SHORT&&(me=s.RG16I),re===s.INT&&(me=s.RG32I)),T===s.RGB&&re===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),T===s.RGBA){const Xe=Se?Tl:Et.getTransfer(ve);re===s.FLOAT&&(me=s.RGBA32F),re===s.HALF_FLOAT&&(me=s.RGBA16F),re===s.UNSIGNED_BYTE&&(me=Xe===Nt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function R(N,T){let re;return N?T===null||T===jr||T===Bs?re=s.DEPTH24_STENCIL8:T===Li?re=s.DEPTH32F_STENCIL8:T===Do&&(re=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Bs?re=s.DEPTH_COMPONENT24:T===Li?re=s.DEPTH_COMPONENT32F:T===Do&&(re=s.DEPTH_COMPONENT16),re}function L(N,T){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==jn&&N.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function q(N){const T=N.target;T.removeEventListener("dispose",q),U(T),T.isVideoTexture&&v.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),b(T)}function U(N){const T=r.get(N);if(T.__webglInit===void 0)return;const re=N.source,ve=x.get(re);if(ve){const Se=ve[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&$(N),Object.keys(ve).length===0&&x.delete(re)}r.remove(N)}function $(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const re=N.source,ve=x.get(re);delete ve[T.__cacheKey],f.memory.textures--}function b(N){const T=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Se=0;Se<T.__webglFramebuffer[ve].length;Se++)s.deleteFramebuffer(T.__webglFramebuffer[ve][Se]);else s.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ve]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=N.textures;for(let ve=0,Se=re.length;ve<Se;ve++){const me=r.get(re[ve]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(re[ve])}r.remove(N)}let C=0;function H(){C=0}function ue(){const N=C;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),C+=1,N}function W(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function Q(N,T){const re=r.get(N);if(N.isVideoTexture&&It(N),N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(re,N,T);return}}n.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function ee(N,T){const re=r.get(N);if(N.version>0&&re.__version!==N.version){be(re,N,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function ie(N,T){const re=r.get(N);if(N.version>0&&re.__version!==N.version){be(re,N,T);return}n.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function ae(N,T){const re=r.get(N);if(N.version>0&&re.__version!==N.version){Z(re,N,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const B={[$c]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[Kc]:s.MIRRORED_REPEAT},de={[jn]:s.NEAREST,[v_]:s.NEAREST_MIPMAP_NEAREST,[Xa]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[_c]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},le={[E_]:s.NEVER,[P_]:s.ALWAYS,[T_]:s.LESS,[wm]:s.LEQUAL,[w_]:s.EQUAL,[R_]:s.GEQUAL,[A_]:s.GREATER,[C_]:s.NOTEQUAL};function I(N,T){if(T.type===Li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===_c||T.magFilter===Xa||T.magFilter===Wr||T.minFilter===ii||T.minFilter===_c||T.minFilter===Xa||T.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,B[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,B[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,B[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,de[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jn||T.minFilter!==Xa&&T.minFilter!==Wr||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function oe(N,T){let re=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",q));const ve=T.source;let Se=x.get(ve);Se===void 0&&(Se={},x.set(ve,Se));const me=W(T);if(me!==N.__cacheKey){Se[me]===void 0&&(Se[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,re=!0),Se[me].usedTimes++;const Xe=Se[N.__cacheKey];Xe!==void 0&&(Se[N.__cacheKey].usedTimes--,Xe.usedTimes===0&&$(T)),N.__cacheKey=me,N.__webglTexture=Se[me].texture}return re}function be(N,T,re){let ve=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=s.TEXTURE_3D);const Se=oe(N,T),me=T.source;n.bindTexture(ve,N.__webglTexture,s.TEXTURE0+re);const Xe=r.get(me);if(me.version!==Xe.__version||Se===!0){n.activeTexture(s.TEXTURE0+re);const Re=Et.getPrimaries(Et.workingColorSpace),Ue=T.colorSpace===hr?null:Et.getPrimaries(T.colorSpace),rt=T.colorSpace===hr||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=E(T.image,!1,a.maxTextureSize);Me=tt(T,Me);const De=u.convert(T.format,T.colorSpace),ct=u.convert(T.type);let Je=P(T.internalFormat,De,ct,T.colorSpace,T.isVideoTexture);I(ve,T);let Fe;const it=T.mipmaps,st=T.isVideoTexture!==!0,At=Xe.__version===void 0||Se===!0,G=me.dataReady,Te=L(T,Me);if(T.isDepthTexture)Je=R(T.format===Hs,T.type),At&&(st?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,De,ct,null));else if(T.isDataTexture)if(it.length>0){st&&At&&n.texStorage2D(s.TEXTURE_2D,Te,Je,it[0].width,it[0].height);for(let fe=0,he=it.length;fe<he;fe++)Fe=it[fe],st?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Fe.width,Fe.height,De,ct,Fe.data):n.texImage2D(s.TEXTURE_2D,fe,Je,Fe.width,Fe.height,0,De,ct,Fe.data);T.generateMipmaps=!1}else st?(At&&n.texStorage2D(s.TEXTURE_2D,Te,Je,Me.width,Me.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,De,ct,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,De,ct,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Je,it[0].width,it[0].height,Me.depth);for(let fe=0,he=it.length;fe<he;fe++)if(Fe=it[fe],T.format!==ri)if(De!==null)if(st){if(G)if(T.layerUpdates.size>0){const we=um(Fe.width,Fe.height,T.format,T.type);for(const Ke of T.layerUpdates){const dt=Fe.data.subarray(Ke*we/Fe.data.BYTES_PER_ELEMENT,(Ke+1)*we/Fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ke,Fe.width,Fe.height,1,De,dt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Fe.width,Fe.height,Me.depth,De,Fe.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Fe.width,Fe.height,Me.depth,De,ct,Fe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Fe.width,Fe.height,Me.depth,0,De,ct,Fe.data)}else{st&&At&&n.texStorage2D(s.TEXTURE_2D,Te,Je,it[0].width,it[0].height);for(let fe=0,he=it.length;fe<he;fe++)Fe=it[fe],T.format!==ri?De!==null?st?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Fe.width,Fe.height,De,Fe.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Fe.width,Fe.height,De,ct,Fe.data):n.texImage2D(s.TEXTURE_2D,fe,Je,Fe.width,Fe.height,0,De,ct,Fe.data)}else if(T.isDataArrayTexture)if(st){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Je,Me.width,Me.height,Me.depth),G)if(T.layerUpdates.size>0){const fe=um(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const we=Me.data.subarray(he*fe/Me.data.BYTES_PER_ELEMENT,(he+1)*fe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,De,ct,we)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,ct,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,De,ct,Me.data);else if(T.isData3DTexture)st?(At&&n.texStorage3D(s.TEXTURE_3D,Te,Je,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,ct,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,De,ct,Me.data);else if(T.isFramebufferTexture){if(At)if(st)n.texStorage2D(s.TEXTURE_2D,Te,Je,Me.width,Me.height);else{let fe=Me.width,he=Me.height;for(let we=0;we<Te;we++)n.texImage2D(s.TEXTURE_2D,we,Je,fe,he,0,De,ct,null),fe>>=1,he>>=1}}else if(it.length>0){if(st&&At){const fe=nt(it[0]);n.texStorage2D(s.TEXTURE_2D,Te,Je,fe.width,fe.height)}for(let fe=0,he=it.length;fe<he;fe++)Fe=it[fe],st?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,De,ct,Fe):n.texImage2D(s.TEXTURE_2D,fe,Je,De,ct,Fe);T.generateMipmaps=!1}else if(st){if(At){const fe=nt(Me);n.texStorage2D(s.TEXTURE_2D,Te,Je,fe.width,fe.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,ct,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,De,ct,Me);_(T)&&g(ve),Xe.__version=me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Z(N,T,re){if(T.image.length!==6)return;const ve=oe(N,T),Se=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+re);const me=r.get(Se);if(Se.version!==me.__version||ve===!0){n.activeTexture(s.TEXTURE0+re);const Xe=Et.getPrimaries(Et.workingColorSpace),Re=T.colorSpace===hr?null:Et.getPrimaries(T.colorSpace),Ue=T.colorSpace===hr||Xe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!rt&&!Me?De[he]=E(T.image[he],!0,a.maxCubemapSize):De[he]=Me?T.image[he].image:T.image[he],De[he]=tt(T,De[he]);const ct=De[0],Je=u.convert(T.format,T.colorSpace),Fe=u.convert(T.type),it=P(T.internalFormat,Je,Fe,T.colorSpace),st=T.isVideoTexture!==!0,At=me.__version===void 0||ve===!0,G=Se.dataReady;let Te=L(T,ct);I(s.TEXTURE_CUBE_MAP,T);let fe;if(rt){st&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Te,it,ct.width,ct.height);for(let he=0;he<6;he++){fe=De[he].mipmaps;for(let we=0;we<fe.length;we++){const Ke=fe[we];T.format!==ri?Je!==null?st?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,Ke.width,Ke.height,Je,Ke.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,it,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,Ke.width,Ke.height,Je,Fe,Ke.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,it,Ke.width,Ke.height,0,Je,Fe,Ke.data)}}}else{if(fe=T.mipmaps,st&&At){fe.length>0&&Te++;const he=nt(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Te,it,he.width,he.height)}for(let he=0;he<6;he++)if(Me){st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,Je,Fe,De[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,it,De[he].width,De[he].height,0,Je,Fe,De[he].data);for(let we=0;we<fe.length;we++){const dt=fe[we].image[he].image;st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,dt.width,dt.height,Je,Fe,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,it,dt.width,dt.height,0,Je,Fe,dt.data)}}else{st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Fe,De[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,it,Je,Fe,De[he]);for(let we=0;we<fe.length;we++){const Ke=fe[we];st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,Je,Fe,Ke.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,it,Je,Fe,Ke.image[he])}}}_(T)&&g(s.TEXTURE_CUBE_MAP),me.__version=Se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ce(N,T,re,ve,Se,me){const Xe=u.convert(re.format,re.colorSpace),Re=u.convert(re.type),Ue=P(re.internalFormat,Xe,Re,re.colorSpace);if(!r.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>me),De=Math.max(1,T.height>>me);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,me,Ue,Me,De,T.depth,0,Xe,Re,null):n.texImage2D(Se,me,Ue,Me,De,0,Xe,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),We(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Se,r.get(re).__webglTexture,0,xt(T)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Se,r.get(re).__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(N,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ve=T.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,me=R(T.stencilBuffer,Se),Xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=xt(T);We(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,me,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,N)}else{const ve=T.textures;for(let Se=0;Se<ve.length;Se++){const me=ve[Se],Xe=u.convert(me.format,me.colorSpace),Re=u.convert(me.type),Ue=P(me.internalFormat,Xe,Re,me.colorSpace),rt=xt(T);re&&We(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Ue,T.width,T.height):We(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const ve=r.get(T.depthTexture).__webglTexture,Se=xt(T);if(T.depthTexture.format===Fs)We(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Hs)We(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Le(N){const T=r.get(N),re=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");_e(T.__webglFramebuffer,N)}else if(re){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[ve],N,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,N,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(N,T,re){const ve=r.get(N);T!==void 0&&ce(ve.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Le(N)}function $e(N){const T=N.texture,re=r.get(N),ve=r.get(T);N.addEventListener("dispose",O);const Se=N.textures,me=N.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=T.version,f.memory.textures++),me){re.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)re.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else re.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)re.__webglFramebuffer[Re]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Re=0,Ue=Se.length;Re<Ue;Re++){const rt=r.get(Se[Re]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&We(N)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){const Ue=Se[Re];re.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Re]);const rt=u.convert(Ue.format,Ue.colorSpace),Me=u.convert(Ue.type),De=P(Ue.internalFormat,rt,Me,Ue.colorSpace,N.isXRRenderTarget===!0),ct=xt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,De,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,re.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(re.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),I(s.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ce(re.__webglFramebuffer[Re][Ue],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else ce(re.__webglFramebuffer[Re],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Re=0,Ue=Se.length;Re<Ue;Re++){const rt=Se[Re],Me=r.get(rt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),I(s.TEXTURE_2D,rt),ce(re.__webglFramebuffer,N,rt,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),_(rt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,ve.__webglTexture),I(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ce(re.__webglFramebuffer[Ue],N,T,s.COLOR_ATTACHMENT0,Re,Ue);else ce(re.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Re,0);_(T)&&g(Re),n.unbindTexture()}N.depthBuffer&&Le(N)}function wt(N){const T=N.textures;for(let re=0,ve=T.length;re<ve;re++){const Se=T[re];if(_(Se)){const me=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(Se).__webglTexture;n.bindTexture(me,Xe),g(me),n.unbindTexture()}}}const k=[],Pt=[];function pt(N){if(N.samples>0){if(We(N)===!1){const T=N.textures,re=N.width,ve=N.height;let Se=s.COLOR_BUFFER_BIT;const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(N),Re=T.length>1;if(Re)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,re,ve,0,0,re,ve,Se,s.NEAREST),p===!0&&(k.length=0,Pt.length=0,k.push(s.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(k.push(me),Pt.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,rt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function xt(N){return Math.min(a.maxSamples,N.samples)}function We(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(N){const T=f.render.frame;v.get(N)!==T&&(v.set(N,T),N.update())}function tt(N,T){const re=N.colorSpace,ve=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||re!==vr&&re!==hr&&(Et.getTransfer(re)===Nt?(ve!==ri||Se!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),T}function nt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ue,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ze,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=We}function LM(s,e){function n(r,a=hr){let u;const f=Et.getTransfer(a);if(r===Ii)return s.UNSIGNED_BYTE;if(r===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_m)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mm)return s.BYTE;if(r===gm)return s.SHORT;if(r===Do)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===No)return s.HALF_FLOAT;if(r===vm)return s.ALPHA;if(r===xm)return s.RGB;if(r===ri)return s.RGBA;if(r===ym)return s.LUMINANCE;if(r===Sm)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Mm)return s.RED;if(r===Ld)return s.RED_INTEGER;if(r===Em)return s.RG;if(r===Dd)return s.RG_INTEGER;if(r===Nd)return s.RGBA_INTEGER;if(r===_l||r===vl||r===xl||r===yl)if(f===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_l)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_l)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zc||r===Qc||r===Jc||r===ed)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zc)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jc)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===nd||r===id)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===td||r===nd)return f===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===id)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===_d)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ad)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ld)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===md)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gd)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_d)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===vd||r===xd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sl)return f===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tm||r===yd||r===Sd||r===Md)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Md)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class DM extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,r),g=this._getHandJoint(m,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new An,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _r({vertexShader:IM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new Dl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OM extends Gs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,y=null,x=null,S=null,w=null;const E=new FM,_=n.getContextAttributes();let g=null,P=null;const R=[],L=[],q=new yt;let O=null;const U=new Xn;U.layers.enable(1),U.viewport=new nn;const $=new Xn;$.layers.enable(2),$.viewport=new nn;const b=[U,$],C=new DM;C.layers.enable(1),C.layers.enable(2);let H=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=R[Z];return ce===void 0&&(ce=new Wc,R[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=R[Z];return ce===void 0&&(ce=new Wc,R[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=R[Z];return ce===void 0&&(ce=new Wc,R[Z]=ce),ce.getHandSpace()};function W(Z){const ce=L.indexOf(Z.inputSource);if(ce===-1)return;const xe=R[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,m||f),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<R.length;Z++){const ce=L[Z];ce!==null&&(L[Z]=null,R[Z].disconnect(ce))}H=null,ue=null,E.reset(),e.setRenderTarget(g),S=null,x=null,y=null,a=null,P=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Yr(S.framebufferWidth,S.framebufferHeight,{format:ri,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,xe=null,_e=null;_.depth&&(_e=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=_.stencil?Hs:Fs,xe=_.stencil?Bs:jr);const Le={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Le),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Yr(x.textureWidth,x.textureHeight,{format:ri,type:Ii,depthTexture:new Hm(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),be.setContext(a),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(Z){for(let ce=0;ce<Z.removed.length;ce++){const xe=Z.removed[ce],_e=L.indexOf(xe);_e>=0&&(L[_e]=null,R[_e].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){const xe=Z.added[ce];let _e=L.indexOf(xe);if(_e===-1){for(let ze=0;ze<R.length;ze++)if(ze>=L.length){L.push(xe),_e=ze;break}else if(L[ze]===null){L[ze]=xe,_e=ze;break}if(_e===-1)break}const Le=R[_e];Le&&Le.connect(xe)}}const ie=new se,ae=new se;function B(Z,ce,xe){ie.setFromMatrixPosition(ce.matrixWorld),ae.setFromMatrixPosition(xe.matrixWorld);const _e=ie.distanceTo(ae),Le=ce.projectionMatrix.elements,ze=xe.projectionMatrix.elements,$e=Le[14]/(Le[10]-1),wt=Le[14]/(Le[10]+1),k=(Le[9]+1)/Le[5],Pt=(Le[9]-1)/Le[5],pt=(Le[8]-1)/Le[0],xt=(ze[8]+1)/ze[0],We=$e*pt,It=$e*xt,tt=_e/(-pt+xt),nt=tt*-pt;ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(nt),Z.translateZ(tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const N=$e+tt,T=wt+tt,re=We-nt,ve=It+(_e-nt),Se=k*wt/T*N,me=Pt*wt/T*N;Z.projectionMatrix.makePerspective(re,ve,Se,me,N,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function de(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;E.texture!==null&&(Z.near=E.depthNear,Z.far=E.depthFar),C.near=$.near=U.near=Z.near,C.far=$.far=U.far=Z.far,(H!==C.near||ue!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ue=C.far,U.near=H,U.far=ue,$.near=H,$.far=ue,U.updateProjectionMatrix(),$.updateProjectionMatrix(),Z.updateProjectionMatrix());const ce=Z.parent,xe=C.cameras;de(C,ce);for(let _e=0;_e<xe.length;_e++)de(xe[_e],ce);xe.length===2?B(C,U,$):C.projectionMatrix.copy(U.projectionMatrix),le(Z,C,ce)};function le(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ed*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let I=null;function oe(Z,ce){if(v=ce.getViewerPose(m||f),w=ce,v!==null){const xe=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let _e=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let ze=0;ze<xe.length;ze++){const $e=xe[ze];let wt=null;if(S!==null)wt=S.getViewport($e);else{const Pt=y.getViewSubImage(x,$e);wt=Pt.viewport,ze===0&&(e.setRenderTargetTextures(P,Pt.colorTexture,x.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(P))}let k=b[ze];k===void 0&&(k=new Xn,k.layers.enable(ze),k.viewport=new nn,b[ze]=k),k.matrix.fromArray($e.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray($e.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(wt.x,wt.y,wt.width,wt.height),ze===0&&(C.matrix.copy(k.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(k)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ze=y.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,a.renderState)}}for(let xe=0;xe<R.length;xe++){const _e=L[xe],Le=R[xe];_e!==null&&Le!==void 0&&Le.update(_e,ce,m||f)}I&&I(Z,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),w=null}const be=new Bm;be.setAnimationLoop(oe),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const kr=new Ui,kM=new Xt;function zM(s,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,Fm(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,P,R,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(_,g):g.isMeshToonMaterial?(u(_,g),y(_,g)):g.isMeshPhongMaterial?(u(_,g),v(_,g)):g.isMeshStandardMaterial?(u(_,g),x(_,g),g.isMeshPhysicalMaterial&&S(_,g,L)):g.isMeshMatcapMaterial?(u(_,g),w(_,g)):g.isMeshDepthMaterial?u(_,g):g.isMeshDistanceMaterial?(u(_,g),E(_,g)):g.isMeshNormalMaterial?u(_,g):g.isLineBasicMaterial?(f(_,g),g.isLineDashedMaterial&&d(_,g)):g.isPointsMaterial?p(_,g,P,R):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===wn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===wn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const P=e.get(g),R=P.envMap,L=P.envMapRotation;R&&(_.envMap.value=R,kr.copy(L),kr.x*=-1,kr.y*=-1,kr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(kr)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function d(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,P,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*P,_.scale.value=R*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function y(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function x(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,P){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const P=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function BM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,R){const L=R.program;r.uniformBlockBinding(P,L)}function m(P,R){let L=a[P.id];L===void 0&&(w(P),L=v(P),a[P.id]=L,P.addEventListener("dispose",_));const q=R.program;r.updateUBOMapping(P,q);const O=e.render.frame;u[P.id]!==O&&(x(P),u[P.id]=O)}function v(P){const R=y();P.__bindingPointIndex=R;const L=s.createBuffer(),q=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,q,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,L),L}function y(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const R=a[P.id],L=P.uniforms,q=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,U=L.length;O<U;O++){const $=Array.isArray(L[O])?L[O]:[L[O]];for(let b=0,C=$.length;b<C;b++){const H=$[b];if(S(H,O,b,q)===!0){const ue=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let Q=0;for(let ee=0;ee<W.length;ee++){const ie=W[ee],ae=E(ie);typeof ie=="number"||typeof ie=="boolean"?(H.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,ue+Q,H.__data)):ie.isMatrix3?(H.__data[0]=ie.elements[0],H.__data[1]=ie.elements[1],H.__data[2]=ie.elements[2],H.__data[3]=0,H.__data[4]=ie.elements[3],H.__data[5]=ie.elements[4],H.__data[6]=ie.elements[5],H.__data[7]=0,H.__data[8]=ie.elements[6],H.__data[9]=ie.elements[7],H.__data[10]=ie.elements[8],H.__data[11]=0):(ie.toArray(H.__data,Q),Q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,R,L,q){const O=P.value,U=R+"_"+L;if(q[U]===void 0)return typeof O=="number"||typeof O=="boolean"?q[U]=O:q[U]=O.clone(),!0;{const $=q[U];if(typeof O=="number"||typeof O=="boolean"){if($!==O)return q[U]=O,!0}else if($.equals(O)===!1)return $.copy(O),!0}return!1}function w(P){const R=P.uniforms;let L=0;const q=16;for(let U=0,$=R.length;U<$;U++){const b=Array.isArray(R[U])?R[U]:[R[U]];for(let C=0,H=b.length;C<H;C++){const ue=b[C],W=Array.isArray(ue.value)?ue.value:[ue.value];for(let Q=0,ee=W.length;Q<ee;Q++){const ie=W[Q],ae=E(ie),B=L%q;B!==0&&q-B<ae.boundary&&(L+=q-B),ue.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=ae.storage}}}const O=L%q;return O>0&&(L+=q-O),P.__size=L,P.__cache={},this}function E(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function _(P){const R=P.target;R.removeEventListener("dispose",_);const L=f.indexOf(R.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete u[R.id]}function g(){for(const P in a)s.deleteBuffer(a[P]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class HM{constructor(e={}){const{canvas:n=L_(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),w=new Int32Array(4);let E=null,_=null;const g=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=mr,this.toneMappingExposure=1;const R=this;let L=!1,q=0,O=0,U=null,$=-1,b=null;const C=new nn,H=new nn;let ue=null;const W=new Tt(0);let Q=0,ee=n.width,ie=n.height,ae=1,B=null,de=null;const le=new nn(0,0,ee,ie),I=new nn(0,0,ee,ie);let oe=!1;const be=new zm;let Z=!1,ce=!1;const xe=new Xt,_e=new se,Le=new nn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function wt(){return U===null?ae:1}let k=r;function Pt(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",we,!1),k===null){const X="webgl2";if(k=Pt(X,A),k===null)throw Pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,xt,We,It,tt,nt,N,T,re,ve,Se,me,Xe,Re,Ue,rt,Me,De,ct,Je,Fe,it,st,At;function G(){pt=new qy(k),pt.init(),it=new LM(k,pt),xt=new Hy(k,pt,e,it),We=new RM(k),It=new Zy(k),tt=new pM,nt=new bM(k,pt,We,tt,xt,it,It),N=new Gy(R),T=new Yy(R),re=new iv(k),st=new zy(k,re),ve=new $y(k,re,It,st),Se=new Jy(k,ve,re,It),ct=new Qy(k,xt,nt),rt=new Vy(tt),me=new hM(R,N,T,pt,xt,st,rt),Xe=new zM(R,tt),Re=new gM,Ue=new MM(pt),De=new ky(R,N,T,We,Se,x,p),Me=new CM(R,Se,xt),At=new BM(k,It,xt,We),Je=new By(k,pt,It),Fe=new Ky(k,pt,It),It.programs=me.programs,R.capabilities=xt,R.extensions=pt,R.properties=tt,R.renderLists=Re,R.shadowMap=Me,R.state=We,R.info=It}G();const Te=new OM(R,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(ee,ie,!1))},this.getSize=function(A){return A.set(ee,ie)},this.setSize=function(A,X,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,ie=X,n.width=Math.floor(A*ae),n.height=Math.floor(X*ae),J===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ee*ae,ie*ae).floor()},this.setDrawingBufferSize=function(A,X,J){ee=A,ie=X,ae=J,n.width=Math.floor(A*J),n.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,J,ne){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,J,ne),We.viewport(C.copy(le).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(I)},this.setScissor=function(A,X,J,ne){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,X,J,ne),We.scissor(H.copy(I).multiplyScalar(ae).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){We.setScissorTest(oe=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,X=!0,J=!0){let ne=0;if(A){let j=!1;if(U!==null){const Ae=U.texture.format;j=Ae===Nd||Ae===Dd||Ae===Ld}if(j){const Ae=U.texture.type,Ne=Ae===Ii||Ae===jr||Ae===Do||Ae===Bs||Ae===Pd||Ae===bd,Be=De.getClearColor(),Ce=De.getClearAlpha(),Qe=Be.r,Ze=Be.g,je=Be.b;Ne?(S[0]=Qe,S[1]=Ze,S[2]=je,S[3]=Ce,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=Qe,w[1]=Ze,w[2]=je,w[3]=Ce,k.clearBufferiv(k.COLOR,0,w))}else ne|=k.COLOR_BUFFER_BIT}X&&(ne|=k.DEPTH_BUFFER_BIT),J&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Re.dispose(),Ue.dispose(),tt.dispose(),N.dispose(),T.dispose(),Se.dispose(),st.dispose(),At.dispose(),me.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Pn),Te.removeEventListener("sessionend",Oi),Yn.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=It.autoReset,X=Me.enabled,J=Me.autoUpdate,ne=Me.needsUpdate,j=Me.type;G(),It.autoReset=A,Me.enabled=X,Me.autoUpdate=J,Me.needsUpdate=ne,Me.type=j}function we(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ke(A){const X=A.target;X.removeEventListener("dispose",Ke),dt(X)}function dt(A){Ot(A),tt.remove(A)}function Ot(A){const X=tt.get(A).programs;X!==void 0&&(X.forEach(function(J){me.releaseProgram(J)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,ne,j,Ae){X===null&&(X=ze);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Be=Il(A,X,J,ne,j);We.setMaterial(ne,Ne);let Ce=J.index,Qe=1;if(ne.wireframe===!0){if(Ce=ve.getWireframeAttribute(J),Ce===void 0)return;Qe=2}const Ze=J.drawRange,je=J.attributes.position;let ht=Ze.start*Qe,Ut=(Ze.start+Ze.count)*Qe;Ae!==null&&(ht=Math.max(ht,Ae.start*Qe),Ut=Math.min(Ut,(Ae.start+Ae.count)*Qe)),Ce!==null?(ht=Math.max(ht,0),Ut=Math.min(Ut,Ce.count)):je!=null&&(ht=Math.max(ht,0),Ut=Math.min(Ut,je.count));const bt=Ut-ht;if(bt<0||bt===1/0)return;st.setup(j,ne,Be,J,Ce);let Kt,ot=Je;if(Ce!==null&&(Kt=re.get(Ce),ot=Fe,ot.setIndex(Kt)),j.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*wt()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(j.isLine){let Ge=ne.linewidth;Ge===void 0&&(Ge=1),We.setLineWidth(Ge*wt()),j.isLineSegments?ot.setMode(k.LINES):j.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else j.isPoints?ot.setMode(k.POINTS):j.isSprite&&ot.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ot.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ge=j._multiDrawStarts,St=j._multiDrawCounts,_t=j._multiDrawCount,bn=Ce?re.get(Ce).bytesPerElement:1,Bi=tt.get(ne).currentProgram.getUniforms();for(let Zt=0;Zt<_t;Zt++)Bi.setValue(k,"_gl_DrawID",Zt),ot.render(Ge[Zt]/bn,St[Zt])}else if(j.isInstancedMesh)ot.renderInstances(ht,bt,j.count);else if(J.isInstancedBufferGeometry){const Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,St=Math.min(J.instanceCount,Ge);ot.renderInstances(ht,bt,St)}else ot.render(ht,bt)};function Vt(A,X,J){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,zi(A,X,J),A.side=gr,A.needsUpdate=!0,zi(A,X,J),A.side=bi):zi(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),_=Ue.get(J),_.init(X),P.push(_),J.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ne=new Set;return A.traverse(function(j){const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Be=Ae[Ne];Vt(Be,J,j),ne.add(Be)}else Vt(Ae,J,j),ne.add(Ae)}),P.pop(),_=null,ne},this.compileAsync=function(A,X,J=null){const ne=this.compile(A,X,J);return new Promise(j=>{function Ae(){if(ne.forEach(function(Ne){tt.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){j(A);return}setTimeout(Ae,10)}pt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let mt=null;function Rn(A){mt&&mt(A)}function Pn(){Yn.stop()}function Oi(){Yn.start()}const Yn=new Bm;Yn.setAnimationLoop(Rn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){mt=A,Te.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},Te.addEventListener("sessionstart",Pn),Te.addEventListener("sessionend",Oi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,U),_=Ue.get(A,P.length),_.init(X),P.push(_),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),be.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,ce),E=Re.get(A,g.length),E.init(),g.push(E),Te.enabled===!0&&Te.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&hi(Ae,X,-1/0,R.sortObjects)}hi(A,X,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(B,de),$e=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,$e&&De.addToRenderList(E,A),this.info.render.frame++,Z===!0&&rt.beginShadows();const J=_.state.shadowsArray;Me.render(J,A,X),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,j=E.transmissive;if(_.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(j.length>0)for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Ce=Ae[Ne];ki(ne,j,A,Ce)}$e&&De.render(A);for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Ce=Ae[Ne];zo(E,A,Ce,Ce.viewport)}}else j.length>0&&ki(ne,j,A,X),$e&&De.render(A),zo(E,A,X);U!==null&&(nt.updateMultisampleRenderTarget(U),nt.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(R,A,X),st.resetDefaultState(),$=-1,b=null,P.pop(),P.length>0?(_=P[P.length-1],Z===!0&&rt.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function hi(A,X,J,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){ne&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Ne=Se.update(A),Be=A.material;Be.visible&&E.push(A,Ne,Be,J,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const Ne=Se.update(A),Be=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Le.copy(Ne.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Be)){const Ce=Ne.groups;for(let Qe=0,Ze=Ce.length;Qe<Ze;Qe++){const je=Ce[Qe],ht=Be[je.materialIndex];ht&&ht.visible&&E.push(A,Ne,ht,J,Le.z,je)}}else Be.visible&&E.push(A,Ne,Be,J,Le.z,null)}}const Ae=A.children;for(let Ne=0,Be=Ae.length;Ne<Be;Ne++)hi(Ae[Ne],X,J,ne)}function zo(A,X,J,ne){const j=A.opaque,Ae=A.transmissive,Ne=A.transparent;_.setupLightsView(J),Z===!0&&rt.setGlobalState(R.clippingPlanes,J),ne&&We.viewport(C.copy(ne)),j.length>0&&pi(j,X,J),Ae.length>0&&pi(Ae,X,J),Ne.length>0&&pi(Ne,X,J),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ki(A,X,J,ne){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ne.id]===void 0&&(_.state.transmissionRenderTarget[ne.id]=new Yr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?No:Ii,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||C;Ae.setSize(Ne.z,Ne.w);const Be=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(W),Q=R.getClearAlpha(),Q<1&&R.setClearColor(16777215,.5),$e?De.render(J):R.clear();const Ce=R.toneMapping;R.toneMapping=mr;const Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),_.setupLightsView(ne),Z===!0&&rt.setGlobalState(R.clippingPlanes,ne),pi(A,J,ne),nt.updateMultisampleRenderTarget(Ae),nt.updateRenderTargetMipmap(Ae),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,ht=X.length;je<ht;je++){const Ut=X[je],bt=Ut.object,Kt=Ut.geometry,ot=Ut.material,Ge=Ut.group;if(ot.side===bi&&bt.layers.test(ne.layers)){const St=ot.side;ot.side=wn,ot.needsUpdate=!0,xr(bt,J,ne,Kt,ot,Ge),ot.side=St,ot.needsUpdate=!0,Ze=!0}}Ze===!0&&(nt.updateMultisampleRenderTarget(Ae),nt.updateRenderTargetMipmap(Ae))}R.setRenderTarget(Be),R.setClearColor(W,Q),Qe!==void 0&&(ne.viewport=Qe),R.toneMapping=Ce}function pi(A,X,J){const ne=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ae=A.length;j<Ae;j++){const Ne=A[j],Be=Ne.object,Ce=Ne.geometry,Qe=ne===null?Ne.material:ne,Ze=Ne.group;Be.layers.test(J.layers)&&xr(Be,X,J,Ce,Qe,Ze)}}function xr(A,X,J,ne,j,Ae){A.onBeforeRender(R,X,J,ne,j,Ae),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.transparent===!0&&j.side===bi&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,R.renderBufferDirect(J,X,ne,j,A,Ae),j.side=gr,j.needsUpdate=!0,R.renderBufferDirect(J,X,ne,j,A,Ae),j.side=bi):R.renderBufferDirect(J,X,ne,j,A,Ae),A.onAfterRender(R,X,J,ne,j,Ae)}function zi(A,X,J){X.isScene!==!0&&(X=ze);const ne=tt.get(A),j=_.state.lights,Ae=_.state.shadowsArray,Ne=j.state.version,Be=me.getParameters(A,j.state,Ae,X,J),Ce=me.getProgramCacheKey(Be);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(A.isMeshStandardMaterial?T:N).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Ke),Qe=new Map,ne.programs=Qe);let Ze=Qe.get(Ce);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Ne)return Ho(A,Be),Ze}else Be.uniforms=me.getUniforms(A),A.onBeforeCompile(Be,R),Ze=me.acquireProgram(Be,Ce),Qe.set(Ce,Ze),ne.uniforms=Be.uniforms;const je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=rt.uniform),Ho(A,Be),ne.needsLights=Vo(A),ne.lightsStateVersion=Ne,ne.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Bo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ml.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ho(A,X){const J=tt.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Il(A,X,J,ne,j){X.isScene!==!0&&(X=ze),nt.resetTextureUnits();const Ae=X.fog,Ne=ne.isMeshStandardMaterial?X.environment:null,Be=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vr,Ce=(ne.isMeshStandardMaterial?T:N).get(ne.envMap||Ne),Qe=ne.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color;let bt=mr;ne.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=R.toneMapping);const Kt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=Kt!==void 0?Kt.length:0,Ge=tt.get(ne),St=_.state.lights;if(Z===!0&&(ce===!0||A!==b)){const gn=A===b&&ne.id===$;rt.setState(ne,A,gn)}let _t=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==St.state.version||Ge.outputColorSpace!==Be||j.isBatchedMesh&&Ge.batching===!1||!j.isBatchedMesh&&Ge.batching===!0||j.isBatchedMesh&&Ge.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ge.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||j.isInstancedMesh&&Ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ge.instancingMorph===!1&&j.morphTexture!==null||Ge.envMap!==Ce||ne.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==rt.numPlanes||Ge.numIntersection!==rt.numIntersection)||Ge.vertexAlphas!==Qe||Ge.vertexTangents!==Ze||Ge.morphTargets!==je||Ge.morphNormals!==ht||Ge.morphColors!==Ut||Ge.toneMapping!==bt||Ge.morphTargetsCount!==ot)&&(_t=!0):(_t=!0,Ge.__version=ne.version);let bn=Ge.currentProgram;_t===!0&&(bn=zi(ne,X,j));let Bi=!1,Zt=!1,Hi=!1;const Ct=bn.getUniforms(),Ln=Ge.uniforms;if(We.useProgram(bn.program)&&(Bi=!0,Zt=!0,Hi=!0),ne.id!==$&&($=ne.id,Zt=!0),Bi||b!==A){Ct.setValue(k,"projectionMatrix",A.projectionMatrix),Ct.setValue(k,"viewMatrix",A.matrixWorldInverse);const gn=Ct.map.cameraPosition;gn!==void 0&&gn.setValue(k,_e.setFromMatrixPosition(A.matrixWorld)),xt.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Zt=!0,Hi=!0)}if(j.isSkinnedMesh){Ct.setOptional(k,j,"bindMatrix"),Ct.setOptional(k,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ct.setValue(k,"boneTexture",gn.boneTexture,nt))}j.isBatchedMesh&&(Ct.setOptional(k,j,"batchingTexture"),Ct.setValue(k,"batchingTexture",j._matricesTexture,nt),Ct.setOptional(k,j,"batchingIdTexture"),Ct.setValue(k,"batchingIdTexture",j._indirectTexture,nt),Ct.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Ct.setValue(k,"batchingColorTexture",j._colorsTexture,nt));const Xs=J.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&ct.update(j,J,bn),(Zt||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,Ct.setValue(k,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ln.envMap.value=Ce,Ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Ln.envMapIntensity.value=X.environmentIntensity),Zt&&(Ct.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&mi(Ln,Hi),Ae&&ne.fog===!0&&Xe.refreshFogUniforms(Ln,Ae),Xe.refreshMaterialUniforms(Ln,ne,ae,ie,_.state.transmissionRenderTarget[A.id]),Ml.upload(k,Bo(Ge),Ln,nt)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ml.upload(k,Bo(Ge),Ln,nt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(k,"center",j.center),Ct.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(k,"normalMatrix",j.normalMatrix),Ct.setValue(k,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const gn=ne.uniformsGroups;for(let yr=0,Go=gn.length;yr<Go;yr++){const qr=gn[yr];At.update(qr,bn),At.bind(qr,bn)}}return bn}function mi(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Vo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,X,J){tt.get(A.texture).__webglTexture=X,tt.get(A.depthTexture).__webglTexture=J;const ne=tt.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=J===void 0,ne.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const J=tt.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,J=0){U=A,q=X,O=J;let ne=!0,j=null,Ae=!1,Ne=!1;if(A){const Ce=tt.get(A);Ce.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(k.FRAMEBUFFER,null),ne=!1):Ce.__webglFramebuffer===void 0?nt.setupRenderTarget(A):Ce.__hasExternalTextures&&nt.rebindTextures(A,tt.get(A.texture).__webglTexture,tt.get(A.depthTexture).__webglTexture);const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);const Ze=tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?j=Ze[X][J]:j=Ze[X],Ae=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?j=tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[J]:j=Ze,C.copy(A.viewport),H.copy(A.scissor),ue=A.scissorTest}else C.copy(le).multiplyScalar(ae).floor(),H.copy(I).multiplyScalar(ae).floor(),ue=oe;if(We.bindFramebuffer(k.FRAMEBUFFER,j)&&ne&&We.drawBuffers(A,j),We.viewport(C),We.scissor(H),We.setScissorTest(ue),Ae){const Ce=tt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,J)}else if(Ne){const Ce=tt.get(A.texture),Qe=X||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,J||0,Qe)}$=-1},this.readRenderTargetPixels=function(A,X,J,ne,j,Ae,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){We.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Ce=A.texture,Qe=Ce.format,Ze=Ce.type;if(!xt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&J>=0&&J<=A.height-j&&k.readPixels(X,J,ne,j,it.convert(Qe),it.convert(Ze),Ae)}finally{const Ce=U!==null?tt.get(U).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,ne,j,Ae,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){We.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Ce=A.texture,Qe=Ce.format,Ze=Ce.type;if(!xt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ne&&J>=0&&J<=A.height-j){const je=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(X,J,ne,j,it.convert(Qe),it.convert(Ze),0),k.flush();const ht=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await D_(k,ht,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae)}finally{k.deleteBuffer(je),k.deleteSync(ht)}return Ae}}finally{const Ce=U!==null?tt.get(U).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,X=null,J=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-J),j=Math.floor(A.image.width*ne),Ae=Math.floor(A.image.height*ne),Ne=X!==null?X.x:0,Be=X!==null?X.y:0;nt.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Ne,Be,j,Ae),We.unbindTexture()},this.copyTextureToTexture=function(A,X,J=null,ne=null,j=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],X=arguments[2],j=arguments[3]||0,J=null);let Ae,Ne,Be,Ce,Qe,Ze;J!==null?(Ae=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Be=J.min.x,Ce=J.min.y):(Ae=A.image.width,Ne=A.image.height,Be=0,Ce=0),ne!==null?(Qe=ne.x,Ze=ne.y):(Qe=0,Ze=0);const je=it.convert(X.format),ht=it.convert(X.type);nt.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Ut=k.getParameter(k.UNPACK_ROW_LENGTH),bt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Kt=k.getParameter(k.UNPACK_SKIP_PIXELS),ot=k.getParameter(k.UNPACK_SKIP_ROWS),Ge=k.getParameter(k.UNPACK_SKIP_IMAGES),St=A.isCompressedTexture?A.mipmaps[j]:A.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,St.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ce),A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,Qe,Ze,Ae,Ne,je,ht,St.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,Qe,Ze,St.width,St.height,je,St.data):k.texSubImage2D(k.TEXTURE_2D,j,Qe,Ze,Ae,Ne,je,ht,St),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge),j===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,ne=null,j=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],X=arguments[3],j=arguments[4]||0);let Ae,Ne,Be,Ce,Qe,Ze,je,ht,Ut;const bt=A.isCompressedTexture?A.mipmaps[j]:A.image;J!==null?(Ae=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Be=J.max.z-J.min.z,Ce=J.min.x,Qe=J.min.y,Ze=J.min.z):(Ae=bt.width,Ne=bt.height,Be=bt.depth,Ce=0,Qe=0,Ze=0),ne!==null?(je=ne.x,ht=ne.y,Ut=ne.z):(je=0,ht=0,Ut=0);const Kt=it.convert(X.format),ot=it.convert(X.type);let Ge;if(X.isData3DTexture)nt.setTexture3D(X,0),Ge=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)nt.setTexture2DArray(X,0),Ge=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const St=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=k.getParameter(k.UNPACK_SKIP_PIXELS),Bi=k.getParameter(k.UNPACK_SKIP_ROWS),Zt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze),A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ge,j,je,ht,Ut,Ae,Ne,Be,Kt,ot,bt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,j,je,ht,Ut,Ae,Ne,Be,Kt,bt.data):k.texSubImage3D(Ge,j,je,ht,Ut,Ae,Ne,Be,Kt,ot,bt),k.pixelStorei(k.UNPACK_ROW_LENGTH,St),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Bi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt),j===0&&X.generateMipmaps&&k.generateMipmap(Ge),We.unbindTexture()},this.initRenderTarget=function(A){tt.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){q=0,O=0,U=null,We.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Id?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===bl?"display-p3":"srgb"}}class VM extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jm extends Oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new Xt,wd=new bm,pl=new Ll,ml=new se;class GM extends Cn{constructor(e=new Fi,n=new jm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(a),pl.radius+=u,e.ray.intersectsSphere(pl)===!1)return;cm.copy(a).invert(),wd.copy(e.ray).applyMatrix4(cm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let w=x,E=S;w<E;w++){const _=m.getX(w);ml.fromBufferAttribute(y,_),dm(ml,_,p,a,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(y.count,f.start+f.count);for(let w=x,E=S;w<E;w++)ml.fromBufferAttribute(y,w),dm(ml,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function dm(s,e,n,r,a,u,f){const d=wd.distanceSqToPoint(s);if(d<n){const p=new se;wd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);const gl={"2025-01-14":"Makar Sankranti","2025-01-26":"Republic Day","2025-03-14":"Holi","2025-03-31":"Eid-ul-Fitr","2025-04-14":"Dr. Ambedkar Jayanti","2025-04-17":"Mahavir Jayanti","2025-04-18":"Good Friday","2025-05-01":"May Day","2025-05-12":"Buddha Purnima","2025-06-07":"Eid-ul-Adha","2025-07-07":"Muharram","2025-08-15":"Independence Day","2025-08-26":"Janmashtami","2025-09-06":"Ganesh Chaturthi","2025-10-02":"Gandhi Jayanti","2025-10-03":"Dussehra","2025-10-21":"Diwali","2025-11-05":"Guru Nanak Jayanti","2025-12-25":"Christmas Day"},fn=({path:s,className:e="w-6 h-6"})=>F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:s})}),WM=()=>F.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-purple-300"}),XM=()=>{const s=["The best way to predict the future is to create it.","Success is not final, failure is not fatal: it is the courage to continue that counts.","Believe you can and you're halfway there.","The secret of getting ahead is getting started.","It's hard to beat a person who never gives up."],[e,n]=ft.useState("");return ft.useEffect(()=>{n(s[Math.floor(Math.random()*s.length)])},[]),F.jsx("div",{className:"text-center p-4 bg-black/20 rounded-lg border border-purple-800/50 mb-8",children:F.jsxs("p",{className:"text-lg italic text-purple-200",children:['"',e,'"']})})},jM=()=>{const s=new(window.AudioContext||window.webkitAudioContext);if(!s)return;const e=(n,r,a)=>{const u=s.createOscillator(),f=s.createGain();u.connect(f),f.connect(s.destination),u.type="triangle",u.frequency.setValueAtTime(n,s.currentTime),f.gain.setValueAtTime(.5,s.currentTime),u.start(s.currentTime+r),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+r+a),u.stop(s.currentTime+r+a)};e(523.25,0,.15),e(659.25,.15,.2)};function YM(){const[s,e]=ft.useState([]),[n,r]=ft.useState([]),[a,u]=ft.useState({}),[f,d]=ft.useState({text:"",deadline:""}),[p,m]=ft.useState({duration:"",text:""}),[v,y]=ft.useState(!0),[x,S]=ft.useState("missions"),[w,E]=ft.useState([]),[_,g]=ft.useState(!1),P=ft.useRef(null);ft.useEffect(()=>{try{console.log("Attempting to load data...");const W=["cosmic-hub-data-v3","cosmic-hub-data-v2","cosmic-hub-data"];let Q=null,ee=null;for(const ie of W){const ae=localStorage.getItem(ie);if(ae){Q=ae,ee=ie,console.log(`Data found from source: ${ee}`);break}console.log(`No data found for key: ${ie}`)}if(Q){const ie=JSON.parse(Q),ae=(ie.goals||[]).map(B=>({...B,accomplishments:B.accomplishments||[]}));e(ae),r(ie.schedule||[]),u(ie.events||{}),console.log("Data loaded and migrated successfully.")}else console.log("No saved data found in any known local storage key.")}catch(W){console.error("Failed to load or migrate data from local storage",W)}y(!1)},[]),ft.useEffect(()=>{if(!v)try{const W=JSON.stringify({goals:s,schedule:n,events:a});localStorage.setItem("cosmic-hub-data-v3",W)}catch(W){console.error("Failed to save data",W)}},[s,n,a,v]);const R=()=>{jM(),g(!0)};ft.useEffect(()=>{const W=setInterval(()=>{r(Q=>Q.map(ee=>ee.isActive&&ee.secondsLeft===1?(R(),{...ee,secondsLeft:0,isActive:!1,completed:!0}):ee.isActive&&ee.secondsLeft>0?{...ee,secondsLeft:ee.secondsLeft-1}:ee))},1e3);return()=>clearInterval(W)},[]);const L=W=>{if(W.preventDefault(),f.text.trim()){const Q={id:Date.now(),text:f.text,subgoals:[],streak:0,lastCompleted:null,link:"",deadline:f.deadline,dateCreated:new Date().toISOString(),accomplishments:[]};e(ee=>[...ee,Q]),d({text:"",deadline:""})}},q=(W,Q)=>{e(s.map(ee=>ee.id===W?{...ee,...Q}:ee))},O=W=>e(s.filter(Q=>Q.id!==W)),U=W=>{if(W.preventDefault(),p.text.trim()&&p.duration>0){const Q={...p,id:Date.now(),completed:!1,isActive:!1,secondsLeft:p.duration*60};r([...n,Q].sort((ee,ie)=>ee.duration-ie.duration)),m({duration:"",text:""})}},$=W=>{r(n.map(Q=>Q.id===W?{...Q,isActive:!Q.isActive}:{...Q,isActive:!1}))},b=W=>r(n.filter(Q=>Q.id!==W)),C=()=>r(n.filter(W=>!W.completed));if(ft.useEffect(()=>{if(v)return;let W,Q,ee,ie;const ae=P.current;if(!ae||ae.children.length>0)return;W=new VM,Q=new Xn(60,window.innerWidth/window.innerHeight,1,1e3),Q.position.z=1,Q.rotation.x=Math.PI/2,ee=new HM({antialias:!0}),ee.setSize(window.innerWidth,window.innerHeight),ae.appendChild(ee.domElement);const B=new Fi,de=5e3,le=new Float32Array(de*3);for(let _e=0;_e<de*3;_e++)le[_e]=(Math.random()-.5)*5;B.setAttribute("position",new si(le,3));const I=new jm({size:.005,color:16777215});ie=new GM(B,I),W.add(ie);let oe=0,be=0;const Z=_e=>{oe=_e.clientX,be=_e.clientY};document.addEventListener("mousemove",Z);const ce=()=>{requestAnimationFrame(ce),ie.rotation.y+=2e-4,Q.position.y+=(be*1e-5-Q.position.y)*.1,Q.position.x+=(oe*1e-5-Q.position.x)*.1,ee.render(W,Q)};ce();const xe=()=>{Q.aspect=window.innerWidth/window.innerHeight,Q.updateProjectionMatrix(),ee.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),document.removeEventListener("mousemove",Z),ae&&ee.domElement&&ae.removeChild(ee.domElement)}},[v]),v)return F.jsx("div",{className:"min-h-screen bg-gray-900 flex justify-center items-center",children:F.jsx(WM,{})});const H=s.filter(W=>{const Q=W.subgoals.length,ee=W.subgoals.filter(ie=>ie.completed).length;return Q===0||ee<Q}),ue=s.filter(W=>{const Q=W.subgoals.length,ee=W.subgoals.filter(ie=>ie.completed).length;return Q>0&&ee===Q});return F.jsxs(F.Fragment,{children:[F.jsx("div",{ref:P,className:"fixed top-0 left-0 w-full h-full -z-10"}),F.jsx("div",{className:"min-h-screen text-white font-sans flex justify-center p-4 sm:p-6",children:F.jsxs("div",{className:"w-full max-w-7xl mt-12 md:mt-20 relative",children:[_&&F.jsx(qM,{onClose:()=>g(!1)}),F.jsxs("header",{className:"text-center mb-8",children:[F.jsx("h1",{className:"text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:"Cosmic Productivity Hub"}),F.jsx("p",{className:"text-purple-200 mt-2",children:"Your one-stop destination to conquer the universe."})]}),F.jsxs("main",{className:"bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-500/30 p-4 sm:p-8 space-y-8",children:[F.jsx($M,{currentView:x,setCurrentView:S}),x==="missions"&&F.jsxs(F.Fragment,{children:[F.jsx(XM,{}),F.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[F.jsxs("div",{className:"space-y-6",children:[F.jsx("h2",{className:"text-2xl font-bold text-purple-300",children:"New Mission"}),F.jsxs("form",{onSubmit:L,className:"flex flex-col sm:flex-row gap-2",children:[F.jsx("input",{type:"text",value:f.text,onChange:W=>d({...f,text:W.target.value}),placeholder:"Launch a new goal...",className:"flex-grow bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"}),F.jsx("input",{type:"date",value:f.deadline,onChange:W=>d({...f,deadline:W.target.value}),className:"bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"}),F.jsx("button",{type:"submit",className:"bg-purple-600 hover:bg-purple-500 rounded-lg px-4 py-2 font-semibold",children:F.jsx(fn,{path:"M12 4.5v15m7.5-7.5h-15"})})]}),F.jsxs("div",{children:[F.jsx("h2",{className:"text-2xl font-bold text-purple-300 mt-8 mb-4",children:"Active Missions"}),F.jsx("div",{className:"space-y-4",children:H.length===0?F.jsx("p",{className:"text-center text-gray-400 p-4 bg-gray-800/50 rounded-lg",children:"No active missions. Time to set a new course!"}):H.map(W=>F.jsx(QM,{goal:W,updateGoal:q,deleteGoal:O,handleMajorCompletion:R},W.id))})]})]}),F.jsx(KM,{schedule:n,handleAddScheduleItem:U,newScheduleItem:p,setNewScheduleItem:m,toggleTimer:$,deleteScheduleItem:b,clearCompletedSchedule:C})]})]}),x==="pomodoro"&&F.jsx(ZM,{onComplete:R}),x==="calendar"&&F.jsx(JM,{goals:s,updateGoal:q,events:a,setEvents:u}),x==="logbook"&&F.jsx(tE,{goals:s,updateGoal:q,deleteGoal:O}),x==="analytics"&&F.jsx(eE,{completedGoals:ue})]})]})})]})}const qM=({onClose:s})=>F.jsxs("div",{className:"fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in",children:[[...Array(20)].map((e,n)=>F.jsx("div",{className:"star",style:{"--i":n,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${Math.random()*1+.5}s`}},n)),F.jsxs("div",{className:"text-center text-white z-10 animate-zoom-in",children:[F.jsx("h2",{className:"text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:"You did it!"}),F.jsx("p",{className:"text-2xl text-purple-200 mb-8",children:"AND NOW let's do more"}),F.jsx("button",{onClick:s,className:"bg-purple-600 hover:bg-purple-500 rounded-lg px-8 py-3 text-lg font-semibold",children:"Continue"})]})]}),$M=({currentView:s,setCurrentView:e})=>{const n=[{id:"missions",name:"Missions",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3"},{id:"pomodoro",name:"Pomodoro",icon:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"},{id:"calendar",name:"Calendar",icon:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"},{id:"logbook",name:"Logbook",icon:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25"},{id:"analytics",name:"Analytics",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5"}];return F.jsx("div",{className:"flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8",children:n.map(r=>F.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${s===r.id?"bg-purple-600 text-white":"bg-gray-800/50 hover:bg-gray-700/70"}`,children:[F.jsx(fn,{path:r.icon,className:"w-5 h-5"}),F.jsx("span",{className:"hidden md:inline",children:r.name})]},r.id))})},KM=({schedule:s,handleAddScheduleItem:e,newScheduleItem:n,setNewScheduleItem:r,toggleTimer:a,deleteScheduleItem:u,clearCompletedSchedule:f})=>F.jsxs("div",{className:"space-y-6",children:[F.jsxs("div",{children:[F.jsx("h2",{className:"text-2xl font-bold text-purple-300 mb-4",children:"Daily Planner"}),F.jsxs("form",{onSubmit:e,className:"flex gap-2",children:[F.jsx("input",{type:"number",value:n.duration,onChange:d=>r({...n,duration:d.target.value?parseInt(d.target.value):""}),placeholder:"Duration (min)",className:"bg-gray-900/70 border border-purple-800 rounded-lg px-2 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-purple-500"}),F.jsx("input",{type:"text",value:n.text,onChange:d=>r({...n,text:d.target.value}),placeholder:"Schedule a task...",className:"flex-grow bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"}),F.jsx("button",{type:"submit",className:"bg-teal-600 hover:bg-teal-500 rounded-lg px-4 py-2 font-semibold",children:F.jsx(fn,{path:"M12 4.5v15m7.5-7.5h-15"})})]})]}),F.jsx("div",{className:"space-y-2 max-h-[500px] overflow-y-auto pr-2",children:s.length===0?F.jsx("p",{className:"text-center text-gray-400 p-4 bg-gray-800/50 rounded-lg",children:"Your schedule is clear. Plan your day!"}):s.map(d=>{const p=Math.floor(d.secondsLeft/60),m=d.secondsLeft%60,v=d.duration>0?(d.duration*60-d.secondsLeft)/(d.duration*60)*100:0;return F.jsxs("div",{className:`relative group p-3 rounded-lg transition-colors overflow-hidden ${d.completed?"bg-green-500/20":"bg-gray-800/60 hover:bg-gray-800"}`,children:[F.jsx("div",{className:"absolute top-0 left-0 h-full bg-teal-500/20 transition-all duration-500",style:{width:`${v}%`}}),F.jsxs("div",{className:"relative flex items-center gap-4",children:[F.jsxs("span",{className:"font-mono text-teal-300 w-20",children:[String(p).padStart(2,"0"),":",String(m).padStart(2,"0")]}),F.jsx("span",{className:`flex-grow ${d.completed?"line-through text-gray-500":""}`,children:d.text}),!d.completed&&F.jsx("button",{onClick:()=>a(d.id),className:"text-white p-1 rounded-full bg-purple-600 hover:bg-purple-500 z-10",children:F.jsx(fn,{path:d.isActive?"M15.75 5.25v13.5m-7.5-13.5v13.5":"M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l7.5 4.347c1.25.722 1.25 2.565 0 3.286l-7.5 4.347c-1.25.722-2.779-.217-2.779-1.643V5.653z",className:"w-5 h-5"})}),F.jsx("button",{onClick:()=>u(d.id),className:"text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity z-10",children:F.jsx(fn,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]})]},d.id)})}),s.some(d=>d.completed)&&F.jsx("div",{className:"text-center mt-4",children:F.jsx("button",{onClick:f,className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Clear Completed"})})]}),ZM=({onComplete:s})=>{const[e,n]=ft.useState({work:25,shortBreak:5,longBreak:15}),[r,a]=ft.useState("work"),[u,f]=ft.useState(!1),[d,p]=ft.useState(e.work*60),[m,v]=ft.useState(0),y=(P,R)=>{const L=parseInt(R,10);isNaN(L)||L<1||n(q=>({...q,[P]:L}))};ft.useEffect(()=>{let P=null;return u&&d>0?P=setInterval(()=>p(R=>R-1),1e3):u&&d===0&&(s(),f(!1),a(R=>R==="work"?"shortBreak":"work")),()=>clearInterval(P)},[u,d,s]),ft.useEffect(()=>{p(e[r]*60),f(!1),v(P=>P+1)},[r,e]);const x=()=>f(!u),S=()=>p(e[r]*60),w=Math.floor(d/60),E=d%60,_=e[r]*60,g=_>0?(_-d)/_*100:0;return F.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[F.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-6",children:"Pomodoro Timer"}),F.jsx("div",{className:"flex gap-2",children:Object.keys(e).map(P=>F.jsx("button",{onClick:()=>a(P),className:`px-4 py-1 rounded-md text-sm capitalize ${r===P?"bg-purple-600":"bg-gray-700"}`,children:P.replace("B"," B")},P))}),F.jsxs("div",{className:"relative w-64 h-64 flex items-center justify-center",children:[F.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",style:{transform:"rotate(-90deg)"},children:[F.jsx("circle",{className:"text-gray-700",strokeWidth:"5",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50"}),F.jsx("circle",{className:"text-purple-500",strokeWidth:"5",strokeDasharray:"283",strokeDashoffset:283-g/100*283,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50",style:{transition:"stroke-dashoffset 1s linear"}})]}),F.jsxs("div",{className:"absolute text-5xl font-mono",children:[String(w).padStart(2,"0"),":",String(E).padStart(2,"0")]})]},m),F.jsxs("div",{className:"flex gap-4",children:[F.jsx("button",{onClick:x,className:"bg-purple-600 hover:bg-purple-500 rounded-lg px-6 py-2 font-semibold w-28",children:u?"Pause":"Start"}),F.jsx("button",{onClick:S,className:"bg-gray-600 hover:bg-gray-500 rounded-lg px-6 py-2 font-semibold w-28",children:"Reset"})]}),F.jsx("div",{className:"flex flex-col sm:flex-row gap-4 items-center pt-4 border-t border-purple-800/30 w-full max-w-md",children:Object.keys(e).map(P=>F.jsxs("div",{className:"flex-1 w-full",children:[F.jsxs("label",{className:"text-xs text-purple-200 capitalize",children:[P.replace("B"," B")," (min)"]}),F.jsx("input",{type:"number",value:e[P],onChange:R=>y(P,R.target.value),className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"})]},P))})]})},QM=({goal:s,updateGoal:e,deleteGoal:n,handleMajorCompletion:r})=>{const[a,u]=ft.useState({text:"",link:"",notes:""}),[f,d]=ft.useState(!1),[p,m]=ft.useState({link:s.link||"",deadline:s.deadline||""}),[v,y]=ft.useState(null),x=s.subgoals.length,S=s.subgoals.filter(L=>L.completed).length,w=x>0?Math.round(S/x*100):0,E=x>0&&w===100,_=s.deadline&&new Date(s.deadline)<new Date&&!E,g=L=>{const q=s.subgoals.map(U=>U.id===L?{...U,completed:!U.completed}:U);q.length>0&&q.every(U=>U.completed)&&!E&&r(),e(s.id,{subgoals:q})},P=L=>{if(L.preventDefault(),a.text.trim()){const q={id:Date.now(),...a,completed:!1},O=E;e(s.id,{subgoals:[...s.subgoals,q],lastCompleted:O?null:s.lastCompleted}),u({text:"",link:"",notes:""})}},R=()=>{e(s.id,{link:p.link,deadline:p.deadline}),d(!1)};return F.jsxs("div",{id:`goal-${s.id}`,className:`relative p-4 rounded-lg transition-all duration-300 ${E?"bg-green-500/20 border-green-500/40":"bg-gray-800/60 border-purple-800/50"} border`,children:[F.jsxs("div",{className:"flex flex-wrap items-center gap-x-3",children:[F.jsx("span",{className:`flex-grow font-bold text-lg ${E?"line-through text-gray-500":"text-purple-100"}`,children:s.text}),F.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[F.jsx("button",{onClick:()=>d(!f),title:"Edit Details",className:"text-cyan-400 hover:text-cyan-300 p-1",children:F.jsx(fn,{path:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",className:"w-5 h-5"})}),F.jsx("button",{onClick:()=>n(s.id),title:"Delete Goal",className:"text-red-400 hover:text-red-300 p-1",children:F.jsx(fn,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 4.8.667 0 00-7.5 0",className:"w-5 h-5"})})]})]}),s.deadline&&F.jsxs("div",{className:`mt-2 text-sm flex items-center gap-2 ${_?"text-red-400":"text-gray-400"}`,children:[F.jsx(fn,{path:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18",className:"w-4 h-4"}),F.jsxs("span",{children:["Deadline: ",new Date(s.deadline).toLocaleDateString()]}),_&&F.jsx("span",{className:"font-bold",children:"(Past Due)"})]}),f&&F.jsxs("div",{className:"mt-3 space-y-2 p-3 bg-gray-900/50 rounded-md",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("label",{className:"text-sm w-20",children:"Link:"}),F.jsx("input",{type:"text",value:p.link,onChange:L=>m({...p,link:L.target.value}),placeholder:"Paste URL...",className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("label",{className:"text-sm w-20",children:"Deadline:"}),F.jsx("input",{type:"date",value:p.deadline,onChange:L=>m({...p,deadline:L.target.value}),className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),F.jsx("div",{className:"text-right",children:F.jsx("button",{onClick:R,className:"bg-cyan-600 hover:bg-cyan-500 text-sm rounded-md px-4 py-1",children:"Save"})})]}),x>0&&F.jsxs("div",{className:"mt-3",children:[F.jsxs("div",{className:"flex justify-between text-sm text-purple-200 mb-1",children:[F.jsx("span",{children:"Progress"}),F.jsxs("span",{children:[w,"%"]})]}),F.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5",children:F.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full",style:{width:`${w}%`}})})]}),F.jsx("div",{className:"mt-4 pl-4 border-l-2 border-purple-500/30 space-y-2",children:s.subgoals.map(L=>F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center",children:[F.jsx("input",{type:"checkbox",checked:L.completed,onChange:()=>g(L.id),className:"w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"}),F.jsx("span",{className:`ml-3 flex-grow cursor-pointer ${L.completed?"line-through text-gray-500":"text-gray-300"}`,onClick:()=>y(v===L.id?null:L.id),children:L.text}),L.link&&F.jsx("a",{href:L.link,target:"_blank",rel:"noopener noreferrer",className:"ml-auto text-cyan-400 hover:text-cyan-300",children:F.jsx(fn,{path:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",className:"w-4 h-4"})})]}),v===L.id&&F.jsx("div",{className:"ml-7 mt-2 p-2 bg-gray-900/50 rounded-md text-sm text-gray-400",children:F.jsx("p",{children:L.notes||"No notes for this step."})})]},L.id))}),F.jsxs("form",{onSubmit:P,className:"mt-4 pl-4 space-y-2",children:[F.jsxs("div",{className:"flex gap-2",children:[F.jsx("input",{type:"text",value:a.text,onChange:L=>u({...a,text:L.target.value}),placeholder:"Add a smaller step...",className:"flex-grow bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"}),F.jsx("button",{type:"submit",className:"text-purple-400 hover:text-purple-200",children:F.jsx(fn,{path:"M12 9v6m3-3H9",className:"w-5 h-5"})})]}),F.jsxs("div",{className:"flex gap-2",children:[F.jsx("input",{type:"text",value:a.link,onChange:L=>u({...a,link:L.target.value}),placeholder:"Optional: http://link",className:"w-1/2 bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"}),F.jsx("input",{type:"text",value:a.notes,onChange:L=>u({...a,notes:L.target.value}),placeholder:"Optional: notes",className:"w-1/2 bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]})]})]})},JM=({goals:s,updateGoal:e,events:n,setEvents:r})=>{const[a,u]=ft.useState(new Date),[f,d]=ft.useState(new Date),[p,m]=ft.useState(""),v=()=>{const g=f.toISOString().split("T")[0],P={...n};delete P[g],r(P)},y=g=>{if(g.preventDefault(),p.trim()&&f){const P=f.toISOString().split("T")[0];r(R=>({...R,[P]:p})),m("")}},x=s.flatMap(g=>g.accomplishments||[]).filter(g=>new Date(g.date).toDateString()===f?.toDateString()),S=new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),w=new Date(a.getFullYear(),a.getMonth(),1).getDay(),E=Array.from({length:S},(g,P)=>P+1),_=new Date;return _.setHours(0,0,0,0),F.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[F.jsxs("div",{className:"bg-gray-800/60 p-4 rounded-lg",children:[F.jsxs("div",{className:"flex justify-between items-center mb-4",children:[F.jsx("button",{onClick:()=>u(new Date(a.setMonth(a.getMonth()-1))),className:"p-2 rounded-full hover:bg-purple-500/20",children:F.jsx(fn,{path:"M15.75 19.5L8.25 12l7.5-7.5",className:"w-5 h-5"})}),F.jsx("h2",{className:"text-xl font-bold",children:a.toLocaleString("default",{month:"long",year:"numeric"})}),F.jsx("button",{onClick:()=>u(new Date(a.setMonth(a.getMonth()+1))),className:"p-2 rounded-full hover:bg-purple-500/20",children:F.jsx(fn,{path:"M8.25 4.5l7.5 7.5-7.5 7.5",className:"w-5 h-5"})})]}),F.jsx("div",{className:"grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2",children:["S","M","T","W","T","F","S"].map(g=>F.jsx("div",{children:g},g))}),F.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:w}).map((g,P)=>F.jsx("div",{},`empty-${P}`)),E.map(g=>{const P=new Date(a.getFullYear(),a.getMonth(),g),R=P.toISOString().split("T")[0],L=P.toDateString()===_.toDateString(),q=P<_,O=f&&P.toDateString()===f.toDateString(),U=s.some(b=>b.accomplishments?.some(C=>new Date(C.date).toDateString()===P.toDateString())),$=n[R]||gl[R];return F.jsxs("button",{onClick:()=>d(P),className:`h-12 rounded-lg text-sm relative transition-colors
                                    ${O?"bg-purple-600 text-white":""}
                                    ${L&&!O?"ring-2 ring-purple-500":""}
                                    ${O?"":q?"bg-gray-900/50 text-gray-500 hover:bg-gray-700/50":"bg-gray-900/50 hover:bg-gray-700/50 text-gray-300"}
                                `,children:[g,U&&F.jsx("div",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"}),$&&F.jsx("div",{className:"absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"})]},g)})]})]}),F.jsxs("div",{className:"space-y-4",children:[F.jsxs("h2",{className:"text-2xl font-bold text-purple-300",children:["Details for ",f.toLocaleDateString()]}),F.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg space-y-3",children:[F.jsx("h3",{className:"font-bold text-purple-200",children:"Accomplishments Logged"}),F.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:x.length>0?x.map(g=>F.jsxs("div",{className:"p-2 bg-gray-800/50 rounded-lg text-sm",children:[F.jsxs("p",{className:"font-bold text-gray-400",children:[g.goalText," (",g.timeSpent,")"]}),F.jsx("p",{className:"text-gray-300 mt-1",children:g.text})]},g.id)):F.jsx("p",{className:"text-sm text-gray-500 text-center",children:"No work logged for this day."})})]}),F.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg space-y-3",children:[F.jsx("h3",{className:"font-bold text-purple-200",children:"Special Event"}),n[f.toISOString().split("T")[0]]||gl[f.toISOString().split("T")[0]]?F.jsxs("div",{className:"group relative p-3 bg-gray-800/50 rounded-lg text-sm",children:[F.jsx("p",{children:n[f.toISOString().split("T")[0]]||gl[f.toISOString().split("T")[0]]}),!gl[f.toISOString().split("T")[0]]&&F.jsx("button",{onClick:v,className:"absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",children:F.jsx(fn,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]}):F.jsxs("form",{onSubmit:y,children:[F.jsx("input",{value:p,onChange:g=>m(g.target.value),placeholder:"Add an event for this day...",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"}),F.jsx("button",{type:"submit",className:"mt-2 w-full bg-cyan-600 hover:bg-cyan-500 rounded-lg py-2 font-semibold text-sm",children:"Save Event"})]})]})]})]})},eE=({completedGoals:s})=>{const[e,n]=ft.useState("monthly"),a=((d,p)=>{const m=new Date;return d.filter(v=>{const y=new Date(v.lastCompleted);if(p==="weekly"){const x=new Date(m.setDate(m.getDate()-7));return y>x}return p==="monthly"?y.getMonth()===m.getMonth()&&y.getFullYear()===m.getFullYear():p==="yearly"?y.getFullYear()===m.getFullYear():!0})})(s,e),u=a.length,f=s.length>0?u/s.length*100:0;return F.jsxs("div",{className:"space-y-8",children:[F.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-6",children:"Mission Analytics"}),F.jsx("div",{className:"flex justify-center gap-2",children:["weekly","monthly","yearly"].map(d=>F.jsx("button",{onClick:()=>n(d),className:`px-4 py-1 rounded-md text-sm ${e===d?"bg-purple-600":"bg-gray-700"}`,children:d.charAt(0).toUpperCase()+d.slice(1)},d))}),F.jsxs("div",{className:"text-center",children:[F.jsxs("p",{className:"text-lg text-gray-300",children:["Missions Accomplished (",e,")"]}),F.jsx("p",{className:"text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:u}),F.jsxs("div",{className:"relative w-32 h-32 mx-auto mt-4",children:[F.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 36 36",children:[F.jsx("path",{className:"text-gray-700",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2"}),F.jsx("path",{className:"text-green-500",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:`${f}, 100`})]}),F.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-2xl",children:"✨"})]})]}),F.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[F.jsx("h3",{className:"text-xl font-bold text-purple-200 mb-4",children:"Completed Goals Details"}),F.jsx("div",{className:"overflow-x-auto",children:F.jsxs("table",{className:"w-full text-left",children:[F.jsx("thead",{children:F.jsxs("tr",{className:"border-b border-purple-800/50",children:[F.jsx("th",{className:"p-2",children:"Mission"}),F.jsx("th",{className:"p-2",children:"Date Completed"})]})}),F.jsx("tbody",{children:a.map(d=>F.jsxs("tr",{className:"border-b border-gray-800",children:[F.jsx("td",{className:"p-2",children:d.text}),F.jsx("td",{className:"p-2",children:new Date(d.lastCompleted).toLocaleDateString()})]},d.id))})]})})]})]})},tE=({goals:s,updateGoal:e,deleteGoal:n})=>{const[r,a]=ft.useState(null),[u,f]=ft.useState(null),[d,p]=ft.useState(""),[m,v]=ft.useState("");s.flatMap(E=>E.accomplishments||[]).sort((E,_)=>new Date(_.date)-new Date(E.date)).reduce((E,_)=>{const g=new Date(_.date).toDateString();return E[g]||(E[g]=[]),E[g].push(_),E},{});const x=E=>{const _=s.find(g=>g.id===E);if(_){const g={id:Date.now(),date:new Date().toISOString(),text:"Quick Check-in",goalId:_.id,goalText:_.text,timeSpent:"5 min"},P=[..._.accomplishments||[],g];e(E,{accomplishments:P})}},S=E=>{E.preventDefault();const _=s.find(g=>g.id===r);if(d.trim()&&_&&u){const g={id:Date.now(),date:u.toISOString(),text:d,goalId:_.id,goalText:_.text,timeSpent:m},P=[..._.accomplishments||[],g];e(r,{accomplishments:P}),p(""),v(""),f(null)}},w=(E,_)=>{const g=s.find(P=>P.id===E);if(g){const P=g.accomplishments.filter(R=>R.id!==_);e(E,{accomplishments:P})}};return F.jsxs("div",{className:"space-y-6",children:[F.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-6",children:"Mission Logbook"}),F.jsx("div",{className:"space-y-4",children:s.map(E=>{const _=[],g=new Date(E.dateCreated),P=E.deadline?new Date(E.deadline):new Date;for(let R=new Date(g);R<=P;R.setDate(R.getDate()+1))_.push(new Date(R));return F.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[F.jsxs("div",{className:"flex items-center gap-4",children:[F.jsx("h3",{className:"font-bold text-lg text-purple-200 cursor-pointer hover:underline",onClick:()=>a(r===E.id?null:E.id),children:E.text}),F.jsx("button",{onClick:()=>x(E.id),title:"Quick Check-in for Today",className:"ml-auto bg-green-600 hover:bg-green-500 rounded-full p-2",children:F.jsx(fn,{path:"M12 4.5v15m7.5-7.5h-15",className:"w-4 h-4"})}),F.jsx("button",{onClick:()=>n(E.id),title:"Delete Goal Permanently",className:"text-red-500 hover:text-red-400 p-2 rounded-full hover:bg-red-500/20",children:F.jsx(fn,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-4 h-4"})})]}),r===E.id&&F.jsxs("div",{className:"mt-4",children:[F.jsx("div",{className:"flex flex-wrap gap-2",children:_.map(R=>F.jsx("button",{onClick:()=>f(R),className:`w-10 h-10 rounded-lg text-xs flex items-center justify-center
                                                ${u?.toDateString()===R.toDateString()?"bg-purple-600":"bg-gray-700/60 hover:bg-gray-600/60"}`,children:R.getDate()},R.toISOString()))}),u&&F.jsxs("form",{onSubmit:S,className:"mt-4 space-y-2 p-3 bg-gray-900/50 rounded-lg",children:[F.jsxs("h4",{className:"text-sm font-bold",children:["Log for ",u.toLocaleDateString()]}),E.accomplishments?.filter(R=>new Date(R.date).toDateString()===u.toDateString()).map(R=>F.jsxs("div",{className:"group flex items-center justify-between bg-gray-800/50 p-2 rounded",children:[F.jsxs("p",{className:"text-sm",children:[R.text," (",R.timeSpent,")"]}),F.jsx("button",{onClick:()=>w(E.id,R.id),className:"text-red-500 opacity-0 group-hover:opacity-100",children:F.jsx(fn,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]},R.id)),F.jsx("textarea",{value:d,onChange:R=>p(R.target.value),placeholder:"Log an accomplishment...",rows:"2",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),F.jsx("input",{type:"text",value:m,onChange:R=>v(R.target.value),placeholder:"Time spent",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),F.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 rounded-lg py-1 font-semibold text-sm",children:"Save Log"})]})]})]},E.id)})})]})};I0.createRoot(document.getElementById("root")).render(F.jsx(ft.StrictMode,{children:F.jsx(YM,{})}));
