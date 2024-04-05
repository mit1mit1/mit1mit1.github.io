import{S as B,i as D,s as F,k as _,q as w,a as A,l as g,m as v,r as $,h as u,c as I,n as f,b,G as p,M as N,K as q,L as E,F as G,y as M,z as T,A as C,g as H,d as L,B as z}from"../chunks/index.8a590306.js";import{b as V}from"../chunks/paths.0f077d84.js";const y=[{name:"Guess the Tune",description:"A wordle-like game designed to teach sheet music reading.",githubAddress:"https://github.com/mit1mit1/guess-the-tune",siteAddress:"https://mit1mit1.github.io/guess-the-tune",iconName:"musicle.ico",fadeInSpeed:"medium"},{name:"Newtonian Dog Fighter",description:"Fly small circles around bigger ones and run into each other.",githubAddress:"https://github.com/mit1mit1/newtonian-dog-fighter-3000",siteAddress:"https://mit1mit1.github.io/newtonian-dog-fighter-3000",iconName:"newtonian.png",fadeInSpeed:"slow"},{name:"Software Dev Resources",description:"Notes on some resources I've found helpful as a software developer, and a comic based on some of the notes.",githubAddress:"https://github.com/mit1mit1/software-dev-resources",siteAddress:"https://mit1mit1.github.io/software-dev-resources",iconName:"beanie.ico",needsBackground:!0,fadeInSpeed:"fast"},{name:"Explomandlebrot",description:"An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",githubAddress:"https://github.com/mit1mit1/explomandlebrot",siteAddress:"https://mit1mit1.github.io/explomandlebrot",iconName:"mandlebrot.ico",fadeInSpeed:"medium"},{name:"Napoleonic Chess Simulator",description:"Learn French, play chess, and fail history class. Featuring art by Tom Su (contact details available on request).",githubAddress:"https://github.com/mit1mit1/napoleonic-chess-simulator-3000",siteAddress:"https://mit1mit1.github.io/napoleonic-chess-simulator-3000",iconName:"Napoleon.svg",needsBackground:!0,fadeInSpeed:"slow"}],K=r=>{var e,i;return(i=(e=r.split("https://").at(-1))==null?void 0:e.split("http://").at(-1))==null?void 0:i.split("www.").at(-1)};function j(r,e,i){const t=r.slice();return t[0]=e[i],t}function R(r){let e,i,t,l,h=r[0].name+"",m,o=r[0].iconName&&O(r);return{c(){e=_("span"),i=_("h2"),o&&o.c(),t=A(),l=_("span"),m=w(h),this.h()},l(n){e=g(n,"SPAN",{});var a=v(e);i=g(a,"H2",{class:!0});var s=v(i);o&&o.l(s),t=I(s),l=g(s,"SPAN",{});var d=v(l);m=$(d,h),d.forEach(u),s.forEach(u),a.forEach(u),this.h()},h(){f(i,"class","projectTitle svelte-o8ta0c")},m(n,a){b(n,e,a),p(e,i),o&&o.m(i,null),p(i,t),p(i,l),p(l,m)},p(n,a){n[0].iconName&&o.p(n,a)},d(n){n&&u(e),o&&o.d()}}}function J(r){let e,i,t,l,h=r[0].name+"",m,o=r[0].iconName&&Q(r);return{c(){e=_("a"),i=_("h2"),o&&o.c(),t=A(),l=_("span"),m=w(h),this.h()},l(n){e=g(n,"A",{href:!0,target:!0,rel:!0});var a=v(e);i=g(a,"H2",{class:!0});var s=v(i);o&&o.l(s),t=I(s),l=g(s,"SPAN",{});var d=v(l);m=$(d,h),d.forEach(u),s.forEach(u),a.forEach(u),this.h()},h(){f(i,"class","projectTitle svelte-o8ta0c"),f(e,"href",r[0].siteAddress),f(e,"target","_blank"),f(e,"rel","noreferrer")},m(n,a){b(n,e,a),p(e,i),o&&o.m(i,null),p(i,t),p(i,l),p(l,m)},p(n,a){n[0].iconName&&o.p(n,a)},d(n){n&&u(e),o&&o.d()}}}function O(r){let e,i;return{c(){e=_("img"),this.h()},l(t){e=g(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(e,"class",E(`boxIcon ${r[0].needsBackground?"withBackground":""}`)+" svelte-o8ta0c"),G(e.src,i=`${V}/images/${r[0].iconName}`)||f(e,"src",i),f(e,"alt",`Picture of ${r[0].name}`)},m(t,l){b(t,e,l)},p:N,d(t){t&&u(e)}}}function Q(r){let e,i;return{c(){e=_("img"),this.h()},l(t){e=g(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(e,"class",E(`boxIcon ${r[0].needsBackground?"withBackground":""}`)+" svelte-o8ta0c"),G(e.src,i=`${V}/images/${r[0].iconName}`)||f(e,"src",i),f(e,"alt",`Picture of ${r[0].name}`)},m(t,l){b(t,e,l)},p:N,d(t){t&&u(e)}}}function U(r){let e,i,t,l=K(r[0].githubAddress)+"",h;return{c(){e=_("div"),i=w("Github: "),t=_("a"),h=w(l),this.h()},l(m){e=g(m,"DIV",{class:!0});var o=v(e);i=$(o,"Github: "),t=g(o,"A",{href:!0,target:!0,rel:!0});var n=v(t);h=$(n,l),n.forEach(u),o.forEach(u),this.h()},h(){f(t,"href",r[0].githubAddress),f(t,"target","_blank"),f(t,"rel","noreferrer"),f(e,"class","svelte-o8ta0c")},m(m,o){b(m,e,o),p(e,i),p(e,t),p(t,h)},p:N,d(m){m&&u(e)}}}function W(r){let e,i=r[0].description+"",t;return{c(){e=_("div"),t=w(i),this.h()},l(l){e=g(l,"DIV",{class:!0});var h=v(e);t=$(h,i),h.forEach(u),this.h()},h(){f(e,"class","svelte-o8ta0c")},m(l,h){b(l,e,h),p(e,t)},p:N,d(l){l&&u(e)}}}function P(r){let e,i,t,l,h;function m(d,c){return d[0].siteAddress?J:R}let n=m(r)(r),a=r[0].githubAddress&&U(r),s=r[0].description&&W(r);return{c(){e=_("div"),n.c(),i=A(),t=_("div"),a&&a.c(),l=A(),s&&s.c(),h=A(),this.h()},l(d){e=g(d,"DIV",{class:!0});var c=v(e);n.l(c),i=I(c),t=g(c,"DIV",{class:!0});var k=v(t);a&&a.l(k),l=I(k),s&&s.l(k),k.forEach(u),h=I(c),c.forEach(u),this.h()},h(){f(t,"class","detailsBox svelte-o8ta0c"),f(e,"class",E(`projectBox ${r[0].fadeInSpeed==="slow"&&"slowFade"} ${r[0].fadeInSpeed==="medium"&&"mediumFade"} ${r[0].fadeInSpeed==="fast"&&"fastFade"}`)+" svelte-o8ta0c")},m(d,c){b(d,e,c),n.m(e,null),p(e,i),p(e,t),a&&a.m(t,null),p(t,l),s&&s.m(t,null),p(e,h)},p(d,c){n.p(d,c),d[0].githubAddress&&a.p(d,c),d[0].description&&s.p(d,c)},d(d){d&&u(e),n.d(),a&&a.d(),s&&s.d()}}}function X(r){let e,i,t,l,h,m,o,n=y,a=[];for(let s=0;s<n.length;s+=1)a[s]=P(j(r,n,s));return{c(){e=_("h1"),i=w("Personal projects"),t=A(),l=_("div"),h=w("In decreasing order of polish"),m=A(),o=_("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=g(s,"H1",{class:!0});var d=v(e);i=$(d,"Personal projects"),d.forEach(u),t=I(s),l=g(s,"DIV",{class:!0});var c=v(l);h=$(c,"In decreasing order of polish"),c.forEach(u),m=I(s),o=g(s,"DIV",{class:!0});var k=v(o);for(let S=0;S<a.length;S+=1)a[S].l(k);k.forEach(u),this.h()},h(){f(e,"class","svelte-o8ta0c"),f(l,"class","subheading svelte-o8ta0c"),f(o,"class","projectsContainer svelte-o8ta0c")},m(s,d){b(s,e,d),p(e,i),b(s,t,d),b(s,l,d),p(l,h),b(s,m,d),b(s,o,d);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(o,null)},p(s,[d]){if(d&0){n=y;let c;for(c=0;c<n.length;c+=1){const k=j(s,n,c);a[c]?a[c].p(k,d):(a[c]=P(k),a[c].c(),a[c].m(o,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=n.length}},i:N,o:N,d(s){s&&u(e),s&&u(t),s&&u(l),s&&u(m),s&&u(o),q(a,s)}}}class Y extends B{constructor(e){super(),D(this,e,null,X,F,{})}}function Z(r){let e,i;return e=new Y({}),{c(){M(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){C(e,t,l),i=!0},p:N,i(t){i||(H(e.$$.fragment,t),i=!0)},o(t){L(e.$$.fragment,t),i=!1},d(t){z(e,t)}}}class te extends B{constructor(e){super(),D(this,e,null,Z,F,{})}}export{te as component};
