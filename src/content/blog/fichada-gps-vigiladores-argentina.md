---
title: "Fichada con GPS y Selfie de Vigiladores en Argentina"
description: "Fichada con GPS de vigiladores en Argentina: terminá con la marcación por teléfono y el objetivo descubierto. Cómo implementarla sin fricción y qué hacer si falla la señal."
pubDate: 2026-07-24
author: "CGuardPro"
image: "/blog/fichada-gps-vigiladores-argentina.jpg"
tags: ["argentina", "asistencia"]
lang: "es"
---

## El objetivo descubierto es un problema de fichada

Casi toda empresa de seguridad argentina tuvo, alguna vez, el llamado que no querés recibir: el cliente avisa que el objetivo está sin vigilador, cuando según tu planilla estaba cubierto. La causa casi siempre es la misma: la **fichada con GPS de vigiladores** no existe, y la asistencia se registra por teléfono. El vigilador que no llegó igual avisa que fichó, el compañero cubre el llamado, y el objetivo queda descubierto sin que la central se entere hasta que el cliente lo ve.

La fichada por teléfono o por planilla firmada al final del turno tiene un problema estructural: no prueba presencia. Prueba que alguien dijo que estaba. Y en un servicio de seguridad, la diferencia entre "dijo que estaba" y "estuvo" es exactamente lo que el cliente te paga por garantizar.

![Acceso del vigilador a la app para fichar su ingreso](/screenshots/worker-app/es-login.png)
*El vigilador ingresa con su cuenta personal y ficha desde el objetivo: la marcación queda ligada a su identidad, no a un llamado.*

## Qué resuelve la fichada con GPS y selfie

La fichada con GPS y selfie ata la marcación a dos hechos que no se pueden falsear por teléfono: **dónde** y **quién**. El vigilador marca su ingreso desde la app, el sistema captura sus coordenadas y le pide una selfie, y todo queda sellado con la hora exacta. Si las coordenadas no coinciden con el objetivo, la marcación no es válida. Si la selfie no es quien tiene que ser, salta a la vista.

Con eso, tres problemas clásicos desaparecen de raíz:

- **La fichada a distancia.** Nadie ficha desde su casa o desde el auto camino al objetivo: el GPS lo delata.
- **El reemplazo silencioso.** El que manda a un conocido a cubrirle el turno queda expuesto por la selfie y por la identidad de la cuenta.
- **El objetivo descubierto sin aviso.** Si a la hora de inicio no hay marcación válida, la central lo ve como una ausencia en el momento, no al día siguiente.

Podés ver el detalle de cómo funciona en el [control de asistencia de guardias](/control-de-asistencia-de-guardias): cada marca de ingreso y egreso queda con foto, ubicación y hora, y alimenta en tiempo real el estado de cobertura de cada objetivo.

## Implementarla sin fricción

El error más común al implementar la fichada digital es imponerla de golpe y en todos los objetivos a la vez. Los vigiladores la viven como un control policial, la administración se llena de casos raros el primer día y la iniciativa se quema. Conviene lo contrario: un despliegue gradual y explicado.

Un camino que funciona:

1. **Elegí un objetivo piloto** con pocos vigiladores por turno y un cliente que valore la trazabilidad.
2. **Explicá el "para qué".** La fichada no es para vigilar al que cumple; es para que el que sí llega tenga la prueba y para que la empresa reaccione cuando alguien no llega. Al buen vigilador lo protege.
3. **Corré en paralelo con el método viejo** una o dos semanas y compará. Vas a ver dónde estaban los huecos.
4. **Sumá objetivos de a poco,** cliente por cliente, no toda la cartera de un día para el otro.

La curva de aprendizaje es corta. Los vigiladores usan WhatsApp todos los días; fichar con una foto y un toque no les cuesta. La resistencia, cuando aparece, casi nunca es técnica: es de quienes se beneficiaban del sistema flojo.

![Perfil del vigilador con su información de servicio y legajo](/screenshots/worker-app/es-profile.png)
*El perfil del vigilador reúne su identidad y su legajo digital: la empresa sabe quién fichó, dónde estuvo asignado y qué registró.*

## Qué hacer cuando falla el GPS o no hay señal

Ninguna herramienta seria puede ignorar la realidad del terreno argentino: hay objetivos en zonas sin cobertura, sótanos donde el GPS no engancha, garitas de chapa donde la señal entra y sale. Si la fichada digital dependiera de una conexión perfecta, sería inaplicable en medio país. Por eso la implementación tiene que contemplar estos casos desde el diseño, no como excepción improvisada.

Principios prácticos para manejarlo:

- **La app debe permitir marcar aunque no haya señal en ese instante** y sincronizar la marcación cuando la recupera, conservando la hora real de la fichada.
- **Definí una tolerancia razonable de ubicación.** Un objetivo grande tiene un radio; la validación debería aceptar que el vigilador esté dentro del predio, no exigir un punto exacto.
- **Establecé un protocolo para el objetivo problemático.** Si sabés que en tal garita el GPS falla siempre, dejalo documentado en la consigna y definí una marcación alternativa acordada, para que la falla no sea la excusa universal del que no quiere fichar bien.
- **Mirá los patrones.** Una falla de señal ocasional es creíble; un vigilador que "siempre" tiene problemas justo cuando llega tarde es otra cosa. El sistema te deja ver el patrón.

La clave es distinguir la falla honesta de la excusa. La fichada con GPS no elimina el criterio de la administración; le da los datos para ejercerlo.

## La fichada es la base de todo lo demás

Una vez que la marcación es confiable, todo el resto del servicio se apoya en ella. El estado de cobertura en tiempo real, los [roles de turnos](/roles-de-turnos-guardias), el cálculo de horas trabajadas y hasta el relevo documentado dependen de que el ingreso y el egreso sean datos reales y no declaraciones. Una fichada floja contamina todo lo que viene después; una fichada sólida es el cimiento de una operación que se puede probar.

## Un apunte sobre normativa

El registro de asistencia del personal y el tratamiento de datos como la imagen (la selfie) están sujetos a regulación, y los requisitos varían según la jurisdicción. Esto no es asesoría legal: verificá con tu asesor y con la autoridad de aplicación cómo corresponde registrar, informar y conservar esos datos. Como principio general, un registro digital con hora, ubicación y autor es más defendible ante el cliente y ante cualquier revisión que una planilla firmada a mano.

## Para cerrar

La fichada con GPS y selfie no es un capricho tecnológico: es la forma de que "el objetivo está cubierto" pase de ser una declaración a ser un hecho comprobable. Implementala gradual, explicá el para qué, contemplá desde el diseño las fallas de señal, y vas a cerrar de una vez el problema del objetivo descubierto que nadie vio venir.

Si querés ver la fichada con GPS funcionando en tus objetivos, explorá el [control de asistencia de guardias](/control-de-asistencia-de-guardias) o [escribinos](/contact) para armar una prueba esta semana.
