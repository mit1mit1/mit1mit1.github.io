import{S as oe,i as ne,s as ce,k as a,a as $,J as _s,l,m as o,h as r,c as A,K as ws,n as s,L as ye,b as N,G as e,H as z,M as jt,N as Ae,q as d,r as m,y as be,z as He,A as Ee,g as Ie,d as ke,B as $e,x as os,p as Es,f as Is,I as ks,O as $s,v as As}from"../chunks/index.371a4131.js";import{p as Ls}from"../chunks/stores.55f1464b.js";import{e as ys,j as Bs}from"../chunks/singletons.9716f1aa.js";const ns=["animate-flicker-7","animate-flicker-11","animate-flicker-13","animate-flicker-17","animate-flicker-19"],Rs=3840,Us=2160,Wt=8,Ds=Rs/Wt,Ss=Us/Wt,bs=[];let cs=0;for(;cs<1e3;)bs.push({x:Math.random()*Ds,y:Math.random()*Ss,radius:(Math.random()+1)/(2*Wt),class:ns[Math.floor(Math.random()*ns.length)],fill:`rgb(${200+Math.floor(Math.random()*54)}, ${200+Math.floor(Math.random()*54)}, ${200+Math.floor(Math.random()*54)})`}),cs++;const hs=[...bs];function fs(v,t,n){const i=v.slice();return i[0]=t[n],i}function us(v){let t;return{c(){t=_s("circle"),this.h()},l(n){t=ws(n,"circle",{cx:!0,cy:!0,r:!0,class:!0,fill:!0}),o(t).forEach(r),this.h()},h(){s(t,"cx",v[0].x),s(t,"cy",v[0].y),s(t,"r",v[0].radius),s(t,"class",Ae(v[0].class)+" svelte-15e7lv2"),s(t,"fill",v[0].fill)},m(n,i){N(n,t,i)},p:z,d(n){n&&r(t)}}}function Cs(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G,R,j,V,M,T,q,O=[...hs],D=[];for(let S=0;S<O.length;S+=1)D[S]=us(fs(v,O,S));return{c(){t=a("div"),n=a("picture"),i=a("source"),f=a("source"),y=a("source"),g=a("img"),h=$(),c=a("picture"),u=a("source"),_=a("source"),w=a("source"),I=a("img"),L=$(),E=a("picture"),B=a("source"),P=a("source"),U=a("source"),x=a("img"),F=$(),k=a("picture"),G=a("source"),R=a("source"),j=a("source"),V=a("img"),T=$(),q=_s("svg");for(let S=0;S<D.length;S+=1)D[S].c();this.h()},l(S){t=l(S,"DIV",{class:!0});var W=o(t);n=l(W,"PICTURE",{});var C=o(n);i=l(C,"SOURCE",{srcset:!0,type:!0}),f=l(C,"SOURCE",{srcset:!0,type:!0}),y=l(C,"SOURCE",{srcset:!0,type:!0}),g=l(C,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),C.forEach(r),h=A(W),c=l(W,"PICTURE",{});var Y=o(c);u=l(Y,"SOURCE",{srcset:!0,type:!0}),_=l(Y,"SOURCE",{srcset:!0,type:!0}),w=l(Y,"SOURCE",{srcset:!0,type:!0}),I=l(Y,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Y.forEach(r),L=A(W),E=l(W,"PICTURE",{});var J=o(E);B=l(J,"SOURCE",{srcset:!0,type:!0}),P=l(J,"SOURCE",{srcset:!0,type:!0}),U=l(J,"SOURCE",{srcset:!0,type:!0}),x=l(J,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),J.forEach(r),F=A(W),k=l(W,"PICTURE",{});var K=o(k);G=l(K,"SOURCE",{srcset:!0,type:!0}),R=l(K,"SOURCE",{srcset:!0,type:!0}),j=l(K,"SOURCE",{srcset:!0,type:!0}),V=l(K,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),K.forEach(r),T=A(W),q=ws(W,"svg",{id:!0,viewBox:!0,xmlns:!0,class:!0});var te=o(q);for(let ee=0;ee<D.length;ee+=1)D[ee].l(te);te.forEach(r),W.forEach(r),this.h()},h(){s(i,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(i,"type","image/avif"),s(f,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(f,"type","image/webp"),s(y,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(y,"type","image/png"),s(g,"class","mitchClouds svelte-15e7lv2"),ye(g.src,p=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(g,"src",p),s(g,"alt","A nutjob"),s(g,"width","914"),s(g,"height","915"),s(u,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(u,"type","image/avif"),s(_,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(_,"type","image/webp"),s(w,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(w,"type","image/png"),s(I,"class","mitchClouds secondCloud svelte-15e7lv2"),ye(I.src,b=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(I,"src",b),s(I,"alt","A nutjob"),s(I,"width","914"),s(I,"height","915"),s(B,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(B,"type","image/avif"),s(P,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(P,"type","image/webp"),s(U,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(U,"type","image/png"),s(x,"class","mitchClouds thirdCloud svelte-15e7lv2"),ye(x.src,H=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(x,"src",H),s(x,"alt","A nutjob"),s(x,"width","914"),s(x,"height","915"),s(G,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(G,"type","image/avif"),s(R,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(R,"type","image/webp"),s(j,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(j,"type","image/png"),s(V,"class","mitchClouds fourthCloud svelte-15e7lv2"),ye(V.src,M=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(V,"src",M),s(V,"alt","A nutjob"),s(V,"width","914"),s(V,"height","915"),s(q,"id","boxOfStars"),s(q,"viewBox","0 0 480 270"),s(q,"xmlns","http://www.w3.org/2000/svg"),s(q,"class","svelte-15e7lv2"),s(t,"class","pageHolder svelte-15e7lv2")},m(S,W){N(S,t,W),e(t,n),e(n,i),e(n,f),e(n,y),e(n,g),e(t,h),e(t,c),e(c,u),e(c,_),e(c,w),e(c,I),e(t,L),e(t,E),e(E,B),e(E,P),e(E,U),e(E,x),e(t,F),e(t,k),e(k,G),e(k,R),e(k,j),e(k,V),e(t,T),e(t,q);for(let C=0;C<D.length;C+=1)D[C]&&D[C].m(q,null)},p(S,[W]){if(W&0){O=[...hs];let C;for(C=0;C<O.length;C+=1){const Y=fs(S,O,C);D[C]?D[C].p(Y,W):(D[C]=us(Y),D[C].c(),D[C].m(q,null))}for(;C<D.length;C+=1)D[C].d(1);D.length=O.length}},i:z,o:z,d(S){S&&r(t),jt(D,S)}}}class Gs extends oe{constructor(t){super(),ne(this,t,null,Cs,ce,{})}}function xs(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L;return{c(){t=a("ul"),n=a("li"),i=a("a"),f=d("Python"),y=d(` is nice for
		smaller applications, and thanks to type hinting is increasingly plausible for larger projects;`),g=$(),p=a("li"),h=a("a"),c=d("C++"),u=d(` is good fun for computation-heavy
		hobby projects;`),_=$(),w=a("li"),I=a("a"),b=d("PostgreSQL"),L=d(" is my preferred DB (yay for open-source);"),this.h()},l(E){t=l(E,"UL",{});var B=o(t);n=l(B,"LI",{});var P=o(n);i=l(P,"A",{href:!0});var U=o(i);f=m(U,"Python"),U.forEach(r),y=m(P,` is nice for
		smaller applications, and thanks to type hinting is increasingly plausible for larger projects;`),P.forEach(r),g=A(B),p=l(B,"LI",{});var x=o(p);h=l(x,"A",{href:!0});var H=o(h);c=m(H,"C++"),H.forEach(r),u=m(x,` is good fun for computation-heavy
		hobby projects;`),x.forEach(r),_=A(B),w=l(B,"LI",{});var F=o(w);I=l(F,"A",{href:!0});var k=o(I);b=m(k,"PostgreSQL"),k.forEach(r),L=m(F," is my preferred DB (yay for open-source);"),F.forEach(r),B.forEach(r),this.h()},h(){s(i,"href","https://docs.python.org/3/faq/general.html#why-is-it-called-python"),s(h,"href","https://en.wiktionary.org/wiki/C%2B%2B#Etymology"),s(I,"href","https://www.postgresql.org/about/")},m(E,B){N(E,t,B),e(t,n),e(n,i),e(i,f),e(n,y),e(t,g),e(t,p),e(p,h),e(h,c),e(p,u),e(t,_),e(t,w),e(w,I),e(I,b),e(w,L)},p:z,i:z,o:z,d(E){E&&r(t)}}}class Ps extends oe{constructor(t){super(),ne(this,t,null,xs,ce,{})}}function Vs(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G,R,j;return{c(){t=a("ul"),n=a("li"),i=a("a"),f=d("GitHub Actions"),y=d(` evidently do
		the trick for hobby projects, but
		`),g=a("a"),p=d("Buildkite"),h=d(`
		is my favorite pipeline platform so far;`),c=$(),u=a("li"),_=a("a"),w=d("Terraform"),I=d(` is brilliant for
		infrastructure management;`),b=$(),L=a("li"),E=a("a"),B=d("Docker"),P=d(` for getting everything
		working `),U=a("em"),x=d("consistently"),H=d(";"),F=$(),k=a("li"),G=a("a"),R=d("AWS"),j=d(` is the cloud
		platform I use at my current company;`),this.h()},l(V){t=l(V,"UL",{});var M=o(t);n=l(M,"LI",{});var T=o(n);i=l(T,"A",{href:!0});var q=o(i);f=m(q,"GitHub Actions"),q.forEach(r),y=m(T,` evidently do
		the trick for hobby projects, but
		`),g=l(T,"A",{href:!0});var O=o(g);p=m(O,"Buildkite"),O.forEach(r),h=m(T,`
		is my favorite pipeline platform so far;`),T.forEach(r),c=A(M),u=l(M,"LI",{});var D=o(u);_=l(D,"A",{href:!0});var S=o(_);w=m(S,"Terraform"),S.forEach(r),I=m(D,` is brilliant for
		infrastructure management;`),D.forEach(r),b=A(M),L=l(M,"LI",{});var W=o(L);E=l(W,"A",{href:!0});var C=o(E);B=m(C,"Docker"),C.forEach(r),P=m(W,` for getting everything
		working `),U=l(W,"EM",{});var Y=o(U);x=m(Y,"consistently"),Y.forEach(r),H=m(W,";"),W.forEach(r),F=A(M),k=l(M,"LI",{});var J=o(k);G=l(J,"A",{href:!0});var K=o(G);R=m(K,"AWS"),K.forEach(r),j=m(J,` is the cloud
		platform I use at my current company;`),J.forEach(r),M.forEach(r),this.h()},h(){s(i,"href","https://github.com/mit1mit1/mit1mit1.github.io/actions"),s(g,"href","https://buildkite.com/docs/pipelines/create-your-own"),s(_,"href","https://www.terraform.io/use-cases/infrastructure-as-code"),s(E,"href","https://docs.docker.com/get-started/overview/"),s(G,"href","https://docs.aws.amazon.com/s3/?icmpid=docs_homepage_featuredsvcs")},m(V,M){N(V,t,M),e(t,n),e(n,i),e(i,f),e(n,y),e(n,g),e(g,p),e(n,h),e(t,c),e(t,u),e(u,_),e(_,w),e(u,I),e(t,b),e(t,L),e(L,E),e(E,B),e(L,P),e(L,U),e(U,x),e(L,H),e(t,F),e(t,k),e(k,G),e(G,R),e(k,j)},p:z,i:z,o:z,d(V){V&&r(t)}}}class Ts extends oe{constructor(t){super(),ne(this,t,null,Vs,ce,{})}}function js(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G,R,j,V,M,T,q,O;return{c(){t=a("ul"),n=a("li"),i=a("a"),f=d("React"),y=d(` is my library of choice for heavier
		projects;`),g=$(),p=a("li"),h=a("a"),c=d("Svelte"),u=d(" is my framework of choice for lighter ones;"),_=$(),w=a("li"),I=a("a"),b=d("Typescript"),L=d(" is amazing (typed > untyped);"),E=$(),B=a("li"),P=a("a"),U=d("Zustand"),x=d(` and
		`),H=a("a"),F=d("Jotai"),k=d(`
		are tied for my current favorite State Management library at the moment.`),G=$(),R=a("li"),j=a("a"),V=d("JSS"),M=d(` is my current favorite styling library for
		SPAs, though I prefer good old `),T=a("a"),q=d("Sass"),O=d(" for design systems;"),this.h()},l(D){t=l(D,"UL",{});var S=o(t);n=l(S,"LI",{});var W=o(n);i=l(W,"A",{href:!0});var C=o(i);f=m(C,"React"),C.forEach(r),y=m(W,` is my library of choice for heavier
		projects;`),W.forEach(r),g=A(S),p=l(S,"LI",{});var Y=o(p);h=l(Y,"A",{href:!0});var J=o(h);c=m(J,"Svelte"),J.forEach(r),u=m(Y," is my framework of choice for lighter ones;"),Y.forEach(r),_=A(S),w=l(S,"LI",{});var K=o(w);I=l(K,"A",{href:!0});var te=o(I);b=m(te,"Typescript"),te.forEach(r),L=m(K," is amazing (typed > untyped);"),K.forEach(r),E=A(S),B=l(S,"LI",{});var ee=o(B);P=l(ee,"A",{href:!0});var ae=o(P);U=m(ae,"Zustand"),ae.forEach(r),x=m(ee,` and
		`),H=l(ee,"A",{href:!0});var Le=o(H);F=m(Le,"Jotai"),Le.forEach(r),k=m(ee,`
		are tied for my current favorite State Management library at the moment.`),ee.forEach(r),G=A(S),R=l(S,"LI",{});var Z=o(R);j=l(Z,"A",{href:!0});var he=o(j);V=m(he,"JSS"),he.forEach(r),M=m(Z,` is my current favorite styling library for
		SPAs, though I prefer good old `),T=l(Z,"A",{href:!0});var Be=o(T);q=m(Be,"Sass"),Be.forEach(r),O=m(Z," for design systems;"),Z.forEach(r),S.forEach(r),this.h()},h(){s(i,"href","https://react.dev/learn/describing-the-ui"),s(h,"href","https://svelte.dev/docs/introduction"),s(I,"href","https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"),s(P,"href","https://github.com/pmndrs/zustand"),s(H,"href","https://jotai.org/"),s(j,"href","https://cssinjs.org/?v=v10.10.0"),s(T,"href","https://sass-lang.com/guide/")},m(D,S){N(D,t,S),e(t,n),e(n,i),e(i,f),e(n,y),e(t,g),e(t,p),e(p,h),e(h,c),e(p,u),e(t,_),e(t,w),e(w,I),e(I,b),e(w,L),e(t,E),e(t,B),e(B,P),e(P,U),e(B,x),e(B,H),e(H,F),e(B,k),e(t,G),e(t,R),e(R,j),e(j,V),e(R,M),e(R,T),e(T,q),e(R,O)},p:z,i:z,o:z,d(D){D&&r(t)}}}class Ws extends oe{constructor(t){super(),ne(this,t,null,js,ce,{})}}function Ms(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G,R,j,V;return{c(){t=a("ul"),n=a("li"),i=a("a"),f=d("React Testing Library"),y=d(` is brilliant,
		as is Kent C. Dodd's philosophy behind it;`),g=$(),p=a("li"),h=a("a"),c=d("Cypress"),u=d(` and
		`),_=a("a"),w=d("Playwright"),I=d(` are both very worthwhile when kept light
		enough to be quick and reliable;`),b=$(),L=a("li"),E=a("a"),B=d("Datadog"),P=d(` is brilliant for metrics and
		monitoring to make sure nothing is going wrong;
		`),U=a("a"),x=d("Heap"),H=d(` is brilliant for metrics to figure
		out whether what you're building is useful;`),F=$(),k=a("li"),G=d(`There's always a disclaimer that automated testing is never sufficient to guarantee
		accessibility. That may be so, but damn does `),R=a("a"),j=d("Axe"),V=d(` get you
		a long way towards it;`),this.h()},l(M){t=l(M,"UL",{});var T=o(t);n=l(T,"LI",{});var q=o(n);i=l(q,"A",{href:!0});var O=o(i);f=m(O,"React Testing Library"),O.forEach(r),y=m(q,` is brilliant,
		as is Kent C. Dodd's philosophy behind it;`),q.forEach(r),g=A(T),p=l(T,"LI",{});var D=o(p);h=l(D,"A",{href:!0});var S=o(h);c=m(S,"Cypress"),S.forEach(r),u=m(D,` and
		`),_=l(D,"A",{href:!0});var W=o(_);w=m(W,"Playwright"),W.forEach(r),I=m(D,` are both very worthwhile when kept light
		enough to be quick and reliable;`),D.forEach(r),b=A(T),L=l(T,"LI",{});var C=o(L);E=l(C,"A",{href:!0});var Y=o(E);B=m(Y,"Datadog"),Y.forEach(r),P=m(C,` is brilliant for metrics and
		monitoring to make sure nothing is going wrong;
		`),U=l(C,"A",{href:!0});var J=o(U);x=m(J,"Heap"),J.forEach(r),H=m(C,` is brilliant for metrics to figure
		out whether what you're building is useful;`),C.forEach(r),F=A(T),k=l(T,"LI",{});var K=o(k);G=m(K,`There's always a disclaimer that automated testing is never sufficient to guarantee
		accessibility. That may be so, but damn does `),R=l(K,"A",{href:!0});var te=o(R);j=m(te,"Axe"),te.forEach(r),V=m(K,` get you
		a long way towards it;`),K.forEach(r),T.forEach(r),this.h()},h(){s(i,"href","https://testing-library.com/docs/guiding-principles/"),s(h,"href","https://www.cypress.io/"),s(_,"href","https://playwright.dev/docs/intro"),s(E,"href","https://docs.datadoghq.com/monitors/"),s(U,"href","https://www.heap.io/use-case/user-behavior"),s(R,"href","https://www.deque.com/axe/")},m(M,T){N(M,t,T),e(t,n),e(n,i),e(i,f),e(n,y),e(t,g),e(t,p),e(p,h),e(h,c),e(p,u),e(p,_),e(_,w),e(p,I),e(t,b),e(t,L),e(L,E),e(E,B),e(L,P),e(L,U),e(U,x),e(L,H),e(t,F),e(t,k),e(k,G),e(k,R),e(R,j),e(k,V)},p:z,i:z,o:z,d(M){M&&r(t)}}}class Hs extends oe{constructor(t){super(),ne(this,t,null,Ms,ce,{})}}function Os(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G,R,j,V,M,T,q,O,D,S,W,C,Y,J,K,te,ee,ae,Le,Z,he,Be,st,we,rt,fe,se,Re,at,lt,re,it,ot,nt,Oe,ct,ht,Ne,ft,ut,dt,ue,mt,pt,vt,gt,Ue,_t,wt,X,De,yt,bt,Se,Et,It,Ce,kt,$t,Ge,At,Lt,xe,Bt,Rt,le,Pe,Ut,Dt,de,St,Ve,Ct,Gt,xt,me,Pt,Te,Vt,Tt,qe;return T=new Ws({}),C=new Ps({}),ae=new Ts({}),we=new Hs({}),{c(){t=a("h1"),n=d("Design | logically"),i=$(),f=a("div"),y=a("div"),g=a("picture"),p=a("source"),h=a("source"),c=a("source"),u=a("img"),w=$(),I=a("div"),b=a("div"),L=d("Hello there!"),E=$(),B=a("div"),P=d("I'm Mitch."),U=$(),x=a("div"),H=d("I make web apps cleaner, faster and more effective."),F=$(),k=a("div"),G=a("div"),R=a("div"),j=a("h2"),V=d("Frontend tools"),M=$(),be(T.$$.fragment),q=$(),O=a("div"),D=a("h2"),S=d("Backend tools"),W=$(),be(C.$$.fragment),Y=$(),J=a("div"),K=a("h2"),te=d("Deployment tools"),ee=$(),be(ae.$$.fragment),Le=$(),Z=a("div"),he=a("h2"),Be=d("Testing and observability tools"),st=$(),be(we.$$.fragment),rt=$(),fe=a("div"),se=a("div"),Re=a("h2"),at=d("Experience"),lt=$(),re=a("div"),it=d("For the past "),ot=d(v[0]),nt=d(` and a bit years I've been building apps on everything from
				`),Oe=a("code"),ct=d("Laravel / jQuery"),ht=d(`
				to `),Ne=a("code"),ft=d("Python / React"),ut=d("."),dt=$(),ue=a("div"),mt=d(`I've built greenfield projects from the ground up and I've refactored software older than I
				am (according to my calculations, `),pt=d(v[1]),vt=d(")."),gt=$(),Ue=a("div"),_t=d("At the moment I work in design system engineering and developer enablement."),wt=$(),X=a("div"),De=a("h2"),yt=d("Education"),bt=$(),Se=a("div"),Et=d(`While you can certainly be a great software engineer without a degree, in my experience it
				can be helpful.`),It=$(),Ce=a("div"),kt=d("Pure mathematics made me think through the behavior of abstract formal systems."),$t=$(),Ge=a("div"),At=d(`Logic and computational algorithms gave me pretty directly applicable tools to study those
				systems`),Lt=$(),xe=a("div"),Bt=d(`My thesis on the philosophy of mathematics was almost maximally removed from
				practical relevance, but it did stretch my ability to think and write as clearly as possible
				about abstract subjects.`),Rt=$(),le=a("div"),Pe=a("h2"),Ut=d("Music"),Dt=$(),de=a("div"),St=d("Somewhere along the way I picked up a taste for playing guitar too. You can check me out at "),Ve=a("a"),Ct=d("uncut jams"),Gt=d(" if you're ready for a messy, messy cover."),xt=$(),me=a("div"),Pt=d("On the other hand, if you want to listen to musical savant, I recommend "),Te=a("a"),Vt=d("Bill Wurtz"),Tt=d("."),this.h()},l(Q){t=l(Q,"H1",{class:!0});var pe=o(t);n=m(pe,"Design | logically"),pe.forEach(r),i=A(Q),f=l(Q,"DIV",{class:!0});var Mt=o(f);y=l(Mt,"DIV",{class:!0});var ze=o(y);g=l(ze,"PICTURE",{});var Fe=o(g);p=l(Fe,"SOURCE",{srcset:!0,type:!0}),h=l(Fe,"SOURCE",{srcset:!0,type:!0}),c=l(Fe,"SOURCE",{srcset:!0,type:!0}),u=l(Fe,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Fe.forEach(r),w=A(ze),I=l(ze,"DIV",{class:!0});var je=o(I);b=l(je,"DIV",{});var Ht=o(b);L=m(Ht,"Hello there!"),Ht.forEach(r),E=A(je),B=l(je,"DIV",{});var Ot=o(B);P=m(Ot,"I'm Mitch."),Ot.forEach(r),U=A(je),x=l(je,"DIV",{});var Nt=o(x);H=m(Nt,"I make web apps cleaner, faster and more effective."),Nt.forEach(r),je.forEach(r),ze.forEach(r),Mt.forEach(r),F=A(Q),k=l(Q,"DIV",{class:!0});var Qe=o(k);G=l(Qe,"DIV",{});var ve=o(G);R=l(ve,"DIV",{class:!0});var Ye=o(R);j=l(Ye,"H2",{class:!0});var Ft=o(j);V=m(Ft,"Frontend tools"),Ft.forEach(r),M=A(Ye),He(T.$$.fragment,Ye),Ye.forEach(r),q=A(ve),O=l(ve,"DIV",{class:!0});var Je=o(O);D=l(Je,"H2",{class:!0});var qt=o(D);S=m(qt,"Backend tools"),qt.forEach(r),W=A(Je),He(C.$$.fragment,Je),Je.forEach(r),Y=A(ve),J=l(ve,"DIV",{class:!0});var Ke=o(J);K=l(Ke,"H2",{class:!0});var zt=o(K);te=m(zt,"Deployment tools"),zt.forEach(r),ee=A(Ke),He(ae.$$.fragment,Ke),Ke.forEach(r),Le=A(ve),Z=l(ve,"DIV",{class:!0});var Ze=o(Z);he=l(Ze,"H2",{class:!0});var Qt=o(he);Be=m(Qt,"Testing and observability tools"),Qt.forEach(r),st=A(Ze),He(we.$$.fragment,Ze),Ze.forEach(r),ve.forEach(r),rt=A(Qe),fe=l(Qe,"DIV",{});var We=o(fe);se=l(We,"DIV",{class:!0});var ge=o(se);Re=l(ge,"H2",{class:!0});var Yt=o(Re);at=m(Yt,"Experience"),Yt.forEach(r),lt=A(ge),re=l(ge,"DIV",{class:!0});var _e=o(re);it=m(_e,"For the past "),ot=m(_e,v[0]),nt=m(_e,` and a bit years I've been building apps on everything from
				`),Oe=l(_e,"CODE",{});var Jt=o(Oe);ct=m(Jt,"Laravel / jQuery"),Jt.forEach(r),ht=m(_e,`
				to `),Ne=l(_e,"CODE",{});var Kt=o(Ne);ft=m(Kt,"Python / React"),Kt.forEach(r),ut=m(_e,"."),_e.forEach(r),dt=A(ge),ue=l(ge,"DIV",{class:!0});var Xe=o(ue);mt=m(Xe,`I've built greenfield projects from the ground up and I've refactored software older than I
				am (according to my calculations, `),pt=m(Xe,v[1]),vt=m(Xe,")."),Xe.forEach(r),gt=A(ge),Ue=l(ge,"DIV",{class:!0});var Zt=o(Ue);_t=m(Zt,"At the moment I work in design system engineering and developer enablement."),Zt.forEach(r),ge.forEach(r),wt=A(We),X=l(We,"DIV",{class:!0});var ie=o(X);De=l(ie,"H2",{class:!0});var Xt=o(De);yt=m(Xt,"Education"),Xt.forEach(r),bt=A(ie),Se=l(ie,"DIV",{class:!0});var es=o(Se);Et=m(es,`While you can certainly be a great software engineer without a degree, in my experience it
				can be helpful.`),es.forEach(r),It=A(ie),Ce=l(ie,"DIV",{class:!0});var ts=o(Ce);kt=m(ts,"Pure mathematics made me think through the behavior of abstract formal systems."),ts.forEach(r),$t=A(ie),Ge=l(ie,"DIV",{class:!0});var ss=o(Ge);At=m(ss,`Logic and computational algorithms gave me pretty directly applicable tools to study those
				systems`),ss.forEach(r),Lt=A(ie),xe=l(ie,"DIV",{class:!0});var rs=o(xe);Bt=m(rs,`My thesis on the philosophy of mathematics was almost maximally removed from
				practical relevance, but it did stretch my ability to think and write as clearly as possible
				about abstract subjects.`),rs.forEach(r),ie.forEach(r),Rt=A(We),le=l(We,"DIV",{class:!0});var Me=o(le);Pe=l(Me,"H2",{class:!0});var as=o(Pe);Ut=m(as,"Music"),as.forEach(r),Dt=A(Me),de=l(Me,"DIV",{class:!0});var et=o(de);St=m(et,"Somewhere along the way I picked up a taste for playing guitar too. You can check me out at "),Ve=l(et,"A",{href:!0});var ls=o(Ve);Ct=m(ls,"uncut jams"),ls.forEach(r),Gt=m(et," if you're ready for a messy, messy cover."),et.forEach(r),xt=A(Me),me=l(Me,"DIV",{class:!0});var tt=o(me);Pt=m(tt,"On the other hand, if you want to listen to musical savant, I recommend "),Te=l(tt,"A",{href:!0});var is=o(Te);Vt=m(is,"Bill Wurtz"),is.forEach(r),Tt=m(tt,"."),tt.forEach(r),Me.forEach(r),We.forEach(r),Qe.forEach(r),this.h()},h(){s(t,"class","siteWelcome"),s(p,"srcset",""+new URL("../assets/yellGlowClear.81ea48c6.avif",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.05f2d96d.avif",import.meta.url).href+" 1530w"),s(p,"type","image/avif"),s(h,"srcset",""+new URL("../assets/yellGlowClear.3969214d.webp",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.95879bfb.webp",import.meta.url).href+" 1530w"),s(h,"type","image/webp"),s(c,"srcset",""+new URL("../assets/yellGlowClear.21939b2f.png",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.64daaee0.png",import.meta.url).href+" 1530w"),s(c,"type","image/png"),s(u,"class","mitchMug svelte-55p1ff"),ye(u.src,_=""+new URL("../assets/yellGlowClear.64daaee0.png",import.meta.url).href)||s(u,"src",_),s(u,"alt","Another nutjob"),s(u,"width","1530"),s(u,"height","1530"),s(I,"class","aboutMeText svelte-55p1ff"),s(y,"class","aboutMeBox svelte-55p1ff"),s(f,"class","aboutMeGrid svelte-55p1ff"),s(j,"class","boxTitle svelte-55p1ff"),s(R,"class","infoBox svelte-55p1ff"),s(D,"class","boxTitle svelte-55p1ff"),s(O,"class","infoBox svelte-55p1ff"),s(K,"class","boxTitle svelte-55p1ff"),s(J,"class","infoBox svelte-55p1ff"),s(he,"class","boxTitle svelte-55p1ff"),s(Z,"class","infoBox svelte-55p1ff"),s(Re,"class","boxTitle svelte-55p1ff"),s(re,"class","experienceParagraph svelte-55p1ff"),s(ue,"class","experienceParagraph svelte-55p1ff"),s(Ue,"class","experienceParagraph svelte-55p1ff"),s(se,"class","infoBox svelte-55p1ff"),s(De,"class","boxTitle svelte-55p1ff"),s(Se,"class","experienceParagraph svelte-55p1ff"),s(Ce,"class","experienceParagraph svelte-55p1ff"),s(Ge,"class","experienceParagraph svelte-55p1ff"),s(xe,"class","experienceParagraph svelte-55p1ff"),s(X,"class","infoBox svelte-55p1ff"),s(Pe,"class","boxTitle svelte-55p1ff"),s(Ve,"href","https://www.youtube.com/watch?v=YudszPRA5PA&ab_channel=uncutjams"),s(de,"class","experienceParagraph svelte-55p1ff"),s(Te,"href","https://www.youtube.com/watch?v=YBgvQ6QKV5k"),s(me,"class","experienceParagraph svelte-55p1ff"),s(le,"class","infoBox svelte-55p1ff"),s(k,"class","infoGrid svelte-55p1ff")},m(Q,pe){N(Q,t,pe),e(t,n),N(Q,i,pe),N(Q,f,pe),e(f,y),e(y,g),e(g,p),e(g,h),e(g,c),e(g,u),e(y,w),e(y,I),e(I,b),e(b,L),e(I,E),e(I,B),e(B,P),e(I,U),e(I,x),e(x,H),N(Q,F,pe),N(Q,k,pe),e(k,G),e(G,R),e(R,j),e(j,V),e(R,M),Ee(T,R,null),e(G,q),e(G,O),e(O,D),e(D,S),e(O,W),Ee(C,O,null),e(G,Y),e(G,J),e(J,K),e(K,te),e(J,ee),Ee(ae,J,null),e(G,Le),e(G,Z),e(Z,he),e(he,Be),e(Z,st),Ee(we,Z,null),e(k,rt),e(k,fe),e(fe,se),e(se,Re),e(Re,at),e(se,lt),e(se,re),e(re,it),e(re,ot),e(re,nt),e(re,Oe),e(Oe,ct),e(re,ht),e(re,Ne),e(Ne,ft),e(re,ut),e(se,dt),e(se,ue),e(ue,mt),e(ue,pt),e(ue,vt),e(se,gt),e(se,Ue),e(Ue,_t),e(fe,wt),e(fe,X),e(X,De),e(De,yt),e(X,bt),e(X,Se),e(Se,Et),e(X,It),e(X,Ce),e(Ce,kt),e(X,$t),e(X,Ge),e(Ge,At),e(X,Lt),e(X,xe),e(xe,Bt),e(fe,Rt),e(fe,le),e(le,Pe),e(Pe,Ut),e(le,Dt),e(le,de),e(de,St),e(de,Ve),e(Ve,Ct),e(de,Gt),e(le,xt),e(le,me),e(me,Pt),e(me,Te),e(Te,Vt),e(me,Tt),qe=!0},p:z,i(Q){qe||(Ie(T.$$.fragment,Q),Ie(C.$$.fragment,Q),Ie(ae.$$.fragment,Q),Ie(we.$$.fragment,Q),qe=!0)},o(Q){ke(T.$$.fragment,Q),ke(C.$$.fragment,Q),ke(ae.$$.fragment,Q),ke(we.$$.fragment,Q),qe=!1},d(Q){Q&&r(t),Q&&r(i),Q&&r(f),Q&&r(F),Q&&r(k),$e(T),$e(C),$e(ae),$e(we)}}}function Ns(v){const t=new Date().getFullYear()-2017,n=new Date().getFullYear()-1998;return[t,n]}class Fs extends oe{constructor(t){super(),ne(this,t,Ns,Os,ce,{})}}function qs(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F,k,G;return{c(){t=a("h1"),n=d("Contact"),i=$(),f=a("div"),y=a("div"),g=a("span"),p=d("Gmail:"),h=$(),c=a("a"),u=d("guessthetunegame@gmail.com"),_=$(),w=a("div"),I=a("span"),b=d("LinkedIn:"),L=$(),E=a("a"),B=d("linkedin.com/in/midly/"),P=$(),U=a("div"),x=a("span"),H=d("GitHub:"),F=$(),k=a("a"),G=d("github.com/mit1mit1/"),this.h()},l(R){t=l(R,"H1",{});var j=o(t);n=m(j,"Contact"),j.forEach(r),i=A(R),f=l(R,"DIV",{class:!0});var V=o(f);y=l(V,"DIV",{class:!0});var M=o(y);g=l(M,"SPAN",{class:!0});var T=o(g);p=m(T,"Gmail:"),T.forEach(r),h=A(M),c=l(M,"A",{href:!0});var q=o(c);u=m(q,"guessthetunegame@gmail.com"),q.forEach(r),M.forEach(r),_=A(V),w=l(V,"DIV",{class:!0});var O=o(w);I=l(O,"SPAN",{class:!0});var D=o(I);b=m(D,"LinkedIn:"),D.forEach(r),L=A(O),E=l(O,"A",{href:!0,target:!0,rel:!0});var S=o(E);B=m(S,"linkedin.com/in/midly/"),S.forEach(r),O.forEach(r),P=A(V),U=l(V,"DIV",{class:!0});var W=o(U);x=l(W,"SPAN",{class:!0});var C=o(x);H=m(C,"GitHub:"),C.forEach(r),F=A(W),k=l(W,"A",{href:!0,target:!0,rel:!0});var Y=o(k);G=m(Y,"github.com/mit1mit1/"),Y.forEach(r),W.forEach(r),V.forEach(r),this.h()},h(){s(g,"class","label svelte-1i13fsy"),s(c,"href","mailto:guessthetunegame@gmail.com"),s(y,"class","svelte-1i13fsy"),s(I,"class","label svelte-1i13fsy"),s(E,"href","https://www.linkedin.com/in/midly/"),s(E,"target","_blank"),s(E,"rel","noreferrer"),s(w,"class","svelte-1i13fsy"),s(x,"class","label svelte-1i13fsy"),s(k,"href","https://github.com/mit1mit1/"),s(k,"target","_blank"),s(k,"rel","noreferrer"),s(U,"class","svelte-1i13fsy"),s(f,"class","contactBox svelte-1i13fsy")},m(R,j){N(R,t,j),e(t,n),N(R,i,j),N(R,f,j),e(f,y),e(y,g),e(g,p),e(y,h),e(y,c),e(c,u),e(f,_),e(f,w),e(w,I),e(I,b),e(w,L),e(w,E),e(E,B),e(f,P),e(f,U),e(U,x),e(x,H),e(U,F),e(U,k),e(k,G)},p:z,i:z,o:z,d(R){R&&r(t),R&&r(i),R&&r(f)}}}class zs extends oe{constructor(t){super(),ne(this,t,null,qs,ce,{})}}const ds=[{name:"Guess the Tune",description:"A wordle-like game designed to teach sheet music reading.",githubAddress:"https://github.com/mit1mit1/guess-the-tune",siteAddress:"https://mit1mit1.github.io/guess-the-tune",iconName:"musicle.ico",fadeInSpeed:"medium"},{name:"Newtonian Dog Fighter",description:"Fly small circles around bigger ones and run into each other.",githubAddress:"https://github.com/mit1mit1/newtonian-dog-fighter-3000",siteAddress:"https://mit1mit1.github.io/newtonian-dog-fighter-3000",iconName:"newtonian.png",fadeInSpeed:"slow"},{name:"Software Dev Resources",description:"Notes on some resources I've found helpful as a software developer, and a comic based on some of the notes.",githubAddress:"https://github.com/mit1mit1/software-dev-resources",siteAddress:"https://mit1mit1.github.io/software-dev-resources",iconName:"beanie.ico",needsBackground:!0,fadeInSpeed:"fast"},{name:"Explomandlebrot",description:"An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",githubAddress:"https://github.com/mit1mit1/explomandlebrot",siteAddress:"https://mit1mit1.github.io/explomandlebrot",iconName:"mandlebrot.ico",fadeInSpeed:"medium"},{name:"Napoleonic Chess Simulator",description:"Learn French, play chess, and fail history class. Featuring art by Tom Su (contact details available on request).",githubAddress:"https://github.com/mit1mit1/napoleonic-chess-simulator-3000",siteAddress:"https://mit1mit1.github.io/napoleonic-chess-simulator-3000",iconName:"Napoleon.svg",needsBackground:!0,fadeInSpeed:"slow"}],Qs=v=>{var t,n;return(n=(t=v.split("https://").at(-1))==null?void 0:t.split("http://").at(-1))==null?void 0:n.split("www.").at(-1)};function ms(v,t,n){const i=v.slice();return i[0]=t[n],i}function Ys(v){let t,n,i,f,y=v[0].name+"",g,p=v[0].iconName&&Ks(v);return{c(){t=a("span"),n=a("h2"),p&&p.c(),i=$(),f=a("span"),g=d(y),this.h()},l(h){t=l(h,"SPAN",{});var c=o(t);n=l(c,"H2",{class:!0});var u=o(n);p&&p.l(u),i=A(u),f=l(u,"SPAN",{});var _=o(f);g=m(_,y),_.forEach(r),u.forEach(r),c.forEach(r),this.h()},h(){s(n,"class","projectTitle svelte-154h5up")},m(h,c){N(h,t,c),e(t,n),p&&p.m(n,null),e(n,i),e(n,f),e(f,g)},p(h,c){h[0].iconName&&p.p(h,c)},d(h){h&&r(t),p&&p.d()}}}function Js(v){let t,n,i,f,y=v[0].name+"",g,p=v[0].iconName&&Zs(v);return{c(){t=a("a"),n=a("h2"),p&&p.c(),i=$(),f=a("span"),g=d(y),this.h()},l(h){t=l(h,"A",{href:!0,target:!0,rel:!0});var c=o(t);n=l(c,"H2",{class:!0});var u=o(n);p&&p.l(u),i=A(u),f=l(u,"SPAN",{});var _=o(f);g=m(_,y),_.forEach(r),u.forEach(r),c.forEach(r),this.h()},h(){s(n,"class","projectTitle svelte-154h5up"),s(t,"href",v[0].siteAddress),s(t,"target","_blank"),s(t,"rel","noreferrer")},m(h,c){N(h,t,c),e(t,n),p&&p.m(n,null),e(n,i),e(n,f),e(f,g)},p(h,c){h[0].iconName&&p.p(h,c)},d(h){h&&r(t),p&&p.d()}}}function Ks(v){let t,n;return{c(){t=a("img"),this.h()},l(i){t=l(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){s(t,"class",Ae(`boxIcon ${v[0].needsBackground?"withBackground":""}`)+" svelte-154h5up"),ye(t.src,n=`${ys}/images/${v[0].iconName}`)||s(t,"src",n),s(t,"alt",`Picture of ${v[0].name}`)},m(i,f){N(i,t,f)},p:z,d(i){i&&r(t)}}}function Zs(v){let t,n;return{c(){t=a("img"),this.h()},l(i){t=l(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){s(t,"class",Ae(`boxIcon ${v[0].needsBackground?"withBackground":""}`)+" svelte-154h5up"),ye(t.src,n=`${ys}/images/${v[0].iconName}`)||s(t,"src",n),s(t,"alt",`Picture of ${v[0].name}`)},m(i,f){N(i,t,f)},p:z,d(i){i&&r(t)}}}function Xs(v){let t,n,i,f=Qs(v[0].githubAddress)+"",y;return{c(){t=a("div"),n=d("Github: "),i=a("a"),y=d(f),this.h()},l(g){t=l(g,"DIV",{});var p=o(t);n=m(p,"Github: "),i=l(p,"A",{href:!0,target:!0,rel:!0});var h=o(i);y=m(h,f),h.forEach(r),p.forEach(r),this.h()},h(){s(i,"href",v[0].githubAddress),s(i,"target","_blank"),s(i,"rel","noreferrer")},m(g,p){N(g,t,p),e(t,n),e(t,i),e(i,y)},p:z,d(g){g&&r(t)}}}function er(v){let t,n=v[0].description+"",i;return{c(){t=a("div"),i=d(n)},l(f){t=l(f,"DIV",{});var y=o(t);i=m(y,n),y.forEach(r)},m(f,y){N(f,t,y),e(t,i)},p:z,d(f){f&&r(t)}}}function ps(v){let t,n,i,f,y;function g(_,w){return _[0].siteAddress?Js:Ys}let h=g(v)(v),c=v[0].githubAddress&&Xs(v),u=v[0].description&&er(v);return{c(){t=a("div"),h.c(),n=$(),i=a("div"),c&&c.c(),f=$(),u&&u.c(),y=$(),this.h()},l(_){t=l(_,"DIV",{class:!0});var w=o(t);h.l(w),n=A(w),i=l(w,"DIV",{class:!0});var I=o(i);c&&c.l(I),f=A(I),u&&u.l(I),I.forEach(r),y=A(w),w.forEach(r),this.h()},h(){s(i,"class","detailsBox svelte-154h5up"),s(t,"class",Ae(`projectBox ${v[0].fadeInSpeed==="slow"&&"slowFade"} ${v[0].fadeInSpeed==="medium"&&"mediumFade"} ${v[0].fadeInSpeed==="fast"&&"fastFade"}`)+" svelte-154h5up")},m(_,w){N(_,t,w),h.m(t,null),e(t,n),e(t,i),c&&c.m(i,null),e(i,f),u&&u.m(i,null),e(t,y)},p(_,w){h.p(_,w),_[0].githubAddress&&c.p(_,w),_[0].description&&u.p(_,w)},d(_){_&&r(t),h.d(),c&&c.d(),u&&u.d()}}}function tr(v){let t,n,i,f,y,g,p,h=ds,c=[];for(let u=0;u<h.length;u+=1)c[u]=ps(ms(v,h,u));return{c(){t=a("h1"),n=d("Personal projects"),i=$(),f=a("div"),y=d("In decreasing order of polish"),g=$(),p=a("div");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=l(u,"H1",{class:!0});var _=o(t);n=m(_,"Personal projects"),_.forEach(r),i=A(u),f=l(u,"DIV",{class:!0});var w=o(f);y=m(w,"In decreasing order of polish"),w.forEach(r),g=A(u),p=l(u,"DIV",{class:!0});var I=o(p);for(let b=0;b<c.length;b+=1)c[b].l(I);I.forEach(r),this.h()},h(){s(t,"class","svelte-154h5up"),s(f,"class","subheading svelte-154h5up"),s(p,"class","projectsContainer svelte-154h5up")},m(u,_){N(u,t,_),e(t,n),N(u,i,_),N(u,f,_),e(f,y),N(u,g,_),N(u,p,_);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(p,null)},p(u,[_]){if(_&0){h=ds;let w;for(w=0;w<h.length;w+=1){const I=ms(u,h,w);c[w]?c[w].p(I,_):(c[w]=ps(I),c[w].c(),c[w].m(p,null))}for(;w<c.length;w+=1)c[w].d(1);c.length=h.length}},i:z,o:z,d(u){u&&r(t),u&&r(i),u&&r(f),u&&r(g),u&&r(p),jt(c,u)}}}class sr extends oe{constructor(t){super(),ne(this,t,null,tr,ce,{})}}function rr(v){let t,n,i,f,y,g,p,h,c,u,_,w,I,b,L,E,B,P,U,x,H,F;return{c(){t=a("h1"),n=d("Support"),i=$(),f=a("div"),y=a("div"),g=d(`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),p=a("ul"),h=a("li"),c=a("a"),u=d("givedirectly.org"),_=d(";"),w=$(),I=a("li"),b=a("a"),L=d("againstmalaria.com"),E=d(";"),B=$(),P=a("li"),U=d("any other charity you know is doing good work."),x=$(),H=a("div"),F=d("Feel free to let me know and I'll consider it game-development income."),this.h()},l(k){t=l(k,"H1",{});var G=o(t);n=m(G,"Support"),G.forEach(r),i=A(k),f=l(k,"DIV",{class:!0});var R=o(f);y=l(R,"DIV",{class:!0});var j=o(y);g=m(j,`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),p=l(j,"UL",{});var V=o(p);h=l(V,"LI",{});var M=o(h);c=l(M,"A",{href:!0,target:!0,rel:!0});var T=o(c);u=m(T,"givedirectly.org"),T.forEach(r),_=m(M,";"),M.forEach(r),w=A(V),I=l(V,"LI",{});var q=o(I);b=l(q,"A",{href:!0,target:!0,rel:!0});var O=o(b);L=m(O,"againstmalaria.com"),O.forEach(r),E=m(q,";"),q.forEach(r),B=A(V),P=l(V,"LI",{});var D=o(P);U=m(D,"any other charity you know is doing good work."),D.forEach(r),V.forEach(r),j.forEach(r),x=A(R),H=l(R,"DIV",{class:!0});var S=o(H);F=m(S,"Feel free to let me know and I'll consider it game-development income."),S.forEach(r),R.forEach(r),this.h()},h(){s(c,"href","https://www.givedirectly.org"),s(c,"target","_blank"),s(c,"rel","noreferrer"),s(b,"href","https://www.againstmalaria.com"),s(b,"target","_blank"),s(b,"rel","noreferrer"),s(y,"class","svelte-1l82y4b"),s(H,"class","svelte-1l82y4b"),s(f,"class","supportUsBox svelte-1l82y4b")},m(k,G){N(k,t,G),e(t,n),N(k,i,G),N(k,f,G),e(f,y),e(y,g),e(y,p),e(p,h),e(h,c),e(c,u),e(h,_),e(p,w),e(p,I),e(I,b),e(b,L),e(I,E),e(p,B),e(p,P),e(P,U),e(f,x),e(f,H),e(H,F)},p:z,i:z,o:z,d(k){k&&r(t),k&&r(i),k&&r(f)}}}class ar extends oe{constructor(t){super(),ne(this,t,null,rr,ce,{})}}const lr=Bs("goto");function vs(v,t,n){const i=v.slice();return i[6]=t[n],i}function ir(v){let t;return{c(){t=a("i"),this.h()},l(n){t=l(n,"I",{class:!0}),o(t).forEach(r),this.h()},h(){s(t,"class",Ae(`${v[6].iconClass} buttonIcon`)+" svelte-a7g201")},m(n,i){N(n,t,i)},p:z,d(n){n&&r(t)}}}function gs(v){let t,n,i,f,y,g=v[6].iconClass&&ir(v);function p(){return v[3](v[6])}return{c(){t=a("button"),g&&g.c(),n=$(),this.h()},l(h){t=l(h,"BUTTON",{"aria-label":!0,class:!0});var c=o(t);g&&g.l(c),n=A(c),c.forEach(r),this.h()},h(){s(t,"aria-label",v[6].name??"home"),s(t,"class",i=Ae(v[6].name===v[0].name?"selectedTab":"")+" svelte-a7g201")},m(h,c){N(h,t,c),g&&g.m(t,null),e(t,n),f||(y=$s(t,"click",p),f=!0)},p(h,c){v=h,v[6].iconClass&&g.p(v,c),c&1&&i!==(i=Ae(v[6].name===v[0].name?"selectedTab":"")+" svelte-a7g201")&&s(t,"class",i)},d(h){h&&r(t),g&&g.d(),f=!1,y()}}}function or(v){let t,n,i,f,y,g,p,h,c;t=new Gs({});let u=v[1],_=[];for(let b=0;b<u.length;b+=1)_[b]=gs(vs(v,u,b));var w=v[0].component;function I(b){return{}}return w&&(h=os(w,I())),{c(){be(t.$$.fragment),n=$(),i=a("div"),f=a("div");for(let b=0;b<_.length;b+=1)_[b].c();y=$(),g=a("div"),p=a("div"),h&&be(h.$$.fragment),this.h()},l(b){He(t.$$.fragment,b),n=A(b),i=l(b,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var L=o(i);f=l(L,"DIV",{class:!0});var E=o(f);for(let U=0;U<_.length;U+=1)_[U].l(E);E.forEach(r),y=A(L),g=l(L,"DIV",{style:!0});var B=o(g);p=l(B,"DIV",{class:!0});var P=o(p);h&&He(h.$$.fragment,P),P.forEach(r),B.forEach(r),L.forEach(r),this.h()},h(){s(f,"class","navContainer svelte-a7g201"),s(p,"class","pageContainer svelte-a7g201"),Es(g,"display","contents"),s(i,"class","appContainer svelte-a7g201"),s(i,"data-sveltekit-preload-data","hover")},m(b,L){Ee(t,b,L),N(b,n,L),N(b,i,L),e(i,f);for(let E=0;E<_.length;E+=1)_[E]&&_[E].m(f,null);e(i,y),e(i,g),e(g,p),h&&Ee(h,p,null),c=!0},p(b,[L]){if(L&7){u=b[1];let E;for(E=0;E<u.length;E+=1){const B=vs(b,u,E);_[E]?_[E].p(B,L):(_[E]=gs(B),_[E].c(),_[E].m(f,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=u.length}if(L&1&&w!==(w=b[0].component)){if(h){As();const E=h;ke(E.$$.fragment,1,0,()=>{$e(E,1)}),Is()}w?(h=os(w,I()),be(h.$$.fragment),Ie(h.$$.fragment,1),Ee(h,p,null)):h=null}},i(b){c||(Ie(t.$$.fragment,b),h&&Ie(h.$$.fragment,b),c=!0)},o(b){ke(t.$$.fragment,b),h&&ke(h.$$.fragment,b),c=!1},d(b){$e(t,b),b&&r(n),b&&r(i),jt(_,b),h&&$e(h)}}}function nr(v,t,n){let i;ks(v,Ls,c=>n(4,i=c));const f=[{iconClass:"fa-solid fa-home",component:Fs},{iconClass:"fa-solid fa-screwdriver-wrench",name:"projects",component:sr},{iconClass:"fa-solid fa-envelope",name:"contact",component:zs},{iconClass:"fa-solid fa-handshake",name:"support",component:ar}];let y=f[0];const g=i.url.searchParams.get("tab");f.forEach(c=>{c.name===g&&n(0,y=c)});const p=c=>{n(0,y=c),c.name?i.url.searchParams.set("tab",c.name):i.url.searchParams.delete("tab"),lr(`?${i.url.searchParams.toString()}`)};return[y,f,p,c=>p(c)]}class ur extends oe{constructor(t){super(),ne(this,t,nr,or,ce,{})}}export{ur as component};
