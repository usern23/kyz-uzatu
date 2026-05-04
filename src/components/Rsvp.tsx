import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Invitation } from '../data'

interface Props {
  data: Invitation
}

export default function Rsvp({ data }: Props) {
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState('yes')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim()) return
    setSent(true)
  }

  return (
    <section className="rsvp section reveal">
      <p className="rsvp-deadline">{data.rsvpDeadline}</p>

      {!sent ? (
        <form className="rsvp-form" onSubmit={submit}>
          <label className="field">
            <span>Аты- жөніңіз</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов, Анастасия Иванова"
              required
            />
          </label>

          <label className="field">
            <span>8 шілдеге дейін келу-келмеуіңізді растау</span>
            <select value={answer} onChange={(e) => setAnswer(e.target.value)}>
              <option value="yes">Міндетті түрде келемін</option>
              <option value="no">Келе алмаймын</option>
            </select>
          </label>

          <button className="btn-primary" type="submit">
            Растау
          </button>
        </form>
      ) : (
        <div className="rsvp-thanks">
          <div className="thanks-mark">✦</div>
          <h3>Рақмет, {name}!</h3>
          <p>
            {answer === 'yes'
              ? 'Сізді тойымызда көруге қуаныштымыз.'
              : 'Жауабыңыз үшін рақмет.'}
          </p>
        </div>
      )}
    </section>
  )
}
