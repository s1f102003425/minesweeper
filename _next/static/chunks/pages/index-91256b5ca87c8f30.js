(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,o,t){"use strict";t.r(o);var n=t(5893),i=t(7294),s=t(2729),l=t.n(s);let r=()=>{let e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],o=[[-1,-1],[-1,0],[0,-1],[1,1],[1,0],[0,1],[1,-1],[-1,1]],[t,s]=(0,i.useState)(e),[r,a]=(0,i.useState)(e);t.some(e=>e.some(e=>0!==e));let c=t.some((e,o)=>e.some((e,t)=>1===e&&1===r[o][t])),d=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],_=(e,n)=>{let i=0;for(let s of o)void 0!==t[n+s[0]]&&1===r[n+s[0]][e+s[1]]&&i++;if(0===i)for(let t of(d[n][e]=0,o)){let o=e+t[1],i=n+t[0];void 0!==d[i]&&-1===d[i][o]&&_(o,i)}else d[n][e]=i},f=0;for(let e of r)for(let o of e)1===o&&f++;for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===t[e][o]?1===r[e][o]?d[e][o]=11:_(o,e):2===t[e][o]?d[e][o]=9:3===t[e][o]&&(d[e][o]=10);let b=0;for(let e=0;e<9;e++)for(let o=0;o<9;o++)-1!==d[e][o]&&9!==d[e][o]&&10!==d[e][o]&&b++;let u=()=>{s(e),a(e),console.log(e===r),console.log(JSON.stringify(e)===JSON.stringify(r))},m=(o,n)=>{if(c);else if(71===b);else{console.log(o,n);let i=JSON.parse(JSON.stringify(t)),l=JSON.parse(JSON.stringify(r));if(JSON.stringify(e)===JSON.stringify(r)){let e=1;for(;e<11;){let t=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());0===l[i][t]&&"".concat(i,"-").concat(t)!=="".concat(n,"-").concat(o)&&(l[i][t]=1,e+=1),a(l)}}0===t[n][o]&&(i[n][o]=1,s(i))}},x=(e,o,n)=>{if(n.preventDefault(),c);else{let n=JSON.parse(JSON.stringify(t));0===t[o][e]?n[o][e]=3:3===t[o][e]?n[o][e]=2:2===t[o][e]&&(n[o][e]=0),s(n)}};if(c)for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===r[e][o]&&(d[e][o]=11);return console.table(r),(0,n.jsx)("div",{className:l().container,children:(0,n.jsxs)("div",{className:l().board,children:[(0,n.jsxs)("div",{className:l()["sub-board"],children:[(0,n.jsx)("div",{className:l()["bomb-count-board"],children:(0,n.jsx)("p",{className:l()["bomb-count"],children:f})}),(0,n.jsx)("div",{className:l().reset,onClick:()=>u(),style:c?{backgroundPositionX:"-390px"}:{}}),(0,n.jsx)("div",{className:l()["time-count-board"],children:(0,n.jsx)("p",{className:l()["time-count"],children:0})})]}),(0,n.jsx)("div",{className:l().bar}),(0,n.jsx)("div",{className:l()["play-board"],children:d.map((e,o)=>e.map((e,t)=>(0,n.jsx)("div",{className:l().cell,onClick:()=>m(t,o),onContextMenu:e=>x(t,o,e),style:{border:-1!==e&&9!==e&&10!==e?"1px solid #999":void 0},children:(0,n.jsx)("div",{className:l().icon,style:{backgroundPosition:(-1!==e&&9!==e&&10!==e?29:31)-30*e,border:-1!==e&&9!==e&&10!==e?"5px #d6d7d8 solid":"5px #f9f9f9 outset",width:-1!==e&&9!==e&&10!==e?38:40,height:-1!==e&&9!==e&&10!==e?38:40}})},"".concat(t,"-").concat(o))))})]})})};o.default=r},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe","sub-board":"index_sub-board__kGF1C","bomb-count-board":"index_bomb-count-board__Zi_et","bomb-count":"index_bomb-count__0Q5Ag",reset:"index_reset__pnorU","time-count-board":"index_time-count-board__QeW4s","time-count":"index_time-count__t3WEK",bar:"index_bar__9GDp2","play-board":"index_play-board__cnWuu",cell:"index_cell__3W8ZQ",icon:"index_icon__Noc_h"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);