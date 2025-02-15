(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const a=["Home","Research","Teachings","Talks","Contact"],l=`
	<nav id="navigation" class="nav">
		<ul class="nav__list">
			${a.map((i,e)=>`
				<li class="nav__item">
					<a href="${i.toLowerCase()}" aria-selected="${e===0}" class="nav__link">${i}</a>
				</li>`).join("")}
		</ul>
	</nav>
`,d=`
	<div class="logo">
		<a href="#">
			<img src="/logo.png" alt="Logo" />
		</a>
	</div>
	${l}
`,u=`
		<div class="home__left">
			<h1>Hi, I'm John Doe - Left</h1>
		</div>
		<div class="home__right">
			<div></div>
		</div>
	`,f=`
	${u}
`;class m{constructor(){}render(e,r){const o=document.getElementById(e);if(!o){console.error(`Element with id "${e}" not found.`);return}o.innerHTML=r}renderWithEvent(e,r,o,t){const n=document.getElementById(e);if(!n){console.error(`Element with id "${e}" not found.`);return}n.innerHTML=r;const s=document.getElementById(e);if(!s){console.error(`Element with id "${e}" not found.`);return}s.addEventListener(o,t)}attachEvent(e,r,o){const t=document.getElementById(e);if(!t){console.error(`Element with id "${e}" not found.`);return}t.addEventListener(r,o)}clear(e){const r=document.querySelector(`#${e}`);if(!r){console.error(`Element with id "${e}" not found.`);return}r.innerHTML=""}}const c=new m;c.render("header",d);c.render("home",f);c.attachEvent("navigation","click",i=>{i.preventDefault();const e=i.target;e.tagName==="A"&&(document.querySelectorAll(".nav__link").forEach(o=>o.setAttribute("aria-selected","false")),e.setAttribute("aria-selected","true"))});
//# sourceMappingURL=index-CpiBK6hG.js.map
