if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,d)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let r={};const i=s=>n(s,u),a={module:{uri:u},exports:r,require:i};e[u]=Promise.all(l.map((s=>a[s]||i(s)))).then((s=>(d(...s),r)))}}define(["./workbox-82da6cfc"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/assets/../index.html",revision:"ae62d9589dba29bb4b094ca446f6d456"},{url:"/assets/10.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/11.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/12.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/13.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/14.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/15.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/16.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/17.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/18.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/19.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/2.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/20.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/3.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/4.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/5.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/6.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/7.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/8.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/9.5f88a5cb1f6169d69d80.bundle.js",revision:null},{url:"/assets/main.bundle.js",revision:"6178ae851502dadf728ae3859efef1dd"},{url:"/assets/vendor.bundle.js",revision:"ca6435266b2e0ee4ea3bb7f4021358d5"},{url:"/assets/worker.bundle.worker.js",revision:"a490066fec7ae03e2dd52558a4df40e4"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new s.CacheFirst({cacheName:"data",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));
