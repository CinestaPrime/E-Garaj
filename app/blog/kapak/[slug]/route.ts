import {getBlogPost} from "../../posts";
export const runtime="nodejs";
function escapeXml(s:string){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]||c));}
export async function GET(_req:Request,{params}:{params:Promise<{slug:string}>}){
const {slug}=await params;const post=getBlogPost(slug);if(!post)return new Response("Not found",{status:404});
let hash=0;for(let i=0;i<slug.length;i++)hash=(hash*31+slug.charCodeAt(i))|0;
const idx=Math.abs(hash)%8;const palette=[["#0b1822","#26647f","#87c0db"],["#14171b","#595f70","#d5d8db"],["#111b20","#265f69","#91c8ca"],["#191616","#785348","#caa590"],["#121725","#47527b","#a5bce9"],["#1c1917","#897258","#e0b78e"],["#111f1d","#517b6d","#b0cbb5"],["#101820","#3d6d92","#a8d5ef"]][idx];
const [bg,mid,accent]=palette;const side=idx%3;const x=side===0?0:side===1?80:-90;const opacity=(idx%4+1)*0.06;
const rims=[320,890].map((cx,n)=>`<g transform="translate(${cx} 627)"><circle r="91" fill="#060b0d" stroke="#5e6a70" stroke-width="10"/><circle r="70" fill="#1c262c" stroke="${accent}" stroke-width="2"/>${Array.from({length:10},(_,i)=>`<path d="M-6 -59 L8 -59 L17 -18 L0 0 Z" fill="#798a95" transform="rotate(${i*36})"/>`).join("")}<circle r="17" fill="#111921" stroke="${accent}" stroke-width="4"/></g>`).join("");
const circuits=Array.from({length:15},(_,i)=>{const xx=90+i*110;const yy=45+(i%5)*46;return `<path d="M${xx} ${yy} h${60+(i%3)*30} v${35+(i%4)*17}" fill="none" stroke="${accent}" stroke-opacity=".13" stroke-width="2"/><circle cx="${xx}" cy="${yy}" r="4" fill="${accent}" opacity=".24"/>`}).join("");
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-label="${escapeXml(post.title)}"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset=".56" stop-color="${mid}"/><stop offset="1" stop-color="#06090c"/></linearGradient><linearGradient id="body" x1="0" x2=".6" y2="1"><stop stop-color="#11191f"/><stop offset=".23" stop-color="#89969a"/><stop offset=".45" stop-color="#1c2b33"/><stop offset=".75" stop-color="#3e4f56"/><stop offset="1" stop-color="#080d12"/></linearGradient><linearGradient id="glass"><stop stop-color="#02080d"/><stop offset="1" stop-color="${mid}"/></linearGradient><radialGradient id="light"><stop stop-color="${accent}" stop-opacity=".35"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="18"/></filter></defs>
<rect width="1600" height="1000" fill="url(#bg)"/><ellipse cx="${780+x}" cy="455" rx="680" ry="390" fill="url(#light)"/><g opacity=".35">${circuits}</g>
<path d="M0 835 Q800 732 1600 840 L1600 1000 H0Z" fill="#070b0d"/>${Array.from({length:19},(_,i)=>`<path d="M${i*100-120} 960 L${i*95+200} 765" stroke="${accent}" stroke-width="2" opacity=".09"/>`).join("")}
<g transform="translate(${160+x} 30) scale(1.05)">
<ellipse cx="600" cy="730" rx="685" ry="70" fill="#02080b" opacity=".8" filter="url(#glow)"/>
<path d="M42 583 L75 526 Q174 482 270 470 L390 310 Q465 270 600 266 L850 270 Q965 290 1042 468 L1134 488 Q1228 516 1243 587 L1242 654 Q1234 686 1190 686 L1110 684 Q1095 555 970 549 Q845 550 830 687 L404 687 Q398 554 281 552 Q151 556 139 683 L69 674 Q24 658 30 619Z" fill="url(#body)" stroke="#b6c8d0" stroke-opacity=".58" stroke-width="3"/>
<path d="M302 468 L419 330 Q454 301 584 302 L588 465Z" fill="url(#glass)" stroke="#a6c5d0" stroke-opacity=".6" stroke-width="4"/><path d="M612 304 L830 307 Q916 320 988 464 L614 464Z" fill="url(#glass)" stroke="#a6c5d0" stroke-opacity=".6" stroke-width="4"/>
<path d="M602 310 L603 471" stroke="#bac2c5" stroke-opacity=".7" stroke-width="8"/><path d="M77 528 Q510 488 1190 546" stroke="${accent}" stroke-opacity=".24" stroke-width="6" fill="none"/>
<path d="M1027 525 L1222 549 L1216 569 L1044 572Z" fill="${accent}"/><path d="M1030 537 L1215 556" stroke="#fff" stroke-opacity=".75" stroke-width="5"/><path d="M44 545 L175 550 L156 571 L35 576Z" fill="#f0b49a"/><path d="M48 646 Q155 624 187 634 M392 637 Q700 666 851 629 M1074 640 L1234 623" stroke="#101c20" stroke-width="12" fill="none"/>
<path d="M347 476 L848 478 M640 500 L640 629 M846 490 L868 622" stroke="#e2eced" stroke-opacity=".3" stroke-width="3"/>
${rims}
<path d="M155 688 Q160 548 280 548 Q407 548 410 686 M827 687 Q833 548 968 549 Q1098 551 1110 685" fill="none" stroke="#080c10" stroke-width="19"/>
</g>
<path d="M70 72 h145 M70 72 v65 M1530 930 h-145 M1530 930 v-65" stroke="${accent}" stroke-opacity=".7" stroke-width="3"/>
<circle cx="1348" cy="165" r="${140+idx*8}" fill="none" stroke="${accent}" stroke-opacity=".24" stroke-width="2"/><circle cx="1348" cy="165" r="92" fill="none" stroke="${accent}" stroke-opacity=".17" stroke-dasharray="12 12" stroke-width="2"/>
<path d="M1220 165 h260 M1348 35 v260" stroke="${accent}" opacity="${opacity}"/>
</svg>`;
return new Response(svg,{headers:{"Content-Type":"image/svg+xml; charset=utf-8","Cache-Control":"public, max-age=86400, s-maxage=31536000, immutable"}});
}