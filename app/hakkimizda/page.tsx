import Link from "next/link";
import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";

export const metadata={
 title:"Hakkımızda | E-GARAGE",
 description:"E-Garaj'ın otomobil tutkusundan doğan dijital tasarım vizyonunu, yaklaşımını ve CinestaAI ile geliştirdiği yeni nesil garaj deneyimini keşfedin."
};

export default function AboutPage(){
 return <main className="ks-site ks-about-reimagined">
  <SiteHeader active="about"/>
  <section className="ks-about-new-hero" aria-label="E-Garaj hakkımızda">
   <div className="ks-about-new-hero-photo" role="img" aria-label="Gün batımında manzaraya karşı duran spor otomobil"/>
   <div className="ks-about-new-hero-shade"/>
   <div className="ks-about-new-hero-top"><span>OTOMOBİLİN GELECEĞİNE BİR BAKIŞ</span></div>
   <div className="ks-about-new-hero-content">
    <span className="ks-about-new-eyebrow">E-GARAGE / BİZ KİMİZ</span>
    <h1>TUTKUNUN<br/><em>ÖTESİNDE.</em></h1>
    <p>Her otomobil bir karakter taşır. Biz, o karaktere kendi imzanı atabileceğin yeni bir dijital dünya tasarlıyoruz.</p>
   </div>
   <div className="ks-about-new-hero-bottom"><span>TASARIMIN SINIRLARINI YENİDEN DÜŞÜN</span><span>↓ KAYDIR</span></div>
  </section>
  <section className="ks-about-new-manifesto">
   <div className="ks-about-new-meta"><span>01 / HİKÂYEMİZ</span><span>DİJİTAL OTOMOTİV DENEYİMİ</span></div>
   <div className="ks-about-new-manifesto-grid">
    <h2>BİR ARAÇTAN<br/><span>ÇOK DAHA</span><br/>FAZLASI</h2>
    <div className="ks-about-new-copy">
     <span className="ks-about-new-smallline">BİZİ HAREKETE GEÇİREN ŞEY</span>
     <p>Otomobil, bizim için yalnızca bir ulaşım aracı değil; kişiliğin, zevkin ve özgürlüğün bir ifadesi. E-Garaj bu düşünceden doğdu: otomobil tutkusunu herkesin keşfedebileceği, kişiselleştirebileceği ve kendi tarzına dönüştürebileceği dijital bir deneyime taşımak.</p>
     <p>Bugün araç stüdyomuzda modelleri keşfetmeyi, gövde renklerini denemeyi ve tercihlerini kişisel garajında saklamayı mümkün kılan bir temel oluşturuyoruz. Yarın ise uyumlu ürünleri, daha fazla markayı ve otomotiv dünyasının farklı paydaşlarını aynı platformda buluşturmayı hedefliyoruz.</p>
    </div>
   </div>
  </section>
  <section className="ks-about-new-quote" aria-label="E-Garaj yaklaşımı">
   <div className="ks-about-new-quote-inner">
    <span>YENİ NESİL GARAJ</span>
    <h2>HAYAL ET<br/>KEŞFET<br/><em>KENDİN TASARLA</em></h2>
    <p>Detayların karaktere dönüştüğü bir otomobil deneyimi.</p>
   </div>
  </section>
  <section className="ks-about-new-values">
   <div className="ks-about-new-meta"><span>02 / YAKLAŞIMIMIZ</span><span>ÜÇ TEMEL İLKE</span></div>
   <div className="ks-about-new-values-grid">
    <article><span className="ks-about-new-number">01</span><div><h3>KEŞFET.</h3><p>Yeni modelleri, farklı renkleri ve otomobil dünyasının sunduğu olasılıkları tek bir dijital noktada keşfet.</p></div><span className="ks-about-new-value-icon">↗</span></article>
    <article><span className="ks-about-new-number">02</span><div><h3>ÖZELLEŞTİR.</h3><p>Kendi estetik anlayışını yansıtan seçimler yap. Her detayla aracına biraz daha kendi karakterini kat.</p></div><span className="ks-about-new-value-icon">↗</span></article>
    <article><span className="ks-about-new-number">03</span><div><h3>GELİŞTİR.</h3><p>Tasarımını kaydet, yeniden aç ve yeni seçeneklerle keşfine devam et. Dijital garajın seninle gelişsin.</p></div><span className="ks-about-new-value-icon">↗</span></article>
   </div>
  </section>
  <section className="ks-about-new-company">
   <div><span className="ks-about-new-eyebrow">MARKA EKOSİSTEMİ</span><h2>TEKNOLOJİYLE<br/><em>ŞEKİLLENEN</em><br/>TUTKU.</h2></div>
   <div className="ks-about-new-company-copy"><p>E-Garaj, yapay zekâ, yazılım ve dijital ürün geliştirme alanlarına odaklanan <strong>CinestaAI</strong> tarafından hayata geçirilen bir otomotiv teknoloji girişimidir.</p><p>Amacımız; tasarım, keşif ve kişiselleştirme deneyimini teknolojiyle daha erişilebilir, akıcı ve etkileyici hale getirmek.</p><a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer" className="ks-about-new-company-link">CINESTAAI'I KEŞFET <span>↗</span></a></div>
  </section>
  <section className="ks-about-new-cta">
   <span>ŞİMDİ SENİN SIRAN</span>
   <h2>HİKÂYENİ<br/><em>TASARLA.</em></h2>
   <Link href="/studio">STÜDYOYA GİT <span>↗</span></Link>
  </section>
  <BrandFooter/>
 </main>;
}
