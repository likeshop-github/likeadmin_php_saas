import{c as N}from"./color-name-BQ5IbGbl.js";var g=N,D={getRgba:v,getHsla:l,getRgb:b,getHsl:w,getHwb:S,getAlpha:x,hexString:H,rgbString:I,rgbaString:m,percentString:A,percentaString:p,hslString:R,hslaString:F,hwbString:$,keyword:k};function v(r){if(r){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,f=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,d=/(\D+)/,i=[0,0,0],u=1,s=r.match(e);if(s){s=s[1];for(var t=0;t<i.length;t++)i[t]=parseInt(s[t]+s[t],16)}else if(s=r.match(n)){s=s[1];for(var t=0;t<i.length;t++)i[t]=parseInt(s.slice(t*2,t*2+2),16)}else if(s=r.match(f)){for(var t=0;t<i.length;t++)i[t]=parseInt(s[t+1]);u=parseFloat(s[4])}else if(s=r.match(a)){for(var t=0;t<i.length;t++)i[t]=Math.round(parseFloat(s[t+1])*2.55);u=parseFloat(s[4])}else if(s=r.match(d)){if(s[1]=="transparent")return[0,0,0,0];if(i=g[s[1]],!i)return}for(var t=0;t<i.length;t++)i[t]=o(i[t],0,255);return!u&&u!=0?u=1:u=o(u,0,1),i[3]=u,i}}function l(r){if(r){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=r.match(e);if(n){var f=parseFloat(n[4]),a=o(parseInt(n[1]),0,360),d=o(parseFloat(n[2]),0,100),i=o(parseFloat(n[3]),0,100),u=o(isNaN(f)?1:f,0,1);return[a,d,i,u]}}}function S(r){if(r){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=r.match(e);if(n){var f=parseFloat(n[4]),a=o(parseInt(n[1]),0,360),d=o(parseFloat(n[2]),0,100),i=o(parseFloat(n[3]),0,100),u=o(isNaN(f)?1:f,0,1);return[a,d,i,u]}}}function b(r){var e=v(r);return e&&e.slice(0,3)}function w(r){var e=l(r);return e&&e.slice(0,3)}function x(r){var e=v(r);if(e)return e[3];if(e=l(r))return e[3];if(e=S(r))return e[3]}function H(r){return"#"+c(r[0])+c(r[1])+c(r[2])}function I(r,e){return e<1||r[3]&&r[3]<1?m(r,e):"rgb("+r[0]+", "+r[1]+", "+r[2]+")"}function m(r,e){return e===void 0&&(e=r[3]!==void 0?r[3]:1),"rgba("+r[0]+", "+r[1]+", "+r[2]+", "+e+")"}function A(r,e){if(e<1||r[3]&&r[3]<1)return p(r,e);var n=Math.round(r[0]/255*100),f=Math.round(r[1]/255*100),a=Math.round(r[2]/255*100);return"rgb("+n+"%, "+f+"%, "+a+"%)"}function p(r,e){var n=Math.round(r[0]/255*100),f=Math.round(r[1]/255*100),a=Math.round(r[2]/255*100);return"rgba("+n+"%, "+f+"%, "+a+"%, "+(e||r[3]||1)+")"}function R(r,e){return e<1||r[3]&&r[3]<1?F(r,e):"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)"}function F(r,e){return e===void 0&&(e=r[3]!==void 0?r[3]:1),"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+e+")"}function $(r,e){return e===void 0&&(e=r[3]!==void 0?r[3]:1),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+(e!==void 0&&e!==1?", "+e:"")+")"}function k(r){return M[r.slice(0,3)]}function o(r,e,n){return Math.min(Math.max(e,r),n)}function c(r){var e=r.toString(16).toUpperCase();return e.length<2?"0"+e:e}var M={};for(var h in g)M[g[h]]=h;export{D as c};
