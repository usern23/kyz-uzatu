# Кыз узату · Сабина — пригласительный сайт

Шаблон одностраничного приглашения на казахском языке (React + Vite).

## Запуск

```powershell
npm install
npm run dev
```

Откройте http://localhost:5173

## Сборка

```powershell
npm run build
npm run preview
```

Готовая статика — в папке `dist/`. Можно положить на любой хостинг (Netlify, Vercel, GitHub Pages, обычный nginx).

## Где менять данные

Все тексты, дата, имена, адрес и контакты — в одном файле:

[src/data.js](src/data.js)

Для фоновой музыки положите файл `music.mp3` в папку [public/](public/) — кнопка-нота в правом верхнем углу включит её.

## Что внутри

- Hero с именем невесты, датой и обратным отсчётом
- Текст приглашения, той иелері
- Карта (Google Maps по адресу из `data.js`)
- Форма RSVP — после нажатия "РАСТАУ" показывает «Рақмет, …!»
- Контакты (WhatsApp / Telegram / Instagram)
- Кнопка музыки (play/pause, фоновое воспроизведение)
- Анимации появления при скролле (IntersectionObserver)
- Адаптивная вёрстка (мобильный first)

## Структура

```
src/
  App.jsx
  main.jsx
  data.js              ← редактируйте здесь
  styles.css
  hooks/useReveal.js
  components/
    Hero.jsx
    Countdown.jsx
    Invite.jsx
    MapSection.jsx
    Rsvp.jsx
    Contacts.jsx
    MusicPlayer.jsx
public/
  favicon.svg
  music.mp3            ← добавьте свой файл (опционально)
```
