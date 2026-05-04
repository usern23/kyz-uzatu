import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Hosts({ data }: Props) {
  return (
    <section className="hosts-section section reveal">
      <p className="hosts-label">{data.hostsLabel}</p>
      <p className="hosts-name">{data.hosts}</p>
      <div className="hosts-amp" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/orn-4.png`} alt="" />
      </div>
    </section>
  )
}
