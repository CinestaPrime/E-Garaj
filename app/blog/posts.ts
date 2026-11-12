export type BlogSection={heading:string;body:string};
export type BlogPost={slug:string;title:string;category:string;description:string;sections:BlogSection[];date:string;readingMinutes:number;cover:string};
export const blogPosts:BlogPost[]=[
  {
    "slug": "yapay-zeka-otomotiv-sektorunu-nasil-degistiriyor",
    "title": "Yapay Zekâ Otomotiv Sektörünü Nasıl Değiştiriyor?",
    "category": "Yapay Zekâ ve Otomotiv",
    "description": "Sensör verilerinden sürücü deneyimine kadar yapay zekânın otomotivdeki somut kullanım alanlarını, sınırlarını ve fırsatlarını keşfedin.",
    "sections": [
      {
        "heading": "Yapay zekâ otomobilde nerede kullanılıyor?",
        "body": "Modern otomobiller kameralar, radarlar ve çok sayıda kontrol birimi aracılığıyla büyük miktarda veri üretir. Makine öğrenmesi, bu veriden şerit çizgilerini, trafik işaretlerini veya olası arızaları ayırt etmeye yardımcı olabilir. Her sürüş destek özelliği yapay zekâ kullanmaz; sistemin yetenekleri ve sınırları araçtan araca değişir."
      },
      {
        "heading": "Üretim ve bakım tarafındaki dönüşüm",
        "body": "Üretim hatlarında görüntü işleme boya ve montaj kusurlarını tespit etmekte kullanılabilir. Bakımda ise geçmiş arıza kayıtları, kullanım koşulları ve sensör ölçümleri bir araya getirilerek olası sorunlar için erken uyarı üretilebilir. Böyle bir tahmin, teknik servis muayenesinin yerine geçmez."
      },
      {
        "heading": "Kişiselleştirme neden önemli?",
        "body": "Yapay zekâ, sürücülerin tercih ettiği koltuk ayarı, ekran düzeni veya dijital araç tasarımı gibi seçenekleri daha hızlı keşfetmesine yardımcı olabilir. İyi bir deneyim, kullanıcının seçimlerini görünür ve değiştirilebilir tutmalı; önerilerin neden sunulduğunu açıkça anlatmalıdır."
      },
      {
        "heading": "Dikkat edilmesi gerekenler",
        "body": "Veri gizliliği, siber güvenlik ve yanlış tahmin riski bu dönüşümün ayrılmaz parçalarıdır. Özellikle güvenlikle ilgili kararların tek bir otomatik öneriye dayandırılmaması gerekir. E-GARAGE, bu gelişmeleri araç keşfi ve kişiselleştirme perspektifinden takip eder."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/yapay-zeka-otomotiv-sektorunu-nasil-degistiriyor"
  },
  {
    "slug": "gelecekte-arac-kisisellestirme-nasil-olacak",
    "title": "Gelecekte Araç Kişiselleştirme Nasıl Olacak?",
    "category": "Geleceğin Teknolojileri",
    "description": "Dijital ikizler, üç boyutlu stüdyolar ve akıllı öneriler araç kişiselleştirmeyi nasıl değiştirebilir?",
    "sections": [
      {
        "heading": "Konfigüratörden deneyime",
        "body": "Geleneksel araç yapılandırıcıları renk ve donanım listesinden seçim yapmaya odaklanır. Yeni nesil dijital stüdyolar, aynı tercihi farklı ışık koşulları ve görüş açılarında görmeyi mümkün kılabilir. Böylece kullanıcı kararını yalnızca katalog görseline dayanarak vermez."
      },
      {
        "heading": "Dijital ikiz yaklaşımı",
        "body": "Dijital ikiz, fiziksel bir ürünün verilerle ilişkilendirilen sayısal temsilidir. Araç tasarımında benzer bir yaklaşım, seçilen parçaların görünümünü ve bazı teknik özelliklerini bir arada incelemeyi kolaylaştırabilir. Bunun için doğru ölçü ve uyumluluk verisi şarttır."
      },
      {
        "heading": "Yapay zekâ destekli seçenekler",
        "body": "Bir sistem sürücünün daha önce beğendiği renk, jant ve trim kombinasyonlarından yeni tasarımlar önerebilir. Ancak önerinin görsel açıdan iyi görünmesi, parçanın fiziksel olarak araca uyduğu anlamına gelmez. Satın alma öncesinde parça numarası ve üretici verisi kontrol edilmelidir."
      },
      {
        "heading": "Kullanıcı kontrolü",
        "body": "Geleceğin iyi tasarım deneyiminde son söz yine kullanıcıda olmalı. Karşılaştırma, geri alma ve tasarımı kaydetme gibi temel işlevler, gösterişli otomasyondan daha değerli olabilir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/gelecekte-arac-kisisellestirme-nasil-olacak"
  },
  {
    "slug": "dijital-arac-studyosu-nedir",
    "title": "Dijital Araç Stüdyosu Nedir? Nasıl Kullanılır?",
    "category": "Araç Tasarımı",
    "description": "Dijital araç stüdyolarının nasıl çalıştığını, hangi tasarım kararlarında yardımcı olduğunu ve sınırlarını öğrenin.",
    "sections": [
      {
        "heading": "Dijital araç stüdyosu ne işe yarar?",
        "body": "Dijital araç stüdyosu, bir otomobilin görünümünü bilgisayar veya telefondan incelemeyi ve belirli özelliklerini sanal ortamda değiştirmeyi sağlayan arayüzdür. Üç boyutlu modeller sayesinde kullanıcı tek bir fotoğrafla sınırlı kalmadan farklı açılara bakabilir."
      },
      {
        "heading": "Görsel deneme süreci",
        "body": "İyi bir başlangıç için önce araç modelini seçin; ardından gövde rengini, jant görünümünü ve desteklenen detayları tek tek değiştirin. Her aşamada önceki seçeneği kaydetmek, kararları karşılaştırmayı kolaylaştırır. Ekrandaki renkler cihaz ve aydınlatma nedeniyle gerçek malzemeden farklı görünebilir."
      },
      {
        "heading": "Üç boyutlu görünüm ve uyumluluk farklıdır",
        "body": "Sanal ortamda yerleştirilmiş bir parçanın görsel olarak oturması teknik uyumluluğu garanti etmez. Jantta ölçü, ofset, bijon aralığı ve fren boşluğu; dış trimde montaj noktaları gibi bilgiler ayrıca doğrulanmalıdır."
      },
      {
        "heading": "E-GARAGE yaklaşımı",
        "body": "E-GARAGE, otomobil meraklılarının tasarım tercihlerini dijital ortamda keşfetmesi fikri üzerine geliştirilen bir platformdur. Stüdyodaki mevcut araç ve seçenekler zamanla genişleyebilir; kullanılabilen işlevler arayüzde gösterilir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/dijital-arac-studyosu-nedir"
  },
  {
    "slug": "arac-modifiye-ederken-dikkat-edilmesi-gerekenler",
    "title": "Araç Modifiye Ederken Dikkat Edilmesi Gereken 10 Nokta",
    "category": "Modifiye ve Kişiselleştirme",
    "description": "Aracınızı kişiselleştirmeden önce güvenlik, uyumluluk, garanti ve kullanım amacı açısından kontrol etmeniz gereken noktalar.",
    "sections": [
      {
        "heading": "Önce hedefinizi belirleyin",
        "body": "Modifikasyonun amacını açıkça tanımlayın: görünüm, konfor, koruma veya performans. Günlük kullanılan bir otomobil için estetik bir değişiklik, pist odaklı bir araç için doğru olandan çok farklı olabilir."
      },
      {
        "heading": "On maddelik kontrol listesi",
        "body": "1) Aracın marka, model ve üretim yılını doğrulayın. 2) Parça kodunu kontrol edin. 3) Montaj noktalarını inceleyin. 4) Jant ve lastik ölçülerini teyit edin. 5) Aydınlatma değişikliklerinde mevzuatı araştırın. 6) Garanti koşullarını okuyun. 7) Elektronik sistemlere etkisini değerlendirin. 8) Yetkin montaj desteği alın. 9) Bütçeye bakım ve söküm maliyetini ekleyin. 10) Yapılan değişikliklerin belgelerini saklayın."
      },
      {
        "heading": "Görünüm ile güvenliği dengeleyin",
        "body": "Alçaltma, geniş lastik veya aerodinamik ekler aracın karakterini değiştirebilir. Ancak görüş açısı, yerden yükseklik, süspansiyon hareketi ve fren performansı gibi unsurlar olumsuz etkilenebilir. Bu nedenle güvenlik kritik modifikasyonlar uzman değerlendirmesi gerektirir."
      },
      {
        "heading": "Yerel kuralları kontrol edin",
        "body": "Türkiye'de bazı tadilatlar teknik onay, muayene veya tescil işlemi gerektirebilir. Uygulanabilir kurallar yapılan işleme göre değişir; güncel şartlar yetkili kurum ve uzmanlarla teyit edilmelidir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/arac-modifiye-ederken-dikkat-edilmesi-gerekenler"
  },
  {
    "slug": "jant-secimi-aracin-karakterini-nasil-degistirir",
    "title": "Jant Seçimi Aracın Karakterini Nasıl Değiştirir?",
    "category": "Modifiye ve Kişiselleştirme",
    "description": "Jant çapı, tasarımı, ofseti ve renk tercihlerinin araç görünümüne ve kullanımına etkilerini keşfedin.",
    "sections": [
      {
        "heading": "Tasarım dili ve oran",
        "body": "İnce çok kollu bir jant genellikle zarif bir izlenim verirken daha kalın kollu geometriler sportif bir karakter yaratabilir. Jantın algısı tek başına tasarımdan değil gövde rengi, fren sistemi ve lastik yanak yüksekliğinden de etkilenir."
      },
      {
        "heading": "Teknik ölçüleri atlamayın",
        "body": "Jant çapı ve genişliği kadar bijon aralığı, göbek deliği çapı ve ET/ofset değeri de önemlidir. Yanlış ölçü sürtme, direksiyon geometrisi veya tekerlek yatağı yükü gibi sorunlara yol açabilir. Araç üreticisinin onayladığı sınırlar önceliklidir."
      },
      {
        "heading": "Büyük jant her zaman iyi değildir",
        "body": "Daha büyük jantla birlikte daha düşük yanaklı lastik gerekebilir. Bu kombinasyon bazı koşullarda konforu ve darbe dayanımını azaltabilir; ayrıca toplam ağırlık ve maliyet artabilir. Tasarım kararında yol koşulları da hesaba katılmalıdır."
      },
      {
        "heading": "Renk ve bitiş seçimi",
        "body": "Mat siyah, parlak antrasit veya işlenmiş metal yüzeylerin her biri farklı bir görünüm sunar. Temizlik kolaylığı, kaplama dayanımı ve tamir olanakları da seçim kriterleri arasında olmalıdır."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/jant-secimi-aracin-karakterini-nasil-degistirir"
  },
  {
    "slug": "arac-rengi-secimi-stil-algi-kimlik",
    "title": "Araç Rengi Seçimi: Stil, Algı ve Kimlik",
    "category": "Araç Tasarımı",
    "description": "Araç renkleri farklı ışıklarda nasıl görünür? Mat, metalik ve parlak yüzeylerin tasarım üzerindeki etkileri.",
    "sections": [
      {
        "heading": "Renk bir tasarım kararıdır",
        "body": "Aynı otomobil koyu antrasit, açık gümüş veya canlı bir renkte bambaşka görünür. Yüzeydeki kıvrımlar koyu tonlarda daha dramatik, açık tonlarda ise daha belirgin algılanabilir. Bu etki ışığın yönüne ve boya tipine göre değişir."
      },
      {
        "heading": "Mat ve parlak yüzey farkı",
        "body": "Parlak boya çevredeki ışıkları net yansıtabilir; mat yüzey yansımayı dağıtarak daha yumuşak bir görünüm yaratır. Mat kaplamalarda bakım yöntemi ve temizlik ürünü seçimi daha fazla özen gerektirebilir."
      },
      {
        "heading": "Dijital ekrandaki renk gerçeğin aynısı değildir",
        "body": "Telefon ve monitörlerin renk ayarları farklıdır. Ayrıca gün ışığı, kapalı otopark ışığı ve stüdyo ışığı aynı boyayı farklı gösterebilir. Kesin karar için mümkünse fiziksel numune veya gerçek araç görülmelidir."
      },
      {
        "heading": "Tasarımda tutarlılık",
        "body": "Gövde, jant, fren kaliperi ve iç mekân renklerini aynı anda değerlendirmek uyumlu sonuç verir. Tek bir vurgu rengini tekrarlamak çoğu zaman daha dengeli bir görsel kimlik oluşturabilir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/arac-rengi-secimi-stil-algi-kimlik"
  },
  {
    "slug": "elektrikli-araclarda-tasarim-ve-teknoloji-trendleri",
    "title": "Elektrikli Araçlarda Tasarım ve Teknoloji Trendleri",
    "category": "Elektrikli Araçlar",
    "description": "Elektrikli otomobillerin aerodinamik, iç mekân ve yazılım odaklı tasarımında öne çıkan yaklaşımlar.",
    "sections": [
      {
        "heading": "Yeni mimari yeni oranlar getiriyor",
        "body": "Elektrikli otomobillerde batarya paketinin yerleşimi kabin ve zemin tasarımını etkiler. Bazı platformlar daha farklı dingil mesafesi ve iç hacim çözümlerine olanak tanırken her model aynı mimari avantajı sunmaz."
      },
      {
        "heading": "Aerodinamik neden kritik?",
        "body": "Hava direnci özellikle yüksek hızlarda enerji tüketimini etkiler. Bu nedenle kapalı ön yüzler, gövde altı kaplamalar, jant tasarımları ve aktif hava yönlendirme çözümleri sıkça değerlendirilir. Görsel bir aksesuarın aerodinamiği iyileştirdiği varsayılmamalıdır."
      },
      {
        "heading": "Yazılım ve kullanıcı arayüzü",
        "body": "Ekran yerleşimi, enerji tüketimi bilgileri, şarj planlama ve sürüş profilleri sürücü deneyiminin bir parçası hâline geliyor. Bununla birlikte fiziksel kontrol ve dikkat dağıtma konuları önemini koruyor."
      },
      {
        "heading": "Kişiselleştirmede yeni sorular",
        "body": "Elektrikli araçlarda aksesuarların sensörlere, soğutmaya ve batarya güvenliğine etkisi ayrıca değerlendirilmelidir. Araçla uyumluluğu doğrulanmamış elektriksel modifikasyonlardan kaçınılmalıdır."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/elektrikli-araclarda-tasarim-ve-teknoloji-trendleri"
  },
  {
    "slug": "2030da-otomobil-dunyasinda-bizi-neler-bekliyor",
    "title": "2030'a Doğru Otomobil Dünyasında Bizi Neler Bekliyor?",
    "category": "Geleceğin Teknolojileri",
    "description": "2030'a yaklaşırken otomotivde yazılım, bağlantılı hizmetler, elektrifikasyon ve dijital deneyim üzerine olası senaryolar.",
    "sections": [
      {
        "heading": "Kesin tahmin değil olası yönler",
        "body": "2030 yılı için tek bir otomobil geleceği yok. Enerji altyapısı, düzenlemeler, maliyetler ve kullanıcı alışkanlıkları ülkeler arasında farklı gelişebilir. Bu nedenle trendleri kesin sonuçlar yerine senaryolar olarak değerlendirmek daha sağlıklıdır."
      },
      {
        "heading": "Yazılımın rolü artabilir",
        "body": "Bağlantılı özellikler ve kablosuz güncellemeler, aracın satın alındığı günkü özellikleriyle sınırlı kalmamasını sağlayabilir. Ancak güncellemelerin kapsamı, cihaz ömrü, veri güvenliği ve ücretlendirme koşulları tüketici açısından daha önemli hâle gelir."
      },
      {
        "heading": "Dijital alışveriş deneyimi",
        "body": "Araç veya aksesuar keşfinde üç boyutlu görselleştirme, çevrim içi karşılaştırma ve kişiselleştirilmiş öneriler yaygınlaşabilir. Gerçek ürün uyumluluğunu, teslimat koşullarını ve servis desteğini doğrulayan sistemler özellikle değerli olacaktır."
      },
      {
        "heading": "Sürücü için değişmeyen öncelikler",
        "body": "Güvenlik, erişilebilir bakım, toplam sahip olma maliyeti ve kullanım kolaylığı teknoloji değişse de temel karar faktörleri olmaya devam eder."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/2030da-otomobil-dunyasinda-bizi-neler-bekliyor"
  },
  {
    "slug": "e-garage-nedir",
    "title": "E-GARAGE Nedir? Dijital Otomotiv Platformunu Tanıyın",
    "category": "E-GARAGE Dünyası",
    "description": "CinestaAI bünyesinde geliştirilen E-GARAGE'ın dijital araç stüdyosu yaklaşımını, mevcut deneyimini ve vizyonunu tanıyın.",
    "sections": [
      {
        "heading": "E-GARAGE hangi fikre dayanıyor?",
        "body": "E-GARAGE, otomobil tutkusunu dijital tasarım ve kişiselleştirme deneyimiyle buluşturmak amacıyla geliştirilen bir otomotiv teknolojisi girişimidir. Araç sahiplerinin modelleri keşfetmesi, görsel tercihlerini denemesi ve kendi tasarım dilini oluşturması merkezdedir."
      },
      {
        "heading": "Dijital stüdyo deneyimi",
        "body": "Platformdaki araç stüdyosu, desteklenen modellerde görünüm seçeneklerini sanal ortamda incelemeye odaklanır. Görselleştirme, bir ürünün gerçek montaj uyumunu veya satışta bulunduğunu tek başına doğrulamaz. Mevcut işlevler stüdyo arayüzünde görülebilir."
      },
      {
        "heading": "CinestaAI ile bağlantısı",
        "body": "E-GARAGE, yapay zekâ, yazılım ve dijital ürünler geliştiren CinestaAI bünyesindeki otomotiv odaklı projedir. Bu bağ, dijital deneyimi zaman içinde daha akıllı ve kullanışlı hâle getirme hedefinin bir parçasıdır."
      },
      {
        "heading": "Uzun vadeli vizyon",
        "body": "Araç sahiplerini aksesuar, yedek parça ve ilgili hizmetlerle buluşturabilecek bir ekosistem yaklaşımı değerlendirilmektedir. Bu alanlar gelişim hedefidir; bugün sunulmayan bir hizmet, mevcutmuş gibi değerlendirilmemelidir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/e-garage-nedir"
  },
  {
    "slug": "e-garage-ile-arac-deneyimi",
    "title": "E-GARAGE ile Araç Keşfi ve Tasarım Deneyimi",
    "category": "E-GARAGE Dünyası",
    "description": "Bir otomobili çevrim içi ortamda keşfetmekten kişisel tasarım kararlarına uzanan E-GARAGE yaklaşımı.",
    "sections": [
      {
        "heading": "Araç keşfi nerede başlar?",
        "body": "Otomobil deneyimi yalnızca teknik özellik listesiyle başlamaz. Silüet, gövde rengi, jant ve duruş gibi ayrıntılar aracın karakterini hissettirir. E-GARAGE bu görsel kararları dijital ortamda incelemeyi kolaylaştırmayı amaçlar."
      },
      {
        "heading": "Seçenekleri tek tek değerlendirin",
        "body": "Birden fazla değişikliği aynı anda yapmak hangi tercihin görünümü etkilediğini anlamayı zorlaştırabilir. Önce renk, ardından jant ve destekleniyorsa diğer detayları değiştirmek daha bilinçli karşılaştırma sağlar."
      },
      {
        "heading": "Tasarımın kaydedilmesi",
        "body": "Dijital garaj fikri, kişinin beğendiği kombinasyonları saklayıp gerektiğinde yeniden inceleyebilmesine dayanır. Kullanılabilen kayıt seçenekleri cihaz ve mevcut sürümün sunduğu işlevlere bağlıdır."
      },
      {
        "heading": "Sonraki adım",
        "body": "Dijital tasarımı gerçek dünyaya taşımadan önce parçaların model yılı ve donanımla uyumu kontrol edilmelidir. Tasarım stüdyosu karar destekleyici bir keşif aracıdır; teknik uygunluk belgesi değildir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/e-garage-ile-arac-deneyimi"
  },
  {
    "slug": "akilli-servis-ve-bakim-sistemleri",
    "title": "Akıllı Servis ve Araç Bakım Sistemlerinin Geleceği",
    "category": "Servis ve Bakım",
    "description": "Bağlantılı araç verileri ve tahmine dayalı bakımın sürücülere sunabileceği fırsatlar ve dikkat edilmesi gerekenler.",
    "sections": [
      {
        "heading": "Takvimden duruma dayalı bakıma",
        "body": "Klasik bakım programları kilometre ve zaman aralıklarına dayanır. Duruma dayalı bakım ise kullanım koşulları ve sensör ölçümlerini de dikkate almayı hedefler. Bu yaklaşım, üreticinin zorunlu bakım aralıklarının göz ardı edilmesi anlamına gelmez."
      },
      {
        "heading": "Tahmin nasıl yapılır?",
        "body": "Akü durumu, sıcaklık, titreşim veya arıza kodları gibi veriler eğilimler hakkında fikir verebilir. Makine öğrenmesi benzer geçmiş durumlarla karşılaştırarak risk göstergesi üretebilir. Fakat tek bir uyarı arızanın kesin teşhisi değildir."
      },
      {
        "heading": "Sürücüye faydası",
        "body": "Daha erken bilgilendirme, planlı servis randevuları ve değişen parçaların kayıt altında tutulması kullanım kolaylığı sağlayabilir. Güvenilir bir sistem, tahmini anlaşılır biçimde göstermeli ve kullanıcıyı yetkin teknik incelemeye yönlendirmelidir."
      },
      {
        "heading": "Veri ve güvenlik",
        "body": "Araç verilerinin kimlerle paylaşıldığı, ne kadar süre saklandığı ve uzaktan erişim güvenliği önemlidir. Kullanıcıların veri paylaşımı konusunda açık bilgiye ve kontrol seçeneklerine sahip olması gerekir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/akilli-servis-ve-bakim-sistemleri"
  },
  {
    "slug": "uyumlu-parca-nasil-secilir",
    "title": "Aracınıza Uyumlu Parça Nasıl Seçilir?",
    "category": "Kullanıcı Rehberleri",
    "description": "Araç aksesuarı ve yedek parçası seçerken marka-model yılı, parça numarası ve teknik uyumluluğu doğrulama rehberi.",
    "sections": [
      {
        "heading": "Model adı tek başına yeterli değil",
        "body": "Aynı modelin farklı üretim yılı, motor, donanım ve kasa seçenekleri bulunabilir. Bu nedenle yalnızca ilanda yazan araç adı üzerinden aksesuar veya yedek parça seçmek hatalı sipariş riskini artırır."
      },
      {
        "heading": "Kontrol sırası",
        "body": "Önce araç ruhsatı ve üretici bilgilerinden doğru varyantı tespit edin. Ardından orijinal ekipman veya parça numarasını, ölçüleri ve varsa üretici uyumluluk listesini karşılaştırın. Şüphedeyseniz satıcıdan yazılı doğrulama isteyin."
      },
      {
        "heading": "Görsel uyum ile teknik uyum",
        "body": "Bir parçanın fotoğrafta araca benzemesi montaj noktalarının aynı olduğunu göstermez. Jant, aydınlatma, fren ve elektronik aksesuarlar için ek ölçü ve sistem kontrolü gerekir. Güvenlikle ilişkili parçalar profesyonel montaj gerektirebilir."
      },
      {
        "heading": "Satın almadan önce",
        "body": "İade koşulları, garanti kapsamı, montaj maliyeti ve geçerli mevzuat da toplam kararın parçasıdır. E-GARAGE'ın dijital görselleştirme yaklaşımı araştırmayı kolaylaştırabilir; gerçek uyumluluk belgelerle teyit edilmelidir."
      }
    ],
    "date": "2026-11-12",
    "readingMinutes": 3,
    "cover": "/blog/kapak/uyumlu-parca-nasil-secilir"
  }
];
export function getBlogPost(slug:string){return blogPosts.find(post=>post.slug===slug)}
export const blogCategories=[...new Set(blogPosts.map(post=>post.category))];
