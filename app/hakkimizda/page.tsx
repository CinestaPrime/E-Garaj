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
  <section className="ks-about-new-manifesto" aria-label="E-Garaj hakkında ve kurucusu">
   <div className="ks-about-new-meta"><span>01 / BİZ KİMİZ</span><span>E-GARAGE / CINESTAAI</span></div>
   <div className="ks-about-new-story-intro">
    <span className="ks-about-new-smallline">E-GARAJ NEDİR, NEDEN KURULDU?</span>
    <h2>OTOMOBİL TUTKUSUNU<br/><em>TEKNOLOJİYLE BULUŞTURUYORUZ</em></h2>
    <p>E-GARAGE (E-GARAJ), otomobil sahiplerinin araçlarını keşfetme, kişiselleştirme ve araçlarına uygun ürünlere ulaşma biçimini yeniden düşünmek için geliştirdiğimiz bir dijital otomotiv platformudur.</p>
   </div>
   <div className="ks-about-new-story-columns">
    <div className="ks-about-new-story-body">
     <h3>BİR FİKİRDEN DİJİTAL GARAJA</h3>
     <p>Otomobil dünyasında bir jant, bir gövde detayı ya da küçük bir aksesuar bile aracın karakterini bütünüyle değiştirebilir. Ancak kullanıcıların kendi araçlarına uygun seçenekleri bulması ve bir ürünü satın almadan önce otomobillerinde nasıl görüneceğini hayal etmesi her zaman kolay değil. E-Garaj'ı tam da bu ihtiyaca cevap vermek için tasarladık.</p>
     <p>Platformun merkezinde, otomobil tutkusuyla teknolojiyi bir araya getiren kişisel bir araç stüdyosu bulunuyor. Kullanıcılar araçlarının marka, model ve yıl bilgilerini seçebiliyor; mevcut dijital stüdyo deneyiminde gövde renklerini inceleyip tasarım tercihlerini kaydedebiliyor. Bu temel üzerine inşa ettiğimiz hedefimiz, uyumlu jant, yedek parça ve aksesuar seçeneklerini kişinin kendi otomobil modeli üzerinde dijital olarak deneyebildiği bir ekosistem oluşturmak.</p>
     <h3>ALICI İLE OTOMOTİV SEKTÖRÜ ARASINDA YENİ BİR KÖPRÜ</h3>
     <p>E-Garaj yalnızca bir araç tasarım alanı değil; otomobil sahipleriyle aksesuar, yedek parça ve otomotiv ürünleri sunan işletmeleri aynı dijital deneyimde buluşturmayı amaçlayan bir girişim. Kullanıcının aracına uygun ürünleri keşfedebilmesi, farklı seçenekleri karşılaştırabilmesi ve gelecekte bunların otomobilindeki görünümünü değerlendirebilmesi için çalışıyoruz.</p>
     <p>Bu yaklaşımla otomotiv satış ve keşif sürecini daha görsel, daha kişisel ve daha anlaşılır hale getirmeyi; Türkiye'den başlayarak zamanla daha geniş pazarlara açılan bir otomotiv teknoloji platformu geliştirmeyi hedefliyoruz.</p>
    </div>
    <aside className="ks-about-new-founder">
     <span className="ks-about-new-founder-kicker">KURUCUSUNDAN</span>
     <h3>EMİN RIZA<br/>PİŞKİN</h3>
     <span className="ks-about-new-founder-role">E-GARAJ KURUCUSU · CINESTAAI KURUCUSU</span>
     <div className="ks-about-new-founder-rule"/>
     <p>E-Garaj, benim geliştirdiğim bir ürün ve CinestaAI bünyesinde tarafımızdan tasarlanan bir dijital otomotiv girişimidir. CinestaAI'ın kurucusu olarak teknoloji, yazılım ve kullanıcı deneyimini otomobil tutkusuyla buluşturmayı hedefliyorum.</p>
     <p>Vizyonumuz; otomotiv aksesuar ve yedek parça sektöründe alıcılarla satıcıları daha güçlü biçimde bir araya getirmek, insanların seçtikleri ürünleri kendi araç marka ve modelleri üzerinde görerek daha bilinçli tercihler yapabilecekleri bir deneyim sunmak. Otomobil dünyasının dijital geleceğine bu anlayışla yön vermek istiyoruz.</p>
     <span className="ks-about-new-founder-mark">E-GARAGE <span>×</span> CINESTAAI</span>
    </aside>
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
