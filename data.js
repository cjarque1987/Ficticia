// Dades educatives per a "Rumb al 27-N: Laboratori Electoral 2026" (4t d'ESO - 15 anys)

const PARTIES_DATA = [
  {
    id: "psoe",
    acronym: "PSOE",
    name: "Partido Socialista Obrero Español (i PSC a Catalunya)",
    ideology: "Centreesquerra / Socialdemocràcia",
    axisX: -3.5, // -10 esquerra, +10 dreta
    color: "#E30613",
    secondaryColor: "#FFCDD2",
    seats2026: 120,
    symbolName: "El Puny i la Rosa (i les sigles PSOE amb cor/barra)",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#E30613"/>
      <text x="60" y="54" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="28">PSOE</text>
      <path d="M42 78 C42 66, 58 64, 60 74 C62 64, 78 66, 78 78 C78 90, 60 98, 60 98 C60 98, 42 90, 42 78 Z" fill="#FFFFFF"/>
      <path d="M58 98 L58 110 M62 98 L64 106" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    slogans: [
      { text: "Espanya avança / Sempre endavant", year: "2023-2026", focus: "Optimisme institucional i defensa de la gestió de govern" },
      { text: "La força del que ens uneix", year: "Campanya 2026", focus: "Convivència, drets socials i estabilitat econòmica" },
      { text: "Fes que passi (Haz que pase)", year: "Històric recent", focus: "Mobilització emocional de l'electorat indecís" }
    ],
    colorPsychology: "El vermell intens transmet energia, passió i tradició històrica dels moviments obrers i socialdemòcrates europeus. Als mítings el combinen amb blanc per donar imatge institucional i de govern.",
    campaignStyle: {
      tone: "Institucional, moderat i apel·lant al 'vot útil' progressista per frenar la dreta i l'extrema dreta.",
      socialMedia: "Vídeos curts a TikTok mostrant mesures concretes (beques, transport gratuït jove, SMI) amb un to proper i pop, combinat amb entrevistes en pòdcasts juvenils.",
      target: "Pensionistes, treballadors, dones i joves preocupats per beques, transport i drets civils.",
      keyIssues2026: [
        "Ampliació d'avals públics i parc d'habitatge públic de lloguer per a joves",
        "Transport públic gratuït per a menors de 26 anys i descomptes per a estudiants",
        "Pujada del Salari Mínim Interprofessional (SMI) i reducció de la jornada laboral",
        "Transició ecològica i fons europeus per a digitalització i IA responsable"
      ]
    }
  },
  {
    id: "pp",
    acronym: "PP",
    name: "Partido Popular",
    ideology: "Centredreta / Conservadorisme i Liberalisme econòmic",
    axisX: 4.5,
    color: "#005999",
    secondaryColor: "#BBDEFB",
    seats2026: 136,
    symbolName: "El Xarran (sovint anomenat Gavina) dins d'un cercle o marc blau",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#005999"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#FFFFFF" stroke-width="5"/>
      <path d="M32 48 Q48 34 60 46 Q74 32 90 44 Q72 44 60 54 Q48 44 32 48 Z" fill="#FFFFFF"/>
      <text x="60" y="86" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="30">PP</text>
    </svg>`,
    slogans: [
      { text: "És el moment / Solucions que funcionen", year: "2023-2026", focus: "Imatge d'alternativa de govern i eficiència econòmica" },
      { text: "Una Espanya que rutlla per a tothom", year: "Campanya 2026", focus: "Baixada d'impostos, seguretat jurídica i unitat constitucional" },
      { text: "Centrats en el teu futur", year: "Històric recent", focus: "Atrapar el votant de centre descontent amb el govern" }
    ],
    colorPsychology: "El blau cel i blau marí transmeten ordre, confiança, estabilitat, institucionalitat i serietat econòmica. És el color clàssic del centredreta europeu.",
    campaignStyle: {
      tone: "Crítica directa a la gestió del Govern i als seus pactes amb partits independentistes, presentant-se com a garantia d'ordre i bona gestió econòmica.",
      socialMedia: "Infografies sobre impostos, cistella de la compra i hipoteques; vídeos d'estil directe a Instagram i TikTok amb humor irònic contra el Govern.",
      target: "Classes mitjanes, autònoms, empreses, famílies i votants moderats o conservadors.",
      keyIssues2026: [
        "Rebaixa de l'IRPF i deduccions fiscals per a joves que compren el primer pis",
        "Proba EBAU/PAU comuna a totes les comunitats autònomes d'Espanya",
        "Suport a autònoms i pimes amb menys burocràcia i impostos",
        "Reforç de la seguretat ciutadana i lluita contra l'ocupació il·legal d'habitatges"
      ]
    }
  },
  {
    id: "vox",
    acronym: "VOX",
    name: "Vox",
    ideology: "Dreta radical / Ultradreta i Nacionalconservadorisme",
    axisX: 8.5,
    color: "#63BE21",
    secondaryColor: "#DCEDC8",
    seats2026: 33,
    symbolName: "Tipografia verda en bloc amb la V i la X destacades",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#63BE21"/>
      <text x="60" y="72" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="36" letter-spacing="1">VOX</text>
      <rect x="24" y="84" width="72" height="6" rx="3" fill="#FFFFFF"/>
    </svg>`,
    slogans: [
      { text: "Decideix el que importa", year: "2023-2026", focus: "Qüestionar el consens dels altres partits i plantejar disjuntives directes" },
      { text: "Sentit comú, fronteres segures i llibertat", year: "Campanya 2026", focus: "Seguretat, identitat nacional espanyola i rebuig a l'Agenda 2030" },
      { text: "La teva veu al Congrés", year: "Històric recent", focus: "Populisme directe: parlar en nom de 'la gent normal' davant les elits" }
    ],
    colorPsychology: "El verd viu (històricament associat a símbols tradicionals espanyols i al trencament amb el blau/vermell tradicional) busca destacar visualment en qualsevol cartell o pantalla.",
    campaignStyle: {
      tone: "Contundent, emocional i polaritzador. Utilitza un llenguatge directe que divideix entre 'el poble' i 'les elits polítiques'.",
      socialMedia: "Molt actiu a TikTok, YouTube i X (Twitter) amb talls èpics de discursos al Congrés, mems polítics i col·laboració amb creadors de contingut joves.",
      target: "Votants molt conservadors, sector primari (agricultors/ramaders) i un sector de nois joves atrets pel discurs anti-sistema.",
      keyIssues2026: [
        "Centralització de competències (educació, sanitat i seguretat) a l'Estat",
        "Enduriment de les polítiques d'immigració i control de fronteres",
        "Oposició als impostos verds i a les restriccions de trànsit (Zones de Baixes Emissions)",
        "Suport al sector agrari nacional davant la competència exterior"
      ]
    }
  },
  {
    id: "sumar",
    acronym: "SUMAR",
    name: "Sumar (i Comuns / Compromís / Més Madrid)",
    ideology: "Esquerra transformadora / Ecologisme i Feminisme",
    axisX: -6.8,
    color: "#E51C55",
    secondaryColor: "#F8BBD0",
    seats2026: 26,
    symbolName: "Signe '+' i bafarada de diàleg en color magenta",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#E51C55"/>
      <circle cx="60" cy="48" r="24" fill="#FFFFFF"/>
      <path d="M52 48 H68 M60 40 V56" stroke="#E51C55" stroke-width="6" stroke-linecap="round"/>
      <text x="60" y="96" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="22">SUMAR</text>
    </svg>`,
    slogans: [
      { text: "És per tu / Temps de viure millor", year: "2023-2026", focus: "Política útil centrada en la vida quotidiana i el temps lliure" },
      { text: "Menys jornada, més vida, lloguers justos", year: "Campanya 2026", focus: "Propostes laborals, habitatge i transició verda" }
    ],
    colorPsychology: "El magenta/rosa intens trenca amb el vermell clàssic de l'esquerra i el lila antic, associant-se a frescor, feminisme, modernitat i diversitat.",
    campaignStyle: {
      tone: "Propositiu, centrat en drets laborals, salut mental, feminisme i emergència climàtica.",
      socialMedia: "Vídeos explicatius amb estètica cuidada i colorista a Instagram i TikTok sobre el preu dels lloguers, la jornada de 35-37,5 hores i salut mental pública.",
      target: "Joves urbans, treballadors precaritzats, col·lectius LGTBI+, activistes climàtics i votants d'esquerres.",
      keyIssues2026: [
        "Regulació estricta dels preus del lloguer i prohibició de pisos turístics en zones tensionades",
        "Reducció de la jornada laboral a 37,5 i 35 hores sense reducció de sou",
        "Pla estatal de psicòlegs i salut mental gratuïta per a joves a la sanitat pública",
        "Impost a les grans fortunes i grans energètiques per finançar serveis públics"
      ]
    }
  },
  {
    id: "erc",
    acronym: "ERC",
    name: "Esquerra Republicana de Catalunya",
    ideology: "Esquerra / Independentisme català i Republicanisme",
    axisX: -5.5,
    color: "#FFB232",
    secondaryColor: "#FFE082",
    seats2026: 7,
    symbolName: "Triangle d'estelada estilitzat amb les sigles d'Esquerra",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#FFB232"/>
      <polygon points="28,30 58,60 28,90" fill="#1E1E1E"/>
      <text x="82" y="68" text-anchor="middle" fill="#1E1E1E" font-family="Arial Black, sans-serif" font-weight="900" font-size="24">ERC</text>
    </svg>`,
    slogans: [
      { text: "Defensem Catalunya!", year: "2023-2026", focus: "Fer valer els vots catalans a Madrid per aconseguir recursos i drets" },
      { text: "Rodalies dignes, finançament singular i drets", year: "Campanya 2026", focus: "Negociació d'infraestructures i sobirania fiscal" }
    ],
    colorPsychology: "El groc càlid i taronja evoca la bandera catalana, lluminositat, optimisme republicà i visibilitat immediata a la cartelleria.",
    campaignStyle: {
      tone: "Reivindicatiu i pragmàtic: defensa dels interessos de Catalunya i polítiques d'esquerres al Congrés de Madrid.",
      socialMedia: "Vídeos sobre el caos de Rodalies, el cost de la vida a Catalunya, defensa del català a les plataformes digitals i acció social.",
      target: "Votants catalanistes i independentistes d'esquerres i progressistes.",
      keyIssues2026: [
        "Traspàs integral de Rodalies i inversió en transport públic català",
        "Finançament singular per a Catalunya (recaptació i gestió dels impostos)",
        "Protecció del català a l'audiovisual, xarxes socials i institucions europees",
        "Referèndum d'autodeterminació acordat i polítiques d'habitatge social"
      ]
    }
  },
  {
    id: "junts",
    acronym: "JUNTS",
    name: "Junts per Catalunya",
    ideology: "Independentisme català transversal / Centredreta-Centre",
    axisX: 2.0,
    color: "#00C3B2",
    secondaryColor: "#B2DFDB",
    seats2026: 7,
    symbolName: "Tipografia moderna en color turquesa amb la 'J' destacada",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#00C3B2"/>
      <text x="60" y="68" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="26">JUNTS</text>
      <circle cx="96" cy="40" r="7" fill="#FFFFFF"/>
    </svg>`,
    slogans: [
      { text: "Tu ets la força / Catalunya primer", year: "2023-2026", focus: "Fermesa negociadora a Madrid sense regalar els vots" },
      { text: "Fermesa i respecte per a Catalunya", year: "Campanya 2026", focus: "Cobrar per avançat les inversions i competències per a Catalunya" }
    ],
    colorPsychology: "El verd turquesa (menta) és un color jove i modern que es desmarca dels colors tradicionals d'esquerra/dreta per projectar transversalitat i renovació.",
    campaignStyle: {
      tone: "Fermesa davant l'Estat espanyol: reivindicar que els seus 7 escons són decisius i que no voten res a canvi de promeses incomplertes.",
      socialMedia: "Clips de les intervencions al Congrés en català, gràfics sobre el dèficit fiscal i suport a pimes, autònoms i classe mitjana catalana.",
      target: "Votants independentistes i catalanistes de centre i centredreta, autònoms i comerciants.",
      keyIssues2026: [
        "Execució real del 100% de les inversions pressupostades a Catalunya",
        "Competències plenes en immigració, seguretat i gestió d'aeroports i ports",
        "Reducció de la pressió fiscal a pimes, comerç local i treballadors",
        "Reconeixement nacional de Catalunya i oficialitat plena del català a la UE"
      ]
    }
  },
  {
    id: "bildu",
    acronym: "EH BILDU",
    name: "Euskal Herria Bildu",
    ideology: "Esquerra sobiranista i independentista basca",
    axisX: -7.0,
    color: "#95C11F",
    secondaryColor: "#F0F4C3",
    seats2026: 6,
    symbolName: "Tipografia arrodonida verda llima d'estil cooperatiu",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#1D2D27"/>
      <text x="60" y="54" text-anchor="middle" fill="#95C11F" font-family="Arial Black, sans-serif" font-weight="900" font-size="22">EH</text>
      <text x="60" y="82" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="24">BILDU</text>
    </svg>`,
    slogans: [
      { text: "Fent el que diem (Egin)", year: "2023-2026", focus: "Credibilitat social, habitatge i defensa dels serveis públics bascos" }
    ],
    colorPsychology: "El verd llima amb blau fosc/antracita connecta amb la natura del País Basc i transmet dinamisme, comunitat i modernitat.",
    campaignStyle: {
      tone: "Centrat en mesures socials (pensions, habitatge, sanitat) i sobirania basca.",
      socialMedia: "Comunicació molt enfocada a joves bascos, música, cultura basca i problemàtica del lloguer.",
      target: "Joves i votants d'esquerra sobiranista al País Basc i Navarra.",
      keyIssues2026: [
        "Topalls al preu del lloguer i parc públic d'habitatge al País Basc i Navarra",
        "Enfortiment de l'autogovern basc i blindatge dels serveis públics",
        "Millora de les pensions mínimes i drets laborals"
      ]
    }
  },
  {
    id: "pnv",
    acronym: "EAJ-PNV",
    name: "Partido Nacionalista Vasco (Euzko Alderdi Jeltzalea)",
    ideology: "Nacionalisme basc / Centredreta i Democràcia cristiana",
    axisX: 1.5,
    color: "#00833E",
    secondaryColor: "#C8E6C9",
    seats2026: 5,
    symbolName: "Cercle amb els colors de la Ikurriña (vermell, verd i blanc)",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#00833E"/>
      <circle cx="60" cy="46" r="20" fill="#E30613" stroke="#FFFFFF" stroke-width="4"/>
      <text x="60" y="94" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="24">PNV</text>
    </svg>`,
    slogans: [
      { text: "La veu d'Euskadi a Madrid", year: "2023-2026", focus: "Utilitat negociadora, indústria i autogovern basc" }
    ],
    colorPsychology: "El verd fosc i el vermell de la ikurriña representen la tradició institucional basca, solvència i arrelament.",
    campaignStyle: {
      tone: "Moderat, negociador i centrat en aconseguir inversions industrials i competències per a Euskadi.",
      socialMedia: "Missatges de gestió seriosa, indústria verda, ocupació de qualitat i defensa del Concert Econòmic.",
      target: "Classes mitjanes i votants nacionalistes moderats del País Basc.",
      keyIssues2026: [
        "Defensa del Concert Econòmic basc i traspàs de les competències pendents de l'Estatut",
        "Suport a la indústria tecnològica i automoció en la transició verda",
        "Estabilitat institucional i millora d'infraestructures ferroviàries"
      ]
    }
  },
  {
    id: "altres",
    acronym: "BNG / CC / UPN",
    name: "Altres Partits Regionals (BNG, Coalició Canària, UPN)",
    ideology: "Regionalistes i Sobiranistes (Galícia, Canàries, Navarra)",
    axisX: -1.0,
    color: "#5C6BC0",
    secondaryColor: "#E8EAF6",
    seats2026: 10,
    symbolName: "Estrella vermella sobre blau cel (BNG) / Símbols insulars i forals",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#3949AB"/>
      <polygon points="60,24 68,46 92,46 72,60 80,82 60,68 40,82 48,60 28,46 52,46" fill="#FF5252"/>
      <text x="60" y="104" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="16">TERRITORIS</text>
    </svg>`,
    slogans: [
      { text: "Fer valer la nostra terra a Madrid", year: "2026", focus: "Posar l'agenda de Galícia, Canàries o Navarra al centre dels pactes" }
    ],
    colorPsychology: "Colors propis de les banderes autonòmiques (blau cel de Galícia al BNG, groc i blau a Canàries) per generar identificació immediata amb el territori.",
    campaignStyle: {
      tone: "Proximitat territorial: quan el Congrés està molt igualat, fins i tot 1 sol diputat pot decidir una investidura!",
      socialMedia: "Vídeos centrats en trens regionals, descomptes al transport insular, beques i sector pesquer o agrari.",
      target: "Votants que volen una veu pròpia de la seva comunitat al Congrés.",
      keyIssues2026: [
        "Descomptes al transport i millora del tren de rodalies a Galícia i Canàries",
        "Fons específics per a illes i zones amb despoblament ('Espanya Buidada')"
      ]
    }
  }
];

// Joc 1: Caçadors de Campanyes (Eslògans, Logos, Xarxes Socials i Estratègies)
const CAMPAIGN_CHALLENGES = [
  // Mode Eslògans
  {
    id: 1,
    mode: "eslogans",
    badge: "Eslògan de Campanya",
    prompt: "Quin partit utilitza eslògans com «Espanya avança» o «La força del que ens uneix» per defensar l'obra de govern i demanar el vot útil progressista?",
    visualHint: "Colors de campanya: Vermell intens i blanc. Apel·la a l'estabilitat social i beques.",
    options: ["PSOE", "PP", "Sumar", "Vox"],
    correct: 0,
    explanation: "El PSOE, com a partit principal del Govern, utilitza eslògans que transmeten continuïtat positiva ('avançar', 'futur') i apellen al 'vot útil' per evitar un govern de dretes."
  },
  {
    id: 2,
    mode: "eslogans",
    badge: "Eslògan de Campanya",
    prompt: "Quin partit es presenta amb lemes com «És el moment» o «Solucions que funcionen» per projectar una imatge d'alternativa de govern i eficiència econòmica?",
    visualHint: "Colors de campanya: Blau cel i blau marí. Parla de baixar impostos i canvi de cicle.",
    options: ["Vox", "PP", "Junts", "PNV"],
    correct: 1,
    explanation: "Quan un partit gran està a l'oposició, com el PP, els seus eslògans busquen transmetre que 'ha arribat l'hora del canvi' i que tenen un equip preparat per gestionar l'economia."
  },
  {
    id: 3,
    mode: "eslogans",
    badge: "Eslògan de Campanya",
    prompt: "Quin espai polític fa servir l'eslògan «Temps de viure millor: menys jornada, lloguers justos» amb el signe '+' com a símbol?",
    visualHint: "Color magenta. Enfocament en reduir la jornada laboral a 37,5h/35h i regular els lloguers.",
    options: ["PSOE", "ERC", "Sumar", "EH Bildu"],
    correct: 2,
    explanation: "Sumar centra la seva campanya en propostes laborals concretes (treballar menys hores per viure millor), salut mental i regulació del preu de l'habitatge."
  },
  {
    id: 4,
    mode: "eslogans",
    badge: "Eslògan de Campanya",
    prompt: "Quin partit utilitza lemes com «Decideix el que importa» o «Sentit comú i fronteres segures» amb un to de trencament amb la resta de partits?",
    visualHint: "Color verd viu i tipografia en majúscules.",
    options: ["PP", "Vox", "Junts", "PSOE"],
    correct: 1,
    explanation: "Vox utilitza eslògans directes i polaritzadors que contraposen el que ells anomenen 'sentit comú de la gent' davant el 'consens dels polítics tradicionals'."
  },
  {
    id: 5,
    mode: "eslogans",
    badge: "Eslògan Territorial",
    prompt: "Per què partits com ERC, Junts, PNV o BNG utilitzen eslògans com «Defensem Catalunya», «Catalunya primer» o «La veu d'Euskadi a Madrid» a les eleccions generals?",
    visualHint: "Estratègia de campanya territorial al Congrés dels Diputats.",
    options: [
      "Perquè es presenten a totes les províncies d'Espanya",
      "Perquè el seu argument principal és que els seus escons seran decisius al Congrés per aconseguir inversions i competències per al seu territori",
      "Perquè la llei electoral obliga a posar el nom de la comunitat a l'eslògan",
      "Perquè no poden parlar d'economia ni d'habitatge"
    ],
    correct: 1,
    explanation: "En un Congrés molt fragmentat on ni PSOE ni PP solen arribar sols als 176 escons, els partits nacionalistes i regionalistes fan campanya explicant que faran valer cada vot per negociar trens, finançament i competències."
  },

  // Mode Logos i Psicologia del Color
  {
    id: 6,
    mode: "logos",
    badge: "Logotips i Símbols",
    prompt: "Quin és el símbol històric del PSOE que encara apareix en els seus carnets, banderes i actes de partit, juntament amb el cor a les campanyes recents?",
    visualHint: "Un símbol clàssic del socialisme democràtic europeu dissenyat als anys 70.",
    options: [
      "Una gavina volant sobre el mar",
      "Un puny subjectant una rosa vermella",
      "Una estrella de cinc puntes groga",
      "Un arbre de roure"
    ],
    correct: 1,
    explanation: "El puny i la rosa és el símbol històric del socialisme democràtic europeu. En les campanyes recents, el PSOE també hi afegeix un cor ('PSOE / ❤️') per suavitzar la imatge i fer-la més emocional."
  },
  {
    id: 7,
    mode: "logos",
    badge: "Logotips i Símbols",
    prompt: "L'ocell que apareix al logotip del Partido Popular (PP) es coneix popularment com a 'gavina', però l'autor del disseny va explicar que en realitat és un altre ocell marí. Quin?",
    visualHint: "Vola més alt que la gavina i és blanc i blau.",
    options: [
      "Un xarran (charrán)",
      "Un albatros",
      "Una oreneta",
      "Un falcó"
    ],
    correct: 0,
    explanation: "Curiositat de cultura política! Fernando Martínez, qui va dissenyar el logo el 1989, va dibuixar un xarran (charrán) perquè vola alt i lliure, tot i que tothom el coneix popularment com 'la gavina del PP'."
  },
  {
    id: 8,
    mode: "logos",
    badge: "Psicologia del Color",
    prompt: "Si el vostre grup de 4t d'ESO vol crear un partit polític que transmeti ecologisme, sostenibilitat, renovació juvenil i proximitat, quina combinació de colors i tipografia és més coherent en comunicació política?",
    visualHint: "Penseu en com els partits verds i nous moviments juvenils d'Europa dissenyen la seva marca.",
    options: [
      "Negre i daurat amb lletres gòtiques",
      "Verd menta / turquesa o verd viu combinat amb blanc i tipografia arrodonida sense serifa (sans-serif)",
      "Gris fosc i marró amb lletres molt petites",
      "Blau marí fosc amb escuts clàssics"
    ],
    correct: 1,
    explanation: "En disseny polític, les tipografies 'sans-serif' (sense adorns, netes i arrodonides) i els tons verds, turqueses o coralls transmeten modernitat, ecologia i horitzontalitat."
  },
  {
    id: 9,
    mode: "logos",
    badge: "Identitat Visual",
    prompt: "Per què en els últims anys gairebé tots els partits espanyols han simplificat els seus logotips posant les sigles dins d'un cercle o quadrat amb un sol color pla?",
    visualHint: "Penseu on veu la gent de 15 a 30 anys els logotips dels partits avui dia.",
    options: [
      "Per estalviar tinta a les impremtes",
      "Perquè es vegin nítids a la foto de perfil de TikTok, Instagram, X i a la papereta electoral a primera vista",
      "Perquè el Congrés prohibeix dibuixos complexos",
      "Perquè els dissenyadors ja no fan servir ordinadors"
    ],
    correct: 1,
    explanation: "Avui dia la campanya es juga al mòbil! Un logotip ha de ser reconeixible en una icona circular de 40 píxels a TikTok o Instagram i en un segon quan el votant busca la papereta a la cabina electoral."
  },

  // Mode Xarxes Socials i Campanya 2026
  {
    id: 10,
    mode: "xarxes",
    badge: "TikTok de Campanya 2026",
    prompt: "📱 [Vídeo de TikTok - 25 segons]: «Tens 24 anys, cobres 1.300 € i et demanen 1.000 € per una habitació a Madrid o Barcelona. Això no va de treballar més hores, va de posar topalls ja als lloguers abusius i reduir la jornada a 35h! 🏠➕» Quin partit ha publicat aquest vídeo?",
    visualHint: "Subtítols en color magenta i groc, estil jove i urbà.",
    options: ["PP", "Sumar", "Vox", "PNV"],
    correct: 1,
    explanation: "Aquest format de TikTok amb dades d'habitatge i jornada laboral és l'eix central de la comunicació digital de Sumar i els seus aliats per connectar amb el vot jove."
  },
  {
    id: 11,
    mode: "xarxes",
    badge: "Instagram Reel 2026",
    prompt: "📱 [Reel d'Instagram]: Un candidat amb camisa blanca i americana blau marí davant d'un gràfic de la cistella de la compra diu: «Pagaves l'oli i la carn un 35% més barats fa 5 anys. Nosaltres abaixarem l'IRPF i traurem impostos als joves que comprin el seu primer pis.» Quin partit és?",
    visualHint: "Estètica blau corporatiu, missatge centrat en inflació i baixada d'impostos.",
    options: ["PSOE", "ERC", "PP", "EH Bildu"],
    correct: 2,
    explanation: "El PP centra gran part dels seus vídeos de campanya en la inflació (el preu de la cistella de la compra i les hipoteques) i en la promesa de rebaixes fiscals."
  },
  {
    id: 12,
    mode: "xarxes",
    badge: "Estratègia de Campanya",
    prompt: "Durant la campanya del 27-N, què és la «Jornada de Reflexió» (el 26 de novembre, un dia abans de votar) i què està prohibit fer-hi per llei?",
    visualHint: "Llei Orgànica del Règim Electoral General (LOREG).",
    options: [
      "És el dia en què es fan tots els debats televisius finals",
      "És el dissabte previ a les eleccions on està prohibit demanar el vot, fer mítings o publicar enquestes electorals",
      "És el dia en què només poden votar els menors de 18 anys",
      "És el dia en què els partits es reparteixen els escons abans de votar"
    ],
    correct: 1,
    explanation: "A Espanya, el dia abans de les eleccions és la Jornada de Reflexió: cap partit pot fer mítings ni demanar el vot, i des de 5 dies abans tampoc es poden publicar noves enquestes als mitjans."
  }
];

// Circumscripcions predefinides per al Simulador de la Llei d'Hondt
const DHONDT_PRESETS = {
  barcelona: {
    name: "Barcelona (Circumscripció gran - 32 escons)",
    seats: 32,
    threshold: 3,
    blankVotes: 24000,
    explanation: "A les circumscripcions grans com Barcelona (32 escons) o Madrid (37 escons), el repartiment és molt proporcional i hi solen obtenir representació entre 6 i 7 partits diferents.",
    parties: [
      { name: "PSC-PSOE", votes: 790000, color: "#E30613" },
      { name: "Sumar-Comuns", votes: 345000, color: "#E51C55" },
      { name: "PP", votes: 335000, color: "#005999" },
      { name: "ERC", votes: 310000, color: "#FFB232" },
      { name: "Junts", votes: 295000, color: "#00C3B2" },
      { name: "Vox", votes: 190000, color: "#63BE21" },
      { name: "El Nostre Partit (Aula)", votes: 145000, color: "#7C4DFF" }
    ]
  },
  madrid: {
    name: "Madrid (Circumscripció més gran - 37 escons)",
    seats: 37,
    threshold: 3,
    blankVotes: 30000,
    explanation: "Madrid reparteix 37 escons. Com que hi ha molts escons en joc, qualsevol partit que superi el 3% dels vots entra al Congrés amb facilitat.",
    parties: [
      { name: "PP", votes: 1420000, color: "#005999" },
      { name: "PSOE", votes: 990000, color: "#E30613" },
      { name: "Sumar", votes: 540000, color: "#E51C55" },
      { name: "Vox", votes: 495000, color: "#63BE21" },
      { name: "El Nostre Partit (Aula)", votes: 165000, color: "#7C4DFF" }
    ]
  },
  lleida: {
    name: "Lleida (Circumscripció petita - 4 escons)",
    seats: 4,
    threshold: 3,
    blankVotes: 3500,
    explanation: "Fixeu-vos en l'efecte de les províncies petites! Tot i que el llindar legal és el 3%, com que només es reparteixen 4 escons, un partit necessita sovint més d'un 15-18% dels vots per aconseguir 1 sol escó.",
    parties: [
      { name: "PSC-PSOE", votes: 58000, color: "#E30613" },
      { name: "ERC", votes: 38000, color: "#FFB232" },
      { name: "Junts", votes: 36500, color: "#00C3B2" },
      { name: "PP", votes: 26000, color: "#005999" },
      { name: "Sumar", votes: 15000, color: "#E51C55" },
      { name: "Vox", votes: 13500, color: "#63BE21" },
      { name: "El Nostre Partit (Aula)", votes: 22000, color: "#7C4DFF" }
    ]
  },
  soria: {
    name: "Sòria (Circumscripció mínima - 2 escons)",
    seats: 2,
    threshold: 3,
    blankVotes: 900,
    explanation: "Sòria és la província amb menys població i només elegeix 2 diputats. Aquí la Llei d'Hondt concentra gairebé sempre els escons en els 2 partits més votats, provocant el famós debat del 'vot útil'.",
    parties: [
      { name: "PP", votes: 18500, color: "#005999" },
      { name: "PSOE", votes: 16200, color: "#E30613" },
      { name: "Soria ¡Ya! / Aula", votes: 9800, color: "#7C4DFF" },
      { name: "Vox", votes: 4200, color: "#63BE21" },
      { name: "Sumar", votes: 1900, color: "#E51C55" }
    ]
  },
  aula: {
    name: "Simulació d'Aula (Eleccions a l'Institut - 10 escons)",
    seats: 10,
    threshold: 3,
    blankVotes: 12,
    explanation: "Mode especial per simular les eleccions entre els partits creats pels grups de classe! Podeu canviar els noms i posar els vots reals que obtingui cada grup després dels debats.",
    parties: [
      { name: "Grup 1: Futur Jove", votes: 115, color: "#7C4DFF" },
      { name: "Grup 2: Aliança Verda", votes: 92, color: "#00C853" },
      { name: "Grup 3: Impuls Social", votes: 84, color: "#FF5252" },
      { name: "Grup 4: Llibertat i Progrés", votes: 68, color: "#0091EA" },
      { name: "Grup 5: Veu Estudiantil", votes: 49, color: "#FFAB00" }
    ]
  }
};

// Trivial 27-N: Preguntes sobre el sistema polític espanyol i l'actualitat 2026
const TRIVIAL_QUESTIONS = [
  {
    category: "Sistema Electoral",
    question: "Quants diputats i diputades formen el Congrés dels Diputats a Espanya i quants en calen per a la majoria absoluta?",
    options: [
      "300 diputats (majoria absoluta: 151)",
      "350 diputats (majoria absoluta: 176)",
      "400 diputats (majoria absoluta: 201)",
      "135 diputats (majoria absoluta: 68)"
    ],
    correct: 1,
    explanation: "El Congrés dels Diputats té 350 escons (135 és el Parlament de Catalunya). Per tant, la meitat més un (majoria absoluta) són 176 diputats."
  },
  {
    category: "Investidura",
    question: "Què passa si en la primera votació d'investidura el candidat o candidata a la Presidència del Govern no arriba als 176 vots a favor?",
    options: [
      "Es repeteixen les eleccions l'endemà mateix",
      "48 hores després es fa una segona votació on n'hi ha prou amb 'majoria simple' (més vots a favor 'SÍ' que en contra 'NO')",
      "Governa automàticament el partit que hagi quedat segon",
      "Decideix el Senat qui és el president"
    ],
    correct: 1,
    explanation: "En segona votació (48 hores després) només cal majoria simple: més 'SÍ' que 'NO'. Per això les abstencions poden ser decisives per deixar governar un candidat!"
  },
  {
    category: "Llei d'Hondt",
    question: "Quina és la circumscripció electoral a les eleccions generals d'Espanya?",
    options: [
      "Tot l'Estat és una única circumscripció",
      "Les 17 Comunitats Autònomes",
      "Les 50 províncies més Ceuta i Melilla (52 circumscripcions en total)",
      "Els municipis de més de 50.000 habitants"
    ],
    correct: 2,
    explanation: "Espanya es divideix en 52 circumscripcions: les 50 províncies (cadascuna té un mínim de 2 escons garantits més els que li toquin per població) i les ciutats autònomes de Ceuta (1) i Melilla (1)."
  },
  {
    category: "Actualitat 2026",
    question: "Segons les enquestes del CIS i baròmetres juvenils del 2026, quin és el problema principal que impedeix als joves espanyols emancipar-se abans dels 30 anys?",
    options: [
      "La manca d'universitats públiques",
      "L'alt preu del lloguer i de l'habitatge combinat amb salaris juvenils baixos",
      "El preu del transport públic urbà",
      "L'obligatorietat del servei militar"
    ],
    correct: 1,
    explanation: "L'habitatge s'ha convertit el 2026 en el tema estrella de la campanya: l'edat mitjana d'emancipació a Espanya supera els 30 anys, molt per sobre de la mitjana europea."
  },
  {
    category: "Campanya Electoral",
    question: "Quants dies dura oficialment la campanya electoral a Espanya abans del 27 de novembre?",
    options: [
      "7 dies",
      "15 dies",
      "30 dies",
      "2 mesos"
    ],
    correct: 1,
    explanation: "La campanya electoral oficial dura 15 dies i acaba a les 00:00 h de la nit del divendres al dissabte previ a la votació (donant pas a la Jornada de Reflexió)."
  },
  {
    category: "Institucions",
    question: "A Espanya, quan la ciutadania vota el 27 de novembre amb la papereta blanca al Congrés, què està escollint directament?",
    options: [
      "Escull directament la persona que serà President/a del Govern en una urna presidencial",
      "Escull una llista tancada i bloquejada de diputats i diputades per la seva província, i després aquests diputats votaran la investidura del President/a",
      "Escull els ministres i els jutges del Tribunal Suprem",
      "Escull els alcaldes i alcaldesses"
    ],
    correct: 1,
    explanation: "Espanya és una monarquia parlamentària amb sistema parlamentari, no presidencialista: votem diputats i senadors, i és el Congrés dels Diputats qui investeix el President o Presidenta del Govern."
  },
  {
    category: "Drets i Vot",
    question: "Per què alguns partits d'esquerres i associacions juvenils han proposat el 2026 rebaixar l'edat de vot als 16 anys (com ja passa a Àustria, Alemanya en europees o Escòcia)?",
    options: [
      "Perquè als 16 anys ja es pot treballar, es paguen impostos indirectes (IVA) i les decisions sobre clima, educació i habitatge afecten directament el seu futur",
      "Perquè a partir dels 65 anys ja no es pot votar",
      "Perquè la Constitució obliga a canviar l'edat cada 10 anys",
      "Perquè els joves de 16 anys estan obligats a presentar-se com a candidats"
    ],
    correct: 0,
    explanation: "El debat del 'Vot als 16' és ben viu el 2026: qui ho defensa argumenta que a partir dels 16 anys ja es tenen responsabilitats laborals i penals i que rejoveniria les prioritats de la política."
  },
  {
    category: "Comunicació Política",
    question: "Com s'anomena l'assessor d'un partit polític que dissenya l'estratègia de comunicació, prepara els debats televisius i decideix els missatges clau per a les xarxes socials?",
    options: [
      "Síndic de Greuges",
      "Spin doctor (assessor d'imatge i comunicació política)",
      "Interventor de mesa",
      "President de mesa electoral"
    ],
    correct: 1,
    explanation: "Un 'spin doctor' és l'estrateg de comunicació política que crea el relat ('storytelling') de la campanya, entrena el candidat per als debats i gestiona les crisis mediàtiques."
  }
];

// Detector de Fal·làcies, Demagògia i Fake News en Campanya
const DETECTOR_CASES = [
  {
    id: 1,
    speaker: "Candidat A en un debat televisiu",
    quote: "«Si voten el partit rival, demà mateix prohibiran que pugueu menjar carn, us trauran el cotxe i haureu d'anar a peu a treballar sota la pluja!»",
    type: "Fal·làcia de l'Home de Palla i Exageració",
    correctCategory: "falacia",
    explanation: "Exagerar fins a l'absurd la proposta d'un rival (per exemple, convertir una mesura sobre zones de baixes emissions en 'et prohibiran anar en cotxe i menjar carn') és la clàssica fal·làcia de l'Home de Palla per generar por."
  },
  {
    id: 2,
    speaker: "Vídeo viral d'un compte anònim a TikTok",
    quote: "«URGENT 27-N: Si portes una samarreta del color d'un partit polític o el mòbil a la mà quan entres al col·legi electoral, el teu vot queda anul·lat per la Junta Electoral!»",
    type: "Fake News / Bulo Electoral",
    correctCategory: "fakenews",
    explanation: "És un bulo clàssic de cada nit electoral! Pots anar vestit del color que vulguis i portar el mòbil; l'únic prohibit dins del col·legi electoral és portar emblemes o samarretes amb el logotip d'un partit o demanar el vot en veu alta."
  },
  {
    id: 3,
    speaker: "Candidata B al debat sobre habitatge",
    quote: "«Segons les dades de l'Observatori d'Emancipació del Consell de la Joventut d'Espanya, només prop del 16% dels joves d'entre 16 i 29 anys es poden emancipar perquè el lloguer mitjà supera el 80% del salari jove. Proposem construir 50.000 pisos de lloguer públic.»",
    type: "Argument Basat en Dades + Proposta Concreta",
    correctCategory: "dada",
    explanation: "Aquest és el model que heu d'utilitzar al vostre projecte! Cita una font real i verificable (Consell de la Joventut / INE), exposa el problema amb xifres i planteja una proposta concreta."
  },
  {
    id: 4,
    speaker: "Tertulià polític en un míting",
    quote: "«Nosaltres podem abaixar tots els impostos a la meitat i, al mateix temps, duplicar el pressupost de sanitat, educació i pensions demà mateix sense endeutar-nos gens!»",
    type: "Demagògia / Promesa Màgica",
    correctCategory: "falacia",
    explanation: "En economia pública, els serveis públics (escoles, hospitals, beques) es financen amb impostos. Prometre abaixar dràsticament els ingressos i pujar dràsticament la despesa alhora sense explicar d'on surten els diners és demagògia."
  },
  {
    id: 5,
    speaker: "Missatge reenviat per WhatsApp el 25-N",
    quote: "«Atenció! Les paperetes que arriben a casa per correu tenen un codi de barres secret per saber què ha votat cada família. Agafeu només les del col·legi electoral!»",
    type: "Fake News / Desinformació",
    correctCategory: "fakenews",
    explanation: "Completament fals. El vot a Espanya és 100% secret i les paperetes oficials (tant les que arriben a casa com les del col·legi electoral) són idèntiques i no tenen cap identificador personal."
  },
  {
    id: 6,
    speaker: "Candidat C en el bloc d'educació",
    quote: "«Espanya inverteix al voltant del 4,6% del PIB en educació pública, per sota de l'objectiu del 5% recomanat per la UNESCO. El nostre programa proposa destinar 2.500 milions d'euros addicionals a beques i Formació Professional.»",
    type: "Argument Basat en Dades + Proposta Concreta",
    correctCategory: "dada",
    explanation: "Argument rigorós: compara una dada macroeconòmica real (% del PIB destinat a educació) amb un estàndard internacional i proposa una partida pressupostària clara."
  }
];

// Diccionari Polític per a 15 anys
const DICTIONARY_TERMS = [
  {
    term: "Llei d'Hondt",
    category: "Sistema Electoral",
    definition: "Fórmula matemàtica creada per Victor D'Hondt que s'utilitza a Espanya per transformar els vots dels ciutadans en escons (cadires al Congrés). Es divideixen els vots de cada partit entre 1, 2, 3, 4... i s'assignen els escons als quocients més alts.",
    example2026: "A províncies petites (2-4 escons) afavoreix els dos partits més grans; a províncies grans com Barcelona o Madrid és molt proporcional."
  },
  {
    term: "Circumscripció Electoral",
    category: "Sistema Electoral",
    definition: "Territori en què es divideix un país per escollir els seus representants. A les eleccions generals espanyoles, cada província és una circumscripció amb un nombre determinat d'escons segons la seva població.",
    example2026: "Barcelona escull 32 diputats, Tarragona 6, Girona 6 i Lleida 4."
  },
  {
    term: "Investidura",
    category: "Parlament i Govern",
    definition: "Votació al Congrés dels Diputats per escollir el President o Presidenta del Govern. En primera volta cal majoria absoluta (176 de 350); si no s'aconsegueix, 48 hores després n'hi ha prou amb majoria simple (més Sí que No).",
    example2026: "Després del 27-N, el partit que vulgui governar haurà de negociar pactes d'investidura amb altres grups parlamentaris."
  },
  {
    term: "Pacte de Coalició vs. Pacte d'Investidura",
    category: "Parlament i Govern",
    definition: "En un govern de coalició, dos o més partits governen junts i es reparteixen els ministeris (ex. PSOE + Sumar). En un pacte d'investidura, altres partits voten 'SÍ' perquè el president pugui governar a canvi de complir acords, però no entren dins del Govern (ex. ERC, Junts, PNV).",
    example2026: "Quan feu el vostre partit a classe, haureu de decidir si voleu entrar al govern d'un altre grup o només donar-li suport des de fora a canvi d'aprovar les vostres lleis."
  },
  {
    term: "Vot Útil",
    category: "Campanya i Comunicació",
    definition: "Estratègia en què un partit gran demana als votants de partits més petits de la seva mateixa ideologia que el votin a ell per evitar que els vots 'es perdin' per culpa de la Llei d'Hondt.",
    example2026: "El PSOE demana el vot útil a l'esquerra i el PP el demana a la dreta, especialment a les províncies que reparteixen pocs escons."
  },
  {
    term: "Programa Electoral",
    category: "Campanya i Comunicació",
    definition: "Document on cada partit polític explica el seu diagnòstic del país i totes les mesures, lleis i pressupostos que es compromet a aprovar si arriba al Govern.",
    example2026: "Un bon programa electoral d'aula ha de respondre a: Què farem? Com ho pagarem? A qui beneficia?"
  },
  {
    term: "Eix Esquerra - Dreta",
    category: "Ideologies",
    definition: "Forma clàssica d'ubicar els partits polítics. L'esquerra prioritza la igualtat social, serveis públics forts i impostos progressius (qui més té, més paga). La dreta prioritza la llibertat de mercat, la iniciativa privada, impostos més baixos i la tradició.",
    example2026: "Molts partits actuals també es defineixen en altres eixos: ecologisme, feminisme o l'eix territorial (centralisme vs. plurinacionalitat/independència)."
  },
  {
    term: "Moció de Censura",
    category: "Parlament i Govern",
    definition: "Mecanisme pel qual el Congrés pot fer fora un President del Govern enmig del mandat. A Espanya és 'constructiva': qui la presenta ha d'incloure un candidat alternatiu i aconseguir 176 vots a favor.",
    example2026: "Només ha triomfat una vegada en la història recent d'Espanya (l'any 2018)."
  },
  {
    term: "Jornada de Reflexió",
    category: "Sistema Electoral",
    definition: "El dia anterior a les eleccions (el 26 de novembre). Durant aquestes 24 hores està prohibit per llei fer mítings, propaganda electoral o demanar el vot perquè la ciutadania pugui pensar el seu vot amb calma.",
    example2026: "Els candidats solen aprofitar aquest dissabte per fer-se fotos passejant, fent esport o anant a comprar amb la família."
  },
  {
    term: "Populisme i Demagògia",
    category: "Campanya i Comunicació",
    definition: "Estratègia política que ofereix solucions aparentment molt fàcils i immediates a problemes molt complexos, apel·lant a les emocions (por o ràbia) i dividint la societat entre 'el poble pur' i 'un enemic culpable de tot'.",
    example2026: "Als debats escolars es valora l'argumentació rigorosa amb dades, evitant caure en eslògans demagògics sense base econòmica."
  },
  {
    term: "Llindar Electoral (3%)",
    category: "Sistema Electoral",
    definition: "Percentatge mínim de vots vàlids (vots a candidatures + vots en blanc) que necessita un partit en una província per poder entrar al repartiment d'escons de la Llei d'Hondt al Congrés.",
    example2026: "Si un partit treu un 2,8% dels vots en una província, queda automàticament eliminat del repartiment d'aquella província."
  },
  {
    term: "Disciplina de Vot",
    category: "Parlament i Govern",
    definition: "Pràctica habitual als partits espanyols segons la qual tots els diputats d'un mateix grup parlamentari voten exactament el mateix (Sí, No o Abstenció) seguint la indicació de la direcció del seu partit.",
    example2026: "Si un diputat trenca la disciplina de vot, el seu partit el pot sancionar econòmicament."
  }
];
