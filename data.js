// Dades educatives actualitzades (Octubre/Novembre 2026) amb model DUA Multinivell:
// 🌱 Nivell Insegur (Visual, bàsic i guiat)
// 🛡️ Nivell Segur (Autònom i aplicat)
// 🚀 Nivell Agosarat (Anàlisi crítica, coalicions i estratègia avançada)

const DUA_LEVELS = {
  insegur: {
    id: "insegur",
    icon: "🌱",
    name: "Nivell Insegur",
    subtitle: "Pas a pas · Visual i amb pistes d'ajuda",
    description: "Explicacions curtes i visuals, pistes activades i preguntes més accessibles per començar amb bon peu."
  },
  segur: {
    id: "segur",
    icon: "🛡️",
    name: "Nivell Segur",
    subtitle: "Autònom · Aplicació per al projecte",
    description: "Informació completa sobre logotips, eslògans, xarxes socials i funcionament electoral per dissenyar la vostra campanya."
  },
  agosarat: {
    id: "agosarat",
    icon: "🚀",
    name: "Nivell Agosarat",
    subtitle: "Expert · Estratègia, coalicions i anàlisi crítica",
    description: "Reptes avançats sobre com la fragmentació dels partits i les noves coalicions del 2026 afecten la Llei d'Hondt i els pactes."
  }
};

// Partits i Agrupaments actualitzats per a les Eleccions Generals de Novembre de 2026
const PARTIES_DATA = [
  {
    id: "psoe",
    acronym: "PSOE",
    name: "Partido Socialista Obrero Español (i PSC a Catalunya)",
    leader2026: "Pedro Sánchez",
    coalitionStatus2026: "Es presenta amb les seves sigles al Congrés i lidera el pacte «Senat de Progrés» amb altres forces d'esquerra a la Cambra Alta.",
    ideology: "Centreesquerra / Socialdemocràcia",
    axisX: -3.5,
    color: "#E30613",
    secondaryColor: "#FFCDD2",
    seats2026: 118,
    symbolName: "El Puny i la Rosa + les sigles PSOE amb cor vermell",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#E30613"/>
      <text x="60" y="52" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="28">PSOE</text>
      <path d="M44 76 C44 65, 58 63, 60 72 C62 63, 76 65, 76 76 C76 87, 60 95, 60 95 C60 95, 44 87, 44 76 Z" fill="#FFFFFF"/>
      <path d="M58 95 L58 108 M62 95 L65 104" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    duaSummary: {
      insegur: "🔴 Partit actual del Govern (esquerra moderada). Vol defensar les beques, pujar el salari mínim i demana el 'vot útil' per frenar la dreta.",
      segur: "El PSOE busca concentrar el vot progressista aprofitant que els partits a la seva esquerra es presenten dividits. Fa servir el vermell i blanc i missatges d'estabilitat social.",
      agosarat: "Estratègia 2026: Amb la divisió entre Frente Amplio i Podem al Congrés, el PSOE apel·la al vot útil a les províncies mitjanes, mentre teixeix la coalició 'Senat de Progrés' per disputar la majoria absoluta del PP al Senat."
    },
    slogans: [
      { text: "Espanya avança / Sempre endavant", year: "2026", focus: "Optimisme institucional i defensa de la gestió del Govern" },
      { text: "La força del que ens uneix", year: "2026", focus: "Mobilitzar el votant progressista indecís" }
    ],
    colorPsychology: "El vermell intens transmet energia i tradició socialdemòcrata; el blanc aporta imatge institucional i de presidència.",
    campaignStyle: {
      tone: "Institucional i d'alerta davant un possible govern de PP i Vox.",
      socialMedia: "Vídeos curts a TikTok sobre beques, transport jove gratuït i drets socials, combinats amb pòdcasts.",
      keyIssues2026: [
        "Ampliació del parc públic d'habitatge i ajuts al lloguer jove",
        "Transport públic gratuït per a joves i estudiants",
        "Blindatge de pensions públiques i pujada del Salari Mínim (SMI)"
      ]
    }
  },
  {
    id: "pp",
    acronym: "PP",
    name: "Partido Popular (amb acord amb UPN a Navarra)",
    leader2026: "Alberto Núñez Feijóo",
    coalitionStatus2026: "Es presenta amb les seves sigles a tota Espanya i suma acords autonòmics puntuals com amb UPN a Navarra.",
    ideology: "Centredreta / Conservadorisme i Liberalisme",
    axisX: 4.5,
    color: "#005999",
    secondaryColor: "#BBDEFB",
    seats2026: 138,
    symbolName: "El Xarran (popularment 'la Gavina') blau i blanc dins d'un cercle",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#005999"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#FFFFFF" stroke-width="5"/>
      <path d="M32 48 Q48 34 60 46 Q74 32 90 44 Q72 44 60 54 Q48 44 32 48 Z" fill="#FFFFFF"/>
      <text x="60" y="86" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="30">PP</text>
    </svg>`,
    duaSummary: {
      insegur: "🔵 Principal partit de l'oposició (centredreta). Promet abaixar impostos, ordre econòmic i canviar el Govern actual.",
      segur: "El PP utilitza el color blau i el símbol de la gavina/xarran per transmetre serietat econòmica. Demana el vot útil de tota la dreta per governar sense dependre d'altres.",
      agosarat: "Estratègia 2026: Intenta absorbir votants de centre i alhora beneficiar-se de la divisió a la seva dreta entre Vox i SALF (Alvise) a les circumscripcions petites i mitjanes."
    },
    slogans: [
      { text: "Solucions que funcionen / És el moment", year: "2026", focus: "Imatge d'alternativa de govern i gestió econòmica" },
      { text: "Una Espanya que rutlla per a tothom", year: "2026", focus: "Rebaixa d'impostos i unitat constitucional" }
    ],
    colorPsychology: "El blau cel i marí transmeten confiança, ordre, estabilitat i solvència econòmica.",
    campaignStyle: {
      tone: "Crítica directa a la gestió del Govern i als seus pactes amb l'independentisme.",
      socialMedia: "Infografies sobre el preu de la cistella de la compra, impostos i vídeos directes a Instagram i TikTok.",
      keyIssues2026: [
        "Rebaixa de l'IRPF i menys impostos per a joves que compren el primer habitatge",
        "Prova PAU/Selectivitat comuna a totes les comunitats autònomes",
        "Suport a autònoms i pimes i reforç de la seguretat ciutadana"
      ]
    }
  },
  {
    id: "frente-amplio",
    acronym: "FRENTE AMPLIO",
    name: "Frente Amplio (Sumar + IU + Más Madrid + Comuns)",
    leader2026: "Ada Colau",
    coalitionStatus2026: "NOVA AGRUPACIÓ 2026: Coalició de Movimiento Sumar, Izquierda Unida, Más Madrid i Catalunya en Comú (amb Ada Colau de candidata), sense Podem.",
    ideology: "Esquerra transformadora / Ecologisme, Feminisme i Municipalisme",
    axisX: -6.2,
    color: "#E51C55",
    secondaryColor: "#F8BBD0",
    seats2026: 22,
    symbolName: "Bafarada coral/magenta amb el signe '+' i estètica plurinacional",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#E51C55"/>
      <circle cx="60" cy="44" r="21" fill="#FFFFFF"/>
      <path d="M52 44 H68 M60 36 V52" stroke="#E51C55" stroke-width="5" stroke-linecap="round"/>
      <text x="60" y="84" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="17">FRENTE</text>
      <text x="60" y="103" text-anchor="middle" fill="#FFE082" font-family="Arial Black, sans-serif" font-weight="900" font-size="17">AMPLIO</text>
    </svg>`,
    duaSummary: {
      insegur: "➕ Nova aliança d'esquerres (Sumar, Comuns, IU i Más Madrid) liderada per Ada Colau. Prioritza baixar el preu dels lloguers i treballar menys hores (35h).",
      segur: "Després de trencar-se les negociacions amb Podem, aquest espai s'agrupa sota la marca 'Frente Amplio'. Fa servir el magenta/coral i posa l'habitatge i el clima al centre.",
      agosarat: "Estratègia 2026: Competeix directament amb Podem a Madrid i amb la llista ERC-Podem a Catalunya. El seu gran repte és superar el llindar a les províncies mitjanes malgrat la fragmentació de l'esquerra."
    },
    slogans: [
      { text: "Lloguers justos, menys jornada, més vida", year: "2026", focus: "Mesures concretes sobre habitatge i temps de treball" },
      { text: "La força de la gent comuna", year: "2026", focus: "Reivindicació municipalista i drets socials" }
    ],
    colorPsychology: "El magenta i coral trenquen amb el vermell clàssic i s'associen a feminisme, modernitat, diversitat i frescor.",
    campaignStyle: {
      tone: "Propositiu i molt centrat en el dret a l'habitatge, reducció de jornada laboral i salut mental.",
      socialMedia: "Vídeos molt dinàmics a TikTok i Reels denunciant l'especulació immobiliària i els pisos turístics.",
      keyIssues2026: [
        "Topalls estrictes al preu del lloguer i prohibició de pisos turístics en zones tensionades",
        "Reducció de la jornada laboral a 35-37,5 hores sense baixar el sou",
        "Psicòlegs i salut mental gratuïta per a joves a la sanitat pública"
      ]
    }
  },
  {
    id: "podemos",
    acronym: "PODEMOS",
    name: "Podemos (en solitari a l'Estat / aliança amb ERC a Catalunya i Compromís a València)",
    leader2026: "Irene Montero / Ione Belarra",
    coalitionStatus2026: "CANVI CLAU 2026: Es presenta en solitari a la major part d'Espanya (com Madrid), però a Catalunya s'integra a les llistes d'ERC i a València pacta el 'Front Valencià' amb Compromís.",
    ideology: "Esquerra alternativa / Sobirania social i Feminisme",
    axisX: -7.5,
    color: "#6B1F7C",
    secondaryColor: "#E1BEE7",
    seats2026: 5,
    symbolName: "Cercle blanc sobre fons morat intens",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#6B1F7C"/>
      <circle cx="60" cy="46" r="22" fill="none" stroke="#FFFFFF" stroke-width="6"/>
      <text x="60" y="94" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="18">PODEMOS</text>
    </svg>`,
    duaSummary: {
      insegur: "🟣 Partit de l'esquerra morada. El 2026 ja no va amb Sumar: es presenta sol a gran part d'Espanya, però a Catalunya s'ha aliat amb ERC!",
      segur: "Utilitza el color morat (associat al feminisme i al 15-M) i el cercle com a símbol d'assemblea ciutadana. Defensen mesures més contundents que el PSOE.",
      agosarat: "Estratègia 2026: En rebutjar l'acord estatal amb el Frente Amplio, Podem aposta per treure escons propis a Madrid i assegurar presència al Congrés integrant candidats a les llistes d'ERC a Barcelona i amb Compromís a València."
    },
    slogans: [
      { text: "Valentia per transformar", year: "2026", focus: "Diferenciar-se del PSOE i de Sumar amb un discurs més combatiu" },
      { text: "Els drets es conquisten", year: "2026", focus: "Feminisme, pau i control públic de preus bàsics" }
    ],
    colorPsychology: "El morat és el color històric de la lluita feminista i simbolitza trencament amb el bipartidisme clàssic.",
    campaignStyle: {
      tone: "Directe, combatiu i centrat a assenyalar grans bancs, fons voltor i elitisme.",
      socialMedia: " forta presència a X (Twitter), TikTok i Canal Red amb talls d'intervencions molt virals.",
      keyIssues2026: [
        "Intervenció pública del mercat de l'habitatge i prohibició de compra per fons d'inversió",
        "Impost permanent a la banca, grans elèctriques i grans superfícies",
        "Transport gratuït permanent i renda garantida per a joves"
      ]
    }
  },
  {
    id: "vox",
    acronym: "VOX",
    name: "Vox",
    leader2026: "Santiago Abascal",
    coalitionStatus2026: "Es presenta en solitari a totes les circumscripcions, competint pel vot de la dreta dura amb SALF.",
    ideology: "Dreta radical / Nacionalconservadorisme",
    axisX: 8.2,
    color: "#63BE21",
    secondaryColor: "#DCEDC8",
    seats2026: 31,
    symbolName: "Lletres VOX en bloc sobre fons verd viu",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#63BE21"/>
      <text x="60" y="70" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="36">VOX</text>
      <rect x="24" y="82" width="72" height="6" rx="3" fill="#FFFFFF"/>
    </svg>`,
    duaSummary: {
      insegur: "🟢 Partit situat més a la dreta que el PP. Defensa la unitat central d'Espanya, més control de fronteres i menys impostos verds.",
      segur: "Utilitza el color verd cridaner per destacar a les paperetes i xarxes socials. Fa campanya amb missatges molt curts i emocionals sobre seguretat i identitat nacional.",
      agosarat: "Estratègia 2026: Afronta el repte de mantenir els seus diputats davant la crida al 'vot útil' del PP i la irrupció d'Alvise Pérez (SALF), que li disputa vot jove antisistema a les xarxes."
    },
    slogans: [
      { text: "Decideix el que importa", year: "2026", focus: "Plantejar disjuntives directes contra el consens dels altres partits" },
      { text: "Sentit comú i fronteres segures", year: "2026", focus: "Seguretat, camp espanyol i oposició a l'Agenda 2030" }
    ],
    colorPsychology: "El verd viu busca un contrast visual immediat davant el vermell i el blau tradicionals.",
    campaignStyle: {
      tone: "Contundent, nacionalista espanyol i polaritzador.",
      socialMedia: "Molt actiu a TikTok, YouTube i Instagram amb vídeos d'estètica èpica i creadors digitals afins.",
      keyIssues2026: [
        "Centralització de competències (educació i sanitat) a l'Estat central",
        "Enduriment de les lleis d'immigració i seguretat",
        "Derogació de les Zones de Baixes Emissions i impostos ecològics"
      ]
    }
  },
  {
    id: "salf",
    acronym: "SALF",
    name: "Se Acabó La Fiesta (Alvise Pérez)",
    leader2026: "Alvise Pérez",
    coalitionStatus2026: "NOVETAT 2026: Després d'entrar al Parlament Europeu i autonòmics, es presenta a les eleccions generals (Alvise és cap de llista per Madrid).",
    ideology: "Antisistema de dreta / Antipolítica digital",
    axisX: 9.0,
    color: "#5D4037",
    secondaryColor: "#D7CCC8",
    seats2026: 3,
    symbolName: "L'esquirol amb antifaç negre d'estil meme d'internet",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#263238"/>
      <circle cx="60" cy="48" r="24" fill="#FFA000"/>
      <rect x="40" y="40" width="40" height="11" rx="5" fill="#111111"/>
      <circle cx="51" cy="45" r="3" fill="#FFFFFF"/>
      <circle cx="69" cy="45" r="3" fill="#FFFFFF"/>
      <text x="60" y="96" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="22">SALF</text>
    </svg>`,
    duaSummary: {
      insegur: "🐿️ Partit nou que fa servir un esquirol amb antifaç com a logo. No fa mítings clàssics: fa tota la seva campanya per Telegram, TikTok i Instagram contra els polítics tradicionals.",
      segur: "SALF ('Se Acabó La Fiesta') és un exemple de com funcionen els nous moviments digitals: sense estructura de partit clàssica, basat en una comunitat de seguidors a xarxes socials i sorteigs.",
      agosarat: "Impacte electoral 2026: En presentar-se a les generals, divideix el vot de la dreta radical amb Vox. Segons la Llei d'Hondt, aquesta divisió pot fer que a moltes províncies ni SALF arribi a l'escó ni Vox mantingui els seus!"
    },
    slogans: [
      { text: "S'ha acabat la festa dels polítics", year: "2026", focus: "Discurs antipolític contra la corrupció i els partits clàssics" }
    ],
    colorPsychology: "El negre/antracita amb el taronja de l'esquirol busca trencar amb qualsevol imatge institucional i semblar un moviment d'internet.",
    campaignStyle: {
      tone: "Antisistema, basat en la denúncia de la classe política i l'ús de canals de Telegram.",
      socialMedia: "Campanya 100% digital a Telegram, Instagram i TikTok, gairebé sense cartells al carrer ni debats tradicionals.",
      keyIssues2026: [
        "Eliminació d'aforaments polítics i reducció de càrrecs públics",
        "Reformes punitives del Codi Penal i presó permanent",
        "Retallada de subvencions públiques a partits, sindicats i mitjans"
      ]
    }
  },
  {
    id: "erc",
    acronym: "ERC + PODEM",
    name: "Esquerra Republicana de Catalunya (+ Acord amb Podem a Catalunya)",
    leader2026: "Gabriel Rufián (amb Irene Montero en campanya conjunta)",
    coalitionStatus2026: "PACTE INÈDIT 2026: A Catalunya, Podem renuncia a presentar papereta pròpia i integra candidats a les llistes d'ERC per unir el vot d'esquerra sobiranista.",
    ideology: "Esquerra Republicana i Independentisme català + Esquerra social",
    axisX: -5.8,
    color: "#FFB232",
    secondaryColor: "#FFE082",
    seats2026: 8,
    symbolName: "Triangle d'estelada amb les sigles d'Esquerra sobre fons groc",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#FFB232"/>
      <polygon points="22,28 52,54 22,80" fill="#1E1E1E"/>
      <text x="80" y="62" text-anchor="middle" fill="#1E1E1E" font-family="Arial Black, sans-serif" font-weight="900" font-size="24">ERC</text>
      <rect x="20" y="88" width="80" height="16" rx="6" fill="#6B1F7C"/>
      <text x="60" y="100" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="700" font-size="10">+ ACORD PODEM</text>
    </svg>`,
    duaSummary: {
      insegur: "🟡 Partit independentista català d'esquerres. El 2026 ha fet un pacte sorpresa amb Podem a Catalunya per sumar més vots junts.",
      segur: "Amb el groc republicà, ERC defensa el traspàs de Rodalies, el finançament singular per a Catalunya i polítiques socials d'esquerra al Congrés de Madrid.",
      agosarat: "Estratègia 2026: L'aliança de Gabriel Rufián (ERC) i Irene Montero (Podem) a les llistes de Barcelona busca evitar que es perdin vots d'esquerra per la Llei d'Hondt i competir directament amb els Comuns (Frente Amplio)."
    },
    slogans: [
      { text: "Defensem Catalunya i els drets socials", year: "2026", focus: "Sumar el vot catalanista republicà i l'esquerra transformadora" },
      { text: "Rodalies dignes i finançament just", year: "2026", focus: "Fer valer els diputats catalans en qualsevol investidura" }
    ],
    colorPsychology: "El groc càlid connecta amb la senyera, el republicanisme històric i una alta visibilitat als cartells.",
    campaignStyle: {
      tone: "Reivindicatiu a Madrid i socialment d'esquerres.",
      socialMedia: "Intervencions virals al Congrés, vídeos sobre Rodalies, lloguers i defensa del català.",
      keyIssues2026: [
        "Traspàs integral i inversió real en els trens de Rodalies a Catalunya",
        "Finançament singular català (recaptar i gestionar els impostos des de Catalunya)",
        "Defensa del català, habitatge públic i referèndum acordat"
      ]
    }
  },
  {
    id: "junts",
    acronym: "JUNTS",
    name: "Junts per Catalunya",
    leader2026: "Míriam Nogueras / Carles Puigdemont",
    coalitionStatus2026: "Es presenta en solitari a les 4 províncies catalanes reivindicant que els seus vots no estan lligats a cap bloc espanyol.",
    ideology: "Independentisme català transversal / Centredreta-Centre",
    axisX: 2.0,
    color: "#00C3B2",
    secondaryColor: "#B2DFDB",
    seats2026: 7,
    symbolName: "Lletres JUNTS blanques sobre fons verd turquesa",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#00C3B2"/>
      <text x="60" y="68" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="26">JUNTS</text>
      <circle cx="96" cy="40" r="7" fill="#FFFFFF"/>
    </svg>`,
    duaSummary: {
      insegur: "🩵 Partit independentista català (color turquesa). Diu que a Madrid només votarà a favor si abans es compleixen les inversions per a Catalunya.",
      segur: "Junts utilitza el color turquesa per mostrar una imatge moderna i transversal. Defensa les pimes, autònoms, la llengua catalana i la sobirania de Catalunya.",
      agosarat: "Estratègia 2026: Els seus 7 escons solen ser la clau de volta del Congrés. Fan campanya contraposant la seva 'fermesa negociadora' als pactes d'ERC amb l'esquerra espanyola."
    },
    slogans: [
      { text: "Catalunya primer / Fermesa a Madrid", year: "2026", focus: "Reivindicar que no regalen els vots a cap candidat espanyol" }
    ],
    colorPsychology: "El turquesa (menta) s'allunya del vermell/blau tradicional per projectar modernitat i transversalitat catalana.",
    campaignStyle: {
      tone: "Fermesa institucional davant l'Estat espanyol i defensa de la classe mitjana i l'autogovern.",
      socialMedia: "Clips en català des del Congrés i infografies sobre el dèficit d'inversions a Catalunya.",
      keyIssues2026: [
        "Execució del 100% de les inversions de l'Estat a Catalunya i competències d'immigració",
        "Reducció d'impostos i burocràcia a pimes, autònoms i treballadors",
        "Oficialitat plena del català a la Unió Europea i reconeixement nacional"
      ]
    }
  },
  {
    id: "territorials",
    acronym: "BILDU / PNV / BNG",
    name: "Partits Sobiranistes i Nacionalistes (EH Bildu, EAJ-PNV, BNG, Compromís)",
    leader2026: "Representants d'Euskadi, Galícia i País Valencià",
    coalitionStatus2026: "EH Bildu i PNV competeixen al País Basc; el BNG a Galícia; i al País Valencià s'articula el 'Compromís - Front Valencià'.",
    ideology: "Sobiranismes basc, gallec i valencià (d'esquerra i de centredreta)",
    axisX: -2.0,
    color: "#00833E",
    secondaryColor: "#C8E6C9",
    seats2026: 18,
    symbolName: "Verd llima (Bildu), verd i vermell d'ikurriña (PNV) i estrella vermella sobre blau cel (BNG)",
    logoSvg: `<svg viewBox="0 0 120 120" class="party-svg">
      <rect width="120" height="120" rx="22" fill="#00833E"/>
      <circle cx="40" cy="46" r="16" fill="#95C11F"/>
      <circle cx="80" cy="46" r="16" fill="#3949AB"/>
      <text x="60" y="94" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="16">TERRITORIS</text>
    </svg>`,
    duaSummary: {
      insegur: "🟢 Partits que es presenten només a la seva comunitat (País Basc, Galícia, País Valencià) per defensar el seu territori a Madrid.",
      segur: "Tot i presentar-se només en unes poques províncies, sumen prop de 18 diputats que són indispensables per decidir qui és el President del Govern.",
      agosarat: "Per què treuen tants escons amb menys vots totals que un partit estatal petit? Perquè la Llei d'Hondt es calcula província a província, premiant qui concentra molts vots en un territori concret."
    },
    slogans: [
      { text: "Fent el que diem / La veu del nostre país", year: "2026", focus: "Proximitat i utilitat negociadora al Congrés" }
    ],
    colorPsychology: "Utilitzen els colors de les seves banderes i identitats nacionals (verd basc, blau cel gallec, taronja valencià).",
    campaignStyle: {
      tone: "Molta proximitat amb els problemes concrets de la seva comunitat autònoma.",
      socialMedia: "Campanyes en èuscar, gallec i català/valencià molt connectades amb la cultura i joventut local.",
      keyIssues2026: [
        "Blindatge de l'autogovern, el Concert Econòmic basc i el finançament valencià i gallec",
        "Inversions en trens de proximitat, indústria i habitatge públic"
      ]
    }
  }
];

// Joc 1: Caçadors de Campanyes organitzat per nivells DUA (🌱 Insegur, 🛡️ Segur, 🚀 Agosarat)
const CAMPAIGN_CHALLENGES = [
  // 🌱 NIVELL INSEGUR (4 reptes molt visuals, clars i amb 3 opcions)
  {
    id: 1,
    level: "insegur",
    badge: "🌱 Nivell Insegur · Logos i Colors",
    prompt: "Quin partit polític té com a color principal el VERMELL i utilitza una rosa o un cor als seus logotips?",
    visualHint: "Pista: És el partit de Pedro Sánchez i el seu lema és «Espanya avança».",
    options: ["PSOE", "PP (Partido Popular)", "Vox"],
    correct: 0,
    explanation: "Molt bé! El PSOE utilitza el color vermell i el símbol històric del puny i la rosa (o el cor en les campanyes recents)."
  },
  {
    id: 2,
    level: "insegur",
    badge: "🌱 Nivell Insegur · Símbols",
    prompt: "Quin partit de centredreta té com a logotip un ocell blanc i blau (conegut com 'la gavina' o xarran) dins d'un cercle?",
    visualHint: "Pista: El seu color és el blau i el seu líder és Alberto Núñez Feijóo.",
    options: ["Sumar / Frente Amplio", "PP (Partido Popular)", "ERC"],
    correct: 1,
    explanation: "Exacte! El PP utilitza el color blau per transmetre ordre i estabilitat, amb l'ocell marí (xarran/gavina) al seu logotip."
  },
  {
    id: 3,
    level: "insegur",
    badge: "🌱 Nivell Insegur · Nou Logotip 2026",
    prompt: "Quin partit nou que fa campanya gairebé només per internet (Telegram i TikTok) té com a logotip un ESQUIROL amb un antifaç negre?",
    visualHint: "Pista: Es diu 'Se Acabó La Fiesta' i el lidera Alvise Pérez.",
    options: ["SALF (Se Acabó La Fiesta)", "Junts per Catalunya", "PNV"],
    correct: 0,
    explanation: "Molt ben vist! SALF utilitza un esquirol amb antifaç d'estil 'meme' per diferenciar-se dels logotips clàssics dels altres partits."
  },
  {
    id: 4,
    level: "insegur",
    badge: "🌱 Nivell Insegur · Disseny del vostre Partit",
    prompt: "Quan creeu l'eslògan del vostre partit polític a classe, com ha de ser perquè la gent el recordi fàcilment?",
    visualHint: "Pista: Penseu en lemes com «És el moment» o «Espanya avança».",
    options: [
      "Molt llarg, d'un paràgraf sencer de 40 paraules",
      "Curt, directe i amb ritme (entre 3 i 6 paraules)",
      "Escrit en un idioma que ningú entengui"
    ],
    correct: 1,
    explanation: "Genial! Els millors eslògans electorals tenen entre 3 i 6 paraules perquè càpiguen en un cartell i tothom els pugui recordar."
  },

  // 🛡️ NIVELL SEGUR (4 reptes d'aplicació sobre coalicions 2026, TikTok i psicologia del color)
  {
    id: 5,
    level: "segur",
    badge: "🛡️ Nivell Segur · Noves Coalicions 2026",
    prompt: "Com es diu la nova coalició d'esquerres formada el 2026 per Sumar, Izquierda Unida, Más Madrid i els Comuns (amb Ada Colau de candidata)?",
    visualHint: "Pista: Utilitzen el color magenta/coral i el signe '+', però aquest cop Podem no hi és dins.",
    options: ["Frente Amplio", "Unidas Podemos", "Senat Popular", "Aliança Verda"],
    correct: 0,
    explanation: "Correcte! Per a les eleccions de novembre de 2026, Sumar, IU, Más Madrid i els Comuns s'agrupen sota la marca 'Frente Amplio', mentre que Podem es presenta per separat a la majoria de l'Estat."
  },
  {
    id: 6,
    level: "segur",
    badge: "🛡️ Nivell Segur · Pacte a Catalunya 2026",
    prompt: "Quin acord sorprenent han tancat Podemos (Podem) i Esquerra Republicana (ERC) a Catalunya per a aquestes eleccions generals?",
    visualHint: "Pista: Gabriel Rufián (ERC) i Irene Montero (Podem) fan campanya junts.",
    options: [
      "Podem no presenta papereta pròpia a Catalunya i integra candidats seus dins de les llistes d'ERC",
      "S'han unit amb el PP i Vox",
      "Han decidit no presentar-se a les eleccions",
      "Han canviat el seu color pel blau marí"
    ],
    correct: 0,
    explanation: "Molt bé! Per evitar dividir el vot d'esquerra a Catalunya, Podem ha pactat integrar membres seus com a independents dins de la llista d'ERC a Barcelona."
  },
  {
    id: 7,
    level: "segur",
    badge: "🛡️ Nivell Segur · TikTok de Campanya",
    prompt: "📱 [Vídeo de TikTok]: «Tens 24 anys, cobres 1.300 € i et demanen 1.000 € per una habitació. Cal posar topalls al lloguer ja i reduir la jornada a 35 hores!» Quin espai polític fa aquesta campanya?",
    visualHint: "Pista: Estètica jove en color magenta/coral centrada en lloguers i temps de vida.",
    options: ["PP", "Frente Amplio (Sumar / Comuns)", "Vox", "SALF"],
    correct: 1,
    explanation: "Exacte! El preu dels lloguers i la reducció de la jornada laboral a 35-37,5h són l'eix central dels vídeos per a joves del Frente Amplio."
  },
  {
    id: 8,
    level: "segur",
    badge: "🛡️ Nivell Segur · Psicologia del Color",
    prompt: "Per què partits com Junts (turquesa) o Sumar/Frente Amplio (magenta) van triar colors que NO eren el vermell ni el blau clàssics?",
    visualHint: "Pista: Penseu què volien transmetre quan es van crear com a nous espais polítics.",
    options: [
      "Perquè estava prohibit fer servir el vermell o el blau",
      "Per projectar renovació, modernitat i desmarcar-se visualment dels partits tradicionals a la papereta i al mòbil",
      "Perquè són els únics colors que es veuen en blanc i negre",
      "Per error de la impremta"
    ],
    correct: 1,
    explanation: "En comunicació política, triar un color nou (morat, magenta, turquesa o verd viu) serveix per associar la marca a novetat i captar l'atenció en menys d'un segon."
  },

  // 🚀 NIVELL AGOSARAT (4 reptes d'estratègia avançada, fragmentació i Llei d'Hondt)
  {
    id: 9,
    level: "agosarat",
    badge: "🚀 Nivell Agosarat · Estratègia Electoral",
    prompt: "Quin efecte té segons la Llei d'Hondt que un mateix bloc ideològic es divideixi en dos partits rivals (com Frente Amplio vs. Podem a l'esquerra, o Vox vs. SALF a la dreta) a les províncies petites i mitjanes?",
    visualHint: "Pista: Recordeu com funcionen les divisions de vots a les províncies que reparteixen entre 3 i 6 escons.",
    options: [
      "Guanyen el doble d'escons que si anessin junts",
      "Es penalitza la divisió: en repartir-se els vots, els seus quocients baixen i sovint perden escons en favor dels dos partits més grans (PP i PSOE)",
      "La Llei d'Hondt obliga a sumar els seus vots automàticament",
      "No té cap efecte matemàtic"
    ],
    correct: 1,
    explanation: "Clau d'analista polític! A les circumscripcions petites i mitjanes, dividir un espai electoral fa que molts vots quedin per sota del cost d'un escó, beneficiant els partits més votats."
  },
  {
    id: 10,
    level: "agosarat",
    badge: "🚀 Nivell Agosarat · Pacte al Senat 2026",
    prompt: "Tot i competir per separat al Congrés, per què el PSOE, Frente Amplio, Compromís i altres esquerres han pactat anar junts en la llista «Senat de Progrés» per a la Cambra Alta?",
    visualHint: "Pista: Al Senat no s'utilitza la Llei d'Hondt, sinó un sistema majoritari on s'escullen les 3 o 4 persones més votades de cada província.",
    options: [
      "Perquè al Senat guanya qui concentra el vot: si l'esquerra va unida en una sola candidatura, pot superar el PP en moltes províncies",
      "Perquè al Senat només es permet presentar dos partits en total",
      "Perquè el Senat és qui escull el President del Govern",
      "Per estalviar paper a les meses electorals"
    ],
    correct: 0,
    explanation: "Brillant! Com que el Senat té un sistema majoritari, anar dividits fa que el partit més votat de la dreta s'emporti 3 dels 4 senadors de cada província. Unint-se en 'Senat de Progrés', poden capgirar aquest resultat."
  },
  {
    id: 11,
    level: "agosarat",
    badge: "🚀 Nivell Agosarat · Aritmètica Parlamentària",
    prompt: "Per què el BNG (Galícia), el PNV (Euskadi) o Junts (Catalunya) aconsegueixen entre 5 i 7 escons amb uns 300.000 vots, mentre que un partit estatal amb 300.000 vots repartits per tota Espanya pot quedar-se amb 0 o 1 escó?",
    visualHint: "Pista: A Espanya hi ha 52 circumscripcions provincials, no una circumscripció única.",
    options: [
      "Perquè els vots d'aquestes comunitats valen el doble a la llei",
      "Perquè concentren tots els seus vots en 3 o 4 províncies, superant-hi el 10-15% dels vots, mentre que un partit estatal dispersa els vots sense arribar al mínim a gairebé cap província",
      "Perquè es decideix per sorteig",
      "Perquè no se'ls aplica el llindar del 3%"
    ],
    correct: 1,
    explanation: "Exacte! Com que el repartiment es fa província a província, tenir un 12% a 4 províncies dona molts més diputats que tenir un 1,5% a les 50 províncies."
  },
  {
    id: 12,
    level: "agosarat",
    badge: "🚀 Nivell Agosarat · Comunicació Política",
    prompt: "En l'última setmana de campanya, un partit gran difon enquestes dient que el seu bloc perdrà per només 2 escons si la gent vota partits petits. Com s'anomena aquesta tècnica?",
    visualHint: "Pista: Busca que el votant canviï la seva primera opció per una opció amb més possibilitats de governar.",
    options: [
      "Jornada de reflexió anticipada",
      "Mobilització tàctica del 'Vot Útil' mitjançant l'alerta de bloc",
      "Moció de censura preventiva",
      "Disciplina de grup parlamentari"
    ],
    correct: 1,
    explanation: "Molt bé! És l'apel·lació clàssica al 'vot útil' en la recta final de campanya per concentrar el vot indecís o dels partits petits."
  }
];

// Circumscripcions predefinides per al Simulador de la Llei d'Hondt (Actualitzades 2026)
const DHONDT_PRESETS = {
  aula: {
    name: "🏫 Eleccions d'Aula a l'Institut (10 escons · Ideal per començar)",
    seats: 10,
    threshold: 3,
    blankVotes: 10,
    explanation: "🌱 Recomanat per a tots els nivells! Poseu els noms dels partits creats pels grups de la vostra classe i els vots que ha obtingut cadascú per veure quants diputats aconseguiu.",
    parties: [
      { name: "Grup 1: Futur Jove", votes: 115, color: "#7C4DFF" },
      { name: "Grup 2: Aliança Verda", votes: 92, color: "#00C853" },
      { name: "Grup 3: Impuls Social", votes: 84, color: "#FF5252" },
      { name: "Grup 4: Llibertat i Progrés", votes: 68, color: "#0091EA" },
      { name: "Grup 5: Veu Estudiantil", votes: 49, color: "#FFAB00" }
    ]
  },
  barcelona: {
    name: "📍 Barcelona 2026 (32 escons · Amb el nou pacte ERC+Podem vs. Frente Amplio)",
    seats: 32,
    threshold: 3,
    blankVotes: 22000,
    explanation: "🛡️ A Barcelona es reparteixen 32 escons. Fixeu-vos com competeixen el PSC-PSOE, la nova llista conjunta d'ERC+Podem, el Frente Amplio (Comuns), Junts, PP i Vox.",
    parties: [
      { name: "PSC-PSOE", votes: 780000, color: "#E30613" },
      { name: "ERC + Podem", votes: 365000, color: "#FFB232" },
      { name: "PP", votes: 340000, color: "#005999" },
      { name: "Frente Amplio (Comuns)", votes: 295000, color: "#E51C55" },
      { name: "Junts", votes: 290000, color: "#00C3B2" },
      { name: "Vox", votes: 175000, color: "#63BE21" },
      { name: "SALF (Alvise)", votes: 62000, color: "#5D4037" }
    ]
  },
  madrid: {
    name: "📍 Madrid 2026 (37 escons · Competència Frente Amplio vs. Podem i Vox vs. SALF)",
    seats: 37,
    threshold: 3,
    blankVotes: 28000,
    explanation: "🚀 A Madrid (37 escons), com que és una circumscripció molt gran, tant Podem com SALF tenen opcions de superar el 3% dels vots i entrar al Congrés tot i anar per separat.",
    parties: [
      { name: "PP", votes: 1410000, color: "#005999" },
      { name: "PSOE", votes: 985000, color: "#E30613" },
      { name: "Frente Amplio (Sumar/MM)", votes: 440000, color: "#E51C55" },
      { name: "Vox", votes: 410000, color: "#63BE21" },
      { name: "Podemos", votes: 175000, color: "#6B1F7C" },
      { name: "SALF (Alvise)", votes: 155000, color: "#5D4037" }
    ]
  },
  lleida: {
    name: "📍 Lleida 2026 (4 escons · Circumscripció petita: l'efecte del Vot Útil)",
    seats: 4,
    threshold: 3,
    blankVotes: 3200,
    explanation: "🚀 A Lleida només es reparteixen 4 escons! Observeu com aquí els partits amb menys de 25.000 vots es queden amb 0 diputats tot i superar el 3% legal.",
    parties: [
      { name: "PSC-PSOE", votes: 56000, color: "#E30613" },
      { name: "ERC + Podem", votes: 41000, color: "#FFB232" },
      { name: "Junts", votes: 37000, color: "#00C3B2" },
      { name: "PP", votes: 26500, color: "#005999" },
      { name: "Frente Amplio (Comuns)", votes: 12500, color: "#E51C55" },
      { name: "Vox", votes: 12000, color: "#63BE21" }
    ]
  }
};

// Trivial 27-N amb nivells DUA (🌱 Insegur, 🛡️ Segur, 🚀 Agosarat)
const TRIVIAL_QUESTIONS = [
  {
    level: "insegur",
    category: "🌱 Nivell Insegur · El Congrés",
    question: "Quants diputats i diputades hi ha en total al Congrés d'Espanya i quants en calen per tenir la majoria absoluta (la meitat més un)?",
    options: [
      "350 diputats en total (i en calen 176 per a la majoria absoluta)",
      "100 diputats en total (i en calen 51)",
      "500 diputats en total (i en calen 251)"
    ],
    correct: 0,
    explanation: "El Congrés dels Diputats té 350 cadires (escons). La meitat més un són 176 diputats."
  },
  {
    level: "insegur",
    category: "🌱 Nivell Insegur · Campanya",
    question: "Què és la «Jornada de Reflexió» (el dia abans d'anar a votar)?",
    options: [
      "El dia en què els partits fan l'últim gran míting",
      "El dia previ a les eleccions on està prohibit fer campanya o demanar el vot perquè la gent pugui pensar amb calma",
      "El dia en què es recompten els vots"
    ],
    correct: 1,
    explanation: "Durant les 24 hores abans d'obrir els col·legis electorals cap partit no pot demanar el vot ni fer mítings."
  },
  {
    level: "insegur",
    category: "🌱 Nivell Insegur · Temes Joves 2026",
    question: "Segons les enquestes del 2026, quin és el problema principal que preocupa els joves a l'hora de marxar de casa dels pares (emancipar-se)?",
    options: [
      "L'alt preu dels lloguers i dels pisos combinat amb sous baixos",
      "Que està prohibit llogar pisos abans dels 35 anys",
      "Que no hi ha transport públic a cap ciutat"
    ],
    correct: 0,
    explanation: "L'habitatge és el tema central de la campanya 2026: el preu del lloguer absorbeix gran part del sou juvenil."
  },
  {
    level: "segur",
    category: "🛡️ Nivell Segur · Investidura",
    question: "Què passa si en la 1a votació d'investidura el candidat a President/a no arriba als 176 vots a favor?",
    options: [
      "Es repeteixen les eleccions l'endemà",
      "48 hores després es fa una 2a votació on n'hi ha prou amb tenir més vots 'SÍ' que 'NO' (majoria simple)",
      "Governa automàticament el segon partit més votat",
      "Ho decideix el Rei per sorteig"
    ],
    correct: 1,
    explanation: "En la 2a votació (48 hores després) només cal majoria simple: més SÍ que NO. Per això les abstencions poden permetre que algú governi!"
  },
  {
    level: "segur",
    category: "🛡️ Nivell Segur · Sistema Parlamentari",
    question: "Quan una persona de 18 anys o més posa la papereta blanca a l'urna del Congrés, què està votant directament?",
    options: [
      "Vota directament la persona del President/a en una urna presidencial",
      "Vota una llista de diputats i diputades de la seva província, i després aquests diputats votaran qui és el President/a",
      "Vota els jutges del Tribunal Constitucional",
      "Vota els alcaldes del seu municipi"
    ],
    correct: 1,
    explanation: "A Espanya tenim un sistema parlamentari: els ciutadans escollim els 350 diputats per províncies, i el Congrés investeix el President/a."
  },
  {
    level: "segur",
    category: "🛡️ Nivell Segur · Pactes de Govern",
    question: "Quina diferència hi ha entre un «Pacte de Coalició» i un «Pacte d'Investidura»?",
    options: [
      "Són exactament el mateix",
      "En la Coalició dos partits governen junts amb ministres; en el d'Investidura un partit vota 'SÍ' perquè el President surti escollit a canvi d'acords, però sense entrar al Govern",
      "El Pacte d'Investidura està prohibit per la Constitució",
      "En la Coalició només governa un sol partit amb majoria absoluta"
    ],
    correct: 1,
    explanation: "Molt important per al vostre projecte! Podeu pactar entrar al govern amb un altre grup de classe (coalició) o només donar-li els vostres vots a canvi que aprovin les vostres propostes (investidura)."
  },
  {
    level: "agosarat",
    category: "🚀 Nivell Agosarat · Circumscripcions",
    question: "Com es reparteixen els 350 escons del Congrés entre les 50 províncies més Ceuta i Melilla?",
    options: [
      "Totes les províncies tenen exactament 7 escons cadascuna",
      "Ceuta i Melilla tenen 1 escó cadascuna, cada província té un mínim fix de 2 escons garantits (102 en total) i els 248 restants es reparteixen segons la població",
      "Només tenen escons Madrid, Barcelona, València i Sevilla",
      "Es reparteixen segons els quilòmetres quadrats de cada província"
    ],
    correct: 1,
    explanation: "Aquest mínim de 2 escons per província fa que les províncies poc poblades estiguin sobrerepresentades en proporció als seus habitants."
  },
  {
    level: "agosarat",
    category: "🚀 Nivell Agosarat · Estabilitat de Govern",
    question: "Què és una «Moció de Censura Constructiva» a Espanya?",
    options: [
      "Una pregunta que fa l'oposició els dimecres al Congrés",
      "El mecanisme per substituir el President del Govern enmig del mandat: exigeix proposar un candidat alternatiu i reunir majoria absoluta (176 vots a favor)",
      "Quan el President demana dissoldre el Congrés",
      "Una votació per reformar els estatuts d'un partit"
    ],
    correct: 1,
    explanation: "Es diu 'constructiva' perquè no n'hi ha prou amb votar contra el president actual: cal posar-se d'acord en quin nou candidat tindrà almenys 176 vots a favor."
  }
];

// Detector de Fal·làcies, Demagògia i Fake News amb nivells DUA
const DETECTOR_CASES = [
  {
    id: 1,
    level: "insegur",
    speaker: "🌱 Nivell Insegur · Missatge viral de WhatsApp",
    quote: "«ALERTA! Les paperetes que arriben a casa per correu porten un xip i un codi secret per saber a qui ha votat la teva família!»",
    type: "Fake News / Bulo Electoral",
    correctCategory: "fakenews",
    explanation: "És completament fals! El vot a Espanya és 100% secret i les paperetes oficials són idèntiques tant a casa com al col·legi electoral."
  },
  {
    id: 2,
    level: "insegur",
    speaker: "🌱 Nivell Insegur · Candidata en un debat escolar",
    quote: "«Segons el Consell de la Joventut, el lloguer mitjà supera el 80% del sou d'un jove. Per això proposem construir 40.000 pisos de lloguer públic a 350 €/mes.»",
    type: "Argument amb Dades Verificables",
    correctCategory: "dada",
    explanation: "Molt bé! Aquest és el model ideal per al vostre debat: dona una dada d'una font oficial i planteja una proposta concreta."
  },
  {
    id: 3,
    level: "segur",
    speaker: "🛡️ Nivell Segur · Candidat en un míting",
    quote: "«Nosaltres abaixarem tots els impostos a zero i, al mateix temps, triplicarem el pressupost d'hospitals, beques i pensions demà mateix sense endeutar-nos!»",
    type: "Fal·làcia / Demagògia (Promesa Màgica)",
    correctCategory: "falacia",
    explanation: "Els serveis públics (beques, sanitat, escoles) es paguen amb impostos. Prometre eliminar els ingressos i multiplicar la despesa alhora sense dir d'on surten els diners és demagògia."
  },
  {
    id: 4,
    level: "segur",
    speaker: "🛡️ Nivell Segur · Vídeo anònim a TikTok",
    quote: "«Si vas a votar el novembre amb una dessuadora vermella, blava o morada, la mesa electoral t'anul·larà el vot per fer propaganda!»",
    type: "Fake News / Bulo Electoral",
    correctCategory: "fakenews",
    explanation: "És un bulo clàssic! Pots anar vestit de qualsevol color; l'únic prohibit és portar el logotip o les sigles d'un partit o demanar el vot dins del col·legi."
  },
  {
    id: 5,
    level: "agosarat",
    speaker: "🚀 Nivell Agosarat · Debat televisiu",
    quote: "«L'altre partit proposa fer carrils bici a la ciutat; el que volen en realitat és prohibir que les famílies puguin sortir de casa i obligar els avis a anar en patinet sota la pluja!»",
    type: "Fal·làcia de l'Home de Palla",
    correctCategory: "falacia",
    explanation: "Deformar i exagerar fins al ridícul la proposta del rival per atacar-la fàcilment s'anomena 'Fal·làcia de l'Home de Palla'."
  },
  {
    id: 6,
    level: "agosarat",
    speaker: "🚀 Nivell Agosarat · Programa Econòmic",
    quote: "«Espanya inverteix el 4,6% del PIB en educació, per sota de la mitjana del 5% de la UE. Proposem incrementar la partida de beques i FP en 2.000 milions finançats amb l'impost a les grans fortunes.»",
    type: "Argument Rigorós (Dada + Proposta + Finançament)",
    correctCategory: "dada",
    explanation: "Excel·lent! Un argument de nivell Agosarat inclou: 1) Dada real comparada, 2) Proposta concreta i 3) D'on surten els diners per pagar-ho."
  }
];

// Diccionari Polític amb adaptació DUA
const DICTIONARY_TERMS = [
  {
    term: "Llei d'Hondt",
    category: "Sistema Electoral",
    simpleDef: "🌱 La fórmula matemàtica de divisions que serveix per transformar els vots de les urnes en cadires (escons) al Congrés.",
    definition: "Es divideixen els vots de cada partit entre 1, 2, 3, 4... i s'assignen els escons als resultats més alts. A les províncies petites afavoreix els partits més grans.",
    example2026: "Si l'esquerra o la dreta es presenten dividides en molts partits petits en una província de 4 escons, obtenen menys diputats que si van en coalició."
  },
  {
    term: "Coalició Electoral",
    category: "Campanya i Comunicació",
    simpleDef: "🌱 Quan dos o més partits s'ajunten en una sola papereta per sumar més vots a les eleccions.",
    definition: "Acord temporal entre diversos partits per presentar una llista conjunta a les eleccions i no dividir el vot.",
    example2026: "El 2026 tenim el 'Frente Amplio' (Sumar + IU + Comuns + Más Madrid) o l'acord entre ERC i Podem a les llistes de Catalunya."
  },
  {
    term: "Investidura (1a i 2a volta)",
    category: "Parlament i Govern",
    simpleDef: "🌱 La votació dels 350 diputats per escollir qui serà el President o Presidenta del Govern.",
    definition: "En la 1a votació calen 176 vots 'SÍ' (majoria absoluta). Si no s'hi arriba, 48h després es fa una 2a votació on n'hi ha prou amb tenir més 'SÍ' que 'NO' (majoria simple).",
    example2026: "Com que cap partit sol arribar als 176 escons, cal negociar amb altres partits el seu 'SÍ' o la seva 'Abstenció'."
  },
  {
    term: "Vot Útil",
    category: "Campanya i Comunicació",
    simpleDef: "🌱 Votar el partit gran que s'assembla al que penses perquè el teu vot no es perdi.",
    definition: "Argument de campanya on els partits grans demanen als votants de partits petits que els votin a ells per assegurar escons amb la Llei d'Hondt.",
    example2026: "El PSOE demana el vot útil davant Frente Amplio/Podem, i el PP el demana davant Vox i SALF."
  },
  {
    term: "Circumscripció Electoral",
    category: "Sistema Electoral",
    simpleDef: "🌱 Cadascuna de les 50 províncies (més Ceuta i Melilla) on es reparteixen els escons.",
    definition: "Territori en què es divideix l'Estat per escollir diputats. Cada província reparteix un nombre d'escons segons la seva població.",
    example2026: "Madrid reparteix 37 escons, Barcelona 32, Tarragona 6, Girona 6 i Lleida 4."
  },
  {
    term: "Programa Electoral",
    category: "Campanya i Comunicació",
    simpleDef: "🌱 El llista de propostes i lleis que un partit promet aprovar si guanya.",
    definition: "Document on cada partit explica què vol fer en habitatge, educació, economia o clima i com ho pensa finançar.",
    example2026: "Al vostre projecte de 4t d'ESO, el programa ha d'incloure propostes realistes per als joves."
  },
  {
    term: "Eix Esquerra - Dreta",
    category: "Ideologies",
    simpleDef: "🌱 La línia imaginària per situar els partits segons les seves idees econòmiques i socials.",
    definition: "L'esquerra defensa impostos progressius (qui més té, més paga) per finançar serveis públics forts i igualtat social. La dreta defensa abaixar impostos, llibertat d'empresa i iniciativa privada.",
    example2026: "A Espanya també és molt important l'eix territorial (partits centralistes vs. partits catalanistes, bascos o gallecs)."
  },
  {
    term: "Demagògia i Populisme",
    category: "Campanya i Comunicació",
    simpleDef: "🌱 Prometre coses impossibles o culpar un sol grup de tots els problemes per guanyar vots fàcilment.",
    definition: "Estratègia que apel·la a les emocions (por o ràbia) oferint solucions màgiques a problemes complexos.",
    example2026: "Al Detector de Debats d'aquesta web podeu practicar com diferenciar una dada real d'una frase demagògica."
  }
];
