if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-66335072.js",revision:null},{url:"assets/index-8173e8e1.css",revision:null},{url:"index.html",revision:"fc24be7e106ed1177e53c40e51469748"},{url:"registerSW.js",revision:"5d2a42f25354341898b042531350107a"},{url:"favicon.ico",revision:"3372aee42ae6ddf52d01e0ebcef5a2eb"},{url:"apple-touch-icon.png",revision:"35c701c7c38d85bdc67f12cb16f71a72"},{url:"maskable_icon.png",revision:"247dbedc8280bb054964462a2ea0f9c6"},{url:"android-chrome-192x192.png",revision:"1db0e84fcd1615b062f809e85859e64c"},{url:"android-chrome-512x512.png",revision:"8d2d1807854f1f08688e1416033399e3"},{url:"manifest.webmanifest",revision:"87b0eefaeead59aee6864a3642c96453"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
