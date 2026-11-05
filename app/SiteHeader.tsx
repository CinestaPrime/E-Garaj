"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";

export default function SiteHeader({active="home"}:{active?:"home"|"studio"|"about"}) {
 const [open,setOpen]=useState(false);
 const closeRef=useRef<HTMLButtonElement>(null);
 const triggerRef=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const prior=document.body.style.overflow;
  document.body.style.overflow="hidden";
  closeRef.current?.focus();
  const handleKey=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);triggerRef.current?.focus()}};
  window.addEventListener("keydown",handleKey);
  return ()=>{document.body.style.overflow=prior;window.removeEventListener("keydown",handleKey)};
 },[open]);
 const items=[{href:"/",label:"ANA SAYFA",number:"01",key:"home"},{href:"/studio",label:"ARAÇ TASARIMI",number:"02",key:"studio"},{href:"/hakkimizda",label:"HAKKIMIZDA",number:"03",key:"about"}];
 return <>
  <header className="ks-nav ks-nav-minimal">
   <Link href="/" className="ks-brand" aria-label="E-GARAJ ana sayfa"><img src="/e-garaj-logo.svg" alt="E-GARAJ"/></Link>
   <div className="ks-nav-right"><span className="ks-nav-caption">DIGITAL AUTOMOTIVE EXPERIENCE</span><button ref={triggerRef} type="button" className="ks-menu-trigger" aria-expanded={open} aria-controls="ks-menu-panel" onClick={()=>setOpen(true)}>MENÜ <span className="ks-menu-bars" aria-hidden="true"><i/><i/></span></button></div>
  </header>
  {open&&<div className="ks-menu-overlay" id="ks-menu-panel" role="dialog" aria-modal="true" aria-label="E-Garaj navigasyon menüsü">
   <div className="ks-menu-shell">
    <div className="ks-menu-top"><Link href="/" onClick={()=>setOpen(false)} aria-label="E-GARAJ ana sayfa"><img src="/e-garaj-logo.svg" alt="E-GARAJ"/></Link><button ref={closeRef} className="ks-menu-close" type="button" aria-label="Menüyü kapat" onClick={()=>{setOpen(false);triggerRef.current?.focus()}}>KAPAT <span aria-hidden="true">×</span></button></div>
    <div className="ks-menu-body"><div className="ks-menu-nav"><span className="ks-menu-eyebrow">E-GARAJ / MENÜ</span><nav aria-label="Sayfalar">{items.map(item=><Link key={item.key} href={item.href} onClick={()=>setOpen(false)} className={active===item.key?"current":""}><span className="ks-menu-index">{item.number}</span><span>{item.label}</span><span className="ks-menu-arrow">↗</span></Link>)}</nav></div><div className="ks-menu-aside"><div className="ks-menu-photo"/><div className="ks-menu-aside-caption"><span>BUILT FOR THE DRIVE</span><span>EST. 2026</span></div></div></div>
    <div className="ks-menu-footer"><span>E-GARAJ — BİR CINESTAAI MARKASI</span><a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">CINESTAAI ↗</a></div>
   </div>
  </div>}
 </>;
}