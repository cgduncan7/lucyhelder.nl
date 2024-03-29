import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Home() {
  const { t } = useTranslation()

  return (
    <div className={'home'}>
      <h1>
        Lucy Helder
      </h1>
      <div className={'separator'} />
      <h4>
        {t('dutch_teacher')} - {t('language_lover')} - {t('amsterdammer')}
      </h4>
    </div>
  )
}