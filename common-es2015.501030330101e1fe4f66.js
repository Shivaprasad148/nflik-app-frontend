(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8cFx":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("IheW"),s=n("Va8t"),a=n("z6cu"),h=n("8Y7J"),i=n("aOlj"),o=n("JK2n");let p=(()=>{class t{constructor(t,e,n){this.http=t,this.local=e,this.httpClient=n,this.handleError=t=>Object(a.a)(t)}getHomePageVideo(){return this.http.get(""+s.a.HOME_PAGE)}getMyChannels(){return this.http.get(""+s.a.MY_CHANNELS)}search(t){return this.http.get(s.a.SEARCH+"?name="+t)}getMovieInfo(){return this.http.get(""+s.a.MOVIE_INFO)}getRelatedMovies(){return this.http.get(""+s.a.RELATED_MOVIES)}getChannelsList(){return this.http.get(""+s.a.CHANNELS_LIST)}postEventSchedule(t){return this.http.post(""+s.a.EVENT_SCHEDULE,t)}getEventList(){return this.http.get(""+s.a.EVENT_LIST)}postManageEvents(t){return this.http.post(""+s.a.MANAGE_EVENT,t)}getEventInfo(){return this.http.get(""+s.a.EVENT_INFO)}get authHttpOptions(){return{headers:new r.g({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}}}return t.ngInjectableDef=h.Ub({factory:function(){return new t(h.Vb(i.a),h.Vb(o.a),h.Vb(r.c))},token:t,providedIn:"root"}),t})()},xQn8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{}}}]);