import React from "react";
import { Modify } from '../components/.global/commons.d';
import { OverrideMouseEvent } from '../components/.global/events.d';

const events = [
  'onClick',
  'onDoubleClick',
  'onDrag',
  'onDrop',
  'onDragStart',
  'onDragEnd',
  'onContextMenu',
];

function overrideMouseEvents(
  value: any,
  props: Modify<React.BaseHTMLAttributes<HTMLElement>, OverrideMouseEvent>
): Modify<React.BaseHTMLAttributes<HTMLElement>, OverrideMouseEvent> {
  const eventProps = {};

  events.map((eventName: string) => {
    if (Object.keys(props).includes(eventName)) {
      Object.assign(eventProps, {
        [eventName]: (event: React.MouseEvent<HTMLElement>) => (props as { [key: string]: any })[eventName](event, value)
      });
    }

    return eventName;
  });

  return eventProps;
}

export default overrideMouseEvents;
