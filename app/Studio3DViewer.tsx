"use client";

import {createElement,useEffect,useState} from "react";
import Script from "next/script";

const MODEL_URL="/models/audi-e-tron-gt-rs-360.glb";

export default function Studio3DViewer(){
 const [available,setAvailable]=useState<boolean|null>(null);
 useEffect(()=>{
   let active=true;
   const controller=new AbortController();
   void fetch(MODEL_URL,{method:"HEAD",signal:controller.signal})
     .then(response=>{if(active)setAvailable(response.ok)})
     .catch(()=>{if(active)setAvailable(false)});
   return ()=>{active=false;controller.abort()};
 },[]);

 return <div className="ks-360-stage" aria-label="Audi e-tron GT RS 360 derece 3D görüntüleyici">
   {available===true&&<>
     <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.4.0/model-viewer.min.js" type="module" strategy="afterInteractive"/>
     {createElement("model-viewer",{
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
