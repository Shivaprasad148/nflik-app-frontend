(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var t=u("pMnS"),o=u("HsOI"),r=u("s7LF"),i=u("dJrM"),b=u("Xd0L"),s=u("IP0z"),d=u("/HVE"),c=u("omvX"),m=u("ZwOa"),g=u("oapL"),f=u("SVse"),p=u("iInd"),h=u("1ld4"),L=u("IheW"),y=u("aOlj"),v=u("JK2n"),_=u("8cFx"),w=u("nYR2");class C{constructor(l,n,u,e,a){this.formBuilder=l,this.router=n,this.loginService=u,this.notify=e,this.activatedRoute=a,this.showLogin=!0,this.loading=!1,this.myCarouselImages=[{id:1,image:"assets/img/login.png",title:"Watch videos offline",content:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},{id:2,image:"assets/img/login.png",title:"Download videos effortlessly",content:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},{id:3,image:"assets/img/login.png",title:"Create GIFs",content:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}],this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!0,dots:!0,rewind:!0,items:1,autoplay:!0,nav:!1,autoplaySpeed:700,lazyLoad:!0,navSpeed:500},this.activatedRoute.queryParams.subscribe(l=>{l.hasOwnProperty("next")&&(console.log("has next property"),this.nextUrl=l.next)}),this.loginForm=this.formBuilder.group({email:["",[r.s.required,r.s.email]],password:["",[r.s.required]]}),this.forgotPwForm=this.formBuilder.group({email:["",[r.s.required,r.s.email]]})}ngOnInit(){}signIn(){this.loading=!0,console.log("into sig in",this.loading);const l=this.loginForm.getRawValue();console.log("raw value",l),this.loginService.login(l).pipe(Object(w.a)(()=>{this.loading=!1})).subscribe(l=>{l&&(this.notify.success(l.message),this.nextUrl?this.goNext():this.router.navigate(["/home"]))},l=>{console.log("err",l),this.notify.error(l.error.message)})}goNext(){this.nextUrl.startsWith("http://")||this.nextUrl.startsWith("https://")?window.location.href=this.nextUrl:this.router.navigateByUrl(this.nextUrl)}forgotPw(){this.loading=!0,this.loginService.forgotPassword(this.forgotPwForm.getRawValue()).pipe(Object(w.a)(()=>{this.loading=!1})).subscribe(l=>{l&&(this.notify.success(l.message),this.showLogin=!0)},l=>{console.log(l),this.notify.error(l.error.errors.email)})}showFP(){this.showLogin=!this.showLogin}}var F=u("1liP"),S=e.xb({encapsulation:0,styles:[[".mat-form-style[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner[_ngcontent-%COMP%]:before{content:'';box-sizing:border-box;position:absolute;bottom:30%;right:34%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid red;border-top-color:#232323;-webkit-animation:.8s linear infinite spinner;animation:.8s linear infinite spinner}.row[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}"]],data:{}});function P(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.yb(1,16384,[[6,4]],0,o.b,[],null,null),(l()(),e.Tb(-1,null,[" Email id is required "]))],null,(function(l,n){l(n,0,0,e.Lb(n,1).id)}))}function q(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.yb(1,16384,[[6,4]],0,o.b,[],null,null),(l()(),e.Tb(-1,null,[" Email id is not valid "]))],null,(function(l,n){l(n,0,0,e.Lb(n,1).id)}))}function I(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,71,null,null,null,null,null,null,null)),(l()(),e.zb(1,0,null,null,63,"form",[["class","registerForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var a=!0,t=l.component;return"submit"===n&&(a=!1!==e.Lb(l,3).onSubmit(u)&&a),"reset"===n&&(a=!1!==e.Lb(l,3).onReset()&&a),"ngSubmit"===n&&(a=!1!==t.signIn()&&a),a}),null,null)),e.yb(2,16384,null,0,r.w,[],null,null),e.yb(3,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,r.b,null,[r.h]),e.yb(5,16384,null,0,r.n,[[4,r.b]],null,null),(l()(),e.zb(6,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","mat-form-style mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),e.yb(7,7520256,null,9,o.c,[e.n,e.i,[2,b.e],[2,s.b],[2,o.a],d.a,e.D,[2,c.a]],{appearance:[0,"appearance"]},null),e.Rb(603979776,1,{_controlNonStatic:0}),e.Rb(335544320,2,{_controlStatic:0}),e.Rb(603979776,3,{_labelChildNonStatic:0}),e.Rb(335544320,4,{_labelChildStatic:0}),e.Rb(603979776,5,{_placeholderChild:0}),e.Rb(603979776,6,{_errorChildren:1}),e.Rb(603979776,7,{_hintChildren:1}),e.Rb(603979776,8,{_prefixChildren:1}),e.Rb(603979776,9,{_suffixChildren:1}),(l()(),e.zb(17,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.yb(18,16384,[[3,4],[4,4]],0,o.f,[],null,null),(l()(),e.Tb(-1,null,["Enter Email Id"])),(l()(),e.zb(20,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","email"],["matInput",""],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var a=!0;return"input"===n&&(a=!1!==e.Lb(l,21)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,21).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Lb(l,21)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Lb(l,21)._compositionEnd(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,28)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Lb(l,28)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Lb(l,28)._onInput()&&a),a}),null,null)),e.yb(21,16384,null,0,r.c,[e.K,e.n,[2,r.a]],null,null),e.yb(22,16384,null,0,r.r,[],{required:[0,"required"]},null),e.Qb(1024,null,r.j,(function(l){return[l]}),[r.r]),e.Qb(1024,null,r.k,(function(l){return[l]}),[r.c]),e.yb(25,671744,null,0,r.g,[[3,r.b],[6,r.j],[8,null],[6,r.k],[2,r.v]],{name:[0,"name"]},null),e.Qb(2048,null,r.l,null,[r.g]),e.yb(27,16384,null,0,r.m,[[4,r.l]],null,null),e.yb(28,999424,null,0,m.a,[e.n,d.a,[6,r.l],[2,r.o],[2,r.h],b.a,[8,null],g.a,e.D],{required:[0,"required"]},null),e.Qb(2048,[[1,4],[2,4]],o.d,null,[m.a]),(l()(),e.ob(16777216,null,5,1,null,P)),e.yb(31,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(16777216,null,5,1,null,q)),e.yb(33,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.zb(34,0,null,null,1,"a",[["class","float-right"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Get OTP"])),(l()(),e.zb(36,0,null,null,23,"mat-form-field",[["appearance","fill"],["class","mat-form-style mat-form-field"],["style","margin-bottom: 10px;"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),e.yb(37,7520256,null,9,o.c,[e.n,e.i,[2,b.e],[2,s.b],[2,o.a],d.a,e.D,[2,c.a]],{appearance:[0,"appearance"]},null),e.Rb(603979776,10,{_controlNonStatic:0}),e.Rb(335544320,11,{_controlStatic:0}),e.Rb(603979776,12,{_labelChildNonStatic:0}),e.Rb(335544320,13,{_labelChildStatic:0}),e.Rb(603979776,14,{_placeholderChild:0}),e.Rb(603979776,15,{_errorChildren:1}),e.Rb(603979776,16,{_hintChildren:1}),e.Rb(603979776,17,{_prefixChildren:1}),e.Rb(603979776,18,{_suffixChildren:1}),(l()(),e.zb(47,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.yb(48,16384,[[12,4],[13,4]],0,o.f,[],null,null),(l()(),e.Tb(-1,null,["Password/OTP"])),(l()(),e.zb(50,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var a=!0;return"input"===n&&(a=!1!==e.Lb(l,51)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,51).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Lb(l,51)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Lb(l,51)._compositionEnd(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,58)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Lb(l,58)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Lb(l,58)._onInput()&&a),a}),null,null)),e.yb(51,16384,null,0,r.c,[e.K,e.n,[2,r.a]],null,null),e.yb(52,16384,null,0,r.r,[],{required:[0,"required"]},null),e.Qb(1024,null,r.j,(function(l){return[l]}),[r.r]),e.Qb(1024,null,r.k,(function(l){return[l]}),[r.c]),e.yb(55,671744,null,0,r.g,[[3,r.b],[6,r.j],[8,null],[6,r.k],[2,r.v]],{name:[0,"name"]},null),e.Qb(2048,null,r.l,null,[r.g]),e.yb(57,16384,null,0,r.m,[[4,r.l]],null,null),e.yb(58,999424,null,0,m.a,[e.n,d.a,[6,r.l],[2,r.o],[2,r.h],b.a,[8,null],g.a,e.D],{required:[0,"required"],type:[1,"type"]},null),e.Qb(2048,[[10,4],[11,4]],o.d,null,[m.a]),(l()(),e.zb(60,0,null,null,2,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e.zb(61,0,null,null,1,"a",[["style","position: relative; top: -21px;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showFP()&&e),e}),null,null)),(l()(),e.Tb(-1,null,["Forgot Password"])),(l()(),e.zb(63,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block btn-lg"],["style","position: relative;"],["type","submit"]],[[2,"spinner",null],[8,"disabled",0]],null,null,null,null)),(l()(),e.Tb(-1,null,[" Submit "])),(l()(),e.zb(65,0,null,null,6,"div",[["class","text-center mt-5"]],null,null,null,null,null)),(l()(),e.zb(66,0,null,null,5,"p",[["class","light-gray"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Don\u2019t have an account? "])),(l()(),e.zb(68,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Lb(l,69).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),e.yb(69,671744,null,0,p.o,[p.l,p.a,f.j],{routerLink:[0,"routerLink"]},null),e.Mb(70,1),(l()(),e.Tb(-1,null,["Sign Up"]))],(function(l,n){var u=n.component;l(n,3,0,u.loginForm),l(n,7,0,"fill"),l(n,22,0,""),l(n,25,0,"email"),l(n,28,0,""),l(n,31,0,u.forgotPwForm.controls.email.hasError("required")&&(u.forgotPwForm.controls.email.dirty||u.forgotPwForm.controls.email.touched)),l(n,33,0,u.forgotPwForm.controls.email.hasError("email")&&(u.forgotPwForm.controls.email.dirty||u.forgotPwForm.controls.email.touched)),l(n,37,0,"fill"),l(n,52,0,""),l(n,55,0,"password"),l(n,58,0,"","password");var e=l(n,70,0,"/register");l(n,69,0,e)}),(function(l,n){var u=n.component;l(n,1,0,e.Lb(n,5).ngClassUntouched,e.Lb(n,5).ngClassTouched,e.Lb(n,5).ngClassPristine,e.Lb(n,5).ngClassDirty,e.Lb(n,5).ngClassValid,e.Lb(n,5).ngClassInvalid,e.Lb(n,5).ngClassPending),l(n,6,1,["standard"==e.Lb(n,7).appearance,"fill"==e.Lb(n,7).appearance,"outline"==e.Lb(n,7).appearance,"legacy"==e.Lb(n,7).appearance,e.Lb(n,7)._control.errorState,e.Lb(n,7)._canLabelFloat,e.Lb(n,7)._shouldLabelFloat(),e.Lb(n,7)._hasFloatingLabel(),e.Lb(n,7)._hideControlPlaceholder(),e.Lb(n,7)._control.disabled,e.Lb(n,7)._control.autofilled,e.Lb(n,7)._control.focused,"accent"==e.Lb(n,7).color,"warn"==e.Lb(n,7).color,e.Lb(n,7)._shouldForward("untouched"),e.Lb(n,7)._shouldForward("touched"),e.Lb(n,7)._shouldForward("pristine"),e.Lb(n,7)._shouldForward("dirty"),e.Lb(n,7)._shouldForward("valid"),e.Lb(n,7)._shouldForward("invalid"),e.Lb(n,7)._shouldForward("pending"),!e.Lb(n,7)._animationsEnabled]),l(n,20,1,[e.Lb(n,22).required?"":null,e.Lb(n,27).ngClassUntouched,e.Lb(n,27).ngClassTouched,e.Lb(n,27).ngClassPristine,e.Lb(n,27).ngClassDirty,e.Lb(n,27).ngClassValid,e.Lb(n,27).ngClassInvalid,e.Lb(n,27).ngClassPending,e.Lb(n,28)._isServer,e.Lb(n,28).id,e.Lb(n,28).placeholder,e.Lb(n,28).disabled,e.Lb(n,28).required,e.Lb(n,28).readonly&&!e.Lb(n,28)._isNativeSelect||null,e.Lb(n,28)._ariaDescribedby||null,e.Lb(n,28).errorState,e.Lb(n,28).required.toString()]),l(n,36,1,["standard"==e.Lb(n,37).appearance,"fill"==e.Lb(n,37).appearance,"outline"==e.Lb(n,37).appearance,"legacy"==e.Lb(n,37).appearance,e.Lb(n,37)._control.errorState,e.Lb(n,37)._canLabelFloat,e.Lb(n,37)._shouldLabelFloat(),e.Lb(n,37)._hasFloatingLabel(),e.Lb(n,37)._hideControlPlaceholder(),e.Lb(n,37)._control.disabled,e.Lb(n,37)._control.autofilled,e.Lb(n,37)._control.focused,"accent"==e.Lb(n,37).color,"warn"==e.Lb(n,37).color,e.Lb(n,37)._shouldForward("untouched"),e.Lb(n,37)._shouldForward("touched"),e.Lb(n,37)._shouldForward("pristine"),e.Lb(n,37)._shouldForward("dirty"),e.Lb(n,37)._shouldForward("valid"),e.Lb(n,37)._shouldForward("invalid"),e.Lb(n,37)._shouldForward("pending"),!e.Lb(n,37)._animationsEnabled]),l(n,50,1,[e.Lb(n,52).required?"":null,e.Lb(n,57).ngClassUntouched,e.Lb(n,57).ngClassTouched,e.Lb(n,57).ngClassPristine,e.Lb(n,57).ngClassDirty,e.Lb(n,57).ngClassValid,e.Lb(n,57).ngClassInvalid,e.Lb(n,57).ngClassPending,e.Lb(n,58)._isServer,e.Lb(n,58).id,e.Lb(n,58).placeholder,e.Lb(n,58).disabled,e.Lb(n,58).required,e.Lb(n,58).readonly&&!e.Lb(n,58)._isNativeSelect||null,e.Lb(n,58)._ariaDescribedby||null,e.Lb(n,58).errorState,e.Lb(n,58).required.toString()]),l(n,63,0,u.loading,!u.loginForm.valid||u.loading),l(n,68,0,e.Lb(n,69).target,e.Lb(n,69).href)}))}function z(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.yb(1,16384,[[24,4]],0,o.b,[],null,null),(l()(),e.Tb(-1,null,[" Email id is required "]))],null,(function(l,n){l(n,0,0,e.Lb(n,1).id)}))}function k(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.yb(1,16384,[[24,4]],0,o.b,[],null,null),(l()(),e.Tb(-1,null,[" Email id is not valid "]))],null,(function(l,n){l(n,0,0,e.Lb(n,1).id)}))}function R(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,40,null,null,null,null,null,null,null)),(l()(),e.zb(1,0,null,null,39,"form",[["class","registerForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var a=!0,t=l.component;return"submit"===n&&(a=!1!==e.Lb(l,3).onSubmit(u)&&a),"reset"===n&&(a=!1!==e.Lb(l,3).onReset()&&a),"ngSubmit"===n&&(a=!1!==t.forgotPw()&&a),a}),null,null)),e.yb(2,16384,null,0,r.w,[],null,null),e.yb(3,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,r.b,null,[r.h]),e.yb(5,16384,null,0,r.n,[[4,r.b]],null,null),(l()(),e.zb(6,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","mat-form-style mat-form-field"],["style","margin-bottom: 7px;"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),e.yb(7,7520256,null,9,o.c,[e.n,e.i,[2,b.e],[2,s.b],[2,o.a],d.a,e.D,[2,c.a]],{appearance:[0,"appearance"]},null),e.Rb(603979776,19,{_controlNonStatic:0}),e.Rb(335544320,20,{_controlStatic:0}),e.Rb(603979776,21,{_labelChildNonStatic:0}),e.Rb(335544320,22,{_labelChildStatic:0}),e.Rb(603979776,23,{_placeholderChild:0}),e.Rb(603979776,24,{_errorChildren:1}),e.Rb(603979776,25,{_hintChildren:1}),e.Rb(603979776,26,{_prefixChildren:1}),e.Rb(603979776,27,{_suffixChildren:1}),(l()(),e.zb(17,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.yb(18,16384,[[21,4],[22,4]],0,o.f,[],null,null),(l()(),e.Tb(-1,null,["Enter Email Id"])),(l()(),e.zb(20,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","email"],["matInput",""],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var a=!0;return"input"===n&&(a=!1!==e.Lb(l,21)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,21).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Lb(l,21)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Lb(l,21)._compositionEnd(u.target.value)&&a),"blur"===n&&(a=!1!==e.Lb(l,28)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Lb(l,28)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Lb(l,28)._onInput()&&a),a}),null,null)),e.yb(21,16384,null,0,r.c,[e.K,e.n,[2,r.a]],null,null),e.yb(22,16384,null,0,r.r,[],{required:[0,"required"]},null),e.Qb(1024,null,r.j,(function(l){return[l]}),[r.r]),e.Qb(1024,null,r.k,(function(l){return[l]}),[r.c]),e.yb(25,671744,null,0,r.g,[[3,r.b],[6,r.j],[8,null],[6,r.k],[2,r.v]],{name:[0,"name"]},null),e.Qb(2048,null,r.l,null,[r.g]),e.yb(27,16384,null,0,r.m,[[4,r.l]],null,null),e.yb(28,999424,null,0,m.a,[e.n,d.a,[6,r.l],[2,r.o],[2,r.h],b.a,[8,null],g.a,e.D],{required:[0,"required"]},null),e.Qb(2048,[[19,4],[20,4]],o.d,null,[m.a]),(l()(),e.ob(16777216,null,5,1,null,z)),e.yb(31,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(16777216,null,5,1,null,k)),e.yb(33,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.zb(34,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block btn-lg"],["style","position: relative;"],["type","submit"]],[[2,"spinner",null],[8,"disabled",0]],null,null,null,null)),(l()(),e.Tb(-1,null,[" Submit "])),(l()(),e.zb(36,0,null,null,4,"div",[["class","text-center mt-5"]],null,null,null,null,null)),(l()(),e.zb(37,0,null,null,3,"p",[["class","light-gray"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,[" Click here to sign in "])),(l()(),e.zb(39,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showFP()&&e),e}),null,null)),(l()(),e.Tb(-1,null,["Sign In"]))],(function(l,n){var u=n.component;l(n,3,0,u.forgotPwForm),l(n,7,0,"fill"),l(n,22,0,""),l(n,25,0,"email"),l(n,28,0,""),l(n,31,0,u.forgotPwForm.controls.email.hasError("required")&&(u.forgotPwForm.controls.email.dirty||u.forgotPwForm.controls.email.touched)),l(n,33,0,u.forgotPwForm.controls.email.hasError("email")&&(u.forgotPwForm.controls.email.dirty||u.forgotPwForm.controls.email.touched))}),(function(l,n){var u=n.component;l(n,1,0,e.Lb(n,5).ngClassUntouched,e.Lb(n,5).ngClassTouched,e.Lb(n,5).ngClassPristine,e.Lb(n,5).ngClassDirty,e.Lb(n,5).ngClassValid,e.Lb(n,5).ngClassInvalid,e.Lb(n,5).ngClassPending),l(n,6,1,["standard"==e.Lb(n,7).appearance,"fill"==e.Lb(n,7).appearance,"outline"==e.Lb(n,7).appearance,"legacy"==e.Lb(n,7).appearance,e.Lb(n,7)._control.errorState,e.Lb(n,7)._canLabelFloat,e.Lb(n,7)._shouldLabelFloat(),e.Lb(n,7)._hasFloatingLabel(),e.Lb(n,7)._hideControlPlaceholder(),e.Lb(n,7)._control.disabled,e.Lb(n,7)._control.autofilled,e.Lb(n,7)._control.focused,"accent"==e.Lb(n,7).color,"warn"==e.Lb(n,7).color,e.Lb(n,7)._shouldForward("untouched"),e.Lb(n,7)._shouldForward("touched"),e.Lb(n,7)._shouldForward("pristine"),e.Lb(n,7)._shouldForward("dirty"),e.Lb(n,7)._shouldForward("valid"),e.Lb(n,7)._shouldForward("invalid"),e.Lb(n,7)._shouldForward("pending"),!e.Lb(n,7)._animationsEnabled]),l(n,20,1,[e.Lb(n,22).required?"":null,e.Lb(n,27).ngClassUntouched,e.Lb(n,27).ngClassTouched,e.Lb(n,27).ngClassPristine,e.Lb(n,27).ngClassDirty,e.Lb(n,27).ngClassValid,e.Lb(n,27).ngClassInvalid,e.Lb(n,27).ngClassPending,e.Lb(n,28)._isServer,e.Lb(n,28).id,e.Lb(n,28).placeholder,e.Lb(n,28).disabled,e.Lb(n,28).required,e.Lb(n,28).readonly&&!e.Lb(n,28)._isNativeSelect||null,e.Lb(n,28)._ariaDescribedby||null,e.Lb(n,28).errorState,e.Lb(n,28).required.toString()]),l(n,34,0,u.loading,!u.forgotPwForm.valid||u.loading)}))}function x(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,13,"div",[["class","login-main-body"]],null,null,null,null,null)),(l()(),e.zb(1,0,null,null,12,"section",[["class","login-main-wrapper"]],null,null,null,null,null)),(l()(),e.zb(2,0,null,null,11,"div",[["class","container-fluid pl-0 pr-0"]],null,null,null,null,null)),(l()(),e.zb(3,0,null,null,10,"div",[["class","row no-gutters align-items-center"]],null,null,null,null,null)),(l()(),e.zb(4,0,null,null,9,"div",[["class","col-md-12 p-5 bg-black full-height"]],null,null,null,null,null)),(l()(),e.zb(5,0,null,null,8,"div",[["class","login-main-left"]],null,null,null,null,null)),(l()(),e.zb(6,0,null,null,3,"div",[["class","text-center mb-5 login-main-left-header pt-4"]],null,null,null,null,null)),(l()(),e.zb(7,0,null,null,0,"img",[["alt","LOGO"],["class","img-fluid"],["src","assets/img/logo.png"]],null,null,null,null,null)),(l()(),e.zb(8,0,null,null,1,"p",[["class","mt-4 text-white"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Your Unlimited Entertainment Platform."])),(l()(),e.ob(16777216,null,null,1,null,I)),e.yb(11,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(16777216,null,null,1,null,R)),e.yb(13,16384,null,0,f.n,[e.V,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,u.showLogin),l(n,13,0,!u.showLogin)}),null)}function J(l){return e.Vb(0,[(l()(),e.zb(0,0,null,null,2,"app-login",[],null,null,null,x,S)),e.Qb(512,null,h.a,h.a,[L.c,y.a,v.a,_.a]),e.yb(2,114688,null,0,C,[r.d,p.l,h.a,F.a,p.a],null,null)],(function(l,n){l(n,2,0)}),null)}var T=e.vb("app-login",C,J,{},{},[]),V=u("KMir"),E=u("cUpR"),D=u("POq0");class O{}u.d(n,"LoginModuleNgFactory",(function(){return N}));var N=e.wb(a,[],(function(l){return e.Ib([e.Jb(512,e.l,e.hb,[[8,[t.a,T]],[3,e.l],e.B]),e.Jb(4608,f.p,f.o,[e.y,[2,f.G]]),e.Jb(4608,V.i,V.j,[]),e.Jb(5120,V.h,V.k,[V.i,e.G]),e.Jb(4608,V.t,V.t,[E.d]),e.Jb(4608,V.m,V.n,[]),e.Jb(5120,V.l,V.o,[V.m,e.G]),e.Jb(4608,V.f,V.f,[e.o]),e.Jb(4608,r.u,r.u,[]),e.Jb(4608,r.d,r.d,[]),e.Jb(4608,D.c,D.c,[]),e.Jb(4608,b.a,b.a,[]),e.Jb(1073742336,f.c,f.c,[]),e.Jb(1073742336,p.p,p.p,[[2,p.u],[2,p.l]]),e.Jb(1073742336,O,O,[]),e.Jb(1073742336,V.b,V.b,[]),e.Jb(1073742336,r.t,r.t,[]),e.Jb(1073742336,r.i,r.i,[]),e.Jb(1073742336,r.q,r.q,[]),e.Jb(1073742336,D.d,D.d,[]),e.Jb(1073742336,o.e,o.e,[]),e.Jb(1073742336,d.b,d.b,[]),e.Jb(1073742336,g.c,g.c,[]),e.Jb(1073742336,m.b,m.b,[]),e.Jb(1073742336,a,a,[]),e.Jb(1024,p.j,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);