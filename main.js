!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=85)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(47))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(32),i=r(1),u=r(33),c=r(39),a=r(61),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(5),o=r(8),i=r(10);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(6);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(5),o=r(26),i=r(7),u=r(15),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(24).f,i=r(4),u=r(28),c=r(16),a=r(50),f=r(56);t.exports=function(t,n){var r,s,l,p,v,h=t.target,y=t.global,d=t.stat;if(r=y?e:d?e[h]||c(h,{}):(e[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,r){var e=r(25),o=r(14);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(6);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(4);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(32),o=r(33),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(21),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(14);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(5),o=r(48),i=r(10),u=r(12),c=r(15),a=r(1),f=r(26),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(3),o=r(13),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(5),o=r(3),i=r(27);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(6),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(4),i=r(1),u=r(16),c=r(29),a=r(31),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,r){var e=r(30),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(16),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},function(t,n,r){var e,o,i,u=r(49),c=r(0),a=r(6),f=r(4),s=r(1),l=r(17),p=r(19),v=c.WeakMap;if(u){var h=new v,y=h.get,d=h.has,g=h.set;e=function(t,n){return g.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(18),o=r(30);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(52),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(1),o=r(12),i=r(36).indexOf,u=r(19);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(12),o=r(20),i=r(54),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){"use strict";var e=r(57).forEach,o=r(40),i=r(41),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){var e=r(58);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(5),o=r(3),i=r(1),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){"use strict";var e,o,i,u=r(43),c=r(4),a=r(1),f=r(2),s=r(18),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(1),o=r(23),i=r(17),u=r(76),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(8).f,o=r(1),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){},function(t,n,r){"use strict";var e=r(9),o=r(37);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(29),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(1),o=r(51),i=r(24),u=r(8);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){var e=r(34),o=r(53),i=r(55),u=r(7);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(35),o=r(22).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(21),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(38),o=r(25),i=r(23),u=r(20),c=r(59),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,h,y,d){for(var g,m,x=i(v),b=o(x),S=e(h,y,3),O=u(b.length),w=0,C=d||c,j=n?C(v,O):r?C(v,0):void 0;O>w;w++)if((p||w in b)&&(m=S(g=b[w],w,x),t))if(n)j[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(j,g)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(6),o=r(60),i=r(2)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(39);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(9),o=r(63);e({target:"Array",stat:!0,forced:!r(70)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(38),o=r(23),i=r(64),u=r(65),c=r(20),a=r(66),f=r(67);t.exports=function(t){var n,r,s,l,p,v,h=o(t),y="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,x=f(h),b=0;if(m&&(g=e(g,d>2?arguments[2]:void 0,2)),null==x||y==Array&&u(x))for(r=new y(n=c(h.length));n>b;b++)v=m?g(h[b],b):h[b],a(r,b,v);else for(p=(l=x.call(h)).next,r=new y;!(s=p.call(l)).done;b++)v=m?i(l,g,[s.value,b],!0):s.value,a(r,b,v);return r.length=b,r}},function(t,n,r){var e=r(7);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(2),o=r(11),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){"use strict";var e=r(15),o=r(8),i=r(10);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(68),o=r(11),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(69),o=r(13),i=r(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(2)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(9),o=r(36).indexOf,i=r(40),u=r(41),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=u("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(73).charAt,o=r(31),i=r(74),u="String Iterator",c=o.set,a=o.getterFor(u);i(String,"String",(function(t){c(this,{type:u,string:String(t),index:0})}),(function(){var t,n=a(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(21),o=r(14),i=function(t){return function(n,r){var i,u,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e=r(9),o=r(75),i=r(43),u=r(81),c=r(44),a=r(4),f=r(28),s=r(2),l=r(18),p=r(11),v=r(42),h=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g="keys",m="values",x="entries",b=function(){return this};t.exports=function(t,n,r,s,v,S,O){o(r,n,s);var w,C,j,E=function(t){if(t===v&&L)return L;if(!y&&t in T)return T[t];switch(t){case g:case m:case x:return function(){return new r(this,t)}}return function(){return new r(this)}},P=n+" Iterator",k=!1,T=t.prototype,A=T[d]||T["@@iterator"]||v&&T[v],L=!y&&A||E(v),I="Array"==n&&T.entries||A;if(I&&(w=i(I.call(new t)),h!==Object.prototype&&w.next&&(l||i(w)===h||(u?u(w,h):"function"!=typeof w[d]&&a(w,d,b)),c(w,P,!0,!0),l&&(p[P]=b))),v==m&&A&&A.name!==m&&(k=!0,L=function(){return A.call(this)}),l&&!O||T[d]===L||a(T,d,L),p[n]=L,v)if(C={values:E(m),keys:S?L:E(g),entries:E(x)},O)for(j in C)(y||k||!(j in T))&&f(T,j,C[j]);else e({target:n,proto:!0,forced:y||k},C);return C}},function(t,n,r){"use strict";var e=r(42).IteratorPrototype,o=r(77),i=r(10),u=r(44),c=r(11),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,r){var e=r(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e,o=r(7),i=r(78),u=r(22),c=r(19),a=r(80),f=r(27),s=r(17),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},h=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;h=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete h.prototype[u[r]];return h()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=h(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(5),o=r(8),i=r(7),u=r(79);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(35),o=r(22);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(34);t.exports=e("document","documentElement")},function(t,n,r){var e=r(7),o=r(82);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(6);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){var e=r(0),o=r(84),i=r(37),u=r(4);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";r.r(n);r(45),r(46),r(62),r(71),r(72),r(83);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.field=document.querySelector(".field"),this.cells=Array.from(document.getElementsByClassName("field-cell")),this.image=document.querySelector(".cell-image"),this.activePosition=null,this.cellClickListeners=[],this.scoreCountElement=document.querySelector(".score-count"),this.spawnCountElement=document.querySelector(".spawn-count"),this.registerEvents()}var n,r,o;return n=t,(r=[{key:"addCellClickListener",value:function(t){this.cellClickListeners.push(t)}},{key:"hideImage",value:function(){var t=this.field.querySelector(".cell-image");null!==t&&t.remove()}},{key:"showImage",value:function(t){var n=this.image.cloneNode(!0);n.style.display="",this.cells[t].append(n),this.activePosition=t}},{key:"redrawUi",value:function(t,n,r){this.scoreCountElement.innerText=n,this.spawnCountElement.innerText=r,this.hideImage(),this.showImage(t)}},{key:"onCellClick",value:function(t){var n=this.cells.indexOf(t.currentTarget);this.cellClickListeners.forEach((function(t){return t.call(null,n)}))}},{key:"registerEvents",value:function(){var t=this;this.cells.forEach((function(n){n.addEventListener("click",(function(n){return t.onCellClick(n)}))}))}}])&&e(n.prototype,r),o&&e(n,o),t}();function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gamePlay=new o,this.intervalId=null,this.spawnDelay=1e3,this.spawnCount=0,this.scoreCount=0,this.lastClickIndex=null,this.gameStart()}var n,r,e;return n=t,(r=[{key:"onCellClick",value:function(t){this.gamePlay.activePosition===t&&t!==this.lastClickIndex&&(this.scoreCount+=1,this.lastClickIndex=t,this.spawnCount>0&&(this.spawnCount-=1),this.gamePlay.hideImage())}},{key:"positionGeneration",value:function(){for(;;){var t=(n=this.gamePlay.cells.length,Math.floor(Math.random()*Math.floor(n)));if(t!==this.gamePlay.activePosition){this.spawnCount>=5?this.gameOver():this.gamePlay.redrawUi(t,this.scoreCount,this.spawnCount),this.spawnCount+=1;break}}var n}},{key:"gameStart",value:function(){this.registerEvents()}},{key:"gameOver",value:function(){clearInterval(this.intervalId),alert("Вы проиграли!"),document.location.reload()}},{key:"registerEvents",value:function(){this.gamePlay.addCellClickListener(this.onCellClick.bind(this)),this.intervalId=setInterval(this.positionGeneration.bind(this),this.spawnDelay)}}])&&i(n.prototype,r),e&&i(n,e),t}();document.addEventListener("DOMContentLoaded",new u)}]);