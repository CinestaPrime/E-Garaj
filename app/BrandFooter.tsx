import Link from "next/link";

export default function BrandFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="E-GARAJ ana sayfa"><img src="/e-garaj-logo.svg" alt="E-GARAJ" className="footer-logo" /></Link>
          <p>Otomobil tutkusunu dijital tasarım deneyimiyle buluşturan yeni nesil garaj.</p>
          <span className="footer-by">Bir <a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">CinestaAI</a> markasıdır.</span>
        </div>
        <div className="footer-links">
          <h3>PLATFORM</h3>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/studio">Araç Tasarımı</Link>
          <Link href="/#features">Özellikler</Link>
          <Link href="/#about">Hakkımızda</Link>
        </div>
        <div className="footer-company">
          <h3>MARKA HAKKINDA</h3>
          <p>E-Garaj, CinestaAI tarafından geliştirilen dijital otomotiv deneyimidir. Araç kişiselleştirme ve uyumlu ürün keşfini tek platformda buluşturmayı hedefler.</p>
          <a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">CINESTAAI.COM ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 E-GARAJ · CINESTAAI</span>
        <span>Bu mağazadaki hizmetlerin markalarla resmî bağlantısı bulunmamaktadır.</span>
      </div>
    </footer>
  );
}
