import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Invitation } from '../data'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwZYDBj8xmhUPk3ZcVCYenLEA8lAro1ggmzjwZG3VMyUrIvi9CKg4zIW9RTwf5fTa9-/exec'

interface Props {
  data: Invitation
}

export default function Rsvp({ data }: Props) {
  const [name, setName] = useState('')
  const [partner, setPartner] = useState('')
  const [answer, setAnswer] = useState('yes')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || sending) return
    setSending(true)
    try {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: name.trim(),
          partner: partner.trim() || '—',
          answer: answer === 'yes' ? 'Приду' : 'Не приду',
        }),
      })
    } catch {
      /* игнорируем — no-cors всё равно не видит ответ */
    }
    setSent(true)
  }

  return (
    <section className="rsvp section reveal">
      <p className="rsvp-deadline">{data.rsvpDeadline}</p>

      {!sent ? (
        <form className="rsvp-form" onSubmit={submit}>

          {/* Имя */}
          <label className="field">
            <span>Ваши имя и фамилия</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              required
            />
          </label>

          {/* Планируете ли присутствовать? */}
          <fieldset className="field rsvp-radio-field">
            <legend>Планируете ли вы присутствовать?</legend>
            <label className="rsvp-radio">
              <input
                type="radio"
                name="rsvp-answer"
                value="yes"
                checked={answer === 'yes'}
                onChange={() => setAnswer('yes')}
              />
              <span className="rsvp-radio-circle" />
              <span className="rsvp-radio-label">да, с удовольствием!</span>
            </label>
            <label className="rsvp-radio">
              <input
                type="radio"
                name="rsvp-answer"
                value="no"
                checked={answer === 'no'}
                onChange={() => { setAnswer('no'); setPartner(''); }}
              />
              <span className="rsvp-radio-circle" />
              <span className="rsvp-radio-label">к сожалению, не смогу</span>
            </label>
          </fieldset>

          {/* Имя партнёра — только если пришли */}
          <div className={`partner-field-wrap${answer === 'yes' ? ' partner-field-wrap--visible' : ''}`}>
            <label className="field">
              <span>Если вы будете с парой, укажите его/её имя</span>
              <input
                type="text"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
                placeholder="Анастасия Иванова"
              />
            </label>
          </div>

          <button className="btn-primary" type="submit" disabled={sending}>
            {sending ? 'Жіберілуде…' : 'Растау'}
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
