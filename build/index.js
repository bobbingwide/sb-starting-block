!function(){var e,t={257:function(e,t,n){"use strict";var r=window.wp.element,o=window.wp.i18n,i=n(184),s=n.n(i),c=window.wp.blockEditor,l=window.wp.serverSideRender,u=n.n(l),a=window.wp.blocks;window.wp.components,window.lodash,(0,a.registerBlockType)("oik-sb/sb-starting-block",{example:{},edit:function(e){var t,n,o,i=e.attributes,l=(e.className,e.isSelected,e.setAttributes,i.textAlign),a=(0,c.useBlockProps)({className:s()((t={},n="has-text-align-".concat(l),o=l,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t))});return(0,r.createElement)("div",a,(0,r.createElement)(u(),{block:"oik-sb/sb-starting-block",attributes:i}))},save:function(){return null}}),(0,a.registerBlockType)("oik-sb/second-block",{example:{},edit:function(){return(0,r.createElement)("p",(0,c.useBlockProps)(),(0,o.__)("Second block – hello from the editor!","sb-starting-block"))},save:function(){return(0,r.createElement)("p",c.useBlockProps.save(),(0,o.__)("Second block – hello from the saved content!","sb-starting-block"))}})},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var s=1/0;for(a=0;a<e.length;a++){n=e[a][0],o=e[a][1],i=e[a][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(c=!1,i<s&&(s=i));if(c){e.splice(a--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,s=n[0],c=n[1],l=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var a=l(r)}for(t&&t(n);u<s.length;u++)i=s[u],r.o(e,i)&&e[i]&&e[i][0](),e[s[u]]=0;return r.O(a)},n=self.webpackChunksb_starting_block=self.webpackChunksb_starting_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(257)}));o=r.O(o)}();