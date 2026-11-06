import Link from "next/link";
import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";

export default function Page(){
 return <main className="ks-site">
  <SiteHeader active="home"/>
  <section className="ks-platform-subpage">
   <span className="ks-overline">PLATFORM / İŞ ORTAKLARI</span>
   <h1>ANLAŞMALI FİRMALAR</h1>
   <p>Otomotiv dünyasındaki iş ortaklarımızı bu bölümde bir araya getirmeyi planlıyoruz. Doğrulanmış anlaşmalı firmalar listesi henüz yayımlanmadı.</p>
   <Link href="/" className="ks-text-link">ANA SAYFAYA DÖN <span>↗</span></Link>
  </section>
  <BrandFooter/>
 </main>;
}
