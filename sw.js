if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const r=e=>i(e,o),d={module:{uri:o},exports:n,require:r};s[o]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-0c61ecd6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicons/android-chrome-192x192.png",revision:"b1dab2b32888ecea363e73c1201e074b"},{url:"assets/favicons/android-chrome-512x512.png",revision:"1c71f1be26ba428025c44b3d70b1f65a"},{url:"assets/favicons/apple-touch-icon.png",revision:"ebb2a912405b097c048f67993e37fec4"},{url:"assets/favicons/favicon-16x16.png",revision:"83d9ee7d961ba9894a4182e37e23f1c8"},{url:"assets/favicons/favicon-32x32.png",revision:"2c7a7b87aa625741fac874ab092eccf7"},{url:"assets/favicons/favicon.ico",revision:"cc7d4f4e2db871ec76432d881d5ac47c"},{url:"assets/fonts/RedHatDisplay-Medium.ttf",revision:"a18908970bf89b4df23e683430abe4eb"},{url:"assets/fonts/RedHatDisplay-Regular.ttf",revision:"f913c823bff6d018e14f320bfb31ffa4"},{url:"assets/fonts/RedHatDisplay-SemiBold.ttf",revision:"769521f666c584b69561316df46274aa"},{url:"assets/icons/cc-logo.png",revision:"0992b99966e9bf47623f788a450e446b"},{url:"assets/icons/es-logo.png",revision:"cb6e20c09cc37fecdd4a03f1fc0c0073"},{url:"assets/icons/first-btn.png",revision:"e30f3a6ee189b71ef8fe0a22011cf3ee"},{url:"assets/icons/frame-lights.png",revision:"fb7f7158a8e5c712c49d0b5b25c5865f"},{url:"assets/icons/frame.png",revision:"8a4a514f604435739829c0bdd883c060"},{url:"assets/icons/header-light.png",revision:"61c5285b3a92df9169caabfe1ada3340"},{url:"assets/icons/home-bg.png",revision:"57262bb13aadc4267b859a2ee21ab351"},{url:"assets/icons/home-logo.png",revision:"bb265d0fbb8aa252d0606b277b5d7bde"},{url:"assets/icons/home-shape-left.png",revision:"f39b6734eb5c64cf4b6feb526c2a0663"},{url:"assets/icons/home-shape-right.png",revision:"d951af5dbb6afe84b44abd9bcfed60cc"},{url:"assets/icons/home-shape.png",revision:"4a41534731f4619d9cd8c9f70038d568"},{url:"assets/icons/iag-logo.png",revision:"46c3df592eb57e0b0c073a8e661f05d0"},{url:"assets/icons/last-btn.png",revision:"49b7086d72ecc88159b128400ddc6d54"},{url:"assets/icons/light-circle.png",revision:"a29dfb5f0dadc16881f67acc5332360d"},{url:"assets/icons/link-left-bg.png",revision:"51bb4b8ff3409d3c9b1ee371cb9d76a6"},{url:"assets/icons/link-right-bg.png",revision:"a9028b4bd11b0010f54aa7d8d709df01"},{url:"assets/icons/mdr-logo.png",revision:"4d6937d4d032a940bb2488fa82ec28d5"},{url:"assets/icons/next-btn.png",revision:"556b2924be38453d2a9b98d6d7bdb149"},{url:"assets/icons/next.png",revision:"1096d19a89009b05e25f7d6d203c4bea"},{url:"assets/icons/ns-logo.png",revision:"69047e27052395a00d5d0c094889e924"},{url:"assets/icons/pause.png",revision:"dc14283fc9b1fa597eda6843b3a56f9b"},{url:"assets/icons/play.png",revision:"179f138831be081bcc10f76f285a4ec5"},{url:"assets/icons/prev-btn.png",revision:"d463ee4e8c9c78d27682e144c9a46670"},{url:"assets/icons/prev.png",revision:"552d1669a5e52806ffaf63f7fe6b1818"},{url:"assets/icons/sangfor-logo-2.png",revision:"64590f05e9d97850178d504a97b45b9f"},{url:"assets/icons/sangfor-logo-circle.png",revision:"2b6ae5b0eb8c5919984c942e1bc1a932"},{url:"assets/icons/sangfor-logo.png",revision:"0b5cb752c2dbdbd24628ddcac5266d5d"},{url:"assets/videos/intro.mp4",revision:"83252b8b8056648b604fa26c484f6c3d"},{url:"assets/videos/protection/scene-1.mp4",revision:"d9fad3e345f3d7f72998ab746967ee00"},{url:"assets/videos/protection/scene-2.mp4",revision:"1f644417839029efa3f024711e1eafd3"},{url:"assets/videos/protection/scene-3.mp4",revision:"bc742231b8d363f52fc4b0acd0f256c0"},{url:"assets/videos/protection/scene-4.mp4",revision:"d737192fd80aa24cebf01bc971dab4c5"},{url:"assets/videos/protection/scene-5.mp4",revision:"992a2336be03b3b8643fb0b67e062f11"},{url:"assets/videos/protection/scene-6.mp4",revision:"8122466b48e3be4372a8baa1993624fa"},{url:"assets/videos/protection/scene-7.mp4",revision:"e44d860a0ed20cb5240197629f937ac0"},{url:"assets/videos/protection/scene-8.mp4",revision:"bc5e46c6d72ac917a4d217ed9f532a6d"},{url:"assets/videos/protection/scene-9.mp4",revision:"4ec696622e587376b2c4975f0edaed46"},{url:"assets/videos/secops/scene-1.mp4",revision:"23cd4960a24fc360371887521cfcca0f"},{url:"assets/videos/secops/scene-2.mp4",revision:"1f644417839029efa3f024711e1eafd3"},{url:"assets/videos/secops/scene-3.mp4",revision:"bc742231b8d363f52fc4b0acd0f256c0"},{url:"assets/videos/secops/scene-4.mp4",revision:"d737192fd80aa24cebf01bc971dab4c5"},{url:"assets/videos/secops/scene-5.mp4",revision:"992a2336be03b3b8643fb0b67e062f11"},{url:"assets/videos/secops/scene-6.mp4",revision:"8122466b48e3be4372a8baa1993624fa"},{url:"assets/videos/secops/scene.png",revision:"3b350d2e338ace8bc4e0a494b0ad81d4"},{url:"css/animations.css",revision:"209d3d33d01c8efe28ae31bd6b9ba43d"},{url:"css/style.css",revision:"e75ab35106c0e085e841a26503dd56aa"},{url:"index.html",revision:"420f76936d04f7876c2940f7985eca68"},{url:"js/app.js",revision:"7c458dabf9be8a827241bc46cb8b0578"},{url:"js/home.js",revision:"d45541f7886445c85001a17d115c2df0"},{url:"js/protection.js",revision:"1fb222cc34393e5aca202959bc40ef90"},{url:"js/secops.js",revision:"c4f8f3fd8945c5f11f5fd76bdee1fc20"},{url:"manifest.json",revision:"4f4fb408be29b6e943eccd5f20859adc"},{url:"package.json",revision:"b1475875f9a3dc5e0278e632c7f6e14e"},{url:"products/ransomware-protection.html",revision:"86ef586b4f44478211b12a7791bde3b6"},{url:"products/simplified-secops.html",revision:"960a740bf2c766d08e32d00a62389683"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
