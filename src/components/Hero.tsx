import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Hero({ data }: Props) {
  return (
    <section className="hero">
      <div className="hero-orn" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-3.webp`} alt="" />
      </div>

      <div className="hero-stage">
        <p className="hero-kicker">Қыз ұзату</p>

        <div className="hero-photo" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}img/tilda/bride-hero.jpg`} alt="" />
        </div>

        <div className="hero-text">
          <h1 className="bride-name">{data.brideName}</h1>
          <p className="kyz-uzatu-line">Қыз ұзату</p>
        </div>

      </div>
    </section>
  )
}

