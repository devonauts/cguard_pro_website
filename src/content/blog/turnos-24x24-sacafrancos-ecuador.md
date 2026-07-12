---
title: "Turnos 24x24 y Sacafrancos en Ecuador: Cómo Programarlos sin Errores"
description: "Guía práctica de turnos 24x24 guardias Ecuador: cómo armar el rol con sacafrancos, desfasar ciclos, controlar relevos y verificar cada marcación con CGuardPro."
pubDate: 2026-06-19
author: "CGuardPro"
image: "/blog/turnos-24x24-sacafrancos-ecuador.jpg"
tags: ["ecuador", "turnos"]
lang: "es"
---

## El 24x24 ecuatoriano: fácil de entender, difícil de sostener

Si operas vigilancia en Ecuador, el esquema lo conoces de memoria: un guardia trabaja 24 horas y descansa las siguientes 24, alternándose con su pareja de puesto. Los turnos 24x24 guardias Ecuador los usan a diario en conjuntos residenciales, urbanizaciones, plantas y porterías de Quito, Guayaquil y todo el país. El problema nunca es entender el esquema: es sostenerlo mes tras mes cuando entran los francos, las vacaciones, los permisos médicos y ese sacafranco que "ya se cuadra por WhatsApp". Este artículo es la versión práctica para tu operación en Ecuador: cómo se programa un 24x24 con sacafrancos dentro de CGuardPro, de principio a fin. Si buscas la teoría general del esquema o del sacafranco como figura, ya la cubrimos en otros artículos; aquí vamos directo al cómo.

![Horario mensual del vigilante en la app CGuardPro](/screenshots/worker-app/es-schedule.png)
*El vigilante ve su mes completo —turnos, francos y coberturas— desde su propio celular.*

Como se ve en la captura, el resultado final es un calendario que el propio vigilante consulta desde la app: qué días trabaja, qué días descansa y en qué puesto está asignado. Ese calendario no se dibuja a mano; se genera desde el rol central, y ahí es donde se ganan o se pierden los meses tranquilos.

## Dónde se rompe el rol en Excel

La mayoría de operaciones ecuatorianas que llegan a CGuardPro traen el mismo diagnóstico: el rol vive en una hoja de cálculo que domina una sola persona. Funciona hasta que deja de funcionar, y siempre se rompe por los mismos puntos:

- **Los francos de todos los puestos caen el mismo día.** Si armaste todos los ciclos 24x24 arrancando el mismo lunes, ese día necesitas un ejército de sacafrancos y el resto de la semana te sobran. El desfase de ciclos entre puestos es la decisión de diseño más importante del rol, y en Excel es la más difícil de mantener.
- **El sacafranco no está en el rol.** Está "disponible", que en la práctica significa que cada franco se resuelve con llamadas la noche anterior.
- **Nadie detecta el doblete hasta que ya ocurrió.** El mismo guardia queda asignado a dos puestos, o encadena 48 horas porque su relevo faltó y no había plan B.
- **El relevo no deja rastro.** El guardia saliente entrega el puesto de palabra y las novedades del turno se pierden en el cambio.

## Cómo se programa el 24x24 con sacafrancos en CGuardPro

El flujo dentro del sistema es el siguiente, en el orden en que lo haría un jefe de operaciones:

**1. Define el puesto y su patrón.** Cada puesto de servicio se configura con su esquema —24x24 en este caso— y su dotación de titulares. El sistema entiende que un puesto 24/7 genera 168 horas semanales que alguien tiene que cubrir.

**2. Asigna los titulares y desfasa los ciclos.** Al asignar las parejas de cada puesto, el motor de programación aplica un desfase entre puestos para que los francos no se amontonen en los mismos días. Esto, que en Excel exige disciplina heroica, aquí es parte del cálculo.

**3. Deja que el sistema calcule los sacafrancos.** CGuardPro analiza los huecos reales que genera el rol —qué días, en qué puestos— y propone la cobertura de sacafrancos en función de esos huecos, no de una cifra fija inventada. Cada sacafranco queda en el rol con nombre, puesto y fecha, incluyendo sus propios descansos.

**4. Publica el rol y se acabaron las llamadas.** Cada guardia recibe su calendario en la app. Los cambios posteriores —un permiso, una vacación— se hacen en el rol central y se reflejan al instante en el celular de los afectados, con la cobertura recalculada.

**5. El sistema bloquea los dobletes.** Si un cambio manual intenta poner al mismo vigilante en dos puestos a la vez, la validación lo detiene antes de publicar. Ese candado, que parece menor, es el que evita las 48 horas encadenadas que terminan en un guardia dormido y un cliente molesto.

Si quieres ver el esquema en frío antes de digitalizarlo, descarga nuestra [plantilla de rol de turnos 24x24](/recursos/plantilla-rol-de-turnos-24x24) y compárala con tu rol actual: los huecos saltan a la vista.

## El turno en servicio: marcación y relevo con evidencia

Programar bien es la mitad del trabajo; la otra mitad es saber que el rol se cumplió. Con el [control de asistencia de guardias](/control-de-asistencia-de-guardias) de CGuardPro, cada marcación de entrada y salida queda verificada con ubicación y hora, de modo que el 24x24 planificado y el 24x24 real se pueden comparar día a día.

![Turno en servicio con cronómetro en la app del vigilante](/screenshots/worker-app/es-dashboard.png)
*Durante las 24 horas de servicio, la app muestra el turno activo con su cronómetro, rondas y tareas.*

Como muestra la captura, durante el turno el vigilante tiene su servicio activo en pantalla: cuánto lleva, qué rondas le tocan y qué tareas tiene pendientes. Y al momento del relevo —el instante más delicado del 24x24— el guardia saliente registra su pase de turno con las novedades del día, que el entrante recibe automáticamente al marcar entrada. El clásico parte de novedades deja de ser un cuaderno que se queda en la garita: queda digital, con autor, hora y adjuntos, visible para la central.

## Una nota sobre jornadas y normativa

El 24x24 convive con obligaciones laborales concretas: descansos, recargos nocturnos, horas suplementarias. Ese terreno cambia y tiene matices por tipo de contrato, así que no lo tomes de un blog —ni de este—: valida tu esquema con la normativa laboral vigente y con tu asesor. Lo que sí te da el sistema es la materia prima para esa conversación: horas reales trabajadas por cada guardia, verificadas y exportables.

Miles de puestos en Latinoamérica se cubren con este esquema, y las operaciones ecuatorianas tienen sus propias costumbres —el sacafranco, el parte, el relevo de las 06h00—. Por eso CGuardPro tiene una página dedicada a la [operación de seguridad privada en Ecuador](/ecuador) y un [módulo de roles de turnos](/roles-de-turnos-guardias) que habla ese mismo idioma.

*¿Quieres ver tu propio rol 24x24 generado con sacafrancos en minutos? [Escríbenos](/contact) y te lo mostramos con tus puestos reales.*
