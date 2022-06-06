import React from 'react'

export default function BookClub(props: any) {
  const { t } = props

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
        <input id='name' placeholder={t('book_club.name_placeholder')}></input>
        <input placeholder={t('book_club.email_placeholder')}></input>
        <button>{t('book_club.submit')}</button>
      </div>

    </div>
  )
}