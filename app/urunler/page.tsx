import Link from "next/link";
import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";

export default function Page(){
 return <main className="ks-site">
  <SiteHeader active="home"/>
  <section className="ks-platform-subpage">
   <span className="ks-overline">PLATFORM / ÜRÜNLER</span>
   <h1>ÜRÜNLER</h1>
   <p>Aracına uygun ürünleri ve kişiselleştirme seçeneklerini tek noktada keşfetmen için çalışıyoruz. Ürün kataloğumuz hazırlık aşamasında.</p>
   <Link href="/" className="ks-text-link">ANA SAYFAYA DÖN <span>↗</span></Link>
  </section>
  <BrandFooter/>
 </main>;
}
