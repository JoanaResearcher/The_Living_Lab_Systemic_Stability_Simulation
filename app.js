const ui = {
  loadingScreen: document.getElementById("loadingScreen"),
  loadingText: document.getElementById("loadingText"),
  eyebrow: document.getElementById("eyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  heroNote: document.getElementById("heroNote"),
  languageLabel: document.getElementById("languageLabel"),
  languageDetail: document.getElementById("languageDetail"),
  englishButton: document.getElementById("englishButton"),
  spanishButton: document.getElementById("spanishButton"),
  glossaryButton: document.getElementById("glossaryButton"),
  characterView: document.getElementById("characterView"),
  adminView: document.getElementById("adminView"),
  selectionKicker: document.getElementById("selectionKicker"),
  selectionTitle: document.getElementById("selectionTitle"),
  selectionIntro: document.getElementById("selectionIntro"),
  characterGrid: document.getElementById("characterGrid"),
  adminKicker: document.getElementById("adminKicker"),
  adminTitle: document.getElementById("adminTitle"),
  adminIntro: document.getElementById("adminIntro"),
  addressingLabel: document.getElementById("addressingLabel"),
  addressingTitle: document.getElementById("addressingTitle"),
  addressingOptions: document.getElementById("addressingOptions"),
  householdLabel: document.getElementById("householdLabel"),
  householdTitle: document.getElementById("householdTitle"),
  householdOptions: document.getElementById("householdOptions"),
  adminBackButton: document.getElementById("adminBackButton"),
  adminContinueButton: document.getElementById("adminContinueButton"),
  statsGrid: document.getElementById("statsGrid"),
  meterLabel: document.getElementById("meterLabel"),
  meterValue: document.getElementById("meterValue"),
  meterFill: document.getElementById("meterFill"),
  meterDescription: document.getElementById("meterDescription"),
  dayLabel: document.getElementById("dayLabel"),
  dayValue: document.getElementById("dayValue"),
  dayDescription: document.getElementById("dayDescription"),
  guideLabel: document.getElementById("guideLabel"),
  guideValue: document.getElementById("guideValue"),
  guideDescription: document.getElementById("guideDescription"),
  simulationView: document.getElementById("simulationView"),
  storyKicker: document.getElementById("storyKicker"),
  storyTitle: document.getElementById("storyTitle"),
  storyIntro: document.getElementById("storyIntro"),
  mariaName: document.getElementById("mariaName"),
  mariaSummary: document.getElementById("mariaSummary"),
  emotionLabel: document.getElementById("emotionLabel"),
  emotionValue: document.getElementById("emotionValue"),
  emotionDetail: document.getElementById("emotionDetail"),
  bandwidthLabel: document.getElementById("bandwidthLabel"),
  bandwidthValue: document.getElementById("bandwidthValue"),
  bandwidthFill: document.getElementById("bandwidthFill"),
  bandwidthDetail: document.getElementById("bandwidthDetail"),
  mariaQuoteLabel: document.getElementById("mariaQuoteLabel"),
  mariaQuote: document.getElementById("mariaQuote"),
  scenarioHeading: document.getElementById("scenarioHeading"),
  scenarioBody: document.getElementById("scenarioBody"),
  scenarioMeta: document.getElementById("scenarioMeta"),
  feedbackPanel: document.getElementById("feedbackPanel"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackBody: document.getElementById("feedbackBody"),
  choiceKicker: document.getElementById("choiceKicker"),
  choiceTitle: document.getElementById("choiceTitle"),
  choiceIntro: document.getElementById("choiceIntro"),
  choiceStack: document.getElementById("choiceStack"),
  backButton: document.getElementById("backButton"),
  nextButton: document.getElementById("nextButton"),
  retryButton: document.getElementById("retryButton"),
  restartButton: document.getElementById("restartButton"),
  historyList: document.getElementById("historyList"),
  resultsPanel: document.getElementById("resultsPanel"),
  resultsKicker: document.getElementById("resultsKicker"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsBody: document.getElementById("resultsBody"),
  doorwayMessage: document.getElementById("doorwayMessage"),
  efficiencyLabel: document.getElementById("efficiencyLabel"),
  efficiencyFill: document.getElementById("efficiencyFill"),
  efficiencyValue: document.getElementById("efficiencyValue"),
  trustLabel: document.getElementById("trustLabel"),
  trustFill: document.getElementById("trustFill"),
  trustValue: document.getElementById("trustValue"),
  timeLabel: document.getElementById("timeLabel"),
  timeFill: document.getElementById("timeFill"),
  timeValue: document.getElementById("timeValue"),
  teachingSummaryLabel: document.getElementById("teachingSummaryLabel"),
  teachingSummaryBody: document.getElementById("teachingSummaryBody"),
  summaryGrid: document.getElementById("summaryGrid"),
  downloadRoadmapButton: document.getElementById("downloadRoadmapButton"),
  researchAbstractButton: document.getElementById("researchAbstractButton"),
  resultsBackButton: document.getElementById("resultsBackButton"),
  resultsRestartButton: document.getElementById("resultsRestartButton"),
  footerText: document.getElementById("footerText"),
  learningBridge: document.getElementById("learningBridge"),
  bridgeKicker: document.getElementById("bridgeKicker"),
  bridgeTitle: document.getElementById("bridgeTitle"),
  bridgeBody: document.getElementById("bridgeBody"),
  bridgeCloseButton: document.getElementById("bridgeCloseButton"),
  glossaryModal: document.getElementById("glossaryModal"),
  glossaryKicker: document.getElementById("glossaryKicker"),
  glossaryTitle: document.getElementById("glossaryTitle"),
  glossaryIntro: document.getElementById("glossaryIntro"),
  glossaryList: document.getElementById("glossaryList"),
  glossaryCloseButton: document.getElementById("glossaryCloseButton")
};

const content = {
  en: {
    eyebrow: "Family Mentor Simulation",
    heroTitle: "The 15-Day RFTA Sprint: A Family Mentor Guide",
    heroSubtitle: "An equity-centered, character-driven housing simulation built for learner-paced reflection.",
    heroNote: "Choose a character first, then guide each day of the sprint with accessible, informed decisions.",
    languageLabel: "Language / Idioma",
    languageDetail: "Switch at any time. All instructions, buttons, biographies, and scenarios update instantly.",
    loadingText: "Loading the Living Lab...",
    glossaryButton: "Glossary",
    glossaryKicker: "Plain Language Glossary",
    glossaryTitle: "Housing Terms in Plain Language",
    glossaryIntro: "These short bilingual definitions support language access and reduce system confusion.",
    glossaryCloseButton: "Close Glossary",
    selectionKicker: "Character Selection",
    selectionTitle: "Choose whose journey you will guide.",
    selectionIntro: "Each profile centers a different systemic hurdle in housing navigation. Select a card to begin.",
    selectButton: "Select / Seleccionar",
    adminKicker: "Administrative Accuracy",
    adminTitle: "Set up official document addressing and household type.",
    adminIntro: "These selections support form accuracy and standard housing-agency recordkeeping.",
    addressingLabel: "Name and Form Addressing",
    addressingTitle: "How should the system address the Head of Household on official documents?",
    householdLabel: "Household Size and Type",
    householdTitle: "Which standard housing-agency household type best fits this case?",
    adminBackButton: "Back",
    adminContinueButton: "Continue",
    addressingOptions: [
      { id: "mr", label: "Mr. / Sr." },
      { id: "ms", label: "Ms. / Sra." },
      { id: "neutral", label: "Neutral / Neutro" }
    ],
    householdOptions: [
      { id: "individual", label: "Individual" },
      { id: "multi-generational", label: "Multi-generational" },
      { id: "joint-head", label: "Joint-Head of Household" }
    ],
    meterLabel: "Progress Meter",
    meterDescription: "Family Stability increases when you choose proactive support.",
    dayLabel: "Roadmap Status",
    dayDescription: "Follow the 15-day sprint one day at a time.",
    guideLabel: "Supportive Actions",
    guideDescription: "Track how many Living Lab responses you have used.",
    storyKicker: "Story Context",
    storyTitle: "Guide the selected case through the 15-day roadmap.",
    storyIntro: "Review the service need, note the emotional and bandwidth impact, and choose the most administratively accurate next step.",
    emotionLabel: "Character Emotion",
    emotionReady: "Ready / Lista",
    emotionReadyDetail: "The selected character is focused and waiting for the next step.",
    emotionOverwhelmed: "Overwhelmed / Abrumada",
    emotionOverwhelmedDetail: "Bandwidth Tax: unclear steps and repeated barriers reduce the energy available for action.",
    emotionEmpowered: "Empowered / Empoderada",
    emotionEmpoweredDetail: "Living Lab Insight: clear support increases confidence, timing, and follow-through.",
    bandwidthLabel: "Bandwidth Meter",
    bandwidthStable: "Stable",
    bandwidthLow: "Low",
    bandwidthReady: "There is enough focus available to move through the next task.",
    bandwidthStandard: "This hard stop drains attention and creates more system friction.",
    bandwidthHpt: "The Living Lab tool stabilizes attention by making the next step clear.",
    mariaQuoteLabel: "Character Voice / Voz del Personaje",
    choiceKicker: "Decision Point",
    choiceTitle: "Select the response pathway.",
    choiceIntro: "Each choice leads to a teaching bridge. Use Back, Next, or Try Again at your own pace.",
    readyFeedbackTitle: "Information",
    readyFeedbackBody: "Review the situation and choose the next action.",
    hardStopTitle: "Administrative Hard Stop",
    hardStopBody: "This standard action increases delay and confusion. Review the learning bridge, then try again if you want a stronger path.",
    successTitle: "Supportive Action Identified",
    successBody: "This HPT-informed decision removes friction and protects housing momentum.",
    backButton: "Back",
    nextButton: "Next",
    finishButton: "View Family Roadmap Summary",
    retryButton: "Try Again",
    restartButton: "Restart Guide",
    retryDisabled: "Try Again becomes available after a standard choice.",
    historyEmpty: "Completed supportive milestones will appear here.",
    bridgeKicker: "Learning Bridge",
    bridgeTitle: "Teaching Moment",
    bridgeCloseButton: "Close Learning Bridge",
    resultsKicker: "Family Roadmap Summary",
    resultsTitle: "Housing pathway completed.",
    resultsBody: "The case moved through the sprint with clearer information, stronger administrative accuracy, and better system alignment.",
    efficiencyLabel: "Administrative Efficiency",
    trustLabel: "Community Trust",
    timeLabel: "Time-to-Housing",
    teachingSummaryLabel: "Teaching Agency Summary",
    downloadRoadmapButton: "Download Your 15-Day Roadmap",
    researchAbstractButton: "View The Living Lab Research Abstract",
    teachingSummaries: {
      maria: "Result: Linguistic Equity achieved. 30% error rate avoided.",
      marcus: "Result: ADA Compliance verified. Veteran housing window secured.",
      li: "Result: Senior Housing accessibility confirmed via plain-language scaffolding."
    },
    doorwayMessage: "You didn't just find a house; you mastered the system. / No solo encontraste una casa; dominaste el sistema.",
    resultsBackButton: "Back",
    resultsRestartButton: "Restart Simulation",
    footer: "Joana Camp | ODU Occupational & Technical Studies | Universal Design for Housing Stability",
    summaryLabel: "Major milestone achieved",
    summaryDetailLabel: "Why this mattered",
    historyEntry: (day, title, choice) => `${day}: ${title} | Chosen pathway: ${choice}`,
    dayValue: (index, total, day) => `Day ${day} of 15 | Scene ${index + 1} of ${total}`,
    guideValue: (count) => `${count} of 3 supportive actions completed`,
    scenarioMeta: (index, total) => `Scene ${index + 1} of ${total}`,
    glossaryTerms: [
      { term: "Inspection Standards", definition: "Safety and quality rules a unit must meet before move-in. In plain language: the home must be safe and ready." },
      { term: "Lease Addendum", definition: "An extra page attached to the lease with program-specific rules. In plain language: it explains special housing requirements." }
    ]
  },
  es: {
    eyebrow: "Simulación de Acompañamiento Familiar",
    heroTitle: "The 15-Day RFTA Sprint: A Family Mentor Guide",
    heroSubtitle: "Una simulación de vivienda centrada en la equidad, los personajes y el aprendizaje al propio ritmo.",
    heroNote: "Primero elija un personaje y luego acompañe cada día del sprint con decisiones accesibles e informadas.",
    languageLabel: "Language / Idioma",
    languageDetail: "Puede cambiar el idioma en cualquier momento. Todas las instrucciones, biografías, botones y escenarios se actualizan al instante.",
    loadingText: "Cargando el Laboratorio Viviente...",
    glossaryButton: "Glosario",
    glossaryKicker: "Glosario en Lenguaje Claro",
    glossaryTitle: "Términos de Vivienda en Lenguaje Claro",
    glossaryIntro: "Estas definiciones bilingües breves apoyan el acceso lingüístico y reducen la confusión del sistema.",
    glossaryCloseButton: "Cerrar Glosario",
    selectionKicker: "Selección de Personaje",
    selectionTitle: "Elija a quién acompañará.",
    selectionIntro: "Cada perfil muestra un obstáculo sistémico distinto en la navegación de vivienda. Seleccione una tarjeta para comenzar.",
    selectButton: "Seleccionar / Select",
    adminKicker: "Precisión Administrativa",
    adminTitle: "Configure el tratamiento oficial y el tipo de hogar.",
    adminIntro: "Estas selecciones apoyan la precisión de los formularios y el registro estándar de las agencias de vivienda.",
    addressingLabel: "Nombre y Tratamiento en Formularios",
    addressingTitle: "¿Cómo debe dirigirse el sistema al Head of Household en los documentos oficiales?",
    householdLabel: "Tamaño y Tipo de Hogar",
    householdTitle: "¿Qué tipo de hogar estándar de agencia de vivienda describe mejor este caso?",
    adminBackButton: "Atrás",
    adminContinueButton: "Continuar",
    addressingOptions: [
      { id: "mr", label: "Mr. / Sr." },
      { id: "ms", label: "Ms. / Sra." },
      { id: "neutral", label: "Neutral / Neutro" }
    ],
    householdOptions: [
      { id: "individual", label: "Individual" },
      { id: "multi-generational", label: "Multi-generational" },
      { id: "joint-head", label: "Joint-Head of Household" }
    ],
    meterLabel: "Medidor de Progreso",
    meterDescription: "La estabilidad familiar aumenta cuando usted elige apoyo proactivo.",
    dayLabel: "Estado de la Ruta",
    dayDescription: "Siga el sprint de 15 días un día a la vez.",
    guideLabel: "Acciones de Apoyo",
    guideDescription: "Siga cuántas respuestas del Living Lab ha utilizado.",
    storyKicker: "Contexto de la Historia",
    storyTitle: "Acompañe el caso seleccionado durante la ruta de 15 días.",
    storyIntro: "Revise la necesidad de servicio, observe el impacto emocional y de ancho de banda, y elija el siguiente paso con mayor precisión administrativa.",
    emotionLabel: "Emoción del Personaje",
    emotionReady: "Ready / Lista",
    emotionReadyDetail: "La persona seleccionada está concentrada y esperando el siguiente paso.",
    emotionOverwhelmed: "Overwhelmed / Abrumada",
    emotionOverwhelmedDetail: "Impuesto de Ancho de Banda: los pasos poco claros y las barreras repetidas reducen la energía disponible para actuar.",
    emotionEmpowered: "Empowered / Empoderada",
    emotionEmpoweredDetail: "Living Lab Insight: el apoyo claro aumenta la confianza, el tiempo y la continuidad.",
    bandwidthLabel: "Medidor de Ancho de Banda",
    bandwidthStable: "Estable",
    bandwidthLow: "Bajo",
    bandwidthReady: "Hay suficiente enfoque disponible para avanzar con la siguiente tarea.",
    bandwidthStandard: "Este punto de bloqueo drena atención y crea más fricción en el sistema.",
    bandwidthHpt: "La herramienta del Living Lab estabiliza la atención porque aclara el siguiente paso.",
    mariaQuoteLabel: "Character Voice / Voz del Personaje",
    choiceKicker: "Punto de Decisión",
    choiceTitle: "Seleccione la ruta de respuesta.",
    choiceIntro: "Cada elección lleva a un puente de aprendizaje. Use Atrás, Siguiente o Volver a Intentar a su propio ritmo.",
    readyFeedbackTitle: "Información",
    readyFeedbackBody: "Revise la situación y elija la siguiente acción.",
    hardStopTitle: "Punto de Bloqueo Administrativo",
    hardStopBody: "Esta acción estándar aumenta el retraso y la confusión. Revise el puente de aprendizaje y luego vuelva a intentarlo si desea una ruta más sólida.",
    successTitle: "Se Identificó una Acción de Apoyo",
    successBody: "Esta decisión informada por HPT elimina fricción y protege el impulso hacia la vivienda.",
    backButton: "Atrás",
    nextButton: "Siguiente",
    finishButton: "Ver Resumen de la Ruta Familiar",
    retryButton: "Volver a Intentar",
    restartButton: "Reiniciar Guía",
    retryDisabled: "Volver a Intentar aparece después de una elección estándar.",
    historyEmpty: "Los hitos de apoyo completados aparecerán aquí.",
    bridgeKicker: "Puente de Aprendizaje",
    bridgeTitle: "Momento de Enseñanza",
    bridgeCloseButton: "Cerrar Puente de Aprendizaje",
    resultsKicker: "Resumen de la Ruta Familiar",
    resultsTitle: "Ruta de vivienda completada.",
    resultsBody: "El caso avanzó por el sprint con información más clara, mayor precisión administrativa y mejor alineación del sistema.",
    efficiencyLabel: "Eficiencia Administrativa",
    trustLabel: "Confianza Comunitaria",
    timeLabel: "Tiempo hasta la Vivienda",
    teachingSummaryLabel: "Resumen de Agencia Formativa",
    downloadRoadmapButton: "Descargar Su Ruta de 15 Días",
    researchAbstractButton: "Ver el Resumen de Investigación del Living Lab",
    teachingSummaries: {
      maria: "Resultado: Se logró equidad lingüística. Se evitó una tasa de error del 30%.",
      marcus: "Resultado: Se verificó el cumplimiento ADA. Se aseguró la ventana de vivienda para veteranos.",
      li: "Resultado: Se confirmó la accesibilidad para vivienda de personas mayores mediante andamiaje en lenguaje claro."
    },
    doorwayMessage: "You didn't just find a house; you mastered the system. / No solo encontraste una casa; dominaste el sistema.",
    resultsBackButton: "Atrás",
    resultsRestartButton: "Reiniciar Simulación",
    footer: "Joana Camp | ODU Occupational & Technical Studies | Universal Design for Housing Stability",
    summaryLabel: "Hito principal alcanzado",
    summaryDetailLabel: "Por qué importó",
    historyEntry: (day, title, choice) => `${day}: ${title} | Ruta elegida: ${choice}`,
    dayValue: (index, total, day) => `Día ${day} de 15 | Escena ${index + 1} de ${total}`,
    guideValue: (count) => `${count} de 3 acciones de apoyo completadas`,
    scenarioMeta: (index, total) => `Escena ${index + 1} de ${total}`,
    glossaryTerms: [
      { term: "Inspection Standards / Estándares de Inspección", definition: "Reglas de seguridad y calidad antes de mudarse. En lenguaje claro: la vivienda debe estar segura y lista." },
      { term: "Lease Addendum / Anexo del Contrato", definition: "Una página adicional al contrato con reglas especiales del programa. En lenguaje claro: explica requisitos específicos de vivienda." }
    ]
  }
};

const characters = {
  maria: {
    icon: "🌎",
    iconTag: { en: "Bilingual access", es: "Acceso bilingüe" },
    names: { en: "Maria", es: "Maria" },
    bio: {
      en: "A head of household navigating voucher timelines, landlord paperwork, and bilingual communication needs.",
      es: "Una jefa de hogar que navega los tiempos del vale, la documentación del propietario y las necesidades de comunicación bilingüe."
    },
    hurdle: {
      en: "Systemic hurdle: bilingual systems. Maria needs Spanish-language clarity so forms and signatures do not become preventable delays.",
      es: "Obstáculo sistémico: sistemas bilingües. Maria necesita claridad en español para que los formularios y las firmas no se conviertan en retrasos evitables."
    },
    scenarios: {
      en: [
        { day: "Day 1", dayNumber: 1, title: "The Voucher", body: "Maria receives her voucher and needs a clear bilingual starting point for the RFTA process.", quote: "\"I want to begin correctly the first time.\" / \"Quiero empezar bien desde la primera vez.\"", reactions: { standard: "\"I feel stuck already.\" / \"Ya me siento estancada.\"", hpt: "\"I feel more confident now.\" / \"Me siento más segura ahora.\"" }, choices: [{ type: "standard", title: "Wait for the landlord to call", subtitle: "Leaves Maria waiting without clarity.", bridge: "Waiting for a callback can cost Maria critical days and increase preventable confusion." }, { type: "hpt", title: "Open the RFTA Validator Job Aid", subtitle: "Clarifies the first steps in plain language.", bridge: "Using the RFTA Validator helps Maria avoid a 15-day delay through systemic proactivity." }], successSummary: "Maria began with a clear bilingual guide and stronger control over the process." },
        { day: "Day 7", dayNumber: 7, title: "The Inspection", body: "The landlord says the sink leaks, and Maria worries inspection failure will cost her family valuable time.", quote: "\"I cannot afford to lose time now.\" / \"No puedo perder tiempo ahora.\"", reactions: { standard: "\"This feels heavier now.\" / \"Esto se siente más pesado ahora.\"", hpt: "\"Now I know how to protect the inspection timeline.\" / \"Ahora sé cómo proteger el tiempo de la inspección.\"" }, choices: [{ type: "standard", title: "Hope it passes inspection", subtitle: "Ignores a known repair problem.", bridge: "A known repair issue becomes an avoidable inspection barrier when nobody acts early." }, { type: "hpt", title: "Use the 15-Day Roadmap to request a pre-repair", subtitle: "Addresses the leak before inspection day.", bridge: "A pre-repair request removes a predictable barrier before it delays the household." }], successSummary: "Maria protected the inspection timeline by addressing the repair before it became a crisis." },
        { day: "Day 14", dayNumber: 14, title: "The Signature", body: "A page is missing a signature, and the landlord is confused by the form language.", quote: "\"I do not want one missing signature to undo everything.\" / \"No quiero que una firma faltante deshaga todo.\"", reactions: { standard: "\"I am worried this will send us backward.\" / \"Me preocupa que esto nos haga retroceder.\"", hpt: "\"I can explain this clearly now.\" / \"Ahora puedo explicar esto con claridad.\"" }, choices: [{ type: "standard", title: "Submit anyway", subtitle: "Risks rejection and another hard stop.", bridge: "Submitting an incomplete packet often creates another round of delay and resubmission." }, { type: "hpt", title: "Apply the Linguistic Bridge to explain the form to the landlord", subtitle: "Uses bilingual explanation to complete the paperwork correctly.", bridge: "The Linguistic Bridge closes the comprehension gap before submission and supports language equity." }], successSummary: "Maria completed the final paperwork with bilingual clarity and full submission readiness." }
      ],
      es: [
        { day: "Día 1", dayNumber: 1, title: "El Vale", body: "Maria recibe su vale y necesita un punto de partida bilingüe y claro para el proceso RFTA.", quote: "\"I want to begin correctly the first time.\" / \"Quiero empezar bien desde la primera vez.\"", reactions: { standard: "\"I feel stuck already.\" / \"Ya me siento estancada.\"", hpt: "\"I feel more confident now.\" / \"Me siento más segura ahora.\"" }, choices: [{ type: "standard", title: "Esperar a que llame el propietario", subtitle: "Deja a Maria esperando sin claridad.", bridge: "Esperar una llamada puede costarle días críticos a Maria y aumentar la confusión evitable." }, { type: "hpt", title: "Abrir la Guía del Validador RFTA", subtitle: "Aclara los primeros pasos en lenguaje claro.", bridge: "Usar el Validador RFTA ayuda a Maria a evitar un retraso de 15 días mediante proactividad sistémica." }], successSummary: "Maria comenzó con una guía bilingüe clara y con mayor control sobre el proceso." },
        { day: "Día 7", dayNumber: 7, title: "La Inspección", body: "El propietario dice que el fregadero tiene una fuga y Maria teme que la inspección le cueste tiempo valioso a su familia.", quote: "\"I cannot afford to lose time now.\" / \"No puedo perder tiempo ahora.\"", reactions: { standard: "\"This feels heavier now.\" / \"Esto se siente más pesado ahora.\"", hpt: "\"Now I know how to protect the inspection timeline.\" / \"Ahora sé cómo proteger el tiempo de la inspección.\"" }, choices: [{ type: "standard", title: "Esperar que pase la inspección", subtitle: "Ignora un problema de reparación conocido.", bridge: "Un problema de reparación conocido se convierte en una barrera evitable cuando nadie actúa temprano." }, { type: "hpt", title: "Usar la Ruta de 15 Días para solicitar una reparación previa", subtitle: "Atiende la fuga antes del día de la inspección.", bridge: "Una solicitud de reparación previa elimina una barrera previsible antes de retrasar al hogar." }], successSummary: "Maria protegió el tiempo de la inspección al atender la reparación antes de que se convirtiera en crisis." },
        { day: "Día 14", dayNumber: 14, title: "La Firma", body: "A una página le falta una firma y el propietario está confundido por el lenguaje del formulario.", quote: "\"I do not want one missing signature to undo everything.\" / \"No quiero que una firma faltante deshaga todo.\"", reactions: { standard: "\"I am worried this will send us backward.\" / \"Me preocupa que esto nos haga retroceder.\"", hpt: "\"I can explain this clearly now.\" / \"Ahora puedo explicar esto con claridad.\"" }, choices: [{ type: "standard", title: "Entregarlo de todos modos", subtitle: "Arriesga rechazo y otro punto de bloqueo.", bridge: "Entregar un paquete incompleto suele crear otra ronda de retrasos y nueva entrega." }, { type: "hpt", title: "Aplicar el Puente Lingüístico para explicar el formulario al propietario", subtitle: "Usa explicación bilingüe para completar correctamente la documentación.", bridge: "El Puente Lingüístico cierra la brecha de comprensión antes de la entrega y apoya la equidad lingüística." }], successSummary: "Maria completó la documentación final con claridad bilingüe y preparación total para la entrega." }
      ]
    }
  },
  marcus: {
    icon: "♿",
    iconTag: { en: "Disability & veteran access", es: "Acceso a discapacidad y veteranos" },
    names: { en: "Marcus", es: "Marcus" },
    bio: {
      en: "A head of household who uses a wheelchair and needs an ADA-compliant unit that supports daily mobility safely.",
      es: "Un jefe de hogar que usa silla de ruedas y necesita una unidad compatible con ADA que apoye la movilidad diaria con seguridad."
    },
    hurdle: {
      en: "Systemic hurdle: physical accessibility (ADA). Marcus needs housing navigation that centers access and barrier-free inspections.",
      es: "Obstáculo sistémico: accesibilidad física (ADA). Marcus necesita una navegación de vivienda que centre el acceso y las inspecciones sin barreras."
    },
    scenarios: {
      en: [
        { day: "Day 1", dayNumber: 1, title: "The Voucher", body: "Marcus receives his voucher and needs to quickly identify units that can support wheelchair access and family routines.", quote: "\"I need a place my family can actually use every day.\" / \"Necesito un lugar que mi familia realmente pueda usar todos los días.\"", reactions: { standard: "\"I am already losing energy trying to figure this out.\" / \"Ya estoy perdiendo energía tratando de entender esto.\"", hpt: "\"I finally have a clearer path.\" / \"Por fin tengo una ruta más clara.\"" }, choices: [{ type: "standard", title: "Wait for listings to sort themselves out", subtitle: "Leaves accessibility needs unclear.", bridge: "Without screening for access needs early, Marcus may waste days on units that cannot work." }, { type: "hpt", title: "Open the RFTA Validator and accessibility checklist", subtitle: "Screens for required access features from the start.", bridge: "An accessibility-first checklist prevents Marcus from losing time on units that fail basic mobility needs." }], successSummary: "Marcus started with a clear strategy for finding units that support wheelchair access and family stability." },
        { day: "Day 7", dayNumber: 7, title: "The Inspection", body: "Inspection day raises ADA concerns: the entry ramp is too steep and the bathroom doorway may be too narrow for wheelchair access.", quote: "\"If the unit is not accessible, my family cannot settle in safely.\" / \"Si la unidad no es accesible, mi familia no puede establecerse con seguridad.\"", reactions: { standard: "\"This feels like another barrier added on top of everything else.\" / \"Esto se siente como otra barrera encima de todo lo demás.\"", hpt: "\"Now I can advocate for the access changes we need.\" / \"Ahora puedo defender los cambios de acceso que necesitamos.\"" }, choices: [{ type: "standard", title: "Hope the ramp and doorway will be accepted", subtitle: "Ignores ADA-related inspection barriers.", bridge: "Hoping ADA issues pass inspection leaves Marcus exposed to a preventable accessibility failure." }, { type: "hpt", title: "Use the roadmap to request ADA corrections before inspection closes", subtitle: "Addresses ramps and door widths before approval is blocked.", bridge: "Proactive ADA correction requests keep access, safety, and veteran housing stability in view." }], successSummary: "Marcus used proactive advocacy to center ADA access before the inspection became a formal barrier." },
        { day: "Day 14", dayNumber: 14, title: "The Signature", body: "A form packet is missing a signature and an accommodation note that confirms the required accessibility features.", quote: "\"I do not want paperwork to erase the access we fought for.\" / \"No quiero que la documentación borre el acceso por el que luchamos.\"", reactions: { standard: "\"I am worried the system will overlook what my family needs.\" / \"Me preocupa que el sistema pase por alto lo que mi familia necesita.\"", hpt: "\"I can explain the accommodation need clearly now.\" / \"Ahora puedo explicar claramente la necesidad de adaptación.\"" }, choices: [{ type: "standard", title: "Submit the packet without the accommodation note", subtitle: "Risks delay and confusion about access needs.", bridge: "When the accommodation record is incomplete, Marcus may face extra delay even after finding the right unit." }, { type: "hpt", title: "Use the Living Lab language bridge to complete the signature and accommodation note", subtitle: "Makes the accessibility requirement visible and complete.", bridge: "Completing the signature and accommodation note protects both the paperwork and the access plan." }], successSummary: "Marcus completed the final packet with the accessibility documentation his household needed." }
      ],
      es: [
        { day: "Día 1", dayNumber: 1, title: "El Vale", body: "Marcus recibe su vale y necesita identificar rápidamente unidades que apoyen el acceso en silla de ruedas y la rutina de su familia.", quote: "\"I need a place my family can actually use every day.\" / \"Necesito un lugar que mi familia realmente pueda usar todos los días.\"", reactions: { standard: "\"I am already losing energy trying to figure this out.\" / \"Ya estoy perdiendo energía tratando de entender esto.\"", hpt: "\"I finally have a clearer path.\" / \"Por fin tengo una ruta más clara.\"" }, choices: [{ type: "standard", title: "Esperar que las opciones se resuelvan solas", subtitle: "Deja poco claras las necesidades de accesibilidad.", bridge: "Sin filtrar necesidades de acceso desde el principio, Marcus puede perder días en unidades que no sirven." }, { type: "hpt", title: "Abrir el Validador RFTA y la lista de accesibilidad", subtitle: "Filtra características necesarias de acceso desde el inicio.", bridge: "Una lista centrada en accesibilidad evita que Marcus pierda tiempo en unidades que no cumplen necesidades básicas de movilidad." }], successSummary: "Marcus comenzó con una estrategia clara para encontrar unidades que apoyen el acceso en silla de ruedas y la estabilidad familiar." },
        { day: "Día 7", dayNumber: 7, title: "La Inspección", body: "El día de la inspección aparecen preocupaciones ADA: la rampa de entrada es muy inclinada y la puerta del baño puede ser demasiado angosta para la silla de ruedas.", quote: "\"If the unit is not accessible, my family cannot settle in safely.\" / \"Si la unidad no es accesible, mi familia no puede establecerse con seguridad.\"", reactions: { standard: "\"This feels like another barrier added on top of everything else.\" / \"Esto se siente como otra barrera encima de todo lo demás.\"", hpt: "\"Now I can advocate for the access changes we need.\" / \"Ahora puedo defender los cambios de acceso que necesitamos.\"" }, choices: [{ type: "standard", title: "Esperar que acepten la rampa y la puerta", subtitle: "Ignora barreras ADA de inspección.", bridge: "Esperar que los problemas ADA pasen la inspección deja a Marcus expuesto a una falla evitable de accesibilidad." }, { type: "hpt", title: "Usar la ruta para solicitar correcciones ADA antes del cierre de la inspección", subtitle: "Atiende rampa y anchos de puerta antes de bloquear la aprobación.", bridge: "Solicitar correcciones ADA de forma proactiva mantiene presentes el acceso, la seguridad y la estabilidad de vivienda para veteranos." }], successSummary: "Marcus usó defensa proactiva para centrar el acceso ADA antes de que la inspección se convirtiera en una barrera formal." },
        { day: "Día 14", dayNumber: 14, title: "La Firma", body: "Al paquete le falta una firma y una nota de adaptación que confirma las características de accesibilidad requeridas.", quote: "\"I do not want paperwork to erase the access we fought for.\" / \"No quiero que la documentación borre el acceso por el que luchamos.\"", reactions: { standard: "\"I am worried the system will overlook what my family needs.\" / \"Me preocupa que el sistema pase por alto lo que mi familia necesita.\"", hpt: "\"I can explain the accommodation need clearly now.\" / \"Ahora puedo explicar claramente la necesidad de adaptación.\"" }, choices: [{ type: "standard", title: "Entregar el paquete sin la nota de adaptación", subtitle: "Arriesga retraso y confusión sobre las necesidades de acceso.", bridge: "Cuando el registro de adaptación está incompleto, Marcus puede enfrentar retrasos adicionales incluso después de encontrar la unidad correcta." }, { type: "hpt", title: "Usar el puente lingüístico del Living Lab para completar la firma y la nota de adaptación", subtitle: "Hace visible y completa la necesidad de accesibilidad.", bridge: "Completar la firma y la nota de adaptación protege tanto la documentación como el plan de acceso." }], successSummary: "Marcus completó el paquete final con la documentación de accesibilidad que su hogar necesitaba." }
      ]
    }
  },
  li: {
    icon: "🈺",
    iconTag: { en: "Language & senior access", es: "Acceso lingüístico y para personas mayores" },
    names: { en: "Li", es: "Li" },
    bio: {
      en: "A senior head of household supporting a multi-generational case and navigating lease language she cannot read alone.",
      es: "Una jefa de hogar mayor que apoya un caso multigeneracional y navega lenguaje de contrato que no puede leer sola."
    },
    hurdle: {
      en: "Systemic hurdle: senior language access. Li needs translation support, senior-friendly pacing, and documentation that reflects her multi-generational household.",
      es: "Obstáculo sistémico: acceso lingüístico para personas mayores. Li necesita apoyo de traducción, un ritmo adecuado para personas mayores y documentación que refleje su hogar multigeneracional."
    },
    scenarios: {
      en: [
        { day: "Day 1", dayNumber: 1, title: "The Voucher", body: "Li receives housing paperwork for her family but needs a translator and patient guidance to understand the first steps.", quote: "\"I want to understand every page before I sign anything.\" / \"Quiero entender cada página antes de firmar algo.\"", reactions: { standard: "\"This feels hard to follow by myself.\" / \"Esto se siente difícil de seguir sola.\"", hpt: "\"I feel steadier when the language is clear.\" / \"Me siento más tranquila cuando el lenguaje es claro.\"" }, choices: [{ type: "standard", title: "Wait and hope someone explains the packet later", subtitle: "Delays language access and understanding.", bridge: "Without translation support early, Li may lose time before she fully understands the process." }, { type: "hpt", title: "Open the RFTA Validator with translation support", subtitle: "Uses plain-language guidance and language access early.", bridge: "Starting with translated, plain-language guidance gives Li a stable entry point into the process." }], successSummary: "Li began with translation support and a calmer, more understandable start to the process." },
        { day: "Day 7", dayNumber: 7, title: "The Inspection", body: "Inspection planning must account for Li's mobility, household routines, and communication pace so the unit works safely for the full family.", quote: "\"I need a home that works for everyone living with me.\" / \"Necesito un hogar que funcione para todas las personas que viven conmigo.\"", reactions: { standard: "\"I worry important details are being missed.\" / \"Me preocupa que se estén perdiendo detalles importantes.\"", hpt: "\"Now the unit feels more possible for my family.\" / \"Ahora la unidad se siente más posible para mi familia.\"" }, choices: [{ type: "standard", title: "Assume the inspection will cover everything", subtitle: "Leaves senior and household needs unnamed.", bridge: "When senior-friendly needs stay unspoken, the household may discover barriers too late." }, { type: "hpt", title: "Use the roadmap to clarify senior-friendly inspection needs", subtitle: "Names safety and usability concerns early.", bridge: "Clarifying senior-friendly needs before the inspection protects both safety and understanding." }], successSummary: "Li used the roadmap to make the unit safer and more usable for her full household." },
        { day: "Day 14", dayNumber: 14, title: "The Signature", body: "The final packet needs multi-generational housing documentation, but the lease language is difficult and one household page is incomplete.", quote: "\"I need the documents to reflect all of us correctly.\" / \"Necesito que los documentos nos reflejen correctamente a todas las personas.\"", reactions: { standard: "\"I am afraid the paperwork will leave someone out.\" / \"Temo que la documentación deje a alguien fuera.\"", hpt: "\"I can see how the family information fits together now.\" / \"Ahora puedo ver cómo encaja la información de la familia.\"" }, choices: [{ type: "standard", title: "Submit the packet with the missing household page", subtitle: "Risks delay in multi-generational documentation.", bridge: "Missing household documentation can delay approval when the family structure is not fully visible." }, { type: "hpt", title: "Use the Linguistic Bridge to complete the multi-generational housing documents", subtitle: "Clarifies who lives in the home and why the forms matter.", bridge: "The Linguistic Bridge helps Li complete the household record accurately and with dignity." }], successSummary: "Li completed the multi-generational documentation with better language access and family clarity." }
      ],
      es: [
        { day: "Día 1", dayNumber: 1, title: "El Vale", body: "Li recibe documentación de vivienda para su familia pero necesita traducción y guía paciente para entender los primeros pasos.", quote: "\"I want to understand every page before I sign anything.\" / \"Quiero entender cada página antes de firmar algo.\"", reactions: { standard: "\"This feels hard to follow by myself.\" / \"Esto se siente difícil de seguir sola.\"", hpt: "\"I feel steadier when the language is clear.\" / \"Me siento más tranquila cuando el lenguaje es claro.\"" }, choices: [{ type: "standard", title: "Esperar y confiar en que alguien explique el paquete después", subtitle: "Retrasa el acceso lingüístico y la comprensión.", bridge: "Sin apoyo de traducción desde el inicio, Li puede perder tiempo antes de comprender completamente el proceso." }, { type: "hpt", title: "Abrir el Validador RFTA con apoyo de traducción", subtitle: "Usa orientación en lenguaje claro y acceso lingüístico temprano.", bridge: "Comenzar con orientación traducida y clara le da a Li una entrada más estable al proceso." }], successSummary: "Li comenzó con apoyo de traducción y con un inicio más tranquilo y comprensible." },
        { day: "Día 7", dayNumber: 7, title: "La Inspección", body: "La planificación de la inspección debe considerar la movilidad de Li, la rutina del hogar y su ritmo de comunicación para que la unidad funcione con seguridad para toda la familia.", quote: "\"I need a home that works for everyone living with me.\" / \"Necesito un hogar que funcione para todas las personas que viven conmigo.\"", reactions: { standard: "\"I worry important details are being missed.\" / \"Me preocupa que se estén perdiendo detalles importantes.\"", hpt: "\"Now the unit feels more possible for my family.\" / \"Ahora la unidad se siente más posible para mi familia.\"" }, choices: [{ type: "standard", title: "Asumir que la inspección cubrirá todo", subtitle: "Deja sin nombrar necesidades de personas mayores y del hogar.", bridge: "Cuando las necesidades de una persona mayor no se nombran, el hogar puede descubrir barreras demasiado tarde." }, { type: "hpt", title: "Usar la ruta para aclarar necesidades de inspección aptas para personas mayores", subtitle: "Nombra temprano preocupaciones de seguridad y uso.", bridge: "Aclarar necesidades antes de la inspección protege la seguridad y la comprensión." }], successSummary: "Li usó la ruta para hacer la unidad más segura y útil para todo su hogar." },
        { day: "Día 14", dayNumber: 14, title: "La Firma", body: "El paquete final necesita documentación de vivienda multigeneracional, pero el lenguaje del contrato es difícil y una página del hogar está incompleta.", quote: "\"I need the documents to reflect all of us correctly.\" / \"Necesito que los documentos nos reflejen correctamente a todas las personas.\"", reactions: { standard: "\"I am afraid the paperwork will leave someone out.\" / \"Temo que la documentación deje a alguien fuera.\"", hpt: "\"I can see how the family information fits together now.\" / \"Ahora puedo ver cómo encaja la información de la familia.\"" }, choices: [{ type: "standard", title: "Entregar el paquete con la página del hogar incompleta", subtitle: "Arriesga retraso en la documentación multigeneracional.", bridge: "La documentación faltante del hogar puede retrasar la aprobación cuando la estructura familiar no está completamente visible." }, { type: "hpt", title: "Usar el Puente Lingüístico para completar los documentos de vivienda multigeneracional", subtitle: "Aclara quién vive en el hogar y por qué importan los formularios.", bridge: "El Puente Lingüístico ayuda a Li a completar el registro del hogar con precisión y dignidad." }], successSummary: "Li completó la documentación multigeneracional con mejor acceso lingüístico y mayor claridad familiar." }
      ]
    }
  }
};

const state = {
  language: "en",
  selectedCharacter: null,
  formAddressing: null,
  householdType: null,
  scenarioIndex: 0,
  choicesByScenario: [],
  bridgeScenarioIndex: null,
  glossaryOpen: false
};

function getCopy() {
  return content[state.language];
}

function getCharacter() {
  return state.selectedCharacter ? characters[state.selectedCharacter] : null;
}

function getScenarios() {
  const character = getCharacter();
  return character ? character.scenarios[state.language] : [];
}

function getScenario(index = state.scenarioIndex) {
  return getScenarios()[index];
}

function getChoiceRecord(index = state.scenarioIndex) {
  return state.choicesByScenario[index] || null;
}

function getCompletedCount() {
  return state.choicesByScenario.filter((entry) => entry && entry.type === "hpt").length;
}

function getStability() {
  const count = getCompletedCount();
  return count === 0 ? 0 : count === 1 ? 34 : count === 2 ? 67 : 100;
}

function getMetricValues() {
  const hptCount = getCompletedCount();
  const efficiency = Math.min(100, 40 + hptCount * 20);
  const trust = Math.min(100, 35 + hptCount * 22);
  const timeToHousing = hptCount === 3 ? 100 : hptCount === 2 ? 73 : hptCount === 1 ? 48 : 22;
  return { efficiency, trust, timeToHousing };
}

function getTeachingSummary() {
  const copy = getCopy();
  return copy.teachingSummaries[state.selectedCharacter] || "";
}

function getEmotionState(copy) {
  const record = getChoiceRecord();
  if (!record) {
    return { title: copy.emotionReady, detail: copy.emotionReadyDetail };
  }
  return record.type === "standard"
    ? { title: copy.emotionOverwhelmed, detail: copy.emotionOverwhelmedDetail }
    : { title: copy.emotionEmpowered, detail: copy.emotionEmpoweredDetail };
}

function getBandwidthState(copy) {
  const record = getChoiceRecord();
  if (!record) {
    return { value: 78, label: copy.bandwidthStable, detail: copy.bandwidthReady };
  }
  return record.type === "standard"
    ? { value: 34, label: copy.bandwidthLow, detail: copy.bandwidthStandard }
    : { value: 88, label: copy.bandwidthStable, detail: copy.bandwidthHpt };
}

function getOptionLabel(options, id) {
  const match = options.find((option) => option.id === id);
  return match ? match.label : "";
}

function getAdminCaseLabel(copy) {
  if (!state.formAddressing || !state.householdType) {
    return "";
  }
  const addressing = getOptionLabel(copy.addressingOptions, state.formAddressing);
  const household = getOptionLabel(copy.householdOptions, state.householdType);
  return `(${addressing} | ${household})`;
}

function openLearningBridge() {
  ui.learningBridge.classList.add("is-visible");
  ui.learningBridge.setAttribute("aria-hidden", "false");
}

function closeLearningBridge() {
  ui.learningBridge.classList.remove("is-visible");
  ui.learningBridge.setAttribute("aria-hidden", "true");
}

function openGlossary() {
  state.glossaryOpen = true;
  ui.glossaryModal.classList.add("is-visible");
  ui.glossaryModal.setAttribute("aria-hidden", "false");
}

function closeGlossary() {
  state.glossaryOpen = false;
  ui.glossaryModal.classList.remove("is-visible");
  ui.glossaryModal.setAttribute("aria-hidden", "true");
}

function selectCharacter(id) {
  state.selectedCharacter = id;
  state.formAddressing = null;
  state.householdType = null;
  state.scenarioIndex = 0;
  state.choicesByScenario = [];
  state.bridgeScenarioIndex = null;
  ui.characterView.hidden = true;
  ui.adminView.hidden = false;
  ui.statsGrid.hidden = true;
  ui.simulationView.hidden = true;
  ui.resultsPanel.classList.remove("is-visible");
  render();
}

function resetSimulation() {
  state.selectedCharacter = null;
  state.formAddressing = null;
  state.householdType = null;
  state.scenarioIndex = 0;
  state.choicesByScenario = [];
  state.bridgeScenarioIndex = null;
  closeLearningBridge();
  closeGlossary();
  ui.characterView.hidden = false;
  ui.adminView.hidden = true;
  ui.statsGrid.hidden = true;
  ui.simulationView.hidden = true;
  ui.resultsPanel.classList.remove("is-visible");
  render();
}

function selectAddressing(id) {
  state.formAddressing = id;
  render();
}

function selectHouseholdType(id) {
  state.householdType = id;
  render();
}

function goToCaseSetupBack() {
  state.selectedCharacter = null;
  state.formAddressing = null;
  state.householdType = null;
  ui.adminView.hidden = true;
  ui.characterView.hidden = false;
  render();
}

function continueFromAdminSetup() {
  if (!state.formAddressing || !state.householdType) {
    return;
  }
  ui.adminView.hidden = true;
  ui.statsGrid.hidden = false;
  ui.simulationView.hidden = false;
  render();
}

function selectChoice(type) {
  state.choicesByScenario[state.scenarioIndex] = { type };
  state.bridgeScenarioIndex = state.scenarioIndex;
  render();
  openLearningBridge();
}

function tryAgain() {
  const record = getChoiceRecord();
  if (!record || record.type !== "standard") {
    return;
  }
  state.choicesByScenario[state.scenarioIndex] = null;
  state.bridgeScenarioIndex = null;
  closeLearningBridge();
  render();
}

function goBack() {
  if (ui.resultsPanel.classList.contains("is-visible")) {
    ui.resultsPanel.classList.remove("is-visible");
    ui.simulationView.hidden = false;
    state.scenarioIndex = getScenarios().length - 1;
    render();
    return;
  }
  if (!state.selectedCharacter || state.scenarioIndex === 0) {
    return;
  }
  state.scenarioIndex -= 1;
  closeLearningBridge();
  render();
}

function goNext() {
  const record = getChoiceRecord();
  if (!record || record.type !== "hpt") {
    return;
  }
  closeLearningBridge();
  if (state.scenarioIndex === getScenarios().length - 1) {
    ui.simulationView.hidden = true;
    ui.resultsPanel.classList.add("is-visible");
    render();
    return;
  }
  state.scenarioIndex += 1;
  render();
}

function renderHeader(copy) {
  ui.eyebrow.textContent = copy.eyebrow;
  ui.heroTitle.textContent = copy.heroTitle;
  ui.heroSubtitle.textContent = copy.heroSubtitle;
  ui.heroNote.textContent = copy.heroNote;
  ui.loadingText.textContent = `${copy.loadingText} / ${state.language === "en" ? content.es.loadingText : content.en.loadingText}`;
  ui.languageLabel.textContent = copy.languageLabel;
  ui.languageDetail.textContent = copy.languageDetail;
  ui.glossaryButton.textContent = copy.glossaryButton;
  ui.englishButton.classList.toggle("is-active", state.language === "en");
  ui.spanishButton.classList.toggle("is-active", state.language === "es");
  ui.englishButton.setAttribute("aria-pressed", String(state.language === "en"));
  ui.spanishButton.setAttribute("aria-pressed", String(state.language === "es"));
}

function renderCharacterSelection(copy) {
  ui.selectionKicker.textContent = copy.selectionKicker;
  ui.selectionTitle.textContent = copy.selectionTitle;
  ui.selectionIntro.textContent = copy.selectionIntro;

  ui.characterGrid.replaceChildren(
    ...Object.entries(characters).map(([id, character]) => {
      const card = document.createElement("article");
      card.className = "character-card";
      card.innerHTML =
        `<div class="character-icon" role="img" aria-label="${character.names[state.language]}: ${character.iconTag[state.language]}">${character.icon}</div>` +
        `<h3>${character.names[state.language]}</h3>` +
        `<div class="character-tag">${character.iconTag[state.language]}</div>` +
        `<p>${character.bio[state.language]}</p>` +
        `<p>${character.hurdle[state.language]}</p>`;
      const button = document.createElement("button");
      button.className = "nav-button is-primary select-button";
      button.type = "button";
      button.textContent = copy.selectButton;
      button.addEventListener("click", () => selectCharacter(id));
      card.appendChild(button);
      return card;
    })
  );
}

function renderAdminSetup(copy) {
  ui.adminKicker.textContent = copy.adminKicker;
  ui.adminTitle.textContent = copy.adminTitle;
  ui.adminIntro.textContent = copy.adminIntro;
  ui.addressingLabel.textContent = copy.addressingLabel;
  ui.addressingTitle.textContent = copy.addressingTitle;
  ui.householdLabel.textContent = copy.householdLabel;
  ui.householdTitle.textContent = copy.householdTitle;
  ui.adminBackButton.textContent = copy.adminBackButton;
  ui.adminContinueButton.textContent = copy.adminContinueButton;
  ui.adminContinueButton.disabled = !state.formAddressing || !state.householdType;

  ui.addressingOptions.replaceChildren(
    ...copy.addressingOptions.map((option) => {
      const button = document.createElement("button");
      button.className = `nav-button ${state.formAddressing === option.id ? "is-primary" : ""}`;
      button.type = "button";
      button.setAttribute("aria-pressed", String(state.formAddressing === option.id));
      button.textContent = option.label;
      button.addEventListener("click", () => selectAddressing(option.id));
      return button;
    })
  );

  ui.householdOptions.replaceChildren(
    ...copy.householdOptions.map((option) => {
      const button = document.createElement("button");
      button.className = `nav-button ${state.householdType === option.id ? "is-primary" : ""}`;
      button.type = "button";
      button.setAttribute("aria-pressed", String(state.householdType === option.id));
      button.textContent = option.label;
      button.addEventListener("click", () => selectHouseholdType(option.id));
      return button;
    })
  );
}

function renderStats(copy) {
  if (!state.selectedCharacter) {
    return;
  }
  const scenario = getScenario();
  const stability = getStability();
  ui.meterLabel.textContent = copy.meterLabel;
  ui.meterValue.textContent = `${stability}%`;
  ui.meterDescription.textContent = copy.meterDescription;
  ui.meterFill.style.width = `${stability}%`;
  ui.dayLabel.textContent = copy.dayLabel;
  ui.dayValue.textContent = copy.dayValue(state.scenarioIndex, getScenarios().length, scenario.dayNumber);
  ui.dayDescription.textContent = copy.dayDescription;
  ui.guideLabel.textContent = copy.guideLabel;
  ui.guideValue.textContent = copy.guideValue(getCompletedCount());
  ui.guideDescription.textContent = copy.guideDescription;
}

function renderScenario(copy) {
  if (!state.selectedCharacter) {
    return;
  }
  const scenario = getScenario();
  const character = getCharacter();
  const emotion = getEmotionState(copy);
  const bandwidth = getBandwidthState(copy);
  const record = getChoiceRecord();

  ui.storyKicker.textContent = copy.storyKicker;
  ui.storyTitle.textContent = `${copy.storyTitle} ${getAdminCaseLabel(copy)}`;
  ui.storyIntro.textContent = copy.storyIntro;
  ui.mariaName.textContent = character.names[state.language];
  ui.mariaSummary.textContent = character.bio[state.language];
  ui.emotionLabel.textContent = copy.emotionLabel;
  ui.emotionValue.textContent = emotion.title;
  ui.emotionDetail.textContent = emotion.detail;
  ui.bandwidthLabel.textContent = copy.bandwidthLabel;
  ui.bandwidthValue.textContent = `${bandwidth.value}% | ${bandwidth.label}`;
  ui.bandwidthFill.style.width = `${bandwidth.value}%`;
  ui.bandwidthDetail.textContent = bandwidth.detail;
  ui.mariaQuoteLabel.textContent = copy.mariaQuoteLabel;
  ui.mariaQuote.textContent = record ? scenario.reactions[record.type] : scenario.quote;
  ui.scenarioHeading.textContent = `${scenario.day}: ${scenario.title}`;
  ui.scenarioBody.textContent = scenario.body;
  ui.scenarioMeta.textContent = copy.scenarioMeta(state.scenarioIndex, getScenarios().length);
}

function renderFeedback(copy) {
  const record = getChoiceRecord();
  ui.feedbackPanel.className = "feedback";
  if (!record) {
    ui.feedbackTitle.innerHTML = `<span class="feedback-icon" aria-hidden="true">i</span>${copy.readyFeedbackTitle}`;
    ui.feedbackBody.textContent = copy.readyFeedbackBody;
    return;
  }
  if (record.type === "standard") {
    ui.feedbackPanel.classList.add("is-warning");
    ui.feedbackTitle.innerHTML = `<span class="feedback-icon" aria-hidden="true">&#9888;</span>${copy.hardStopTitle}`;
    ui.feedbackBody.textContent = copy.hardStopBody;
    return;
  }
  ui.feedbackPanel.classList.add("is-success");
  ui.feedbackTitle.innerHTML = `<span class="feedback-icon" aria-hidden="true">&#10003;</span>${copy.successTitle}`;
  ui.feedbackBody.textContent = copy.successBody;
}

function renderChoices(copy) {
  if (!state.selectedCharacter) {
    return;
  }
  const scenario = getScenario();
  const record = getChoiceRecord();
  ui.choiceKicker.textContent = copy.choiceKicker;
  ui.choiceTitle.textContent = copy.choiceTitle;
  ui.choiceIntro.textContent = copy.choiceIntro;
  ui.choiceStack.replaceChildren(
    ...scenario.choices.map((choice) => {
      const button = document.createElement("button");
      button.className = `choice-button ${choice.type === "hpt" ? "is-primary" : ""}`;
      button.type = "button";
      button.setAttribute("aria-pressed", String(record && record.type === choice.type));
      button.innerHTML = `<strong>${choice.title}</strong><span>${choice.subtitle}</span>`;
      button.addEventListener("click", () => selectChoice(choice.type));
      return button;
    })
  );
  ui.backButton.textContent = copy.backButton;
  ui.nextButton.textContent = state.scenarioIndex === getScenarios().length - 1 ? copy.finishButton : copy.nextButton;
  ui.retryButton.textContent = copy.retryButton;
  ui.restartButton.textContent = copy.restartButton;
  ui.backButton.disabled = state.scenarioIndex === 0;
  ui.nextButton.disabled = !record || record.type !== "hpt";
  ui.retryButton.disabled = !record || record.type !== "standard";
  ui.retryButton.title = ui.retryButton.disabled ? copy.retryDisabled : "";
}

function renderHistory(copy) {
  const entries = state.choicesByScenario
    .map((entry, index) => (entry && entry.type === "hpt" ? { ...entry, index } : null))
    .filter(Boolean);
  if (!entries.length) {
    const item = document.createElement("li");
    item.textContent = copy.historyEmpty;
    ui.historyList.replaceChildren(item);
    return;
  }
  ui.historyList.replaceChildren(
    ...entries.map((entry) => {
      const scenario = getScenarios()[entry.index];
      const choice = scenario.choices.find((item) => item.type === "hpt");
      const li = document.createElement("li");
      li.textContent = copy.historyEntry(scenario.day, scenario.title, choice.title);
      return li;
    })
  );
}

function renderLearningBridge(copy) {
  const index = state.bridgeScenarioIndex;
  ui.bridgeKicker.textContent = copy.bridgeKicker;
  ui.bridgeTitle.textContent = copy.bridgeTitle;
  ui.bridgeCloseButton.textContent = copy.bridgeCloseButton;
  if (index === null || !state.selectedCharacter) {
    ui.bridgeBody.textContent = "";
    return;
  }
  const scenario = getScenarios()[index];
  const record = state.choicesByScenario[index];
  const choice = scenario.choices.find((item) => item.type === record.type);
  ui.bridgeBody.textContent = choice.bridge;
}

function renderGlossary(copy) {
  ui.glossaryKicker.textContent = copy.glossaryKicker;
  ui.glossaryTitle.textContent = copy.glossaryTitle;
  ui.glossaryIntro.textContent = copy.glossaryIntro;
  ui.glossaryCloseButton.textContent = copy.glossaryCloseButton;
  ui.glossaryList.replaceChildren(
    ...copy.glossaryTerms.map((entry) => {
      const card = document.createElement("article");
      card.className = "summary-item";
      card.innerHTML = `<strong>${entry.term}</strong><p>${entry.definition}</p>`;
      return card;
    })
  );
}

function renderResults(copy) {
  if (!state.selectedCharacter) {
    return;
  }
  const metrics = getMetricValues();
  ui.resultsKicker.textContent = copy.resultsKicker;
  ui.resultsTitle.textContent = copy.resultsTitle;
  ui.resultsBody.textContent = copy.resultsBody;
  ui.efficiencyLabel.textContent = copy.efficiencyLabel;
  ui.efficiencyFill.style.width = `${metrics.efficiency}%`;
  ui.efficiencyValue.textContent = `${metrics.efficiency}%`;
  ui.trustLabel.textContent = copy.trustLabel;
  ui.trustFill.style.width = `${metrics.trust}%`;
  ui.trustValue.textContent = `${metrics.trust}%`;
  ui.timeLabel.textContent = copy.timeLabel;
  ui.timeFill.style.width = `${metrics.timeToHousing}%`;
  ui.timeValue.textContent = `${metrics.timeToHousing}%`;
  ui.teachingSummaryLabel.textContent = copy.teachingSummaryLabel;
  ui.teachingSummaryBody.textContent = getTeachingSummary();
  ui.doorwayMessage.textContent = copy.doorwayMessage;
  ui.downloadRoadmapButton.textContent = copy.downloadRoadmapButton;
  ui.researchAbstractButton.textContent = copy.researchAbstractButton;
  ui.resultsBackButton.textContent = copy.resultsBackButton;
  ui.resultsRestartButton.textContent = copy.resultsRestartButton;
  ui.summaryGrid.replaceChildren(
    ...getScenarios().map((scenario) => {
      const choice = scenario.choices.find((item) => item.type === "hpt");
      const card = document.createElement("article");
      card.className = "summary-item";
      card.innerHTML =
        `<strong>${scenario.day}: ${scenario.title}</strong>` +
        `<p><strong>${copy.summaryLabel}:</strong> ${choice.title}</p>` +
        `<p><strong>${copy.summaryDetailLabel}:</strong> ${scenario.successSummary}</p>`;
      return card;
    })
  );
}

function renderFooter(copy) {
  ui.footerText.textContent = copy.footer;
}

function render() {
  const copy = getCopy();
  renderHeader(copy);
  renderCharacterSelection(copy);
  renderAdminSetup(copy);
  renderStats(copy);
  renderScenario(copy);
  renderFeedback(copy);
  renderChoices(copy);
  renderHistory(copy);
  renderLearningBridge(copy);
  renderGlossary(copy);
  renderResults(copy);
  renderFooter(copy);
}

window.addEventListener("load", () => {
  ui.loadingScreen.classList.add("is-hidden");
});

ui.englishButton.addEventListener("click", () => {
  state.language = "en";
  render();
});
ui.spanishButton.addEventListener("click", () => {
  state.language = "es";
  render();
});
ui.glossaryButton.addEventListener("click", openGlossary);
ui.adminBackButton.addEventListener("click", goToCaseSetupBack);
ui.adminContinueButton.addEventListener("click", continueFromAdminSetup);
ui.backButton.addEventListener("click", goBack);
ui.nextButton.addEventListener("click", goNext);
ui.retryButton.addEventListener("click", tryAgain);
ui.restartButton.addEventListener("click", resetSimulation);
ui.resultsBackButton.addEventListener("click", goBack);
ui.resultsRestartButton.addEventListener("click", resetSimulation);
ui.bridgeCloseButton.addEventListener("click", closeLearningBridge);
ui.glossaryCloseButton.addEventListener("click", closeGlossary);
ui.learningBridge.addEventListener("click", (event) => {
  if (event.target === ui.learningBridge) {
    closeLearningBridge();
  }
});
ui.glossaryModal.addEventListener("click", (event) => {
  if (event.target === ui.glossaryModal) {
    closeGlossary();
  }
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
  if (typing) {
    return;
  }
  if (event.code === "Space") {
    event.preventDefault();
    state.language = state.language === "en" ? "es" : "en";
    render();
    return;
  }
  if (event.key === "Escape") {
    closeLearningBridge();
    closeGlossary();
    return;
  }
  if (!ui.adminView.hidden && event.key === "Enter" && !ui.adminContinueButton.disabled) {
    continueFromAdminSetup();
    return;
  }
  if (event.key === "Enter" && !ui.nextButton.disabled && !ui.resultsPanel.classList.contains("is-visible")) {
    goNext();
  }
});

resetSimulation();
