import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function DressCode({ data }: Props) {
  const { title, text, colors } = data.dressCode
  return (
    <section className="dresscode section reveal">
      <h3 className="heading">{title}</h3>
      <p className="dc-text">{text}</p>
      <div className="dc-colors" aria-hidden="true">
        {colors.map((c, i) => (
          <span key={i} className="dc-swatch" style={{ background: c }} />
        ))}
      </div>
    </section>
  )
}
