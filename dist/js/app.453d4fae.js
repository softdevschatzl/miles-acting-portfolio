(function(){"use strict";var A={9899:function(A,g,I){var C=I(9242),S=I(3396);const t={id:"app",class:"container"};function n(A,g,I,C,n,i){const e=(0,S.up)("HomePage");return(0,S.wg)(),(0,S.iD)("div",t,[(0,S.Wm)(e)])}var i=I.p+"img/miles_mann_picture.403a8b72.png";const e={class:"app"},c={class:"container"},o={class:"header"},r=(0,S._)("h1",null,"Miles Mann",-1),s=(0,S._)("section",{id:"home",class:"headshot"},[(0,S._)("img",{src:i,alt:"Actor's Headshot"})],-1),l=(0,S._)("section",{id:"about",class:"content-section"},[(0,S._)("h1",null,"About Me"),(0,S._)("p",null,"Scenarium vitae, theatrum mundi, in hoc palco stellae nascuntur. Luminis et umbrae, gestus et vox, fabula cordis humani. Narratio incessabilis, persona in persona, vita in arte reflectitur.")],-1),a=(0,S._)("section",{id:"contact",class:"content-section"},[(0,S._)("h1",null,"Contact"),(0,S._)("p",null,"Scenarium vitae, theatrum mundi, in hoc palco stellae nascuntur. Luminis et umbrae, gestus et vox, fabula cordis humani. Narratio incessabilis, persona in persona, vita in arte reflectitur.")],-1),u={id:"gallery",class:"content-section"},d=(0,S._)("h1",null,"Gallery",-1),m={id:"resume",class:"content-section"},h=(0,S._)("h1",null,"Resume",-1),B=["src"];function E(A,g,I,C,t,n){const i=(0,S.up)("Navbar"),E=(0,S.up)("Slideshow");return(0,S.wg)(),(0,S.iD)("div",e,[(0,S._)("div",c,[(0,S._)("header",o,[r,(0,S.Wm)(i)]),(0,S._)("main",null,[s,l,a,(0,S._)("section",u,[d,(0,S.Wm)(E)]),(0,S._)("section",m,[h,(0,S._)("iframe",{src:t.pdfUrl,frameborder:"0",width:"100%",style:{border:"1px solid #ddd"}},null,8,B)])])])])}const w={class:"navbar"},Q={href:"#home"},p={href:"#about"},M={href:"#contact"},f={href:"#gallery"},G={href:"#resume"};function U(A,g,I,C,t,n){const i=(0,S.Q2)("smooth-scroll");return(0,S.wg)(),(0,S.iD)("nav",w,[(0,S._)("ul",null,[(0,S._)("li",null,[(0,S.wy)(((0,S.wg)(),(0,S.iD)("a",Q,[(0,S.Uk)("Home")])),[[i]])]),(0,S._)("li",null,[(0,S.wy)(((0,S.wg)(),(0,S.iD)("a",p,[(0,S.Uk)("About")])),[[i]])]),(0,S._)("li",null,[(0,S.wy)(((0,S.wg)(),(0,S.iD)("a",M,[(0,S.Uk)("Contact")])),[[i]])]),(0,S._)("li",null,[(0,S.wy)(((0,S.wg)(),(0,S.iD)("a",f,[(0,S.Uk)("Gallery")])),[[i]])]),(0,S._)("li",null,[(0,S.wy)(((0,S.wg)(),(0,S.iD)("a",G,[(0,S.Uk)("Resume")])),[[i]])])])])}var b={name:"NavBar"},v=I(89);const D=(0,v.Z)(b,[["render",U]]);var j=D;const R={id:"slider"},H={class:"curr-img"},F=["src"],k={class:"thumbs"},N=["onClick"],V=["src"],W={class:"picmod"},Y=["src"],Z={class:"slider-controls"};function x(A,g,I,t,n,i){return(0,S.wg)(),(0,S.iD)("div",R,[(0,S._)("div",H,[((0,S.wg)(),(0,S.iD)("img",{src:n.currimg,onClick:g[0]||(g[0]=(...A)=>i.modalThis&&i.modalThis(...A)),key:n.currimg,class:"animated fadeInDown"},null,8,F))]),(0,S._)("div",k,[((0,S.wg)(!0),(0,S.iD)(S.HY,null,(0,S.Ko)(n.images,((A,g)=>((0,S.wg)(),(0,S.iD)("div",{class:"thumb",key:g,onClick:A=>i.setCurrent(g)},[(0,S._)("img",{src:A},null,8,V)],8,N)))),128))]),(0,S.wy)((0,S._)("div",W,[(0,S._)("img",{src:n.currimg},null,8,Y),(0,S._)("div",{class:"close-mod",onClick:g[1]||(g[1]=A=>n.showmodal=!n.showmodal)},"╳")],512),[[C.F8,n.showmodal]]),(0,S._)("div",Z,[(0,S._)("div",{class:"left",onClick:g[2]||(g[2]=(...A)=>i.toLeft&&i.toLeft(...A))},"‹"),(0,S._)("div",{class:"right",onClick:g[3]||(g[3]=(...A)=>i.toRight&&i.toRight(...A))},"›")])])}I(560);var O=I.p+"img/heron.7e7ca50f.jpeg",y="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QCuRXhpZgAASUkqAAgAAAAHABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAADEBAgANAAAAcgAAADIBAgAUAAAAgAAAAGmHBAABAAAAlAAAAAAAAAAsAQAAAQAAACwBAAABAAAAR0lNUCAyLjEwLjM0AAAyMDIzOjEyOjEyIDE2OjAzOjMxAAEAAaADAAEAAAABAAAAAAAAAP/hDM1odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo3MDE0MTA1MS04OTEyLTQyYTctYTRkYS1hMGFmMmMxMDhmNTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGEzM2IwZmUtNTkwMy00MDdjLTgyMjctMWJiNzBkY2YxOGU0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTQyMDEyZjAtZjBjZC00ODU2LWFiYmItNGYzMWM4MmMxNWFkIiBkYzpGb3JtYXQ9ImltYWdlL2pwZWciIEdJTVA6QVBJPSIyLjAiIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiIEdJTVA6VGltZVN0YW1wPSIxNzAyNDE1MDEyODUzOTc0IiBHSU1QOlZlcnNpb249IjIuMTAuMzQiIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzOjEyOjEyVDE2OjAzOjMxLTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMzoxMjoxMlQxNjowMzozMS0wNTowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDpjaGFuZ2VkPSIvIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzOWYzNjliLTIyOTUtNGRhMC1hMDlhLTRhYjhjMWUwNzkzMiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0xMlQxNjowMzozMiIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iArBJQ0NfUFJPRklMRQABAQAAAqBsY21zBEAAAG1udHJSR0IgWFlaIAfnAAwADAAVAAIAOWFjc3BNU0ZUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",L=I.p+"img/plant.0d887de5.jpeg",T=I.p+"img/shells.f17f20c9.jpeg",z=[O,y,L,T],J={data(){return{images:z,currimg:z[0],showmodal:!1}},methods:{setCurrent:function(A){this.currimg=z[A],A>=2&&(z.push(z[0]),z.shift()),A<=2&&(z.unshift(z[z.length-1]),z.pop()),A<0&&(this.currimg=z[z.length-1])},modalThis:function(){this.showmodal=!0},toLeft:function(){this.setCurrent(z.indexOf(this.currimg)-1)},toRight:function(){this.setCurrent(z.indexOf(this.currimg)+1)}},computed:function(){}};const P=(0,v.Z)(J,[["render",x],["__scopeId","data-v-427d33fd"]]);var X=P,K={name:"App",components:{Navbar:j,Slideshow:X},data(){return{pdfUrl:"/Miles-Mann-resume20231029.pdf"}}};const _=(0,v.Z)(K,[["render",E]]);var q=_,$={name:"App",components:{HomePage:q}};const AA=(0,v.Z)($,[["render",n]]);var gA=AA;const IA=(0,C.ri)(gA);IA.mount("#app"),IA.directive("smooth-scroll",{mounted(A){A.addEventListener("click",(function(A){A.preventDefault(),document.getElementById(this.getAttribute("href").substring(1))&&document.getElementById(this.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"})}))}})}},g={};function I(C){var S=g[C];if(void 0!==S)return S.exports;var t=g[C]={exports:{}};return A[C].call(t.exports,t,t.exports,I),t.exports}I.m=A,function(){var A=[];I.O=function(g,C,S,t){if(!C){var n=1/0;for(o=0;o<A.length;o++){C=A[o][0],S=A[o][1],t=A[o][2];for(var i=!0,e=0;e<C.length;e++)(!1&t||n>=t)&&Object.keys(I.O).every((function(A){return I.O[A](C[e])}))?C.splice(e--,1):(i=!1,t<n&&(n=t));if(i){A.splice(o--,1);var c=S();void 0!==c&&(g=c)}}return g}t=t||0;for(var o=A.length;o>0&&A[o-1][2]>t;o--)A[o]=A[o-1];A[o]=[C,S,t]}}(),function(){I.n=function(A){var g=A&&A.__esModule?function(){return A["default"]}:function(){return A};return I.d(g,{a:g}),g}}(),function(){I.d=function(A,g){for(var C in g)I.o(g,C)&&!I.o(A,C)&&Object.defineProperty(A,C,{enumerable:!0,get:g[C]})}}(),function(){I.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){I.o=function(A,g){return Object.prototype.hasOwnProperty.call(A,g)}}(),function(){I.p="/"}(),function(){var A={143:0};I.O.j=function(g){return 0===A[g]};var g=function(g,C){var S,t,n=C[0],i=C[1],e=C[2],c=0;if(n.some((function(g){return 0!==A[g]}))){for(S in i)I.o(i,S)&&(I.m[S]=i[S]);if(e)var o=e(I)}for(g&&g(C);c<n.length;c++)t=n[c],I.o(A,t)&&A[t]&&A[t][0](),A[t]=0;return I.O(o)},C=self["webpackChunkmiles_acting_portfolio"]=self["webpackChunkmiles_acting_portfolio"]||[];C.forEach(g.bind(null,0)),C.push=g.bind(null,C.push.bind(C))}();var C=I.O(void 0,[998],(function(){return I(9899)}));C=I.O(C)})();
//# sourceMappingURL=app.453d4fae.js.map