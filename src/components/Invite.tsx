import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Invite({ data }: Props) {
  return (
    <section id="invite" className="invite section">
      <p className="greeting reveal">{data.greeting}</p>

      <div className="event-date reveal">
        <p>{data.eventDateLabel}</p>
        <p>{data.gatheringTimeLabel}</p>
        <p>{data.eventTimeLabel}</p>
      </div>

      <div className="hall-block reveal">
        <h2 className="hall-name">{data.hallName}</h2>
      </div>

      <p className="body-text reveal">{data.intro}</p>
    </section>
  )
}
