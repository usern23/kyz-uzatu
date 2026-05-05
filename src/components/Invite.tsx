import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Invite({ data }: Props) {
  return (
    <section id="invite" className="invite section">
      <p className="greeting reveal">{data.greeting}</p>

      {/* ── Красивый тайминг-расписание ── */}
      <div className="schedule reveal">
        <div className="schedule-date">{data.eventDateLabel}</div>

          <div className="schedule-timeline">
          <div className="schedule-item">
            <div className="schedule-time">14:30</div>
            <div className="schedule-dot">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.8 8.4L20.4 9L15.6 13.2L17.4 19.8L12 16.2L6.6 19.8L8.4 13.2L3.6 9L10.2 8.4L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="schedule-desc">Қонақтарды қабылдау</div>
          </div>

          <div className="schedule-item schedule-item--last">
            <div className="schedule-time">15:00</div>
            <div className="schedule-dot schedule-dot--main">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>
              </svg>
            </div>
            <div className="schedule-desc">Той басталады</div>
          </div>
        </div>
      </div>

      <div className="hall-block reveal">
        <h2 className="hall-name">{data.hallName}</h2>
      </div>

      <p className="body-text reveal">{data.intro}</p>
    </section>
  )
}
