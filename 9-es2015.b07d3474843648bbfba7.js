(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"GJ+R":function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),t=u("nYR2");class e{constructor(l,n,u){this.router=l,this.commonService=n,this.homeService=u,this.homeVideoList=[1,1,1,1],this.topVideoList=[1,1,1,1],this.topVideoListFinal=[],this.premierShows=[1,1,1,1,1,1,1,1],this.languages=[],this.completeVideoList=[],this.isLoading=!0,this.displayTagswithId=[],this.displayOrder=[],this.finalList=[],this.finalListForSort=[],this.finalListScroll=[],this.premierShowsOptions={loop:!1,mouseDrag:!0,touchDrag:!1,pullDrag:!0,dots:!1,rewind:!0,items:8,navSpeed:400,autoplay:!0,lazyLoad:!0,nav:!0,autoplaySpeed:700,responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:8}},navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]},this.moviesOptions={loop:!1,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,lazyLoad:!0,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],slideBy:4,responsive:{0:{items:1},500:{items:2},740:{items:3},940:{items:1}}}}ngOnInit(){this.homeService.getFinalVideoList().length>0?(this.premierShows=this.homeService.getPremiumList(),this.finalList=this.homeService.getFinalVideoList(),this.finalListForSort=this.homeService.getFinalVideoListSort(),this.finalListScroll=[...this.finalList].slice(0,3),this.displayOrder=this.homeService.getDisplayOrder()):this.getVideoList()}getVideoListService(){}getVideoList(){this.commonService.getHomePageVideo().pipe(Object(t.a)(()=>this.isLoading=!1)).subscribe(l=>{l&&(this.finalList=[],this.finalListForSort=[],this.homeVideoList=l[0].Content,this.premierShows=l[0].Header,this.displayOrder=l[0].DisplayOrder,this.sortByDate().then(()=>{this.filterDisplayData().then(()=>{})}))})}getListByLanguage(l){return this.homeVideoList.filter(n=>{if(n.Movies.language)return n.Movies.language===l})}getLanguages(){this.homeVideoList.forEach(l=>{this.languages.includes(l.Movies.language)||this.languages.push(l.Movies.language)})}filterData(){this.languages.forEach((l,n)=>{const u={languages:l,list:this.getListByLanguage(l)};this.completeVideoList.push(u)})}getTopVideos(){this.topVideoList=[...this.homeVideoList],this.topVideoList.sort((l,n)=>+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0),this.topVideoListFinal=this.chunkArray(this.topVideoList,8)}sortByDate(){return new Promise((l,n)=>{this.homeVideoList.sort((function(l,n){let u=new Date(l.Movies.ReleaseDate),i=new Date(n.Movies.ReleaseDate);return u<i?1:u>i?-1:0})),l()})}sortByData(l,n,u){"views"===u&&l.sort((l,n)=>+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0),"rating"===u&&l.sort((l,n)=>+l.Attributes.Rating<+n.Attributes.Rating?1:+l.Attributes.Rating>+n.Attributes.Rating?-1:0),this.finalList[n].data=this.chunkArray([...l],8)}sortPremierShows(l){"views"===l&&this.premierShows.sort((l,n)=>+l.Shows.ChannelViews<+n.Shows.ChannelViews?1:+l.Shows.ChannelViews>+n.Shows.ChannelViews?-1:0),"rating"===l&&this.premierShows.sort((l,n)=>+l.Shows.Rating<+n.Shows.Rating?1:+l.Shows.Rating>+n.Shows.Rating?-1:0)}filterDisplayData(){return new Promise((l,n)=>{this.displayOrder.forEach(l=>{const n=this.homeVideoList.filter(n=>{if(n.DisplayTags.filter(n=>n.replace(/ /g,"").toLowerCase()===l.title.replace(/ /g,"").toLowerCase()).length>0)return!0});if(n.length>0){const u={tag:l,data:n},i={tag:l,data:this.chunkArray([...n],8)};this.finalList.push(i),this.finalListForSort.push(u)}}),this.finalListScroll=[...this.finalList].slice(0,3),this.homeService.setFinalVideoList(this.finalList),this.homeService.setPremiumList(this.premierShows),this.homeService.setFinalVideoListSort(this.finalListForSort),this.homeService.setDisplayOrder(this.displayOrder),l()})}sortList(l,n,u){const i=[...this.finalListForSort[n].data];this.sortByData(i,n,u)}chunkArray(l,n){const u=l,i=n;return new Array(Math.ceil(u.length/i)).fill(!0).map(l=>u.splice(0,i))}onScroll(){const l=this.finalListScroll.length,n=[...this.finalList].slice(l,l+3);this.finalListScroll.length<this.finalList.length&&this.finalListScroll.push(n[0])}navigateToMovieList(l){console.log("into navgiate method",l),this.router.navigate(["/home",l])}}class o{}var a=u("pMnS"),s=u("SVse"),r=u("KMir"),c=u("Xs+b"),d=u("QQfA"),b=u("IP0z"),m=u("POq0"),p=u("zMNK"),h=u("/HVE"),g=u("hOhj"),v=u("5GAg"),f=i.wb({encapsulation:2,styles:[".mde-popover-panel{display:flex;flex-direction:column;max-height:calc(100vh + 48px)}.mde-popover-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.mde-popover-below .mde-popover-direction-arrow{position:absolute;bottom:0;width:0;height:0;border-bottom-width:0!important;z-index:99999}.mde-popover-above .mde-popover-direction-arrow{position:absolute;top:0;width:0;height:0;border-top-width:0!important;z-index:99999}.mde-popover-after .mde-popover-direction-arrow{left:20px}.mde-popover-before .mde-popover-direction-arrow{right:20px}"],data:{animation:[{type:7,name:"transformPopover",definitions:[{type:0,name:"enter",styles:{type:6,styles:{opacity:1,transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"scale(0)"},offset:null},{type:4,styles:null,timings:"200ms cubic-bezier(0.25, 0.8, 0.25, 1)"}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"50ms 100ms linear"}],options:null}],options:{}}]}});function y(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"div",[["class","mde-popover-direction-arrow"]],null,null,null,null,null)),i.Pb(512,null,s.B,s.C,[i.n,i.w,i.J]),i.xb(2,278528,null,0,s.o,[s.B],{ngStyle:[0,"ngStyle"]},null)],(function(l,n){l(n,2,0,n.component.popoverArrowStyles)}),null)}function x(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,11,"div",[["class","mde-popover-panel"],["role","dialog"]],[[2,"mde-popover-overlap",null],[24,"@.disabled",0],[24,"@transformPopover",0]],[[null,"keydown"],[null,"click"],[null,"mouseover"],[null,"mouseleave"]],(function(l,n,u){var i=!0,t=l.component;return"keydown"===n&&(i=!1!==t._handleKeydown(u)&&i),"click"===n&&(i=!1!==t.onClick()&&i),"mouseover"===n&&(i=!1!==t.onMouseOver()&&i),"mouseleave"===n&&(i=!1!==t.onMouseLeave()&&i),i}),null,null)),i.Pb(512,null,s.z,s.A,[i.v,i.w,i.n,i.J]),i.xb(2,278528,null,0,s.j,[s.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Pb(512,null,s.B,s.C,[i.n,i.w,i.J]),i.xb(4,278528,null,0,s.o,[s.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i.nb(16777216,[[1,2]],null,1,null,y)),i.xb(6,16384,null,0,s.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),(l()(),i.yb(7,0,null,null,4,"div",[["class","mde-popover-content"]],null,null,null,null,null)),i.Pb(512,null,s.B,s.C,[i.n,i.w,i.J]),i.xb(9,278528,null,0,s.o,[s.B],{ngStyle:[0,"ngStyle"]},null),i.xb(10,1458176,null,0,v.b,[i.n,v.c,s.c],{enabled:[0,"enabled"],autoCapture:[1,"autoCapture"]},null),i.Jb(null,0)],(function(l,n){var u=n.component;l(n,2,0,"mde-popover-panel",u._classList),l(n,4,0,u.popoverPanelStyles),l(n,6,0,!u.overlapTrigger),l(n,9,0,u.popoverContentStyles),l(n,10,0,u.focusTrapEnabled,u.focusTrapAutoCaptureEnabled)}),(function(l,n){var u=n.component;l(n,0,0,u.overlapTrigger,u.disableAnimation,"enter")}))}function w(l){return i.Ub(2,[i.Qb(671088640,1,{templateRef:0}),(l()(),i.nb(0,[[1,2]],null,0,null,x))],null,null)}var S=u("igqZ"),L=u("Xd0L"),P=u("cUpR"),k=u("omvX"),I=i.wb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function V(l){return i.Ub(2,[i.Jb(null,0),i.Jb(null,1)],null,null)}class M{constructor(l){this.router=l,this.isOpen=!1}ngOnInit(){this.zoomMethod()}goToVideoPage(l){this.router.navigate(["/video-info",l])}zoomMethod(){$(".ex1").zoom()}}var O=u("iInd"),T=i.wb({encapsulation:0,styles:[[""]],data:{}});function C(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" "," "])),i.Ob(2,1)],null,(function(l,n){var u=n.component,t=i.Tb(n,1,0,l(n,2,0,i.Kb(n.parent,0),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,1,0,t)}))}function D(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" Pay "," "])),(l()(),i.yb(2,0,null,null,0,"span",[["class","fa fa-rupee-sign"]],null,null,null,null,null))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.video||null==u.video.Payment?null:u.video.Payment.Paytag)}))}function F(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"button",[["class","btn btn-success xsbtn float-right ml-1"]],null,null,null,null,null)),(l()(),i.Sb(1,null,[" Pay "," "])),(l()(),i.yb(2,0,null,null,0,"span",[["class","fa fa-rupee-sign"]],null,null,null,null,null))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.video||null==u.video.Payment?null:u.video.Payment.Paytag)}))}function A(l){return i.Ub(0,[i.Mb(0,s.v,[]),i.Mb(0,s.i,[]),(l()(),i.yb(2,0,null,null,30,"div",[["class","video-card"]],null,null,null,null,null)),(l()(),i.yb(3,0,null,null,9,"div",[["class","video-card-image"],["style","height: 150.55px;"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,1,"a",[["class","play-icon"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(5,0,null,null,0,"i",[["class","fas fa-play-circle"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,1,"a",[["class","zoom ex1"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(7,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/nflik-vidlogo.jpg'"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(8,0,null,null,2,"div",[["class","iconSet"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,0,"a",[["class","far fa-thumbs-up"],["data-toggle","tooltip"],["href",""],["title","Like"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,0,"a",[["class","far dislike fa-thumbs-down"],["data-toggle","tooltip"],["href",""],["title","Dislike"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),i.Sb(12,null,["",""])),(l()(),i.yb(13,0,null,null,19,"div",[["class","video-card-body"]],null,null,null,null,null)),(l()(),i.yb(14,0,null,null,4,"div",[["class","video-title"]],null,null,null,null,null)),(l()(),i.yb(15,16777216,null,null,3,"a",[["mdePopoverTriggerOn","hover"]],[[8,"id",0],[1,"aria-haspopup",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"mousedown"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==i.Kb(l,16).onClick(u)&&t),"mouseenter"===n&&(t=!1!==i.Kb(l,16).onMouseEnter(u)&&t),"mouseleave"===n&&(t=!1!==i.Kb(l,16).onMouseLeave(u)&&t),"mousedown"===n&&(t=!1!==i.Kb(l,16)._handleMousedown(u)&&t),t}),null,null)),i.xb(16,4341760,null,0,c.c,[d.a,i.n,i.U,[2,b.c],i.i],{popover:[0,"popover"],triggerEvent:[1,"triggerEvent"]},null),(l()(),i.Sb(17,null,["",""])),i.Ob(18,1),(l()(),i.yb(19,0,null,null,13,"div",[["class","video-view clearfix"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,2,"span",[["class","pt-1 float-left"]],null,null,null,null,null)),(l()(),i.yb(21,0,null,null,0,"i",[["class","fas fa-history"]],null,null,null,null,null)),(l()(),i.Sb(22,null,[" "," "])),(l()(),i.nb(16777216,null,null,2,null,C)),i.xb(24,16384,null,0,s.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(25,1),(l()(),i.nb(16777216,null,null,2,null,D)),i.xb(27,16384,null,0,s.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(28,1),(l()(),i.nb(16777216,null,null,3,null,F)),i.xb(30,16384,null,0,s.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),i.Ob(31,1),i.Ob(32,1),(l()(),i.yb(33,0,null,null,25,"div",[["class","hide"],["id","popover-content"]],null,null,null,null,null)),(l()(),i.yb(34,0,null,null,4,"div",[["class","coverPic pos-relative"]],null,null,null,null,null)),(l()(),i.yb(35,0,null,null,1,"div",[["style","height: 135px !important; overflow: hidden;"]],null,null,null,null,null)),(l()(),i.yb(36,0,null,null,0,"img",[["class","img-fluid"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(37,0,null,null,1,"span",[["class","thumb"]],null,null,null,null,null)),(l()(),i.yb(38,0,null,null,0,"img",[["src","assets/img/wlogo.png"]],null,null,null,null,null)),(l()(),i.yb(39,0,null,null,19,"div",[["class","mainPop p-3"]],null,null,null,null,null)),(l()(),i.yb(40,0,null,null,18,"div",[["class","reviews-members"]],null,null,null,null,null)),(l()(),i.yb(41,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),i.Sb(42,null,[" "," "])),i.Ob(43,1),(l()(),i.yb(44,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(45,null,[""," Views"])),(l()(),i.yb(46,0,null,null,10,"div",[["class","media"]],null,null,null,null,null)),(l()(),i.yb(47,0,null,null,9,"div",[["class","reviews-members-footer mb-3"]],null,null,null,null,null)),(l()(),i.yb(48,0,null,null,8,"span",[["class","total-like-user-main ml-2"],["dir","rtl"]],[[1,"dir",0]],null,null,null,null)),i.Pb(6144,null,b.c,null,[b.b]),i.xb(50,1196032,null,0,b.b,[],{dir:[0,"dir"]},null),(l()(),i.yb(51,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(52,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(53,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(54,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(55,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(56,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(57,0,null,null,1,"button",[["class","btn btn-sm btn-success btn-block"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["View More"])),(l()(),i.yb(59,0,null,null,29,"mde-popover",[],[[1,"role",0]],null,null,w,f)),i.xb(60,180224,[["appPopover",4]],0,c.a,[i.n,i.C],{overlapTrigger:[0,"overlapTrigger"],closeOnClick:[1,"closeOnClick"]},null),(l()(),i.yb(61,0,null,0,27,"mat-card",[["class","mat-card"],["style","max-width: 300px;"]],[[2,"_mat-animation-noopable",null]],null,null,V,I)),i.xb(62,49152,null,0,S.a,[[2,k.a]],null,null),(l()(),i.yb(63,0,null,0,5,"div",[["class","coverPic pos-relative"]],null,null,null,null,null)),(l()(),i.yb(64,0,null,null,2,"div",[["style","height: 135px !important; overflow: hidden;"]],null,null,null,null,null)),(l()(),i.yb(65,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(66,0,null,null,0,"img",[["class","img-fluid"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(67,0,null,null,1,"span",[["class","thumb"]],null,null,null,null,null)),(l()(),i.yb(68,0,null,null,0,"img",[["src","assets/img/wlogo.png"]],null,null,null,null,null)),(l()(),i.yb(69,0,null,0,19,"div",[["class","mainPop p-3"]],null,null,null,null,null)),(l()(),i.yb(70,0,null,null,18,"div",[["class","reviews-members"]],null,null,null,null,null)),(l()(),i.yb(71,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),i.Sb(72,null,["",""])),i.Ob(73,1),(l()(),i.yb(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(75,null,[""," Views"])),(l()(),i.yb(76,0,null,null,10,"div",[["class","media"]],null,null,null,null,null)),(l()(),i.yb(77,0,null,null,9,"div",[["class","reviews-members-footer mb-3"]],null,null,null,null,null)),(l()(),i.yb(78,0,null,null,8,"span",[["class","total-like-user-main ml-2"],["dir","rtl"]],[[1,"dir",0]],null,null,null,null)),i.Pb(6144,null,b.c,null,[b.b]),i.xb(80,1196032,null,0,b.b,[],{dir:[0,"dir"]},null),(l()(),i.yb(81,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(82,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(83,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(84,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(85,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(86,0,null,null,0,"img",[["alt",""],["class","total-like-user"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(87,0,null,null,1,"button",[["class","btn btn-sm btn-success btn-block"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.goToVideoPage(null==t.video||null==t.video.Movies?null:t.video.Movies.MovieId)&&i),i}),null,null)),(l()(),i.Sb(-1,null,["View More"]))],(function(l,n){var u=n.component;l(n,16,0,i.Kb(n,60),"hover");var t="free"===i.Tb(n,24,0,l(n,25,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,24,0,t);var e="paid"===i.Tb(n,27,0,l(n,28,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,27,0,e);var o="free"!==i.Tb(n,30,0,l(n,31,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type))&&"paid"!==i.Tb(n,30,0,l(n,32,0,i.Kb(n,1),null==u.video||null==u.video.Payment?null:u.video.Payment.Type));l(n,30,0,o),l(n,50,0,"rtl"),l(n,60,0,!1,!1),l(n,80,0,"rtl")}),(function(l,n){var u=n.component;l(n,7,0,i.Cb(1,"",null==u.video||null==u.video.ThumbImage?null:u.video.ThumbImage.default,"")),l(n,12,0,null==u.video||null==u.video.Attributes?null:u.video.Attributes.VideoDuration),l(n,15,0,i.Cb(1,"",null==u.video||null==u.video.Movies?null:u.video.Movies.MovieId,""),i.Kb(n,16).ariaHaspopup);var t=i.Tb(n,17,0,l(n,18,0,i.Kb(n,0),null==u.video||null==u.video.Movies?null:u.video.Movies.DisplayName));l(n,17,0,t),l(n,22,0,null==u.video||null==u.video.Movies?null:u.video.Movies.ReleaseDate),l(n,36,0,i.Cb(1,"",null==u.video||null==u.video.ThumbImage?null:u.video.ThumbImage.default,""));var e=i.Tb(n,42,0,l(n,43,0,i.Kb(n,0),null==u.video||null==u.video.Movies?null:u.video.Movies.DisplayName));l(n,42,0,e),l(n,45,0,null==u.video||null==u.video.Attributes?null:u.video.Attributes.Views),l(n,48,0,i.Kb(n,50)._rawDir),l(n,52,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.default,"")),l(n,54,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.img1,"")),l(n,56,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.img2,"")),l(n,59,0,i.Kb(n,60).role),l(n,61,0,"NoopAnimations"===i.Kb(n,62)._animationMode),l(n,66,0,i.Cb(1,"",null==u.video||null==u.video.ThumbImage?null:u.video.ThumbImage.default,""));var o=i.Tb(n,72,0,l(n,73,0,i.Kb(n,0),null==u.video||null==u.video.Movies?null:u.video.Movies.DisplayName));l(n,72,0,o),l(n,75,0,null==u.video||null==u.video.Attributes?null:u.video.Attributes.Views),l(n,78,0,i.Kb(n,80)._rawDir),l(n,82,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.default,"")),l(n,84,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.img1,"")),l(n,86,0,i.Cb(1,"",null==u.video||null==u.video.PromoImage?null:u.video.PromoImage.img2,""))}))}var U=u("iQ7a"),R=u("MNke"),K=u("8cFx"),z=u("2Vo4");let B=(()=>{class l{constructor(l){this.commonService=l,this.categories$=new z.a(null),this.homeVideoList=[],this.premierShows=[],this.displayOrder=[],this.finalList$=new z.a(null),this.finalListSort$=new z.a(null),this.premiunShow$=new z.a(null),this.finalList=[],this.finalListSort=[]}setFinalVideoList(l){this.finalList=l}getFinalVideoList(){return this.finalList}setFinalVideoListSort(l){this.finalListSort=l}getFinalVideoListSort(){return this.finalListSort}setPremiumList(l){this.premierShows=l}getPremiumList(){return this.premierShows}setDisplayOrder(l){this.displayOrder=l}getDisplayOrder(){return this.displayOrder}}return l.ngInjectableDef=i.Xb({factory:function(){return new l(i.Yb(K.a))},token:l,providedIn:"root"}),l})();var j=i.wb({encapsulation:0,styles:[[".img-avatar[_ngcontent-%COMP%]{width:60px!important;display:initial!important}.carousal-views[_ngcontent-%COMP%]{color:#ff516b!important}.category-item1[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 6px #ececec;margin:6px 2px;padding:0;text-align:center;line-height:50px;width:100%}.img-class[_ngcontent-%COMP%]{max-height:40px;box-shadow:none;border-radius:inherit;line-height:40px;height:inherit;width:inherit;-webkit-transform:none;transform:none;-o-object-fit:inherit;object-fit:inherit;margin:10px 0}"]],data:{}});function _(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,4,"div",[["class","category-item1"],["style","background: #a066db;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,3,"a",[["style","color: #fff; font-size: 18px;"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.navigateToMovieList(null==l.context.$implicit?null:l.context.$implicit.title)&&i),i}),null,null)),(l()(),i.yb(3,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),i.Sb(4,null,["",""])),i.Ob(5,1)],null,(function(l,n){var u=i.Tb(n,4,0,l(n,5,0,i.Kb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.title));l(n,4,0,u)}))}function J(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,10,"div",[["class","category-item"]],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,9,"a",[["href","https://mountlitera.nflik.com/"],["target","_blank"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,3,"img",[["class","img-avatar"],["onerror","this.src='assets/img/nflik-pslogo.jpg'"]],[[8,"src",4]],null,null,null,null)),i.Pb(512,null,s.B,s.C,[i.n,i.w,i.J]),i.xb(4,278528,null,0,s.o,[s.B],{ngStyle:[0,"ngStyle"]},null),i.Nb(5,{"background-image":0,"background-size":1}),(l()(),i.yb(6,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),i.Sb(7,null,["",""])),i.Ob(8,1),(l()(),i.yb(9,0,null,null,1,"p",[["class","carousal-views"]],null,null,null,null,null)),(l()(),i.Sb(10,null,[" "," views "]))],(function(l,n){var u=l(n,5,0,"url(assets/img/nflik-pslogo.jpg)","60px 60px");l(n,4,0,u)}),(function(l,n){l(n,2,0,null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.ChannelPic);var u=i.Tb(n,7,0,l(n,8,0,i.Kb(n.parent.parent,0),null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.Showtitle));l(n,7,0,u),l(n,10,0,null==n.parent.context.$implicit||null==n.parent.context.$implicit.Shows?null:n.parent.context.$implicit.Shows.ChannelViews)}))}function E(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.nb(0,null,null,1,null,J)),i.xb(2,16384,[[1,4]],0,r.c,[i.R],{id:[0,"id"]},null)],(function(l,n){l(n,2,0,null==n.context.$implicit||null==n.context.$implicit.Shows?null:n.context.$implicit.Shows.Id)}),null)}function q(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,2,"div",[["class","col-xl-3 col-sm-6"],["style","margin-bottom: 24px;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,1,"app-video-card",[],null,null,null,A,T)),i.xb(3,114688,null,0,M,[O.l],{video:[0,"video"]},null)],(function(l,n){l(n,3,0,n.context.$implicit)}),null)}function N(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,1,null,q)),i.xb(2,278528,null,0,s.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit)}),null)}function H(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.nb(0,null,null,1,null,N)),i.xb(2,16384,[[2,4]],0,r.c,[i.R],null,null)],null,null)}function Q(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,0,"hr",[["class","mt-0"]],null,null,null,null,null))],null,null)}function X(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,42,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,39,"div",[["class","video-block section-padding"],["id","topMovies"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,38,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(3,0,null,null,20,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,19,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,16,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,2,"a",[["class","btn xsbtn mr-2 btn-outline-info"],["href","#!"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Follow "])),(l()(),i.yb(8,0,null,null,0,"span",[["class","fa fa-plus font12"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Sort by "])),(l()(),i.yb(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortList(null==l.context.$implicit||null==l.context.$implicit.tag?null:l.context.$implicit.tag.order,l.context.index,"rating")&&i),i}),null,null)),(l()(),i.yb(14,0,null,null,0,"i",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),i.yb(16,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortList(null==l.context.$implicit||null==l.context.$implicit.tag?null:l.context.$implicit.tag.order,l.context.index,"views")&&i),i}),null,null)),(l()(),i.yb(17,0,null,null,0,"i",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Viewed"])),(l()(),i.yb(19,0,null,null,2,"a",[["class","dropdown-item"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Close"])),(l()(),i.yb(22,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(23,null,["",""])),(l()(),i.yb(24,0,null,null,16,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(25,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(26,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),i.yb(27,0,null,null,0,"img",[["class","img-fluid"],["style","height: 464.59px; width: 100%;"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(28,0,null,null,12,"div",[["class","col-md-10"],["style","margin-bottom: -6px;"]],null,null,null,null,null)),(l()(),i.yb(29,0,null,null,11,"owl-carousel-o",[["class","movies"]],null,[["document","visibilitychange"]],(function(l,n,u){var t=!0;return"document:visibilitychange"===n&&(t=!1!==i.Kb(l,37).onVisibilityChange(u)&&t),t}),U.b,U.a)),i.Pb(512,null,r.e,r.e,[r.f]),i.Pb(131584,null,r.d,r.d,[r.e]),i.Pb(131584,null,r.g,r.g,[r.e,r.h,r.l]),i.Pb(131584,null,r.p,r.p,[r.e]),i.Pb(131584,null,r.q,r.q,[r.e]),i.Pb(131584,null,r.r,r.r,[r.e]),i.Pb(131584,null,r.s,r.s,[r.e,[2,O.a],[2,O.l]]),i.xb(37,3391488,null,1,r.a,[i.n,r.t,r.e,r.d,r.g,r.p,r.q,r.r,r.s,r.f,i.i,r.l],{options:[0,"options"]},null),i.Qb(603979776,2,{slides:1}),(l()(),i.nb(16777216,null,null,1,null,H)),i.xb(40,278528,null,0,s.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.nb(16777216,null,null,1,null,Q)),i.xb(42,16384,null,0,s.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),(l()(),i.nb(0,null,null,0))],(function(l,n){var u=n.component;l(n,37,0,u.moviesOptions),l(n,40,0,null==n.context.$implicit?null:n.context.$implicit.data),l(n,42,0,n.context.index<u.finalList.length-1)}),(function(l,n){l(n,23,0,null==n.context.$implicit||null==n.context.$implicit.tag?null:n.context.$implicit.tag.title),l(n,27,0,i.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.tag?null:n.context.$implicit.tag.image,""))}))}function Y(l){return i.Ub(0,[i.Mb(0,s.v,[]),(l()(),i.yb(1,0,null,null,35,"div",[["class","container-fluid pb-0"],["style","margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,34,null,null,null,null,null,null,null)),(l()(),i.yb(3,0,null,null,8,"div",[["class","top-mobile-search"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,5,"form",[["class","mobile-search"]],null,null,null,null,null)),(l()(),i.yb(7,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),i.yb(8,0,null,null,0,"input",[["class","form-control"],["placeholder","Search for..."],["type","text"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,2,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,0,"i",[["class","fas fa-search"]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,3,"div",[["class","col-12"],["style","display: flex;"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,2,null,_)),i.xb(15,278528,null,0,s.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),i.Mb(0,s.u,[]),(l()(),i.yb(17,0,null,null,14,"div",[["class","top-category section-padding mb-4"]],null,null,null,null,null)),(l()(),i.yb(18,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(19,0,null,null,12,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(20,0,null,null,11,"owl-carousel-o",[["class","premium"]],null,[["document","visibilitychange"]],(function(l,n,u){var t=!0;return"document:visibilitychange"===n&&(t=!1!==i.Kb(l,28).onVisibilityChange(u)&&t),t}),U.b,U.a)),i.Pb(512,null,r.e,r.e,[r.f]),i.Pb(131584,null,r.d,r.d,[r.e]),i.Pb(131584,null,r.g,r.g,[r.e,r.h,r.l]),i.Pb(131584,null,r.p,r.p,[r.e]),i.Pb(131584,null,r.q,r.q,[r.e]),i.Pb(131584,null,r.r,r.r,[r.e]),i.Pb(131584,null,r.s,r.s,[r.e,[2,O.a],[2,O.l]]),i.xb(28,3391488,null,1,r.a,[i.n,r.t,r.e,r.d,r.g,r.p,r.q,r.r,r.s,r.f,i.i,r.l],{options:[0,"options"]},null),i.Qb(603979776,1,{slides:1}),(l()(),i.nb(16777216,null,null,1,null,E)),i.xb(31,278528,null,0,s.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.yb(32,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i.yb(33,0,null,null,3,"div",[["infiniteScroll",""]],null,[[null,"scrolled"]],(function(l,n,u){var i=!0;return"scrolled"===n&&(i=!1!==l.component.onScroll()&&i),i}),null,null)),i.xb(34,4866048,null,0,R.a,[i.n,i.C],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"]},{scrolled:"scrolled"}),(l()(),i.nb(16777216,null,null,1,null,X)),i.xb(36,278528,null,0,s.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,15,0,i.Tb(n,15,0,i.Kb(n,16).transform(u.displayOrder,0,10))),l(n,28,0,u.premierShowsOptions),l(n,31,0,u.premierShows),l(n,34,0,4,50),l(n,36,0,u.finalListScroll)}),null)}function G(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,1,"app-home",[],null,null,null,Y,j)),i.xb(1,114688,null,0,e,[O.l,K.a,B],null,null)],(function(l,n){l(n,1,0)}),null)}var Z=i.ub("app-home",e,G,{},{},[]),W=u("Fwaw"),ll=u("BzsH"),nl=u("xQn8");u.d(n,"HomeModuleNgFactory",(function(){return ul}));var ul=i.vb(o,[],(function(l){return i.Hb([i.Ib(512,i.l,i.gb,[[8,[a.a,Z]],[3,i.l],i.A]),i.Ib(4608,s.n,s.m,[i.x,[2,s.E]]),i.Ib(4608,r.i,r.j,[]),i.Ib(5120,r.h,r.k,[r.i,i.F]),i.Ib(4608,r.t,r.t,[P.d]),i.Ib(4608,r.m,r.n,[]),i.Ib(5120,r.l,r.o,[r.m,i.F]),i.Ib(4608,r.f,r.f,[i.o]),i.Ib(4608,d.a,d.a,[d.g,d.c,i.l,d.f,d.d,i.t,i.C,s.c,b.c,[2,s.g]]),i.Ib(5120,d.h,d.i,[d.a]),i.Ib(4608,m.c,m.c,[]),i.Ib(1073742336,s.b,s.b,[]),i.Ib(1073742336,O.n,O.n,[[2,O.s],[2,O.l]]),i.Ib(1073742336,r.b,r.b,[]),i.Ib(1073742336,b.a,b.a,[]),i.Ib(1073742336,p.b,p.b,[]),i.Ib(1073742336,h.b,h.b,[]),i.Ib(1073742336,g.b,g.b,[]),i.Ib(1073742336,d.e,d.e,[]),i.Ib(1073742336,m.d,m.d,[]),i.Ib(1073742336,v.a,v.a,[]),i.Ib(1073742336,c.b,c.b,[]),i.Ib(1073742336,L.d,L.d,[[2,L.b],[2,P.f]]),i.Ib(1073742336,S.c,S.c,[]),i.Ib(1073742336,L.e,L.e,[]),i.Ib(1073742336,W.a,W.a,[]),i.Ib(1073742336,ll.a,ll.a,[]),i.Ib(1073742336,nl.a,nl.a,[]),i.Ib(1073742336,R.b,R.b,[]),i.Ib(1073742336,o,o,[]),i.Ib(1024,O.j,(function(){return[[{path:"",component:e},{path:"**",pathMatch:"full",redirectTo:"home"}]]}),[])])}))}}]);