import Link from "next/link";

export default function BrandFooter({studio=false}:{studio?:boolean}) {
  return (
    <footer className="site-footer" aria-label="Alt bilgi">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="E-GARAGE ana sayfa"><img src={studio?"/e-garage-metallic-header.svg":"/e-garaj-logo.svg"} alt="e-GARAGE" className="footer-logo" /></Link>
          <p>E-GARAGE, otomobil tutkusunu dijital tasarım ve kişiselleştirme deneyimiyle buluşturan yeni nesil bir otomotiv platformudur. Araç sahiplerinin kendi tarzlarını keşfetmelerini sağlarken, aksesuar ve yedek parça sektöründeki ürünlerle kullanıcıları aynı dijital ekosistemde buluşturmayı hedefliyoruz.</p>
          <span className="footer-by"><a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">CinestaAI</a> bünyesinde geliştirilen bir otomotiv teknolojisi girişimidir.</span>
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
          <Link href="/bilgi/surdurulebilirlik">Sürdürülebilirlik</Link>
          <Link href="/bilgi/tasarim">Tasarım</Link>
          <Link href="/bilgi/servisler">Servisler</Link>
          <Link href="/bilgi/servis-hizmetleri">Servis Hizmetleri</Link>
          <Link href="/bilgi/modeller">Modeller</Link>
          <Link href="/bilgi/aracinizi-taniyin">Aracınızı Tanıyın</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 E-GARAGE · CINESTAAI</span>
      </div>
    </footer>
  );
}
