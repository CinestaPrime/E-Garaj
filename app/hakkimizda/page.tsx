import Link from "next/link";
import BrandFooter from "../BrandFooter";

export const metadata = {
  title: "Hakkımızda | E-GARAJ",
  description: "CinestaAI markası E-Garaj'ın vizyonunu, dijital araç tasarımı yaklaşımını ve gelişim hedeflerini keşfedin."
};

export default function AboutPage() {
  return <main>
    <header className="nav">
      <Link href="/" className="brand" aria-label="E-GARAJ ana sayfa"><img src="/e-garaj-logo.svg" alt="E-GARAJ" className="brand-logo"/></Link>
      <nav><Link href="/">ANA SAYFA</Link><Link href="/studio">ARAÇ TASARIMI</Link><Link href="/#features">UYUMLU ÜRÜNLER</Link><Link className="active" href="/hakkimizda">HAKKIMIZDA</Link></nav>
      <Link className="navbtn" href="/studio">GARAJA GİR ↗</Link>
    </header>
    <section className="about-hero"><div className="about-grid-mark" aria-hidden="true">EG / 26</div>
      <div className="about-hero-inner">
        <small className="kicker">CINESTAAI / E-GARAJ</small>
        <h1>YENİ NESİL<br/><em>DİJİTAL GARAJ.</em></h1>
        <p>Otomobil tutkusunu dijital tasarımla buluşturan bir deneyim.</p>
      </div>
    </section>
    <section className="about-content"><div className="section-rule"><span>E-GARAJ / KURUMSAL</span><span>01 — 03</span></div>
      <div className="about-intro">
        <small className="kicker">HAKKIMIZDA</small>
        <h2>Bir garajdan<br/><em>çok daha fazlası.</em></h2>
        <div><p>E-Garaj, <strong>CinestaAI</strong> tarafından geliştirilen dijital otomotiv deneyimidir. Amacımız, otomobil meraklılarının araçlarını keşfedebildiği, kişiselleştirebildiği ve tasarım tercihlerini saklayabildiği kullanıcı odaklı bir alan oluşturmak.</p><p>İlk konseptimiz Audi modelleriyle başlıyor. Gelecekte daha fazla marka, araç seçeneği ve uyumlu ürün keşfi deneyimini platforma kazandırmayı hedefliyoruz.</p></div>
      </div>
      <div className="about-cards">
        <article><span>01 / DENEYİM</span><h3>Özgürce tasarla.</h3><p>Model, renk ve jant tercihlerini tek bir dijital stüdyoda keşfet.</p></article>
        <article><span>02 / KİŞİSELLEŞTİRME</span><h3>Garajın sana özel.</h3><p>Tasarımlarını tarayıcına kaydet ve istediğinde yeniden aç.</p></article>
        <article><span>03 / GELECEK</span><h3>Daha fazlasına hazır.</h3><p>Yeni araçlar ve uyumlu ürün keşfiyle genişlemeyi hedefleyen bir platform.</p></article>
      </div>
      <div className="about-cinesta">
        <div><small className="kicker">MARKA EKOSİSTEMİ</small><h2>BİR <em>CINESTAAI</em><br/>MARKASI.</h2></div>
        <div><p>E-Garaj, CinestaAI'ın dijital ürün geliştirme yaklaşımıyla oluşturulan bir otomotiv projesidir.</p><a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer" className="ghost-btn">CINESTAAI'I KEŞFET ↗</a></div>
      </div>
      <p className="about-disclaimer">Bu mağazadaki hizmetlerin markalarla resmî bağlantısı bulunmamaktadır.</p>
    </section>
    <BrandFooter/>
  </main>;
}
