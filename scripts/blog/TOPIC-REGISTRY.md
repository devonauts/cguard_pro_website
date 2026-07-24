# Blog topic registry — CGuardPro marketing site

Source-of-truth of what the blog already covers, so future waves add NEW topics fast without duplicating. Regenerate the raw list anytime with `node scripts/blog/inventory.mjs` (writes `existing-inventory.json`).

**Status 2026-07-24:** 719 posts total (692 ES / 27 EN), ~213 distinct topic stems.

## How to use this before a new wave

1. Run `inventory.mjs`. Compare candidate topics against the stems below.
2. A "stem" is the topic minus its market suffix (`-mexico`, `-colombia`, …). If a stem exists for the markets you want, it's COVERED — pick a different topic or a market that lacks it.
3. Only greenlight stems NOT in the list below. Then follow `README.md` playbook.

## Markets in play (concentrate here — user directive)

Big: **MX, CO, AR, PE, CL, EC**. Smaller LATAM: **PA, GT, CR, DO, BO, SV, HN, PY**. Plus pan-LATAM (`latam`, neutral Spanish) and legacy **US/Texas (EN + ES)**. No new countries (España/US-EN expansion was declined).

## Category taxonomy (blog index chips — `src/pages/blog/index.astro`)

Rondas · Turnos y Asistencia · Novedades y Reportes · Emergencias y Radio · Clientes y Ventas · Personal · Normativa · **Tecnología e IA** (new 2026-07-24) · **Industrias** (new 2026-07-24) · App y Producto · Países · Gestión y Software. Category is decided by the FIRST matching tag in list order — tech/verticales sit before `paises`, so a `[méxico, ia]` post lands in Tecnología, not Países.

## Covered topic stems (do NOT re-spin these)

### Tecnología e IA (2026-07-24 wave)
ia-operacion-seguridad · ia-prediccion-ausentismo · analitica-video-inteligente · reconocimiento-facial-limites · lpr-control-vehicular · deteccion-armas-ia · drones-vigilancia-perimetral · videovigilancia-nube · camaras-ip-vs-analogicas · monitoreo-remoto-central-virtual · iot-sensores-perimetrales · ciberseguridad-empresa-seguridad · proteccion-datos-videovigilancia · control-acceso-biometrico · gps-geocercas-avanzado · automatizacion-informes-ia · dashboards-bi-seguridad · transformacion-digital-seguridad · integracion-sistemas-psim · wearables-guardias · nube-vs-servidor-local-seguridad · tendencias-tecnologicas-seguridad-2026

### Industrias / verticales (2026-07-24 wave)
retail-prevencion-perdidas · logistica-centros-distribucion · seguridad-cadena-suministro · seguridad-hospitales-salud · seguridad-instituciones-educativas · seguridad-banca-financiero · seguridad-data-centers · seguridad-energia-petroleo · seguridad-mineria · seguridad-puertos-maritimo · seguridad-eventos-masivos · seguridad-construccion-obras · seguridad-hoteleria-turismo · seguridad-corporativa-oficinas · seguridad-agroindustria · seguridad-condominios-residencial · seguridad-farmaceutica-laboratorios · seguridad-gobierno-instituciones · (legacy sector posts: seguridad-parques-industriales/centros-comerciales/fraccionamientos/corporativos/hospitales/hoteles-resorts/escuelas-universidades/centros-logisticos/barrios-cerrados/consorcios-edificios/shoppings/universidades/logistica-depositos)

### Negocio / crecimiento
marketing-digital-empresa-seguridad · captar-clientes-corporativos-seguridad · propuesta-tecnica-ganadora-seguridad · diferenciarse-competencia-seguridad · modelo-precios-margen-seguridad · reducir-costos-operativos-seguridad · escalar-empresa-seguridad · roi-software-seguridad · sla-acuerdos-nivel-servicio-seguridad · profesionalizacion-sector-seguridad · crm-relacion-cliente-seguridad · expansion-nuevas-ciudades-seguridad · estado-industria-seguridad · futuro-guardia-seguridad · como-cotizar-servicios-seguridad · como-ganar-licitaciones-seguridad · licitaciones-seguridad-privada · retener/como-retener-clientes-empresa-seguridad · contratos-seguridad-privada · como-abrir-empresa-seguridad(-privada) · mejores-software-empresas-seguridad-privada · software-vs-excel-empresas-seguridad

### Personal / workforce
bienestar-salud-mental-guardias · reclutamiento-seleccion-guardias · fatiga-turnos-nocturnos-guardias · evaluacion-desempeno-guardias · plan-carrera-retencion-talento-seguridad · onboarding-nuevos-guardias · incentivos-productividad-guardias · prevencion-accidentes-guardias · capacitacion-(continua-)guardias/vigiladores · reducir-rotacion-guardias/vigiladores · ausentismo-guardias/vigiladores · entrevista-contratacion-guardias-preguntas · uniformes-equipo-basico-guardia · horas-extras-guardias/vigiladores · nomina-empresa-seguridad-errores-comunes

### Operación
patrullaje-inteligente-optimizar-rutas · gestion-llaves-activos-seguridad · patrulla-vehicular-flota-seguridad · coordinacion-central-tiempo-real · auditorias-calidad-puestos-seguridad · gestion-incidentes-flujo-completo · plan-continuidad-operaciones-seguridad · gestion-multiples-sitios-seguridad · estandarizar-procedimientos-seguridad · comunicacion-cliente-tiempo-real-seguridad · central-monitoreo-como-montar · supervisores-zona · relevo-turno-guardias/vigiladores · consignas-de-puesto · checklist-apertura-puesto-servicio · control-accesos-casetas/garitas · control-visitas-fraccionamientos/barrios-cerrados/porterias

### Producto (feature clusters — heavily covered per country, AVOID)
control-rondas(-qr/guardias/vigiladores/agentes/vigilancia) · rondines/rondas-nocturnas-buenas-practicas · rondas-qr-vs-bastones · que-es-control-de-rondas · frecuencia-ideal-rondas · control-asistencia(-guardias/vigiladores/digital) · checador/fichada-gps · libro-novedades/minuta/bitacora-digital · documentar-incidentes/novedades · boton-panico(-guardias/vigiladores) · protocolo-boton-de-panico · radio-ptt(-guardias/vigiladores/vigilantes/agentes) · radio-convencional-vs-ptt · supervision-gps(-guardias/vigiladores) · roles-turnos(-guardias/vigilantes) · rol-de-servicio-vigiladores · turno-24x24 · sacafranco/franco-compensatorio · portal-cliente(-empresas/vigilancia/seguridad) · app-(guardias/vigilantes/vigiladores/agentes/oficiales)-seguridad · funcionalidades-recorrido-completo · apps-vs-cuadernos

### Normativa (always hedged — per country)
regulaciones-seguridad-privada · normatividad · registro/habilitacion/permiso-operacion-empresa · requisitos-guardias/vigiladores · sicosep (EC) · empresas-seguridad-chile-os10-guia · licencia-guardia-texas · guias-empresas (colombia/peru/mexico-tendencias/argentina-tendencias)

### Country software/city (100-post wave — AVOID re-spinning cities)
software-seguridad-privada-<país/ciudad> (MX cities, AR cities, + LATAM countries) · mejores-ciudades-empresas-seguridad · guia-gestionar-empresa-seguridad

## Gaps / ideas for the NEXT wave (not yet covered)

- **Tech deeper**: torres/cámaras móviles de monitoreo, energía solar autónoma, chatbots de atención en central, gemelo digital/mapa de operación, guardia virtual, 5G/conectividad, analítica de comportamiento, ANPR en flota.
- **Verticales faltantes**: transporte de valores (dedicado), estadios/deportivo, cannabis (donde aplique), museos/patrimonio, aeropuertos, minoristas de lujo, cadenas de farmacias, casinos, iglesias/culto.
- **Negocio**: fusiones/adquisición de carteras, financiamiento/capital de trabajo, seguros/pólizas para la empresa, PR/reputación tras un incidente, benchmarking de la industria.
- **US/Texas EN** (only if user re-opens that market): mirror the tech/vertical clusters in English.
- **Formatos**: guías descargables (más /recursos), casos/plantillas, glosarios, comparativas de normativa entre países.

Keep this file updated after each wave (append the new stems + prune the gaps you filled).
