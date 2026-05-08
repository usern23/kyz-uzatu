import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Invite({ data }: Props) {
  return (
    <section id="invite" className="invite section reveal">
      <p className="greeting reveal">{data.greeting}</p>

      {/* ── Красивый тайминг-расписание ── */}
      <div className="schedule reveal">
        <div className="schedule-date">{data.eventDateLabel}</div>

          <div className="schedule-timeline">

          {/* Пункт 1 — слева */}
          <div className="schedule-item schedule-item--left">
            <div className="schedule-content">
              <div className="schedule-time">14:30</div>
              <div className="schedule-desc">Сбор</div>
            </div>
            <div className="schedule-dot" />
            <div className="schedule-spacer" />
          </div>

          {/* Пункт 2 — справа */}
          <div className="schedule-item schedule-item--right">
            <div className="schedule-spacer" />
            <div className="schedule-dot schedule-dot--main" />
            <div className="schedule-content">
              <div className="schedule-time">15:00</div>
              <div className="schedule-desc">Начало</div>
            </div>
          </div>

          </div>
      </div>

      <p className="body-text">{data.intro}</p>
    </section>
  )
}
