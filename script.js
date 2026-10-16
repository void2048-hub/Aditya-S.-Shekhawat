/* ✏️ Edit DATA only. */
const DATA={name:"Aditya S. Shekhawat",email:"aditya2006@yopmail.com",resume:"#",
roles:["AI Engineer","Full Stack Developer","ML Engineer","Backend Developer","Creator","Builder"],
about:["Currently a Cyber Security Student","Describe what you build and what drives you."],
edu:"B.Tech · JECRC UNIVERSITY · 2025–2029 · CGPA 0.0",
stats:[["10+","Projects"],["3","Internships"],["5+","Certifications"],["1k+","Commits"]],
ach:["Achievement one","Achievement two","Achievement three"],
skills:[{n:"Python",d:"Primary language for ML and backend.",e:"3 yrs",p:"Project 1, 2",s:"NumPy · FastAPI"},{n:"Machine Learning",d:"Models from research to production.",e:"2 yrs",p:"Project 1",s:"PyTorch · scikit-learn"},{n:"React / Next.js",d:"Fast, accessible interfaces.",e:"2 yrs",p:"Project 2, 3",s:"TypeScript · Tailwind"},{n:"Backend",d:"APIs, databases and infra.",e:"2 yrs",p:"Project 3",s:"Node · PostgreSQL"}],
projects:[{n:"Project One",d:"Short description of your best project.",t:["Python","PyTorch"],gh:"#",live:"#"},{n:"Project Two",d:"Short description.",t:["Next.js","TypeScript"],gh:"#",live:"#"},{n:"Project Three",d:"Short description.",t:["Node.js","PostgreSQL"],gh:"#",live:"#"}],
jobs:[{c:"Company Name",r:"Your Role",y:"Jan 2025 – Present",d:"What you built and the impact it had."}],
certs:["Certification One","Certification Two","Certification Three"],
quote:"Your favorite quote goes here.",
socials:[["GitHub","https://github.com/"],["LinkedIn","https://linkedin.com/"],["Twitter","https://twitter.com/"]]};
const $=s=>document.querySelector(s),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const NAV=["about","skills","projects","experience","certifications","contact"];

/* Render content */
document.title=DATA.name+" — "+DATA.roles[0];
$("#name").textContent=DATA.name;$("#resume").href=DATA.resume;$("#quote").textContent="“"+DATA.quote+"”";
$("#copy").textContent="© "+new Date().getFullYear()+" "+DATA.name;
$("#nav").innerHTML='<a href="#top">'+DATA.name.split(" ")[0]+"</a>"+NAV.map(n=>`<a href="#${n}">${n}</a>`).join("");
const card=(h,c="")=>`<div class="glass card tilt ${c}">${h}</div>`;
$("#aboutBody").innerHTML=card(`<small>Biography</small>${DATA.about.map(a=>`<p>${a}</p>`).join("")}<p><small>${DATA.edu}</small></p>`)+
 `<div class="stats">${DATA.stats.map(s=>`<div class="glass stat tilt"><b>${s[0]}</b>${s[1]}</div>`).join("")}</div>`+
 card(`<small>Achievements</small>${DATA.ach.map(a=>`<p>• ${a}</p>`).join("")}`,"span2");
$("#projBody").innerHTML=DATA.projects.map((p,i)=>card(`${i?"":'<span class="feat">Featured</span>'}<h3>${p.n}</h3><p>${p.d}</p>${p.t.map(t=>`<span class="tag">${t}</span>`).join("")}<div class="links"><a href="${p.gh}">GitHub ↗</a><a href="${p.live}">Live Demo ↗</a></div>`,i?"":"span2")).join("");
$("#jobs").innerHTML=DATA.jobs.map(j=>`<li>${card(`<small>${j.y}</small><h3>${j.r} · ${j.c}</h3><p>${j.d}</p>`)}</li>`).join("");
$("#certs").innerHTML=DATA.certs.map(c=>card(`<h3>✦ ${c}</h3>`)).join("");
$("#socials").innerHTML=DATA.socials.map(s=>`<a href="${s[1]}" aria-label="${s[0]}">${s[0]}</a>`).join("");
const pts=[[10,60],[70,20],[140,50],[210,15],[290,55],[390,25]];
$("#const").setAttribute("points",pts.join(" "));
$("#const").insertAdjacentHTML("afterend",pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="currentColor"/>`).join(""));
$("#planets").innerHTML=DATA.skills.map((k,i)=>{const z=110+(i%2)*40;return `<button class="planet" data-i="${i}" style="width:${z}px;height:${z}px;background:radial-gradient(circle at 30% 30%,#fff,hsl(${215+i*25} 85% 60%) 35%,hsl(${230+i*25} 70% 20%))"><b>${k.n}</b><span class="orbit"><i></i></span></button>`}).join("");
function showSkill(i){const k=DATA.skills[i];$("#skillInfo").innerHTML=`<h3>${k.n}</h3><p>${k.d}</p><dl><div><dt>Experience</dt><dd>${k.e}</dd></div><div><dt>Projects</dt><dd>${k.p}</dd></div><div><dt>Stack</dt><dd>${k.s}</dd></div></dl>`;
 gsap.fromTo("#skillInfo",{opacity:0,y:15},{opacity:1,y:0,duration:.4})}
document.querySelectorAll(".planet").forEach((p,i)=>{["mouseenter","focus","click"].forEach(e=>p.addEventListener(e,()=>showSkill(i)));
 gsap.to(p,{y:-14,duration:4+i,yoyo:true,repeat:-1,ease:"sine.inOut"});gsap.to(p.querySelector(".orbit"),{rotation:360,duration:6+i*2,repeat:-1,ease:"none"})});
showSkill(0);

/* Rotating role */
let ri=0;const role=$("#role");const setRole=()=>{role.textContent=DATA.roles[ri];gsap.fromTo(role,{opacity:0,y:20,filter:"blur(6px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.6})};
setRole();setInterval(()=>{ri=(ri+1)%DATA.roles.length;setRole()},2400);

/* Smooth scroll */
let lenis=null;
if(!reduce){lenis=new Lenis({lerp:.08});gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.hash.length<2)return;e.preventDefault();const t=$(a.hash);lenis?lenis.scrollTo(t,{offset:-20}):t.scrollIntoView()});

/* Scroll-linked background colour, nav state, reveal */
const stops=[[0,"#ffffff"],[.1,"#e5e7eb"],[.25,"#3b82f6"],[.42,"#1e3a8a"],[.62,"#0a1030"],[.8,"#02030a"]];
let prog=0;
function colorAt(p){for(let i=1;i<stops.length;i++)if(p<=stops[i][0]){const a=stops[i-1],b=stops[i];return gsap.utils.interpolate(a[1],b[1],(p-a[0])/(b[0]-a[0]))}return stops[stops.length-1][1]}
function onScroll(){const m=document.documentElement.scrollHeight-innerHeight;prog=m>0?scrollY/m:0;
 $("#bg").style.background=colorAt(prog);document.body.style.color=prog<.12?"#0b1020":prog<.2?gsap.utils.interpolate("#0b1020","#f1f5ff",(prog-.12)/.08):"#f1f5ff";
 $("#nav").classList.toggle("small",scrollY>80)}
addEventListener("scroll",onScroll,{passive:true});
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&
 (()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});NAV.forEach(n=>io.observe($("#"+n)))})();
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){gsap.fromTo(e.target,{opacity:0,y:50},{opacity:1,y:0,duration:.9,ease:"power3.out"});rv.unobserve(e.target)}}),{rootMargin:"-60px"});
document.querySelectorAll("h2,.card,.stat,.planet,#skillInfo,form").forEach(el=>{el.style.opacity=0;rv.observe(el)});

/* Cursor orb, trail, magnet, tilt, ripple */
if(matchMedia("(pointer:fine)").matches&&!reduce){document.body.classList.add("orb");
 const mx={x:-100,y:-100},o={x:-100,y:-100},sx=gsap.quickSetter("#orb","x","px"),sy=gsap.quickSetter("#orb","y","px");
 const trail=[...Array(10)].map(()=>{const d=document.createElement("div");d.className="trail";document.body.appendChild(d);return{d,x:-100,y:-100}});
 addEventListener("pointermove",e=>{mx.x=e.clientX;mx.y=e.clientY;gsap.to("#orb span",{scale:e.target.closest("a,button,input,textarea,.tilt")?2.4:1,duration:.3})});
 gsap.ticker.add(()=>{o.x+=(mx.x-o.x)*.18;o.y+=(mx.y-o.y)*.18;sx(o.x);sy(o.y);let px=o.x,py=o.y;
  trail.forEach((t,i)=>{t.x+=(px-t.x)*.35;t.y+=(py-t.y)*.35;t.d.style.transform=`translate(${t.x}px,${t.y}px) scale(${1-i/12})`;t.d.style.opacity=1-i/10;px=t.x;py=t.y})});
 document.querySelectorAll(".mag").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.3,duration:.4,ease:"power3.out"})});
  b.addEventListener("mouseleave",()=>gsap.to(b,{x:0,y:0,duration:.8,ease:"elastic.out(1,.4)"}))});
 document.querySelectorAll(".tilt").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect();gsap.to(c,{rotationY:((e.clientX-r.left)/r.width-.5)*14,rotationX:-((e.clientY-r.top)/r.height-.5)*14,y:-8,transformPerspective:900,boxShadow:"0 0 50px rgba(96,140,255,.35)",duration:.4})});
  c.addEventListener("mouseleave",()=>gsap.to(c,{rotationX:0,rotationY:0,y:0,boxShadow:"0 20px 50px rgba(0,0,0,.2)",duration:.8,ease:"elastic.out(1,.5)"}))})}
document.querySelectorAll(".btn").forEach(b=>b.addEventListener("click",e=>{const r=b.getBoundingClientRect(),s=document.createElement("span");s.className="ripple";const z=Math.max(r.width,r.height);
 Object.assign(s.style,{width:z+"px",height:z+"px",left:e.clientX-r.left-z/2+"px",top:e.clientY-r.top-z/2+"px"});b.appendChild(s);gsap.to(s,{scale:3,opacity:0,duration:.6,onComplete:()=>s.remove()})}));

/* Contact: rocket launch → mailto */
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);$("#sendTxt").textContent="Launched";
 gsap.to("#rocket",{y:-400,x:60,opacity:0,duration:1.2,ease:"power2.in"});
 setTimeout(()=>{location.href=`mailto:${DATA.email}?subject=${encodeURIComponent("Hello from "+f.get("name"))}&body=${encodeURIComponent(f.get("message")+"\n\n"+f.get("email"))}`},1400)});

/* Three.js universe */
(function(){const cv=$("#space"),r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,1.75));
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,200);cam.position.z=6;
 sc.add(new THREE.AmbientLight(0xffffff,.7));const pl=new THREE.PointLight(0x9bb8ff,1.5);pl.position.set(5,5,5);sc.add(pl);
 const pts=(n,spread,size,col)=>{const g=new THREE.BufferGeometry(),a=new Float32Array(n*3);for(let i=0;i<n*3;i++)a[i]=(Math.random()-.5)*spread[i%3];g.setAttribute("position",new THREE.BufferAttribute(a,3));return new THREE.Points(g,new THREE.PointsMaterial({size,color:col,transparent:true,opacity:.9,depthWrite:false}))};
 const stars=pts(3500,[160,160,160],.25,0xffffff),dust=pts(300,[24,60,12],.06,0xbcd0ff);dust.position.y=-10;sc.add(stars,dust);
 const core=new THREE.Group(),m=new THREE.Mesh(new THREE.IcosahedronGeometry(1.2,5),new THREE.MeshStandardMaterial({color:0x4f7cff,emissive:0x2347c9,emissiveIntensity:.8,roughness:.2,metalness:.6}));
 const w=new THREE.Mesh(new THREE.IcosahedronGeometry(1.8,1),new THREE.MeshBasicMaterial({color:0x9bb8ff,wireframe:true,transparent:true,opacity:.35}));core.add(m,w,pts(80,[5,5,5],.05,0x8aa8ff));sc.add(core);
 const planets=[[-1,-5,.9,0x7aa2ff],[1,-9,1.3,0xa78bfa],[-1,-14,.7,0x38bdf8],[1,-19,1.1,0xc4b5fd]].map(([s,y,rad,c])=>{const p=new THREE.Mesh(new THREE.SphereGeometry(rad,40,40),new THREE.MeshStandardMaterial({color:c,roughness:.7,emissive:c,emissiveIntensity:.15}));p.userData={s,y};sc.add(p);return p});
 let ptr={x:0,y:0},tx=0,ty=0;addEventListener("pointermove",e=>{ptr.x=e.clientX/innerWidth*2-1;ptr.y=-(e.clientY/innerHeight*2-1)});
 function size(){r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();const vw=2*Math.tan(cam.fov*Math.PI/360)*6*cam.aspect,wide=vw>6;
  core.position.set(wide?2.4:0,wide?0:1.6,0);planets.forEach(p=>p.position.set(p.userData.s*vw*.3,p.userData.y,-2))}
 addEventListener("resize",size);size();
 const clock=new THREE.Clock();(function loop(){requestAnimationFrame(loop);const t=clock.getElapsedTime(),d=clock.getDelta();
  tx+=(ptr.x*.8-tx)*.05;ty+=((-prog*22+ptr.y*.4)-ty)*.05;cam.position.set(tx,ty,6);cam.lookAt(0,ty,0);
  if(!reduce){core.rotation.y=t*.25;core.rotation.x+=(-ptr.y*.5-core.rotation.x)*.05;core.scale.setScalar(1+Math.sin(t*1.6)*.03);stars.rotation.z=t*.01+prog*.5;dust.rotation.y=t*.02;
   planets.forEach((p,i)=>{p.rotation.y=t*.1;p.position.y=p.userData.y+Math.sin(t*.6+i)*.3})}
  r.render(sc,cam)})()})();

/* Boot sequence */
const logs=["Igniting engines","Calibrating AI core","Activating particle field","Syncing star charts","All systems nominal"],o={v:0};
gsap.to(o,{v:100,duration:reduce?.3:3.2,ease:"power2.inOut",onUpdate(){$("#pct").textContent=Math.round(o.v)+"%";$("#log").textContent=logs[Math.min(4,Math.floor(o.v/21))]},
 onComplete(){gsap.to("#loader",{opacity:0,scale:1.08,duration:.9,onComplete:()=>$("#loader").remove()});gsap.to("#app",{opacity:1,duration:1});onScroll()}});
