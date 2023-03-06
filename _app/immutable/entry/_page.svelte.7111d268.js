import{S as R,i as U,s as O,k as w,q as I,a as N,l as x,m as g,r as A,h as a,c as S,n as t,b as C,G as o,H as M,J as he,e as se,K as de,L as z,M as G,y as W,z as J,A as Q,g as q,d as F,B as K,N as Y,p as me,f as ve,O as _e,v as ge}from"../chunks/index.3b0981dd.js";import{b as fe}from"../chunks/paths.3de2bbf8.js";const ie=[{name:"Guess the Tune",description:"A wordle inspired game designed to help teach sheet music reading and basic music theory.",githubAddress:"https://github.com/mit1mit1/guess-the-tune",siteAddress:"https://mit1mit1.github.io/guess-the-tune",iconName:"musicle.ico"},{name:"Newtonian Dog Fighter 3000",description:"Flying small circles around bigger ones and run into each other.",githubAddress:"https://github.com/mit1mit1/newtonian-dog-fighter-3000",siteAddress:"https://mit1mit1.github.io/newtonian-dog-fighter-3000",iconName:"newtonian.png"},{name:"Software Dev Resources",description:"A collection of links to various resources I've found helpful as a software dev, plus notes on some of them, and a comic representation of some of the notes.",githubAddress:"https://github.com/mit1mit1/software-dev-resources",siteAddress:"https://mit1mit1.github.io/software-dev-resources",iconName:"beanie.ico"},{name:"Explomandlebrot",description:"An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",githubAddress:"https://github.com/mit1mit1/explomandlebrot",siteAddress:"https://mit1mit1.github.io/explomandlebrot",iconName:"mandlebrot.ico"},{name:"Napoleonic Chess Simulator 3000",description:"A game about learning French, playing chess, and failing history class.",githubAddress:"https://github.com/mit1mit1/napoleonic-chess-simulator-3000",siteAddress:"https://mit1mit1.github.io/napoleonic-chess-simulator-3000",iconName:"Napoleon.svg"}],pe=h=>{var e,l;return(l=(e=h.split("https://").at(-1))==null?void 0:e.split("http://").at(-1))==null?void 0:l.split("www.").at(-1)};function oe(h,e,l){const r=h.slice();return r[0]=e[l],r}function ke(h){let e;function l(i,v){return i[0].siteAddress?be:ye}let s=l(h)(h);return{c(){s.c(),e=se()},l(i){s.l(i),e=se()},m(i,v){s.m(i,v),C(i,e,v)},p(i,v){s.p(i,v)},d(i){s.d(i),i&&a(e)}}}function ye(h){let e,l;return{c(){e=w("img"),this.h()},l(r){e=x(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){t(e,"class","boxIcon svelte-19hj5zl"),de(e.src,l=`${fe}/images/${h[0].iconName}`)||t(e,"src",l),t(e,"alt",`Picture of ${h[0].name}`)},m(r,s){C(r,e,s)},p:M,d(r){r&&a(e)}}}function be(h){let e,l,r;return{c(){e=w("a"),l=w("img"),this.h()},l(s){e=x(s,"A",{href:!0,target:!0,rel:!0,class:!0});var i=g(e);l=x(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(a),this.h()},h(){t(l,"class","boxIcon svelte-19hj5zl"),de(l.src,r=`${fe}/images/${h[0].iconName}`)||t(l,"src",r),t(l,"alt",`Picture of ${h[0].name}`),t(e,"href",h[0].siteAddress),t(e,"target","_blank"),t(e,"rel","noreferrer"),t(e,"class","svelte-19hj5zl")},m(s,i){C(s,e,i),o(e,l)},p:M,d(s){s&&a(e)}}}function we(h){let e=h[0].name+"",l;return{c(){l=I(e)},l(r){l=A(r,e)},m(r,s){C(r,l,s)},p:M,d(r){r&&a(l)}}}function xe(h){let e,l=h[0].name+"",r;return{c(){e=w("a"),r=I(l),this.h()},l(s){e=x(s,"A",{href:!0,target:!0,rel:!0,class:!0});var i=g(e);r=A(i,l),i.forEach(a),this.h()},h(){t(e,"href",h[0].siteAddress),t(e,"target","_blank"),t(e,"rel","noreferrer"),t(e,"class","svelte-19hj5zl")},m(s,i){C(s,e,i),o(e,r)},p:M,d(s){s&&a(e)}}}function Ee(h){let e,l=h[0].description+"",r;return{c(){e=w("div"),r=I(l),this.h()},l(s){e=x(s,"DIV",{class:!0});var i=g(e);r=A(i,l),i.forEach(a),this.h()},h(){t(e,"class","svelte-19hj5zl")},m(s,i){C(s,e,i),o(e,r)},p:M,d(s){s&&a(e)}}}function ae(h){let e,l,r,s,i,v,n,d,c=pe(h[0].githubAddress)+"",u,f,m,y=h[0].iconName&&ke(h);function $(b,_){return b[0].siteAddress?xe:we}let E=$(h)(h),k=h[0].description&&Ee(h);return{c(){e=w("div"),l=w("h2"),y&&y.c(),r=N(),E.c(),s=N(),i=w("div"),v=w("div"),n=I("Github: "),d=w("a"),u=I(c),f=N(),k&&k.c(),m=N(),this.h()},l(b){e=x(b,"DIV",{class:!0});var _=g(e);l=x(_,"H2",{class:!0});var j=g(l);y&&y.l(j),r=S(j),E.l(j),j.forEach(a),s=S(_),i=x(_,"DIV",{class:!0});var V=g(i);v=x(V,"DIV",{class:!0});var P=g(v);n=A(P,"Github: "),d=x(P,"A",{href:!0,target:!0,rel:!0});var D=g(d);u=A(D,c),D.forEach(a),P.forEach(a),f=S(V),k&&k.l(V),V.forEach(a),m=S(_),_.forEach(a),this.h()},h(){t(l,"class","projectTitle svelte-19hj5zl"),t(d,"href",h[0].githubAddress),t(d,"target","_blank"),t(d,"rel","noreferrer"),t(v,"class","svelte-19hj5zl"),t(i,"class","detailsBox svelte-19hj5zl"),t(e,"class","projectBox svelte-19hj5zl")},m(b,_){C(b,e,_),o(e,l),y&&y.m(l,null),o(l,r),E.m(l,null),o(e,s),o(e,i),o(i,v),o(v,n),o(v,d),o(d,u),o(i,f),k&&k.m(i,null),o(e,m)},p(b,_){b[0].iconName&&y.p(b,_),E.p(b,_),b[0].description&&k.p(b,_)},d(b){b&&a(e),y&&y.d(),E.d(),k&&k.d()}}}function $e(h){let e,l,r,s,i,v,n,d=ie,c=[];for(let u=0;u<d.length;u+=1)c[u]=ae(oe(h,d,u));return{c(){e=w("h1"),l=I("Projects"),r=N(),s=w("div"),i=I("In decreasing order of polish"),v=N(),n=w("div");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=x(u,"H1",{class:!0});var f=g(e);l=A(f,"Projects"),f.forEach(a),r=S(u),s=x(u,"DIV",{class:!0});var m=g(s);i=A(m,"In decreasing order of polish"),m.forEach(a),v=S(u),n=x(u,"DIV",{class:!0});var y=g(n);for(let $=0;$<c.length;$+=1)c[$].l(y);y.forEach(a),this.h()},h(){t(e,"class","svelte-19hj5zl"),t(s,"class","subheading svelte-19hj5zl"),t(n,"class","projectsContainer svelte-19hj5zl")},m(u,f){C(u,e,f),o(e,l),C(u,r,f),C(u,s,f),o(s,i),C(u,v,f),C(u,n,f);for(let m=0;m<c.length;m+=1)c[m].m(n,null)},p(u,[f]){if(f&0){d=ie;let m;for(m=0;m<d.length;m+=1){const y=oe(u,d,m);c[m]?c[m].p(y,f):(c[m]=ae(y),c[m].c(),c[m].m(n,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=d.length}},i:M,o:M,d(u){u&&a(e),u&&a(r),u&&a(s),u&&a(v),u&&a(n),he(c,u)}}}class je extends R{constructor(e){super(),U(this,e,null,$e,O,{})}}function Ie(h){let e,l,r,s,i,v,n,d,c,u,f,m,y,$,p,E,k,b,_,j,V,P;return{c(){e=w("h1"),l=I("Support"),r=N(),s=w("div"),i=w("div"),v=I(`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
        `),n=w("ul"),d=w("li"),c=w("a"),u=I("givedirectly.org"),f=I(";"),m=N(),y=w("li"),$=w("a"),p=I("againstmalaria.com"),E=I(";"),k=N(),b=w("li"),_=I("any other charity you know is doing good work."),j=N(),V=w("div"),P=I("Feel free to let me know and I'll consider it game-development income."),this.h()},l(D){e=x(D,"H1",{class:!0});var T=g(e);l=A(T,"Support"),T.forEach(a),r=S(D),s=x(D,"DIV",{class:!0});var H=g(s);i=x(H,"DIV",{class:!0});var L=g(i);v=A(L,`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
        `),n=x(L,"UL",{});var B=g(n);d=x(B,"LI",{});var X=g(d);c=x(X,"A",{href:!0,target:!0,rel:!0});var ee=g(c);u=A(ee,"givedirectly.org"),ee.forEach(a),f=A(X,";"),X.forEach(a),m=S(B),y=x(B,"LI",{});var Z=g(y);$=x(Z,"A",{href:!0,target:!0,rel:!0});var te=g($);p=A(te,"againstmalaria.com"),te.forEach(a),E=A(Z,";"),Z.forEach(a),k=S(B),b=x(B,"LI",{});var re=g(b);_=A(re,"any other charity you know is doing good work."),re.forEach(a),B.forEach(a),L.forEach(a),j=S(H),V=x(H,"DIV",{class:!0});var le=g(V);P=A(le,"Feel free to let me know and I'll consider it game-development income."),le.forEach(a),H.forEach(a),this.h()},h(){t(e,"class","svelte-1gfqryh"),t(c,"href","https://www.givedirectly.org"),t(c,"target","_blank"),t(c,"rel","noreferrer"),t($,"href","https://www.againstmalaria.com"),t($,"target","_blank"),t($,"rel","noreferrer"),t(i,"class","svelte-1gfqryh"),t(V,"class","svelte-1gfqryh"),t(s,"class","supportUsBox svelte-1gfqryh")},m(D,T){C(D,e,T),o(e,l),C(D,r,T),C(D,s,T),o(s,i),o(i,v),o(i,n),o(n,d),o(d,c),o(c,u),o(d,f),o(n,m),o(n,y),o(y,$),o($,p),o(y,E),o(n,k),o(n,b),o(b,_),o(s,j),o(s,V),o(V,P)},p:M,i:M,o:M,d(D){D&&a(e),D&&a(r),D&&a(s)}}}class Ae extends R{constructor(e){super(),U(this,e,null,Ie,O,{})}}function De(h){let e,l,r,s,i,v,n,d,c,u,f,m,y,$,p,E,k;return{c(){e=z("svg"),l=z("rect"),r=z("line"),s=z("line"),i=z("line"),v=z("line"),n=z("line"),d=z("line"),c=z("line"),u=z("line"),f=z("line"),m=z("line"),y=z("line"),$=z("rect"),p=z("ellipse"),E=z("rect"),k=z("rect"),this.h()},l(b){e=G(b,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var _=g(e);l=G(_,"rect",{class:!0,x:!0,y:!0,stroke:!0,height:!0,width:!0,rx:!0,"stroke-width":!0,fill:!0}),g(l).forEach(a),r=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(r).forEach(a),s=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(s).forEach(a),i=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(i).forEach(a),v=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(v).forEach(a),n=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(n).forEach(a),d=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(d).forEach(a),c=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(c).forEach(a),u=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(u).forEach(a),f=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(f).forEach(a),m=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(m).forEach(a),y=G(_,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),g(y).forEach(a),$=G(_,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),g($).forEach(a),p=G(_,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0}),g(p).forEach(a),E=G(_,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),g(E).forEach(a),k=G(_,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),g(k).forEach(a),_.forEach(a),this.h()},h(){t(l,"class","stick-head"),t(l,"x","80"),t(l,"y","130"),t(l,"stroke","black"),t(l,"height","80"),t(l,"width","80"),t(l,"rx","22.857142857142858"),t(l,"stroke-width","2"),t(l,"fill","transparent"),t(r,"stroke-linejoin","round"),t(r,"class","stick-torso"),t(r,"x1","120"),t(r,"y1","210"),t(r,"x2","120"),t(r,"y2","330"),t(r,"stroke-width","2"),t(r,"stroke","black"),t(s,"stroke-linejoin","round"),t(s,"class","stick-upper-arm-right"),t(s,"x1","120"),t(s,"y1","241.2"),t(s,"x2","147.54"),t(s,"y2","295.85334756444473"),t(s,"stroke-width","2"),t(s,"stroke","black"),t(i,"stroke-linejoin","round"),t(i,"class","stick-upper-arm-left"),t(i,"x1","120"),t(i,"y1","241.2"),t(i,"x2","64.91999999999999"),t(i,"y2","214.52353846553106"),t(i,"stroke-width","2"),t(i,"stroke","black"),t(v,"stroke-linejoin","round"),t(v,"class","stick-lower-arm-right"),t(v,"x1","147.54"),t(v,"y1","295.85334756444473"),t(v,"x2","162.84"),t(v,"y2","355.1099927614182"),t(v,"stroke-width","2"),t(v,"stroke","black"),t(n,"stroke-linejoin","round"),t(n,"class","stick-lower-arm-left"),t(n,"x1","64.91999999999999"),t(n,"y1","214.52353846553106"),t(n,"x2","46.55999999999999"),t(n,"y2","156.14245933881398"),t(n,"stroke-width","2"),t(n,"stroke","black"),t(d,"stroke-linejoin","round"),t(d,"class","stick-hand-right"),t(d,"x1","162.84"),t(d,"y1","355.1099927614182"),t(d,"x2","166.20000000000002"),t(d,"y2","371.57056383292115"),t(d,"stroke-width","2"),t(d,"stroke","black"),t(c,"stroke-linejoin","round"),t(c,"class","stick-hand-left"),t(c,"x1","46.55999999999999"),t(c,"y1","156.14245933881398"),t(c,"x2","45.719999999999985"),t(c,"y2","139.36347248024592"),t(c,"stroke-width","2"),t(c,"stroke","black"),t(u,"stroke-linejoin","round"),t(u,"class","stick-upper-leg-right"),t(u,"x1","120"),t(u,"y1","330"),t(u,"x2","140.88"),t(u,"y2","396.3941684186194"),t(u,"stroke-width","2"),t(u,"stroke","black"),t(f,"stroke-linejoin","round"),t(f,"class","stick-upper-leg-left"),t(f,"x1","120"),t(f,"y1","330"),t(f,"x2","99.12"),t(f,"y2","396.3941684186194"),t(f,"stroke-width","2"),t(f,"stroke","black"),t(m,"stroke-linejoin","round"),t(m,"class","stick-lower-leg-right"),t(m,"x1","140.88"),t(m,"y1","396.3941684186194"),t(m,"x2","154.79999999999998"),t(m,"y2","464.5879628577031"),t(m,"stroke-width","2"),t(m,"stroke","black"),t(y,"stroke-linejoin","round"),t(y,"class","stick-lower-leg-left"),t(y,"x1","99.12"),t(y,"y1","396.3941684186194"),t(y,"x2","85.2"),t(y,"y2","464.5879628577031"),t(y,"stroke-width","2"),t(y,"stroke","black"),t($,"class","beanie-fold"),t($,"x","72.5"),t($,"y","130"),t($,"height","26.666666666666668"),t($,"width","95"),t($,"rx","8"),t($,"fill","yellow"),t(p,"class","beanie-ellipse"),t(p,"cx","120"),t(p,"cy","132.66666666666666"),t(p,"rx","40"),t(p,"ry","16"),t(p,"fill","yellow"),t(E,"class","beanie-stripe"),t(E,"x","72.5"),t(E,"y","135.33333333333334"),t(E,"height","5.333333333333334"),t(E,"width","95"),t(E,"rx","2"),t(E,"fill","black"),t(k,"class","beanie=stripe"),t(k,"x","72.5"),t(k,"y","146"),t(k,"height","5.333333333333334"),t(k,"width","95"),t(k,"rx","2"),t(k,"fill","black"),t(e,"width","150"),t(e,"height","250"),t(e,"viewBox","0 0 270 500"),t(e,"class","wavingMeSVG svelte-y3l1yn")},m(b,_){C(b,e,_),o(e,l),o(e,r),o(e,s),o(e,i),o(e,v),o(e,n),o(e,d),o(e,c),o(e,u),o(e,f),o(e,m),o(e,y),o(e,$),o(e,p),o(e,E),o(e,k)},p:M,i:M,o:M,d(b){b&&a(e)}}}class Ve extends R{constructor(e){super(),U(this,e,null,De,O,{})}}function Ce(h){let e,l,r,s,i,v,n,d,c,u,f,m,y,$,p,E,k,b,_;return i=new Ve({}),{c(){e=w("h1"),l=I("About me"),r=N(),s=w("div"),W(i.$$.fragment),v=N(),n=w("div"),d=w("div"),c=I("This - is, me."),u=N(),f=w("div"),m=I("I'm an advanced mathematics major with a thesis in philosophy."),y=N(),$=w("div"),p=I(`I have 6 years of software
			engineering experience, starting with php and jQuery, and (thankfully) continuing with Python,
			NodeJS and React.`),E=N(),k=w("div"),b=I(`When I'm not working with those, I dabble in game design as an excuse to use Vue, Svelte, C
			and a touch of Rust.`),this.h()},l(j){e=x(j,"H1",{});var V=g(e);l=A(V,"About me"),V.forEach(a),r=S(j),s=x(j,"DIV",{class:!0});var P=g(s);J(i.$$.fragment,P),v=S(P),n=x(P,"DIV",{class:!0});var D=g(n);d=x(D,"DIV",{class:!0});var T=g(d);c=A(T,"This - is, me."),T.forEach(a),u=S(D),f=x(D,"DIV",{class:!0});var H=g(f);m=A(H,"I'm an advanced mathematics major with a thesis in philosophy."),H.forEach(a),y=S(D),$=x(D,"DIV",{class:!0});var L=g($);p=A(L,`I have 6 years of software
			engineering experience, starting with php and jQuery, and (thankfully) continuing with Python,
			NodeJS and React.`),L.forEach(a),E=S(D),k=x(D,"DIV",{class:!0});var B=g(k);b=A(B,`When I'm not working with those, I dabble in game design as an excuse to use Vue, Svelte, C
			and a touch of Rust.`),B.forEach(a),D.forEach(a),P.forEach(a),this.h()},h(){t(d,"class","svelte-5g6lv2"),t(f,"class","svelte-5g6lv2"),t($,"class","svelte-5g6lv2"),t(k,"class","svelte-5g6lv2"),t(n,"class","aboutMeText svelte-5g6lv2"),t(s,"class","aboutMeBox svelte-5g6lv2")},m(j,V){C(j,e,V),o(e,l),C(j,r,V),C(j,s,V),Q(i,s,null),o(s,v),o(s,n),o(n,d),o(d,c),o(n,u),o(n,f),o(f,m),o(n,y),o(n,$),o($,p),o(n,E),o(n,k),o(k,b),_=!0},p:M,i(j){_||(q(i.$$.fragment,j),_=!0)},o(j){F(i.$$.fragment,j),_=!1},d(j){j&&a(e),j&&a(r),j&&a(s),K(i)}}}class Ne extends R{constructor(e){super(),U(this,e,null,Ce,O,{})}}function Se(h){let e,l,r,s,i,v,n,d,c,u,f,m,y,$,p,E,k,b;return{c(){e=w("h1"),l=I("Contact"),r=N(),s=w("div"),i=w("div"),v=I("Gmail: "),n=w("a"),d=I("guessthetunegame@gmail.com"),c=N(),u=w("div"),f=I("GitHub: "),m=w("a"),y=I("github.com/mit1mit1/"),$=N(),p=w("div"),E=I("LinkedIn: "),k=w("a"),b=I("linkedin.com/in/midly/"),this.h()},l(_){e=x(_,"H1",{class:!0});var j=g(e);l=A(j,"Contact"),j.forEach(a),r=S(_),s=x(_,"DIV",{class:!0});var V=g(s);i=x(V,"DIV",{class:!0});var P=g(i);v=A(P,"Gmail: "),n=x(P,"A",{href:!0});var D=g(n);d=A(D,"guessthetunegame@gmail.com"),D.forEach(a),P.forEach(a),c=S(V),u=x(V,"DIV",{class:!0});var T=g(u);f=A(T,"GitHub: "),m=x(T,"A",{href:!0,target:!0,rel:!0});var H=g(m);y=A(H,"github.com/mit1mit1/"),H.forEach(a),T.forEach(a),$=S(V),p=x(V,"DIV",{class:!0});var L=g(p);E=A(L,"LinkedIn: "),k=x(L,"A",{href:!0,target:!0,rel:!0});var B=g(k);b=A(B,"linkedin.com/in/midly/"),B.forEach(a),L.forEach(a),V.forEach(a),this.h()},h(){t(e,"class","svelte-1st5ae3"),t(n,"href","mailto:guessthetunegame@gmail.com"),t(i,"class","svelte-1st5ae3"),t(m,"href","https://github.com/mit1mit1/"),t(m,"target","_blank"),t(m,"rel","noreferrer"),t(u,"class","svelte-1st5ae3"),t(k,"href","https://www.linkedin.com/in/midly/"),t(k,"target","_blank"),t(k,"rel","noreferrer"),t(p,"class","svelte-1st5ae3"),t(s,"class","contactBox svelte-1st5ae3")},m(_,j){C(_,e,j),o(e,l),C(_,r,j),C(_,s,j),o(s,i),o(i,v),o(i,n),o(n,d),o(s,c),o(s,u),o(u,f),o(u,m),o(m,y),o(s,$),o(s,p),o(p,E),o(p,k),o(k,b)},p:M,i:M,o:M,d(_){_&&a(e),_&&a(r),_&&a(s)}}}class ze extends R{constructor(e){super(),U(this,e,null,Se,O,{})}}function ne(h,e,l){const r=h.slice();return r[5]=e[l],r}function ce(h){let e;return{c(){e=w("i"),this.h()},l(l){e=x(l,"I",{class:!0}),g(e).forEach(a),this.h()},h(){t(e,"class","fa-solid fa-bars phoneOnly buttonIcon svelte-1jxux5f")},m(l,r){C(l,e,r)},d(l){l&&a(e)}}}function ue(h){let e,l,r=h[5]+"",s,i,v,n,d,c=h[5]===h[0]&&h[1]===!1&&ce();function u(){return h[4](h[5])}return{c(){e=w("button"),c&&c.c(),l=N(),s=I(r),i=N(),this.h()},l(f){e=x(f,"BUTTON",{class:!0});var m=g(e);c&&c.l(m),l=S(m),s=A(m,r),i=S(m),m.forEach(a),this.h()},h(){t(e,"class",v=Y(h[5]===h[0]?"selectedTab":"")+" svelte-1jxux5f")},m(f,m){C(f,e,m),c&&c.m(e,null),o(e,l),o(e,s),o(e,i),n||(d=_e(e,"click",u),n=!0)},p(f,m){h=f,h[5]===h[0]&&h[1]===!1?c||(c=ce(),c.c(),c.m(e,l)):c&&(c.d(1),c=null),m&1&&v!==(v=Y(h[5]===h[0]?"selectedTab":"")+" svelte-1jxux5f")&&t(e,"class",v)},d(f){f&&a(e),c&&c.d(),n=!1,d()}}}function Ge(h){let e,l;return e=new ze({}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),l=!0},i(r){l||(q(e.$$.fragment,r),l=!0)},o(r){F(e.$$.fragment,r),l=!1},d(r){K(e,r)}}}function Me(h){let e,l;return e=new Ae({}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),l=!0},i(r){l||(q(e.$$.fragment,r),l=!0)},o(r){F(e.$$.fragment,r),l=!1},d(r){K(e,r)}}}function Pe(h){let e,l;return e=new je({}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),l=!0},i(r){l||(q(e.$$.fragment,r),l=!0)},o(r){F(e.$$.fragment,r),l=!1},d(r){K(e,r)}}}function Te(h){let e,l;return e=new Ne({}),{c(){W(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),l=!0},i(r){l||(q(e.$$.fragment,r),l=!0)},o(r){F(e.$$.fragment,r),l=!1},d(r){K(e,r)}}}function Be(h){let e,l,r,s,i,v,n,d,c,u=h[2],f=[];for(let p=0;p<u.length;p+=1)f[p]=ue(ne(h,u,p));const m=[Te,Pe,Me,Ge],y=[];function $(p,E){return p[0]==="About me"?0:p[0]==="Projects"?1:p[0]==="Support"?2:p[0]==="Contact"?3:-1}return~(n=$(h))&&(d=y[n]=m[n](h)),{c(){e=w("body"),l=w("div");for(let p=0;p<f.length;p+=1)f[p].c();s=N(),i=w("div"),v=w("div"),d&&d.c(),this.h()},l(p){e=x(p,"BODY",{class:!0,"data-sveltekit-preload-data":!0});var E=g(e);l=x(E,"DIV",{class:!0});var k=g(l);for(let j=0;j<f.length;j+=1)f[j].l(k);k.forEach(a),s=S(E),i=x(E,"DIV",{style:!0});var b=g(i);v=x(b,"DIV",{class:!0});var _=g(v);d&&d.l(_),_.forEach(a),b.forEach(a),E.forEach(a),this.h()},h(){t(l,"class",r=Y(`navContainer ${h[1]?"expandedContainer":""}`)+" svelte-1jxux5f"),t(v,"class","pageContainer svelte-1jxux5f"),me(i,"display","contents"),t(e,"class","app svelte-1jxux5f"),t(e,"data-sveltekit-preload-data","hover")},m(p,E){C(p,e,E),o(e,l);for(let k=0;k<f.length;k+=1)f[k].m(l,null);o(e,s),o(e,i),o(i,v),~n&&y[n].m(v,null),c=!0},p(p,[E]){if(E&15){u=p[2];let b;for(b=0;b<u.length;b+=1){const _=ne(p,u,b);f[b]?f[b].p(_,E):(f[b]=ue(_),f[b].c(),f[b].m(l,null))}for(;b<f.length;b+=1)f[b].d(1);f.length=u.length}(!c||E&2&&r!==(r=Y(`navContainer ${p[1]?"expandedContainer":""}`)+" svelte-1jxux5f"))&&t(l,"class",r);let k=n;n=$(p),n!==k&&(d&&(ge(),F(y[k],1,1,()=>{y[k]=null}),ve()),~n?(d=y[n],d||(d=y[n]=m[n](p),d.c()),q(d,1),d.m(v,null)):d=null)},i(p){c||(q(d),c=!0)},o(p){F(d),c=!1},d(p){p&&a(e),he(f,p),~n&&y[n].d()}}}function He(h,e,l){const r=["About me","Projects","Contact","Support"];let s="About me",i=!1;const v=d=>{s===d&&i===!1?l(1,i=!0):l(1,i=!1),l(0,s=d)};return[s,i,r,v,d=>v(d)]}class Fe extends R{constructor(e){super(),U(this,e,He,Be,O,{})}}export{Fe as default};