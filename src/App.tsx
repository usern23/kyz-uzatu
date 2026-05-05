import { invitation } from './data'
import { useReveal } from './hooks/useReveal'
import MusicPlayer from './components/MusicPlayer'
import Hero from './components/Hero'
import Invite from './components/Invite'
import CalendarSection from './components/CalendarSection'
import Venue from './components/Venue'
import Rsvp from './components/Rsvp'

const Sep = () => (
  <div className="sep" aria-hidden="true">
    <div className="sep-line sep-line-l" />
    <svg className="sep-motif" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* flanking small diamonds */}
      <path d="M6 12 L10 16 L6 20 L2 16 Z" fill="currentColor" opacity="0.45"/>
      <path d="M66 12 L70 16 L66 20 L62 16 Z" fill="currentColor" opacity="0.45"/>
      {/* connector hairlines */}
      <line x1="10" y1="16" x2="20" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <line x1="52" y1="12" x2="62" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      {/* outer diamond */}
      <path d="M36 4 L48 12 L36 20 L24 12 Z" stroke="currentColor" strokeWidth="0.85" fill="none"/>
      {/* inner soft fill */}
      <path d="M36 8 L42 12 L36 16 L30 12 Z" fill="currentColor" opacity="0.12"/>
      {/* 4 axis dots */}
      <circle cx="36" cy="4" r="1" fill="currentColor" opacity="0.5"/>
      <circle cx="36" cy="20" r="1" fill="currentColor" opacity="0.5"/>
      <circle cx="24" cy="12" r="1" fill="currentColor" opacity="0.5"/>
      <circle cx="48" cy="12" r="1" fill="currentColor" opacity="0.5"/>
      {/* center dot */}
      <circle cx="36" cy="12" r="2.2" fill="currentColor" opacity="0.65"/>
    </svg>
    <div className="sep-line sep-line-r" />
  </div>
)

export default function App() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="page" ref={ref}>
      {/* Большие декоративные круги по краям — начинаются НИЖЕ hero */}
      <div className="side-orn side-orn-2" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-4.webp`} alt="" />
      </div>
      <div className="side-orn side-orn-3" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-3.webp`} alt="" />
      </div>
      <div className="side-orn side-orn-4" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-4.webp`} alt="" />
      </div>
      <div className="side-orn side-orn-5" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-3.webp`} alt="" />
      </div>

      <MusicPlayer src={invitation.musicSrc} />
      <Hero data={invitation} />
      <Invite data={invitation} />
      <Sep />
      <CalendarSection data={invitation} />
      <Sep />
      <Venue venue={invitation.venue} />
      <Sep />
      <Rsvp data={invitation} />
      <footer className="footer reveal">
        <div className="footer-orn" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}img/tilda/big-orn-3.webp`} alt="" />
        </div>
      </footer>
    </div>
  )
}
