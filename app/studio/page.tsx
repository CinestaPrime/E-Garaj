"use client";

import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";
import Studio3DViewer from "../Studio3DViewer";
import {useState} from "react";

const models=["A1","A3","A4","A5","A6","A7","A8","TT","R8","Q3","Q5","Q7","Q8","e-tron GT","S3","S4","S5","S6","S7","S8","RS3","RS4","RS5","RS6","RS7","RS Q8"];
const colors=[
 {name:"Buz Gümüşü",hex:"#c0c4c7",type:"METALİK"},
 {name:"Zeytin Yeşili",hex:"#88815a",type:"METALİK"},
 {name:"Gece Mavisi",hex:"#526779",type:"METALİK"},
 {name:"Metalik Siyah",hex:"#232629",type:"METALİK"},
 {name:"Grafit",hex:"#666b70",type:"METALİK"},
 {name:"Tango Kırmızı",hex:"#a62d37",type:"METALİK"},
 {name:"Daytona Gri",hex:"#5d5e61",type:"SEDEF"},
 {name:"Beyaz",hex:"#e5e1d9",type:"DÜZ"},
 {name:"Bakır",hex:"#b7834b",type:"METALİK"},
 {name:"Bordo",hex:"#6a3037",type:"METALİK"}
];
const wheelOptions=[
 {name:"5 KOLLU",size:"20″",spokes:5},
 {name:"10 KOLLU",size:"20″",spokes:10},
 {name:"SPORT",size:"21″",spokes:7},
 {name:"DİNAMİK",size:"21″",spokes:12}
];
const tabs=[
 {id:"motor",label:"Motor"},
 {id:"paketler",label:"Paketler"},
 {id:"dis",label:"Dış Tasarım"},
 {id:"ic",label:"İç Tasarım"},
 {id:"donanim",label:"Donanım"},
 {id:"aksesuar",label:"Aksesuarlar"}
] as const;
type TabId=typeof tabs[number]["id"];

function WheelGraphic({spokes}:{spokes:number}){
 return <svg className="ks-config-wheel-art" viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="45" fill="#282b30" stroke="#16181b" strokeWidth="4"/>
  <circle cx="50" cy="50" r="38" fill="#b8bcbf" stroke="#6a7075" strokeWidth="3"/>
  <circle cx="50" cy="50" r="32" fill="#202328"/>
  {Array.from({length:spokes},(_,i)=><path key={i} d="M 47 47 L 44 18 L 56 18 L 53 47 Z" transform={`rotate(${i*360/spokes} 50 50)`} fill="#c9cbcd" stroke="#73777b" strokeWidth="1.1"/>)}
  <circle cx="50" cy="50" r="11" fill="#92979c" stroke="#292b2d" strokeWidth="3"/>
  <circle cx="50" cy="50" r="4" fill="#34373a"/>
 </svg>;
}

export default function Studio(){
 const [model,setModel]=useState("e-tron GT");
 const [year,setYear]=useState(2024);
 const [color,setColor]=useState("#e5e1d9");
 const [wheel,setWheel]=useState(1);
 const [tab,setTab]=useState<TabId>("dis");
 const [message,setMessage]=useState("");
 const [brand]=useState("Audi");
 function save(){
  localStorage.setItem("egaraj-design-v1",JSON.stringify({model,year,color,wheel,brand}));
  setMessage("Seçimlerin bu tarayıcıya kaydedildi.");
 }
 function load(){
  try{
   const x=JSON.parse(localStorage.getItem("egaraj-design-v1")||"null");
   if(!x)throw Error("not found");
   if(typeof x.model==="string")setModel(x.model);
   if(typeof x.year==="number")setYear(x.year);
   if(typeof x.color==="string")setColor(x.color);
   if(typeof x.wheel==="number")setWheel(x.wheel);
   setTab("dis");
   setMessage("Kayıtlı seçimlerin yüklendi.");
  }catch{
   setMessage("Henüz kayıtlı tasarım bulunamadı.");
  }
 }
 const chosen=colors.find(item=>item.hex.toLowerCase()===color.toLowerCase());
 return <main className="ks-site ks-studio ks-studio-config">
  <SiteHeader active="studio"/>
  <section className="ks-config-top" aria-label="Araç yapılandırma stüdyosu">
   <header className="ks-config-intro">
    <span className="ks-config-eyebrow">E-GARAJ / DİJİTAL ARAÇ STÜDYOSU</span>
   </header>
   <div className="ks-config-stage">
    <aside className="ks-config-selection" aria-label="Araç bilgileri">
     <span className="ks-config-card-caption">ARACINI OLUŞTUR</span>
     <h2>Senin garajın.</h2>
     <p className="ks-config-card-subtitle">Markanı, modelini ve üretim yılını seç.</p>
     <label htmlFor="ks-car-brand">MARKA</label>
     <select id="ks-car-brand" value={brand} disabled><option>Audi</option></select>
     <label htmlFor="ks-car-model">MODEL</label>
     <select id="ks-car-model" value={model} onChange={e=>setModel(e.target.value)}>
      {models.map(item=><option key={item}>{item}</option>)}
     </select>
     <label htmlFor="ks-car-year">MODEL YILI</label>
     <select id="ks-car-year" value={year} onChange={e=>setYear(Number(e.target.value))}>
      {Array.from({length:27},(_,i)=>2026-i).map(item=><option key={item}>{item}</option>)}
     </select>
     <span className="ks-config-selection-note">Görüntülenen 3D otomobil sabit Audi e-tron GT RS modelidir.</span>
     <button type="button" className="ks-config-save" onClick={save}>TASARIMI KAYDET</button>
     <button type="button" className="ks-config-load" onClick={load}>KAYITLI TASARIMI AÇ</button>
     {message&&<p role="status" className="ks-config-status">{message}</p>}
    </aside>
    <div className="ks-config-vehicle">
     <Studio3DViewer color={color}/>
     <div className="ks-config-viewer-label">360° <span>ETRAFINDA DÖNDÜR</span></div>
    </div>
    <aside className="ks-config-order" aria-label="Tasarım ve ödeme özeti">
     <span className="ks-config-order-eyebrow">E-GARAJ / SİPARİŞ ÖZETİ</span>
     <h2>Hayalindeki<br/>otomobil.</h2>
     <p className="ks-config-order-lead">Seçimlerinle şekillenen tasarımın.</p>
     <div className="ks-config-order-summary">
      <div><span>MARKA / MODEL</span><strong>{brand} {model}</strong></div>
      <div><span>MODEL YILI</span><strong>{year}</strong></div>
      <div><span>GÖVDE RENGİ</span><strong><i className="ks-config-order-dot" style={{background:color}}/>{chosen?.name||"Özel renk"}</strong></div>
      <div><span>JANT SEÇİMİ</span><strong>{wheelOptions[wheel]?.name||"10 KOLLU"} · {wheelOptions[wheel]?.size||"20″"}</strong></div>
     </div>
     <div className="ks-config-order-total">
      <span>TAHMİNİ TOPLAM</span>
      <strong>Fiyatlandırma yakında</strong>
      <small>Henüz satış veya ödeme alınmıyor.</small>
     </div>
     <button type="button" className="ks-config-order-pay" disabled aria-disabled="true">ÖDEME YAKINDA</button>
     <button type="button" className="ks-config-order-save" onClick={save}>TASARIMI KAYDET</button>
     {message&&<p role="status" className="ks-config-order-status">{message}</p>}
    </aside>
   </div>
  </section>
  <section className="ks-config-customize" aria-label="Araç özelleştirme seçenekleri">
   <nav className="ks-config-tabs" aria-label="Özelleştirme kategorileri">
    {tabs.map(item=><button key={item.id} type="button" className={tab===item.id?"active":""} aria-current={tab===item.id?"page":undefined} onClick={()=>setTab(item.id)}>{item.label}</button>)}
   </nav>
   {tab==="dis"?<div className="ks-config-options">
    <div className="ks-config-paint">
     <div className="ks-config-options-heading"><div><h2>Dış renk</h2><span>Metalik · Sedef · Düz renk seçenekleri</span></div><strong>{chosen?.name||"Özel renk"}</strong></div>
     <div className="ks-config-color-list">
      {colors.map(item=><button key={item.hex} type="button" className={"ks-config-color-choice"+(color===item.hex?" selected":"")} onClick={()=>{setColor(item.hex);setMessage("")}} aria-label={item.name} aria-pressed={color===item.hex}>
       <span className="ks-config-color-sample" style={{background:`linear-gradient(158deg,rgba(255,255,255,.42),transparent 45%,rgba(0,0,0,.3)),${item.hex}`}}/>
       <span className="ks-config-color-name">{item.name}</span>
      </button>)}
     </div>
    </div>
    <div className="ks-config-wheels">
     <div className="ks-config-options-heading"><div><h2>Jantlar</h2><span>20″ ve 21″ tasarım seçenekleri</span></div></div>
     <div className="ks-config-wheel-list">
      {wheelOptions.map((item,index)=><button type="button" key={item.name} className={"ks-config-wheel-choice"+(wheel===index?" selected":"")} onClick={()=>setWheel(index)} aria-label={item.name+" "+item.size} aria-pressed={wheel===index}>
       <WheelGraphic spokes={item.spokes}/>
       <span>{item.name}</span>
       <small>{item.size}</small>
      </button>)}
     </div>
     <p className="ks-config-wheel-note">Jant seçimi kaydedilir; 3D modele uygulanması sonraki aşamada.</p>
    </div>
   </div>:<div className="ks-config-coming-soon"><h2>{tabs.find(item=>item.id===tab)?.label}</h2><p>Bu kategori için özelleştirme seçenekleri hazırlanıyor. Dış Tasarım sekmesinde gövde rengini değiştirebilir ve jant tercihlerini kaydedebilirsin.</p><button type="button" onClick={()=>setTab("dis")}>DIŞ TASARIMA DÖN</button></div>}
  </section>
  <div className="ks-config-footnote">3D modelde boya rengi bütün yüzeye uygulanabilir; model, yıl ve jant tercihleri henüz 3D görünümü değiştirmez. Araç markalarıyla resmî bağlantı bulunmamaktadır.</div>
  <BrandFooter studio/>
 </main>;
}
