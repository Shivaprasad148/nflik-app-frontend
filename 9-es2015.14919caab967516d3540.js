(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"GJ+R":function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),t=u("nYR2");class e{constructor(l,n,u){this.router=l,this.commonService=n,this.homeService=u,this.homeVideoList=[1,1,1,1],this.topVideoList=[1,1,1,1],this.topVideoListFinal=[],this.premierShows=[1,1,1,1,1,1,1,1],this.languages=[],this.completeVideoList=[],this.isLoading=!0,this.displayTagswithId=[],this.displayOrder=[],this.finalList=[],this.finalListForSort=[],this.finalListScroll=[],this.premierShowsOptions={loop:!1,mouseDrag:!0,touchDrag:!1,pullDrag:!0,dots:!1,rewind:!0,items:8,navSpeed:400,autoplay:!0,lazyLoad:!0,nav:!0,autoplaySpeed:700,responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:8}},navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]},this.moviesOptions={loop:!1,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,lazyLoad:!0,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],slideBy:4,responsive:{0:{items:1},500:{items:2},740:{items:3},940:{items:1}}}}ngOnInit(){this.homeService.getFinalVideoList().length>0?(this.premierShows=this.homeService.getPremiumList(),this.finalList=this.homeService.getFinalVideoList(),this.finalListForSort=this.homeService.getFinalVideoListSort(),this.finalListScroll=[...this.finalList].slice(0,2)):this.getVideoList()}getVideoListService(){}getVideoList(){this.commonService.getHomePageVideo().pipe(Object(t.a)(()=>this.isLoading=!1)).subscribe(l=>{l&&(this.finalList=[],this.finalListForSort=[],this.homeVideoList=l[0].Content,this.premierShows=l[0].Header,this.displayOrder=l[0].DisplayOrder,this.filterDisplayData().then(()=>{}))})}getListByLanguage(l){return this.homeVideoList.filter(n=>{if(n.Movies.language)return n.Movies.language===l})}getLanguages(){this.homeVideoList.forEach(l=>{this.languages.includes(l.Movies.language)||this.languages.push(l.Movies.language)})}filterData(){this.languages.forEach((l,n)=>{const u={languages:l,list:this.getListByLanguage(l)};this.completeVideoList.push(u)})}getTopVideos(){this.topVideoList=[...this.homeVideoList],this.topVideoList.sort((l,n)=>+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0),this.topVideoListFinal=this.chunkArray(this.topVideoList,8)}sortByData(l,n,u){"views"===u&&l.sort((l,n)=>+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0),"rating"===u&&l.sort((l,n)=>+l.Attributes.Rating<+n.Attributes.Rating?1:+l.Attributes.Rating>+n.Attributes.Rating?-1:0),this.finalList[n].data=this.chunkArray([...l],8)}sortPremierShows(l){"views"===l&&this.premierShows.sort((l,n)=>+l.Shows.ChannelViews<+n.Shows.ChannelViews?1:+l.Shows.ChannelViews>+n.Shows.ChannelViews?-1:0),"rating"===l&&this.premierShows.sort((l,n)=>+l.Shows.Rating<+n.Shows.Rating?1:+l.Shows.Rating>+n.Shows.Rating?-1:0)}filterDisplayData(){return new Promise((l,n)=>{this.displayOrder.forEach(l=>{const n=this.homeVideoList.filter(n=>{if(n.DisplayTags.filter(n=>n.replace(/ /g,"").toLowerCase()===l.title.replace(/ /g,"").toLowerCase()).length>0)return!0});if(n.length>0){const u={tag:l,data:n},i={tag:l,data:this.chunkArray([...n],8)};this.finalList.push(i),this.finalListForSort.push(u)}}),this.finalListScroll=[...this.finalList].slice(0,2),this.homeService.setFinalVideoList(this.finalList),this.homeService.setPremiumList(this.premierShows),this.homeService.setFinalVideoListSort(this.finalListForSort),l()})}sortList(l,n,u){const i=[...this.finalListForSort[n].data];this.sortByData(i,n,u)}chunkArray(l,n){const u=l,i=n;return new Array(Math.ceil(u.length/i)).fill(!0).map(l=>u.splice(0,i))}onScroll(){const l=this.finalListScroll.length,n=[...this.finalList].slice(l,l+2);this.finalListScroll.length<=this.finalList.length&&this.finalListScroll.push(n[0])}}class s{}var o=u("pMnS"),a=u("SVse"),r=u("KMir");class c{constructor(l){this.router=l}ngOnInit(){this.zoomMethod()}goToVideoPage(l){this.router.navigate(["/video-info",l])}zoomMethod(){$(".ex1").zoom()}}var b=u("iInd"),d=i.wb({encapsulation:0,styles:[[""]],data:{}});function h(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" "," "])),i.Ob(2,1)],null,(function(l,n){var u=n.component,t=i.Tb(n,1,0,l(n,2,0,i.Kb(n.parent,0),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,1,0,t)}))}function p(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" Pay "," "])),(l()(),i.yb(2,0,null,null,0,"span",[["class","fa fa-rupee-sign"]],null,null,null,null,null))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.video||null==u.video.Payment?null:u.video.Payment.Paytag)}))}function m(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" Pay "," "])),(l()(),i.yb(2,0,null,null,0,"span",[["class","fa fa-rupee-sign"]],null,null,null,null,null))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.video||null==u.video.Payment?null:u.video.Payment.Paytag)}))}function g(l){return i.Ub(0,[i.Mb(0,a.u,[]),i.Mb(0,a.i,[]),(l()(),i.yb(2,0,null,null,29,"div",[["class","video-card"]],null,null,null,null,null)),(l()(),i.yb(3,0,null,null,9,"div",[["class","video-card-image"],["style","height: 147px;"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,1,"a",[["class","play-icon"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(5,0,null,null,0,"i",[["class","fas fa-play-circle"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,1,"a",[["class","zoom ex1"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(7,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/nflik-vidlogo.jpg'"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(8,0,null,null,2,"div",[["class","iconSet"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,0,"a",[["class","far fa-thumbs-up"],["data-toggle","tooltip"],["href",""],["title","Like"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,0,"a",[["class","far dislike fa-thumbs-down"],["data-toggle","tooltip"],["href",""],["title","Dislike"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),i.Sb(12,null,["",""])),(l()(),i.yb(13,0,null,null,18,"div",[["class","video-card-body"]],null,null,null,null,null)),(l()(),i.yb(14,0,null,null,3,"div",[["class","video-title"]],null,null,null,null,null)),(l()(),i.yb(15,0,null,null,2,"a",[],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.Sb(16,null,["",""])),i.Ob(17,1),(l()(),i.yb(18,0,null,null,13,"div",[["class","video-view clearfix"]],null,null,null,null,null)),(l()(),i.yb(19,0,null,null,2,"span",[["class","pt-1 float-left"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,0,"i",[["class","fas fa-history"]],null,null,null,null,null)),(l()(),i.Sb(21,null,[" "," "])),(l()(),i.nb(16777216,null,null,2,null,h)),i.xb(23,16384,null,0,a.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(24,1),(l()(),i.nb(16777216,null,null,2,null,p)),i.xb(26,16384,null,0,a.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(27,1),(l()(),i.nb(16777216,null,null,3,null,m)),i.xb(29,16384,null,0,a.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(30,1),i.Ob(31,1)],(function(l,n){var u=n.component,t="free"===i.Tb(n,23,0,l(n,24,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,23,0,t);var e="paid"===i.Tb(n,26,0,l(n,27,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,26,0,e);var s="free"!==i.Tb(n,29,0,l(n,30,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type))&&"paid"!==i.Tb(n,29,0,l(n,31,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,29,0,s)}),(function(l,n){var u=n.component;l(n,7,0,i.Cb(1,"",null==u.video||null==u.video.ThumbImage?null:u.video.ThumbImage.default,"")),l(n,12,0,null==u.video||null==u.video.Attributes?null:u.video.Attributes.VideoDuration);var t=i.Tb(n,16,0,l(n,17,0,i.Kb(n,0),null==u.video||null==u.video.Movies?null:u.video.Movies.Title));l(n,16,0,t),l(n,21,0,null==u.video||null==u.video.Movies?null:u.video.Movies.ReleaseDate)}))}var f=u("iQ7a"),v=u("MNke"),y=u("8cFx"),w=u("2Vo4");let S=(()=>{class l{constructor(l){this.commonService=l,this.categories$=new w.a(null),this.homeVideoList=[],this.premierShows=[],this.displayOrder=[],this.finalList$=new w.a(null),this.finalListSort$=new w.a(null),this.premiunShow$=new w.a(null),this.finalList=[],this.finalListSort=[]}setFinalVideoList(l){this.finalList=l}getFinalVideoList(){return this.finalList}setFinalVideoListSort(l){this.finalListSort=l}getFinalVideoListSort(){return this.finalListSort}setPremiumList(l){this.premierShows=l}getPremiumList(){return this.premierShows}}return l.ngInjectableDef=i.Xb({factory:function(){return new l(i.Yb(y.a))},token:l,providedIn:"root"}),l})();var L=i.wb({encapsulation:0,styles:[[".img-avatar[_ngcontent-%COMP%]{border-radius:50%!important;height:60px!important;width:60px!important;margin:auto}.carousal-views[_ngcontent-%COMP%]{color:#ff516b!important}"]],data:{}});function x(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,10,"div",[["class","category-item"]],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,9,"a",[["href","https://mountlitera.nflik.com/"],["target","_blank"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,3,"img",[["class","img-avatar"],["onerror","this.src='assets/img/nflik-pslogo.jpg'"]],[[8,"src",4]],null,null,null,null)),i.Pb(512,null,a.A,a.B,[i.n,i.w,i.J]),i.xb(4,278528,null,0,a.o,[a.A],{ngStyle:[0,"ngStyle"]},null),i.Nb(5,{"background-image":0,"background-size":1}),(l()(),i.yb(6,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),i.Sb(7,null,["",""])),i.Ob(8,1),(l()(),i.yb(9,0,null,null,1,"p",[["class","carousal-views"]],null,null,null,null,null)),(l()(),i.Sb(10,null,[" "," views "]))],(function(l,n){var u=l(n,5,0,"url(assets/img/nflik-pslogo.jpg)","60px 60px");l(n,4,0,u)}),(function(l,n){l(n,2,0,null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.ChannelPic);var u=i.Tb(n,7,0,l(n,8,0,i.Kb(n.parent.parent,0),null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.Showtitle));l(n,7,0,u),l(n,10,0,null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.ChannelViews)}))}function V(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.nb(0,null,null,1,null,x)),i.xb(2,16384,[[1,4]],0,r.c,[i.R],{id:[0,"id"]},null)],(function(l,n){l(n,2,0,null==n.context.$implicit||null==n.context.$implicit.Shows?null:n.context.$implicit.Shows.Id)}),null)}function P(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,2,"div",[["class","col-xl-3 col-sm-6"],["style","margin-bottom: 22px;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,1,"app-video-card",[],null,null,null,g,d)),i.xb(3,114688,null,0,c,[b.l],{video:[0,"video"]},null)],(function(l,n){l(n,3,0,n.context.$implicit)}),null)}function I(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,1,null,P)),i.xb(2,278528,null,0,a.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit)}),null)}function k(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.nb(0,null,null,1,null,I)),i.xb(2,16384,[[2,4]],0,r.c,[i.R],null,null)],null,null)}function M(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,0,"hr",[],null,null,null,null,null))],null,null)}function T(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,42,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,39,"div",[["class","video-block section-padding"],["id","topMovies"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,38,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(3,0,null,null,20,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,19,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,16,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,2,"a",[["class","btn xsbtn mr-2 btn-outline-info"],["href","#!"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Follow "])),(l()(),i.yb(8,0,null,null,0,"span",[["class","fa fa-plus font12"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Sort by "])),(l()(),i.yb(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortList(null==l.context.$implicit||null==l.context.$implicit.tag?null:l.context.$implicit.tag.order,l.context.index,"rating")&&i),i}),null,null)),(l()(),i.yb(14,0,null,null,0,"i",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),i.yb(16,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortList(null==l.context.$implicit||null==l.context.$implicit.tag?null:l.context.$implicit.tag.order,l.context.index,"views")&&i),i}),null,null)),(l()(),i.yb(17,0,null,null,0,"i",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Viewed"])),(l()(),i.yb(19,0,null,null,2,"a",[["class","dropdown-item"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Close"])),(l()(),i.yb(22,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(23,null,["",""])),(l()(),i.yb(24,0,null,null,16,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(25,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(26,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),i.yb(27,0,null,null,0,"img",[["class","img-fluid"],["style","height: 454px !important;"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(28,0,null,null,12,"div",[["class","col-md-10"]],null,null,null,null,null)),(l()(),i.yb(29,0,null,null,11,"owl-carousel-o",[],null,[["document","visibilitychange"]],(function(l,n,u){var t=!0;return"document:visibilitychange"===n&&(t=!1!==i.Kb(l,37).onVisibilityChange(u)&&t),t}),f.b,f.a)),i.Pb(512,null,r.e,r.e,[r.f]),i.Pb(131584,null,r.d,r.d,[r.e]),i.Pb(131584,null,r.g,r.g,[r.e,r.h,r.l]),i.Pb(131584,null,r.p,r.p,[r.e]),i.Pb(131584,null,r.q,r.q,[r.e]),i.Pb(131584,null,r.r,r.r,[r.e]),i.Pb(131584,null,r.s,r.s,[r.e,[2,b.a],[2,b.l]]),i.xb(37,3391488,null,1,r.a,[i.n,r.t,r.e,r.d,r.g,r.p,r.q,r.r,r.s,r.f,i.i,r.l],{options:[0,"options"]},null),i.Qb(603979776,2,{slides:1}),(l()(),i.nb(16777216,null,null,1,null,k)),i.xb(40,278528,null,0,a.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.nb(16777216,null,null,1,null,M)),i.xb(42,16384,null,0,a.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),(l()(),i.nb(0,null,null,0))],(function(l,n){var u=n.component;l(n,37,0,u.moviesOptions),l(n,40,0,null==n.context.$implicit?null:n.context.$implicit.data),l(n,42,0,n.context.index<u.finalList.length-1)}),(function(l,n){l(n,23,0,null==n.context.$implicit||null==n.context.$implicit.tag?null:n.context.$implicit.tag.title),l(n,27,0,i.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.tag?null:n.context.$implicit.tag.image,""))}))}function F(l){return i.Ub(0,[i.Mb(0,a.u,[]),(l()(),i.yb(1,0,null,null,44,"div",[["class","container-fluid pb-0"],["style","margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,43,null,null,null,null,null,null,null)),(l()(),i.yb(3,0,null,null,8,"div",[["class","top-mobile-search"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,5,"form",[["class","mobile-search"]],null,null,null,null,null)),(l()(),i.yb(7,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),i.yb(8,0,null,null,0,"input",[["class","form-control"],["placeholder","Search for..."],["type","text"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,2,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,0,"i",[["class","fas fa-search"]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,28,"div",[["class","top-category section-padding mb-4"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(14,0,null,null,13,"div",[["class","col-md-12"],["style","margin-bottom: 3px;"]],null,null,null,null,null)),(l()(),i.yb(15,0,null,null,12,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),i.yb(16,0,null,null,11,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),i.yb(17,0,null,null,1,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray btn btn-primary btn-sm"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Categories "])),(l()(),i.yb(19,0,null,null,8,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,1,"a",[["class","dropdown-item scroll"],["href","#topMovies"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Top Videos"])),(l()(),i.yb(22,0,null,null,1,"a",[["class","dropdown-item scroll"],["href","#tamilMovies"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Tamil Videos"])),(l()(),i.yb(24,0,null,null,1,"a",[["class","dropdown-item scroll"],["href","#teluguMovies"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Telugu Videos"])),(l()(),i.yb(26,0,null,null,1,"a",[["class","dropdown-item scroll"],["href","#bollywoodMovies"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Bollywood Videos"])),(l()(),i.yb(28,0,null,null,12,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(29,0,null,null,11,"owl-carousel-o",[],null,[["document","visibilitychange"]],(function(l,n,u){var t=!0;return"document:visibilitychange"===n&&(t=!1!==i.Kb(l,37).onVisibilityChange(u)&&t),t}),f.b,f.a)),i.Pb(512,null,r.e,r.e,[r.f]),i.Pb(131584,null,r.d,r.d,[r.e]),i.Pb(131584,null,r.g,r.g,[r.e,r.h,r.l]),i.Pb(131584,null,r.p,r.p,[r.e]),i.Pb(131584,null,r.q,r.q,[r.e]),i.Pb(131584,null,r.r,r.r,[r.e]),i.Pb(131584,null,r.s,r.s,[r.e,[2,b.a],[2,b.l]]),i.xb(37,3391488,null,1,r.a,[i.n,r.t,r.e,r.d,r.g,r.p,r.q,r.r,r.s,r.f,i.i,r.l],{options:[0,"options"]},null),i.Qb(603979776,1,{slides:1}),(l()(),i.nb(16777216,null,null,1,null,V)),i.xb(40,278528,null,0,a.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.yb(41,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i.yb(42,0,null,null,3,"div",[["infiniteScroll",""]],null,[[null,"scrolled"]],(function(l,n,u){var i=!0;return"scrolled"===n&&(i=!1!==l.component.onScroll()&&i),i}),null,null)),i.xb(43,4866048,null,0,v.a,[i.n,i.C],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"]},{scrolled:"scrolled"}),(l()(),i.nb(16777216,null,null,1,null,T)),i.xb(45,278528,null,0,a.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,37,0,u.premierShowsOptions),l(n,40,0,u.premierShows),l(n,43,0,2,50),l(n,45,0,u.finalListScroll)}),null)}function O(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,1,"app-home",[],null,null,null,F,L)),i.xb(1,114688,null,0,e,[b.l,y.a,S],null,null)],(function(l,n){l(n,1,0)}),null)}var R=i.ub("app-home",e,O,{},{},[]),A=u("cUpR"),D=u("xQn8"),U=u("IP0z"),C=u("/HVE"),K=u("hOhj");u.d(n,"HomeModuleNgFactory",(function(){return j}));var j=i.vb(s,[],(function(l){return i.Hb([i.Ib(512,i.l,i.gb,[[8,[o.a,R]],[3,i.l],i.A]),i.Ib(4608,a.n,a.m,[i.x,[2,a.D]]),i.Ib(4608,r.i,r.j,[]),i.Ib(5120,r.h,r.k,[r.i,i.F]),i.Ib(4608,r.t,r.t,[A.d]),i.Ib(4608,r.m,r.n,[]),i.Ib(5120,r.l,r.o,[r.m,i.F]),i.Ib(4608,r.f,r.f,[i.o]),i.Ib(1073742336,a.b,a.b,[]),i.Ib(1073742336,b.n,b.n,[[2,b.s],[2,b.l]]),i.Ib(1073742336,r.b,r.b,[]),i.Ib(1073742336,D.a,D.a,[]),i.Ib(1073742336,U.a,U.a,[]),i.Ib(1073742336,C.b,C.b,[]),i.Ib(1073742336,K.a,K.a,[]),i.Ib(1073742336,v.b,v.b,[]),i.Ib(1073742336,s,s,[]),i.Ib(1024,b.j,(function(){return[[{path:"",component:e},{path:"**",pathMatch:"full",redirectTo:"home"}]]}),[])])}))}}]);