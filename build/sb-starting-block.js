!function(){var t,n={391:function(t,n,r){"use strict";var e=window.wp.element,o=window.wp.i18n,i=r(184),s=r.n(i),u=window.wp.blockEditor,a=window.wp.serverSideRender,l=r.n(a),c=window.wp.blocks;window.wp.components,window.lodash,(0,c.registerBlockType)("oik-sb/sb-starting-block",{example:{},edit:function(t){let{attributes:n,className:r,isSelected:i,setAttributes:a}=t;const{textAlign:c}=n,f=(0,u.useBlockProps)({className:s()({[`has-text-align-${c}`]:c})});return(0,e.createElement)("div",f,(0,e.createElement)("p",null,(0,o.__)("Starting block translatable string","sb-starting-block")),(0,e.createElement)(l(),{block:"oik-sb/sb-starting-block",attributes:n}))},save:function(){return null}})},184:function(t,n){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&t.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)e.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,t=[],e.O=function(n,r,o,i){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(u=!1,i<s&&(s=i));if(u){t.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={811:0,221:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,s=r[0],u=r[1],a=r[2],l=0;if(s.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(a)var c=a(e)}for(n&&n(r);l<s.length;l++)i=s[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},r=self.webpackChunksb_starting_block=self.webpackChunksb_starting_block||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=e.O(void 0,[221],(function(){return e(391)}));o=e.O(o)}();