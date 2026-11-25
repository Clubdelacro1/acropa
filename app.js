/* AcrOpa · idiomas, animaciones e inscripción */
(function () {
  "use strict";

  /* ---------- textos en español y griego (el inglés está en el HTML) ---------- */
  var T = {
    es: {
      "nav.gathering": "El encuentro", "nav.day": "Un día", "nav.venue": "El lugar", "nav.tickets": "Entradas", "nav.faq": "Preguntas", "nav.cta": "Inscribirme",
      "hero.eyebrow": "2ª edición · Peloponeso, Grecia", "hero.sub": "donde el festival se encuentra con el retiro",
      "nav.gallery": "Galería", "st.n": "2ª", "st.ed": "edición",
      "gal.eyebrow": "AcrOpa 2026 · 1ª edición", "gal.title": "Así se<br><span class=\"it grad\">siente</span>",
      "hero.when": "Cuándo", "hero.dates": "6 – 11 de agosto 2027", "hero.where": "Dónde", "hero.place": "Un olivar junto al mar",
      "hero.spots": "Lugares", "hero.limited": "Muy limitados", "hero.cta": "Reservá tu lugar", "hero.cta2": "Mirá la 1ª edición",
      "cd.d": "días", "cd.h": "horas", "cd.m": "min",
      "man.eyebrow": "Movimiento · Comunidad · Celebración",
      "man.text": "Seis días para moverse, conectar y celebrar la vida bajo el sol griego. Practicamos entre <em class=\"grad\">olivos</em>, nos tiramos al mar y compartimos la mesa — con la energía de un <em class=\"grad\">festival</em> y la calma de un <em class=\"grad\">retiro</em>.",
      "st.days": "días", "st.beach": "a la playa", "st.levels": "niveles", "st.mem": "atardeceres y amigos",
      "hv.eyebrow": "Dos almas, un encuentro", "hv.title": "Festival <span class=\"it grad\">&amp;</span> retiro",
      "hv.r.t": "Retiro", "hv.r.p": "Naturaleza y tradiciones griegas: olivos y mandarinos, cultura local y vida en comunidad. Tiempo para bajar el ritmo, descansar e integrar.",
      "hv.r.1": "Práctica a la sombra de los olivos", "hv.r.2": "Salidas a la playa y un spa natural de barro cerca", "hv.r.3": "Comida local, compartida todos los días",
      "hv.f.t": "Festival", "hv.f.p": "Acro de primer nivel para todos: acrobacia en pareja, acroyoga, verticales y flows — y jams mientras se pone el sol.",
      "hv.f.1": "Talleres: inicial, intermedio, avanzado", "hv.f.2": "Flows, whip-pops, icarios, standing", "hv.f.3": "Jams al atardecer, música y celebración",
      "day.eyebrow": "El ritmo", "day.title": "Del amanecer<br>al <span class=\"it grad\">atardecer</span>",
      "day.1.t": "Despertar", "day.1.p": "Movimiento suave entre los olivos y un desayuno griego sin apuro.",
      "day.2.t": "Talleres de la mañana", "day.2.p": "Flows, whip-pops, icarios, standing y verticales — por niveles.",
      "day.3.t": "Almuerzo, mar y siesta", "day.3.p": "Una comida local nutritiva y después la playa o una siesta a la sombra.",
      "day.4.t": "Sesión de la tarde", "day.4.p": "Práctica, juego y esos trucos que venís soñando.",
      "day.5.t": "Jam al atardecer", "day.5.p": "Jam abierta mientras el sol se hunde en el mar Jónico.",
      "day.6.t": "¡Opa!", "day.6.p": "Cena juntos, música y celebrar la vida bajo las estrellas.",
      "day.note": "Día de ejemplo — el programa completo 2027 se publica pronto.",
      "ven.eyebrow": "El lugar", "ven.title": "Bajo los<br><span class=\"it grad\">olivos</span>",
      "ven.text": "En un olivar con mandarinos en Stafidokampos, al oeste del Peloponeso — a solo 12 minutos de la playa, donde cada tarde termina con el sol hundiéndose en el mar.",
      "ven.l1": "Ubicación", "ven.v1": "Stafidokampos, Elis · Ver mapa ↗", "ven.l2": "Alojamiento", "ven.v2": "Camping libre · carpa, van o camper",
      "ven.l3": "Llegada", "ven.v3": "Viernes 6 de agosto", "ven.l4": "Salida", "ven.v4": "Miércoles 11 de agosto",
      "ven.l5": "Aeropuerto más cercano", "ven.v5": "Araxos (GPA)", "ven.l6": "Por tierra", "ven.v6": "~1 h desde Patras · ~3,5 h desde Atenas",
      "tk.eyebrow": "Entradas · 2027", "tk.title": "Reservá tu<br><span class=\"it grad\">lugar</span>",
      "tk.text": "Incluye tu lugar de camping, todos los talleres, desayuno, dos comidas locales por día, snacks, salidas a la playa y acompañamiento todo el tiempo.",
      "tk.best": "Mejor precio", "n1.p": "Hasta el 30 de junio. Seña de €100 para reservar, el resto hasta el 31 de julio.",
      "n2.t": "Normal", "n2.p": "Desde el 1 de julio, hasta agotar lugares.",
      "n3.t": "Con tu pareja", "n3.p": "Vení con tu pareja de acro — escribí su nombre al inscribirte.",
      "n4.t": "Pase por día", "n4.p": "¿No podés quedarte toda la semana? Vení un día.",
      "tk.pp": "por persona", "tk.pd": "por día", "tk.book": "Inscribirme →", "tk.cta": "Inscribirme ahora",
      "tk.dep": "Cancelación gratis hasta el 30 de junio. ¿Cambiaron tus planes después? Tranqui — podés revender tu entrada y no perdés la seña.",
      "tk.spots": "Lugares muy limitados",
      "faq.title": "Bueno<br><span class=\"it grad\">saber</span>",
      "q1": "¿Necesito experiencia previa?", "a1": "No. Hay clases para nivel inicial, intermedio y avanzado. Contanos sobre tu práctica al inscribirte.",
      "q2": "¿Puedo ir sin pareja?", "a2": "¡Claro! Vení solo/a, con pareja o con amigos — del resto nos encargamos nosotros.",
      "q3": "¿Dónde duermo?", "a3": "El camping es libre e incluido: traé tu carpa, van o camper. ¿Necesitás equipo de camping? Avisanos y te ayudamos. ¿No te va acampar? Podés reservar alojamiento cerca.",
      "q4": "¿Qué incluye?", "a4": "Tu lugar de camping, todos los talleres, desayuno, dos comidas locales por día, snacks, salidas a la playa y acompañamiento todo el tiempo.",
      "q5": "¿Cómo llego?", "a5": "El aeropuerto más cercano es Araxos (GPA). Desde Atenas son unas 3,5 horas en auto o bus, y 1 hora desde Patras. Al inscribirte contanos desde dónde venís y te ayudamos a compartir viaje.",
      "q6": "¿Puedo cancelar?", "a6": "La cancelación es gratis hasta el 30 de junio. Después podés revender tu entrada, así no perdés la seña.",
      "q7": "¿En qué idioma son las clases?", "a7": "Las clases son en inglés, y el equipo también habla griego y español.",
      "ft.made": "Nos vemos bajo los olivos ☀️",
      /* formulario */
      "f.back": "← Volver a AcrOpa", "f.eyebrow": "AcrOpa 2027 · 6–11 de agosto", "f.title": "Reservá tu <span class=\"it grad\">lugar</span>",
      "f.intro": "Completá tus datos para reservar tu lugar. Te escribimos por WhatsApp con los datos para pagar la seña.",
      "f.s0": "Tu entrada", "f.ticket": "Entrada", "f.t.reg": "Normal · €250", "f.t.partner": "Con mi pareja · €220 c/u", "f.t.day": "Pase por día · €60/día",
      "f.partner": "Nombre de tu pareja", "f.days": "¿Qué días?", "f.days.ph": "Sábado 7 y domingo 8",
      "f.status": "Voy como", "f.st.base": "Base (solo/a)", "f.st.flyer": "Flyer (solo/a)", "f.st.hyb": "Híbrido/a (base y flyer)", "f.st.couple": "Con mi pareja de acro",
      "f.s1": "Sobre vos", "f.name": "Nombre y apellido", "f.phone": "Celular (WhatsApp)", "f.emerg": "Contacto de emergencia · nombre, apellido y teléfono",
      "f.from": "Viajo desde", "f.from.ath": "Atenas", "f.from.pat": "Patras", "f.other": "Otro", "f.from.ph": "Ciudad / país",
      "f.with": "Voy con", "f.w.car": "Auto", "f.w.van": "Camper", "f.w.tent": "Carpa", "f.with.ph": "Necesito equipo de camping, bus…",
      "f.diet": "Comida: alergia, preferencia o restricción", "f.d.omni": "Omnívoro / flexitariano", "f.d.pesc": "Pescetariano", "f.d.veg": "Vegetariano", "f.d.other": "Alergia / otro", "f.diet.ph": "Contanos más",
      "f.about": "Quiero contarles algo sobre mí",
      "f.s2": "Tu acro", "f.level": "Mi nivel", "f.l.beg": "Inicial", "f.l.int": "Intermedio", "f.l.pro": "Avanzado",
      "f.interest": "Me interesa sobre todo", "f.i.cur": "No sé — ¡curiosidad!", "f.idea": "Quiero compartir una idea",
      "f.injury": "¿Tenés alguna lesión, condición o enfermedad crónica que requiera autorización médica o atención especial?", "f.yes": "Sí", "f.no": "No",
      "f.injd": "Contanos un poco, así adaptamos la práctica",
      "f.s3": "Consentimiento",
      "f.c1t": "1. Exención de responsabilidad.", "f.c1": "Entiendo que participar en AcrOpa implica actividad física y condiciones al aire libre. Asumo total responsabilidad por mi salud y seguridad, y renuncio a cualquier reclamo legal o económico contra la organización en caso de accidente, lesión o pérdida de objetos personales.",
      "f.c2t": "2. Primeros auxilios.", "f.c2": "En caso de emergencia, acepto recibir primeros auxilios y, si hace falta, ser trasladado/a al centro médico más cercano.",
      "f.c3t": "3. Fotos y video.", "f.c3": "Acepto ser fotografiado/a o filmado/a durante el evento con fines de comunicación y difusión. Puedo pedir que se quite mi material en cualquier momento.",
      "f.c4t": "4. Protección de datos (RGPD).", "f.c4": "Mis datos se usan solo para comunicarnos sobre este evento y no se comparten con terceros, según el Reglamento General de Protección de Datos 2016/679.",
      "f.consent": "Leí y acepto todo lo anterior.",
      "f.prev": "← Atrás", "f.next": "Seguir", "f.send": "Reservar mi lugar",
      "f.err.pick": "Elegí una opción", "f.err.fill": "Este dato es obligatorio", "f.err.consent": "Tenés que aceptar para inscribirte",
      "f.err.send": "Algo falló. Probá de nuevo o escribinos por WhatsApp.",
      "f.done.t": "¡Nos vemos bajo<br>los <span class=\"it grad\">olivos!</span>", "f.done.p": "Recibimos tu inscripción. Muy pronto te escribimos por WhatsApp con los datos para la seña.", "f.back2": "Volver a la web"
    },
    el: {
      "nav.gathering": "Η συνάντηση", "nav.day": "Μια μέρα", "nav.venue": "Ο χώρος", "nav.tickets": "Εισιτήρια", "nav.faq": "Ερωτήσεις", "nav.cta": "Εγγραφή",
      "hero.eyebrow": "2η διοργάνωση · Πελοπόννησος", "hero.sub": "εκεί που το φεστιβάλ συναντά το retreat",
      "nav.gallery": "Γκαλερί", "st.n": "2η", "st.ed": "διοργάνωση",
      "gal.eyebrow": "AcrOpa 2026 · 1η διοργάνωση", "gal.title": "Έτσι<br>το <span class=\"it grad\">νιώθεις</span>",
      "hero.when": "Πότε", "hero.dates": "6 – 11 Αυγούστου 2027", "hero.where": "Πού", "hero.place": "Ένας ελαιώνας δίπλα στη θάλασσα",
      "hero.spots": "Θέσεις", "hero.limited": "Πολύ περιορισμένες", "hero.cta": "Κράτησε τη θέση σου", "hero.cta2": "Δες την 1η διοργάνωση",
      "cd.d": "μέρες", "cd.h": "ώρες", "cd.m": "λεπτά",
      "man.eyebrow": "Κίνηση · Κοινότητα · Γιορτή",
      "man.text": "Έξι μέρες γεμάτες κίνηση, σύνδεση και γιορτή κάτω από τον ελληνικό ήλιο. Εξασκούμαστε ανάμεσα στις <em class=\"grad\">ελιές</em>, βουτάμε στη θάλασσα και μοιραζόμαστε το τραπέζι — με την ενέργεια ενός <em class=\"grad\">φεστιβάλ</em> και την ηρεμία ενός <em class=\"grad\">retreat</em>.",
      "st.days": "μέρες", "st.beach": "από την παραλία", "st.levels": "επίπεδα", "st.mem": "ηλιοβασιλέματα & φίλοι",
      "hv.eyebrow": "Δύο ψυχές, μία συνάντηση", "hv.title": "Φεστιβάλ <span class=\"it grad\">&amp;</span> retreat",
      "hv.r.t": "Retreat", "hv.r.p": "Ελληνική φύση & παραδόσεις: ελιές και μανταρινιές, τοπική κουλτούρα και συλλογική κοινοτική ζωή. Χρόνος να χαλαρώσεις, να ξεκουραστείς και να αφομοιώσεις.",
      "hv.r.1": "Εξάσκηση στη σκιά των ελαιόδεντρων", "hv.r.2": "Εκδρομές στη θάλασσα & φυσικό σπα με πηλό κοντά", "hv.r.3": "Τοπικό φαγητό, μοιρασμένο κάθε μέρα",
      "hv.f.t": "Φεστιβάλ", "hv.f.p": "Ακροβατικά για όλα τα επίπεδα: partner acrobatics, acro yoga, handstands και όμορφα flows — και jams την ώρα που δύει ο ήλιος.",
      "hv.f.1": "Workshops: αρχάριοι, μεσαίοι, προχωρημένοι", "hv.f.2": "Flows, whip-pops, icarians, standing", "hv.f.3": "Sunset jams, μουσική & γιορτή",
      "day.eyebrow": "Ο ρυθμός", "day.title": "Από την ανατολή<br>ως τη <span class=\"it grad\">δύση</span>",
      "day.1.t": "Ξύπνημα", "day.1.p": "Ήπια κίνηση ανάμεσα στις ελιές και ένα χαλαρό ελληνικό πρωινό.",
      "day.2.t": "Πρωινά workshops", "day.2.p": "Flows, whip-pops, icarians, standing και handstands — ανά επίπεδο.",
      "day.3.t": "Φαγητό, θάλασσα & σιέστα", "day.3.p": "Ένα θρεπτικό τοπικό γεύμα και μετά παραλία ή ύπνος στη σκιά.",
      "day.4.t": "Απογευματινή συνεδρία", "day.4.p": "Εξάσκηση, παιχνίδι και τα κόλπα που ονειρεύεσαι.",
      "day.5.t": "Sunset jam", "day.5.p": "Ανοιχτό jam καθώς ο ήλιος βυθίζεται στο Ιόνιο.",
      "day.6.t": "Ώπα!", "day.6.p": "Δείπνο όλοι μαζί, μουσική και γιορτή ζωής κάτω από τα αστέρια.",
      "day.note": "Ενδεικτική μέρα — το πλήρες πρόγραμμα του 2027 θα ανακοινωθεί σύντομα.",
      "ven.eyebrow": "Ο χώρος", "ven.title": "Κάτω από<br>τις <span class=\"it grad\">ελιές</span>",
      "ven.text": "Μέσα σε έναν ελαιώνα και μανταρινόκηπο στον Σταφιδόκαμπο Ηλείας, στη δυτική Πελοπόννησο — μόλις 12 λεπτά από την παραλία, εκεί που κάθε βράδυ ο ήλιος βουτάει στη θάλασσα.",
      "ven.l1": "Τοποθεσία", "ven.v1": "Σταφιδόκαμπος, Ηλεία · Χάρτης ↗", "ven.l2": "Διαμονή", "ven.v2": "Ελεύθερο camping · σκηνή, van ή camper",
      "ven.l3": "Άφιξη", "ven.v3": "Παρασκευή 6 Αυγούστου", "ven.l4": "Αναχώρηση", "ven.v4": "Τετάρτη 11 Αυγούστου",
      "ven.l5": "Κοντινότερο αεροδρόμιο", "ven.v5": "Άραξος (GPA)", "ven.l6": "Οδικώς", "ven.v6": "~1 ώρα από Πάτρα · ~3,5 ώρες από Αθήνα",
      "tk.eyebrow": "Εισιτήρια · 2027", "tk.title": "Κράτησε<br>τη <span class=\"it grad\">θέση σου</span>",
      "tk.text": "Περιλαμβάνει θέση camping, όλα τα workshops, πρωινό, 2 θρεπτικά τοπικά γεύματα τη μέρα, σνακ, εκδρομές στη θάλασσα και πλήρη υποστήριξη.",
      "tk.best": "Καλύτερη τιμή", "n1.p": "Έως 30 Ιουνίου. 100€ προκαταβολή για κράτηση, η εξόφληση έως 31 Ιουλίου.",
      "n2.t": "Κανονική", "n2.p": "Από 1 Ιουλίου, μέχρι να εξαντληθούν οι θέσεις.",
      "n3.t": "Με τον/την partner σου", "n3.p": "Έλα με το acro partner σου — γράψε το όνομά του/της στην εγγραφή.",
      "n4.t": "Ημερήσιο πάσο", "n4.p": "Δεν μπορείς να μείνεις όλη την εβδομάδα; Έλα για μια μέρα.",
      "tk.pp": "ανά άτομο", "tk.pd": "τη μέρα", "tk.book": "Εγγραφή →", "tk.cta": "Κάνε εγγραφή τώρα",
      "tk.dep": "Δωρεάν ακύρωση έως 30 Ιουνίου. Άλλαξαν τα σχέδιά σου μετά; Κανένα πρόβλημα — μπορείς να μεταπωλήσεις το εισιτήριό σου και να μη χάσεις την προκαταβολή.",
      "tk.spots": "Πολύ περιορισμένες θέσεις",
      "faq.title": "Καλό<br>να <span class=\"it grad\">ξέρεις</span>",
      "q1": "Χρειάζομαι προηγούμενη εμπειρία;", "a1": "Όχι. Υπάρχουν μαθήματα για αρχάριους, μεσαίους και προχωρημένους. Πες μας για την εξάσκησή σου στην εγγραφή.",
      "q2": "Μπορώ να έρθω χωρίς partner;", "a2": "Φυσικά! Έλα μόνος/η, με partner ή με παρέα — τα υπόλοιπα τα αναλαμβάνουμε εμείς.",
      "q3": "Πού θα κοιμηθώ;", "a3": "Το camping είναι δωρεάν και περιλαμβάνεται: φέρε τη σκηνή, το van ή το camper σου. Χρειάζεσαι εξοπλισμό; Ενημέρωσέ μας και θα βοηθήσουμε. Δεν σου αρέσει το camping; Μπορείς να κλείσεις διαμονή κοντά.",
      "q4": "Τι περιλαμβάνεται;", "a4": "Θέση camping, όλα τα workshops, πρωινό, 2 θρεπτικά τοπικά γεύματα τη μέρα, σνακ, εκδρομές στη θάλασσα και πλήρη υποστήριξη.",
      "q5": "Πώς θα έρθω;", "a5": "Το κοντινότερο αεροδρόμιο είναι ο Άραξος (GPA). Από την Αθήνα είναι περίπου 3,5 ώρες με αυτοκίνητο ή λεωφορείο, και 1 ώρα από την Πάτρα. Πες μας από πού έρχεσαι στην εγγραφή για να οργανώσουμε κοινές διαδρομές.",
      "q6": "Μπορώ να ακυρώσω;", "a6": "Η ακύρωση είναι δωρεάν έως τις 30 Ιουνίου. Μετά μπορείς να μεταπωλήσεις το εισιτήριό σου, ώστε να μη χάσεις την προκαταβολή.",
      "q7": "Σε ποια γλώσσα είναι τα μαθήματα;", "a7": "Τα μαθήματα γίνονται στα αγγλικά, και η ομάδα μιλάει επίσης ελληνικά και ισπανικά.",
      "ft.made": "Τα λέμε κάτω από τις ελιές ☀️",
      /* φόρμα */
      "f.back": "← Πίσω στο AcrOpa", "f.eyebrow": "AcrOpa 2027 · 6–11 Αυγούστου", "f.title": "Κράτησε τη <span class=\"it grad\">θέση σου</span>",
      "f.intro": "Συμπλήρωσε τα στοιχεία σου για να κρατήσεις τη θέση σου. Θα σου στείλουμε στο WhatsApp τα στοιχεία για την προκαταβολή.",
      "f.s0": "Το εισιτήριό σου", "f.ticket": "Εισιτήριο", "f.t.reg": "Κανονικό · 250€", "f.t.partner": "Με partner · 220€ ανά άτομο", "f.t.day": "Ημερήσιο · 60€/μέρα",
      "f.partner": "Όνομα του/της partner σου", "f.days": "Ποιες μέρες;", "f.days.ph": "Σάββατο 7 και Κυριακή 8",
      "f.status": "Status", "f.st.base": "Βάση (single)", "f.st.flyer": "Flyer (single)", "f.st.hyb": "Και βάση και flyer (single hybrid)", "f.st.couple": "Με ζευγάρι",
      "f.s1": "Τα στοιχεία σου", "f.name": "Όνομα & επίθετο", "f.phone": "Κινητό (WhatsApp)", "f.emerg": "Επαφή έκτακτης ανάγκης · ονοματεπώνυμο & τηλέφωνο",
      "f.from": "Έρχομαι από", "f.from.ath": "Αθήνα", "f.from.pat": "Πάτρα", "f.other": "Άλλο", "f.from.ph": "Πόλη / χώρα",
      "f.with": "Θα έρθω με", "f.w.car": "Αυτοκίνητο", "f.w.van": "Κάμπερ", "f.w.tent": "Σκηνή", "f.with.ph": "Χρειάζομαι εξοπλισμό camping, λεωφορείο…",
      "f.diet": "Φαγητό: αλλεργία, προτίμηση ή περιορισμός", "f.d.omni": "Flexitarian / παμφάγος", "f.d.pesc": "Pescetarian", "f.d.veg": "Χορτοφάγος", "f.d.other": "Αλλεργία / άλλο", "f.diet.ph": "Πες μας περισσότερα",
      "f.about": "Θα ήθελα να μοιραστώ κάτι σχετικά με εμένα",
      "f.s2": "Το acro σου", "f.level": "Είμαι", "f.l.beg": "Αρχάριος/α", "f.l.int": "Μεσαίο επίπεδο", "f.l.pro": "Προχωρημένος/η",
      "f.interest": "Ενδιαφέρομαι κυρίως για", "f.i.cur": "Έλα ντε! Δεν ξέρω — περιέργεια", "f.idea": "Θα ήθελα να μοιραστώ μια ιδέα",
      "f.injury": "Έχεις κάποιον τραυματισμό, πάθηση ή χρόνιο νόσημα που απαιτεί ιατρική έγκριση ή ιδιαίτερη προσοχή;", "f.yes": "Ναι", "f.no": "Όχι",
      "f.injd": "Πες μας λίγα λόγια, ώστε να προσαρμόσουμε την πρακτική",
      "f.s3": "Συγκατάθεση",
      "f.c1t": "1. Αποποίηση ευθύνης.", "f.c1": "Συμμετέχω στο AcrOpa με πλήρη επίγνωση ότι εμπεριέχει φυσική δραστηριότητα και εξωτερικές συνθήκες. Αναλαμβάνω την πλήρη ευθύνη για την υγεία και τη φυσική μου κατάσταση και απαλλάσσω τους διοργανωτές από κάθε νομική ή οικονομική ευθύνη σε περίπτωση τραυματισμού, ατυχήματος ή απώλειας προσωπικών αντικειμένων.",
      "f.c2t": "2. Πρώτες βοήθειες.", "f.c2": "Σε περίπτωση ατυχήματος, συναινώ να μου παρασχεθούν πρώτες βοήθειες και, αν χρειαστεί, να μεταφερθώ στο πλησιέστερο ιατρικό κέντρο.",
      "f.c3t": "3. Φωτογραφίες & βίντεο.", "f.c3": "Συναινώ στη λήψη φωτογραφιών και βίντεο κατά τη διάρκεια των δραστηριοτήτων για σκοπούς επικοινωνίας και προβολής. Μπορώ οποιαδήποτε στιγμή να ζητήσω την αφαίρεση του προσωπικού μου υλικού.",
      "f.c4t": "4. Προστασία δεδομένων (GDPR).", "f.c4": "Τα στοιχεία μου θα χρησιμοποιηθούν αποκλειστικά για την επικοινωνία σχετικά με τη διοργάνωση και δεν θα κοινοποιηθούν σε τρίτους, σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων 2016/679.",
      "f.consent": "Διάβασα και συναινώ σε όλα τα παραπάνω.",
      "f.prev": "← Πίσω", "f.next": "Συνέχεια", "f.send": "Κράτησε τη θέση μου",
      "f.err.pick": "Διάλεξε μια επιλογή", "f.err.fill": "Το πεδίο είναι υποχρεωτικό", "f.err.consent": "Πρέπει να συναινέσεις για να γραφτείς",
      "f.err.send": "Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε μας στο WhatsApp.",
      "f.done.t": "Τα λέμε κάτω<br>από τις <span class=\"it grad\">ελιές!</span>", "f.done.p": "Λάβαμε την εγγραφή σου. Σύντομα θα σου γράψουμε στο WhatsApp με τα στοιχεία για την προκαταβολή.", "f.back2": "Πίσω στη σελίδα"
    }
  };

  /* el inglés se toma del propio HTML */
  var EN = {}, ENP = {};
  document.querySelectorAll("[data-t]").forEach(function (el) {
    EN[el.dataset.t] = el.hasAttribute("data-html") ? el.innerHTML : el.textContent;
  });
  document.querySelectorAll("[data-tp]").forEach(function (el) { ENP[el.dataset.tp] = el.placeholder; });

  function setLang(l) {
    if (!T[l] && l !== "en") l = "en";
    var d = l === "en" ? EN : T[l];
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var v = d[el.dataset.t]; if (v == null) v = EN[el.dataset.t];
      if (el.hasAttribute("data-html")) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll("[data-tp]").forEach(function (el) {
      var v = l === "en" ? ENP[el.dataset.tp] : T[l][el.dataset.tp];
      el.placeholder = v || ENP[el.dataset.tp] || "";
    });
    document.documentElement.lang = l;
    document.querySelectorAll(".langs button").forEach(function (b) { b.classList.toggle("on", b.dataset.set === l); });
    try { localStorage.setItem("acropa-lang", l); } catch (e) {}
  }
  var saved = null; try { saved = localStorage.getItem("acropa-lang"); } catch (e) {}
  var nav = (navigator.language || "").toLowerCase();
  setLang(saved || (nav.indexOf("es") === 0 ? "es" : nav.indexOf("el") === 0 ? "el" : "en"));
  document.querySelectorAll(".langs button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.set); }); });

  /* menú que se vuelve sólido al bajar */
  var navEl = document.getElementById("nav");
  if (navEl && !navEl.classList.contains("solid")) {
    var onScroll = function () { navEl.classList.toggle("solid", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* aparición suave */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });

  /* cuenta regresiva (hora de Grecia) */
  var cdD = document.getElementById("cd-d");
  if (cdD) {
    var target = new Date("2027-08-06T16:00:00+03:00").getTime();
    var tick = function () {
      var s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      cdD.textContent = Math.floor(s / 86400);
      document.getElementById("cd-h").textContent = Math.floor(s % 86400 / 3600);
      document.getElementById("cd-m").textContent = Math.floor(s % 3600 / 60);
    };
    tick(); setInterval(tick, 30000);
  }

  /* ---------- inscripción → Google Form de AcrOpa ---------- */
  var form = document.getElementById("reg");
  if (!form) return;

  var FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf8mLijTHFAixDPPmr8JsI-QsQypEv3F6J_P6ROlU03V8OXxg/formResponse";
  var E = {
    status: "775340875", name: "1903522920", phone: "1755230785", ig: "2134085673", emerg: "1943009991",
    from: "524890538", with: "483000434", diet: "2127831497", about: "1092983147",
    level: "507970943", interest: "451392337", idea: "928737530", injury: "33642302", injd: "773143218", consent: "218939245"
  };

  var sets = form.querySelectorAll("fieldset"), bars = form.querySelectorAll(".steps span");
  var prev = document.getElementById("prev"), next = document.getElementById("next"), send = document.getElementById("send");
  var step = 0;
  function $(id) { return document.getElementById(id); }
  function val(id) { return ($(id).value || "").trim(); }
  function picked(name) { return [].slice.call(form.querySelectorAll('input[name="' + name + '"]:checked')).map(function (i) { return i.value; }); }

  /* preseleccionar entrada si viene del link */
  function toggles() {
    var t = (picked("ticket")[0] || "");
    $("partner-f").classList.toggle("on", t.indexOf("partner") > -1);
    $("days-f").classList.toggle("on", t.indexOf("Day") === 0);
    $("from-o").classList.toggle("on", picked("from")[0] === "__other_option__");
    $("with-o").classList.toggle("on", picked("with").indexOf("__other_option__") > -1);
    $("diet-o").classList.toggle("on", picked("diet").indexOf("__other_option__") > -1);
    $("inj-f").classList.toggle("on", picked("injury")[0] === "Ναι / Yes");
  }
  form.addEventListener("change", function (e) {
    toggles();
    var f = e.target.closest(".field"); if (f) f.classList.remove("bad");
  });
  form.addEventListener("input", function (e) { var f = e.target.closest(".field"); if (f) f.classList.remove("bad"); });

  var RULES = {
    ticket: function () { return picked("ticket").length; },
    status: function () { return picked("status").length; },
    name: function () { return val("name"); }, phone: function () { return val("phone"); }, emerg: function () { return val("emerg"); },
    diet: function () { return picked("diet").length; },
    level: function () { return picked("level").length; },
    interest: function () { return picked("interest").length; },
    injury: function () { return picked("injury").length; },
    injd: function () { return picked("injury")[0] !== "Ναι / Yes" || val("injd"); },
    consent: function () { return $("consent").checked; }
  };
  function valid(n) {
    var ok = true, first = null;
    sets[n].querySelectorAll("[data-req]").forEach(function (f) {
      var good = !!RULES[f.dataset.req]();
      f.classList.toggle("bad", !good);
      if (!good && ok) { ok = false; first = f; }
    });
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    return ok;
  }
  function show(n) {
    step = n;
    sets.forEach(function (s, i) { s.classList.toggle("on", i === n); });
    bars.forEach(function (b, i) { b.classList.toggle("on", i <= n); });
    prev.hidden = n === 0; next.hidden = n === sets.length - 1; send.hidden = n !== sets.length - 1;
    window.scrollTo({ top: form.offsetTop - 110, behavior: "smooth" });
  }
  next.addEventListener("click", function () { if (valid(step)) show(step + 1); });
  prev.addEventListener("click", function () { show(step - 1); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!valid(step)) return;
    var p = new URLSearchParams();
    function add(k, v) { if (v) p.append("entry." + E[k], v); }
    function addMany(k, other) {
      picked(k).forEach(function (v) { add(k, v); });
      if (picked(k).indexOf("__other_option__") > -1) p.append("entry." + E[k] + ".other_option_response", val(other) || "-");
    }
    add("status", picked("status")[0]);
    add("name", val("name")); add("phone", val("phone")); add("ig", val("ig")); add("emerg", val("emerg"));
    addMany("from", "from-o"); addMany("with", "with-o"); addMany("diet", "diet-o");

    /* la entrada elegida va al principio del campo "algo sobre mí" */
    var t = picked("ticket")[0], head = "[2027] " + (t || "");
    if (t && t.indexOf("partner") > -1 && val("partner")) head += " · Partner: " + val("partner");
    if (t && t.indexOf("Day") === 0 && val("days")) head += " · Days: " + val("days");
    head += " · Lang: " + document.documentElement.lang;
    add("about", head + (val("about") ? "\n\n" + val("about") : ""));

    add("level", picked("level")[0]);
    picked("interest").forEach(function (v) { add("interest", v); });
    add("idea", val("idea"));
    var inj = picked("injury")[0]; add("injury", inj);
    if (inj === "Ναι / Yes") add("injd", val("injd"));
    add("consent", "Συναινώ / I consent");
    p.append("pageHistory", inj === "Ναι / Yes" ? "0,1,2,3,4,5" : "0,1,2,4,5");

    send.disabled = true; send.style.opacity = .6;
    $("send-err").style.display = "none";
    fetch(FORM_URL, { method: "POST", mode: "no-cors", body: p })
      .then(function () {
        form.style.display = "none";
        $("done").classList.add("on");
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(function () {
        send.disabled = false; send.style.opacity = "";
        $("send-err").style.display = "block";
      });
  });

  toggles();
})();
