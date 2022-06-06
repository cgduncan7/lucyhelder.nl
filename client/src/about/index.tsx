import React from 'react'

const lucyPic = require('../../public/lucy.jpg').default

export default function About(props: any) {
  const { t } = props

  return (
    <div className={'about'}>
      <h1>{t('about_me.title')}</h1>
      <img src={lucyPic} />
      <p>{t('about_me.desc')}</p>
    </div>
  )
}