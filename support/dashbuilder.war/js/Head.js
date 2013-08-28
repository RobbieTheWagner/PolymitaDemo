(function(){function e(e,t){try{for(var n in t)Object.defineProperty(e.prototype,n,{value:t[n],enumerable:!1})}catch(r){e.prototype=t}}function t(e){var t=-1,n=e.length,r=[];while(++t<n)r.push(e[t]);return r}function n(e){return Array.prototype.slice.call(e)}function r(){}function i(e){return e}function s(){return this}function o(){return!0}function u(e){return typeof e=="function"?e:function(){return e}}function a(e,t,n){return function(){var r=n.apply(t,arguments);return arguments.length?e:r}}function f(e){return e!=null&&!isNaN(e)}function l(e){return e.length}function c(e){return e==null}function h(e){return e.trim().replace(/\s+/g," ")}function p(e){var t=1;while(e*t%1)t*=10;return t}function d(){}function v(e){function t(){var t=n,r=-1,i=t.length,s;while(++r<i)(s=t[r].on)&&s.apply(this,arguments);return e}var n=[],i=new r;return t.on=function(t,r){var s=i.get(t),o;return arguments.length<2?s&&s.on:(s&&(s.on=null,n=n.slice(0,o=n.indexOf(s)).concat(n.slice(o+1)),i.remove(t)),r&&n.push(i.set(t,{on:r})),e)},t}function m(e,t){return t-(e?1+Math.floor(Math.log(e+Math.pow(10,1+Math.floor(Math.log(e)/Math.LN10)-t))/Math.LN10):1)}function g(e){return e+""}function y(e){var t=e.lastIndexOf("."),n=t>=0?e.substring(t):(t=e.length,""),r=[];while(t>0)r.push(e.substring(t-=3,t+3));return r.reverse().join(",")+n}function b(e,t){var n=Math.pow(10,Math.abs(8-t)*3);return{scale:t>8?function(e){return e/n}:function(e){return e*n},symbol:e}}function w(e){return function(t){return t<=0?0:t>=1?1:e(t)}}function E(e){return function(t){return 1-e(1-t)}}function S(e){return function(t){return.5*(t<.5?e(2*t):2-e(2-2*t))}}function x(e){return e}function T(e){return function(t){return Math.pow(t,e)}}function N(e){return 1-Math.cos(e*Math.PI/2)}function C(e){return Math.pow(2,10*(e-1))}function k(e){return 1-Math.sqrt(1-e*e)}function L(e,t){var n;return arguments.length<2&&(t=.45),arguments.length<1?(e=1,n=t/4):n=t/(2*Math.PI)*Math.asin(1/e),function(r){return 1+e*Math.pow(2,10*-r)*Math.sin((r-n)*2*Math.PI/t)}}function A(e){return e||(e=1.70158),function(t){return t*t*((e+1)*t-e)}}function O(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function M(){d3.event.stopPropagation(),d3.event.preventDefault()}function _(){var e=d3.event,t;while(t=e.sourceEvent)e=t;return e}function D(e){var t=new d,n=0,r=arguments.length;while(++n<r)t[arguments[n]]=v(t);return t.of=function(n,r){return function(i){try{var s=i.sourceEvent=d3.event;i.target=e,d3.event=i,t[i.type].apply(n,r)}finally{d3.event=s}}},t}function P(e){var t=[e.a,e.b],n=[e.c,e.d],r=B(t),i=H(t,n),s=B(j(n,t,-i))||0;t[0]*n[1]<n[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-n[0],n[1]))*fs,this.translate=[e.e,e.f],this.scale=[r,s],this.skew=s?Math.atan2(i,s)*fs:0}function H(e,t){return e[0]*t[0]+e[1]*t[1]}function B(e){var t=Math.sqrt(H(e,e));return t&&(e[0]/=t,e[1]/=t),t}function j(e,t,n){return e[0]+=n*t[0],e[1]+=n*t[1],e}function F(e){return e=="transform"?d3.interpolateTransform:d3.interpolate}function I(e,t){return t=t-(e=+e)?1/(t-e):0,function(n){return(n-e)*t}}function q(e,t){return t=t-(e=+e)?1/(t-e):0,function(n){return Math.max(0,Math.min(1,(n-e)*t))}}function R(e,t,n){return new U(e,t,n)}function U(e,t,n){this.r=e,this.g=t,this.b=n}function z(e){return e<16?"0"+Math.max(0,e).toString(16):Math.min(255,e).toString(16)}function W(e,t,n){var r=0,i=0,s=0,o,u,a;o=/([a-z]+)\((.*)\)/i.exec(e);if(o){u=o[2].split(",");switch(o[1]){case"hsl":return n(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(J(u[0]),J(u[1]),J(u[2]))}}return(a=hs.get(e))?t(a.r,a.g,a.b):(e!=null&&e.charAt(0)==="#"&&(e.length===4?(r=e.charAt(1),r+=r,i=e.charAt(2),i+=i,s=e.charAt(3),s+=s):e.length===7&&(r=e.substring(1,3),i=e.substring(3,5),s=e.substring(5,7)),r=parseInt(r,16),i=parseInt(i,16),s=parseInt(s,16)),t(r,i,s))}function X(e,t,n){var r=Math.min(e/=255,t/=255,n/=255),i=Math.max(e,t,n),s=i-r,o,u,a=(i+r)/2;return s?(u=a<.5?s/(i+r):s/(2-i-r),e==i?o=(t-n)/s+(t<n?6:0):t==i?o=(n-e)/s+2:o=(e-t)/s+4,o*=60):u=o=0,K(o,u,a)}function V(e,t,n){e=$(e),t=$(t),n=$(n);var r=ot((.4124564*e+.3575761*t+.1804375*n)/ds),i=ot((.2126729*e+.7151522*t+.072175*n)/vs),s=ot((.0193339*e+.119192*t+.9503041*n)/ms);return tt(116*i-16,500*(r-i),200*(i-s))}function $(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function J(e){var t=parseFloat(e);return e.charAt(e.length-1)==="%"?Math.round(t*2.55):t}function K(e,t,n){return new Q(e,t,n)}function Q(e,t,n){this.h=e,this.s=t,this.l=n}function G(e,t,n){function r(e){return e>360?e-=360:e<0&&(e+=360),e<60?s+(o-s)*e/60:e<180?o:e<240?s+(o-s)*(240-e)/60:s}function i(e){return Math.round(r(e)*255)}var s,o;return e%=360,e<0&&(e+=360),t=t<0?0:t>1?1:t,n=n<0?0:n>1?1:n,o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o,R(i(e+120),i(e),i(e-120))}function Y(e,t,n){return new Z(e,t,n)}function Z(e,t,n){this.h=e,this.c=t,this.l=n}function et(e,t,n){return tt(n,Math.cos(e*=Math.PI/180)*t,Math.sin(e)*t)}function tt(e,t,n){return new nt(e,t,n)}function nt(e,t,n){this.l=e,this.a=t,this.b=n}function rt(e,t,n){var r=(e+16)/116,i=r+t/500,s=r-n/200;return i=st(i)*ds,r=st(r)*vs,s=st(s)*ms,R(ut(3.2404542*i-1.5371385*r-.4985314*s),ut(-0.969266*i+1.8760108*r+.041556*s),ut(.0556434*i-.2040259*r+1.0572252*s))}function it(e,t,n){return Y(Math.atan2(n,t)/Math.PI*180,Math.sqrt(t*t+n*n),e)}function st(e){return e>.206893034?e*e*e:(e-4/29)/7.787037}function ot(e){return e>.008856?Math.pow(e,1/3):7.787037*e+4/29}function ut(e){return Math.round(255*(e<=.00304?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}function at(e){return Ki(e,Ss),e}function ft(e){return function(){return gs(e,this)}}function lt(e){return function(){return ys(e,this)}}function ct(e,t){function n(){this.removeAttribute(e)}function r(){this.removeAttributeNS(e.space,e.local)}function i(){this.setAttribute(e,t)}function s(){this.setAttributeNS(e.space,e.local,t)}function o(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}function u(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}return e=d3.ns.qualify(e),t==null?e.local?r:n:typeof t=="function"?e.local?u:o:e.local?s:i}function ht(e){return new RegExp("(?:^|\\s+)"+d3.requote(e)+"(?:\\s+|$)","g")}function pt(e,t){function n(){var n=-1;while(++n<i)e[n](this,t)}function r(){var n=-1,r=t.apply(this,arguments);while(++n<i)e[n](this,r)}e=e.trim().split(/\s+/).map(dt);var i=e.length;return typeof t=="function"?r:n}function dt(e){var t=ht(e);return function(n,r){if(i=n.classList)return r?i.add(e):i.remove(e);var i=n.className,s=i.baseVal!=null,o=s?i.baseVal:i;r?(t.lastIndex=0,t.test(o)||(o=h(o+" "+e),s?i.baseVal=o:n.className=o)):o&&(o=h(o.replace(t," ")),s?i.baseVal=o:n.className=o)}}function vt(e,t,n){function r(){this.style.removeProperty(e)}function i(){this.style.setProperty(e,t,n)}function s(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}return t==null?r:typeof t=="function"?s:i}function mt(e,t){function n(){delete this[e]}function r(){this[e]=t}function i(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}return t==null?n:typeof t=="function"?i:r}function gt(e){return{__data__:e}}function yt(e){return function(){return Es(this,e)}}function bt(e){return arguments.length||(e=d3.ascending),function(t,n){return e(t&&t.__data__,n&&n.__data__)}}function wt(e,t,n){function r(){var t=this[s];t&&(this.removeEventListener(e,t,t.$),delete this[s])}function i(){function i(e){var n=d3.event;d3.event=e,u[0]=o.__data__;try{t.apply(o,u)}finally{d3.event=n}}var o=this,u=arguments;r.call(this),this.addEventListener(e,this[s]=i,i.$=n),i._=t}var s="__on"+e,o=e.indexOf(".");return o>0&&(e=e.substring(0,o)),t?i:r}function Et(e,t){for(var n=0,r=e.length;n<r;n++)for(var i=e[n],s=0,o=i.length,u;s<o;s++)(u=i[s])&&t(u,s,n);return e}function St(e){return Ki(e,Ts),e}function xt(e,t,n){Ki(e,Ns);var i=new r,s=d3.dispatch("start","end"),o=Ds;return e.id=t,e.time=n,e.tween=function(t,n){return arguments.length<2?i.get(t):(n==null?i.remove(t):i.set(t,n),e)},e.ease=function(t){return arguments.length?(o=typeof t=="function"?t:d3.ease.apply(d3,arguments),e):o},e.each=function(t,n){return arguments.length<2?Tt.call(e,t):(s.on(t,n),e)},d3.timer(function(r){return Et(e,function(e,u,a){function f(r){return v.active>t?c():(v.active=t,i.forEach(function(t,n){(n=n.call(e,m,u))&&h.push(n)}),s.start.call(e,m,u),l(r)||d3.timer(l,0,n),1)}function l(n){if(v.active!==t)return c();var r=(n-p)/d,i=o(r),a=h.length;while(a>0)h[--a].call(e,i);if(r>=1)return c(),ks=t,s.end.call(e,m,u),ks=0,1}function c(){return--v.count||delete e.__transition__,1}var h=[],p=e.delay,d=e.duration,v=(e=e.node).__transition__||(e.__transition__={active:0,count:0}),m=e.__data__;++v.count,p<=r?f(r):d3.timer(f,p,n)})},0,n),e}function Tt(e){var t=ks,n=Ds,r=Ms,i=_s;return ks=this.id,Ds=this.ease(),Et(this,function(t,n,r){Ms=t.delay,_s=t.duration,e.call(t=t.node,t.__data__,n,r)}),ks=t,Ds=n,Ms=r,_s=i,this}function Nt(e,t,n){return n!=""&&Ps}function Ct(e,t){return d3.tween(e,F(t))}function kt(){var e,t=Date.now(),n=Hs;while(n)e=t-n.then,e>=n.delay&&(n.flush=n.callback(e)),n=n.next;var r=Lt()-t;r>24?(isFinite(r)&&(clearTimeout(js),js=setTimeout(kt,r)),Bs=0):(Bs=1,Fs(kt))}function Lt(){var e=null,t=Hs,n=Infinity;while(t)t.flush?t=e?e.next=t.next:Hs=t.next:(n=Math.min(n,t.then+t.delay),t=(e=t).next);return n}function At(e,t){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();if(Is<0&&(window.scrollX||window.scrollY)){n=d3.select(document.body).append("svg").style("position","absolute").style("top",0).style("left",0);var i=n[0][0].getScreenCTM();Is=!i.f&&!i.e,n.remove()}return Is?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(e.getScreenCTM().inverse()),[r.x,r.y]}var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}function Ot(){}function Mt(e){var t=e[0],n=e[e.length-1];return t<n?[t,n]:[n,t]}function _t(e){return e.rangeExtent?e.rangeExtent():Mt(e.range())}function Dt(e,t){var n=0,r=e.length-1,i=e[n],s=e[r],o;s<i&&(o=n,n=r,r=o,o=i,i=s,s=o);if(t=t(s-i))e[n]=t.floor(i),e[r]=t.ceil(s);return e}function Pt(){return Math}function Ht(e,t,n,r){function i(){var i=Math.min(e.length,t.length)>2?Ut:Rt,a=r?q:I;return o=i(e,t,a,n),u=i(t,e,a,d3.interpolate),s}function s(e){return o(e)}var o,u;return s.invert=function(e){return u(e)},s.domain=function(t){return arguments.length?(e=t.map(Number),i()):e},s.range=function(e){return arguments.length?(t=e,i()):t},s.rangeRound=function(e){return s.range(e).interpolate(d3.interpolateRound)},s.clamp=function(e){return arguments.length?(r=e,i()):r},s.interpolate=function(e){return arguments.length?(n=e,i()):n},s.ticks=function(t){return It(e,t)},s.tickFormat=function(t){return qt(e,t)},s.nice=function(){return Dt(e,jt),i()},s.copy=function(){return Ht(e,t,n,r)},i()}function Bt(e,t){return d3.rebind(e,t,"range","rangeRound","interpolate","clamp")}function jt(e){return e=Math.pow(10,Math.round(Math.log(e)/Math.LN10)-1),e&&{floor:function(t){return Math.floor(t/e)*e},ceil:function(t){return Math.ceil(t/e)*e}}}function Ft(e,t){var n=Mt(e),r=n[1]-n[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),s=t/r*i;return s<=.15?i*=10:s<=.35?i*=5:s<=.75&&(i*=2),n[0]=Math.ceil(n[0]/i)*i,n[1]=Math.floor(n[1]/i)*i+i*.5,n[2]=i,n}function It(e,t){return d3.range.apply(d3,Ft(e,t))}function qt(e,t){return d3.format(",."+Math.max(0,-Math.floor(Math.log(Ft(e,t)[2])/Math.LN10+.01))+"f")}function Rt(e,t,n,r){var i=n(e[0],e[1]),s=r(t[0],t[1]);return function(e){return s(i(e))}}function Ut(e,t,n,r){var i=[],s=[],o=0,u=Math.min(e.length,t.length)-1;e[u]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());while(++o<=u)i.push(n(e[o-1],e[o])),s.push(r(t[o-1],t[o]));return function(t){var n=d3.bisect(e,t,1,u)-1;return s[n](i[n](t))}}function zt(e,t){function n(n){return e(t(n))}var r=t.pow;return n.invert=function(t){return r(e.invert(t))},n.domain=function(i){return arguments.length?(t=i[0]<0?Xt:Wt,r=t.pow,e.domain(i.map(t)),n):e.domain().map(r)},n.nice=function(){return e.domain(Dt(e.domain(),Pt)),n},n.ticks=function(){var n=Mt(e.domain()),i=[];if(n.every(isFinite)){var s=Math.floor(n[0]),o=Math.ceil(n[1]),u=r(n[0]),a=r(n[1]);if(t===Xt){i.push(r(s));for(;s++<o;)for(var f=9;f>0;f--)i.push(r(s)*f)}else{for(;s<o;s++)for(var f=1;f<10;f++)i.push(r(s)*f);i.push(r(s))}for(s=0;i[s]<u;s++);for(o=i.length;i[o-1]>a;o--);i=i.slice(s,o)}return i},n.tickFormat=function(e,i){arguments.length<2&&(i=qs);if(arguments.length<1)return i;var s=Math.max(.1,e/n.ticks().length),o=t===Xt?(u=-1e-12,Math.floor):(u=1e-12,Math.ceil),u;return function(e){return e/r(o(t(e)+u))<=s?i(e):""}},n.copy=function(){return zt(e.copy(),t)},Bt(n,e)}function Wt(e){return Math.log(e<0?0:e)/Math.LN10}function Xt(e){return-Math.log(e>0?0:-e)/Math.LN10}function Vt(e,t){function n(t){return e(r(t))}var r=$t(t),i=$t(1/t);return n.invert=function(t){return i(e.invert(t))},n.domain=function(t){return arguments.length?(e.domain(t.map(r)),n):e.domain().map(i)},n.ticks=function(e){return It(n.domain(),e)},n.tickFormat=function(e){return qt(n.domain(),e)},n.nice=function(){return n.domain(Dt(n.domain(),jt))},n.exponent=function(e){if(!arguments.length)return t;var s=n.domain();return r=$t(t=e),i=$t(1/t),n.domain(s)},n.copy=function(){return Vt(e.copy(),t)},Bt(n,e)}function $t(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Jt(e,t){function n(t){return o[((s.get(t)||s.set(t,e.push(t)))-1)%o.length]}function i(t,n){return d3.range(e.length).map(function(e){return t+n*e})}var s,o,u;return n.domain=function(i){if(!arguments.length)return e;e=[],s=new r;var o=-1,u=i.length,a;while(++o<u)s.has(a=i[o])||s.set(a,e.push(a));return n[t.t].apply(n,t.a)},n.range=function(e){return arguments.length?(o=e,u=0,t={t:"range",a:arguments},n):o},n.rangePoints=function(r,s){arguments.length<2&&(s=0);var a=r[0],f=r[1],l=(f-a)/(Math.max(1,e.length-1)+s);return o=i(e.length<2?(a+f)/2:a+l*s/2,l),u=0,t={t:"rangePoints",a:arguments},n},n.rangeBands=function(r,s,a){arguments.length<2&&(s=0),arguments.length<3&&(a=s);var f=r[1]<r[0],l=r[f-0],c=r[1-f],h=(c-l)/(e.length-s+2*a);return o=i(l+h*a,h),f&&o.reverse(),u=h*(1-s),t={t:"rangeBands",a:arguments},n},n.rangeRoundBands=function(r,s,a){arguments.length<2&&(s=0),arguments.length<3&&(a=s);var f=r[1]<r[0],l=r[f-0],c=r[1-f],h=Math.floor((c-l)/(e.length-s+2*a)),p=c-l-(e.length-s)*h;return o=i(l+Math.round(p/2),h),f&&o.reverse(),u=Math.round(h*(1-s)),t={t:"rangeRoundBands",a:arguments},n},n.rangeBand=function(){return u},n.rangeExtent=function(){return Mt(t.a[0])},n.copy=function(){return Jt(e,t)},n.domain(e)}function Kt(e,t){function n(){var n=0,s=e.length,o=t.length;i=[];while(++n<o)i[n-1]=d3.quantile(e,n/o);return r}function r(e){return isNaN(e=+e)?NaN:t[d3.bisect(i,e)]}var i;return r.domain=function(t){return arguments.length?(e=t.filter(function(e){return!isNaN(e)}).sort(d3.ascending),n()):e},r.range=function(e){return arguments.length?(t=e,n()):t},r.quantiles=function(){return i},r.copy=function(){return Kt(e,t)},n()}function Qt(e,t,n){function r(t){return n[Math.max(0,Math.min(o,Math.floor(s*(t-e))))]}function i(){return s=n.length/(t-e),o=n.length-1,r}var s,o;return r.domain=function(n){return arguments.length?(e=+n[0],t=+n[n.length-1],i()):[e,t]},r.range=function(e){return arguments.length?(n=e,i()):n},r.copy=function(){return Qt(e,t,n)},i()}function Gt(e,t){function n(n){return t[d3.bisect(e,n)]}return n.domain=function(t){return arguments.length?(e=t,n):e},n.range=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Gt(e,t)},n}function Yt(e){function t(e){return+e}return t.invert=t,t.domain=t.range=function(n){return arguments.length?(e=n.map(t),t):e},t.ticks=function(t){return It(e,t)},t.tickFormat=function(t){return qt(e,t)},t.copy=function(){return Yt(e)},t}function Zt(e){return e.innerRadius}function en(e){return e.outerRadius}function tn(e){return e.startAngle}function nn(e){return e.endAngle}function rn(e){function t(t){function o(){a.push("M",s(e(l),f))}var a=[],l=[],c=-1,h=t.length,p,d=u(n),v=u(r);while(++c<h)i.call(this,p=t[c],c)?l.push([+d.call(this,p,c),+v.call(this,p,c)]):l.length&&(o(),l=[]);return l.length&&o(),a.length?a.join(""):null}var n=sn,r=on,i=o,s=un,a=s.key,f=.7;return t.x=function(e){return arguments.length?(n=e,t):n},t.y=function(e){return arguments.length?(r=e,t):r},t.defined=function(e){return arguments.length?(i=e,t):i},t.interpolate=function(e){return arguments.length?(typeof e=="function"?a=s=e:a=(s=$s.get(e)||un).key,t):a},t.tension=function(e){return arguments.length?(f=e,t):f},t}function sn(e){return e[0]}function on(e){return e[1]}function un(e){return e.join("L")}function an(e){return un(e)+"Z"}function fn(e){var t=0,n=e.length,r=e[0],i=[r[0],",",r[1]];while(++t<n)i.push("V",(r=e[t])[1],"H",r[0]);return i.join("")}function ln(e){var t=0,n=e.length,r=e[0],i=[r[0],",",r[1]];while(++t<n)i.push("H",(r=e[t])[0],"V",r[1]);return i.join("")}function cn(e,t){return e.length<4?un(e):e[1]+dn(e.slice(1,e.length-1),vn(e,t))}function hn(e,t){return e.length<3?un(e):e[0]+dn((e.push(e[0]),e),vn([e[e.length-2]].concat(e,[e[1]]),t))}function pn(e,t,n){return e.length<3?un(e):e[0]+dn(e,vn(e,t))}function dn(e,t){if(t.length<1||e.length!=t.length&&e.length!=t.length+2)return un(e);var n=e.length!=t.length,r="",i=e[0],s=e[1],o=t[0],u=o,a=1;n&&(r+="Q"+(s[0]-o[0]*2/3)+","+(s[1]-o[1]*2/3)+","+s[0]+","+s[1],i=e[1],a=2);if(t.length>1){u=t[1],s=e[a],a++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(s[0]-u[0])+","+(s[1]-u[1])+","+s[0]+","+s[1];for(var f=2;f<t.length;f++,a++)s=e[a],u=t[f],r+="S"+(s[0]-u[0])+","+(s[1]-u[1])+","+s[0]+","+s[1]}if(n){var l=e[a];r+="Q"+(s[0]+u[0]*2/3)+","+(s[1]+u[1]*2/3)+","+l[0]+","+l[1]}return r}function vn(e,t){var n=[],r=(1-t)/2,i,s=e[0],o=e[1],u=1,a=e.length;while(++u<a)i=s,s=o,o=e[u],n.push([r*(o[0]-i[0]),r*(o[1]-i[1])]);return n}function mn(e){if(e.length<3)return un(e);var t=1,n=e.length,r=e[0],i=r[0],s=r[1],o=[i,i,i,(r=e[1])[0]],u=[s,s,s,r[1]],a=[i,",",s];En(a,o,u);while(++t<n)r=e[t],o.shift(),o.push(r[0]),u.shift(),u.push(r[1]),En(a,o,u);t=-1;while(++t<2)o.shift(),o.push(r[0]),u.shift(),u.push(r[1]),En(a,o,u);return a.join("")}function gn(e){if(e.length<4)return un(e);var t=[],n=-1,r=e.length,i,s=[0],o=[0];while(++n<3)i=e[n],s.push(i[0]),o.push(i[1]);t.push(wn(Qs,s)+","+wn(Qs,o)),--n;while(++n<r)i=e[n],s.shift(),s.push(i[0]),o.shift(),o.push(i[1]),En(t,s,o);return t.join("")}function yn(e){var t,n=-1,r=e.length,i=r+4,s,o=[],u=[];while(++n<4)s=e[n%r],o.push(s[0]),u.push(s[1]);t=[wn(Qs,o),",",wn(Qs,u)],--n;while(++n<i)s=e[n%r],o.shift(),o.push(s[0]),u.shift(),u.push(s[1]),En(t,o,u);return t.join("")}function bn(e,t){var n=e.length-1;if(n){var r=e[0][0],i=e[0][1],s=e[n][0]-r,o=e[n][1]-i,u=-1,a,f;while(++u<=n)a=e[u],f=u/n,a[0]=t*a[0]+(1-t)*(r+f*s),a[1]=t*a[1]+(1-t)*(i+f*o)}return mn(e)}function wn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function En(e,t,n){e.push("C",wn(Js,t),",",wn(Js,n),",",wn(Ks,t),",",wn(Ks,n),",",wn(Qs,t),",",wn(Qs,n))}function Sn(e,t){return(t[1]-e[1])/(t[0]-e[0])}function xn(e){var t=0,n=e.length-1,r=[],i=e[0],s=e[1],o=r[0]=Sn(i,s);while(++t<n)r[t]=(o+(o=Sn(i=s,s=e[t+1])))/2;return r[t]=o,r}function Tn(e){var t=[],n,r,i,s,o=xn(e),u=-1,a=e.length-1;while(++u<a)n=Sn(e[u],e[u+1]),Math.abs(n)<1e-6?o[u]=o[u+1]=0:(r=o[u]/n,i=o[u+1]/n,s=r*r+i*i,s>9&&(s=n*3/Math.sqrt(s),o[u]=s*r,o[u+1]=s*i));u=-1;while(++u<=a)s=(e[Math.min(a,u+1)][0]-e[Math.max(0,u-1)][0])/(6*(1+o[u]*o[u])),t.push([s||0,o[u]*s||0]);return t}function Nn(e){return e.length<3?un(e):e[0]+dn(e,Tn(e))}function Cn(e){var t,n=-1,r=e.length,i,s;while(++n<r)t=e[n],i=t[0],s=t[1]+Xs,t[0]=i*Math.cos(s),t[1]=i*Math.sin(s);return e}function kn(e){function t(t){function o(){l.push("M",f(e(v),p),h,c(e(d.reverse()),p),"Z")}var l=[],d=[],v=[],m=-1,g=t.length,y,b=u(n),w=u(i),E=n===r?function(){return x}:u(r),S=i===s?function(){return T}:u(s),x,T;while(++m<g)a.call(this,y=t[m],m)?(d.push([x=+b.call(this,y,m),T=+w.call(this,y,m)]),v.push([+E.call(this,y,m),+S.call(this,y,m)])):d.length&&(o(),d=[],v=[]);return d.length&&o(),l.length?l.join(""):null}var n=sn,r=sn,i=0,s=on,a=o,f=un,l=f.key,c=f,h="L",p=.7;return t.x=function(e){return arguments.length?(n=r=e,t):r},t.x0=function(e){return arguments.length?(n=e,t):n},t.x1=function(e){return arguments.length?(r=e,t):r},t.y=function(e){return arguments.length?(i=s=e,t):s},t.y0=function(e){return arguments.length?(i=e,t):i},t.y1=function(e){return arguments.length?(s=e,t):s},t.defined=function(e){return arguments.length?(a=e,t):a},t.interpolate=function(e){return arguments.length?(typeof e=="function"?l=f=e:l=(f=$s.get(e)||un).key,c=f.reverse||f,h=f.closed?"M":"L",t):l},t.tension=function(e){return arguments.length?(p=e,t):p},t}function Ln(e){return e.source}function An(e){return e.target}function On(e){return e.radius}function Mn(e){return e.startAngle}function _n(e){return e.endAngle}function Dn(e){return[e.x,e.y]}function Pn(e){return function(){var t=e.apply(this,arguments),n=t[0],r=t[1]+Xs;return[n*Math.cos(r),n*Math.sin(r)]}}function Hn(){return 64}function Bn(){return"circle"}function jn(e){var t=Math.sqrt(e/Math.PI);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+ -t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Fn(e,t){e.attr("transform",function(e){return"translate("+t(e)+",0)"})}function In(e,t){e.attr("transform",function(e){return"translate(0,"+t(e)+")"})}function qn(e,t,n){i=[];if(n&&t.length>1){var r=Mt(e.domain()),i,s=-1,o=t.length,u=(t[1]-t[0])/++n,a,f;while(++s<o)for(a=n;--a>0;)(f=+t[s]-a*u)>=r[0]&&i.push(f);for(--s,a=0;++a<n&&(f=+t[s]+a*u)<r[1];)i.push(f)}return i}function Rn(){no||(no=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var e=d3.event,t;try{no.scrollTop=1e3,no.dispatchEvent(e),t=1e3-no.scrollTop}catch(n){t=e.wheelDelta||-e.detail*5}return t}function Un(e){var t=e.source,n=e.target,r=Wn(t,n),i=[t];while(t!==r)t=t.parent,i.push(t);var s=i.length;while(n!==r)i.splice(s,0,n),n=n.parent;return i}function zn(e){var t=[],n=e.parent;while(n!=null)t.push(e),e=n,n=n.parent;return t.push(e),t}function Wn(e,t){if(e===t)return e;var n=zn(e),r=zn(t),i=n.pop(),s=r.pop(),o=null;while(i===s)o=i,i=n.pop(),s=r.pop();return o}function Xn(e){e.fixed|=2}function Vn(e){e.fixed&=1}function $n(e){e.fixed|=4}function Jn(e){e.fixed&=3}function Kn(e,t,n){var r=0,i=0;e.charge=0;if(!e.leaf){var s=e.nodes,o=s.length,u=-1,a;while(++u<o){a=s[u];if(a==null)continue;Kn(a,t,n),e.charge+=a.charge,r+=a.charge*a.cx,i+=a.charge*a.cy}}if(e.point){e.leaf||(e.point.x+=Math.random()-.5,e.point.y+=Math.random()-.5);var f=t*n[e.point.index];e.charge+=e.pointCharge=f,r+=f*e.point.x,i+=f*e.point.y}e.cx=r/e.charge,e.cy=i/e.charge}function Qn(e){return 20}function Gn(e){return 1}function Yn(e){return e.x}function Zn(e){return e.y}function er(e,t,n){e.y0=t,e.y=n}function tr(e){return d3.range(e.length)}function nr(e){var t=-1,n=e[0].length,r=[];while(++t<n)r[t]=0;return r}function rr(e){var t=1,n=0,r=e[0][1],i,s=e.length;for(;t<s;++t)(i=e[t][1])>r&&(n=t,r=i);return n}function ir(e){return e.reduce(sr,0)}function sr(e,t){return e+t[1]}function or(e,t){return ur(e,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ur(e,t){var n=-1,r=+e[0],i=(e[1]-r)/t,s=[];while(++n<=t)s[n]=i*n+r;return s}function ar(e){return[d3.min(e),d3.max(e)]}function fr(e,t){return d3.rebind(e,t,"sort","children","value"),e.links=pr,e.nodes=function(t){return uo=!0,(e.nodes=e)(t)},e}function lr(e){return e.children}function cr(e){return e.value}function hr(e,t){return t.value-e.value}function pr(e){return d3.merge(e.map(function(e){return(e.children||[]).map(function(t){return{source:e,target:t}})}))}function dr(e,t){return e.value-t.value}function vr(e,t){var n=e._pack_next;e._pack_next=t,t._pack_prev=e,t._pack_next=n,n._pack_prev=t}function mr(e,t){e._pack_next=t,t._pack_prev=e}function gr(e,t){var n=t.x-e.x,r=t.y-e.y,i=e.r+t.r;return i*i-n*n-r*r>.001}function yr(e){function t(e){r=Math.min(e.x-e.r,r),i=Math.max(e.x+e.r,i),s=Math.min(e.y-e.r,s),o=Math.max(e.y+e.r,o)}if(!(n=e.children)||!(p=n.length))return;var n,r=Infinity,i=-Infinity,s=Infinity,o=-Infinity,u,a,f,l,c,h,p;n.forEach(br),u=n[0],u.x=-u.r,u.y=0,t(u);if(p>1){a=n[1],a.x=a.r,a.y=0,t(a);if(p>2){f=n[2],Sr(u,a,f),t(f),vr(u,f),u._pack_prev=f,vr(f,a),a=u._pack_next;for(l=3;l<p;l++){Sr(u,a,f=n[l]);var d=0,v=1,m=1;for(c=a._pack_next;c!==a;c=c._pack_next,v++)if(gr(c,f)){d=1;break}if(d==1)for(h=u._pack_prev;h!==c._pack_prev;h=h._pack_prev,m++)if(gr(h,f))break;d?(v<m||v==m&&a.r<u.r?mr(u,a=c):mr(u=h,a),l--):(vr(u,f),a=f,t(f))}}}var g=(r+i)/2,y=(s+o)/2,b=0;for(l=0;l<p;l++)f=n[l],f.x-=g,f.y-=y,b=Math.max(b,f.r+Math.sqrt(f.x*f.x+f.y*f.y));e.r=b,n.forEach(wr)}function br(e){e._pack_next=e._pack_prev=e}function wr(e){delete e._pack_next,delete e._pack_prev}function Er(e,t,n,r){var i=e.children;e.x=t+=r*e.x,e.y=n+=r*e.y,e.r*=r;if(i){var s=-1,o=i.length;while(++s<o)Er(i[s],t,n,r)}}function Sr(e,t,n){var r=e.r+n.r,i=t.x-e.x,s=t.y-e.y;if(r&&(i||s)){var o=t.r+n.r,u=i*i+s*s;o*=o,r*=r;var a=.5+(r-o)/(2*u),f=Math.sqrt(Math.max(0,2*o*(r+u)-(r-=u)*r-o*o))/(2*u);n.x=e.x+a*i+f*s,n.y=e.y+a*s-f*i}else n.x=e.x+r,n.y=e.y}function xr(e){return 1+d3.max(e,function(e){return e.y})}function Tr(e){return e.reduce(function(e,t){return e+t.x},0)/e.length}function Nr(e){var t=e.children;return t&&t.length?Nr(t[0]):e}function Cr(e){var t=e.children,n;return t&&(n=t.length)?Cr(t[n-1]):e}function kr(e,t){return e.parent==t.parent?1:2}function Lr(e){var t=e.children;return t&&t.length?t[0]:e._tree.thread}function Ar(e){var t=e.children,n;return t&&(n=t.length)?t[n-1]:e._tree.thread}function Or(e,t){var n=e.children;if(n&&(i=n.length)){var r,i,s=-1;while(++s<i)t(r=Or(n[s],t),e)>0&&(e=r)}return e}function Mr(e,t){return e.x-t.x}function _r(e,t){return t.x-e.x}function Dr(e,t){return e.depth-t.depth}function Pr(e,t){function n(e,r){var i=e.children;if(i&&(a=i.length)){var s,o=null,u=-1,a;while(++u<a)s=i[u],n(s,o),o=s}t(e,r)}n(e,null)}function Hr(e){var t=0,n=0,r=e.children,i=r.length,s;while(--i>=0)s=r[i]._tree,s.prelim+=t,s.mod+=t,t+=s.shift+(n+=s.change)}function Br(e,t,n){e=e._tree,t=t._tree;var r=n/(t.number-e.number);e.change+=r,t.change-=r,t.shift+=n,t.prelim+=n,t.mod+=n}function jr(e,t,n){return e._tree.ancestor.parent==t.parent?e._tree.ancestor:n}function Fr(e){return{x:e.x,y:e.y,dx:e.dx,dy:e.dy}}function Ir(e,t){var n=e.x+t[3],r=e.y+t[0],i=e.dx-t[1]-t[3],s=e.dy-t[0]-t[2];return i<0&&(n+=i/2,i=0),s<0&&(r+=s/2,s=0),{x:n,y:r,dx:i,dy:s}}function qr(e,t){function n(e,r){d3.text(e,t,function(e){r(e&&n.parse(e))})}function r(t){return t.map(i).join(e)}function i(e){return o.test(e)?'"'+e.replace(/\"/g,'""')+'"':e}var s=new RegExp("\r\n|["+e+"\r\n]","g"),o=new RegExp('["'+e+"\n]"),u=e.charCodeAt(0);return n.parse=function(e){var t;return n.parseRows(e,function(e,n){if(n){var r={},i=-1,s=t.length;while(++i<s)r[t[i]]=e[i];return r}return t=e,null})},n.parseRows=function(e,t){function n(){if(s.lastIndex>=e.length)return i;if(l)return l=!1,r;var t=s.lastIndex;if(e.charCodeAt(t)===34){var n=t;while(n++<e.length)if(e.charCodeAt(n)===34){if(e.charCodeAt(n+1)!==34)break;n++}s.lastIndex=n+2;var o=e.charCodeAt(n+1);return o===13?(l=!0,e.charCodeAt(n+2)===10&&s.lastIndex++):o===10&&(l=!0),e.substring(t+1,n).replace(/""/g,'"')}var a=s.exec(e);return a?(l=a[0].charCodeAt(0)!==u,e.substring(t,a.index)):(s.lastIndex=e.length,e.substring(t))}var r={},i={},o=[],a=0,f,l;s.lastIndex=0;while((f=n())!==i){var c=[];while(f!==r&&f!==i)c.push(f),f=n();if(t&&!(c=t(c,a++)))continue;o.push(c)}return o},n.format=function(e){return e.map(r).join("\n")},n}function Rr(e,t){return function(n){return n&&e.hasOwnProperty(n.type)?e[n.type](n):t}}function Ur(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+ -2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function zr(e,t){fo.hasOwnProperty(e.type)&&fo[e.type](e,t)}function Wr(e,t){zr(e.geometry,t)}function Xr(e,t){for(var n=e.features,r=0,i=n.length;r<i;r++)zr(n[r].geometry,t)}function Vr(e,t){for(var n=e.geometries,r=0,i=n.length;r<i;r++)zr(n[r],t)}function $r(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)t.apply(null,n[r])}function Jr(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)for(var s=n[r],o=0,u=s.length;o<u;o++)t.apply(null,s[o])}function Kr(e,t){for(var n=e.coordinates,r=0,i=n.length;r<i;r++)for(var s=n[r][0],o=0,u=s.length;o<u;o++)t.apply(null,s[o])}function Qr(e,t){t.apply(null,e.coordinates)}function Gr(e,t){for(var n=e.coordinates[0],r=0,i=n.length;r<i;r++)t.apply(null,n[r])}function Yr(e){return e.source}function Zr(e){return e.target}function ei(){function e(e){var t=Math.sin(e*=p)*d,n=Math.sin(p-e)*d,r=n*s+t*c,u=n*o+t*h,a=n*i+t*l;return[Math.atan2(u,r)/ao,Math.atan2(a,Math.sqrt(r*r+u*u))/ao]}var t,n,r,i,s,o,u,a,f,l,c,h,p,d;return e.distance=function(){return p==null&&(d=1/Math.sin(p=Math.acos(Math.max(-1,Math.min(1,i*l+r*f*Math.cos(u-t)))))),p},e.source=function(u){var a=Math.cos(t=u[0]*ao),f=Math.sin(t);return r=Math.cos(n=u[1]*ao),i=Math.sin(n),s=r*a,o=r*f,p=null,e},e.target=function(t){var n=Math.cos(u=t[0]*ao),r=Math.sin(u);return f=Math.cos(a=t[1]*ao),l=Math.sin(a),c=f*n,h=f*r,p=null,e},e}function ti(e,t){var n=ei().source(e).target(t);return n.distance(),n}function ni(e){var t=0,n=0;for(;;){if(e(t,n))return[t,n];t===0?(t=n+1,n=0):(t-=1,n+=1)}}function ri(e,t,n,r){var i,s,o,u,a,f,l;return i=r[e],s=i[0],o=i[1],i=r[t],u=i[0],a=i[1],i=r[n],f=i[0],l=i[1],(l-o)*(u-s)-(a-o)*(f-s)>0}function ii(e,t,n){return(n[0]-t[0])*(e[1]-t[1])<(n[1]-t[1])*(e[0]-t[0])}function si(e,t,n,r){var i=e[0],s=t[0],o=n[0],u=r[0],a=e[1],f=t[1],l=n[1],c=r[1],h=i-o,p=s-i,d=u-o,v=a-l,m=f-a,g=c-l,y=(d*v-g*h)/(g*p-d*m);return[i+y*p,a+y*m]}function oi(e,t){var n={list:e.map(function(e,t){return{index:t,x:e[0],y:e[1]}}).sort(function(e,t){return e.y<t.y?-1:e.y>t.y?1:e.x<t.x?-1:e.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(e,t){return{edge:e,side:t,vertex:null,l:null,r:null}},insert:function(e,t){t.l=e,t.r=e.r,e.r.l=t,e.r=t},leftBound:function(e){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,e));return t=t.l,t},del:function(e){e.l.r=e.r,e.r.l=e.l,e.edge=null},right:function(e){return e.r},left:function(e){return e.l},leftRegion:function(e){return e.edge==null?n.bottomSite:e.edge.region[e.side]},rightRegion:function(e){return e.edge==null?n.bottomSite:e.edge.region[ho[e.side]]}},i={bisect:function(e,t){var n={region:{l:e,r:t},ep:{l:null,r:null}},r=t.x-e.x,i=t.y-e.y,s=r>0?r:-r,o=i>0?i:-i;return n.c=e.x*r+e.y*i+(r*r+i*i)*.5,s>o?(n.a=1,n.b=i/r,n.c/=r):(n.b=1,n.a=r/i,n.c/=i),n},intersect:function(e,t){var n=e.edge,r=t.edge;if(!n||!r||n.region.r==r.region.r)return null;var i=n.a*r.b-n.b*r.a;if(Math.abs(i)<1e-10)return null;var s=(n.c*r.b-r.c*n.b)/i,o=(r.c*n.a-n.c*r.a)/i,u=n.region.r,a=r.region.r,f,l;u.y<a.y||u.y==a.y&&u.x<a.x?(f=e,l=n):(f=t,l=r);var c=s>=l.region.r.x;return c&&f.side==="l"||!c&&f.side==="r"?null:{x:s,y:o}},rightOf:function(e,t){var n=e.edge,r=n.region.r,i=t.x>r.x;if(i&&e.side==="l")return 1;if(!i&&e.side==="r")return 0;if(n.a===1){var s=t.y-r.y,o=t.x-r.x,u=0,a=0;!i&&n.b<0||i&&n.b>=0?a=u=s>=n.b*o:(a=t.x+t.y*n.b>n.c,n.b<0&&(a=!a),a||(u=1));if(!u){var f=r.x-n.region.l.x;a=n.b*(o*o-s*s)<f*s*(1+2*o/f+n.b*n.b),n.b<0&&(a=!a)}}else{var l=n.c-n.a*t.x,c=t.y-l,h=t.x-r.x,p=l-r.y;a=c*c>h*h+p*p}return e.side==="l"?a:!a},endPoint:function(e,n,r){e.ep[n]=r;if(!e.ep[ho[n]])return;t(e)},distance:function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}},s={list:[],insert:function(e,t,n){e.vertex=t,e.ystar=t.y+n;for(var r=0,i=s.list,o=i.length;r<o;r++){var u=i[r];if(e.ystar>u.ystar||e.ystar==u.ystar&&t.x>u.vertex.x)continue;break}i.splice(r,0,e)},del:function(e){for(var t=0,n=s.list,r=n.length;t<r&&n[t]!=e;++t);n.splice(t,1)},empty:function(){return s.list.length===0},nextEvent:function(e){for(var t=0,n=s.list,r=n.length;t<r;++t)if(n[t]==e)return n[t+1];return null},min:function(){var e=s.list[0];return{x:e.vertex.x,y:e.ystar}},extractMin:function(){return s.list.shift()}};r.init(),n.bottomSite=n.list.shift();var o=n.list.shift(),u,a,f,l,c,h,p,d,v,m,g,y,b;for(;;){s.empty()||(u=s.min());if(o&&(s.empty()||o.y<u.y||o.y==u.y&&o.x<u.x))a=r.leftBound(o),f=r.right(a),p=r.rightRegion(a),y=i.bisect(p,o),h=r.createHalfEdge(y,"l"),r.insert(a,h),m=i.intersect(a,h),m&&(s.del(a),s.insert(a,m,i.distance(m,o))),a=h,h=r.createHalfEdge(y,"r"
),r.insert(a,h),m=i.intersect(h,f),m&&s.insert(h,m,i.distance(m,o)),o=n.list.shift();else{if(!!s.empty())break;a=s.extractMin(),l=r.left(a),f=r.right(a),c=r.right(f),p=r.leftRegion(a),d=r.rightRegion(f),g=a.vertex,i.endPoint(a.edge,a.side,g),i.endPoint(f.edge,f.side,g),r.del(a),s.del(f),r.del(f),b="l",p.y>d.y&&(v=p,p=d,d=v,b="r"),y=i.bisect(p,d),h=r.createHalfEdge(y,b),r.insert(l,h),i.endPoint(y,ho[b],g),m=i.intersect(l,h),m&&(s.del(l),s.insert(l,m,i.distance(m,p))),m=i.intersect(h,c),m&&s.insert(h,m,i.distance(m,p))}}for(a=r.right(r.leftEnd);a!=r.rightEnd;a=r.right(a))t(a.edge)}function ui(){return{leaf:!0,nodes:[],point:null}}function ai(e,t,n,r,i,s){if(!e(t,n,r,i,s)){var o=(n+i)*.5,u=(r+s)*.5,a=t.nodes;a[0]&&ai(e,a[0],n,r,o,u),a[1]&&ai(e,a[1],o,r,i,u),a[2]&&ai(e,a[2],n,u,o,s),a[3]&&ai(e,a[3],o,u,i,s)}}function fi(e){return{x:e[0],y:e[1]}}function li(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function ci(e){return e.substring(0,3)}function hi(e,t,n,r){var i,s,o=0,u=t.length,a=n.length;while(o<u){if(r>=a)return-1;i=t.charCodeAt(o++);if(i==37){s=Ho[t.charAt(o++)];if(!s||(r=s(e,n,r))<0)return-1}else if(i!=n.charCodeAt(r++))return-1}return r}function pi(e){return new RegExp("^(?:"+e.map(d3.requote).join("|")+")","i")}function di(e){var t=new r,n=-1,i=e.length;while(++n<i)t.set(e[n].toLowerCase(),n);return t}function vi(e,t,n){Ao.lastIndex=0;var r=Ao.exec(t.substring(n));return r?n+=r[0].length:-1}function mi(e,t,n){Lo.lastIndex=0;var r=Lo.exec(t.substring(n));return r?n+=r[0].length:-1}function gi(e,t,n){_o.lastIndex=0;var r=_o.exec(t.substring(n));return r?(e.m=Do.get(r[0].toLowerCase()),n+=r[0].length):-1}function yi(e,t,n){Oo.lastIndex=0;var r=Oo.exec(t.substring(n));return r?(e.m=Mo.get(r[0].toLowerCase()),n+=r[0].length):-1}function bi(e,t,n){return hi(e,Po.c.toString(),t,n)}function wi(e,t,n){return hi(e,Po.x.toString(),t,n)}function Ei(e,t,n){return hi(e,Po.X.toString(),t,n)}function Si(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+4));return r?(e.y=+r[0],n+=r[0].length):-1}function xi(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.y=Ti(+r[0]),n+=r[0].length):-1}function Ti(e){return e+(e>68?1900:2e3)}function Ni(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.m=r[0]-1,n+=r[0].length):-1}function Ci(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.d=+r[0],n+=r[0].length):-1}function ki(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.H=+r[0],n+=r[0].length):-1}function Li(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.M=+r[0],n+=r[0].length):-1}function Ai(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+2));return r?(e.S=+r[0],n+=r[0].length):-1}function Oi(e,t,n){Bo.lastIndex=0;var r=Bo.exec(t.substring(n,n+3));return r?(e.L=+r[0],n+=r[0].length):-1}function Mi(e,t,n){var r=jo.get(t.substring(n,n+=2).toLowerCase());return r==null?-1:(e.p=r,n)}function _i(e){var t=e.getTimezoneOffset(),n=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return n+To(r)+To(i)}function Di(e){return e.toISOString()}function Pi(e,t,n){function r(t){var n=e(t),r=s(n,1);return t-n<r-t?n:r}function i(n){return t(n=e(new po(n-1)),1),n}function s(e,n){return t(e=new po(+e),n),e}function o(e,r,s){var o=i(e),u=[];if(s>1)while(o<r)n(o)%s||u.push(new Date(+o)),t(o,1);else while(o<r)u.push(new Date(+o)),t(o,1);return u}function u(e,t,n){try{po=li;var r=new li;return r._=e,o(r,t,n)}finally{po=Date}}e.floor=e,e.round=r,e.ceil=i,e.offset=s,e.range=o;var a=e.utc=Hi(e);return a.floor=a,a.round=Hi(r),a.ceil=Hi(i),a.offset=Hi(s),a.range=u,e}function Hi(e){return function(t,n){try{po=li;var r=new li;return r._=t,e(r,n)._}finally{po=Date}}}function Bi(e,t,n){function r(t){return e(t)}return r.invert=function(t){return Fi(e.invert(t))},r.domain=function(t){return arguments.length?(e.domain(t),r):e.domain().map(Fi)},r.nice=function(e){return r.domain(Dt(r.domain(),function(){return e}))},r.ticks=function(n,i){var s=ji(r.domain());if(typeof n!="function"){var o=s[1]-s[0],u=o/n,a=d3.bisect(Io,u);if(a==Io.length)return t.year(s,n);if(!a)return e.ticks(n).map(Fi);Math.log(u/Io[a-1])<Math.log(Io[a]/u)&&--a,n=t[a],i=n[1],n=n[0].range}return n(s[0],new Date(+s[1]+1),i)},r.tickFormat=function(){return n},r.copy=function(){return Bi(e.copy(),t,n)},d3.rebind(r,e,"range","rangeRound","interpolate","clamp")}function ji(e){var t=e[0],n=e[e.length-1];return t<n?[t,n]:[n,t]}function Fi(e){return new Date(e)}function Ii(e){return function(t){var n=e.length-1,r=e[n];while(!r[1](t))r=e[--n];return r[0](t)}}function qi(e){var t=new Date(e,0,1);return t.setFullYear(e),t}function Ri(e){var t=e.getFullYear(),n=qi(t),r=qi(t+1);return t+(e-n)/(r-n)}function Ui(e){var t=new Date(Date.UTC(e,0,1));return t.setUTCFullYear(e),t}function zi(e){var t=e.getUTCFullYear(),n=Ui(t),r=Ui(t+1);return t+(e-n)/(r-n)}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(Wi){var Xi=CSSStyleDeclaration.prototype,Vi=Xi.setProperty;Xi.setProperty=function(e,t,n){Vi.call(this,e,t+"",n)}}d3={version:"2.10.2"};var $i=n;try{$i(document.documentElement.childNodes)[0].nodeType}catch(Ji){$i=t}var Ki=[].__proto__?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)e[n]=t[n]};d3.map=function(e){var t=new r;for(var n in e)t.set(n,e[n]);return t},e(r,{has:function(e){return Qi+e in this},get:function(e){return this[Qi+e]},set:function(e,t){return this[Qi+e]=t},remove:function(e){return e=Qi+e,e in this&&delete this[e]},keys:function(){var e=[];return this.forEach(function(t){e.push(t)}),e},values:function(){var e=[];return this.forEach(function(t,n){e.push(n)}),e},entries:function(){var e=[];return this.forEach(function(t,n){e.push({key:t,value:n})}),e},forEach:function(e){for(var t in this)t.charCodeAt(0)===Gi&&e.call(this,t.substring(1),this[t])}});var Qi="\0",Gi=Qi.charCodeAt(0);d3.functor=u,d3.rebind=function(e,t){var n=1,r=arguments.length,i;while(++n<r)e[i=arguments[n]]=a(e,t,t[i]);return e},d3.ascending=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN},d3.descending=function(e,t){return t<e?-1:t>e?1:t>=e?0:NaN},d3.mean=function(e,t){var n=e.length,r,i=0,s=-1,o=0;if(arguments.length===1)while(++s<n)f(r=e[s])&&(i+=(r-i)/++o);else while(++s<n)f(r=t.call(e,e[s],s))&&(i+=(r-i)/++o);return o?i:undefined},d3.median=function(e,t){return arguments.length>1&&(e=e.map(t)),e=e.filter(f),e.length?d3.quantile(e.sort(d3.ascending),.5):undefined},d3.min=function(e,t){var n=-1,r=e.length,i,s;if(arguments.length===1){while(++n<r&&((i=e[n])==null||i!=i))i=undefined;while(++n<r)(s=e[n])!=null&&i>s&&(i=s)}else{while(++n<r&&((i=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&i>s&&(i=s)}return i},d3.max=function(e,t){var n=-1,r=e.length,i,s;if(arguments.length===1){while(++n<r&&((i=e[n])==null||i!=i))i=undefined;while(++n<r)(s=e[n])!=null&&s>i&&(i=s)}else{while(++n<r&&((i=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&s>i&&(i=s)}return i},d3.extent=function(e,t){var n=-1,r=e.length,i,s,o;if(arguments.length===1){while(++n<r&&((i=o=e[n])==null||i!=i))i=o=undefined;while(++n<r)(s=e[n])!=null&&(i>s&&(i=s),o<s&&(o=s))}else{while(++n<r&&((i=o=t.call(e,e[n],n))==null||i!=i))i=undefined;while(++n<r)(s=t.call(e,e[n],n))!=null&&(i>s&&(i=s),o<s&&(o=s))}return[i,o]},d3.random={normal:function(e,t){var n=arguments.length;return n<2&&(t=1),n<1&&(e=0),function(){var n,r,i;do n=Math.random()*2-1,r=Math.random()*2-1,i=n*n+r*r;while(!i||i>1);return e+t*n*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(e,t){var n=arguments.length;n<2&&(t=1),n<1&&(e=0);var r=d3.random.normal();return function(){return Math.exp(e+t*r())}},irwinHall:function(e){return function(){for(var t=0,n=0;n<e;n++)t+=Math.random();return t/e}}},d3.sum=function(e,t){var n=0,r=e.length,i,s=-1;if(arguments.length===1)while(++s<r)isNaN(i=+e[s])||(n+=i);else while(++s<r)isNaN(i=+t.call(e,e[s],s))||(n+=i);return n},d3.quantile=function(e,t){var n=(e.length-1)*t+1,r=Math.floor(n),i=e[r-1],s=n-r;return s?i+s*(e[r]-i):i},d3.transpose=function(e){return d3.zip.apply(d3,e)},d3.zip=function(){if(!(i=arguments.length))return[];for(var e=-1,t=d3.min(arguments,l),n=new Array(t);++e<t;)for(var r=-1,i,s=n[e]=new Array(i);++r<i;)s[r]=arguments[r][e];return n},d3.bisector=function(e){return{left:function(t,n,r,i){arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);while(r<i){var s=r+i>>>1;e.call(t,t[s],s)<n?r=s+1:i=s}return r},right:function(t,n,r,i){arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);while(r<i){var s=r+i>>>1;n<e.call(t,t[s],s)?i=s:r=s+1}return r}}};var Yi=d3.bisector(function(e){return e});d3.bisectLeft=Yi.left,d3.bisect=d3.bisectRight=Yi.right,d3.first=function(e,t){var n=0,r=e.length,i=e[0],s;arguments.length===1&&(t=d3.ascending);while(++n<r)t.call(e,i,s=e[n])>0&&(i=s);return i},d3.last=function(e,t){var n=0,r=e.length,i=e[0],s;arguments.length===1&&(t=d3.ascending);while(++n<r)t.call(e,i,s=e[n])<=0&&(i=s);return i},d3.nest=function(){function e(t,s){if(s>=i.length)return u?u.call(n,t):o?t.sort(o):t;var a=-1,f=t.length,l=i[s++],c,h,p=new r,d,v={};while(++a<f)(d=p.get(c=l(h=t[a])))?d.push(h):p.set(c,[h]);return p.forEach(function(t,n){v[t]=e(n,s)}),v}function t(e,n){if(n>=i.length)return e;var r=[],o=s[n++],u;for(u in e)r.push({key:u,values:t(e[u],n)});return o&&r.sort(function(e,t){return o(e.key,t.key)}),r}var n={},i=[],s=[],o,u;return n.map=function(t){return e(t,0)},n.entries=function(n){return t(e(n,0),0)},n.key=function(e){return i.push(e),n},n.sortKeys=function(e){return s[i.length-1]=e,n},n.sortValues=function(e){return o=e,n},n.rollup=function(e){return u=e,n},n},d3.keys=function(e){var t=[];for(var n in e)t.push(n);return t},d3.values=function(e){var t=[];for(var n in e)t.push(e[n]);return t},d3.entries=function(e){var t=[];for(var n in e)t.push({key:n,value:e[n]});return t},d3.permute=function(e,t){var n=[],r=-1,i=t.length;while(++r<i)n[r]=e[t[r]];return n},d3.merge=function(e){return Array.prototype.concat.apply([],e)},d3.split=function(e,t){var n=[],r=[],i,s=-1,o=e.length;arguments.length<2&&(t=c);while(++s<o)t.call(r,i=e[s],s)?r=[]:(r.length||n.push(r),r.push(i));return n},d3.range=function(e,t,n){arguments.length<3&&(n=1,arguments.length<2&&(t=e,e=0));if((t-e)/n===Infinity)throw new Error("infinite range");var r=[],i=p(Math.abs(n)),s=-1,o;e*=i,t*=i,n*=i;if(n<0)while((o=e+n*++s)>t)r.push(o/i);else while((o=e+n*++s)<t)r.push(o/i);return r},d3.requote=function(e){return e.replace(Zi,"\\$&")};var Zi=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(e,t){return t?Math.round(e*(t=Math.pow(10,t)))/t:Math.round(e)},d3.xhr=function(e,t,n){var r=new XMLHttpRequest;arguments.length<3?(n=t,t=null):t&&r.overrideMimeType&&r.overrideMimeType(t),r.open("GET",e,!0),t&&r.setRequestHeader("Accept",t),r.onreadystatechange=function(){if(r.readyState===4){var e=r.status;n(!e&&r.response||e>=200&&e<300||e===304?r:null)}},r.send(null)},d3.text=function(e,t,n){function r(e){n(e&&e.responseText)}arguments.length<3&&(n=t,t=null),d3.xhr(e,t,r)},d3.json=function(e,t){d3.text(e,"application/json",function(e){t(e?JSON.parse(e):null)})},d3.html=function(e,t){d3.text(e,"text/html",function(e){if(e!=null){var n=document.createRange();n.selectNode(document.body),e=n.createContextualFragment(e)}t(e)})},d3.xml=function(e,t,n){function r(e){n(e&&e.responseXML)}arguments.length<3&&(n=t,t=null),d3.xhr(e,t,r)};var es={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix:es,qualify:function(e){var t=e.indexOf(":"),n=e;return t>=0&&(n=e.substring(0,t),e=e.substring(t+1)),es.hasOwnProperty(n)?{space:es[n],local:e}:e}},d3.dispatch=function(){var e=new d,t=-1,n=arguments.length;while(++t<n)e[arguments[t]]=v(e);return e},d.prototype.on=function(e,t){var n=e.indexOf("."),r="";return n>0&&(r=e.substring(n+1),e=e.substring(0,n)),arguments.length<2?this[e].on(r):this[e].on(r,t)},d3.format=function(e){var t=ts.exec(e),n=t[1]||" ",r=t[3]||"",i=t[5],s=+t[6],o=t[7],u=t[8],a=t[9],f=1,l="",c=!1;u&&(u=+u.substring(1)),i&&(n="0",o&&(s-=Math.floor((s-1)/4)));switch(a){case"n":o=!0,a="g";break;case"%":f=100,l="%",a="f";break;case"p":f=100,l="%",a="r";break;case"d":c=!0,u=0;break;case"s":f=-1,a="r"}return a=="r"&&!u&&(a="g"),a=ns.get(a)||g,function(e){if(c&&e%1)return"";var t=e<0&&(e=-e)?"-":r;if(f<0){var h=d3.formatPrefix(e,u);e=h.scale(e),l=h.symbol}else e*=f;e=a(e,u);if(i){var p=e.length+t.length;p<s&&(e=(new Array(s-p+1)).join(n)+e),o&&(e=y(e)),e=t+e}else{o&&(e=y(e)),e=t+e;var p=e.length;p<s&&(e=(new Array(s-p+1)).join(n)+e)}return e+l}};var ts=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,ns=d3.map({g:function(e,t){return e.toPrecision(t)},e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},r:function(e,t){return d3.round(e,t=m(e,t)).toFixed(Math.max(0,Math.min(20,t)))}}),rs=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(b);d3.formatPrefix=function(e,t){var n=0;return e&&(e<0&&(e*=-1),t&&(e=d3.round(e,m(e,t))),n=1+Math.floor(1e-12+Math.log(e)/Math.LN10),n=Math.max(-24,Math.min(24,Math.floor((n<=0?n+1:n-1)/3)*3))),rs[8+n/3]};var is=T(2),ss=T(3),os=function(){return x},us=d3.map({linear:os,poly:T,quad:function(){return is},cubic:function(){return ss},sin:function(){return N},exp:function(){return C},circle:function(){return k},elastic:L,back:A,bounce:function(){return O}}),as=d3.map({"in":x,out:E,"in-out":S,"out-in":function(e){return S(E(e))}});d3.ease=function(e){var t=e.indexOf("-"),n=t>=0?e.substring(0,t):e,r=t>=0?e.substring(t+1):"in";return n=us.get(n)||os,r=as.get(r)||x,w(r(n.apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.transform=function(e){var t=document.createElementNS(d3.ns.prefix.svg,"g");return(d3.transform=function(e){t.setAttribute("transform",e);var n=t.transform.baseVal.consolidate();return new P(n?n.matrix:ls)})(e)},P.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var fs=180/Math.PI,ls={a:1,b:0,c:0,d:1,e:0,f:0};d3.interpolate=function(e,t){var n=d3.interpolators.length,r;while(--n>=0&&!(r=d3.interpolators[n](e,t)));return r},d3.interpolateNumber=function(e,t){return t-=e,function(n){return e+t*n}},d3.interpolateRound=function(e,t){return t-=e,function(n){return Math.round(e+t*n)}},d3.interpolateString=function(e,t){var n,r,i,s=0,o=0,u=[],a=[],f,l;cs.lastIndex=0;for(r=0;n=cs.exec(t);++r)n.index&&u.push(t.substring(s,o=n.index)),a.push({i:u.length,x:n[0]}),u.push(null),s=cs.lastIndex;s<t.length&&u.push(t.substring(s));for(r=0,f=a.length;(n=cs.exec(e))&&r<f;++r){l=a[r];if(l.x==n[0]){if(l.i)if(u[l.i+1]==null){u[l.i-1]+=l.x,u.splice(l.i,1);for(i=r+1;i<f;++i)a[i].i--}else{u[l.i-1]+=l.x+u[l.i+1],u.splice(l.i,2);for(i=r+1;i<f;++i)a[i].i-=2}else if(u[l.i+1]==null)u[l.i]=l.x;else{u[l.i]=l.x+u[l.i+1],u.splice(l.i+1,1);for(i=r+1;i<f;++i)a[i].i--}a.splice(r,1),f--,r--}else l.x=d3.interpolateNumber(parseFloat(n[0]),parseFloat(l.x))}while(r<f)l=a.pop(),u[l.i+1]==null?u[l.i]=l.x:(u[l.i]=l.x+u[l.i+1],u.splice(l.i+1,1)),f--;return u.length===1?u[0]==null?a[0].x:function(){return t}:function(e){for(r=0;r<f;++r)u[(l=a[r]).i]=l.x(e);return u.join("")}},d3.interpolateTransform=function(e,t){var n=[],r=[],i,s=d3.transform(e),o=d3.transform(t),u=s.translate,a=o.translate,f=s.rotate,l=o.rotate,c=s.skew,h=o.skew,p=s.scale,d=o.scale;return u[0]!=a[0]||u[1]!=a[1]?(n.push("translate(",null,",",null,")"),r.push({i:1,x:d3.interpolateNumber(u[0],a[0])},{i:3,x:d3.interpolateNumber(u[1],a[1])})):a[0]||a[1]?n.push("translate("+a+")"):n.push(""),f!=l?(f-l>180?l+=360:l-f>180&&(f+=360),r.push({i:n.push(n.pop()+"rotate(",null,")")-2,x:d3.interpolateNumber(f,l)})):l&&n.push(n.pop()+"rotate("+l+")"),c!=h?r.push({i:n.push(n.pop()+"skewX(",null,")")-2,x:d3.interpolateNumber(c,h)}):h&&n.push(n.pop()+"skewX("+h+")"),p[0]!=d[0]||p[1]!=d[1]?(i=n.push(n.pop()+"scale(",null,",",null,")"),r.push({i:i-4,x:d3.interpolateNumber(p[0],d[0])},{i:i-2,x:d3.interpolateNumber(p[1],d[1])})):(d[0]!=1||d[1]!=1)&&n.push(n.pop()+"scale("+d+")"),i=r.length,function(e){var t=-1,s;while(++t<i)n[(s=r[t]).i]=s.x(e);return n.join("")}},d3.interpolateRgb=function(e,t){e=d3.rgb(e),t=d3.rgb(t);var n=e.r,r=e.g,i=e.b,s=t.r-n,o=t.g-r,u=t.b-i;return function(e){return"#"+z(Math.round(n+s*e))+z(Math.round(r+o*e))+z(Math.round(i+u*e))}},d3.interpolateHsl=function(e,t){e=d3.hsl(e),t=d3.hsl(t);var n=e.h,r=e.s,i=e.l,s=t.h-n,o=t.s-r,u=t.l-i;return s>180?s-=360:s<-180&&(s+=360),function(e){return G(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateLab=function(e,t){e=d3.lab(e),t=d3.lab(t);var n=e.l,r=e.a,i=e.b,s=t.l-n,o=t.a-r,u=t.b-i;return function(e){return rt(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateHcl=function(e,t){e=d3.hcl(e),t=d3.hcl(t);var n=e.h,r=e.c,i=e.l,s=t.h-n,o=t.c-r,u=t.l-i;return s>180?s-=360:s<-180&&(s+=360),function(e){return et(n+s*e,r+o*e,i+u*e)+""}},d3.interpolateArray=function(e,t){var n=[],r=[],i=e.length,s=t.length,o=Math.min(e.length,t.length),u;for(u=0;u<o;++u)n.push(d3.interpolate(e[u],t[u]));for(;u<i;++u)r[u]=e[u];for(;u<s;++u)r[u]=t[u];return function(e){for(u=0;u<o;++u)r[u]=n[u](e);return r}},d3.interpolateObject=function(e,t){var n={},r={},i;for(i in e)i in t?n[i]=F(i)(e[i],t[i]):r[i]=e[i];for(i in t)i in e||(r[i]=t[i]);return function(e){for(i in n)r[i]=n[i](e);return r}};var cs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;d3.interpolators=[d3.interpolateObject,function(e,t){return t instanceof Array&&d3.interpolateArray(e,t)},function(e,t){return(typeof e=="string"||typeof t=="string")&&d3.interpolateString(e+"",t+"")},function(e,t){return(typeof t=="string"?hs.has(t)||/^(#|rgb\(|hsl\()/.test(t):t instanceof U||t instanceof Q)&&d3.interpolateRgb(e,t)},function(e,t){return!isNaN(e=+e)&&!isNaN(t=+t)&&d3.interpolateNumber(e,t)}],d3.rgb=function(e,t,n){return arguments.length===1?e instanceof U?R(e.r,e.g,e.b):W(""+e,R,G):R(~~e,~~t,~~n)},U.prototype.brighter=function(e){e=Math.pow(.7,arguments.length?e:1);var t=this.r,n=this.g,r=this.b,i=30;return!t&&!n&&!r?R(i,i,i):(t&&t<i&&(t=i),n&&n<i&&(n=i),r&&r<i&&(r=i),R(Math.min(255,Math.floor(t/e)),Math.min(255,Math.floor(n/e)),Math.min(255,Math.floor(r/e))))},U.prototype.darker=function(e){return e=Math.pow(.7,arguments.length?e:1),R(Math.floor(e*this.r),Math.floor(e*this.g),Math.floor(e*this.b))},U.prototype.hsl=function(){return X(this.r,this.g,this.b)},U.prototype.toString=function(){return"#"+z(this.r)+z(this.g)+z(this.b)};var hs=d3.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});hs.forEach(function(e,t){hs.set(e,W(t,R,G))}),d3.hsl=function(e,t,n){return arguments.length===1?e instanceof Q?K(e.h,e.s,e.l):W(""+e,X,K):K(+e,+t,+n)},Q.prototype.brighter=function(e){return e=Math.pow(.7,arguments.length?e:1),K(this.h,this.s,this.l/e)},Q.prototype.darker=function(e){return e=Math.pow(.7,arguments.length?e:1),K(this.h,this.s,e*this.l)},Q.prototype.rgb=function(){return G(this.h,this.s,this.l)},Q.prototype.toString=function(){return this.rgb().toString()},d3.hcl=function(e,t,n){return arguments.length===1?e instanceof Z?Y(e.h,e.c,e.l):e instanceof nt?it(e.l,e.a,e.b):it((e=V((e=d3.rgb(e)).r,e.g,e.b)).l,e.a,e.b):Y(+e,+t,+n)},Z.prototype.brighter=function(e){return Y(this.h,this.c,Math.min(100,this.l+ps*(arguments.length?e:1)))},Z.prototype.darker=function(e){return Y(this.h,this.c,Math.max(0,this.l-ps*(arguments.length?e:1)))},Z.prototype.rgb=function(){return et(this.h,this.c,this.l).rgb()},Z.prototype.toString=function(){return this.rgb()+""},d3.lab=function(e,t,n){return arguments.length===1?e instanceof nt?tt(e.l,e.a,e.b):e instanceof Z?et(e.l,e.c,e.h):V((e=d3.rgb(e)).r,e.g,e.b):tt(+e,+t,+n)};var ps=18,ds=.95047,vs=1,ms=1.08883;nt.prototype.brighter=function(e){return tt(Math.min(100,this.l+ps*(arguments.length?e:1)),this.a,this.b)},nt.prototype.darker=function(e){return tt(Math.max(0,this.l-ps*(arguments.length?e:1)),this.a,this.b)},nt.prototype.rgb=function(){return rt(this.l,this.a,this.b)},nt.prototype.toString=function(){return this.rgb()+""};var gs=function(e,t){return t.querySelector(e)},ys=function(e,t){return t.querySelectorAll(e)},bs=document.documentElement,ws=bs.matchesSelector||bs.webkitMatchesSelector||bs.mozMatchesSelector||bs.msMatchesSelector||bs.oMatchesSelector,Es=function(e,t){return ws.call(e,t)};typeof Sizzle=="function"&&(gs=function(e,t){return Sizzle(e,t)[0]||null},ys=function(e,t){return Sizzle.uniqueSort(Sizzle(e,t))},Es=Sizzle.matchesSelector);var Ss=[];d3.selection=function(){return xs},d3.selection.prototype=Ss,Ss.select=function(e){var t=[],n,r,i,s;typeof e!="function"&&(e=ft(e));for(var o=-1,u=this.length;++o<u;){t.push(n=[]),n.parentNode=(i=this[o]).parentNode;for(var a=-1,f=i.length;++a<f;)(s=i[a])?(n.push(r=e.call(s,s.__data__,a)),r&&"__data__"in s&&(r.__data__=s.__data__)):n.push(null)}return at(t)},Ss.selectAll=function(e){var t=[],n,r;typeof e!="function"&&(e=lt(e));for(var i=-1,s=this.length;++i<s;)for(var o=this[i],u=-1,a=o.length;++u<a;)if(r=o[u])t.push(n=$i(e.call(r,r.__data__,u))),n.parentNode=r;return at(t)},Ss.attr=function(e,t){if(arguments.length<2){if(typeof e=="string"){var n=this.node();return e=d3.ns.qualify(e),e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}for(t in e)this.each(ct(t,e[t]));return this}return this.each(ct(e,t))},Ss.classed=function(e,t){if(arguments.length<2){if(typeof e=="string"){var n=this.node(),r=(e=e.trim().split(/^|\s+/g)).length,i=-1;if(t=n.classList){while(++i<r)if(!t.contains(e[i]))return!1}else{t=n.className,t.baseVal!=null&&(t=t.baseVal);while(++i<r)if(!ht(e[i]).test(t))return!1}return!0}for(t in e)this.each(pt(t,e[t]));return this}return this.each(pt(e,t))},Ss.style=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t="");for(n in e)this.each(vt(n,e[n],t));return this}if(r<2)return window.getComputedStyle(this.node(),null).getPropertyValue(e);n=""}return this.each(vt(e,t,n))},Ss.property=function(e,t){if(arguments.length<2){if(typeof e=="string")return this.node()[e];for(t in e)this.each(mt(t,e[t]));return this}return this.each(mt(e,t))},Ss.text=function(e){return arguments.length<1?this.node().textContent:this.each(typeof e=="function"?function(){var t=e.apply(this,arguments);this.textContent=t==null?"":t}:e==null?function(){this.textContent=""}:function(){this.textContent=e})},Ss.html=function(e){return arguments.length<1?this.node().innerHTML:this.each(typeof e=="function"?function(){var t=e.apply(this,arguments);this.innerHTML=t==null?"":t}:e==null?function(){this.innerHTML=""}:function(){this.innerHTML=e})},Ss.append=function(e){function t(){return this.appendChild(document.createElementNS(this.namespaceURI,e))}function n(){return this.appendChild(document.createElementNS(e.space,e.local))}return e=d3.ns.qualify(e),this.select(e.local?n:t)},Ss.insert=function(e,t){function n(){return this.insertBefore(document.createElementNS(this.namespaceURI,e),gs(t,this))}function r(){return this.insertBefore(document.createElementNS(e.space,e.local),gs(t,this))}return e=d3.ns.qualify(e),this.select(e.local?r:n)},Ss.remove=function(){return this.each(function(){var e=this.parentNode;e&&e.removeChild(this)})},Ss.data=function(e,t){function n(e,n){var i,s=e.length,o=n.length,u=Math.min(s,o),c=Math.max(s,o),h=[],p=[],d=[],v,m;if(t){var g=new r,y=[],b,w=n.length;for(i=-1;++i<s;)b=t.call(v=e[i],v.__data__,i),g.has(b)?d[w++]=v:g.set(b,v),y.push(b);for(i=-1;++i<o;)b=t.call(n,m=n[i],i),g.has(b)?(h[i]=v=g.get(b),v.__data__=m,p[i]=d[i]=null):(p[i]=gt(m),h[i]=d[i]=null),g.remove(b);for(i=-1;++i<s;)g.has(y[i])&&(d[i]=e[i])}else{for(i=-1;++i<u;)v=e[i],m=n[i],v?(v.__data__=m,h[i]=v,p[i]=d[i]=null):(p[i]=gt(m),h[i]=d[i]=null);for(;i<o;++i)p[i]=gt(n[i]),h[i]=d[i]=null;for(;i<c;++i)d[i]=e[i],p[i]=h[i]=null}p.update=h,p.parentNode=h.parentNode=d.parentNode=e.parentNode,a.push(p),f.push(h),l.push(d)}var i=-1,s=this.length,o,u;if(!arguments.length){e=new Array(s=(o=this[0]).length);while(++i<s)if(u=o[i])e[i]=u.__data__;return e}var a=St([]),f=at([]),l=at([]);if(typeof e=="function")while(++i<s)n(o=this[i],e.call(o,o.parentNode.__data__,i));else while(++i<s)n(o=this[i],e);return f.enter=function(){return a},f.exit=function(){return l},f},Ss.datum=Ss.map=function(e){return arguments.length<1?this.property("__data__"):this.property("__data__",e)},Ss.filter=function(e){var t=[],n,r,i;typeof e!="function"&&(e=yt(e));for(var s=0,o=this.length;s<o;s++){t.push(n=[]),n.parentNode=(r=this[s]).parentNode;for(var u=0,a=r.length;u<a;u++)(i=r[u])&&e.call(i,i.__data__,u)&&n.push(i)}return at(t)},Ss.order=function(){for(var e=-1,t=this.length;++e<t;)for(var n=this[e],r=n.length-1,i=n[r],s;--r>=0;)if(s=n[r])i&&i!==s.nextSibling&&i.parentNode.insertBefore(s,i),i=s;return this},Ss.sort=function(e){e=bt.apply(this,arguments);for(var t=-1,n=this.length;++t<n;)this[t].sort(e);return this.order()},Ss.on=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t=!1);for(n in e)this.each(wt(n,e[n],t));return this}if(r<2)return(r=this.node()["__on"+e])&&r._;n=!1}return this.each(wt(e,t,n))},Ss.each=function(e){return Et(this,function(t,n,r){e.call(t,t.__data__,n,r)})},Ss.call=function(e){return e.apply(this,(arguments[0]=this,arguments)),this},Ss.empty=function(){return!this.node()},Ss.node=function(e){for(var t=0,n=this.length;t<n;t++)for(var r=this[t],i=0,s=r.length;i<s;i++){var o=r[i];if(o)return o}return null},Ss.transition=function(){var e=[],t,n;for(var r=-1,i=this.length;++r<i;){e.push(t=[]);for(var s=this[r],o=-1,u=s.length;++o<u;)t.push((n=s[o])?{node:n,delay:Ms,duration:_s}:null)}return xt(e,ks||++Cs,Date.now())};var xs=at([[document]]);xs[0].parentNode=bs,d3.select=function(e){return typeof e=="string"?xs.select(e):at([[e]])},d3.selectAll=function(e){return typeof e=="string"?xs.selectAll(e):at([$i(e)])};var Ts=[];d3.selection.enter=St,d3.selection.enter.prototype=Ts,Ts.append=Ss.append,Ts.insert=Ss.insert,Ts.empty=Ss.empty,Ts.node=Ss.node,Ts.select=function(e){var t=[],n,r,i,s,o;for(var u=-1,a=this.length;++u<a;){i=(s=this[u]).update,t.push(n=[]),n.parentNode=s.parentNode;for(var f=-1,l=s.length;++f<l;)(o=s[f])?(n.push(i[f]=r=e.call(s.parentNode,o.__data__,f)),r.__data__=o.__data__):n.push(null)}return at(t)};var Ns=[],Cs=0,ks=0,Ls=0,As=250,Os=d3.ease("cubic-in-out"),Ms=Ls,_s=As,Ds=Os;Ns.call=Ss.call,d3.transition=function(e){return arguments.length?ks?e.transition():e:xs.transition()},d3.transition.prototype=Ns,Ns.select=function(e){var t=[],n,r,i;typeof e!="function"&&(e=ft(e));for(var s=-1,o=this.length;++s<o;){t.push(n=[]);for(var u=this[s],a=-1,f=u.length;++a<f;)(i=u[a])&&(r=e.call(i.node,i.node.__data__,a))?("__data__"in i.node&&(r.__data__=i.node.__data__),n.push({node:r,delay:i.delay,duration:i.duration})):n.push(null)}return xt(t,this.id,this.time).ease(this.ease())},Ns.selectAll=function(e){var t=[],n,r,i;typeof e!="function"&&(e=lt(e));for(var s=-1,o=this.length;++s<o;)for(var u=this[s],a=-1,f=u.length;++a<f;)if(i=u[a]){r=e.call(i.node,i.node.__data__,a),t.push(n=[]);for(var l=-1,c=r.length;++l<c;)n.push({node:r[l],delay:i.delay,duration:i.duration})}return xt(t,this.id,this.time).ease(this.ease())},Ns.filter=function(e){var t=[],n,r,i;typeof e!="function"&&(e=yt(e));for(var s=0,o=this.length;s<o;s++){t.push(n=[]);for(var r=this[s],u=0,a=r.length;u<a;u++)(i=r[u])&&e.call(i.node,i.node.__data__,u)&&n.push(i)}return xt(t,this.id,this.time).ease(this.ease())},Ns.attr=function(e,t){if(arguments.length<2){for(t in e)this.attrTween(t,Ct(e[t],t));return this}return this.attrTween(e,Ct(t,e))},Ns.attrTween=function(e,t){function n(e,n){var r=t.call(this,e,n,this.getAttribute(i));return r===Ps?(this.removeAttribute(i),null):r&&function(e){this.setAttribute(i,r(e))}}function r(e,n){var r=t.call(this,e,n,this.getAttributeNS(i.space,i.local));return r===Ps?(this.removeAttributeNS(i.space,i.local),null):r&&function(e){this.setAttributeNS(i.space,i.local,r(e))}}var i=d3.ns.qualify(e);return this.tween("attr."+e,i.local?r:n)},Ns.style=function(e,t,n){var r=arguments.length;if(r<3){if(typeof e!="string"){r<2&&(t="");for(n in e)this.styleTween(n,Ct(e[n],n),t);return this}n=""}return this.styleTween(e,Ct(t,e),n)},Ns.styleTween=function(e,t,n){return arguments.length<3&&(n=""),this.tween("style."+e,function(r,i){var s=t.call(this,r,i,window.getComputedStyle(this,null).getPropertyValue(e));return s===Ps?(this.style.removeProperty(e),null):s&&function(t){this.style.setProperty(e,s(t),n)}})},Ns.text=function(e){return this.tween("text",function(t,n){this.textContent=typeof e=="function"?e.call(this,t,n):e})},Ns.remove=function(){return this.each("end.transition",function(){var e;!this.__transition__&&(e=this.parentNode)&&e.removeChild(this)})},Ns.delay=function(e){return Et(this,typeof e=="function"?function(t,n,r){t.delay=e.call(t=t.node,t.__data__,n,r)|0}:(e|=0,function(t){t.delay=e}))},Ns.duration=function(e){return Et(this,typeof e=="function"?function(t,n,r){t.duration=Math.max(1,e.call(t=t.node,t.__data__,n,r)|0)}:(e=Math.max(1,e|0),function(t){t.duration=e}))},Ns.transition=function(){return this.select(s)},d3.tween=function(e,t){function n(n,r,i){var s=e.call(this,n,r);return s==null?i!=""&&Ps:i!=s&&t(i,s)}function r(n,r,i){return i!=e&&t(i,e)}return typeof e=="function"?n:e==null?Nt:(e+="",r)};var Ps={},Hs=null,Bs,js;d3.timer=function(e,t,n){var r=!1,i,s=Hs;if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;n=Date.now()}while(s){if(s.callback===e){s.then=n,s.delay=t,r=!0;break}i=s,s=s.next}r||(Hs={callback:e,then:n,delay:t,next:Hs}),Bs||(js=clearTimeout(js),Bs=1,Fs(kt))},d3.timer.flush=function(){var e,t=Date.now(),n=Hs;while(n)e=t-n.then,n.delay||(n.flush=n.callback(e)),n=n.next;Lt()};var Fs=window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,17)};d3.mouse=function(e){return At(e,_())};var Is=/WebKit/.test(navigator.userAgent)?-1:0;d3.touches=function(e,t){return arguments.length<2&&(t=_().touches),t?$i(t).map(function(t){var n=At(e,t);return n.identifier=t.identifier,n}):[]},d3.scale={},d3.scale.linear=function(){return Ht([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return zt(d3.scale.linear(),Wt)};var qs=d3.format(".0e");Wt.pow=function(e){return Math.pow(10,e)},Xt.pow=function(e){return-Math.pow(10,-e)},d3.scale.pow=function(){return Vt(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return Jt([],{t:"range",a:[[]]})},d3.scale.category10=function(){return d3.scale.ordinal().range(Rs)},d3.scale.category20=function(){return d3.scale.ordinal().range(Us)},d3.scale.category20b=function(){return d3.scale.ordinal().range(zs)},d3.scale.category20c=function(){return d3.scale.ordinal().range(Ws)};var Rs=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Us=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],zs=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Ws=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return Kt([],[])},d3.scale.quantize=function(){return Qt(0,1,[0,1])},d3.scale.threshold=function(){return Gt([.5],[0,1])},d3.scale.identity=function(){return Yt([0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=t.apply(this,arguments),s=n.apply(this,arguments),o=r.apply(this,arguments)+Xs,u=i.apply(this,arguments)+Xs,a=(u<o&&(a=o,o=u,u=a),u-o),f=a<Math.PI?"0":"1",l=Math.cos(o),c=Math.sin(o),h=Math.cos(u),p=Math.sin(u);return a>=Vs?e?"M0,"+s+"A"+s+","+s+" 0 1,1 0,"+ -s+"A"+s+","+s+" 0 1,1 0,"+s+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+s+"A"+s+","+s+" 0 1,1 0,"+ -s+"A"+s+","+s+" 0 1,1 0,"+s+"Z":e?"M"+s*l+","+s*c+"A"+s+","+s+" 0 "+f+",1 "+s*h+","+s*p+"L"+e*h+","+e*p+"A"+e+","+e+" 0 "+f+",0 "+e*l+","+e*c+"Z":"M"+s*l+","+s*c+"A"+s+","+s+" 0 "+f+",1 "+s*h+","+s*p+"L0,0"+"Z"}var t=Zt,n=en,r=tn,i=nn;return e.innerRadius=function(n){return arguments.length?(t=u(n),e):t},e.outerRadius=function(t){return arguments.length?(n=u(t),e):n},e.startAngle=function(t){return arguments.length?(r=u(t),e):r},e.endAngle=function(t){return arguments.length?(i=u(t),e):i},e.centroid=function(){var e=(t.apply(this,arguments)+n.apply(this,arguments))/2,s=(r.apply(this,arguments)+i.apply(this,arguments))/2+Xs;return[Math.cos(s)*e,Math.sin(s)*e]},e};var Xs=-Math.PI/2,Vs=2*Math.PI-1e-6;d3.svg.line=function(){return rn(i)};var $s=d3.map({linear:un,"linear-closed":an,"step-before":fn,"step-after":ln,basis:mn,"basis-open":gn,"basis-closed":yn,bundle:bn,cardinal:pn,"cardinal-open":cn,"cardinal-closed":hn,monotone:Nn});$s.forEach(function(e,t){t.key=e,t.closed=/-closed$/.test(e)});var Js=[0,2/3,1/3,0],Ks=[0,1/3,2/3,0],Qs=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var e=rn(Cn);return e.radius=e.x,delete e.x,e.angle=e.y,delete e.y,e},fn.reverse=ln,ln.reverse=fn,d3.svg.area=function(){return kn(i)},d3.svg.area.radial=function(){var e=kn(Cn);return e.radius=e.x,delete e.x,e.innerRadius=e.x0,delete e.x0,e.outerRadius=e.x1,delete e.x1,e.angle=e.y,delete e.y,e.startAngle=e.y0,delete e.y0,e.endAngle=e.y1,delete e.y1,e},d3.svg.chord=function(){function e(e,u){var a=t(this,s,e,u),f=t(this,o,e,u);return"M"+a.p0+r(a.r,a.p1,a.a1-a.a0)+(n(a,f)?i(a.r,a.p1,a.r,a.p0):i(a.r,a.p1,f.r,f.p0)+r(f.r,f.p1,f.a1-f.a0)+i(f.r,f.p1,a.r,a.p0))+"Z"}function t(e,t,n,r){var i=t.call(e,n,r),s=a.call(e,i,r),o=f.call(e,i,r)+Xs,u=l.call(e,i,r)+Xs;return{r:s,a0:o,a1:u,p0:[s*Math.cos(o),s*Math.sin(o)],p1:[s*Math.cos(u),s*Math.sin(u)]}}function n(e,t){return e.a0==t.a0&&e.a1==t.a1}function r(e,t,n){return"A"+e+","+e+" 0 "+ +(n>Math.PI)+",1 "+t}function i(e,t,n,r){return"Q 0,0 "+r}var s=Ln,o=An,a=On,f=tn,l=nn;return e.radius=function(t){return arguments.length?(a=u(t),e):a},e.source=function(t){return arguments.length?(s=u(t),e):s},e.target=function(t){return arguments.length?(o=u(t),e):o},e.startAngle=function(t){return arguments.length?(f=u(t),e):f},e.endAngle=function(t){return arguments.length?(l=u(t),e):l},e},d3.svg.diagonal=function(){function e(e,i){var s=t.call(this,e,i),o=n.call(this,e,i),u=(s.y+o.y)/2,a=[s,{x:s.x,y:u},{x:o.x,y:u},o];return a=a.map(r),"M"+a[0]+"C"+a[1]+" "+a[2]+" "+a[3]}var t=Ln,n=An,r=Dn;return e.source=function(n){return arguments.length?(t=u(n),e):t},e.target=function(t){return arguments.length?(n=u(t),e):n},e.projection=function(t){return arguments.length?(r=t,e):r},e},d3.svg.diagonal.radial=function(){var e=d3.svg.diagonal(),t=Dn,n=e.projection;return e.projection=function(e){return arguments.length?n(Pn(t=e)):t},e},d3.svg.mouse=d3.mouse,d3.svg.touches=d3.touches,d3.svg.symbol=function(){function e(e,r){return(Gs.get(t.call(this,e,r))||jn)(n.call(this,e,r))}var t=Bn,n=Hn;return e.type=function(n){return arguments.length?(t=u(n),e):t},e.size=function(t){return arguments.length?(n=u(t),e):n},e};var Gs=d3.map({circle:jn,cross:function(e){var t=Math.sqrt(e/5)/2;return"M"+ -3*t+","+ -t+"H"+ -t+"V"+ -3*t+"H"+t+"V"+ -t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+ -t+"V"+t+"H"+ -3*t+"Z"},diamond:function(e){var t=Math.sqrt(e/(2*Zs)),n=t*Zs;return"M0,"+ -t+"L"+n+",0"+" 0,"+t+" "+ -n+",0"+"Z"},square:function(e){var t=Math.sqrt(e)/2;return"M"+ -t+","+ -t+"L"+t+","+ -t+" "+t+","+t+" "+ -t+","+t+"Z"},"triangle-down":function(e){var t=Math.sqrt(e/Ys),n=t*Ys/2;return"M0,"+n+"L"+t+","+ -n+" "+ -t+","+ -n+"Z"},"triangle-up":function(e){var t=Math.sqrt(e/Ys),n=t*Ys/2;return"M0,"+ -n+"L"+t+","+n+" "+ -t+","+n+"Z"}});d3.svg.symbolTypes=Gs.keys();var Ys=Math.sqrt(3),Zs=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function e(e){e.each(function(){var e=d3.select(this),c=a==null?t.ticks?t.ticks.apply(t,u):t.domain():a,h=f==null?t.tickFormat?t.tickFormat.apply(t,u):String:f,p=qn(t,c,l),d=e.selectAll(".minor").data(p,String),v=d.enter().insert("line","g").attr("class","tick minor").style("opacity",1e-6),m=d3.transition(d.exit()).style("opacity",1e-6).remove(),g=d3.transition(d).style("opacity",1),y=e.selectAll("g").data(c,String),b=y.enter().insert("g","path").style("opacity",1e-6),w=d3.transition(y.exit()).style("opacity",1e-6).remove(),E=d3.transition(y).style("opacity",1),S,x=_t(t),T=e.selectAll(".domain").data([0]),N=T.enter().append("path").attr("class","domain"),C=d3.transition(T),k=t.copy(),L=this.__chart__||k;this.__chart__=k,b.append("line").attr("class","tick"),b.append("text");var A=b.select("line"),O=E.select("line"),M=y.select("text").text(h),_=b.select("text"),D=E.select("text");switch(n){case"bottom":S=Fn,v.attr("y2",i),g.attr("x2",0).attr("y2",i),A.attr("y2",r),_.attr("y",Math.max(r,0)+o),O.attr("x2",0).attr("y2",r),D.attr("x",0).attr("y",Math.max(r,0)+o),M.attr("dy",".71em").attr("text-anchor","middle"),C.attr("d","M"+x[0]+","+s+"V0H"+x[1]+"V"+s);break;case"top":S=Fn,v.attr("y2",-i),g.attr("x2",0).attr("y2",-i),A.attr("y2",-r),_.attr("y",-(Math.max(r,0)+o)),O.attr("x2",0).attr("y2",-r),D.attr("x",0).attr("y",-(Math.max(r,0)+o)),M.attr("dy","0em").attr("text-anchor","middle"),C.attr("d","M"+x[0]+","+ -s+"V0H"+x[1]+"V"+ -s);break;case"left":S=In,v.attr("x2",-i),g.attr("x2",-i).attr("y2",0),A.attr("x2",-r),_.attr("x",-(Math.max(r,0)+o)),O.attr("x2",-r).attr("y2",0),D.attr("x",-(Math.max(r,0)+o)).attr("y",0),M.attr("dy",".32em").attr("text-anchor","end"),C.attr("d","M"+ -s+","+x[0]+"H0V"+x[1]+"H"+ -s);break;case"right":S=In,v.attr("x2",i),g.attr("x2",i).attr("y2",0),A.attr("x2",r),_.attr("x",Math.max(r,0)+o),O.attr("x2",r).attr("y2",0),D.attr("x",Math.max(r,0)+o).attr("y",0),M.attr("dy",".32em").attr("text-anchor","start"),C.attr("d","M"+s+","+x[0]+"H0V"+x[1]+"H"+s)}if(t.ticks)b.call(S,L),E.call(S,k),w.call(S,k),v.call(S,L),g.call(S,k),m.call(S,k);else{var P=k.rangeBand()/2,H=function(e){return k(e)+P};b.call(S,H),E.call(S,H)}})}var t=d3.scale.linear(),n="bottom",r=6,i=6,s=6,o=3,u=[10],a=null,f,l=0;return e.scale=function(n){return arguments.length?(t=n,e):t},e.orient=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return arguments.length?(u=arguments,e):u},e.tickValues=function(t){return arguments.length?(a=t,e):a},e.tickFormat=function(t){return arguments.length?(f=t,e):f},e.tickSize=function(t,n,o){if(!arguments.length)return r;var u=arguments.length-1;return r=+t,i=u>1?+n:r,s=u>0?+arguments[u]:r,e},e.tickPadding=function(t){return arguments.length?(o=+t,e):o},e.tickSubdivide=function(t){return arguments.length?(l=+t,e):l},e},d3.svg.brush=function(){function e(s){s.each(function(){var s=d3.select(this),f=s.selectAll(".background").data([0]),l=s.selectAll(".extent").data([0]),c=s.selectAll(".resize").data(a,String),h;s.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),f.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),l.enter().append("rect").attr("class","extent").style("cursor","move"),c.enter().append("g").attr("class",function(e){return"resize "+e}).style("cursor",function(e){return eo[e]}).append("rect").attr("x",function(e){return/[ew]$/.test(e)?-3:null}).attr("y",function(e){return/^[ns]/.test(e)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),c.style("display",e.empty()?"none":null),c.exit().remove(),o&&(h=_t(o),f.attr("x",h[0]).attr("width",h[1]-h[0]),n(s)),u&&(h=_t(u),f.attr("y",h[0]).attr("height",h[1]-h[0]),r(s)),t(s)})}function t(e){e.selectAll(".resize").attr("transform",function(e){return"translate("+f[+/e$/.test(e)][0]+","+f[+/^s/.test(e)][1]+")"})}function n(e){e.select(".extent").attr("x",f[0][0]),e.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1][0]-f[0][0])}function r(e){e.select(".extent").attr("y",f[0][1]),e.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1][1]-f[0][1])}function i(){function i(){var e=d3.event.changedTouches;return e?d3.touches(v,e)[0]:d3.mouse(v)}function a(){d3.event.keyCode==32&&(S||(x=null,T[0]-=f[1][0],T[1]-=f[1][1],S=2),M())}function c(){d3.event.keyCode==32&&S==2&&(T[0]+=f[1][0],T[1]+=f[1][1],S=0,M())}function h(){var e=i(),s=!1;N&&(e[0]+=N[0],e[1]+=N[1]),S||(d3.event.altKey?(x||(x=[(f[0][0]+f[1][0])/2,(f[0][1]+f[1][1])/2]),T[0]=f[+(e[0]<x[0])][0],T[1]=f[+(e[1]<x[1])][1]):x=null),w&&p(e,o,0)&&(n(y),s=!0),E&&p(e,u,1)&&(r(y),s=!0),s&&(t(y),g({type:"brush",mode:S?"move":"resize"}))}function p(e,t,n){var r=_t(t),i=r[0],s=r[1],o=T[n],u=f[1][n]-f[0][n],a,c;S&&(i-=o,s-=u+o),a=Math.max(i,Math.min(s,e[n])),S?c=(a+=o)+u:(x&&(o=Math.max(i,Math.min(s,2*x[n]-a))),o<a?(c=a,a=o):c=o);if(f[0][n]!==a||f[1][n]!==c)return l=null,f[0][n]=a,f[1][n]=c,!0}function d(){h(),y.style("pointer-events","all").selectAll(".resize").style("display",e.empty()?"none":null),d3.select("body").style("cursor",null),C.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),g({type:"brushend"}),M()}var v=this,m=d3.select(d3.event.target),g=s.of(v,arguments),y=d3.select(v),b=m.datum(),w=!/^(n|s)$/.test(b)&&o,E=!/^(e|w)$/.test(b)&&u,S=m.classed("extent"),x,T=i(),N,C=d3.select(window).on("mousemove.brush",h).on("mouseup.brush",d).on("touchmove.brush",h).on("touchend.brush",d).on("keydown.brush",a).on("keyup.brush",c);if(S)T[0]=f[0][0]-T[0],T[1]=f[0][1]-T[1];else if(b){var k=+/w$/.test(b),L=+/^n/.test(b);N=[f[1-k][0]-T[0],f[1-L][1]-T[1]],T[0]=f[k][0],T[1]=f[L][1]}else d3.event.altKey&&(x=T.slice());y.style("pointer-events","none").selectAll(".resize").style("display",null),d3.select("body").style("cursor",m.style("cursor")),g({type:"brushstart"}),h(),M()}var s=D(e,"brushstart","brush","brushend"),o=null,u=null,a=to[0],f=[[0,0],[0,0]],l;return e.x=function(t){return arguments.length?(o=t,a=to[!o<<1|!u],e):o},e.y=function(t){return arguments.length?(u=t,a=to[!o<<1|!u],e):u},e.extent=function(t){var n,r,i,s,a;return arguments.length?(l=[[0,0],[0,0]],o&&(n=t[0],r=t[1],u&&(n=n[0],r=r[0]),l[0][0]=n,l[1][0]=r,o.invert&&(n=o(n),r=o(r)),r<n&&(a=n,n=r,r=a),f[0][0]=n|0,f[1][0]=r|0),u&&(i=t[0],s=t[1],o&&(i=i[1],s=s[1]),l[0][1]=i,l[1][1]=s,u.invert&&(i=u(i),s=u(s)),s<i&&(a=i,i=s,s=a),f[0][1]=i|0,f[1][1]=s|0),e):(t=l||f,o&&(n=t[0][0],r=t[1][0],l||(n=f[0][0],r=f[1][0],o.invert&&(n=o.invert(n),r=o.invert(r)),r<n&&(a=n,n=r,r=a))),u&&(i=t[0][1],s=t[1][1],l||(i=f[0][1],s=f[1][1],u.invert&&(i=u.invert(i),s=u.invert(s)),s<i&&(a=i,i=s,s=a))),o&&u?[[n,i],[r,s]]:o?[n,r]:u&&[i,s])},e.clear=function(){return l=null,f[0][0]=f[0][1]=f[1][0]=f[1][1]=0,e},e.empty=function(){return o&&f[0][0]===f[1][0]||u&&f[0][1]===f[1][1]},d3.rebind(e,s,"on")};var eo={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},to=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];d3.behavior={},d3.behavior.drag=function(){function e(){this.on("mousedown.drag",t).on("touchstart.drag",t)}function t(){function e(){var e=o.parentNode;return f?d3.touches(e).filter(function(e){return e.identifier===f})[0]:d3.mouse(e)}function t(){if(!o.parentNode)return i();var t=e(),n=t[0]-c[0],r=t[1]-c[1];h|=n|r,c=t,M(),u({type:"drag",x:t[0]+l[0],y:t[1]+l[1],dx:n,dy:r})}function i(){u({type:"dragend"}),h&&(M(),d3.event.target===a&&p.on("click.drag",s,!0)),p.on(f?"touchmove.drag-"+f:"mousemove.drag",null).on(f?"touchend.drag-"+f:"mouseup.drag",null)}function s(){M(),p.on("click.drag",null)}var o=this,u=n.of(o,arguments),a=d3.event.target,f=d3.event.touches&&d3.event.changedTouches[0].identifier,l,c=e(),h=0,p=d3.select(window).on(f?"touchmove.drag-"+f:"mousemove.drag",t).on(f?"touchend.drag-"+f:"mouseup.drag",i,!0);r?(l=r.apply(o,arguments),l=[l.x-c[0],l.y-c[1]]):l=[0,0],f||M(),u({type:"dragstart"})}var n=D(e,"drag","dragstart","dragend"),r=null;return e.origin=function(t){return arguments.length?(r=t,e):r},d3.rebind(e,n,"on")},d3.behavior.zoom=function(){function e(){this.on("mousedown.zoom",o).on("mousewheel.zoom",u).on("mousemove.zoom",a).on("DOMMouseScroll.zoom",u).on("dblclick.zoom",f).on("touchstart.zoom",l).on("touchmove.zoom",c).on("touchend.zoom",l)}function t(e){return[(e[0]-h[0])/d,(e[1]-h[1])/d]}function n(e){return[e[0]*d+h[0],e[1]*d+h[1]]}function r(e){d=Math.max(m[0],Math.min(m[1],e))}function i(e,t){t=n(t),h[0]+=e[0]-t[0],h[1]+=e[1]-t[1]}function s(e){b&&b.domain(y.range().map(function(e){return(e-h[0])/d}).map(y.invert)),E&&E.domain(w.range().map(function(e){return(e-h[1])/d}).map(w.invert)),d3.event.preventDefault(),e({type:"zoom",scale:d,translate:h})}function o(){function e(){f=1,i(d3.mouse(o),c),s(u)}function n(){f&&M(),l.on("mousemove.zoom",null).on("mouseup.zoom",null),f&&d3.event.target===a&&l.on("click.zoom",r,!0)}function r(){M(),l.on("click.zoom",null)}var o=this,u=g.of(o,arguments),a=d3.event.target,f=0,l=d3.select(window).on("mousemove.zoom",e).on("mouseup.zoom",n),c=t(d3.mouse(o));window.focus(),M()}function u(){p||(p=t(d3.mouse(this))),r(Math.pow(2,Rn()*.002)*d),i(d3.mouse(this),p),s(g.of(this,arguments))}function a(){p=null}function f(){var e=d3.mouse(this),n=t(e);r(d3.event.shiftKey?d/2:d*2),i(e,n),s(g.of(this,arguments))}function l(){var e=d3.touches(this),n=Date.now();v=d,p={},e.forEach(function(e){p[e.identifier]=t(e)}),M();if(e.length===1){if(n-S<500){var o=e[0],u=t(e[0]);r(d*2),i(o,u),s(g.of(this,arguments))}S=n}}function c(){var e=d3.touches(this),t=e[0],n=p[t.identifier];if(o=e[1]){var o,u=p[o.identifier];t=[(t[0]+o[0])/2,(t[1]+o[1])/2],n=[(n[0]+u[0])/2,(n[1]+u[1])/2],r(d3.event.scale*v)}i(t,n),S=null,s(g.of(this,arguments))}var h=[0,0],p,d=1,v,m=ro,g=D(e,"zoom"),y,b,w,E,S;return e.translate=function(t){return arguments.length?(h=t.map(Number),e):h},e.scale=function(t){return arguments.length?(d=+t,e):d},e.scaleExtent=function(t){return arguments.length?(m=t==null?ro:t.map(Number),e):m},e.x=function(t){return arguments.length?(b=t,y=t.copy(),e):b},e.y=function(t){return arguments.length?(E=t,w=t.copy(),e):E},d3.rebind(e,g,"on")};var no,ro=[0,Infinity];d3.layout={},d3.layout.bundle=function(){return function(e){var t=[],n=-1,r=e.length;while(++n<r)t.push(Un(e[n]));return t}},d3.layout.chord=function(){function e(){var e={},n=[],c=d3.range(o),h=[],p,d,v,m,g;r=[],i=[],p=0,m=-1;while(++m<o){d=0,g=-1;while(++g<o)d+=s[m][g];n.push(d),h.push(d3.range(o)),p+=d}a&&c.sort(function(e,t){return a(n[e],n[t])}),f&&h.forEach(function(e,t){e.sort(function(e,n){return f(s[t][e],s[t][n])})}),p=(2*Math.PI-u*o)/p,d=0,m=-1;while(++m<o){v=d,g=-1;while(++g<o){var y=c[m],b=h[y][g],w=s[y][b],E=d,S=d+=w*p;e[y+"-"+b]={index:y,subindex:b,startAngle:E,endAngle:S,value:w}}i[y]={index:y,startAngle:v,endAngle:d,value:(d-v)/p},d+=u}m=-1;while(++m<o){g=m-1;while(++g<o){var x=e[m+"-"+g],T=e[g+"-"+m];(x.value||T.value)&&r.push(x.value<T.value?{source:T,target:x}:{source:x,target:T})}}l&&t()}function t(){r.sort(function(e,t){return l((e.source.value+e.target.value)/2,(t.source.value+t.target.value)/2)})}var n={},r,i,s,o,u=0,a,f,l;return n.matrix=function(e){return arguments.length?(o=(s=e)&&s.length,r=i=null,n):s},n.padding=function(e){return arguments.length?(u=e,r=i=null,n):u},n.sortGroups=function(e){return arguments.length?(a=e,r=i=null,n):a},n.sortSubgroups=function(e){return arguments.length?(f=e,r=null,n):f},n.sortChords=function(e){return arguments.length?(l=e,r&&t(),n):l},n.chords=function(){return r||e(),r},n.groups=function(){return i||e(),i},n},d3.layout.force=function(){function e(e){return function(t,n,r,i,s){if(t.point!==e){var o=t.cx-e.x,u=t.cy-e.y,a=1/Math.sqrt(o*o+u*u);if((i-n)*a<d){var f=t.charge*a*a;return e.px-=o*f,e.py-=u*f,!0}if(t.point&&isFinite(a)){var f=t.pointCharge*a*a;e.px-=o*f,e.py-=u*f}}return!t.charge}}function t(e){e.px=d3.event.x,e.py=d3.event.y,n.resume()}var n={},r=d3.dispatch("start","tick","end"),s=[1,1],o,a,f=.9,l=Qn,c=Gn,h=-30,p=.1,d=.8,v,m=[],g=[],y,b,w;return n.tick=function(){if((a*=.99)<.005)return r.end({type:"end",alpha:a=0}),!0;var t=m.length,n=g.length,i,o,u,l,c,d,v,E,S;for(o=0;o<n;++o){u=g[o],l=u.source,c=u.target,E=c.x-l.x,S=c.y-l.y;if(d=E*E+S*S)d=a*b[o]*((d=Math.sqrt(d))-y[o])/d,E*=d,S*=d,c.x-=E*(v=l.weight/(c.weight+l.weight)),c.y-=S*v,l.x+=E*(v=1-v),l.y+=S*v}if(v=a*p){E=s[0]/2,S=s[1]/2,o=-1;if(v)while(++o<t)u=m[o],u.x+=(E-u.x)*v,u.y+=(S-u.y)*v}if(h){Kn(i=d3.geom.quadtree(m),a,w),o=-1;while(++o<t)(u=m[o]).fixed||i.visit(e(u))}o=-1;while(++o<t)u=m[o],u.fixed?(u.x=u.px,u.y=u.py):(u.x-=(u.px-(u.px=u.x))*f,u.y-=(u.py-(u.py=u.y))*f);r.tick({type:"tick",alpha:a})},n.nodes=function(e){return arguments.length?(m=e,n):m},n.links=function(e){return arguments.length?(g=e,n):g},n.size=function(e){return arguments.length?(s=e,n):s},n.linkDistance=function(e){return arguments.length?(l=u(e),n):l},n.distance=n.linkDistance,n.linkStrength=function(e){return arguments.length?(c=u(e),n):c},n.friction=function(e){return arguments.length?(f=e,n):f},n.charge=function(e){return arguments.length?(h=typeof e=="function"?e:+e,n):h},n.gravity=function(e){return arguments.length?(p=e,n):p},n.theta=function(e){return arguments.length?(d=e,n):d},n.alpha=function(e){return arguments.length?(a?e>0?a=e:a=0:e>0&&(r.start({type:"start",alpha:a=e}),d3.timer(n.tick)),n):a},n.start=function(){function e(e,n){var i=t(r),s=-1,o=i.length,u;while(++s<o)if(!isNaN(u=i[s][e]))return u;return Math.random()*n}function t(){if(!p){p=[];for(i=0;i<o;++i)p[i]=[];for(i=0;i<u;++i){var e=g[i];p[e.source.index].push(e.target),p[e.target.index].push(e.source)}}return p[r]}var r,i,o=m.length,u=g.length,a=s[0],f=s[1],p,d;for(r=0;r<o;++r)(d=m[r]).index=r,d.weight=0;y=[],b=[];for(r=0;r<u;++r)d=g[r],typeof d.source=="number"&&(d.source=m[d.source]),typeof d.target=="number"&&(d.target=m[d.target]),y[r]=l.call(this,d,r),b[r]=c.call(this,d,r),++d.source.weight,++d.target.weight;for(r=0;r<o;++r)d=m[r],isNaN(d.x)&&(d.x=e("x",a)),isNaN(d.y)&&(d.y=e("y",f)),isNaN(d.px)&&(d.px=d.x),isNaN(d.py)&&(d.py=d.y);w=[];if(typeof h=="function")for(r=0;r<o;++r)w[r]=+h.call(this,m[r],r);else for(r=0;r<o;++r)w[r]=h;return n.resume()},n.resume=function(){return n.alpha(.1)},n.stop=function(){return n.alpha(0)},n.drag=function(){o||(o=d3.behavior.drag().origin(i).on("dragstart",Xn).on("drag",t).on("dragend",Vn)),this.on("mouseover.force",$n).on("mouseout.force",Jn).call(o)},d3.rebind(n,r,"on")},d3.layout.partition=function(){function e(t,n,r,i){var s=t.children;t.x=n,t.y=t.depth*i,t.dx=r,t.dy=i;if(s&&(u=s.length)){var o=-1,u,a,f;r=t.value?r/t.value:0;while(++o<u)e(a=s[o],n,f=a.value*r,i),n+=f}}function t(e){var n=e.children,r=0;if(n&&(s=n.length)){var i=-1,s;while(++i<s)r=Math.max(r,t(n[i]))}return 1+r}function n(n,s){var o=r.call(this,n,s);return e(o[0],0,i[0],i[1]/t(o[0])),o}var r=d3.layout.hierarchy(),i=[1,1];return n.size=function(e){return arguments.length?(i=e,n):i},fr(n,r)},d3.layout.pie=function(){function e(s,o){var u=s.map(function(n,r){return+t.call(e,n,r)}),a=+(typeof r=="function"?r.apply(this,arguments):r),f=((typeof i=="function"?i.apply(this,arguments):i)-r)/d3.sum(u),l=d3.range(s.length);n!=null&&l.sort(n===io?function(e,t){return u[t]-u[e]}:function(e,t){return n(s[e],s[t])});var c=[];return l.forEach(function(e){var t;c[e]={data:s[e],value:t=u[e],startAngle:a,endAngle:a+=t*f}}),c}var t=Number,n=io,r=0,i=2*Math.PI;return e.value=function(n){return arguments.length?(t=n,e):t},e.sort=function(t){return arguments.length?(n=t,e):n},e.startAngle=function(t){return arguments.length?(r=t,e):r},e.endAngle=function(t){return arguments.length?(i=t,e):i},e};var io={};d3.layout.stack=function(){function e(i,a){var f=i.map(function(n,r){return t.call(e,n,r)}),l=f.map(function(t,n){return t.map(function(t,n){return[o.call(e,t,n),u.call(e,t,n)]})}),c=n.call(e,l,a);f=d3.permute(f,c),l=d3.permute(l,c);var h=r.call(e,l,a),p=f.length,d=f[0].length,v,m,g;for(m=0;m<d;++m){s.call(e,f[0][m],g=h[m],l[0][m][1]);for(v=1;v<p;++v)s.call(e,f[v][m],g+=l[v-1][m][1],l[v][m][1])}return i}var t=i,n=tr,r=nr,s=er,o=Yn,u=Zn;return e.values=function(n){return arguments.length?(t=n,e):t},e.order=function(t){return arguments.length?(n=typeof t=="function"?t:so.get(t)||tr,e):n},e.offset=function(t){return arguments.length?(r=typeof t=="function"?t:oo.get(t)||nr,e):r},e.x=function(t){return arguments.length?(o=t,e):o},e.y=function(t){return arguments.length?(u=t,e):u},e.out=function(t){return arguments.length?(s=t,e):s},e};var so=d3.map({"inside-out":function(e){var t=e.length,n,r,i=e.map(rr),s=e.map(ir),o=d3.range(t).sort(function(e,t){return i[e]-i[t]}),u=0,a=0,f=[],l=[];for(n=0;n<t;++n)r=o[n],u<a?(u+=s[r],f.push(r)):(a+=s[r],l.push(r));return l.reverse().concat(f)},reverse:function(e){return d3.range(e.length).reverse()},"default":tr}),oo=d3.map({silhouette:function(e){var t=e.length,n=e[0].length,r=[],i=0,s,o,u,a=[];for(o=0;o<n;++o){for(s=0,u=0;s<t;s++)u+=e[s][o][1];u>i&&(i=u),r.push(u)}for(o=0;o<n;++o)a[o]=(i-r[o])/2;return a},wiggle:function(e){var t=e.length,n=e[0],r=n.length,i=0,s,o,u,a,f,l,c,h,p,d=[];d[0]=h=p=0;for(o=1;o<r;++o){for(s=0,a=0;s<t;++s)a+=e[s][o][1];for(s=0,f=0,c=n[o][0]-n[o-1][0];s<t;++s){for(u=0,l=(e[s][o][1]-e[s][o-1][1])/(2*c);u<s;++u)l+=(e[u][o][1]-e[u][o-1][1])/c;f+=l*e[s][o][1]}d[o]=h-=a?f/a*c:0,h<p&&(p=h)}for(o=0;o<r;++o)d[o]-=p;return d},expand:function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,u=[];for(s=0;s<n;++s){for(i=0,o=0;i<t;i++)o+=e[i][s][1];if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)u[s]=0;return u},zero:nr});d3.layout.histogram=function(){function e(e,s){var o=[],u=e.map(n,this),a=r.call(this,u,s),f=i.call(this,a,u,s),l,s=-1,c=u.length,h=f.length-1,p=t?1:1/c,d;while(++s<h)l=o[s]=[],l.dx=f[s+1]-(l.x=f[s]),l.y=0;if(h>0){s=-1;while(++s<c)d=u[s],d>=a[0]&&d<=a[1]&&(l=o[d3.bisect(f,d,1,h)-1],l.y+=p,l.push(e[s]))}return o}var t=!0,n=Number,r=ar,i=or;return e.value=function(t){return arguments.length?(n=t,e):n},e.range=function(t){return arguments.length?(r=u(t),e):r},e.bins=function(t){return arguments.length?(i=typeof t=="number"?function(e){return ur(e,t)}:u(t),e):i},e.frequency=function(n){return arguments.length?(t=!!n,e):t},e},d3.layout.hierarchy=function(){function e(t,o,u){var a=i.call(n,t,o),f=uo?t:{data:t};f.depth=o,u.push(f);if(a&&(c=a.length)){var l=-1,c,h=f.children=[],p=0,d=o+1,v;while(++l<c)v=e(a[l],d,u),v.parent=f,h.push(v),p+=v.value;r&&h.sort(r),s&&(f.value=p)}else s&&(f.value=+s.call(n,t,o)||0);return f}function t(e,r){var i=e.children,o=0;if(i&&(a=i.length)){var u=-1,a,f=r+1;while(++u<a)o+=t(i[u],f)}else s&&(o=+s.call(n,uo?e:e.data,r)||0);return s&&(e.value=o),o}function n(t){var n=[];return e(t,0,n),n}var r=hr,i=lr,s=cr;return n.sort=function(e){return arguments.length?(r=e,n):r},n.children=function(e){return arguments.length?(i=e,n):i},n.value=function(e){return arguments.length?(s=e,n):s},n.revalue=function(e){return t(e,0),e},n};var uo=!1;d3.layout.pack=function(){function e(e,i){var s=t.call(this,e,i),o=s[0];o.x=0,o.y=0,Pr(o,function(e){e.r=Math.sqrt(e.value)}),Pr(o,yr);var u=r[0],a=r[1],f=Math.max(2*o.r/u,2*o.r/a);if(n>0){var l=n*f/2;Pr(o,function(e){e.r+=l}),Pr(o,yr),Pr(o,function(e){e.r-=l}),f=Math.max(2*o.r/u,2*o.r/a)}return Er(o,u/2,a/2,1/f),s}var t=d3.layout.hierarchy().sort(dr),n=0,r=[1,1];return e.size=function(t){return arguments.length?(r=t,e):r},e.padding=function(t){return arguments.length?(n=+t,e):n},fr(e,t)},d3.layout.cluster=function(){function e(e,i){var s=t.call(this,e,i),o=s[0],u,a=0,f,l;Pr(o,function(e){var t=e.children;t&&t.length?(e.x=Tr(t),e.y=xr(t)):(e.x=u?a+=n(e,u):0,e.y=0,u=e)});var c=Nr(o),h=Cr(o),p=c.x-n(c,h)/2,d=h.x+n(h,c)/2;return Pr(o,function(e){e.x=(e.x-p)/(d-p)*r[0],e.y=(1-(o.y?e.y/o.y:1))*r[1]}),s}var t=d3.layout.hierarchy().sort(null).value(null),n=kr,r=[1,1];return e.separation=function(t){return arguments.length?(n=t,e):n},e.size=function(t){return arguments.length?(r=t,e):r},fr(e,t)},d3.layout.tree=function(){function e(e,i){function s(e,t){var r=e.children,i=e._tree;if(r&&(o=r.length)){var o,a=r[0],f,l=a,c,h=-1;while(++h<o)c=r[h],s(c,f),l=u(c,f,l),f=c;Hr(e);var p=.5*(a._tree.prelim+c._tree.prelim);t?(i.prelim=t._tree.prelim+n(e,t),i.mod=i.prelim-p):i.prelim=p}else t&&(i.prelim=t._tree.prelim+n(e,t))}function o(e,t){e.x=e._tree.prelim+t;var n=e.children;if(n&&(i=n.length)){var r=-1,i;t+=e._tree.mod;while(++r<i)o(n[r],t)}}function u(e,t,r){if(t){var i=e,s=e,o=t,u=e.parent.children[0],a=i._tree.mod,f=s._tree.mod,l=o._tree.mod,c=u._tree.mod,h;while(o=Ar(o),i=Lr(i),o&&i)u=Lr(u),s=Ar(s),s._tree.ancestor=e,h=o._tree.prelim+l-i._tree.prelim-a+n(o,i),h>0&&(Br(jr(o,e,r),e,h),a+=h,f+=h),l+=o._tree.mod,a+=i._tree.mod,c+=u._tree.mod,f+=s._tree.mod;o&&!Ar(s)&&(s._tree.thread=o,s._tree.mod+=l-f),i&&!Lr(u)&&(u._tree.thread=i,u._tree.mod+=a-c,r=e)}return r}var a=t.call(this,e,i),f=a[0];Pr(f,function(e,t){e._tree={ancestor:e,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),s(f),o(f,-f._tree.prelim);var l=Or(f,_r),c=Or(f,Mr),h=Or(f,Dr),p=l.x-n(l,c)/2,d=c.x+n(c,l)/2,v=h.depth||1;return Pr(f,function(e){e.x=(e.x-p)/(d-p)*r[0],e.y=e.depth/v*r[1],delete e._tree}),a}var t=d3.layout.hierarchy().sort(null).value(null),n=kr,r=[1,1];return e.separation=function(t){return arguments.length?(n=t,e):n},e.size=function(t){return arguments.length?(r=t,e):r},fr(e,t)},d3.layout.treemap=function(){function e(e,t){var n=-1,r=e.length,i,s;while(++n<r)s=(i=e[n]).value*(t<0?0:t),i.area=isNaN(s)||s<=0?0:s}function t(n){var s=n.children;if(s&&s.length){var o=l(n),u=[],a=s.slice(),f,c=Infinity,h,p=Math.min(o.dx,o.dy),d;e(a,o.dx*o.dy/n.value),u.area=0;while((d=a.length)>0)u.push(f=a[d-1]),u.area+=f.area,(h=r(u,p))<=c?(a.pop(),c=h):(u.area-=u.pop().area,i(u,p,o,!1),p=Math.min(o.dx,o.dy),u.length=u.area=0,c=Infinity);u.length&&(i(u,p,o,!0),u.length=u.area=0),s.forEach(t)}}function n(t){var r=t.children;if(r&&r.length){var s=l(t),o=r.slice(),u,a=[];e(o,s.dx*s.dy/t.value),a.area=0;while(u=o.pop())a.push(u),a.area+=u.area,u.z!=null&&(i(a,u.z?s.dx:s.dy,s,!o.length),a.length=a.area=0);r.forEach(n)}}function r(e,t){var n=e.area,r,i=0,s=Infinity,o=-1,u=e.length;while(++o<u){if(!(r=e[o].area))continue;r<s&&(s=r),r>i&&(i=r)}return n*=n,t*=t,n?Math.max(t*i*p/n,n/(t*s*p)):Infinity}function i(e,t,n,r){var i=-1,s=e.length,o=n.x,a=n.y,f=t?u(e.area/t):0,l;if(t==n.dx){if(r||f>n.dy)f=n.dy;while(++i<s)l=e[i],l.x=o,l.y=a,l.dy=f,o+=l.dx=Math.min(n.x+n.dx-o,f?u(l.area/f):0);l.z=!0,l.dx+=n.x+n.dx-o,n.y+=f,n.dy-=f}else{if(r||f>n.dx)f=n.dx;while(++i<s)l=e[i],l.x=o,l.y=a,l.dx=f,a+=l.dy=Math.min(n.y+n.dy-a,f?u(l.area/f):0);l.z=!1,l.dy+=n.y+n.dy-a,n.x+=f,n.dx-=f}}function s(r){var i=h||o(r),s=i[0];return s.x=0,s.y=0,s.dx=a[0],s.dy=a[1],h&&o.revalue(s),e([s],s.dx*s.dy/s.value),(h?n:t)(s),c&&(h=i),i}var o=d3.layout.hierarchy(),u=Math.round,a=[1,1],f=null,l=Fr,c=!1,h,p=.5*(1+Math.sqrt(5));return s.size=function(e){return arguments.length?(a=e,s):a},s.padding=function(e){function t(t){var n=e.call(s,t,t.depth);return n==null?Fr(t):Ir(t,typeof n=="number"?[n,n,n,n]:n)}function n(t){return Ir(t,e)}if(!arguments.length)return f;var r;return l=(f=e)==null?Fr:(r=typeof e)==="function"?t:r==="number"?(e=[e,e,e,e],n):n,s},s.round=function(e){return arguments.length?(u=e?Math.round:Number,s):u!=Number},s.sticky=function(e){return arguments.length?(c=e,h=null,s):c},s.ratio=function(e){return arguments.length?(p=e,s):p},fr(s,o)},d3.csv=qr(",","text/csv"),d3.tsv=qr("	","text/tab-separated-values"),d3.geo={};var ao=Math.PI/180;d3.geo.azimuthal=function(){function e(e){var n=e[0]*ao-s,o=e[1]*ao,f=Math.cos(n),l=Math.sin(n),c=Math.cos(o),h=Math.sin(o),p=t!=="orthographic"?a*h+u*c*f:null,d,v=t==="stereographic"?1/(1+p):t==="gnomonic"?1/p:t==="equidistant"?(d=Math.acos(p),d?d/Math.sin(d):0):t==="equalarea"?Math.sqrt(2/(1+p)):1,m=v*c*l,g=v*(a*c*f-u*h);return[r*m+i[0],r*g+i[1]]}var t="orthographic",n,r=200,i=[480,250],s,o,u,a;return e.invert=function(e){var n=(e[0]-i[0])/r,o=(e[1]-i[1])/r,f=Math.sqrt(n*n+o*o),l=t==="stereographic"?2*Math.atan(f):t==="gnomonic"?Math.atan(f):t==="equidistant"?f:t==="equalarea"?2*Math.asin(.5*f):Math.asin(f),c=Math.sin(l),h=Math.cos(l);return[(s+Math.atan2(n*c,f*u*h+o*a*c))/ao,Math.asin(h*a-(f?o*c*u/f:0))/ao]},e.mode=function(n){return arguments.length?(t=n+"",e):t},e.origin=function(t){return arguments.length?(n=t,s=n[0]*ao,o=n[1]*ao,u=Math.cos(o),a=Math.sin(o),e):n},e.scale=function(t){return arguments.length?(r=+t,e):r},e.translate=function(t){return arguments.length?(i=[+t[0],+t[1]],e):i},e.origin([0,0])},d3.geo.albers=function(){function e(e){var t=u*(ao*e[0]-o),n=Math.sqrt(a-2*u*Math.sin(ao*e[1]))/u;return[i*n*Math.sin(t)+s[0],i*(n*Math.cos(t)-f)+s[1]]}function t(){var t=ao*r[0],i=ao*r[1],s=ao*n[1],l=Math.sin(t),c=Math.cos(t);return o=ao*n[0],u=.5*(l+Math.sin(i)),a=c*c+2*u*l,f=Math.sqrt(a-2*u*Math.sin(s))/u,e}var n=[-98,38],r=[29.5,45.5],i=1e3,s=[480,250],o,u,a,f;return e.invert=function(e){var t=(e[0]-s[0])/i,n=(e[1]-s[1])/i,r=f+n,l=Math.atan2(t,r),c=Math.sqrt(t*t+r*r);return[(o+l/u)/ao,Math.asin((a-c*c*u*u)/(2*u))/ao]},e.origin=function(e){return arguments.length?(n=[+e[0],+e[1]],t()):n},e.parallels=function(e){return arguments.length?(r=[+e[0],+e[1]],t()):r},e.scale=function(t){return arguments.length?(i=+t,e):i},e.translate=function(t){return arguments.length?(s=[+t[0],+t[1]],e):s},t()},d3.geo.albersUsa=function(){function e(e){var s=e[0],o=e[1];return(o>50?n:s<-140?r:o<21?i:t)(e)}var t=d3.geo.albers(),n=d3.geo.albers().origin([-160,60]).parallels([55,65]),r=d3.geo.albers().origin([-160,20]).parallels([8,18]),i=d3.geo.albers().origin([-60,10]).parallels([8,18]);return e.scale=function(s){return arguments.length?(t.scale(s),n.scale(s*.6),r.scale(s),i.scale(s*1.5),e.translate(t.translate())):t.scale()},e.translate=function(s){if(!arguments.length)return t.translate();var o=t.scale()/1e3,u=s[0],a=s[1];return t.translate(s),n.translate([u-400*o,a+170*o]),r.translate([u-190*o,a+200*o]),i.translate([u+580*o,a+430*o]),e},e.scale(t.scale())},d3.geo.bonne=function(){function e(e){var u=e[0]*ao-r,a=e[1]*ao-i;if(s){var f=o+s-a,l=u*Math.cos(a)/f;u=f*Math.sin(l),a=f*Math.cos(l)-o}else u*=Math.cos(a),a*=-1;return[t*u+n[0],t*a+n[1]]}var t=200,n=[480,250],r,i,s,o;return e.invert=function(e){var i=(e[0]-n[0])/t,u=(e[1]-n[1])/t;if(s){var a=o+u,f=Math.sqrt(i*i+a*a);u=o+s-f,i=r+f*Math.atan2(i,a)/Math.cos(u)}else u*=-1,i/=Math.cos(u);return[i/ao,u/ao]},e.parallel=function(t){return arguments.length?(o=1/Math.tan
(s=t*ao),e):s/ao},e.origin=function(t){return arguments.length?(r=t[0]*ao,i=t[1]*ao,e):[r/ao,i/ao]},e.scale=function(n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e.origin([0,0]).parallel(45)},d3.geo.equirectangular=function(){function e(e){var r=e[0]/360,i=-e[1]/360;return[t*r+n[0],t*i+n[1]]}var t=500,n=[480,250];return e.invert=function(e){var r=(e[0]-n[0])/t,i=(e[1]-n[1])/t;return[360*r,-360*i]},e.scale=function(n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e},d3.geo.mercator=function(){function e(e){var r=e[0]/360,i=-(Math.log(Math.tan(Math.PI/4+e[1]*ao/2))/ao)/360;return[t*r+n[0],t*Math.max(-0.5,Math.min(.5,i))+n[1]]}var t=500,n=[480,250];return e.invert=function(e){var r=(e[0]-n[0])/t,i=(e[1]-n[1])/t;return[360*r,2*Math.atan(Math.exp(-360*i*ao))/ao-90]},e.scale=function(n){return arguments.length?(t=+n,e):t},e.translate=function(t){return arguments.length?(n=[+t[0],+t[1]],e):n},e},d3.geo.path=function(){function e(e,t){typeof s=="function"&&(o=Ur(s.apply(this,arguments))),f(e);var n=a.length?a.join(""):null;return a=[],n}function t(e){return u(e).join(",")}function n(e){var t=i(e[0]),n=0,r=e.length;while(++n<r)t-=i(e[n]);return t}function r(e){var t=d3.geom.polygon(e[0].map(u)),n=t.area(),r=t.centroid(n<0?(n*=-1,1):-1),i=r[0],s=r[1],o=n,a=0,f=e.length;while(++a<f)t=d3.geom.polygon(e[a].map(u)),n=t.area(),r=t.centroid(n<0?(n*=-1,1):-1),i-=r[0],s-=r[1],o-=n;return[i,s,6*o]}function i(e){return Math.abs(d3.geom.polygon(e.map(u)).area())}var s=4.5,o=Ur(s),u=d3.geo.albersUsa(),a=[],f=Rr({FeatureCollection:function(e){var t=e.features,n=-1,r=t.length;while(++n<r)a.push(f(t[n].geometry))},Feature:function(e){f(e.geometry)},Point:function(e){a.push("M",t(e.coordinates),o)},MultiPoint:function(e){var n=e.coordinates,r=-1,i=n.length;while(++r<i)a.push("M",t(n[r]),o)},LineString:function(e){var n=e.coordinates,r=-1,i=n.length;a.push("M");while(++r<i)a.push(t(n[r]),"L");a.pop()},MultiLineString:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u;while(++r<i){s=n[r],o=-1,u=s.length,a.push("M");while(++o<u)a.push(t(s[o]),"L");a.pop()}},Polygon:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u;while(++r<i){s=n[r],o=-1;if((u=s.length-1)>0){a.push("M");while(++o<u)a.push(t(s[o]),"L");a[a.length-1]="Z"}}},MultiPolygon:function(e){var n=e.coordinates,r=-1,i=n.length,s,o,u,f,l,c;while(++r<i){s=n[r],o=-1,u=s.length;while(++o<u){f=s[o],l=-1;if((c=f.length-1)>0){a.push("M");while(++l<c)a.push(t(f[l]),"L");a[a.length-1]="Z"}}}},GeometryCollection:function(e){var t=e.geometries,n=-1,r=t.length;while(++n<r)a.push(f(t[n]))}}),l=e.area=Rr({FeatureCollection:function(e){var t=0,n=e.features,r=-1,i=n.length;while(++r<i)t+=l(n[r]);return t},Feature:function(e){return l(e.geometry)},Polygon:function(e){return n(e.coordinates)},MultiPolygon:function(e){var t=0,r=e.coordinates,i=-1,s=r.length;while(++i<s)t+=n(r[i]);return t},GeometryCollection:function(e){var t=0,n=e.geometries,r=-1,i=n.length;while(++r<i)t+=l(n[r]);return t}},0),c=e.centroid=Rr({Feature:function(e){return c(e.geometry)},Polygon:function(e){var t=r(e.coordinates);return[t[0]/t[2],t[1]/t[2]]},MultiPolygon:function(e){var t=0,n=e.coordinates,i,s=0,o=0,u=0,a=-1,f=n.length;while(++a<f)i=r(n[a]),s+=i[0],o+=i[1],u+=i[2];return[s/u,o/u]}});return e.projection=function(t){return u=t,e},e.pointRadius=function(t){return typeof t=="function"?s=t:(s=+t,o=Ur(s)),e},e},d3.geo.bounds=function(e){var t=Infinity,n=Infinity,r=-Infinity,i=-Infinity;return zr(e,function(e,s){e<t&&(t=e),e>r&&(r=e),s<n&&(n=s),s>i&&(i=s)}),[[t,n],[r,i]]};var fo={Feature:Wr,FeatureCollection:Xr,GeometryCollection:Vr,LineString:$r,MultiLineString:Jr,MultiPoint:$r,MultiPolygon:Kr,Point:Qr,Polygon:Gr};d3.geo.circle=function(){function e(){}function t(e){return a.distance(e)<u}function n(e){var t=-1,n=e.length,i=[],s,o,f,l,c;while(++t<n)c=a.distance(f=e[t]),c<u?(o&&i.push(ti(o,f)((l-u)/(l-c))),i.push(f),s=o=null):(o=f,!s&&i.length&&(i.push(ti(i[i.length-1],o)((u-l)/(c-l))),s=o)),l=c;return s=e[0],o=i[0],o&&f[0]===s[0]&&f[1]===s[1]&&(f[0]!==o[0]||f[1]!==o[1])&&i.push(o),r(i)}function r(e){var t=0,n=e.length,r,i,s=n?[e[0]]:e,o,u=a.source();while(++t<n){o=a.source(e[t-1])(e[t]).coordinates;for(r=0,i=o.length;++r<i;)s.push(o[r])}return a.source(u),s}var s=[0,0],o=89.99,u=o*ao,a=d3.geo.greatArc().source(s).target(i);e.clip=function(e){return typeof s=="function"&&a.source(s.apply(this,arguments)),f(e)||null};var f=Rr({FeatureCollection:function(e){var t=e.features.map(f).filter(i);return t&&(e=Object.create(e),e.features=t,e)},Feature:function(e){var t=f(e.geometry);return t&&(e=Object.create(e),e.geometry=t,e)},Point:function(e){return t(e.coordinates)&&e},MultiPoint:function(e){var n=e.coordinates.filter(t);return n.length&&{type:e.type,coordinates:n}},LineString:function(e){var t=n(e.coordinates);return t.length&&(e=Object.create(e),e.coordinates=t,e)},MultiLineString:function(e){var t=e.coordinates.map(n).filter(function(e){return e.length});return t.length&&(e=Object.create(e),e.coordinates=t,e)},Polygon:function(e){var t=e.coordinates.map(n);return t[0].length&&(e=Object.create(e),e.coordinates=t,e)},MultiPolygon:function(e){var t=e.coordinates.map(function(e){return e.map(n)}).filter(function(e){return e[0].length});return t.length&&(e=Object.create(e),e.coordinates=t,e)},GeometryCollection:function(e){var t=e.geometries.map(f).filter(i);return t.length&&(e=Object.create(e),e.geometries=t,e)}});return e.origin=function(t){return arguments.length?(s=t,typeof s!="function"&&a.source(s),e):s},e.angle=function(t){return arguments.length?(u=(o=+t)*ao,e):o},d3.rebind(e,a,"precision")},d3.geo.greatArc=function(){function e(){var t=e.distance.apply(this,arguments),r=0,u=s/t,a=[n];while((r+=u)<1)a.push(o(r));return a.push(i),{type:"LineString",coordinates:a}}var t=Yr,n,r=Zr,i,s=6*ao,o=ei();return e.distance=function(){return typeof t=="function"&&o.source(n=t.apply(this,arguments)),typeof r=="function"&&o.target(i=r.apply(this,arguments)),o.distance()},e.source=function(r){return arguments.length?(t=r,typeof t!="function"&&o.source(n=t),e):t},e.target=function(t){return arguments.length?(r=t,typeof r!="function"&&o.target(i=r),e):r},e.precision=function(t){return arguments.length?(s=t*ao,e):s/ao},e},d3.geo.greatCircle=d3.geo.circle,d3.geom={},d3.geom.contour=function(e,t){var n=t||ni(e),r=[],i=n[0],s=n[1],o=0,u=0,a=NaN,f=NaN,l=0;do l=0,e(i-1,s-1)&&(l+=1),e(i,s-1)&&(l+=2),e(i-1,s)&&(l+=4),e(i,s)&&(l+=8),l===6?(o=f===-1?-1:1,u=0):l===9?(o=0,u=a===1?-1:1):(o=lo[l],u=co[l]),o!=a&&u!=f&&(r.push([i,s]),a=o,f=u),i+=o,s+=u;while(n[0]!=i||n[1]!=s);return r};var lo=[1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,NaN],co=[0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,NaN];d3.geom.hull=function(e){if(e.length<3)return[];var t=e.length,n=t-1,r=[],i=[],s,o,u=0,a,f,l,c,h,p,d,v;for(s=1;s<t;++s)e[s][1]<e[u][1]?u=s:e[s][1]==e[u][1]&&(u=e[s][0]<e[u][0]?s:u);for(s=0;s<t;++s){if(s===u)continue;f=e[s][1]-e[u][1],a=e[s][0]-e[u][0],r.push({angle:Math.atan2(f,a),index:s})}r.sort(function(e,t){return e.angle-t.angle}),d=r[0].angle,p=r[0].index,h=0;for(s=1;s<n;++s)o=r[s].index,d==r[s].angle?(a=e[p][0]-e[u][0],f=e[p][1]-e[u][1],l=e[o][0]-e[u][0],c=e[o][1]-e[u][1],a*a+f*f>=l*l+c*c?r[s].index=-1:(r[h].index=-1,d=r[s].angle,h=s,p=o)):(d=r[s].angle,h=s,p=o);i.push(u);for(s=0,o=0;s<2;++o)r[o].index!==-1&&(i.push(r[o].index),s++);v=i.length;for(;o<n;++o){if(r[o].index===-1)continue;while(!ri(i[v-2],i[v-1],r[o].index,e))--v;i[v++]=r[o].index}var m=[];for(s=0;s<v;++s)m.push(e[i[s]]);return m},d3.geom.polygon=function(e){return e.area=function(){var t=0,n=e.length,r=e[n-1][0]*e[0][1],i=e[n-1][1]*e[0][0];while(++t<n)r+=e[t-1][0]*e[t][1],i+=e[t-1][1]*e[t][0];return(i-r)*.5},e.centroid=function(t){var n=-1,r=e.length,i=0,s=0,o,u=e[r-1],a;arguments.length||(t=-1/(6*e.area()));while(++n<r)o=u,u=e[n],a=o[0]*u[1]-u[0]*o[1],i+=(o[0]+u[0])*a,s+=(o[1]+u[1])*a;return[i*t,s*t]},e.clip=function(t){var n,r=-1,i=e.length,s,o,u=e[i-1],a,f,l;while(++r<i){n=t.slice(),t.length=0,a=e[r],f=n[(o=n.length)-1],s=-1;while(++s<o)l=n[s],ii(l,u,a)?(ii(f,u,a)||t.push(si(f,l,u,a)),t.push(l)):ii(f,u,a)&&t.push(si(f,l,u,a)),f=l;u=a}return t},e},d3.geom.voronoi=function(e){var t=e.map(function(){return[]});return oi(e,function(e){var n,r,i,s,o,u;e.a===1&&e.b>=0?(n=e.ep.r,r=e.ep.l):(n=e.ep.l,r=e.ep.r),e.a===1?(o=n?n.y:-1e6,i=e.c-e.b*o,u=r?r.y:1e6,s=e.c-e.b*u):(i=n?n.x:-1e6,o=e.c-e.a*i,s=r?r.x:1e6,u=e.c-e.a*s);var a=[i,o],f=[s,u];t[e.region.l.index].push(a,f),t[e.region.r.index].push(a,f)}),t.map(function(t,n){var r=e[n][0],i=e[n][1];return t.forEach(function(e){e.angle=Math.atan2(e[0]-r,e[1]-i)}),t.sort(function(e,t){return e.angle-t.angle}).filter(function(e,n){return!n||e.angle-t[n-1].angle>1e-10})})};var ho={l:"r",r:"l"};d3.geom.delaunay=function(e){var t=e.map(function(){return[]}),n=[];return oi(e,function(n){t[n.region.l.index].push(e[n.region.r.index])}),t.forEach(function(t,r){var i=e[r],s=i[0],o=i[1];t.forEach(function(e){e.angle=Math.atan2(e[0]-s,e[1]-o)}),t.sort(function(e,t){return e.angle-t.angle});for(var u=0,a=t.length-1;u<a;u++)n.push([i,t[u],t[u+1]])}),n},d3.geom.quadtree=function(e,t,n,r,i){function s(e,t,n,r,i,s){if(isNaN(t.x)||isNaN(t.y))return;if(e.leaf){var u=e.point;u?Math.abs(u.x-t.x)+Math.abs(u.y-t.y)<.01?o(e,t,n,r,i,s):(e.point=null,o(e,u,n,r,i,s),o(e,t,n,r,i,s)):e.point=t}else o(e,t,n,r,i,s)}function o(e,t,n,r,i,o){var u=(n+i)*.5,a=(r+o)*.5,f=t.x>=u,l=t.y>=a,c=(l<<1)+f;e.leaf=!1,e=e.nodes[c]||(e.nodes[c]=ui()),f?n=u:i=u,l?r=a:o=a,s(e,t,n,r,i,o)}var u,a=-1,f=e.length;f&&isNaN(e[0].x)&&(e=e.map(fi));if(arguments.length<5)if(arguments.length===3)i=r=n,n=t;else{t=n=Infinity,r=i=-Infinity;while(++a<f)u=e[a],u.x<t&&(t=u.x),u.y<n&&(n=u.y),u.x>r&&(r=u.x),u.y>i&&(i=u.y);var l=r-t,c=i-n;l>c?i=n+l:r=t+c}var h=ui();return h.add=function(e){s(h,e,t,n,r,i)},h.visit=function(e){ai(e,h,t,n,r,i)},e.forEach(h.add),h},d3.time={};var po=Date,vo=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];li.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){mo.setUTCDate.apply(this._,arguments)},setDay:function(){mo.setUTCDay.apply(this._,arguments)},setFullYear:function(){mo.setUTCFullYear.apply(this._,arguments)},setHours:function(){mo.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){mo.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){mo.setUTCMinutes.apply(this._,arguments)},setMonth:function(){mo.setUTCMonth.apply(this._,arguments)},setSeconds:function(){mo.setUTCSeconds.apply(this._,arguments)},setTime:function(){mo.setTime.apply(this._,arguments)}};var mo=Date.prototype,go="%a %b %e %H:%M:%S %Y",yo="%m/%d/%y",bo="%H:%M:%S",wo=vo,Eo=wo.map(ci),So=["January","February","March","April","May","June","July","August","September","October","November","December"],xo=So.map(ci);d3.time.format=function(e){function t(t){var r=[],i=-1,s=0,o,u;while(++i<n)e.charCodeAt(i)==37&&(r.push(e.substring(s,i),(u=Po[o=e.charAt(++i)])?u(t):o),s=i+1);return r.push(e.substring(s,i)),r.join("")}var n=e.length;return t.parse=function(t){var n={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=hi(n,e,t,0);if(r!=t.length)return null;"p"in n&&(n.H=n.H%12+n.p*12);var i=new po;return i.setFullYear(n.y,n.m,n.d),i.setHours(n.H,n.M,n.S,n.L),i},t.toString=function(){return e},t};var To=d3.format("02d"),No=d3.format("03d"),Co=d3.format("04d"),ko=d3.format("2d"),Lo=pi(wo),Ao=pi(Eo),Oo=pi(So),Mo=di(So),_o=pi(xo),Do=di(xo),Po={a:function(e){return Eo[e.getDay()]},A:function(e){return wo[e.getDay()]},b:function(e){return xo[e.getMonth()]},B:function(e){return So[e.getMonth()]},c:d3.time.format(go),d:function(e){return To(e.getDate())},e:function(e){return ko(e.getDate())},H:function(e){return To(e.getHours())},I:function(e){return To(e.getHours()%12||12)},j:function(e){return No(1+d3.time.dayOfYear(e))},L:function(e){return No(e.getMilliseconds())},m:function(e){return To(e.getMonth()+1)},M:function(e){return To(e.getMinutes())},p:function(e){return e.getHours()>=12?"PM":"AM"},S:function(e){return To(e.getSeconds())},U:function(e){return To(d3.time.sundayOfYear(e))},w:function(e){return e.getDay()},W:function(e){return To(d3.time.mondayOfYear(e))},x:d3.time.format(yo),X:d3.time.format(bo),y:function(e){return To(e.getFullYear()%100)},Y:function(e){return Co(e.getFullYear()%1e4)},Z:_i,"%":function(e){return"%"}},Ho={a:vi,A:mi,b:gi,B:yi,c:bi,d:Ci,e:Ci,H:ki,I:ki,L:Oi,m:Ni,M:Li,p:Mi,S:Ai,x:wi,X:Ei,y:xi,Y:Si},Bo=/^\s*\d+/,jo=d3.map({am:0,pm:1});d3.time.format.utc=function(e){function t(e){try{po=li;var t=new po;return t._=e,n(t)}finally{po=Date}}var n=d3.time.format(e);return t.parse=function(e){try{po=li;var t=n.parse(e);return t&&t._}finally{po=Date}},t.toString=n.toString,t};var Fo=d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");d3.time.format.iso=Date.prototype.toISOString?Di:Fo,Di.parse=function(e){var t=new Date(e);return isNaN(t)?null:t},Di.toString=Fo.toString,d3.time.second=Pi(function(e){return new po(Math.floor(e/1e3)*1e3)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*1e3)},function(e){return e.getSeconds()}),d3.time.seconds=d3.time.second.range,d3.time.seconds.utc=d3.time.second.utc.range,d3.time.minute=Pi(function(e){return new po(Math.floor(e/6e4)*6e4)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*6e4)},function(e){return e.getMinutes()}),d3.time.minutes=d3.time.minute.range,d3.time.minutes.utc=d3.time.minute.utc.range,d3.time.hour=Pi(function(e){var t=e.getTimezoneOffset()/60;return new po((Math.floor(e/36e5-t)+t)*36e5)},function(e,t){e.setTime(e.getTime()+Math.floor(t)*36e5)},function(e){return e.getHours()}),d3.time.hours=d3.time.hour.range,d3.time.hours.utc=d3.time.hour.utc.range,d3.time.day=Pi(function(e){var t=new po(1970,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t},function(e,t){e.setDate(e.getDate()+t)},function(e){return e.getDate()-1}),d3.time.days=d3.time.day.range,d3.time.days.utc=d3.time.day.utc.range,d3.time.dayOfYear=function(e){var t=d3.time.year(e);return Math.floor((e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5)},vo.forEach(function(e,t){e=e.toLowerCase(),t=7-t;var n=d3.time[e]=Pi(function(e){return(e=d3.time.day(e)).setDate(e.getDate()-(e.getDay()+t)%7),e},function(e,t){e.setDate(e.getDate()+Math.floor(t)*7)},function(e){var n=d3.time.year(e).getDay();return Math.floor((d3.time.dayOfYear(e)+(n+t)%7)/7)-(n!==t)});d3.time[e+"s"]=n.range,d3.time[e+"s"].utc=n.utc.range,d3.time[e+"OfYear"]=function(e){var n=d3.time.year(e).getDay();return Math.floor((d3.time.dayOfYear(e)+(n+t)%7)/7)}}),d3.time.week=d3.time.sunday,d3.time.weeks=d3.time.sunday.range,d3.time.weeks.utc=d3.time.sunday.utc.range,d3.time.weekOfYear=d3.time.sundayOfYear,d3.time.month=Pi(function(e){return e=d3.time.day(e),e.setDate(1),e},function(e,t){e.setMonth(e.getMonth()+t)},function(e){return e.getMonth()}),d3.time.months=d3.time.month.range,d3.time.months.utc=d3.time.month.utc.range,d3.time.year=Pi(function(e){return e=d3.time.day(e),e.setMonth(0,1),e},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e){return e.getFullYear()}),d3.time.years=d3.time.year.range,d3.time.years.utc=d3.time.year.utc.range;var Io=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],qo=[[d3.time.second,1],[d3.time.second,5],[d3.time.second,15],[d3.time.second,30],[d3.time.minute,1],[d3.time.minute,5],[d3.time.minute,15],[d3.time.minute,30],[d3.time.hour,1],[d3.time.hour,3],[d3.time.hour,6],[d3.time.hour,12],[d3.time.day,1],[d3.time.day,2],[d3.time.week,1],[d3.time.month,1],[d3.time.month,3],[d3.time.year,1]],Ro=[[d3.time.format("%Y"),function(e){return!0}],[d3.time.format("%B"),function(e){return e.getMonth()}],[d3.time.format("%b %d"),function(e){return e.getDate()!=1}],[d3.time.format("%a %d"),function(e){return e.getDay()&&e.getDate()!=1}],[d3.time.format("%I %p"),function(e){return e.getHours()}],[d3.time.format("%I:%M"),function(e){return e.getMinutes()}],[d3.time.format(":%S"),function(e){return e.getSeconds()}],[d3.time.format(".%L"),function(e){return e.getMilliseconds()}]],Uo=d3.scale.linear(),zo=Ii(Ro);qo.year=function(e,t){return Uo.domain(e.map(Ri)).ticks(t).map(qi)},d3.time.scale=function(){return Bi(d3.scale.linear(),qo,zo)};var Wo=qo.map(function(e){return[e[0].utc,e[1]]}),Xo=[[d3.time.format.utc("%Y"),function(e){return!0}],[d3.time.format.utc("%B"),function(e){return e.getUTCMonth()}],[d3.time.format.utc("%b %d"),function(e){return e.getUTCDate()!=1}],[d3.time.format.utc("%a %d"),function(e){return e.getUTCDay()&&e.getUTCDate()!=1}],[d3.time.format.utc("%I %p"),function(e){return e.getUTCHours()}],[d3.time.format.utc("%I:%M"),function(e){return e.getUTCMinutes()}],[d3.time.format.utc(":%S"),function(e){return e.getUTCSeconds()}],[d3.time.format.utc(".%L"),function(e){return e.getUTCMilliseconds()}]],Vo=Ii(Xo);Wo.year=function(e,t){return Uo.domain(e.map(zi)).ticks(t).map(Ui)},d3.time.scale.utc=function(){return Bi(d3.scale.linear(),Wo,Vo)}})();
(function(){function b(a,b){return(new Date(b,a+1,0)).getDate()}function c(a,b,c){return function(d,e,f){var g=a(d),h=[];g<d&&b(g);if(f>1)while(g<e){var i=new Date(+g);c(i)%f===0&&h.push(i),b(g)}else while(g<e)h.push(new Date(+g)),b(g);return h}}var a=window.nv||{};a.version="0.0.1a",a.dev=!0,window.nv=a,a.tooltip={},a.utils={},a.models={},a.charts={},a.graphs=[],a.logs={},a.dispatch=d3.dispatch("render_start","render_end"),a.dev&&(a.dispatch.on("render_start",function(b){a.logs.startTime=+(new Date)}),a.dispatch.on("render_end",function(b){a.logs.endTime=+(new Date),a.logs.totalTime=a.logs.endTime-a.logs.startTime,a.log("total",a.logs.totalTime)})),a.log=function(){if(a.dev&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(a.dev&&console.log&&Function.prototype.bind){var b=Function.prototype.bind.call(console.log,console);b.apply(console,arguments)}return arguments[arguments.length-1]},a.render=function(c){c=c||1,a.render.active=!0,a.dispatch.render_start(),setTimeout(function(){var b,d;for(var e=0;e<c&&(d=a.render.queue[e]);e++)b=d.generate(),typeof d.callback==typeof Function&&d.callback(b),a.graphs.push(b);a.render.queue.splice(0,e),a.render.queue.length?setTimeout(arguments.callee,0):(a.render.active=!1,a.dispatch.render_end())},0)},a.render.active=!1,a.render.queue=[],a.addGraph=function(b){typeof arguments[0]==typeof Function&&(b={generate:arguments[0],callback:arguments[1]}),a.render.queue.push(b),a.render.active||a.render()},a.identity=function(a){return a},a.strip=function(a){return a.replace(/(\s|&)/g,"")},d3.time.monthEnd=function(a){return new Date(a.getFullYear(),a.getMonth(),0)},d3.time.monthEnds=c(d3.time.monthEnd,function(a){a.setUTCDate(a.getUTCDate()+1),a.setDate(b(a.getMonth()+1,a.getFullYear()))},function(a){return a.getMonth()}),function(){var b=window.nv.tooltip={};b.show=function(b,c,d,e,f,g){var h=document.createElement("div");h.className="nvtooltip "+(g?g:"xy-tooltip"),d=d||"s",e=e||20;var i=f?f:document.getElementsByTagName("body")[0];h.innerHTML=c,h.style.left=0,h.style.top=0,h.style.opacity=0,i.appendChild(h);var j=parseInt(h.offsetHeight),k=parseInt(h.offsetWidth),l=a.utils.windowSize().width,m=a.utils.windowSize().height,n=window.scrollY,o=window.scrollX,p,q;m=window.innerWidth>=document.body.scrollWidth?m:m-16,l=window.innerHeight>=document.body.scrollHeight?l:l-16;var r=function(a){var b=q;do isNaN(a.offsetTop)||(b+=a.offsetTop);while(a=a.offsetParent);return b},s=function(a){var b=p;do isNaN(a.offsetLeft)||(b+=a.offsetLeft);while(a=a.offsetParent);return b};switch(d){case"e":p=b[0]-k-e,q=b[1]-j/2;var t=s(h),u=r(h);t<o&&(p=b[0]+e>o?b[0]+e:o-t+p),u<n&&(q=n-u+q),u+j>n+m&&(q=n+m-u+q-j);break;case"w":p=b[0]+e,q=b[1]-j/2,t+k>l&&(p=b[0]-k-e),u<n&&(q=n+5),u+j>n+m&&(q=n-j-5);break;case"n":p=b[0]-k/2-5,q=b[1]+e;var t=s(h),u=r(h);t<o&&(p=o+5),t+k>l&&(p=p-k/2+5),u+j>n+m&&(q=n+m-u+q-j);break;case"s":p=b[0]-k/2,q=b[1]-j-e;var t=s(h),u=r(h);t<o&&(p=o+5),t+k>l&&(p=p-k/2+5),n>u&&(q=n)}return h.style.left=p+"px",h.style.top=q+"px",h.style.opacity=1,h.style.position="absolute",h.style.pointerEvents="none",h},b.cleanup=function(){var a=document.getElementsByClassName("nvtooltip"),b=[];while(a.length)b.push(a[0]),a[0].style.transitionDelay="0 !important",a[0].style.opacity=0,a[0].className="nvtooltip-pending-removal";setTimeout(function(){while(b.length){var a=b.pop();a.parentNode.removeChild(a)}},500)}}(),a.utils.windowSize=function(){var a={width:640,height:480};return document.body&&document.body.offsetWidth&&(a.width=document.body.offsetWidth,a.height=document.body.offsetHeight),document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth&&(a.width=document.documentElement.offsetWidth,a.height=document.documentElement.offsetHeight),window.innerWidth&&window.innerHeight&&(a.width=window.innerWidth,a.height=window.innerHeight),a},a.utils.windowResize=function(a){var b=window.onresize;window.onresize=function(c){typeof b=="function"&&b(c),a(c)}},a.utils.getColor=function(b){return arguments.length?Object.prototype.toString.call(b)==="[object Array]"?function(a,c){return a.color||b[c%b.length]}:b:a.utils.defaultColor()},a.utils.defaultColor=function(){var a=d3.scale.category20().range();return function(b,c){return b.color||a[c%a.length]}},a.utils.customTheme=function(a,b,c){b=b||function(a){return a.key},c=c||d3.scale.category20().range();var d=c.length;return function(e,f){var g=b(e);return d||(d=c.length),typeof a[g]!="undefined"?typeof a[g]=="function"?a[g]():a[g]:c[--d]}},a.utils.pjax=function(b,c){function d(d){d3.html(d,function(d){var e=d3.select(c).node();e.parentNode.replaceChild(d3.select(d).select(c).node(),e),a.utils.pjax(b,c)})}d3.selectAll(b).on("click",function(){history.pushState(this.href,this.textContent,this.href),d(this.href),d3.event.preventDefault()}),d3.select(window).on("popstate",function(){d3.event.state&&d(d3.event.state)})},a.models.axis=function(){function o(d){return d.each(function(d){var o=d3.select(this),p=o.selectAll("g.nv-wrap.nv-axis").data([d]),q=p.enter().append("g").attr("class","nvd3 nv-wrap nv-axis"),r=q.append("g"),s=p.select("g");m!==null?a.ticks(m):(a.orient()=="top"||a.orient()=="bottom")&&a.ticks(Math.abs(e.range()[1]-e.range()[0])/100),d3.transition(s).call(a),n=n||a.scale();var t=a.tickFormat();t==null&&(t=n.tickFormat());var u=s.selectAll("text.nv-axislabel").data([f||null]);u.exit().remove();switch(a.orient()){case"top":u.enter().append("text").attr("class","nv-axislabel").attr("text-anchor","middle").attr("y",0);var v=e.range().length==2?e.range()[1]:e.range()[e.range().length-1]+(e.range()[1]-e.range()[0]);u.attr("x",v/2);if(g){var w=p.selectAll("g.nv-axisMaxMin").data(e.domain());w.enter().append("g").attr("class","nv-axisMaxMin").append("text"),w.exit().remove(),w.attr("transform",function(a,b){return"translate("+e(a)+",0)"}).select("text").attr("dy","0em").attr("y",-a.tickPadding()).attr("text-anchor","middle").text(function(a,b){var c=t(a);return(""+c).match("NaN")?"":c}),d3.transition(w).attr("transform",function(a,b){return"translate("+e.range()[b]+",0)"})}break;case"bottom":var x=36,y=30,z=s.selectAll("g").select("text");if(i%360){z.each(function(a,b){var c=this.getBBox().width;c>y&&(y=c)});var A=Math.abs(Math.sin(i*Math.PI/180)),x=(A?A*y:y)+30;z.attr("transform",function(a,b,c){return"rotate("+i+" 0,0)"}).attr("text-anchor",i%360>0?"start":"end")}u.enter().append("text").attr("class","nv-axislabel").attr("text-anchor","middle").attr("y",x);var v=e.range().length==2?e.range()[1]:e.range()[e.range().length-1]+(e.range()[1]-e.range()[0]);u.attr("x",v/2);if(g){var w=p.selectAll("g.nv-axisMaxMin").data([e.domain()[0],e.domain()[e.domain().length-1]]);w.enter().append("g").attr("class","nv-axisMaxMin").append("text"),w.exit().remove(),w.attr("transform",function(a,b){return"translate("+(e(a)+(l?e.rangeBand()/2:0))+",0)"}).select("text").attr("dy",".71em").attr("y",a.tickPadding()).attr("transform",function(a,b,c){return"rotate("+i+" 0,0)"}).attr("text-anchor",i?i%360>0?"start":"end":"middle").text(function(a,b){var c=t(a);return(""+c).match("NaN")?"":c}),d3.transition(w).attr("transform",function(a,b){return"translate("+(e(a)+(l?e.rangeBand()/2:0))+",0)"})}k&&z.attr("transform",function(a,b){return"translate(0,"+(b%2==0?"0":"12")+")"});break;case"right":u.enter().append("text").attr("class","nv-axislabel").attr("text-anchor",j?"middle":"begin").attr("transform",j?"rotate(90)":"").attr("y",j?-Math.max(b.right,c)+12:-10),u.attr("x",j?e.range()[0]/2:a.tickPadding());if(g){var w=p.selectAll("g.nv-axisMaxMin").data(e.domain());w.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),w.exit().remove(),w.attr("transform",function(a,b){return"translate(0,"+e(a)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",a.tickPadding()).attr("text-anchor","start").text(function(a,b){var c=t(a);return(""+c).match("NaN")?"":c}),d3.transition(w).attr("transform",function(a,b){return"translate(0,"+e.range()[b]+")"}).select("text").style("opacity",1)}break;case"left":u.enter().append("text").attr("class","nv-axislabel").attr("text-anchor",j?"middle":"end").attr("transform",j?"rotate(-90)":"").attr("y",j?-Math.max(b.left,c)+12:-10),u.attr("x",j?-e.range()[0]/2:-a.tickPadding());if(g){var w=p.selectAll("g.nv-axisMaxMin").data(e.domain());w.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),w.exit().remove(),w.attr("transform",function(a,b){return"translate(0,"+n(a)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",-a.tickPadding()).attr("text-anchor","end").text(function(a,b){var c=t(a);return(""+c).match("NaN")?"":c}),d3.transition(w).attr("transform",function(a,b){return"translate(0,"+e.range()[b]+")"}).select("text").style("opacity",1)}}u.text(function(a){return a}),g&&(a.orient()==="left"||a.orient()==="right")&&(s.selectAll("g").each(function(a,b){d3.select(this).select("text").attr("opacity",1);if(e(a)<e.range()[1]+10||e(a)>e.range()[0]-10)(a>1e-10||a<-1e-10)&&d3.select(this).attr("opacity",0),d3.select(this).select("text").attr("opacity",0)}),e.domain()[0]==e.domain()[1]&&e.domain()[0]==0&&p.selectAll("g.nv-axisMaxMin").style("opacity",function(a,b){return b?0:1}));if(g&&(a.orient()==="top"||a.orient()==="bottom")){var B=[];p.selectAll("g.nv-axisMaxMin").each(function(a,b){try{b?B.push(e(a)-this.getBBox().width-4):B.push(e(a)+this.getBBox().width+4)}catch(c){b?B.push(e(a)-4):B.push(e(a)+4)}}),s.selectAll("g").each(function(a,b){if(e(a)<B[0]||e(a)>B[1])a>1e-10||a<-1e-10?d3.select(this).remove():d3.select(this).select("text").remove()})}h&&s.selectAll("line.tick").filter(function(a){return!parseFloat(Math.round(a*1e5)/1e6)}).classed("zero",!0),n=e.copy()}),o}var a=d3.svg.axis(),b={top:0,right:0,bottom:0,left:0},c=75,d=60,e=d3.scale.linear(),f=null,g=!0,h=!0,i=0,j=!0,k=!1,l=!1,m=null;a.scale(e).orient("bottom").tickFormat(function(a){return a});var n;return o.axis=a,d3.rebind(o,a,"orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"),d3.rebind(o,e,"domain","range","rangeBand","rangeBands"),o.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,o):b},o.width=function(a){return arguments.length?(c=a,o):c},o.ticks=function(a){return arguments.length?(m=a,o):m},o.height=function(a){return arguments.length?(d=a,o):d},o.axisLabel=function(a){return arguments.length?(f=a,o):f},o.showMaxMin=function(a){return arguments.length?(g=a,o):g},o.highlightZero=function(a){return arguments.length?(h=a,o):h},o.scale=function(b){return arguments.length?(e=b,a.scale(e),l=typeof e.rangeBands=="function",d3.rebind(o,e,"domain","range","rangeBand","rangeBands"),o):e},o.rotateYLabel=function(a){return arguments.length?(j=a,o):j},o.rotateLabels=function(a){return arguments.length?(i=a,o):i},o.staggerLabels=function(a){return arguments.length?(k=a,o):k},o},a.models.historicalBar=function(){function r(a){return a.each(function(a){var r=c-b.left-b.right,s=d-b.top-b.bottom,t=d3.select(this);f.domain(o||d3.extent(a[0].values.map(h).concat(j))),l?f.range([r*.5/a[0].values.length,r*(a[0].values.length-.5)/a[0].values.length]):f.range([0,r]),g.domain(p||d3.extent(a[0].values.map(i).concat(k))).range([s,0]);if(f.domain()[0]===f.domain()[1]||g.domain()[0]===g.domain()[1])singlePoint=!0;f.domain()[0]===f.domain()[1]&&(f.domain()[0]?f.domain([f.domain()[0]-f.domain()[0]*.01,f.domain()[1]+f.domain()[1]*.01]):f.domain([-1,1])),g.domain()[0]===g.domain()[1]&&(g.domain()[0]?g.domain([g.domain()[0]+g.domain()[0]*.01,g.domain()[1]-g.domain()[1]*.01]):g.domain([-1,1]));var u=t.selectAll("g.nv-wrap.nv-bar").data([a[0].values]),v=u.enter().append("g").attr("class","nvd3 nv-wrap nv-bar"),w=v.append("defs"),z=v.append("g"),A=u.select("g");z.append("g").attr("class","nv-bars"),u.attr("transform","translate("+b.left+","+b.top+")"),t.on("click",function(a,b){q.chartClick({data:a,index:b,pos:d3.event,id:e})}),w.append("clipPath").attr("id","nv-chart-clip-path-"+e).append("rect"),u.select("#nv-chart-clip-path-"+e+" rect").attr("width",r).attr("height",s),A.attr("clip-path",m?"url(#nv-chart-clip-path-"+e+")":"");var B=u.select(".nv-bars").selectAll(".nv-bar").data(function(a){return a});B.exit().remove();var C=B.enter().append("rect").attr("x",0).attr("y",function(a,b){return g(Math.max(0,i(a,b)))}).attr("height",function(a,b){return Math.abs(g(i(a,b))-g(0))}).on("mouseover",function(b,c){d3.select(this).classed("hover",!0),q.elementMouseover({point:b,series:a[0],pos:[f(h(b,c)),g(i(b,c))],pointIndex:c,seriesIndex:0,e:d3.event})}).on("mouseout",function(b,c){d3.select(this).classed("hover",!1),q.elementMouseout({point:b,series:a[0],pointIndex:c,seriesIndex:0,e:d3.event})}).on("click",function(a,b){q.elementClick({value:i(a,b),data:a,index:b,pos:[f(h(a,b)),g(i(a,b))],e:d3.event,id:e}),d3.event.stopPropagation()}).on("dblclick",function(a,b){q.elementDblClick({value:i(a,b),data:a,index:b,pos:[f(h(a,b)),g(i(a,b))],e:d3.event,id:e}),d3.event.stopPropagation()});B.attr("fill",function(a,b){return n(a,b)}).attr("class",function(a,b,c){return(i(a,b)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+c+"-"+b}).attr("transform",function(b,c){return"translate("+(f(h(b,c))-r/a[0].values.length*.45)+",0)"}).attr("width",r/a[0].values.length*.9),d3.transition(B).attr("y",function(a,b){return i(a,b)<0?g(0):g(0)-g(i(a,b))<1?g(0)-1:g(i(a,b))}).attr("height",function(a,b){return Math.max(Math.abs(g(i(a,b))-g(0)),1)})}),r}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=Math.floor(Math.random()*1e4),f=d3.scale.linear(),g=d3.scale.linear(),h=function(a){return a.x},i=function(a){return a.y},j=[],k=[0],l=!1,m=!0,n=a.utils.defaultColor(),o,p,q=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return r.dispatch=q,r.x=function(a){return arguments.length?(h=a,r):h},r.y=function(a){return arguments.length?(i=a,r):i},r.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,r):b},r.width=function(a){return arguments.length?(c=a,r):c},r.height=function(a){return arguments.length?(d=a,r):d},r.xScale=function(a){return arguments.length?(f=a,r):f},r.yScale=function(a){return arguments.length?(g=a,r):g},r.xDomain=function(a){return arguments.length?(o=a,r):o},r.yDomain=function(a){return arguments.length?(p=a,r):p},r.forceX=function(a){return arguments.length?(j=a,r):j},r.forceY=function(a){return arguments.length?(k=a,r):k},r.padData=function(a){return arguments.length?(l=a,r):l},r.clipEdge=function(a){return arguments.length?(m=a,r):m},r.color=function(b){return arguments.length?(n=a.utils.getColor(b),r):n},r.id=function(a){return arguments.length?(e=a,r):e},r},a.models.bullet=function(){function n(a){return a.each(function(a,c){var k=i-b.left-b.right,n=j-b.top-b.bottom,o=d3.select(this),p=e.call(this,a,c).slice().sort(d3.descending),q=f.call(this,a,c).slice().sort(d3.descending),r=g.call(this,a,c).slice().sort(d3.descending),s=d3.scale.linear().domain(d3.extent(d3.merge([h,p]))).range(d?[k,0]:[0,k]),t=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(s.range());this.__chart__=s;var u=d3.min(p),v=d3.max(p),w=p[1],x=o.selectAll("g.nv-wrap.nv-bullet").data([a]),y=x.enter().append("g").attr("class","nvd3 nv-wrap nv-bullet"),z=y.append("g"),A=x.select("g");z.append("rect").attr("class","nv-range nv-rangeMax"),z.append("rect").attr("class","nv-range nv-rangeAvg"),z.append("rect").attr("class","nv-range nv-rangeMin"),z.append("rect").attr("class","nv-measure"),z.append("path").attr("class","nv-markerTriangle"),x.attr("transform","translate("+b.left+","+b.top+")");var B=function(a){return Math.abs(t(a)-t(0))},C=function(a){return Math.abs(s(a)-s(0))},D=function(a){return a<0?t(a):t(0)},E=function(a){return a<0?s(a):s(0)};A.select("rect.nv-rangeMax").attr("height",n).attr("width",C(v>0?v:u)).attr("x",E(v>0?v:u)).datum(v>0?v:u),A.select("rect.nv-rangeAvg").attr("height",n).attr("width",C(w)).attr("x",E(w)).datum(w),A.select("rect.nv-rangeMin").attr("height",n).attr("width",C(v)).attr("x",E(v)).attr("width",C(v>0?u:v)).attr("x",E(v>0?u:v)).datum(v>0?u:v),A.select("rect.nv-measure").style("fill",l).attr("height",n/3).attr("y",n/3).attr("width",r<0?s(0)-s(r[0]):s(r[0])-s(0)).attr("x",E(r)).on("mouseover",function(){m.elementMouseover({value:r[0],label:"Current",pos:[s(r[0]),n/2]})}).on("mouseout",function(){m.elementMouseout({value:r[0],label:"Current"})});var F=n/6;q[0]?A.selectAll("path.nv-markerTriangle").attr("transform",function(a){return"translate("+s(q[0])+","+n/2+")"}).attr("d","M0,"+F+"L"+F+","+ -F+" "+ -F+","+ -F+"Z").on("mouseover",function(){m.elementMouseover({value:q[0],label:"Previous",pos:[s(q[0]),n/2]})}).on("mouseout",function(){m.elementMouseout({value:q[0],label:"Previous"})}):A.selectAll("path.nv-markerTriangle").remove(),x.selectAll(".nv-range").on("mouseover",function(a,b){var c=b?b==1?"Mean":"Minimum":"Maximum";m.elementMouseover({value:a,label:c,pos:[s(a),n/2]})}).on("mouseout",function(a,b){var c=b?b==1?"Mean":"Minimum":"Maximum";m.elementMouseout({value:a,label:c})})}),n}var b={top:0,right:0,bottom:0,left:0},c="left",d=!1,e=function(a){return a.ranges},f=function(a){return a.markers},g=function(a){return a.measures},h=[0],i=380,j=30,k=null,l=a.utils.getColor(["#1f77b4"]),m=d3.dispatch("elementMouseover","elementMouseout");return n.dispatch=m,n.orient=function(a){return arguments.length?(c=a,d=c=="right"||c=="bottom",n):c},n.ranges=function(a){return arguments.length?(e=a,n):e},n.markers=function(a){return arguments.length?(f=a,n):f},n.measures=function(a){return arguments.length?(g=a,n):g},n.forceX=function(a){return arguments.length?(h=a,n):h},n.width=function(a){return arguments.length?(i=a,n):i},n.height=function(a){return arguments.length?(j=a,n):j},n.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,n):b},n.tickFormat=function(a){return arguments.length?(k=a,n):k},n.color=function(b){return arguments.length?(l=a.utils.getColor(b),n):l},n},a.models.bulletChart=function(){function q(a){return a.each(function(c,m){var r=d3.select(this),s=(i||parseInt(r.style("width"))||960)-e.left-e.right,t=j-e.top-e.bottom,u=this;q.update=function(){q(a)},q.container=this;if(!c||!f.call(this,c,m)){var v=r.selectAll(".nv-noData").data([n]);return v.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),v.attr("x",e.left+s/2).attr("y",18+e.top+t/2).text(function(a){return a}),q}r.selectAll(".nv-noData").remove();var w=f.call(this,c,m).slice().sort(d3.descending),x=g.call(this,c,m).slice().sort(d3.descending),y=h.call(this,c,m).slice().sort(d3.descending),z=r.selectAll("g.nv-wrap.nv-bulletChart").data([c]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart"),B=A.append("g"),C=z.select("g");B.append("g").attr("class","nv-bulletWrap"),B.append("g").attr("class","nv-titles"),z.attr("transform","translate("+e.left+","+e.top+")");var D=d3.scale.linear().domain([0,Math.max(w[0],x[0],y[0])]).range(d?[s,0]:[0,s]),E=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(D.range());this.__chart__=D;var F=function(a){return Math.abs(E(a)-E(0))},G=function(a){return Math.abs(D(a)-D(0))},H=B.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(j-e.top-e.bottom)/2+")");H.append("text").attr("class","nv-title").text(function(a){return a.title}),H.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(a){return a.subtitle}),b.width(s).height(t);var I=C.select(".nv-bulletWrap");d3.transition(I).call(b);var J=k||D.tickFormat(s/100),K=C.selectAll("g.nv-tick").data(D.ticks(s/50),function(a){return this.textContent||J(a)}),L=K.enter().append("g").attr("class","nv-tick").attr("transform",function(a){return"translate("+E(a)+",0)"}).style("opacity",1e-6);L.append("line").attr("y1",t).attr("y2",t*7/6),L.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",t*7/6).text(J);var M=d3.transition(K).attr("transform",function(a){return"translate("+D(a)+",0)"}).style("opacity",1);M.select("line").attr("y1",t).attr("y2",t*7/6),M.select("text").attr("y",t*7/6),d3.transition(K.exit()).attr("transform",function(a){return"translate("+D(a)+",0)"}).style("opacity",1e-6).remove(),o.on("tooltipShow",function(a){a.key=data[0].title,l&&p(a,u.parentNode)})}),d3.timer.flush(),q}var b=a.models.bullet(),c="left",d=!1,e={top:5,right:40,bottom:20,left:120},f=function(a){return a.ranges},g=function(a){return a.markers},h=function(a){return a.measures},i=null,j=55,k=null,l=!0,m=function(a,b,c,d,e){return"<h3>"+b+"</h3>"+"<p>"+c+"</p>"},n="No Data Available.",o=d3.dispatch("tooltipShow","tooltipHide"),p=function(b,c){var d=b.pos[0]+(c.offsetLeft||0)+e.left,f=b.pos[1]+(c.offsetTop||0)+e.top,g=m(b.key,b.label,b.value,b,q);a.tooltip.show([d,f],g,b.value<0?"e":"w",null,c)};return b.dispatch.on("elementMouseover.tooltip",function(a){o.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){o.tooltipHide(a)}),o.on("tooltipHide",function(){l&&a.tooltip.cleanup()}),q.dispatch=o,q.bullet=b,d3.rebind(q,b,"color"),q.orient=function(a){return arguments.length?(c=a,d=c=="right"||c=="bottom",q):c},q.ranges=function(a){return arguments.length?(f=a,q):f},q.markers=function(a){return arguments.length?(g=a,q):g},q.measures=function(a){return arguments.length?(h=a,q):h},q.width=function(a){return arguments.length?(i=a,q):i},q.height=function(a){return arguments.length?(j=a,q):j},q.margin=function(a){return arguments.length?(e.top=typeof a.top!="undefined"?a.top:e.top,e.right=typeof a.right!="undefined"?a.right:e.right,e.bottom=typeof a.bottom!="undefined"?a.bottom:e.bottom,e.left=typeof a.left!="undefined"?a.left:e.left,q):e},q.tickFormat=function(a){return arguments.length?(k=a,q):k},q.tooltips=function(a){return arguments.length?(l=a,q):l},q.tooltipContent=function(a){return arguments.length?(m=a,q):m},q.noData=function(a){return arguments.length?(n=a,q):n},q},a.models.cumulativeLineChart=function(){function y(a){return a.each(function(o){function F(a,b){d3.select(y.container).style("cursor","ew-resize")}function G(a,b){w.x=d3.event.x,w.i=Math.round(v.invert(w.x)),S()}function H(a,b){d3.select(y.container).style("cursor","auto"),s.index=w.i,u.stateChange(s)}function S(){R.data([w]),y.update()}var A=d3.select(this).classed("nv-chart-"+r,!0),B=this,C=(i||parseInt(A.style("width"))||960)-g.left-g.right,D=(j||parseInt(A.style("height"))||400)-g.top-g.bottom;y.update=function(){y(a)},y.container=this;var E=d3.behavior.drag().on("dragstart",F).on("drag",G).on("dragend",H);if(!o||!o.length||!o.filter(function(a){return a.values.length}).length){var I=A.selectAll(".nv-noData").data([t]);return I.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),I.attr("x",g.left+C/2).attr("y",g.top+D/2).text(function(a){return a}),y}A.selectAll(".nv-noData").remove(),p=b.xScale(),q=b.yScale();if(!n){var J=o.filter(function(a){return!a.disabled}).map(function(a,c){var d=d3.extent(a.values,b.y());return d[0]<-0.95&&(d[0]=-0.95),[(d[0]-d[1])/(1+d[1]),(d[1]-d[0])/(1+d[0])]}),K=[d3.min(J,function(a){return a[0]}),d3.max(J,function(a){return a[1]})];b.yDomain(K)}else b.yDomain(null);v.domain([0,o[0].values.length-1]).range([0,C]).clamp(!0);var o=z(w.i,o),L=A.selectAll("g.nv-wrap.nv-cumulativeLine").data([o]),M=L.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),N=L.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y nv-axis"),M.append("g").attr("class","nv-background"),M.append("g").attr("class","nv-linesWrap"),M.append("g").attr("class","nv-legendWrap"),M.append("g").attr("class","nv-controlsWrap"),k&&(e.width(C),N.select(".nv-legendWrap").datum(o).call(e),g.top!=e.height()&&(g.top=e.height(),D=(j||parseInt(A.style("height"))||400)-g.top-g.bottom),N.select(".nv-legendWrap").attr("transform","translate(0,"+ -g.top+")"));if(m){var O=[{key:"Re-scale y-axis",disabled:!n}];f.width(140).color(["#444","#444","#444"]),N.select(".nv-controlsWrap").datum(O).attr("transform","translate(0,"+ -g.top+")").call(f)}L.attr("transform","translate("+g.left+","+g.top+")");var P=o.filter(function(a){return a.tempDisabled});L.select(".tempDisabled").remove(),P.length&&L.append("text").attr("class","tempDisabled").attr("x",C/2).attr("y","-.71em").style("text-anchor","end").text(P.map(function(a){return a.key}).join(", ")+" values cannot be calculated for this time period."),M.select(".nv-background").append("rect"),N.select(".nv-background rect").attr("width",C).attr("height",D),b.y(function(a){return a.display.y}).width(C).height(D).color(o.map(function(a,b){return a.color||h(a,b)}).filter(function(a,b){return!o[b].disabled&&!o[b].tempDisabled}));var Q=N.select(".nv-linesWrap").datum(o.filter(function(a){return!a.disabled&&!a.tempDisabled}));Q.call(b);var R=Q.selectAll(".nv-indexLine").data([w]);R.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).call(E),R.attr("transform",function(a){return"translate("+v(a.i)+",0)"}).attr("height",D),c.scale(p).ticks(Math.min(o[0].values.length,C/70)).tickSize(-D,0),N.select(".nv-x.nv-axis").attr("transform","translate(0,"+q.range()[0]+")"),d3.transition(N.select(".nv-x.nv-axis")).call(c),d.scale(q).ticks(D/36).tickSize(-C,0),d3.transition(N.select(".nv-y.nv-axis")).call(d),N.select(".nv-background rect").on("click",function(){w.x=d3.mouse(this)[0],w.i=Math.round(v.invert(w.x)),s.index=w.i,u.stateChange(s),S()}),b.dispatch.on("elementClick",function(a){w.i=a.pointIndex,w.x=v(w.i),s.index=w.i,u.stateChange(s),S()}),f.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,n=!b.disabled,s.rescaleY=n,u.stateChange(s),a.call(y)}),e.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,o.filter(function(a){return!a.disabled}).length||o.map(function(a){return a.disabled=!1,L.selectAll(".nv-series").classed("disabled",!1),a}),s.disabled=o.map(function(a){return!!a.disabled}),u.stateChange(s),a.call(y)}),u.on("tooltipShow",function(a){l&&x(a,B.parentNode)}),u.on("changeState",function(b){typeof b.disabled!="undefined"&&(o.forEach(function(a,c){a.disabled=b.disabled[c]}),s.disabled=b.disabled),typeof b.index!="undefined"&&(w.i=b.index,w.x=v(w.i),s.index=b.index,R.data([w])),typeof b.rescaleY!="undefined"&&(n=b.rescaleY),a.call(y)})}),y}function z(a,c){return c.map(function(c,d){var e=b.y()(c.values[a],a);return e<-0.95?(c.tempDisabled=!0,c):(c.tempDisabled=!1,c.values=c.values.map(function(a,c){return a.display={y:(b.y()(a,c)-e)/(1+e)},a}),c)})}var b=a.models.line(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f=a.models.legend(),g={top:30,right:30,bottom:50,left:60},h=a.utils.defaultColor(),i=null,j=null,k=!0,l=!0,m=!0,n=!0,o=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" at "+b+"</p>"},p,q,r=b.id(),s={index:0,rescaleY:n},t="No Data Available.",u=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");c.orient("bottom").tickPadding(7),d.orient("left");var v=d3.scale.linear(),w={i:0,x:0},x=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),i=c.tickFormat()(b.x()(e.point,e.pointIndex)),j=d.tickFormat()(b.y()(e.point,e.pointIndex)),k=o(e.series.key,i,j,e,y);a.tooltip.show([g,h],k,null,null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+g.left,a.pos[1]+g.top],u.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){u.tooltipHide(a)}),u.on("tooltipHide",function(){l&&a.tooltip.cleanup()}),y.dispatch=u,y.lines=b,y.legend=e,y.xAxis=c,y.yAxis=d,d3.rebind(y,b,"defined","isArea","x","y","size","xDomain","yDomain","forceX","forceY","interactive","clipEdge","clipVoronoi","id"),y.margin=function(a){return arguments.length?(g.top=typeof a.top!="undefined"?a.top:g.top,g.right=typeof a.right!="undefined"?a.right:g.right,g.bottom=typeof a.bottom!="undefined"?a.bottom:g.bottom,g.left=typeof a.left!="undefined"?a.left:g.left,y):g},y.width=function(a){return arguments.length?(i=a,y):i},y.height=function(a){return arguments.length?(j=a,y):j},y.color=function(b){return arguments.length?(h=a.utils.getColor(b),e.color(h),y):h},y.rescaleY=function(a){return arguments.length?(n=a,n):n},y.showControls=function(a){return arguments.length?(m=a,y):m},y.showLegend=function(a){return arguments.length?(k=a,y):k},y.tooltips=function(a){return arguments.length?(l=a,y):l},y.tooltipContent=function(a){return arguments.length?(o=a,y):o},y.state=function(a){return arguments.length?(s=a,y):s},y.noData=function(a){return arguments.length?(t=a,y):t},y},a.models.discreteBar=function(){function t(a){return a.each(function(a){var e=c-b.left-b.right,t=d-b.top-b.bottom,u=d3.select(this);a=a.map(function(a,b){return a.values=a.values.map(function(a){return a.series=b,a}),a});var v=n&&o?[]:a.map(function(a){return a.values.map(function(a,b){return{x:h(a,b),y:i(a,b),y0:a.y0}})});f.domain(n||d3.merge(v).map(function(a){return a.x})).rangeBands([0,e],.1),g.domain(o||d3.extent(d3.merge(v).map(function(a){return a.y}).concat(j))),l?g.range([t-(g.domain()[0]<0?12:0),g.domain()[1]>0?12:0]):g.range([t,0]),r=r||f,s=s||g.copy().range([g(0),g(0)]);var w=u.selectAll("g.nv-wrap.nv-discretebar").data([a]),z=w.enter().append("g").attr("class","nvd3 nv-wrap nv-discretebar"),A=z.append("g"),B=w.select("g");A.append("g").attr("class","nv-groups"),w.attr("transform","translate("+b.left+","+b.top+")");var C=w.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});C.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),d3.transition(C.exit()).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),C.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}),d3.transition(C).style("stroke-opacity",1).style("fill-opacity",.75);var D=C.selectAll("g.nv-bar").data(function(a){return a.values});D.exit().remove();var E=D.enter().append("g").attr("transform",function(a,b,c){return"translate("+(f(h(a,b))+f.rangeBand()*.05)+", "+g(0)+")"}).on("mouseover",function(b,c){d3.select(this).classed("hover",!0),p.elementMouseover({value:i(b,c),point:b,series:a[b.series],pos:[f(h(b,c))+f.rangeBand()*(b.series+.5)/a.length,g(i(b,c))],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("mouseout",function(b,c){d3.select(this).classed("hover",!1),p.elementMouseout({value:i(b,c),point:b,series:a[b.series],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("click",function(b,c){p.elementClick({value:i(b,c),point:b,series:a[b.series],pos:[f(h(b,c))+f.rangeBand()*(b.series+.5)/a.length,g(i(b,c))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(b,c){p.elementDblClick({value:i(b,c),point:b,series:a[b.series],pos:[f(h(b,c))+f.rangeBand()*(b.series+.5)/a.length,g(i(b,c))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()});E.append("rect").attr("height",0).attr("width",f.rangeBand()*.9/a.length),l?(E.append("text").attr("text-anchor","middle"),D.select("text").attr("x",f.rangeBand()*.9/2).attr("y",function(a,b){return i(a,b)<0?g(i(a,b))-g(0)+12:-4}).text(function(a,b){return m(i(a,b))})):D.selectAll("text").remove(),D.attr("class",function(a,b){return i(a,b)<0?"nv-bar negative":"nv-bar positive"}).style("fill",function(a,b){return a.color||k(a,b)}).style("stroke",function(a,b){return a.color||k(a,b)}).select("rect").attr("class",q).attr("width",f.rangeBand()*.9/a.length),d3.transition(D).attr("transform",function(a,b){var c=f(h(a,b))+f.rangeBand()*.05,d=i(a,b)<0?g(0):g(0)-g(i(a,b))<1?g(0)-1:g(i(a,b));return"translate("+c+", "+d+")"}).select("rect").attr("height",function(a,b){return Math.max(Math.abs(g(i(a,b))-g(0))||1)}),r=f.copy(),s=g.copy()}),t}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=Math.floor(Math.random()*1e4),f=d3.scale.ordinal(),g=d3.scale.linear(),h=function(a){return a.x},i=function(a){return a.y},j=[0],k=a.utils.defaultColor(),l=!1,m=d3.format(",.2f"),n,o,p=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),q="discreteBar",r,s;return t.dispatch=p,t.x=function(a){return arguments.length?(h=a,t):h},t.y=function(a){return arguments.length?(i=a,t):i},t.margin=function(
a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,t):b},t.width=function(a){return arguments.length?(c=a,t):c},t.height=function(a){return arguments.length?(d=a,t):d},t.xScale=function(a){return arguments.length?(f=a,t):f},t.yScale=function(a){return arguments.length?(g=a,t):g},t.xDomain=function(a){return arguments.length?(n=a,t):n},t.yDomain=function(a){return arguments.length?(o=a,t):o},t.forceY=function(a){return arguments.length?(j=a,t):j},t.color=function(b){return arguments.length?(k=a.utils.getColor(b),t):k},t.id=function(a){return arguments.length?(e=a,t):e},t.showValues=function(a){return arguments.length?(l=a,t):l},t.valueFormat=function(a){return arguments.length?(m=a,t):m},t.rectClass=function(a){return arguments.length?(q=a,t):q},t},a.models.discreteBarChart=function(){function q(a){return a.each(function(h){var k=d3.select(this),r=this,s=(f||parseInt(k.style("width"))||960)-e.left-e.right,t=(g||parseInt(k.style("height"))||400)-e.top-e.bottom;q.update=function(){o.beforeUpdate(),a.transition().call(q)},q.container=this;if(!h||!h.length||!h.filter(function(a){return a.values.length}).length){var u=k.selectAll(".nv-noData").data([n]);return u.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),u.attr("x",e.left+s/2).attr("y",e.top+t/2).text(function(a){return a}),q}k.selectAll(".nv-noData").remove(),l=b.xScale(),m=b.yScale();var v=k.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([h]),w=v.enter().append("g").attr("class","nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),z=w.append("defs"),A=v.select("g");w.append("g").attr("class","nv-x nv-axis"),w.append("g").attr("class","nv-y nv-axis"),w.append("g").attr("class","nv-barsWrap"),A.attr("transform","translate("+e.left+","+e.top+")"),b.width(s).height(t);var B=A.select(".nv-barsWrap").datum(h.filter(function(a){return!a.disabled}));d3.transition(B).call(b),z.append("clipPath").attr("id","nv-x-label-clip-"+b.id()).append("rect"),A.select("#nv-x-label-clip-"+b.id()+" rect").attr("width",l.rangeBand()*(i?2:1)).attr("height",16).attr("x",-l.rangeBand()/(i?1:2)),c.scale(l).ticks(s/100).tickSize(-t,0),A.select(".nv-x.nv-axis").attr("transform","translate(0,"+(m.range()[0]+(b.showValues()&&m.domain()[0]<0?16:0))+")"),A.select(".nv-x.nv-axis").transition().duration(0).call(c);var C=A.select(".nv-x.nv-axis").selectAll("g");i&&C.selectAll("text").attr("transform",function(a,b,c){return"translate(0,"+(c%2==0?"5":"17")+")"}),d.scale(m).ticks(t/36).tickSize(-s,0),d3.transition(A.select(".nv-y.nv-axis")).call(d),o.on("tooltipShow",function(a){j&&p(a,r.parentNode)})}),q}var b=a.models.discreteBar(),c=a.models.axis(),d=a.models.axis(),e={top:15,right:10,bottom:50,left:60},f=null,g=null,h=a.utils.getColor(),i=!1,j=!0,k=function(a,b,c,d,e){return"<h3>"+b+"</h3>"+"<p>"+c+"</p>"},l,m,n="No Data Available.",o=d3.dispatch("tooltipShow","tooltipHide","beforeUpdate");c.orient("bottom").highlightZero(!1).showMaxMin(!1).tickFormat(function(a){return a}),d.orient("left").tickFormat(d3.format(",.1f"));var p=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),i=c.tickFormat()(b.x()(e.point,e.pointIndex)),j=d.tickFormat()(b.y()(e.point,e.pointIndex)),l=k(e.series.key,i,j,e,q);a.tooltip.show([g,h],l,e.value<0?"n":"s",null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+e.left,a.pos[1]+e.top],o.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){o.tooltipHide(a)}),o.on("tooltipHide",function(){j&&a.tooltip.cleanup()}),q.dispatch=o,q.discretebar=b,q.xAxis=c,q.yAxis=d,d3.rebind(q,b,"x","y","xDomain","yDomain","forceX","forceY","id","showValues","valueFormat"),q.margin=function(a){return arguments.length?(e.top=typeof a.top!="undefined"?a.top:e.top,e.right=typeof a.right!="undefined"?a.right:e.right,e.bottom=typeof a.bottom!="undefined"?a.bottom:e.bottom,e.left=typeof a.left!="undefined"?a.left:e.left,q):e},q.width=function(a){return arguments.length?(f=a,q):f},q.height=function(a){return arguments.length?(g=a,q):g},q.color=function(c){return arguments.length?(h=a.utils.getColor(c),b.color(h),q):h},q.staggerLabels=function(a){return arguments.length?(i=a,q):i},q.tooltips=function(a){return arguments.length?(j=a,q):j},q.tooltipContent=function(a){return arguments.length?(k=a,q):k},q.noData=function(a){return arguments.length?(n=a,q):n},q},a.models.distribution=function(){function k(a){return a.each(function(a){var i=c-(e==="x"?b.left+b.right:b.top+b.bottom),k=e=="x"?"y":"x",l=d3.select(this);j=j||h;var m=l.selectAll("g.nv-distribution").data([a]),n=m.enter().append("g").attr("class","nvd3 nv-distribution"),o=n.append("g"),p=m.select("g");m.attr("transform","translate("+b.left+","+b.top+")");var q=p.selectAll("g.nv-dist").data(function(a){return a},function(a){return a.key});q.enter().append("g"),q.attr("class",function(a,b){return"nv-dist nv-series-"+b}).style("stroke",function(a,b){return g(a,b)});var r=q.selectAll("line.nv-dist"+e).data(function(a){return a.values});r.enter().append("line").attr(e+"1",function(a,b){return j(f(a,b))}).attr(e+"2",function(a,b){return j(f(a,b))}),d3.transition(q.exit().selectAll("line.nv-dist"+e)).attr(e+"1",function(a,b){return h(f(a,b))}).attr(e+"2",function(a,b){return h(f(a,b))}).style("stroke-opacity",0).remove(),r.attr("class",function(a,b){return"nv-dist"+e+" nv-dist"+e+"-"+b}).attr(k+"1",0).attr(k+"2",d),d3.transition(r).attr(e+"1",function(a,b){return h(f(a,b))}).attr(e+"2",function(a,b){return h(f(a,b))}),j=h.copy()}),k}var b={top:0,right:0,bottom:0,left:0},c=400,d=8,e="x",f=function(a){return a[e]},g=a.utils.defaultColor(),h=d3.scale.linear(),i,j;return k.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,k):b},k.width=function(a){return arguments.length?(c=a,k):c},k.axis=function(a){return arguments.length?(e=a,k):e},k.size=function(a){return arguments.length?(d=a,k):d},k.getData=function(a){return arguments.length?(f=d3.functor(a),k):f},k.scale=function(a){return arguments.length?(h=a,k):h},k.color=function(b){return arguments.length?(g=a.utils.getColor(b),k):g},k},a.models.indentedTree=function(){function o(a){return a.each(function(b){function z(a,b,c){d3.event.stopPropagation();if(d3.event.shiftKey&&!c)return d3.event.shiftKey=!1,a.values&&a.values.forEach(function(a){(a.values||a._values)&&z(a,0,!0)}),!0;if(!C(a))return!0;a.values?(a._values=a.values,a.values=null):(a.values=a._values,a._values=null),o.update()}function A(a){return a._values&&a._values.length?l:a.values&&a.values.length?m:""}function B(a){return a._values&&a._values.length}function C(a){var b=a.values||a._values;return b&&b.length}var c=0,e=1,f=d3.layout.tree().children(function(a){return a.values}).size([d,i]);o.update=function(){a.transition().call(o)},o.container=this,b[0]||(b[0]={key:h});var p=f.nodes(b[0]),q=d3.select(this).selectAll("div").data([[p]]),r=q.enter().append("div").attr("class","nvd3 nv-wrap nv-indentedtree"),s=r.append("table"),t=q.select("table").attr("width","100%").attr("class",k);if(g){var u=s.append("thead"),v=u.append("tr");j.forEach(function(a){v.append("th").attr("width",a.width?a.width:"10%").style("text-align",a.type=="numeric"?"right":"left").append("span").text(a.label)})}var w=t.selectAll("tbody").data(function(a){return a});w.enter().append("tbody"),e=d3.max(p,function(a){return a.depth}),f.size([d,e*i]);var x=w.selectAll("tr").data(function(a){return a},function(a){return a.id||a.id==++c});x.exit().remove(),x.select("img.nv-treeicon").attr("src",A).classed("folded",B);var y=x.enter().append("tr");j.forEach(function(a,b){var c=y.append("td").style("padding-left",function(a){return(b?0:a.depth*i+12+(A(a)?0:16))+"px"},"important").style("text-align",a.type=="numeric"?"right":"left");b==0&&c.append("img").classed("nv-treeicon",!0).classed("nv-folded",B).attr("src",A).style("width","14px").style("height","14px").style("padding","0 1px").style("display",function(a){return A(a)?"inline-block":"none"}).on("click",z),c.append("span").attr("class",d3.functor(a.classes)).text(function(b){return a.format?a.format(b):b[a.key]||"-"}),a.showCount&&c.append("span").attr("class","nv-childrenCount").text(function(a){return a.values&&a.values.length||a._values&&a._values.length?"("+(a.values&&a.values.length||a._values&&a._values.length)+")":""}),a.click&&c.select("span").on("click",a.click)}),x.order().on("click",function(a){n.elementClick({row:this,data:a,pos:[a.x,a.y]})}).on("dblclick",function(a){n.elementDblclick({row:this,data:a,pos:[a.x,a.y]})}).on("mouseover",function(a){n.elementMouseover({row:this,data:a,pos:[a.x,a.y]})}).on("mouseout",function(a){n.elementMouseout({row:this,data:a,pos:[a.x,a.y]})})}),o}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=a.utils.defaultColor(),f=Math.floor(Math.random()*1e4),g=!0,h="No Data Available.",i=20,j=[{key:"key",label:"Name",type:"text"}],k=null,l="images/grey-plus.png",m="images/grey-minus.png",n=d3.dispatch("elementClick","elementDblclick","elementMouseover","elementMouseout");return o.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,o):b},o.width=function(a){return arguments.length?(c=a,o):c},o.height=function(a){return arguments.length?(d=a,o):d},o.color=function(b){return arguments.length?(e=a.utils.getColor(b),scatter.color(e),o):e},o.id=function(a){return arguments.length?(f=a,o):f},o.header=function(a){return arguments.length?(g=a,o):g},o.noData=function(a){return arguments.length?(h=a,o):h},o.columns=function(a){return arguments.length?(j=a,o):j},o.tableClass=function(a){return arguments.length?(k=a,o):k},o.iconOpen=function(a){return arguments.length?(l=a,o):l},o.iconClose=function(a){return arguments.length?(m=a,o):m},o},a.models.legend=function(){function i(a){return a.each(function(a){var i=c-b.left-b.right,j=d3.select(this),l=j.selectAll("g.nv-legend").data([a]),m=l.enter().append("g").attr("class","nvd3 nv-legend").append("g"),n=l.select("g");l.attr("transform","translate("+b.left+","+b.top+")");var o=n.selectAll(".nv-series").data(function(a){return a}),p=o.enter().append("g").attr("class","nv-series").on("mouseover",function(a,b){h.legendMouseover(a,b)}).on("mouseout",function(a,b){h.legendMouseout(a,b)}).on("click",function(a,b){h.legendClick(a,b)}).on("dblclick",function(a,b){h.legendDblclick(a,b)});p.append("circle").style("stroke-width",2).attr("r",5),p.append("text").attr("text-anchor","start").attr("dy",".32em").attr("dx","8"),o.classed("disabled",function(a){return a.disabled}),o.exit().remove(),o.select("circle").style("fill",function(a,b){return a.color||f(a,b)}).style("stroke",function(a,b){return a.color||f(a,b)}),o.select("text").text(e);if(g){var q=[];o.each(function(a,b){q.push(d3.select(this).select("text").node().getComputedTextLength()+28)});var r=0,s=0,t=[];while(s<i&&r<q.length)t[r]=q[r],s+=q[r++];while(s>i&&r>1){t=[],r--;for(k=0;k<q.length;k++)q[k]>(t[k%r]||0)&&(t[k%r]=q[k]);s=t.reduce(function(a,b,c,d){return a+b})}var u=[];for(var v=0,w=0;v<r;v++)u[v]=w,w+=t[v];o.attr("transform",function(a,b){return"translate("+u[b%r]+","+(5+Math.floor(b/r)*20)+")"}),n.attr("transform","translate("+(c-b.right-s)+","+b.top+")"),d=b.top+b.bottom+Math.ceil(q.length/r)*20}else{var x=5,y=5,z=0,A;o.attr("transform",function(a,d){var e=d3.select(this).select("text").node().getComputedTextLength()+28;return A=y,c<b.left+b.right+A+e&&(y=A=5,x+=20),y+=e,y>z&&(z=y),"translate("+A+","+x+")"}),n.attr("transform","translate("+(c-b.right-z)+","+b.top+")"),d=b.top+b.bottom+x+15}}),i}var b={top:5,right:0,bottom:5,left:0},c=400,d=20,e=function(a){return a.key},f=a.utils.defaultColor(),g=!0,h=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout");return i.dispatch=h,i.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,i):b},i.width=function(a){return arguments.length?(c=a,i):c},i.height=function(a){return arguments.length?(d=a,i):d},i.key=function(a){return arguments.length?(e=a,i):e},i.color=function(b){return arguments.length?(f=a.utils.getColor(b),i):f},i.align=function(a){return arguments.length?(g=a,i):g},i},a.models.line=function(){function q(a){return a.each(function(a){var q=d-c.left-c.right,r=e-c.top-c.bottom,s=d3.select(this);l=b.xScale(),m=b.yScale(),o=o||l,p=p||m;var t=s.selectAll("g.nv-wrap.nv-line").data([a]),u=t.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),v=u.append("defs"),w=u.append("g"),z=t.select("g");w.append("g").attr("class","nv-groups"),w.append("g").attr("class","nv-scatterWrap"),t.attr("transform","translate("+c.left+","+c.top+")"),b.width(q).height(r);var A=t.select(".nv-scatterWrap");d3.transition(A).call(b),v.append("clipPath").attr("id","nv-edge-clip-"+b.id()).append("rect"),t.select("#nv-edge-clip-"+b.id()+" rect").attr("width",q).attr("height",r),z.attr("clip-path",k?"url(#nv-edge-clip-"+b.id()+")":""),A.attr("clip-path",k?"url(#nv-edge-clip-"+b.id()+")":"");var B=t.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});B.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),d3.transition(B.exit()).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),B.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return f(a,b)}).style("stroke",function(a,b){return f(a,b)}),d3.transition(B).style("stroke-opacity",1).style("fill-opacity",.5);var C=B.selectAll("path.nv-area").data(function(a){return j(a)?[a]:[]});C.enter().append("path").attr("class","nv-area").attr("d",function(a){return d3.svg.area().interpolate(n).defined(i).x(function(a,b){return o(g(a,b))}).y0(function(a,b){return p(h(a,b))}).y1(function(a,b){return p(m.domain()[0]<=0?m.domain()[1]>=0?0:m.domain()[1]:m.domain()[0])}).apply(this,[a.values])}),d3.transition(B.exit().selectAll("path.nv-area")).attr("d",function(a){return d3.svg.area().interpolate(n).defined(i).x(function(a,b){return o(g(a,b))}).y0(function(a,b){return p(h(a,b))}).y1(function(a,b){return p(m.domain()[0]<=0?m.domain()[1]>=0?0:m.domain()[1]:m.domain()[0])}).apply(this,[a.values])}),d3.transition(C).attr("d",function(a){return d3.svg.area().interpolate(n).defined(i).x(function(a,b){return o(g(a,b))}).y0(function(a,b){return p(h(a,b))}).y1(function(a,b){return p(m.domain()[0]<=0?m.domain()[1]>=0?0:m.domain()[1]:m.domain()[0])}).apply(this,[a.values])});var D=B.selectAll("path.nv-line").data(function(a){return[a.values]});D.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(n).defined(i).x(function(a,b){return o(g(a,b))}).y(function(a,b){return p(h(a,b))})),d3.transition(B.exit().selectAll("path.nv-line")).attr("d",d3.svg.line().interpolate(n).defined(i).x(function(a,b){return l(g(a,b))}).y(function(a,b){return m(h(a,b))})),d3.transition(D).attr("d",d3.svg.line().interpolate(n).defined(i).x(function(a,b){return l(g(a,b))}).y(function(a,b){return m(h(a,b))})),o=l.copy(),p=m.copy()}),q}var b=a.models.scatter(),c={top:0,right:0,bottom:0,left:0},d=960,e=500,f=a.utils.defaultColor(),g=function(a){return a.x},h=function(a){return a.y},i=function(a,b){return!isNaN(h(a,b))&&h(a,b)!==null},j=function(a){return a.area},k=!1,l,m,n="linear";b.size(16).sizeDomain([16,256]);var o,p;return q.dispatch=b.dispatch,q.scatter=b,d3.rebind(q,b,"id","interactive","size","xScale","yScale","zScale","xDomain","yDomain","sizeDomain","forceX","forceY","forceSize","clipVoronoi","clipRadius","padData"),q.margin=function(a){return arguments.length?(c.top=typeof a.top!="undefined"?a.top:c.top,c.right=typeof a.right!="undefined"?a.right:c.right,c.bottom=typeof a.bottom!="undefined"?a.bottom:c.bottom,c.left=typeof a.left!="undefined"?a.left:c.left,q):c},q.width=function(a){return arguments.length?(d=a,q):d},q.height=function(a){return arguments.length?(e=a,q):e},q.x=function(a){return arguments.length?(g=a,b.x(a),q):g},q.y=function(a){return arguments.length?(h=a,b.y(a),q):h},q.clipEdge=function(a){return arguments.length?(k=a,q):k},q.color=function(c){return arguments.length?(f=a.utils.getColor(c),b.color(f),q):f},q.interpolate=function(a){return arguments.length?(n=a,q):n},q.defined=function(a){return arguments.length?(i=a,q):i},q.isArea=function(a){return arguments.length?(j=d3.functor(a),q):j},q},a.models.lineChart=function(){function s(a){return a.each(function(l){var t=d3.select(this),u=this,v=(h||parseInt(t.style("width"))||960)-f.left-f.right,w=(i||parseInt(t.style("height"))||400)-f.top-f.bottom;s.update=function(){s(a)},s.container=this;if(!l||!l.length||!l.filter(function(a){return a.values.length}).length){var z=t.selectAll(".nv-noData").data([p]);return z.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),z.attr("x",f.left+v/2).attr("y",f.top+w/2).text(function(a){return a}),s}t.selectAll(".nv-noData").remove(),m=b.xScale(),n=b.yScale();var A=t.selectAll("g.nv-wrap.nv-lineChart").data([l]),B=A.enter().append("g").attr("class","nvd3 nv-wrap nv-lineChart").append("g"),C=A.select("g");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-linesWrap"),B.append("g").attr("class","nv-legendWrap"),j&&(e.width(v),C.select(".nv-legendWrap").datum(l).call(e),f.top!=e.height()&&(f.top=e.height(),w=(i||parseInt(t.style("height"))||400)-f.top-f.bottom),A.select(".nv-legendWrap").attr("transform","translate(0,"+ -f.top+")")),A.attr("transform","translate("+f.left+","+f.top+")"),b.width(v).height(w).color(l.map(function(a,b){return a.color||g(a,b)}).filter(function(a,b){return!l[b].disabled}));var D=C.select(".nv-linesWrap").datum(l.filter(function(a){return!a.disabled}));d3.transition(D).call(b),c.scale(m).ticks(v/100).tickSize(-w,0),C.select(".nv-x.nv-axis").attr("transform","translate(0,"+n.range()[0]+")"),d3.transition(C.select(".nv-x.nv-axis")).call(c),d.scale(n).ticks(w/36).tickSize(-v,0),d3.transition(C.select(".nv-y.nv-axis")).call(d),e.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,l.filter(function(a){return!a.disabled}).length||l.map(function(a){return a.disabled=!1,A.selectAll(".nv-series").classed("disabled",!1),a}),o.disabled=l.map(function(a){return!!a.disabled}),q.stateChange(o),a.transition().call(s)}),q.on("tooltipShow",function(a){k&&r(a,u.parentNode)}),q.on("changeState",function(b){typeof b.disabled!="undefined"&&(l.forEach(function(a,c){a.disabled=b.disabled[c]}),o.disabled=b.disabled),a.call(s)})}),s}var b=a.models.line(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f={top:30,right:20,bottom:50,left:60},g=a.utils.defaultColor(),h=null,i=null,j=!0,k=!0,l=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" at "+b+"</p>"},m,n,o={},p="No Data Available.",q=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");c.orient("bottom").tickPadding(7),d.orient("left");var r=function(e,f){if(f){var g=d3.select(f).select("svg"),h=g.attr("viewBox");if(h){h=h.split(" ");var i=parseInt(g.style("width"))/h[2];e.pos[0]=e.pos[0]*i,e.pos[1]=e.pos[1]*i}}var j=e.pos[0]+(f.offsetLeft||0),k=e.pos[1]+(f.offsetTop||0),m=c.tickFormat()(b.x()(e.point,e.pointIndex)),n=d.tickFormat()(b.y()(e.point,e.pointIndex)),o=l(e.series.key,m,n,e,s);a.tooltip.show([j,k],o,null,null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+f.left,a.pos[1]+f.top],q.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){q.tooltipHide(a)}),q.on("tooltipHide",function(){k&&a.tooltip.cleanup()}),s.dispatch=q,s.lines=b,s.legend=e,s.xAxis=c,s.yAxis=d,d3.rebind(s,b,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","forceX","forceY","interactive","clipEdge","clipVoronoi","id","interpolate"),s.margin=function(a){return arguments.length?(f.top=typeof a.top!="undefined"?a.top:f.top,f.right=typeof a.right!="undefined"?a.right:f.right,f.bottom=typeof a.bottom!="undefined"?a.bottom:f.bottom,f.left=typeof a.left!="undefined"?a.left:f.left,s):f},s.width=function(a){return arguments.length?(h=a,s):h},s.height=function(a){return arguments.length?(i=a,s):i},s.color=function(b){return arguments.length?(g=a.utils.getColor(b),e.color(g),s):g},s.showLegend=function(a){return arguments.length?(j=a,s):j},s.tooltips=function(a){return arguments.length?(k=a,s):k},s.tooltipContent=function(a){return arguments.length?(l=a,s):l},s.state=function(a){return arguments.length?(o=a,s):o},s.noData=function(a){return arguments.length?(p=a,s):p},s},a.models.linePlusBarChart=function(){function x(a){return a.each(function(k){var l=d3.select(this),p=this,y=(i||parseInt(l.style("width"))||960)-h.left-h.right,z=(j||parseInt(l.style("height"))||400)-h.top-h.bottom;x.update=function(){x(a)},x.container=this;if(!k||!k.length||!k.filter(function(a){return a.values.length}).length){var A=l.selectAll(".nv-noData").data([t]);return A.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),A.attr("x",h.left+y/2).attr("y",h.top+z/2).text(function(a){return a}),x}l.selectAll(".nv-noData").remove();var B=k.filter(function(a){return!a.disabled&&a.bar}),C=k.filter(function(a){return!a.bar});q=C.filter(function(a){return!a.disabled}).length&&C.filter(function(a){return!a.disabled})[0].values.length?b.xScale():c.xScale(),r=c.yScale(),s=b.yScale();var D=d3.select(this).selectAll("g.nv-wrap.nv-linePlusBar").data([k]),E=D.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),F=D.select("g");E.append("g").attr("class","nv-x nv-axis"),E.append("g").attr("class","nv-y1 nv-axis"),E.append("g").attr("class","nv-y2 nv-axis"),E.append("g").attr("class","nv-barsWrap"),E.append("g").attr("class","nv-linesWrap"),E.append("g").attr("class","nv-legendWrap"),n&&(g.width(y/2),F.select(".nv-legendWrap").datum(k.map(function(a){return a.originalKey=a.originalKey===undefined?a.key:a.originalKey,a.key=a.originalKey+(a.bar?" (left axis)":" (right axis)"),a})).call(g),h.top!=g.height()&&(h.top=g.height(),z=(j||parseInt(l.style("height"))||400)-h.top-h.bottom),F.select(".nv-legendWrap").attr("transform","translate("+y/2+","+ -h.top+")")),D.attr("transform","translate("+h.left+","+h.top+")"),b.width(y).height(z).color(k.map(function(a,b){return a.color||m(a,b)}).filter(function(a,b){return!k[b].disabled&&!k[b].bar})),c.width(y).height(z).color(k.map(function(a,b){return a.color||m(a,b)}).filter(function(a,b){return!k[b].disabled&&k[b].bar}));var G=F.select(".nv-barsWrap").datum(B.length?B:[{values:[]}]),H=F.select(".nv-linesWrap").datum(C[0].disabled?[{values:[]}]:C);d3.transition(G).call(c),d3.transition(H).call(b),d.scale(q).ticks(y/100).tickSize(-z,0),F.select(".nv-x.nv-axis").attr("transform","translate(0,"+r.range()[0]+")"),d3.transition(F.select(".nv-x.nv-axis")).call(d),e.scale(r).ticks(z/36).tickSize(-y,0),d3.transition(F.select(".nv-y1.nv-axis")).style("opacity",B.length?1:0).call(e),f.scale(s).ticks(z/36).tickSize(B.length?0:-y,0),F.select(".nv-y2.nv-axis").style("opacity",C.length?1:0).attr("transform","translate("+y+",0)"),d3.transition(F.select(".nv-y2.nv-axis")).call(f),g.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,k.filter(function(a){return!a.disabled}).length||k.map(function(a){return a.disabled=!1,D.selectAll(".nv-series").classed("disabled",!1),a}),v.disabled=k.map(function(a){return!!a.disabled}),u.stateChange(v),a.transition().call(x)}),u.on("tooltipShow",function(a){o&&w(a,p.parentNode)}),u.on("changeState",function(b){typeof b.disabled!="undefined"&&(k.forEach(function(a,c){a.disabled=b.disabled[c]}),v.disabled=b.disabled),a.call(x)})}),x}var b=a.models.line(),c=a.models.historicalBar(),d=a.models.axis(),e=a.models.axis(),f=a.models.axis(),g=a.models.legend(),h={top:30,right:60,bottom:50,left:60},i=null,j=null,k=function(a){return a.x},l=function(a){return a.y},m=a.utils.defaultColor(),n=!0,o=!0,p=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" at "+b+"</p>"},q,r,s,t="No Data Available.",u=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");c.padData(!0),b.clipEdge(!1).padData(!0),d.orient("bottom").tickPadding(7).highlightZero(!1),e.orient("left"),f.orient("right");var v={},w=function(c,g){var h=c.pos[0]+(g.offsetLeft||0),i=c.pos[1]+(g.offsetTop||0),j=d.tickFormat()(b.x()(c.point,c.pointIndex)),k=(c.series.bar?e:f).tickFormat()(b.y()(c.point,c.pointIndex)),l=p(c.series.key,j,k,c,x);a.tooltip.show([h,i],l,c.value<0?"n":"s",null,g)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+h.left,a.pos[1]+h.top],u.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){u.tooltipHide(a)}),c.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+h.left,a.pos[1]+h.top],u.tooltipShow(a)}),c.dispatch.on("elementMouseout.tooltip",function(a){u.tooltipHide(a)}),u.on("tooltipHide",function(){o&&a.tooltip.cleanup()}),x.dispatch=u,x.legend=g,x.lines=b,x.bars=c,x.xAxis=d,x.y1Axis=e,x.y2Axis=f,d3.rebind(x,b,"defined","size","clipVoronoi","interpolate"),x.x=function(a){return arguments.length?(k=a,b.x(a),c.x(a),x):k},x.y=function(a){return arguments.length?(l=a,b.y(a),c.y(a),x):l},x.margin=function(a){return arguments.length?(h.top=typeof a.top!="undefined"?a.top:h.top,h.right=typeof a.right!="undefined"?a.right:h.right,h.bottom=typeof a.bottom!="undefined"?a.bottom:h.bottom,h.left=typeof a.left!="undefined"?a.left:h.left,x):h},x.width=function(a){return arguments.length?(i=a,x):i},x.height=function(a){return arguments.length?(j=a,x):j},x.color=function(b){return arguments.length?(m=a.utils.getColor(b),g.color(m),x):m},x.showLegend=function(a){return arguments.length?(n=a,x):n},x.tooltips=function(a){return arguments.length?(o=a,x):o},x.tooltipContent=function(a){return arguments.length?(p=a,x):p},x.state=function(a){return arguments.length?(v=a,x):v},x.noData=function(a){return arguments.length?(t=a,x):t},x},a.models.lineWithFocusChart=function(){function A(a){return a.each(function(w){function P(a){var b=+(a=="e"),c=b?1:-1,d=F/3;return"M"+.5*c+","+d+"A6,6 0 0 "+b+" "+6.5*c+","+(d+6)+"V"+(2*d-6)+"A6,6 0 0 "+b+" "+.5*c+","+2*d+"Z"+"M"+2.5*c+","+(d+8)+"V"+(2*d-8)+"M"+4.5*c+","+(d+8)+"V"+(2*d-8)}function Q(){i.empty()||i.extent(u),N.data([i.empty()?r.domain():u]).each(function(a,b){var c=r(a[0])-p.range()[0],d=p.range()[1]-r(a[1]);d3.select(this).select(".left").attr("width",c<0?0:c),d3.select(this).select(".right").attr("x",r(a[1])).attr("width",d<0?0:d)})}function R(){u=i.empty()?null:i.extent(),extent=i.empty()?r.domain():i.extent(),y.brush({extent:extent,brush:i}),Q();var a=J.select(".nv-focus .nv-linesWrap").datum(w.filter(function(a){return!a.disabled}).map(function(a,c){return{key:a.key,values:a.values.filter(function(a,c){return b.x()(a,c)>=extent[0]&&b.x()(a,c)<=extent[1]})}}));d3.transition(a).call(b),d3.transition(J.select(".nv-focus .nv-x.nv-axis")).call(d),d3.transition(J.select(".nv-focus .nv-y.nv-axis")).call(e)}var B=d3.select(this),C=this,D=(m||parseInt(B.style("width"))||960)-j.left-j.right,E=(n||parseInt(B.style("height"))||400)-j.top-j.bottom-o,F=o-k.top-k.bottom;A.update=function(){A(a)},A.container=this;if(!w||!w.length||!w.filter(function(a){return a.values.length}).length){var G=B.selectAll(".nv-noData").data([x]);return G.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),G.attr("x",j.left+D/2).attr("y",j.top+E/2).text(function(a){return a}),A}B.selectAll(".nv-noData").remove(),p=b.xScale(),q=b.yScale(),r=c.xScale(),s=c.yScale();var H=B.selectAll("g.nv-wrap.nv-lineWithFocusChart").data([w]),I=H.enter().append("g").attr("class","nvd3 nv-wrap nv-lineWithFocusChart").append("g"),J=H.select("g");I.append("g").attr("class","nv-legendWrap");var K=I.append("g").attr("class","nv-focus");K.append("g").attr("class","nv-x nv-axis"),K.append("g").attr("class","nv-y nv-axis"),K.append("g").attr("class","nv-linesWrap");var L=I.append("g").attr("class","nv-context");L.append("g").attr("class","nv-x nv-axis"),L.append("g").attr("class","nv-y nv-axis"),L.append("g").attr("class","nv-linesWrap"),L.append("g").attr("class","nv-brushBackground"),L.append("g").attr("class","nv-x nv-brush"),t&&(h.width(D),J.select(".nv-legendWrap").datum(w).call(h),j.top!=h.height()&&(j.top=h.height(),E=(n||parseInt(B.style("height"))||400)-j.top-j.bottom-o),J.select(".nv-legendWrap").attr("transform","translate(0,"+ -j.top+")")),H.attr("transform","translate("+j.left+","+j.top+")"),b.width(D).height(E).color(w.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!w[b].disabled})),c.defined(b.defined()).width(D).height(F).color(w.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!w[b].disabled})),J.select(".nv-context").attr("transform","translate(0,"+(E+j.bottom+k.top)+")");var M=J.select(".nv-context .nv-linesWrap").datum(w.filter(function(a){return!a.disabled}));d3.transition(M).call(c),d.scale(p).ticks(D/100).tickSize(-E,0),e.scale(q).ticks(E/36).tickSize(-D,0),J.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+E+")"),i.x(r).on("brush",R),u&&i.extent(u);var N=J.select(".nv-brushBackground").selectAll("g").data([u||i.extent()]),O=N.enter().append("g");O.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",F),O.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",F),gBrush=J.select(".nv-x.nv-brush").call(i),gBrush.selectAll("rect").attr("height",F),gBrush.selectAll(".resize").append("path").attr("d",P),R(),f.scale(r).ticks(D/100).tickSize(-F,0),J.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+s.range()[0]+")"),d3.transition(J.select(".nv-context .nv-x.nv-axis")).call(f),g.scale(s).ticks(F/36).tickSize(-D,0),d3.transition(J.select(".nv-context .nv-y.nv-axis")).call(g),J.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+s.range()[0]+")"),h.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,w.filter(function(a){return!a.disabled}).length||w.map(function(a){return a.disabled=!1,H.selectAll(".nv-series").classed("disabled",!1),a}),a.transition().call(A)}),y.on("tooltipShow",function(a){v&&z(a,C.parentNode)})}),A}var b=a.models.line(),c=a.models.line(),d=a.models.axis(),e=a.models.axis(),f=a.models.axis(),g=a.models.axis(),h=a.models.legend(),i=d3.svg.brush(),j={top:30,right:30,bottom:30,left:60},k={top:0,right:30,bottom:20,left:60},l=a.utils.defaultColor(),m=null,n=null,o=100,p,q,r,s,t=!0,u=null,v=!0,w=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" at "+b+"</p>"},x="No Data Available.",y=d3.dispatch("tooltipShow","tooltipHide","brush");b.clipEdge(!0),c.interactive(!1),d.orient("bottom").tickPadding(5),e.orient("left"),f.orient("bottom").tickPadding(5),g.orient("left");var z=function(c,f){var g=c.pos[0]+(f.offsetLeft||0),h=c.pos[1]+(f.offsetTop||0),i=d.tickFormat()(b.x()(c.point,c.pointIndex)),j=e.tickFormat()(b.y()(c.point,c.pointIndex)),k=w(c.series.key,i,j,c,A);a.tooltip.show([g,h],k,null,null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+j.left,a.pos[1]+j.top],y.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){y.tooltipHide(a)}),y.on("tooltipHide",function(){v&&a.tooltip.cleanup()}),A.dispatch=y,A.legend=h,A.lines=b,A.lines2=c,A.xAxis=d,A.yAxis=e,A.x2Axis=f,A.y2Axis=g,d3.rebind(A,b,"defined","isArea","size","xDomain","yDomain","forceX","forceY","interactive","clipEdge","clipVoronoi","id"),A.x=function(a){return arguments.length?(b.x(a),c.x(a),A):b.x},A.y=function(a){return arguments.length?(b.y(a),c.y(a),A):b.y},A.margin=function(a){return arguments.length?(j.top=typeof a.top!="undefined"?a.top:j.top,j.right=typeof a.right!="undefined"?a.right:j.right,j.bottom=typeof a.bottom!="undefined"?a.bottom:j.bottom,j.left=typeof a.left!="undefined"?a.left:j.left,A):j},A.margin2=function(a){return arguments.length?(k=a,A):k},A.width=function(a){return arguments.length?(m=a,A):m},A.height=function(a){return arguments.length?(n=a,A):n},A.height2=function(a){return arguments.length?(o=a,A):o},A.color=function(b){return arguments.length?(l=a.utils.getColor(b),h.color(l),A):l},A.showLegend=function(a){return arguments.length?(t=
a,A):t},A.tooltips=function(a){return arguments.length?(v=a,A):v},A.tooltipContent=function(a){return arguments.length?(w=a,A):w},A.interpolate=function(a){return arguments.length?(b.interpolate(a),c.interpolate(a),A):b.interpolate()},A.noData=function(a){return arguments.length?(x=a,A):x},A.xTickFormat=function(a){return arguments.length?(d.tickFormat(a),f.tickFormat(a),A):d.tickFormat()},A.yTickFormat=function(a){return arguments.length?(e.tickFormat(a),g.tickFormat(a),A):e.tickFormat()},A},a.models.multiBar=function(){function t(a){return a.each(function(a){var t=c-b.left-b.right,u=d-b.top-b.bottom,v=d3.select(this);l&&(a=d3.layout.stack().offset("zero").values(function(a){return a.values}).y(i)(a)),a=a.map(function(a,b){return a.values=a.values.map(function(a){return a.series=b,a}),a}),l&&a[0].values.map(function(b,c){var d=0,e=0;a.map(function(a){var b=a.values[c];b.size=Math.abs(b.y),b.y<0?(b.y1=e,e-=b.size):(b.y1=b.size+d,d+=b.size)})});var w=o&&p?[]:a.map(function(a){return a.values.map(function(a,b){return{x:h(a,b),y:i(a,b),y0:a.y0,y1:a.y1}})});e.domain(d3.merge(w).map(function(a){return a.x})).rangeBands([0,t],.1),f.domain(p||d3.extent(d3.merge(w).map(function(a){return a.y+(l?a.y1:0)}).concat(j))).range([u,0]);if(e.domain()[0]===e.domain()[1]||f.domain()[0]===f.domain()[1])singlePoint=!0;e.domain()[0]===e.domain()[1]&&(e.domain()[0]?e.domain([e.domain()[0]-e.domain()[0]*.01,e.domain()[1]+e.domain()[1]*.01]):e.domain([-1,1])),f.domain()[0]===f.domain()[1]&&(f.domain()[0]?f.domain([f.domain()[0]+f.domain()[0]*.01,f.domain()[1]-f.domain()[1]*.01]):f.domain([-1,1])),r=r||e,s=s||f;var z=v.selectAll("g.nv-wrap.nv-multibar").data([a]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),B=A.append("defs"),C=A.append("g"),D=z.select("g");C.append("g").attr("class","nv-groups"),z.attr("transform","translate("+b.left+","+b.top+")"),B.append("clipPath").attr("id","nv-edge-clip-"+g).append("rect"),z.select("#nv-edge-clip-"+g+" rect").attr("width",t).attr("height",u),D.attr("clip-path",k?"url(#nv-edge-clip-"+g+")":"");var E=z.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});E.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),d3.transition(E.exit()).selectAll("rect.nv-bar").delay(function(b,c){return c*n/a[0].values.length}).attr("y",function(a){return l?s(a.y0):s(0)}).attr("height",0).remove(),E.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return m(a,b)}).style("stroke",function(a,b){return m(a,b)}),d3.transition(E).style("stroke-opacity",1).style("fill-opacity",.75);var F=E.selectAll("rect.nv-bar").data(function(a){return a.values});F.exit().remove();var G=F.enter().append("rect").attr("class",function(a,b){return i(a,b)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(b,c,d){return l?0:d*e.rangeBand()/a.length}).attr("y",function(a){return s(l?a.y0:0)}).attr("height",0).attr("width",e.rangeBand()/(l?1:a.length));F.style("fill",function(a,b,c){return m(a,c,b)}).style("stroke",function(a,b,c){return m(a,c,b)}).on("mouseover",function(b,c){d3.select(this).classed("hover",!0),q.elementMouseover({value:i(b,c),point:b,series:a[b.series],pos:[e(h(b,c))+e.rangeBand()*(l?a.length/2:b.series+.5)/a.length,f(i(b,c)+(l?b.y0:0))],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("mouseout",function(b,c){d3.select(this).classed("hover",!1),q.elementMouseout({value:i(b,c),point:b,series:a[b.series],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("click",function(b,c){q.elementClick({value:i(b,c),point:b,series:a[b.series],pos:[e(h(b,c))+e.rangeBand()*(l?a.length/2:b.series+.5)/a.length,f(i(b,c)+(l?b.y0:0))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(b,c){q.elementDblClick({value:i(b,c),point:b,series:a[b.series],pos:[e(h(b,c))+e.rangeBand()*(l?a.length/2:b.series+.5)/a.length,f(i(b,c)+(l?b.y0:0))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()}),F.attr("class",function(a,b){return i(a,b)<0?"nv-bar negative":"nv-bar positive"}).attr("transform",function(a,b){return"translate("+e(h(a,b))+",0)"}),l?d3.transition(F).delay(function(b,c){return c*n/a[0].values.length}).attr("y",function(a,b){return f(l?a.y1:0)}).attr("height",function(a,b){return Math.max(Math.abs(f(a.y+(l?a.y0:0))-f(l?a.y0:0)),1)}).each("end",function(){d3.transition(d3.select(this)).attr("x",function(b,c){return l?0:b.series*e.rangeBand()/a.length}).attr("width",e.rangeBand()/(l?1:a.length))}):d3.transition(F).delay(function(b,c){return c*n/a[0].values.length}).attr("x",function(b,c){return b.series*e.rangeBand()/a.length}).attr("width",e.rangeBand()/a.length).each("end",function(){d3.transition(d3.select(this)).attr("y",function(a,b){return i(a,b)<0?f(0):f(0)-f(i(a,b))<1?f(0)-1:f(i(a,b))}).attr("height",function(a,b){return Math.max(Math.abs(f(i(a,b))-f(0)),1)})}),r=e.copy(),s=f.copy()}),t}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=d3.scale.ordinal(),f=d3.scale.linear(),g=Math.floor(Math.random()*1e4),h=function(a){return a.x},i=function(a){return a.y},j=[0],k=!0,l=!1,m=a.utils.defaultColor(),n=1200,o,p,q=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),r,s;return t.dispatch=q,t.x=function(a){return arguments.length?(h=a,t):h},t.y=function(a){return arguments.length?(i=a,t):i},t.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,t):b},t.width=function(a){return arguments.length?(c=a,t):c},t.height=function(a){return arguments.length?(d=a,t):d},t.xScale=function(a){return arguments.length?(e=a,t):e},t.yScale=function(a){return arguments.length?(f=a,t):f},t.xDomain=function(a){return arguments.length?(o=a,t):o},t.yDomain=function(a){return arguments.length?(p=a,t):p},t.forceY=function(a){return arguments.length?(j=a,t):j},t.stacked=function(a){return arguments.length?(l=a,t):l},t.clipEdge=function(a){return arguments.length?(k=a,t):k},t.color=function(b){return arguments.length?(m=a.utils.getColor(b),t):m},t.id=function(a){return arguments.length?(g=a,t):g},t.delay=function(a){return arguments.length?(n=a,t):n},t},a.models.multiBarChart=function(){function w(a){return a.each(function(p){var z=d3.select(this),A=this,B=(h||parseInt(z.style("width"))||960)-g.left-g.right,C=(i||parseInt(z.style("height"))||400)-g.top-g.bottom;w.update=function(){a.transition().call(w)},w.container=this;if(!p||!p.length||!p.filter(function(a){return a.values.length}).length){var D=z.selectAll(".nv-noData").data([t]);return D.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),D.attr("x",g.left+B/2).attr("y",g.top+C/2).text(function(a){return a}),w}z.selectAll(".nv-noData").remove(),q=b.xScale(),r=b.yScale();var E=z.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([p]),F=E.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),G=E.select("g");F.append("g").attr("class","nv-x nv-axis"),F.append("g").attr("class","nv-y nv-axis"),F.append("g").attr("class","nv-barsWrap"),F.append("g").attr("class","nv-legendWrap"),F.append("g").attr("class","nv-controlsWrap"),l&&(e.width(B/2),G.select(".nv-legendWrap").datum(p).call(e),g.top!=e.height()&&(g.top=e.height(),C=(i||parseInt(z.style("height"))||400)-g.top-g.bottom),G.select(".nv-legendWrap").attr("transform","translate("+B/2+","+ -g.top+")"));if(k){var H=[{key:"Grouped",disabled:b.stacked()},{key:"Stacked",disabled:!b.stacked()}];f.width(180).color(["#444","#444","#444"]),G.select(".nv-controlsWrap").datum(H).attr("transform","translate(0,"+ -g.top+")").call(f)}E.attr("transform","translate("+g.left+","+g.top+")"),b.width(B).height(C).color(p.map(function(a,b){return a.color||j(a,b)}).filter(function(a,b){return!p[b].disabled}));var I=G.select(".nv-barsWrap").datum(p.filter(function(a){return!a.disabled}));d3.transition(I).call(b),c.scale(q).ticks(B/100).tickSize(-C,0),G.select(".nv-x.nv-axis").attr("transform","translate(0,"+r.range()[0]+")"),d3.transition(G.select(".nv-x.nv-axis")).call(c);var J=G.select(".nv-x.nv-axis > g").selectAll("g");J.selectAll("line, text").style("opacity",1),m&&J.filter(function(a,b){return b%Math.ceil(p[0].values.length/(B/100))!==0}).selectAll("text, line").style("opacity",0),n&&J.selectAll("text").attr("transform",function(a,b,c){return"rotate("+n+" 0,0)"}).attr("text-transform",n>0?"start":"end"),G.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1),d.scale(r).ticks(C/36).tickSize(-B,0),d3.transition(G.select(".nv-y.nv-axis")).call(d),e.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,p.filter(function(a){return!a.disabled}).length||p.map(function(a){return a.disabled=!1,E.selectAll(".nv-series").classed("disabled",!1),a}),s.disabled=p.map(function(a){return!!a.disabled}),u.stateChange(s),a.transition().call(w)}),f.dispatch.on("legendClick",function(c,d){if(!c.disabled)return;H=H.map(function(a){return a.disabled=!0,a}),c.disabled=!1;switch(c.key){case"Grouped":b.stacked(!1);break;case"Stacked":b.stacked(!0)}s.stacked=b.stacked(),u.stateChange(s),a.transition().call(w)}),u.on("tooltipShow",function(a){o&&v(a,A.parentNode)}),u.on("changeState",function(c){typeof c.disabled!="undefined"&&(p.forEach(function(a,b){a.disabled=c.disabled[b]}),s.disabled=c.disabled),typeof c.stacked!="undefined"&&(b.stacked(c.stacked),s.stacked=c.stacked),a.call(w)})}),w}var b=a.models.multiBar(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f=a.models.legend(),g={top:30,right:20,bottom:30,left:60},h=null,i=null,j=a.utils.defaultColor(),k=!0,l=!0,m=!0,n=0,o=!0,p=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" on "+b+"</p>"},q,r,s={stacked:!1},t="No Data Available.",u=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");b.stacked(!1),c.orient("bottom").tickPadding(7).highlightZero(!1).showMaxMin(!1).tickFormat(function(a){return a}),d.orient("left").tickFormat(d3.format(",.1f"));var v=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),i=c.tickFormat()(b.x()(e.point,e.pointIndex)),j=d.tickFormat()(b.y()(e.point,e.pointIndex)),k=p(e.series.key,i,j,e,w);a.tooltip.show([g,h],k,e.value<0?"n":"s",null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+g.left,a.pos[1]+g.top],u.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){u.tooltipHide(a)}),u.on("tooltipHide",function(){o&&a.tooltip.cleanup()}),w.dispatch=u,w.multibar=b,w.legend=e,w.xAxis=c,w.yAxis=d,d3.rebind(w,b,"x","y","xDomain","yDomain","forceX","forceY","clipEdge","id","stacked","delay"),w.margin=function(a){return arguments.length?(g.top=typeof a.top!="undefined"?a.top:g.top,g.right=typeof a.right!="undefined"?a.right:g.right,g.bottom=typeof a.bottom!="undefined"?a.bottom:g.bottom,g.left=typeof a.left!="undefined"?a.left:g.left,w):g},w.width=function(a){return arguments.length?(h=a,w):h},w.height=function(a){return arguments.length?(i=a,w):i},w.color=function(b){return arguments.length?(j=a.utils.getColor(b),e.color(j),w):j},w.showControls=function(a){return arguments.length?(k=a,w):k},w.showLegend=function(a){return arguments.length?(l=a,w):l},w.reduceXTicks=function(a){return arguments.length?(m=a,w):m},w.rotateLabels=function(a){return arguments.length?(n=a,w):n},w.tooltip=function(a){return arguments.length?(p=a,w):p},w.tooltips=function(a){return arguments.length?(o=a,w):o},w.tooltipContent=function(a){return arguments.length?(p=a,w):p},w.state=function(a){return arguments.length?(s=a,w):s},w.noData=function(a){return arguments.length?(t=a,w):t},w},a.models.multiBarHorizontal=function(){function v(a){return a.each(function(a){var e=c-b.left-b.right,p=d-b.top-b.bottom,v=d3.select(this);l&&(a=d3.layout.stack().offset("zero").values(function(a){return a.values}).y(i)(a)),a=a.map(function(a,b){return a.values=a.values.map(function(a){return a.series=b,a}),a});var w=q&&r?[]:a.map(function(a){return a.values.map(function(a,b){return{x:h(a,b),y:i(a,b),y0:a.y0}})});f.domain(q||d3.merge(w).map(function(a){return a.x})).rangeBands([0,p],.1),g.domain(r||d3.extent(d3.merge(w).map(function(a){return a.y+(l?a.y0:0)}).concat(j))),m&&!l?g.range([g.domain()[0]<0?n:0,e-(g.domain()[1]>0?n:0)]):g.range([0,e]),t=t||f,u=u||d3.scale.linear().domain(g.domain()).range([g(0),g(0)]);var z=d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([a]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-multibarHorizontal"),B=A.append("defs"),C=A.append("g"),D=z.select("g");C.append("g").attr("class","nv-groups"),z.attr("transform","translate("+b.left+","+b.top+")");var E=z.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});E.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),d3.transition(E.exit()).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),E.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return k(a,b)}).style("stroke",function(a,b){return k(a,b)}),d3.transition(E).style("stroke-opacity",1).style("fill-opacity",.75);var F=E.selectAll("g.nv-bar").data(function(a){return a.values});F.exit().remove();var G=F.enter().append("g").attr("transform",function(b,c,d){return"translate("+u(l?b.y0:0)+","+(l?0:d*f.rangeBand()/a.length+f(h(b,c)))+")"});G.append("rect").attr("width",0).attr("height",f.rangeBand()/(l?1:a.length)),F.on("mouseover",function(b,c){d3.select(this).classed("hover",!0),s.elementMouseover({value:i(b,c),point:b,series:a[b.series],pos:[g(i(b,c)+(l?b.y0:0)),f(h(b,c))+f.rangeBand()*(l?a.length/2:b.series+.5)/a.length],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("mouseout",function(b,c){d3.select(this).classed("hover",!1),s.elementMouseout({value:i(b,c),point:b,series:a[b.series],pointIndex:c,seriesIndex:b.series,e:d3.event})}).on("click",function(b,c){s.elementClick({value:i(b,c),point:b,series:a[b.series],pos:[f(h(b,c))+f.rangeBand()*(l?a.length/2:b.series+.5)/a.length,g(i(b,c)+(l?b.y0:0))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(b,c){s.elementDblClick({value:i(b,c),point:b,series:a[b.series],pos:[f(h(b,c))+f.rangeBand()*(l?a.length/2:b.series+.5)/a.length,g(i(b,c)+(l?b.y0:0))],pointIndex:c,seriesIndex:b.series,e:d3.event}),d3.event.stopPropagation()}),m&&!l?(G.append("text").attr("text-anchor",function(a,b){return i(a,b)<0?"end":"start"}),F.select("text").attr("y",f.rangeBand()/2).attr("dy","-.32em").text(function(a,b){return o(i(a,b))}),d3.transition(F).select("text").attr("x",function(a,b){return i(a,b)<0?-4:g(i(a,b))-g(0)+4})):F.selectAll("text").remove(),F.attr("class",function(a,b){return i(a,b)<0?"nv-bar negative":"nv-bar positive"}),l?d3.transition(F).attr("transform",function(a,b){return"translate("+g(a.y0)+","+f(h(a,b))+")"}).select("rect").attr("width",function(a,b){return Math.abs(g(i(a,b)+a.y0)-g(a.y0))}).attr("height",f.rangeBand()):d3.transition(F).attr("transform",function(b,c){return"translate("+(i(b,c)<0?g(i(b,c)):g(0))+","+(b.series*f.rangeBand()/a.length+f(h(b,c)))+")"}).select("rect").attr("height",f.rangeBand()/a.length).attr("width",function(a,b){return Math.max(Math.abs(g(i(a,b))-g(0)),1)}),t=f.copy(),u=g.copy()}),v}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=Math.floor(Math.random()*1e4),f=d3.scale.ordinal(),g=d3.scale.linear(),h=function(a){return a.x},i=function(a){return a.y},j=[0],k=a.utils.defaultColor(),l=!1,m=!1,n=60,o=d3.format(",.2f"),p=1200,q,r,s=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),t,u;return v.dispatch=s,v.x=function(a){return arguments.length?(h=a,v):h},v.y=function(a){return arguments.length?(i=a,v):i},v.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,v):b},v.width=function(a){return arguments.length?(c=a,v):c},v.height=function(a){return arguments.length?(d=a,v):d},v.xScale=function(a){return arguments.length?(f=a,v):f},v.yScale=function(a){return arguments.length?(g=a,v):g},v.xDomain=function(a){return arguments.length?(q=a,v):q},v.yDomain=function(a){return arguments.length?(r=a,v):r},v.forceY=function(a){return arguments.length?(j=a,v):j},v.stacked=function(a){return arguments.length?(l=a,v):l},v.color=function(b){return arguments.length?(k=a.utils.getColor(b),v):k},v.id=function(a){return arguments.length?(e=a,v):e},v.delay=function(a){return arguments.length?(p=a,v):p},v.showValues=function(a){return arguments.length?(m=a,v):m},v.valueFormat=function(a){return arguments.length?(o=a,v):o},v.valuePadding=function(a){return arguments.length?(n=a,v):n},v},a.models.multiBarHorizontalChart=function(){function v(a){return a.each(function(m){var o=d3.select(this),w=this,z=(h||parseInt(o.style("width"))||960)-g.left-g.right,A=(i||parseInt(o.style("height"))||400)-g.top-g.bottom;v.update=function(){a.transition().call(v)},v.container=this;if(!m||!m.length||!m.filter(function(a){return a.values.length}).length){var B=o.selectAll(".nv-noData").data([s]);return B.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),B.attr("x",g.left+z/2).attr("y",g.top+A/2).text(function(a){return a}),v}o.selectAll(".nv-noData").remove(),p=b.xScale(),q=b.yScale();var C=o.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([m]),D=C.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),E=C.select("g");D.append("g").attr("class","nv-x nv-axis"),D.append("g").attr("class","nv-y nv-axis"),D.append("g").attr("class","nv-barsWrap"),D.append("g").attr("class","nv-legendWrap"),D.append("g").attr("class","nv-controlsWrap"),l&&(e.width(z/2),E.select(".nv-legendWrap").datum(m).call(e),g.top!=e.height()&&(g.top=e.height(),A=(i||parseInt(o.style("height"))||400)-g.top-g.bottom),E.select(".nv-legendWrap").attr("transform","translate("+z/2+","+ -g.top+")"));if(k){var F=[{key:"Grouped",disabled:b.stacked()},{key:"Stacked",disabled:!b.stacked()}];f.width(180).color(["#444","#444","#444"]),E.select(".nv-controlsWrap").datum(F).attr("transform","translate(0,"+ -g.top+")").call(f)}C.attr("transform","translate("+g.left+","+g.top+")"),b.width(z).height(A).color(m.map(function(a,b){return a.color||j(a,b)}).filter(function(a,b){return!m[b].disabled}));var G=E.select(".nv-barsWrap").datum(m.filter(function(a){return!a.disabled}));d3.transition(G).call(b),c.scale(p).ticks(A/24).tickSize(-z,0),d3.transition(E.select(".nv-x.nv-axis")).call(c);var H=E.select(".nv-x.nv-axis").selectAll("g");H.selectAll("line, text").style("opacity",1),d.scale(q).ticks(z/100).tickSize(-A,0),E.select(".nv-y.nv-axis").attr("transform","translate(0,"+A+")"),d3.transition(E.select(".nv-y.nv-axis")).call(d),e.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,m.filter(function(a){return!a.disabled}).length||m.map(function(a){return a.disabled=!1,C.selectAll(".nv-series").classed("disabled",!1),a}),r.disabled=m.map(function(a){return!!a.disabled}),t.stateChange(r),a.transition().call(v)}),f.dispatch.on("legendClick",function(c,d){if(!c.disabled)return;F=F.map(function(a){return a.disabled=!0,a}),c.disabled=!1;switch(c.key){case"Grouped":b.stacked(!1);break;case"Stacked":b.stacked(!0)}r.stacked=b.stacked(),t.stateChange(r),a.transition().call(v)}),t.on("tooltipShow",function(a){n&&u(a,w.parentNode)}),t.on("changeState",function(c){typeof c.disabled!="undefined"&&(m.forEach(function(a,b){a.disabled=c.disabled[b]}),r.disabled=c.disabled),typeof c.stacked!="undefined"&&(b.stacked(c.stacked),r.stacked=c.stacked),a.call(v)})}),v}var b=a.models.multiBarHorizontal(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend().height(30),f=a.models.legend().height(30),g={top:30,right:20,bottom:50,left:60},h=null,i=null,j=a.utils.defaultColor(),k=!0,l=!0,m=!1,n=!0,o=function(a,b,c,d,e){return"<h3>"+a+" - "+b+"</h3>"+"<p>"+c+"</p>"},p,q,r={stacked:m},s="No Data Available.",t=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");b.stacked(m),c.orient("left").tickPadding(5).highlightZero(!1).showMaxMin(!1).tickFormat(function(a){return a}),d.orient("bottom").tickFormat(d3.format(",.1f"));var u=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),i=c.tickFormat()(b.x()(e.point,e.pointIndex)),j=d.tickFormat()(b.y()(e.point,e.pointIndex)),k=o(e.series.key,i,j,e,v);a.tooltip.show([g,h],k,e.value<0?"e":"w",null,f)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+g.left,a.pos[1]+g.top],t.tooltipShow(a)}),b.dispatch.on("elementMouseout.tooltip",function(a){t.tooltipHide(a)}),t.on("tooltipHide",function(){n&&a.tooltip.cleanup()}),v.dispatch=t,v.multibar=b,v.legend=e,v.xAxis=c,v.yAxis=d,d3.rebind(v,b,"x","y","xDomain","yDomain","forceX","forceY","clipEdge","id","delay","showValues","valueFormat","stacked"),v.margin=function(a){return arguments.length?(g.top=typeof a.top!="undefined"?a.top:g.top,g.right=typeof a.right!="undefined"?a.right:g.right,g.bottom=typeof a.bottom!="undefined"?a.bottom:g.bottom,g.left=typeof a.left!="undefined"?a.left:g.left,v):g},v.width=function(a){return arguments.length?(h=a,v):h},v.height=function(a){return arguments.length?(i=a,v):i},v.color=function(b){return arguments.length?(j=a.utils.getColor(b),e.color(j),v):j},v.showControls=function(a){return arguments.length?(k=a,v):k},v.showLegend=function(a){return arguments.length?(l=a,v):l},v.tooltip=function(a){return arguments.length?(o=a,v):o},v.tooltips=function(a){return arguments.length?(n=a,v):n},v.tooltipContent=function(a){return arguments.length?(o=a,v):o},v.state=function(a){return arguments.length?(r=a,v):r},v.noData=function(a){return arguments.length?(s=a,v):s},v},a.models.multiChart=function(){function y(a){return a.each(function(h){var j=d3.select(this),z=this,A=(d||parseInt(j.style("width"))||960)-b.left-b.right,B=(e||parseInt(j.style("height"))||400)-b.top-b.bottom,C=h.filter(function(a){return!a.disabled&&a.type=="line"&&a.yAxis==1}),D=h.filter(function(a){return!a.disabled&&a.type=="line"&&a.yAxis==2}),E=h.filter(function(a){return!a.disabled&&a.type=="bar"&&a.yAxis==1}),F=h.filter(function(a){return!a.disabled&&a.type=="bar"&&a.yAxis==2}),G=h.filter(function(a){return!a.disabled&&a.type=="area"&&a.yAxis==1}),H=h.filter(function(a){return!a.disabled&&a.type=="area"&&a.yAxis==2}),I=h.filter(function(a){return!a.disabled&&a.yAxis==1}).map(function(a){return a.values.map(function(a,b){return{x:a.x,y:a.y}})}),J=h.filter(function(a){return!a.disabled&&a.yAxis==2}).map(function(a){return a.values.map(function(a,b){return{x:a.x,y:a.y}})});i.domain(d3.extent(d3.merge(I.concat(J)),function(a){return a.x})).range([0,A]);var K=j.selectAll("g.wrap.multiChart").data([h]),L=K.enter().append("g").attr("class","wrap nvd3 multiChart").append("g");L.append("g").attr("class","x axis"),L.append("g").attr("class","y1 axis"),L.append("g").attr("class","y2 axis"),L.append("g").attr("class","lines1Wrap"),L.append("g").attr("class","lines2Wrap"),L.append("g").attr("class","bars1Wrap"),L.append("g").attr("class","bars2Wrap"),L.append("g").attr("class","stack1Wrap"),L.append("g").attr("class","stack2Wrap"),L.append("g").attr("class","legendWrap");var M=K.select("g");f&&(v.width(A/2),M.select(".legendWrap").datum(h.map(function(a){return a.originalKey=a.originalKey===undefined?a.key:a.originalKey,a.key=a.originalKey+(a.yAxis==1?"":" (right axis)"),a})).call(v),b.top!=v.height()&&(b.top=v.height(),B=(e||parseInt(j.style("height"))||400)-b.top-b.bottom),M.select(".legendWrap").attr("transform","translate("+A/2+","+ -b.top+")")),m.width(A).height(B).interpolate("monotone").color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==1&&h[b].type=="line"})),n.width(A).height(B).interpolate("monotone").color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==2&&h[b].type=="line"})),o.width(A).height(B).color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==1&&h[b].type=="bar"})),p.width(A).height(B).color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==2&&h[b].type=="bar"})),q.width(A).height(B).color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==1&&h[b].type=="area"})),r.width(A).height(B).color(h.map(function(a,b){return a.color||c[b%c.length]}).filter(function(a,b){return!h[b].disabled&&h[b].yAxis==2&&h[b].type=="area"})),M.attr("transform","translate("+b.left+","+b.top+")");var N=M.select(".lines1Wrap").datum(C),O=M.select(".bars1Wrap").datum(E),P=M.select(".stack1Wrap").datum(G),Q=M.select(".lines2Wrap").datum(D),R=M.select(".bars2Wrap").datum(F),S=M.select(".stack2Wrap").datum(H),T=G.length?G.map(function(a){return a.values}).reduce(function(a,b){return a.map(function(a,c){return{x:a.x,y:a.y+b[c].y}})}).concat([{x:0,y:0}]):[],U=H.length?H.map(function(a){return a.values}).reduce(function(a,b){return a.map(function(a,c){return{x:a.x,y:a.y+b[c].y}})}).concat([{x:0,y:0}]):[];k.domain(d3.extent(d3.merge(I).concat(T),function(a){return a.y})).range([0,B]),l.domain(d3.extent(d3.merge(J).concat(U),function(a){return a.y})).range([0,B]),m.yDomain(k.domain()),o.yDomain(k.domain()),q.yDomain(k.domain()),n.yDomain(l.domain()),p.yDomain(l.domain()),r.yDomain(l.domain()),G.length&&d3.transition(P).call(q),H.length&&d3.transition(S).call(r),E.length&&d3.transition(O).call(o),F.length&&d3.transition(R).call(p),C.length&&d3.transition(N).call(m),D.length&&d3.transition(Q).call(n),s.ticks(A/100).tickSize(-B,0),M.select(".x.axis").attr("transform","translate(0,"+B+")"),d3.transition(M.select(".x.axis")).call(s),t.ticks(B/36).tickSize(-A,0),d3.transition(M.select(".y1.axis")).call(t),u.ticks(B/36).tickSize(-A,0),d3.transition(M.select(".y2.axis")).call(u),M.select(".y2.axis").style("opacity",J.length?1:0).attr("transform","translate("+i.range()[1]+",0)"),v.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,h.filter(function(a){return!a.disabled}).length||h.map(function(a){return a.disabled=!1,K.selectAll(".series").classed("disabled",!1),a}),a.transition().call(y)}),w.on("tooltipShow",function(a){g&&x(a,z.parentNode)})}),y.update=function(){y(a)},y.container=this,y}var b={top:30,right:20,bottom:50,left:60},c=d3.scale.category20().range(),d=null,e=null,f=!0,g=!0,h=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" at "+b+"</p>"},i,j,i=d3.scale.linear(),k=d3.scale.linear(),l=d3.scale.linear(),m=a.models.line().yScale(k),n=a.models.line().yScale(l),o=a.models.multiBar().stacked(!1).yScale(k),p=a.models.multiBar().stacked(!1).yScale(l),q=a.models.stackedArea().yScale(k),r=a.models.stackedArea().yScale(l),s=a.models.axis().scale(i).orient("bottom").tickPadding(5),t=a.models.axis().scale(k).orient("left"),u=a.models.axis().scale(l).orient("right"),v=a.models.legend().height(30),w=d3.dispatch("tooltipShow","tooltipHide"),x=function(b,c){var d=b.pos[0]+(c.offsetLeft||0),e=b.pos[1]+(c.offsetTop||0),f=s.tickFormat()(m.x()(b.point,b.pointIndex)),g=(b.series.bar?t:u).tickFormat()(m.y()(b.point,b.pointIndex)),i=h(b.series.key,f,g,b,y);a.tooltip.show([d,e],i,undefined,undefined,c.offsetParent)};return m.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),m.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),n.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),n.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),o.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),o.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),p.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),p.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),q.dispatch.on("tooltipShow",function(a){if(!Math.round(q.y()(a.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),q.dispatch.on("tooltipHide",function(a){w.tooltipHide(a)}),r.dispatch.on("tooltipShow",function(a){if(!Math.round(r.y()(a.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),r.dispatch.on("tooltipHide",function(a){w.tooltipHide(a)}),m.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),m.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),n.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],w.tooltipShow(a)}),n.dispatch.on("elementMouseout.tooltip",function(a){w.tooltipHide(a)}),w.on("tooltipHide",function(){g&&a.tooltip.cleanup()}),y.dispatch=w,y.lines1=m,y.lines2=n,y.bars1=o,y.bars2=p,y.stack1=q,y.stack2=r,y.xAxis=s,y.yAxis1=t,y.yAxis2=u,y.x=function(a){return arguments.length?(getX=a,m.x(a),o.x(a),y):getX},y.y=function(a){return arguments.length?(getY=a,m.y(a),o.y(a),y):getY},y.margin=function(a){return arguments.length?(b=a,y):b},y.width=function(a){return arguments.length?(d=a,y):d},y.height=function(a){return arguments.length?(e=a,y):e},y.color=function(a){return arguments.length?(c=a,v.color(a),y):c},y.showLegend=function(a){return arguments.length?(f=a,y):f},y.tooltips=function(a){return arguments.length?(g=a,y):g},y.tooltipContent=function(a){return arguments.length?(h=a,y):h},y},a.models.ohlcBar=function(){function v(a){return a.each(function(a){var r=c-b.left-b.right,v=d-b.top-b.bottom,w=d3.select(this);f.domain(s||d3.extent(a[0].values.map(h).concat(n))),p?f.range([r*.5/a[0].values.length,r*(a[0].values.length-.5)/a[0].values.length]):f.range([0,r]),g.domain(t||[d3.min(a[0].values.map(m).concat(o)),d3.max(a[0].values.map(l).concat(o))]).range([v,0]);if(f.domain()[0]===f.domain()[1]||g.domain()[0]===g.domain()[1])singlePoint=!0;f.domain()[0]===f.domain()[1]&&(f.domain()[0]?f.domain([f.domain()[0]-f.domain()[0]*.01,f.domain()[1]+f.domain()[1]*.01]):f.domain([-1,1])),g.domain()[0]===g.domain()[1]&&(g.domain()[0]?g.domain([g.domain()[0]+g.domain()[0]*.01,g.domain()[1]-g.domain()[1]*.01]):g.domain([-1,1]));var z=d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([a[0].values]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-ohlcBar"),B=A.append("defs"),C=A.append("g"),D=z.select("g");C.append("g").attr("class","nv-ticks"),z.attr("transform","translate("+b.left+","+b.top+")"),w.on("click",function(a,b){u.chartClick({data:a,index:b,pos:d3.event,id:e})}),B.append("clipPath").attr("id","nv-chart-clip-path-"+e).append("rect"),z.select("#nv-chart-clip-path-"+e+" rect").attr("width",r).attr("height",v),D.attr("clip-path",q?"url(#nv-chart-clip-path-"+e+")":"");var E=z.select(".nv-ticks").selectAll(".nv-tick").data(function(a){return a});E.exit().remove();var F=E.enter().append("path").attr("class",function(a,b,c){return(j(a,b)>k(a,b)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+c+"-"+b}).attr("d",function(b,c){var d=r/a[0].values.length*.9;return"m0,0l0,"+(g(j(b,c))-g(l(b,c)))+"l"+ -d/2+",0l"+d/2+",0l0,"+(g(m(b,c))-g(j(b,c)))+"l0,"+(g(k(b,c))-g(m(b,c)))+"l"+d/2+",0l"+ -d/2+",0z"}).attr("transform",function(a,b){return"translate("+f(h(a,b))+","+g(l(a,b))+")"}).on("mouseover",function(b,c){d3.select(this).classed("hover",!0),u.elementMouseover({point:b,series:a[0],pos:[f(h(b,c)),g(i(b,c))],pointIndex:c,seriesIndex:0,e:d3.event})}).on("mouseout",function(b,c){d3.select(this).classed("hover",!1),u.elementMouseout({point:b,series:a[0],pointIndex:c,seriesIndex:0,e:d3.event})}).on("click",function(a,b){u.elementClick({value:i(a,b),data:a,index:b,pos:[f(h(a,b)),g(i(a,b))],e:d3.event,id:e}),d3.event.stopPropagation()}).on("dblclick",function(a,b){u.elementDblClick({value:i(a,b),data:a,index:b,pos:[f(h(a,b)),g(i(a,b))],e:d3.event,id:e}),d3.event.stopPropagation()});E.attr("class",function(a,b,c){return(j(a,b)>k(a,b)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+c+"-"+b}),d3.transition(E).attr("transform",function(a,b){return"translate("+f(h(a,b))+","+g(l(a,b))+")"}).attr("d",function(b,c){var d=r/a[0].values.length*.9
;return"m0,0l0,"+(g(j(b,c))-g(l(b,c)))+"l"+ -d/2+",0l"+d/2+",0l0,"+(g(m(b,c))-g(j(b,c)))+"l0,"+(g(k(b,c))-g(m(b,c)))+"l"+d/2+",0l"+ -d/2+",0z"})}),v}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=Math.floor(Math.random()*1e4),f=d3.scale.linear(),g=d3.scale.linear(),h=function(a){return a.x},i=function(a){return a.y},j=function(a){return a.open},k=function(a){return a.close},l=function(a){return a.high},m=function(a){return a.low},n=[],o=[],p=!1,q=!0,r=a.utils.defaultColor(),s,t,u=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return v.dispatch=u,v.x=function(a){return arguments.length?(h=a,v):h},v.y=function(a){return arguments.length?(i=a,v):i},v.open=function(a){return arguments.length?(j=a,v):j},v.close=function(a){return arguments.length?(k=a,v):k},v.high=function(a){return arguments.length?(l=a,v):l},v.low=function(a){return arguments.length?(m=a,v):m},v.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,v):b},v.width=function(a){return arguments.length?(c=a,v):c},v.height=function(a){return arguments.length?(d=a,v):d},v.xScale=function(a){return arguments.length?(f=a,v):f},v.yScale=function(a){return arguments.length?(g=a,v):g},v.xDomain=function(a){return arguments.length?(s=a,v):s},v.yDomain=function(a){return arguments.length?(t=a,v):t},v.forceX=function(a){return arguments.length?(n=a,v):n},v.forceY=function(a){return arguments.length?(o=a,v):o},v.padData=function(a){return arguments.length?(p=a,v):p},v.clipEdge=function(a){return arguments.length?(q=a,v):q},v.color=function(b){return arguments.length?(r=a.utils.getColor(b),v):r},v.id=function(a){return arguments.length?(e=a,v):e},v},a.models.pie=function(){function q(a){return a.each(function(a){function E(a){var b=(a.startAngle+a.endAngle)*90/Math.PI-90;return b>90?b-180:b}function F(a){n||(a.innerRadius=0);var b=d3.interpolate(this._current,a);return this._current=b(0),function(a){return y(b(a))}}function G(a){a.innerRadius=0;var b=d3.interpolate({startAngle:0,endAngle:0},a);return function(a){return y(b(a))}}var j=c-b.left-b.right,q=d-b.top-b.bottom,r=Math.min(j,q)/2,s=r-r/5,t=d3.select(this),u=t.selectAll(".nv-wrap.nv-pie").data([e(a[0])]),v=u.enter().append("g").attr("class","nvd3 nv-wrap nv-pie nv-chart-"+h),w=v.append("g"),x=u.select("g");w.append("g").attr("class","nv-pie"),u.attr("transform","translate("+b.left+","+b.top+")"),x.select(".nv-pie").attr("transform","translate("+j/2+","+q/2+")"),t.on("click",function(a,b){p.chartClick({data:a,index:b,pos:d3.event,id:h})});var y=d3.svg.arc().outerRadius(s);n&&y.innerRadius(r/2);var z=d3.layout.pie().sort(null).value(function(a){return a.disabled?0:g(a)}),A=u.select(".nv-pie").selectAll(".nv-slice").data(z);A.exit().remove();var B=A.enter().append("g").attr("class","nv-slice").on("mouseover",function(a,b){d3.select(this).classed("hover",!0),p.elementMouseover({label:f(a.data),value:g(a.data),point:a.data,pointIndex:b,pos:[d3.event.pageX,d3.event.pageY],id:h})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),p.elementMouseout({label:f(a.data),value:g(a.data),point:a.data,index:b,id:h})}).on("click",function(a,b){p.elementClick({label:f(a.data),value:g(a.data),point:a.data,index:b,pos:d3.event,id:h}),d3.event.stopPropagation()}).on("dblclick",function(a,b){p.elementDblClick({label:f(a.data),value:g(a.data),point:a.data,index:b,pos:d3.event,id:h}),d3.event.stopPropagation()});A.attr("fill",function(a,b){return i(a,b)}).attr("stroke",function(a,b){return i(a,b)});var C=B.append("path").each(function(a){this._current=a});d3.transition(A.select("path")).attr("d",y).attrTween("d",F);if(k){var D=y;l&&(D=d3.svg.arc().outerRadius(y.outerRadius())),B.append("g").classed("nv-label",!0).each(function(a,b){var c=d3.select(this);c.attr("transform",function(a){if(o){a.outerRadius=s+10,a.innerRadius=s+15;var b=(a.startAngle+a.endAngle)/2*(180/Math.PI);return(a.startAngle+a.endAngle)/2<Math.PI?b-=90:b+=90,"translate("+D.centroid(a)+") rotate("+b+")"}return a.outerRadius=r+10,a.innerRadius=r+15,"translate("+D.centroid(a)+")"}),c.append("rect").style("stroke","#fff").style("fill","#fff").attr("rx",3).attr("ry",3),c.append("text").style("text-anchor",o?(a.startAngle+a.endAngle)/2<Math.PI?"start":"end":"middle").style("fill","#000")}),A.select(".nv-label").transition().attr("transform",function(a){if(o){a.outerRadius=s+10,a.innerRadius=s+15;var b=(a.startAngle+a.endAngle)/2*(180/Math.PI);return(a.startAngle+a.endAngle)/2<Math.PI?b-=90:b+=90,"translate("+D.centroid(a)+") rotate("+b+")"}return a.outerRadius=r+10,a.innerRadius=r+15,"translate("+D.centroid(a)+")"}),A.each(function(a,b){var c=d3.select(this);c.select(".nv-label text").style("text-anchor",o?(a.startAngle+a.endAngle)/2<Math.PI?"start":"end":"middle").text(function(a,b){var c=(a.endAngle-a.startAngle)/(2*Math.PI);return a.value&&c>m?f(a.data):""});var d=c.select("text").node().getBBox();c.select(".nv-label rect").attr("width",d.width+10).attr("height",d.height+10).attr("transform",function(){return"translate("+[d.x-5,d.y-5]+")"})})}}),q}var b={top:0,right:0,bottom:0,left:0},c=500,d=500,e=function(a){return a.values},f=function(a){return a.x},g=function(a){return a.y},h=Math.floor(Math.random()*1e4),i=a.utils.defaultColor(),j=d3.format(",.2f"),k=!0,l=!1,m=.02,n=!1,o=!1,p=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return q.dispatch=p,q.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,q):b},q.width=function(a){return arguments.length?(c=a,q):c},q.height=function(a){return arguments.length?(d=a,q):d},q.values=function(a){return arguments.length?(e=a,q):e},q.x=function(a){return arguments.length?(f=a,q):f},q.y=function(a){return arguments.length?(g=d3.functor(a),q):g},q.showLabels=function(a){return arguments.length?(k=a,q):k},q.labelSunbeamLayout=function(a){return arguments.length?(o=a,q):o},q.donutLabelsOutside=function(a){return arguments.length?(l=a,q):l},q.donut=function(a){return arguments.length?(n=a,q):n},q.id=function(a){return arguments.length?(h=a,q):h},q.color=function(b){return arguments.length?(i=a.utils.getColor(b),q):i},q.valueFormat=function(a){return arguments.length?(j=a,q):j},q.labelThreshold=function(a){return arguments.length?(m=a,q):m},q},a.models.pieChart=function(){function o(a){return a.each(function(h){var i=d3.select(this),j=this,n=(e||parseInt(i.style("width"))||960)-d.left-d.right,p=(f||parseInt(i.style("height"))||400)-d.top-d.bottom;o.update=function(){o(a)},o.container=this;if(!h||!h.length){var q=i.selectAll(".nv-noData").data([l]);return q.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),q.attr("x",d.left+n/2).attr("y",d.top+p/2).text(function(a){return a}),o}i.selectAll(".nv-noData").remove();var r=i.selectAll("g.nv-wrap.nv-pieChart").data([h]),s=r.enter().append("g").attr("class","nvd3 nv-wrap nv-pieChart").append("g"),t=r.select("g");s.append("g").attr("class","nv-pieWrap"),s.append("g").attr("class","nv-legendWrap"),g&&(c.width(n).key(b.x()),r.select(".nv-legendWrap").datum(b.values()(h[0])).call(c),d.top!=c.height()&&(d.top=c.height(),p=(f||parseInt(i.style("height"))||400)-d.top-d.bottom),r.select(".nv-legendWrap").attr("transform","translate(0,"+ -d.top+")")),r.attr("transform","translate("+d.left+","+d.top+")"),b.width(n).height(p);var u=t.select(".nv-pieWrap").datum(h);d3.transition(u).call(b),c.dispatch.on("legendClick",function(c,d,e){c.disabled=!c.disabled,b.values()(h[0]).filter(function(a){return!a.disabled}).length||b.values()(h[0]).map(function(a){return a.disabled=!1,r.selectAll(".nv-series").classed("disabled",!1),a}),k.disabled=h[0].map(function(a){return!!a.disabled}),m.stateChange(k),a.transition().call(o)}),b.dispatch.on("elementMouseout.tooltip",function(a){m.tooltipHide(a)}),m.on("changeState",function(b){typeof b.disabled!="undefined"&&(h[0].forEach(function(a,c){a.disabled=b.disabled[c]}),k.disabled=b.disabled),a.call(o)})}),o}var b=a.models.pie(),c=a.models.legend(),d={top:30,right:20,bottom:20,left:20},e=null,f=null,g=!0,h=a.utils.defaultColor(),i=!0,j=function(a,b,c,d){return"<h3>"+a+"</h3>"+"<p>"+b+"</p>"},k={},l="No Data Available.",m=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),n=function(c,d){var e=c.pos[0]+(d&&d.offsetLeft||0),f=c.pos[1]+(d&&d.offsetTop||0),g=b.valueFormat()(b.y()(c.point)),h=j(b.x()(c.point),g,c,o);a.tooltip.show([e,f],h,c.value<0?"n":"s",null,d)};return b.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+d.left,a.pos[1]+d.top],m.tooltipShow(a)}),m.on("tooltipShow",function(a){i&&n(a)}),m.on("tooltipHide",function(){i&&a.tooltip.cleanup()}),o.legend=c,o.dispatch=m,o.pie=b,d3.rebind(o,b,"valueFormat","values","x","y","id","showLabels","donutLabelsOutside","donut","labelThreshold"),o.margin=function(a){return arguments.length?(d.top=typeof a.top!="undefined"?a.top:d.top,d.right=typeof a.right!="undefined"?a.right:d.right,d.bottom=typeof a.bottom!="undefined"?a.bottom:d.bottom,d.left=typeof a.left!="undefined"?a.left:d.left,o):d},o.width=function(a){return arguments.length?(e=a,o):e},o.height=function(a){return arguments.length?(f=a,o):f},o.color=function(d){return arguments.length?(h=a.utils.getColor(d),c.color(h),b.color(h),o):h},o.showLegend=function(a){return arguments.length?(g=a,o):g},o.tooltips=function(a){return arguments.length?(i=a,o):i},o.tooltipContent=function(a){return arguments.length?(j=a,o):j},o.state=function(a){return arguments.length?(k=a,o):k},o.noData=function(a){return arguments.length?(l=a,o):l},o},a.models.scatter=function(){function J(a){return a.each(function(a){function S(){if(!r)return!1;var e,i=d3.merge(a.map(function(a,b){return a.values.map(function(a,c){return[g(j(a,c))*(Math.random()/1e12+1),h(k(a,c))*(Math.random()/1e12+1),b,c,a]}).filter(function(a,b){return s(a[4],b)})}));if(D===!0){if(v){var l=N.select("defs").selectAll(".nv-point-clips").data([f]).enter();l.append("clipPath").attr("class","nv-point-clips").attr("id","nv-points-clip-"+f);var m=N.select("#nv-points-clip-"+f).selectAll("circle").data(i);m.enter().append("circle").attr("r",w),m.exit().remove(),m.attr("cx",function(a){return a[0]}).attr("cy",function(a){return a[1]}),N.select(".nv-point-paths").attr("clip-path","url(#nv-points-clip-"+f+")")}i.push([g.range()[0]-20,h.range()[0]-20,null,null]),i.push([g.range()[1]+20,h.range()[1]+20,null,null]),i.push([g.range()[0]-20,h.range()[0]+20,null,null]),i.push([g.range()[1]+20,h.range()[1]-20,null,null]);var n=d3.geom.polygon([[-10,-10],[-10,d+10],[c+10,d+10],[c+10,-10]]),o=d3.geom.voronoi(i).map(function(a,b){return{data:n.clip(a),series:i[b][2],point:i[b][3]}}),p=N.select(".nv-point-paths").selectAll("path").data(o);p.enter().append("path").attr("class",function(a,b){return"nv-path-"+b}),p.exit().remove(),p.attr("d",function(a){return"M"+a.data.join("L")+"Z"}),p.on("click",function(c){if(I)return 0;var d=a[c.series],e=d.values[c.point];C.elementClick({point:e,series:d,pos:[g(j(e,c.point))+b.left,h(k(e,c.point))+b.top],seriesIndex:c.series,pointIndex:c.point})}).on("mouseover",function(c){if(I)return 0;var d=a[c.series],e=d.values[c.point];C.elementMouseover({point:e,series:d,pos:[g(j(e,c.point))+b.left,h(k(e,c.point))+b.top],seriesIndex:c.series,pointIndex:c.point})}).on("mouseout",function(b,c){if(I)return 0;var d=a[b.series],e=d.values[b.point];C.elementMouseout({point:e,series:d,seriesIndex:b.series,pointIndex:b.point})})}else N.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click",function(c,d){if(I)return 0;var e=a[c.series],f=e.values[d];C.elementClick({point:f,series:e,pos:[g(j(f,d))+b.left,h(k(f,d))+b.top],seriesIndex:c.series,pointIndex:d})}).on("mouseover",function(c,d){if(I)return 0;var e=a[c.series],f=e.values[d];C.elementMouseover({point:f,series:e,pos:[g(j(f,d))+b.left,h(k(f,d))+b.top],seriesIndex:c.series,pointIndex:d})}).on("mouseout",function(b,c){if(I)return 0;var d=a[b.series],e=d.values[c];C.elementMouseout({point:e,series:d,seriesIndex:b.series,pointIndex:c})});I=!1}var J=c-b.left-b.right,K=d-b.top-b.bottom,L=d3.select(this);a=a.map(function(a,b){return a.values=a.values.map(function(a){return a.series=b,a}),a});var M=x&&y&&z?[]:d3.merge(a.map(function(a){return a.values.map(function(a,b){return{x:j(a,b),y:k(a,b),size:l(a,b)}})}));g.domain(x||d3.extent(M.map(function(a){return a.x}).concat(o))),t?g.range([J*.5/a[0].values.length,J*(a[0].values.length-.5)/a[0].values.length]):g.range([0,J]),h.domain(y||d3.extent(M.map(function(a){return a.y}).concat(p))).range([K,0]),i.domain(z||d3.extent(M.map(function(a){return a.size}).concat(q))).range(A||[16,256]);if(g.domain()[0]===g.domain()[1]||h.domain()[0]===h.domain()[1])B=!0;g.domain()[0]===g.domain()[1]&&(g.domain()[0]?g.domain([g.domain()[0]-g.domain()[0]*.01,g.domain()[1]+g.domain()[1]*.01]):g.domain([-1,1])),h.domain()[0]===h.domain()[1]&&(h.domain()[0]?h.domain([h.domain()[0]+h.domain()[0]*.01,h.domain()[1]-h.domain()[1]*.01]):h.domain([-1,1])),E=E||g,F=F||h,G=G||i;var N=L.selectAll("g.nv-wrap.nv-scatter").data([a]),O=N.enter().append("g").attr("class","nvd3 nv-wrap nv-scatter nv-chart-"+f+(B?" nv-single-point":"")),P=O.append("defs"),Q=O.append("g"),R=N.select("g");Q.append("g").attr("class","nv-groups"),Q.append("g").attr("class","nv-point-paths"),N.attr("transform","translate("+b.left+","+b.top+")"),P.append("clipPath").attr("id","nv-edge-clip-"+f).append("rect"),N.select("#nv-edge-clip-"+f+" rect").attr("width",J).attr("height",K),R.attr("clip-path",u?"url(#nv-edge-clip-"+f+")":""),I=!0;var T=N.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});T.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),d3.transition(T.exit()).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),T.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}),d3.transition(T).style("fill",function(a,b){return e(a,b)}).style("stroke",function(a,b){return e(a,b)}).style("stroke-opacity",1).style("fill-opacity",.5);if(n){var U=T.selectAll("circle.nv-point").data(function(a){return a.values});U.enter().append("circle").attr("cx",function(a,b){return E(j(a,b))}).attr("cy",function(a,b){return F(k(a,b))}).attr("r",function(a,b){return Math.sqrt(i(l(a,b))/Math.PI)}),U.exit().remove(),d3.transition(T.exit().selectAll("path.nv-point")).attr("cx",function(a,b){return g(j(a,b))}).attr("cy",function(a,b){return h(k(a,b))}).remove(),U.attr("class",function(a,b){return"nv-point nv-point-"+b}),d3.transition(U).attr("cx",function(a,b){return g(j(a,b))}).attr("cy",function(a,b){return h(k(a,b))}).attr("r",function(a,b){return Math.sqrt(i(l(a,b))/Math.PI)})}else{var U=T.selectAll("path.nv-point").data(function(a){return a.values});U.enter().append("path").attr("transform",function(a,b){return"translate("+E(j(a,b))+","+F(k(a,b))+")"}).attr("d",d3.svg.symbol().type(m).size(function(a,b){return i(l(a,b))})),U.exit().remove(),d3.transition(T.exit().selectAll("path.nv-point")).attr("transform",function(a,b){return"translate("+g(j(a,b))+","+h(k(a,b))+")"}).remove(),U.attr("class",function(a,b){return"nv-point nv-point-"+b}),d3.transition(U).attr("transform",function(a,b){return"translate("+g(j(a,b))+","+h(k(a,b))+")"}).attr("d",d3.svg.symbol().type(m).size(function(a,b){return i(l(a,b))}))}clearTimeout(H),H=setTimeout(S,300),E=g.copy(),F=h.copy(),G=i.copy()}),J}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=a.utils.defaultColor(),f=Math.floor(Math.random()*1e5),g=d3.scale.linear(),h=d3.scale.linear(),i=d3.scale.linear(),j=function(a){return a.x},k=function(a){return a.y},l=function(a){return a.size||1},m=function(a){return a.shape||"circle"},n=!0,o=[],p=[],q=[],r=!0,s=function(a){return!a.notActive},t=!1,u=!1,v=!0,w=function(){return 25},x=null,y=null,z=null,A=null,B=!1,C=d3.dispatch("elementClick","elementMouseover","elementMouseout"),D=!0,E,F,G,H,I=!1;return C.on("elementMouseover.point",function(a){r&&d3.select(".nv-chart-"+f+" .nv-series-"+a.seriesIndex+" .nv-point-"+a.pointIndex).classed("hover",!0)}),C.on("elementMouseout.point",function(a){r&&d3.select(".nv-chart-"+f+" .nv-series-"+a.seriesIndex+" .nv-point-"+a.pointIndex).classed("hover",!1)}),J.dispatch=C,J.x=function(a){return arguments.length?(j=d3.functor(a),J):j},J.y=function(a){return arguments.length?(k=d3.functor(a),J):k},J.size=function(a){return arguments.length?(l=d3.functor(a),J):l},J.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,J):b},J.width=function(a){return arguments.length?(c=a,J):c},J.height=function(a){return arguments.length?(d=a,J):d},J.xScale=function(a){return arguments.length?(g=a,J):g},J.yScale=function(a){return arguments.length?(h=a,J):h},J.zScale=function(a){return arguments.length?(i=a,J):i},J.xDomain=function(a){return arguments.length?(x=a,J):x},J.yDomain=function(a){return arguments.length?(y=a,J):y},J.sizeDomain=function(a){return arguments.length?(z=a,J):z},J.sizeRange=function(a){return arguments.length?(A=a,J):A},J.forceX=function(a){return arguments.length?(o=a,J):o},J.forceY=function(a){return arguments.length?(p=a,J):p},J.forceSize=function(a){return arguments.length?(q=a,J):q},J.interactive=function(a){return arguments.length?(r=a,J):r},J.pointActive=function(a){return arguments.length?(s=a,J):s},J.padData=function(a){return arguments.length?(t=a,J):t},J.clipEdge=function(a){return arguments.length?(u=a,J):u},J.clipVoronoi=function(a){return arguments.length?(v=a,J):v},J.useVoronoi=function(a){return arguments.length?(D=a,D===!1&&(v=!1),J):D},J.clipRadius=function(a){return arguments.length?(w=a,J):w},J.color=function(b){return arguments.length?(e=a.utils.getColor(b),J):e},J.shape=function(a){return arguments.length?(m=a,J):m},J.onlyCircles=function(a){return arguments.length?(n=a,J):n},J.id=function(a){return arguments.length?(f=a,J):f},J.singlePoint=function(a){return arguments.length?(B=a,J):B},J},a.models.scatterChart=function(){function H(a){return a.each(function(x){function R(){if(v)return O.select(".nv-point-paths").style("pointer-events","all"),!1;O.select(".nv-point-paths").style("pointer-events","none");var a=d3.mouse(this);m.distortion(u).focus(a[0]),n.distortion(u).focus(a[1]),O.select(".nv-scatterWrap").call(b),O.select(".nv-x.nv-axis").call(c),O.select(".nv-y.nv-axis").call(d),O.select(".nv-distributionX").datum(x.filter(function(a){return!a.disabled})).call(g),O.select(".nv-distributionY").datum(x.filter(function(a){return!a.disabled})).call(h)}var y=d3.select(this),z=this,I=(j||parseInt(y.style("width"))||960)-i.left-i.right,J=(k||parseInt(y.style("height"))||400)-i.top-i.bottom;H.update=function(){H(a)},H.container=this;if(!x||!x.length||!x.filter(function(a){return a.values.length}).length){var K=y.selectAll(".nv-noData").data([B]);return K.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),K.attr("x",i.left+I/2).attr("y",i.top+J/2).text(function(a){return a}),H}y.selectAll(".nv-noData").remove(),D=D||m,E=E||n;var L=y.selectAll("g.nv-wrap.nv-scatterChart").data([x]),M=L.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+b.id()),N=M.append("g"),O=L.select("g");N.append("rect").attr("class","nvd3 nv-background"),N.append("g").attr("class","nv-x nv-axis"),N.append("g").attr("class","nv-y nv-axis"),N.append("g").attr("class","nv-scatterWrap"),N.append("g").attr("class","nv-distWrap"),N.append("g").attr("class","nv-legendWrap"),N.append("g").attr("class","nv-controlsWrap"),s&&(e.width(I/2),L.select(".nv-legendWrap").datum(x).call(e),i.top!=e.height()&&(i.top=e.height(),J=(k||parseInt(y.style("height"))||400)-i.top-i.bottom),L.select(".nv-legendWrap").attr("transform","translate("+I/2+","+ -i.top+")")),t&&(f.width(180).color(["#444"]),O.select(".nv-controlsWrap").datum(G).attr("transform","translate(0,"+ -i.top+")").call(f)),L.attr("transform","translate("+i.left+","+i.top+")"),b.width(I).height(J).color(x.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!x[b].disabled})),L.select(".nv-scatterWrap").datum(x.filter(function(a){return!a.disabled})).call(b);if(o){var P=m.domain()[1]-m.domain()[0];m.domain([m.domain()[0]-o*P,m.domain()[1]+o*P])}if(p){var Q=n.domain()[1]-n.domain()[0];n.domain([n.domain()[0]-p*Q,n.domain()[1]+p*Q])}c.scale(m).ticks(c.ticks()&&c.ticks().length?c.ticks():I/100).tickSize(-J,0),O.select(".nv-x.nv-axis").attr("transform","translate(0,"+n.range()[0]+")").call(c),d.scale(n).ticks(d.ticks()&&d.ticks().length?d.ticks():J/36).tickSize(-I,0),O.select(".nv-y.nv-axis").call(d),q&&(g.getData(b.x()).scale(m).width(I).color(x.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!x[b].disabled})),N.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),O.select(".nv-distributionX").attr("transform","translate(0,"+n.range()[0]+")").datum(x.filter(function(a){return!a.disabled})).call(g)),r&&(h.getData(b.y()).scale(n).width(J).color(x.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!x[b].disabled})),N.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),O.select(".nv-distributionY").attr("transform","translate(-"+h.size()+",0)").datum(x.filter(function(a){return!a.disabled})).call(h)),d3.fisheye&&(O.select(".nv-background").attr("width",I).attr("height",J),O.select(".nv-background").on("mousemove",R),O.select(".nv-background").on("click",function(){v=!v}),b.dispatch.on("elementClick.freezeFisheye",function(){v=!v})),f.dispatch.on("legendClick",function(e,f){e.disabled=!e.disabled,u=e.disabled?0:2.5,O.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),O.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(m.distortion(u).focus(0),n.distortion(u).focus(0),O.select(".nv-scatterWrap").call(b),O.select(".nv-x.nv-axis").call(c),O.select(".nv-y.nv-axis").call(d)):v=!1,H(a)}),e.dispatch.on("legendClick",function(b,c,d){b.disabled=!b.disabled,x.filter(function(a){return!a.disabled}).length||x.map(function(a){return a.disabled=!1,L.selectAll(".nv-series").classed("disabled",!1),a}),C.disabled=x.map(function(a){return!!a.disabled}),A.stateChange(C),H(a)}),b.dispatch.on("elementMouseover.tooltip",function(a){d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",a.pos[1]-J),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",a.pos[0]+g.size()),a.pos=[a.pos[0]+i.left,a.pos[1]+i.top],A.tooltipShow(a)}),A.on("tooltipShow",function(a){w&&F(a,z.parentNode)}),A.on("changeState",function(b){typeof b.disabled!="undefined"&&(x.forEach(function(a,c){a.disabled=b.disabled[c]}),C.disabled=b.disabled),a.call(H)}),D=m.copy(),E=n.copy()}),H}var b=a.models.scatter(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f=a.models.legend(),g=a.models.distribution(),h=a.models.distribution(),i={top:30,right:20,bottom:50,left:75},j=null,k=null,l=a.utils.defaultColor(),m=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):b.xScale(),n=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):b.yScale(),o=0,p=0,q=!1,r=!1,s=!0,t=!!d3.fisheye,u=0,v=!1,w=!0,x=function(a,b,c){return"<strong>"+b+"</strong>"},y=function(a,b,c){return"<strong>"+c+"</strong>"},z=null,A=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),B="No Data Available.";b.xScale(m).yScale(n),c.orient("bottom").tickPadding(10),d.orient("left").tickPadding(10),g.axis("x"),h.axis("y");var C={},D,E,F=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),j=e.pos[0]+(f.offsetLeft||0),k=n.range()[0]+i.top+(f.offsetTop||0),l=m.range()[0]+i.left+(f.offsetLeft||0),o=e.pos[1]+(f.offsetTop||0),p=c.tickFormat()(b.x()(e.point,e.pointIndex)),q=d.tickFormat()(b.y()(e.point,e.pointIndex));x!=null&&a.tooltip.show([j,k],x(e.series.key,p,q,e,H),"n",1,f,"x-nvtooltip"),y!=null&&a.tooltip.show([l,o],y(e.series.key,p,q,e,H),"e",1,f,"y-nvtooltip"),z!=null&&a.tooltip.show([g,h],z(e.series.key,p,q,e,H),e.value<0?"n":"s",null,f)},G=[{key:"Magnify",disabled:!0}];return b.dispatch.on("elementMouseout.tooltip",function(a){A.tooltipHide(a),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",0),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",h.size())}),A.on("tooltipHide",function(){w&&a.tooltip.cleanup()}),H.dispatch=A,H.scatter=b,H.legend=e,H.controls=f,H.xAxis=c,H.yAxis=d,H.distX=g,H.distY=h,d3.rebind(H,b,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),H.margin=function(a){return arguments.length?(i.top=typeof a.top!="undefined"?a.top:i.top,i.right=typeof a.right!="undefined"?a.right:i.right,i.bottom=typeof a.bottom!="undefined"?a.bottom:i.bottom,i.left=typeof a.left!="undefined"?a.left:i.left,H):i},H.width=function(a){return arguments.length?(j=a,H):j},H.height=function(a){return arguments.length?(k=a,H):k},H.color=function(b){return arguments.length?(l=a.utils.getColor(b),e.color(l),g.color(l),h.color(l),H):l},H.showDistX=function(a){return arguments.length?(q=a,H):q},H.showDistY=function(a){return arguments.length?(r=a,H):r},H.showControls=function(a){return arguments.length?(t=a,H):t},H.showLegend=function(a){return arguments.length?(s=a,H):s},H.fisheye=function(a){return arguments.length?(u=a,H):u},H.xPadding=function(a){return arguments.length?(o=a,H):o},H.yPadding=function(a){return arguments.length?(p=a,H):p},H.tooltips=function(a){return arguments.length?(w=a,H):w},H.tooltipContent=function(a){return arguments.length?(z=a,H):z},H.tooltipXContent=function(a){return arguments.length?(x=a,H):x},H.tooltipYContent=function(a){return arguments.length?(y=a,H):y},H.state=function(a){return arguments.length?(C=a,H):C},H.noData=function(a){return arguments.length?(B=a,H):B},H},a.models.scatterPlusLineChart=function(){function F(a){return a.each(function(v){function P(){if(t)return M.select(".nv-point-paths").style("pointer-events","all"),!1;M.select(".nv-point-paths").style("pointer-events","none");var a=d3.mouse(this);m.distortion(s).focus(a[0]),n.distortion(s).focus(a[1]),M.select(".nv-scatterWrap").datum(v.filter(function(a){return!a.disabled})).call(b),M.select(".nv-x.nv-axis").call(c),M.select(".nv-y.nv-axis").call(d),M.select(".nv-distributionX").datum(v.filter(function(a){return!a.disabled})).call(g),M.select(".nv-distributionY").datum(v.filter(function(a){return!a.disabled})).call(h)}var w=d3.select(this),x=this,G=(j||parseInt(w.style("width"))||960)-i.left-i.right,H=(k||parseInt(w.style("height"))||400)-i.top-i.bottom;F.update=function(){F(a)},F.container=this;if(!v||!v.length||!v.filter(function(a){return a.values.length}).length){var I=w.selectAll(".nv-noData").data([z]);return I.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),I.attr("x",i.left+G/2).attr("y",i.top+H/2).text(function(a){return a}),F}w.selectAll(".nv-noData").remove(),m=b.xScale(),n=b.yScale(),B=B||m,C=C||n;var J=w.selectAll("g.nv-wrap.nv-scatterChart").data([v]),K=J.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+b.id()),L=K.append("g"),M=J.select("g");L.append("rect").attr("class","nvd3 nv-background"),L.append("g").attr("class","nv-x nv-axis"),L.append("g").attr("class","nv-y nv-axis"),L.append("g").attr("class","nv-scatterWrap"),L.append("g").attr("class","nv-regressionLinesWrap"),L.append("g").attr("class","nv-distWrap"),L.append("g").attr("class","nv-legendWrap"),L.append("g").attr("class","nv-controlsWrap"),J.attr("transform","translate("+i.left+","+i.top+")"),q&&(e.width(G/2),J.select(".nv-legendWrap").datum(v).call(e),i.top!=e.height()&&(i.top=e.height(),H=(k||parseInt(w.style("height"))||400)-i.top-i.bottom),J.select(".nv-legendWrap").attr("transform","translate("+G/2+","+ -i.top+")")),r&&(f.width(180).color(["#444"]),M.select(".nv-controlsWrap").datum(E).attr("transform","translate(0,"+ -i.top+")").call(f)),b.width(G).height(H).color(v.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!v[b].disabled})),J.select(".nv-scatterWrap").datum(v.filter(function(a){return!a.disabled})).call(b),J.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+b.id()+")");var N=J.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(a){return a}),O=N.enter().append("g").attr("class","nv-regLines").append("line").attr("class","nv-regLine").style("stroke-opacity",0);N.selectAll(".nv-regLines line").attr("x1",m.range()[0]).attr("x2",m.range()[1]).attr("y1",function(a,b){return n(m.domain()[0]*a.slope+a.intercept)}).attr("y2",function(a,b){return n(m.domain()[1]*a.slope+a.intercept)}).style("stroke",function(a,b,c){return l(a,c)}).style("stroke-opacity",function(a,b){return a.disabled||typeof a.slope=="undefined"||typeof a.intercept=="undefined"?0:1}),c.scale(m).ticks(c.ticks()?c.ticks():G/100).tickSize(-H,0),M.select(".nv-x.nv-axis").attr("transform","translate(0,"+n.range()[0]+")").call(c),d.scale(n).ticks(d.ticks()?d.ticks():H/36).tickSize(-G,0),M.select(".nv-y.nv-axis").call(d),o&&(g.getData(b.x()).scale(m).width(G).color(v.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!v[b].disabled})),L.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),M.select(".nv-distributionX").attr("transform","translate(0,"+n.range()[0]+")").datum(v.filter(function(a){return!a.disabled})).call(g)),p&&(h.getData(b.y()).scale(n).width(H).color(v.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!v[b].disabled})),L.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),M.select(".nv-distributionY").attr("transform","translate(-"+h.size()+",0)").datum(v.filter(function(a){return!a.disabled})).call(h)),d3.fisheye&&(M.select(".nv-background").attr("width",G).attr("height",H),M.select(".nv-background").on("mousemove",P),M.select(".nv-background").on("click",function(){t=!t}),b.dispatch.on("elementClick.freezeFisheye",function(){t=!t})),f.dispatch.on("legendClick",function(e,f){e.disabled=!e.disabled,s=e.disabled?0:2.5,M.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),M.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(m.distortion(s).focus(0),n.distortion(s).focus(0),M.select(".nv-scatterWrap").call(b),M.select(".nv-x.nv-axis").call(c),M.select(".nv-y.nv-axis").call(d)):t=!1,F(a)}),e.dispatch.on("legendClick",function(b,c,d){b.disabled=!b.disabled,v.filter(function(a){return!a.disabled}).length||v.map(function(a){return a.disabled=!1,J.selectAll(".nv-series").classed("disabled",!1),a}),A.disabled=v.map(function(a){return!!a.disabled}),y.stateChange(A),F(a)}),b.dispatch.on("elementMouseover.tooltip",function(a){d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",a.pos[1]-H),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",a.pos[0]+g.size()),a.pos=[a.pos[0]+i.left,a.pos[1]+i.top],y.tooltipShow(a)}),y.on("tooltipShow",function(a){u&&D(a,x.parentNode)}),y.on("changeState",function(b){typeof b.disabled!="undefined"&&(v.forEach(function(a,c){a.disabled=b.disabled[c]}),A.disabled=b.disabled),a.call(F)}),B=m.copy(),C=n.copy()}),F}var b=a.models.scatter(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f=a.models.legend(),g=a.models.distribution(),h=a.models.distribution(),i={top:30,right:20,bottom:50,left:75},j=null,k=null,l=a.utils.defaultColor(),m=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):b.xScale(),n=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):b.yScale(),o=!1,p=!1,q=!0,r=!!d3.fisheye,s=0,t=!1,u=!0,v=function(a,b,c){return"<strong>"+b+"</strong>"},w=function(a,b,c){return"<strong>"+c+"</strong>"},x=function(a,b,c,d){return"<h3>"+a+"</h3>"+"<p>"+d+"</p>"},y=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),z="No Data Available.";b.xScale(m).yScale(n),c.orient("bottom").tickPadding(10),d.orient("left").tickPadding(10),g.axis("x"),h.axis("y"
);var A={},B,C,D=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),j=e.pos[0]+(f.offsetLeft||0),k=n.range()[0]+i.top+(f.offsetTop||0),l=m.range()[0]+i.left+(f.offsetLeft||0),o=e.pos[1]+(f.offsetTop||0),p=c.tickFormat()(b.x()(e.point,e.pointIndex)),q=d.tickFormat()(b.y()(e.point,e.pointIndex));v!=null&&a.tooltip.show([j,k],v(e.series.key,p,q,e,F),"n",1,f,"x-nvtooltip"),w!=null&&a.tooltip.show([l,o],w(e.series.key,p,q,e,F),"e",1,f,"y-nvtooltip"),x!=null&&a.tooltip.show([g,h],x(e.series.key,p,q,e.point.tooltip,e,F),e.value<0?"n":"s",null,f)},E=[{key:"Magnify",disabled:!0}];return b.dispatch.on("elementMouseout.tooltip",function(a){y.tooltipHide(a),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",0),d3.select(".nv-chart-"+b.id()+" .nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",h.size())}),y.on("tooltipHide",function(){u&&a.tooltip.cleanup()}),F.dispatch=y,F.scatter=b,F.legend=e,F.controls=f,F.xAxis=c,F.yAxis=d,F.distX=g,F.distY=h,d3.rebind(F,b,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),F.margin=function(a){return arguments.length?(i.top=typeof a.top!="undefined"?a.top:i.top,i.right=typeof a.right!="undefined"?a.right:i.right,i.bottom=typeof a.bottom!="undefined"?a.bottom:i.bottom,i.left=typeof a.left!="undefined"?a.left:i.left,F):i},F.width=function(a){return arguments.length?(j=a,F):j},F.height=function(a){return arguments.length?(k=a,F):k},F.color=function(b){return arguments.length?(l=a.utils.getColor(b),e.color(l),g.color(l),h.color(l),F):l},F.showDistX=function(a){return arguments.length?(o=a,F):o},F.showDistY=function(a){return arguments.length?(p=a,F):p},F.showControls=function(a){return arguments.length?(r=a,F):r},F.showLegend=function(a){return arguments.length?(q=a,F):q},F.fisheye=function(a){return arguments.length?(s=a,F):s},F.tooltips=function(a){return arguments.length?(u=a,F):u},F.tooltipContent=function(a){return arguments.length?(x=a,F):x},F.tooltipXContent=function(a){return arguments.length?(v=a,F):v},F.tooltipYContent=function(a){return arguments.length?(w=a,F):w},F.state=function(a){return arguments.length?(A=a,F):A},F.noData=function(a){return arguments.length?(z=a,F):z},F},a.models.sparkline=function(){function m(a){return a.each(function(a){var e=c-b.left-b.right,m=d-b.top-b.bottom,n=d3.select(this);f.domain(k||d3.extent(a,h)).range([0,e]),g.domain(l||d3.extent(a,i)).range([m,0]);var o=n.selectAll("g.nv-wrap.nv-sparkline").data([a]),p=o.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline"),q=p.append("g"),r=o.select("g");o.attr("transform","translate("+b.left+","+b.top+")");var s=o.selectAll("path").data(function(a){return[a]});s.enter().append("path"),s.exit().remove(),s.style("stroke",function(a,b){return a.color||j(a,b)}).attr("d",d3.svg.line().x(function(a,b){return f(h(a,b))}).y(function(a,b){return g(i(a,b))}));var t=o.selectAll("circle.nv-point").data(function(a){function c(b){if(b!=-1){var c=a[b];return c.pointIndex=b,c}return null}var b=a.map(function(a,b){return i(a,b)}),d=c(b.lastIndexOf(g.domain()[1])),e=c(b.indexOf(g.domain()[0])),f=c(b.length-1);return[e,d,f].filter(function(a){return a!=null})});t.enter().append("circle"),t.exit().remove(),t.attr("cx",function(a,b){return f(h(a,a.pointIndex))}).attr("cy",function(a,b){return g(i(a,a.pointIndex))}).attr("r",2).attr("class",function(a,b){return h(a,a.pointIndex)==f.domain()[1]?"nv-point nv-currentValue":i(a,a.pointIndex)==g.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),m}var b={top:2,right:0,bottom:2,left:0},c=400,d=32,e=!0,f=d3.scale.linear(),g=d3.scale.linear(),h=function(a){return a.x},i=function(a){return a.y},j=a.utils.getColor(["#000"]),k,l;return m.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,m):b},m.width=function(a){return arguments.length?(c=a,m):c},m.height=function(a){return arguments.length?(d=a,m):d},m.x=function(a){return arguments.length?(h=d3.functor(a),m):h},m.y=function(a){return arguments.length?(i=d3.functor(a),m):i},m.xScale=function(a){return arguments.length?(f=a,m):f},m.yScale=function(a){return arguments.length?(g=a,m):g},m.xDomain=function(a){return arguments.length?(k=a,m):k},m.yDomain=function(a){return arguments.length?(l=a,m):l},m.animate=function(a){return arguments.length?(e=a,m):e},m.color=function(b){return arguments.length?(j=a.utils.getColor(b),m):j},m},a.models.sparklinePlus=function(){function p(a){return a.each(function(l){function E(){if(i)return;var a=A.selectAll(".nv-hoverValue").data(h),d=a.enter().append("g").attr("class","nv-hoverValue").style("stroke-opacity",0).style("fill-opacity",0);a.exit().transition().duration(250).style("stroke-opacity",0).style("fill-opacity",0).remove(),a.attr("transform",function(a){return"translate("+f(b.x()(l[a],a))+",0)"}).transition().duration(250).style("stroke-opacity",1).style("fill-opacity",1);if(!h.length)return;d.append("line").attr("x1",0).attr("y1",-c.top).attr("x2",0).attr("y2",s),d.append("text").attr("class","nv-xValue").attr("x",-6).attr("y",-c.top).attr("text-anchor","end").attr("dy",".9em"),A.select(".nv-hoverValue .nv-xValue").text(j(b.x()(l[h[0]],h[0]))),d.append("text").attr("class","nv-yValue").attr("x",6).attr("y",-c.top).attr("text-anchor","start").attr("dy",".9em"),A.select(".nv-hoverValue .nv-yValue").text(k(b.y()(l[h[0]],h[0])))}function F(){function d(a,c){var d=Math.abs(b.x()(a[0],0)-c),e=0;for(var f=0;f<a.length;f++)Math.abs(b.x()(a[f],f)-c)<d&&(d=Math.abs(b.x()(a[f],f)-c),e=f);return e}if(i)return;var a=d3.mouse(this)[0]-c.left;h=[d(l,Math.round(f.invert(a)))],E()}var q=d3.select(this),r=(d||parseInt(q.style("width"))||960)-c.left-c.right,s=(e||parseInt(q.style("height"))||400)-c.top-c.bottom,t=b.y()(l[l.length-1],l.length-1);p.update=function(){p(a)},p.container=this;if(!l||!l.length){var u=q.selectAll(".nv-noData").data([o]);return u.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),u.attr("x",c.left+r/2).attr("y",c.top+s/2).text(function(a){return a}),p}q.selectAll(".nv-noData").remove(),f=b.xScale(),g=b.yScale();var v=q.selectAll("g.nv-wrap.nv-sparklineplus").data([l]),w=v.enter().append("g").attr("class","nvd3 nv-wrap nv-sparklineplus"),z=w.append("g"),A=v.select("g");z.append("g").attr("class","nv-sparklineWrap"),z.append("g").attr("class","nv-valueWrap"),z.append("g").attr("class","nv-hoverArea"),v.attr("transform","translate("+c.left+","+c.top+")");var B=A.select(".nv-sparklineWrap");b.width(r).height(s),B.call(b);var C=A.select(".nv-valueWrap"),D=C.selectAll(".nv-currentValue").data([t]);D.enter().append("text").attr("class","nv-currentValue").attr("dx",n?-8:8).attr("dy",".9em").style("text-anchor",n?"end":"start"),D.attr("x",r+(n?c.right:0)).attr("y",m?function(a){return g(a)}:0).style("fill",b.color()(l[l.length-1],l.length-1)).text(k(t)),z.select(".nv-hoverArea").append("rect").on("mousemove",F).on("click",function(){i=!i}).on("mouseout",function(){h=[],E()}),A.select(".nv-hoverArea rect").attr("transform",function(a){return"translate("+ -c.left+","+ -c.top+")"}).attr("width",r+c.left+c.right).attr("height",s+c.top)}),p}var b=a.models.sparkline(),c={top:15,right:100,bottom:10,left:50},d=null,e=null,f,g,h=[],i=!1,j=d3.format(",r"),k=d3.format(",.2f"),l=!0,m=!0,n=!1,o="No Data Available.";return p.sparkline=b,d3.rebind(p,b,"x","y","xScale","yScale","color"),p.margin=function(a){return arguments.length?(c.top=typeof a.top!="undefined"?a.top:c.top,c.right=typeof a.right!="undefined"?a.right:c.right,c.bottom=typeof a.bottom!="undefined"?a.bottom:c.bottom,c.left=typeof a.left!="undefined"?a.left:c.left,p):c},p.width=function(a){return arguments.length?(d=a,p):d},p.height=function(a){return arguments.length?(e=a,p):e},p.xTickFormat=function(a){return arguments.length?(j=a,p):j},p.yTickFormat=function(a){return arguments.length?(k=a,p):k},p.showValue=function(a){return arguments.length?(l=a,p):l},p.alignValue=function(a){return arguments.length?(m=a,p):m},p.rightAlignValue=function(a){return arguments.length?(n=a,p):n},p.noData=function(a){return arguments.length?(o=a,p):o},p},a.models.stackedArea=function(){function r(a){return a.each(function(a){var i=c-b.left-b.right,r=d-b.top-b.bottom,s=d3.select(this);n=p.xScale(),o=p.yScale(),a=a.map(function(a,b){return a.values=a.values.map(function(b,c){return b.index=c,b.stackedY=a.disabled?0:h(b,c),b}),a}),a=d3.layout.stack().order(k).offset(j).values(function(a){return a.values}).x(g).y(function(a){return a.stackedY}).out(function(a,b,c){a.display={y:c,y0:b}})(a);var t=s.selectAll("g.nv-wrap.nv-stackedarea").data([a]),u=t.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedarea"),v=u.append("defs"),w=u.append("g"),z=t.select("g");w.append("g").attr("class","nv-areaWrap"),w.append("g").attr("class","nv-scatterWrap"),t.attr("transform","translate("+b.left+","+b.top+")"),p.width(i).height(r).x(g).y(function(a){return a.display.y+a.display.y0}).forceY([0]).color(a.map(function(a,b){return a.color||e(a,b)}).filter(function(b,c){return!a[c].disabled}));var A=z.select(".nv-scatterWrap").datum(a.filter(function(a){return!a.disabled}));A.call(p),v.append("clipPath").attr("id","nv-edge-clip-"+f).append("rect"),t.select("#nv-edge-clip-"+f+" rect").attr("width",i).attr("height",r),z.attr("clip-path",m?"url(#nv-edge-clip-"+f+")":"");var B=d3.svg.area().x(function(a,b){return n(g(a,b))}).y0(function(a){return o(a.display.y0)}).y1(function(a){return o(a.display.y+a.display.y0)}).interpolate(l),C=d3.svg.area().x(function(a,b){return n(g(a,b))}).y0(function(a){return o(a.display.y0)}).y1(function(a){return o(a.display.y0)}),D=z.select(".nv-areaWrap").selectAll("path.nv-area").data(function(a){return a});D.enter().append("path").attr("class",function(a,b){return"nv-area nv-area-"+b}).on("mouseover",function(a,b){d3.select(this).classed("hover",!0),q.areaMouseover({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:b})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),q.areaMouseout({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:b})}).on("click",function(a,b){d3.select(this).classed("hover",!1),q.areaClick({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:b})}),D.exit().attr("d",function(a,b){return C(a.values,b)}).remove(),D.style("fill",function(a,b){return a.color||e(a,b)}).style("stroke",function(a,b){return a.color||e(a,b)}),D.attr("d",function(a,b){return B(a.values,b)}),p.dispatch.on("elementMouseover.area",function(a){z.select(".nv-chart-"+f+" .nv-area-"+a.seriesIndex).classed("hover",!0)}),p.dispatch.on("elementMouseout.area",function(a){z.select(".nv-chart-"+f+" .nv-area-"+a.seriesIndex).classed("hover",!1)})}),r}var b={top:0,right:0,bottom:0,left:0},c=960,d=500,e=a.utils.defaultColor(),f=Math.floor(Math.random()*1e5),g=function(a){return a.x},h=function(a){return a.y},i="stack",j="zero",k="default",l="linear",m=!1,n,o,p=a.models.scatter(),q=d3.dispatch("tooltipShow","tooltipHide","areaClick","areaMouseover","areaMouseout");return p.size(2.2).sizeDomain([2.2]),p.dispatch.on("elementClick.area",function(a){q.areaClick(a)}),p.dispatch.on("elementMouseover.tooltip",function(a){a.pos=[a.pos[0]+b.left,a.pos[1]+b.top],q.tooltipShow(a)}),p.dispatch.on("elementMouseout.tooltip",function(a){q.tooltipHide(a)}),r.dispatch=q,r.scatter=p,d3.rebind(r,p,"interactive","size","xScale","yScale","zScale","xDomain","yDomain","sizeDomain","forceX","forceY","forceSize","clipVoronoi","clipRadius"),r.x=function(a){return arguments.length?(g=d3.functor(a),r):g},r.y=function(a){return arguments.length?(h=d3.functor(a),r):h},r.margin=function(a){return arguments.length?(b.top=typeof a.top!="undefined"?a.top:b.top,b.right=typeof a.right!="undefined"?a.right:b.right,b.bottom=typeof a.bottom!="undefined"?a.bottom:b.bottom,b.left=typeof a.left!="undefined"?a.left:b.left,r):b},r.width=function(a){return arguments.length?(c=a,r):c},r.height=function(a){return arguments.length?(d=a,r):d},r.clipEdge=function(a){return arguments.length?(m=a,r):m},r.color=function(b){return arguments.length?(e=a.utils.getColor(b),r):e},r.offset=function(a){return arguments.length?(j=a,r):j},r.order=function(a){return arguments.length?(k=a,r):k},r.style=function(a){if(!arguments.length)return i;i=a;switch(i){case"stack":r.offset("zero"),r.order("default");break;case"stream":r.offset("wiggle"),r.order("inside-out");break;case"stream-center":r.offset("silhouette"),r.order("inside-out");break;case"expand":r.offset("expand"),r.order("default")}return r},r.interpolate=function(a){return arguments.length?(l=a,l):l},r},a.models.stackedAreaChart=function(){function w(a){return a.each(function(j){var n=d3.select(this),z=this,A=(h||parseInt(n.style("width"))||960)-g.left-g.right,B=(i||parseInt(n.style("height"))||400)-g.top-g.bottom;w.update=function(){w(a)},w.container=this;if(!j||!j.length||!j.filter(function(a){return a.values.length}).length){var C=n.selectAll(".nv-noData").data([s]);return C.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),C.attr("x",g.left+A/2).attr("y",g.top+B/2).text(function(a){return a}),w}n.selectAll(".nv-noData").remove(),o=b.xScale(),p=b.yScale();var D=n.selectAll("g.nv-wrap.nv-stackedAreaChart").data([j]),E=D.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedAreaChart").append("g"),F=D.select("g");E.append("g").attr("class","nv-x nv-axis"),E.append("g").attr("class","nv-y nv-axis"),E.append("g").attr("class","nv-stackedWrap"),E.append("g").attr("class","nv-legendWrap"),E.append("g").attr("class","nv-controlsWrap"),l&&(e.width(A-u),F.select(".nv-legendWrap").datum(j).call(e),g.top!=e.height()&&(g.top=e.height(),B=(i||parseInt(n.style("height"))||400)-g.top-g.bottom),F.select(".nv-legendWrap").attr("transform","translate("+u+","+ -g.top+")"));if(k){var G=[{key:"Stacked",disabled:b.offset()!="zero"},{key:"Stream",disabled:b.offset()!="wiggle"},{key:"Expanded",disabled:b.offset()!="expand"}];f.width(u).color(["#444","#444","#444"]),F.select(".nv-controlsWrap").datum(G).call(f),g.top!=Math.max(f.height(),e.height())&&(g.top=Math.max(f.height(),e.height()),B=(i||parseInt(n.style("height"))||400)-g.top-g.bottom),F.select(".nv-controlsWrap").attr("transform","translate(0,"+ -g.top+")")}D.attr("transform","translate("+g.left+","+g.top+")"),b.width(A).height(B);var H=F.select(".nv-stackedWrap").datum(j);H.call(b),c.scale(o).ticks(A/100).tickSize(-B,0),F.select(".nv-x.nv-axis").attr("transform","translate(0,"+B+")"),F.select(".nv-x.nv-axis").transition().duration(0).call(c),d.scale(p).ticks(b.offset()=="wiggle"?0:B/36).tickSize(-A,0).setTickFormat(b.offset()=="expand"?d3.format("%"):q),F.select(".nv-y.nv-axis").transition().duration(0).call(d),b.dispatch.on("areaClick.toggle",function(b){j.filter(function(a){return!a.disabled}).length===1?j=j.map(function(a){return a.disabled=!1,a}):j=j.map(function(a,c){return a.disabled=c!=b.seriesIndex,a}),w(a)}),e.dispatch.on("legendClick",function(b,c){b.disabled=!b.disabled,j.filter(function(a){return!a.disabled}).length||j.map(function(a){return a.disabled=!1,a}),r.disabled=j.map(function(a){return!!a.disabled}),t.stateChange(r),w(a)}),f.dispatch.on("legendClick",function(c,d){if(!c.disabled)return;G=G.map(function(a){return a.disabled=!0,a}),c.disabled=!1;switch(c.key){case"Stacked":b.style("stack");break;case"Stream":b.style("stream");break;case"Expanded":b.style("expand")}r.style=b.style(),t.stateChange(r),w(a)}),t.on("tooltipShow",function(a){m&&v(a,z.parentNode)}),t.on("changeState",function(c){typeof c.disabled!="undefined"&&(j.forEach(function(a,b){a.disabled=c.disabled[b]}),r.disabled=c.disabled),typeof c.style!="undefined"&&b.style(c.style),a.call(w)})}),w}var b=a.models.stackedArea(),c=a.models.axis(),d=a.models.axis(),e=a.models.legend(),f=a.models.legend(),g={top:30,right:25,bottom:50,left:60},h=null,i=null,j=a.utils.defaultColor(),k=!0,l=!0,m=!0,n=function(a,b,c,d,e){return"<h3>"+a+"</h3>"+"<p>"+c+" on "+b+"</p>"},o,p,q=d3.format(",.2f"),r={style:b.style()},s="No Data Available.",t=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),u=250;c.orient("bottom").tickPadding(7),d.orient("left"),b.scatter.pointActive(function(a){return!!Math.round(b.y()(a)*100)});var v=function(e,f){var g=e.pos[0]+(f.offsetLeft||0),h=e.pos[1]+(f.offsetTop||0),i=c.tickFormat()(b.x()(e.point,e.pointIndex)),j=d.tickFormat()(b.y()(e.point,e.pointIndex)),k=n(e.series.key,i,j,e,w);a.tooltip.show([g,h],k,e.value<0?"n":"s",null,f)};return b.dispatch.on("tooltipShow",function(a){a.pos=[a.pos[0]+g.left,a.pos[1]+g.top],t.tooltipShow(a)}),b.dispatch.on("tooltipHide",function(a){t.tooltipHide(a)}),t.on("tooltipHide",function(){m&&a.tooltip.cleanup()}),w.dispatch=t,w.stacked=b,w.legend=e,w.controls=f,w.xAxis=c,w.yAxis=d,d3.rebind(w,b,"x","y","size","xScale","yScale","xDomain","yDomain","sizeDomain","interactive","offset","order","style","clipEdge","forceX","forceY","forceSize","interpolate"),w.margin=function(a){return arguments.length?(g.top=typeof a.top!="undefined"?a.top:g.top,g.right=typeof a.right!="undefined"?a.right:g.right,g.bottom=typeof a.bottom!="undefined"?a.bottom:g.bottom,g.left=typeof a.left!="undefined"?a.left:g.left,w):g},w.width=function(a){return arguments.length?(h=a,w):getWidth},w.height=function(a){return arguments.length?(i=a,w):getHeight},w.color=function(c){return arguments.length?(j=a.utils.getColor(c),e.color(j),b.color(j),w):j},w.showControls=function(a){return arguments.length?(k=a,w):k},w.showLegend=function(a){return arguments.length?(l=a,w):l},w.tooltip=function(a){return arguments.length?(n=a,w):n},w.tooltips=function(a){return arguments.length?(m=a,w):m},w.tooltipContent=function(a){return arguments.length?(n=a,w):n},w.state=function(a){return arguments.length?(r=a,w):r},w.noData=function(a){return arguments.length?(s=a,w):s},d.setTickFormat=d.tickFormat,d.tickFormat=function(a){return arguments.length?(q=a,d):q},w}})();

/*****
* A no-frills tooltip implementation.
*****/


(function() {

var nvtooltip = window.nv.tooltip = {};

nvtooltip.show = function(pos, content, gravity, dist, parentContainer, classes) {

var container = document.createElement('div');
container.className = 'nvtooltip ' + (classes ? classes : 'xy-tooltip');

gravity = gravity || 's';
dist = dist || 20;

var body = parentContainer ? parentContainer : document.getElementsByTagName('body')[0];

container.innerHTML = content;
container.style.left = 0;
container.style.top = 0;
container.style.opacity = 0;

body.appendChild(container);

var height = parseInt(container.offsetHeight),
width = parseInt(container.offsetWidth),
windowWidth = nv.utils.windowSize().width,
windowHeight = nv.utils.windowSize().height,
scrollTop = window.scrollY,
scrollLeft = window.scrollX,
left, top;

windowHeight = window.innerWidth >= document.body.scrollWidth ? windowHeight : windowHeight - 16;
windowWidth = window.innerHeight >= document.body.scrollHeight ? windowWidth : windowWidth - 16;

var tooltipTop = function ( Elem ) {
var offsetTop = top;
do {
if( !isNaN( Elem.offsetTop ) ) {
offsetTop += (Elem.offsetTop);
}
} while( Elem = Elem.offsetParent );
return offsetTop;
}

var tooltipLeft = function ( Elem ) {
var offsetLeft = left;
do {
if( !isNaN( Elem.offsetLeft ) ) {
offsetLeft += (Elem.offsetLeft);
}
} while( Elem = Elem.offsetParent );
return offsetLeft;
}

switch (gravity) {
case 'e':
left = pos[0] - width - dist;
top = pos[1] - (height / 2);
var tLeft = tooltipLeft(container);
var tTop = tooltipTop(container);
if (tLeft < scrollLeft) left = pos[0] + dist > scrollLeft ? pos[0] + dist : scrollLeft - tLeft + left;
if (tTop < scrollTop) top = scrollTop - tTop + top;
if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
break;
case 'w':
left = pos[0] + dist;
top = pos[1] - (height / 2);
if (tLeft + width > windowWidth) left = pos[0] - width - dist;
if (tTop < scrollTop) top = scrollTop + 5;
if (tTop + height > scrollTop + windowHeight) top = scrollTop - height - 5;
break;
case 'n':
left = pos[0] - (width / 2) - 5;
top = pos[1] + dist;
var tLeft = tooltipLeft(container);
var tTop = tooltipTop(container);
if (tLeft < scrollLeft) left = scrollLeft + 5;
if (tLeft + width > windowWidth) left = left - width/2 + 5;
if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
break;
case 's':
left = pos[0] - (width / 2);
top = pos[1] - height - dist;
var tLeft = tooltipLeft(container);
var tTop = tooltipTop(container);
if (tLeft < scrollLeft) left = scrollLeft + 5;
if (tLeft + width > windowWidth) left = left - width/2 + 5;
if (scrollTop > tTop) top = scrollTop;
break;
}


container.style.left = left+'px';
container.style.top = top+'px';
container.style.opacity = 1;
container.style.position = 'absolute'; //fix scroll bar issue
container.style.pointerEvents = 'none'; //fix scroll bar issue

return container;
};

nvtooltip.cleanup = function() {

// Find the tooltips, mark them for removal by this class (so others cleanups won't find it)
var tooltips = document.getElementsByClassName('nvtooltip');
var purging = [];
while(tooltips.length) {
purging.push(tooltips[0]);
tooltips[0].style.transitionDelay = '0 !important';
tooltips[0].style.opacity = 0;
tooltips[0].className = 'nvtooltip-pending-removal';
}


setTimeout(function() {

while (purging.length) {
var removeMe = purging.pop();
removeMe.parentNode.removeChild(removeMe);
}
}, 500);
};


})();

nv.utils.windowSize = function() {
// Sane defaults
var size = {width: 640, height: 480};

// Earlier IE uses Doc.body
if (document.body && document.body.offsetWidth) {
size.width = document.body.offsetWidth;
size.height = document.body.offsetHeight;
}

// IE can use depending on mode it is in
if (document.compatMode=='CSS1Compat' &&
document.documentElement &&
document.documentElement.offsetWidth ) {
size.width = document.documentElement.offsetWidth;
size.height = document.documentElement.offsetHeight;
}

// Most recent browsers use
if (window.innerWidth && window.innerHeight) {
size.width = window.innerWidth;
size.height = window.innerHeight;
}
return (size);
};



// Easy way to bind multiple functions to window.onresize
// TODO: give a way to remove a function after its bound, other than removing all of them
nv.utils.windowResize = function(fun){
var oldresize = window.onresize;

window.onresize = function(e) {
if (typeof oldresize == 'function') oldresize(e);
fun(e);
}
}

// Backwards compatible way to implement more d3-like coloring of graphs.
// If passed an array, wrap it in a function which implements the old default
// behavior
nv.utils.getColor = function(color) {
if (!arguments.length) return nv.utils.defaultColor(); //if you pass in nothing, get default colors back

if( Object.prototype.toString.call( color ) === '[object Array]' )
return function(d, i) { return d.color || color[i % color.length]; };
else
return color;
//can't really help it if someone passes rubbish as color
}

// Default color chooser uses the index of an object as before.
nv.utils.defaultColor = function() {
var colors = d3.scale.category20().range();
return function(d, i) { return d.color || colors[i % colors.length] };
}


// Returns a color function that takes the result of 'getKey' for each series and
// looks for a corresponding color from the dictionary,
nv.utils.customTheme = function(dictionary, getKey, defaultColors) {
getKey = getKey || function(series) { return series.key }; // use default series.key if getKey is undefined
defaultColors = defaultColors || d3.scale.category20().range(); //default color function

var defIndex = defaultColors.length; //current default color (going in reverse)

return function(series, index) {
var key = getKey(series);

if (!defIndex) defIndex = defaultColors.length; //used all the default colors, start over

if (typeof dictionary[key] !== "undefined")
return (typeof dictionary[key] === "function") ? dictionary[key]() : dictionary[key];
else
return defaultColors[--defIndex]; // no match in dictionary, use default color
}
}



// From the PJAX example on d3js.org, while this is not really directly needed
// it's a very cool method for doing pjax, I may expand upon it a little bit,
// open to suggestions on anything that may be useful
nv.utils.pjax = function(links, content) {
d3.selectAll(links).on("click", function() {
history.pushState(this.href, this.textContent, this.href);
load(this.href);
d3.event.preventDefault();
});

function load(href) {
d3.html(href, function(fragment) {
var target = d3.select(content).node();
target.parentNode.replaceChild(d3.select(fragment).select(content).node(), target);
nv.utils.pjax(links, content);
});
}

d3.select(window).on("popstate", function() {
if (d3.event.state) load(d3.event.state);
});
}

nv.models.axis = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var axis = d3.svg.axis()
;

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 75 //only used for tickLabel currently
, height = 60 //only used for tickLabel currently
, scale = d3.scale.linear()
, axisLabelText = null
, showMaxMin = true //TODO: showMaxMin should be disabled on all ordinal scaled axes
, highlightZero = true
, rotateLabels = 0
, rotateYLabel = true
, staggerLabels = false
, isOrdinal = false
, ticks = null
;

axis
.scale(scale)
.orient('bottom')
.tickFormat(function(d) { return d })
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var scale0;

//============================================================


function chart(selection) {
selection.each(function(data) {
var container = d3.select(this);


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-axis').data([data]);
var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-axis');
var gEnter = wrapEnter.append('g');
var g = wrap.select('g')

//------------------------------------------------------------


if (ticks !== null)
axis.ticks(ticks);
else if (axis.orient() == 'top' || axis.orient() == 'bottom')
axis.ticks(Math.abs(scale.range()[1] - scale.range()[0]) / 100);


//TODO: consider calculating width/height based on whether or not label is added, for reference in charts using this component


d3.transition(g)
.call(axis);

scale0 = scale0 || axis.scale();

var fmt = axis.tickFormat();
if (fmt == null) {
fmt = scale0.tickFormat();
}

var axisLabel = g.selectAll('text.nv-axislabel')
.data([axisLabelText || null]);
axisLabel.exit().remove();
switch (axis.orient()) {
case 'top':
axisLabel.enter().append('text').attr('class', 'nv-axislabel')
.attr('text-anchor', 'middle')
.attr('y', 0);
var w = (scale.range().length==2) ? scale.range()[1] : (scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]));
axisLabel
.attr('x', w/2);
if (showMaxMin) {
var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
.data(scale.domain());
axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
axisMaxMin.exit().remove();
axisMaxMin
.attr('transform', function(d,i) {
return 'translate(' + scale(d) + ',0)'
})
.select('text')
.attr('dy', '0em')
.attr('y', -axis.tickPadding())
.attr('text-anchor', 'middle')
.text(function(d,i) {
var v = fmt(d);
return ('' + v).match('NaN') ? '' : v;
});
d3.transition(axisMaxMin)
.attr('transform', function(d,i) {
return 'translate(' + scale.range()[i] + ',0)'
});
}
break;
case 'bottom':
var xLabelMargin = 36;
var maxTextWidth = 30;
var xTicks = g.selectAll('g').select("text");
if (rotateLabels%360) {
//Calculate the longest xTick width
xTicks.each(function(d,i){
var width = this.getBBox().width;
if(width > maxTextWidth) maxTextWidth = width;
});
//Convert to radians before calculating sin. Add 30 to margin for healthy padding.
var sin = Math.abs(Math.sin(rotateLabels*Math.PI/180));
var xLabelMargin = (sin ? sin*maxTextWidth : maxTextWidth)+30;
//Rotate all xTicks
xTicks
.attr('transform', function(d,i,j) { return 'rotate(' + rotateLabels + ' 0,0)' })
.attr('text-anchor', rotateLabels%360 > 0 ? 'start' : 'end');
}
axisLabel.enter().append('text').attr('class', 'nv-axislabel')
.attr('text-anchor', 'middle')
.attr('y', xLabelMargin);
var w = (scale.range().length==2) ? scale.range()[1] : (scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]));
axisLabel
.attr('x', w/2);
if (showMaxMin) {
//if (showMaxMin && !isOrdinal) {
var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
//.data(scale.domain())
.data([scale.domain()[0], scale.domain()[scale.domain().length - 1]]);
axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
axisMaxMin.exit().remove();
axisMaxMin
.attr('transform', function(d,i) {
return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)'
})
.select('text')
.attr('dy', '.71em')
.attr('y', axis.tickPadding())
.attr('transform', function(d,i,j) { return 'rotate(' + rotateLabels + ' 0,0)' })
.attr('text-anchor', rotateLabels ? (rotateLabels%360 > 0 ? 'start' : 'end') : 'middle')
.text(function(d,i) {
var v = fmt(d);
return ('' + v).match('NaN') ? '' : v;
});
d3.transition(axisMaxMin)
.attr('transform', function(d,i) {
//return 'translate(' + scale.range()[i] + ',0)'
//return 'translate(' + scale(d) + ',0)'
return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)'
});
}
if (staggerLabels)
xTicks
.attr('transform', function(d,i) { return 'translate(0,' + (i % 2 == 0 ? '0' : '12') + ')' });

break;
case 'right':
axisLabel.enter().append('text').attr('class', 'nv-axislabel')
.attr('text-anchor', rotateYLabel ? 'middle' : 'begin')
.attr('transform', rotateYLabel ? 'rotate(90)' : '')
.attr('y', rotateYLabel ? (-Math.max(margin.right,width) + 12) : -10); //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
axisLabel
.attr('x', rotateYLabel ? (scale.range()[0] / 2) : axis.tickPadding());
if (showMaxMin) {
var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
.data(scale.domain());
axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text')
.style('opacity', 0);
axisMaxMin.exit().remove();
axisMaxMin
.attr('transform', function(d,i) {
return 'translate(0,' + scale(d) + ')'
})
.select('text')
.attr('dy', '.32em')
.attr('y', 0)
.attr('x', axis.tickPadding())
.attr('text-anchor', 'start')
.text(function(d,i) {
var v = fmt(d);
return ('' + v).match('NaN') ? '' : v;
});
d3.transition(axisMaxMin)
.attr('transform', function(d,i) {
return 'translate(0,' + scale.range()[i] + ')'
})
.select('text')
.style('opacity', 1);
}
break;
case 'left':
/*
//For dynamically placing the label. Can be used with dynamically-sized chart axis margins
var yTicks = g.selectAll('g').select("text");
yTicks.each(function(d,i){
var labelPadding = this.getBBox().width + axis.tickPadding() + 16;
if(labelPadding > width) width = labelPadding;
});
*/
axisLabel.enter().append('text').attr('class', 'nv-axislabel')
.attr('text-anchor', rotateYLabel ? 'middle' : 'end')
.attr('transform', rotateYLabel ? 'rotate(-90)' : '')
.attr('y', rotateYLabel ? (-Math.max(margin.left,width) + 12) : -10); //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
axisLabel
.attr('x', rotateYLabel ? (-scale.range()[0] / 2) : -axis.tickPadding());
if (showMaxMin) {
var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
.data(scale.domain());
axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text')
.style('opacity', 0);
axisMaxMin.exit().remove();
axisMaxMin
.attr('transform', function(d,i) {
return 'translate(0,' + scale0(d) + ')'
})
.select('text')
.attr('dy', '.32em')
.attr('y', 0)
.attr('x', -axis.tickPadding())
.attr('text-anchor', 'end')
.text(function(d,i) {
var v = fmt(d);
return ('' + v).match('NaN') ? '' : v;
});
d3.transition(axisMaxMin)
.attr('transform', function(d,i) {
return 'translate(0,' + scale.range()[i] + ')'
})
.select('text')
.style('opacity', 1);
}
break;
}
axisLabel
.text(function(d) { return d });


if (showMaxMin && (axis.orient() === 'left' || axis.orient() === 'right')) {
//check if max and min overlap other values, if so, hide the values that overlap
g.selectAll('g') // the g's wrapping each tick
.each(function(d,i) {
d3.select(this).select('text').attr('opacity', 1);
if (scale(d) < scale.range()[1] + 10 || scale(d) > scale.range()[0] - 10) { // 10 is assuming text height is 16... if d is 0, leave it!
if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
d3.select(this).attr('opacity', 0);

d3.select(this).select('text').attr('opacity', 0); // Don't remove the ZERO line!!
}
});

//if Max and Min = 0 only show min, Issue #281
if (scale.domain()[0] == scale.domain()[1] && scale.domain()[0] == 0)
wrap.selectAll('g.nv-axisMaxMin')
.style('opacity', function(d,i) { return !i ? 1 : 0 });

}

if (showMaxMin && (axis.orient() === 'top' || axis.orient() === 'bottom')) {
var maxMinRange = [];
wrap.selectAll('g.nv-axisMaxMin')
.each(function(d,i) {
try {
if (i) // i== 1, max position
maxMinRange.push(scale(d) - this.getBBox().width - 4)  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
else // i==0, min position
maxMinRange.push(scale(d) + this.getBBox().width + 4)
}catch (err) {
if (i) // i== 1, max position
maxMinRange.push(scale(d) - 4)  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
else // i==0, min position
maxMinRange.push(scale(d) + 4)
}
});
g.selectAll('g') // the g's wrapping each tick
.each(function(d,i) {
if (scale(d) < maxMinRange[0] || scale(d) > maxMinRange[1]) {
if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
d3.select(this).remove();
else
d3.select(this).select('text').remove(); // Don't remove the ZERO line!!
}
});
}


//highlight zero line ... Maybe should not be an option and should just be in CSS?
if (highlightZero)
g.selectAll('line.tick')
.filter(function(d) { return !parseFloat(Math.round(d*100000)/1000000) }) //this is because sometimes the 0 tick is a very small fraction, TODO: think of cleaner technique
.classed('zero', true);

//store old scales for use in transitions on update
scale0 = scale.copy();

});

return chart;
}


//============================================================
// Expose Public Variables
//------------------------------------------------------------

// expose chart's sub-components
chart.axis = axis;

d3.rebind(chart, axis, 'orient', 'tickValues', 'tickSubdivide', 'tickSize', 'tickPadding', 'tickFormat');
d3.rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands'); //these are also accessible by chart.scale(), but added common ones directly for ease of use

chart.margin = function(_) {
if(!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
}

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.ticks = function(_) {
if (!arguments.length) return ticks;
ticks = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.axisLabel = function(_) {
if (!arguments.length) return axisLabelText;
axisLabelText = _;
return chart;
}

chart.showMaxMin = function(_) {
if (!arguments.length) return showMaxMin;
showMaxMin = _;
return chart;
}

chart.highlightZero = function(_) {
if (!arguments.length) return highlightZero;
highlightZero = _;
return chart;
}

chart.scale = function(_) {
if (!arguments.length) return scale;
scale = _;
axis.scale(scale);
isOrdinal = typeof scale.rangeBands === 'function';
d3.rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands');
return chart;
}

chart.rotateYLabel = function(_) {
if(!arguments.length) return rotateYLabel;
rotateYLabel = _;
return chart;
}

chart.rotateLabels = function(_) {
if(!arguments.length) return rotateLabels;
rotateLabels = _;
return chart;
}

chart.staggerLabels = function(_) {
if (!arguments.length) return staggerLabels;
staggerLabels = _;
return chart;
};


//============================================================


return chart;
}
//TODO: consider deprecating by adding necessary features to multiBar model
nv.models.discreteBar = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 960
, height = 500
, id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
, x = d3.scale.ordinal()
, y = d3.scale.linear()
, getX = function(d) { return d.x }
, getY = function(d) { return d.y }
, forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
, color = nv.utils.defaultColor()
, showValues = false
, valueFormat = d3.format(',.2f')
, xDomain
, yDomain
, dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
, rectClass = 'discreteBar'
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var x0, y0;

//============================================================


function chart(selection) {
selection.each(function(data) {
var availableWidth = width - margin.left - margin.right,
availableHeight = height - margin.top - margin.bottom,
container = d3.select(this);


//add series index to each data point for reference
data = data.map(function(series, i) {
series.values = series.values.map(function(point) {
point.series = i;
return point;
});
return series;
});


//------------------------------------------------------------
// Setup Scales

// remap and flatten the data for use in calculating the scales' domains
var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
data.map(function(d) {
return d.values.map(function(d,i) {
return { x: getX(d,i), y: getY(d,i), y0: d.y0 }
})
});

x   .domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
.rangeBands([0, availableWidth], .1);

y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return d.y }).concat(forceY)));


// If showValues, pad the Y axis range to account for label height
if (showValues) y.range([availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);
else y.range([availableHeight, 0]);

//store old scales if they exist
x0 = x0 || x;
y0 = y0 || y.copy().range([y(0),y(0)]);

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
var gEnter = wrapEnter.append('g');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-groups');

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//------------------------------------------------------------



//TODO: by definition, the discrete bar should not have multiple groups, will modify/remove later
var groups = wrap.select('.nv-groups').selectAll('.nv-group')
.data(function(d) { return d }, function(d) { return d.key });
groups.enter().append('g')
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6);
d3.transition(groups.exit())
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6)
.remove();
groups
.attr('class', function(d,i) { return 'nv-group nv-series-' + i })
.classed('hover', function(d) { return d.hover });
d3.transition(groups)
.style('stroke-opacity', 1)
.style('fill-opacity', .75);


var bars = groups.selectAll('g.nv-bar')
.data(function(d) { return d.values });

bars.exit().remove();


var barsEnter = bars.enter().append('g')
.attr('transform', function(d,i,j) {
return 'translate(' + (x(getX(d,i)) + x.rangeBand() * .05 ) + ', ' + y(0) + ')'
})
.on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
d3.select(this).classed('hover', true);
dispatch.elementMouseover({
value: getY(d,i),
point: d,
series: data[d.series],
pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
pointIndex: i,
seriesIndex: d.series,
e: d3.event
});
})
.on('mouseout', function(d,i) {
d3.select(this).classed('hover', false);
dispatch.elementMouseout({
value: getY(d,i),
point: d,
series: data[d.series],
pointIndex: i,
seriesIndex: d.series,
e: d3.event
});
})
.on('click', function(d,i) {
dispatch.elementClick({
value: getY(d,i),
point: d,
series: data[d.series],
pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
pointIndex: i,
seriesIndex: d.series,
e: d3.event
});
d3.event.stopPropagation();
})
.on('dblclick', function(d,i) {
dispatch.elementDblClick({
value: getY(d,i),
point: d,
series: data[d.series],
pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
pointIndex: i,
seriesIndex: d.series,
e: d3.event
});
d3.event.stopPropagation();
});

barsEnter.append('rect')
.attr('height', 0)
.attr('width', x.rangeBand() * .9 / data.length )

if (showValues) {
barsEnter.append('text')
.attr('text-anchor', 'middle')
bars.select('text')
.attr('x', x.rangeBand() * .9 / 2)
.attr('y', function(d,i) { return getY(d,i) < 0 ? y(getY(d,i)) - y(0) + 12 : -4 })
.text(function(d,i) { return valueFormat(getY(d,i)) });
} else {
bars.selectAll('text').remove();
}

bars
.attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive' })
.style('fill', function(d,i) { return d.color || color(d,i) })
.style('stroke', function(d,i) { return d.color || color(d,i) })
.select('rect')
.attr('class', rectClass)
.attr('width', x.rangeBand() * .9 / data.length);
d3.transition(bars)
//.delay(function(d,i) { return i * 1200 / data[0].values.length })
.attr('transform', function(d,i) {
var left = x(getX(d,i)) + x.rangeBand() * .05,
top = getY(d,i) < 0 ?
y(0) :
y(0) - y(getY(d,i)) < 1 ?
y(0) - 1 : //make 1 px positive bars show up above y=0
y(getY(d,i));

return 'translate(' + left + ', ' + top + ')'
})
.select('rect')
.attr('height', function(d,i) {
return  Math.max(Math.abs(y(getY(d,i)) - y(0)) || 1)
});


//store old scales for use in transitions on update
x0 = x.copy();
y0 = y.copy();

});

return chart;
}


//============================================================
// Expose Public Variables
//------------------------------------------------------------

chart.dispatch = dispatch;

chart.x = function(_) {
if (!arguments.length) return getX;
getX = _;
return chart;
};

chart.y = function(_) {
if (!arguments.length) return getY;
getY = _;
return chart;
};

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.xScale = function(_) {
if (!arguments.length) return x;
x = _;
return chart;
};

chart.yScale = function(_) {
if (!arguments.length) return y;
y = _;
return chart;
};

chart.xDomain = function(_) {
if (!arguments.length) return xDomain;
xDomain = _;
return chart;
};

chart.yDomain = function(_) {
if (!arguments.length) return yDomain;
yDomain = _;
return chart;
};

chart.forceY = function(_) {
if (!arguments.length) return forceY;
forceY = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
return chart;
};

chart.id = function(_) {
if (!arguments.length) return id;
id = _;
return chart;
};

chart.showValues = function(_) {
if (!arguments.length) return showValues;
showValues = _;
return chart;
};

chart.valueFormat= function(_) {
if (!arguments.length) return valueFormat;
valueFormat = _;
return chart;
};

chart.rectClass= function(_) {
if (!arguments.length) return rectClass;
rectClass = _;
return chart;
}
//============================================================


return chart;
}

nv.models.discreteBarChart = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var discretebar = nv.models.discreteBar()
, xAxis = nv.models.axis()
, yAxis = nv.models.axis()
;

var margin = {top: 15, right: 10, bottom: 50, left: 60}
, width = null
, height = null
, color = nv.utils.getColor()
, staggerLabels = false
, tooltips = true
, tooltip = function(key, x, y, e, graph) {
return '<h3>' + x + '</h3>' +
'<p>' +  y + '</p>'
}
, x
, y
, noData = "No Data Available."
, dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'beforeUpdate')
;

xAxis
.orient('bottom')
.highlightZero(false)
.showMaxMin(false)
.tickFormat(function(d) { return d })
;
yAxis
.orient('left')
.tickFormat(d3.format(',.1f'))
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var showTooltip = function(e, offsetElement) {
var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
top = e.pos[1] + ( offsetElement.offsetTop || 0),
x = xAxis.tickFormat()(discretebar.x()(e.point, e.pointIndex)),
y = yAxis.tickFormat()(discretebar.y()(e.point, e.pointIndex)),
content = tooltip(e.series.key, x, y, e, chart);

nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
};

//============================================================


function chart(selection) {
selection.each(function(data) {
var container = d3.select(this),
that = this;

var availableWidth = (width  || parseInt(container.style('width')) || 960)
- margin.left - margin.right,
availableHeight = (height || parseInt(container.style('height')) || 400)
- margin.top - margin.bottom;


chart.update = function() { dispatch.beforeUpdate(); selection.transition().call(chart); };
chart.container = this;


//------------------------------------------------------------
// Display No Data message if there's nothing to show.

if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
var noDataText = container.selectAll('.nv-noData').data([noData]);

noDataText.enter().append('text')
.attr('class', 'nvd3 nv-noData')
.attr('dy', '-.7em')
.style('text-anchor', 'middle');

noDataText
.attr('x', margin.left + availableWidth / 2)
.attr('y', margin.top + availableHeight / 2)
.text(function(d) { return d });

return chart;
} else {
container.selectAll('.nv-noData').remove();
}

//------------------------------------------------------------


//------------------------------------------------------------
// Setup Scales

x = discretebar.xScale();
y = discretebar.yScale();

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
var defsEnter = gEnter.append('defs');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-x nv-axis');
gEnter.append('g').attr('class', 'nv-y nv-axis');
gEnter.append('g').attr('class', 'nv-barsWrap');

g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//------------------------------------------------------------


//------------------------------------------------------------
// Main Chart Component(s)

discretebar
.width(availableWidth)
.height(availableHeight);


var barsWrap = g.select('.nv-barsWrap')
.datum(data.filter(function(d) { return !d.disabled }))

d3.transition(barsWrap).call(discretebar);

//------------------------------------------------------------



defsEnter.append('clipPath')
.attr('id', 'nv-x-label-clip-' + discretebar.id())
.append('rect');

g.select('#nv-x-label-clip-' + discretebar.id() + ' rect')
.attr('width', x.rangeBand() * (staggerLabels ? 2 : 1))
.attr('height', 16)
.attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2 ));


//------------------------------------------------------------
// Setup Axes

xAxis
.scale(x)
.ticks( availableWidth / 100 )
.tickSize(-availableHeight, 0);

g.select('.nv-x.nv-axis')
.attr('transform', 'translate(0,' + (y.range()[0] + ((discretebar.showValues() && y.domain()[0] < 0) ? 16 : 0)) + ')');
//d3.transition(g.select('.nv-x.nv-axis'))
g.select('.nv-x.nv-axis').transition().duration(0)
.call(xAxis);


var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

if (staggerLabels) {
xTicks
.selectAll('text')
.attr('transform', function(d,i,j) { return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')' })
}

yAxis
.scale(y)
.ticks( availableHeight / 36 )
.tickSize( -availableWidth, 0);

d3.transition(g.select('.nv-y.nv-axis'))
.call(yAxis);

//------------------------------------------------------------


//============================================================
// Event Handling/Dispatching (in chart's scope)
//------------------------------------------------------------

dispatch.on('tooltipShow', function(e) {
if (tooltips) showTooltip(e, that.parentNode);
});

//============================================================


});

return chart;
}

//============================================================
// Event Handling/Dispatching (out of chart's scope)
//------------------------------------------------------------

discretebar.dispatch.on('elementMouseover.tooltip', function(e) {
e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
dispatch.tooltipShow(e);
});

discretebar.dispatch.on('elementMouseout.tooltip', function(e) {
dispatch.tooltipHide(e);
});

dispatch.on('tooltipHide', function() {
if (tooltips) nv.tooltip.cleanup();
});

//============================================================


//============================================================
// Expose Public Variables
//------------------------------------------------------------

// expose chart's sub-components
chart.dispatch = dispatch;
chart.discretebar = discretebar;
chart.xAxis = xAxis;
chart.yAxis = yAxis;

d3.rebind(chart, discretebar, 'x', 'y', 'xDomain', 'yDomain', 'forceX', 'forceY', 'id', 'showValues', 'valueFormat');

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
discretebar.color(color);
return chart;
};

chart.staggerLabels = function(_) {
if (!arguments.length) return staggerLabels;
staggerLabels = _;
return chart;
};

chart.tooltips = function(_) {
if (!arguments.length) return tooltips;
tooltips = _;
return chart;
};

chart.tooltipContent = function(_) {
if (!arguments.length) return tooltip;
tooltip = _;
return chart;
};

chart.noData = function(_) {
if (!arguments.length) return noData;
noData = _;
return chart;
};

//============================================================


return chart;
}
nv.models.legend = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var margin = {top: 5, right: 0, bottom: 5, left: 0}
, width = 400
, height = 20
, getKey = function(d) { return d.key }
, color = nv.utils.defaultColor()
, align = true
, dispatch = d3.dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout')
;

//============================================================


function chart(selection) {
selection.each(function(data) {
var availableWidth = width - margin.left - margin.right,
container = d3.select(this);


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-legend').data([data]);
var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
var g = wrap.select('g');

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//------------------------------------------------------------


var series = g.selectAll('.nv-series')
.data(function(d) { return d });
var seriesEnter = series.enter().append('g').attr('class', 'nv-series')
.on('mouseover', function(d,i) {
dispatch.legendMouseover(d,i);  //TODO: Make consistent with other event objects
})
.on('mouseout', function(d,i) {
dispatch.legendMouseout(d,i);
})
.on('click', function(d,i) {
dispatch.legendClick(d,i);
})
.on('dblclick', function(d,i) {
dispatch.legendDblclick(d,i);
});
seriesEnter.append('circle')
.style('stroke-width', 2)
.attr('r', 5);
seriesEnter.append('text')
.attr('text-anchor', 'start')
.attr('dy', '.32em')
.attr('dx', '8');
series.classed('disabled', function(d) { return d.disabled });
series.exit().remove();
series.select('circle')
.style('fill', function(d,i) { return d.color || color(d,i)})
.style('stroke', function(d,i) { return d.color || color(d, i) });
series.select('text').text(getKey);


//TODO: implement fixed-width and max-width options (max-width is especially useful with the align option)

// NEW ALIGNING CODE, TODO: clean up
if (align) {
var seriesWidths = [];
series.each(function(d,i) {
seriesWidths.push(d3.select(this).select('text').node().getComputedTextLength() + 28); // 28 is ~ the width of the circle plus some padding
});

//nv.log('Series Widths: ', JSON.stringify(seriesWidths));

var seriesPerRow = 0;
var legendWidth = 0;
var columnWidths = [];

while ( legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
legendWidth += seriesWidths[seriesPerRow++];
}


while ( legendWidth > availableWidth && seriesPerRow > 1 ) {
columnWidths = [];
seriesPerRow--;

for (k = 0; k < seriesWidths.length; k++) {
if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0) )
columnWidths[k % seriesPerRow] = seriesWidths[k];
}

legendWidth = columnWidths.reduce(function(prev, cur, index, array) {
return prev + cur;
});
}
//console.log(columnWidths, legendWidth, seriesPerRow);

var xPositions = [];
for (var i = 0, curX = 0; i < seriesPerRow; i++) {
xPositions[i] = curX;
curX += columnWidths[i];
}

series
.attr('transform', function(d, i) {
return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * 20) + ')';
});

//position legend as far right as possible within the total width
g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');

height = margin.top + margin.bottom + (Math.ceil(seriesWidths.length / seriesPerRow) * 20);

} else {

var ypos = 5,
newxpos = 5,
maxwidth = 0,
xpos;
series
.attr('transform', function(d, i) {
var length = d3.select(this).select('text').node().getComputedTextLength() + 28;
xpos = newxpos;

if (width < margin.left + margin.right + xpos + length) {
newxpos = xpos = 5;
ypos += 20;
}

newxpos += length;
if (newxpos > maxwidth) maxwidth = newxpos;

return 'translate(' + xpos + ',' + ypos + ')';
});

//position legend as far right as possible within the total width
g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');

height = margin.top + margin.bottom + ypos + 15;

}

});

return chart;
}


//============================================================
// Expose Public Variables
//------------------------------------------------------------

chart.dispatch = dispatch;

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.key = function(_) {
if (!arguments.length) return getKey;
getKey = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
return chart;
};

chart.align = function(_) {
if (!arguments.length) return align;
align = _;
return chart;
};

//============================================================


return chart;
}

nv.models.scatter = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var margin      = {top: 0, right: 0, bottom: 0, left: 0}
, width       = 960
, height      = 500
, color       = nv.utils.defaultColor() // chooses color
, id          = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't select one
, x           = d3.scale.linear()
, y           = d3.scale.linear()
, z           = d3.scale.linear() //linear because d3.svg.shape.size is treated as area
, getX        = function(d) { return d.x } // accessor to get the x value
, getY        = function(d) { return d.y } // accessor to get the y value
, getSize     = function(d) { return d.size || 1} // accessor to get the point size
, getShape    = function(d) { return d.shape || 'circle' } // accessor to get point shape
, onlyCircles = true // Set to false to use shapes
, forceX      = [] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
, forceY      = [] // List of numbers to Force into the Y scale
, forceSize   = [] // List of numbers to Force into the Size scale
, interactive = true // If true, plots a voronoi overlay for advanced point intersection
, pointActive = function(d) { return !d.notActive } // any points that return false will be filtered out
, padData     = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
, clipEdge    = false // if true, masks points within x and y scale
, clipVoronoi = true // if true, masks each point with a circle... can turn off to slightly increase performance
, clipRadius  = function() { return 25 } // function to get the radius for voronoi point clips
, xDomain     = null // Override x domain (skips the calculation from data)
, yDomain     = null // Override y domain
, sizeDomain  = null // Override point size domain
, sizeRange   = null
, singlePoint = false
, dispatch    = d3.dispatch('elementClick', 'elementMouseover', 'elementMouseout')
, useVoronoi  = true
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var x0, y0, z0 // used to store previous scales
, timeoutID
, needsUpdate = false // Flag for when the points are visually updating, but the interactive layer is behind, to disable tooltips
;

//============================================================


function chart(selection) {
selection.each(function(data) {
var availableWidth = width - margin.left - margin.right,
availableHeight = height - margin.top - margin.bottom,
container = d3.select(this);

//add series index to each data point for reference
data = data.map(function(series, i) {
series.values = series.values.map(function(point) {
point.series = i;
return point;
});
return series;
});

//------------------------------------------------------------
// Setup Scales

// remap and flatten the data for use in calculating the scales' domains
var seriesData = (xDomain && yDomain && sizeDomain) ? [] : // if we know xDomain and yDomain and sizeDomain, no need to calculate.... if Size is constant remember to set sizeDomain to speed up performance
d3.merge(
data.map(function(d) {
return d.values.map(function(d,i) {
return { x: getX(d,i), y: getY(d,i), size: getSize(d,i) }
})
})
);

x   .domain(xDomain || d3.extent(seriesData.map(function(d) { return d.x }).concat(forceX)))

if (padData)
x.range([availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
else
x.range([0, availableWidth]);

y   .domain(yDomain || d3.extent(seriesData.map(function(d) { return d.y }).concat(forceY)))
.range([availableHeight, 0]);

z   .domain(sizeDomain || d3.extent(seriesData.map(function(d) { return d.size }).concat(forceSize)))
.range(sizeRange || [16, 256]);

// If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
if (x.domain()[0] === x.domain()[1] || y.domain()[0] === y.domain()[1]) singlePoint = true;
if (x.domain()[0] === x.domain()[1])
x.domain()[0] ?
x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
: x.domain([-1,1]);

if (y.domain()[0] === y.domain()[1])
y.domain()[0] ?
y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
: y.domain([-1,1]);


x0 = x0 || x;
y0 = y0 || y;
z0 = z0 || z;

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-scatter').data([data]);
var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatter nv-chart-' + id + (singlePoint ? ' nv-single-point' : ''));
var defsEnter = wrapEnter.append('defs');
var gEnter = wrapEnter.append('g');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-groups');
gEnter.append('g').attr('class', 'nv-point-paths');

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//------------------------------------------------------------


defsEnter.append('clipPath')
.attr('id', 'nv-edge-clip-' + id)
.append('rect');

wrap.select('#nv-edge-clip-' + id + ' rect')
.attr('width', availableWidth)
.attr('height', availableHeight);

g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');


function updateInteractiveLayer() {

if (!interactive) return false;

var eventElements;

var vertices = d3.merge(data.map(function(group, groupIndex) {
return group.values
.map(function(point, pointIndex) {
// *Adding noise to make duplicates very unlikely
// **Injecting series and point index for reference
return [x(getX(point,pointIndex)) * (Math.random() / 1e12 + 1)  , y(getY(point,pointIndex)) * (Math.random() / 1e12 + 1), groupIndex, pointIndex, point]; //temp hack to add noise untill I think of a better way so there are no duplicates
})
.filter(function(pointArray, pointIndex) {
return pointActive(pointArray[4], pointIndex); // Issue #237.. move filter to after map, so pointIndex is correct!
})
})
);



//inject series and point index for reference into voronoi
if (useVoronoi === true) {

if (clipVoronoi) {
var pointClipsEnter = wrap.select('defs').selectAll('.nv-point-clips')
.data([id])
.enter();

pointClipsEnter.append('clipPath')
.attr('class', 'nv-point-clips')
.attr('id', 'nv-points-clip-' + id);

var pointClips = wrap.select('#nv-points-clip-' + id).selectAll('circle')
.data(vertices);
pointClips.enter().append('circle')
.attr('r', clipRadius);
pointClips.exit().remove();
pointClips
.attr('cx', function(d) { return d[0] })
.attr('cy', function(d) { return d[1] });

wrap.select('.nv-point-paths')
.attr('clip-path', 'url(#nv-points-clip-' + id + ')');
}


// if(vertices.length < 3) {
// Issue #283 - Adding 2 dummy points to the voronoi b/c voronoi requires min 3 points to work
vertices.push([x.range()[0] - 20, y.range()[0] - 20, null, null]);
vertices.push([x.range()[1] + 20, y.range()[1] + 20, null, null]);
vertices.push([x.range()[0] - 20, y.range()[0] + 20, null, null]);
vertices.push([x.range()[1] + 20, y.range()[1] - 20, null, null]);
// }

var bounds = d3.geom.polygon([
[-10,-10],
[-10,height + 10],
[width + 10,height + 10],
[width + 10,-10]
]);

var voronoi = d3.geom.voronoi(vertices).map(function(d, i) {
return {
'data': bounds.clip(d),
'series': vertices[i][2],
'point': vertices[i][3]
}
});



var pointPaths = wrap.select('.nv-point-paths').selectAll('path')
.data(voronoi);
pointPaths.enter().append('path')
.attr('class', function(d,i) { return 'nv-path-'+i; });
pointPaths.exit().remove();
pointPaths
.attr('d', function(d) { return 'M' + d.data.join('L') + 'Z'; });

pointPaths
.on('click', function(d) {
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[d.point];

dispatch.elementClick({
point: point,
series: series,
pos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
seriesIndex: d.series,
pointIndex: d.point
});
})
.on('mouseover', function(d) {
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[d.point];

dispatch.elementMouseover({
point: point,
series: series,
pos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
seriesIndex: d.series,
pointIndex: d.point
});
})
.on('mouseout', function(d, i) {
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[d.point];

dispatch.elementMouseout({
point: point,
series: series,
seriesIndex: d.series,
pointIndex: d.point
});
});


} else {
/*
// bring data in form needed for click handlers
var dataWithPoints = vertices.map(function(d, i) {
return {
'data': d,
'series': vertices[i][2],
'point': vertices[i][3]
}
});
*/

// add event handlers to points instead voronoi paths
wrap.select('.nv-groups').selectAll('.nv-group')
.selectAll('.nv-point')
//.data(dataWithPoints)
//.style('pointer-events', 'auto') // recativate events, disabled by css
.on('click', function(d,i) {
//nv.log('test', d, i);
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[i];

dispatch.elementClick({
point: point,
series: series,
pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
seriesIndex: d.series,
pointIndex: i
});
})
.on('mouseover', function(d,i) {
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[i];

dispatch.elementMouseover({
point: point,
series: series,
pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
seriesIndex: d.series,
pointIndex: i
});
})
.on('mouseout', function(d,i) {
if (needsUpdate) return 0;
var series = data[d.series],
point  = series.values[i];

dispatch.elementMouseout({
point: point,
series: series,
seriesIndex: d.series,
pointIndex: i
});
});
}

needsUpdate = false;
}

needsUpdate = true;

var groups = wrap.select('.nv-groups').selectAll('.nv-group')
.data(function(d) { return d }, function(d) { return d.key });
groups.enter().append('g')
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6);
d3.transition(groups.exit())
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6)
.remove();
groups
.attr('class', function(d,i) { return 'nv-group nv-series-' + i })
.classed('hover', function(d) { return d.hover });
d3.transition(groups)
.style('fill', function(d,i) { return color(d, i) })
.style('stroke', function(d,i) { return color(d, i) })
.style('stroke-opacity', 1)
.style('fill-opacity', .5);


if (onlyCircles) {

var points = groups.selectAll('circle.nv-point')
.data(function(d) { return d.values });
points.enter().append('circle')
.attr('cx', function(d,i) { return x0(getX(d,i)) })
.attr('cy', function(d,i) { return y0(getY(d,i)) })
.attr('r', function(d,i) { return Math.sqrt(z(getSize(d,i))/Math.PI) });
points.exit().remove();
d3.transition(groups.exit().selectAll('path.nv-point'))
.attr('cx', function(d,i) { return x(getX(d,i)) })
.attr('cy', function(d,i) { return y(getY(d,i)) })
.remove();
points.attr('class', function(d,i) { return 'nv-point nv-point-' + i });
d3.transition(points)
.attr('cx', function(d,i) { return x(getX(d,i)) })
.attr('cy', function(d,i) { return y(getY(d,i)) })
.attr('r', function(d,i) { return Math.sqrt(z(getSize(d,i))/Math.PI) });

} else {

var points = groups.selectAll('path.nv-point')
.data(function(d) { return d.values });
points.enter().append('path')
.attr('transform', function(d,i) {
return 'translate(' + x0(getX(d,i)) + ',' + y0(getY(d,i)) + ')'
})
.attr('d',
d3.svg.symbol()
.type(getShape)
.size(function(d,i) { return z(getSize(d,i)) })
);
points.exit().remove();
d3.transition(groups.exit().selectAll('path.nv-point'))
.attr('transform', function(d,i) {
return 'translate(' + x(getX(d,i)) + ',' + y(getY(d,i)) + ')'
})
.remove();
points.attr('class', function(d,i) { return 'nv-point nv-point-' + i });
d3.transition(points)
.attr('transform', function(d,i) {
//nv.log(d,i,getX(d,i), x(getX(d,i)));
return 'translate(' + x(getX(d,i)) + ',' + y(getY(d,i)) + ')'
})
.attr('d',
d3.svg.symbol()
.type(getShape)
.size(function(d,i) { return z(getSize(d,i)) })
);
}


// Delay updating the invisible interactive layer for smoother animation
clearTimeout(timeoutID); // stop repeat calls to updateInteractiveLayer
timeoutID = setTimeout(updateInteractiveLayer, 300);
//updateInteractiveLayer();

//store old scales for use in transitions on update
x0 = x.copy();
y0 = y.copy();
z0 = z.copy();

});

return chart;
}


//============================================================
// Event Handling/Dispatching (out of chart's scope)
//------------------------------------------------------------

dispatch.on('elementMouseover.point', function(d) {
if (interactive)
d3.select('.nv-chart-' + id + ' .nv-series-' + d.seriesIndex + ' .nv-point-' + d.pointIndex)
.classed('hover', true);
});

dispatch.on('elementMouseout.point', function(d) {
if (interactive)
d3.select('.nv-chart-' + id + ' .nv-series-' + d.seriesIndex + ' .nv-point-' + d.pointIndex)
.classed('hover', false);
});

//============================================================


//============================================================
// Expose Public Variables
//------------------------------------------------------------

chart.dispatch = dispatch;

chart.x = function(_) {
if (!arguments.length) return getX;
getX = d3.functor(_);
return chart;
};

chart.y = function(_) {
if (!arguments.length) return getY;
getY = d3.functor(_);
return chart;
};

chart.size = function(_) {
if (!arguments.length) return getSize;
getSize = d3.functor(_);
return chart;
};

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.xScale = function(_) {
if (!arguments.length) return x;
x = _;
return chart;
};

chart.yScale = function(_) {
if (!arguments.length) return y;
y = _;
return chart;
};

chart.zScale = function(_) {
if (!arguments.length) return z;
z = _;
return chart;
};

chart.xDomain = function(_) {
if (!arguments.length) return xDomain;
xDomain = _;
return chart;
};

chart.yDomain = function(_) {
if (!arguments.length) return yDomain;
yDomain = _;
return chart;
};

chart.sizeDomain = function(_) {
if (!arguments.length) return sizeDomain;
sizeDomain = _;
return chart;
};

chart.sizeRange = function(_) {
if (!arguments.length) return sizeRange;
sizeRange = _;
return chart;
};

chart.forceX = function(_) {
if (!arguments.length) return forceX;
forceX = _;
return chart;
};

chart.forceY = function(_) {
if (!arguments.length) return forceY;
forceY = _;
return chart;
};

chart.forceSize = function(_) {
if (!arguments.length) return forceSize;
forceSize = _;
return chart;
};

chart.interactive = function(_) {
if (!arguments.length) return interactive;
interactive = _;
return chart;
};

chart.pointActive = function(_) {
if (!arguments.length) return pointActive;
pointActive = _;
return chart;
};

chart.padData = function(_) {
if (!arguments.length) return padData;
padData = _;
return chart;
};

chart.clipEdge = function(_) {
if (!arguments.length) return clipEdge;
clipEdge = _;
return chart;
};

chart.clipVoronoi= function(_) {
if (!arguments.length) return clipVoronoi;
clipVoronoi = _;
return chart;
};

chart.useVoronoi= function(_) {
if (!arguments.length) return useVoronoi;
useVoronoi = _;
if (useVoronoi === false) {
clipVoronoi = false;
}
return chart;
};

chart.clipRadius = function(_) {
if (!arguments.length) return clipRadius;
clipRadius = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
return chart;
};

chart.shape = function(_) {
if (!arguments.length) return getShape;
getShape = _;
return chart;
};

chart.onlyCircles = function(_) {
if (!arguments.length) return onlyCircles;
onlyCircles = _;
return chart;
};

chart.id = function(_) {
if (!arguments.length) return id;
id = _;
return chart;
};

chart.singlePoint = function(_) {
if (!arguments.length) return singlePoint;
singlePoint = _;
return chart;
};

//============================================================


return chart;
}

nv.models.line = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var  scatter = nv.models.scatter()
;

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 960
, height = 500
, color = nv.utils.defaultColor() // a function that returns a color
, getX = function(d) { return d.x } // accessor to get the x value from a data point
, getY = function(d) { return d.y } // accessor to get the y value from a data point
, defined = function(d,i) { return !isNaN(getY(d,i)) && getY(d,i) !== null } // allows a line to be not continuous when it is not defined
, isArea = function(d) { return d.area } // decides if a line is an area or just a line
, clipEdge = false // if true, masks lines within x and y scale
, x //can be accessed via chart.xScale()
, y //can be accessed via chart.yScale()
, interpolate = "linear" // controls the line interpolation
;

scatter
.size(16) // default size
.sizeDomain([16,256]) //set to speed up calculation, needs to be unset if there is a custom size accessor
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var x0, y0 //used to store previous scales
;

//============================================================


function chart(selection) {
selection.each(function(data) {
var availableWidth = width - margin.left - margin.right,
availableHeight = height - margin.top - margin.bottom,
container = d3.select(this);

//------------------------------------------------------------
// Setup Scales

x = scatter.xScale();
y = scatter.yScale();

x0 = x0 || x;
y0 = y0 || y;

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-line').data([data]);
var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-line');
var defsEnter = wrapEnter.append('defs');
var gEnter = wrapEnter.append('g');
var g = wrap.select('g')

gEnter.append('g').attr('class', 'nv-groups');
gEnter.append('g').attr('class', 'nv-scatterWrap');

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//------------------------------------------------------------




scatter
.width(availableWidth)
.height(availableHeight)

var scatterWrap = wrap.select('.nv-scatterWrap');
//.datum(data); // Data automatically trickles down from the wrap

d3.transition(scatterWrap).call(scatter);



defsEnter.append('clipPath')
.attr('id', 'nv-edge-clip-' + scatter.id())
.append('rect');

wrap.select('#nv-edge-clip-' + scatter.id() + ' rect')
.attr('width', availableWidth)
.attr('height', availableHeight);

g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
scatterWrap
.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');




var groups = wrap.select('.nv-groups').selectAll('.nv-group')
.data(function(d) { return d }, function(d) { return d.key });
groups.enter().append('g')
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6);
d3.transition(groups.exit())
.style('stroke-opacity', 1e-6)
.style('fill-opacity', 1e-6)
.remove();
groups
.attr('class', function(d,i) { return 'nv-group nv-series-' + i })
.classed('hover', function(d) { return d.hover })
.style('fill', function(d,i){ return color(d, i) })
.style('stroke', function(d,i){ return color(d, i)});
d3.transition(groups)
.style('stroke-opacity', 1)
.style('fill-opacity', .5);



var areaPaths = groups.selectAll('path.nv-area')
.data(function(d) { return isArea(d) ? [d] : [] }); // this is done differently than lines because I need to check if series is an area
areaPaths.enter().append('path')
.attr('class', 'nv-area')
.attr('d', function(d) {
return d3.svg.area()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x0(getX(d,i)) })
.y0(function(d,i) { return y0(getY(d,i)) })
.y1(function(d,i) { return y0( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
//.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
.apply(this, [d.values])
});
d3.transition(groups.exit().selectAll('path.nv-area'))
.attr('d', function(d) {
return d3.svg.area()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x0(getX(d,i)) })
.y0(function(d,i) { return y0(getY(d,i)) })
.y1(function(d,i) { return y0( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
//.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
.apply(this, [d.values])
});
d3.transition(areaPaths)
.attr('d', function(d) {
return d3.svg.area()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x0(getX(d,i)) })
.y0(function(d,i) { return y0(getY(d,i)) })
.y1(function(d,i) { return y0( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
//.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
.apply(this, [d.values])
});



var linePaths = groups.selectAll('path.nv-line')
.data(function(d) { return [d.values] });
linePaths.enter().append('path')
.attr('class', 'nv-line')
.attr('d',
d3.svg.line()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x0(getX(d,i)) })
.y(function(d,i) { return y0(getY(d,i)) })
);
d3.transition(groups.exit().selectAll('path.nv-line'))
.attr('d',
d3.svg.line()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x(getX(d,i)) })
.y(function(d,i) { return y(getY(d,i)) })
);
d3.transition(linePaths)
.attr('d',
d3.svg.line()
.interpolate(interpolate)
.defined(defined)
.x(function(d,i) { return x(getX(d,i)) })
.y(function(d,i) { return y(getY(d,i)) })
);



//store old scales for use in transitions on update
x0 = x.copy();
y0 = y.copy();

});

return chart;
}


//============================================================
// Expose Public Variables
//------------------------------------------------------------

chart.dispatch = scatter.dispatch;
chart.scatter = scatter;

d3.rebind(chart, scatter, 'id', 'interactive', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'sizeDomain', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'padData');

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.x = function(_) {
if (!arguments.length) return getX;
getX = _;
scatter.x(_);
return chart;
};

chart.y = function(_) {
if (!arguments.length) return getY;
getY = _;
scatter.y(_);
return chart;
};

chart.clipEdge = function(_) {
if (!arguments.length) return clipEdge;
clipEdge = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
scatter.color(color);
return chart;
};

chart.interpolate = function(_) {
if (!arguments.length) return interpolate;
interpolate = _;
return chart;
};

chart.defined = function(_) {
if (!arguments.length) return defined;
defined = _;
return chart;
};

chart.isArea = function(_) {
if (!arguments.length) return isArea;
isArea = d3.functor(_);
return chart;
};

//============================================================


return chart;
}

nv.models.lineChart = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var lines = nv.models.line()
, xAxis = nv.models.axis()
, yAxis = nv.models.axis()
, legend = nv.models.legend()
;

//set margin.right to 23 to fit dates on the x-axis within the chart
var margin = {top: 30, right: 20, bottom: 50, left: 60}
, color = nv.utils.defaultColor()
, width = null
, height = null
, showLegend = true
, tooltips = true
, tooltip = function(key, x, y, e, graph) {
return '<h3>' + key + '</h3>' +
'<p>' +  y + ' at ' + x + '</p>'
}
, x
, y
, state = {}
, noData = 'No Data Available.'
, dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
;

xAxis
.orient('bottom')
.tickPadding(7)
;
yAxis
.orient('left')
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var showTooltip = function(e, offsetElement) {

// New addition to calculate position if SVG is scaled with viewBox, may move TODO: consider implementing everywhere else
if (offsetElement) {
var svg = d3.select(offsetElement).select('svg');
var viewBox = svg.attr('viewBox');
if (viewBox) {
viewBox = viewBox.split(' ');
var ratio = parseInt(svg.style('width')) / viewBox[2];
e.pos[0] = e.pos[0] * ratio;
e.pos[1] = e.pos[1] * ratio;
}
}

var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
top = e.pos[1] + ( offsetElement.offsetTop || 0),
x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
content = tooltip(e.series.key, x, y, e, chart);

nv.tooltip.show([left, top], content, null, null, offsetElement);
};

//============================================================


function chart(selection) {
selection.each(function(data) {
var container = d3.select(this),
that = this;

var availableWidth = (width  || parseInt(container.style('width')) || 960)
- margin.left - margin.right,
availableHeight = (height || parseInt(container.style('height')) || 400)
- margin.top - margin.bottom;


chart.update = function() { chart(selection) };
chart.container = this;


//------------------------------------------------------------
// Display noData message if there's nothing to show.

if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
var noDataText = container.selectAll('.nv-noData').data([noData]);

noDataText.enter().append('text')
.attr('class', 'nvd3 nv-noData')
.attr('dy', '-.7em')
.style('text-anchor', 'middle');

noDataText
.attr('x', margin.left + availableWidth / 2)
.attr('y', margin.top + availableHeight / 2)
.text(function(d) { return d });

return chart;
} else {
container.selectAll('.nv-noData').remove();
}

//------------------------------------------------------------


//------------------------------------------------------------
// Setup Scales

x = lines.xScale();
y = lines.yScale();

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-lineChart').data([data]);
var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineChart').append('g');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-x nv-axis');
gEnter.append('g').attr('class', 'nv-y nv-axis');
gEnter.append('g').attr('class', 'nv-linesWrap');
gEnter.append('g').attr('class', 'nv-legendWrap');

//------------------------------------------------------------


//------------------------------------------------------------
// Legend

if (showLegend) {
legend.width(availableWidth);

g.select('.nv-legendWrap')
.datum(data)
.call(legend);

if ( margin.top != legend.height()) {
margin.top = legend.height();
availableHeight = (height || parseInt(container.style('height')) || 400)
- margin.top - margin.bottom;
}

wrap.select('.nv-legendWrap')
.attr('transform', 'translate(0,' + (-margin.top) +')')
}

//------------------------------------------------------------

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


//------------------------------------------------------------
// Main Chart Component(s)

lines
.width(availableWidth)
.height(availableHeight)
.color(data.map(function(d,i) {
return d.color || color(d, i);
}).filter(function(d,i) { return !data[i].disabled }));


var linesWrap = g.select('.nv-linesWrap')
.datum(data.filter(function(d) { return !d.disabled }))

d3.transition(linesWrap).call(lines);

//------------------------------------------------------------


//------------------------------------------------------------
// Setup Axes

xAxis
.scale(x)
.ticks( availableWidth / 100 )
.tickSize(-availableHeight, 0);

g.select('.nv-x.nv-axis')
.attr('transform', 'translate(0,' + y.range()[0] + ')');
d3.transition(g.select('.nv-x.nv-axis'))
.call(xAxis);


yAxis
.scale(y)
.ticks( availableHeight / 36 )
.tickSize( -availableWidth, 0);

d3.transition(g.select('.nv-y.nv-axis'))
.call(yAxis);

//------------------------------------------------------------


//============================================================
// Event Handling/Dispatching (in chart's scope)
//------------------------------------------------------------

legend.dispatch.on('legendClick', function(d,i) {
d.disabled = !d.disabled;

if (!data.filter(function(d) { return !d.disabled }).length) {
data.map(function(d) {
d.disabled = false;
wrap.selectAll('.nv-series').classed('disabled', false);
return d;
});
}

state.disabled = data.map(function(d) { return !!d.disabled });
dispatch.stateChange(state);

selection.transition().call(chart);
});

/*
legend.dispatch.on('legendMouseover', function(d, i) {
d.hover = true;
selection.transition().call(chart)
});

legend.dispatch.on('legendMouseout', function(d, i) {
d.hover = false;
selection.transition().call(chart)
});
*/

dispatch.on('tooltipShow', function(e) {
if (tooltips) showTooltip(e, that.parentNode);
});


dispatch.on('changeState', function(e) {

if (typeof e.disabled !== 'undefined') {
data.forEach(function(series,i) {
series.disabled = e.disabled[i];
});

state.disabled = e.disabled;
}

selection.call(chart);
});

//============================================================

});

return chart;
}


//============================================================
// Event Handling/Dispatching (out of chart's scope)
//------------------------------------------------------------

lines.dispatch.on('elementMouseover.tooltip', function(e) {
e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
dispatch.tooltipShow(e);
});

lines.dispatch.on('elementMouseout.tooltip', function(e) {
dispatch.tooltipHide(e);
});

dispatch.on('tooltipHide', function() {
if (tooltips) nv.tooltip.cleanup();
});

//============================================================


//============================================================
// Expose Public Variables
//------------------------------------------------------------

// expose chart's sub-components
chart.dispatch = dispatch;
chart.lines = lines;
chart.legend = legend;
chart.xAxis = xAxis;
chart.yAxis = yAxis;

d3.rebind(chart, lines, 'defined', 'isArea', 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id', 'interpolate');

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
legend.color(color);
return chart;
};

chart.showLegend = function(_) {
if (!arguments.length) return showLegend;
showLegend = _;
return chart;
};

chart.tooltips = function(_) {
if (!arguments.length) return tooltips;
tooltips = _;
return chart;
};

chart.tooltipContent = function(_) {
if (!arguments.length) return tooltip;
tooltip = _;
return chart;
};

chart.state = function(_) {
if (!arguments.length) return state;
state = _;
return chart;
};

chart.noData = function(_) {
if (!arguments.length) return noData;
noData = _;
return chart;
};

//============================================================


return chart;
}

nv.models.pie = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 500
, height = 500
, getValues = function(d) { return d.values }
, getX = function(d) { return d.x }
, getY = function(d) { return d.y }
, id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
, color = nv.utils.defaultColor()
, valueFormat = d3.format(',.2f')
, showLabels = true
, donutLabelsOutside = false
, labelThreshold = .02 //if slice percentage is under this, don't show label
, donut = false
, labelSunbeamLayout = false
, dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
;

//============================================================


function chart(selection) {
selection.each(function(data) {
var availableWidth = width - margin.left - margin.right,
availableHeight = height - margin.top - margin.bottom,
radius = Math.min(availableWidth, availableHeight) / 2,
arcRadius = radius-(radius / 5),
container = d3.select(this);


//------------------------------------------------------------
// Setup containers and skeleton of chart

//var wrap = container.selectAll('.nv-wrap.nv-pie').data([data]);
var wrap = container.selectAll('.nv-wrap.nv-pie').data([getValues(data[0])]);
var wrapEnter = wrap.enter().append('g').attr('class','nvd3 nv-wrap nv-pie nv-chart-' + id);
var gEnter = wrapEnter.append('g');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-pie');

wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
g.select('.nv-pie').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');

//------------------------------------------------------------


container
.on('click', function(d,i) {
dispatch.chartClick({
data: d,
index: i,
pos: d3.event,
id: id
});
});


var arc = d3.svg.arc()
.outerRadius(arcRadius);

if (donut) arc.innerRadius(radius / 2);


// Setup the Pie chart and choose the data element
var pie = d3.layout.pie()
.sort(null)
.value(function(d) { return d.disabled ? 0 : getY(d) });

var slices = wrap.select('.nv-pie').selectAll('.nv-slice')
.data(pie);

slices.exit().remove();

var ae = slices.enter().append('g')
.attr('class', 'nv-slice')
.on('mouseover', function(d,i){
d3.select(this).classed('hover', true);
dispatch.elementMouseover({
label: getX(d.data),
value: getY(d.data),
point: d.data,
pointIndex: i,
pos: [d3.event.pageX, d3.event.pageY],
id: id
});
})
.on('mouseout', function(d,i){
d3.select(this).classed('hover', false);
dispatch.elementMouseout({
label: getX(d.data),
value: getY(d.data),
point: d.data,
index: i,
id: id
});
})
.on('click', function(d,i) {
dispatch.elementClick({
label: getX(d.data),
value: getY(d.data),
point: d.data,
index: i,
pos: d3.event,
id: id
});
d3.event.stopPropagation();
})
.on('dblclick', function(d,i) {
dispatch.elementDblClick({
label: getX(d.data),
value: getY(d.data),
point: d.data,
index: i,
pos: d3.event,
id: id
});
d3.event.stopPropagation();
});

slices
.attr('fill', function(d,i) { return color(d, i); })
.attr('stroke', function(d,i) { return color(d, i); });

var paths = ae.append('path')
.each(function(d) { this._current = d; });
//.attr('d', arc);

d3.transition(slices.select('path'))
.attr('d', arc)
.attrTween('d', arcTween);

if (showLabels) {
// This does the normal label
var labelsArc = arc;
if (donutLabelsOutside) {
labelsArc = d3.svg.arc().outerRadius(arc.outerRadius())
}

ae.append("g").classed("nv-label", true)
.each(function(d, i) {
var group = d3.select(this);

group
.attr('transform', function(d) {
if (labelSunbeamLayout) {
d.outerRadius = arcRadius + 10; // Set Outer Coordinate
d.innerRadius = arcRadius + 15; // Set Inner Coordinate
var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
if ((d.startAngle+d.endAngle)/2 < Math.PI) {
rotateAngle -= 90;
} else {
rotateAngle += 90;
}
return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
} else {
d.outerRadius = radius + 10; // Set Outer Coordinate
d.innerRadius = radius + 15; // Set Inner Coordinate
return 'translate(' + labelsArc.centroid(d) + ')'
}
});

group.append('rect')
.style('stroke', '#fff')
.style('fill', '#fff')
.attr("rx", 3)
.attr("ry", 3);

group.append('text')
.style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
.style('fill', '#000')


});

slices.select(".nv-label").transition()
.attr('transform', function(d) {
if (labelSunbeamLayout) {
d.outerRadius = arcRadius + 10; // Set Outer Coordinate
d.innerRadius = arcRadius + 15; // Set Inner Coordinate
var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
if ((d.startAngle+d.endAngle)/2 < Math.PI) {
rotateAngle -= 90;
} else {
rotateAngle += 90;
}
return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
} else {
d.outerRadius = radius + 10; // Set Outer Coordinate
d.innerRadius = radius + 15; // Set Inner Coordinate
return 'translate(' + labelsArc.centroid(d) + ')'
}
});

slices.each(function(d, i) {
var slice = d3.select(this);

slice
.select(".nv-label text")
.style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
.text(function(d, i) {
var percent = (d.endAngle - d.startAngle) / (2 * Math.PI);
return (d.value && percent > labelThreshold) ? getX(d.data) : '';
});

var textBox = slice.select('text').node().getBBox();
slice.select(".nv-label rect")
.attr("width", textBox.width + 10)
.attr("height", textBox.height + 10)
.attr("transform", function() {
return "translate(" + [textBox.x - 5, textBox.y - 5] + ")";
});
});
}


// Computes the angle of an arc, converting from radians to degrees.
function angle(d) {
var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
return a > 90 ? a - 180 : a;
}

function arcTween(a) {
if (!donut) a.innerRadius = 0;
var i = d3.interpolate(this._current, a);
this._current = i(0);
return function(t) {
return arc(i(t));
};
}

function tweenPie(b) {
b.innerRadius = 0;
var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
return function(t) {
return arc(i(t));
};
}

});

return chart;
}


//============================================================
// Expose Public Variables
//------------------------------------------------------------

chart.dispatch = dispatch;

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.values = function(_) {
if (!arguments.length) return getValues;
getValues = _;
return chart;
};

chart.x = function(_) {
if (!arguments.length) return getX;
getX = _;
return chart;
};

chart.y = function(_) {
if (!arguments.length) return getY;
getY = d3.functor(_);
return chart;
};

chart.showLabels = function(_) {
if (!arguments.length) return showLabels;
showLabels = _;
return chart;
};

chart.labelSunbeamLayout = function(_) {
if (!arguments.length) return labelSunbeamLayout;
labelSunbeamLayout = _;
return chart;
};

chart.donutLabelsOutside = function(_) {
if (!arguments.length) return donutLabelsOutside;
donutLabelsOutside = _;
return chart;
};

chart.donut = function(_) {
if (!arguments.length) return donut;
donut = _;
return chart;
};

chart.id = function(_) {
if (!arguments.length) return id;
id = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
return chart;
};

chart.valueFormat = function(_) {
if (!arguments.length) return valueFormat;
valueFormat = _;
return chart;
};

chart.labelThreshold = function(_) {
if (!arguments.length) return labelThreshold;
labelThreshold = _;
return chart;
};

//============================================================


return chart;
}

nv.models.pieChart = function() {

//============================================================
// Public Variables with Default Settings
//------------------------------------------------------------

var pie = nv.models.pie()
, legend = nv.models.legend()
;

var margin = {top: 30, right: 20, bottom: 20, left: 20}
, width = null
, height = null
, showLegend = true
, color = nv.utils.defaultColor()
, tooltips = true
, tooltip = function(key, y, e, graph) {
return '<h3>' + key + '</h3>' +
'<p>' +  y + '</p>'
}
, state = {}
, noData = "No Data Available."
, dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
;

//============================================================


//============================================================
// Private Variables
//------------------------------------------------------------

var showTooltip = function(e, offsetElement) {
var left = e.pos[0] + ( (offsetElement && offsetElement.offsetLeft) || 0 ),
top = e.pos[1] + ( (offsetElement && offsetElement.offsetTop) || 0),
y = pie.valueFormat()(pie.y()(e.point)),
content = tooltip(pie.x()(e.point), y, e, chart);

nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
};

//============================================================


function chart(selection) {
selection.each(function(data) {
var container = d3.select(this),
that = this;

var availableWidth = (width  || parseInt(container.style('width')) || 960)
- margin.left - margin.right,
availableHeight = (height || parseInt(container.style('height')) || 400)
- margin.top - margin.bottom;

chart.update = function() { chart(selection); };
chart.container = this;


//------------------------------------------------------------
// Display No Data message if there's nothing to show.

if (!data || !data.length) {
var noDataText = container.selectAll('.nv-noData').data([noData]);

noDataText.enter().append('text')
.attr('class', 'nvd3 nv-noData')
.attr('dy', '-.7em')
.style('text-anchor', 'middle');

noDataText
.attr('x', margin.left + availableWidth / 2)
.attr('y', margin.top + availableHeight / 2)
.text(function(d) { return d });

return chart;
} else {
container.selectAll('.nv-noData').remove();
}

//------------------------------------------------------------


//------------------------------------------------------------
// Setup containers and skeleton of chart

var wrap = container.selectAll('g.nv-wrap.nv-pieChart').data([data]);
var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pieChart').append('g');
var g = wrap.select('g');

gEnter.append('g').attr('class', 'nv-pieWrap');
gEnter.append('g').attr('class', 'nv-legendWrap');

//------------------------------------------------------------


//------------------------------------------------------------
// Legend

if (showLegend) {
legend
.width( availableWidth )
.key(pie.x());

wrap.select('.nv-legendWrap')
.datum(pie.values()(data[0]))
.call(legend);

if ( margin.top != legend.height()) {
margin.top = legend.height();
availableHeight = (height || parseInt(container.style('height')) || 400)
- margin.top - margin.bottom;
}

wrap.select('.nv-legendWrap')
.attr('transform', 'translate(0,' + (-margin.top) +')');
}

//------------------------------------------------------------


wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


//------------------------------------------------------------
// Main Chart Component(s)

pie
.width(availableWidth)
.height(availableHeight);


var pieWrap = g.select('.nv-pieWrap')
.datum(data);

d3.transition(pieWrap).call(pie);

//------------------------------------------------------------


//============================================================
// Event Handling/Dispatching (in chart's scope)
//------------------------------------------------------------

legend.dispatch.on('legendClick', function(d,i, that) {
d.disabled = !d.disabled;

if (!pie.values()(data[0]).filter(function(d) { return !d.disabled }).length) {
pie.values()(data[0]).map(function(d) {
d.disabled = false;
wrap.selectAll('.nv-series').classed('disabled', false);
return d;
});
}

state.disabled = data[0].map(function(d) { return !!d.disabled });
dispatch.stateChange(state);

selection.transition().call(chart)
});

pie.dispatch.on('elementMouseout.tooltip', function(e) {
dispatch.tooltipHide(e);
});

// Update chart from a state object passed to event handler
dispatch.on('changeState', function(e) {

if (typeof e.disabled !== 'undefined') {
data[0].forEach(function(series,i) {
series.disabled = e.disabled[i];
});

state.disabled = e.disabled;
}

selection.call(chart);
});

//============================================================


});

return chart;
}

//============================================================
// Event Handling/Dispatching (out of chart's scope)
//------------------------------------------------------------

pie.dispatch.on('elementMouseover.tooltip', function(e) {
e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
dispatch.tooltipShow(e);
});

dispatch.on('tooltipShow', function(e) {
if (tooltips) showTooltip(e);
});

dispatch.on('tooltipHide', function() {
if (tooltips) nv.tooltip.cleanup();
});

//============================================================


//============================================================
// Expose Public Variables
//------------------------------------------------------------

// expose chart's sub-components
chart.legend = legend;
chart.dispatch = dispatch;
chart.pie = pie;

d3.rebind(chart, pie, 'valueFormat', 'values', 'x', 'y', 'id', 'showLabels', 'donutLabelsOutside', 'donut', 'labelThreshold');

chart.margin = function(_) {
if (!arguments.length) return margin;
margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
return chart;
};

chart.width = function(_) {
if (!arguments.length) return width;
width = _;
return chart;
};

chart.height = function(_) {
if (!arguments.length) return height;
height = _;
return chart;
};

chart.color = function(_) {
if (!arguments.length) return color;
color = nv.utils.getColor(_);
legend.color(color);
pie.color(color);
return chart;
};

chart.showLegend = function(_) {
if (!arguments.length) return showLegend;
showLegend = _;
return chart;
};

chart.tooltips = function(_) {
if (!arguments.length) return tooltips;
tooltips = _;
return chart;
};

chart.tooltipContent = function(_) {
if (!arguments.length) return tooltip;
tooltip = _;
return chart;
};

chart.state = function(_) {
if (!arguments.length) return state;
state = _;
return chart;
};

chart.noData = function(_) {
if (!arguments.length) return noData;
noData = _;
return chart;
};

//============================================================


return chart;
}
/*  Prototype JavaScript framework, version 1.7
*  (c) 2005-2010 Sam Stephenson
*
*  Prototype is freely distributable under the terms of an MIT-style license.
*  For details, see the Prototype web site: http://www.prototypejs.org/
*
*--------------------------------------------------------------------------*/

var Prototype = {

Version: '1.7',

Browser: (function(){
var ua = navigator.userAgent;
var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
return {
IE:             !!window.attachEvent && !isOpera,
Opera:          isOpera,
WebKit:         ua.indexOf('AppleWebKit/') > -1,
Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
MobileSafari:   /Apple.*Mobile/.test(ua)
}
})(),

BrowserFeatures: {
XPath: !!document.evaluate,

SelectorsAPI: !!document.querySelector,

ElementExtensions: (function() {
var constructor = window.Element || window.HTMLElement;
return !!(constructor && constructor.prototype);
})(),
SpecificElementExtensions: (function() {
if (typeof window.HTMLDivElement !== 'undefined')
return true;

var div = document.createElement('div'),
form = document.createElement('form'),
isSupported = false;

if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
isSupported = true;
}

div = form = null;

return isSupported;
})()
},

ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

emptyFunction: function() { },

K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
Prototype.BrowserFeatures.SpecificElementExtensions = false;
/* Based on Alex Arnell's inheritance implementation. */

var Class = (function() {

var IS_DONTENUM_BUGGY = (function(){
for (var p in { toString: 1 }) {
if (p === 'toString') return false;
}
return true;
})();

function subclass() {};
function create() {
var parent = null, properties = $A(arguments);
if (Object.isFunction(properties[0]))
parent = properties.shift();

function klass() {
this.initialize.apply(this, arguments);
}

Object.extend(klass, Class.Methods);
klass.superclass = parent;
klass.subclasses = [];

if (parent) {
subclass.prototype = parent.prototype;
klass.prototype = new subclass;
parent.subclasses.push(klass);
}

for (var i = 0, length = properties.length; i < length; i++)
klass.addMethods(properties[i]);

if (!klass.prototype.initialize)
klass.prototype.initialize = Prototype.emptyFunction;

klass.prototype.constructor = klass;
return klass;
}

function addMethods(source) {
var ancestor   = this.superclass && this.superclass.prototype,
properties = Object.keys(source);

if (IS_DONTENUM_BUGGY) {
if (source.toString != Object.prototype.toString)
properties.push("toString");
if (source.valueOf != Object.prototype.valueOf)
properties.push("valueOf");
}

for (var i = 0, length = properties.length; i < length; i++) {
var property = properties[i], value = source[property];
if (ancestor && Object.isFunction(value) &&
value.argumentNames()[0] == "$super") {
var method = value;
value = (function(m) {
return function() { return ancestor[m].apply(this, arguments); };
})(property).wrap(method);

value.valueOf = method.valueOf.bind(method);
value.toString = method.toString.bind(method);
}
this.prototype[property] = value;
}

return this;
}

return {
create: create,
Methods: {
addMethods: addMethods
}
};
})();
(function() {

var _toString = Object.prototype.toString,
NULL_TYPE = 'Null',
UNDEFINED_TYPE = 'Undefined',
BOOLEAN_TYPE = 'Boolean',
NUMBER_TYPE = 'Number',
STRING_TYPE = 'String',
OBJECT_TYPE = 'Object',
FUNCTION_CLASS = '[object Function]',
BOOLEAN_CLASS = '[object Boolean]',
NUMBER_CLASS = '[object Number]',
STRING_CLASS = '[object String]',
ARRAY_CLASS = '[object Array]',
DATE_CLASS = '[object Date]',
NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON &&
typeof JSON.stringify === 'function' &&
JSON.stringify(0) === '0' &&
typeof JSON.stringify(Prototype.K) === 'undefined';

function Type(o) {
switch(o) {
case null: return NULL_TYPE;
case (void 0): return UNDEFINED_TYPE;
}
var type = typeof o;
switch(type) {
case 'boolean': return BOOLEAN_TYPE;
case 'number':  return NUMBER_TYPE;
case 'string':  return STRING_TYPE;
}
return OBJECT_TYPE;
}

function extend(destination, source) {
for (var property in source)
destination[property] = source[property];
return destination;
}

function inspect(object) {
try {
if (isUndefined(object)) return 'undefined';
if (object === null) return 'null';
return object.inspect ? object.inspect() : String(object);
} catch (e) {
if (e instanceof RangeError) return '...';
throw e;
}
}

function toJSON(value) {
return Str('', { '': value }, []);
}

function Str(key, holder, stack) {
var value = holder[key],
type = typeof value;

if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
value = value.toJSON(key);
}

var _class = _toString.call(value);

switch (_class) {
case NUMBER_CLASS:
case BOOLEAN_CLASS:
case STRING_CLASS:
value = value.valueOf();
}

switch (value) {
case null: return 'null';
case true: return 'true';
case false: return 'false';
}

type = typeof value;
switch (type) {
case 'string':
return value.inspect(true);
case 'number':
return isFinite(value) ? String(value) : 'null';
case 'object':

for (var i = 0, length = stack.length; i < length; i++) {
if (stack[i] === value) { throw new TypeError(); }
}
stack.push(value);

var partial = [];
if (_class === ARRAY_CLASS) {
for (var i = 0, length = value.length; i < length; i++) {
var str = Str(i, value, stack);
partial.push(typeof str === 'undefined' ? 'null' : str);
}
partial = '[' + partial.join(',') + ']';
} else {
var keys = Object.keys(value);
for (var i = 0, length = keys.length; i < length; i++) {
var key = keys[i], str = Str(key, value, stack);
if (typeof str !== "undefined") {
partial.push(key.inspect(true)+ ':' + str);
}
}
partial = '{' + partial.join(',') + '}';
}
stack.pop();
return partial;
}
}

function stringify(object) {
return JSON.stringify(object);
}

function toQueryString(object) {
return $H(object).toQueryString();
}

function toHTML(object) {
return object && object.toHTML ? object.toHTML() : String.interpret(object);
}

function keys(object) {
if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
var results = [];
for (var property in object) {
if (object.hasOwnProperty(property)) {
results.push(property);
}
}
return results;
}

function values(object) {
var results = [];
for (var property in object)
results.push(object[property]);
return results;
}

function clone(object) {
return extend({ }, object);
}

function isElement(object) {
return !!(object && object.nodeType == 1);
}

function isArray(object) {
return _toString.call(object) === ARRAY_CLASS;
}

var hasNativeIsArray = (typeof Array.isArray == 'function')
&& Array.isArray([]) && !Array.isArray({});

if (hasNativeIsArray) {
isArray = Array.isArray;
}

function isHash(object) {
return object instanceof Hash;
}

function isFunction(object) {
return _toString.call(object) === FUNCTION_CLASS;
}

function isString(object) {
return _toString.call(object) === STRING_CLASS;
}

function isNumber(object) {
return _toString.call(object) === NUMBER_CLASS;
}

function isDate(object) {
return _toString.call(object) === DATE_CLASS;
}

function isUndefined(object) {
return typeof object === "undefined";
}

extend(Object, {
extend:        extend,
inspect:       inspect,
toJSON:        NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
toQueryString: toQueryString,
toHTML:        toHTML,
keys:          Object.keys || keys,
values:        values,
clone:         clone,
isElement:     isElement,
isArray:       isArray,
isHash:        isHash,
isFunction:    isFunction,
isString:      isString,
isNumber:      isNumber,
isDate:        isDate,
isUndefined:   isUndefined
});
})();
Object.extend(Function.prototype, (function() {
var slice = Array.prototype.slice;

function update(array, args) {
var arrayLength = array.length, length = args.length;
while (length--) array[arrayLength + length] = args[length];
return array;
}

function merge(array, args) {
array = slice.call(array, 0);
return update(array, args);
}

function argumentNames() {
var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
.replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
.replace(/\s+/g, '').split(',');
return names.length == 1 && !names[0] ? [] : names;
}

function bind(context) {
if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
var __method = this, args = slice.call(arguments, 1);
return function() {
var a = merge(args, arguments);
return __method.apply(context, a);
}
}

function bindAsEventListener(context) {
var __method = this, args = slice.call(arguments, 1);
return function(event) {
var a = update([event || window.event], args);
return __method.apply(context, a);
}
}

function curry() {
if (!arguments.length) return this;
var __method = this, args = slice.call(arguments, 0);
return function() {
var a = merge(args, arguments);
return __method.apply(this, a);
}
}

function delay(timeout) {
var __method = this, args = slice.call(arguments, 1);
timeout = timeout * 1000;
return window.setTimeout(function() {
return __method.apply(__method, args);
}, timeout);
}

function defer() {
var args = update([0.01], arguments);
return this.delay.apply(this, args);
}

function wrap(wrapper) {
var __method = this;
return function() {
var a = update([__method.bind(this)], arguments);
return wrapper.apply(this, a);
}
}

function methodize() {
if (this._methodized) return this._methodized;
var __method = this;
return this._methodized = function() {
var a = update([this], arguments);
return __method.apply(null, a);
};
}

return {
argumentNames:       argumentNames,
bind:                bind,
bindAsEventListener: bindAsEventListener,
curry:               curry,
delay:               delay,
defer:               defer,
wrap:                wrap,
methodize:           methodize
}
})());



(function(proto) {


function toISOString() {
return this.getUTCFullYear() + '-' +
(this.getUTCMonth() + 1).toPaddedString(2) + '-' +
this.getUTCDate().toPaddedString(2) + 'T' +
this.getUTCHours().toPaddedString(2) + ':' +
this.getUTCMinutes().toPaddedString(2) + ':' +
this.getUTCSeconds().toPaddedString(2) + 'Z';
}


function toJSON() {
return this.toISOString();
}

if (!proto.toISOString) proto.toISOString = toISOString;
if (!proto.toJSON) proto.toJSON = toJSON;

})(Date.prototype);


RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
initialize: function(callback, frequency) {
this.callback = callback;
this.frequency = frequency;
this.currentlyExecuting = false;

this.registerCallback();
},

registerCallback: function() {
this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
},

execute: function() {
this.callback(this);
},

stop: function() {
if (!this.timer) return;
clearInterval(this.timer);
this.timer = null;
},

onTimerEvent: function() {
if (!this.currentlyExecuting) {
try {
this.currentlyExecuting = true;
this.execute();
this.currentlyExecuting = false;
} catch(e) {
this.currentlyExecuting = false;
throw e;
}
}
}
});
Object.extend(String, {
interpret: function(value) {
return value == null ? '' : String(value);
},
specialChar: {
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'\\': '\\\\'
}
});

Object.extend(String.prototype, (function() {
var NATIVE_JSON_PARSE_SUPPORT = window.JSON &&
typeof JSON.parse === 'function' &&
JSON.parse('{"test": true}').test;

function prepareReplacement(replacement) {
if (Object.isFunction(replacement)) return replacement;
var template = new Template(replacement);
return function(match) { return template.evaluate(match) };
}

function gsub(pattern, replacement) {
var result = '', source = this, match;
replacement = prepareReplacement(replacement);

if (Object.isString(pattern))
pattern = RegExp.escape(pattern);

if (!(pattern.length || pattern.source)) {
replacement = replacement('');
return replacement + source.split('').join(replacement) + replacement;
}

while (source.length > 0) {
if (match = source.match(pattern)) {
result += source.slice(0, match.index);
result += String.interpret(replacement(match));
source  = source.slice(match.index + match[0].length);
} else {
result += source, source = '';
}
}
return result;
}

function sub(pattern, replacement, count) {
replacement = prepareReplacement(replacement);
count = Object.isUndefined(count) ? 1 : count;

return this.gsub(pattern, function(match) {
if (--count < 0) return match[0];
return replacement(match);
});
}

function scan(pattern, iterator) {
this.gsub(pattern, iterator);
return String(this);
}

function truncate(length, truncation) {
length = length || 30;
truncation = Object.isUndefined(truncation) ? '...' : truncation;
return this.length > length ?
this.slice(0, length - truncation.length) + truncation : String(this);
}

function strip() {
return this.replace(/^\s+/, '').replace(/\s+$/, '');
}

function stripTags() {
return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
}

function stripScripts() {
return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
}

function extractScripts() {
var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
matchOne = new RegExp(Prototype.ScriptFragment, 'im');
return (this.match(matchAll) || []).map(function(scriptTag) {
return (scriptTag.match(matchOne) || ['', ''])[1];
});
}

function evalScripts() {
return this.extractScripts().map(function(script) { return eval(script) });
}

function escapeHTML() {
return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function unescapeHTML() {
return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}


function toQueryParams(separator) {
var match = this.strip().match(/([^?#]*)(#.*)?$/);
if (!match) return { };

return match[1].split(separator || '&').inject({ }, function(hash, pair) {
if ((pair = pair.split('='))[0]) {
var key = decodeURIComponent(pair.shift()),
value = pair.length > 1 ? pair.join('=') : pair[0];

if (value != undefined) value = decodeURIComponent(value);

if (key in hash) {
if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
hash[key].push(value);
}
else hash[key] = value;
}
return hash;
});
}

function toArray() {
return this.split('');
}

function succ() {
return this.slice(0, this.length - 1) +
String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
}

function times(count) {
return count < 1 ? '' : new Array(count + 1).join(this);
}

function camelize() {
return this.replace(/-+(.)?/g, function(match, chr) {
return chr ? chr.toUpperCase() : '';
});
}

function capitalize() {
return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

function underscore() {
return this.replace(/::/g, '/')
.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
.replace(/([a-z\d])([A-Z])/g, '$1_$2')
.replace(/-/g, '_')
.toLowerCase();
}

function dasherize() {
return this.replace(/_/g, '-');
}

function inspect(useDoubleQuotes) {
var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
if (character in String.specialChar) {
return String.specialChar[character];
}
return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
});
if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
return "'" + escapedString.replace(/'/g, '\\\'') + "'";
}

function unfilterJSON(filter) {
return this.replace(filter || Prototype.JSONFilter, '$1');
}

function isJSON() {
var str = this;
if (str.blank()) return false;
str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
return (/^[\],:{}\s]*$/).test(str);
}

function evalJSON(sanitize) {
var json = this.unfilterJSON(),
cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if (cx.test(json)) {
json = json.replace(cx, function (a) {
return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
});
}
try {
if (!sanitize || json.isJSON()) return eval('(' + json + ')');
} catch (e) { }
throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
}

function parseJSON() {
var json = this.unfilterJSON();
return JSON.parse(json);
}

function include(pattern) {
return this.indexOf(pattern) > -1;
}

function startsWith(pattern) {
return this.lastIndexOf(pattern, 0) === 0;
}

function endsWith(pattern) {
var d = this.length - pattern.length;
return d >= 0 && this.indexOf(pattern, d) === d;
}

function empty() {
return this == '';
}

function blank() {
return /^\s*$/.test(this);
}

function interpolate(object, pattern) {
return new Template(this, pattern).evaluate(object);
}

return {
gsub:           gsub,
sub:            sub,
scan:           scan,
truncate:       truncate,
strip:          String.prototype.trim || strip,
stripTags:      stripTags,
stripScripts:   stripScripts,
extractScripts: extractScripts,
evalScripts:    evalScripts,
escapeHTML:     escapeHTML,
unescapeHTML:   unescapeHTML,
toQueryParams:  toQueryParams,
parseQuery:     toQueryParams,
toArray:        toArray,
succ:           succ,
times:          times,
camelize:       camelize,
capitalize:     capitalize,
underscore:     underscore,
dasherize:      dasherize,
inspect:        inspect,
unfilterJSON:   unfilterJSON,
isJSON:         isJSON,
evalJSON:       NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
include:        include,
startsWith:     startsWith,
endsWith:       endsWith,
empty:          empty,
blank:          blank,
interpolate:    interpolate
};
})());

var Template = Class.create({
initialize: function(template, pattern) {
this.template = template.toString();
this.pattern = pattern || Template.Pattern;
},

evaluate: function(object) {
if (object && Object.isFunction(object.toTemplateReplacements))
object = object.toTemplateReplacements();

return this.template.gsub(this.pattern, function(match) {
if (object == null) return (match[1] + '');

var before = match[1] || '';
if (before == '\\') return match[2];

var ctx = object, expr = match[3],
pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;

match = pattern.exec(expr);
if (match == null) return before;

while (match != null) {
var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
ctx = ctx[comp];
if (null == ctx || '' == match[3]) break;
expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
match = pattern.exec(expr);
}

return before + String.interpret(ctx);
});
}
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = (function() {
function each(iterator, context) {
var index = 0;
try {
this._each(function(value) {
iterator.call(context, value, index++);
});
} catch (e) {
if (e != $break) throw e;
}
return this;
}

function eachSlice(number, iterator, context) {
var index = -number, slices = [], array = this.toArray();
if (number < 1) return array;
while ((index += number) < array.length)
slices.push(array.slice(index, index+number));
return slices.collect(iterator, context);
}

function all(iterator, context) {
iterator = iterator || Prototype.K;
var result = true;
this.each(function(value, index) {
result = result && !!iterator.call(context, value, index);
if (!result) throw $break;
});
return result;
}

function any(iterator, context) {
iterator = iterator || Prototype.K;
var result = false;
this.each(function(value, index) {
if (result = !!iterator.call(context, value, index))
throw $break;
});
return result;
}

function collect(iterator, context) {
iterator = iterator || Prototype.K;
var results = [];
this.each(function(value, index) {
results.push(iterator.call(context, value, index));
});
return results;
}

function detect(iterator, context) {
var result;
this.each(function(value, index) {
if (iterator.call(context, value, index)) {
result = value;
throw $break;
}
});
return result;
}

function findAll(iterator, context) {
var results = [];
this.each(function(value, index) {
if (iterator.call(context, value, index))
results.push(value);
});
return results;
}

function grep(filter, iterator, context) {
iterator = iterator || Prototype.K;
var results = [];

if (Object.isString(filter))
filter = new RegExp(RegExp.escape(filter));

this.each(function(value, index) {
if (filter.match(value))
results.push(iterator.call(context, value, index));
});
return results;
}

function include(object) {
if (Object.isFunction(this.indexOf))
if (this.indexOf(object) != -1) return true;

var found = false;
this.each(function(value) {
if (value == object) {
found = true;
throw $break;
}
});
return found;
}

function inGroupsOf(number, fillWith) {
fillWith = Object.isUndefined(fillWith) ? null : fillWith;
return this.eachSlice(number, function(slice) {
while(slice.length < number) slice.push(fillWith);
return slice;
});
}

function inject(memo, iterator, context) {
this.each(function(value, index) {
memo = iterator.call(context, memo, value, index);
});
return memo;
}

function invoke(method) {
var args = $A(arguments).slice(1);
return this.map(function(value) {
return value[method].apply(value, args);
});
}

function max(iterator, context) {
iterator = iterator || Prototype.K;
var result;
this.each(function(value, index) {
value = iterator.call(context, value, index);
if (result == null || value >= result)
result = value;
});
return result;
}

function min(iterator, context) {
iterator = iterator || Prototype.K;
var result;
this.each(function(value, index) {
value = iterator.call(context, value, index);
if (result == null || value < result)
result = value;
});
return result;
}

function partition(iterator, context) {
iterator = iterator || Prototype.K;
var trues = [], falses = [];
this.each(function(value, index) {
(iterator.call(context, value, index) ?
trues : falses).push(value);
});
return [trues, falses];
}

function pluck(property) {
var results = [];
this.each(function(value) {
results.push(value[property]);
});
return results;
}

function reject(iterator, context) {
var results = [];
this.each(function(value, index) {
if (!iterator.call(context, value, index))
results.push(value);
});
return results;
}

function sortBy(iterator, context) {
return this.map(function(value, index) {
return {
value: value,
criteria: iterator.call(context, value, index)
};
}).sort(function(left, right) {
var a = left.criteria, b = right.criteria;
return a < b ? -1 : a > b ? 1 : 0;
}).pluck('value');
}

function toArray() {
return this.map();
}

function zip() {
var iterator = Prototype.K, args = $A(arguments);
if (Object.isFunction(args.last()))
iterator = args.pop();

var collections = [this].concat(args).map($A);
return this.map(function(value, index) {
return iterator(collections.pluck(index));
});
}

function size() {
return this.toArray().length;
}

function inspect() {
return '#<Enumerable:' + this.toArray().inspect() + '>';
}









return {
each:       each,
eachSlice:  eachSlice,
all:        all,
every:      all,
any:        any,
some:       any,
collect:    collect,
map:        collect,
detect:     detect,
findAll:    findAll,
select:     findAll,
filter:     findAll,
grep:       grep,
include:    include,
member:     include,
inGroupsOf: inGroupsOf,
inject:     inject,
invoke:     invoke,
max:        max,
min:        min,
partition:  partition,
pluck:      pluck,
reject:     reject,
sortBy:     sortBy,
toArray:    toArray,
entries:    toArray,
zip:        zip,
size:       size,
inspect:    inspect,
find:       detect
};
})();

function $A(iterable) {
if (!iterable) return [];
if ('toArray' in Object(iterable)) return iterable.toArray();
var length = iterable.length || 0, results = new Array(length);
while (length--) results[length] = iterable[length];
return results;
}


function $w(string) {
if (!Object.isString(string)) return [];
string = string.strip();
return string ? string.split(/\s+/) : [];
}

Array.from = $A;


(function() {
var arrayProto = Array.prototype,
slice = arrayProto.slice,
_each = arrayProto.forEach; // use native browser JS 1.6 implementation if available

function each(iterator, context) {
for (var i = 0, length = this.length >>> 0; i < length; i++) {
if (i in this) iterator.call(context, this[i], i, this);
}
}
if (!_each) _each = each;

function clear() {
this.length = 0;
return this;
}

function first() {
return this[0];
}

function last() {
return this[this.length - 1];
}

function compact() {
return this.select(function(value) {
return value != null;
});
}

function flatten() {
return this.inject([], function(array, value) {
if (Object.isArray(value))
return array.concat(value.flatten());
array.push(value);
return array;
});
}

function without() {
var values = slice.call(arguments, 0);
return this.select(function(value) {
return !values.include(value);
});
}

function reverse(inline) {
return (inline === false ? this.toArray() : this)._reverse();
}

function uniq(sorted) {
return this.inject([], function(array, value, index) {
if (0 == index || (sorted ? array.last() != value : !array.include(value)))
array.push(value);
return array;
});
}

function intersect(array) {
return this.uniq().findAll(function(item) {
return array.detect(function(value) { return item === value });
});
}


function clone() {
return slice.call(this, 0);
}

function size() {
return this.length;
}

function inspect() {
return '[' + this.map(Object.inspect).join(', ') + ']';
}

function indexOf(item, i) {
i || (i = 0);
var length = this.length;
if (i < 0) i = length + i;
for (; i < length; i++)
if (this[i] === item) return i;
return -1;
}

function lastIndexOf(item, i) {
i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
var n = this.slice(0, i).reverse().indexOf(item);
return (n < 0) ? n : i - n - 1;
}

function concat() {
var array = slice.call(this, 0), item;
for (var i = 0, length = arguments.length; i < length; i++) {
item = arguments[i];
if (Object.isArray(item) && !('callee' in item)) {
for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
array.push(item[j]);
} else {
array.push(item);
}
}
return array;
}

Object.extend(arrayProto, Enumerable);

if (!arrayProto._reverse)
arrayProto._reverse = arrayProto.reverse;

Object.extend(arrayProto, {
_each:     _each,
clear:     clear,
first:     first,
last:      last,
compact:   compact,
flatten:   flatten,
without:   without,
reverse:   reverse,
uniq:      uniq,
intersect: intersect,
clone:     clone,
toArray:   clone,
size:      size,
inspect:   inspect
});

var CONCAT_ARGUMENTS_BUGGY = (function() {
return [].concat(arguments)[0][0] !== 1;
})(1,2)

if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;

if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();
function $H(object) {
return new Hash(object);
};

var Hash = Class.create(Enumerable, (function() {
function initialize(object) {
this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
}


function _each(iterator) {
for (var key in this._object) {
var value = this._object[key], pair = [key, value];
pair.key = key;
pair.value = value;
iterator(pair);
}
}

function set(key, value) {
return this._object[key] = value;
}

function get(key) {
if (this._object[key] !== Object.prototype[key])
return this._object[key];
}

function unset(key) {
var value = this._object[key];
delete this._object[key];
return value;
}

function toObject() {
return Object.clone(this._object);
}



function keys() {
return this.pluck('key');
}

function values() {
return this.pluck('value');
}

function index(value) {
var match = this.detect(function(pair) {
return pair.value === value;
});
return match && match.key;
}

function merge(object) {
return this.clone().update(object);
}

function update(object) {
return new Hash(object).inject(this, function(result, pair) {
result.set(pair.key, pair.value);
return result;
});
}

function toQueryPair(key, value) {
if (Object.isUndefined(value)) return key;
return key + '=' + encodeURIComponent(String.interpret(value));
}

function toQueryString() {
return this.inject([], function(results, pair) {
var key = encodeURIComponent(pair.key), values = pair.value;

if (values && typeof values == 'object') {
if (Object.isArray(values)) {
var queryValues = [];
for (var i = 0, len = values.length, value; i < len; i++) {
value = values[i];
queryValues.push(toQueryPair(key, value));
}
return results.concat(queryValues);
}
} else results.push(toQueryPair(key, values));
return results;
}).join('&');
}

function inspect() {
return '#<Hash:{' + this.map(function(pair) {
return pair.map(Object.inspect).join(': ');
}).join(', ') + '}>';
}

function clone() {
return new Hash(this);
}

return {
initialize:             initialize,
_each:                  _each,
set:                    set,
get:                    get,
unset:                  unset,
toObject:               toObject,
toTemplateReplacements: toObject,
keys:                   keys,
values:                 values,
index:                  index,
merge:                  merge,
update:                 update,
toQueryString:          toQueryString,
inspect:                inspect,
toJSON:                 toObject,
clone:                  clone
};
})());

Hash.from = $H;
Object.extend(Number.prototype, (function() {
function toColorPart() {
return this.toPaddedString(2, 16);
}

function succ() {
return this + 1;
}

function times(iterator, context) {
$R(0, this, true).each(iterator, context);
return this;
}

function toPaddedString(length, radix) {
var string = this.toString(radix || 10);
return '0'.times(length - string.length) + string;
}

function abs() {
return Math.abs(this);
}

function round() {
return Math.round(this);
}

function ceil() {
return Math.ceil(this);
}

function floor() {
return Math.floor(this);
}

return {
toColorPart:    toColorPart,
succ:           succ,
times:          times,
toPaddedString: toPaddedString,
abs:            abs,
round:          round,
ceil:           ceil,
floor:          floor
};
})());

function $R(start, end, exclusive) {
return new ObjectRange(start, end, exclusive);
}

var ObjectRange = Class.create(Enumerable, (function() {
function initialize(start, end, exclusive) {
this.start = start;
this.end = end;
this.exclusive = exclusive;
}

function _each(iterator) {
var value = this.start;
while (this.include(value)) {
iterator(value);
value = value.succ();
}
}

function include(value) {
if (value < this.start)
return false;
if (this.exclusive)
return value < this.end;
return value <= this.end;
}

return {
initialize: initialize,
_each:      _each,
include:    include
};
})());



var Abstract = { };


var Try = {
these: function() {
var returnValue;

for (var i = 0, length = arguments.length; i < length; i++) {
var lambda = arguments[i];
try {
returnValue = lambda();
break;
} catch (e) { }
}

return returnValue;
}
};

var Ajax = {
getTransport: function() {
return Try.these(
function() {return new XMLHttpRequest()},
function() {return new ActiveXObject('Msxml2.XMLHTTP')},
function() {return new ActiveXObject('Microsoft.XMLHTTP')}
) || false;
},

activeRequestCount: 0
};

Ajax.Responders = {
responders: [],

_each: function(iterator) {
this.responders._each(iterator);
},

register: function(responder) {
if (!this.include(responder))
this.responders.push(responder);
},

unregister: function(responder) {
this.responders = this.responders.without(responder);
},

dispatch: function(callback, request, transport, json) {
this.each(function(responder) {
if (Object.isFunction(responder[callback])) {
try {
responder[callback].apply(responder, [request, transport, json]);
} catch (e) { }
}
});
}
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
onCreate:   function() { Ajax.activeRequestCount++ },
onComplete: function() { Ajax.activeRequestCount-- }
});
Ajax.Base = Class.create({
initialize: function(options) {
this.options = {
method:       'post',
asynchronous: true,
contentType:  'application/x-www-form-urlencoded',
encoding:     'UTF-8',
parameters:   '',
evalJSON:     true,
evalJS:       true
};
Object.extend(this.options, options || { });

this.options.method = this.options.method.toLowerCase();

if (Object.isHash(this.options.parameters))
this.options.parameters = this.options.parameters.toObject();
}
});
Ajax.Request = Class.create(Ajax.Base, {
_complete: false,

initialize: function($super, url, options) {
$super(options);
this.transport = Ajax.getTransport();
this.request(url);
},

request: function(url) {
this.url = url;
this.method = this.options.method;
var params = Object.isString(this.options.parameters) ?
this.options.parameters :
Object.toQueryString(this.options.parameters);

if (!['get', 'post'].include(this.method)) {
params += (params ? '&' : '') + "_method=" + this.method;
this.method = 'post';
}

if (params && this.method === 'get') {
this.url += (this.url.include('?') ? '&' : '?') + params;
}

this.parameters = params.toQueryParams();

try {
var response = new Ajax.Response(this);
if (this.options.onCreate) this.options.onCreate(response);
Ajax.Responders.dispatch('onCreate', this, response);

this.transport.open(this.method.toUpperCase(), this.url,
this.options.asynchronous);

if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

this.transport.onreadystatechange = this.onStateChange.bind(this);
this.setRequestHeaders();

this.body = this.method == 'post' ? (this.options.postBody || params) : null;
this.transport.send(this.body);

/* Force Firefox to handle ready state 4 for synchronous requests */
if (!this.options.asynchronous && this.transport.overrideMimeType)
this.onStateChange();

}
catch (e) {
this.dispatchException(e);
}
},

onStateChange: function() {
var readyState = this.transport.readyState;
if (readyState > 1 && !((readyState == 4) && this._complete))
this.respondToReadyState(this.transport.readyState);
},

setRequestHeaders: function() {
var headers = {
'X-Requested-With': 'XMLHttpRequest',
'X-Prototype-Version': Prototype.Version,
'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
};

if (this.method == 'post') {
headers['Content-type'] = this.options.contentType +
(this.options.encoding ? '; charset=' + this.options.encoding : '');

/* Force "Connection: close" for older Mozilla browsers to work
* around a bug where XMLHttpRequest sends an incorrect
* Content-length header. See Mozilla Bugzilla #246651.
*/
if (this.transport.overrideMimeType &&
(navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
headers['Connection'] = 'close';
}

if (typeof this.options.requestHeaders == 'object') {
var extras = this.options.requestHeaders;

if (Object.isFunction(extras.push))
for (var i = 0, length = extras.length; i < length; i += 2)
headers[extras[i]] = extras[i+1];
else
$H(extras).each(function(pair) { headers[pair.key] = pair.value });
}

for (var name in headers)
this.transport.setRequestHeader(name, headers[name]);
},

success: function() {
var status = this.getStatus();
return !status || (status >= 200 && status < 300) || status == 304;
},

getStatus: function() {
try {
if (this.transport.status === 1223) return 204;
return this.transport.status || 0;
} catch (e) { return 0 }
},

respondToReadyState: function(readyState) {
var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);

if (state == 'Complete') {
try {
this._complete = true;
(this.options['on' + response.status]
|| this.options['on' + (this.success() ? 'Success' : 'Failure')]
|| Prototype.emptyFunction)(response, response.headerJSON);
} catch (e) {
this.dispatchException(e);
}

var contentType = response.getHeader('Content-type');
if (this.options.evalJS == 'force'
|| (this.options.evalJS && this.isSameOrigin() && contentType
&& contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
this.evalResponse();
}

try {
(this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
} catch (e) {
this.dispatchException(e);
}

if (state == 'Complete') {
this.transport.onreadystatechange = Prototype.emptyFunction;
}
},

isSameOrigin: function() {
var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
protocol: location.protocol,
domain: document.domain,
port: location.port ? ':' + location.port : ''
}));
},

getHeader: function(name) {
try {
return this.transport.getResponseHeader(name) || null;
} catch (e) { return null; }
},

evalResponse: function() {
try {
return eval((this.transport.responseText || '').unfilterJSON());
} catch (e) {
this.dispatchException(e);
}
},

dispatchException: function(exception) {
(this.options.onException || Prototype.emptyFunction)(this, exception);
Ajax.Responders.dispatch('onException', this, exception);
}
});

Ajax.Request.Events =
['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];








Ajax.Response = Class.create({
initialize: function(request){
this.request = request;
var transport  = this.transport  = request.transport,
readyState = this.readyState = transport.readyState;

if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
this.status       = this.getStatus();
this.statusText   = this.getStatusText();
this.responseText = String.interpret(transport.responseText);
this.headerJSON   = this._getHeaderJSON();
}

if (readyState == 4) {
var xml = transport.responseXML;
this.responseXML  = Object.isUndefined(xml) ? null : xml;
this.responseJSON = this._getResponseJSON();
}
},

status:      0,

statusText: '',

getStatus: Ajax.Request.prototype.getStatus,

getStatusText: function() {
try {
return this.transport.statusText || '';
} catch (e) { return '' }
},

getHeader: Ajax.Request.prototype.getHeader,

getAllHeaders: function() {
try {
return this.getAllResponseHeaders();
} catch (e) { return null }
},

getResponseHeader: function(name) {
return this.transport.getResponseHeader(name);
},

getAllResponseHeaders: function() {
return this.transport.getAllResponseHeaders();
},

_getHeaderJSON: function() {
var json = this.getHeader('X-JSON');
if (!json) return null;
json = decodeURIComponent(escape(json));
try {
return json.evalJSON(this.request.options.sanitizeJSON ||
!this.request.isSameOrigin());
} catch (e) {
this.request.dispatchException(e);
}
},

_getResponseJSON: function() {
var options = this.request.options;
if (!options.evalJSON || (options.evalJSON != 'force' &&
!(this.getHeader('Content-type') || '').include('application/json')) ||
this.responseText.blank())
return null;
try {
return this.responseText.evalJSON(options.sanitizeJSON ||
!this.request.isSameOrigin());
} catch (e) {
this.request.dispatchException(e);
}
}
});

Ajax.Updater = Class.create(Ajax.Request, {
initialize: function($super, container, url, options) {
this.container = {
success: (container.success || container),
failure: (container.failure || (container.success ? null : container))
};

options = Object.clone(options);
var onComplete = options.onComplete;
options.onComplete = (function(response, json) {
this.updateContent(response.responseText);
if (Object.isFunction(onComplete)) onComplete(response, json);
}).bind(this);

$super(url, options);
},

updateContent: function(responseText) {
var receiver = this.container[this.success() ? 'success' : 'failure'],
options = this.options;

if (!options.evalScripts) responseText = responseText.stripScripts();

if (receiver = $(receiver)) {
if (options.insertion) {
if (Object.isString(options.insertion)) {
var insertion = { }; insertion[options.insertion] = responseText;
receiver.insert(insertion);
}
else options.insertion(receiver, responseText);
}
else receiver.update(responseText);
}
}
});

Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
initialize: function($super, container, url, options) {
$super(options);
this.onComplete = this.options.onComplete;

this.frequency = (this.options.frequency || 2);
this.decay = (this.options.decay || 1);

this.updater = { };
this.container = container;
this.url = url;

this.start();
},

start: function() {
this.options.onComplete = this.updateComplete.bind(this);
this.onTimerEvent();
},

stop: function() {
this.updater.options.onComplete = undefined;
clearTimeout(this.timer);
(this.onComplete || Prototype.emptyFunction).apply(this, arguments);
},

updateComplete: function(response) {
if (this.options.decay) {
this.decay = (response.responseText == this.lastText ?
this.decay * this.options.decay : 1);

this.lastText = response.responseText;
}
this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
},

onTimerEvent: function() {
this.updater = new Ajax.Updater(this.container, this.url, this.options);
}
});


function $(element) {
if (arguments.length > 1) {
for (var i = 0, elements = [], length = arguments.length; i < length; i++)
elements.push($(arguments[i]));
return elements;
}
if (Object.isString(element))
element = document.getElementById(element);
return Element.extend(element);
}

if (Prototype.BrowserFeatures.XPath) {
document._getElementsByXPath = function(expression, parentElement) {
var results = [];
var query = document.evaluate(expression, $(parentElement) || document,
null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0, length = query.snapshotLength; i < length; i++)
results.push(Element.extend(query.snapshotItem(i)));
return results;
};
}

/*--------------------------------------------------------------------------*/

if (!Node) var Node = { };

if (!Node.ELEMENT_NODE) {
Object.extend(Node, {
ELEMENT_NODE: 1,
ATTRIBUTE_NODE: 2,
TEXT_NODE: 3,
CDATA_SECTION_NODE: 4,
ENTITY_REFERENCE_NODE: 5,
ENTITY_NODE: 6,
PROCESSING_INSTRUCTION_NODE: 7,
COMMENT_NODE: 8,
DOCUMENT_NODE: 9,
DOCUMENT_TYPE_NODE: 10,
DOCUMENT_FRAGMENT_NODE: 11,
NOTATION_NODE: 12
});
}



(function(global) {
function shouldUseCache(tagName, attributes) {
if (tagName === 'select') return false;
if ('type' in attributes) return false;
return true;
}

var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function(){
try {
var el = document.createElement('<input name="x">');
return el.tagName.toLowerCase() === 'input' && el.name === 'x';
}
catch(err) {
return false;
}
})();

var element = global.Element;

global.Element = function(tagName, attributes) {
attributes = attributes || { };
tagName = tagName.toLowerCase();
var cache = Element.cache;

if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
tagName = '<' + tagName + ' name="' + attributes.name + '">';
delete attributes.name;
return Element.writeAttribute(document.createElement(tagName), attributes);
}

if (!cache[tagName]) cache[tagName] = Element.extend(document.createElement(tagName));

var node = shouldUseCache(tagName, attributes) ?
cache[tagName].cloneNode(false) : document.createElement(tagName);

return Element.writeAttribute(node, attributes);
};

Object.extend(global.Element, element || { });
if (element) global.Element.prototype = element.prototype;

})(this);

Element.idCounter = 1;
Element.cache = { };

Element._purgeElement = function(element) {
var uid = element._prototypeUID;
if (uid) {
Element.stopObserving(element);
element._prototypeUID = void 0;
delete Element.Storage[uid];
}
}

Element.Methods = {
visible: function(element) {
return $(element).style.display != 'none';
},

toggle: function(element) {
element = $(element);
Element[Element.visible(element) ? 'hide' : 'show'](element);
return element;
},

hide: function(element) {
element = $(element);
element.style.display = 'none';
return element;
},

show: function(element) {
element = $(element);
element.style.display = '';
return element;
},

remove: function(element) {
element = $(element);
element.parentNode.removeChild(element);
return element;
},

update: (function(){

var SELECT_ELEMENT_INNERHTML_BUGGY = (function(){
var el = document.createElement("select"),
isBuggy = true;
el.innerHTML = "<option value=\"test\">test</option>";
if (el.options && el.options[0]) {
isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
}
el = null;
return isBuggy;
})();

var TABLE_ELEMENT_INNERHTML_BUGGY = (function(){
try {
var el = document.createElement("table");
if (el && el.tBodies) {
el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
var isBuggy = typeof el.tBodies[0] == "undefined";
el = null;
return isBuggy;
}
} catch (e) {
return true;
}
})();

var LINK_ELEMENT_INNERHTML_BUGGY = (function() {
try {
var el = document.createElement('div');
el.innerHTML = "<link>";
var isBuggy = (el.childNodes.length === 0);
el = null;
return isBuggy;
} catch(e) {
return true;
}
})();

var ANY_INNERHTML_BUGGY = SELECT_ELEMENT_INNERHTML_BUGGY ||
TABLE_ELEMENT_INNERHTML_BUGGY || LINK_ELEMENT_INNERHTML_BUGGY;

var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
var s = document.createElement("script"),
isBuggy = false;
try {
s.appendChild(document.createTextNode(""));
isBuggy = !s.firstChild ||
s.firstChild && s.firstChild.nodeType !== 3;
} catch (e) {
isBuggy = true;
}
s = null;
return isBuggy;
})();


function update(element, content) {
element = $(element);
var purgeElement = Element._purgeElement;

var descendants = element.getElementsByTagName('*'),
i = descendants.length;
while (i--) purgeElement(descendants[i]);

if (content && content.toElement)
content = content.toElement();

if (Object.isElement(content))
return element.update().insert(content);

content = Object.toHTML(content);

var tagName = element.tagName.toUpperCase();

if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
element.text = content;
return element;
}

if (ANY_INNERHTML_BUGGY) {
if (tagName in Element._insertionTranslations.tags) {
while (element.firstChild) {
element.removeChild(element.firstChild);
}
Element._getContentFromAnonymousElement(tagName, content.stripScripts())
.each(function(node) {
element.appendChild(node)
});
} else if (LINK_ELEMENT_INNERHTML_BUGGY && Object.isString(content) && content.indexOf('<link') > -1) {
while (element.firstChild) {
element.removeChild(element.firstChild);
}
var nodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts(), true);
nodes.each(function(node) { element.appendChild(node) });
}
else {
element.innerHTML = content.stripScripts();
}
}
else {
element.innerHTML = content.stripScripts();
}

content.evalScripts.bind(content).defer();
return element;
}

return update;
})(),

replace: function(element, content) {
element = $(element);
if (content && content.toElement) content = content.toElement();
else if (!Object.isElement(content)) {
content = Object.toHTML(content);
var range = element.ownerDocument.createRange();
range.selectNode(element);
content.evalScripts.bind(content).defer();
content = range.createContextualFragment(content.stripScripts());
}
element.parentNode.replaceChild(content, element);
return element;
},

insert: function(element, insertions) {
element = $(element);

if (Object.isString(insertions) || Object.isNumber(insertions) ||
Object.isElement(insertions) || (insertions && (insertions.toElement || insertions.toHTML)))
insertions = {bottom:insertions};

var content, insert, tagName, childNodes;

for (var position in insertions) {
content  = insertions[position];
position = position.toLowerCase();
insert = Element._insertionTranslations[position];

if (content && content.toElement) content = content.toElement();
if (Object.isElement(content)) {
insert(element, content);
continue;
}

content = Object.toHTML(content);

tagName = ((position == 'before' || position == 'after')
? element.parentNode : element).tagName.toUpperCase();

childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());

if (position == 'top' || position == 'after') childNodes.reverse();
childNodes.each(insert.curry(element));

content.evalScripts.bind(content).defer();
}

return element;
},

wrap: function(element, wrapper, attributes) {
element = $(element);
if (Object.isElement(wrapper))
$(wrapper).writeAttribute(attributes || { });
else if (Object.isString(wrapper)) wrapper = new Element(wrapper, attributes);
else wrapper = new Element('div', wrapper);
if (element.parentNode)
element.parentNode.replaceChild(wrapper, element);
wrapper.appendChild(element);
return wrapper;
},

inspect: function(element) {
element = $(element);
var result = '<' + element.tagName.toLowerCase();
$H({'id': 'id', 'className': 'class'}).each(function(pair) {
var property = pair.first(),
attribute = pair.last(),
value = (element[property] || '').toString();
if (value) result += ' ' + attribute + '=' + value.inspect(true);
});
return result + '>';
},

recursivelyCollect: function(element, property, maximumLength) {
element = $(element);
maximumLength = maximumLength || -1;
var elements = [];

while (element = element[property]) {
if (element.nodeType == 1)
elements.push(Element.extend(element));
if (elements.length == maximumLength)
break;
}

return elements;
},

ancestors: function(element) {
return Element.recursivelyCollect(element, 'parentNode');
},

descendants: function(element) {
return Element.select(element, "*");
},

firstDescendant: function(element) {
element = $(element).firstChild;
while (element && element.nodeType != 1) element = element.nextSibling;
return $(element);
},

immediateDescendants: function(element) {
var results = [], child = $(element).firstChild;
while (child) {
if (child.nodeType === 1) {
results.push(Element.extend(child));
}
child = child.nextSibling;
}
return results;
},

previousSiblings: function(element, maximumLength) {
return Element.recursivelyCollect(element, 'previousSibling');
},

nextSiblings: function(element) {
return Element.recursivelyCollect(element, 'nextSibling');
},

siblings: function(element) {
element = $(element);
return Element.previousSiblings(element).reverse()
.concat(Element.nextSiblings(element));
},

match: function(element, selector) {
element = $(element);
if (Object.isString(selector))
return Prototype.Selector.match(element, selector);
return selector.match(element);
},

up: function(element, expression, index) {
element = $(element);
if (arguments.length == 1) return $(element.parentNode);
var ancestors = Element.ancestors(element);
return Object.isNumber(expression) ? ancestors[expression] :
Prototype.Selector.find(ancestors, expression, index);
},

down: function(element, expression, index) {
element = $(element);
if (arguments.length == 1) return Element.firstDescendant(element);
return Object.isNumber(expression) ? Element.descendants(element)[expression] :
Element.select(element, expression)[index || 0];
},

previous: function(element, expression, index) {
element = $(element);
if (Object.isNumber(expression)) index = expression, expression = false;
if (!Object.isNumber(index)) index = 0;

if (expression) {
return Prototype.Selector.find(element.previousSiblings(), expression, index);
} else {
return element.recursivelyCollect("previousSibling", index + 1)[index];
}
},

next: function(element, expression, index) {
element = $(element);
if (Object.isNumber(expression)) index = expression, expression = false;
if (!Object.isNumber(index)) index = 0;

if (expression) {
return Prototype.Selector.find(element.nextSiblings(), expression, index);
} else {
var maximumLength = Object.isNumber(index) ? index + 1 : 1;
return element.recursivelyCollect("nextSibling", index + 1)[index];
}
},


select: function(element) {
element = $(element);
var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
return Prototype.Selector.select(expressions, element);
},

adjacent: function(element) {
element = $(element);
var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
return Prototype.Selector.select(expressions, element.parentNode).without(element);
},

identify: function(element) {
element = $(element);
var id = Element.readAttribute(element, 'id');
if (id) return id;
do { id = 'anonymous_element_' + Element.idCounter++ } while ($(id));
Element.writeAttribute(element, 'id', id);
return id;
},

readAttribute: function(element, name) {
element = $(element);
if (Prototype.Browser.IE) {
var t = Element._attributeTranslations.read;
if (t.values[name]) return t.values[name](element, name);
if (t.names[name]) name = t.names[name];
if (name.include(':')) {
return (!element.attributes || !element.attributes[name]) ? null :
element.attributes[name].value;
}
}
return element.getAttribute(name);
},

writeAttribute: function(element, name, value) {
element = $(element);
var attributes = { }, t = Element._attributeTranslations.write;

if (typeof name == 'object') attributes = name;
else attributes[name] = Object.isUndefined(value) ? true : value;

for (var attr in attributes) {
name = t.names[attr] || attr;
value = attributes[attr];
if (t.values[attr]) name = t.values[attr](element, value);
if (value === false || value === null)
element.removeAttribute(name);
else if (value === true)
element.setAttribute(name, name);
else element.setAttribute(name, value);
}
return element;
},

getHeight: function(element) {
return Element.getDimensions(element).height;
},

getWidth: function(element) {
return Element.getDimensions(element).width;
},

classNames: function(element) {
return new Element.ClassNames(element);
},

hasClassName: function(element, className) {
if (!(element = $(element))) return;
var elementClassName = element.className;
return (elementClassName.length > 0 && (elementClassName == className ||
new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
},

addClassName: function(element, className) {
if (!(element = $(element))) return;
if (!Element.hasClassName(element, className))
element.className += (element.className ? ' ' : '') + className;
return element;
},

removeClassName: function(element, className) {
if (!(element = $(element))) return;
element.className = element.className.replace(
new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ').strip();
return element;
},

toggleClassName: function(element, className) {
if (!(element = $(element))) return;
return Element[Element.hasClassName(element, className) ?
'removeClassName' : 'addClassName'](element, className);
},

cleanWhitespace: function(element) {
element = $(element);
var node = element.firstChild;
while (node) {
var nextNode = node.nextSibling;
if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
element.removeChild(node);
node = nextNode;
}
return element;
},

empty: function(element) {
return $(element).innerHTML.blank();
},

descendantOf: function(element, ancestor) {
element = $(element), ancestor = $(ancestor);

if (element.compareDocumentPosition)
return (element.compareDocumentPosition(ancestor) & 8) === 8;

if (ancestor.contains)
return ancestor.contains(element) && ancestor !== element;

while (element = element.parentNode)
if (element == ancestor) return true;

return false;
},

scrollTo: function(element) {
element = $(element);
var pos = Element.cumulativeOffset(element);
window.scrollTo(pos[0], pos[1]);
return element;
},

getStyle: function(element, style) {
element = $(element);
style = style == 'float' ? 'cssFloat' : style.camelize();
var value = element.style[style];
if (!value || value == 'auto') {
var css = document.defaultView.getComputedStyle(element, null);
value = css ? css[style] : null;
}
if (style == 'opacity') return value ? parseFloat(value) : 1.0;
return value == 'auto' ? null : value;
},

getOpacity: function(element) {
return $(element).getStyle('opacity');
},

setStyle: function(element, styles) {
element = $(element);
var elementStyle = element.style, match;
if (Object.isString(styles)) {
element.style.cssText += ';' + styles;
return styles.include('opacity') ?
element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
}
for (var property in styles)
if (property == 'opacity') element.setOpacity(styles[property]);
else
elementStyle[(property == 'float' || property == 'cssFloat') ?
(Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat') :
property] = styles[property];

return element;
},

setOpacity: function(element, value) {
element = $(element);
element.style.opacity = (value == 1 || value === '') ? '' :
(value < 0.00001) ? 0 : value;
return element;
},

makePositioned: function(element) {
element = $(element);
var pos = Element.getStyle(element, 'position');
if (pos == 'static' || !pos) {
element._madePositioned = true;
element.style.position = 'relative';
if (Prototype.Browser.Opera) {
element.style.top = 0;
element.style.left = 0;
}
}
return element;
},

undoPositioned: function(element) {
element = $(element);
if (element._madePositioned) {
element._madePositioned = undefined;
element.style.position =
element.style.top =
element.style.left =
element.style.bottom =
element.style.right = '';
}
return element;
},

makeClipping: function(element) {
element = $(element);
if (element._overflow) return element;
element._overflow = Element.getStyle(element, 'overflow') || 'auto';
if (element._overflow !== 'hidden')
element.style.overflow = 'hidden';
return element;
},

undoClipping: function(element) {
element = $(element);
if (!element._overflow) return element;
element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
element._overflow = null;
return element;
},

clonePosition: function(element, source) {
var options = Object.extend({
setLeft:    true,
setTop:     true,
setWidth:   true,
setHeight:  true,
offsetTop:  0,
offsetLeft: 0
}, arguments[2] || { });

source = $(source);
var p = Element.viewportOffset(source), delta = [0, 0], parent = null;

element = $(element);

if (Element.getStyle(element, 'position') == 'absolute') {
parent = Element.getOffsetParent(element);
delta = Element.viewportOffset(parent);
}

if (parent == document.body) {
delta[0] -= document.body.offsetLeft;
delta[1] -= document.body.offsetTop;
}

if (options.setLeft)   element.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
if (options.setTop)    element.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
if (options.setWidth)  element.style.width = source.offsetWidth + 'px';
if (options.setHeight) element.style.height = source.offsetHeight + 'px';
return element;
}
};

Object.extend(Element.Methods, {
getElementsBySelector: Element.Methods.select,

childElements: Element.Methods.immediateDescendants
});

Element._attributeTranslations = {
write: {
names: {
className: 'class',
htmlFor:   'for'
},
values: { }
}
};

if (Prototype.Browser.Opera) {
Element.Methods.getStyle = Element.Methods.getStyle.wrap(
function(proceed, element, style) {
switch (style) {
case 'height': case 'width':
if (!Element.visible(element)) return null;

var dim = parseInt(proceed(element, style), 10);

if (dim !== element['offset' + style.capitalize()])
return dim + 'px';

var properties;
if (style === 'height') {
properties = ['border-top-width', 'padding-top',
'padding-bottom', 'border-bottom-width'];
}
else {
properties = ['border-left-width', 'padding-left',
'padding-right', 'border-right-width'];
}
return properties.inject(dim, function(memo, property) {
var val = proceed(element, property);
return val === null ? memo : memo - parseInt(val, 10);
}) + 'px';
default: return proceed(element, style);
}
}
);

Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
function(proceed, element, attribute) {
if (attribute === 'title') return element.title;
return proceed(element, attribute);
}
);
}

else if (Prototype.Browser.IE) {
Element.Methods.getStyle = function(element, style) {
element = $(element);
style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style.camelize();
var value = element.style[style];
if (!value && element.currentStyle) value = element.currentStyle[style];

if (style == 'opacity') {
if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
if (value[1]) return parseFloat(value[1]) / 100;
return 1.0;
}

if (value == 'auto') {
if ((style == 'width' || style == 'height') && (element.getStyle('display') != 'none'))
return element['offset' + style.capitalize()] + 'px';
return null;
}
return value;
};

Element.Methods.setOpacity = function(element, value) {
function stripAlpha(filter){
return filter.replace(/alpha\([^\)]*\)/gi,'');
}
element = $(element);
var currentStyle = element.currentStyle;
if ((currentStyle && !currentStyle.hasLayout) ||
(!currentStyle && element.style.zoom == 'normal'))
element.style.zoom = 1;

var filter = element.getStyle('filter'), style = element.style;
if (value == 1 || value === '') {
(filter = stripAlpha(filter)) ?
style.filter = filter : style.removeAttribute('filter');
return element;
} else if (value < 0.00001) value = 0;
style.filter = stripAlpha(filter) +
'alpha(opacity=' + (value * 100) + ')';
return element;
};

Element._attributeTranslations = (function(){

var classProp = 'className',
forProp = 'for',
el = document.createElement('div');

el.setAttribute(classProp, 'x');

if (el.className !== 'x') {
el.setAttribute('class', 'x');
if (el.className === 'x') {
classProp = 'class';
}
}
el = null;

el = document.createElement('label');
el.setAttribute(forProp, 'x');
if (el.htmlFor !== 'x') {
el.setAttribute('htmlFor', 'x');
if (el.htmlFor === 'x') {
forProp = 'htmlFor';
}
}
el = null;

return {
read: {
names: {
'class':      classProp,
'className':  classProp,
'for':        forProp,
'htmlFor':    forProp
},
values: {
_getAttr: function(element, attribute) {
return element.getAttribute(attribute);
},
_getAttr2: function(element, attribute) {
return element.getAttribute(attribute, 2);
},
_getAttrNode: function(element, attribute) {
var node = element.getAttributeNode(attribute);
return node ? node.value : "";
},
_getEv: (function(){

var el = document.createElement('div'), f;
el.onclick = Prototype.emptyFunction;
var value = el.getAttribute('onclick');

if (String(value).indexOf('{') > -1) {
f = function(element, attribute) {
attribute = element.getAttribute(attribute);
if (!attribute) return null;
attribute = attribute.toString();
attribute = attribute.split('{')[1];
attribute = attribute.split('}')[0];
return attribute.strip();
};
}
else if (value === '') {
f = function(element, attribute) {
attribute = element.getAttribute(attribute);
if (!attribute) return null;
return attribute.strip();
};
}
el = null;
return f;
})(),
_flag: function(element, attribute) {
return $(element).hasAttribute(attribute) ? attribute : null;
},
style: function(element) {
return element.style.cssText.toLowerCase();
},
title: function(element) {
return element.title;
}
}
}
}
})();

Element._attributeTranslations.write = {
names: Object.extend({
cellpadding: 'cellPadding',
cellspacing: 'cellSpacing'
}, Element._attributeTranslations.read.names),
values: {
checked: function(element, value) {
element.checked = !!value;
},

style: function(element, value) {
element.style.cssText = value ? value : '';
}
}
};

Element._attributeTranslations.has = {};

$w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' +
'encType maxLength readOnly longDesc frameBorder').each(function(attr) {
Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
Element._attributeTranslations.has[attr.toLowerCase()] = attr;
});

(function(v) {
Object.extend(v, {
href:        v._getAttr2,
src:         v._getAttr2,
type:        v._getAttr,
action:      v._getAttrNode,
disabled:    v._flag,
checked:     v._flag,
readonly:    v._flag,
multiple:    v._flag,
onload:      v._getEv,
onunload:    v._getEv,
onclick:     v._getEv,
ondblclick:  v._getEv,
onmousedown: v._getEv,
onmouseup:   v._getEv,
onmouseover: v._getEv,
onmousemove: v._getEv,
onmouseout:  v._getEv,
onfocus:     v._getEv,
onblur:      v._getEv,
onkeypress:  v._getEv,
onkeydown:   v._getEv,
onkeyup:     v._getEv,
onsubmit:    v._getEv,
onreset:     v._getEv,
onselect:    v._getEv,
onchange:    v._getEv
});
})(Element._attributeTranslations.read.values);

if (Prototype.BrowserFeatures.ElementExtensions) {
(function() {
function _descendants(element) {
var nodes = element.getElementsByTagName('*'), results = [];
for (var i = 0, node; node = nodes[i]; i++)
if (node.tagName !== "!") // Filter out comment nodes.
results.push(node);
return results;
}

Element.Methods.down = function(element, expression, index) {
element = $(element);
if (arguments.length == 1) return element.firstDescendant();
return Object.isNumber(expression) ? _descendants(element)[expression] :
Element.select(element, expression)[index || 0];
}
})();
}

}

else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
Element.Methods.setOpacity = function(element, value) {
element = $(element);
element.style.opacity = (value == 1) ? 0.999999 :
(value === '') ? '' : (value < 0.00001) ? 0 : value;
return element;
};
}

else if (Prototype.Browser.WebKit) {
Element.Methods.setOpacity = function(element, value) {
element = $(element);
element.style.opacity = (value == 1 || value === '') ? '' :
(value < 0.00001) ? 0 : value;

if (value == 1)
if (element.tagName.toUpperCase() == 'IMG' && element.width) {
element.width++; element.width--;
} else try {
var n = document.createTextNode(' ');
element.appendChild(n);
element.removeChild(n);
} catch (e) { }

return element;
};
}

if ('outerHTML' in document.documentElement) {
Element.Methods.replace = function(element, content) {
element = $(element);

if (content && content.toElement) content = content.toElement();
if (Object.isElement(content)) {
element.parentNode.replaceChild(content, element);
return element;
}

content = Object.toHTML(content);
var parent = element.parentNode, tagName = parent.tagName.toUpperCase();

if (Element._insertionTranslations.tags[tagName]) {
var nextSibling = element.next(),
fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
parent.removeChild(element);
if (nextSibling)
fragments.each(function(node) { parent.insertBefore(node, nextSibling) });
else
fragments.each(function(node) { parent.appendChild(node) });
}
else element.outerHTML = content.stripScripts();

content.evalScripts.bind(content).defer();
return element;
};
}

Element._returnOffset = function(l, t) {
var result = [l, t];
result.left = l;
result.top = t;
return result;
};

Element._getContentFromAnonymousElement = function(tagName, html, force) {
var div = new Element('div'),
t = Element._insertionTranslations.tags[tagName];

var workaround = false;
if (t) workaround = true;
else if (force) {
workaround = true;
t = ['', '', 0];
}

if (workaround) {
div.innerHTML = '&nbsp;' + t[0] + html + t[1];
div.removeChild(div.firstChild);
for (var i = t[2]; i--; ) {
div = div.firstChild;
}
}
else {
div.innerHTML = html;
}
return $A(div.childNodes);
};

Element._insertionTranslations = {
before: function(element, node) {
element.parentNode.insertBefore(node, element);
},
top: function(element, node) {
element.insertBefore(node, element.firstChild);
},
bottom: function(element, node) {
element.appendChild(node);
},
after: function(element, node) {
element.parentNode.insertBefore(node, element.nextSibling);
},
tags: {
TABLE:  ['<table>',                '</table>',                   1],
TBODY:  ['<table><tbody>',         '</tbody></table>',           2],
TR:     ['<table><tbody><tr>',     '</tr></tbody></table>',      3],
TD:     ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
SELECT: ['<select>',               '</select>',                  1]
}
};

(function() {
var tags = Element._insertionTranslations.tags;
Object.extend(tags, {
THEAD: tags.TBODY,
TFOOT: tags.TBODY,
TH:    tags.TD
});
})();

Element.Methods.Simulated = {
hasAttribute: function(element, attribute) {
attribute = Element._attributeTranslations.has[attribute] || attribute;
var node = $(element).getAttributeNode(attribute);
return !!(node && node.specified);
}
};

Element.Methods.ByTag = { };

Object.extend(Element, Element.Methods);

(function(div) {

if (!Prototype.BrowserFeatures.ElementExtensions && div['__proto__']) {
window.HTMLElement = { };
window.HTMLElement.prototype = div['__proto__'];
Prototype.BrowserFeatures.ElementExtensions = true;
}

div = null;

})(document.createElement('div'));

Element.extend = (function() {

function checkDeficiency(tagName) {
if (typeof window.Element != 'undefined') {
var proto = window.Element.prototype;
if (proto) {
var id = '_' + (Math.random()+'').slice(2),
el = document.createElement(tagName);
proto[id] = 'x';
var isBuggy = (el[id] !== 'x');
delete proto[id];
el = null;
return isBuggy;
}
}
return false;
}

function extendElementWith(element, methods) {
for (var property in methods) {
var value = methods[property];
if (Object.isFunction(value) && !(property in element))
element[property] = value.methodize();
}
}

var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkDeficiency('object');

if (Prototype.BrowserFeatures.SpecificElementExtensions) {
if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
return function(element) {
if (element && typeof element._extendedByPrototype == 'undefined') {
var t = element.tagName;
if (t && (/^(?:object|applet|embed)$/i.test(t))) {
extendElementWith(element, Element.Methods);
extendElementWith(element, Element.Methods.Simulated);
extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
}
}
return element;
}
}
return Prototype.K;
}

var Methods = { }, ByTag = Element.Methods.ByTag;

var extend = Object.extend(function(element) {
if (!element || typeof element._extendedByPrototype != 'undefined' ||
element.nodeType != 1 || element == window) return element;

var methods = Object.clone(Methods),
tagName = element.tagName.toUpperCase();

if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);

extendElementWith(element, methods);

element._extendedByPrototype = Prototype.emptyFunction;
return element;

}, {
refresh: function() {
if (!Prototype.BrowserFeatures.ElementExtensions) {
Object.extend(Methods, Element.Methods);
Object.extend(Methods, Element.Methods.Simulated);
}
}
});

extend.refresh();
return extend;
})();

if (document.documentElement.hasAttribute) {
Element.hasAttribute = function(element, attribute) {
return element.hasAttribute(attribute);
};
}
else {
Element.hasAttribute = Element.Methods.Simulated.hasAttribute;
}

Element.addMethods = function(methods) {
var F = Prototype.BrowserFeatures, T = Element.Methods.ByTag;

if (!methods) {
Object.extend(Form, Form.Methods);
Object.extend(Form.Element, Form.Element.Methods);
Object.extend(Element.Methods.ByTag, {
"FORM":     Object.clone(Form.Methods),
"INPUT":    Object.clone(Form.Element.Methods),
"SELECT":   Object.clone(Form.Element.Methods),
"TEXTAREA": Object.clone(Form.Element.Methods),
"BUTTON":   Object.clone(Form.Element.Methods)
});
}

if (arguments.length == 2) {
var tagName = methods;
methods = arguments[1];
}

if (!tagName) Object.extend(Element.Methods, methods || { });
else {
if (Object.isArray(tagName)) tagName.each(extend);
else extend(tagName);
}

function extend(tagName) {
tagName = tagName.toUpperCase();
if (!Element.Methods.ByTag[tagName])
Element.Methods.ByTag[tagName] = { };
Object.extend(Element.Methods.ByTag[tagName], methods);
}

function copy(methods, destination, onlyIfAbsent) {
onlyIfAbsent = onlyIfAbsent || false;
for (var property in methods) {
var value = methods[property];
if (!Object.isFunction(value)) continue;
if (!onlyIfAbsent || !(property in destination))
destination[property] = value.methodize();
}
}

function findDOMClass(tagName) {
var klass;
var trans = {
"OPTGROUP": "OptGroup", "TEXTAREA": "TextArea", "P": "Paragraph",
"FIELDSET": "FieldSet", "UL": "UList", "OL": "OList", "DL": "DList",
"DIR": "Directory", "H1": "Heading", "H2": "Heading", "H3": "Heading",
"H4": "Heading", "H5": "Heading", "H6": "Heading", "Q": "Quote",
"INS": "Mod", "DEL": "Mod", "A": "Anchor", "IMG": "Image", "CAPTION":
"TableCaption", "COL": "TableCol", "COLGROUP": "TableCol", "THEAD":
"TableSection", "TFOOT": "TableSection", "TBODY": "TableSection", "TR":
"TableRow", "TH": "TableCell", "TD": "TableCell", "FRAMESET":
"FrameSet", "IFRAME": "IFrame"
};
if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
if (window[klass]) return window[klass];
klass = 'HTML' + tagName + 'Element';
if (window[klass]) return window[klass];
klass = 'HTML' + tagName.capitalize() + 'Element';
if (window[klass]) return window[klass];

var element = document.createElement(tagName),
proto = element['__proto__'] || element.constructor.prototype;

element = null;
return proto;
}

var elementPrototype = window.HTMLElement ? HTMLElement.prototype :
Element.prototype;

if (F.ElementExtensions) {
copy(Element.Methods, elementPrototype);
copy(Element.Methods.Simulated, elementPrototype, true);
}

if (F.SpecificElementExtensions) {
for (var tag in Element.Methods.ByTag) {
var klass = findDOMClass(tag);
if (Object.isUndefined(klass)) continue;
copy(T[tag], klass.prototype);
}
}

Object.extend(Element, Element.Methods);
delete Element.ByTag;

if (Element.extend.refresh) Element.extend.refresh();
Element.cache = { };
};


document.viewport = {

getDimensions: function() {
return { width: this.getWidth(), height: this.getHeight() };
},

getScrollOffsets: function() {
return Element._returnOffset(
window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop);
}
};

(function(viewport) {
var B = Prototype.Browser, doc = document, element, property = {};

function getRootElement() {
if (B.WebKit && !doc.evaluate)
return document;

if (B.Opera && window.parseFloat(window.opera.version()) < 9.5)
return document.body;

return document.documentElement;
}

function define(D) {
if (!element) element = getRootElement();

property[D] = 'client' + D;

viewport['get' + D] = function() { return element[property[D]] };
return viewport['get' + D]();
}

viewport.getWidth  = define.curry('Width');

viewport.getHeight = define.curry('Height');
})(document.viewport);


Element.Storage = {
UID: 1
};

Element.addMethods({
getStorage: function(element) {
if (!(element = $(element))) return;

var uid;
if (element === window) {
uid = 0;
} else {
if (typeof element._prototypeUID === "undefined")
element._prototypeUID = Element.Storage.UID++;
uid = element._prototypeUID;
}

if (!Element.Storage[uid])
Element.Storage[uid] = $H();

return Element.Storage[uid];
},

store: function(element, key, value) {
if (!(element = $(element))) return;

if (arguments.length === 2) {
Element.getStorage(element).update(key);
} else {
Element.getStorage(element).set(key, value);
}

return element;
},

retrieve: function(element, key, defaultValue) {
if (!(element = $(element))) return;
var hash = Element.getStorage(element), value = hash.get(key);

if (Object.isUndefined(value)) {
hash.set(key, defaultValue);
value = defaultValue;
}

return value;
},

clone: function(element, deep) {
if (!(element = $(element))) return;
var clone = element.cloneNode(deep);
clone._prototypeUID = void 0;
if (deep) {
var descendants = Element.select(clone, '*'),
i = descendants.length;
while (i--) {
descendants[i]._prototypeUID = void 0;
}
}
return Element.extend(clone);
},

purge: function(element) {
if (!(element = $(element))) return;
var purgeElement = Element._purgeElement;

purgeElement(element);

var descendants = element.getElementsByTagName('*'),
i = descendants.length;

while (i--) purgeElement(descendants[i]);

return null;
}
});

(function() {

function toDecimal(pctString) {
var match = pctString.match(/^(\d+)%?$/i);
if (!match) return null;
return (Number(match[1]) / 100);
}

function getPixelValue(value, property, context) {
var element = null;
if (Object.isElement(value)) {
element = value;
value = element.getStyle(property);
}

if (value === null) {
return null;
}

if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
return window.parseFloat(value);
}

var isPercentage = value.include('%'), isViewport = (context === document.viewport);

if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
var style = element.style.left, rStyle = element.runtimeStyle.left;
element.runtimeStyle.left = element.currentStyle.left;
element.style.left = value || 0;
value = element.style.pixelLeft;
element.style.left = style;
element.runtimeStyle.left = rStyle;

return value;
}

if (element && isPercentage) {
context = context || element.parentNode;
var decimal = toDecimal(value);
var whole = null;
var position = element.getStyle('position');

var isHorizontal = property.include('left') || property.include('right') ||
property.include('width');

var isVertical =  property.include('top') || property.include('bottom') ||
property.include('height');

if (context === document.viewport) {
if (isHorizontal) {
whole = document.viewport.getWidth();
} else if (isVertical) {
whole = document.viewport.getHeight();
}
} else {
if (isHorizontal) {
whole = $(context).measure('width');
} else if (isVertical) {
whole = $(context).measure('height');
}
}

return (whole === null) ? 0 : whole * decimal;
}

return 0;
}

function toCSSPixels(number) {
if (Object.isString(number) && number.endsWith('px')) {
return number;
}
return number + 'px';
}

function isDisplayed(element) {
var originalElement = element;
while (element && element.parentNode) {
var display = element.getStyle('display');
if (display === 'none') {
return false;
}
element = $(element.parentNode);
}
return true;
}

var hasLayout = Prototype.K;
if ('currentStyle' in document.documentElement) {
hasLayout = function(element) {
if (!element.currentStyle.hasLayout) {
element.style.zoom = 1;
}
return element;
};
}

function cssNameFor(key) {
if (key.include('border')) key = key + '-width';
return key.camelize();
}

Element.Layout = Class.create(Hash, {
initialize: function($super, element, preCompute) {
$super();
this.element = $(element);

Element.Layout.PROPERTIES.each( function(property) {
this._set(property, null);
}, this);

if (preCompute) {
this._preComputing = true;
this._begin();
Element.Layout.PROPERTIES.each( this._compute, this );
this._end();
this._preComputing = false;
}
},

_set: function(property, value) {
return Hash.prototype.set.call(this, property, value);
},

set: function(property, value) {
throw "Properties of Element.Layout are read-only.";
},

get: function($super, property) {
var value = $super(property);
return value === null ? this._compute(property) : value;
},

_begin: function() {
if (this._prepared) return;

var element = this.element;
if (isDisplayed(element)) {
this._prepared = true;
return;
}

var originalStyles = {
position:   element.style.position   || '',
width:      element.style.width      || '',
visibility: element.style.visibility || '',
display:    element.style.display    || ''
};

element.store('prototype_original_styles', originalStyles);

var position = element.getStyle('position'),
width = element.getStyle('width');

if (width === "0px" || width === null) {
element.style.display = 'block';
width = element.getStyle('width');
}

var context = (position === 'fixed') ? document.viewport :
element.parentNode;

element.setStyle({
position:   'absolute',
visibility: 'hidden',
display:    'block'
});

var positionedWidth = element.getStyle('width');

var newWidth;
if (width && (positionedWidth === width)) {
newWidth = getPixelValue(element, 'width', context);
} else if (position === 'absolute' || position === 'fixed') {
newWidth = getPixelValue(element, 'width', context);
} else {
var parent = element.parentNode, pLayout = $(parent).getLayout();

newWidth = pLayout.get('width') -
this.get('margin-left') -
this.get('border-left') -
this.get('padding-left') -
this.get('padding-right') -
this.get('border-right') -
this.get('margin-right');
}

element.setStyle({ width: newWidth + 'px' });

this._prepared = true;
},

_end: function() {
var element = this.element;
var originalStyles = element.retrieve('prototype_original_styles');
element.store('prototype_original_styles', null);
element.setStyle(originalStyles);
this._prepared = false;
},

_compute: function(property) {
var COMPUTATIONS = Element.Layout.COMPUTATIONS;
if (!(property in COMPUTATIONS)) {
throw "Property not found.";
}

return this._set(property, COMPUTATIONS[property].call(this, this.element));
},

toObject: function() {
var args = $A(arguments);
var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
args.join(' ').split(' ');
var obj = {};
keys.each( function(key) {
if (!Element.Layout.PROPERTIES.include(key)) return;
var value = this.get(key);
if (value != null) obj[key] = value;
}, this);
return obj;
},

toHash: function() {
var obj = this.toObject.apply(this, arguments);
return new Hash(obj);
},

toCSS: function() {
var args = $A(arguments);
var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
args.join(' ').split(' ');
var css = {};

keys.each( function(key) {
if (!Element.Layout.PROPERTIES.include(key)) return;
if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;

var value = this.get(key);
if (value != null) css[cssNameFor(key)] = value + 'px';
}, this);
return css;
},

inspect: function() {
return "#<Element.Layout>";
}
});

Object.extend(Element.Layout, {
PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),

COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),

COMPUTATIONS: {
'height': function(element) {
if (!this._preComputing) this._begin();

var bHeight = this.get('border-box-height');
if (bHeight <= 0) {
if (!this._preComputing) this._end();
return 0;
}

var bTop = this.get('border-top'),
bBottom = this.get('border-bottom');

var pTop = this.get('padding-top'),
pBottom = this.get('padding-bottom');

if (!this._preComputing) this._end();

return bHeight - bTop - bBottom - pTop - pBottom;
},

'width': function(element) {
if (!this._preComputing) this._begin();

var bWidth = this.get('border-box-width');
if (bWidth <= 0) {
if (!this._preComputing) this._end();
return 0;
}

var bLeft = this.get('border-left'),
bRight = this.get('border-right');

var pLeft = this.get('padding-left'),
pRight = this.get('padding-right');

if (!this._preComputing) this._end();

return bWidth - bLeft - bRight - pLeft - pRight;
},

'padding-box-height': function(element) {
var height = this.get('height'),
pTop = this.get('padding-top'),
pBottom = this.get('padding-bottom');

return height + pTop + pBottom;
},

'padding-box-width': function(element) {
var width = this.get('width'),
pLeft = this.get('padding-left'),
pRight = this.get('padding-right');

return width + pLeft + pRight;
},

'border-box-height': function(element) {
if (!this._preComputing) this._begin();
var height = element.offsetHeight;
if (!this._preComputing) this._end();
return height;
},

'border-box-width': function(element) {
if (!this._preComputing) this._begin();
var width = element.offsetWidth;
if (!this._preComputing) this._end();
return width;
},

'margin-box-height': function(element) {
var bHeight = this.get('border-box-height'),
mTop = this.get('margin-top'),
mBottom = this.get('margin-bottom');

if (bHeight <= 0) return 0;

return bHeight + mTop + mBottom;
},

'margin-box-width': function(element) {
var bWidth = this.get('border-box-width'),
mLeft = this.get('margin-left'),
mRight = this.get('margin-right');

if (bWidth <= 0) return 0;

return bWidth + mLeft + mRight;
},

'top': function(element) {
var offset = element.positionedOffset();
return offset.top;
},

'bottom': function(element) {
var offset = element.positionedOffset(),
parent = element.getOffsetParent(),
pHeight = parent.measure('height');

var mHeight = this.get('border-box-height');

return pHeight - mHeight - offset.top;
},

'left': function(element) {
var offset = element.positionedOffset();
return offset.left;
},

'right': function(element) {
var offset = element.positionedOffset(),
parent = element.getOffsetParent(),
pWidth = parent.measure('width');

var mWidth = this.get('border-box-width');

return pWidth - mWidth - offset.left;
},

'padding-top': function(element) {
return getPixelValue(element, 'paddingTop');
},

'padding-bottom': function(element) {
return getPixelValue(element, 'paddingBottom');
},

'padding-left': function(element) {
return getPixelValue(element, 'paddingLeft');
},

'padding-right': function(element) {
return getPixelValue(element, 'paddingRight');
},

'border-top': function(element) {
return getPixelValue(element, 'borderTopWidth');
},

'border-bottom': function(element) {
return getPixelValue(element, 'borderBottomWidth');
},

'border-left': function(element) {
return getPixelValue(element, 'borderLeftWidth');
},

'border-right': function(element) {
return getPixelValue(element, 'borderRightWidth');
},

'margin-top': function(element) {
return getPixelValue(element, 'marginTop');
},

'margin-bottom': function(element) {
return getPixelValue(element, 'marginBottom');
},

'margin-left': function(element) {
return getPixelValue(element, 'marginLeft');
},

'margin-right': function(element) {
return getPixelValue(element, 'marginRight');
}
}
});

if ('getBoundingClientRect' in document.documentElement) {
Object.extend(Element.Layout.COMPUTATIONS, {
'right': function(element) {
var parent = hasLayout(element.getOffsetParent());
var rect = element.getBoundingClientRect(),
pRect = parent.getBoundingClientRect();

return (pRect.right - rect.right).round();
},

'bottom': function(element) {
var parent = hasLayout(element.getOffsetParent());
var rect = element.getBoundingClientRect(),
pRect = parent.getBoundingClientRect();

return (pRect.bottom - rect.bottom).round();
}
});
}

Element.Offset = Class.create({
initialize: function(left, top) {
this.left = left.round();
this.top  = top.round();

this[0] = this.left;
this[1] = this.top;
},

relativeTo: function(offset) {
return new Element.Offset(
this.left - offset.left,
this.top  - offset.top
);
},

inspect: function() {
return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
},

toString: function() {
return "[#{left}, #{top}]".interpolate(this);
},

toArray: function() {
return [this.left, this.top];
}
});

function getLayout(element, preCompute) {
return new Element.Layout(element, preCompute);
}

function measure(element, property) {
return $(element).getLayout().get(property);
}

function getDimensions(element) {
element = $(element);
var display = Element.getStyle(element, 'display');

if (display && display !== 'none') {
return { width: element.offsetWidth, height: element.offsetHeight };
}

var style = element.style;
var originalStyles = {
visibility: style.visibility,
position:   style.position,
display:    style.display
};

var newStyles = {
visibility: 'hidden',
display:    'block'
};

if (originalStyles.position !== 'fixed')
newStyles.position = 'absolute';

Element.setStyle(element, newStyles);

var dimensions = {
width:  element.offsetWidth,
height: element.offsetHeight
};

Element.setStyle(element, originalStyles);

return dimensions;
}

function getOffsetParent(element) {
element = $(element);

if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
return $(document.body);

var isInline = (Element.getStyle(element, 'display') === 'inline');
if (!isInline && element.offsetParent) return $(element.offsetParent);

while ((element = element.parentNode) && element !== document.body) {
if (Element.getStyle(element, 'position') !== 'static') {
return isHtml(element) ? $(document.body) : $(element);
}
}

return $(document.body);
}


function cumulativeOffset(element) {
element = $(element);
var valueT = 0, valueL = 0;
if (element.parentNode) {
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
element = element.offsetParent;
} while (element);
}
return new Element.Offset(valueL, valueT);
}

function positionedOffset(element) {
element = $(element);

var layout = element.getLayout();

var valueT = 0, valueL = 0;
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
element = element.offsetParent;
if (element) {
if (isBody(element)) break;
var p = Element.getStyle(element, 'position');
if (p !== 'static') break;
}
} while (element);

valueL -= layout.get('margin-top');
valueT -= layout.get('margin-left');

return new Element.Offset(valueL, valueT);
}

function cumulativeScrollOffset(element) {
var valueT = 0, valueL = 0;
do {
valueT += element.scrollTop  || 0;
valueL += element.scrollLeft || 0;
element = element.parentNode;
} while (element);
return new Element.Offset(valueL, valueT);
}

function viewportOffset(forElement) {
element = $(element);
var valueT = 0, valueL = 0, docBody = document.body;

var element = forElement;
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
if (element.offsetParent == docBody &&
Element.getStyle(element, 'position') == 'absolute') break;
} while (element = element.offsetParent);

element = forElement;
do {
if (element != docBody) {
valueT -= element.scrollTop  || 0;
valueL -= element.scrollLeft || 0;
}
} while (element = element.parentNode);
return new Element.Offset(valueL, valueT);
}

function absolutize(element) {
element = $(element);

if (Element.getStyle(element, 'position') === 'absolute') {
return element;
}

var offsetParent = getOffsetParent(element);
var eOffset = element.viewportOffset(),
pOffset = offsetParent.viewportOffset();

var offset = eOffset.relativeTo(pOffset);
var layout = element.getLayout();

element.store('prototype_absolutize_original_styles', {
left:   element.getStyle('left'),
top:    element.getStyle('top'),
width:  element.getStyle('width'),
height: element.getStyle('height')
});

element.setStyle({
position: 'absolute',
top:    offset.top + 'px',
left:   offset.left + 'px',
width:  layout.get('width') + 'px',
height: layout.get('height') + 'px'
});

return element;
}

function relativize(element) {
element = $(element);
if (Element.getStyle(element, 'position') === 'relative') {
return element;
}

var originalStyles =
element.retrieve('prototype_absolutize_original_styles');

if (originalStyles) element.setStyle(originalStyles);
return element;
}

if (Prototype.Browser.IE) {
getOffsetParent = getOffsetParent.wrap(
function(proceed, element) {
element = $(element);

if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
return $(document.body);

var position = element.getStyle('position');
if (position !== 'static') return proceed(element);

element.setStyle({ position: 'relative' });
var value = proceed(element);
element.setStyle({ position: position });
return value;
}
);

positionedOffset = positionedOffset.wrap(function(proceed, element) {
element = $(element);
if (!element.parentNode) return new Element.Offset(0, 0);
var position = element.getStyle('position');
if (position !== 'static') return proceed(element);

var offsetParent = element.getOffsetParent();
if (offsetParent && offsetParent.getStyle('position') === 'fixed')
hasLayout(offsetParent);

element.setStyle({ position: 'relative' });
var value = proceed(element);
element.setStyle({ position: position });
return value;
});
} else if (Prototype.Browser.Webkit) {
cumulativeOffset = function(element) {
element = $(element);
var valueT = 0, valueL = 0;
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
if (element.offsetParent == document.body)
if (Element.getStyle(element, 'position') == 'absolute') break;

element = element.offsetParent;
} while (element);

return new Element.Offset(valueL, valueT);
};
}


Element.addMethods({
getLayout:              getLayout,
measure:                measure,
getDimensions:          getDimensions,
getOffsetParent:        getOffsetParent,
cumulativeOffset:       cumulativeOffset,
positionedOffset:       positionedOffset,
cumulativeScrollOffset: cumulativeScrollOffset,
viewportOffset:         viewportOffset,
absolutize:             absolutize,
relativize:             relativize
});

function isBody(element) {
return element.nodeName.toUpperCase() === 'BODY';
}

function isHtml(element) {
return element.nodeName.toUpperCase() === 'HTML';
}

function isDocument(element) {
return element.nodeType === Node.DOCUMENT_NODE;
}

function isDetached(element) {
return element !== document.body &&
!Element.descendantOf(element, document.body);
}

if ('getBoundingClientRect' in document.documentElement) {
Element.addMethods({
viewportOffset: function(element) {
element = $(element);
if (isDetached(element)) return new Element.Offset(0, 0);

var rect = element.getBoundingClientRect(),
docEl = document.documentElement;
return new Element.Offset(rect.left - docEl.clientLeft,
rect.top - docEl.clientTop);
}
});
}
})();
window.$$ = function() {
var expression = $A(arguments).join(', ');
return Prototype.Selector.select(expression, document);
};

Prototype.Selector = (function() {

function select() {
throw new Error('Method "Prototype.Selector.select" must be defined.');
}

function match() {
throw new Error('Method "Prototype.Selector.match" must be defined.');
}

function find(elements, expression, index) {
index = index || 0;
var match = Prototype.Selector.match, length = elements.length, matchIndex = 0, i;

for (i = 0; i < length; i++) {
if (match(elements[i], expression) && index == matchIndex++) {
return Element.extend(elements[i]);
}
}
}

function extendElements(elements) {
for (var i = 0, length = elements.length; i < length; i++) {
Element.extend(elements[i]);
}
return elements;
}


var K = Prototype.K;

return {
select: select,
match: match,
find: find,
extendElements: (Element.extend === K) ? K : extendElements,
extendElement: Element.extend
};
})();
/*!
* Sizzle CSS Selector Engine - v1.0
*  Copyright 2009, The Dojo Foundation
*  Released under the MIT, BSD, and GPL Licenses.
*  More information: http://sizzlejs.com/
*/
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
done = 0,
toString = Object.prototype.toString,
hasDuplicate = false,
baseHasDuplicate = true;

[0, 0].sort(function(){
baseHasDuplicate = false;
return 0;
});

var Sizzle = function(selector, context, results, seed) {
results = results || [];
var origContext = context = context || document;

if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
return [];
}

if ( !selector || typeof selector !== "string" ) {
return results;
}

var parts = [], m, set, checkSet, check, mode, extra, prune = true, contextXML = isXML(context),
soFar = selector;

while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
soFar = m[3];

parts.push( m[1] );

if ( m[2] ) {
extra = m[3];
break;
}
}

if ( parts.length > 1 && origPOS.exec( selector ) ) {
if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
set = posProcess( parts[0] + parts[1], context );
} else {
set = Expr.relative[ parts[0] ] ?
[ context ] :
Sizzle( parts.shift(), context );

while ( parts.length ) {
selector = parts.shift();

if ( Expr.relative[ selector ] )
selector += parts.shift();

set = posProcess( selector, set );
}
}
} else {
if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
var ret = Sizzle.find( parts.shift(), context, contextXML );
context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
}

if ( context ) {
var ret = seed ?
{ expr: parts.pop(), set: makeArray(seed) } :
Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

if ( parts.length > 0 ) {
checkSet = makeArray(set);
} else {
prune = false;
}

while ( parts.length ) {
var cur = parts.pop(), pop = cur;

if ( !Expr.relative[ cur ] ) {
cur = "";
} else {
pop = parts.pop();
}

if ( pop == null ) {
pop = context;
}

Expr.relative[ cur ]( checkSet, pop, contextXML );
}
} else {
checkSet = parts = [];
}
}

if ( !checkSet ) {
checkSet = set;
}

if ( !checkSet ) {
throw "Syntax error, unrecognized expression: " + (cur || selector);
}

if ( toString.call(checkSet) === "[object Array]" ) {
if ( !prune ) {
results.push.apply( results, checkSet );
} else if ( context && context.nodeType === 1 ) {
for ( var i = 0; checkSet[i] != null; i++ ) {
if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
results.push( set[i] );
}
}
} else {
for ( var i = 0; checkSet[i] != null; i++ ) {
if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
results.push( set[i] );
}
}
}
} else {
makeArray( checkSet, results );
}

if ( extra ) {
Sizzle( extra, origContext, results, seed );
Sizzle.uniqueSort( results );
}

return results;
};

Sizzle.uniqueSort = function(results){
if ( sortOrder ) {
hasDuplicate = baseHasDuplicate;
results.sort(sortOrder);

if ( hasDuplicate ) {
for ( var i = 1; i < results.length; i++ ) {
if ( results[i] === results[i-1] ) {
results.splice(i--, 1);
}
}
}
}

return results;
};

Sizzle.matches = function(expr, set){
return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
var set, match;

if ( !expr ) {
return [];
}

for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
var type = Expr.order[i], match;

if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
var left = match[1];
match.splice(1,1);

if ( left.substr( left.length - 1 ) !== "\\" ) {
match[1] = (match[1] || "").replace(/\\/g, "");
set = Expr.find[ type ]( match, context, isXML );
if ( set != null ) {
expr = expr.replace( Expr.match[ type ], "" );
break;
}
}
}
}

if ( !set ) {
set = context.getElementsByTagName("*");
}

return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
var old = expr, result = [], curLoop = set, match, anyFound,
isXMLFilter = set && set[0] && isXML(set[0]);

while ( expr && set.length ) {
for ( var type in Expr.filter ) {
if ( (match = Expr.match[ type ].exec( expr )) != null ) {
var filter = Expr.filter[ type ], found, item;
anyFound = false;

if ( curLoop == result ) {
result = [];
}

if ( Expr.preFilter[ type ] ) {
match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

if ( !match ) {
anyFound = found = true;
} else if ( match === true ) {
continue;
}
}

if ( match ) {
for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
if ( item ) {
found = filter( item, match, i, curLoop );
var pass = not ^ !!found;

if ( inplace && found != null ) {
if ( pass ) {
anyFound = true;
} else {
curLoop[i] = false;
}
} else if ( pass ) {
result.push( item );
anyFound = true;
}
}
}
}

if ( found !== undefined ) {
if ( !inplace ) {
curLoop = result;
}

expr = expr.replace( Expr.match[ type ], "" );

if ( !anyFound ) {
return [];
}

break;
}
}
}

if ( expr == old ) {
if ( anyFound == null ) {
throw "Syntax error, unrecognized expression: " + expr;
} else {
break;
}
}

old = expr;
}

return curLoop;
};

var Expr = Sizzle.selectors = {
order: [ "ID", "NAME", "TAG" ],
match: {
ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
},
leftMatch: {},
attrMap: {
"class": "className",
"for": "htmlFor"
},
attrHandle: {
href: function(elem){
return elem.getAttribute("href");
}
},
relative: {
"+": function(checkSet, part, isXML){
var isPartStr = typeof part === "string",
isTag = isPartStr && !/\W/.test(part),
isPartStrNotTag = isPartStr && !isTag;

if ( isTag && !isXML ) {
part = part.toUpperCase();
}

for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
if ( (elem = checkSet[i]) ) {
while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
elem || false :
elem === part;
}
}

if ( isPartStrNotTag ) {
Sizzle.filter( part, checkSet, true );
}
},
">": function(checkSet, part, isXML){
var isPartStr = typeof part === "string";

if ( isPartStr && !/\W/.test(part) ) {
part = isXML ? part : part.toUpperCase();

for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
var parent = elem.parentNode;
checkSet[i] = parent.nodeName === part ? parent : false;
}
}
} else {
for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
checkSet[i] = isPartStr ?
elem.parentNode :
elem.parentNode === part;
}
}

if ( isPartStr ) {
Sizzle.filter( part, checkSet, true );
}
}
},
"": function(checkSet, part, isXML){
var doneName = done++, checkFn = dirCheck;

if ( !/\W/.test(part) ) {
var nodeCheck = part = isXML ? part : part.toUpperCase();
checkFn = dirNodeCheck;
}

checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
},
"~": function(checkSet, part, isXML){
var doneName = done++, checkFn = dirCheck;

if ( typeof part === "string" && !/\W/.test(part) ) {
var nodeCheck = part = isXML ? part : part.toUpperCase();
checkFn = dirNodeCheck;
}

checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
}
},
find: {
ID: function(match, context, isXML){
if ( typeof context.getElementById !== "undefined" && !isXML ) {
var m = context.getElementById(match[1]);
return m ? [m] : [];
}
},
NAME: function(match, context, isXML){
if ( typeof context.getElementsByName !== "undefined" ) {
var ret = [], results = context.getElementsByName(match[1]);

for ( var i = 0, l = results.length; i < l; i++ ) {
if ( results[i].getAttribute("name") === match[1] ) {
ret.push( results[i] );
}
}

return ret.length === 0 ? null : ret;
}
},
TAG: function(match, context){
return context.getElementsByTagName(match[1]);
}
},
preFilter: {
CLASS: function(match, curLoop, inplace, result, not, isXML){
match = " " + match[1].replace(/\\/g, "") + " ";

if ( isXML ) {
return match;
}

for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
if ( elem ) {
if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
if ( !inplace )
result.push( elem );
} else if ( inplace ) {
curLoop[i] = false;
}
}
}

return false;
},
ID: function(match){
return match[1].replace(/\\/g, "");
},
TAG: function(match, curLoop){
for ( var i = 0; curLoop[i] === false; i++ ){}
return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
},
CHILD: function(match){
if ( match[1] == "nth" ) {
var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

match[2] = (test[1] + (test[2] || 1)) - 0;
match[3] = test[3] - 0;
}

match[0] = done++;

return match;
},
ATTR: function(match, curLoop, inplace, result, not, isXML){
var name = match[1].replace(/\\/g, "");

if ( !isXML && Expr.attrMap[name] ) {
match[1] = Expr.attrMap[name];
}

if ( match[2] === "~=" ) {
match[4] = " " + match[4] + " ";
}

return match;
},
PSEUDO: function(match, curLoop, inplace, result, not){
if ( match[1] === "not" ) {
if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
match[3] = Sizzle(match[3], null, null, curLoop);
} else {
var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
if ( !inplace ) {
result.push.apply( result, ret );
}
return false;
}
} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
return true;
}

return match;
},
POS: function(match){
match.unshift( true );
return match;
}
},
filters: {
enabled: function(elem){
return elem.disabled === false && elem.type !== "hidden";
},
disabled: function(elem){
return elem.disabled === true;
},
checked: function(elem){
return elem.checked === true;
},
selected: function(elem){
elem.parentNode.selectedIndex;
return elem.selected === true;
},
parent: function(elem){
return !!elem.firstChild;
},
empty: function(elem){
return !elem.firstChild;
},
has: function(elem, i, match){
return !!Sizzle( match[3], elem ).length;
},
header: function(elem){
return /h\d/i.test( elem.nodeName );
},
text: function(elem){
return "text" === elem.type;
},
radio: function(elem){
return "radio" === elem.type;
},
checkbox: function(elem){
return "checkbox" === elem.type;
},
file: function(elem){
return "file" === elem.type;
},
password: function(elem){
return "password" === elem.type;
},
submit: function(elem){
return "submit" === elem.type;
},
image: function(elem){
return "image" === elem.type;
},
reset: function(elem){
return "reset" === elem.type;
},
button: function(elem){
return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
},
input: function(elem){
return /input|select|textarea|button/i.test(elem.nodeName);
}
},
setFilters: {
first: function(elem, i){
return i === 0;
},
last: function(elem, i, match, array){
return i === array.length - 1;
},
even: function(elem, i){
return i % 2 === 0;
},
odd: function(elem, i){
return i % 2 === 1;
},
lt: function(elem, i, match){
return i < match[3] - 0;
},
gt: function(elem, i, match){
return i > match[3] - 0;
},
nth: function(elem, i, match){
return match[3] - 0 == i;
},
eq: function(elem, i, match){
return match[3] - 0 == i;
}
},
filter: {
PSEUDO: function(elem, match, i, array){
var name = match[1], filter = Expr.filters[ name ];

if ( filter ) {
return filter( elem, i, match, array );
} else if ( name === "contains" ) {
return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
} else if ( name === "not" ) {
var not = match[3];

for ( var i = 0, l = not.length; i < l; i++ ) {
if ( not[i] === elem ) {
return false;
}
}

return true;
}
},
CHILD: function(elem, match){
var type = match[1], node = elem;
switch (type) {
case 'only':
case 'first':
while ( (node = node.previousSibling) )  {
if ( node.nodeType === 1 ) return false;
}
if ( type == 'first') return true;
node = elem;
case 'last':
while ( (node = node.nextSibling) )  {
if ( node.nodeType === 1 ) return false;
}
return true;
case 'nth':
var first = match[2], last = match[3];

if ( first == 1 && last == 0 ) {
return true;
}

var doneName = match[0],
parent = elem.parentNode;

if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
var count = 0;
for ( node = parent.firstChild; node; node = node.nextSibling ) {
if ( node.nodeType === 1 ) {
node.nodeIndex = ++count;
}
}
parent.sizcache = doneName;
}

var diff = elem.nodeIndex - last;
if ( first == 0 ) {
return diff == 0;
} else {
return ( diff % first == 0 && diff / first >= 0 );
}
}
},
ID: function(elem, match){
return elem.nodeType === 1 && elem.getAttribute("id") === match;
},
TAG: function(elem, match){
return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
},
CLASS: function(elem, match){
return (" " + (elem.className || elem.getAttribute("class")) + " ")
.indexOf( match ) > -1;
},
ATTR: function(elem, match){
var name = match[1],
result = Expr.attrHandle[ name ] ?
Expr.attrHandle[ name ]( elem ) :
elem[ name ] != null ?
elem[ name ] :
elem.getAttribute( name ),
value = result + "",
type = match[2],
check = match[4];

return result == null ?
type === "!=" :
type === "=" ?
value === check :
type === "*=" ?
value.indexOf(check) >= 0 :
type === "~=" ?
(" " + value + " ").indexOf(check) >= 0 :
!check ?
value && result !== false :
type === "!=" ?
value != check :
type === "^=" ?
value.indexOf(check) === 0 :
type === "$=" ?
value.substr(value.length - check.length) === check :
type === "|=" ?
value === check || value.substr(0, check.length + 1) === check + "-" :
false;
},
POS: function(elem, match, i, array){
var name = match[2], filter = Expr.setFilters[ name ];

if ( filter ) {
return filter( elem, i, match, array );
}
}
}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source );
}

var makeArray = function(array, results) {
array = Array.prototype.slice.call( array, 0 );

if ( results ) {
results.push.apply( results, array );
return results;
}

return array;
};

try {
Array.prototype.slice.call( document.documentElement.childNodes, 0 );

} catch(e){
makeArray = function(array, results) {
var ret = results || [];

if ( toString.call(array) === "[object Array]" ) {
Array.prototype.push.apply( ret, array );
} else {
if ( typeof array.length === "number" ) {
for ( var i = 0, l = array.length; i < l; i++ ) {
ret.push( array[i] );
}
} else {
for ( var i = 0; array[i]; i++ ) {
ret.push( array[i] );
}
}
}

return ret;
};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
sortOrder = function( a, b ) {
if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
if ( a == b ) {
hasDuplicate = true;
}
return 0;
}

var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
if ( ret === 0 ) {
hasDuplicate = true;
}
return ret;
};
} else if ( "sourceIndex" in document.documentElement ) {
sortOrder = function( a, b ) {
if ( !a.sourceIndex || !b.sourceIndex ) {
if ( a == b ) {
hasDuplicate = true;
}
return 0;
}

var ret = a.sourceIndex - b.sourceIndex;
if ( ret === 0 ) {
hasDuplicate = true;
}
return ret;
};
} else if ( document.createRange ) {
sortOrder = function( a, b ) {
if ( !a.ownerDocument || !b.ownerDocument ) {
if ( a == b ) {
hasDuplicate = true;
}
return 0;
}

var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
aRange.setStart(a, 0);
aRange.setEnd(a, 0);
bRange.setStart(b, 0);
bRange.setEnd(b, 0);
var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
if ( ret === 0 ) {
hasDuplicate = true;
}
return ret;
};
}

(function(){
var form = document.createElement("div"),
id = "script" + (new Date).getTime();
form.innerHTML = "<a name='" + id + "'/>";

var root = document.documentElement;
root.insertBefore( form, root.firstChild );

if ( !!document.getElementById( id ) ) {
Expr.find.ID = function(match, context, isXML){
if ( typeof context.getElementById !== "undefined" && !isXML ) {
var m = context.getElementById(match[1]);
return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
}
};

Expr.filter.ID = function(elem, match){
var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
return elem.nodeType === 1 && node && node.nodeValue === match;
};
}

root.removeChild( form );
root = form = null; // release memory in IE
})();

(function(){

var div = document.createElement("div");
div.appendChild( document.createComment("") );

if ( div.getElementsByTagName("*").length > 0 ) {
Expr.find.TAG = function(match, context){
var results = context.getElementsByTagName(match[1]);

if ( match[1] === "*" ) {
var tmp = [];

for ( var i = 0; results[i]; i++ ) {
if ( results[i].nodeType === 1 ) {
tmp.push( results[i] );
}
}

results = tmp;
}

return results;
};
}

div.innerHTML = "<a href='#'></a>";
if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
div.firstChild.getAttribute("href") !== "#" ) {
Expr.attrHandle.href = function(elem){
return elem.getAttribute("href", 2);
};
}

div = null; // release memory in IE
})();

if ( document.querySelectorAll ) (function(){
var oldSizzle = Sizzle, div = document.createElement("div");
div.innerHTML = "<p class='TEST'></p>";

if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
return;
}

Sizzle = function(query, context, extra, seed){
context = context || document;

if ( !seed && context.nodeType === 9 && !isXML(context) ) {
try {
return makeArray( context.querySelectorAll(query), extra );
} catch(e){}
}

return oldSizzle(query, context, extra, seed);
};

for ( var prop in oldSizzle ) {
Sizzle[ prop ] = oldSizzle[ prop ];
}

div = null; // release memory in IE
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
var div = document.createElement("div");
div.innerHTML = "<div class='test e'></div><div class='test'></div>";

if ( div.getElementsByClassName("e").length === 0 )
return;

div.lastChild.className = "e";

if ( div.getElementsByClassName("e").length === 1 )
return;

Expr.order.splice(1, 0, "CLASS");
Expr.find.CLASS = function(match, context, isXML) {
if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
return context.getElementsByClassName(match[1]);
}
};

div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
var sibDir = dir == "previousSibling" && !isXML;
for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
if ( sibDir && elem.nodeType === 1 ){
elem.sizcache = doneName;
elem.sizset = i;
}
elem = elem[dir];
var match = false;

while ( elem ) {
if ( elem.sizcache === doneName ) {
match = checkSet[elem.sizset];
break;
}

if ( elem.nodeType === 1 && !isXML ){
elem.sizcache = doneName;
elem.sizset = i;
}

if ( elem.nodeName === cur ) {
match = elem;
break;
}

elem = elem[dir];
}

checkSet[i] = match;
}
}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
var sibDir = dir == "previousSibling" && !isXML;
for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
if ( sibDir && elem.nodeType === 1 ) {
elem.sizcache = doneName;
elem.sizset = i;
}
elem = elem[dir];
var match = false;

while ( elem ) {
if ( elem.sizcache === doneName ) {
match = checkSet[elem.sizset];
break;
}

if ( elem.nodeType === 1 ) {
if ( !isXML ) {
elem.sizcache = doneName;
elem.sizset = i;
}
if ( typeof cur !== "string" ) {
if ( elem === cur ) {
match = true;
break;
}

} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
match = elem;
break;
}
}

elem = elem[dir];
}

checkSet[i] = match;
}
}
}

var contains = document.compareDocumentPosition ?  function(a, b){
return a.compareDocumentPosition(b) & 16;
} : function(a, b){
return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
!!elem.ownerDocument && elem.ownerDocument.documentElement.nodeName !== "HTML";
};

var posProcess = function(selector, context){
var tmpSet = [], later = "", match,
root = context.nodeType ? [context] : context;

while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
later += match[0];
selector = selector.replace( Expr.match.PSEUDO, "" );
}

selector = Expr.relative[selector] ? selector + "*" : selector;

for ( var i = 0, l = root.length; i < l; i++ ) {
Sizzle( selector, root[i], tmpSet );
}

return Sizzle.filter( later, tmpSet );
};


window.Sizzle = Sizzle;

})();

Prototype._original_property = window.Sizzle;

;(function(engine) {
var extendElements = Prototype.Selector.extendElements;

function select(selector, scope) {
return extendElements(engine(selector, scope || document));
}

function match(element, selector) {
return engine.matches(selector, [element]).length == 1;
}

Prototype.Selector.engine = engine;
Prototype.Selector.select = select;
Prototype.Selector.match = match;
})(Sizzle);

window.Sizzle = Prototype._original_property;
delete Prototype._original_property;

var Form = {
reset: function(form) {
form = $(form);
form.reset();
return form;
},

serializeElements: function(elements, options) {
if (typeof options != 'object') options = { hash: !!options };
else if (Object.isUndefined(options.hash)) options.hash = true;
var key, value, submitted = false, submit = options.submit, accumulator, initial;

if (options.hash) {
initial = {};
accumulator = function(result, key, value) {
if (key in result) {
if (!Object.isArray(result[key])) result[key] = [result[key]];
result[key].push(value);
} else result[key] = value;
return result;
};
} else {
initial = '';
accumulator = function(result, key, value) {
return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
}
}

return elements.inject(initial, function(result, element) {
if (!element.disabled && element.name) {
key = element.name; value = $(element).getValue();
if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted &&
submit !== false && (!submit || key == submit) && (submitted = true)))) {
result = accumulator(result, key, value);
}
}
return result;
});
}
};

Form.Methods = {
serialize: function(form, options) {
return Form.serializeElements(Form.getElements(form), options);
},

getElements: function(form) {
var elements = $(form).getElementsByTagName('*'),
element,
arr = [ ],
serializers = Form.Element.Serializers;
for (var i = 0; element = elements[i]; i++) {
arr.push(element);
}
return arr.inject([], function(elements, child) {
if (serializers[child.tagName.toLowerCase()])
elements.push(Element.extend(child));
return elements;
})
},

getInputs: function(form, typeName, name) {
form = $(form);
var inputs = form.getElementsByTagName('input');

if (!typeName && !name) return $A(inputs).map(Element.extend);

for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
var input = inputs[i];
if ((typeName && input.type != typeName) || (name && input.name != name))
continue;
matchingInputs.push(Element.extend(input));
}

return matchingInputs;
},

disable: function(form) {
form = $(form);
Form.getElements(form).invoke('disable');
return form;
},

enable: function(form) {
form = $(form);
Form.getElements(form).invoke('enable');
return form;
},

findFirstElement: function(form) {
var elements = $(form).getElements().findAll(function(element) {
return 'hidden' != element.type && !element.disabled;
});
var firstByIndex = elements.findAll(function(element) {
return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
}).sortBy(function(element) { return element.tabIndex }).first();

return firstByIndex ? firstByIndex : elements.find(function(element) {
return /^(?:input|select|textarea)$/i.test(element.tagName);
});
},

focusFirstElement: function(form) {
form = $(form);
var element = form.findFirstElement();
if (element) element.activate();
return form;
},

request: function(form, options) {
form = $(form), options = Object.clone(options || { });

var params = options.parameters, action = form.readAttribute('action') || '';
if (action.blank()) action = window.location.href;
options.parameters = form.serialize(true);

if (params) {
if (Object.isString(params)) params = params.toQueryParams();
Object.extend(options.parameters, params);
}

if (form.hasAttribute('method') && !options.method)
options.method = form.method;

return new Ajax.Request(action, options);
}
};

/*--------------------------------------------------------------------------*/


Form.Element = {
focus: function(element) {
$(element).focus();
return element;
},

select: function(element) {
$(element).select();
return element;
}
};

Form.Element.Methods = {

serialize: function(element) {
element = $(element);
if (!element.disabled && element.name) {
var value = element.getValue();
if (value != undefined) {
var pair = { };
pair[element.name] = value;
return Object.toQueryString(pair);
}
}
return '';
},

getValue: function(element) {
element = $(element);
var method = element.tagName.toLowerCase();
return Form.Element.Serializers[method](element);
},

setValue: function(element, value) {
element = $(element);
var method = element.tagName.toLowerCase();
Form.Element.Serializers[method](element, value);
return element;
},

clear: function(element) {
$(element).value = '';
return element;
},

present: function(element) {
return $(element).value != '';
},

activate: function(element) {
element = $(element);
try {
element.focus();
if (element.select && (element.tagName.toLowerCase() != 'input' ||
!(/^(?:button|reset|submit)$/i.test(element.type))))
element.select();
} catch (e) { }
return element;
},

disable: function(element) {
element = $(element);
element.disabled = true;
return element;
},

enable: function(element) {
element = $(element);
element.disabled = false;
return element;
}
};

/*--------------------------------------------------------------------------*/

var Field = Form.Element;

var $F = Form.Element.Methods.getValue;

/*--------------------------------------------------------------------------*/

Form.Element.Serializers = (function() {
function input(element, value) {
switch (element.type.toLowerCase()) {
case 'checkbox':
case 'radio':
return inputSelector(element, value);
default:
return valueSelector(element, value);
}
}

function inputSelector(element, value) {
if (Object.isUndefined(value))
return element.checked ? element.value : null;
else element.checked = !!value;
}

function valueSelector(element, value) {
if (Object.isUndefined(value)) return element.value;
else element.value = value;
}

function select(element, value) {
if (Object.isUndefined(value))
return (element.type === 'select-one' ? selectOne : selectMany)(element);

var opt, currentValue, single = !Object.isArray(value);
for (var i = 0, length = element.length; i < length; i++) {
opt = element.options[i];
currentValue = this.optionValue(opt);
if (single) {
if (currentValue == value) {
opt.selected = true;
return;
}
}
else opt.selected = value.include(currentValue);
}
}

function selectOne(element) {
var index = element.selectedIndex;
return index >= 0 ? optionValue(element.options[index]) : null;
}

function selectMany(element) {
var values, length = element.length;
if (!length) return null;

for (var i = 0, values = []; i < length; i++) {
var opt = element.options[i];
if (opt.selected) values.push(optionValue(opt));
}
return values;
}

function optionValue(opt) {
return Element.hasAttribute(opt, 'value') ? opt.value : opt.text;
}

return {
input:         input,
inputSelector: inputSelector,
textarea:      valueSelector,
select:        select,
selectOne:     selectOne,
selectMany:    selectMany,
optionValue:   optionValue,
button:        valueSelector
};
})();

/*--------------------------------------------------------------------------*/


Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
initialize: function($super, element, frequency, callback) {
$super(callback, frequency);
this.element   = $(element);
this.lastValue = this.getValue();
},

execute: function() {
var value = this.getValue();
if (Object.isString(this.lastValue) && Object.isString(value) ?
this.lastValue != value : String(this.lastValue) != String(value)) {
this.callback(this.element, value);
this.lastValue = value;
}
}
});

Form.Element.Observer = Class.create(Abstract.TimedObserver, {
getValue: function() {
return Form.Element.getValue(this.element);
}
});

Form.Observer = Class.create(Abstract.TimedObserver, {
getValue: function() {
return Form.serialize(this.element);
}
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = Class.create({
initialize: function(element, callback) {
this.element  = $(element);
this.callback = callback;

this.lastValue = this.getValue();
if (this.element.tagName.toLowerCase() == 'form')
this.registerFormCallbacks();
else
this.registerCallback(this.element);
},

onElementEvent: function() {
var value = this.getValue();
if (this.lastValue != value) {
this.callback(this.element, value);
this.lastValue = value;
}
},

registerFormCallbacks: function() {
Form.getElements(this.element).each(this.registerCallback, this);
},

registerCallback: function(element) {
if (element.type) {
switch (element.type.toLowerCase()) {
case 'checkbox':
case 'radio':
Event.observe(element, 'click', this.onElementEvent.bind(this));
break;
default:
Event.observe(element, 'change', this.onElementEvent.bind(this));
break;
}
}
}
});

Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
getValue: function() {
return Form.Element.getValue(this.element);
}
});

Form.EventObserver = Class.create(Abstract.EventObserver, {
getValue: function() {
return Form.serialize(this.element);
}
});
(function() {

var Event = {
KEY_BACKSPACE: 8,
KEY_TAB:       9,
KEY_RETURN:   13,
KEY_ESC:      27,
KEY_LEFT:     37,
KEY_UP:       38,
KEY_RIGHT:    39,
KEY_DOWN:     40,
KEY_DELETE:   46,
KEY_HOME:     36,
KEY_END:      35,
KEY_PAGEUP:   33,
KEY_PAGEDOWN: 34,
KEY_INSERT:   45,

cache: {}
};

var docEl = document.documentElement;
var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
&& 'onmouseleave' in docEl;



var isIELegacyEvent = function(event) { return false; };

if (window.attachEvent) {
if (window.addEventListener) {
isIELegacyEvent = function(event) {
return !(event instanceof window.Event);
};
} else {
isIELegacyEvent = function(event) { return true; };
}
}

var _isButton;

function _isButtonForDOMEvents(event, code) {
return event.which ? (event.which === code + 1) : (event.button === code);
}

var legacyButtonMap = { 0: 1, 1: 4, 2: 2 };
function _isButtonForLegacyEvents(event, code) {
return event.button === legacyButtonMap[code];
}

function _isButtonForWebKit(event, code) {
switch (code) {
case 0: return event.which == 1 && !event.metaKey;
case 1: return event.which == 2 || (event.which == 1 && event.metaKey);
case 2: return event.which == 3;
default: return false;
}
}

if (window.attachEvent) {
if (!window.addEventListener) {
_isButton = _isButtonForLegacyEvents;
} else {
_isButton = function(event, code) {
return isIELegacyEvent(event) ? _isButtonForLegacyEvents(event, code) :
_isButtonForDOMEvents(event, code);
}
}
} else if (Prototype.Browser.WebKit) {
_isButton = _isButtonForWebKit;
} else {
_isButton = _isButtonForDOMEvents;
}

function isLeftClick(event)   { return _isButton(event, 0) }

function isMiddleClick(event) { return _isButton(event, 1) }

function isRightClick(event)  { return _isButton(event, 2) }

function element(event) {
event = Event.extend(event);

var node = event.target, type = event.type,
currentTarget = event.currentTarget;

if (currentTarget && currentTarget.tagName) {
if (type === 'load' || type === 'error' ||
(type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
&& currentTarget.type === 'radio'))
node = currentTarget;
}

if (node.nodeType == Node.TEXT_NODE)
node = node.parentNode;

return Element.extend(node);
}

function findElement(event, expression) {
var element = Event.element(event);

if (!expression) return element;
while (element) {
if (Object.isElement(element) && Prototype.Selector.match(element, expression)) {
return Element.extend(element);
}
element = element.parentNode;
}
}

function pointer(event) {
return { x: pointerX(event), y: pointerY(event) };
}

function pointerX(event) {
var docElement = document.documentElement,
body = document.body || { scrollLeft: 0 };

return event.pageX || (event.clientX +
(docElement.scrollLeft || body.scrollLeft) -
(docElement.clientLeft || 0));
}

function pointerY(event) {
var docElement = document.documentElement,
body = document.body || { scrollTop: 0 };

return  event.pageY || (event.clientY +
(docElement.scrollTop || body.scrollTop) -
(docElement.clientTop || 0));
}


function stop(event) {
Event.extend(event);
event.preventDefault();
event.stopPropagation();

event.stopped = true;
}


Event.Methods = {
isLeftClick:   isLeftClick,
isMiddleClick: isMiddleClick,
isRightClick:  isRightClick,

element:     element,
findElement: findElement,

pointer:  pointer,
pointerX: pointerX,
pointerY: pointerY,

stop: stop
};

var methods = Object.keys(Event.Methods).inject({ }, function(m, name) {
m[name] = Event.Methods[name].methodize();
return m;
});

if (window.attachEvent) {
function _relatedTarget(event) {
var element;
switch (event.type) {
case 'mouseover':
case 'mouseenter':
element = event.fromElement;
break;
case 'mouseout':
case 'mouseleave':
element = event.toElement;
break;
default:
return null;
}
return Element.extend(element);
}

var additionalMethods = {
stopPropagation: function() { this.cancelBubble = true },
preventDefault:  function() { this.returnValue = false },
inspect: function() { return '[object Event]' }
};

Event.extend = function(event, element) {
if (!event) return false;

if (!isIELegacyEvent(event)) return event;

if (event._extendedByPrototype) return event;
event._extendedByPrototype = Prototype.emptyFunction;

var pointer = Event.pointer(event);

Object.extend(event, {
target: event.srcElement || element,
relatedTarget: _relatedTarget(event),
pageX:  pointer.x,
pageY:  pointer.y
});

Object.extend(event, methods);
Object.extend(event, additionalMethods);

return event;
};
} else {
Event.extend = Prototype.K;
}

if (window.addEventListener) {
Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
Object.extend(Event.prototype, methods);
}

function _createResponder(element, eventName, handler) {
var registry = Element.retrieve(element, 'prototype_event_registry');

if (Object.isUndefined(registry)) {
CACHE.push(element);
registry = Element.retrieve(element, 'prototype_event_registry', $H());
}

var respondersForEvent = registry.get(eventName);
if (Object.isUndefined(respondersForEvent)) {
respondersForEvent = [];
registry.set(eventName, respondersForEvent);
}

if (respondersForEvent.pluck('handler').include(handler)) return false;

var responder;
if (eventName.include(":")) {
responder = function(event) {
if (Object.isUndefined(event.eventName))
return false;

if (event.eventName !== eventName)
return false;

Event.extend(event, element);
handler.call(element, event);
};
} else {
if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED &&
(eventName === "mouseenter" || eventName === "mouseleave")) {
if (eventName === "mouseenter" || eventName === "mouseleave") {
responder = function(event) {
Event.extend(event, element);

var parent = event.relatedTarget;
while (parent && parent !== element) {
try { parent = parent.parentNode; }
catch(e) { parent = element; }
}

if (parent === element) return;

handler.call(element, event);
};
}
} else {
responder = function(event) {
Event.extend(event, element);
handler.call(element, event);
};
}
}

responder.handler = handler;
respondersForEvent.push(responder);
return responder;
}

function _destroyCache() {
for (var i = 0, length = CACHE.length; i < length; i++) {
Event.stopObserving(CACHE[i]);
CACHE[i] = null;
}
}

var CACHE = [];

if (Prototype.Browser.IE)
window.attachEvent('onunload', _destroyCache);

if (Prototype.Browser.WebKit)
window.addEventListener('unload', Prototype.emptyFunction, false);


var _getDOMEventName = Prototype.K,
translations = { mouseenter: "mouseover", mouseleave: "mouseout" };

if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
_getDOMEventName = function(eventName) {
return (translations[eventName] || eventName);
};
}

function observe(element, eventName, handler) {
element = $(element);

var responder = _createResponder(element, eventName, handler);

if (!responder) return element;

if (eventName.include(':')) {
if (element.addEventListener)
element.addEventListener("dataavailable", responder, false);
else {
element.attachEvent("ondataavailable", responder);
element.attachEvent("onlosecapture", responder);
}
} else {
var actualEventName = _getDOMEventName(eventName);

if (element.addEventListener)
element.addEventListener(actualEventName, responder, false);
else
element.attachEvent("on" + actualEventName, responder);
}

return element;
}

function stopObserving(element, eventName, handler) {
element = $(element);

var registry = Element.retrieve(element, 'prototype_event_registry');
if (!registry) return element;

if (!eventName) {
registry.each( function(pair) {
var eventName = pair.key;
stopObserving(element, eventName);
});
return element;
}

var responders = registry.get(eventName);
if (!responders) return element;

if (!handler) {
responders.each(function(r) {
stopObserving(element, eventName, r.handler);
});
return element;
}

var i = responders.length, responder;
while (i--) {
if (responders[i].handler === handler) {
responder = responders[i];
break;
}
}
if (!responder) return element;

if (eventName.include(':')) {
if (element.removeEventListener)
element.removeEventListener("dataavailable", responder, false);
else {
element.detachEvent("ondataavailable", responder);
element.detachEvent("onlosecapture", responder);
}
} else {
var actualEventName = _getDOMEventName(eventName);
if (element.removeEventListener)
element.removeEventListener(actualEventName, responder, false);
else
element.detachEvent('on' + actualEventName, responder);
}

registry.set(eventName, responders.without(responder));

return element;
}

function fire(element, eventName, memo, bubble) {
element = $(element);

if (Object.isUndefined(bubble))
bubble = true;

if (element == document && document.createEvent && !element.dispatchEvent)
element = document.documentElement;

var event;
if (document.createEvent) {
event = document.createEvent('HTMLEvents');
event.initEvent('dataavailable', bubble, true);
} else {
event = document.createEventObject();
event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
}

event.eventName = eventName;
event.memo = memo || { };

if (document.createEvent)
element.dispatchEvent(event);
else
element.fireEvent(event.eventType, event);

return Event.extend(event);
}

Event.Handler = Class.create({
initialize: function(element, eventName, selector, callback) {
this.element   = $(element);
this.eventName = eventName;
this.selector  = selector;
this.callback  = callback;
this.handler   = this.handleEvent.bind(this);
},

start: function() {
Event.observe(this.element, this.eventName, this.handler);
return this;
},

stop: function() {
Event.stopObserving(this.element, this.eventName, this.handler);
return this;
},

handleEvent: function(event) {
var element = Event.findElement(event, this.selector);
if (element) this.callback.call(this.element, event, element);
}
});

function on(element, eventName, selector, callback) {
element = $(element);
if (Object.isFunction(selector) && Object.isUndefined(callback)) {
callback = selector, selector = null;
}

return new Event.Handler(element, eventName, selector, callback).start();
}

Object.extend(Event, Event.Methods);

Object.extend(Event, {
fire:          fire,
observe:       observe,
stopObserving: stopObserving,
on:            on
});

Element.addMethods({
fire:          fire,

observe:       observe,

stopObserving: stopObserving,

on:            on
});

Object.extend(document, {
fire:          fire.methodize(),

observe:       observe.methodize(),

stopObserving: stopObserving.methodize(),

on:            on.methodize(),

loaded:        false
});

if (window.Event) Object.extend(window.Event, Event);
else window.Event = Event;
})();

(function() {
/* Support for the DOMContentLoaded event is based on work by Dan Webb,
Matthias Miller, Dean Edwards, John Resig, and Diego Perini. */

var timer;

function fireContentLoadedEvent() {
if (document.loaded) return;
if (timer) window.clearTimeout(timer);
document.loaded = true;
document.fire('dom:loaded');
}

function checkReadyState() {
if (document.readyState === 'complete') {
document.stopObserving('readystatechange', checkReadyState);
fireContentLoadedEvent();
}
}

function pollDoScroll() {
try { document.documentElement.doScroll('left'); }
catch(e) {
timer = pollDoScroll.defer();
return;
}
fireContentLoadedEvent();
}

if (document.addEventListener) {
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
} else {
document.observe('readystatechange', checkReadyState);
if (window == top)
timer = pollDoScroll.defer();
}

Event.observe(window, 'load', fireContentLoadedEvent);
})();


Element.addMethods();
/*------------------------------- DEPRECATED -------------------------------*/

Hash.toQueryString = Object.toQueryString;

var Toggle = { display: Element.toggle };

Element.Methods.childOf = Element.Methods.descendantOf;

var Insertion = {
Before: function(element, content) {
return Element.insert(element, {before:content});
},

Top: function(element, content) {
return Element.insert(element, {top:content});
},

Bottom: function(element, content) {
return Element.insert(element, {bottom:content});
},

After: function(element, content) {
return Element.insert(element, {after:content});
}
};

var $continue = new Error('"throw $continue" is deprecated, use "return" instead');

var Position = {
includeScrollOffsets: false,

prepare: function() {
this.deltaX =  window.pageXOffset
|| document.documentElement.scrollLeft
|| document.body.scrollLeft
|| 0;
this.deltaY =  window.pageYOffset
|| document.documentElement.scrollTop
|| document.body.scrollTop
|| 0;
},

within: function(element, x, y) {
if (this.includeScrollOffsets)
return this.withinIncludingScrolloffsets(element, x, y);
this.xcomp = x;
this.ycomp = y;
this.offset = Element.cumulativeOffset(element);

return (y >= this.offset[1] &&
y <  this.offset[1] + element.offsetHeight &&
x >= this.offset[0] &&
x <  this.offset[0] + element.offsetWidth);
},

withinIncludingScrolloffsets: function(element, x, y) {
var offsetcache = Element.cumulativeScrollOffset(element);

this.xcomp = x + offsetcache[0] - this.deltaX;
this.ycomp = y + offsetcache[1] - this.deltaY;
this.offset = Element.cumulativeOffset(element);

return (this.ycomp >= this.offset[1] &&
this.ycomp <  this.offset[1] + element.offsetHeight &&
this.xcomp >= this.offset[0] &&
this.xcomp <  this.offset[0] + element.offsetWidth);
},

overlap: function(mode, element) {
if (!mode) return 0;
if (mode == 'vertical')
return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
element.offsetHeight;
if (mode == 'horizontal')
return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
element.offsetWidth;
},


cumulativeOffset: Element.Methods.cumulativeOffset,

positionedOffset: Element.Methods.positionedOffset,

absolutize: function(element) {
Position.prepare();
return Element.absolutize(element);
},

relativize: function(element) {
Position.prepare();
return Element.relativize(element);
},

realOffset: Element.Methods.cumulativeScrollOffset,

offsetParent: Element.Methods.getOffsetParent,

page: Element.Methods.viewportOffset,

clone: function(source, target, options) {
options = options || { };
return Element.clonePosition(target, source, options);
}
};

/*--------------------------------------------------------------------------*/

if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods){
function iter(name) {
return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
}

instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ?
function(element, className) {
className = className.toString().strip();
var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
} : function(element, className) {
className = className.toString().strip();
var elements = [], classNames = (/\s/.test(className) ? $w(className) : null);
if (!classNames && !className) return elements;

var nodes = $(element).getElementsByTagName('*');
className = ' ' + className + ' ';

for (var i = 0, child, cn; child = nodes[i]; i++) {
if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) ||
(classNames && classNames.all(function(name) {
return !name.toString().blank() && cn.include(' ' + name + ' ');
}))))
elements.push(Element.extend(child));
}
return elements;
};

return function(className, parentElement) {
return $(parentElement || document.body).getElementsByClassName(className);
};
}(Element.Methods);

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
initialize: function(element) {
this.element = $(element);
},

_each: function(iterator) {
this.element.className.split(/\s+/).select(function(name) {
return name.length > 0;
})._each(iterator);
},

set: function(className) {
this.element.className = className;
},

add: function(classNameToAdd) {
if (this.include(classNameToAdd)) return;
this.set($A(this).concat(classNameToAdd).join(' '));
},

remove: function(classNameToRemove) {
if (!this.include(classNameToRemove)) return;
this.set($A(this).without(classNameToRemove).join(' '));
},

toString: function() {
return $A(this).join(' ');
}
};

Object.extend(Element.ClassNames.prototype, Enumerable);

/*--------------------------------------------------------------------------*/

(function() {
window.Selector = Class.create({
initialize: function(expression) {
this.expression = expression.strip();
},

findElements: function(rootElement) {
return Prototype.Selector.select(this.expression, rootElement);
},

match: function(element) {
return Prototype.Selector.match(element, this.expression);
},

toString: function() {
return this.expression;
},

inspect: function() {
return "#<Selector: " + this.expression + ">";
}
});

Object.extend(Selector, {
matchElements: function(elements, expression) {
var match = Prototype.Selector.match,
results = [];

for (var i = 0, length = elements.length; i < length; i++) {
var element = elements[i];
if (match(element, expression)) {
results.push(Element.extend(element));
}
}
return results;
},

findElement: function(elements, expression, index) {
index = index || 0;
var matchIndex = 0, element;
for (var i = 0, length = elements.length; i < length; i++) {
element = elements[i];
if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
return Element.extend(element);
}
}
},

findChildElements: function(element, expressions) {
var selector = expressions.toArray().join(', ');
return Prototype.Selector.select(selector, element || document);
}
});
})();
// script.aculo.us scriptaculous.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Scriptaculous = {
Version: '1.9.0',
require: function(libraryName) {
try{
// inserting via DOM fails in Safari 2.0, so brute force approach
document.write('<script type="text/javascript" src="'+libraryName+'"><\/script>');
} catch(e) {
// for xhtml+xml served content, fall back to DOM methods
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = libraryName;
document.getElementsByTagName('head')[0].appendChild(script);
}
},
REQUIRED_PROTOTYPE: '1.6.0.3',
load: function() {
function convertVersionString(versionString) {
var v = versionString.replace(/_.*|\./g, '');
v = parseInt(v + '0'.times(4-v.length));
return versionString.indexOf('_') > -1 ? v-1 : v;
}

if((typeof Prototype=='undefined') ||
(typeof Element == 'undefined') ||
(typeof Element.Methods=='undefined') ||
(convertVersionString(Prototype.Version) <
convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))
throw("script.aculo.us requires the Prototype JavaScript framework >= " +
Scriptaculous.REQUIRED_PROTOTYPE);

var js = /scriptaculous\.js(\?.*)?$/;
$$('script[src]').findAll(function(s) {
return s.src.match(js);
}).each(function(s) {
var path = s.src.replace(js, ''),
includes = s.src.match(/\?.*load=([a-z,]*)/);
(includes ? includes[1] : 'builder,effects,dragdrop,controls,slider,sound').split(',').each(
function(include) { Scriptaculous.require(path+include+'.js') });
});
}
};

Scriptaculous.load();
// script.aculo.us effects.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
var color = '#';
if (this.slice(0,4) == 'rgb(') {
var cols = this.slice(4,this.length-1).split(',');
var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
} else {
if (this.slice(0,1) == '#') {
if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
if (this.length==7) color = this.toLowerCase();
}
}
return (color.length==7 ? color : (arguments[0] || this));
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {
return $A($(element).childNodes).collect( function(node) {
return (node.nodeType==3 ? node.nodeValue :
(node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
}).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {
return $A($(element).childNodes).collect( function(node) {
return (node.nodeType==3 ? node.nodeValue :
((node.hasChildNodes() && !Element.hasClassName(node,className)) ?
Element.collectTextNodesIgnoreClass(node, className) : ''));
}).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
element = $(element);
element.setStyle({fontSize: (percent/100) + 'em'});
if (Prototype.Browser.WebKit) window.scrollBy(0,0);
return element;
};

Element.getInlineOpacity = function(element){
return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
try {
element = $(element);
var n = document.createTextNode(' ');
element.appendChild(n);
element.removeChild(n);
} catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
_elementDoesNotExistError: {
name: 'ElementDoesNotExistError',
message: 'The specified DOM element does not exist, but is required for this effect to operate'
},
Transitions: {
linear: Prototype.K,
sinoidal: function(pos) {
return (-Math.cos(pos*Math.PI)/2) + .5;
},
reverse: function(pos) {
return 1-pos;
},
flicker: function(pos) {
var pos = ((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
return pos > 1 ? 1 : pos;
},
wobble: function(pos) {
return (-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
},
pulse: function(pos, pulses) {
return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
},
spring: function(pos) {
return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
},
none: function(pos) {
return 0;
},
full: function(pos) {
return 1;
}
},
DefaultOptions: {
duration:   1.0,   // seconds
fps:        100,   // 100= assume 66fps max.
sync:       false, // true for combining
from:       0.0,
to:         1.0,
delay:      0.0,
queue:      'parallel'
},
tagifyText: function(element) {
var tagifyStyle = 'position:relative';
if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';

element = $(element);
$A(element.childNodes).each( function(child) {
if (child.nodeType==3) {
child.nodeValue.toArray().each( function(character) {
element.insertBefore(
new Element('span', {style: tagifyStyle}).update(
character == ' ' ? String.fromCharCode(160) : character),
child);
});
Element.remove(child);
}
});
},
multiple: function(element, effect) {
var elements;
if (((typeof element == 'object') ||
Object.isFunction(element)) &&
(element.length))
elements = element;
else
elements = $(element).childNodes;

var options = Object.extend({
speed: 0.1,
delay: 0.0
}, arguments[2] || { });
var masterDelay = options.delay;

$A(elements).each( function(element, index) {
new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
});
},
PAIRS: {
'slide':  ['SlideDown','SlideUp'],
'blind':  ['BlindDown','BlindUp'],
'appear': ['Appear','Fade']
},
toggle: function(element, effect, options) {
element = $(element);
effect  = (effect || 'appear').toLowerCase();

return Effect[ Effect.PAIRS[ effect ][ element.visible() ? 1 : 0 ] ](element, Object.extend({
queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
}, options || {}));
}
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
initialize: function() {
this.effects  = [];
this.interval = null;
},
_each: function(iterator) {
this.effects._each(iterator);
},
add: function(effect) {
var timestamp = new Date().getTime();

var position = Object.isString(effect.options.queue) ?
effect.options.queue : effect.options.queue.position;

switch(position) {
case 'front':
// move unstarted effects after this effect
this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
e.startOn  += effect.finishOn;
e.finishOn += effect.finishOn;
});
break;
case 'with-last':
timestamp = this.effects.pluck('startOn').max() || timestamp;
break;
case 'end':
// start effect after last queued effect has finished
timestamp = this.effects.pluck('finishOn').max() || timestamp;
break;
}

effect.startOn  += timestamp;
effect.finishOn += timestamp;

if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
this.effects.push(effect);

if (!this.interval)
this.interval = setInterval(this.loop.bind(this), 15);
},
remove: function(effect) {
this.effects = this.effects.reject(function(e) { return e==effect });
if (this.effects.length == 0) {
clearInterval(this.interval);
this.interval = null;
}
},
loop: function() {
var timePos = new Date().getTime();
for(var i=0, len=this.effects.length;i<len;i++)
this.effects[i] && this.effects[i].loop(timePos);
}
});

Effect.Queues = {
instances: $H(),
get: function(queueName) {
if (!Object.isString(queueName)) return queueName;

return this.instances.get(queueName) ||
this.instances.set(queueName, new Effect.ScopedQueue());
}
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
position: null,
start: function(options) {
if (options && options.transition === false) options.transition = Effect.Transitions.linear;
this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
this.currentFrame = 0;
this.state        = 'idle';
this.startOn      = this.options.delay*1000;
this.finishOn     = this.startOn+(this.options.duration*1000);
this.fromToDelta  = this.options.to-this.options.from;
this.totalTime    = this.finishOn-this.startOn;
this.totalFrames  = this.options.fps*this.options.duration;

this.render = (function() {
function dispatch(effect, eventName) {
if (effect.options[eventName + 'Internal'])
effect.options[eventName + 'Internal'](effect);
if (effect.options[eventName])
effect.options[eventName](effect);
}

return function(pos) {
if (this.state === "idle") {
this.state = "running";
dispatch(this, 'beforeSetup');
if (this.setup) this.setup();
dispatch(this, 'afterSetup');
}
if (this.state === "running") {
pos = (this.options.transition(pos) * this.fromToDelta) + this.options.from;
this.position = pos;
dispatch(this, 'beforeUpdate');
if (this.update) this.update(pos);
dispatch(this, 'afterUpdate');
}
};
})();

this.event('beforeStart');
if (!this.options.sync)
Effect.Queues.get(Object.isString(this.options.queue) ?
'global' : this.options.queue.scope).add(this);
},
loop: function(timePos) {
if (timePos >= this.startOn) {
if (timePos >= this.finishOn) {
this.render(1.0);
this.cancel();
this.event('beforeFinish');
if (this.finish) this.finish();
this.event('afterFinish');
return;
}
var pos   = (timePos - this.startOn) / this.totalTime,
frame = (pos * this.totalFrames).round();
if (frame > this.currentFrame) {
this.render(pos);
this.currentFrame = frame;
}
}
},
cancel: function() {
if (!this.options.sync)
Effect.Queues.get(Object.isString(this.options.queue) ?
'global' : this.options.queue.scope).remove(this);
this.state = 'finished';
},
event: function(eventName) {
if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
if (this.options[eventName]) this.options[eventName](this);
},
inspect: function() {
var data = $H();
for(property in this)
if (!Object.isFunction(this[property])) data.set(property, this[property]);
return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
}
});

Effect.Parallel = Class.create(Effect.Base, {
initialize: function(effects) {
this.effects = effects || [];
this.start(arguments[1]);
},
update: function(position) {
this.effects.invoke('render', position);
},
finish: function(position) {
this.effects.each( function(effect) {
effect.render(1.0);
effect.cancel();
effect.event('beforeFinish');
if (effect.finish) effect.finish(position);
effect.event('afterFinish');
});
}
});

Effect.Tween = Class.create(Effect.Base, {
initialize: function(object, from, to) {
object = Object.isString(object) ? $(object) : object;
var args = $A(arguments), method = args.last(),
options = args.length == 5 ? args[3] : null;
this.method = Object.isFunction(method) ? method.bind(object) :
Object.isFunction(object[method]) ? object[method].bind(object) :
function(value) { object[method] = value };
this.start(Object.extend({ from: from, to: to }, options || { }));
},
update: function(position) {
this.method(position);
}
});

Effect.Event = Class.create(Effect.Base, {
initialize: function() {
this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
},
update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
initialize: function(element) {
this.element = $(element);
if (!this.element) throw(Effect._elementDoesNotExistError);
// make this work on IE on elements without 'layout'
if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
this.element.setStyle({zoom: 1});
var options = Object.extend({
from: this.element.getOpacity() || 0.0,
to:   1.0
}, arguments[1] || { });
this.start(options);
},
update: function(position) {
this.element.setOpacity(position);
}
});

Effect.Move = Class.create(Effect.Base, {
initialize: function(element) {
this.element = $(element);
if (!this.element) throw(Effect._elementDoesNotExistError);
var options = Object.extend({
x:    0,
y:    0,
mode: 'relative'
}, arguments[1] || { });
this.start(options);
},
setup: function() {
this.element.makePositioned();
this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
if (this.options.mode == 'absolute') {
this.options.x = this.options.x - this.originalLeft;
this.options.y = this.options.y - this.originalTop;
}
},
update: function(position) {
this.element.setStyle({
left: (this.options.x  * position + this.originalLeft).round() + 'px',
top:  (this.options.y  * position + this.originalTop).round()  + 'px'
});
}
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
return new Effect.Move(element,
Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
initialize: function(element, percent) {
this.element = $(element);
if (!this.element) throw(Effect._elementDoesNotExistError);
var options = Object.extend({
scaleX: true,
scaleY: true,
scaleContent: true,
scaleFromCenter: false,
scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
scaleFrom: 100.0,
scaleTo:   percent
}, arguments[2] || { });
this.start(options);
},
setup: function() {
this.restoreAfterFinish = this.options.restoreAfterFinish || false;
this.elementPositioning = this.element.getStyle('position');

this.originalStyle = { };
['top','left','width','height','fontSize'].each( function(k) {
this.originalStyle[k] = this.element.style[k];
}.bind(this));

this.originalTop  = this.element.offsetTop;
this.originalLeft = this.element.offsetLeft;

var fontSize = this.element.getStyle('font-size') || '100%';
['em','px','%','pt'].each( function(fontSizeType) {
if (fontSize.indexOf(fontSizeType)>0) {
this.fontSize     = parseFloat(fontSize);
this.fontSizeType = fontSizeType;
}
}.bind(this));

this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;

this.dims = null;
if (this.options.scaleMode=='box')
this.dims = [this.element.offsetHeight, this.element.offsetWidth];
if (/^content/.test(this.options.scaleMode))
this.dims = [this.element.scrollHeight, this.element.scrollWidth];
if (!this.dims)
this.dims = [this.options.scaleMode.originalHeight,
this.options.scaleMode.originalWidth];
},
update: function(position) {
var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
if (this.options.scaleContent && this.fontSize)
this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
},
finish: function(position) {
if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
},
setDimensions: function(height, width) {
var d = { };
if (this.options.scaleX) d.width = width.round() + 'px';
if (this.options.scaleY) d.height = height.round() + 'px';
if (this.options.scaleFromCenter) {
var topd  = (height - this.dims[0])/2;
var leftd = (width  - this.dims[1])/2;
if (this.elementPositioning == 'absolute') {
if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
} else {
if (this.options.scaleY) d.top = -topd + 'px';
if (this.options.scaleX) d.left = -leftd + 'px';
}
}
this.element.setStyle(d);
}
});

Effect.Highlight = Class.create(Effect.Base, {
initialize: function(element) {
this.element = $(element);
if (!this.element) throw(Effect._elementDoesNotExistError);
var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
this.start(options);
},
setup: function() {
// Prevent executing on elements not in the layout flow
if (this.element.getStyle('display')=='none') { this.cancel(); return; }
// Disable background image during the effect
this.oldStyle = { };
if (!this.options.keepBackgroundImage) {
this.oldStyle.backgroundImage = this.element.getStyle('background-image');
this.element.setStyle({backgroundImage: 'none'});
}
if (!this.options.endcolor)
this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
if (!this.options.restorecolor)
this.options.restorecolor = this.element.getStyle('background-color');
// init color calculations
this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
},
update: function(position) {
this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
},
finish: function() {
this.element.setStyle(Object.extend(this.oldStyle, {
backgroundColor: this.options.restorecolor
}));
}
});

Effect.ScrollTo = function(element) {
var options = arguments[1] || { },
scrollOffsets = document.viewport.getScrollOffsets(),
elementOffsets = $(element).cumulativeOffset();

if (options.offset) elementOffsets[1] += options.offset;

return new Effect.Tween(null,
scrollOffsets.top,
elementOffsets[1],
options,
function(p){ scrollTo(scrollOffsets.left, p.round()); }
);
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
element = $(element);
var oldOpacity = element.getInlineOpacity();
var options = Object.extend({
from: element.getOpacity() || 1.0,
to:   0.0,
afterFinishInternal: function(effect) {
if (effect.options.to!=0) return;
effect.element.hide().setStyle({opacity: oldOpacity});
}
}, arguments[1] || { });
return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
element = $(element);
var options = Object.extend({
from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
to:   1.0,
// force Safari to render floated elements properly
afterFinishInternal: function(effect) {
effect.element.forceRerendering();
},
beforeSetup: function(effect) {
effect.element.setOpacity(effect.options.from).show();
}}, arguments[1] || { });
return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
element = $(element);
var oldStyle = {
opacity: element.getInlineOpacity(),
position: element.getStyle('position'),
top:  element.style.top,
left: element.style.left,
width: element.style.width,
height: element.style.height
};
return new Effect.Parallel(
[ new Effect.Scale(element, 200,
{ sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }),
new Effect.Opacity(element, { sync: true, to: 0.0 } ) ],
Object.extend({ duration: 1.0,
beforeSetupInternal: function(effect) {
Position.absolutize(effect.effects[0].element);
},
afterFinishInternal: function(effect) {
effect.effects[0].element.hide().setStyle(oldStyle); }
}, arguments[1] || { })
);
};

Effect.BlindUp = function(element) {
element = $(element);
element.makeClipping();
return new Effect.Scale(element, 0,
Object.extend({ scaleContent: false,
scaleX: false,
restoreAfterFinish: true,
afterFinishInternal: function(effect) {
effect.element.hide().undoClipping();
}
}, arguments[1] || { })
);
};

Effect.BlindDown = function(element) {
element = $(element);
var elementDimensions = element.getDimensions();
return new Effect.Scale(element, 100, Object.extend({
scaleContent: false,
scaleX: false,
scaleFrom: 0,
scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
restoreAfterFinish: true,
afterSetup: function(effect) {
effect.element.makeClipping().setStyle({height: '0px'}).show();
},
afterFinishInternal: function(effect) {
effect.element.undoClipping();
}
}, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
element = $(element);
var oldOpacity = element.getInlineOpacity();
return new Effect.Appear(element, Object.extend({
duration: 0.4,
from: 0,
transition: Effect.Transitions.flicker,
afterFinishInternal: function(effect) {
new Effect.Scale(effect.element, 1, {
duration: 0.3, scaleFromCenter: true,
scaleX: false, scaleContent: false, restoreAfterFinish: true,
beforeSetup: function(effect) {
effect.element.makePositioned().makeClipping();
},
afterFinishInternal: function(effect) {
effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
}
});
}
}, arguments[1] || { }));
};

Effect.DropOut = function(element) {
element = $(element);
var oldStyle = {
top: element.getStyle('top'),
left: element.getStyle('left'),
opacity: element.getInlineOpacity() };
return new Effect.Parallel(
[ new Effect.Move(element, {x: 0, y: 100, sync: true }),
new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
Object.extend(
{ duration: 0.5,
beforeSetup: function(effect) {
effect.effects[0].element.makePositioned();
},
afterFinishInternal: function(effect) {
effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
}
}, arguments[1] || { }));
};

Effect.Shake = function(element) {
element = $(element);
var options = Object.extend({
distance: 20,
duration: 0.5
}, arguments[1] || {});
var distance = parseFloat(options.distance);
var split = parseFloat(options.duration) / 10.0;
var oldStyle = {
top: element.getStyle('top'),
left: element.getStyle('left') };
return new Effect.Move(element,
{ x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
new Effect.Move(effect.element,
{ x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
new Effect.Move(effect.element,
{ x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
new Effect.Move(effect.element,
{ x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
new Effect.Move(effect.element,
{ x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
new Effect.Move(effect.element,
{ x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
effect.element.undoPositioned().setStyle(oldStyle);
}}); }}); }}); }}); }}); }});
};

Effect.SlideDown = function(element) {
element = $(element).cleanWhitespace();
// SlideDown need to have the content of the element wrapped in a container element with fixed height!
var oldInnerBottom = element.down().getStyle('bottom');
var elementDimensions = element.getDimensions();
return new Effect.Scale(element, 100, Object.extend({
scaleContent: false,
scaleX: false,
scaleFrom: window.opera ? 0 : 1,
scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
restoreAfterFinish: true,
afterSetup: function(effect) {
effect.element.makePositioned();
effect.element.down().makePositioned();
if (window.opera) effect.element.setStyle({top: ''});
effect.element.makeClipping().setStyle({height: '0px'}).show();
},
afterUpdateInternal: function(effect) {
effect.element.down().setStyle({bottom:
(effect.dims[0] - effect.element.clientHeight) + 'px' });
},
afterFinishInternal: function(effect) {
effect.element.undoClipping().undoPositioned();
effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
}, arguments[1] || { })
);
};

Effect.SlideUp = function(element) {
element = $(element).cleanWhitespace();
var oldInnerBottom = element.down().getStyle('bottom');
var elementDimensions = element.getDimensions();
return new Effect.Scale(element, window.opera ? 0 : 1,
Object.extend({ scaleContent: false,
scaleX: false,
scaleMode: 'box',
scaleFrom: 100,
scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
restoreAfterFinish: true,
afterSetup: function(effect) {
effect.element.makePositioned();
effect.element.down().makePositioned();
if (window.opera) effect.element.setStyle({top: ''});
effect.element.makeClipping().show();
},
afterUpdateInternal: function(effect) {
effect.element.down().setStyle({bottom:
(effect.dims[0] - effect.element.clientHeight) + 'px' });
},
afterFinishInternal: function(effect) {
effect.element.hide().undoClipping().undoPositioned();
effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
}
}, arguments[1] || { })
);
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(element) {
return new Effect.Scale(element, window.opera ? 1 : 0, {
restoreAfterFinish: true,
beforeSetup: function(effect) {
effect.element.makeClipping();
},
afterFinishInternal: function(effect) {
effect.element.hide().undoClipping();
}
});
};

Effect.Grow = function(element) {
element = $(element);
var options = Object.extend({
direction: 'center',
moveTransition: Effect.Transitions.sinoidal,
scaleTransition: Effect.Transitions.sinoidal,
opacityTransition: Effect.Transitions.full
}, arguments[1] || { });
var oldStyle = {
top: element.style.top,
left: element.style.left,
height: element.style.height,
width: element.style.width,
opacity: element.getInlineOpacity() };

var dims = element.getDimensions();
var initialMoveX, initialMoveY;
var moveX, moveY;

switch (options.direction) {
case 'top-left':
initialMoveX = initialMoveY = moveX = moveY = 0;
break;
case 'top-right':
initialMoveX = dims.width;
initialMoveY = moveY = 0;
moveX = -dims.width;
break;
case 'bottom-left':
initialMoveX = moveX = 0;
initialMoveY = dims.height;
moveY = -dims.height;
break;
case 'bottom-right':
initialMoveX = dims.width;
initialMoveY = dims.height;
moveX = -dims.width;
moveY = -dims.height;
break;
case 'center':
initialMoveX = dims.width / 2;
initialMoveY = dims.height / 2;
moveX = -dims.width / 2;
moveY = -dims.height / 2;
break;
}

return new Effect.Move(element, {
x: initialMoveX,
y: initialMoveY,
duration: 0.01,
beforeSetup: function(effect) {
effect.element.hide().makeClipping().makePositioned();
},
afterFinishInternal: function(effect) {
new Effect.Parallel(
[ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
new Effect.Scale(effect.element, 100, {
scaleMode: { originalHeight: dims.height, originalWidth: dims.width },
sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
], Object.extend({
beforeSetup: function(effect) {
effect.effects[0].element.setStyle({height: '0px'}).show();
},
afterFinishInternal: function(effect) {
effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
}
}, options)
);
}
});
};

Effect.Shrink = function(element) {
element = $(element);
var options = Object.extend({
direction: 'center',
moveTransition: Effect.Transitions.sinoidal,
scaleTransition: Effect.Transitions.sinoidal,
opacityTransition: Effect.Transitions.none
}, arguments[1] || { });
var oldStyle = {
top: element.style.top,
left: element.style.left,
height: element.style.height,
width: element.style.width,
opacity: element.getInlineOpacity() };

var dims = element.getDimensions();
var moveX, moveY;

switch (options.direction) {
case 'top-left':
moveX = moveY = 0;
break;
case 'top-right':
moveX = dims.width;
moveY = 0;
break;
case 'bottom-left':
moveX = 0;
moveY = dims.height;
break;
case 'bottom-right':
moveX = dims.width;
moveY = dims.height;
break;
case 'center':
moveX = dims.width / 2;
moveY = dims.height / 2;
break;
}

return new Effect.Parallel(
[ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
], Object.extend({
beforeStartInternal: function(effect) {
effect.effects[0].element.makePositioned().makeClipping();
},
afterFinishInternal: function(effect) {
effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
}, options)
);
};

Effect.Pulsate = function(element) {
element = $(element);
var options    = arguments[1] || { },
oldOpacity = element.getInlineOpacity(),
transition = options.transition || Effect.Transitions.linear,
reverser   = function(pos){
return 1 - transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
};

return new Effect.Opacity(element,
Object.extend(Object.extend({  duration: 2.0, from: 0,
afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
}, options), {transition: reverser}));
};

Effect.Fold = function(element) {
element = $(element);
var oldStyle = {
top: element.style.top,
left: element.style.left,
width: element.style.width,
height: element.style.height };
element.makeClipping();
return new Effect.Scale(element, 5, Object.extend({
scaleContent: false,
scaleX: false,
afterFinishInternal: function(effect) {
new Effect.Scale(element, 1, {
scaleContent: false,
scaleY: false,
afterFinishInternal: function(effect) {
effect.element.hide().undoClipping().setStyle(oldStyle);
} });
}}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
initialize: function(element) {
this.element = $(element);
if (!this.element) throw(Effect._elementDoesNotExistError);
var options = Object.extend({
style: { }
}, arguments[1] || { });

if (!Object.isString(options.style)) this.style = $H(options.style);
else {
if (options.style.include(':'))
this.style = options.style.parseStyle();
else {
this.element.addClassName(options.style);
this.style = $H(this.element.getStyles());
this.element.removeClassName(options.style);
var css = this.element.getStyles();
this.style = this.style.reject(function(style) {
return style.value == css[style.key];
});
options.afterFinishInternal = function(effect) {
effect.element.addClassName(effect.options.style);
effect.transforms.each(function(transform) {
effect.element.style[transform.style] = '';
});
};
}
}
this.start(options);
},

setup: function(){
function parseColor(color){
if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
color = color.parseColor();
return $R(0,2).map(function(i){
return parseInt( color.slice(i*2+1,i*2+3), 16 );
});
}
this.transforms = this.style.map(function(pair){
var property = pair[0], value = pair[1], unit = null;

if (value.parseColor('#zzzzzz') != '#zzzzzz') {
value = value.parseColor();
unit  = 'color';
} else if (property == 'opacity') {
value = parseFloat(value);
if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
this.element.setStyle({zoom: 1});
} else if (Element.CSS_LENGTH.test(value)) {
var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
value = parseFloat(components[1]);
unit = (components.length == 3) ? components[2] : null;
}

var originalValue = this.element.getStyle(property);
return {
style: property.camelize(),
originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0),
targetValue: unit=='color' ? parseColor(value) : value,
unit: unit
};
}.bind(this)).reject(function(transform){
return (
(transform.originalValue == transform.targetValue) ||
(
transform.unit != 'color' &&
(isNaN(transform.originalValue) || isNaN(transform.targetValue))
)
);
});
},
update: function(position) {
var style = { }, transform, i = this.transforms.length;
while(i--)
style[(transform = this.transforms[i]).style] =
transform.unit=='color' ? '#'+
(Math.round(transform.originalValue[0]+
(transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
(Math.round(transform.originalValue[1]+
(transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
(Math.round(transform.originalValue[2]+
(transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
(transform.originalValue +
(transform.targetValue - transform.originalValue) * position).toFixed(3) +
(transform.unit === null ? '' : transform.unit);
this.element.setStyle(style, true);
}
});

Effect.Transform = Class.create({
initialize: function(tracks){
this.tracks  = [];
this.options = arguments[1] || { };
this.addTracks(tracks);
},
addTracks: function(tracks){
tracks.each(function(track){
track = $H(track);
var data = track.values().first();
this.tracks.push($H({
ids:     track.keys().first(),
effect:  Effect.Morph,
options: { style: data }
}));
}.bind(this));
return this;
},
play: function(){
return new Effect.Parallel(
this.tracks.map(function(track){
var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
var elements = [$(ids) || $$(ids)].flatten();
return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
}).flatten(),
this.options
);
}
});

Element.CSS_PROPERTIES = $w(
'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
'fontSize fontWeight height left letterSpacing lineHeight ' +
'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
var style, styleRules = $H();
if (Prototype.Browser.WebKit)
style = new Element('div',{style:this}).style;
else {
String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
style = String.__parseStyleElement.childNodes[0].style;
}

Element.CSS_PROPERTIES.each(function(property){
if (style[property]) styleRules.set(property, style[property]);
});

if (Prototype.Browser.IE && this.include('opacity'))
styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
Element.getStyles = function(element) {
var css = document.defaultView.getComputedStyle($(element), null);
return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
styles[property] = css[property];
return styles;
});
};
} else {
Element.getStyles = function(element) {
element = $(element);
var css = element.currentStyle, styles;
styles = Element.CSS_PROPERTIES.inject({ }, function(results, property) {
results[property] = css[property];
return results;
});
if (!styles.opacity) styles.opacity = element.getOpacity();
return styles;
};
}

Effect.Methods = {
morph: function(element, style) {
element = $(element);
new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
return element;
},
visualEffect: function(element, effect, options) {
element = $(element);
var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
new Effect[klass](element, options);
return element;
},
highlight: function(element, options) {
element = $(element);
new Effect.Highlight(element, options);
return element;
}
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
'pulsate shake puff squish switchOff dropOut').each(
function(effect) {
Effect.Methods[effect] = function(element, options){
element = $(element);
Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
return element;
};
}
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);
// script.aculo.us dragdrop.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if(Object.isUndefined(Effect))
throw("dragdrop.js requires including script.aculo.us' effects.js library");

var Droppables = {
drops: [],

remove: function(element) {
this.drops = this.drops.reject(function(d) { return d.element==$(element) });
},

add: function(element) {
element = $(element);
var options = Object.extend({
greedy:     true,
hoverclass: null,
tree:       false
}, arguments[1] || { });

// cache containers
if(options.containment) {
options._containers = [];
var containment = options.containment;
if(Object.isArray(containment)) {
containment.each( function(c) { options._containers.push($(c)) });
} else {
options._containers.push($(containment));
}
}

if(options.accept) options.accept = [options.accept].flatten();

Element.makePositioned(element); // fix IE
options.element = element;

this.drops.push(options);
},

findDeepestChild: function(drops) {
deepest = drops[0];

for (i = 1; i < drops.length; ++i)
if (Element.isParent(drops[i].element, deepest.element))
deepest = drops[i];

return deepest;
},

isContained: function(element, drop) {
var containmentNode;
if(drop.tree) {
containmentNode = element.treeNode;
} else {
containmentNode = element.parentNode;
}
return drop._containers.detect(function(c) { return containmentNode == c });
},

isAffected: function(point, element, drop) {
return (
(drop.element!=element) &&
((!drop._containers) ||
this.isContained(element, drop)) &&
((!drop.accept) ||
(Element.classNames(element).detect(
function(v) { return drop.accept.include(v) } ) )) &&
Position.within(drop.element, point[0], point[1]) );
},

deactivate: function(drop) {
if(drop.hoverclass)
Element.removeClassName(drop.element, drop.hoverclass);
this.last_active = null;
},

activate: function(drop) {
if(drop.hoverclass)
Element.addClassName(drop.element, drop.hoverclass);
this.last_active = drop;
},

show: function(point, element) {
if(!this.drops.length) return;
var drop, affected = [];

this.drops.each( function(drop) {
if(Droppables.isAffected(point, element, drop))
affected.push(drop);
});

if(affected.length>0)
drop = Droppables.findDeepestChild(affected);

if(this.last_active && this.last_active != drop) this.deactivate(this.last_active);
if (drop) {
Position.within(drop.element, point[0], point[1]);
if(drop.onHover)
drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));

if (drop != this.last_active) Droppables.activate(drop);
}
},

fire: function(event, element) {
if(!this.last_active) return;
Position.prepare();

if (this.isAffected([Event.pointerX(event), Event.pointerY(event)], element, this.last_active))
if (this.last_active.onDrop) {
this.last_active.onDrop(element, this.last_active.element, event);
return true;
}
},

reset: function() {
if(this.last_active)
this.deactivate(this.last_active);
}
};

var Draggables = {
drags: [],
observers: [],

register: function(draggable) {
if(this.drags.length == 0) {
this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
this.eventKeypress  = this.keyPress.bindAsEventListener(this);

Event.observe(document, "mouseup", this.eventMouseUp);
Event.observe(document, "mousemove", this.eventMouseMove);
Event.observe(document, "keypress", this.eventKeypress);
}
this.drags.push(draggable);
},

unregister: function(draggable) {
this.drags = this.drags.reject(function(d) { return d==draggable });
if(this.drags.length == 0) {
Event.stopObserving(document, "mouseup", this.eventMouseUp);
Event.stopObserving(document, "mousemove", this.eventMouseMove);
Event.stopObserving(document, "keypress", this.eventKeypress);
}
},

activate: function(draggable) {
if(draggable.options.delay) {
this._timeout = setTimeout(function() {
Draggables._timeout = null;
window.focus();
Draggables.activeDraggable = draggable;
}.bind(this), draggable.options.delay);
} else {
window.focus(); // allows keypress events if window isn't currently focused, fails for Safari
this.activeDraggable = draggable;
}
},

deactivate: function() {
this.activeDraggable = null;
},

updateDrag: function(event) {
if(!this.activeDraggable) return;
var pointer = [Event.pointerX(event), Event.pointerY(event)];
// Mozilla-based browsers fire successive mousemove events with
// the same coordinates, prevent needless redrawing (moz bug?)
if(this._lastPointer && (this._lastPointer.inspect() == pointer.inspect())) return;
this._lastPointer = pointer;

this.activeDraggable.updateDrag(event, pointer);
},

endDrag: function(event) {
if(this._timeout) {
clearTimeout(this._timeout);
this._timeout = null;
}
if(!this.activeDraggable) return;
this._lastPointer = null;
this.activeDraggable.endDrag(event);
this.activeDraggable = null;
},

keyPress: function(event) {
if(this.activeDraggable)
this.activeDraggable.keyPress(event);
},

addObserver: function(observer) {
this.observers.push(observer);
this._cacheObserverCallbacks();
},

removeObserver: function(element) {  // element instead of observer fixes mem leaks
this.observers = this.observers.reject( function(o) { return o.element==element });
this._cacheObserverCallbacks();
},

notify: function(eventName, draggable, event) {  // 'onStart', 'onEnd', 'onDrag'
if(this[eventName+'Count'] > 0)
this.observers.each( function(o) {
if(o[eventName]) o[eventName](eventName, draggable, event);
});
if(draggable.options[eventName]) draggable.options[eventName](draggable, event);
},

_cacheObserverCallbacks: function() {
['onStart','onEnd','onDrag'].each( function(eventName) {
Draggables[eventName+'Count'] = Draggables.observers.select(
function(o) { return o[eventName]; }
).length;
});
}
};

/*--------------------------------------------------------------------------*/

var Draggable = Class.create({
initialize: function(element) {
var defaults = {
handle: false,
reverteffect: function(element, top_offset, left_offset) {
var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
new Effect.Move(element, { x: -left_offset, y: -top_offset, duration: dur,
queue: {scope:'_draggable', position:'end'}
});
},
endeffect: function(element) {
var toOpacity = Object.isNumber(element._opacity) ? element._opacity : 1.0;
new Effect.Opacity(element, {duration:0.2, from:0.7, to:toOpacity,
queue: {scope:'_draggable', position:'end'},
afterFinish: function(){
Draggable._dragging[element] = false
}
});
},
zindex: 1000,
revert: false,
quiet: false,
scroll: false,
scrollSensitivity: 20,
scrollSpeed: 15,
snap: false,  // false, or xy or [x,y] or function(x,y){ return [x,y] }
delay: 0
};

if(!arguments[1] || Object.isUndefined(arguments[1].endeffect))
Object.extend(defaults, {
starteffect: function(element) {
element._opacity = Element.getOpacity(element);
Draggable._dragging[element] = true;
new Effect.Opacity(element, {duration:0.2, from:element._opacity, to:0.7});
}
});

var options = Object.extend(defaults, arguments[1] || { });

this.element = $(element);

if(options.handle && Object.isString(options.handle))
this.handle = this.element.down('.'+options.handle, 0);

if(!this.handle) this.handle = $(options.handle);
if(!this.handle) this.handle = this.element;

if(options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
options.scroll = $(options.scroll);
this._isScrollChild = Element.childOf(this.element, options.scroll);
}

Element.makePositioned(this.element); // fix IE

this.options  = options;
this.dragging = false;

this.eventMouseDown = this.initDrag.bindAsEventListener(this);
Event.observe(this.handle, "mousedown", this.eventMouseDown);

Draggables.register(this);
},

destroy: function() {
Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
Draggables.unregister(this);
},

currentDelta: function() {
return([
parseInt(Element.getStyle(this.element,'left') || '0'),
parseInt(Element.getStyle(this.element,'top') || '0')]);
},

initDrag: function(event) {
if(!Object.isUndefined(Draggable._dragging[this.element]) &&
Draggable._dragging[this.element]) return;
if(Event.isLeftClick(event)) {
// abort on form elements, fixes a Firefox issue
var src = Event.element(event);
if((tag_name = src.tagName.toUpperCase()) && (
tag_name=='INPUT' ||
tag_name=='SELECT' ||
tag_name=='OPTION' ||
tag_name=='BUTTON' ||
tag_name=='TEXTAREA')) return;

var pointer = [Event.pointerX(event), Event.pointerY(event)];
var pos     = this.element.cumulativeOffset();
this.offset = [0,1].map( function(i) { return (pointer[i] - pos[i]) });

Draggables.activate(this);
Event.stop(event);
}
},

startDrag: function(event) {
this.dragging = true;
if(!this.delta)
this.delta = this.currentDelta();

if(this.options.zindex) {
this.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
this.element.style.zIndex = this.options.zindex;
}

if(this.options.ghosting) {
this._clone = this.element.cloneNode(true);
this._originallyAbsolute = (this.element.getStyle('position') == 'absolute');
if (!this._originallyAbsolute)
Position.absolutize(this.element);
this.element.parentNode.insertBefore(this._clone, this.element);
}

if(this.options.scroll) {
if (this.options.scroll == window) {
var where = this._getWindowScroll(this.options.scroll);
this.originalScrollLeft = where.left;
this.originalScrollTop = where.top;
} else {
this.originalScrollLeft = this.options.scroll.scrollLeft;
this.originalScrollTop = this.options.scroll.scrollTop;
}
}

Draggables.notify('onStart', this, event);

if(this.options.starteffect) this.options.starteffect(this.element);
},

updateDrag: function(event, pointer) {
if(!this.dragging) this.startDrag(event);

if(!this.options.quiet){
Position.prepare();
Droppables.show(pointer, this.element);
}

Draggables.notify('onDrag', this, event);

this.draw(pointer);
if(this.options.change) this.options.change(this);

if(this.options.scroll) {
this.stopScrolling();

var p;
if (this.options.scroll == window) {
with(this._getWindowScroll(this.options.scroll)) { p = [ left, top, left+width, top+height ]; }
} else {
p = Position.page(this.options.scroll).toArray();
p[0] += this.options.scroll.scrollLeft + Position.deltaX;
p[1] += this.options.scroll.scrollTop + Position.deltaY;
p.push(p[0]+this.options.scroll.offsetWidth);
p.push(p[1]+this.options.scroll.offsetHeight);
}
var speed = [0,0];
if(pointer[0] < (p[0]+this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[0]+this.options.scrollSensitivity);
if(pointer[1] < (p[1]+this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[1]+this.options.scrollSensitivity);
if(pointer[0] > (p[2]-this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[2]-this.options.scrollSensitivity);
if(pointer[1] > (p[3]-this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[3]-this.options.scrollSensitivity);
this.startScrolling(speed);
}

// fix AppleWebKit rendering
if(Prototype.Browser.WebKit) window.scrollBy(0,0);

Event.stop(event);
},

finishDrag: function(event, success) {
this.dragging = false;

if(this.options.quiet){
Position.prepare();
var pointer = [Event.pointerX(event), Event.pointerY(event)];
Droppables.show(pointer, this.element);
}

if(this.options.ghosting) {
if (!this._originallyAbsolute)
Position.relativize(this.element);
delete this._originallyAbsolute;
Element.remove(this._clone);
this._clone = null;
}

var dropped = false;
if(success) {
dropped = Droppables.fire(event, this.element);
if (!dropped) dropped = false;
}
if(dropped && this.options.onDropped) this.options.onDropped(this.element);
Draggables.notify('onEnd', this, event);

var revert = this.options.revert;
if(revert && Object.isFunction(revert)) revert = revert(this.element);

var d = this.currentDelta();
if(revert && this.options.reverteffect) {
if (dropped == 0 || revert != 'failure')
this.options.reverteffect(this.element,
d[1]-this.delta[1], d[0]-this.delta[0]);
} else {
this.delta = d;
}

if(this.options.zindex)
this.element.style.zIndex = this.originalZ;

if(this.options.endeffect)
this.options.endeffect(this.element);

Draggables.deactivate(this);
Droppables.reset();
},

keyPress: function(event) {
if(event.keyCode!=Event.KEY_ESC) return;
this.finishDrag(event, false);
Event.stop(event);
},

endDrag: function(event) {
if(!this.dragging) return;
this.stopScrolling();
this.finishDrag(event, true);
Event.stop(event);
},

draw: function(point) {
var pos = this.element.cumulativeOffset();
if(this.options.ghosting) {
var r   = Position.realOffset(this.element);
pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
}

var d = this.currentDelta();
pos[0] -= d[0]; pos[1] -= d[1];

if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
}

var p = [0,1].map(function(i){
return (point[i]-pos[i]-this.offset[i])
}.bind(this));

if(this.options.snap) {
if(Object.isFunction(this.options.snap)) {
p = this.options.snap(p[0],p[1],this);
} else {
if(Object.isArray(this.options.snap)) {
p = p.map( function(v, i) {
return (v/this.options.snap[i]).round()*this.options.snap[i] }.bind(this));
} else {
p = p.map( function(v) {
return (v/this.options.snap).round()*this.options.snap }.bind(this));
}
}}

var style = this.element.style;
if((!this.options.constraint) || (this.options.constraint=='horizontal'))
style.left = p[0] + "px";
if((!this.options.constraint) || (this.options.constraint=='vertical'))
style.top  = p[1] + "px";

if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
},

stopScrolling: function() {
if(this.scrollInterval) {
clearInterval(this.scrollInterval);
this.scrollInterval = null;
Draggables._lastScrollPointer = null;
}
},

startScrolling: function(speed) {
if(!(speed[0] || speed[1])) return;
this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
this.lastScrolled = new Date();
this.scrollInterval = setInterval(this.scroll.bind(this), 10);
},

scroll: function() {
var current = new Date();
var delta = current - this.lastScrolled;
this.lastScrolled = current;
if(this.options.scroll == window) {
with (this._getWindowScroll(this.options.scroll)) {
if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
var d = delta / 1000;
this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
}
}
} else {
this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
}

Position.prepare();
Droppables.show(Draggables._lastPointer, this.element);
Draggables.notify('onDrag', this);
if (this._isScrollChild) {
Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
if (Draggables._lastScrollPointer[0] < 0)
Draggables._lastScrollPointer[0] = 0;
if (Draggables._lastScrollPointer[1] < 0)
Draggables._lastScrollPointer[1] = 0;
this.draw(Draggables._lastScrollPointer);
}

if(this.options.change) this.options.change(this);
},

_getWindowScroll: function(w) {
var T, L, W, H;
with (w.document) {
if (w.document.documentElement && documentElement.scrollTop) {
T = documentElement.scrollTop;
L = documentElement.scrollLeft;
} else if (w.document.body) {
T = body.scrollTop;
L = body.scrollLeft;
}
if (w.innerWidth) {
W = w.innerWidth;
H = w.innerHeight;
} else if (w.document.documentElement && documentElement.clientWidth) {
W = documentElement.clientWidth;
H = documentElement.clientHeight;
} else {
W = body.offsetWidth;
H = body.offsetHeight;
}
}
return { top: T, left: L, width: W, height: H };
}
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
initialize: function(element, observer) {
this.element   = $(element);
this.observer  = observer;
this.lastValue = Sortable.serialize(this.element);
},

onStart: function() {
this.lastValue = Sortable.serialize(this.element);
},

onEnd: function() {
Sortable.unmark();
if(this.lastValue != Sortable.serialize(this.element))
this.observer(this.element)
}
});

var Sortable = {
SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,

sortables: { },

_findRootElement: function(element) {
while (element.tagName.toUpperCase() != "BODY") {
if(element.id && Sortable.sortables[element.id]) return element;
element = element.parentNode;
}
},

options: function(element) {
element = Sortable._findRootElement($(element));
if(!element) return;
return Sortable.sortables[element.id];
},

destroy: function(element){
element = $(element);
var s = Sortable.sortables[element.id];

if(s) {
Draggables.removeObserver(s.element);
s.droppables.each(function(d){ Droppables.remove(d) });
s.draggables.invoke('destroy');

delete Sortable.sortables[s.element.id];
}
},

create: function(element) {
element = $(element);
var options = Object.extend({
element:     element,
tag:         'li',       // assumes li children, override with tag: 'tagname'
dropOnEmpty: false,
tree:        false,
treeTag:     'ul',
overlap:     'vertical', // one of 'vertical', 'horizontal'
constraint:  'vertical', // one of 'vertical', 'horizontal', false
containment: element,    // also takes array of elements (or id's); or false
handle:      false,      // or a CSS class
only:        false,
delay:       0,
hoverclass:  null,
ghosting:    false,
quiet:       false,
scroll:      false,
scrollSensitivity: 20,
scrollSpeed: 15,
format:      this.SERIALIZE_RULE,

// these take arrays of elements or ids and can be
// used for better initialization performance
elements:    false,
handles:     false,

onChange:    Prototype.emptyFunction,
onUpdate:    Prototype.emptyFunction
}, arguments[1] || { });

// clear any old sortable with same element
this.destroy(element);

// build options for the draggables
var options_for_draggable = {
revert:      true,
quiet:       options.quiet,
scroll:      options.scroll,
scrollSpeed: options.scrollSpeed,
scrollSensitivity: options.scrollSensitivity,
delay:       options.delay,
ghosting:    options.ghosting,
constraint:  options.constraint,
handle:      options.handle };

if(options.starteffect)
options_for_draggable.starteffect = options.starteffect;

if(options.reverteffect)
options_for_draggable.reverteffect = options.reverteffect;
else
if(options.ghosting) options_for_draggable.reverteffect = function(element) {
element.style.top  = 0;
element.style.left = 0;
};

if(options.endeffect)
options_for_draggable.endeffect = options.endeffect;

if(options.zindex)
options_for_draggable.zindex = options.zindex;

// build options for the droppables
var options_for_droppable = {
overlap:     options.overlap,
containment: options.containment,
tree:        options.tree,
hoverclass:  options.hoverclass,
onHover:     Sortable.onHover
};

var options_for_tree = {
onHover:      Sortable.onEmptyHover,
overlap:      options.overlap,
containment:  options.containment,
hoverclass:   options.hoverclass
};

// fix for gecko engine
Element.cleanWhitespace(element);

options.draggables = [];
options.droppables = [];

// drop on empty handling
if(options.dropOnEmpty || options.tree) {
Droppables.add(element, options_for_tree);
options.droppables.push(element);
}

(options.elements || this.findElements(element, options) || []).each( function(e,i) {
var handle = options.handles ? $(options.handles[i]) :
(options.handle ? $(e).select('.' + options.handle)[0] : e);
options.draggables.push(
new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
Droppables.add(e, options_for_droppable);
if(options.tree) e.treeNode = element;
options.droppables.push(e);
});

if(options.tree) {
(Sortable.findTreeElements(element, options) || []).each( function(e) {
Droppables.add(e, options_for_tree);
e.treeNode = element;
options.droppables.push(e);
});
}

// keep reference
this.sortables[element.identify()] = options;

// for onupdate
Draggables.addObserver(new SortableObserver(element, options.onUpdate));

},

// return all suitable-for-sortable elements in a guaranteed order
findElements: function(element, options) {
return Element.findChildren(
element, options.only, options.tree ? true : false, options.tag);
},

findTreeElements: function(element, options) {
return Element.findChildren(
element, options.only, options.tree ? true : false, options.treeTag);
},

onHover: function(element, dropon, overlap) {
if(Element.isParent(dropon, element)) return;

if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
return;
} else if(overlap>0.5) {
Sortable.mark(dropon, 'before');
if(dropon.previousSibling != element) {
var oldParentNode = element.parentNode;
element.style.visibility = "hidden"; // fix gecko rendering
dropon.parentNode.insertBefore(element, dropon);
if(dropon.parentNode!=oldParentNode)
Sortable.options(oldParentNode).onChange(element);
Sortable.options(dropon.parentNode).onChange(element);
}
} else {
Sortable.mark(dropon, 'after');
var nextElement = dropon.nextSibling || null;
if(nextElement != element) {
var oldParentNode = element.parentNode;
element.style.visibility = "hidden"; // fix gecko rendering
dropon.parentNode.insertBefore(element, nextElement);
if(dropon.parentNode!=oldParentNode)
Sortable.options(oldParentNode).onChange(element);
Sortable.options(dropon.parentNode).onChange(element);
}
}
},

onEmptyHover: function(element, dropon, overlap) {
var oldParentNode = element.parentNode;
var droponOptions = Sortable.options(dropon);

if(!Element.isParent(dropon, element)) {
var index;

var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
var child = null;

if(children) {
var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);

for (index = 0; index < children.length; index += 1) {
if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
offset -= Element.offsetSize (children[index], droponOptions.overlap);
} else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
child = index + 1 < children.length ? children[index + 1] : null;
break;
} else {
child = children[index];
break;
}
}
}

dropon.insertBefore(element, child);

Sortable.options(oldParentNode).onChange(element);
droponOptions.onChange(element);
}
},

unmark: function() {
if(Sortable._marker) Sortable._marker.hide();
},

mark: function(dropon, position) {
// mark on ghosting only
var sortable = Sortable.options(dropon.parentNode);
if(sortable && !sortable.ghosting) return;

if(!Sortable._marker) {
Sortable._marker =
($('dropmarker') || Element.extend(document.createElement('DIV'))).
hide().addClassName('dropmarker').setStyle({position:'absolute'});
document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
}
var offsets = dropon.cumulativeOffset();
Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});

if(position=='after')
if(sortable.overlap == 'horizontal')
Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});
else
Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});

Sortable._marker.show();
},

_tree: function(element, options, parent) {
var children = Sortable.findElements(element, options) || [];

for (var i = 0; i < children.length; ++i) {
var match = children[i].id.match(options.format);

if (!match) continue;

var child = {
id: encodeURIComponent(match ? match[1] : null),
element: element,
parent: parent,
children: [],
position: parent.children.length,
container: $(children[i]).down(options.treeTag)
};

/* Get the element containing the children and recurse over it */
if (child.container)
this._tree(child.container, options, child);

parent.children.push (child);
}

return parent;
},

tree: function(element) {
element = $(element);
var sortableOptions = this.options(element);
var options = Object.extend({
tag: sortableOptions.tag,
treeTag: sortableOptions.treeTag,
only: sortableOptions.only,
name: element.id,
format: sortableOptions.format
}, arguments[1] || { });

var root = {
id: null,
parent: null,
children: [],
container: element,
position: 0
};

return Sortable._tree(element, options, root);
},

/* Construct a [i] index for a particular node */
_constructIndex: function(node) {
var index = '';
do {
if (node.id) index = '[' + node.position + ']' + index;
} while ((node = node.parent) != null);
return index;
},

sequence: function(element) {
element = $(element);
var options = Object.extend(this.options(element), arguments[1] || { });

return $(this.findElements(element, options) || []).map( function(item) {
return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
});
},

setSequence: function(element, new_sequence) {
element = $(element);
var options = Object.extend(this.options(element), arguments[2] || { });

var nodeMap = { };
this.findElements(element, options).each( function(n) {
if (n.id.match(options.format))
nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];
n.parentNode.removeChild(n);
});

new_sequence.each(function(ident) {
var n = nodeMap[ident];
if (n) {
n[1].appendChild(n[0]);
delete nodeMap[ident];
}
});
},

serialize: function(element) {
element = $(element);
var options = Object.extend(Sortable.options(element), arguments[1] || { });
var name = encodeURIComponent(
(arguments[1] && arguments[1].name) ? arguments[1].name : element.id);

if (options.tree) {
return Sortable.tree(element, arguments[1]).children.map( function (item) {
return [name + Sortable._constructIndex(item) + "[id]=" +
encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
}).flatten().join('&');
} else {
return Sortable.sequence(element, arguments[1]).map( function(item) {
return name + "[]=" + encodeURIComponent(item);
}).join('&');
}
}
};

// Returns true if child is contained within element
Element.isParent = function(child, element) {
if (!child.parentNode || child == element) return false;
if (child.parentNode == element) return true;
return Element.isParent(child.parentNode, element);
};

Element.findChildren = function(element, only, recursive, tagName) {
if(!element.hasChildNodes()) return null;
tagName = tagName.toUpperCase();
if(only) only = [only].flatten();
var elements = [];
$A(element.childNodes).each( function(e) {
if(e.tagName && e.tagName.toUpperCase()==tagName &&
(!only || (Element.classNames(e).detect(function(v) { return only.include(v) }))))
elements.push(e);
if(recursive) {
var grandchildren = Element.findChildren(e, only, recursive, tagName);
if(grandchildren) elements.push(grandchildren);
}
});

return (elements.length>0 ? elements.flatten() : []);
};

Element.offsetSize = function (element, type) {
return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
};
/*
popup.js

A lightweight general purpose JavaScript DOM element popup class.

Webpage:
http://www.methods.co.nz/popup/popup.html

Inspired by:
Lightbox2: http://www.huddletogether.com/projects/lightbox2/
Lightbox Gone Wild: http://particletree.com/features/lightbox-gone-wild/
Tooltip: http://blog.innerewut.de/pages/tooltip
Prototype library: http://www.prototypejs.org/
Scriptaculous library: http://script.aculo.us/

Attributions:
- Uses the getPageSize() function from Lightbox v2.02 by Lokesh Dhakar
(http://www.huddletogether.com/projects/lightbox2/).
- Adapted the the modal overlay technique used in Lightbox v2.02 by Lokesh
Dhakar (http://www.huddletogether.com/projects/lightbox2/).

Version: 1.0.1

Author:    Stuart Rackham <srackham@methods.co.nz>
License:   This source code is released under the MIT license.

Copyright (c) Stuart Rackham 2007

*/

var Popup = Class.create();
Popup.zIndex = 1000;  // z-index of first popup.

Popup.prototype = {

/*
Popup creation
*/
initialize: function(popup, link) {
var options = Object.extend({
modal: false,
effect: 'fade',
hidden: true,
closebox: 'popup_closebox',       // CSS class name of click-to-close elements.
draghandle: 'popup_draghandle'    // CSS class name of drag handle elements.
}, arguments[2] || {});
options.position = options.position || (options.modal ? 'center' : 'auto');
options.trigger = options.trigger || (options.modal ? 'click' : 'mouseover');
options.duration = this.first_value(options.duration, Popup.duration, 0.5);
options.show_duration = this.first_value(options.show_duration, options.duration);
options.hide_duration = this.first_value(options.hide_duration, options.duration);
options.opacity = this.first_value(options.opacity, Popup.opacity, 0.5);
options.show_delay = this.first_value(options.show_delay, Popup.show_delay, 500);
options.hide_delay = this.first_value(options.hide_delay, Popup.hide_delay, 200);
options.cursor_margin = this.first_value(options.cursor_margin, Popup.cursor_margin, 5);
this.options = options;
if (link) {
this.link = $(link);
}
this.popup = $(popup);
this.popup.popup = this;  // Make the popup object a property of the DOM popup element.
if (options.hidden) {
this.popup.hide();
}
if (options.closebox) {
this.closeboxes = document.getElementsByClassName(options.closebox, this.popup);
if (this.popup.hasClassName(options.closebox)) {
this.closeboxes[this.closeboxes.length] = this.popup;
}
}
else {
this.closeboxes = [];
}
if (options.draghandle) {
var draghandles = document.getElementsByClassName(options.draghandle, this.popup);
for (i = 0; i < draghandles.length; i++) {
new Draggable(this.popup, { handle: draghandles[i] });
}
if (this.popup.hasClassName(options.draghandle)) {
new Draggable(this.popup, { handle: this.popup });
}
}
this.register_events();
},


/*
Event functions
*/

register_events: function() {
var trigger_function;
if (this.is_auto_open()) {
trigger_function = this.start_show_timer;
if (this.link) {
Event.observe(this.link, 'mouseout', this.stop_show_timer.bindAsEventListener(this));
}
}
else {
trigger_function = this.show;
}
if (this.link) {
Event.observe(this.link, this.options.trigger, trigger_function.bindAsEventListener(this));
}
if (!this.options.modal) {
Event.observe(this.popup, 'click', this.bring_to_front.bindAsEventListener(this));
}
if (this.closeboxes.length > 0) {
for (var i = 0; i < this.closeboxes.length; i++) {
Event.observe(this.closeboxes[i], 'click', this.hide.bindAsEventListener(this));
}
}
else {
if (this.link) {
Event.observe(this.link, 'mouseout', this.start_hide_timer.bindAsEventListener(this));
}
Event.observe(this.popup, 'mouseover', this.stop_hide_timer.bindAsEventListener(this));
Event.observe(this.popup, 'mouseout', this.start_hide_timer.bindAsEventListener(this));
}
},

bring_to_front: function(event) {
// Bring to front if not already there.
if (Number(this.popup.style.zIndex) < Popup.zIndex - 1) {
this.popup.style.zIndex = Popup.zIndex++;
}
},

start_show_timer: function(event) {
// NOTE: event is bound to this.show but it's state changes between being
// bound here and arriving at this.show -- specifically, the mouse
// coordinates are reset to zero). I've no idea why. Anyway, this is the
// reason for passing the event mouse coordinates as properties of this.
this.stop_show_timer(event);
this.mouse_x = Event.pointerX(event);
this.mouse_y = Event.pointerY(event);
this.show_timer = setTimeout(this.show.bind(this, event), this.options.show_delay);
},

stop_show_timer: function(event) {
if (this.show_timer) {
clearTimeout(this.show_timer);
this.show_timer = null;
}
},

start_hide_timer: function(event) {
this.stop_hide_timer(event);
this.hide_timer = setTimeout(this.hide.bind(this, event), this.options.hide_delay);
},

stop_hide_timer: function(event) {
if (this.hide_timer) {
clearTimeout(this.hide_timer);
this.hide_timer = null;
}
},

show: function(event) {
this.stop_show_timer(event);
this.stop_hide_timer(event);
if (this.is_open) {
return;
}
if (this.options.modal) {
this.show_overlay();
}
var pos;
if (!event) {
// We only arrive here if this.show has been called externally.
pos = this.get_popup_position();
}
else if (this.is_auto_open()) {
// Because auto-open popups calls this.show indirectly via start_show_timer.
pos = this.get_popup_position(this.mouse_x, this.mouse_y);
}
else {
pos = this.get_popup_position(Event.pointerX(event), Event.pointerY(event));
}
Element.setStyle(this.popup, { top: pos.y, left: pos.x, zIndex: Popup.zIndex++ });
this.is_open = true;
switch (this.options.effect) {
case 'slide':
Effect.SlideDown(this.popup, {duration: this.options.show_duration});
break;
case 'grow':
Effect.Grow(this.popup, {duration: this.options.show_duration});
break;
case 'blind':
Effect.BlindDown(this.popup, {duration: this.options.show_duration});
break;
case 'fade':
default:
Effect.Appear(this.popup, {duration: this.options.show_duration});
break;
}
},

hide: function(event){
this.is_open = false;
switch (this.options.effect) {
case 'slide':
Effect.SlideUp(this.popup, {duration: this.options.hide_duration});
break;
case 'grow':
Effect.Shrink(this.popup, {duration: this.options.hide_duration});
break;
case 'blind':
Effect.BlindUp(this.popup, {duration: this.options.hide_duration});
break;
case 'fade':
default:
Effect.Fade(this.popup, {duration: this.options.hide_duration});
break;
}
if (this.options.modal) {
this.hide_overlay();
}
},


/*
Helper functions
*/

// Return the first function argument that is not undefined.
// Because when zero numerical value are possible you can't use || chains.
first_value: function() {
for (var i = 0; i < arguments.length; i++) {
if (arguments[i] !== undefined) {
return arguments[i];
}
}
return undefined;
},

is_auto_open: function() {
return this.options.trigger == 'mouseover';
},

show_overlay: function() {
if (!Popup.overlay) {
var overlay = document.createElement('div');
overlay.setAttribute('id','popup_overlay');
overlay.style.display = 'none';
document.body.appendChild(overlay);
Popup.overlay = overlay;
Popup.overlay_levels = [];
}
Popup.overlay.style.height = this.get_page_dimensions().height + 'px';
var z = Popup.zIndex++;
Popup.overlay.style.zIndex = z;
Popup.overlay_levels.push(z);
if ( Popup.overlay_levels.length == 1) { // Opening the first modal popup.
// Queue the global overlay effect to ensure correct execution order.
new Effect.Appear(Popup.overlay,
{ duration: this.options.show_duration,
to: this.options.opacity,
queue: {position: 'end', scope: 'popup_overlay'}
});
}
else { // There is another modal popup at a lower level so move the overlay forward.
Popup.overlay.style.zIndex = z;
}
},

hide_overlay: function() {
Popup.overlay_levels.pop();
var z = Popup.overlay_levels.pop();
if (z) { // There is another modal popup at a lower level so move the overlay back.
Popup.overlay_levels.push(z);
Popup.overlay.style.zIndex = z;
}
else { // The last modal popup is being closed so hide the overlay
// Queue the global overlay effect to ensure correct execution order.
new Effect.Fade(Popup.overlay,
{ duration: this.options.hide_duration,
queue: {position: 'end', scope: 'popup_overlay'}
});
}
},


/*
Positioning functions
*/

// Return the top and left CSS position strings as an {x,y} object that the
// popup should be shown at.  mouse_x and mouse_y are the mouse x,y coordinates
// numbers when the popup was triggered.
get_popup_position: function(mouse_x, mouse_y) {
var pos;
switch (this.options.position) {
case 'auto':
pos = this.get_auto_position(mouse_x, mouse_y);
break;
case 'center':
pos = this.get_center_position();
break;
case 'below':
pos = this.get_below_position();
break;
default:
// Check for x,y postion format (x and y can be any valid CSS left or
// top property value).
if (mo = this.options.position.match(/^\s*([^\s,]+)\s*,\s*([^\s,]+)\s*$/)) {
pos = {x: mo[1], y: mo[2]};
// If possible convert to numbers.
pos.x = Number(pos.x) || pos.x;
pos.y = Number(pos.y) || pos.y;
}
else {
pos = {x: 0, y: 0};
}
break;
}
if (typeof pos.x == 'number') {
pos.x += 'px';
}
if (typeof pos.y == 'number') {
pos.y += 'px';
}
return pos;
},

get_below_position: function() {
var pos = Position.cumulativeOffset(this.link);
return {x: pos[0], y: pos[1] + Element.getHeight(this.link)};
},

get_center_position: function() {
dim = Element.getDimensions(this.popup);
var popup_width = dim.width;
var popup_height = dim.height;
dim = this.get_viewport_dimensions();
var viewport_width = dim.width;
var viewport_height = dim.height;

var x;
if (popup_width >= viewport_width) {
x = 0;
}
else {
x = (viewport_width - popup_width)/2;
}

var y;
if (popup_height >= viewport_height) {
y = 0;
}
else {
y = (viewport_height - popup_height)/2;
}

return {x: x, y: y};
},

get_auto_position: function(mouse_x, mouse_y) {
dim = Element.getDimensions(this.popup);
var popup_width = dim.width;
var popup_height = dim.height;
dim = this.get_viewport_dimensions();
var viewport_width = dim.width;
var viewport_height = dim.height;

var available_right = viewport_width - (mouse_x + this.options.cursor_margin);
var available_left = mouse_x - this.options.cursor_margin;
var available_top = mouse_y - this.options.cursor_margin;
var available_bottom = viewport_height - (mouse_x + this.options.cursor_margin);
var offset = this.options.cursor_margin;
var x = mouse_x;
var y = mouse_y;

if (popup_width >= viewport_width) {
x = 0;
}
else if (popup_width <= available_right) {
x += offset;
}
else if (popup_width <= available_left) {
x -= popup_width + offset;
}
else if (available_right >= available_left) {
x = viewport_width - popup_width;
}
else {
x = 0;
}

if (popup_height >= viewport_height) {
y = 0;
}
else if (popup_height <= available_bottom) {
y += offset;
}
else if (popup_height <= available_top) {
y -= popup_height + offset;
}
else if (available_bottom >= available_top) {
y = viewport_height - popup_height;
}
else {
y = 0;
}

return {x: x, y: y};
},

get_viewport_dimensions: function() {
var dim = this.getPageSize();
return {width: dim[2], height: dim[3]};
},

get_page_dimensions: function() {
var dim = this.getPageSize();
return {width: dim[0], height: dim[1]};
},

// This function from Lightbox v2.02 by Lokesh Dhakar
// (http://www.huddletogether.com/projects/lightbox2/).
//
// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
//
getPageSize: function() {
var xScroll, yScroll;

if (window.innerHeight && window.scrollMaxY) {
xScroll = document.body.scrollWidth;
yScroll = window.innerHeight + window.scrollMaxY;
} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
xScroll = document.body.scrollWidth;
yScroll = document.body.scrollHeight;
} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
xScroll = document.body.offsetWidth;
yScroll = document.body.offsetHeight;
}

var windowWidth, windowHeight;
if (self.innerHeight) {	// all except Explorer
windowWidth = self.innerWidth;
windowHeight = self.innerHeight;
} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
windowWidth = document.documentElement.clientWidth;
windowHeight = document.documentElement.clientHeight;
} else if (document.body) { // other Explorers
windowWidth = document.body.clientWidth;
windowHeight = document.body.clientHeight;
}

// for small pages with total height less then height of the viewport
if(yScroll < windowHeight){
pageHeight = windowHeight;
} else {
pageHeight = yScroll;
}

// for small pages with total width less then width of the viewport
if(xScroll < windowWidth){
pageWidth = windowWidth;
} else {
pageWidth = xScroll;
}

arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
return arrayPageSize;
}
}

/*
* FCKeditor - The text editor for Internet - http://www.fckeditor.net
* Copyright (C) 2003-2008 Frederico Caldeira Knabben
*
* == BEGIN LICENSE ==
*
* Licensed under the terms of any of the following licenses at your
* choice:
*
*  - GNU General Public License Version 2 or later (the "GPL")
*    http://www.gnu.org/licenses/gpl.html
*
*  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
*    http://www.gnu.org/licenses/lgpl.html
*
*  - Mozilla Public License Version 1.1 or later (the "MPL")
*    http://www.mozilla.org/MPL/MPL-1.1.html
*
* == END LICENSE ==
*
* This is the integration file for JavaScript.
*
* It defines the FCKeditor class that can be used to create editor
* instances in a HTML page in the client side. For server side
* operations, use the specific integration system.
*/

// FCKeditor Class
var FCKeditor = function( instanceName, width, height, toolbarSet, value )
{
// Properties
this.InstanceName	= instanceName ;
this.Width			= width			|| '100%' ;
this.Height			= height		|| '200' ;
this.ToolbarSet		= toolbarSet	|| 'Default' ;
this.Value			= value			|| '' ;
this.BasePath		= FCKeditor.BasePath ;
this.CheckBrowser	= true ;
this.DisplayErrors	= true ;

this.Config			= new Object() ;

// Events
this.OnError		= null ;	// function( source, errorNumber, errorDescription )
}

/**
* This is the default BasePath used by all editor instances.
*/
FCKeditor.BasePath = '/fckeditor/' ;

/**
* The minimum height used when replacing textareas.
*/
FCKeditor.MinHeight = 200 ;

/**
* The minimum width used when replacing textareas.
*/
FCKeditor.MinWidth = 750 ;

FCKeditor.prototype.Version			= '2.6.3 Beta' ;
FCKeditor.prototype.VersionBuild	= '19726' ;

FCKeditor.prototype.Create = function()
{
document.write( this.CreateHtml() ) ;
}

FCKeditor.prototype.CreateHtml = function()
{
// Check for errors
if ( !this.InstanceName || this.InstanceName.length == 0 )
{
this._ThrowError( 701, 'You must specify an instance name.' ) ;
return '' ;
}

var sHtml = '' ;

if ( !this.CheckBrowser || this._IsCompatibleBrowser() )
{
sHtml += '<input type="hidden" id="' + this.InstanceName + '" name="' + this.InstanceName + '" value="' + this._HTMLEncode( this.Value ) + '" style="display:none" />' ;
sHtml += this._GetConfigHtml() ;
sHtml += this._GetIFrameHtml() ;
}
else
{
var sWidth  = this.Width.toString().indexOf('%')  > 0 ? this.Width  : this.Width  + 'px' ;
var sHeight = this.Height.toString().indexOf('%') > 0 ? this.Height : this.Height + 'px' ;

sHtml += '<textarea name="' + this.InstanceName +
'" rows="4" cols="40" style="width:' + sWidth +
';height:' + sHeight ;

if ( this.TabIndex )
sHtml += '" tabindex="' + this.TabIndex ;

sHtml += '">' +
this._HTMLEncode( this.Value ) +
'<\/textarea>' ;
}

return sHtml ;
}

FCKeditor.prototype.ReplaceTextarea = function()
{
if ( !this.CheckBrowser || this._IsCompatibleBrowser() )
{
// We must check the elements firstly using the Id and then the name.
var oTextarea = document.getElementById( this.InstanceName ) ;
var colElementsByName = document.getElementsByName( this.InstanceName ) ;
var i = 0;
while ( oTextarea || i == 0 )
{
if ( oTextarea && oTextarea.tagName.toLowerCase() == 'textarea' )
break ;
oTextarea = colElementsByName[i++] ;
}

if ( !oTextarea )
{
alert( 'Error: The TEXTAREA with id or name set to "' + this.InstanceName + '" was not found' ) ;
return ;
}

oTextarea.style.display = 'none' ;

if ( oTextarea.tabIndex )
this.TabIndex = oTextarea.tabIndex ;

this._InsertHtmlBefore( this._GetConfigHtml(), oTextarea ) ;
this._InsertHtmlBefore( this._GetIFrameHtml(), oTextarea ) ;
}
}

FCKeditor.prototype._InsertHtmlBefore = function( html, element )
{
if ( element.insertAdjacentHTML )	// IE
element.insertAdjacentHTML( 'beforeBegin', html ) ;
else								// Gecko
{
var oRange = document.createRange() ;
oRange.setStartBefore( element ) ;
var oFragment = oRange.createContextualFragment( html );
element.parentNode.insertBefore( oFragment, element ) ;
}
}

FCKeditor.prototype._GetConfigHtml = function()
{
var sConfig = '' ;
for ( var o in this.Config )
{
if ( sConfig.length > 0 ) sConfig += '&amp;' ;
sConfig += encodeURIComponent( o ) + '=' + encodeURIComponent( this.Config[o] ) ;
}

return '<input type="hidden" id="' + this.InstanceName + '___Config" value="' + sConfig + '" style="display:none" />' ;
}

FCKeditor.prototype._GetIFrameHtml = function()
{
var sFile = 'fckeditor.html' ;

try
{
if ( (/fcksource=true/i).test( window.top.location.search ) )
sFile = 'fckeditor.original.html' ;
}
catch (e) { /* Ignore it. Much probably we are inside a FRAME where the "top" is in another domain (security error). */ }

var sLink = this.BasePath + 'editor/' + sFile + '?InstanceName=' + encodeURIComponent( this.InstanceName ) ;
if (this.ToolbarSet)
sLink += '&amp;Toolbar=' + this.ToolbarSet ;

html = '<iframe id="' + this.InstanceName +
'___Frame" src="' + sLink +
'" width="' + this.Width +
'" height="' + this.Height ;

if ( this.TabIndex )
html += '" tabindex="' + this.TabIndex ;

html += '" frameborder="0" scrolling="no"></iframe>' ;

return html ;
}

FCKeditor.prototype._IsCompatibleBrowser = function()
{
return FCKeditor_IsCompatibleBrowser() ;
}

FCKeditor.prototype._ThrowError = function( errorNumber, errorDescription )
{
this.ErrorNumber		= errorNumber ;
this.ErrorDescription	= errorDescription ;

if ( this.DisplayErrors )
{
document.write( '<div style="COLOR: #ff0000">' ) ;
document.write( '[ FCKeditor Error ' + this.ErrorNumber + ': ' + this.ErrorDescription + ' ]' ) ;
document.write( '</div>' ) ;
}

if ( typeof( this.OnError ) == 'function' )
this.OnError( this, errorNumber, errorDescription ) ;
}

FCKeditor.prototype._HTMLEncode = function( text )
{
if ( typeof( text ) != "string" )
text = text.toString() ;

text = text.replace(
/&/g, "&amp;").replace(
/"/g, "&quot;").replace(
/</g, "&lt;").replace(
/>/g, "&gt;") ;

return text ;
}

;(function()
{
var textareaToEditor = function( textarea )
{
var editor = new FCKeditor( textarea.name ) ;

editor.Width = Math.max( textarea.offsetWidth, FCKeditor.MinWidth ) ;
editor.Height = Math.max( textarea.offsetHeight, FCKeditor.MinHeight ) ;

return editor ;
}

/**
* Replace all <textarea> elements available in the document with FCKeditor
* instances.
*
*	// Replace all <textarea> elements in the page.
*	FCKeditor.ReplaceAllTextareas() ;
*
*	// Replace all <textarea class="myClassName"> elements in the page.
*	FCKeditor.ReplaceAllTextareas( 'myClassName' ) ;
*
*	// Selectively replace <textarea> elements, based on custom assertions.
*	FCKeditor.ReplaceAllTextareas( function( textarea, editor )
*		{
*			// Custom code to evaluate the replace, returning false if it
*			// must not be done.
*			// It also passes the "editor" parameter, so the developer can
*			// customize the instance.
*		} ) ;
*/
FCKeditor.ReplaceAllTextareas = function()
{
var textareas = document.getElementsByTagName( 'textarea' ) ;

for ( var i = 0 ; i < textareas.length ; i++ )
{
var editor = null ;
var textarea = textareas[i] ;
var name = textarea.name ;

// The "name" attribute must exist.
if ( !name || name.length == 0 )
continue ;

if ( typeof arguments[0] == 'string' )
{
// The textarea class name could be passed as the function
// parameter.

var classRegex = new RegExp( '(?:^| )' + arguments[0] + '(?:$| )' ) ;

if ( !classRegex.test( textarea.className ) )
continue ;
}
else if ( typeof arguments[0] == 'function' )
{
// An assertion function could be passed as the function parameter.
// It must explicitly return "false" to ignore a specific <textarea>.
editor = textareaToEditor( textarea ) ;
if ( arguments[0]( textarea, editor ) === false )
continue ;
}

if ( !editor )
editor = textareaToEditor( textarea ) ;

editor.ReplaceTextarea() ;
}
}
})() ;

function FCKeditor_IsCompatibleBrowser()
{
var sAgent = navigator.userAgent.toLowerCase() ;

// Internet Explorer 5.5+
if ( /*@cc_on!@*/false && sAgent.indexOf("mac") == -1 )
{
var sBrowserVersion = navigator.appVersion.match(/MSIE (.\..)/)[1] ;
return ( sBrowserVersion >= 5.5 ) ;
}

// Gecko (Opera 9 tries to behave like Gecko at this point).
if ( navigator.product == "Gecko" && navigator.productSub >= 20030210 && !( typeof(opera) == 'object' && opera.postError ) )
return true ;

// Opera 9.50+
if ( window.opera && window.opera.version && parseFloat( window.opera.version() ) >= 9.5 )
return true ;

// Adobe AIR
// Checked before Safari because AIR have the WebKit rich text editor
// features from Safari 3.0.4, but the version reported is 420.
if ( sAgent.indexOf( ' adobeair/' ) != -1 )
return ( sAgent.match( / adobeair\/(\d+)/ )[1] >= 1 ) ;	// Build must be at least v1

// Safari 3+
if ( sAgent.indexOf( ' applewebkit/' ) != -1 )
return ( sAgent.match( / applewebkit\/(\d+)/ )[1] >= 522 ) ;	// Build must be at least 522 (v3)

return false ;
}
