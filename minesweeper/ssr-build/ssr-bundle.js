module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/demos/minesweeper/",n(n.s="QfWi")}({"5s8I":function(t,e,n){t.exports={topRow:"NbAnYrWSfkuenLuTJ6QS5",bottomRow:"_2p47jEkoTBrzYEJW6FmyjW"}},"E+vy":function(t,e,n){t.exports={container:"d_mFF1jruGjQl7_HGI8X_",square:"_3BBjZ1LPKgQUmtc8IO0vSh"}},HVBM:function(t,e,n){t.exports={filters:"_1cWFJaZg9-KUzz2-tn8yCU",summaries:"_2G422t4yLLZ-TCrtj4fWkT"}},HteQ:function(t,e){t.exports=require("preact")},L7Kd:function(t,e,n){t.exports={header:"_3oiVJRdVy6_Sqo1_K0EJ7o",active:"_2VNCoyd6uprVuGrsbL3h4C"}},QfWi:function(t,e,n){"use strict";n.r(e);n("pyAK");var r=n("HteQ"),i=n("Y3FI"),o=n("ox/y"),a=n("L7Kd"),u="Play",c="/demos/minesweeper/",s="Stats",f="/demos/minesweeper/stats";function l(){return Object(r.h)("header",{className:a.header},Object(r.h)("h1",null,"Minesweeper Game"),Object(r.h)("nav",null,Object(r.h)(o.Link,{activeClassName:a.active,href:c},u),Object(r.h)(o.Link,{activeClassName:a.active,href:f},s)))}var p,h,d,m=0,b=[],v=r.options.__r,y=r.options.diffed,g=r.options.__c,O=r.options.unmount;function j(t,e){r.options.__h&&r.options.__h(h,t,m||e),m=0;var n=h.__H||(h.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function _(t){return m=1,w(T,t)}function w(t,e,n){var r=j(p++,2);return r.__c||(r.__c=h,r.__=[n?n(e):T(void 0,e),function(e){var n=t(r.__[0],e);r.__[0]!==n&&(r.__[0]=n,r.__c.setState({}))}]),r.__}function A(t,e){var n=j(p++,3);!r.options.__s&&R(n.__H,e)&&(n.__=t,n.__H=e,h.__H.__h.push(n))}function N(){b.some((function(t){if(t.__P)try{t.__H.__h.forEach(P),t.__H.__h.forEach(x),t.__H.__h=[]}catch(e){return t.__H.__h=[],r.options.__e(e,t.__v),!0}})),b=[]}function P(t){t.t&&t.t()}function x(t){var e=t.__();"function"==typeof e&&(t.t=e)}function R(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function T(t,e){return"function"==typeof e?e(t):e}function S(t,e){return e(t)}function E(t,e){return function(t,e,n){var r=t.x,i=t.y;return[{x:r-1,y:i-1},{x:r,y:i-1},{x:r+1,y:i-1},{x:r-1,y:i},{x:r+1,y:i},{x:r-1,y:i+1},{x:r,y:i+1},{x:r+1,y:i+1}].filter((function(t){return function(t,e,n){var r=t.x,i=t.y;return r>=0&&i>=0&&r<e&&i<n}(t,e,n)}))}(t.position,e[0].length,e.length).map((function(t){var n=t.x,r=t.y;return e[r][n]}))}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t,e){return E(t,e).reduce((function(t,e){return e.mine?t+1:t}),t.mine?1:0)}function I(t,e,n){return function(t){return t.map((function(e){return e.map((function(e){return M({},e,{adjacentMines:L(e,t)})}))}))}(function(t,e){return t.map((function(t,n){return t.map((function(t,r){return M({},t,{position:{x:r,y:n},mine:0===Math.floor(Math.random()*e)})}))}))}(function(t,e){return new Array(t).fill(new Array(e).fill({position:{x:0,y:0},revealed:!1,flagged:!1,mine:!1,adjacentMines:0}))}(t,e),n))}function C(t){var e=t.height,n=t.width,r=t.mineRatio,i=t.name;return{board:I(e,n,r),status:"START",difficultyName:i,flagging:!1,startedAt:null,finishedAt:null}}r.options.__r=function(t){v&&v(t),p=0,(h=t.__c).__H&&(h.__H.__h.forEach(P),h.__H.__h.forEach(x),h.__H.__h=[])},r.options.diffed=function(t){y&&y(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==b.push(e)&&d===r.options.requestAnimationFrame||((d=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(N))}},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(P),t.__h=t.__h.filter((function(t){return!t.__||x(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),g&&g(t,e)},r.options.unmount=function(t){O&&O(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){r.options.__e(t,e.__v)}}};var H={name:"EASY",displayName:"Easy",height:10,width:10,mineRatio:8},F={name:"NORMAL",displayName:"Normal",height:15,width:25,mineRatio:8},W={name:"HARD",displayName:"Hard",height:20,width:40,mineRatio:8},U={name:"EASY+",displayName:"Easy+",height:10,width:10,mineRatio:7},K={name:"NORMAL+",displayName:"Normal+",height:15,width:25,mineRatio:7},q={name:"HARD+",displayName:"Hard+",height:20,width:40,mineRatio:7},G={name:"EASY++",displayName:"Easy++",height:10,width:10,mineRatio:6},Y={name:"NORMAL++",displayName:"Normal++",height:15,width:25,mineRatio:6},B={name:"HARD++",displayName:"Hard++",height:20,width:40,mineRatio:6},V=[H,U,G,F,K,Y,W,q,B];function Q(t,e){return e(t)}function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X(t){return t.map((function(t){return t.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){Z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{revealed:!!t.mine||t.revealed})}))}))}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t,e){return E(t,e).filter((function(t){return!t.mine&&!t.revealed}))}function nt(t,e){var n=void 0;return t.find((function(t){var r=et(t,e);return!!(n=r.length?r[0]:void 0)})),n}function rt(t,e){return 0===t.adjacentMines&&et(t,e).length>0}function it(t,e){var n=t.position,r=n.y,i=n.x;e[r][i]=$({},t,{revealed:!0})}function ot(t,e){var n=[],r=t;for(e=e.map((function(t){return t}));r;)it(r,e),n=rt(r,e)?[].concat(n,[r]):n.filter((function(t){return t!==r})),r=nt(n,e);return e}function at(t,e){return function(t){var e,n,r,i,o=t.board,a=t.flagging,u=t.startedAt,c=t.difficultyName,s=(e=function(t){var e=!1,n=!1,r=!1;return t.forEach((function(t){return t.forEach((function(t){!e&&t.revealed&&(e=!0),!n&&t.revealed&&t.mine&&(n=!0),r||t.revealed||t.mine||(r=!0)}))})),{gameStarted:e,mineRevealed:n,nonMineNotRevealed:r}}(o),n=e.gameStarted,r=e.mineRevealed,i=e.nonMineNotRevealed,n?r?"FAIL":i?"PLAY":"WIN":"START"),f=function(t){return"FAIL"===t||"WIN"===t}(s);return{board:f?X(o):o,difficultyName:c,status:s,flagging:a,startedAt:u,finishedAt:f?Date.now():null}}($({},e,{board:ot(t,e.board),startedAt:e.startedAt||Date.now()}))}function ut(t){try{localStorage.setItem("stats",JSON.stringify(t))}catch(t){}}function ct(t){var e=t.startedAt,n=t.finishedAt,r=t.difficultyName;if(!e||!n)throw new Error("Game is unfinished!");return{difficultyName:r,win:"WIN"===t.status,startedAt:e,finishedAt:n}}function st(t){return function(e){return function(t,e){var n=t.todayOnly,r=t.results,i={todayOnly:n,results:[].concat(r,[ct(e)])};return ut(i),i}(e,t)}}var ft=n("E+vy"),lt=n("b6eC");function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){dt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mt(t,e){var n=e.board.map((function(e){return e.map((function(e){return e.position.y===t.position.y&&e.position.x===t.position.x?function(t){return ht({},t,{flagged:!t.flagged})}(e):e}))}));return ht({},e,{board:n})}function bt(t){var e=_(0),n=e[0],i=e[1],o=t.square,a=t.status,u=t.flagging,c=t.dispatch,s=t.statsDispatch,f="FAIL"===a||"WIN"===a,l=o.flagged?lt.flagged:"",p=u?lt.flagging:"";function h(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}function d(){o.flagged||c(function(t,e){return function(n){var r=at(t,n);return!n.finishedAt&&r.finishedAt&&e(st(r)),r}}(o,s))}function m(){if(!u){var t=window.setTimeout(d,500);i(t)}}function b(){n&&(window.clearTimeout(n),i(0)),h()}function v(t){f||(u?(c(function(t){return function(e){return mt(t,e)}}(o)),h()):o.flagged||t())}return Object(r.h)("div",{className:ft.square},Object(r.h)("button",{disabled:f,className:ft.square+" "+lt.hidden+" "+l+" "+p,onClick:function(){v(d)},onTouchStart:function(t){t.preventDefault(),v(m)},onTouchEnd:b,onTouchMove:b}))}var vt=n("d4kF");function yt(t){var e,n,i=t.status,o=t.square,a=o.mine,u=o.adjacentMines;return Object(r.h)("div",{className:ft.square+" "+vt.revealed},a?(e=" "+("WIN"===i?vt.win:"")+" "+vt.mine,n=c+"/assets/icons/mine.png",Object(r.h)("img",{className:e,src:n,alt:"Mine"})):u||"")}function gt(t){var e=t.square,n=t.status,i=t.flagging,o=t.dispatch,a=t.statsDispatch,u=e.revealed;return Object(r.h)("div",{className:ft.container},u?Object(r.h)(yt,{square:e,status:n}):Object(r.h)(bt,{square:e,status:n,flagging:i,dispatch:o,statsDispatch:a}))}var Ot=n("fwD8");function jt(t){var e=t.game,n=t.dispatch,i=t.statsDispatch,o=e.status,a=e.board,u=e.flagging;function c(t){return Object(r.h)("div",{className:Ot.row},t.map((function(t){return function(t){return Object(r.h)(gt,{square:t,status:o,flagging:u,dispatch:n,statsDispatch:i})}(t)})))}return Object(r.h)("div",{className:Ot.board},a.map((function(t){return c(t)})))}var _t=n("rAdK");function wt(t){var e=t.dispatch,n=_("EASY"),i=n[0],o=n[1];return Object(r.h)("div",{className:_t.reset},Object(r.h)("form",{onSubmit:function(t){t.preventDefault(),e(function(t){return function(){return C(t)}}(V.find((function(t){return t.name===i}))||H))}},Object(r.h)("select",{className:_t.select,value:i,onInput:function(t){o(t.currentTarget.value)}},V.map((function(t){var e=t.name,n=t.displayName,i=t.width,o=t.height;return Object(r.h)("option",{value:e},n," (",i,"x",o,")")}))),Object(r.h)("button",{className:_t.submit,type:"submit"},"Reset")))}var At=n("Z8HV");function Nt(t){var e=t.status;return Object(r.h)("div",{className:At.status},Object(r.h)("div",{className:At.emoji,title:function(){switch(e){case"START":return"";case"PLAY":return"Game in progress...";case"FAIL":return"You lost!  Please, try again!";case"WIN":return"You won!"}}()},function(){switch(e){case"START":return"🙂";case"PLAY":return"🤔";case"FAIL":return"😵";case"WIN":return"😎"}}()))}var Pt=n("5s8I"),xt=n("anWR");function Rt(t){return("0"+t).slice(-2)}function Tt(t,e){return void 0===e&&(e=!1),""+(t<0?"-":"")+function(t,e){var n=Math.floor(Math.abs(t)/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),o=Math.floor(n%3600%60);return r>0?r+":"+Rt(i)+":"+Rt(o):e||i>0?i+":"+Rt(o):""+o}(t,e)}function St(t,e){return null===t?0:null===e?Date.now()-t:e-t}function Et(t){var e=t.startedAt,n=t.finishedAt,i=_(St(e,n)),o=i[0],a=i[1],u=null!==e?"":xt.hide;return A((function(){var t=window.setInterval((function(){a(St(e,n))}),100);return function(){clearInterval(t)}})),Object(r.h)("div",{className:xt.container+" "+u},Object(r.h)("div",{className:xt.timer},Tt(o)," ⏱"))}var Dt=n("S72u");function Mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lt(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Mt(Object(n),!0).forEach((function(e){kt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{flagging:!t.flagging})}function It(t){var e=t.status,n=t.flagging,i=t.dispatch,o=n?Dt.buttonActive:"",a="WIN"===e||"FAIL"===e;function u(){a||i((function(t){return Lt(t)}))}function c(t){"f"===t.key&&u()}return A((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}})),Object(r.h)("div",{className:Dt.container+" "+o},Object(r.h)("button",{onClick:u,disabled:a,className:Dt.button,title:"Toggle flagging mines (Press F for shortcut)"},Object(r.h)("span",{className:Dt.flag},"🚩")))}function Ct(t){var e=t.game,n=t.dispatch,i=t.statsDispatch,o=t.updateTitle,a=e.status,c=e.flagging,s=e.startedAt,f=e.finishedAt;return A((function(){o(u)}),[]),Object(r.h)("div",null,Object(r.h)("div",{className:Pt.topRow},Object(r.h)(Nt,{status:a}),Object(r.h)(wt,{dispatch:n}),Object(r.h)(Et,{startedAt:s,finishedAt:f})),Object(r.h)(jt,{game:e,dispatch:n,statsDispatch:i}),Object(r.h)("div",{className:Pt.bottomRow},Object(r.h)(It,{status:a,flagging:c,dispatch:n})))}var Ht=n("wmBI");function Ft(t){var e=t.label,n=t.value;return Object(r.h)("div",{className:Ht.line},Object(r.h)("div",{className:Ht.label},Object(r.h)("strong",null,e)),Object(r.h)("div",{className:Ht.value},n))}var Wt=n("X9Fu");function Ut(t,e){var n=t.results,r=t.todayOnly,i=function(){var t=new Date(Date.now());return t.setHours(0,0,0,0),t.getTime()}();return n.filter((function(t){return(!e||t.difficultyName===e.name)&&!(r&&t.finishedAt<i)}))}function Kt(t,e){var n=e?t/e*100:0;return(Math.round(10*n)/10).toFixed(1)+"%"}function qt(t){return t.reduce((function(t,e){return t+e}),0)}function Gt(t){return t.filter((function(t){return t.win})).map((function(t){return t.finishedAt-t.startedAt}))}function Yt(t,e){var n,r,i,o=Ut(t,e),a=o.length,u=Gt(o),c=u.length;return{games:a,wins:c,winRate:Kt(c,a),fastestTime:function(t){var e=null;return t.forEach((function(t){(null===e||t<e)&&(e=t)})),e?Tt(e,!0):"-:--"}(u),averageTime:(r=qt(n=u),(i=Math.floor(r/n.length))?Tt(i,!0):"-:--")}}function Bt(t){var e=t.stats,n=t.difficulty,i=Yt(e,n),o=i.games,a=i.wins,u=i.winRate,c=i.fastestTime,s=i.averageTime;return Object(r.h)("div",{className:Wt.summary},Object(r.h)("h3",null,n.displayName," ",Object(r.h)("span",{className:Wt.dimensions},"(",n.width,"x",n.height,")")),Object(r.h)("div",{className:Wt.statLines},Object(r.h)(Ft,{label:"Games",value:o}),Object(r.h)(Ft,{label:"Wins",value:a}),Object(r.h)(Ft,{label:"Wins (%)",value:u}),Object(r.h)(Ft,{label:"Fastest Time",value:c}),Object(r.h)(Ft,{label:"Average Time",value:s})))}var Vt=n("HVBM");function Qt(t){var e=Ut(t),n=function(t){var e=qt(function(t){return t.map((function(t){return t.finishedAt-t.startedAt}))}(t));return e?Tt(e,!0):"-:--"}(e),r=e.length,i=Gt(e).length;return{totalTime:n,games:r,wins:i,winRate:Kt(i,r)}}function Jt(t){var e=Qt(t.stats),n=e.totalTime,i=e.games,o=e.wins,a=e.winRate;return Object(r.h)("div",{className:Wt.summary},Object(r.h)("h3",null,"All Modes"),Object(r.h)("div",{className:Wt.statLines},Object(r.h)(Ft,{label:"Games",value:i}),Object(r.h)(Ft,{label:"Wins",value:o}),Object(r.h)(Ft,{label:"Wins (%)",value:a}),Object(r.h)(Ft,{label:"Total Play Time",value:n})))}function Zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zt(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Zt(Object(n),!0).forEach((function(e){Xt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{todayOnly:e});return ut(n),n}function $t(t){return function(e){return zt(e,t)}}function te(t){var e=t.stats,n=t.dispatch,i=t.updateTitle,o=e.todayOnly?"Today":"All Time";return A((function(){i(s)}),[]),Object(r.h)("div",null,Object(r.h)("div",{className:Vt.filters},Object(r.h)("button",{id:"allTimeButton",onClick:function(){n($t(!1))}},"All Time"),Object(r.h)("button",{id:"todayButton",onClick:function(){n($t(!0))}},"Today")),Object(r.h)("h2",null,"Game Stats: ",o),Object(r.h)("div",{className:Vt.summaries},Object(r.h)(Jt,{stats:e})),Object(r.h)("div",{className:Vt.summaries},Object(r.h)(Bt,{difficulty:H,stats:e}),Object(r.h)(Bt,{difficulty:U,stats:e}),Object(r.h)(Bt,{difficulty:G,stats:e})),Object(r.h)("div",{className:Vt.summaries},Object(r.h)(Bt,{difficulty:F,stats:e}),Object(r.h)(Bt,{difficulty:K,stats:e}),Object(r.h)(Bt,{difficulty:Y,stats:e})),Object(r.h)("div",{className:Vt.summaries},Object(r.h)(Bt,{difficulty:W,stats:e}),Object(r.h)(Bt,{difficulty:q,stats:e}),Object(r.h)(Bt,{difficulty:B,stats:e})),Object(r.h)("small",null,"ℹ️ Stats are only recorded for finished games!"))}e.default=function(){var t=w(S,C(H)),e=t[0],n=t[1],o=w(Q,function(){try{var t=localStorage.getItem("stats");return t?JSON.parse(t):{todayOnly:!1,results:[]}}catch(t){return{todayOnly:!1,results:[]}}}()),a=o[0],u=o[1];function s(t){document.title="Minesweeper Game - "+t}function p(){if(window.getSelection){var t=window.getSelection();if(!t)return;t.empty?t.empty():t.removeAllRanges&&t.removeAllRanges()}}return Object(r.h)("div",{id:"app",onTouchStart:p,onTouchEnd:p},Object(r.h)(l,null),Object(r.h)("main",null,Object(r.h)(i.Router,null,Object(r.h)(i.Route,{path:c,component:Ct,game:e,dispatch:n,statsDispatch:u,updateTitle:s}),Object(r.h)(i.Route,{path:f,component:te,stats:a,dispatch:u,updateTitle:s}))))}},S72u:function(t,e,n){t.exports={container:"_2tGRj5bs7uYqlzSGBMmPPR",button:"M55u8jseqpiRvO8OrvA5V",flag:"_1gIhCK9fRlxlyHhmZgatwm",buttonActive:"uXdgHtVoMo8yafW5O5db6",wiggleKeyFrames:"_3KP_mK2-6avCTTBTjb_8yS"}},X9Fu:function(t,e,n){t.exports={summary:"_33-IbutgyWRwLt_gWzvZis",dimensions:"_18SnD1rGNcrxnZq-n-d05A",statLines:"Ybm_DtfNw9UTM7TKs0u6o"}},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return m})),n.d(e,"route",(function(){return b})),n.d(e,"Router",(function(){return w})),n.d(e,"Route",(function(){return N})),n.d(e,"Link",(function(){return A})),n.d(e,"exec",(function(){return a}));var r=n("HteQ"),i={};function o(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,a=t.match(o),u={};if(a&&a[1])for(var c=a[1].split("&"),f=0;f<c.length;f++){var l=c[f].split("=");u[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=s(t.replace(o,"")),e=s(e||"");for(var p=Math.max(t.length,e.length),h=0;h<p;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),m=(e[h].match(/[+*?]+$/)||i)[0]||"",b=~m.indexOf("+"),v=~m.indexOf("*"),y=t[h]||"";if(!y&&!v&&(m.indexOf("?")<0||b)){r=!1;break}if(u[d]=decodeURIComponent(y),b||v){u[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&u}function u(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,s(e).map(f).join(""));var e}(t),t.props}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function f(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var l=null,p=[],h=[],d={};function m(){var t;return""+((t=l&&l.location?l.location:l&&l.getCurrentLocation?l.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function b(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),l&&l[e]?l[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return b(e)}}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return y(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(y(e))return O(t)}}while(e=e.parentNode)}}var _=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(l=e.history),this.state={url:e.url||m()},_||("function"==typeof addEventListener&&(l||addEventListener("popstate",(function(){v(m())})),addEventListener("click",j)),_=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;l&&(this.unlisten=l.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(u).map((function(t){var i=a(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return o(u,i),delete u.ref,delete u.key,Object(r.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,i=t.onChange,o=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),o,!0),u=a[0]||null,c=this.previousUrl;return o!==c&&(this.previousUrl=o,"function"==typeof i&&i({router:this,url:o,previous:c,active:a,current:u})),u},e}(r.Component),A=function(t){return Object(r.createElement)("a",o({onClick:g},t))},N=function(t){return Object(r.createElement)(t.component,t)};w.subscribers=h,w.getCurrentUrl=m,w.route=b,w.Router=w,w.Route=N,w.Link=A,w.exec=a,e.default=w},Z8HV:function(t,e,n){t.exports={status:"_1147OUGNeAYI9AR67l3M_F",emoji:"_3kTdVpLwURv5ZCG1BkEjnu"}},anWR:function(t,e,n){t.exports={container:"_1b7DgXfDW-verlutAJs4J9",hide:"_3EXH8HVfi73vqzQt9mlNau",timer:"_2cFb60-Inj7n2JffQx2qGk"}},b6eC:function(t,e,n){t.exports={hidden:"_Q0GAmu13cSZrgEnyTAmu",flagged:"US-_EuLNQM_x57Ro2nIFI",flagging:"_2V8IhtMNCWBKfUkHLq5x9g"}},d4kF:function(t,e,n){t.exports={revealed:"_2DsiIUj-2FFGFi7RoW5Ess",mine:"_1kCDhNVeofrqWmInXchJTz",mineKeyFrames:"_2cqgmlXYZG0kg5yquOBFkS",win:"_2PfFxuh60roKG5A8khyu9Q",winKeyFrames:"h0jr41_I_MWtLngRN6BYL"}},fwD8:function(t,e,n){t.exports={board:"_1iZAthx1--rn2vXXViQBvR",row:"_2E5SJFgFMk9ds9xu9z9DJg"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("HteQ"),o=n("Y3FI");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=e.Match=function(t){function e(){var n,r;a(this,e);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=r=u(this,t.call.apply(t,[this].concat(o))),r.update=function(t){r.nextUrl=t,r.setState({})},u(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){o.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){o.subscribers.splice(o.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,o.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,o.exec)(n,t.path,{})})},e}(i.Component),s=function(t){var e=t.activeClassName,n=t.path,a=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(c,{path:n||a.href},(function(t){var n=t.matches;return(0,i.h)(o.Link,r({},a,{class:[a.class||a.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=c,c.Link=s},pyAK:function(t,e,n){},rAdK:function(t,e,n){t.exports={reset:"_303JYRLJg4VzbyGKJU51qa",select:"KS4wxcDiOEwvDlDi2TXjU",submit:"A1h7SpH0K5N1vl8CA2vHT"}},wmBI:function(t,e,n){t.exports={line:"PofOX2RH2Z_90zB7Zo0XQ",label:"_2uY5e-AnVt-UVEcoPX346e",value:"gEea82ovAsLZdQhY36cFT"}}});
//# sourceMappingURL=ssr-bundle.js.map