(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"g+co":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){function l(l,n,u){var t=this;this.router=l,this.commonService=n,this.activatedRoute=u,this.channelsList=[],this.filteredChannelList=[],this.activatedRoute.queryParams.subscribe((function(l){console.log("params",l),l.category?t.getChannelsList(l.category):t.getChannelsList()}))}return l.prototype.ngOnInit=function(){},l.prototype.getChannelsList=function(l){var n=this;void 0===l&&(l=""),this.commonService.getChannelsList().subscribe((function(u){u&&(n.channelsList=u[0].Content,n.sortBy("views")),n.getChannelByCategory(l)}))},l.prototype.getChannelByCategory=function(l){l?(console.log("category",l),this.filteredChannelList=this.channelsList.filter((function(n){if(n.Channels.Category)return n.Channels.Category.toLowerCase()===l.toLowerCase()}))):(console.log("no category",l),this.filteredChannelList=this.channelsList),console.log("filter list",this.filteredChannelList)},l.prototype.removeChannelfromList=function(l){this.filteredChannelList.splice(l,1)},l.prototype.sortBy=function(l){"views"===l&&this.channelsList.sort((function(l,n){return+l.Channels.ChannelViews<+n.Channels.ChannelViews?1:+l.Channels.ChannelViews>+n.Channels.ChannelViews?-1:0})),"rating"===l&&this.channelsList.sort((function(l,n){return+l.Channels.Rating<+n.Channels.Rating?1:+l.Channels.Rating>+n.Channels.Rating?-1:0}))},l}(),i=function(){return function(){}}(),a=u("pMnS"),s=u("ZYCi"),c=u("Ip0R"),o=u("xkgV"),r=u("abRS"),b=u("8cFx"),h=t.wb({encapsulation:0,styles:[[".justify-pagination[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]],data:{}});function p(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,23,null,null,null,null,null,null,null)),(l()(),t.yb(1,0,null,null,22,"div",[["class","col-xl-3 col-sm-6 mb-3"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,21,"a",[["class","channels-card d-block"]],null,null,null,null,null)),(l()(),t.yb(3,0,null,null,11,"div",[["class","channels-card-image"]],null,null,null,null,null)),(l()(),t.yb(4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Kb(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.xb(5,671744,null,0,s.o,[s.l,s.a,c.i],{routerLink:[0,"routerLink"]},null),t.Lb(6,1),(l()(),t.yb(7,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/default-image.png';"]],[[8,"src",4]],null,null,null,null)),(l()(),t.yb(8,0,null,null,6,"div",[["class","channels-card-image-btn"]],null,null,null,null,null)),(l()(),t.yb(9,0,null,null,3,"button",[["class","btn btn-success btn-sm border-none"],["style","margin-right: 3px;"],["type","button"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Subscribe "])),(l()(),t.yb(11,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Sb(12,null,["",""])),(l()(),t.yb(13,0,null,null,1,"button",[["class","btn btn-warning btn-sm border-none"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeChannelfromList(l.context.index)&&t),t}),null,null)),(l()(),t.yb(14,0,null,null,0,"em",[["class","fas fa-times-circle"]],null,null,null,null,null)),(l()(),t.yb(15,0,null,null,8,"div",[["class","channels-card-body"]],null,null,null,null,null)),(l()(),t.yb(16,0,null,null,5,"div",[["class","channels-title"]],null,null,null,null,null)),(l()(),t.yb(17,0,null,null,4,"div",[["style","color: #ff0000;"]],null,null,null,null,null)),(l()(),t.Sb(18,null,[" "," "])),t.Ob(19,1),(l()(),t.yb(20,0,null,null,1,"span",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),t.yb(21,0,null,null,0,"em",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),t.yb(22,0,null,null,1,"div",[["class","channels-view"]],null,null,null,null,null)),(l()(),t.Sb(23,null,[" "," subscribers "]))],(function(l,n){var u=l(n,6,0,"/single-channel/videos");l(n,5,0,u)}),(function(l,n){l(n,4,0,t.Kb(n,5).target,t.Kb(n,5).href),l(n,7,0,t.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.ChannelPic,"")),l(n,12,0,null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.ChannelViews);var u=t.Tb(n,18,0,l(n,19,0,t.Kb(n.parent,0),null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.Title));l(n,18,0,u),l(n,23,0,null==n.context.$implicit||null==n.context.$implicit.Channels?null:n.context.$implicit.Channels.Subscribers)}))}function f(l){return t.Ub(0,[t.Mb(0,c.w,[]),(l()(),t.yb(1,0,null,null,27,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,23,"div",[["class","video-block section-padding"]],null,null,null,null,null)),(l()(),t.yb(3,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.yb(4,0,null,null,17,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.yb(5,0,null,null,16,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,13,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),t.yb(7,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Sort by "])),(l()(),t.yb(9,0,null,null,0,"em",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),t.yb(10,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),t.yb(11,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortBy("views")&&t),t}),null,null)),(l()(),t.yb(12,0,null,null,0,"em",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),t.yb(14,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortBy("rating")&&t),t}),null,null)),(l()(),t.yb(15,0,null,null,0,"em",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Viewed"])),(l()(),t.yb(17,0,null,null,2,"a",[["class","dropdown-item"],["href",""]],null,null,null,null,null)),(l()(),t.yb(18,0,null,null,0,"em",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Close"])),(l()(),t.yb(20,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Channels"])),(l()(),t.nb(16777216,null,null,3,null,p)),t.xb(23,278528,null,0,c.l,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null),t.Nb(24,{itemsPerPage:0,currentPage:1}),t.Mb(0,o.b,[o.e]),(l()(),t.yb(26,0,null,null,2,"div",[["class","justify-pagination"]],null,null,null,null,null)),(l()(),t.yb(27,0,null,null,1,"pagination-controls",[],null,[[null,"pageChange"]],(function(l,n,u){var t=!0;return"pageChange"===n&&(t=!1!==(l.component.q=u)&&t),t}),r.b,r.a)),t.xb(28,49152,null,0,o.c,[],null,{pageChange:"pageChange"})],(function(l,n){var u=n.component,e=t.Tb(n,23,0,t.Kb(n,25).transform(u.filteredChannelList,l(n,24,0,12,u.q)));l(n,23,0,e)}),null)}function g(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,1,"app-subscription-page",[],null,null,null,f,h)),t.xb(1,114688,null,0,e,[s.l,b.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.ub("app-subscription-page",e,g,{},{},[]);u.d(n,"SubscriptionPageModuleNgFactory",(function(){return d}));var d=t.vb(i,[],(function(l){return t.Hb([t.Ib(512,t.l,t.gb,[[8,[a.a,y]],[3,t.l],t.A]),t.Ib(4608,c.o,c.n,[t.x,[2,c.F]]),t.Ib(4608,o.e,o.e,[]),t.Ib(1073742336,c.b,c.b,[]),t.Ib(1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),t.Ib(1073742336,o.a,o.a,[]),t.Ib(1073742336,i,i,[]),t.Ib(1024,s.j,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);