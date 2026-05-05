import type { Venue as VenueType } from '../data'

interface Props {
  venue: VenueType
}

export default function Venue({ venue }: Props) {
  const q = encodeURIComponent(venue.mapQuery || venue.address)
  const link = `https://yandex.ru/maps/?text=${q}`

  return (
    <section className="venue section reveal">
      <p className="venue-label">{venue.title}</p>
      <div className="venue-lines">
        {venue.lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>

      <a className="venue-map-card" href={link} target="_blank" rel="noreferrer">
        <span className="venue-map-text">Картадан көру</span>
      </a>
    </section>
  )
}
