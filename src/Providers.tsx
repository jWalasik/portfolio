import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './ctx/Scroll'
import { Theme } from './theme/Theme'

const Providers = ({children} : {children: React.ReactNode}) => {
  const providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>> = [
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