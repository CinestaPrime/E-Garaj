"use client";

import {useEffect,useRef,useState} from "react";
import type {ReactNode} from "react";

const VIDEO_PATH="/hero-video.mp4.mp4";

export default function HeroVideo({children}:{children?:ReactNode}){
  const videoRef=useRef<HTMLVideoElement>(null);
  const [source,setSource]=useState("");
  const [percent,setPercent]=useState(0);
  const [ready,setReady]=useState(false);
  const [revealed,setRevealed]=useState(false);
  const [error,setError]=useState(false);
  const [showCopy,setShowCopy]=useState(false);

  useEffect(()=>{
    const controller=new AbortController();
    let objectUrl="";
    let alive=true;

    async function loadEntireVideo(){
      try{
        const response=await fetch(VIDEO_PATH,{signal:controller.signal});
        if(!response.ok)throw new Error("Video could not be fetched");
        const total=Number(response.headers.get("content-length"))||0;
        const chunks:Uint8Array[]=[];
        let received=0;
        if(response.body){
          const reader=response.body.getReader();
          while(true){
            const {done,value}=await reader.read();
            if(done)break;
            if(value){
              chunks.push(value);
              received+=value.byteLength;
              if(alive && total>0)setPercent(Math.min(99,Math.floor(received/total*99)));
            }
          }
        }else{
          const data=new Uint8Array(await response.arrayBuffer());
          chunks.push(data);
        }
        if(!alive)return;
        setPercent(99);
        objectUrl=URL.createObjectURL(new Blob(chunks as BlobPart[],{type:"video/mp4"}));
        setSource(objectUrl);
      }catch(err){
        if(alive && !controller.signal.aborted)setError(true);
      }
    }

    void loadEntireVideo();
    return ()=>{
      alive=false;
      controller.abort();
      if(objectUrl)URL.revokeObjectURL(objectUrl);
    };
  },[]);

  useEffect(()=>{
    if(!ready)return;
    // Hold 100% briefly so the completed loading state is visible.
    const timer=window.setTimeout(()=>{
      setRevealed(true);
      const video=videoRef.current;
      if(video){
        video.currentTime=0;
        void video.play().catch(()=>{ /* muted autoplay may be restricted by browser */ });
      }
    },420);
    return ()=>window.clearTimeout(timer);
  },[ready]);

  useEffect(()=>{
    if(!revealed)return;
    const timer=window.setTimeout(()=>setShowCopy(true),3000);
    return ()=>window.clearTimeout(timer);
  },[revealed]);

  return <>
    <video
      ref={videoRef}
      className={"ks-hero-video"+(ready?" ks-hero-video-ready":"")}
      src={source||undefined}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onLoadedData={()=>{if(source){setPercent(100);setReady(true)}}}
      onError={()=>{if(source)setError(true)}}
    />
    {children&&<div className={"ks-hero-copy ks-hero-copy-cinematic"+(showCopy?" is-visible":"")}>{children}</div>}
    {!revealed&&<div className="ks-video-loading" role="status" aria-live="off" aria-label={"Video yükleniyor, yüzde "+percent}>
      <div className="ks-video-loading-inner">
        <img src="/e-garage-metallic-header.svg" alt="e-GARAGE" className="ks-video-loading-logo"/>
        {error
          ? <><p className="ks-video-loading-caption">VİDEO YÜKLENEMEDİ</p><button type="button" className="ks-video-retry" onClick={()=>window.location.reload()}>TEKRAR DENE</button></>
          : <><div className="ks-video-loading-track"><div className="ks-video-loading-fill" style={{width:percent+"%"}}/></div><div className="ks-video-loading-meta"><span>DENEYİM HAZIRLANIYOR</span><span>{percent}%</span></div></>
        }
      </div>
    </div>}
  </>;
}
