import React from 'react'
import { useTranslation } from 'react-i18next'

const lucyPic = require('../../public/lucy.jpg').default

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className={'home'}>
      <img src={lucyPic} />
      <div className={'separator'} />
      <h4>
        {t('dutch_teacher')} - {t('language_lover')} - {t('amsterdammer')}
      </h4>
    </div>
  )
}