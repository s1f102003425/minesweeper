(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,o,n){"use strict";n.r(o);var s=n(5893),t=n(7294),i=n(2729),a=n.n(i);let c=()=>{let e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],o=[[-1,-1],[-1,0],[0,-1],[1,1],[1,0],[0,1],[1,-1],[-1,1]],[n,i]=(0,t.useState)(e),[c,l]=(0,t.useState)(e);n.some(e=>e.some(e=>0!==e));let r=n.some((e,o)=>e.some((e,n)=>1===e&&1===c[o][n])),d=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],_=(e,s)=>{let t=0;for(let i of o)void 0!==n[s+i[0]]&&1===c[s+i[0]][e+i[1]]&&t++;if(0===t)for(let n of(d[s][e]=0,o)){let o=e+n[1],t=s+n[0];void 0!==d[t]&&-1===d[t][o]&&_(o,t)}else d[s][e]=t},f=()=>{i(e),l(e),console.log(e===c),console.log(JSON.stringify(e)===JSON.stringify(c))},u=(o,s)=>{if(r);else{console.log(o,s);let t=JSON.parse(JSON.stringify(n)),a=JSON.parse(JSON.stringify(c));if(JSON.stringify(e)===JSON.stringify(c)){let e=1;for(;e<11;){let n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0===a[t][n]&&"".concat(t,"-").concat(n)!=="".concat(s,"-").concat(o)&&(a[t][n]=1,e+=1),l(a)}}t[s][o]=1,i(t)}};for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===n[e][o]&&(1===c[e][o]?d[e][o]=11:_(o,e));if(r)for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===c[e][o]&&(d[e][o]=11);return console.table(c),(0,s.jsx)("div",{className:a().container,children:(0,s.jsxs)("div",{className:a().board,children:[(0,s.jsxs)("div",{className:a()["sub-board"],children:[(0,s.jsx)("div",{className:a()["bomb-count"]}),(0,s.jsx)("div",{className:a().reset,onClick:()=>f(),style:r?{backgroundPositionX:"-390px"}:{}}),(0,s.jsx)("div",{className:a()["time-count"]})]}),(0,s.jsx)("div",{className:a().bar}),(0,s.jsx)("div",{className:a()["play-board"],children:d.map((e,o)=>e.map((e,n)=>(0,s.jsx)("div",{className:a().cell,onClick:()=>u(n,o),style:{border:-1!==e&&9!==e&&10!==e?"1px solid #999":void 0},children:(0,s.jsx)("div",{className:a().icon,style:{backgroundPosition:(-1!==e&&9!==e&&10!==e?29:31)-30*e,border:-1!==e&&9!==e&&10!==e?"5px #d6d7d8 solid":"5px #f9f9f9 outset",width:-1!==e&&9!==e&&10!==e?38:40,height:-1!==e&&9!==e&&10!==e?38:40}})},"".concat(n,"-").concat(o))))})]})})};o.default=c},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe","sub-board":"index_sub-board__kGF1C","bomb-count":"index_bomb-count__0Q5Ag",reset:"index_reset__pnorU","time-count":"index_time-count__t3WEK",bar:"index_bar__9GDp2","play-board":"index_play-board__cnWuu",cell:"index_cell__3W8ZQ",icon:"index_icon__Noc_h"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);