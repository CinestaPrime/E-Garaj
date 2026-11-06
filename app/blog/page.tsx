import Link from "next/link";
import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";

export default function Page(){
 return <main className="ks-site">
  <SiteHeader active="home"/>
  <section className="ks-platform-subpage">
   <span className="ks-overline">PLATFORM / BLOG</span>
   <h1>BLOG</h1>
   <p>Otomobil kültürü, tasarım ve dijital garaj deneyimi üzerine içerikler için yeni alanımızı hazırlıyoruz. İlk yazılar yayımlandığında burada yer alacak.</p>
   <Link href="/" className="ks-text-link">ANA SAYFAYA DÖN <span>↗</span></Link>
  </section>
  <BrandFooter/>
 </main>;
}
