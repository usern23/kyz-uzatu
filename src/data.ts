// Все данные приглашения — меняйте здесь

export type ContactType = 'whatsapp' | 'telegram' | 'instagram'

export interface Contact {
  type: ContactType
  label: string
  value: string
  href: string
}

export interface Venue {
  title: string
  lines: string[]
  name: string
  address: string
  mapQuery: string
}

export interface DressCode {
  title: string
  text: string
  colors: string[]
}

export interface Invitation {
  brideName: string
  hosts: string
  eventDate: string
  eventDateLabel: string
  eventTimeLabel: string
  gatheringTimeLabel: string
  calendarMonthLabel: string
  calendarYear: number
  calendarMonth: number
  highlightDay: number
  greeting: string
  hallName: string
  intro: string
  venue: Venue
  dressCode: DressCode
  hostsLabel: string
  rsvpDeadline: string
  contactsLabel: string
  contacts: Contact[]
  musicSrc: string
}

export const invitation: Invitation = {
  brideName: 'Сабина',
  hosts: 'Марат — Алия',
  eventDate: '2026-07-25T15:00:00+06:00',
  eventDateLabel: '25 шілде 2026 жыл',
  eventTimeLabel: 'сағат 15:00',
  gatheringTimeLabel: 'Қонақтарды қабылдау 14:30',

  calendarMonthLabel: 'Шілде 2026ж.',
  calendarYear: 2026,
  calendarMonth: 7,
  highlightDay: 25,

  greeting: 'Құрметті қонақтар!',
  hallName: 'Той салтанаты',
  intro:
    'Сіздерді аяулы қызымыз Сабинаның ұзату тойына арналып жайылған ақ дастарқанымыздың қадірлі қонағы болуға шақырамыз.',

  venue: {
    title: 'Мекен-жай:',
    lines: ['г. Омск', 'Банкетный зал «Золото»'],
    name: 'Банкетный зал «Золото»',
    address: 'г. Омск, банкетный зал «Золото»',
    mapQuery: 'Омск банкетный зал Золото',
  },

  dressCode: {
    title: 'Дресс-код',
    text: 'Төмендегідей тойда болатын түстес киім кисеңіз, өте қуанышты боламыз.',
    colors: ['#7a1f2b', '#b6324a', '#d9a679', '#e8c89a', '#1a1a1a'],
  },

  hostsLabel: 'Той иелері:',
  rsvpDeadline: 'Келу/келмеуіңізді 25 шілдеге дейін растауыңызды сұраймыз',
  contactsLabel: 'Байланысу үшін:',

  contacts: [
    { type: 'whatsapp', label: 'WhatsApp', value: '+7 996 396 1305', href: 'https://wa.me/79963961305' },
    { type: 'telegram', label: 'Telegram', value: '+7 939 827 6843', href: 'https://t.me/+79398276843' },
    { type: 'instagram', label: 'Instagram', value: '@aitzhanova.1', href: 'https://www.instagram.com/aitzhanova.1' },
  ],

  musicSrc: `${import.meta.env.BASE_URL}music.mp3`,
}
