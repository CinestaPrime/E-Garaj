"use client";

import {createElement,useCallback,useEffect,useRef,useState} from "react";
import Script from "next/script";

const MODEL_URL="/models/audi-e-tron-gt-rs-360.glb";

type ViewerMaterial={
 pbrMetallicRoughness:{
  setBaseColorFactor:(rgba:number[])=>void;
  setMetallicFactor?:(value:number)=>void;
  setRoughnessFactor?:(value:number)=>void;
 };
};
type ViewerElement=HTMLElement&{
 model?:{materials:ViewerMaterial[]};
};

function hexToLinearRGBA(hex:string){
 const digits=hex.replace("#","");
 const channels=[0,2,4].map(i=>parseInt(digits.slice(i,i+2),16)/255);
 // model-viewer expects linearized RGBA values for material editing.
 return [...channels.map(v=>v<=0.04045?v/12.92:Math.pow((v+0.055)/1.055,2.4)),1];
}

export default function Studio3DViewer({color}:{color:string}){
 const [available,setAvailable]=useState<boolean|null>(null);
 const [modelLoaded,setModelLoaded]=useState(false);
 const viewerRef=useRef<ViewerElement|null>(null);

 useEffect(()=>{
  let active=true;
  const controller=new AbortController();
  void fetch(MODEL_URL,{method:"HEAD",signal:controller.signal})
   .then(response=>{if(active)setAvailable(response.ok)})
   .catch(()=>{if(active)setAvailable(false)});
  return ()=>{active=false;controller.abort()};
 },[]);

 const applyPaint=useCallback(()=>{
  const materials=viewerRef.current?.model?.materials;
  if(!materials?.length)return;
  const rgba=hexToLinearRGBA(color);
  for(const material of materials){
   material.pbrMetallicRoughness.setBaseColorFactor(rgba);
   material.pbrMetallicRoughness.setMetallicFactor?.(0.55);
   material.pbrMetallicRoughness.setRoughnessFactor?.(0.32);
  }
 },[color]);

 useEffect(()=>{if(modelLoaded)applyPaint()},[modelLoaded,applyPaint]);

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
    onLoad:()=>setModelLoaded(true),
    loading:"eager",
    className:"ks-360-model",
   })}
   <div className="ks-360-hint">SÜRÜKLE · 360° DÖNDÜR · YAKINLAŞTIR</div>
  </>}
  {available===null&&<div className="ks-360-empty"><span className="ks-360-icon">360°</span><p>3D MODEL HAZIRLANIYOR</p></div>}
  {available===false&&<div className="ks-360-empty"><span className="ks-360-icon">360°</span><p>AUDI E-TRON GT RS</p><small>3D MODEL DOSYASI BEKLENİYOR</small></div>}
 </div>;
}
