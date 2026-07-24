import fs from 'node:fs';
const SP = '/private/tmp/claude-501/-Users-mike-cguard-pro/3d8d0928-eb40-4c15-a30d-809fbcb9cadf/scratchpad';
const existing = new Set(JSON.parse(fs.readFileSync(SP + '/existing-inventory.json', 'utf8')).map((r) => r.slug));

// ---- markets ----
const M = {
  latam: { label: 'América Latina', chip: 'LATAM', tag: 'latam', voc: 'español neutro pan-latinoamericano (evita modismos de un solo país; di "en América Latina/la región")', sfx: 'latam' },
  mx: { label: 'México', chip: 'MÉXICO', tag: 'méxico', voc: 'mexicano (guardia, rondín, caseta, elemento, fraccionamiento, plaza, maquila)', sfx: 'mexico' },
  co: { label: 'Colombia', chip: 'COLOMBIA', tag: 'colombia', voc: 'colombiano (vigilante, minuta, Supervigilancia, conjunto/unidad residencial, portería)', sfx: 'colombia' },
  ar: { label: 'Argentina', chip: 'ARGENTINA', tag: 'argentina', voc: 'argentino con voseo (vigilador, garita, objetivo, franco, consigna, barrio cerrado/country)', sfx: 'argentina' },
  pe: { label: 'Perú', chip: 'PERÚ', tag: 'perú', voc: 'peruano (agente de seguridad, SUCAMEC, ocurrencias, ronda, garita)', sfx: 'peru' },
  cl: { label: 'Chile', chip: 'CHILE', tag: 'chile', voc: 'chileno (guardia de seguridad, OS-10, libro de novedades, conserjería, condominio)', sfx: 'chile' },
  ec: { label: 'Ecuador', chip: 'ECUADOR', tag: 'ecuador', voc: 'ecuatoriano (guardia, garita, parte de novedades)', sfx: 'ecuador' },
  pa: { label: 'Panamá', chip: 'PANAMÁ', tag: 'panamá', voc: 'panameño neutro', sfx: 'panama' },
  gt: { label: 'Guatemala', chip: 'GUATEMALA', tag: 'guatemala', voc: 'guatemalteco neutro', sfx: 'guatemala' },
  cr: { label: 'Costa Rica', chip: 'COSTA RICA', tag: 'costa rica', voc: 'costarricense neutro', sfx: 'costa-rica' },
  do: { label: 'República Dominicana', chip: 'REP. DOMINICANA', tag: 'república dominicana', voc: 'dominicano neutro', sfx: 'republica-dominicana' },
  bo: { label: 'Bolivia', chip: 'BOLIVIA', tag: 'bolivia', voc: 'boliviano neutro', sfx: 'bolivia' },
  sv: { label: 'El Salvador', chip: 'EL SALVADOR', tag: 'el salvador', voc: 'salvadoreño neutro', sfx: 'el-salvador' },
  hn: { label: 'Honduras', chip: 'HONDURAS', tag: 'honduras', voc: 'hondureño neutro', sfx: 'honduras' },
  py: { label: 'Paraguay', chip: 'PARAGUAY', tag: 'paraguay', voc: 'paraguayo neutro', sfx: 'paraguay' },
};

// shots pool reference names (resolved to real paths in WRITER spec)
const S = {
  techOps: ['crm-dashboard', 'incidents'], techRadio: ['crm-dashboard', 'radio'], techCam: ['crm-dashboard', 'dashboard'],
  vert: ['dashboard', 'incidents'], vertCrm: ['crm-dashboard', 'tasks'], biz: ['crm-dashboard', 'crm-incidents'],
  bizSch: ['schedule', 'crm-dashboard'], ppl: ['schedule', 'profile'], pplTask: ['tasks', 'profile'],
  ops: ['dashboard', 'tasks'], opsInc: ['incidents', 'crm-incidents'], trend: ['crm-dashboard', 'radio'], app: ['login', 'profile'],
};

// ---- TOPIC POOLS ----
// Each topic: key, cat (chip label for cover when agnostic), catTag (drives blog category), title(m), keyword(m), angle(m), shots, scope('agnostic'|'market'), markets(list of market keys eligible for market scope)
const BIG = ['mx', 'co', 'ar', 'pe', 'cl', 'ec'];
const ALL = Object.keys(M).filter((k) => k !== 'latam');
const SMALL = ['pa', 'gt', 'cr', 'do', 'bo', 'sv', 'hn', 'py'];

const t = (s) => s; // identity helper

// TECH / IA (trend magnet)
const TECH = [
  { key: 'ia-operacion-seguridad', catTag: 'ia', chip: 'IA Y TECNOLOGÍA', title: (m) => `Inteligencia Artificial en la Operación de Seguridad Privada${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `inteligencia artificial en seguridad privada${m.tag === 'latam' ? '' : ' en ' + m.label}`, angle: (m) => `Qué hace y qué NO hace hoy la IA en una empresa de seguridad: priorización de alertas, detección de anomalías en rondas/asistencia, redacción asistida de reportes, predicción de ausentismo. Aterrízalo a una empresa mediana ${m.tag === 'latam' ? 'de la región' : 'de ' + m.label}, sin humo ni promesas de "guardia robot". Sé honesto sobre límites y sesgos.`, shots: S.techOps, scope: 'both', markets: BIG },
  { key: 'analitica-video-inteligente', catTag: 'analítica', chip: 'IA Y TECNOLOGÍA', title: (m) => `Analítica de Video Inteligente para Empresas de Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `analítica de video para seguridad`, angle: (m) => `Cómo la analítica de video (detección de intrusión, merodeo, conteo, objetos abandonados) convierte cámaras pasivas en alertas accionables para la central. Qué esperar de forma realista, falsos positivos, y cómo integra con la operación de guardias.`, shots: S.techCam, scope: 'both', markets: ['mx', 'co', 'cl'] },
  { key: 'reconocimiento-facial-limites', catTag: 'reconocimiento facial', chip: 'IA Y TECNOLOGÍA', title: (m) => `Reconocimiento Facial en Seguridad: Usos, Límites y Privacidad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `reconocimiento facial en seguridad privada`, angle: (m) => `Usos legítimos (control de acceso, listas de personas vetadas) frente a riesgos de privacidad y error. Trata la protección de datos con cuidado y hedgeado según la normativa ${m.tag === 'latam' ? 'de cada país' : 'de ' + m.label}. No es asesoría legal.`, shots: S.techCam, scope: 'both', markets: ['mx', 'co', 'br'] .filter(x=>x!=='br') },
  { key: 'lpr-control-vehicular', catTag: 'tecnología', chip: 'IA Y TECNOLOGÍA', title: (m) => `Lectura de Placas (LPR) para Control Vehicular${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `lectura de placas LPR control vehicular`, angle: (m) => `Cómo el reconocimiento automático de placas agiliza accesos vehiculares en parques industriales, condominios y logística, y cómo se combina con el registro digital de visitas y la bitácora.`, shots: S.techCam, scope: 'both', markets: ['mx', 'co'] },
  { key: 'deteccion-armas-ia', catTag: 'ia', chip: 'IA Y TECNOLOGÍA', title: (m) => `Detección de Armas con IA en Videovigilancia`, kw: (m) => `detección de armas con inteligencia artificial`, angle: (m) => `Qué prometen los sistemas de detección de armas por IA, su tasa real de acierto/falsos positivos, y por qué el protocolo humano de respuesta sigue siendo lo determinante. Enfoque prudente, sin alarmismo.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'drones-vigilancia-perimetral', catTag: 'drones', chip: 'IA Y TECNOLOGÍA', title: (m) => `Drones para Vigilancia Perimetral${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `drones para vigilancia perimetral`, angle: (m) => `Dónde un dron aporta (perímetros extensos, inspección nocturna, respuesta a alarma) y dónde no. Costos, operador certificado, normativa aérea hedgeada, e integración con la central de monitoreo.`, shots: S.techCam, scope: 'both', markets: ['mx', 'co', 'cl', 'pe'] },
  { key: 'videovigilancia-nube', catTag: 'nube', chip: 'IA Y TECNOLOGÍA', title: (m) => `Videovigilancia en la Nube para Empresas de Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `videovigilancia en la nube`, angle: (m) => `CCTV en la nube vs DVR/NVR local: ventajas (acceso remoto, respaldo, escalar), riesgos (ancho de banda, dependencia, privacidad) y cuándo conviene a una empresa que monitorea múltiples sitios.`, shots: S.techCam, scope: 'both', markets: BIG },
  { key: 'camaras-ip-vs-analogicas', catTag: 'videovigilancia', chip: 'IA Y TECNOLOGÍA', title: (m) => `Cámaras IP vs Analógicas: Qué Conviene Hoy`, kw: (m) => `cámaras IP vs analógicas`, angle: (m) => `Comparativa honesta para el que arma o renueva un sistema: resolución, cableado, analítica embebida, costo total. Cuándo todavía tiene sentido lo analógico.`, shots: S.techCam, scope: 'agnostic' },
  { key: 'monitoreo-remoto-central-virtual', catTag: 'tecnología', chip: 'IA Y TECNOLOGÍA', title: (m) => `Monitoreo Remoto y Central Virtual${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `monitoreo remoto y central virtual`, angle: (m) => `Cómo una central virtual (sin sala física fija) coordina guardias, alertas y video desde un panel. Redundancia, turnos del operador, protocolos de escalamiento.`, shots: S.techRadio, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'iot-sensores-perimetrales', catTag: 'iot', chip: 'IA Y TECNOLOGÍA', title: (m) => `Sensores IoT y Protección Perimetral`, kw: (m) => `sensores IoT protección perimetral`, angle: (m) => `Sensores de barrera, vibración, apertura y su integración con la central: menos rondas "por si acaso", más rondas dirigidas por evento. Falsos positivos y mantenimiento.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'ciberseguridad-empresa-seguridad', catTag: 'ciberseguridad', chip: 'IA Y TECNOLOGÍA', title: (m) => `Ciberseguridad para Empresas de Seguridad Física${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `ciberseguridad para empresas de seguridad`, angle: (m) => `Las cámaras, la app y los datos de tus clientes son un objetivo. Higiene básica: contraseñas de cámaras, redes segmentadas, accesos por rol, respaldos. Por qué un incidente cibernético te cuesta el contrato.`, shots: S.techOps, scope: 'both', markets: ['mx', 'co'] },
  { key: 'proteccion-datos-videovigilancia', catTag: 'ciberseguridad', chip: 'IA Y TECNOLOGÍA', title: (m) => `Protección de Datos en Videovigilancia${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `protección de datos en videovigilancia`, angle: (m) => `Manejo responsable de imágenes y datos personales: retención, acceso, cartelería, derechos de las personas grabadas. Hedgea la normativa (varía por país); no es asesoría legal. Cómo un sistema con accesos por rol y trazabilidad te ayuda a cumplir.`, shots: S.techOps, scope: 'both', markets: ['mx', 'co', 'ar', 'cl', 'pe', 'ec'] },
  { key: 'control-acceso-biometrico', catTag: 'biometría', chip: 'IA Y TECNOLOGÍA', title: (m) => `Control de Acceso Biométrico${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `control de acceso biométrico`, angle: (m) => `Huella, rostro y credencial digital para accesos de personal y visitas. Ventajas frente a la libreta, consideraciones de privacidad, y cómo se ata al registro de visitas y la asistencia.`, shots: S.techCam, scope: 'both', markets: ['mx', 'co'] },
  { key: 'gps-geocercas-avanzado', catTag: 'gps', chip: 'IA Y TECNOLOGÍA', title: (m) => `Geocercas y GPS Avanzado para Rondas y Supervisión`, kw: (m) => `geocercas GPS para seguridad`, angle: (m) => `Más allá del punto azul: geocercas que disparan alertas si un guardia sale del objetivo, valida rondas por zona y arma un rastro histórico. Precisión, consumo de batería, privacidad del trabajador.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'automatizacion-informes-ia', catTag: 'ia', chip: 'IA Y TECNOLOGÍA', title: (m) => `Automatización de Informes con IA para Seguridad`, kw: (m) => `automatización de informes de seguridad`, angle: (m) => `Cómo la generación asistida convierte datos de asistencia, rondas y novedades en un informe mensual listo para el cliente en minutos. Qué revisar antes de enviarlo (la IA no reemplaza el criterio).`, shots: S.biz, scope: 'agnostic' },
  { key: 'dashboards-bi-seguridad', catTag: 'tecnología', chip: 'IA Y TECNOLOGÍA', title: (m) => `Dashboards y BI para Dirigir una Empresa de Seguridad`, kw: (m) => `dashboards y BI para seguridad privada`, angle: (m) => `Qué tableros de verdad usa un director: cobertura, cumplimiento de rondas, incidencias, rotación, rentabilidad por contrato. De la planilla al panel en tiempo real.`, shots: S.biz, scope: 'agnostic' },
  { key: 'transformacion-digital-seguridad', catTag: 'innovación', chip: 'IA Y TECNOLOGÍA', title: (m) => `Transformación Digital de una Empresa de Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `transformación digital empresa de seguridad`, angle: (m) => `Hoja de ruta realista para digitalizar sin frenar la operación: por dónde empezar (asistencia y novedades), cómo llevar al personal, errores comunes, y cómo medir el avance.`, shots: S.techOps, scope: 'both', markets: BIG },
  { key: 'integracion-sistemas-psim', catTag: 'tecnología', chip: 'IA Y TECNOLOGÍA', title: (m) => `Integración de Sistemas de Seguridad (PSIM) para Pymes`, kw: (m) => `integración de sistemas de seguridad PSIM`, angle: (m) => `Unir video, control de acceso, alarmas y personal en un solo panel sin comprar una plataforma millonaria. Qué integrar primero y cómo evitar el "Frankenstein" de sistemas que no se hablan.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'wearables-guardias', catTag: 'tecnología', chip: 'IA Y TECNOLOGÍA', title: (m) => `Wearables y Cámaras Corporales para Guardias`, kw: (m) => `cámaras corporales para guardias`, angle: (m) => `Body cams y wearables: evidencia, disuasión, protección del propio guardia y del cliente. Privacidad, almacenamiento, y cómo la evidencia se ata al reporte de incidente.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'tendencias-tecnologicas-seguridad-2026', catTag: 'tendencias', chip: 'TENDENCIAS', title: (m) => `Tendencias Tecnológicas en Seguridad Privada 2026${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `tendencias tecnológicas en seguridad 2026`, angle: (m) => `Panorama sobrio de lo que viene: IA en la central, video en la nube, movilidad total del guardia, integración de datos. Sin proyecciones numéricas inventadas; enfoque en qué debería mirar una empresa ${m.tag === 'latam' ? 'de la región' : 'de ' + m.label}.`, shots: S.trend, scope: 'both', markets: BIG },
  { key: 'ia-prediccion-ausentismo', catTag: 'ia', chip: 'IA Y TECNOLOGÍA', title: (m) => `Predecir el Ausentismo de Guardias con Datos`, kw: (m) => `predecir ausentismo de guardias`, angle: (m) => `Cómo los patrones de asistencia anticipan un faltazo antes de que ocurra, para mover la cobertura a tiempo. Qué señales miran los datos y cómo actuar sin castigar al que cumple.`, shots: S.ppl, scope: 'agnostic' },
  { key: 'nube-vs-servidor-local-seguridad', catTag: 'nube', chip: 'IA Y TECNOLOGÍA', title: (m) => `¿Nube o Servidor Local para tu Sistema de Seguridad?`, kw: (m) => `nube o servidor local seguridad`, angle: (m) => `Decisión práctica para el que elige plataforma: costo, disponibilidad, respaldo, control de datos, conectividad. Ni evangelismo de nube ni miedo: cuándo cada uno.`, shots: S.techCam, scope: 'agnostic' },
];

// VERTICALS (industry) — strong per-market
const VERT = [
  { key: 'retail-prevencion-perdidas', catTag: 'retail', chip: 'INDUSTRIAS', title: (m) => `Seguridad y Prevención de Pérdidas en Retail${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `prevención de pérdidas en retail`, angle: (m) => `Merma, hurto interno y externo, controles de salida, coordinación con la central. Cómo la evidencia digital (rondas, incidentes con foto) sostiene una operación de prevención de pérdidas seria.`, shots: S.vert, scope: 'both', markets: BIG },
  { key: 'logistica-centros-distribucion', catTag: 'logística', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Logística y Centros de Distribución${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en centros de distribución`, angle: (m) => `Andenes, control de unidades, precintos, faltantes en tránsito. La bitácora de maniobras y el control vehicular como respaldo ante reclamos de carga.`, shots: S.vert, scope: 'both', markets: BIG },
  { key: 'seguridad-cadena-suministro', catTag: 'logística', chip: 'INDUSTRIAS', title: (m) => `Seguridad en la Cadena de Suministro y Transporte de Carga`, kw: (m) => `seguridad en la cadena de suministro`, angle: (m) => `Del CD a la última milla: puntos de control, custodia, coordinación por radio, trazabilidad. Cómo la empresa de seguridad aporta datos verificables a un cliente logístico exigente.`, shots: S.vertCrm, scope: 'agnostic' },
  { key: 'seguridad-hospitales-salud', catTag: 'salud', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Hospitales y Centros de Salud${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en hospitales`, angle: (m) => `Urgencias, áreas restringidas, manejo de familiares alterados, control de acceso a farmacia/quirófanos. Protocolos escritos y trazabilidad de rondas por sector crítico.`, shots: S.opsInc, scope: 'both', markets: ['mx', 'co', 'ar', 'cl'] },
  { key: 'seguridad-instituciones-educativas', catTag: 'educación', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Colegios y Universidades${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en instituciones educativas`, angle: (m) => `Entradas/salidas, control de ingreso de padres y proveedores, protocolos y simulacros, campus abiertos con actividad nocturna. Coordinación con la dirección del plantel.`, shots: S.vertCrm, scope: 'both', markets: ['mx', 'co', 'pe'] },
  { key: 'seguridad-banca-financiero', catTag: 'banca', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Banca y Sector Financiero${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en banca y sector financiero`, angle: (m) => `Sucursales, cajeros, transporte de valores (mención general), protocolos ante asalto, cumplimiento y auditoría del cliente bancario. Alta exigencia documental.`, shots: S.biz, scope: 'both', markets: ['mx', 'co', 'pe'] },
  { key: 'seguridad-data-centers', catTag: 'datacenter', chip: 'INDUSTRIAS', title: (m) => `Seguridad Física en Data Centers`, kw: (m) => `seguridad física en data centers`, angle: (m) => `Anillos de acceso, control estricto de visitas técnicas, trazabilidad total, tolerancia cero a la duda. Por qué el data center es el cliente que más exige evidencia y cómo cumplir.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'seguridad-energia-petroleo', catTag: 'energía', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Energía, Petróleo y Gas${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en petróleo y gas`, angle: (m) => `Objetivos remotos, turnos largos, conectividad intermitente, exigencia HSE del operador. Modo sin conexión, evidencia y control de accesos en instalaciones críticas.`, shots: S.vert, scope: 'both', markets: ['co', 'ar', 'pe', 'ec'] },
  { key: 'seguridad-mineria', catTag: 'minería', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Minería${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en minería`, angle: (m) => `Campamentos, accesos, control de personal contratista, distancias enormes, integración con HSE. Rondas verificables y comunicaciones en zonas sin señal.`, shots: S.vert, scope: 'both', markets: ['pe', 'cl', 'bo'] },
  { key: 'seguridad-puertos-maritimo', catTag: 'puertos', chip: 'INDUSTRIAS', title: (m) => `Seguridad Portuaria y Marítima${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad portuaria`, angle: (m) => `Control de accesos de transportistas, perímetros extensos, coordinación 24/7 con la terminal, normativa portuaria hedgeada. Evidencia y trazabilidad para el operador portuario.`, shots: S.vert, scope: 'both', markets: ['co', 'pe', 'cl', 'ec'] },
  { key: 'seguridad-eventos-masivos', catTag: 'eventos', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Eventos Masivos${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en eventos masivos`, angle: (m) => `Dotación temporal grande, consignas por sector, comunicación en tiempo real, control de aforo, cierre con informe. Dar de alta y desarmar un operativo completo en horas.`, shots: S.bizSch, scope: 'both', markets: ['mx', 'co', 'ar', 'cl'] },
  { key: 'seguridad-construccion-obras', catTag: 'construcción', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Obras y Construcción${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en obras de construcción`, angle: (m) => `Robo de material y herramienta, control de ingreso de personal y proveedores, rondas en obra gris, coordinación con el residente. Bitácora que respalda ante faltantes.`, shots: S.vert, scope: 'both', markets: ['mx', 'co', 'pe'] },
  { key: 'seguridad-hoteleria-turismo', catTag: 'hotelería', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Hotelería y Turismo${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en hotelería`, angle: (m) => `Seguridad discreta con el huésped primero, coordinación con gerencia, rondas por áreas públicas y de servicio, temporadas. El equilibrio entre control y experiencia.`, shots: S.vertCrm, scope: 'both', markets: ['mx', 'do', 'cr'] },
  { key: 'seguridad-corporativa-oficinas', catTag: 'corporativo', chip: 'INDUSTRIAS', title: (m) => `Seguridad Corporativa en Edificios de Oficinas${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad corporativa en oficinas`, angle: (m) => `Recepción, control de acceso de empleados y visitas, imagen frente a un cliente exigente, reportes ejecutivos. Consignas, presentación y datos que renuevan el contrato.`, shots: S.biz, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'seguridad-agroindustria', catTag: 'agroindustria', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Agroindustria y Campo${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en agroindustria`, angle: (m) => `Fincas y plantas alejadas, robo de insumos y cosecha, control de temporada alta, conectividad limitada. Rondas verificables y modo sin conexión en el campo.`, shots: S.vert, scope: 'both', markets: ['co', 'ar', 'pe', 'ec'] },
  { key: 'seguridad-condominios-residencial', catTag: 'corporativo', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Condominios y Conjuntos Residenciales${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en condominios residenciales`, angle: (m) => `Portería, control de visitas y proveedores, paquetería, la relación con la administración/comité. Registro digital de accesos y portal para la administración del conjunto. Usa el término local para "conjunto/condominio/barrio".`, shots: S.vertCrm, scope: 'both', markets: ['co', 'cl', 'pe'] },
  { key: 'seguridad-farmaceutica-laboratorios', catTag: 'farmacéutica', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Farmacéutica y Laboratorios`, kw: (m) => `seguridad en farmacéutica`, angle: (m) => `Control de acceso a áreas GMP, trazabilidad, custodia de producto controlado, auditoría del cliente. Documentación impecable como requisito, no como extra.`, shots: S.techOps, scope: 'agnostic' },
  { key: 'seguridad-gobierno-instituciones', catTag: 'gobierno', chip: 'INDUSTRIAS', title: (m) => `Seguridad en Instituciones Públicas y Gobierno${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad en instituciones públicas`, angle: (m) => `Contratos públicos: exigencia de trazabilidad, control de accesos ciudadano, auditoría y rendición. Cómo la evidencia digital sostiene un servicio ante la fiscalización. Normativa de contratación pública hedgeada.`, shots: S.biz, scope: 'both', markets: ['mx', 'co'] },
];

// BUSINESS / GROWTH
const BIZ = [
  { key: 'marketing-digital-empresa-seguridad', catTag: 'marketing', chip: 'CRECIMIENTO', title: (m) => `Marketing Digital para Empresas de Seguridad Privada${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `marketing digital para empresas de seguridad`, angle: (m) => `Cómo consigue clientes hoy una empresa de seguridad: presencia local, referidos sistematizados, propuesta clara, prueba de capacidad operativa. Sin promesas mágicas de leads.`, shots: S.biz, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'captar-clientes-corporativos-seguridad', catTag: 'ventas', chip: 'CRECIMIENTO', title: (m) => `Cómo Captar Clientes Corporativos de Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `captar clientes corporativos de seguridad`, angle: (m) => `Qué mira un comprador corporativo: capacidad demostrable, trazabilidad, respuesta, referencias. Cómo llegar preparado y diferenciarte del que solo compite por precio.`, shots: S.biz, scope: 'both', markets: BIG },
  { key: 'propuesta-tecnica-ganadora-seguridad', catTag: 'ventas', chip: 'CRECIMIENTO', title: (m) => `Cómo Armar una Propuesta Técnica de Seguridad Ganadora`, kw: (m) => `propuesta técnica de seguridad`, angle: (m) => `Estructura de una propuesta que gana: análisis del riesgo del cliente, dotación y cobertura, tecnología, plan de supervisión, entregables de reporte, indicadores. La evidencia como argumento.`, shots: S.biz, scope: 'agnostic' },
  { key: 'diferenciarse-competencia-seguridad', catTag: 'ventas', chip: 'CRECIMIENTO', title: (m) => `Cómo Diferenciarte de la Competencia en Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `diferenciarse de la competencia en seguridad`, angle: (m) => `En un mercado que compite por precio, la diferenciación real es operación verificable y comunicación con el cliente. Cómo mostrarlo antes de firmar y sostenerlo después.`, shots: S.biz, scope: 'both', markets: ['mx', 'co', 'ar', 'pe', 'cl'] },
  { key: 'modelo-precios-margen-seguridad', catTag: 'ventas', chip: 'CRECIMIENTO', title: (m) => `Modelo de Precios y Margen en Servicios de Seguridad`, kw: (m) => `modelo de precios en servicios de seguridad`, angle: (m) => `Estructura de costeo por puesto: cobertura real, factor de reemplazo, supervisión, equipo, administración, margen. Explica el método; nada de precios inventados. Por qué el retrabajo administrativo te come el margen.`, shots: S.bizSch, scope: 'agnostic' },
  { key: 'reducir-costos-operativos-seguridad', catTag: 'administración', chip: 'CRECIMIENTO', title: (m) => `Cómo Reducir Costos Operativos sin Bajar el Servicio${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `reducir costos operativos en seguridad`, angle: (m) => `Dónde se fuga la plata: horas extra no planeadas, coberturas de urgencia, supervisión en ruta, retrabajo. Cómo la digitalización recupera margen sin recortar calidad. Sin cifras inventadas.`, shots: S.bizSch, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'escalar-empresa-seguridad', catTag: 'emprendimiento', chip: 'CRECIMIENTO', title: (m) => `Cómo Escalar una Empresa de Seguridad sin Perder el Control${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `escalar una empresa de seguridad`, angle: (m) => `El salto de 50 a 300 elementos: dónde se rompe la operación, qué procesos estandarizar primero, y por qué sin sistema el crecimiento genera caos y pérdida de clientes.`, shots: S.biz, scope: 'both', markets: BIG },
  { key: 'roi-software-seguridad', catTag: 'kpis', chip: 'CRECIMIENTO', title: (m) => `El ROI de un Software de Gestión de Seguridad`, kw: (m) => `ROI de un software de seguridad`, angle: (m) => `Cómo se paga solo un sistema: menos horas extra, menos multas por incumplimiento, menos clientes perdidos, menos horas administrativas. Marco para calcularlo con TUS números, sin inventar cifras.`, shots: S.biz, scope: 'agnostic' },
  { key: 'sla-acuerdos-nivel-servicio-seguridad', catTag: 'clientes', chip: 'CRECIMIENTO', title: (m) => `SLA y Acuerdos de Nivel de Servicio en Seguridad`, kw: (m) => `SLA en servicios de seguridad`, angle: (m) => `Qué prometer y cómo medirlo: cobertura, tiempo de respuesta, cumplimiento de rondas, entregables. El SLA como herramienta de retención, no de conflicto. Cómo la data respalda el cumplimiento.`, shots: S.biz, scope: 'agnostic' },
  { key: 'profesionalizacion-sector-seguridad', catTag: 'tendencias', chip: 'TENDENCIAS', title: (m) => `La Profesionalización del Sector de Seguridad Privada${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `profesionalización de la seguridad privada`, angle: (m) => `De "poner un señor en la puerta" a un servicio con datos, procesos y personal capacitado. Qué exige hoy el cliente y hacia dónde va el estándar en ${m.tag === 'latam' ? 'la región' : m.label}.`, shots: S.trend, scope: 'both', markets: ['mx', 'co', 'ar', 'pe', 'cl', 'ec'] },
  { key: 'crm-relacion-cliente-seguridad', catTag: 'clientes', chip: 'CRECIMIENTO', title: (m) => `Gestión de la Relación con el Cliente en Seguridad`, kw: (m) => `gestión de clientes en empresas de seguridad`, angle: (m) => `Más allá del contrato: seguimiento proactivo, informes que se leen, respuesta rápida, portal de transparencia. Por qué el cliente se va por percepción de abandono, no por un incidente.`, shots: S.biz, scope: 'agnostic' },
  { key: 'expansion-nuevas-ciudades-seguridad', catTag: 'emprendimiento', chip: 'CRECIMIENTO', title: (m) => `Cómo Expandir tu Empresa de Seguridad a Nuevas Ciudades${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `expandir empresa de seguridad a nuevas ciudades`, angle: (m) => `Operar a distancia sin perder disciplina: supervisión por excepción, estándares replicables, central que ve todo. Los errores típicos de abrir plaza nueva y cómo evitarlos.`, shots: S.biz, scope: 'both', markets: ['mx', 'co', 'ar'] },
];

// WORKFORCE / PERSONAL
const PPL = [
  { key: 'bienestar-salud-mental-guardias', catTag: 'personal', chip: 'PERSONAL', title: (m) => `Bienestar y Salud Mental de los Guardias${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `bienestar y salud mental de guardias`, angle: (m) => `Turnos largos, soledad, estrés. Por qué el bienestar del guardia impacta directo en rotación y calidad, y qué medidas concretas (turnos justos, reconocimiento, canales de reporte) funcionan.`, shots: S.ppl, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'reclutamiento-seleccion-guardias', catTag: 'contratación', chip: 'PERSONAL', title: (m) => `Reclutamiento y Selección de Guardias${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `reclutamiento y selección de guardias`, angle: (m) => `Dónde y cómo encontrar buen personal, filtros de selección, verificación de antecedentes (hedgeado por país), y cómo un buen proceso reduce la rotación desde el día uno. Enfoque en el legajo/expediente digital.`, shots: S.pplTask, scope: 'both', markets: ['mx', 'co', 'pe'] },
  { key: 'fatiga-turnos-nocturnos-guardias', catTag: 'turnos', chip: 'PERSONAL', title: (m) => `Fatiga y Turnos Nocturnos: Cómo Cuidar al Guardia`, kw: (m) => `fatiga en turnos nocturnos de guardias`, angle: (m) => `El costo oculto de la fatiga: errores, microsueños, incidentes. Diseño de rol que reparte la carga nocturna, controles de estado y por qué el descanso es parte de la seguridad.`, shots: S.ppl, scope: 'agnostic' },
  { key: 'evaluacion-desempeno-guardias', catTag: 'personal', chip: 'PERSONAL', title: (m) => `Cómo Evaluar el Desempeño de tus Guardias`, kw: (m) => `evaluación de desempeño de guardias`, angle: (m) => `Evaluar con datos, no con impresiones: puntualidad, cumplimiento de rondas, calidad de reportes, trato al cliente. Un sistema de desempeño justo que el personal entienda.`, shots: S.pplTask, scope: 'agnostic' },
  { key: 'plan-carrera-retencion-talento-seguridad', catTag: 'rotación', chip: 'PERSONAL', title: (m) => `Plan de Carrera y Retención de Talento en Seguridad`, kw: (m) => `retención de talento en seguridad privada`, angle: (m) => `Del guardia al supervisor al coordinador: por qué una ruta de crecimiento visible retiene mejor que un aumento aislado. Cómo estructurarla en una empresa mediana.`, shots: S.ppl, scope: 'agnostic' },
  { key: 'onboarding-nuevos-guardias', catTag: 'capacitación', chip: 'PERSONAL', title: (m) => `Onboarding de Nuevos Guardias: Las Primeras 72 Horas`, kw: (m) => `onboarding de nuevos guardias`, angle: (m) => `El arranque define la permanencia: inducción, consignas del puesto, acompañamiento inicial, expectativas claras. Cómo estandarizar el onboarding y dejar constancia.`, shots: S.pplTask, scope: 'agnostic' },
  { key: 'incentivos-productividad-guardias', catTag: 'personal', chip: 'PERSONAL', title: (m) => `Incentivos y Reconocimiento para Guardias`, kw: (m) => `incentivos para guardias de seguridad`, angle: (m) => `Qué motiva de verdad más allá del sueldo: reconocimiento visible, reglas justas de cobertura, datos que respaldan al que cumple. Cómo evitar incentivos que premian lo equivocado.`, shots: S.ppl, scope: 'agnostic' },
  { key: 'prevencion-accidentes-guardias', catTag: 'capacitación', chip: 'PERSONAL', title: (m) => `Prevención de Accidentes y SST para Guardias${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `seguridad y salud en el trabajo para guardias`, angle: (m) => `El guardia también es un trabajador expuesto: riesgos del puesto, protocolos, EPP, reporte de casi-accidentes. Marco general de SST hedgeado por país; no es asesoría legal.`, shots: S.pplTask, scope: 'both', markets: ['co', 'cl', 'pe'] },
];

// OPERATIONS (new angles, mapped to existing theme categories)
const OPS = [
  { key: 'patrullaje-inteligente-optimizar-rutas', catTag: 'rondas', chip: 'OPERACIÓN', title: (m) => `Patrullaje Inteligente: Optimizar Rutas de Ronda`, kw: (m) => `optimizar rutas de patrullaje`, angle: (m) => `Rondas que no sean predecibles ni un acto de fe: aleatoriedad controlada, cobertura de puntos críticos, verificación por QR/NFC, y lectura de excepciones en la central.`, shots: S.ops, scope: 'agnostic' },
  { key: 'gestion-llaves-activos-seguridad', catTag: 'visitas', chip: 'OPERACIÓN', title: (m) => `Gestión de Llaves y Activos en el Puesto`, kw: (m) => `gestión de llaves y activos`, angle: (m) => `Control de llaves, radios, equipos y entregas entre turnos. Cómo el registro digital elimina el "quién tenía la llave" y responsabiliza cada entrega.`, shots: S.ops, scope: 'agnostic' },
  { key: 'patrulla-vehicular-flota-seguridad', catTag: 'supervisión', chip: 'OPERACIÓN', title: (m) => `Patrulla Vehicular y Gestión de Flota de Supervisión${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `patrulla vehicular en seguridad privada`, angle: (m) => `Rutas de supervisión, verificación de visitas a puestos, respuesta a alarmas, control de la flota. Del recorrido de rutina a la ruta dirigida por excepción.`, shots: S.ops, scope: 'both', markets: ['mx', 'co', 'ar'] },
  { key: 'coordinacion-central-tiempo-real', catTag: 'radio', chip: 'OPERACIÓN', title: (m) => `Coordinación de la Central en Tiempo Real`, kw: (m) => `coordinación de central de seguridad`, angle: (m) => `Cómo una central atiende alertas, comunica por radio, escala y documenta sin perder el hilo. Roles del operador, protocolos y el tablero que lo sostiene.`, shots: S.techRadio, scope: 'agnostic' },
  { key: 'auditorias-calidad-puestos-seguridad', catTag: 'supervisión', chip: 'OPERACIÓN', title: (m) => `Auditorías de Calidad de Puestos de Seguridad`, kw: (m) => `auditorías de calidad de puestos`, angle: (m) => `Checklist de auditoría, frecuencia, evidencia, plan de acción. Cómo convertir la supervisión en mejora continua y demostrarle al cliente que auditas de verdad.`, shots: S.opsInc, scope: 'agnostic' },
  { key: 'gestion-incidentes-flujo-completo', catTag: 'novedades', chip: 'OPERACIÓN', title: (m) => `Gestión de Incidentes: del Reporte al Cierre`, kw: (m) => `gestión de incidentes de seguridad`, angle: (m) => `El flujo completo: registro con evidencia, clasificación por prioridad, notificación, seguimiento y cierre. Cómo evitar que un incidente se pierda entre WhatsApps.`, shots: S.opsInc, scope: 'agnostic' },
  { key: 'plan-continuidad-operaciones-seguridad', catTag: 'protocolos', chip: 'OPERACIÓN', title: (m) => `Plan de Continuidad de Operaciones para Empresas de Seguridad`, kw: (m) => `plan de continuidad de operaciones`, angle: (m) => `Qué pasa si cae la central, falla la conectividad o falta personal masivamente. Redundancia, modo sin conexión, protocolos de contingencia y comunicación al cliente.`, shots: S.techRadio, scope: 'agnostic' },
  { key: 'gestion-multiples-sitios-seguridad', catTag: 'supervisión', chip: 'OPERACIÓN', title: (m) => `Cómo Gestionar Múltiples Sitios desde un Solo Panel`, kw: (m) => `gestión de múltiples sitios de seguridad`, angle: (m) => `De la carpeta por sitio al tablero único: configurar cada servicio una vez, ver excepciones de todos, estandarizar sin uniformar de más. El reto de la empresa que crece.`, shots: S.biz, scope: 'agnostic' },
  { key: 'estandarizar-procedimientos-seguridad', catTag: 'consignas', chip: 'OPERACIÓN', title: (m) => `Cómo Estandarizar Procedimientos en toda tu Operación`, kw: (m) => `estandarizar procedimientos de seguridad`, angle: (m) => `Consignas, protocolos y checklists que se cumplen porque viven en el celular del guardia, no en una carpeta. Cómo escribirlos para que se lean y se ejecuten igual en todos los puestos.`, shots: S.pplTask, scope: 'agnostic' },
  { key: 'comunicacion-cliente-tiempo-real-seguridad', catTag: 'clientes', chip: 'OPERACIÓN', title: (m) => `Comunicación con el Cliente en Tiempo Real`, kw: (m) => `comunicación con el cliente en seguridad`, angle: (m) => `El portal del cliente y las notificaciones proactivas: transparencia que reduce reclamos. Qué mostrarle al cliente y qué no, y por qué ver los datos genera confianza.`, shots: S.biz, scope: 'agnostic' },
];

// COUNTRY-LEVEL trend/state pieces (one per big market, distinct from existing tendencias)
const COUNTRY = [
  { key: 'estado-industria-seguridad', catTag: 'tendencias', chip: 'TENDENCIAS', title: (m) => `El Estado de la Industria de Seguridad Privada en ${m.label}`, kw: (m) => `industria de seguridad privada en ${m.label}`, angle: (m) => `Panorama sobrio del sector en ${m.label}: fragmentación, presión de precios, exigencia creciente de tecnología y evidencia, profesionalización. Sin cifras de mercado inventadas; describe dinámicas reales. Normativa mencionada en general y hedgeada.`, shots: S.trend, scope: 'market', markets: BIG },
  { key: 'futuro-guardia-seguridad', catTag: 'tendencias', chip: 'TENDENCIAS', title: (m) => `El Futuro del Guardia de Seguridad${m.tag === 'latam' ? '' : ' en ' + m.label}`, kw: (m) => `el futuro del guardia de seguridad`, angle: (m) => `Ni reemplazo total por tecnología ni statu quo: el guardia aumentado por la app, la analítica y la central. Qué habilidades pesarán y cómo cambia el rol.`, shots: S.trend, scope: 'both', markets: ['mx', 'co'] },
];

const POOLS = [...TECH, ...VERT, ...BIZ, ...PPL, ...OPS, ...COUNTRY];

// ---- compose ----
function slugify(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function mkSlug(topic, m) { return `${topic.key}-${m.sfx}`; }

const used = new Set(existing);
const out = [];
function add(topic, mkey) {
  const m = M[mkey];
  const slug = mkey === 'latam' ? topic.key : mkSlug(topic, m);
  if (used.has(slug)) return false;
  used.add(slug);
  const tags = mkey === 'latam' ? [topic.catTag, 'latam'] : [m.tag, topic.catTag];
  const chip = mkey === 'latam' ? topic.chip : m.chip;
  out.push({ slug, country: mkey, chip, tags, title: topic.title(m), keyword: topic.kw(m), angle: `${topic.angle(m)} Vocabulario: ${m.voc}.`, shots: topic.shots });
  return true;
}

// 1) agnostic singles (diversity core)
for (const topic of POOLS) {
  if (topic.scope === 'agnostic' || topic.scope === 'both') add(topic, 'latam');
}

// 2) market variants for big markets (weighted). Round-robin topics per market for spread.
const marketQuota = { mx: 95, co: 78, ar: 62, pe: 52, cl: 50, ec: 34, pa: 9, gt: 9, cr: 9, do: 8, bo: 8, sv: 7, hn: 6, py: 6 };
// build eligible topic list per market (market or both scope + market in markets list)
function eligible(mkey) {
  return POOLS.filter((tp) => (tp.scope === 'market' || tp.scope === 'both') && (tp.markets ? tp.markets.includes(mkey) : BIG.includes(mkey)));
}
// For small markets, allow a curated intro set (verticals + tech + business generic) even if not listed
function eligibleSmall(mkey) {
  const keys = ['ia-operacion-seguridad', 'videovigilancia-nube', 'transformacion-digital-seguridad', 'tendencias-tecnologicas-seguridad-2026', 'retail-prevencion-perdidas', 'logistica-centros-distribucion', 'seguridad-corporativa-oficinas', 'seguridad-condominios-residencial', 'captar-clientes-corporativos-seguridad', 'escalar-empresa-seguridad', 'profesionalizacion-sector-seguridad', 'estado-industria-seguridad', 'proteccion-datos-videovigilancia'];
  return POOLS.filter((tp) => keys.includes(tp.key));
}

for (const mkey of Object.keys(marketQuota)) {
  const pool = SMALL.includes(mkey) ? eligibleSmall(mkey) : eligible(mkey);
  let i = 0, added = 0;
  // iterate repeatedly is not needed; pool topics are unique per market
  for (const tp of pool) {
    if (added >= marketQuota[mkey]) break;
    if (add(tp, mkey)) added++;
  }
}

// 3) if under 500, top up big markets with any remaining eligible topics not yet used
const order = ['mx', 'co', 'ar', 'pe', 'cl', 'ec', 'pa', 'gt', 'cr', 'do', 'bo', 'sv', 'hn', 'py'];
let guard = 0;
while (out.length < 500 && guard++ < 5000) {
  let progressed = false;
  for (const mkey of order) {
    if (out.length >= 500) break;
    const pool = SMALL.includes(mkey) ? eligibleSmall(mkey) : eligible(mkey);
    for (const tp of pool) { if (add(tp, mkey)) { progressed = true; break; } }
  }
  if (!progressed) break;
}

// 4) still short? add remaining agnostic-only topics already added; then market versions of agnostic topics for big markets
if (out.length < 500) {
  const agnosticTopics = POOLS.filter((tp) => tp.scope !== 'market');
  outer: for (const mkey of ['mx', 'co', 'ar', 'pe', 'cl', 'ec']) {
    for (const tp of agnosticTopics) {
      if (out.length >= 500) break outer;
      add(tp, mkey);
    }
  }
}

const manifest = { spec: '500 posts ES concentrados en nuestros mercados; diversidad temática (tech/IA, verticales, negocio, personal, operación, tendencias); dedup contra existentes.', posts: out.slice(0, 500) };
fs.writeFileSync(SP + '/manifest-500.json', JSON.stringify(manifest, null, 1));

// report
const byMarket = {}; const byChip = {};
for (const p of manifest.posts) { byMarket[p.country] = (byMarket[p.country] || 0) + 1; byChip[p.chip] = (byChip[p.chip] || 0) + 1; }
console.log('TOTAL:', manifest.posts.length);
console.log('por mercado:', JSON.stringify(byMarket));
console.log('por chip:', JSON.stringify(byChip));
// collision check vs existing
const coll = manifest.posts.filter((p) => existing.has(p.slug));
console.log('colisiones con existentes:', coll.length);
const slugs = manifest.posts.map((p) => p.slug);
console.log('slugs duplicados internos:', slugs.length - new Set(slugs).size);
