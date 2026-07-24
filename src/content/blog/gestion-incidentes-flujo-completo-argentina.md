---
title: "Gestión de Incidentes: del Reporte al Cierre"
description: "Gestión de incidentes de seguridad: el flujo completo de registro con evidencia, clasificación, notificación, seguimiento y cierre para que nada se pierda entre WhatsApps."
pubDate: 2026-07-24
author: "CGuardPro"
image: "/blog/gestion-incidentes-flujo-completo-argentina.jpg"
tags: ["argentina", "novedades"]
lang: "es"
---

El intruso saltó el paredón del objetivo a las 2:40. El vigilador lo vio, activó el protocolo, avisó por handy y mandó un audio al grupo de WhatsApp del servicio. A las 8 de la mañana el encargado de día leyó el mensaje enterrado entre otros cuarenta, no encontró la foto porque alguien había mandado un meme que empujó todo hacia arriba, y cuando el cliente llamó pidiendo el reporte, nadie tenía una versión ordenada de lo que había pasado. El incidente ocurrió. La gestión del incidente, no.

## Por qué se pierden los incidentes

La **gestión de incidentes de seguridad** falla casi siempre en el mismo lugar: entre que algo pasa y que alguien lo cierra. El registro inicial suele existir —el vigilador algo anota o algo avisa—, pero después el incidente se diluye. Se pierde en un grupo de chat, se olvida en un cuaderno que queda en la garita, se cuenta de boca en boca y llega deformado a la oficina.

El problema no es que el personal no reporte. El problema es que el reporte cae en un canal que no fue diseñado para gestionar: WhatsApp es genial para avisar rápido y pésimo para dar seguimiento. No tiene estado, no tiene responsable asignado, no tiene "esto sigue abierto". Un incidente serio necesita las cinco etapas completas, no solo el aviso.

## Etapa 1: Registro con evidencia en el momento

Un incidente que se registra tres horas después ya perdió lo más valioso: el detalle fresco y la prueba. La regla es que el registro pasa donde pasó el hecho, cuando pasó, hecho por quien lo vio.

Eso implica que el vigilador tenga la herramienta en la mano para cargar el incidente desde el objetivo, con:

- **Fotos o video** tomados en el momento, no reconstruidos.
- **Hora y ubicación** automáticas, no cargadas a mano.
- **Autor identificado** —quién lo reportó queda registrado sin depender de una firma.
- **Descripción** de qué pasó, en texto, mientras está fresco.

Cuando esto vive en el [libro de novedades digital](/libro-de-novedades-digital), el incidente nace ya con sello de tiempo, coordenadas y autor inalterables. Nadie puede después discutir a qué hora fue o quién lo cargó. Esa base es lo que después sostiene el reporte al cliente y, si hace falta, cualquier actuación posterior.

![El vigilador registra el incidente con foto y detalle desde el puesto](/screenshots/worker-app/es-incidents.png)
*El registro nace en el objetivo, con evidencia y hora automática: no se reconstruye a la mañana siguiente.*

## Etapa 2: Clasificación por prioridad

No todos los incidentes son iguales y tratarlos igual es un error caro. Un foco quemado en el estacionamiento y un intruso dentro del predio no pueden competir por la misma atención. Por eso el segundo paso es clasificar.

Un esquema simple de tres niveles alcanza para la mayoría de las operaciones:

- **Crítico:** intrusión, agresión, robo en curso, botón de pánico, incendio. Requiere respuesta inmediata y notificación al cliente y a la fuerza pública si corresponde.
- **Relevante:** daño a la propiedad, falla de seguridad (portón que no cierra, cámara caída), conflicto con un tercero. Requiere seguimiento en horas, no en el momento.
- **Informativo:** novedades de rutina, observaciones, cosas que conviene tener registradas pero no disparan nada.

La clasificación define quién se entera y cuándo. Un crítico despierta a alguien; un informativo espera al resumen del día. Cuando el sistema clasifica y encamina automáticamente, se acaba el criterio del "me pareció que no era para tanto" a las 3 de la mañana.

## Etapa 3: Notificación a quien corresponde

Registrar y clasificar no sirve si la persona correcta no se entera a tiempo. La notificación es donde el flujo se conecta con la realidad de la operación: el supervisor de zona para un crítico, la central para todo, el cliente cuando el hecho lo afecta o cuando el protocolo lo obliga.

Acá el botón de pánico juega un rol aparte. Cuando el vigilador está en una situación de riesgo real, no hay tiempo de cargar un formulario: el [botón de pánico de guardias](/boton-de-panico-guardias) dispara la alerta a la central con ubicación en un toque, y ese evento entra al flujo de incidentes ya marcado como crítico. La notificación no depende de que alguien esté mirando el chat.

Del lado del cliente, la notificación proactiva es lo que separa a la empresa que "avisa cuando le preguntan" de la que informa sola. Que el cliente reciba el incidente relevante de su objetivo antes de tener que reclamarlo cambia por completo la relación.

## Etapa 4: Seguimiento — el incidente sigue vivo hasta que se cierra

Esta es la etapa que WhatsApp no tiene y por la que se pierden los incidentes. Un incidente relevante no termina cuando se reporta; termina cuando se resuelve. El portón que no cerraba, ¿se arregló? La cámara caída, ¿se repuso? El conflicto con el proveedor, ¿escaló o se resolvió?

El seguimiento necesita tres cosas que un chat no da:

1. **Un estado visible:** abierto, en proceso, cerrado. Si no podés ver de un vistazo qué sigue abierto, no estás gestionando.
2. **Un responsable asignado:** cada incidente relevante tiene un dueño. "Alguien que lo vea" es nadie.
3. **Un historial:** qué se hizo, quién lo hizo, cuándo. Para que dentro de dos meses cualquiera entienda cómo terminó.

## Etapa 5: Cierre documentado

Cerrar un incidente es más que marcarlo resuelto. Es dejar constancia de cómo se resolvió, con qué evidencia, y —cuando aplica— qué se cambió para que no vuelva a pasar. Un incidente bien cerrado alimenta la mejora: si el mismo objetivo tiene tres intrusiones por el mismo paredón en dos meses, el cierre repetido es la señal de que la consigna o el perímetro necesitan cambiar, no de que el vigilador falla.

![Panel central con todos los incidentes, su estado y su prioridad](/screenshots/incidents.png)
*Desde la central se ve el flujo completo: qué entró, qué prioridad tiene, quién lo sigue y qué ya está cerrado.*

## Del caos del chat al flujo que se puede auditar

La diferencia entre una operación que "reporta" y una que gestiona incidentes es visible desde afuera. La primera te cuenta lo que pasó cuando le preguntás y, si tenés suerte, encuentra la foto. La segunda te muestra, en su panel, cada incidente del mes con su hora, su evidencia, su responsable y su cierre.

Para el cliente eso es tranquilidad. Para la empresa es blindaje: cuando aparece un reclamo o una controversia, tenés el flujo completo documentado en lugar de una discusión de mensajes borrados. Y para la operación es aprendizaje, porque los incidentes dejan de ser sustos aislados y empiezan a mostrar patrones que podés atacar.

Ninguna herramienta te va a evitar que ocurran incidentes. Lo que cambia es que dejen de perderse entre WhatsApps y empiecen a gestionarse de principio a fin. Si querés ver cómo se ordena ese flujo en tu operación, explorá [CGuardPro](/) o [escribinos](/contact).
