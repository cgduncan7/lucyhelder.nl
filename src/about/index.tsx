import React from 'react'

export default function About(props: any) {
  const { t } = props

  return (
    <div className={'about'}>
      <h1>{t('about_me.title')}</h1>
      <p>{t('about_me.desc')}</p>
    </div>
  )
}