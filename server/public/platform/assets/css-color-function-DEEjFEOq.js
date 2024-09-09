import{c as E}from"./color-B0v57BL7.js";import{b as S}from"./balanced-match-D4yLO45F.js";import{r as z}from"./ms-CzQ2E3wO.js";var k={},y={exports:{}};function N(t){r.debug=r,r.default=r,r.coerce=c,r.disable=i,r.enable=C,r.enabled=a,r.humanize=z(),Object.keys(t).forEach(function(o){r[o]=t[o]}),r.instances=[],r.names=[],r.skips=[],r.formatters={};function u(o){for(var n=0,e=0;e<o.length;e++)n=(n<<5)-n+o.charCodeAt(e),n|=0;return r.colors[Math.abs(n)%r.colors.length]}r.selectColor=u;function r(o){var n;function e(){if(e.enabled){for(var s=arguments.length,f=new Array(s),h=0;h<s;h++)f[h]=arguments[h];var v=e,p=Number(new Date),I=p-(n||p);v.diff=I,v.prev=n,v.curr=p,n=p,f[0]=r.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var F=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(b,j){if(b==="%%")return b;F++;var g=r.formatters[j];if(typeof g=="function"){var R=f[F];b=g.call(v,R),f.splice(F,1),F--}return b}),r.formatArgs.call(v,f);var _=v.log||r.log;_.apply(v,f)}}return e.namespace=o,e.enabled=r.enabled(o),e.useColors=r.useColors(),e.color=u(o),e.destroy=l,e.extend=d,typeof r.init=="function"&&r.init(e),r.instances.push(e),e}function l(){var o=r.instances.indexOf(this);return o!==-1?(r.instances.splice(o,1),!0):!1}function d(o,n){return r(this.namespace+(typeof n>"u"?":":n)+o)}function C(o){r.save(o),r.names=[],r.skips=[];var n,e=(typeof o=="string"?o:"").split(/[\s,]+/),s=e.length;for(n=0;n<s;n++)e[n]&&(o=e[n].replace(/\*/g,".*?"),o[0]==="-"?r.skips.push(new RegExp("^"+o.substr(1)+"$")):r.names.push(new RegExp("^"+o+"$")));for(n=0;n<r.instances.length;n++){var f=r.instances[n];f.enabled=r.enabled(f.namespace)}}function i(){r.enable("")}function a(o){if(o[o.length-1]==="*")return!0;var n,e;for(n=0,e=r.skips.length;n<e;n++)if(r.skips[n].test(o))return!1;for(n=0,e=r.names.length;n<e;n++)if(r.names[n].test(o))return!0;return!1}function c(o){return o instanceof Error?o.stack||o.message:o}return r.enable(r.load()),r}var B=N;(function(t,u){var r={};function l(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(f){return typeof f}:l=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l(e)}u.log=i,u.formatArgs=C,u.save=a,u.load=c,u.useColors=d,u.storage=o(),u.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function d(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function C(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!!this.useColors){var s="color: "+this.color;e.splice(1,0,s,"color: inherit");var f=0,h=0;e[0].replace(/%[a-zA-Z%]/g,function(v){v!=="%%"&&(f++,v==="%c"&&(h=f))}),e.splice(h,0,s)}}function i(){var e;return(typeof console>"u"?"undefined":l(console))==="object"&&console.log&&(e=console).log.apply(e,arguments)}function a(e){try{e?u.storage.setItem("debug",e):u.storage.removeItem("debug")}catch{}}function c(){var e;try{e=u.storage.getItem("debug")}catch{}return!e&&typeof process<"u"&&"env"in process&&(e=r.DEBUG),e}function o(){try{return localStorage}catch{}}t.exports=B(u);var n=t.exports.formatters;n.j=function(e){try{return JSON.stringify(e)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}})(y,y.exports);var D=y.exports,L=S,m=D("css-color-function:parse"),M=U;function U(t){typeof t!="string"&&(t=t.toString()),m("string %s",t);function u(n){var e=n.exec(t);if(e)return t=t.slice(e[0].length),e.slice(1)}function r(){u(/^\s+/)}function l(){var n=u(/^\)/);if(n)return m("rparen"),n}function d(){var n=u(/^([\+\-\*])/);if(n){var e={};return e.type="modifier",e.value=n[0],m("modifier %o",e),e}}function C(){var n=u(/^([^\)\s]+)/);if(n){var e={};return e.type="number",e.value=n[0],m("number %o",e),e}}function i(){for(var n=[],e;e=d()||o()||C();)n.push(e),r();return m("args %o",n),n}function a(){var n=u(/^(\w+)\(/);if(n){r();var e={};return e.type="function",e.name=n[0],e.arguments=i(),l(),m("adjuster %o",e),e}}function c(){var n={};n.type="color";var e=u(/([^\)\s]+)/)[0];if(e.indexOf("(")!=-1){var s=u(/([^\)]*?\))/)[0];e=e+s}return n.value=e,r(),n}function o(){if(t.match(/^color\(/)){var n=L("(",")",t);if(!n)throw new SyntaxError("Missing closing parenthese for '"+t+"'");if(n.body==="")throw new SyntaxError("color() function cannot be empty");t=n.body,r();var e={};e.type="function",e.name="color",e.arguments=[o()||c()],m("function arguments %o",e.arguments);for(var s;s=a();)e.arguments.push(s),r();return t=n.post,r(),m("function %o",e),e}}return o()}var O={};(function(t){var u=E;t.red=r("red"),t.blue=r("blue"),t.green=r("green"),t.alpha=t.a=r("alpha"),t.rgb=function(){},t.hue=t.h=l("hue"),t.saturation=t.s=l("saturation"),t.lightness=t.l=l("lightness"),t.whiteness=t.w=l("whiteness"),t.blackness=t.b=l("blackness"),t.blend=function(i,a){var c=i.alpha();i.alpha(1);var o=new u(a[0].value),n=1-parseInt(a[1].value,10)/100;i.mix(o,n).alpha(c)},t.tint=function(i,a){a.unshift({type:"argument",value:"white"}),t.blend(i,a)},t.shade=function(i,a){a.unshift({type:"argument",value:"black"}),t.blend(i,a)},t.contrast=function(i,a){a.length==0&&a.push({type:"argument",value:"100%"});var c=1-parseInt(a[0].value,10)/100,o=i.luminosity()<.5?new u({h:i.hue(),w:100,b:0}):new u({h:i.hue(),w:0,b:100}),n=o,e=4.5;if(i.contrast(o)>e){var n=C(e,i,o),s=n.alpha();n.alpha(1),n.mix(o,c).alpha(s)}i.hwb(n.hwb())};function r(i){return function(a,c){var o;c[0].type=="modifier"&&(o=c.shift().value);var n=c[0].value;n.indexOf("%")!=-1?(n=parseInt(n,10)/100,o?o!="*"&&(n=a[i]()*n):n=n*(i=="alpha"?1:255)):n=Number(n),a[i](d(a[i](),n,o))}}function l(i){return function(a,c){var o;c[0].type=="modifier"&&(o=c.shift().value);var n=parseFloat(c[0].value,10);a[i](d(a[i](),n,o))}}function d(i,a,c){switch(c){case"+":return i+a;case"-":return i-a;case"*":return i*a;default:return a}}function C(i,a,c){a.hue();for(var o=a.clone(),n=a.whiteness(),e=a.blackness(),s=c.whiteness(),f=c.blackness();Math.abs(n-s)>1||Math.abs(e-f)>1;){var h=Math.round((s+n)/2),v=Math.round((f+e)/2);o.whiteness(h),o.blackness(v),o.contrast(a)>i?(s=h,f=v):(n=h,e=v)}return o}})(O);var G=S,J=E,W=M,A=O,Z=$;function $(t){var u=t.indexOf("color(");if(u==-1)return t;if(t=t.slice(u),t=G("(",")",t),!t)throw new SyntaxError("Missing closing parenthese for '"+t+"'");var r=W("color("+t.body+")");return w(r)+$(t.post)}function w(t){var u=new J(t.arguments[0].type=="function"?w(t.arguments[0]):t.arguments[0].value),r=t.arguments.slice(1);return r.forEach(function(l){var d=l.name;if(!A[d])throw new Error("Unknown <color-adjuster> '"+d+"'");l.arguments.forEach(function(C){C.type=="function"&&C.name=="color"&&(C.value=w(C),C.type="color",delete C.name)}),A[d](u,l.arguments)}),u.rgbString()}var q=Z,x=M;k.convert=q;k.parse=x;export{k as l};
