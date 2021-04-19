import React from 'react';

export default function Pieces(props: any) {
  const { t } = props

  return (
    <div className={'pieces'}>
      <h1>{t('pieces')}</h1>
    </div>
  )
}