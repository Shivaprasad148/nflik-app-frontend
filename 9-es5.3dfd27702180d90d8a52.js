(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3cDN":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("67Y/"),e=function(){function l(l,n,u){var t=this;this.router=l,this.commonService=n,this.activatedRoute=u,this.relatedMovies=[],this.showRelatedMoviesList=[],this.count=0,this.disabledBack=!0,this.disabledNext=!1,this.videoSrc="https://nflik-test-processingengine.s3.ap-south-1.amazonaws.com/song/playlist.m3u8",this.activatedRoute.paramMap.pipe(Object(i.a)((function(l){return l.params||{}}))).subscribe((function(l){console.log("inside the params",l),t.movieId=l.id})),this.getMovieInfo(),this.getRelatedMovies()}return l.prototype.ngOnInit=function(){},l.prototype.initiateVideoPlayer=function(){console.log("ur;",this.videoSrc),NflikVideoPlayer.init("video-container",this.videoSrc)},l.prototype.getMovieInfo=function(){var l=this;this.commonService.getMovieInfo().subscribe((function(n){n&&(l.movieDetails=n[0].Content[0],l.participantDetails=n[0].Participants,l.initiateVideoPlayer())}))},l.prototype.getRelatedMovies=function(){var l=this;this.commonService.getRelatedMovies().subscribe((function(n){n&&(l.relatedMovies=n[0].Content,l.relatedMovies.length<=8&&(l.disabledBack=!0,l.disabledNext=!0),l.prepareRelatedVideosList())}))},l.prototype.removeVideofromList=function(l,n){},l.prototype.sortBy=function(l){"views"===l&&this.relatedMovies.sort((function(l,n){return+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0})),"rating"===l&&this.relatedMovies.sort((function(l,n){return+l.Attributes.Rating<+n.Attributes.Rating?1:+l.Attributes.Rating>+n.Attributes.Rating?-1:0})),this.disabledBack=!0,this.disabledNext=!1,this.prepareRelatedVideosList()},l.prototype.prepareRelatedVideosList=function(){this.count=0,this.showRelatedMoviesList=this.relatedMovies.slice(0,8)},l.prototype.navigateTo=function(l){this.router.navigate(["/video-info",l])},l.prototype.previousList=function(){this.count=this.count-1,this.disabledNext=!1,0===this.count?(this.disabledBack=!0,this.showRelatedMoviesList=this.relatedMovies.slice(0,8)):this.showRelatedMoviesList=this.relatedMovies.slice(8*this.count,8*(this.count+1))},l.prototype.nextList=function(){this.count=this.count+1,this.disabledBack=!1,8*this.count<this.relatedMovies.length&&(this.showRelatedMoviesList=this.relatedMovies.slice(8*this.count,8*(this.count+1)),this.relatedMovies.length-8*this.count<=8&&(this.disabledNext=!0))},l.prototype.getTime=function(l){var n=this.minutesDiff(l),u=this.hoursDiff(l),t=this.daysDiff(l),i=this.monthsDiff(l),e=this.yearsDiff(l);return e>1||i>12?e+" years ago":i>1||t>31?i+" months ago":t>1||u>24?t+" days ago":u>1||n>60?u+" hours ago":n>1?n+" minuts ago":void 0},l.prototype.monthsDiff=function(l){var n=l.split("-"),u=new Date(+n[2],+n[1],+n[0]),t=new Date;return 12*this.yearsDiff(l)+(t.getMonth()-u.getMonth())},l.prototype.secondsDiff=function(l){var n=l.split("-"),u=new Date(+n[2],+n[1],+n[0]).getTime(),t=Date.now();return Math.floor((t-u)/1e3)},l.prototype.minutesDiff=function(l){var n=l.split("-"),u=(new Date(+n[2],+n[1],+n[0]),new Date,this.secondsDiff(l));return Math.floor(u/60)},l.prototype.hoursDiff=function(l){var n=l.split("-"),u=(new Date(+n[2],+n[1],+n[0]),new Date,this.minutesDiff(l));return Math.floor(u/60)},l.prototype.daysDiff=function(l){var n=l.split("-"),u=(new Date(+n[2],+n[1],+n[0]),new Date,this.hoursDiff(l));return Math.floor(u/24)},l.prototype.weeksDiff=function(l){var n=l.split("-"),u=(new Date(+n[2],+n[1],+n[0]),new Date,this.daysDiff(l));return Math.floor(u/7)},l.prototype.yearsDiff=function(l){var n=l.split("-"),u=new Date(+n[2],+n[1],+n[0]),t=new Date,i=new Date(u);return new Date(t).getFullYear()-i.getFullYear()},l}(),o=function(){return function(){}}(),s=u("pMnS"),a=u("Ip0R"),c=u("ZYCi"),r=u("8cFx"),b=t.wb({encapsulation:0,styles:[[".inviteMain[_ngcontent-%COMP%]{margin-right:5px}"]],data:{}});function d(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,7,"div",[["class","invForm"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Enter Email"])),(l()(),t.yb(3,0,null,null,0,"textarea",[["class","form-control border-form-control"],["placeholder","abc@gmail.com, xyz@yahoo.com"]],null,null,null,null,null)),(l()(),t.yb(4,0,null,null,0,"hr",[["class","my-2"]],null,null,null,null,null)),(l()(),t.yb(5,0,null,null,2,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,1,"button",[["class","btn btn-success btn-sm"],["id","inviteBtn"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Submit "]))],null,null)}function p(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t.yb(1,0,null,null,2,"span",[["style","margin-right: 3px;"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,1,"a",[["href",""]],null,null,null,null,null)),(l()(),t.Sb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit)}))}function v(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,27,null,null,null,null,null,null,null)),(l()(),t.yb(1,0,null,null,26,"div",[["class","video-card video-card-list"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,6,"div",[["class","video-card-image"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&t),t}),null,null)),(l()(),t.yb(3,0,null,null,1,"a",[["class","play-icon"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&t),t}),null,null)),(l()(),t.yb(4,0,null,null,0,"i",[["class","fas fa-play-circle"]],null,null,null,null,null)),(l()(),t.yb(5,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&t),t}),null,null)),(l()(),t.yb(6,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/default-image.png';"]],[[8,"src",4]],null,null,null,null)),(l()(),t.yb(7,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),t.Sb(8,null,["",""])),(l()(),t.yb(9,0,null,null,18,"div",[["class","video-card-body"]],null,null,null,null,null)),(l()(),t.yb(10,0,null,null,6,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),t.yb(11,0,null,null,1,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href",""]],null,null,null,null,null)),(l()(),t.yb(12,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-ellipsis-v"]],null,null,null,null,null)),(l()(),t.yb(13,0,null,null,3,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),t.yb(14,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeVideofromList(l.context.$implicit,l.context.index)&&t),t}),null,null)),(l()(),t.yb(15,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Close"])),(l()(),t.yb(17,0,null,null,2,"div",[["class","video-title"]],null,null,null,null,null)),(l()(),t.yb(18,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&t),t}),null,null)),(l()(),t.Sb(19,null,["",""])),(l()(),t.yb(20,0,null,null,3,"div",[["class","video-page text-success"]],null,null,null,null,null)),(l()(),t.Sb(21,null,[" "," "])),(l()(),t.yb(22,0,null,null,1,"a",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["href",""],["title",""]],null,null,null,null,null)),(l()(),t.yb(23,0,null,null,0,"i",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),t.yb(24,0,null,null,3,"div",[["class","video-view"]],null,null,null,null,null)),(l()(),t.Sb(25,null,[" "," \xa0"])),(l()(),t.yb(26,0,null,null,0,"i",[["class","fas fa-calendar-alt"]],null,null,null,null,null)),(l()(),t.Sb(27,null,[" "," "]))],null,(function(l,n){var u=n.component;l(n,6,0,t.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.ThumbImage?null:n.context.$implicit.ThumbImage.default,"")),l(n,8,0,null==n.context.$implicit||null==n.context.$implicit.Attributes?null:n.context.$implicit.Attributes.VideoDuration),l(n,19,0,null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.Title),l(n,21,0,null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.Category),l(n,25,0,null==n.context.$implicit||null==n.context.$implicit.Attributes?null:n.context.$implicit.Attributes.Views),l(n,27,0,u.getTime(null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.ReleaseDate))}))}function f(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,77,"div",[["class","container-fluid pb-0"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,76,"div",[["class","video-block section-padding"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,75,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.yb(3,0,null,null,42,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.yb(4,0,null,null,41,"div",[["class","single-video-left"]],null,null,null,null,null)),(l()(),t.yb(5,0,null,null,2,"div",[["class","mainVid mb-5"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,1,"div",[["class","single-video"]],null,null,null,null,null)),(l()(),t.yb(7,0,null,null,0,"div",[["id","video-container"]],null,null,null,null,null)),(l()(),t.yb(8,0,null,null,19,"div",[["class","single-video-author box mb-3"]],null,null,null,null,null)),(l()(),t.yb(9,0,null,null,9,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),t.yb(10,0,null,null,5,"div",[["class","inviteMain"]],null,null,null,null,null)),(l()(),t.yb(11,0,null,null,2,"button",[["class","btn btn-danger inviteMBtn"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0,i=l.component;return"click"===n&&(t=0!=(i.showForm=!i.showForm)&&t),t}),null,null)),(l()(),t.Sb(-1,null,[" Invite "])),(l()(),t.yb(13,0,null,null,0,"span",[["class","fa fa-paper-plane"]],null,null,null,null,null)),(l()(),t.nb(16777216,null,null,1,null,d)),t.xb(15,16384,null,0,a.l,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(16,0,null,null,2,"button",[["class","btn btn-success"],["type","button"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Pay Now "])),(l()(),t.yb(18,0,null,null,0,"span",[["class","fa fa-credit-card"]],null,null,null,null,null)),(l()(),t.yb(19,0,null,null,0,"img",[["alt",""],["class","img-fluid"],["src","assets/img/s4.png"]],null,null,null,null,null)),(l()(),t.yb(20,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.yb(21,0,null,null,2,"a",[["style","margin-right: 3px !important;"]],null,null,null,null,null)),(l()(),t.yb(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Sb(23,null,["",""])),(l()(),t.yb(24,0,null,null,1,"span",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),t.yb(25,0,null,null,0,"i",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),t.yb(26,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Sb(27,null,["Published on ",""])),(l()(),t.yb(28,0,null,null,17,"div",[["class","single-video-info-content box mb-3"]],null,null,null,null,null)),(l()(),t.yb(29,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Cast:"])),(l()(),t.yb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Sb(32,null,["",""])),(l()(),t.yb(33,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Category :"])),(l()(),t.yb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Sb(36,null,["",""])),(l()(),t.yb(37,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["About :"])),(l()(),t.yb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Sb(40,null,[" "," "])),(l()(),t.yb(41,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Tags :"])),(l()(),t.yb(43,0,null,null,2,"p",[["class","tags mb-0"]],null,null,null,null,null)),(l()(),t.nb(16777216,null,null,1,null,p)),t.xb(45,278528,null,0,a.k,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.yb(46,0,null,null,31,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.yb(47,0,null,null,30,"div",[["class","single-video-right"]],null,null,null,null,null)),(l()(),t.yb(48,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.yb(49,0,null,null,25,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.yb(50,0,null,null,4,"div",[["class","adblock"]],null,null,null,null,null)),(l()(),t.yb(51,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Google AdSense"])),(l()(),t.yb(53,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" 336 x 280 "])),(l()(),t.yb(55,0,null,null,19,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),t.yb(56,0,null,null,13,"div",[["class","btn-group float-right right-action"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.yb(57,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href",""]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Sort by "])),(l()(),t.yb(59,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),t.yb(60,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),t.yb(61,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortBy("rating")&&t),t}),null,null)),(l()(),t.yb(62,0,null,null,0,"i",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),t.yb(64,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortBy("views")&&t),t}),null,null)),(l()(),t.yb(65,0,null,null,0,"i",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Viewed"])),(l()(),t.yb(67,0,null,null,2,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),t.yb(68,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" \xa0 Close"])),(l()(),t.yb(70,0,null,null,4,"div",[["style","margin-bottom: 10px; font-size: 1rem;"]],null,null,null,null,null)),(l()(),t.yb(71,0,null,null,1,"button",[["class","btn btn-link"],["style","color: red; padding-left: 0px !important;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.previousList()&&t),t}),null,null)),(l()(),t.Sb(-1,null,["Back"])),(l()(),t.yb(73,0,null,null,1,"button",[["class","btn btn-link"],["style","color: blue; padding-left: 3px !important;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.nextList()&&t),t}),null,null)),(l()(),t.Sb(-1,null,["Next"])),(l()(),t.yb(75,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.nb(16777216,null,null,1,null,v)),t.xb(77,278528,null,0,a.k,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,15,0,u.showForm),l(n,45,0,null==u.movieDetails?null:u.movieDetails.Tags),l(n,77,0,u.showRelatedMoviesList)}),(function(l,n){var u=n.component;l(n,23,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.DisplayName),l(n,27,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.ReleaseDate),l(n,32,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.CastCrew),l(n,36,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.Category),l(n,40,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.MovieDesc),l(n,71,0,u.disabledBack),l(n,73,0,u.disabledNext)}))}function m(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,1,"app-video-info-page",[],null,null,null,f,b)),t.xb(1,114688,null,0,e,[c.l,r.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.ub("app-video-info-page",e,m,{},{},[]),h=u("kWwK"),g=u("ZYjt"),x=u("xQn8");u.d(n,"VideoInfoPageModuleNgFactory",(function(){return M}));var M=t.vb(o,[],(function(l){return t.Hb([t.Ib(512,t.l,t.gb,[[8,[s.a,y]],[3,t.l],t.A]),t.Ib(4608,a.n,a.m,[t.x,[2,a.D]]),t.Ib(4608,h.i,h.j,[]),t.Ib(5120,h.h,h.k,[h.i,t.F]),t.Ib(4608,h.t,h.t,[g.d]),t.Ib(4608,h.m,h.n,[]),t.Ib(5120,h.l,h.o,[h.m,t.F]),t.Ib(4608,h.f,h.f,[t.o]),t.Ib(1073742336,a.b,a.b,[]),t.Ib(1073742336,c.n,c.n,[[2,c.s],[2,c.l]]),t.Ib(1073742336,h.b,h.b,[]),t.Ib(1073742336,x.a,x.a,[]),t.Ib(1073742336,o,o,[]),t.Ib(1024,c.j,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);