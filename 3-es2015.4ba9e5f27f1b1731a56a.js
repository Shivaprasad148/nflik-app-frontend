(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3cDN":function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),t=u("lJxs");class e{constructor(l,n,u){this.router=l,this.commonService=n,this.activatedRoute=u,this.relatedMovies=[],this.showRelatedMoviesList=[],this.showVideoClips=[],this.videoClips=[],this.relatedVideocount=0,this.videoClipCount=0,this.disabledBack=!0,this.disabledNext=!1,this.disabledVideoClipBack=!0,this.disabledVideoClipNext=!1,this.videoSrc="",this.teaserSrc="",this.posterOptions={loop:!1,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,items:2,lazyLoad:!0,nav:!0,navText:['<a class="smBtn"><span class="fa fa-angle-left"></span></a>','<a class="smBtn"><span class="fa fa-angle-right"></span></a>'],slideBy:2,responsive:{0:{items:2},500:{items:2},740:{items:2},940:{items:2}}},this.videoOptions={loop:!1,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,items:1,lazyLoad:!0,nav:!0,navText:['<a class="smBtn"><span class="fa fa-angle-left"></span></a>','<a class="smBtn"><span class="fa fa-angle-right"></span></a>'],slideBy:1,responsive:{0:{items:1},500:{items:1},740:{items:1},940:{items:1}}},this.activatedRoute.paramMap.pipe(Object(t.a)(l=>l.params||{})).subscribe(l=>{console.log("inside the params",l),this.movieId=l.id}),this.getMovieInfo(),this.getRelatedMovies()}ngOnInit(){}initiateVideoPlayer(){}initiateVideoPlayerTeaser(){}getMovieInfo(){this.commonService.getMovieInfo().subscribe(l=>{l&&(this.movieDetails=l[0].Content[0],this.participantDetails=l[0].Participants,this.videoSrc=this.movieDetails.Movies.VideoUrl,this.teaserSrc=this.movieDetails.Movies.TeaserUrl,this.videoClips=this.movieDetails.Videoclips,this.videoClips.length<=1&&(this.disabledVideoClipBack=!0,this.disabledVideoClipNext=!0),this.prepareVideoClip())})}getRelatedMovies(){this.commonService.getRelatedMovies().subscribe(l=>{l&&(this.relatedMovies=l[0].Content,this.relatedMovies.length<=8&&(this.disabledBack=!0,this.disabledNext=!0),this.sortByDate().then(()=>{this.prepareRelatedVideosList()}))})}sortByDate(){return new Promise((l,n)=>{this.relatedMovies.sort((function(l,n){let u=new Date(l.Movies.ReleaseDate),i=new Date(n.Movies.ReleaseDate);return u<i?1:u>i?-1:0})),l()})}removeVideofromList(l,n){}sortBy(l){"views"===l&&this.relatedMovies.sort((l,n)=>+l.Attributes.Views<+n.Attributes.Views?1:+l.Attributes.Views>+n.Attributes.Views?-1:0),"rating"===l&&this.relatedMovies.sort((l,n)=>+l.Attributes.Rating<+n.Attributes.Rating?1:+l.Attributes.Rating>+n.Attributes.Rating?-1:0),this.disabledBack=!0,this.disabledNext=!1,this.prepareRelatedVideosList()}prepareRelatedVideosList(){this.relatedVideocount=0,this.showRelatedMoviesList=this.relatedMovies.slice(0,5)}prepareVideoClip(){this.videoClipCount=0,this.showVideoClips=this.videoClips.slice(0,1)}navigateTo(l){this.router.navigate(["/video-info",l])}previousList(){this.relatedVideocount=this.relatedVideocount-1,this.disabledNext=!1,0===this.relatedVideocount?(this.disabledBack=!0,this.showRelatedMoviesList=this.relatedMovies.slice(0,6)):this.showRelatedMoviesList=this.relatedMovies.slice(5*this.relatedVideocount,5*(this.relatedVideocount+1))}nextList(){this.relatedVideocount=this.relatedVideocount+1,this.disabledBack=!1,5*this.relatedVideocount<this.relatedMovies.length&&(this.showRelatedMoviesList=this.relatedMovies.slice(5*this.relatedVideocount,5*(this.relatedVideocount+1)),this.relatedMovies.length-5*this.relatedVideocount<=5&&(this.disabledNext=!0))}previousClip(){console.log("clicked on back"),this.videoClipCount=this.videoClipCount-1,this.disabledVideoClipNext=!1,0===this.videoClipCount?(this.disabledVideoClipBack=!0,this.showVideoClips=this.videoClips.slice(0,1)):this.showVideoClips=this.videoClips.slice(this.videoClipCount,this.videoClipCount+1)}nextClip(){console.log("clicked on nexr"),this.videoClipCount=this.videoClipCount+1,this.disabledVideoClipBack=!1,this.videoClipCount<this.relatedMovies.length&&(this.showVideoClips=this.videoClips.slice(this.videoClipCount,this.videoClipCount+1),this.videoClips.length-this.videoClipCount<=1&&(this.disabledVideoClipNext=!0))}initiateVideoPlayerClip(l){}playVideo(l){console.log("play button cliked");const n=new NflikVideoPlayer("video-container",this.videoSrc);"play"===l&&n.play(),"playfromstart"===l&&n.playFromBeginning()}playTeaser(){new NflikVideoPlayer("video-container-teaser",this.teaserSrc).play()}getTime(l){const n=this.minutesDiff(l),u=this.hoursDiff(l),i=this.daysDiff(l),t=this.monthsDiff(l),e=this.yearsDiff(l);return e>1||t>12?e+" Years ago":t>1||i>31?t+" Months ago":i>1||u>24?i+" Days ago":u>1||n>60?u+" Hours ago":n>1?n+" Minuts ago":void 0}monthsDiff(l){const n=new Date(l),u=new Date;return 12*this.yearsDiff(l)+(u.getMonth()-n.getMonth())}secondsDiff(l){const n=new Date(l).getTime(),u=Date.now();return Math.floor((u-n)/1e3)}minutesDiff(l){new Date(l),new Date;const n=this.secondsDiff(l);return Math.floor(n/60)}hoursDiff(l){new Date(l),new Date;const n=this.minutesDiff(l);return Math.floor(n/60)}daysDiff(l){new Date(l),new Date;const n=this.hoursDiff(l);return Math.floor(n/24)}weeksDiff(l){new Date(l),new Date;const n=this.daysDiff(l);return Math.floor(n/7)}yearsDiff(l){const n=new Date(l),u=new Date,i=new Date(n);return new Date(u).getFullYear()-i.getFullYear()}}class s{}var a=u("pMnS"),o=u("KMir"),c=u("SVse"),r=u("iQ7a"),b=u("iInd"),d=u("8cFx"),p=i.wb({encapsulation:0,styles:[[".inviteMain[_ngcontent-%COMP%]{margin-right:5px}.text-content[_ngcontent-%COMP%]{margin-bottom:16px}.hr-margin[_ngcontent-%COMP%]{margin-top:.7rem!important;margin-bottom:.7rem!important}.image-overlay[_ngcontent-%COMP%]{background-repeat:no-repeat!important;background-size:cover!important}.wlBtn1[_ngcontent-%COMP%]{background:0 0;border:1.5px solid #fff;border-radius:25px;display:inline-block;color:#fff;font-size:16px;margin-right:2px!important;cursor:pointer;position:absolute;top:109px;right:138px}"]],data:{}});function v(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,"div",[["class",""],["style","padding-left: 4px; padding-right: 4px;"]],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,0,"img",[["class","img-fluid br3"],["style","height: 156.56px;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit)}))}function m(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),i.nb(0,null,null,1,null,v)),i.xb(2,16384,[[1,4]],0,o.c,[i.R],null,null)],null,null)}function h(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,7,"div",[["class","invForm"]],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Enter Email"])),(l()(),i.yb(3,0,null,null,0,"textarea",[["class","form-control border-form-control"],["placeholder","abc@gmail.com, xyz@yahoo.com"]],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,0,"hr",[["class","my-2"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,2,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),i.yb(6,0,null,null,1,"button",[["class","btn btn-success btn-sm"],["id","inviteBtn"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Submit "]))],null,null)}function y(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,2,"span",[["style","margin-right: 3px;"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,1,"a",[["href",""]],null,null,null,null,null)),(l()(),i.Sb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit)}))}function f(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,27,null,null,null,null,null,null,null)),(l()(),i.yb(1,0,null,null,26,"div",[["class","video-card video-card-list"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,6,"div",[["class","video-card-image"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(3,0,null,null,1,"a",[["class","play-icon"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(4,0,null,null,0,"i",[["class","fas fa-play-circle"]],null,null,null,null,null)),(l()(),i.yb(5,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&i),i}),null,null)),(l()(),i.yb(6,0,null,null,0,"img",[["class","img-fluid"],["onerror","this.src='assets/img/default-image.png';"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(7,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),i.Sb(8,null,[" "," "])),(l()(),i.yb(9,0,null,null,18,"div",[["class","video-card-body"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,6,"div",[["class","btn-group float-right right-action"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,1,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href",""]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-ellipsis-v"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,3,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),i.yb(14,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.removeVideofromList(l.context.$implicit,l.context.index)&&i),i}),null,null)),(l()(),i.yb(15,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Close"])),(l()(),i.yb(17,0,null,null,2,"div",[["class","video-title"]],null,null,null,null,null)),(l()(),i.yb(18,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.navigateTo(null==l.context.$implicit||null==l.context.$implicit.Movies?null:l.context.$implicit.Movies.MovieId)&&i),i}),null,null)),(l()(),i.Sb(19,null,["",""])),(l()(),i.yb(20,0,null,null,3,"div",[["class","video-page text-success"]],null,null,null,null,null)),(l()(),i.Sb(21,null,[" "," "])),(l()(),i.yb(22,0,null,null,1,"a",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["href",""],["title",""]],null,null,null,null,null)),(l()(),i.yb(23,0,null,null,0,"i",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),i.yb(24,0,null,null,3,"div",[["class","video-view"]],null,null,null,null,null)),(l()(),i.Sb(25,null,[" "," \xa0"])),(l()(),i.yb(26,0,null,null,0,"i",[["class","fas fa-calendar-alt"]],null,null,null,null,null)),(l()(),i.Sb(27,null,[" "," "]))],null,(function(l,n){var u=n.component;l(n,6,0,i.Cb(1,"",null==n.context.$implicit||null==n.context.$implicit.ThumbImage?null:n.context.$implicit.ThumbImage.default,"")),l(n,8,0,null==n.context.$implicit||null==n.context.$implicit.Attributes?null:n.context.$implicit.Attributes.VideoDuration),l(n,19,0,null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.Title),l(n,21,0,null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.Category),l(n,25,0,null==n.context.$implicit||null==n.context.$implicit.Attributes?null:n.context.$implicit.Attributes.Views),l(n,27,0,u.getTime(null==n.context.$implicit||null==n.context.$implicit.Movies?null:n.context.$implicit.Movies.ReleaseDate))}))}function g(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,80,"div",[["class","container-fluid1"]],null,null,null,null,null)),(l()(),i.yb(1,0,null,null,79,"div",[["class","mainVideo"]],null,null,null,null,null)),(l()(),i.yb(2,0,null,null,78,"ul",[["class","clearfix"]],null,null,null,null,null)),(l()(),i.yb(3,0,null,null,32,"li",[],null,null,null,null,null)),(l()(),i.yb(4,0,null,null,31,"div",[["class","mainVid image-overlay"]],null,null,null,null,null)),i.Pb(512,null,c.B,c.C,[i.n,i.w,i.J]),i.xb(6,278528,null,0,c.o,[c.B],{ngStyle:[0,"ngStyle"]},null),i.Nb(7,{background:0}),(l()(),i.yb(8,0,null,null,0,"div",[["id","video-container"]],null,null,null,null,null)),(l()(),i.yb(9,0,null,null,26,"div",[["class","overlay"]],null,null,null,null,null)),(l()(),i.yb(10,0,null,null,25,"div",[["class","content"]],null,null,null,null,null)),(l()(),i.yb(11,0,null,null,3,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),i.yb(12,0,null,null,2,"button",[["class","wlBtn btn"]],null,null,null,null,null)),(l()(),i.yb(13,0,null,null,0,"span",[["class","fa fa-plus"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Add to play list"])),(l()(),i.yb(15,0,null,null,7,"div",[["class","titleSet"]],null,null,null,null,null)),(l()(),i.yb(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Sb(17,null,["",""])),(l()(),i.yb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(19,null,["",""])),(l()(),i.yb(20,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),i.yb(21,0,null,null,0,"span",[["class","fa fa-eye"]],null,null,null,null,null)),(l()(),i.Sb(22,null,[""," Views"])),(l()(),i.yb(23,0,null,null,12,"div",[["class","buttonSet"]],null,null,null,null,null)),(l()(),i.yb(24,0,null,null,3,"button",[["class","wlBtn btn"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.playVideo("play")&&i),i}),null,null)),(l()(),i.yb(25,0,null,null,0,"span",[["class","fa fa-play"]],null,null,null,null,null)),(l()(),i.yb(26,0,null,null,1,"span",[["class","hiidenSM"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Play"])),(l()(),i.yb(28,0,null,null,3,"button",[["class","wlBtn btn"]],null,null,null,null,null)),(l()(),i.yb(29,0,null,null,0,"span",[["class","fa fa-pause"]],null,null,null,null,null)),(l()(),i.yb(30,0,null,null,1,"span",[["class","hiidenSM"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Resume"])),(l()(),i.yb(32,0,null,null,3,"button",[["class","wlBtn btn"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.playVideo("playfromstart")&&i),i}),null,null)),(l()(),i.yb(33,0,null,null,0,"span",[["class","fa fa-play"]],null,null,null,null,null)),(l()(),i.yb(34,0,null,null,1,"span",[["class","hiidenSM"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Start from beginning"])),(l()(),i.yb(36,0,null,null,44,"li",[],null,null,null,null,null)),(l()(),i.yb(37,0,null,null,43,"div",[["class","lcard blueBg"]],null,null,null,null,null)),(l()(),i.yb(38,0,null,null,0,"div",[["id","video-container-teaser"]],null,null,null,null,null)),(l()(),i.yb(39,0,null,null,41,"div",[["class","single-video-info-content mb-3"]],null,null,null,null,null)),(l()(),i.yb(40,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Teaser : "])),(l()(),i.yb(42,0,null,null,3,"div",[["class","mt-3"],["style","height: 137.52px; width: 100%; position: relative;"]],null,null,null,null,null)),i.Pb(512,null,c.B,c.C,[i.n,i.w,i.J]),i.xb(44,278528,null,0,c.o,[c.B],{ngStyle:[0,"ngStyle"]},null),i.Nb(45,{background:0}),(l()(),i.yb(46,0,null,null,1,"button",[["class","wlBtn1 btn"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.playTeaser()&&i),i}),null,null)),(l()(),i.yb(47,0,null,null,0,"span",[["class","fa fa-play"]],null,null,null,null,null)),(l()(),i.yb(48,0,null,null,2,"h6",[["class","mt-4"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Poster's : "])),(l()(),i.yb(50,0,null,null,0,"div",[["class","float-right btnSet"]],null,null,null,null,null)),(l()(),i.yb(51,0,null,null,12,"div",[["class","sRow mt-3"]],null,null,null,null,null)),(l()(),i.yb(52,0,null,null,11,"owl-carousel-o",[["class","poster"]],null,[["document","visibilitychange"]],(function(l,n,u){var t=!0;return"document:visibilitychange"===n&&(t=!1!==i.Kb(l,60).onVisibilityChange(u)&&t),t}),r.b,r.a)),i.Pb(512,null,o.e,o.e,[o.f]),i.Pb(131584,null,o.d,o.d,[o.e]),i.Pb(131584,null,o.g,o.g,[o.e,o.h,o.l]),i.Pb(131584,null,o.p,o.p,[o.e]),i.Pb(131584,null,o.q,o.q,[o.e]),i.Pb(131584,null,o.r,o.r,[o.e]),i.Pb(131584,null,o.s,o.s,[o.e,[2,b.a],[2,b.l]]),i.xb(60,3391488,null,1,o.a,[i.n,o.t,o.e,o.d,o.g,o.p,o.q,o.r,o.s,o.f,i.i,o.l],{options:[0,"options"]},null),i.Qb(603979776,1,{slides:1}),(l()(),i.nb(16777216,null,null,1,null,m)),i.xb(63,278528,null,0,c.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.yb(64,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i.yb(65,0,null,null,15,"div",[["class","row sRow iconset"]],null,null,null,null,null)),(l()(),i.yb(66,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),i.yb(67,0,null,null,3,"a",[["href","#!"]],null,null,null,null,null)),(l()(),i.yb(68,0,null,null,0,"span",[["class","fa fa-thumbs-up"]],null,null,null,null,null)),(l()(),i.yb(69,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(70,null,["",""])),(l()(),i.yb(71,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),i.yb(72,0,null,null,3,"a",[["href","#!"]],null,null,null,null,null)),(l()(),i.yb(73,0,null,null,0,"span",[["class","fa fa-thumbs-down"]],null,null,null,null,null)),(l()(),i.yb(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(75,null,["",""])),(l()(),i.yb(76,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),i.yb(77,0,null,null,3,"a",[["data-toggle","tooltip"],["href","#!"],["title","Follow"]],null,null,null,null,null)),(l()(),i.yb(78,0,null,null,0,"span",[["class","fa fa-paper-plane"]],null,null,null,null,null)),(l()(),i.yb(79,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["789"])),(l()(),i.yb(81,0,null,null,74,"div",[["class","container-fluid pb-0"]],null,null,null,null,null)),(l()(),i.yb(82,0,null,null,73,"div",[["class","video-block section-padding"]],null,null,null,null,null)),(l()(),i.yb(83,0,null,null,72,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(84,0,null,null,39,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),i.yb(85,0,null,null,38,"div",[["class","single-video-left"]],null,null,null,null,null)),(l()(),i.yb(86,0,null,null,19,"div",[["class","single-video-author box mb-3"]],null,null,null,null,null)),(l()(),i.yb(87,0,null,null,9,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),i.yb(88,0,null,null,5,"div",[["class","inviteMain"]],null,null,null,null,null)),(l()(),i.yb(89,0,null,null,2,"button",[["class","btn btn-danger inviteMBtn"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var i=!0,t=l.component;return"click"===n&&(i=0!=(t.showForm=!t.showForm)&&i),i}),null,null)),(l()(),i.Sb(-1,null,[" Invite "])),(l()(),i.yb(91,0,null,null,0,"span",[["class","fa fa-paper-plane"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,1,null,h)),i.xb(93,16384,null,0,c.l,[i.U,i.R],{ngIf:[0,"ngIf"]},null),(l()(),i.yb(94,0,null,null,2,"button",[["class","btn btn-success"],["type","button"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Pay Now "])),(l()(),i.yb(96,0,null,null,0,"span",[["class","fa fa-credit-card"]],null,null,null,null,null)),(l()(),i.yb(97,0,null,null,0,"img",[["alt",""],["class","img-fluid"]],[[8,"src",4]],null,null,null,null)),(l()(),i.yb(98,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),i.yb(99,0,null,null,2,"a",[["style","margin-right: 3px !important;"]],null,null,null,null,null)),(l()(),i.yb(100,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),i.Sb(101,null,["",""])),(l()(),i.yb(102,0,null,null,1,"span",[["data-original-title","Verified"],["data-placement","top"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),i.yb(103,0,null,null,0,"i",[["class","fas fa-check-circle text-success"]],null,null,null,null,null)),(l()(),i.yb(104,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),i.Sb(105,null,["Published on ",""])),(l()(),i.yb(106,0,null,null,17,"div",[["class","single-video-info-content box mb-3"]],null,null,null,null,null)),(l()(),i.yb(107,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Cast:"])),(l()(),i.yb(109,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(110,null,["",""])),(l()(),i.yb(111,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Category :"])),(l()(),i.yb(113,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(114,null,["",""])),(l()(),i.yb(115,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["About :"])),(l()(),i.yb(117,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Sb(118,null,[" "," "])),(l()(),i.yb(119,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,["Tags :"])),(l()(),i.yb(121,0,null,null,2,"p",[["class","tags mb-0"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,1,null,y)),i.xb(123,278528,null,0,c.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i.yb(124,0,null,null,31,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),i.yb(125,0,null,null,30,"div",[["class","single-video-right"]],null,null,null,null,null)),(l()(),i.yb(126,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.yb(127,0,null,null,25,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.yb(128,0,null,null,4,"div",[["class","adblock"]],null,null,null,null,null)),(l()(),i.yb(129,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Google AdSense"])),(l()(),i.yb(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" 336 x 280 "])),(l()(),i.yb(133,0,null,null,19,"div",[["class","main-title"]],null,null,null,null,null)),(l()(),i.yb(134,0,null,null,13,"div",[["class","btn-group float-right right-action"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),i.yb(135,0,null,null,2,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","right-action-link text-gray"],["data-toggle","dropdown"],["href",""]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" Sort by "])),(l()(),i.yb(137,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-down"]],null,null,null,null,null)),(l()(),i.yb(138,0,null,null,9,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),i.yb(139,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortBy("rating")&&i),i}),null,null)),(l()(),i.yb(140,0,null,null,0,"i",[["class","fas fa-fw fa-star"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Top Rated"])),(l()(),i.yb(142,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.sortBy("views")&&i),i}),null,null)),(l()(),i.yb(143,0,null,null,0,"i",[["class","fas fa-fw fa-signal"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Viewed"])),(l()(),i.yb(145,0,null,null,2,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),i.yb(146,0,null,null,0,"i",[["class","fas fa-fw fa-times-circle"]],null,null,null,null,null)),(l()(),i.Sb(-1,null,[" \xa0 Close"])),(l()(),i.yb(148,0,null,null,4,"div",[["style","margin-bottom: 10px; font-size: 1rem;"]],null,null,null,null,null)),(l()(),i.yb(149,0,null,null,1,"button",[["class","btn btn-link"],["style","color: red; padding-left: 0px !important;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.previousList()&&i),i}),null,null)),(l()(),i.Sb(-1,null,[" Back "])),(l()(),i.yb(151,0,null,null,1,"button",[["class","btn btn-link"],["style","color: blue; padding-left: 3px !important;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.nextList()&&i),i}),null,null)),(l()(),i.Sb(-1,null,[" Next "])),(l()(),i.yb(153,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),i.nb(16777216,null,null,1,null,f)),i.xb(155,278528,null,0,c.k,[i.U,i.R,i.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component,i=l(n,7,0,"url("+(null==u.movieDetails?null:u.movieDetails.ThumbImage[0])+")");l(n,6,0,i);var t=l(n,45,0,"url("+(null==u.movieDetails?null:u.movieDetails.ThumbImage[0])+")");l(n,44,0,t),l(n,60,0,u.posterOptions),l(n,63,0,null==u.movieDetails?null:u.movieDetails.PromoImage),l(n,93,0,u.showForm),l(n,123,0,null==u.movieDetails?null:u.movieDetails.Tags),l(n,155,0,u.showRelatedMoviesList)}),(function(l,n){var u=n.component;l(n,17,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.DisplayName),l(n,19,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.Synopsis),l(n,22,0,null==u.movieDetails||null==u.movieDetails.Attributes?null:u.movieDetails.Attributes.Views),l(n,70,0,null==u.movieDetails||null==u.movieDetails.Attributes?null:u.movieDetails.Attributes.Likes),l(n,75,0,null==u.movieDetails||null==u.movieDetails.Attributes?null:u.movieDetails.Attributes.Dislike),l(n,97,0,i.Cb(1,"",null==u.movieDetails?null:u.movieDetails.ThumbImage[0],"")),l(n,101,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.DisplayName),l(n,105,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.ReleaseDate),l(n,110,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.CastCrew),l(n,114,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.Category),l(n,118,0,null==u.movieDetails||null==u.movieDetails.Movies?null:u.movieDetails.Movies.MovieDesc),l(n,149,0,u.disabledBack),l(n,151,0,u.disabledNext)}))}function x(l){return i.Ub(0,[(l()(),i.yb(0,0,null,null,1,"app-video-info-page",[],null,null,null,g,p)),i.xb(1,114688,null,0,e,[b.l,d.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var D=i.ub("app-video-info-page",e,x,{},{},[]),w=u("cUpR"),M=u("QQfA"),C=u("IP0z"),k=u("POq0"),S=u("zMNK"),V=u("/HVE"),I=u("hOhj"),B=u("5GAg"),$=u("Xs+b"),R=u("Xd0L"),P=u("igqZ"),A=u("Fwaw"),T=u("BzsH"),N=u("xQn8");u.d(n,"VideoInfoPageModuleNgFactory",(function(){return F}));var F=i.vb(s,[],(function(l){return i.Hb([i.Ib(512,i.l,i.gb,[[8,[a.a,D]],[3,i.l],i.A]),i.Ib(4608,c.n,c.m,[i.x,[2,c.E]]),i.Ib(4608,o.i,o.j,[]),i.Ib(5120,o.h,o.k,[o.i,i.F]),i.Ib(4608,o.t,o.t,[w.d]),i.Ib(4608,o.m,o.n,[]),i.Ib(5120,o.l,o.o,[o.m,i.F]),i.Ib(4608,o.f,o.f,[i.o]),i.Ib(4608,M.a,M.a,[M.g,M.c,i.l,M.f,M.d,i.t,i.C,c.c,C.c,[2,c.g]]),i.Ib(5120,M.h,M.i,[M.a]),i.Ib(4608,k.c,k.c,[]),i.Ib(1073742336,c.b,c.b,[]),i.Ib(1073742336,b.n,b.n,[[2,b.s],[2,b.l]]),i.Ib(1073742336,o.b,o.b,[]),i.Ib(1073742336,C.a,C.a,[]),i.Ib(1073742336,S.b,S.b,[]),i.Ib(1073742336,V.b,V.b,[]),i.Ib(1073742336,I.b,I.b,[]),i.Ib(1073742336,M.e,M.e,[]),i.Ib(1073742336,k.d,k.d,[]),i.Ib(1073742336,B.a,B.a,[]),i.Ib(1073742336,$.b,$.b,[]),i.Ib(1073742336,R.d,R.d,[[2,R.b],[2,w.f]]),i.Ib(1073742336,P.c,P.c,[]),i.Ib(1073742336,R.e,R.e,[]),i.Ib(1073742336,A.a,A.a,[]),i.Ib(1073742336,T.a,T.a,[]),i.Ib(1073742336,N.a,N.a,[]),i.Ib(1073742336,s,s,[]),i.Ib(1024,b.j,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);