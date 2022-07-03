import React, { useState } from 'react'

export default function BookClub(props: any) {
  const { t } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [debounceTimestamp, setDebounceTimestamp] = useState(0)
  const debounceDelay = 500

  const handleSubmitClick = () => {
    // debounce button
    const now = Date.now()
    if (now - debounceTimestamp < debounceDelay) {
      return
    }
    setDebounceTimestamp(Date.now())

    fetch('https://server.lucyhelder.nl/registration', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    }).then(() => {
      // handle addition
    }).catch(() => {
      // handle error
    })
  }

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setName(ev.target.value)
  }

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setEmail(ev.target.value)
  }

  return (
    <div className={'book-club'}>
      <h1>{t('book_club.title')}</h1>
      <p>{t('book_club.desc')}</p>
      <div className={'separator'} />
      <div className={'info'}>
        <span className={'info-title'}>{t('book_club.info.what.key')}</span>
        <span>{t('book_club.info.what.value')}</span>
        <span className={'info-title'}>{t('book_club.info.who.key')}</span>
        <span>{t('book_club.info.who.value')}</span>
        <span className={'info-title'}>{t('book_club.info.where.key')}</span>
        <span>{t('book_club.info.where.value')}</span>
        <span className={'info-title'}>{t('book_club.info.when.key')}</span>
        <span>{t('book_club.info.when.value')}</span>
      </div>
      <div className={'separator'} />
      <div className={'sign-up'}>
        <input
          id='name'
          placeholder={t('book_club.name_placeholder')}
          value={name}
          onChange={handleNameChange}
          />
        <input
          id='email'
          placeholder={t('book_club.email_placeholder')}
          value={email}
          onChange={handleEmailChange}
        />
        <button
          onClick={handleSubmitClick}
        >
          {t('book_club.submit')}
        </button>
      </div>
    </div>
  )
}