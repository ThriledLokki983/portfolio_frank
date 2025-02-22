(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();async function s(a){const n=await(await fetch(`/src/pages/${a}.html`)).text(),o=document.querySelector("main.main-content");o&&(o.innerHTML=n)}const c=[{name:"Home",path:"home.html"},{name:"Research",path:"research.html"},{name:"Teachings",path:"teachings.html"},{name:"Talks",path:"talks.html"},{name:"Contact",path:"contact.html"}],d=`
	<nav id="navigation" class="nav">
		<ul class="nav__list">
			${c.map((a,e)=>`
				<li class="nav__item">
					<a href="#" aria-selected="${e===0}" data-path="${a.path}" class="nav__link">${a.name}</a>
				</li>`).join("")}
		</ul>
		<button
			class="toggle mobile-nav-toggle"
			aria-controls="primary-navigation"
			aria-expanded="false"
			aria-label="Menu"
		>
			<span class="toggle-btn"></span>
		</button>
	</nav>
`,h=`
	<div class="logo">
		<a href="#">
			<img src="/logo.png" alt="Logo" />
		</a>
	</div>
	${d}
`;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".nav__link").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const n=e.target.getAttribute("data-path");n&&(s(n),history.pushState(null,"",`${n}.html`))})})});const m=[{name:"LinkedIn",label:"@frank_tsiwah",url:"linkedin.com/in/frank-tsiwah-phd-49092759",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" ><path fill-rule="evenodd" d="M1.692 0A1.692 1.692 0 0 0 0 1.692v18.616A1.692 1.692 0 0 0 1.692 22h18.616A1.692 1.692 0 0 0 22 20.308V1.692A1.692 1.692 0 0 0 20.308 0H1.692ZM3.47 8.462h3.216v10.153H3.469V8.462Zm3.427-3.377a1.82 1.82 0 1 1-3.638 0 1.82 1.82 0 0 1 3.638 0Zm11.72 7.365c0-3.054-1.976-4.242-3.937-4.242a3.723 3.723 0 0 0-1.853.39c-.435.22-.89.718-1.242 1.588h-.09V8.462H8.462v10.162h3.225v-5.407c-.046-.553.13-1.27.493-1.694.363-.426.88-.528 1.274-.579h.123c1.026 0 1.787.635 1.787 2.234v5.444h3.226l.025-6.172Z" clip-rule="evenodd"/></svg>',type:"general"},{name:"Email",label:"f.tsiwah@rug.nl",url:"f.tsiwah@rug.nl",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M18.7 7.333c-.917 0-1.696-.356-2.337-1.07-.642-.712-.963-1.578-.963-2.596 0-1.019.32-1.885.963-2.598C17.004.356 17.782 0 18.7 0c.917 0 1.696.356 2.338 1.07.641.712.962 1.578.962 2.597 0 1.018-.32 1.884-.962 2.597-.642.713-1.421 1.07-2.338 1.07ZM2.2 22c-.605 0-1.123-.24-1.553-.717C.217 20.804 0 20.229 0 19.556V4.889c0-.672.216-1.248.647-1.726.431-.478.949-.718 1.553-.719h11.11a6.89 6.89 0 0 0 0 2.445c.128.652.34 1.258.633 1.819.293.56.65 1.054 1.072 1.48L11 11 2.2 4.889v2.444l8.8 6.111 5.802-4.033c.312.122.624.214.936.275a5.1 5.1 0 0 0 2.695-.214A4.99 4.99 0 0 0 22 8.556v11c0 .672-.215 1.247-.646 1.727-.43.479-.948.718-1.554.717H2.2Z"/></svg>',type:"email"},{name:"Phone",label:"+316 123 456 78",url:"+316 123 456 78",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M16.22.226a.74.74 0 0 1 1.06 0l2.5 2.564a.78.78 0 0 1 0 1.087l-2.5 2.564a.75.75 0 0 1-.535.245.733.733 0 0 1-.544-.225.773.773 0 0 1-.22-.558.784.784 0 0 1 .24-.549l1.22-1.251h-4.69a.74.74 0 0 1-.531-.225.78.78 0 0 1 0-1.088.74.74 0 0 1 .53-.226h4.69l-1.22-1.251a.78.78 0 0 1 0-1.087Zm-9.466.97C6.182.366 5.39-.009 4.55 0c-.797.008-1.573.358-2.221.824a6.293 6.293 0 0 0-1.66 1.781c-.41.666-.705 1.453-.665 2.22.193 3.696 2.22 7.645 5.067 10.567 2.845 2.92 6.644 4.948 10.48 4.56.752-.075 1.464-.468 2.045-.969a5.929 5.929 0 0 0 1.443-1.887c.34-.71.543-1.528.43-2.325-.115-.831-.568-1.574-1.401-2.066a16.091 16.091 0 0 1-.513-.318c-.15-.095-.31-.199-.503-.318a7.418 7.418 0 0 0-1.25-.634c-.447-.167-.958-.277-1.49-.202-.55.078-1.063.345-1.506.823-.34.37-.843.484-1.549.275-.718-.214-1.526-.743-2.228-1.459-.702-.714-1.233-1.548-1.46-2.302-.224-.747-.125-1.296.225-1.674.473-.511.725-1.08.778-1.68.052-.585-.09-1.135-.293-1.615-.304-.717-.82-1.43-1.224-1.985-.102-.14-.202-.28-.3-.42"/></svg>',type:"phone"},{name:"Location",label:"university of groningen",url:"https://www.google.com/maps/dir/?api=1&destination=Harmony+Building,+Oude+Kijk+in+Het+Jatstraat+26,+9712+EK+Groningen",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" ><path d="M10.673 24.375C13.21 21.24 19 13.643 19 9.375 19 4.199 14.745 0 9.5 0S0 4.2 0 9.375c0 4.268 5.79 11.865 8.327 15a1.507 1.507 0 0 0 2.346 0ZM9.5 6.25c.84 0 1.645.33 2.24.915.593.586.927 1.381.927 2.21s-.334 1.624-.928 2.21c-.594.586-1.4.915-2.239.915-.84 0-1.645-.33-2.24-.915a3.104 3.104 0 0 1-.927-2.21c0-.829.334-1.624.928-2.21A3.188 3.188 0 0 1 9.5 6.25Z"/></svg>',type:"location"}],g=`
	<header class="home__header">
		<h1>Frank Tsiwah,&nbsp;<small>PhD</small></h1>
		<span>Assistant Professor - <small>University of Groningen</small></span>
	</header>
`,p=`
		<div class="home__left">
			${g}
			<p>
				My research focuses on the neurophysiological and cognitive mechanisms underlying speech and language processing. I explore how speech and language impairments are encoded in audio signals and textual data, leveraging Natural Language Processing (NLP) and machine learning to detect and analyze these impairments. Using experimental, data-driven, and neurophysiological methods (e.g., EEG), I aim to understand disordered speech and language while developing innovative language technologies to support individuals with communication challenges. My work bridges linguistics, neuroscience, and AI to advance both theoretical understanding and practical applications.
			</p>
			<ul class="socials">
				${m.map(({name:a,url:e,icon:n,label:o,type:t})=>`
					<li>
						<a href="${t==="email"?`mailto:${e}`:t==="phone"?`tel:${e}`:e}" target="_blank" rel="noopener" aria-label="${a}">
							${n}
							<span>${o}</span>
						</a>
					</li>`).join("")}
			</ul>
		</div>
		<div class="home__right">
			<img src="/frank.png" alt="Hero"/>
			<div></div>
		</div>
`,u=`
	${p}
`;class v{constructor(){}render(e,n){const o=document.getElementById(e);if(!o){console.error(`Element with id "${e}" not found.`);return}o.innerHTML=n}renderWithEvent(e,n,o,t){const i=document.getElementById(e);if(!i){console.error(`Element with id "${e}" not found.`);return}i.innerHTML=n;const r=document.getElementById(e);if(!r){console.error(`Element with id "${e}" not found.`);return}r.addEventListener(o,t)}attachEvent(e,n,o){const t=document.getElementById(e);if(!t){console.error(`Element with id "${e}" not found.`);return}t.addEventListener(n,o)}clear(e){const n=document.querySelector(`#${e}`);if(!n){console.error(`Element with id "${e}" not found.`);return}n.innerHTML=""}}const l=new v;l.render("header",h);l.render("home",u);document.addEventListener("DOMContentLoaded",()=>{var e;const a=((e=window.location.pathname.split("/").pop())==null?void 0:e.split(".").shift())||"home";s(a)});window.addEventListener("popstate",()=>{var e;const a=((e=window.location.pathname.split("/").pop())==null?void 0:e.split(".").shift())||"home";s(a)});l.attachEvent("navigation","click",a=>{a.target.tagName});
//# sourceMappingURL=main-Kfgz_aaW.js.map
