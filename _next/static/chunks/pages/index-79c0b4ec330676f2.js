(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,o,t){"use strict";t.r(o);var n=t(5893),s=t(7294),i=t(2729),a=t.n(i);let l=()=>{let e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],o=[[-1,-1],[-1,0],[0,-1],[1,1],[1,0],[0,1],[1,-1],[-1,1]],[t,i]=(0,s.useState)(e),[l,r]=(0,s.useState)(e),c=t.some(e=>e.some(e=>0!==e)),d=t.some((e,o)=>e.some((e,t)=>1===e&&1===l[o][t])),_=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],f=(e,n)=>{let s=0;for(let i of o)void 0!==t[n+i[0]]&&1===l[n+i[0]][e+i[1]]&&s++;if(0===s)for(let t of(_[n][e]=0,o)){let o=e+t[1],s=n+t[0];void 0!==_[s]&&-1===_[s][o]&&f(o,s)}else _[n][e]=s},u=!1,[b,m]=(0,s.useState)(0);(0,s.useEffect)(()=>{if(c&&!d&&!u){let e=setInterval(()=>{m(b+1)},1e3);return console.log(u),()=>{clearInterval(e)}}},[c,b,d,u]);for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===t[e][o]?1===l[e][o]?_[e][o]=11:f(o,e):2===t[e][o]?_[e][o]=9:3===t[e][o]&&(_[e][o]=10);let x=0;for(let e of _)for(let o of e)10===o&&x++;let N=0;for(let e of l)for(let o of e)1===o&&N++;0!==N&&(N-=x);let h=0;for(let e=0;e<9;e++)for(let o=0;o<9;o++)-1!==_[e][o]&&9!==_[e][o]&&10!==_[e][o]&&h++;let p=()=>{i(e),r(e),m(0)},v=(o,n)=>{if(d);else if(71===h);else{console.log(o,n);let s=JSON.parse(JSON.stringify(t)),a=JSON.parse(JSON.stringify(l));if(JSON.stringify(e)===JSON.stringify(l)){let e=1;for(;e<11;){let t=Math.floor(9*Math.random()),s=Math.floor(9*Math.random());0===a[s][t]&&"".concat(s,"-").concat(t)!=="".concat(n,"-").concat(o)&&(Math.abs(s-n)>1||Math.abs(t-o)>1)&&(a[s][t]=1,e+=1),r(a)}}0===t[n][o]&&(s[n][o]=1,i(s))}},g=(e,o,n)=>{if(n.preventDefault(),d);else{let n=JSON.parse(JSON.stringify(t));0===t[o][e]&&x<10?n[o][e]=3:3===t[o][e]?n[o][e]=2:2===t[o][e]&&(n[o][e]=0),i(n)}};if(d)for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===l[e][o]&&(_[e][o]=11);return 71===h&&(u=!0),console.log(h),(0,n.jsx)("div",{className:a().container,children:(0,n.jsxs)("div",{className:a().board,children:[(0,n.jsxs)("div",{className:a()["sub-board"],children:[(0,n.jsx)("div",{className:a()["bomb-count-board"],children:(0,n.jsx)("p",{className:a()["bomb-count"],children:N})}),(0,n.jsx)("div",{className:a().reset,onClick:()=>p(),style:d?{backgroundPositionX:"-390px"}:{}}),(0,n.jsx)("div",{className:a()["time-count-board"],children:(0,n.jsx)("p",{className:a()["time-count"],children:b})})]}),(0,n.jsx)("div",{className:a().bar}),(0,n.jsx)("div",{className:a()["play-board"],children:_.map((e,o)=>e.map((e,t)=>(0,n.jsx)("div",{className:a().cell,onClick:()=>v(t,o),onContextMenu:e=>g(t,o,e),style:{border:-1!==e&&9!==e&&10!==e?"1px solid #999":void 0},children:(0,n.jsx)("div",{className:a().icon,style:{backgroundPosition:(-1!==e&&9!==e&&10!==e?29:31)-30*e,border:-1!==e&&9!==e&&10!==e?"5px #d6d7d8 solid":"5px #f9f9f9 outset",width:-1!==e&&9!==e&&10!==e?38:40,height:-1!==e&&9!==e&&10!==e?38:40}})},"".concat(t,"-").concat(o))))})]})})};o.default=l},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe","sub-board":"index_sub-board__kGF1C","bomb-count-board":"index_bomb-count-board__Zi_et","bomb-count":"index_bomb-count__0Q5Ag",reset:"index_reset__pnorU","time-count-board":"index_time-count-board__QeW4s","time-count":"index_time-count__t3WEK",bar:"index_bar__9GDp2","play-board":"index_play-board__cnWuu",cell:"index_cell__3W8ZQ",icon:"index_icon__Noc_h"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);