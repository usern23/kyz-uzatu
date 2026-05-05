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
          <img src={`${import.meta.env.BASE_URL}img/tilda/bride-saukele.jpg`} alt="" />
        </div>

        <div className="hero-text" style={{backgroundImage: `url(${import.meta.env.BASE_URL}img/tilda/bf4773c2d1ef09567bb79a6f4a5936b1.jpg)`}}>
          <div className="hero-text-content">
            <p className="pre-name">— Той шақыруы —</p>
            <h1 className="bride-name">{data.brideName}</h1>
            <div className="hero-divider" aria-hidden="true">
              <span></span>
              <svg viewBox="0 0 12 12" fill="currentColor"><path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5z"/></svg>
              <span></span>
            </div>
            <p className="hero-title">Сабинаның тойы</p>
          </div>
        </div>

      </div>
    </section>
  )
}

