import Link from "next/link";

export default function BrandFooter({studio=false}:{studio?:boolean}) {
  return (
    <footer className="site-footer" aria-label="Alt bilgi">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="E-GARAGE ana sayfa"><img src={studio?"/e-garage-metallic-header.svg":"/e-garaj-logo.svg"} alt="e-GARAGE" className="footer-logo" /></Link>
          <p>Otomobil tutkusunu dijital tasarım ve ürün keşfiyle buluşturuyoruz.</p>
          <span className="footer-by">Bir <a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">CinestaAI</a> girişimidir.</span>
        </div>
        <nav className="footer-links" aria-label="Platform">
          <h3>PLATFORM</h3>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/bilgi/kullanim-sartlari-ve-gizlilik-politikasi">Kullanım Şartları ve Gizlilik Politikası</Link>
          <Link href="/bilgi/cerez-politikasi">Çerez Politikası</Link>
          <Link href="/bilgi/gizlilik-bildirimi-hizmeti">Gizlilik Bildirimi Hizmeti</Link>
          <Link href="/bilgi/cerez-ayarlari">Çerez Ayarları</Link>
          <Link href="/bilgi/iletisim-bilgileri">İletişim Bilgileri</Link>
        </nav>
        <nav className="footer-links" aria-label="E-Garage Dünyası">
          <h3>E-GARAGE DÜNYASI</h3>
          <Link href="/bilgi/genel-bakis">Genel Bakış</Link>
          <Link href="/bilgi/teknoloji">Teknoloji</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 E-GARAGE · CINESTAAI</span>
        <span>Platformda yer alan marka ve modellerin ilgili üreticilerle resmî bağlantısı bulunmayabilir.</span>
      </div>
    </footer>
  );
}
