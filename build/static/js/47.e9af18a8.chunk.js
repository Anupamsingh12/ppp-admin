(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[47],{139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},3390:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(9379),o=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var l=n(2172),i=function(e,t){return o.createElement(l.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const c=o.forwardRef(i)},5270:(e,t,n)=>{"use strict";var r=n(139),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},7047:(e,t,n)=>{"use strict";n.d(t,{A:()=>se});var r=n(8168),o=n(5043),a=n(4467),l=n(2284),i=n(5544),c=n(3390),s=n(9379);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var f=n(2172),d=function(e,t){return o.createElement(f.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:u}))};const p=o.forwardRef(d);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var m=function(e,t){return o.createElement(f.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:v}))};const y=o.forwardRef(m);var g=n(8139),b=n.n(g),h=n(5270),A=n.n(h),w=n(8802),x=n(2149),E=n(2664),S=n(8678),C=n(8574),O=n(3758),k=n(5296),R=n(8097),P=n(9012),j=n(4734),z=n(5196);const M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var D=function(e,t){return o.createElement(f.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:M}))};const N=o.forwardRef(D);var H=n(5001),I=n(2471),L=n(2701);const T=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,l=e.style,c=e.direction,s=e.maxLength,u=e.autoSize,f=void 0===u||u,d=e.value,p=e.onSave,v=e.onCancel,m=e.onEnd,y=e.component,g=e.enterIcon,h=void 0===g?o.createElement(N,null):g,A=o.useRef(null),w=o.useRef(!1),x=o.useRef(),E=o.useState(d),S=(0,i.A)(E,2),C=S[0],O=S[1];o.useEffect((function(){O(d)}),[d]),o.useEffect((function(){if(A.current&&A.current.resizableTextArea){var e=A.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var k=function(){p(C.trim())},R=y?"".concat(t,"-").concat(y):"",P=b()(t,"".concat(t,"-edit-content"),(0,a.A)({},"".concat(t,"-rtl"),"rtl"===c),r,R);return o.createElement("div",{className:P,style:l},o.createElement(I.A,{ref:A,maxLength:s,value:C,onChange:function(e){var t=e.target;O(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;w.current||(x.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,o=e.metaKey,a=e.shiftKey;x.current!==t||w.current||n||r||o||a||(t===H.A.ENTER?(k(),null===m||void 0===m||m()):t===H.A.ESC&&v())},onCompositionStart:function(){w.current=!0},onCompositionEnd:function(){w.current=!1},onBlur:function(){k()},"aria-label":n,rows:1,autoSize:f}),null!==h?(0,L.Ob)(h,{className:"".concat(t,"-edit-content-confirm")}):null)};function K(e,t){return o.useMemo((function(){var n=!!e;return[n,(0,r.A)((0,r.A)({},t),n&&"object"===(0,l.A)(e)?e:null)]}),[e])}const U=function(e,t){var n=o.useRef(!1);o.useEffect((function(){n.current?e():n.current=!0}),t)};var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const V=o.forwardRef((function(e,t){var n=e.prefixCls,l=e.component,i=void 0===l?"article":l,c=e.className,s=e.setContentRef,u=e.children,f=e.direction,d=B(e,["prefixCls","component","className","setContentRef","children","direction"]),p=o.useContext(k.QO),v=p.getPrefixCls,m=p.direction,y=null!==f&&void 0!==f?f:m,g=t;s&&(g=(0,O.K4)(t,s));var h=v("typography",n),A=b()(h,(0,a.A)({},"".concat(h,"-rtl"),"rtl"===y),c);return o.createElement(i,(0,r.A)({className:A,ref:g},d),u)}));function F(e){var t=(0,l.A)(e);return"string"===t||"number"===t}function W(e,t){for(var n=0,r=[],o=0;o<e.length;o+=1){if(n===t)return r;var a=e[o],l=n+(F(a)?String(a).length:1);if(l>t){var i=t-n;return r.push(String(a).slice(0,i)),r}r.push(a),n=l}return e}const _=function(e){var t=e.enabledMeasure,n=e.children,a=e.text,l=e.width,c=e.fontSize,s=e.rows,u=e.onEllipsis,f=o.useState([0,0,0]),d=(0,i.A)(f,2),p=(0,i.A)(d[0],3),v=p[0],m=p[1],y=p[2],g=d[1],b=o.useState(0),h=(0,i.A)(b,2),A=h[0],w=h[1],S=o.useState(0),C=(0,i.A)(S,2),O=C[0],k=C[1],R=o.useRef(null),P=o.useRef(null),j=o.useMemo((function(){return(0,x.A)(a)}),[a]),z=o.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){F(e)?t+=String(e).length:t+=1})),t}(j)}),[j]),M=o.useMemo((function(){return t&&3===A?n(W(j,m),m<z):n(j,!1)}),[t,A,n,j,m,z]);(0,E.A)((function(){t&&l&&c&&z&&(w(1),g([0,Math.ceil(z/2),z]))}),[t,l,c,a,z,s]),(0,E.A)((function(){var e;1===A&&k((null===(e=R.current)||void 0===e?void 0:e.offsetHeight)||0)}),[A]),(0,E.A)((function(){var e,t;if(O)if(1===A)((null===(e=P.current)||void 0===e?void 0:e.offsetHeight)||0)<=s*O?(w(4),u(!1)):w(2);else if(2===A)if(v!==y){var n=(null===(t=P.current)||void 0===t?void 0:t.offsetHeight)||0,r=v,o=y;v===y-1?o=v:n<=s*O?r=m:o=m;var a=Math.ceil((r+o)/2);g([r,a,o])}else w(3),u(!0)}),[A,v,y,s,O]);var D={width:l,whiteSpace:"normal",margin:0,padding:0},N=function(e,t,n){return o.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.A)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(c/2)},n)},e)};return o.createElement(o.Fragment,null,M,t&&3!==A&&4!==A&&o.createElement(o.Fragment,null,N("lg",R,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===A?N(n(j,!1),P,D):function(e,t){var r=W(j,e);return N(n(r,!0),t,D)}(m,P)))};const Q=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,a=e.children,l=e.tooltipProps;return(null===l||void 0===l?void 0:l.title)&&t?o.createElement(z.A,(0,r.A)({open:!!n&&void 0},l),a):a};var X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function q(e,t,n){return!0===e||void 0===e?t:e||n&&t}function G(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var J=o.forwardRef((function(e,t){var n,s,u,f=e.prefixCls,d=e.className,v=e.style,m=e.type,g=e.disabled,h=e.children,M=e.ellipsis,D=e.editable,N=e.copyable,H=e.component,I=e.title,L=X(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),B=o.useContext(k.QO),F=B.getPrefixCls,W=B.direction,J=(0,R.n)("Text")[0],Y=o.useRef(null),Z=o.useRef(null),$=F("typography",f),ee=(0,C.A)(L,["mark","code","delete","underline","strong","keyboard","italic"]),te=K(D),ne=(0,i.A)(te,2),re=ne[0],oe=ne[1],ae=(0,S.A)(!1,{value:oe.editing}),le=(0,i.A)(ae,2),ie=le[0],ce=le[1],se=oe.triggerType,ue=void 0===se?["icon"]:se,fe=function(e){var t;e&&(null===(t=oe.onStart)||void 0===t||t.call(oe)),ce(e)};U((function(){var e;ie||null===(e=Z.current)||void 0===e||e.focus()}),[ie]);var de=function(e){null===e||void 0===e||e.preventDefault(),fe(!0)},pe=K(N),ve=(0,i.A)(pe,2),me=ve[0],ye=ve[1],ge=o.useState(!1),be=(0,i.A)(ge,2),he=be[0],Ae=be[1],we=o.useRef(),xe={};ye.format&&(xe.format=ye.format);var Ee=function(){window.clearTimeout(we.current)},Se=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),A()(ye.text||String(h)||"",xe),Ae(!0),Ee(),we.current=window.setTimeout((function(){Ae(!1)}),3e3),null===(t=ye.onCopy)||void 0===t||t.call(ye,e)};o.useEffect((function(){return Ee}),[]);var Ce=o.useState(!1),Oe=(0,i.A)(Ce,2),ke=Oe[0],Re=Oe[1],Pe=o.useState(!1),je=(0,i.A)(Pe,2),ze=je[0],Me=je[1],De=o.useState(!1),Ne=(0,i.A)(De,2),He=Ne[0],Ie=Ne[1],Le=o.useState(!1),Te=(0,i.A)(Le,2),Ke=Te[0],Ue=Te[1],Be=o.useState(!1),Ve=(0,i.A)(Be,2),Fe=Ve[0],We=Ve[1],_e=o.useState(!0),Qe=(0,i.A)(_e,2),Xe=Qe[0],qe=Qe[1],Ge=K(M,{expandable:!1}),Je=(0,i.A)(Ge,2),Ye=Je[0],Ze=Je[1],$e=Ye&&!He,et=Ze.rows,tt=void 0===et?1:et,nt=o.useMemo((function(){return!$e||void 0!==Ze.suffix||Ze.onEllipsis||Ze.expandable||re||me}),[$e,Ze,re,me]);(0,E.A)((function(){Ye&&!nt&&(Re((0,j.F)("webkitLineClamp")),Me((0,j.F)("textOverflow")))}),[nt,Ye]);var rt=o.useMemo((function(){return!nt&&(1===tt?ze:ke)}),[nt,ze,ke]),ot=$e&&(rt?Fe:Ke),at=$e&&1===tt&&rt,lt=$e&&tt>1&&rt,it=function(e){var t;Ie(!0),null===(t=Ze.onExpand)||void 0===t||t.call(Ze,e)},ct=o.useState(0),st=(0,i.A)(ct,2),ut=st[0],ft=st[1],dt=o.useState(0),pt=(0,i.A)(dt,2),vt=pt[0],mt=pt[1],yt=function(e){var t;Ue(e),Ke!==e&&(null===(t=Ze.onEllipsis)||void 0===t||t.call(Ze,e))};o.useEffect((function(){var e=Y.current;if(Ye&&rt&&e){var t=lt?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Fe!==t&&We(t)}}),[Ye,rt,h,lt,Xe]),o.useEffect((function(){var e=Y.current;if("undefined"!==typeof IntersectionObserver&&e&&rt&&$e){var t=new IntersectionObserver((function(){qe(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[rt,$e]);var gt={};gt=!0===Ze.tooltip?{title:null!==(n=oe.text)&&void 0!==n?n:h}:o.isValidElement(Ze.tooltip)?{title:Ze.tooltip}:"object"===(0,l.A)(Ze.tooltip)?(0,r.A)({title:null!==(s=oe.text)&&void 0!==s?s:h},Ze.tooltip):{title:Ze.tooltip};var bt=o.useMemo((function(){var e=function(e){return["string","number"].includes((0,l.A)(e))};if(Ye&&!rt)return e(oe.text)?oe.text:e(h)?h:e(I)?I:e(gt.title)?gt.title:void 0}),[Ye,rt,I,gt.title,ot]);if(ie)return o.createElement(T,{value:null!==(u=oe.text)&&void 0!==u?u:"string"===typeof h?h:"",onSave:function(e){var t;null===(t=oe.onChange)||void 0===t||t.call(oe,e),fe(!1)},onCancel:function(){var e;null===(e=oe.onCancel)||void 0===e||e.call(oe),fe(!1)},onEnd:oe.onEnd,prefixCls:$,className:d,style:v,direction:W,component:H,maxLength:oe.maxLength,autoSize:oe.autoSize,enterIcon:oe.enterIcon});var ht=function(){var e,t=Ze.expandable,n=Ze.symbol;return t?(e=n||J.expand,o.createElement("a",{key:"expand",className:"".concat($,"-expand"),onClick:it,"aria-label":J.expand},e)):null},At=function(){if(re){var e=oe.icon,t=oe.tooltip,n=(0,x.A)(t)[0]||J.edit,r="string"===typeof n?n:"";return ue.includes("icon")?o.createElement(z.A,{key:"edit",title:!1===t?"":n},o.createElement(P.A,{ref:Z,className:"".concat($,"-edit"),onClick:de,"aria-label":r},e||o.createElement(y,{role:"button"}))):null}},wt=function(){if(me){var e=ye.tooltips,t=ye.icon,n=G(e),r=G(t),a=he?q(n[1],J.copied):q(n[0],J.copy),l=he?J.copied:J.copy,i="string"===typeof a?a:l;return o.createElement(z.A,{key:"copy",title:a},o.createElement(P.A,{className:b()("".concat($,"-copy"),he&&"".concat($,"-copy-success")),onClick:Se,"aria-label":i},he?q(r[1],o.createElement(c.A,null),!0):q(r[0],o.createElement(p,null),!0)))}};return o.createElement(w.A,{onResize:function(e,t){var n,r=e.offsetWidth;ft(r),mt(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},disabled:!$e||rt},(function(n){return o.createElement(Q,{tooltipProps:gt,enabledEllipsis:$e,isEllipsis:ot},o.createElement(V,(0,r.A)({className:b()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat($,"-").concat(m),m),"".concat($,"-disabled"),g),"".concat($,"-ellipsis"),Ye),"".concat($,"-single-line"),$e&&1===tt),"".concat($,"-ellipsis-single-line"),at),"".concat($,"-ellipsis-multiple-line"),lt),d),prefixCls:f,style:(0,r.A)((0,r.A)({},v),{WebkitLineClamp:lt?tt:void 0}),component:H,ref:(0,O.K4)(n,Y,t),direction:W,onClick:ue.includes("text")?de:void 0,"aria-label":null===bt||void 0===bt?void 0:bt.toString(),title:I},ee),o.createElement(_,{enabledMeasure:$e&&!rt,text:h,rows:tt,width:ut,fontSize:vt,onEllipsis:yt},(function(t,n){var r=t;t.length&&n&&bt&&(r=o.createElement("span",{key:"show-content","aria-hidden":!0},r));var a=function(e,t){var n=e.mark,r=e.code,a=e.underline,l=e.delete,i=e.strong,c=e.keyboard,s=e.italic,u=t;function f(e,t){e&&(u=o.createElement(t,{},u))}return f(i,"strong"),f(a,"u"),f(l,"del"),f(r,"code"),f(n,"mark"),f(c,"kbd"),f(s,"i"),u}(e,o.createElement(o.Fragment,null,r,function(e){return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Ze.suffix,(t=e,[t&&ht(),At(),wt()])];var t}(n)));return a}))))}))}));const Y=J;var Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const $=o.forwardRef((function(e,t){var n=e.ellipsis,a=e.rel,l=Z(e,["ellipsis","rel"]),i=(0,r.A)((0,r.A)({},l),{rel:void 0===a&&"_blank"===l.target?"noopener noreferrer":a});return delete i.navigate,o.createElement(Y,(0,r.A)({},i,{ref:t,ellipsis:!!n,component:"a"}))}));const ee=o.forwardRef((function(e,t){return o.createElement(Y,(0,r.A)({ref:t},e,{component:"div"}))}));var te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ne=function(e,t){var n=e.ellipsis,a=te(e,["ellipsis"]),i=o.useMemo((function(){return n&&"object"===(0,l.A)(n)?(0,C.A)(n,["expandable","rows"]):n}),[n]);return o.createElement(Y,(0,r.A)({ref:t},a,{ellipsis:i,component:"span"}))};const re=o.forwardRef(ne);var oe=n(9592),ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},le=(0,oe.p)(1,2,3,4,5);const ie=o.forwardRef((function(e,t){var n,a=e.level,l=void 0===a?1:a,i=ae(e,["level"]);return n=le.includes(l)?"h".concat(l):"h1",o.createElement(Y,(0,r.A)({ref:t},i,{component:n}))}));var ce=V;ce.Text=re,ce.Link=$,ce.Title=ie,ce.Paragraph=ee;const se=ce}}]);
//# sourceMappingURL=47.e9af18a8.chunk.js.map