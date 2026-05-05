import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
}

export default function MusicPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const triedAutoplay = useRef(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = 0.55
  }, [])

  // Автоплей при первом скролле
  useEffect(() => {
    const tryPlay = () => {
      if (triedAutoplay.current) return
      const a = audioRef.current
      if (!a) return
      triedAutoplay.current = true
      a.play()
        .then(() => setPlaying(true))
        .catch(() => { /* браузер заблокировал — пользователь нажмёт кнопку */ })
    }

    // Пробуем сразу (работает если у пользователя включён autoplay)
    audioRef.current?.play()
      .then(() => { triedAutoplay.current = true; setPlaying(true) })
      .catch(() => {
        // Не сработало — ждём скролла
        window.addEventListener('scroll', tryPlay, { once: true })
        window.addEventListener('touchstart', tryPlay, { once: true })
        window.addEventListener('pointerdown', tryPlay, { once: true })
      })

    return () => {
      window.removeEventListener('scroll', tryPlay)
      window.removeEventListener('touchstart', tryPlay)
      window.removeEventListener('pointerdown', tryPlay)
    }
  }, [])

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    try {
      if (playing) {
        a.pause()
        setPlaying(false)
      } else {
        await a.play()
        setPlaying(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <button
      className={`music-btn ${playing ? 'is-playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Пауза' : 'Играть музыку'}
      title={error ? 'Файл музыки не найден' : 'Музыка'}
    >
      <span className="music-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </span>
      <span className="music-pulse" aria-hidden="true"></span>
      <audio ref={audioRef} src={src} loop preload="auto" />
    </button>
  )
}
