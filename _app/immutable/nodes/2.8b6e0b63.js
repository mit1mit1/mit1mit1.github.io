import{S as ie,i as oe,s as ne,k as a,a as $,J as vs,l,m as o,h as r,c as A,K as gs,n as s,L as _e,b as q,G as e,H as F,M as Pt,N as Ie,q as d,r as m,y as we,z as We,A as ye,g as be,d as Ee,B as ke,x as ls,p as ys,f as bs,I as Es,O as ks,v as Is}from"../chunks/index.371a4131.js";import{p as $s}from"../chunks/stores.6e92efb2.js";import{e as _s,j as As}from"../chunks/singletons.fe68c950.js";const is=["animate-flicker-7","animate-flicker-11","animate-flicker-13","animate-flicker-17","animate-flicker-19"],Ls=3840,Bs=2160,Vt=8,Ss=Ls/Vt,Rs=Bs/Vt,ws=[];let os=0;for(;os<1e3;)ws.push({x:Math.random()*Ss,y:Math.random()*Rs,radius:(Math.random()+1)/(2*Vt),class:is[Math.floor(Math.random()*is.length)],fill:`rgb(${200+Math.floor(Math.random()*54)}, ${200+Math.floor(Math.random()*54)}, ${200+Math.floor(Math.random()*54)})`}),os++;const ns=[...ws];function cs(g,t,c){const n=g.slice();return n[0]=t[c],n}function hs(g){let t;return{c(){t=vs("circle"),this.h()},l(c){t=gs(c,"circle",{cx:!0,cy:!0,r:!0,class:!0,fill:!0}),o(t).forEach(r),this.h()},h(){s(t,"cx",g[0].x),s(t,"cy",g[0].y),s(t,"r",g[0].radius),s(t,"class",Ie(g[0].class)+" svelte-15e7lv2"),s(t,"fill",g[0].fill)},m(c,n){q(c,t,n)},p:F,d(c){c&&r(t)}}}function Us(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O,C,W,T,j,M,N,z=[...ns],R=[];for(let D=0;D<z.length;D+=1)R[D]=hs(cs(g,z,D));return{c(){t=a("div"),c=a("picture"),n=a("source"),h=a("source"),_=a("source"),w=a("img"),p=$(),i=a("picture"),u=a("source"),y=a("source"),v=a("source"),E=a("img"),b=$(),I=a("picture"),k=a("source"),P=a("source"),U=a("source"),B=a("img"),H=$(),L=a("picture"),O=a("source"),C=a("source"),W=a("source"),T=a("img"),M=$(),N=vs("svg");for(let D=0;D<R.length;D+=1)R[D].c();this.h()},l(D){t=l(D,"DIV",{class:!0});var V=o(t);c=l(V,"PICTURE",{});var x=o(c);n=l(x,"SOURCE",{srcset:!0,type:!0}),h=l(x,"SOURCE",{srcset:!0,type:!0}),_=l(x,"SOURCE",{srcset:!0,type:!0}),w=l(x,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),x.forEach(r),p=A(V),i=l(V,"PICTURE",{});var J=o(i);u=l(J,"SOURCE",{srcset:!0,type:!0}),y=l(J,"SOURCE",{srcset:!0,type:!0}),v=l(J,"SOURCE",{srcset:!0,type:!0}),E=l(J,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),J.forEach(r),b=A(V),I=l(V,"PICTURE",{});var K=o(I);k=l(K,"SOURCE",{srcset:!0,type:!0}),P=l(K,"SOURCE",{srcset:!0,type:!0}),U=l(K,"SOURCE",{srcset:!0,type:!0}),B=l(K,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),K.forEach(r),H=A(V),L=l(V,"PICTURE",{});var Y=o(L);O=l(Y,"SOURCE",{srcset:!0,type:!0}),C=l(Y,"SOURCE",{srcset:!0,type:!0}),W=l(Y,"SOURCE",{srcset:!0,type:!0}),T=l(Y,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Y.forEach(r),M=A(V),N=gs(V,"svg",{id:!0,viewBox:!0,xmlns:!0,class:!0});var ee=o(N);for(let Z=0;Z<R.length;Z+=1)R[Z].l(ee);ee.forEach(r),V.forEach(r),this.h()},h(){s(n,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(n,"type","image/avif"),s(h,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(h,"type","image/webp"),s(_,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(_,"type","image/png"),s(w,"class","mitchClouds svelte-15e7lv2"),_e(w.src,f=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(w,"src",f),s(w,"alt","A nutjob"),s(w,"width","914"),s(w,"height","915"),s(u,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(u,"type","image/avif"),s(y,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(y,"type","image/webp"),s(v,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(v,"type","image/png"),s(E,"class","mitchClouds secondCloud svelte-15e7lv2"),_e(E.src,G=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(E,"src",G),s(E,"alt","A nutjob"),s(E,"width","914"),s(E,"height","915"),s(k,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(k,"type","image/avif"),s(P,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(P,"type","image/webp"),s(U,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(U,"type","image/png"),s(B,"class","mitchClouds thirdCloud svelte-15e7lv2"),_e(B.src,S=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(B,"src",S),s(B,"alt","A nutjob"),s(B,"width","914"),s(B,"height","915"),s(O,"srcset",""+new URL("../assets/smileGlowBaW.2fe18ff2.avif",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.0bf60d72.avif",import.meta.url).href+" 914w"),s(O,"type","image/avif"),s(C,"srcset",""+new URL("../assets/smileGlowBaW.910c526d.webp",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.fc2cc47d.webp",import.meta.url).href+" 914w"),s(C,"type","image/webp"),s(W,"srcset",""+new URL("../assets/smileGlowBaW.daf3054a.png",import.meta.url).href+" 457w, "+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href+" 914w"),s(W,"type","image/png"),s(T,"class","mitchClouds fourthCloud svelte-15e7lv2"),_e(T.src,j=""+new URL("../assets/smileGlowBaW.3dc6bc0e.png",import.meta.url).href)||s(T,"src",j),s(T,"alt","A nutjob"),s(T,"width","914"),s(T,"height","915"),s(N,"id","boxOfStars"),s(N,"viewBox","0 0 480 270"),s(N,"xmlns","http://www.w3.org/2000/svg"),s(N,"class","svelte-15e7lv2"),s(t,"class","pageHolder svelte-15e7lv2")},m(D,V){q(D,t,V),e(t,c),e(c,n),e(c,h),e(c,_),e(c,w),e(t,p),e(t,i),e(i,u),e(i,y),e(i,v),e(i,E),e(t,b),e(t,I),e(I,k),e(I,P),e(I,U),e(I,B),e(t,H),e(t,L),e(L,O),e(L,C),e(L,W),e(L,T),e(t,M),e(t,N);for(let x=0;x<R.length;x+=1)R[x]&&R[x].m(N,null)},p(D,[V]){if(V&0){z=[...ns];let x;for(x=0;x<z.length;x+=1){const J=cs(D,z,x);R[x]?R[x].p(J,V):(R[x]=hs(J),R[x].c(),R[x].m(N,null))}for(;x<R.length;x+=1)R[x].d(1);R.length=z.length}},i:F,o:F,d(D){D&&r(t),Pt(R,D)}}}class Cs extends ie{constructor(t){super(),oe(this,t,null,Us,ne,{})}}function Ds(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b;return{c(){t=a("ul"),c=a("li"),n=a("a"),h=d("Python"),_=d(` is nice for
		smaller applications, and thanks to type hinting is increasingly plausible for larger projects;`),w=$(),f=a("li"),p=a("a"),i=d("C++"),u=d(` is good fun for computation-heavy
		hobby projects;`),y=$(),v=a("li"),E=a("a"),G=d("PostgreSQL"),b=d(" is my preferred DB (yay for open-source);"),this.h()},l(I){t=l(I,"UL",{});var k=o(t);c=l(k,"LI",{});var P=o(c);n=l(P,"A",{href:!0});var U=o(n);h=m(U,"Python"),U.forEach(r),_=m(P,` is nice for
		smaller applications, and thanks to type hinting is increasingly plausible for larger projects;`),P.forEach(r),w=A(k),f=l(k,"LI",{});var B=o(f);p=l(B,"A",{href:!0});var S=o(p);i=m(S,"C++"),S.forEach(r),u=m(B,` is good fun for computation-heavy
		hobby projects;`),B.forEach(r),y=A(k),v=l(k,"LI",{});var H=o(v);E=l(H,"A",{href:!0});var L=o(E);G=m(L,"PostgreSQL"),L.forEach(r),b=m(H," is my preferred DB (yay for open-source);"),H.forEach(r),k.forEach(r),this.h()},h(){s(n,"href","https://docs.python.org/3/faq/general.html#why-is-it-called-python"),s(p,"href","https://en.wiktionary.org/wiki/C%2B%2B#Etymology"),s(E,"href","https://www.postgresql.org/about/")},m(I,k){q(I,t,k),e(t,c),e(c,n),e(n,h),e(c,_),e(t,w),e(t,f),e(f,p),e(p,i),e(f,u),e(t,y),e(t,v),e(v,E),e(E,G),e(v,b)},p:F,i:F,o:F,d(I){I&&r(t)}}}class Gs extends ie{constructor(t){super(),oe(this,t,null,Ds,ne,{})}}function xs(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O,C,W;return{c(){t=a("ul"),c=a("li"),n=a("a"),h=d("GitHub Actions"),_=d(` evidently do
		the trick for hobby projects, but
		`),w=a("a"),f=d("Buildkite"),p=d(`
		is my favorite pipeline platform so far;`),i=$(),u=a("li"),y=a("a"),v=d("Terraform"),E=d(` is brilliant for
		infrastructure management;`),G=$(),b=a("li"),I=a("a"),k=d("Docker"),P=d(` for getting everything
		working `),U=a("em"),B=d("consistently"),S=d(";"),H=$(),L=a("li"),O=a("a"),C=d("AWS"),W=d(` is the cloud
		platform I use at my current company;`),this.h()},l(T){t=l(T,"UL",{});var j=o(t);c=l(j,"LI",{});var M=o(c);n=l(M,"A",{href:!0});var N=o(n);h=m(N,"GitHub Actions"),N.forEach(r),_=m(M,` evidently do
		the trick for hobby projects, but
		`),w=l(M,"A",{href:!0});var z=o(w);f=m(z,"Buildkite"),z.forEach(r),p=m(M,`
		is my favorite pipeline platform so far;`),M.forEach(r),i=A(j),u=l(j,"LI",{});var R=o(u);y=l(R,"A",{href:!0});var D=o(y);v=m(D,"Terraform"),D.forEach(r),E=m(R,` is brilliant for
		infrastructure management;`),R.forEach(r),G=A(j),b=l(j,"LI",{});var V=o(b);I=l(V,"A",{href:!0});var x=o(I);k=m(x,"Docker"),x.forEach(r),P=m(V,` for getting everything
		working `),U=l(V,"EM",{});var J=o(U);B=m(J,"consistently"),J.forEach(r),S=m(V,";"),V.forEach(r),H=A(j),L=l(j,"LI",{});var K=o(L);O=l(K,"A",{href:!0});var Y=o(O);C=m(Y,"AWS"),Y.forEach(r),W=m(K,` is the cloud
		platform I use at my current company;`),K.forEach(r),j.forEach(r),this.h()},h(){s(n,"href","https://github.com/mit1mit1/mit1mit1.github.io/actions"),s(w,"href","https://buildkite.com/docs/pipelines/create-your-own"),s(y,"href","https://www.terraform.io/use-cases/infrastructure-as-code"),s(I,"href","https://docs.docker.com/get-started/overview/"),s(O,"href","https://docs.aws.amazon.com/s3/?icmpid=docs_homepage_featuredsvcs")},m(T,j){q(T,t,j),e(t,c),e(c,n),e(n,h),e(c,_),e(c,w),e(w,f),e(c,p),e(t,i),e(t,u),e(u,y),e(y,v),e(u,E),e(t,G),e(t,b),e(b,I),e(I,k),e(b,P),e(b,U),e(U,B),e(b,S),e(t,H),e(t,L),e(L,O),e(O,C),e(L,W)},p:F,i:F,o:F,d(T){T&&r(t)}}}class Ps extends ie{constructor(t){super(),oe(this,t,null,xs,ne,{})}}function Vs(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O,C,W,T,j,M,N,z;return{c(){t=a("ul"),c=a("li"),n=a("a"),h=d("React"),_=d(` is my library of choice for heavier
		projects;`),w=$(),f=a("li"),p=a("a"),i=d("Svelte"),u=d(" is my framework of choice for lighter ones;"),y=$(),v=a("li"),E=a("a"),G=d("Typescript"),b=d(" is amazing (typed > untyped);"),I=$(),k=a("li"),P=a("a"),U=d("Zustand"),B=d(` and
		`),S=a("a"),H=d("Jotai"),L=d(`
		are tied for my current favorite State Management library at the moment.`),O=$(),C=a("li"),W=a("a"),T=d("JSS"),j=d(` is my current favorite styling library for
		SPAs, though I prefer good old `),M=a("a"),N=d("Sass"),z=d(" for design systems;"),this.h()},l(R){t=l(R,"UL",{});var D=o(t);c=l(D,"LI",{});var V=o(c);n=l(V,"A",{href:!0});var x=o(n);h=m(x,"React"),x.forEach(r),_=m(V,` is my library of choice for heavier
		projects;`),V.forEach(r),w=A(D),f=l(D,"LI",{});var J=o(f);p=l(J,"A",{href:!0});var K=o(p);i=m(K,"Svelte"),K.forEach(r),u=m(J," is my framework of choice for lighter ones;"),J.forEach(r),y=A(D),v=l(D,"LI",{});var Y=o(v);E=l(Y,"A",{href:!0});var ee=o(E);G=m(ee,"Typescript"),ee.forEach(r),b=m(Y," is amazing (typed > untyped);"),Y.forEach(r),I=A(D),k=l(D,"LI",{});var Z=o(k);P=l(Z,"A",{href:!0});var ce=o(P);U=m(ce,"Zustand"),ce.forEach(r),B=m(Z,` and
		`),S=l(Z,"A",{href:!0});var $e=o(S);H=m($e,"Jotai"),$e.forEach(r),L=m(Z,`
		are tied for my current favorite State Management library at the moment.`),Z.forEach(r),O=A(D),C=l(D,"LI",{});var he=o(C);W=l(he,"A",{href:!0});var ae=o(W);T=m(ae,"JSS"),ae.forEach(r),j=m(he,` is my current favorite styling library for
		SPAs, though I prefer good old `),M=l(he,"A",{href:!0});var Ae=o(M);N=m(Ae,"Sass"),Ae.forEach(r),z=m(he," for design systems;"),he.forEach(r),D.forEach(r),this.h()},h(){s(n,"href","https://react.dev/learn/describing-the-ui"),s(p,"href","https://svelte.dev/docs/introduction"),s(E,"href","https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"),s(P,"href","https://github.com/pmndrs/zustand"),s(S,"href","https://jotai.org/"),s(W,"href","https://cssinjs.org/?v=v10.10.0"),s(M,"href","https://sass-lang.com/guide/")},m(R,D){q(R,t,D),e(t,c),e(c,n),e(n,h),e(c,_),e(t,w),e(t,f),e(f,p),e(p,i),e(f,u),e(t,y),e(t,v),e(v,E),e(E,G),e(v,b),e(t,I),e(t,k),e(k,P),e(P,U),e(k,B),e(k,S),e(S,H),e(k,L),e(t,O),e(t,C),e(C,W),e(W,T),e(C,j),e(C,M),e(M,N),e(C,z)},p:F,i:F,o:F,d(R){R&&r(t)}}}class Ts extends ie{constructor(t){super(),oe(this,t,null,Vs,ne,{})}}function js(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O,C,W,T;return{c(){t=a("ul"),c=a("li"),n=a("a"),h=d("React Testing Library"),_=d(` is brilliant,
		as is Kent C. Dodd's philosophy behind it;`),w=$(),f=a("li"),p=a("a"),i=d("Cypress"),u=d(` and
		`),y=a("a"),v=d("Playwright"),E=d(` are both very worthwhile when kept light
		enough to be quick and reliable;`),G=$(),b=a("li"),I=a("a"),k=d("Datadog"),P=d(` is brilliant for metrics and
		monitoring to make sure nothing is going wrong;
		`),U=a("a"),B=d("Heap"),S=d(` is brilliant for metrics to figure
		out whether what you're building is useful;`),H=$(),L=a("li"),O=d(`There's always a disclaimer that automated testing is never sufficient to guarantee
		accessibility. That may be so, but damn does `),C=a("a"),W=d("Axe"),T=d(` get you
		a long way towards it;`),this.h()},l(j){t=l(j,"UL",{});var M=o(t);c=l(M,"LI",{});var N=o(c);n=l(N,"A",{href:!0});var z=o(n);h=m(z,"React Testing Library"),z.forEach(r),_=m(N,` is brilliant,
		as is Kent C. Dodd's philosophy behind it;`),N.forEach(r),w=A(M),f=l(M,"LI",{});var R=o(f);p=l(R,"A",{href:!0});var D=o(p);i=m(D,"Cypress"),D.forEach(r),u=m(R,` and
		`),y=l(R,"A",{href:!0});var V=o(y);v=m(V,"Playwright"),V.forEach(r),E=m(R,` are both very worthwhile when kept light
		enough to be quick and reliable;`),R.forEach(r),G=A(M),b=l(M,"LI",{});var x=o(b);I=l(x,"A",{href:!0});var J=o(I);k=m(J,"Datadog"),J.forEach(r),P=m(x,` is brilliant for metrics and
		monitoring to make sure nothing is going wrong;
		`),U=l(x,"A",{href:!0});var K=o(U);B=m(K,"Heap"),K.forEach(r),S=m(x,` is brilliant for metrics to figure
		out whether what you're building is useful;`),x.forEach(r),H=A(M),L=l(M,"LI",{});var Y=o(L);O=m(Y,`There's always a disclaimer that automated testing is never sufficient to guarantee
		accessibility. That may be so, but damn does `),C=l(Y,"A",{href:!0});var ee=o(C);W=m(ee,"Axe"),ee.forEach(r),T=m(Y,` get you
		a long way towards it;`),Y.forEach(r),M.forEach(r),this.h()},h(){s(n,"href","https://testing-library.com/docs/guiding-principles/"),s(p,"href","https://www.cypress.io/"),s(y,"href","https://playwright.dev/docs/intro"),s(I,"href","https://docs.datadoghq.com/monitors/"),s(U,"href","https://www.heap.io/use-case/user-behavior"),s(C,"href","https://www.deque.com/axe/")},m(j,M){q(j,t,M),e(t,c),e(c,n),e(n,h),e(c,_),e(t,w),e(t,f),e(f,p),e(p,i),e(f,u),e(f,y),e(y,v),e(f,E),e(t,G),e(t,b),e(b,I),e(I,k),e(b,P),e(b,U),e(U,B),e(b,S),e(t,H),e(t,L),e(L,O),e(L,C),e(C,W),e(L,T)},p:F,i:F,o:F,d(j){j&&r(t)}}}class Ms extends ie{constructor(t){super(),oe(this,t,null,js,ne,{})}}function Ws(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O,C,W,T,j,M,N,z,R,D,V,x,J,K,Y,ee,Z,ce,$e,he,ae,Ae,fe,te,Le,tt,st,se,rt,at,lt,He,it,ot,Oe,nt,ct,ht,Be,ft,ut,Se,dt,mt,X,Re,pt,vt,Ue,gt,_t,Ce,wt,yt,De,bt,Et,Ge,kt,It,xe,$t,At,le,Pe,Lt,Bt,ue,St,Ve,Rt,Ut,Ct,de,Dt,Te,Gt,xt,Ne;return W=new Ts({}),R=new Gs({}),Y=new Ps({}),ae=new Ms({}),{c(){t=a("h1"),c=d("Design | logically"),n=$(),h=a("div"),_=a("div"),w=a("picture"),f=a("source"),p=a("source"),i=a("source"),u=a("img"),v=$(),E=a("div"),G=a("div"),b=d("Hey there!"),I=$(),k=a("div"),P=d(`I'm Mitch. Full-time fullstack engineer, part-time writer, musician and maker of strange
				expressions.`),U=$(),B=a("div"),S=a("div"),H=a("div"),L=a("h2"),O=d("Frontend tools"),C=$(),we(W.$$.fragment),T=$(),j=a("div"),M=a("h2"),N=d("Backend tools"),z=$(),we(R.$$.fragment),D=$(),V=a("div"),x=a("h2"),J=d("Deployment tools"),K=$(),we(Y.$$.fragment),ee=$(),Z=a("div"),ce=a("h2"),$e=d("Testing and observability tools"),he=$(),we(ae.$$.fragment),Ae=$(),fe=a("div"),te=a("div"),Le=a("h2"),tt=d("Experience"),st=$(),se=a("div"),rt=d("For the past "),at=d(g[0]),lt=d(` and a bit years I've been building apps on everything from
				`),He=a("code"),it=d("Laravel / jQuery"),ot=d(`
				to `),Oe=a("code"),nt=d("Python / React"),ct=d("."),ht=$(),Be=a("div"),ft=d(`I've built greenfield projects from the ground up and I've refactored software older than I
				am.`),ut=$(),Se=a("div"),dt=d("At the moment I work in design system engineering and developer enablement."),mt=$(),X=a("div"),Re=a("h2"),pt=d("Education"),vt=$(),Ue=a("div"),gt=d("While you can certainly be a great software engineer without a degree, it can be helpful."),_t=$(),Ce=a("div"),wt=d("Pure mathematics made me think through the behavior of abstract formal systems."),yt=$(),De=a("div"),bt=d(`Logic and computational algorithms gave me pretty directly applicable tools to study those
				systems`),Et=$(),Ge=a("div"),kt=d(`My thesis on the philosophy of mathematics was almost maximally removed from practical
				relevance, but it did stretch my ability to think and write clearly.`),It=$(),xe=a("div"),$t=d(`Plus, it's a lot of fun. So to all the aspiring software gurus out there - get a math
				degree.`),At=$(),le=a("div"),Pe=a("h2"),Lt=d("Music"),Bt=$(),ue=a("div"),St=d("Somewhere along the way I picked up a taste for playing guitar too. You can check me out at "),Ve=a("a"),Rt=d("uncut jams"),Ut=d(" if you're ready for a messy, messy cover."),Ct=$(),de=a("div"),Dt=d("On the other hand, if you want to listen to musical savant, I recommend "),Te=a("a"),Gt=d("Bill Wurtz"),xt=d("."),this.h()},l(Q){t=l(Q,"H1",{class:!0});var me=o(t);c=m(me,"Design | logically"),me.forEach(r),n=A(Q),h=l(Q,"DIV",{class:!0});var Tt=o(h);_=l(Tt,"DIV",{class:!0});var Fe=o(_);w=l(Fe,"PICTURE",{});var qe=o(w);f=l(qe,"SOURCE",{srcset:!0,type:!0}),p=l(qe,"SOURCE",{srcset:!0,type:!0}),i=l(qe,"SOURCE",{srcset:!0,type:!0}),u=l(qe,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),qe.forEach(r),v=A(Fe),E=l(Fe,"DIV",{class:!0});var ze=o(E);G=l(ze,"DIV",{class:!0});var jt=o(G);b=m(jt,"Hey there!"),jt.forEach(r),I=A(ze),k=l(ze,"DIV",{class:!0});var Mt=o(k);P=m(Mt,`I'm Mitch. Full-time fullstack engineer, part-time writer, musician and maker of strange
				expressions.`),Mt.forEach(r),ze.forEach(r),Fe.forEach(r),Tt.forEach(r),U=A(Q),B=l(Q,"DIV",{class:!0});var Qe=o(B);S=l(Qe,"DIV",{});var pe=o(S);H=l(pe,"DIV",{class:!0});var Je=o(H);L=l(Je,"H2",{class:!0});var Wt=o(L);O=m(Wt,"Frontend tools"),Wt.forEach(r),C=A(Je),We(W.$$.fragment,Je),Je.forEach(r),T=A(pe),j=l(pe,"DIV",{class:!0});var Ye=o(j);M=l(Ye,"H2",{class:!0});var Ht=o(M);N=m(Ht,"Backend tools"),Ht.forEach(r),z=A(Ye),We(R.$$.fragment,Ye),Ye.forEach(r),D=A(pe),V=l(pe,"DIV",{class:!0});var Ke=o(V);x=l(Ke,"H2",{class:!0});var Ot=o(x);J=m(Ot,"Deployment tools"),Ot.forEach(r),K=A(Ke),We(Y.$$.fragment,Ke),Ke.forEach(r),ee=A(pe),Z=l(pe,"DIV",{class:!0});var Ze=o(Z);ce=l(Ze,"H2",{class:!0});var qt=o(ce);$e=m(qt,"Testing and observability tools"),qt.forEach(r),he=A(Ze),We(ae.$$.fragment,Ze),Ze.forEach(r),pe.forEach(r),Ae=A(Qe),fe=l(Qe,"DIV",{});var je=o(fe);te=l(je,"DIV",{class:!0});var ve=o(te);Le=l(ve,"H2",{class:!0});var Nt=o(Le);tt=m(Nt,"Experience"),Nt.forEach(r),st=A(ve),se=l(ve,"DIV",{class:!0});var ge=o(se);rt=m(ge,"For the past "),at=m(ge,g[0]),lt=m(ge,` and a bit years I've been building apps on everything from
				`),He=l(ge,"CODE",{});var Ft=o(He);it=m(Ft,"Laravel / jQuery"),Ft.forEach(r),ot=m(ge,`
				to `),Oe=l(ge,"CODE",{});var zt=o(Oe);nt=m(zt,"Python / React"),zt.forEach(r),ct=m(ge,"."),ge.forEach(r),ht=A(ve),Be=l(ve,"DIV",{class:!0});var Qt=o(Be);ft=m(Qt,`I've built greenfield projects from the ground up and I've refactored software older than I
				am.`),Qt.forEach(r),ut=A(ve),Se=l(ve,"DIV",{class:!0});var Jt=o(Se);dt=m(Jt,"At the moment I work in design system engineering and developer enablement."),Jt.forEach(r),ve.forEach(r),mt=A(je),X=l(je,"DIV",{class:!0});var re=o(X);Re=l(re,"H2",{class:!0});var Yt=o(Re);pt=m(Yt,"Education"),Yt.forEach(r),vt=A(re),Ue=l(re,"DIV",{class:!0});var Kt=o(Ue);gt=m(Kt,"While you can certainly be a great software engineer without a degree, it can be helpful."),Kt.forEach(r),_t=A(re),Ce=l(re,"DIV",{class:!0});var Zt=o(Ce);wt=m(Zt,"Pure mathematics made me think through the behavior of abstract formal systems."),Zt.forEach(r),yt=A(re),De=l(re,"DIV",{class:!0});var Xt=o(De);bt=m(Xt,`Logic and computational algorithms gave me pretty directly applicable tools to study those
				systems`),Xt.forEach(r),Et=A(re),Ge=l(re,"DIV",{class:!0});var es=o(Ge);kt=m(es,`My thesis on the philosophy of mathematics was almost maximally removed from practical
				relevance, but it did stretch my ability to think and write clearly.`),es.forEach(r),It=A(re),xe=l(re,"DIV",{class:!0});var ts=o(xe);$t=m(ts,`Plus, it's a lot of fun. So to all the aspiring software gurus out there - get a math
				degree.`),ts.forEach(r),re.forEach(r),At=A(je),le=l(je,"DIV",{class:!0});var Me=o(le);Pe=l(Me,"H2",{class:!0});var ss=o(Pe);Lt=m(ss,"Music"),ss.forEach(r),Bt=A(Me),ue=l(Me,"DIV",{class:!0});var Xe=o(ue);St=m(Xe,"Somewhere along the way I picked up a taste for playing guitar too. You can check me out at "),Ve=l(Xe,"A",{href:!0});var rs=o(Ve);Rt=m(rs,"uncut jams"),rs.forEach(r),Ut=m(Xe," if you're ready for a messy, messy cover."),Xe.forEach(r),Ct=A(Me),de=l(Me,"DIV",{class:!0});var et=o(de);Dt=m(et,"On the other hand, if you want to listen to musical savant, I recommend "),Te=l(et,"A",{href:!0});var as=o(Te);Gt=m(as,"Bill Wurtz"),as.forEach(r),xt=m(et,"."),et.forEach(r),Me.forEach(r),je.forEach(r),Qe.forEach(r),this.h()},h(){s(t,"class","siteWelcome"),s(f,"srcset",""+new URL("../assets/yellGlowClear.81ea48c6.avif",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.05f2d96d.avif",import.meta.url).href+" 1530w"),s(f,"type","image/avif"),s(p,"srcset",""+new URL("../assets/yellGlowClear.3969214d.webp",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.95879bfb.webp",import.meta.url).href+" 1530w"),s(p,"type","image/webp"),s(i,"srcset",""+new URL("../assets/yellGlowClear.21939b2f.png",import.meta.url).href+" 765w, "+new URL("../assets/yellGlowClear.64daaee0.png",import.meta.url).href+" 1530w"),s(i,"type","image/png"),s(u,"class","mitchMug svelte-kefs3p"),_e(u.src,y=""+new URL("../assets/yellGlowClear.64daaee0.png",import.meta.url).href)||s(u,"src",y),s(u,"alt","Another nutjob"),s(u,"width","1530"),s(u,"height","1530"),s(G,"class","aboutMeTitle svelte-kefs3p"),s(k,"class","aboutMeSubtitle svelte-kefs3p"),s(E,"class","aboutMeContents svelte-kefs3p"),s(_,"class","aboutMeBox svelte-kefs3p"),s(h,"class","aboutMeGrid svelte-kefs3p"),s(L,"class","boxTitle svelte-kefs3p"),s(H,"class","infoBox svelte-kefs3p"),s(M,"class","boxTitle svelte-kefs3p"),s(j,"class","infoBox svelte-kefs3p"),s(x,"class","boxTitle svelte-kefs3p"),s(V,"class","infoBox svelte-kefs3p"),s(ce,"class","boxTitle svelte-kefs3p"),s(Z,"class","infoBox svelte-kefs3p"),s(Le,"class","boxTitle svelte-kefs3p"),s(se,"class","experienceParagraph svelte-kefs3p"),s(Be,"class","experienceParagraph svelte-kefs3p"),s(Se,"class","experienceParagraph svelte-kefs3p"),s(te,"class","infoBox svelte-kefs3p"),s(Re,"class","boxTitle svelte-kefs3p"),s(Ue,"class","experienceParagraph svelte-kefs3p"),s(Ce,"class","experienceParagraph svelte-kefs3p"),s(De,"class","experienceParagraph svelte-kefs3p"),s(Ge,"class","experienceParagraph svelte-kefs3p"),s(xe,"class","experienceParagraph svelte-kefs3p"),s(X,"class","infoBox svelte-kefs3p"),s(Pe,"class","boxTitle svelte-kefs3p"),s(Ve,"href","https://www.youtube.com/watch?v=YudszPRA5PA&ab_channel=uncutjams"),s(ue,"class","experienceParagraph svelte-kefs3p"),s(Te,"href","https://www.youtube.com/watch?v=YBgvQ6QKV5k"),s(de,"class","experienceParagraph svelte-kefs3p"),s(le,"class","infoBox svelte-kefs3p"),s(B,"class","infoGrid svelte-kefs3p")},m(Q,me){q(Q,t,me),e(t,c),q(Q,n,me),q(Q,h,me),e(h,_),e(_,w),e(w,f),e(w,p),e(w,i),e(w,u),e(_,v),e(_,E),e(E,G),e(G,b),e(E,I),e(E,k),e(k,P),q(Q,U,me),q(Q,B,me),e(B,S),e(S,H),e(H,L),e(L,O),e(H,C),ye(W,H,null),e(S,T),e(S,j),e(j,M),e(M,N),e(j,z),ye(R,j,null),e(S,D),e(S,V),e(V,x),e(x,J),e(V,K),ye(Y,V,null),e(S,ee),e(S,Z),e(Z,ce),e(ce,$e),e(Z,he),ye(ae,Z,null),e(B,Ae),e(B,fe),e(fe,te),e(te,Le),e(Le,tt),e(te,st),e(te,se),e(se,rt),e(se,at),e(se,lt),e(se,He),e(He,it),e(se,ot),e(se,Oe),e(Oe,nt),e(se,ct),e(te,ht),e(te,Be),e(Be,ft),e(te,ut),e(te,Se),e(Se,dt),e(fe,mt),e(fe,X),e(X,Re),e(Re,pt),e(X,vt),e(X,Ue),e(Ue,gt),e(X,_t),e(X,Ce),e(Ce,wt),e(X,yt),e(X,De),e(De,bt),e(X,Et),e(X,Ge),e(Ge,kt),e(X,It),e(X,xe),e(xe,$t),e(fe,At),e(fe,le),e(le,Pe),e(Pe,Lt),e(le,Bt),e(le,ue),e(ue,St),e(ue,Ve),e(Ve,Rt),e(ue,Ut),e(le,Ct),e(le,de),e(de,Dt),e(de,Te),e(Te,Gt),e(de,xt),Ne=!0},p:F,i(Q){Ne||(be(W.$$.fragment,Q),be(R.$$.fragment,Q),be(Y.$$.fragment,Q),be(ae.$$.fragment,Q),Ne=!0)},o(Q){Ee(W.$$.fragment,Q),Ee(R.$$.fragment,Q),Ee(Y.$$.fragment,Q),Ee(ae.$$.fragment,Q),Ne=!1},d(Q){Q&&r(t),Q&&r(n),Q&&r(h),Q&&r(U),Q&&r(B),ke(W),ke(R),ke(Y),ke(ae)}}}function Hs(g){return[new Date().getFullYear()-2017]}class Os extends ie{constructor(t){super(),oe(this,t,Hs,Ws,ne,{})}}function qs(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H,L,O;return{c(){t=a("h1"),c=d("Contact"),n=$(),h=a("div"),_=a("div"),w=a("span"),f=d("Gmail:"),p=$(),i=a("a"),u=d("guessthetunegame@gmail.com"),y=$(),v=a("div"),E=a("span"),G=d("LinkedIn:"),b=$(),I=a("a"),k=d("linkedin.com/in/midly/"),P=$(),U=a("div"),B=a("span"),S=d("GitHub:"),H=$(),L=a("a"),O=d("github.com/mit1mit1/"),this.h()},l(C){t=l(C,"H1",{});var W=o(t);c=m(W,"Contact"),W.forEach(r),n=A(C),h=l(C,"DIV",{class:!0});var T=o(h);_=l(T,"DIV",{class:!0});var j=o(_);w=l(j,"SPAN",{class:!0});var M=o(w);f=m(M,"Gmail:"),M.forEach(r),p=A(j),i=l(j,"A",{href:!0});var N=o(i);u=m(N,"guessthetunegame@gmail.com"),N.forEach(r),j.forEach(r),y=A(T),v=l(T,"DIV",{class:!0});var z=o(v);E=l(z,"SPAN",{class:!0});var R=o(E);G=m(R,"LinkedIn:"),R.forEach(r),b=A(z),I=l(z,"A",{href:!0,target:!0,rel:!0});var D=o(I);k=m(D,"linkedin.com/in/midly/"),D.forEach(r),z.forEach(r),P=A(T),U=l(T,"DIV",{class:!0});var V=o(U);B=l(V,"SPAN",{class:!0});var x=o(B);S=m(x,"GitHub:"),x.forEach(r),H=A(V),L=l(V,"A",{href:!0,target:!0,rel:!0});var J=o(L);O=m(J,"github.com/mit1mit1/"),J.forEach(r),V.forEach(r),T.forEach(r),this.h()},h(){s(w,"class","label svelte-1i13fsy"),s(i,"href","mailto:guessthetunegame@gmail.com"),s(_,"class","svelte-1i13fsy"),s(E,"class","label svelte-1i13fsy"),s(I,"href","https://www.linkedin.com/in/midly/"),s(I,"target","_blank"),s(I,"rel","noreferrer"),s(v,"class","svelte-1i13fsy"),s(B,"class","label svelte-1i13fsy"),s(L,"href","https://github.com/mit1mit1/"),s(L,"target","_blank"),s(L,"rel","noreferrer"),s(U,"class","svelte-1i13fsy"),s(h,"class","contactBox svelte-1i13fsy")},m(C,W){q(C,t,W),e(t,c),q(C,n,W),q(C,h,W),e(h,_),e(_,w),e(w,f),e(_,p),e(_,i),e(i,u),e(h,y),e(h,v),e(v,E),e(E,G),e(v,b),e(v,I),e(I,k),e(h,P),e(h,U),e(U,B),e(B,S),e(U,H),e(U,L),e(L,O)},p:F,i:F,o:F,d(C){C&&r(t),C&&r(n),C&&r(h)}}}class Ns extends ie{constructor(t){super(),oe(this,t,null,qs,ne,{})}}const fs=[{name:"Software Dev Resources",description:"Notes on some resources I've found helpful as a software developer, and a comic based on some of the notes.",githubAddress:"https://github.com/mit1mit1/software-dev-resources",siteAddress:"https://mit1mit1.github.io/software-dev-resources",iconName:"beanie.ico",needsBackground:!0,fadeInSpeed:"fast"},{name:"Guess the Tune",description:"A wordle-like game designed to teach sheet music reading.",githubAddress:"https://github.com/mit1mit1/guess-the-tune",siteAddress:"https://mit1mit1.github.io/guess-the-tune",iconName:"musicle.ico",fadeInSpeed:"medium"},{name:"Newtonian Dog Fighter",description:"Fly small circles around bigger ones and run into each other.",githubAddress:"https://github.com/mit1mit1/newtonian-dog-fighter-3000",siteAddress:"https://mit1mit1.github.io/newtonian-dog-fighter-3000",iconName:"newtonian.png",fadeInSpeed:"slow"},{name:"Explomandlebrot",description:"An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",githubAddress:"https://github.com/mit1mit1/explomandlebrot",siteAddress:"https://mit1mit1.github.io/explomandlebrot",iconName:"mandlebrot.ico",fadeInSpeed:"medium"},{name:"Napoleonic Chess Simulator",description:"Learn French, play chess, and fail history class. Featuring art by Tom Su (contact details available on request).",githubAddress:"https://github.com/mit1mit1/napoleonic-chess-simulator-3000",siteAddress:"https://mit1mit1.github.io/napoleonic-chess-simulator-3000",iconName:"Napoleon.svg",needsBackground:!0,fadeInSpeed:"slow"}],Fs=g=>{var t,c;return(c=(t=g.split("https://").at(-1))==null?void 0:t.split("http://").at(-1))==null?void 0:c.split("www.").at(-1)};function us(g,t,c){const n=g.slice();return n[0]=t[c],n}function zs(g){let t,c,n,h,_=g[0].name+"",w,f=g[0].iconName&&Js(g);return{c(){t=a("span"),c=a("h2"),f&&f.c(),n=$(),h=a("span"),w=d(_),this.h()},l(p){t=l(p,"SPAN",{class:!0});var i=o(t);c=l(i,"H2",{class:!0});var u=o(c);f&&f.l(u),n=A(u),h=l(u,"SPAN",{});var y=o(h);w=m(y,_),y.forEach(r),u.forEach(r),i.forEach(r),this.h()},h(){s(c,"class","projectTitle svelte-q4ife7"),s(t,"class","svelte-q4ife7")},m(p,i){q(p,t,i),e(t,c),f&&f.m(c,null),e(c,n),e(c,h),e(h,w)},p(p,i){p[0].iconName&&f.p(p,i)},d(p){p&&r(t),f&&f.d()}}}function Qs(g){let t,c,n,h,_=g[0].name+"",w,f=g[0].iconName&&Ys(g);return{c(){t=a("a"),c=a("h2"),f&&f.c(),n=$(),h=a("span"),w=d(_),this.h()},l(p){t=l(p,"A",{href:!0,target:!0,rel:!0,class:!0});var i=o(t);c=l(i,"H2",{class:!0});var u=o(c);f&&f.l(u),n=A(u),h=l(u,"SPAN",{});var y=o(h);w=m(y,_),y.forEach(r),u.forEach(r),i.forEach(r),this.h()},h(){s(c,"class","projectTitle svelte-q4ife7"),s(t,"href",g[0].siteAddress),s(t,"target","_blank"),s(t,"rel","noreferrer"),s(t,"class","svelte-q4ife7")},m(p,i){q(p,t,i),e(t,c),f&&f.m(c,null),e(c,n),e(c,h),e(h,w)},p(p,i){p[0].iconName&&f.p(p,i)},d(p){p&&r(t),f&&f.d()}}}function Js(g){let t,c;return{c(){t=a("img"),this.h()},l(n){t=l(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){s(t,"class",Ie(`boxIcon ${g[0].needsBackground?"withBackground":""}`)+" svelte-q4ife7"),_e(t.src,c=`${_s}/images/${g[0].iconName}`)||s(t,"src",c),s(t,"alt",`Picture of ${g[0].name}`)},m(n,h){q(n,t,h)},p:F,d(n){n&&r(t)}}}function Ys(g){let t,c;return{c(){t=a("img"),this.h()},l(n){t=l(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){s(t,"class",Ie(`boxIcon ${g[0].needsBackground?"withBackground":""}`)+" svelte-q4ife7"),_e(t.src,c=`${_s}/images/${g[0].iconName}`)||s(t,"src",c),s(t,"alt",`Picture of ${g[0].name}`)},m(n,h){q(n,t,h)},p:F,d(n){n&&r(t)}}}function Ks(g){let t,c,n,h=Fs(g[0].githubAddress)+"",_;return{c(){t=a("div"),c=d("Github: "),n=a("a"),_=d(h),this.h()},l(w){t=l(w,"DIV",{class:!0});var f=o(t);c=m(f,"Github: "),n=l(f,"A",{href:!0,target:!0,rel:!0});var p=o(n);_=m(p,h),p.forEach(r),f.forEach(r),this.h()},h(){s(n,"href",g[0].githubAddress),s(n,"target","_blank"),s(n,"rel","noreferrer"),s(t,"class","svelte-q4ife7")},m(w,f){q(w,t,f),e(t,c),e(t,n),e(n,_)},p:F,d(w){w&&r(t)}}}function Zs(g){let t,c=g[0].description+"",n;return{c(){t=a("div"),n=d(c),this.h()},l(h){t=l(h,"DIV",{class:!0});var _=o(t);n=m(_,c),_.forEach(r),this.h()},h(){s(t,"class","svelte-q4ife7")},m(h,_){q(h,t,_),e(t,n)},p:F,d(h){h&&r(t)}}}function ds(g){let t,c,n,h,_;function w(y,v){return y[0].siteAddress?Qs:zs}let p=w(g)(g),i=g[0].githubAddress&&Ks(g),u=g[0].description&&Zs(g);return{c(){t=a("div"),p.c(),c=$(),n=a("div"),i&&i.c(),h=$(),u&&u.c(),_=$(),this.h()},l(y){t=l(y,"DIV",{class:!0});var v=o(t);p.l(v),c=A(v),n=l(v,"DIV",{class:!0});var E=o(n);i&&i.l(E),h=A(E),u&&u.l(E),E.forEach(r),_=A(v),v.forEach(r),this.h()},h(){s(n,"class","detailsBox svelte-q4ife7"),s(t,"class",Ie(`projectBox ${g[0].fadeInSpeed==="slow"&&"slowFade"} ${g[0].fadeInSpeed==="medium"&&"mediumFade"} ${g[0].fadeInSpeed==="fast"&&"fastFade"}`)+" svelte-q4ife7")},m(y,v){q(y,t,v),p.m(t,null),e(t,c),e(t,n),i&&i.m(n,null),e(n,h),u&&u.m(n,null),e(t,_)},p(y,v){p.p(y,v),y[0].githubAddress&&i.p(y,v),y[0].description&&u.p(y,v)},d(y){y&&r(t),p.d(),i&&i.d(),u&&u.d()}}}function Xs(g){let t,c,n,h,_,w,f,p=fs,i=[];for(let u=0;u<p.length;u+=1)i[u]=ds(us(g,p,u));return{c(){t=a("h1"),c=d("Personal projects"),n=$(),h=a("div"),_=d("In decreasing order of polish"),w=$(),f=a("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){t=l(u,"H1",{class:!0});var y=o(t);c=m(y,"Personal projects"),y.forEach(r),n=A(u),h=l(u,"DIV",{class:!0});var v=o(h);_=m(v,"In decreasing order of polish"),v.forEach(r),w=A(u),f=l(u,"DIV",{class:!0});var E=o(f);for(let G=0;G<i.length;G+=1)i[G].l(E);E.forEach(r),this.h()},h(){s(t,"class","svelte-q4ife7"),s(h,"class","subheading svelte-q4ife7"),s(f,"class","projectsContainer svelte-q4ife7")},m(u,y){q(u,t,y),e(t,c),q(u,n,y),q(u,h,y),e(h,_),q(u,w,y),q(u,f,y);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(f,null)},p(u,[y]){if(y&0){p=fs;let v;for(v=0;v<p.length;v+=1){const E=us(u,p,v);i[v]?i[v].p(E,y):(i[v]=ds(E),i[v].c(),i[v].m(f,null))}for(;v<i.length;v+=1)i[v].d(1);i.length=p.length}},i:F,o:F,d(u){u&&r(t),u&&r(n),u&&r(h),u&&r(w),u&&r(f),Pt(i,u)}}}class er extends ie{constructor(t){super(),oe(this,t,null,Xs,ne,{})}}function tr(g){let t,c,n,h,_,w,f,p,i,u,y,v,E,G,b,I,k,P,U,B,S,H;return{c(){t=a("h1"),c=d("Support"),n=$(),h=a("div"),_=a("div"),w=d(`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),f=a("ul"),p=a("li"),i=a("a"),u=d("givedirectly.org"),y=d(";"),v=$(),E=a("li"),G=a("a"),b=d("againstmalaria.com"),I=d(";"),k=$(),P=a("li"),U=d("any other charity you know is doing good work."),B=$(),S=a("div"),H=d("Feel free to let me know and I'll consider it hobby-project income."),this.h()},l(L){t=l(L,"H1",{});var O=o(t);c=m(O,"Support"),O.forEach(r),n=A(L),h=l(L,"DIV",{class:!0});var C=o(h);_=l(C,"DIV",{class:!0});var W=o(_);w=m(W,`If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		`),f=l(W,"UL",{});var T=o(f);p=l(T,"LI",{});var j=o(p);i=l(j,"A",{href:!0,target:!0,rel:!0});var M=o(i);u=m(M,"givedirectly.org"),M.forEach(r),y=m(j,";"),j.forEach(r),v=A(T),E=l(T,"LI",{});var N=o(E);G=l(N,"A",{href:!0,target:!0,rel:!0});var z=o(G);b=m(z,"againstmalaria.com"),z.forEach(r),I=m(N,";"),N.forEach(r),k=A(T),P=l(T,"LI",{});var R=o(P);U=m(R,"any other charity you know is doing good work."),R.forEach(r),T.forEach(r),W.forEach(r),B=A(C),S=l(C,"DIV",{class:!0});var D=o(S);H=m(D,"Feel free to let me know and I'll consider it hobby-project income."),D.forEach(r),C.forEach(r),this.h()},h(){s(i,"href","https://www.givedirectly.org"),s(i,"target","_blank"),s(i,"rel","noreferrer"),s(G,"href","https://www.againstmalaria.com"),s(G,"target","_blank"),s(G,"rel","noreferrer"),s(_,"class","svelte-1l82y4b"),s(S,"class","svelte-1l82y4b"),s(h,"class","supportUsBox svelte-1l82y4b")},m(L,O){q(L,t,O),e(t,c),q(L,n,O),q(L,h,O),e(h,_),e(_,w),e(_,f),e(f,p),e(p,i),e(i,u),e(p,y),e(f,v),e(f,E),e(E,G),e(G,b),e(E,I),e(f,k),e(f,P),e(P,U),e(h,B),e(h,S),e(S,H)},p:F,i:F,o:F,d(L){L&&r(t),L&&r(n),L&&r(h)}}}class sr extends ie{constructor(t){super(),oe(this,t,null,tr,ne,{})}}const rr=As("goto");function ms(g,t,c){const n=g.slice();return n[6]=t[c],n}function ar(g){let t;return{c(){t=a("i"),this.h()},l(c){t=l(c,"I",{class:!0}),o(t).forEach(r),this.h()},h(){s(t,"class",Ie(`${g[6].iconClass} buttonIcon`)+" svelte-l5i8lr")},m(c,n){q(c,t,n)},p:F,d(c){c&&r(t)}}}function ps(g){let t,c,n,h,_,w=g[6].iconClass&&ar(g);function f(){return g[3](g[6])}return{c(){t=a("button"),w&&w.c(),c=$(),this.h()},l(p){t=l(p,"BUTTON",{"aria-label":!0,class:!0});var i=o(t);w&&w.l(i),c=A(i),i.forEach(r),this.h()},h(){s(t,"aria-label",g[6].name??"home"),s(t,"class",n=Ie(g[6].name===g[0].name?"selectedTab":"")+" svelte-l5i8lr")},m(p,i){q(p,t,i),w&&w.m(t,null),e(t,c),h||(_=ks(t,"click",f),h=!0)},p(p,i){g=p,g[6].iconClass&&w.p(g,i),i&1&&n!==(n=Ie(g[6].name===g[0].name?"selectedTab":"")+" svelte-l5i8lr")&&s(t,"class",n)},d(p){p&&r(t),w&&w.d(),h=!1,_()}}}function lr(g){let t,c,n,h,_,w,f,p,i,u;t=new Cs({});let y=g[1],v=[];for(let b=0;b<y.length;b+=1)v[b]=ps(ms(g,y,b));var E=g[0].component;function G(b){return{}}return E&&(i=ls(E,G())),{c(){we(t.$$.fragment),c=$(),n=a("div"),h=a("div"),_=a("div");for(let b=0;b<v.length;b+=1)v[b].c();w=$(),f=a("div"),p=a("div"),i&&we(i.$$.fragment),this.h()},l(b){We(t.$$.fragment,b),c=A(b),n=l(b,"DIV",{class:!0});var I=o(n);h=l(I,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var k=o(h);_=l(k,"DIV",{class:!0});var P=o(_);for(let S=0;S<v.length;S+=1)v[S].l(P);P.forEach(r),w=A(k),f=l(k,"DIV",{style:!0});var U=o(f);p=l(U,"DIV",{class:!0});var B=o(p);i&&We(i.$$.fragment,B),B.forEach(r),U.forEach(r),k.forEach(r),I.forEach(r),this.h()},h(){s(_,"class","navContainer svelte-l5i8lr"),s(p,"class","pageContainer svelte-l5i8lr"),ys(f,"display","contents"),s(h,"class","appContainer svelte-l5i8lr"),s(h,"data-sveltekit-preload-data","hover"),s(n,"class","scrollbarPadding svelte-l5i8lr")},m(b,I){ye(t,b,I),q(b,c,I),q(b,n,I),e(n,h),e(h,_);for(let k=0;k<v.length;k+=1)v[k]&&v[k].m(_,null);e(h,w),e(h,f),e(f,p),i&&ye(i,p,null),u=!0},p(b,[I]){if(I&7){y=b[1];let k;for(k=0;k<y.length;k+=1){const P=ms(b,y,k);v[k]?v[k].p(P,I):(v[k]=ps(P),v[k].c(),v[k].m(_,null))}for(;k<v.length;k+=1)v[k].d(1);v.length=y.length}if(I&1&&E!==(E=b[0].component)){if(i){Is();const k=i;Ee(k.$$.fragment,1,0,()=>{ke(k,1)}),bs()}E?(i=ls(E,G()),we(i.$$.fragment),be(i.$$.fragment,1),ye(i,p,null)):i=null}},i(b){u||(be(t.$$.fragment,b),i&&be(i.$$.fragment,b),u=!0)},o(b){Ee(t.$$.fragment,b),i&&Ee(i.$$.fragment,b),u=!1},d(b){ke(t,b),b&&r(c),b&&r(n),Pt(v,b),i&&ke(i)}}}function ir(g,t,c){let n;Es(g,$s,i=>c(4,n=i));const h=[{iconClass:"fa-solid fa-home",component:Os},{iconClass:"fa-solid fa-screwdriver-wrench",name:"projects",component:er},{iconClass:"fa-solid fa-envelope",name:"contact",component:Ns},{iconClass:"fa-solid fa-handshake",name:"support",component:sr}];let _=h[0];const w=n.url.searchParams.get("tab");h.forEach(i=>{i.name===w&&c(0,_=i)});const f=i=>{c(0,_=i),i.name?n.url.searchParams.set("tab",i.name):n.url.searchParams.delete("tab"),rr(`?${n.url.searchParams.toString()}`)};return[_,h,f,i=>f(i)]}class hr extends ie{constructor(t){super(),oe(this,t,ir,lr,ne,{})}}export{hr as component};
