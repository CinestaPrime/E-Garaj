"use client";
import {useState} from "react";

export default function HeroVideo(){
  const [ready,setReady]=useState(false);
  return <video
    className={"ks-hero-video"+(ready?" ks-hero-video-ready":"")}
    autoPlay
    muted
    playsInline
    preload="auto"
    aria-hidden="true"
    onLoadedData={()=>setReady(true)}
    onCanPlay={()=>setReady(true)}
  ><source src="/hero-video.mp4.mp4" type="video/mp4"/></video>;
}
