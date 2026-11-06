"use client";

import {createElement,useEffect,useRef,useState} from "react";
import Script from "next/script";

const MODEL_URL="/models/audi-e-tron-gt-rs-360.glb";

type ViewerMaterial={
 pbrMetallicRoughness:{
  setBaseColorFactor:(rgba:string|number[])=>void;
  setMetallicFactor?:(value:number)=>void;
  setRoughnessFactor?:(value:number)=>void;
 };
};
type ViewerElement=HTMLElement&{
 model?:{materials:ViewerMaterial[]};
};

export default function Studio3DViewer({color}:{color:string}){
 const [available,setAvailable]=useState<boolean|null>(null);
 const [modelReady,setModelReady]=useState(false);
 const viewerRef=useRef<ViewerElement|null>(null);
 const latestColor=useRef(color);
 latestColor.current=color;

 useEffect(()=>{
  let alive=true;
  const controller=new AbortController();
  void fetch(MODEL_URL,{method:"HEAD",signal:controller.signal})
   .then(response=>{if(alive)setAvailable(response.ok)})
   .catch(()=>{if(alive)setAvailable(false)});
  return ()=>{alive=false;controller.abort()};
 },[]);

 // Bind to the custom element's actual DOM "load" event. React's onLoad
 // does not reliably handle model-viewer custom-element load events.
 useEffect(()=>{
  if(!available)return;
  let disposed=false;
  let interval:number|undefined;
  let viewer:ViewerElement|null=null;

  const paint=()=>{
   if(disposed)return false;
   const materials=viewer?.model?.materials;
   if(!materials?.length)return false;
   for(const material of materials){
    const pbr=material.pbrMetallicRoughness;
    if(!pbr?.setBaseColorFactor)continue;
    // Passing CSS hex lets model-viewer perform sRGB -> linear conversion.
    pbr.setBaseColorFactor(latestColor.current);
    pbr.setMetallicFactor?.(0.38);
    pbr.setRoughnessFactor?.(0.35);
   }
   setModelReady(true);
   return true;
  };

  const handleLoad=()=>{paint()};
  const connect=()=>{
   if(disposed)return;
   const element=viewerRef.current;
   if(!element)return;
   if(viewer!==element){
    viewer?.removeEventListener("load",handleLoad);
    viewer=element;
    viewer.addEventListener("load",handleLoad);
   }
   if(paint()&&interval!==undefined){
    window.clearInterval(interval);
    interval=undefined;
   }
  };

  void customElements.whenDefined("model-viewer").then(connect).catch(()=>{});
  interval=window.setInterval(connect,300);
  connect();
  return ()=>{
   disposed=true;
   if(interval!==undefined)window.clearInterval(interval);
   viewer?.removeEventListener("load",handleLoad);
  };
 },[available]);

 // Live update color without reloading the GLB or resetting camera orbit.
 useEffect(()=>{
  if(!modelReady)return;
  const materials=viewerRef.current?.model?.materials;
  if(!materials?.length)return;
  for(const material of materials){
   material.pbrMetallicRoughness?.setBaseColorFactor(color);
  }
 },[color,modelReady]);

 return <div className="ks-360-stage" aria-label="Audi e-tron GT RS 360 derece 3D görüntüleyici">
  {available===true&&<>
   <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.4.0/model-viewer.min.js" type="module" strategy="afterInteractive"/>
   {createElement("model-viewer",{
    ref:(node:ViewerElement|null)=>{viewerRef.current=node},
    src:MODEL_URL,
    alt:"Audi e-tron GT RS 3 boyutlu otomobil modeli, 360 derece döndürmek için sürükleyin",
    "camera-controls":"",
    "auto-rotate":"",
    "rotation-per-second":"8deg",
    "camera-orbit":"35deg 70deg auto",
    "field-of-view":"35deg",
    "shadow-intensity":"0.85",
    "environment-image":"neutral",
    "interaction-prompt":"none",
    "touch-action":"pan-y",
    loading:"eager",
    className:"ks-360-model",
   })}
   <div className="ks-360-hint">SÜRÜKLE · 360° DÖNDÜR · YAKINLAŞTIR</div>
  </>}
  {available===null&&<div className="ks-360-empty"><span className="ks-360-icon">360°</span><p>3D MODEL HAZIRLANIYOR</p></div>}
  {available===false&&<div className="ks-360-empty"><span className="ks-360-icon">360°</span><p>AUDI E-TRON GT RS</p><small>3D MODEL DOSYASI BEKLENİYOR</small></div>}
 </div>;
}
