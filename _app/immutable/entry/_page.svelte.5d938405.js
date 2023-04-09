import{S as R,i as K,s as Y,k as b,q as I,a as V,l as y,m as k,r as A,h as o,c as N,n as t,b as D,G as a,H as P,J as me,e as oe,K as ve,L as M,M as T,y as Z,z as ee,A as te,g as O,d as J,B as re,N as se,p as ke,f as pe,O as ge,v as be}from"../chunks/index.3b0981dd.js";import{b as _e}from"../chunks/paths.17292dac.js";const ne=[{name:"Guess the Tune",description:"A wordle-like game designed to teach sheet music reading.",githubAddress:"https://github.com/mit1mit1/guess-the-tune",siteAddress:"https://mit1mit1.github.io/guess-the-tune",iconName:"musicle.ico"},{name:"Newtonian Dog Fighter",description:"Fly small circles around bigger ones and run into each other.",githubAddress:"https://github.com/mit1mit1/newtonian-dog-fighter-3000",siteAddress:"https://mit1mit1.github.io/newtonian-dog-fighter-3000",iconName:"newtonian.png"},{name:"Software Dev Resources",description:"Notes on some resources I've found helpful as a software developer, and a comic based on some of the notes.",githubAddress:"https://github.com/mit1mit1/software-dev-resources",siteAddress:"https://mit1mit1.github.io/software-dev-resources",iconName:"beanie.ico"},{name:"Explomandlebrot",description:"An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",githubAddress:"https://github.com/mit1mit1/explomandlebrot",siteAddress:"https://mit1mit1.github.io/explomandlebrot",iconName:"mandlebrot.ico"},{name:"Napoleonic Chess Simulator",description:"Learn French, play chess, and fail history class. Featuring art by Tom Su (contact details available on request).",githubAddress:"https://github.com/mit1mit1/napoleonic-chess-simulator-3000",siteAddress:"https://mit1mit1.github.io/napoleonic-chess-simulator-3000",iconName:"Napoleon.svg"}],ye=u=>{var e,l;return(l=(e=u.split("https://").at(-1))==null?void 0:e.split("http://").at(-1))==null?void 0:l.split("www.").at(-1)};function ce(u,e,l){const r=u.slice();return r[0]=e[l],r}function we(u){let e;function l(i,v){return i[0].siteAddress?Ee:xe}let s=l(u)(u);return{c(){s.c(),e=oe()},l(i){s.l(i),e=oe()},m(i,v){s.m(i,v),D(i,e,v)},p(i,v){s.p(i,v)},d(i){s.d(i),i&&o(e)}}}function xe(u){let e,l;return{c(){e=b("img"),this.h()},l(r){e=y(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){t(e,"class","boxIcon svelte-19hj5zl"),ve(e.src,l=`${_e}/images/${u[0].iconName}`)||t(e,"src",l),t(e,"alt",`Picture of ${u[0].name}`)},m(r,s){D(r,e,s)},p:P,d(r){r&&o(e)}}}function Ee(u){let e,l,r;return{c(){e=b("a"),l=b("img"),this.h()},l(s){e=y(s,"A",{href:!0,target:!0,rel:!0,class:!0});var i=k(e);l=y(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(o),this.h()},h(){t(l,"class","boxIcon svelte-19hj5zl"),ve(l.src,r=`${_e}/images/${u[0].iconName}`)||t(l,"src",r),t(l,"alt",`Picture of ${u[0].name}`),t(e,"href",u[0].siteAddress),t(e,"target","_blank"),t(e,"rel","noreferrer"),t(e,"class","svelte-19hj5zl")},m(s,i){D(s,e,i),a(e,l)},p:P,d(s){s&&o(e)}}}function $e(u){let e=u[0].name+"",l;return{c(){l=I(e)},l(r){l=A(r,e)},m(r,s){D(r,l,s)},p:P,d(r){r&&o(l)}}}function je(u){let e,l=u[0].name+"",r;return{c(){e=b("a"),r=I(l),this.h()},l(s){e=y(s,"A",{href:!0,target:!0,rel:!0,class:!0});var i=k(e);r=A(i,l),i.forEach(o),this.h()},h(){t(e,"href",u[0].siteAddress),t(e,"target","_blank"),t(e,"rel","noreferrer"),t(e,"class","svelte-19hj5zl")},m(s,i){D(s,e,i),a(e,r)},p:P,d(s){s&&o(e)}}}function Ie(u){let e,l,r,s=ye(u[0].githubAddress)+"",i;return{c(){e=b("div"),l=I("Github: "),r=b("a"),i=I(s),this.h()},l(v){e=y(v,"DIV",{class:!0});var n=k(e);l=A(n,"Github: "),r=y(n,"A",{href:!0,target:!0,rel:!0});var c=k(r);i=A(c,s),c.forEach(o),n.forEach(o),this.h()},h(){t(r,"href",u[0].githubAddress),t(r,"target","_blank"),t(r,"rel","noreferrer"),t(e,"class","svelte-19hj5zl")},m(v,n){D(v,e,n),a(e,l),a(e,r),a(r,i)},p:P,d(v){v&&o(e)}}}function Ae(u){let e,l=u[0].description+"",r;return{c(){e=b("div"),r=I(l),this.h()},l(s){e=y(s,"DIV",{class:!0});var i=k(e);r=A(i,l),i.forEach(o),this.h()},h(){t(e,"class","svelte-19hj5zl")},m(s,i){D(s,e,i),a(e,r)},p:P,d(s){s&&o(e)}}}function ue(u){let e,l,r,s,i,v,n,c=u[0].iconName&&we(u);function h(g,m){return g[0].siteAddress?je:$e}let f=h(u)(u),d=u[0].githubAddress&&Ie(u),p=u[0].description&&Ae(u);return{c(){e=b("div"),l=b("h2"),c&&c.c(),r=V(),f.c(),s=V(),i=b("div"),d&&d.c(),v=V(),p&&p.c(),n=V(),this.h()},l(g){e=y(g,"DIV",{class:!0});var m=k(e);l=y(m,"H2",{class:!0});var w=k(l);c&&c.l(w),r=N(w),f.l(w),w.forEach(o),s=N(m),i=y(m,"DIV",{class:!0});var x=k(i);d&&d.l(x),v=N(x),p&&p.l(x),x.forEach(o),n=N(m),m.forEach(o),this.h()},h(){t(l,"class","projectTitle svelte-19hj5zl"),t(i,"class","detailsBox svelte-19hj5zl"),t(e,"class","projectBox svelte-19hj5zl")},m(g,m){D(g,e,m),a(e,l),c&&c.m(l,null),a(l,r),f.m(l,null),a(e,s),a(e,i),d&&d.m(i,null),a(i,v),p&&p.m(i,null),a(e,n)},p(g,m){g[0].iconName&&c.p(g,m),f.p(g,m),g[0].githubAddress&&d.p(g,m),g[0].description&&p.p(g,m)},d(g){g&&o(e),c&&c.d(),f.d(),d&&d.d(),p&&p.d()}}}function De(u){let e,l,r,s,i,v,n,c=ne,h=[];for(let _=0;_<c.length;_+=1)h[_]=ue(ce(u,c,_));return{c(){e=b("h1"),l=I("Personal projects"),r=V(),s=b("div"),i=I("In decreasing order of polish"),v=V(),n=b("div");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=y(_,"H1",{class:!0});var f=k(e);l=A(f,"Personal projects"),f.forEach(o),r=N(_),s=y(_,"DIV",{class:!0});var d=k(s);i=A(d,"In decreasing order of polish"),d.forEach(o),v=N(_),n=y(_,"DIV",{class:!0});var p=k(n);for(let g=0;g<h.length;g+=1)h[g].l(p);p.forEach(o),this.h()},h(){t(e,"class","svelte-19hj5zl"),t(s,"class","subheading svelte-19hj5zl"),t(n,"class","projectsContainer svelte-19hj5zl")},m(_,f){D(_,e,f),a(e,l),D(_,r,f),D(_,s,f),a(s,i),D(_,v,f),D(_,n,f);for(let d=0;d<h.length;d+=1)h[d].m(n,null)},p(_,[f]){if(f&0){c=ne;let d;for(d=0;d<c.length;d+=1){const p=ce(_,c,d);h[d]?h[d].p(p,f):(h[d]=ue(p),h[d].c(),h[d].m(n,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=c.length}},i:P,o:P,d(_){_&&o(e),_&&o(r),_&&o(s),_&&o(v),_&&o(n),me(h,_)}}}class Ve extends R{constructor(e){super(),K(this,e,null,De,Y,{})}}function Ne(u){let e,l,r,s,i,v,n,c,h,_,f,d,p,g,m,w,x,j,E,C,B,H;return{c(){e=b("h1"),l=I("Support"),r=V(),s=b("div"),i=b("div"),v=I(`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),n=b("ul"),c=b("li"),h=b("a"),_=I("givedirectly.org"),f=I(";"),d=V(),p=b("li"),g=b("a"),m=I("againstmalaria.com"),w=I(";"),x=V(),j=b("li"),E=I("any other charity you know is doing good work."),C=V(),B=b("div"),H=I("Feel free to let me know and I'll consider it game-development income."),this.h()},l($){e=y($,"H1",{class:!0});var z=k(e);l=A(z,"Support"),z.forEach(o),r=N($),s=y($,"DIV",{class:!0});var S=k(s);i=y(S,"DIV",{class:!0});var q=k(i);v=A(q,`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),n=y(q,"UL",{});var G=k(n);c=y(G,"LI",{});var L=k(c);h=y(L,"A",{href:!0,target:!0,rel:!0});var U=k(h);_=A(U,"givedirectly.org"),U.forEach(o),f=A(L,";"),L.forEach(o),d=N(G),p=y(G,"LI",{});var F=k(p);g=y(F,"A",{href:!0,target:!0,rel:!0});var W=k(g);m=A(W,"againstmalaria.com"),W.forEach(o),w=A(F,";"),F.forEach(o),x=N(G),j=y(G,"LI",{});var Q=k(j);E=A(Q,"any other charity you know is doing good work."),Q.forEach(o),G.forEach(o),q.forEach(o),C=N(S),B=y(S,"DIV",{class:!0});var X=k(B);H=A(X,"Feel free to let me know and I'll consider it game-development income."),X.forEach(o),S.forEach(o),this.h()},h(){t(e,"class","svelte-1gfqryh"),t(h,"href","https://www.givedirectly.org"),t(h,"target","_blank"),t(h,"rel","noreferrer"),t(g,"href","https://www.againstmalaria.com"),t(g,"target","_blank"),t(g,"rel","noreferrer"),t(i,"class","svelte-1gfqryh"),t(B,"class","svelte-1gfqryh"),t(s,"class","supportUsBox svelte-1gfqryh")},m($,z){D($,e,z),a(e,l),D($,r,z),D($,s,z),a(s,i),a(i,v),a(i,n),a(n,c),a(c,h),a(h,_),a(c,f),a(n,d),a(n,p),a(p,g),a(g,m),a(p,w),a(n,x),a(n,j),a(j,E),a(s,C),a(s,B),a(B,H)},p:P,i:P,o:P,d($){$&&o(e),$&&o(r),$&&o(s)}}}class Se extends R{constructor(e){super(),K(this,e,null,Ne,Y,{})}}function qe(u){let e,l,r,s,i,v,n,c,h,_,f,d,p,g,m,w,x;return{c(){e=M("svg"),l=M("rect"),r=M("line"),s=M("line"),i=M("line"),v=M("line"),n=M("line"),c=M("line"),h=M("line"),_=M("line"),f=M("line"),d=M("line"),p=M("line"),g=M("rect"),m=M("ellipse"),w=M("rect"),x=M("rect"),this.h()},l(j){e=T(j,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var E=k(e);l=T(E,"rect",{class:!0,x:!0,y:!0,stroke:!0,height:!0,width:!0,rx:!0,"stroke-width":!0,fill:!0}),k(l).forEach(o),r=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(r).forEach(o),s=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(s).forEach(o),i=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(i).forEach(o),v=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(v).forEach(o),n=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(n).forEach(o),c=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(c).forEach(o),h=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(h).forEach(o),_=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(_).forEach(o),f=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(f).forEach(o),d=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(d).forEach(o),p=T(E,"line",{"stroke-linejoin":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-width":!0,stroke:!0}),k(p).forEach(o),g=T(E,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),k(g).forEach(o),m=T(E,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0}),k(m).forEach(o),w=T(E,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),k(w).forEach(o),x=T(E,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0,rx:!0,fill:!0}),k(x).forEach(o),E.forEach(o),this.h()},h(){t(l,"class","stick-head"),t(l,"x","80"),t(l,"y","130"),t(l,"stroke","black"),t(l,"height","80"),t(l,"width","80"),t(l,"rx","22.857142857142858"),t(l,"stroke-width","2"),t(l,"fill","transparent"),t(r,"stroke-linejoin","round"),t(r,"class","stick-torso"),t(r,"x1","120"),t(r,"y1","210"),t(r,"x2","120"),t(r,"y2","330"),t(r,"stroke-width","2"),t(r,"stroke","black"),t(s,"stroke-linejoin","round"),t(s,"class","stick-upper-arm-right"),t(s,"x1","120"),t(s,"y1","241.2"),t(s,"x2","147.54"),t(s,"y2","295.85334756444473"),t(s,"stroke-width","2"),t(s,"stroke","black"),t(i,"stroke-linejoin","round"),t(i,"class","stick-upper-arm-left"),t(i,"x1","120"),t(i,"y1","241.2"),t(i,"x2","64.91999999999999"),t(i,"y2","214.52353846553106"),t(i,"stroke-width","2"),t(i,"stroke","black"),t(v,"stroke-linejoin","round"),t(v,"class","stick-lower-arm-right"),t(v,"x1","147.54"),t(v,"y1","295.85334756444473"),t(v,"x2","162.84"),t(v,"y2","355.1099927614182"),t(v,"stroke-width","2"),t(v,"stroke","black"),t(n,"stroke-linejoin","round"),t(n,"class","stick-lower-arm-left"),t(n,"x1","64.91999999999999"),t(n,"y1","214.52353846553106"),t(n,"x2","46.55999999999999"),t(n,"y2","156.14245933881398"),t(n,"stroke-width","2"),t(n,"stroke","black"),t(c,"stroke-linejoin","round"),t(c,"class","stick-hand-right"),t(c,"x1","162.84"),t(c,"y1","355.1099927614182"),t(c,"x2","166.20000000000002"),t(c,"y2","371.57056383292115"),t(c,"stroke-width","2"),t(c,"stroke","black"),t(h,"stroke-linejoin","round"),t(h,"class","stick-hand-left"),t(h,"x1","46.55999999999999"),t(h,"y1","156.14245933881398"),t(h,"x2","45.719999999999985"),t(h,"y2","139.36347248024592"),t(h,"stroke-width","2"),t(h,"stroke","black"),t(_,"stroke-linejoin","round"),t(_,"class","stick-upper-leg-right"),t(_,"x1","120"),t(_,"y1","330"),t(_,"x2","140.88"),t(_,"y2","396.3941684186194"),t(_,"stroke-width","2"),t(_,"stroke","black"),t(f,"stroke-linejoin","round"),t(f,"class","stick-upper-leg-left"),t(f,"x1","120"),t(f,"y1","330"),t(f,"x2","99.12"),t(f,"y2","396.3941684186194"),t(f,"stroke-width","2"),t(f,"stroke","black"),t(d,"stroke-linejoin","round"),t(d,"class","stick-lower-leg-right"),t(d,"x1","140.88"),t(d,"y1","396.3941684186194"),t(d,"x2","154.79999999999998"),t(d,"y2","464.5879628577031"),t(d,"stroke-width","2"),t(d,"stroke","black"),t(p,"stroke-linejoin","round"),t(p,"class","stick-lower-leg-left"),t(p,"x1","99.12"),t(p,"y1","396.3941684186194"),t(p,"x2","85.2"),t(p,"y2","464.5879628577031"),t(p,"stroke-width","2"),t(p,"stroke","black"),t(g,"class","beanie-fold"),t(g,"x","72.5"),t(g,"y","130"),t(g,"height","26.666666666666668"),t(g,"width","95"),t(g,"rx","8"),t(g,"fill","yellow"),t(m,"class","beanie-ellipse"),t(m,"cx","120"),t(m,"cy","132.66666666666666"),t(m,"rx","40"),t(m,"ry","16"),t(m,"fill","yellow"),t(w,"class","beanie-stripe"),t(w,"x","72.5"),t(w,"y","135.33333333333334"),t(w,"height","5.333333333333334"),t(w,"width","95"),t(w,"rx","2"),t(w,"fill","black"),t(x,"class","beanie=stripe"),t(x,"x","72.5"),t(x,"y","146"),t(x,"height","5.333333333333334"),t(x,"width","95"),t(x,"rx","2"),t(x,"fill","black"),t(e,"width","150"),t(e,"height","250"),t(e,"viewBox","0 0 270 500"),t(e,"class","wavingMeSVG svelte-y3l1yn")},m(j,E){D(j,e,E),a(e,l),a(e,r),a(e,s),a(e,i),a(e,v),a(e,n),a(e,c),a(e,h),a(e,_),a(e,f),a(e,d),a(e,p),a(e,g),a(e,m),a(e,w),a(e,x)},p:P,i:P,o:P,d(j){j&&o(e)}}}class Ce extends R{constructor(e){super(),K(this,e,null,qe,Y,{})}}function Pe(u){let e,l,r,s,i,v,n,c,h,_,f,d,p,g,m,w,x,j,E,C,B,H;return i=new Ce({}),{c(){e=b("h1"),l=I("About me"),r=V(),s=b("div"),Z(i.$$.fragment),v=V(),n=b("div"),c=b("div"),h=I("Hi there! I'm Mitch. I like beanies."),_=V(),f=b("div"),d=I(`I have 6 years experience building apps for administration and finance. I mostly work in
			Typescript/NodeJS, React and Python.`),p=V(),g=b("div"),m=I(`When I'm not working on those, I dabble in music and math flavoured projects as an excuse to
			try out new languages and frameworks.`),w=V(),x=b("div"),j=I("When I'm not working on "),E=b("i"),C=I("those"),B=I(`, I enjoy actually playing music, reading philosophy and
			fantasy, and board-gaming.`),this.h()},l($){e=y($,"H1",{});var z=k(e);l=A(z,"About me"),z.forEach(o),r=N($),s=y($,"DIV",{class:!0});var S=k(s);ee(i.$$.fragment,S),v=N(S),n=y(S,"DIV",{class:!0});var q=k(n);c=y(q,"DIV",{class:!0});var G=k(c);h=A(G,"Hi there! I'm Mitch. I like beanies."),G.forEach(o),_=N(q),f=y(q,"DIV",{class:!0});var L=k(f);d=A(L,`I have 6 years experience building apps for administration and finance. I mostly work in
			Typescript/NodeJS, React and Python.`),L.forEach(o),p=N(q),g=y(q,"DIV",{class:!0});var U=k(g);m=A(U,`When I'm not working on those, I dabble in music and math flavoured projects as an excuse to
			try out new languages and frameworks.`),U.forEach(o),w=N(q),x=y(q,"DIV",{class:!0});var F=k(x);j=A(F,"When I'm not working on "),E=y(F,"I",{});var W=k(E);C=A(W,"those"),W.forEach(o),B=A(F,`, I enjoy actually playing music, reading philosophy and
			fantasy, and board-gaming.`),F.forEach(o),q.forEach(o),S.forEach(o),this.h()},h(){t(c,"class","svelte-5g6lv2"),t(f,"class","svelte-5g6lv2"),t(g,"class","svelte-5g6lv2"),t(x,"class","svelte-5g6lv2"),t(n,"class","aboutMeText svelte-5g6lv2"),t(s,"class","aboutMeBox svelte-5g6lv2")},m($,z){D($,e,z),a(e,l),D($,r,z),D($,s,z),te(i,s,null),a(s,v),a(s,n),a(n,c),a(c,h),a(n,_),a(n,f),a(f,d),a(n,p),a(n,g),a(g,m),a(n,w),a(n,x),a(x,j),a(x,E),a(E,C),a(x,B),H=!0},p:P,i($){H||(O(i.$$.fragment,$),H=!0)},o($){J(i.$$.fragment,$),H=!1},d($){$&&o(e),$&&o(r),$&&o(s),re(i)}}}class ze extends R{constructor(e){super(),K(this,e,null,Pe,Y,{})}}function Me(u){let e,l,r,s,i,v,n,c,h,_,f,d,p,g,m,w,x,j,E,C,B,H,$,z;return{c(){e=b("h1"),l=I("Contact"),r=V(),s=b("div"),i=b("div"),v=b("span"),n=I("Gmail:"),c=V(),h=b("a"),_=I("guessthetunegame@gmail.com"),f=V(),d=b("div"),p=b("span"),g=I("LinkedIn:"),m=V(),w=b("a"),x=I("linkedin.com/in/midly/"),j=V(),E=b("div"),C=b("span"),B=I("GitHub:"),H=V(),$=b("a"),z=I("github.com/mit1mit1/"),this.h()},l(S){e=y(S,"H1",{class:!0});var q=k(e);l=A(q,"Contact"),q.forEach(o),r=N(S),s=y(S,"DIV",{class:!0});var G=k(s);i=y(G,"DIV",{class:!0});var L=k(i);v=y(L,"SPAN",{class:!0});var U=k(v);n=A(U,"Gmail:"),U.forEach(o),c=N(L),h=y(L,"A",{href:!0});var F=k(h);_=A(F,"guessthetunegame@gmail.com"),F.forEach(o),L.forEach(o),f=N(G),d=y(G,"DIV",{class:!0});var W=k(d);p=y(W,"SPAN",{class:!0});var Q=k(p);g=A(Q,"LinkedIn:"),Q.forEach(o),m=N(W),w=y(W,"A",{href:!0,target:!0,rel:!0});var X=k(w);x=A(X,"linkedin.com/in/midly/"),X.forEach(o),W.forEach(o),j=N(G),E=y(G,"DIV",{class:!0});var le=k(E);C=y(le,"SPAN",{class:!0});var ie=k(C);B=A(ie,"GitHub:"),ie.forEach(o),H=N(le),$=y(le,"A",{href:!0,target:!0,rel:!0});var ae=k($);z=A(ae,"github.com/mit1mit1/"),ae.forEach(o),le.forEach(o),G.forEach(o),this.h()},h(){t(e,"class","svelte-1kfkqn6"),t(v,"class","label svelte-1kfkqn6"),t(h,"href","mailto:guessthetunegame@gmail.com"),t(i,"class","svelte-1kfkqn6"),t(p,"class","label svelte-1kfkqn6"),t(w,"href","https://www.linkedin.com/in/midly/"),t(w,"target","_blank"),t(w,"rel","noreferrer"),t(d,"class","svelte-1kfkqn6"),t(C,"class","label svelte-1kfkqn6"),t($,"href","https://github.com/mit1mit1/"),t($,"target","_blank"),t($,"rel","noreferrer"),t(E,"class","svelte-1kfkqn6"),t(s,"class","contactBox svelte-1kfkqn6")},m(S,q){D(S,e,q),a(e,l),D(S,r,q),D(S,s,q),a(s,i),a(i,v),a(v,n),a(i,c),a(i,h),a(h,_),a(s,f),a(s,d),a(d,p),a(p,g),a(d,m),a(d,w),a(w,x),a(s,j),a(s,E),a(E,C),a(C,B),a(E,H),a(E,$),a($,z)},p:P,i:P,o:P,d(S){S&&o(e),S&&o(r),S&&o(s)}}}class Te extends R{constructor(e){super(),K(this,e,null,Me,Y,{})}}function he(u,e,l){const r=u.slice();return r[5]=e[l],r}function de(u){let e;return{c(){e=b("i"),this.h()},l(l){e=y(l,"I",{class:!0}),k(e).forEach(o),this.h()},h(){t(e,"class","fa-solid fa-bars phoneOnly buttonIcon svelte-kc2jfo")},m(l,r){D(l,e,r)},d(l){l&&o(e)}}}function fe(u){let e,l,r=u[5]+"",s,i,v,n,c,h=u[5]===u[0]&&u[1]===!1&&de();function _(){return u[4](u[5])}return{c(){e=b("button"),h&&h.c(),l=V(),s=I(r),i=V(),this.h()},l(f){e=y(f,"BUTTON",{class:!0});var d=k(e);h&&h.l(d),l=N(d),s=A(d,r),i=N(d),d.forEach(o),this.h()},h(){t(e,"class",v=se(u[5]===u[0]?"selectedTab":"")+" svelte-kc2jfo")},m(f,d){D(f,e,d),h&&h.m(e,null),a(e,l),a(e,s),a(e,i),n||(c=ge(e,"click",_),n=!0)},p(f,d){u=f,u[5]===u[0]&&u[1]===!1?h||(h=de(),h.c(),h.m(e,l)):h&&(h.d(1),h=null),d&1&&v!==(v=se(u[5]===u[0]?"selectedTab":"")+" svelte-kc2jfo")&&t(e,"class",v)},d(f){f&&o(e),h&&h.d(),n=!1,c()}}}function Ge(u){let e,l;return e=new Te({}),{c(){Z(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,s){te(e,r,s),l=!0},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){J(e.$$.fragment,r),l=!1},d(r){re(e,r)}}}function Be(u){let e,l;return e=new Se({}),{c(){Z(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,s){te(e,r,s),l=!0},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){J(e.$$.fragment,r),l=!1},d(r){re(e,r)}}}function He(u){let e,l;return e=new Ve({}),{c(){Z(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,s){te(e,r,s),l=!0},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){J(e.$$.fragment,r),l=!1},d(r){re(e,r)}}}function Le(u){let e,l;return e=new ze({}),{c(){Z(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,s){te(e,r,s),l=!0},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){J(e.$$.fragment,r),l=!1},d(r){re(e,r)}}}function Fe(u){let e,l,r,s,i,v,n,c,h,_=u[2],f=[];for(let m=0;m<_.length;m+=1)f[m]=fe(he(u,_,m));const d=[Le,He,Be,Ge],p=[];function g(m,w){return m[0]==="About me"?0:m[0]==="Personal projects"?1:m[0]==="Support"?2:m[0]==="Contact"?3:-1}return~(n=g(u))&&(c=p[n]=d[n](u)),{c(){e=b("body"),l=b("div");for(let m=0;m<f.length;m+=1)f[m].c();s=V(),i=b("div"),v=b("div"),c&&c.c(),this.h()},l(m){e=y(m,"BODY",{class:!0,"data-sveltekit-preload-data":!0});var w=k(e);l=y(w,"DIV",{class:!0});var x=k(l);for(let C=0;C<f.length;C+=1)f[C].l(x);x.forEach(o),s=N(w),i=y(w,"DIV",{style:!0});var j=k(i);v=y(j,"DIV",{class:!0});var E=k(v);c&&c.l(E),E.forEach(o),j.forEach(o),w.forEach(o),this.h()},h(){t(l,"class",r=se(`navContainer ${u[1]?"expandedContainer":""}`)+" svelte-kc2jfo"),t(v,"class","pageContainer svelte-kc2jfo"),ke(i,"display","contents"),t(e,"class","app svelte-kc2jfo"),t(e,"data-sveltekit-preload-data","hover")},m(m,w){D(m,e,w),a(e,l);for(let x=0;x<f.length;x+=1)f[x].m(l,null);a(e,s),a(e,i),a(i,v),~n&&p[n].m(v,null),h=!0},p(m,[w]){if(w&15){_=m[2];let j;for(j=0;j<_.length;j+=1){const E=he(m,_,j);f[j]?f[j].p(E,w):(f[j]=fe(E),f[j].c(),f[j].m(l,null))}for(;j<f.length;j+=1)f[j].d(1);f.length=_.length}(!h||w&2&&r!==(r=se(`navContainer ${m[1]?"expandedContainer":""}`)+" svelte-kc2jfo"))&&t(l,"class",r);let x=n;n=g(m),n!==x&&(c&&(be(),J(p[x],1,1,()=>{p[x]=null}),pe()),~n?(c=p[n],c||(c=p[n]=d[n](m),c.c()),O(c,1),c.m(v,null)):c=null)},i(m){h||(O(c),h=!0)},o(m){J(c),h=!1},d(m){m&&o(e),me(f,m),~n&&p[n].d()}}}function We(u,e,l){const r=["About me","Personal projects","Contact","Support"];let s="About me",i=!1;const v=c=>{s===c&&i===!1?l(1,i=!0):l(1,i=!1),l(0,s=c)};return[s,i,r,v,c=>v(c)]}class Je extends R{constructor(e){super(),K(this,e,We,Fe,Y,{})}}export{Je as default};
