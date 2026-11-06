import Link from "next/link";
import {notFound} from "next/navigation";
import SiteHeader from "../../SiteHeader";
import BrandFooter from "../../BrandFooter";
import type {Metadata} from "next";

type Section={heading:string; paragraphs:string[]; bullets?:string[]};
type InfoPage={title:string; intro:string; sections:Section[]};
const pages:Record<string,InfoPage>={
 "genel-bakis":{
  title:"Genel Bakış",
  intro:"E-GARAGE, otomobil tutkusunu kişiselleştirme teknolojileri ve ürün keşfiyle bir araya getirmek üzere geliştirilen bir dijital otomotiv platformudur.",
  sections:[
   {heading:"E-GARAGE nedir?",paragraphs:["CinestaAI bünyesinde geliştirilen E-GARAGE, kullanıcıların otomobil seçeneklerini dijital ortamda keşfetmesini, farklı tasarım tercihleri oluşturmasını ve kendi araçlarına uygun ürünlere ulaşmasını amaçlayan bir platformdur.","Otomobil sahipleri ile aksesuar, yedek parça ve otomotiv ürünleri sunan işletmeler arasında kullanıcı odaklı bir dijital köprü kurmayı hedefliyoruz."]},
   {heading:"Bugün ne sunuyoruz?",paragraphs:["Araç stüdyomuzda örnek bir otomobilin 360 derece görünümünü incelemek, sunulan gövde renklerini denemek ve kişiselleştirme tercihlerini tarayıcıda saklamak mümkündür. Marka, model ve yıl seçimi gibi alanlar geliştirilmekte olan daha kapsamlı deneyimin altyapısını oluşturur."]},
   {heading:"Nereye ilerliyoruz?",paragraphs:["Hedefimiz, uyumlu aksesuar ve yedek parça seçeneklerini kullanıcının kendi marka ve modelindeki araç üzerinde değerlendirebileceği bir ortam geliştirmek; ürün sağlayıcıları ile alıcıları aynı platformda buluşturmaktır.","Yeni modeller, ürün katalogları ve satıcı entegrasyonları aşamalı olarak geliştirilmeyi planladığımız özelliklerdir. Henüz aktif olmayan hizmetler, mevcut bir satın alma veya teslimat taahhüdü oluşturmaz."]}
  ]
 },
 "teknoloji":{
  title:"Teknoloji",
  intro:"Dijital araç keşfini daha görsel, anlaşılır ve kişisel hale getirecek teknolojiler üzerine çalışıyoruz.",
  sections:[
   {heading:"Dijital araç stüdyosu",paragraphs:["E-GARAGE araç stüdyosu, web tarayıcısı üzerinden erişilebilen üç boyutlu bir otomobil önizleme deneyimi sunar. Desteklenen görsel seçenekler model üzerinde incelenebilir; kişiselleştirme tercihleri daha sonra yeniden açılmak üzere tarayıcıda saklanabilir."]},
   {heading:"Araç ve ürün uyumluluğu",paragraphs:["Geliştirme vizyonumuzun merkezinde, otomobil marka, model ve yıl bilgileri ile aksesuar ve yedek parça kataloglarını ilişkilendiren bir ürün keşif deneyimi bulunur.","Planlanan sistemde kullanıcıların, uyumlu ürünleri seçtikleri araç üzerinde dijital olarak değerlendirebilmeleri ve seçenekleri daha bilinçli karşılaştırabilmeleri amaçlanır."]},
   {heading:"Aşamalı geliştirme",paragraphs:["Platformun mevcut üç boyutlu örnek modeli ve bazı tercih kontrolleri bir prototip deneyimidir. Listelenen her marka, model veya ürün için ayrı bir üç boyutlu simülasyonun veya gerçek zamanlı uyumluluk doğrulamasının hazır olduğu anlamına gelmez.","CinestaAI bünyesinde kullanıcı deneyimi, görselleştirme ve ilgili yazılım altyapısını kademeli olarak geliştirmeye devam ediyoruz."]}
  ]
 },
 "kullanim-sartlari-ve-gizlilik-politikasi":{
  title:"Kullanım Şartları ve Gizlilik Politikası",
  intro:"E-GARAGE platformunun kullanımına, sunulan dijital deneyimlere ve kişisel bilgilerin korunmasına ilişkin temel bilgilendirmeler.",
  sections:[
   {heading:"Platformun kapsamı",paragraphs:["E-GARAGE; araç keşfi, dijital tasarım denemeleri ve geliştirme aşamasındaki otomotiv ürünleri ekosistemi için hazırlanmış bir platformdur. Sunulan önizleme, renk ve donanım seçenekleri tanıtım ve deneme niteliği taşıyabilir; bunlar teknik uygunluk, stok, fiyat veya montaj garantisi anlamına gelmez."]},
   {heading:"Kullanım koşulları",paragraphs:["Kullanıcıların platformu hukuka uygun şekilde kullanmaları, üçüncü kişilerin haklarına ve sistem güvenliğine zarar verecek işlemlerden kaçınmaları beklenir.","İçerikler ve teknik özellikler, ürünün geliştirme süreci doğrultusunda güncellenebilir. Satın alma, ödeme veya satıcıyla sözleşme işlemleri ayrıca açıkça sunulmadığı sürece bu sayfalar üzerinden kurulmuş sayılmaz."]},
   {heading:"Gizlilik yaklaşımımız",paragraphs:["Kişisel bilgilerin işlenmesi, ilgili veri koruma mevzuatına uygunluk ve hizmetin sunulması için gerekli kapsamla sınırlı tutulması hedefiyle ele alınır. Tarayıcınızda kaydettiğiniz araç tercihleri gibi bazı bilgiler cihazınızın yerel depolama alanında saklanabilir.","Hizmetin çalışması için gerekli teknik kayıtlar, güvenlik veya altyapı sağlayıcılarının süreçleri kapsamında işlenebilir. Verilerin işlenmesine ilişkin somut açıklamalar ve başvuru kanalları hizmet kapsamı geliştikçe ayrıca güncellenmelidir."]},
   {heading:"Fikrî haklar ve üçüncü taraf markalar",paragraphs:["E-GARAGE markası, arayüz tasarımları ve platform içerikleri ilgili hak sahiplerine aittir. Platformda anılan otomobil marka ve modelleri ilgili şirketlerin ticari markaları olabilir; aksi açıkça belirtilmedikçe resmî iş ortaklığı veya üretici onayı ima edilmez."]},
   {heading:"Başvurular",paragraphs:["Gizlilik veya kullanım koşulları hakkındaki sorularınız için İletişim Bilgileri sayfasındaki kurumsal yönlendirmeyi kullanabilirsiniz."]}
  ]
 },
 "cerez-politikasi":{
  title:"Çerez Politikası",
  intro:"Çerezler ve benzeri tarayıcı teknolojilerinin ne olduğu, hangi amaçlarla kullanılabileceği ve bunları nasıl yönetebileceğiniz hakkında bilgiler.",
  sections:[
   {heading:"Çerez nedir?",paragraphs:["Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınızda saklanabilen küçük veri dosyalarıdır. Oturum yönetimi, güvenlik, tercihlerin hatırlanması veya hizmet performansı gibi amaçlarla kullanılabilir."]},
   {heading:"Teknik ve yerel depolama",paragraphs:["E-GARAGE araç stüdyosunda kaydedilen bazı kişiselleştirme tercihleri, çerez yerine tarayıcınızın yerel depolama alanında tutulabilir. Bu bilgiler aynı tarayıcı ve cihazda sonraki ziyaretlerde tercihlerin yeniden yüklenmesine yardımcı olabilir.","Sitenin barındırma veya güvenlik altyapısı da hizmetin çalışması için teknik kayıtlar oluşturabilir. Bu açıklama, tüm ziyaretçiler için aynı tür çerezlerin kesin olarak kullanıldığı anlamına gelmez."]},
   {heading:"İsteğe bağlı çerezler",paragraphs:["Analitik, kişiselleştirme veya reklam amaçlı teknolojilerin devreye alınması halinde, kullanım amaçları ve gerekli izin seçenekleri ayrıca açıklanmalıdır. Şu anda bu sayfada isteğe bağlı çerezleri etkinleştiren özel bir onay paneli bulunmamaktadır."]},
   {heading:"Kontrol ve silme",paragraphs:["Tarayıcınızın gizlilik ve site verileri ayarları üzerinden çerezleri görüntüleyebilir, engelleyebilir veya silebilirsiniz. Yerel depolama kayıtlarının silinmesi, daha önce kaydettiğiniz araç tercihlerini de sıfırlayabilir.","Yönetim adımlarını Çerez Ayarları sayfamızda bulabilirsiniz."]}
  ]
 },
 "gizlilik-bildirimi-hizmeti":{
  title:"Gizlilik Bildirimi Hizmeti",
  intro:"Kişisel verilerle ilgili bilgilendirme ve başvuru talepleriniz için temel rehber.",
  sections:[
   {heading:"Bilgilendirme yaklaşımımız",paragraphs:["E-GARAGE kapsamında sunulan dijital hizmetlerde veri güvenliği ve şeffaflık temel ilkelerimizdir. Hangi verilerin hangi amaçlarla ve ne kadar süreyle işlendiğine ilişkin bilgilendirmelerin kullanılan hizmete göre açık şekilde sunulması esastır."]},
   {heading:"Veri sahiplerinin talepleri",paragraphs:["İlgili mevzuatın tanıdığı kapsamda kişisel verilerin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme veya silme isteğinde bulunma gibi başvuru hakları söz konusu olabilir. Başvuruların kapsamı ve yanıt süresi yürürlükteki mevzuata göre değerlendirilir."]},
   {heading:"Başvuru ve kimlik doğrulama",paragraphs:["Gizlilikle ilgili talepleriniz için İletişim Bilgileri sayfasında yer alan kurumsal kanaldan bize ulaşabilirsiniz. Verilerle ilgili bir işlem yapılmadan önce, talebin gerçek hak sahibinden geldiğinin doğrulanması gerekebilir.","Bu sayfa genel bir bilgilendirmedir; ayrıntılı veri sorumlusu bildirimi ve işlem envanterinin yerini almaz."]}
  ]
 },
 "cerez-ayarlari":{
  title:"Çerez Ayarları",
  intro:"Tarayıcınızdaki çerezleri ve site verilerini nasıl kontrol edebileceğinizi öğrenin.",
  sections:[
   {heading:"Tarayıcı üzerinden çerez yönetimi",paragraphs:["Çerez izinleri tarayıcınızın Ayarlar → Gizlilik ve Güvenlik bölümünden yönetilebilir. Buradan belirli sitelere ait çerezleri engelleyebilir veya önceden kaydedilmiş site verilerini silebilirsiniz.","Tarayıcıların menü adları ve kullanım adımları sürüme göre farklılık gösterebilir."]},
   {heading:"Araç stüdyosu tercihleri",paragraphs:["E-GARAGE araç stüdyosunda kaydettiğiniz kişiselleştirme seçimleri tarayıcınızda yerel olarak saklanabilir. Site verilerini temizlemeniz, kayıtlı tasarım tercihlerini de kaldırabilir."]},
   {heading:"Zorunlu ve isteğe bağlı teknolojiler",paragraphs:["Güvenlik ve temel site işlevleri için gerekli teknik bileşenler kullanılabilir. İsteğe bağlı takip teknolojileri için ayrı bir tercih mekanizması sunulduğunda ilgili seçenekler bu alanda açıkça gösterilecektir.","Şu an bu sayfada site genelindeki çerezleri etkinleştiren veya devre dışı bırakan özel bir kontrol bulunmamaktadır."]}
  ]
 },
 "iletisim-bilgileri":{
  title:"İletişim Bilgileri",
  intro:"E-GARAGE ile ilgili görüş, öneri, iş birliği ve kurumsal başvurular için iletişim yönlendirmeleri.",
  sections:[
   {heading:"Kurumsal iletişim",paragraphs:["E-GARAGE, CinestaAI bünyesinde geliştirilen bir dijital otomotiv girişimidir. Proje, iş ortaklığı, teknik destek veya kurumsal bilgi talepleri için aşağıdaki bağlantıyı kullanarak CinestaAI'ın resmî internet sitesine ulaşabilirsiniz."]},
   {heading:"İş birlikleri",paragraphs:["Otomotiv aksesuar, yedek parça ve ilgili ürün sektöründe faaliyet gösteren işletmelerle olası iş birliklerini değerlendirmeyi hedefliyoruz. Ürün katalogları, marka ve model uyumluluğu, görselleştirme veya platform entegrasyonu üzerine görüşmeler kurumsal kanallar üzerinden yürütülebilir."]},
   {heading:"Gizlilik ve hukuki talepler",paragraphs:["Kişisel veriler, kullanım şartları ya da içerik haklarıyla ilgili taleplerinizde başvuru konusunu ve yanıt alınabilecek iletişim bilgilerinizi belirtmeniz sürecin değerlendirilmesini kolaylaştırır."]},
   {heading:"Resmî web sitesi",paragraphs:["CinestaAI: https://cinestaai.com"]},
  ]
 }
};
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const page=pages[slug];
 return {title:page?`${page.title} | E-GARAGE`:"Bilgilendirme | E-GARAGE",description:page?.intro??"E-GARAGE kurumsal bilgilendirme sayfaları"};
}
export default async function InformationPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const page=pages[slug];
 if(!page)notFound();
 return <main className="ks-site ks-info-site">
  <SiteHeader/>
  <div className="ks-info-breadcrumb"><Link href="/">E-GARAGE</Link><span aria-hidden="true">/</span><span>BİLGİLENDİRME</span></div>
  <div className="ks-info-layout">
   <aside className="ks-info-sidebar" aria-label="Bilgi sayfaları">
    <span>İÇİNDEKİLER</span>
    {Object.entries(pages).map(([key,value])=><Link key={key} href={`/bilgi/${key}`} className={slug===key?"active":""} aria-current={slug===key?"page":undefined}>{value.title}</Link>)}
   </aside>
   <article className="ks-info-document">
    <span className="ks-info-eyebrow">E-GARAGE / KURUMSAL BİLGİLER</span>
    <h1>{page.title}</h1>
    <p className="ks-info-lead">{page.intro}</p>
    <div className="ks-info-rule"/>
    {page.sections.map((section,index)=><section key={index} className="ks-info-section">
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph,i)=><p key={i}>{paragraph.startsWith("CinestaAI: https://")?<a href="https://cinestaai.com" target="_blank" rel="noopener noreferrer">cinestaai.com ↗</a>:paragraph}</p>)}
      {section.bullets&&<ul>{section.bullets.map((item,i)=><li key={i}>{item}</li>)}</ul>}
    </section>)}
    <p className="ks-info-note">Bu sayfadaki bilgiler platformun mevcut hizmet kapsamını açıklamak amacıyla hazırlanmıştır. Hizmetler geliştikçe içerik güncellenebilir.</p>
   </article>
  </div>
  <BrandFooter/>
 </main>;
}
