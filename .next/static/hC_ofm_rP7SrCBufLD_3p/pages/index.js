(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=n("z/o8"),c=n("pc+1"),u=(n("gmSI"),o.a.createElement);function f(){var t=Object(r.useState)([]),e=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){n(t)})).then((function(){a.a.timeline().staggerFrom(".item",1.2,{opacity:0,y:30,x:-40,delay:.1,ease:c.a.easeOut},"0.1")}))}),[]),u("div",{className:"xl:p-4 p-1  min-h-screen\t grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-6 gap-4 "},e.map((function(t){return u(s.a,{href:"/aukcje/[id]",as:"/aukcje/".concat(t.id),key:t.id},u("div",{className:"item cursor-pointer relative  ",key:t.title},u("img",{className:"rounded-lg shadow-xl transform hover:scale-105 duration-100",src:"/images/item.png"}),u("div",{style:{top:"10px",left:"10px",padding:"2px 9px"},className:"absolute bg-white rounded-lg shadow-lg text-sm text-gray-600"},"Play for $4"),u("div",{className:"p-3 text-sm"},t.title)))})))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),a=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var u=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=u(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,y=window.IntersectionObserver,w={};function b(){return l||(y?l=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var _=function(t){i(u,t);var e,n=(e=u,function(){var t,n=a(e);if(c()){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return s(this,t)});function u(t){var e;return r(this,u),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:m(t),as:e?m(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,a=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,t.preventDefault();var u=e.props.scroll;null==u&&(u=a.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),p.default.cloneElement(i,s)}}]),u}(p.Component);e.default=_},gmSI:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.componentWillMount=function(){var t=this,e=this.props,n=e.src,r=e.preview,o=this.props.initialBlur;this.setState({src:r,blur:o}),this.fetch(n).then((function(e){return t.setState({src:e,blur:0})}))},e.prototype.render=function(){var t=this.state.src;return(0,this.props.render)(t,this.getStyle())},e.prototype.fetch=function(t){return new Promise((function(e){var n=new Image;n.src=t,n.addEventListener("load",(function(){return e(t)}),!1)}))},e.prototype.getStyle=function(){var t=this.props,e=t.transitionTime,n=t.timingFunction;return{filter:"blur("+this.state.blur+"px)",transition:"filter "+e+"ms "+n}},e}(n("q1tI").Component);o.defaultProps={transitionTime:500,timingFunction:"ease",initialBlur:10},e.ProgressiveImage=o,e.default=o},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);