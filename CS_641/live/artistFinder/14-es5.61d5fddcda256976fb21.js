(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{JLuJ:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("BN21"),r=function(){function l(l,n){this.audioService=l,this.router=n,this.artistName="",this.artistTitle="",this.songLyrics="NA",this.artistD=[],this.albumD=[],this.isIonSlideEnabled=!1,this.init()}return l.prototype.init=function(){this.artistTitle="Kautilya"},l.prototype.onClick=function(){var l=this;console.log("SensehacK Dev Env"),this.artistName=this.artistName?this.artistName:"Eminem",this.audioService.getArtistInfo(this.artistName).subscribe((function(n){n.artists.forEach((function(n){l.artistData=n,l.artistD.push(l.artistData),l.artistTitle=l.artistData.strArtist?l.artistData.strArtist:l.artistName}))}))},l.prototype.loadAlbums=function(){var l=this;console.log("The Album is mastahpeeice! babbbyyyyyy"),console.log("Reference to the joke Link: https://www.youtube.com/watch?v=dDagv6SA8nw&t=2s"),this.audioService.getArtistAlbums(this.artistName).subscribe((function(n){n.album.forEach((function(n){l.albumData=n,l.albumD.push(l.albumData)})),l.isIonSlideEnabled=!0}))},l.prototype.goToSlide=function(l){console.log("Gesture doesnt work & it is well documented for ionic 4"),console.log("https://github.com/ionic-team/ionic/issues/19183"),console.log("Which album pressed currently",l),this.router.navigate(["album-details",l])},l.prototype.nextSlide=function(){},l.prototype.showAlbum=function(){},l}(),o=(u("cMzU"),function(){return function(){}}()),e=u("pMnS"),b=u("oBZk"),a=u("ZZ/e"),s=u("Ip0R"),c=u("gIcY"),h=u("ZYCi"),m=t.qb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}ion-button[_ngcontent-%COMP%]{width:100%}.centerMob[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center}"]],data:{}});function d(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,5,"ion-slide",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToSlide(l.parent.context.$implicit.idAlbum)&&t),t}),b.O,b.q)),t.rb(1,49152,null,0,a.ob,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Hb(4,null,["Album: ",""])),(l()(),t.sb(5,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.strAlbum),l(n,5,0,n.parent.context.$implicit.strAlbumThumb)}))}function g(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,d)),t.rb(2,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(0,null,null,0))],(function(l,n){l(n,2,0,n.context.$implicit.strAlbumThumb&&n.context.$implicit.strAlbum)}),null)}function p(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,3,"ion-slides",[],null,null,null,b.P,b.r)),t.rb(2,49152,null,0,a.pb,[t.h,t.k,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,g)),t.rb(4,278528,null,0,s.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(5,0,null,null,2,"ion-button",[],[[8,"hidden",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.nextSlide()&&t),t}),b.z,b.b)),t.rb(6,49152,null,0,a.i,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),(l()(),t.Hb(-1,0,[" Next "]))],(function(l,n){var u=n.component;l(n,4,0,u.albumD),l(n,6,0,!u.isIonSlideEnabled)}),(function(l,n){l(n,5,0,!n.component.isIonSlideEnabled)}))}function f(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,1,"ion-img",[],null,null,null,b.I,b.k)),t.rb(1,49152,null,0,a.B,[t.h,t.k,t.z],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,n.component.artistData.strArtistFanart2)}),null)}function k(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,1,"ion-img",[],null,null,null,b.I,b.k)),t.rb(1,49152,null,0,a.B,[t.h,t.k,t.z],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,n.component.artistData.strArtistFanart3)}),null)}function z(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,53,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,52,"ion-card",[],null,null,null,b.D,b.c)),t.rb(2,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.sb(3,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.sb(4,0,null,0,7,"ion-card-header",[],null,null,null,b.A,b.d)),t.rb(5,49152,null,0,a.m,[t.h,t.k,t.z],null,null),(l()(),t.sb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.B,b.e)),t.rb(7,49152,null,0,a.n,[t.h,t.k,t.z],null,null),(l()(),t.Hb(8,0,[" Artist: "," "])),(l()(),t.sb(9,0,null,0,2,"ion-card-title",[],null,null,null,b.C,b.f)),t.rb(10,49152,null,0,a.o,[t.h,t.k,t.z],null,null),(l()(),t.Hb(11,0,[" Style: "," "])),(l()(),t.sb(12,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.loadAlbums()&&t),t}),b.z,b.b)),t.rb(13,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,[" Albums "])),(l()(),t.hb(16777216,null,0,1,null,p)),t.rb(16,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(17,0,null,0,27,"ion-list",[],null,null,null,b.M,b.o)),t.rb(18,49152,null,0,a.M,[t.h,t.k,t.z],null,null),(l()(),t.sb(19,0,null,0,4,"ion-item",[],null,null,null,b.K,b.m)),t.rb(20,49152,null,0,a.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(21,0,null,0,2,"ion-label",[],null,null,null,b.L,b.n)),t.rb(22,49152,null,0,a.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(23,0,["Genre: "," "])),(l()(),t.sb(24,0,null,0,5,"ion-item",[],null,null,null,b.K,b.m)),t.rb(25,49152,null,0,a.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(26,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Website: \xa0"])),(l()(),t.sb(28,0,null,0,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),t.Hb(29,null,[" "," "])),(l()(),t.sb(30,0,null,0,4,"ion-item",[],null,null,null,b.K,b.m)),t.rb(31,49152,null,0,a.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(32,0,null,0,2,"ion-label",[],null,null,null,b.L,b.n)),t.rb(33,49152,null,0,a.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(34,0,["Born Year: "," "])),(l()(),t.sb(35,0,null,0,4,"ion-item",[],null,null,null,b.K,b.m)),t.rb(36,49152,null,0,a.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(37,0,null,0,2,"ion-label",[],null,null,null,b.L,b.n)),t.rb(38,49152,null,0,a.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(39,0,["Country: "," "])),(l()(),t.sb(40,0,null,0,4,"ion-item",[],null,null,null,b.K,b.m)),t.rb(41,49152,null,0,a.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(42,0,null,0,2,"ion-label",[],null,null,null,b.L,b.n)),t.rb(43,49152,null,0,a.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(44,0,["Billboard: "," "])),(l()(),t.sb(45,0,null,0,4,"ion-text",[["color","primary"]],null,null,null,b.T,b.v)),t.rb(46,49152,null,0,a.vb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.sb(47,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Biography"])),(l()(),t.Hb(49,0,[" "," "])),(l()(),t.hb(16777216,null,0,1,null,f)),t.rb(51,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,k)),t.rb(53,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,16,0,u.albumD),l(n,46,0,"primary"),l(n,51,0,u.artistData.strArtistFanart2),l(n,53,0,u.artistData.strArtistFanart3)}),(function(l,n){var u=n.component;l(n,3,0,u.artistData.strArtistFanart),l(n,8,0,u.artistData.strArtist),l(n,11,0,u.artistData.strStyle),l(n,23,0,u.artistData.strGenre),l(n,28,0,u.artistData.strWebsite),l(n,29,0,u.artistData.strWebsite),l(n,34,0,u.artistData.intBornYear),l(n,39,0,u.artistData.strCountry),l(n,44,0,u.artistData.intCharted),l(n,49,0,u.artistData.strBiographyEN)}))}function D(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,6,"ion-header",[],null,null,null,b.G,b.i)),t.rb(1,49152,null,0,a.z,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.V,b.x)),t.rb(3,49152,null,0,a.Ab,[t.h,t.k,t.z],null,null),(l()(),t.sb(4,0,null,0,2,"ion-title",[],null,null,null,b.U,b.w)),t.rb(5,49152,null,0,a.yb,[t.h,t.k,t.z],null,null),(l()(),t.Hb(6,0,[" "," "])),(l()(),t.sb(7,0,null,null,31,"ion-content",[["class","padding"]],null,null,null,b.F,b.h)),t.rb(8,49152,null,0,a.s,[t.h,t.k,t.z],null,null),(l()(),t.sb(9,0,null,0,9,"ion-row",[["center",""]],null,null,null,b.N,b.p)),t.rb(10,49152,null,0,a.hb,[t.h,t.k,t.z],null,null),(l()(),t.sb(11,0,null,0,7,"ion-col",[["text-center",""]],null,null,null,b.E,b.g)),t.rb(12,49152,null,0,a.r,[t.h,t.k,t.z],null,null),t.rb(13,16384,null,0,a.c,[t.k],null,null),(l()(),t.sb(14,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Sensehack"])),(l()(),t.sb(16,0,null,0,2,"ion-label",[],null,null,null,b.L,b.n)),t.rb(17,49152,null,0,a.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Search your favorite artist"])),(l()(),t.sb(19,0,null,0,0,"div",[["class","centerMob"]],null,null,null,null,null)),(l()(),t.sb(20,0,null,0,16,"ion-card",[],null,null,null,b.D,b.c)),t.rb(21,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.sb(22,0,null,0,7,"div",[["class","inputField"]],null,null,null,null,null)),(l()(),t.sb(23,0,null,null,6,"ion-input",[["placeholder","Enter your Artist"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,r=l.component;return"ionBlur"===n&&(i=!1!==t.Db(l,25)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Db(l,25)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(r.artistName=u)&&i),i}),b.J,b.l)),t.rb(24,49152,null,0,a.E,[t.h,t.k,t.z],{placeholder:[0,"placeholder"]},null),t.rb(25,16384,null,0,a.Ib,[t.k],null,null),t.Eb(1024,null,c.b,(function(l){return[l]}),[a.Ib]),t.rb(27,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.c,null,[c.e]),t.rb(29,16384,null,0,c.d,[[4,c.c]],null,null),(l()(),t.sb(30,0,null,0,6,"ion-row",[],null,null,null,b.N,b.p)),t.rb(31,49152,null,0,a.hb,[t.h,t.k,t.z],null,null),(l()(),t.sb(32,0,null,0,4,"ion-col",[["size","12"]],null,null,null,b.E,b.g)),t.rb(33,49152,null,0,a.r,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.sb(34,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t}),b.z,b.b)),t.rb(35,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,[" Search "])),(l()(),t.hb(16777216,null,0,1,null,z)),t.rb(38,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,24,0,"Enter your Artist"),l(n,27,0,u.artistName),l(n,33,0,"12"),l(n,38,0,u.artistData)}),(function(l,n){l(n,6,0,n.component.artistTitle),l(n,23,0,t.Db(n,29).ngClassUntouched,t.Db(n,29).ngClassTouched,t.Db(n,29).ngClassPristine,t.Db(n,29).ngClassDirty,t.Db(n,29).ngClassValid,t.Db(n,29).ngClassInvalid,t.Db(n,29).ngClassPending)}))}function v(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,1,"app-tab1",[],null,null,null,D,m)),t.rb(1,49152,null,0,r,[i.a,h.m],null,null)],null,null)}var y=t.ob("app-tab1",r,v,{},{},[]);u.d(n,"Tab1PageModuleNgFactory",(function(){return I}));var I=t.pb(o,[],(function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[e.a,y]],[3,t.j],t.x]),t.Bb(4608,s.k,s.j,[t.u,[2,s.q]]),t.Bb(4608,a.a,a.a,[t.z,t.g]),t.Bb(4608,a.Eb,a.Eb,[a.a,t.j,t.q]),t.Bb(4608,a.Hb,a.Hb,[a.a,t.j,t.q]),t.Bb(4608,c.g,c.g,[]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,a.Cb,a.Cb,[]),t.Bb(1073742336,c.f,c.f,[]),t.Bb(1073742336,c.a,c.a,[]),t.Bb(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),t.Bb(1073742336,o,o,[]),t.Bb(1024,h.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);