import type { Invitation } from '../data'

const WEEKDAYS = ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб', 'Жк']

interface Props {
  data: Invitation
}

export default function CalendarSection({ data }: Props) {
  const { calendarYear, calendarMonth, calendarMonthLabel, highlightDay } = data
  // понедельник = 0
  const firstDay = new Date(calendarYear, calendarMonth - 1, 1).getDay()
  const offset = (firstDay + 6) % 7
  const daysInMonth = new Date(calendarYear, calendarMonth, 0).getDate()

  const cells: (number | null)[] = []
  for (let i = 0; i < offset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <section className="calendar section reveal">
      <h3 className="cal-title">{calendarMonthLabel}</h3>
      <div className="cal-grid">
        {WEEKDAYS.map((w) => (
          <div key={w} className="cal-wd">
            {w}
          </div>
        ))}
        {cells.map((d, i) =>
          d === highlightDay ? (
            <div key={i} className="cal-cell is-highlight">
              <svg className="heart-outline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  stroke="var(--rose)"
                  strokeWidth="1.4"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span>{d}</span>
            </div>
          ) : (
            <div key={i} className={`cal-cell${d === null ? ' is-empty' : ''}`}>{d ?? ''}</div>
          )
        )}
      </div>
    </section>
  )
}
