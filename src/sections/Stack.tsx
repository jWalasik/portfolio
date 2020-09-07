import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'

type Techs = Object

const Stack = () => {
  const {t, i18n} = useTranslation('stack')
  const techs = Object
  .entries(
    t<Techs>('techs', {returnObjects: true})
  )
  .map((tech, i)=>{
    return (
      <div key={i}>
        <h3>{tech[0]}</h3>
        {tech[1].map((p: React.ReactNode, i: number) => <Trans key={i}>{p}</Trans>)}
      </div>
    )
  })
  
  return (
    <Section id='stack'>
      <h2><Trans i18nKey='stack:header'></Trans></h2>
      <Trans i18nKey='stack:description'></Trans>
      {techs}
    </Section>
  )
}

export default Stack