(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"g+co":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{constructor(l,n,u){this.router=l,this.commonService=n,this.activatedRoute=u,this.channelsList=[],this.filteredChannelList=[],this.activatedRoute.queryParams.subscribe(l=>{console.log("params",l),l.category?this.getChannelsList(l.category):this.getChannelsList()})}ngOnInit(){}getChannelsList(l=""){this.commonService.getChannelsList().subscribe(n=>{n&&(this.channelsList=n[0].Content),this.getChannelByCategory(l)})}getChannelByCategory(l){l?(console.log("category",l),this.filteredChannelList=this.channelsList.filter(n=>{if(n.Channels.Category)return n.Channels.Category.toLowerCase()===l.toLowerCase()})):(console.log("no category",l),this.filteredChannelList=this.channelsList),console.log("filter list",this.filteredChannelList)}removeChannelfromList(l){this.filteredChannelList.splice(l,1)}sortBy(l){"views"===l&&this.channelsList.sort((l,n)=>+l.Channels.ChannelViews<+n.Channels.ChannelViews?1:+l.Channels.ChannelViews>+n.Channels.ChannelViews?-1:0),"rating"===l&&this.channelsList.sort((l,n)=>+l.Channels.Rating<+n.Channels.Rating?1:+l.Channels.Rating>+n.Channels.Rating?-1:0)}}class a{}var i=u("pMnS"),r=u("SVse"),s=u("xkgV"),o=e.wb({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function c(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],(function(l,n,u){var t=!0;return"keyup.enter"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).previous()&&t),"click"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).previous()&&t),t}),null,null)),(l()(),e.Sb(1,null,[" "," "])),(l()(),e.yb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,0,0,u.previousLabel+" "+u.screenReaderPageLabel),l(n,1,0,u.previousLabel),l(n,3,0,u.screenReaderPageLabel)}))}function b(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.Sb(1,null,[" "," "])),(l()(),e.yb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,1,0,u.previousLabel),l(n,3,0,u.screenReaderPageLabel)}))}function p(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(l()(),e.nb(16777216,null,null,1,null,c)),e.xb(2,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.nb(16777216,null,null,1,null,b)),e.xb(4,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,1<e.Kb(n.parent.parent,2).getCurrent()),l(n,4,0,e.Kb(n.parent.parent,2).isFirstPage())}),(function(l,n){l(n,0,0,e.Kb(n.parent.parent,2).isFirstPage())}))}function g(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,5,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],(function(l,n,u){var t=!0;return"keyup.enter"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).setCurrent(l.parent.context.$implicit.value)&&t),"click"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).setCurrent(l.parent.context.$implicit.value)&&t),t}),null,null)),(l()(),e.yb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(2,null,[""," "])),(l()(),e.yb(3,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Sb(4,null,["",""])),e.Ob(5,2)],null,(function(l,n){l(n,2,0,n.component.screenReaderPageLabel);var u="..."===n.parent.context.$implicit.label?n.parent.context.$implicit.label:e.Tb(n,4,0,l(n,5,0,e.Kb(n.parent.parent.parent,0),n.parent.context.$implicit.label,""));l(n,4,0,u)}))}function d(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e.yb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(2,null,[""," "])),(l()(),e.yb(3,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Sb(4,null,["",""])),e.Ob(5,2)],null,(function(l,n){l(n,2,0,n.component.screenReaderCurrentLabel);var u="..."===n.parent.context.$implicit.label?n.parent.context.$implicit.label:e.Tb(n,4,0,l(n,5,0,e.Kb(n.parent.parent.parent,0),n.parent.context.$implicit.label,""));l(n,4,0,u)}))}function f(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(l()(),e.nb(16777216,null,null,1,null,g)),e.xb(2,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.nb(16777216,null,null,1,null,d)),e.xb(4,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,e.Kb(n.parent.parent,2).getCurrent()!==n.context.$implicit.value),l(n,4,0,e.Kb(n.parent.parent,2).getCurrent()===n.context.$implicit.value)}),(function(l,n){l(n,0,0,e.Kb(n.parent.parent,2).getCurrent()===n.context.$implicit.value,"..."===n.context.$implicit.label)}))}function h(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],(function(l,n,u){var t=!0;return"keyup.enter"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).next()&&t),"click"===n&&(t=!1!==e.Kb(l.parent.parent.parent,2).next()&&t),t}),null,null)),(l()(),e.Sb(1,null,[" "," "])),(l()(),e.yb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,0,0,u.nextLabel+" "+u.screenReaderPageLabel),l(n,1,0,u.nextLabel),l(n,3,0,u.screenReaderPageLabel)}))}function m(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.Sb(1,null,[" "," "])),(l()(),e.yb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),e.Sb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,1,0,u.nextLabel),l(n,3,0,u.screenReaderPageLabel)}))}function y(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(l()(),e.nb(16777216,null,null,1,null,h)),e.xb(2,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.nb(16777216,null,null,1,null,m)),e.xb(4,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!e.Kb(n.parent.parent,2).isLastPage()),l(n,4,0,e.Kb(n.parent.parent,2).isLastPage())}),(function(l,n){l(n,0,0,e.Kb(n.parent.parent,2).isLastPage())}))}function x(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(l()(),e.nb(16777216,null,null,1,null,p)),e.xb(2,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(l()(),e.Sb(4,null,[" "," / "," "])),(l()(),e.nb(16777216,null,null,1,null,f)),e.xb(6,278528,null,0,r.k,[e.U,e.R,e.v],{ngForOf:[0,"ngForOf"]},null),(l()(),e.nb(16777216,null,null,1,null,y)),e.xb(8,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.directionLinks),l(n,6,0,e.Kb(n.parent,2).pages),l(n,8,0,u.directionLinks)}),(function(l,n){var u=n.component;l(n,0,0,u.screenReaderPaginationLabel,u.responsive),l(n,4,0,e.Kb(n.parent,2).getCurrent(),e.Kb(n.parent,2).getLastPage())}))}function v(l){return e.Ub(2,[e.Mb(0,r.d,[e.x]),(l()(),e.yb(1,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"],[null,"pageBoundsCorrection"]],(function(l,n,u){var e=!0,t=l.component;return"pageChange"===n&&(e=!1!==t.pageChange.emit(u)&&e),"pageBoundsCorrection"===n&&(e=!1!==t.pageBoundsCorrection.emit(u)&&e),e}),null,null)),e.xb(2,737280,[["p",4]],0,s.d,[s.e,e.i],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"}),(l()(),e.nb(16777216,null,null,1,null,x)),e.xb(4,16384,null,0,r.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.id,u.maxSize),l(n,4,0,!(u.autoHide&&e.Kb(n,2).pages.length<=1))}),null)}var C=u("iInd"),w=u("8cFx"),k=e.wb({encapsulation:0,styles:[[".justify-pagination[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]],data:{}});function L(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,21,null,null,null,null,null,null,null)),(l()(),e.yb(1,0,null,null,20,"div",[["class","col-xl-3 col-sm-6 mb-3"]],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,19,"a",[["class","channels-card d-block"]],null,null,null,null,null)),(l()(),e.yb(3,0,null,null,9,"div",[["class","channels-card-image"]],null,null,null,null,null)),(l()(),e.yb(4,0,null,null,1,"a",[["href","https://mountlitera.nflik.com/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.yb(5,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/default-image.png';"]],[[8,"src",4]],null,null,null,null)),(l()(),e.yb(6,0,null,null,6,"div",[["class","channels-card-image-btn"]],null,null,null,null,null)),(l()(),e.yb(7,0,null,null,3,"button",[["class","btn btn-success btn-sm border-none"],["style","margin-right: 3px;"],["type","button"]],null,null,null,null,null)),(l()(),e.Sb(-1,null,[" Subscribe "])),(l()(),e.yb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Sb(10,null,["",""])),(l()(),e.yb(11,0,null,null,1,"button",[["class","btn btn-warning btn-sm border-none"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeChannelfromList(l.context.index)&&e),e}),null,null)),(l()(),e.yb(12,0,null,null,0,"i",[["class","fas fa-times-circle"]],null,null,null,null,null)),(l()(),e.yb(13,0,null,null,8,"div",[["class","channels-card-body"]],null,null,null,null,null)),(l()(),e.yb(14,0,null,null,5,"div",[["class","channels-title"]],null,null,null,null,null)),(l()(),e.yb(15,0,null,null,4,"div",[["style","color: #ff516b;"]],null,null,null,null,null)),(l()(),e.Sb(16,null,[" "," "])),e.Ob(17,1),(l()(),e.yb(18,0,null,null,1,"span",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),e.yb(19,0,null,null,0,"i",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),e.yb(20,0,null,null,1,"div",[["class","channels-view"]],null,null,null,null,null)),(l()(),e.Sb(21,null,[" "," subscribers "]))],null,(function(l,n){l(n,5,0,e.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.ChannelPic,"")),l(n,10,0,null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.ChannelViews);var u=e.Tb(n,16,0,l(n,17,0,e.Kb(n.parent,0),null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.Title));l(n,16,0,u),l(n,21,0,null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.Subscribers)}))}function S(l){return e.Ub(0,[e.Mb(0,r.u,[]),(l()(),e.yb(1,0,null,null,27,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,23,"div",[["class","video-block section-padding"]],null,null,null,null,null)),(l()(),e.yb(3,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.yb(4,0,null,null,17,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.yb(5,0,null,null,16,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),e.yb(6,0,null,null,13,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),e.yb(7,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),e.Sb(-1,null,[" Sort by "])),(l()(),e.yb(9,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),e.yb(10,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),e.yb(11,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.sortBy("views")&&e),e}),null,null)),(l()(),e.yb(12,0,null,null,0,"i",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),e.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),e.yb(14,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.sortBy("rating")&&e),e}),null,null)),(l()(),e.yb(15,0,null,null,0,"i",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),e.Sb(-1,null,[" \xa0 Viewed"])),(l()(),e.yb(17,0,null,null,2,"a",[["class","dropdown-item"],["href",""]],null,null,null,null,null)),(l()(),e.yb(18,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),e.Sb(-1,null,[" \xa0 Close"])),(l()(),e.yb(20,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Sb(-1,null,["Channels"])),(l()(),e.nb(16777216,null,null,3,null,L)),e.xb(23,278528,null,0,r.k,[e.U,e.R,e.v],{ngForOf:[0,"ngForOf"]},null),e.Nb(24,{itemsPerPage:0,currentPage:1}),e.Mb(0,s.b,[s.e]),(l()(),e.yb(26,0,null,null,2,"div",[["class","justify-pagination"]],null,null,null,null,null)),(l()(),e.yb(27,0,null,null,1,"pagination-controls",[],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.q=u)&&e),e}),v,o)),e.xb(28,49152,null,0,s.c,[],null,{pageChange:"pageChange"})],(function(l,n){var u=n.component,t=e.Tb(n,23,0,e.Kb(n,25).transform(u.filteredChannelList,l(n,24,0,12,u.q)));l(n,23,0,t)}),null)}function I(l){return e.Ub(0,[(l()(),e.yb(0,0,null,null,1,"app-subscription-page",[],null,null,null,S,k)),e.xb(1,114688,null,0,t,[C.l,w.a,C.a],null,null)],(function(l,n){l(n,1,0)}),null)}var R=e.ub("app-subscription-page",t,I,{},{},[]);u.d(n,"SubscriptionPageModuleNgFactory",(function(){return U}));var U=e.vb(a,[],(function(l){return e.Hb([e.Ib(512,e.l,e.gb,[[8,[i.a,R]],[3,e.l],e.A]),e.Ib(4608,r.n,r.m,[e.x,[2,r.D]]),e.Ib(4608,s.e,s.e,[]),e.Ib(1073742336,r.b,r.b,[]),e.Ib(1073742336,C.n,C.n,[[2,C.s],[2,C.l]]),e.Ib(1073742336,s.a,s.a,[]),e.Ib(1073742336,a,a,[]),e.Ib(1024,C.j,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);