(function(t){function e(e){for(var a,n,l=e[0],o=e[1],c=e[2],h=0,d=[];h<l.length;h++)n=l[h],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/otherside/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},3026:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAhCAYAAABJATCZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFCODE0RjlDMTM4MTFFNUEyQTdDNDQ2RDdEMjJDMjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFCODE0RjhDMTM4MTFFNUEyQTdDNDQ2RDdEMjJDMjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjc5NDEwMkMxMkMxMUU1QTJBN0M0NDZEN0QyMkMyMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMjc5NDEwM0MxMkMxMUU1QTJBN0M0NDZEN0QyMkMyMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsPHDBEAAAo9SURBVHja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"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home"),s("AppFooter")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("AppHeader",{attrs:{stateString:t.stateString}}),s("div",{staticClass:"mainBody"},[s("div",{staticClass:"row"},[s("div",{staticClass:"leftsidebar col-md-4"},[t._v(" "+t._s(t.selectedCities)+" "),s("Selector",{attrs:{selectorName:"cities",maxItems:"6",selectedItems:t.selectedCities,availableItems:t.availableCities}}),t._v(" "+t._s(t.selectedGenres)+" "),s("Selector",{attrs:{selectorName:"genres",maxItems:"10",selectedItems:t.selectedGenres,availableItems:t.availableGenres}})],1),s("div",{staticClass:"playlistcontent col-md-6"},[s("div",{staticClass:"eventsHolder"},[s("h2",[t._v("Events Data:")]),t.artistImages?s("div",[s("PerformerCarousel",{ref:"carouselLeft",attrs:{carouselId:"performerCarouselLeft",artistImages:t.artistImages}}),s("PerformerCarousel",{ref:"carouselRight",attrs:{carouselId:"performerCarouselRight",artistImages:t.artistImages}}),s("PerformerCarousel",{ref:"carouselMain",attrs:{carouselId:"performerCarouselMain",artistImages:t.artistImages}})],1):t._e()]),t.isStateStringCorrect?t._e():s("div",{staticClass:"btnHolder"},[s("button",{staticClass:"btn",on:{click:t.redirectToURL}},[t._v("Log In")])]),t.isStateStringCorrect?s("div",{staticClass:"btnHolder"},[s("button",{staticClass:"btn",attrs:{disabled:t.playlistLoading},on:{click:function(e){return t.buildPlaylist("Spooky Title","Spooooky Description!")}}},[t._v("Build Playlist")])]):t._e(),t.token?s("div",[t._v(" "+t._s(t.token)+" ")]):t._e(),t.localEvents?s("div",[t._v(" "+t._s(t.localEvents)+" ")]):t._e(),!0===t.playlistLoading?s("div",{staticClass:"playlistResult"},[s("h4",[t._v("Building playlist...")])]):t._e(),200===t.playlistStatus?s("div",{staticClass:"playlistResult"},[s("h4",[t._v(t._s(t.topTracks.length)+" tracks created!")])]):t._e()])])])],1)},l=[],o=(s("99af"),s("4160"),s("c975"),s("fb6a"),s("0d03"),s("d3b7"),s("ac1f"),s("25f0"),s("1276"),s("159b"),s("bc3a")),c=s.n(o),u=s("2f62"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[s("b-navbar-brand",{attrs:{href:"#"}},[t._v("Otherside")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),s("b-nav-item",{attrs:{href:"#"}},[t._v("Disabled")]),s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.currentUser?s("span",[t._v(" "+t._s(t.currentUser)+" ")]):s("span",[t._v(" My Account ")])]},proxy:!0}])},[s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)},d=[],f={name:"AppHeader",props:["stateString"],data:function(){return{currentUser:null,token:null}},mounted:function(){this.token&&this.getCurrentUser()},methods:{getCurrentUser:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(this.token)}},s="http://localhost:8081/user";c.a.get(s,e).then((function(e){t.currentUser=e.data}))}}},p=f,m=s("2877"),v=Object(m["a"])(p,h,d,!1,null,null,null),g=v.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-carousel",{ref:"carousel",staticClass:"performerCarousel",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:t.carouselId,interval:1e3,fade:!0,"no-hover-pause":!0,"no-touch":!0,"img-width":"1024","img-height":"480"}},t._l(t.artistImages,(function(e,a){return s("b-carousel-slide",{key:a+"-"+e+"-"+t.carouselId,staticClass:"performerSlide",attrs:{"img-src":e.ImageURL}},[s("p",[t._v(t._s(e.Name))])])})),1)},E=[],I={name:"PerformerCarousel",props:{carouselId:String,artistImages:Array},methods:{pauseWrapper:function(){this.$refs.carousel.pause()},setSlideWrapper:function(t){this.$refs.carousel.setSlide(t)},startWrapper:function(){this.$refs.carousel.start()}}},b=I,S=Object(m["a"])(b,A,E,!1,null,null,null),y=S.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"selections"},[s("h5",[t._v("1. Pick some "+t._s(t.selectorName))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"searchBar",attrs:{type:"text"},domProps:{value:t.searchTerm},on:{focus:function(e){t.showSearchResults=!0},blur:function(e){return t.searchBarRemovedFocus()},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t.showSearchResults?s("div",{staticClass:"searchResults"},t._l(t.filteredItems,(function(e){return s("div",{key:e,staticClass:"searchResultItem",on:{mousedown:function(s){return t.transferArrayValue(t.availableItems,t.selectedItems,e)}}},[t._v(" "+t._s(e)+" ")])})),0):t._e(),t.selectedItems?s("ul",{staticClass:"selectedItemList"},t._l(t.selectedItems,(function(e){return s("li",{key:e,staticClass:"selectedItem",on:{click:function(s){return t.transferArrayValue(t.selectedItems,t.availableItems,e)}}},[t._v(" "+t._s(e)+" "),s("span",{staticClass:"selectedX"},[t._v("X")])])})),0):t._e()])},w=[],T=(s("caad"),s("a434"),s("2532"),{name:"Selector",props:{selectorName:String,selectedItems:Array,availableItems:Array,maxItems:String},data:function(){return{searchTerm:null,showSearchResults:!1}},computed:{filteredItems:{get:function(){var t=this,e=new Array;return null==this.searchTerm?this.availableItems:(this.availableItems.forEach((function(s){s.toLowerCase().includes(t.searchTerm.toLowerCase())&&e.push(s)})),e)}}},methods:{transferArrayValue:function(t,e,s){var a=t.indexOf(s);a>-1&&(e==this.selectedItems&&e.length==this.maxItems?alert("Nope!"):(t.splice(a,1),e.push(s)))},searchBarRemovedFocus:function(){this.showSearchResults=!1,this.searchTerm=null}}}),N=T,L=Object(m["a"])(N,C,w,!1,null,null,null),k=L.exports,U=s("0e44");a["default"].use(u["a"]);var G={selectedCities:null,selectedGenres:null,availableCities:null,availableGenres:null,stateString:null,token:null},R={UPDATE_SELECTED_CITIES:function(t,e){t.selectedCities=e},UPDATE_SELECTED_GENRES:function(t,e){t.selectedGenres=e},UPDATE_AVAILABLE_CITIES:function(t,e){t.availableCities=e},UPDATE_AVAILABLE_GENRES:function(t,e){t.availableGenres=e},UPDATE_STATE_STRING:function(t,e){t.stateString=e},UPDATE_TOKEN:function(t,e){t.token=e}},D=new u["a"].Store({state:G,mutations:R,plugins:[Object(U["a"])()]}),M={name:"home",store:D,components:{AppHeader:g,PerformerCarousel:y,Selector:k},data:function(){return{localEvents:null,localPerformers:null,playlistStatus:null,spotifyAuthenticationUrl:null,topTracks:null,artists:null,artistImages:null,isStateStringCorrect:null,playlistLoading:!1,apiAddress:null}},computed:{selectedCities:{get:function(){return D.state.selectedCities},set:function(t){D.commit("UPDATE_SELECTED_CITIES",t)}},availableCities:{get:function(){return D.state.availableCities},set:function(t){D.commit("UPDATE_AVAILABLE_CITIES",t)}},selectedGenres:{get:function(){return D.state.selectedGenres},set:function(t){D.commit("UPDATE_SELECTED_GENRES",t)}},availableGenres:{get:function(){return D.state.availableGenres},set:function(t){D.commit("UPDATE_AVAILABLE_GENRES",t)}},stateString:{get:function(){return D.state.stateString},set:function(t){D.commit("UPDATE_STATE_STRING",t)}},token:{get:function(){return D.state.token},set:function(t){D.commit("UPDATE_TOKEN",t)}}},watch:{selectedCities:function(){0!=this.selectedCities.length&&0!=this.selectedGenres.length?(D.commit("UPDATE_SELECTED_CITIES",this.selectedCities),D.commit("UPDATE_AVAILABLE_CITIES",this.availableCities),this.getLocalEvents(this.selectedCities,this.selectedGenres)):(this.localEvents=null,this.localPerformers=null,this.artistImages=null)},selectedGenres:function(){0!=this.selectedCities.length&&0!=this.selectedGenres.length?(D.commit("UPDATE_SELECTED_GENRES",this.selectedGenres),D.commit("UPDATE_AVAILABLE_GENRES",this.availableGenres),this.getLocalEvents(this.selectedCities,this.selectedGenres)):(this.localEvents=null,this.localPerformers=null,this.artistImages=null)}},mounted:function(){this.apiAddress="https://otherside-api.herokuapp.com",this.initializeStore(),0!=this.selectedCities.length&&0!=this.selectedGenres.length&&this.getLocalEvents(this.selectedCities,this.selectedGenres),null==this.$route.query.state&&this.setNewSpotifyAuthenticationUrl(),this.isStateStringCorrect=this.$route.query.state==this.stateString,this.token=this.$route.query.token},methods:{initializeStore:function(){null==this.selectedCities&&(this.selectedCities=new Array),null==this.selectedGenres&&(this.selectedGenres=new Array),null==this.availableCities&&this.getAvailableCities(),null==this.availableGenres&&this.getAvailableGenres()},getAvailableCities:function(){var t=this;this.availableCities=new Array;var e="".concat(this.apiAddress,"/cities");c.a.get(e).then((function(e){t.availableCities=e.data}))},getAvailableGenres:function(){var t=this;this.availableGenres=new Array;var e="".concat(this.apiAddress,"/genres");c.a.get(e).then((function(e){t.availableGenres=e.data}))},getLocalEvents:function(t,e){var s=this,a=this.arrayToQueryString(t),i=this.arrayToQueryString(e),r="".concat(this.apiAddress,"/localevents?cities=")+a+"&genres="+i;c.a.get(r).then((function(t){s.localEvents=t.data,null!=s.token&&s.getArtistIDs(s.localEvents),s.setPerformersArray(t.data)}))},setNewSpotifyAuthenticationUrl:function(){var t=this;this.stateString=this.getRandomStateString();var e="".concat(this.apiAddress,"/authenticate?state=")+this.stateString;c.a.get(e).then((function(e){t.spotifyAuthenticationUrl=e.data}))},setNewSpotifyToken:function(){var t=this,e="".concat(this.apiAddress,"/token?state=")+this.stateString;c.a.get(e).then((function(e){t.token=e.data}))},getRandomStateString:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},redirectToURL:function(){window.location=this.spotifyAuthenticationUrl},arrayToQueryString:function(t){for(var e="[",s=0;s<t.length;s++)e=e.concat(t[s]+",");return e=e.slice(0,-1).concat("]"),e},getArtistIDs:function(t){var e=this,s="".concat(this.apiAddress,"/artistids"),a={headers:{Authorization:"Bearer ".concat(this.token)}};c.a.post(s,JSON.stringify(t),a).then((function(t){e.artists=t.data,e.setArtistImagesArray(e.artists),e.$nextTick((function(){e.$nextTick((function(){e.setCarouselStartSlides()}))}))})).catch((function(){e.forceLogOff()}))},buildPlaylist:function(t,e){var s=this,a="".concat(this.apiAddress,"/toptracks"),i="".concat(this.apiAddress,"/buildplaylist?name=")+t+"&desc="+e,r=new Array;this.artists.forEach((function(t){r.push(t.Id)})),this.playlistLoading=!0,this.playlistStatus=null;var n={headers:{Authorization:"Bearer ".concat(this.token)}};c.a.post(a,JSON.stringify(r),n).then((function(t){s.topTracks=t.data,c.a.post(i,JSON.stringify(t.data),n).then((function(t){s.playlistLoading=!1,s.playlistStatus=t.status})).catch((function(){s.forceLogOff()}))})).catch((function(){s.forceLogOff()}))},setPerformersArray:function(t){var e=new Array;null!=t&&(t.forEach((function(t){null!=t.Performers&&t.Performers.forEach((function(t){e.push(t)}))})),this.localPerformers=e)},setArtistImagesArray:function(t){var e=new Array;null!=t&&(t.forEach((function(t){""!=t.Name&&""!=t.ImageURL&&e.push({Name:t.Name,ImageURL:t.ImageURL})})),this.artistImages=e)},setCarouselStartSlides:function(){var t=-1;null!=this.artistImages&&(t=this.artistImages.length),t>0&&(this.$refs.carouselLeft.pauseWrapper(),this.$refs.carouselRight.pauseWrapper(),this.$refs.carouselMain.pauseWrapper(),t>=3?(this.$refs.carouselLeft.setSlideWrapper(0),this.$refs.carouselMain.setSlideWrapper(1),this.$refs.carouselRight.setSlideWrapper(2)):2==t?(this.$refs.carouselLeft.setSlideWrapper(0),this.$refs.carouselMain.setSlideWrapper(1),this.$refs.carouselRight.setSlideWrapper(0)):(this.$refs.carouselLeft.setSlideWrapper(0),this.$refs.carouselMain.setSlideWrapper(0),this.$refs.carouselRight.setSlideWrapper(0)),this.$refs.carouselLeft.startWrapper(),this.$refs.carouselRight.startWrapper(),this.$refs.carouselMain.startWrapper())},forceLogOff:function(){this.localEvents=null,this.localPerformers=null,this.playlistStatus=null,this.spotifyAuthenticationUrl=null,this.topTracks=null,this.artists=null,this.artistImages=null,this.isStateStringCorrect=null,this.playlistLoading=!1,this.token=null,this.stateString=null,window.location=window.location.href.split("?")[0]},obtainApiAddress:function(){var t=window.location.host,e=t.substring(0,t.indexOf(":"));return window.location.protocol+"//"+e}}},P=M,J=Object(m["a"])(P,n,l,!1,null,null,null),j=J.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._v(" Powered by "),a("a",{attrs:{href:"https://seatgeek.com/"}},[a("img",{attrs:{src:s("3026")}})])])}],O={name:"AppFooter"},Z=O,W=Object(m["a"])(Z,B,_,!1,null,null,null),Y=W.exports,x={name:"app",components:{Home:j,AppFooter:Y}},z=x,V=(s("034f"),Object(m["a"])(z,i,r,!1,null,null,null)),Q=V.exports,F=s("8c4f"),H=s("5f5b"),K=s("2b88"),X=s.n(K),q=s("58ca");s("f9e3"),s("2dd8");s("a347"),a["default"].config.productionTip=!1,a["default"].use(F["a"]),a["default"].use(H["a"]),a["default"].use(X.a),a["default"].use(q["a"],{refreshOnceOnNavigation:!0});var $=new F["a"]({routes:[{path:"/",name:"home",component:j}]});new a["default"]({render:function(t){return t(Q)},router:$}).$mount("#app")},"85ec":function(t,e,s){},a347:function(t,e,s){}});
//# sourceMappingURL=app.b3080a26.js.map