
export interface Service {
  title: string;
  description: string;
  fullText: string;
  image: string;
  features: string[];
  types?: { name: string; desc: string; }[];
}

export const servicesData: Record<string, Service> = {
  'frizerske-usluge': {
    title: 'Frizerske usluge',
    description: 'Vrhunski stilisti i frizeri u Mystique salonu pobrinuće se da Vaša kosa uvek izgleda savršeno negovano i moderno. Frizersko kozmetički studio MystiqueFit želi da se izdvoji kvalitetom, znanjem, ljubaznošcu i perfektnom komunikacijom sa svojim klijentima.',
    fullText: 'Uvek dobro raspoloženo osoblje studija MystiqueFit trudiće se da svoju kreativnost i veštine stavi u službu Vašeg izgleda, kako biste što lepše i privlačnije izgledali, na obostrano zadovoljstvo. U studiju MystiqueFit uvek će Vas docekati prijatan ambijent i ljubazno osoblje. Zato, posetite nas i uz pomoć stručnjaka ili Vašeg omiljenog magazina odaberite frizuru po Vašoj želji i ukusu, a zatim prepustite veštim rukama profesionalaca da rade u korist Vaše lepote.',
    image: '/frizerske-usluge.jpg',
    features: [
      'Vrhunski stilisti',
      'Moderna nega',
      'Prijatan ambijent',
      'Personalizovan pristup'
    ]
  },
  'kozmeticarske-usluge': {
    title: 'Kozmetičarske usluge',
    description: 'Dugogodišnje iskustvo u otklanjanju nesavršenosti i pružanju vrhunske nege lica i tela. Frizersko kozmetički salon „Mystique fit" već dugi niz godine otklanja sve nesavršenosti koje negativno utiču na vaše samopouzdanje.',
    fullText: 'Na najbolji mogući način i uz upotrebu najkvalitetnijih materijala. Ovde možete uživati u mnogobrojnim tretmanima lica i tela, manikir, pedikir kao i svim vrstama depilacije. Naš cilj je zdrava i negovana koža, relaksirano telo i da u prijatnom ambijentu salona, zajedno sa nama uživate u raznovrsnim tretmanima i njihovim efektima.',
    image: '/kozmeticarske-usluge.jpg',
    features: [
      'Nega lica i tela',
      'Manikir i pedikir',
      'Sve vrste depilacije',
      'Najkvalitetniji materijali'
    ]
  },
  'tretmani-lica': {
    title: 'Tretmani lica',
    description: 'Individualni programi lepote prilagođeni stanju i potrebama Vaše kože, uz upotrebu svetski poznatih preparata i aparata najnovije generacije.',
    fullText: 'Nudimo širok spektar tretmana uključujući mikrodermoabraziju, hemijske pilinge, mezoterapiju bez igala (mezoporaciju), Dermapen tretmane za ožiljke i anti-age, oksigenaciju kože aktivnim kiseonikom i radiotalasni lifting za nehirurško podmlađivanje.',
    image: '/tretmani-lica.jpg',
    features: [
      'Mikrodermoabrazija',
      'Hemijski pilinzi',
      'Mezoporacija',
      'Dermapen',
      'Radiotalasni lifting'
    ]
  },
  'tretmani-tela': {
    title: 'Tretmani tela',
    description: 'Kompletan program preoblikovanja i nege tela uz pomoć vrhunskih preparata i savremene tehnologije.',
    fullText: 'Kavitacija (ultrazvučna liposukcija) za uklanjanje masnih naslaga, elektromagnetna stimulacija za jačanje mišića, radiotalasni lifting tela za zatezanje kože i vakum slim tretmani za redukciju celulita.',
    image: '/liposukcija.jpg',
    features: [
      'Ultrazvučna kavitacija',
      'Elektromagnetna stimulacija',
      'Radiotalasni lifting tela',
      'Vakum slim'
    ]
  },
  'sminka': {
    title: 'Šminka',
    description: 'Profesionalna šminka koja ističe prirodnu lepotu i ženstvenost.',
    fullText: 'Šminkanje je završni deo nege jedne žene. Profesionalna šminka bilo da je dnevna, ili svečana, ističe prirodnu lepotu ženskog lica i sva njena ženstvenost dolazi do izražaja. Šminka nam daje mogućnost da istaknemo sve ono što je lepo na našem licu, a prikrijemo nedostatke, i samim tim nam daje dodatno samopouzdanje. Naši šminkeri su izuzetno profesionalni i konstantno se obučavaju.',
    image: '/sminka.jpg',
    features: [
      'Dnevna i svečana šminka',
      'Isticanje prirodne lepote',
      'Profesionalni šminkeri',
      'Najnoviji trendovi'
    ]
  },
  'epilacija': {
    title: 'Epilacija diodnim laserom',
    description: 'Savremena metoda uklanjanja neželjenih dlaka na svim delovima tela.',
    fullText: 'Tretman je veoma jednostavan i brz. Praćen je blagim peckanjem na koži. Koristimo vrhunski aparat kojim se emituje snažan snop svetlosti usmeren ka dlačicama, uništavajući folikul dlake. Melanin u dlačici privlači snop svetlosti i uništava folikul. Epilacija se može raditi na svim delovima tela: nausnice, brada, pazuh, prepone, noge, ruke... Prvi rezultati su vidljivi već nakon prvog tretmana.',
    image: '/epilacija-1.jpg',
    features: [
      'Trajno uklanjanje dlaka',
      'Bezbolno i brzo',
      'Za sve delove tela',
      'Vidljivi rezultati odmah'
    ]
  },
  'solarijum': {
    title: 'Solarijum',
    description: 'Visokoprofesionalni MegaSun solarijum za zdravo i ravnomerno sunčanje.',
    fullText: 'Biopozitivni efekti sadrže zaštitu od prekomernog sunca, relaksaciju, bolju formu i zdravlje. Unapređuje razmenu mineralnih materija, stimuliše fotosintezu provitamina D, poboljšava ekonomiku disanja, intenzivira transport kiseonika u ćelijama i stimuliše imunitet organizma. Naši solarijumi nude kontrolisano i sigurno sunčanje.',
    image: '/solarijum.jpg',
    features: [
      'MegaSun tehnologija',
      'Vitamin D sinteza',
      'Kontrolisano sunčanje',
      'Ravnomerni ten'
    ]
  },
  'sauna': {
    title: 'Sauna / Parno kupatilo',
    description: 'Rituali detoksikacije i relaksacije koji potiču iz drevnih kultura.',
    fullText: 'Finska sauna podstiče rad krvotoka, potpomaže prokrvljenost kože, čisti pore i jača kožu. Dobra je u prevenciji od prehlada i povoljno deluje na psihu. Parno kupatilo (Hamam) potiče sa Bliskog istoka. Para obogaćena prirodnim aromatičnim uljima dobro utiče na organizam, potkrepljuje i osvežava. Savršen izbor za detoksikaciju.',
    image: '/sauna.jpg',
    features: [
      'Finska sauna',
      'Parno kupatilo (Hamam)',
      'Detoksikacija',
      'Jačanje imuniteta'
    ]
  },
  'masaze': {
    title: 'Masaže',
    description: 'Drevna metoda opuštanja i lečenja koja harmonizuje telo i duh. U MystiqueFit salonu masažu vrše isključivo specijalno edukovana lica uz upotrebu prirodnih aromatičnih ulja.',
    fullText: 'Drevna indijska poslovica glasi da bolesti ne prilaze onom ko se masira svaki dan. Masaža je jedna od najpoznatijih metoda opuštanja i lečenja. Masaža opušta telo psihički i fizički. Naši terapeuti će prilagoditi tehniku prema vašem stanju i potrebama, koristeći spoj manuelnih tehnika i aromaterapije za postizanje maksimalnih rezultata.',
    image: '/usluge-1.jpg',
    features: [
      'Terapeutska i Relax',
      'Vulkansko kamenje',
      'Anticelulit program',
      'Kraljevska (4 ruke)'
    ],
    types: [
      { name: 'Terapeutska masaža', desc: 'Ciljana podrška kod bolnih stanja i mišićne napetosti srednjeg intenziteta.' },
      { name: 'Relax masaža', desc: 'Blaga i umirujuća tehnika za potpuno opuštanje tela i oslobađanje od stresa.' },
      { name: 'Antistres masaža lica i tela', desc: 'Spoj relax i terapeutske masaže sa posebno biranim biljnim uljima.' },
      { name: 'Masaža vulkanskim kamenjem', desc: 'Termoterapija zagrejanim kamenjem koja otvara energetske puteve.' },
      { name: 'Masaža stopala', desc: 'Terapeutska stimulacija refleksnih zona za detoksikaciju celog organizma.' },
      { name: 'Masaža čokoladom', desc: 'Luksuzan tretman koji hrani kožu i stimuliše lučenje hormona sreće.' },
      { name: 'Havajska masaža (Lomi-Lomi)', desc: 'Ritualna masaža dugim, ritmičnim pokretima podlaktica.' },
      { name: 'Fitomasaža (lekovitim biljem)', desc: 'Korišćenje toplih biljnih kompresa za dubinsku revitalizaciju.' },
      { name: 'Memory ocean masaža', desc: 'Jedinstvena tehnika inspirisana pokretima okeanskih talasa.' },
      { name: 'Indosean masaža', desc: 'Orijentalno putovanje kroz mirise i specifične akupresurne tačke.' },
      { name: 'Limfna drenaža', desc: 'Blaga tehnika za ubrzavanje cirkulacije limfe i eliminaciju toksina.' },
      { name: 'Anticelulit masaža', desc: 'Intenzivna stimulacija vezivnog tkiva za preoblikovanje siluete.' },
      { name: 'Holistička masaža', desc: 'Deluje na biće u celini, uspostavljajući mentalnu i fizičku harmoniju.' },
      { name: 'Masaža masažnom svećom', desc: 'Topli vosak palme i shea butera za vrhunsku hidrataciju i sjaj kože.' },
      { name: 'Kraljevska masaža (4 ruke)', desc: 'Sinhronizovano delovanje dva terapeuta za ultimativni luksuz i mir.' },
      { name: 'Piling i masaža THALGO algama', desc: 'Mineralizacija kože i piling morskim sedimentima za dubinsko čišćenje.' }
    ]
  },
  'hidromasazna-kada': {
    title: 'Hidromasažna kada',
    description: 'Opustite se u jacuzzi hidromasažnom bazenu uz aromatične soli i prijatnu muziku.',
    fullText: 'Zakoračite u jacuzzi hidromasažni bazen u salonu MystiqueFit i priuštite sebi maksimalno zadovoljstvo. Kupanje u aromatičnim solima iz Mrtvog mora i prijatna masaža profesionalno dizajniranih hidromlaznica izbrisaće naporan dan za tili čas. Prijatan ambijent, opuštajuća muzika i osvežavajuće piće upotpuniće Vaš ugođaj. Mišići se istovremeno stimulišu i opuštaju, pružajući idealan balans.',
    image: '/hidromasazna-kada.jpg',
    features: [
      'Jacuzzi hidromasaža',
      'Soli Mrtvog mora',
      'Opuštanje mišića',
      'Privatni ambijent'
    ]
  },
  'spa-day': {
    title: 'SPA Day paketi',
    description: 'Pobegnite od svakodnevnog stresa i uspostavite fizičku i psihičku ravnotežu u našem SPA kutku.',
    fullText: 'Ukoliko želite da razmazite svoj duh i telo, spa day je idealan za to. Samo par sati u spa & wellness centru je dovoljno da uspostavite fizičku i psihičku ravotežu. Zatvorite svoja vrata za ostatak sveta i oslobodite se svakodnevnog stresa. Spa & wellness centar "Mystique fit" je fokusiran na to da prijatnim tretmanima i programima omogući klijentima da poboljšaju svoj izgled i zdravlje.',
    image: '/spa-day.jpg',
    features: [
      'Kompletan oporavak',
      'Fizička i psihička ravnoteža',
      'Personalizovani paketi',
      'Privatnost i mir'
    ]
  }
}

export type ServiceSlug = keyof typeof servicesData;
