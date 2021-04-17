import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Pieces(props: any) {
  const { t, i18n } = useTranslation()

  const desiredLang = props.route.resolveLanguage(props.match.path)
  if (i18n.language !== desiredLang) i18n.changeLanguage(desiredLang)

  return (
    <div className={'pieces'}>
      <h1>{t('pieces')}</h1>
    </div>
  )
}