(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1ld4":function(l,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("IheW"),u=t("Va8t"),e=t("lJxs");class s{constructor(l,n,t){this.http=l,this.baseService=n,this.local=t,this._base_url=this.baseService._base_url}registerUser(l){return this.http.post(this._base_url+""+u.a.REGISTER,l)}validateOtp(l){return this.http.post(this._base_url+""+u.a.OTP_VALIDATE,l)}login(l){return this.http.post(this._base_url+""+u.a.LOGIN,l).pipe(Object(e.a)(n=>this.setLoginDetails(n,l)))}logout(){const l=this.http.post(this._base_url+""+u.a.LOGOUT,{},this.authHttpOptions);return setTimeout(()=>{localStorage.removeItem("currentUser")},0),l}forgotPassword(l){return this.http.post(this._base_url+""+u.a.FORGOT_PASSWORD,l).pipe(Object(e.a)(l=>200===l.status))}setLoginDetails(l,n={}){const t=l;return this.local.currentUser={token:"12345",data:t},t}get authHttpOptions(){return{headers:new a.g({Authorization:"Bearer"+this.local.token,"Content-Type":"application/json"})}}}},Pb9M:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var a=t("8Y7J"),u=t("i7Ss");let e=(()=>{class l{constructor(l,n){this.zone=l,this.winRef=n,this.options={key:"rzp_test_qnuPKU0lH9GfsM",name:"Nflik user",description:"Shopping",amount:100,prefill:{name:"nflik user",email:""},notes:{},theme:{color:"#3880FF"},handler:this.paymentHandler.bind(this),modal:{ondismiss:()=>{this.zone.run(()=>{})}}},this._window=this.winRef.nativeWindow}initPay(){this.rzp=new this.winRef.nativeWindow.Razorpay(this.options),this.rzp.open()}paymentHandler(l){this.zone.run(()=>{console.log("res",l)})}}return l.ngInjectableDef=a.Xb({factory:function(){return new l(a.Yb(a.C),a.Yb(u.a))},token:l,providedIn:"root"}),l})()},Va8t:function(l,n,t){"use strict";t.d(n,"a",(function(){return a}));const a={LOGIN:"login",LOGOUT:"logout",REGISTER:"register",OTP_VALIDATE:"Otpvalidate",FORGOT_PASSWORD:"ForgotPwd",DEFAULT_VIDEO:"defaultpage",HOME_PAGE:"homepage",MY_CHANNELS:"mychannels",SEARCH:"Search",MOVIE_INFO:"movieinfo",EVENT_SCHEDULE:"ScheduleEvent",EVENT_LIST:"eventslist",MANAGE_EVENT:"ManageEvent",EVENT_INFO:"eventinfo",RELATED_MOVIES:"relatedmovieinfo",CHANNELS_LIST:"ChannelList",COUPONS_LIST:"couponsList"}},i7Ss:function(l,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("8Y7J");let u=(()=>{class l{get nativeWindow(){return window}}return l.ngInjectableDef=a.Xb({factory:function(){return new l},token:l,providedIn:"root"}),l})()},iQ7a:function(l,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t("8Y7J"),u=t("KMir"),e=t("SVse"),s=(t("cUpR"),t("iInd"),a.wb({encapsulation:0,styles:[".owl-theme[_ngcontent-%COMP%] { display: block; }"],data:{}}));function o(l){return a.Ub(0,[(l()(),a.yb(0,0,null,null,3,"div",[["class","owl-stage-outer"]],null,null,null,null,null)),(l()(),a.yb(1,0,null,null,2,"owl-stage",[],null,[[null,"mousedown"],[null,"touchstart"],[null,"touchcancel"],[null,"dragstart"],[null,"selectstart"]],(function(l,n,t){var u=!0;return"mousedown"===n&&(u=!1!==a.Kb(l,2).onMouseDown(t)&&u),"touchstart"===n&&(u=!1!==a.Kb(l,2).onTouchStart(t)&&u),"touchcancel"===n&&(u=!1!==a.Kb(l,2).onTouchCancel(t)&&u),"dragstart"===n&&(u=!1!==a.Kb(l,2).onDragStart()&&u),"selectstart"===n&&(u=!1!==a.Kb(l,2).onSelectStart()&&u),u}),v,d)),a.xb(2,245760,null,0,u.u,[a.C,a.n,a.J,u.e,u.q],{owlDraggable:[0,"owlDraggable"],stageData:[1,"stageData"],slidesData:[2,"slidesData"]},null),a.Nb(3,{isMouseDragable:0,isTouchDragable:1})],(function(l,n){var t=n.component,a=l(n,3,0,null==t.owlDOMData?null:t.owlDOMData.isMouseDragable,null==t.owlDOMData?null:t.owlDOMData.isTouchDragable);l(n,2,0,a,t.stageData,t.slidesData)}),null)}function i(l){return a.Ub(0,[(l()(),a.yb(0,0,null,null,4,"div",[["class","owl-dot"]],null,[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.moveByDot(l.context.$implicit.id)&&a),a}),null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(2,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(3,{active:0,"owl-dot-text":1}),(l()(),a.yb(4,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){var t=l(n,3,0,n.context.$implicit.active,n.context.$implicit.showInnerContent);l(n,2,0,"owl-dot",t)}),(function(l,n){l(n,4,0,n.context.$implicit.innerContent)}))}function r(l){return a.Ub(0,[(l()(),a.yb(0,0,null,null,18,null,null,null,null,null,null,null)),(l()(),a.yb(1,0,null,null,11,"div",[["class","owl-nav"]],null,null,null,null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(3,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(4,{disabled:0}),(l()(),a.yb(5,0,null,null,3,"div",[["class","owl-prev"]],[[8,"innerHTML",1]],[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.prev()&&a),a}),null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(7,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(8,{disabled:0}),(l()(),a.yb(9,0,null,null,3,"div",[["class","owl-next"]],[[8,"innerHTML",1]],[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.next()&&a),a}),null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(11,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(12,{disabled:0}),(l()(),a.yb(13,0,null,null,5,"div",[["class","owl-dots"]],null,null,null,null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(15,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(16,{disabled:0}),(l()(),a.nb(16777216,null,null,1,null,i)),a.xb(18,278528,null,0,e.k,[a.U,a.R,a.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component,a=l(n,4,0,null==t.navData?null:t.navData.disabled);l(n,3,0,"owl-nav",a);var u=l(n,8,0,null==t.navData||null==t.navData.prev?null:t.navData.prev.disabled);l(n,7,0,"owl-prev",u);var e=l(n,12,0,null==t.navData||null==t.navData.next?null:t.navData.next.disabled);l(n,11,0,"owl-next",e);var s=l(n,16,0,null==t.dotsData?null:t.dotsData.disabled);l(n,15,0,"owl-dots",s),l(n,18,0,null==t.dotsData?null:t.dotsData.dots)}),(function(l,n){var t=n.component;l(n,5,0,null==t.navData||null==t.navData.prev?null:t.navData.prev.htmlText),l(n,9,0,null==t.navData||null==t.navData.next?null:t.navData.next.htmlText)}))}function c(l){return a.Ub(0,[(l()(),a.yb(0,0,[["owlCarousel",1]],null,7,"div",[["class","owl-carousel owl-theme"]],null,[[null,"mouseover"],[null,"mouseleave"],[null,"touchstart"],[null,"touchend"]],(function(l,n,t){var a=!0,u=l.component;return"mouseover"===n&&(a=!1!==u.startPausing()&&a),"mouseleave"===n&&(a=!1!==u.startPlayML()&&a),"touchstart"===n&&(a=!1!==u.startPausing()&&a),"touchend"===n&&(a=!1!==u.startPlayTE()&&a),a}),null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(2,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Nb(3,{"owl-rtl":0,"owl-loaded":1,"owl-responsive":2,"owl-drag":3,"owl-grab":4}),(l()(),a.nb(16777216,null,null,1,null,o)),a.xb(5,16384,null,0,e.l,[a.U,a.R],{ngIf:[0,"ngIf"]},null),(l()(),a.nb(16777216,null,null,1,null,r)),a.xb(7,16384,null,0,e.l,[a.U,a.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component,a=l(n,3,0,null==t.owlDOMData?null:t.owlDOMData.rtl,null==t.owlDOMData?null:t.owlDOMData.isLoaded,null==t.owlDOMData?null:t.owlDOMData.isResponsive,null==t.owlDOMData?null:t.owlDOMData.isMouseDragable,null==t.owlDOMData?null:t.owlDOMData.isGrab);l(n,2,0,"owl-carousel owl-theme",a),l(n,5,0,t.carouselLoaded),l(n,7,0,t.slides.toArray().length)}),null)}var d=a.wb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"autoHeight",definitions:[{type:0,name:"nulled",styles:{type:6,styles:{height:0},offset:null},options:void 0},{type:0,name:"full",styles:{type:6,styles:{height:"*"},offset:null},options:void 0},{type:1,expr:"full => nulled",animation:[{type:4,styles:null,timings:"700ms 350ms"}],options:null},{type:1,expr:"nulled => full",animation:[{type:4,styles:null,timings:350}],options:null}],options:{}}]}});function p(l){return a.Ub(0,[(l()(),a.nb(0,null,null,0))],null,null)}function b(l){return a.Ub(0,[(l()(),a.nb(16777216,null,null,1,null,p)),a.xb(1,540672,null,0,e.r,[a.U],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),a.nb(0,null,null,0))],(function(l,n){l(n,1,0,n.parent.context.$implicit.tplRef)}),null)}function g(l){return a.Ub(0,[(l()(),a.yb(0,0,null,null,8,null,null,null,null,null,null,null)),(l()(),a.yb(1,0,null,null,7,"div",[["class","owl-item"]],[[24,"@autoHeight",0]],[[null,"animationend"]],(function(l,n,t){var a=!0;return"animationend"===n&&(a=!1!==l.component.clear(l.context.$implicit.id)&&a),a}),null,null)),a.Pb(512,null,e.z,e.A,[a.v,a.w,a.n,a.J]),a.xb(3,278528,null,0,e.j,[e.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Pb(512,null,e.B,e.C,[a.n,a.w,a.J]),a.xb(5,278528,null,0,e.o,[e.B],{ngStyle:[0,"ngStyle"]},null),a.Nb(6,{width:0,"margin-left":1,"margin-right":2,left:3}),(l()(),a.nb(16777216,null,null,1,null,b)),a.xb(8,16384,null,0,e.l,[a.U,a.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,"owl-item",n.context.$implicit.classes);var t=l(n,6,0,n.context.$implicit.width+"px",n.context.$implicit.marginL?n.context.$implicit.marginL+"px":"",n.context.$implicit.marginR?n.context.$implicit.marginR+"px":"",n.context.$implicit.left);l(n,5,0,t),l(n,8,0,n.context.$implicit.load)}),(function(l,n){l(n,1,0,n.context.$implicit.heightState)}))}function v(l){return a.Ub(0,[(l()(),a.yb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),a.yb(1,0,null,null,5,"div",[["class","owl-stage"]],null,[[null,"transitionend"]],(function(l,n,t){var a=!0;return"transitionend"===n&&(a=!1!==l.component.onTransitionEnd()&&a),a}),null,null)),a.Pb(512,null,e.B,e.C,[a.n,a.w,a.J]),a.xb(3,278528,null,0,e.o,[e.B],{ngStyle:[0,"ngStyle"]},null),a.Nb(4,{width:0,transform:1,transition:2,"padding-left":3,"padding-right":4}),(l()(),a.nb(16777216,null,null,1,null,g)),a.xb(6,278528,null,0,e.k,[a.U,a.R,a.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component,a=l(n,4,0,t.stageData.width+"px",t.stageData.transform,t.stageData.transition,t.stageData.paddingL?t.stageData.paddingL+"px":"",t.stageData.paddingR?t.stageData.paddingR+"px":"");l(n,3,0,a),l(n,6,0,t.slidesData)}),null)}},xQn8:function(l,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{}}}]);