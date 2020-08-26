import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './ctx/Scroll'
import { Theme } from './theme/Theme'
import { i18nProvider } from './i18n/i18n'

const Providers = ({children} : {children: React.ReactNode}) => {
  const providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>> = [
    i18nProvider,
    BrowserRouter,
    ScrollProvider,
    Theme    
  ]
  
  return (
    <>
      {providers.reduceRight((acc, Comp: any) => <Comp>{acc}</Comp>, children)}
    </>
  )
}

export default Providers