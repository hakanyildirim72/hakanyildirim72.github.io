type Bilingual = { en: string; tr: string };

type Overview = {
  summary: Bilingual;
  // A topic overview describes only the scope indicated by the title when no abstract was available.
  summaryKind?: "topic";
  sourceUrl?: string;
};

export const publicationOverviews: Record<string, Overview> = {
  "minority-report-2026": {
    summaryKind: "topic",
    summary: {
      en: "Discusses the evidentiary status of probability-based intelligence analysis, using the contrast between predictive systems and legal proof as its central question.",
      tr: "Olasılığa dayalı istihbarat analizlerinin delil hukukundaki yerini, öngörü üreten sistemler ile hukuki ispat arasındaki ayrım üzerinden ele alır.",
    },
  },
  "ai-judgment-2026": {
    summaryKind: "topic",
    summary: {
      en: "Asks how algorithmic evidence should be assessed in judicial decisions and whether an AI system can be given the authority to reach a judgment.",
      tr: "Algoritmik delillerin yargısal kararlarda nasıl değerlendirileceğini ve bir yapay zekâ sistemine hüküm kurma yetkisi verilip verilemeyeceğini sorgular.",
    },
  },
  "ai-surveillance-2026": {
    summaryKind: "topic",
    summary: {
      en: "Focuses on the privacy risks raised by AI-assisted surveillance and the handling of personal information in monitoring systems.",
      tr: "Yapay zekâ destekli gözetimin yarattığı mahremiyet risklerine ve izleme sistemlerinde kişisel bilgilerin işlenmesine odaklanır.",
    },
  },
  "signalgate-2026": {
    summaryKind: "topic",
    summary: {
      en: "Uses the 2025 SignalGate incident to frame a discussion of what end-to-end encryption can and cannot protect in real communication workflows.",
      tr: "2025 SignalGate olayını, uçtan uca şifrelemenin gerçek iletişim süreçlerinde neleri koruyabildiği ve hangi sınırlara sahip olduğu sorusu için bir örnek olarak ele alır.",
    },
  },
  "crypto-tracing-2025": {
    summary: {
      en: "Examines why transaction speed, pseudonymity, decentralized finance, differing national rules, and false alerts make illicit cryptocurrency flows difficult for financial intelligence units to trace. It considers analytics and blockchain forensics alongside privacy safeguards.",
      tr: "İşlem hızı, kimliklerin gizlenmesi, merkeziyetsiz finans, ülkeler arasındaki kural farklılıkları ve yanlış alarmların mali istihbarat birimlerinin kripto varlık akışlarını izlemesini nasıl zorlaştırdığını inceler. Analitik ve blokzincir adli incelemesini mahremiyet güvenceleriyle birlikte değerlendirir.",
    },
    sourceUrl: "https://dergipark.org.tr/tr/pub/acin/article/1598844",
  },
  "uyap-2025": {
    summary: {
      en: "Treats UYAP security as a combined question of technical controls, physical protection, policy, data, and privacy. It proposes independent oversight with broad stakeholder representation to clarify responsibility and set shared audit standards.",
      tr: "UYAP güvenliğini teknik kontroller, fiziksel koruma, politika, veri ve mahremiyetin birlikte ele alınması gereken bir konu olarak değerlendirir. Sorumlulukları netleştirmek ve ortak denetim standartları belirlemek için geniş paydaş katılımlı bağımsız bir yapı önerir.",
    },
    sourceUrl: "https://dergipark.org.tr/en/pub/denetisim/article/1532057",
  },
  "industry4-2024": {
    summary: {
      en: "Presents a CMMI-based framework for assessing how prepared higher-maturity IT companies are for Industry 4.0. It connects process capabilities with automation, data-led decisions, and technology integration, and discusses its use beyond the IT sector.",
      tr: "Yüksek CMMI olgunluğuna sahip BT şirketlerinin Endüstri 4.0 hazırlığını değerlendirmek için CMMI temelli bir çerçeve sunar. Süreç yetkinliklerini otomasyon, veriye dayalı kararlar ve teknoloji entegrasyonuyla ilişkilendirir; yaklaşımın BT dışındaki alanlara uyarlanmasını da tartışır.",
    },
  },
  "academics-ai-2024": {
    summary: {
      en: "Reports a survey of academics in Türkiye about why and how they use AI tools. The study finds awareness of AI but less widespread and varied use, and discusses concerns about copyright, patents, and privacy in academic work.",
      tr: "Türkiye'deki akademisyenlerin yapay zekâ araçlarını hangi amaçlarla ve nasıl kullandığını anketle inceler. Çalışma, farkındalığa rağmen kullanımın yeterince yaygın ve çeşitli olmadığını gösterir; akademik çalışmalarda telif, patent ve mahremiyet sorunlarını da tartışır.",
    },
    sourceUrl: "https://dergipark.org.tr/en/pub/sinopfbd/article/1434171",
  },
  "maturity-2022": {
    summary: {
      en: "Develops an Industry 4.0 maturity model that includes often-overlooked dimensions such as law, incentives, and organizational culture. Expert weighting and an application to businesses in an Ankara industrial park are used to assess readiness across multiple dimensions.",
      tr: "Hukuk, teşvikler ve kurum kültürü gibi sıklıkla dışarıda bırakılan boyutları içeren bir Endüstri 4.0 olgunluk modeli geliştirir. Uzman ağırlıklandırması ve Ankara'daki bir sanayi bölgesinde yer alan işletmelere uygulama yoluyla hazırlık düzeylerini çok boyutlu değerlendirir.",
    },
  },
  "cybersecurity-expertise-2026": {
    summaryKind: "topic",
    summary: {
      en: "Introduces cybersecurity expertise as a field of professional study and practice. A detailed public description of this edition's chapters was not available.",
      tr: "Siber güvenlik uzmanlığını mesleki öğrenme ve uygulama alanı olarak ele alır. Bu baskının bölümlerini ayrıntılandıran açık bir tanıtım kaydı bulunamadı.",
    },
  },
  "cybersecurity-guide-2025": {
    summary: {
      en: "A practical guide spanning everyday digital safety and organizational defense. It connects common attack types, data protection, and incident response with real cases and actionable security advice.",
      tr: "Günlük dijital güvenlikten kurumsal savunmaya uzanan uygulamalı bir rehberdir. Yaygın saldırı türlerini, veri korumayı ve olay müdahalesini gerçek vakalar ve uygulanabilir güvenlik önerileriyle ilişkilendirir.",
    },
    sourceUrl: "https://www.nobelyayin.com/siber-guvenlik-rehberi-tehditten-cozume-22322.html",
  },
  "meclis-2021": {
    summaryKind: "topic",
    summary: {
      en: "Addresses physical and virtual security in the Turkish Grand National Assembly, as indicated by the work's fuller catalogued title.",
      tr: "Katalogda yer alan genişletilmiş adına göre Türkiye Büyük Millet Meclisi'nde fiziksel ve sanal güvenlik konusunu ele alır.",
    },
    sourceUrl: "https://koha.etu.edu.tr/cgi-bin/koha/opac-detail.pl?biblionumber=200046079",
  },
  "e-devlet-2006": {
    summary: {
      en: "Explores the early shift toward electronic public services, including digital identity, coordination among agencies, and how technology could change everyday interactions with the state.",
      tr: "Elektronik kamu hizmetlerine geçişin erken dönemini; dijital kimlik, kurumlar arası eşgüdüm ve teknolojinin vatandaş-devlet ilişkisini nasıl değiştirebileceği üzerinden inceler.",
    },
    sourceUrl: "https://books.google.com/books/about/E_Devlet_ba%C5%9Fa.html?id=hzBgQwAACAAJ",
  },
  "polisce-2005": {
    summaryKind: "topic",
    summary: {
      en: "Looks ahead to policing and public-safety technologies through a future-oriented agenda for information systems and police work.",
      tr: "Bilgi sistemleri ve polislik uygulamaları için geleceğe dönük bir gündem üzerinden emniyet teknolojilerini ele alır.",
    },
  },
  "police-2004": {
    summaryKind: "topic",
    summary: {
      en: "An English-language treatment of the future police-technology agenda associated with the PoliCE/PolisCE work.",
      tr: "PoliCE/PolisCE çalışmasıyla ilişkili, geleceğin polis teknolojileri gündemini İngilizce ele alan bir eserdir.",
    },
  },
  "elestirdik-2002": {
    summary: {
      en: "Examines digital transformation at an early stage through its social, economic, and technological effects. A later assessment by the author revisits the book's discussion of e-government and digital public services.",
      tr: "Dijital dönüşümü erken bir dönemde toplumsal, ekonomik ve teknolojik etkileriyle inceler. Yazarın sonraki değerlendirmesi, kitabın e-devlet ve dijital kamu hizmetleri üzerine tartışmalarına yeniden bakar.",
    },
    sourceUrl: "https://dergipark.org.tr/tr/pub/by/issue/89621/1523511",
  },
  "document-privacy-2026": {
    summaryKind: "topic",
    summary: {
      en: "Focuses on the relationship between documents and privacy; a full chapter abstract was not available to verify more specific claims.",
      tr: "Belgeler ile mahremiyet arasındaki ilişkiye odaklanır; daha ayrıntılı bir kapsamı doğrulamak için bölüm özeti bulunamadı.",
    },
  },
  "basic-it-2024": {
    summaryKind: "topic",
    summary: {
      en: "Introduces internet technologies, e-government applications, and computer-network security as related areas of foundational information technology.",
      tr: "İnternet teknolojilerini, e-devlet uygulamalarını ve bilgisayar ağı güvenliğini temel bilgi teknolojilerinin birbiriyle ilişkili alanları olarak tanıtır.",
    },
  },
};
