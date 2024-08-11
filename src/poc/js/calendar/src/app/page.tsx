'use client'

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const MyCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      slotMinTime="05:00:00"
      slotMaxTime="29:00:00"
      events={[
        {
          title: 'Meeting',
          start: '2024-08-11T06:00:00',
          end: '2024-08-12T01:00:00',
        },
      ]}
    />
  )
}

export default function Home() {
  return <MyCalendar />
}
