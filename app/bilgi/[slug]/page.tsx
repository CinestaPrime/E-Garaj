import Link from "next/link";
import {notFound} from "next/navigation";
import SiteHeader from "../../SiteHeader";
import BrandFooter from "../../BrandFooter";
import type {Metadata} from "next";

type Section={heading:string; paragraphs:string[]; bullets?:string[]};
type InfoPage={title:string; intro:string; sections:Section[]};
const pages:Record<string,InfoPage>={
 "surdurulebilirlik":{
  title:"Sürdürülebilirlik",
  intro:"Otomotivde daha bilinçli seçimleri destekleyen, uzun ömürlü kullanım ve kaynak verimliliğini önemseyen bir dijital deneyim geliştirmeyi hedefliyoruz.",
  sections:[
   {heading:"Bilinçli ürün tercihleri",paragraphs:["Bir otomobile uygun aksesuar veya parçayı doğru seçmek, gereksiz ürün siparişlerinin ve uyumsuzluk kaynaklı iade süreçlerinin azaltılmasına katkı sağlayabilir. E-GARAGE, ilerleyen aşamalarda araç bilgileriyle uyumlu ürünlerin daha anlaşılır biçimde keşfedilmesini hedefler.","Bu yaklaşımımız, tek başına doğrulanmış bir çevresel etki azaltımı iddiası değildir; platformun ürün geliştirme hedeflerinden biridir."]},
   {heading:"Mevcut araçlara değer katmak",paragraphs:["Otomobil sahiplerinin mevcut araçlarını korumaya, bakımını sürdürmeye ve ihtiyaçlarına uygun parçaları değerlendirmeye yardımcı olacak bilgi ve dijital araçları geliştirmeyi amaçlıyoruz.","Daha uzun ömürlü kullanımı destekleyen ürünlerin ve bakım seçeneklerinin görünür olması, gelecekte kurulmasını hedeflediğimiz ekosistemin önemli bir parçasıdır."]},
   {heading:"Dijital deneyimin rolü",paragraphs:["Ürünleri araç üzerinde dijital olarak değerlendirme fikri, kullanıcıların satın alma öncesinde seçeneklerini daha bilinçli karşılaştırmasına yardımcı olabilir.","Henüz ürünlerin çevresel etkilerine veya karbon ayak izine yönelik bir sertifikasyon ya da bağımsız doğrulama hizmeti sunmuyoruz."]}
  ]
 },
 "tasarim":{
  title:"Tasarım",
  intro:"Aracınızın karakterini belirleyen detayları keşfetmek ve kişisel zevkinizi dijital ortamda ifade etmek için tasarladığımız deneyim.",
  sections:[
   {heading:"Kişiselleştirme anlayışımız",paragraphs:["Gövde rengi, jant seçimi ve dış görünüşe ilişkin küçük ayrıntılar, bir aracın genel algısını değiştirebilir. E-GARAGE, bu seçenekleri sade bir arayüzde keşfetme fikri üzerine kuruludur.","Tasarım sürecinde kullanıcıların teknik ayrıntılar arasında kaybolmadan tercihlerine odaklanabilmesini önemsiyoruz."]},
   {heading:"Dijital araç stüdyosu",paragraphs:["Mevcut araç stüdyosunda bir örnek üç boyutlu otomobil modeli üzerinden 360 derece önizleme ve desteklenen gövde renklerini değiştirme deneyimi sunulmaktadır. Tercihler tarayıcıda saklanıp tekrar görüntülenebilir.","Diğer model, yıl ve jant seçenekleri şu anda her durumda ayrı bir üç boyutlu görsele karşılık gelmemektedir; bu alanlar aşamalı olarak geliştirilmektedir."]},
   {heading:"Geleceğin tasarım deneyimi",paragraphs:["Hedefimiz, farklı otomobil marka ve modelleri için uyumlu aksesuarların araç üzerinde nasıl görünebileceğini değerlendirmeye imkân tanıyan daha kapsamlı bir tasarım altyapısı kurmaktır.","Bu deneyim yaygınlaştırıldıkça ürün keşfi, araç modeli ve kişiselleştirme adımlarını tek bir akışta birleştirmeyi amaçlıyoruz."]}
  ]
 },
 "servisler":{
  title:"Servisler",
  intro:"Otomobil sahipleri ile otomotiv sektöründeki işletmeleri daha kolay buluşturacak dijital servis ağı vizyonumuz.",
  sections:[
   {heading:"Servis ağı hedefimiz",paragraphs:["E-GARAGE, otomobil sahiplerinin bakım, montaj ve ilgili otomotiv hizmetlerine ulaşmasını kolaylaştıran bir servis keşif alanı geliştirmeyi hedeflemektedir.","Bölgesel işletmelerin ve uzmanlık alanlarının anlaşılır biçimde gösterilmesi, planladığımız iş ortaklığı ekosisteminin parçalarındandır."]},
   {heading:"İşletmeler ve iş ortaklıkları",paragraphs:["Gelecekte kullanıcıların konum ve ihtiyaçlarına göre otomotiv hizmeti sağlayan işletmeleri keşfedebilecekleri bir yapı oluşturmayı amaçlıyoruz.","Herhangi bir işletmenin listelenmesi, doğrulanmış yetkili servis statüsü ya da belirli bir üretici adına hizmet yetkisi anlamına gelmez; bunlar için ayrıca açık doğrulama ve bilgilendirme gereklidir."]},
   {heading:"Bugünkü hizmet kapsamı",paragraphs:["Servis ağı, gerçek zamanlı randevu, ücret teklifi ve servis kaydı gibi özellikler henüz bütünleşik ve aktif bir hizmet olarak sunulmamaktadır. Bu sayfa geliştirme vizyonumuzu açıklamak amacıyla hazırlanmıştır."]}
  ]
 },
 "servis-hizmetleri":{
  title:"Servis Hizmetleri",
  intro:"Bakım, montaj ve ürün uygulama süreçlerini kullanıcılar için daha anlaşılır ve erişilebilir hale getirmeyi amaçlıyoruz.",
  sections:[
   {heading:"Bakım ve kontrol",paragraphs:["Periyodik bakım, kontrol ve araç güvenliğiyle ilgili hizmetlere erişimin, aracın marka ve modeline göre anlaşılır şekilde sunulmasını hedefliyoruz.","Bakım aralıkları ve teknik gereklilikler araç üreticisinin talimatlarına ve yetkili uzmanların değerlendirmesine göre belirlenmelidir."]},
   {heading:"Aksesuar montajı",paragraphs:["Jant, iç ve dış aksesuarlar veya diğer uyumlu ürünlerin doğru uygulanması için montaj hizmetleri önemlidir. Gelecekte ürün keşfi ile uygun montaj veya servis seçeneklerini ilişkilendiren bir yönlendirme deneyimi geliştirmek istiyoruz.","Ürün uyumluluğu, montajın güvenli yapılması ve yasal düzenlemelere uygunluk, yetkin servisler tarafından değerlendirilmelidir."]},
   {heading:"Randevu ve hizmet süreci",paragraphs:["İlerleyen aşamalarda servis bilgileri, talep oluşturma ve uygun hizmet seçeneklerinin karşılaştırılmasına yönelik işlevler değerlendirilmektedir.","Şu an bu sayfa üzerinden servis randevusu alınamaz; doğrulanmış fiyat veya işçilik garantisi verilmemektedir."]}
  ]
 },
 "modeller":{
  title:"Modeller",
  intro:"Marka, model ve üretim yılına göre şekillenen kişisel otomobil deneyimine yönelik yaklaşımımız.",
  sections:[
   {heading:"Araç seçimi",paragraphs:["Otomobil modelleri arasında tasarım, ölçüler, donanım ve parça uyumluluğu açısından önemli farklılıklar bulunur. Bu nedenle kullanıcıların araçlarını marka, model ve yıl bilgisiyle tanımlayabildiği bir deneyim geliştirmeyi önemsiyoruz.","Araç stüdyosundaki seçici alanlar bu yaklaşımın başlangıcını oluşturur; tüm listelenen araçlar için ayrı bir üç boyutlu model henüz bulunmamaktadır."]},
   {heading:"Başlangıç noktası",paragraphs:["Mevcut üç boyutlu önizleme deneyimi örnek bir Audi e-tron GT RS modeli üzerinde çalışmaktadır. Bu örnek araç, bütün marka ve modellerin desteklendiği anlamına gelmez.","Platformun ilerleyen aşamalarında araç verilerinin ve görselleştirme kapsamının genişletilmesi hedeflenmektedir."]},
   {heading:"Araç ile ürünü eşleştirme",paragraphs:["Uzun vadeli hedefimiz, otomobil modelini ilgili aksesuar ve yedek parça seçenekleriyle eşleştirerek kullanıcılara daha isabetli ürün keşfi sunmaktır.","Bir ürünün teknik uygunluğu mutlaka üretici verileri, parça numarası ve uzman kontrolüyle doğrulanmalıdır."]}
  ]
 },
 "aracinizi-taniyin":{
  title:"Aracınızı Tanıyın",
  intro:"Aracınıza uygun ürünleri değerlendirirken marka, model, üretim yılı ve teknik özelliklerin neden önemli olduğunu keşfedin.",
  sections:[
   {heading:"Aracınızı doğru tanımlayın",paragraphs:["Marka, model, üretim yılı ve varsa donanım paketi; araç için uygun parçaların belirlenmesinde temel bilgilerdir. Aynı modelin farklı yıllarında veya motor seçeneklerinde uyumluluk değişebilir.","Araç seçimini yaparken ruhsat, üretici dokümanları ve ilgili teknik bilgilerin doğru kullanılması önemlidir."]},
   {heading:"Parça ve aksesuar uyumluluğu",paragraphs:["Bir parçanın yalnızca bir modele benzer görünmesi uygun olduğu anlamına gelmez. Ölçüler, bağlantı noktaları, elektrik sistemleri ve üretici tarafından belirlenen teknik koşullar dikkate alınmalıdır.","E-GARAGE ilerleyen dönemde bu bilgileri ürün keşif deneyimine dâhil etmeyi amaçlar. Ancak mevcut önizleme alanı tek başına teknik uyumluluk onayı veya profesyonel montaj tavsiyesi sunmaz."]},
   {heading:"Dijital olarak keşfedin",paragraphs:["Araç stüdyomuzdaki örnek model üzerinde görsel seçenekleri deneyebilir ve kişiselleştirme tercihlerinizi kaydedebilirsiniz. Daha geniş marka, model ve aksesuar desteği platformun geliştirme hedefleri arasındadır."]},
   {heading:"Güvenli karar verin",paragraphs:["Satın alma veya montaj öncesinde üretici parça numarası, garanti koşulları ve profesyonel servis görüşüyle ürünün aracınıza uygunluğunu doğrulamanızı öneririz."]}
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
  <div className="ks-info-breadcrumb"><Link href="/">E-GARAGE</Link><span aria-hidden="true">/</span><span>{["surdurulebilirlik","tasarim","servisler","servis-hizmetleri","modeller","aracinizi-taniyin"].includes(slug)?"E-GARAGE DÜNYASI":"BİLGİLENDİRME"}</span></div>
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
