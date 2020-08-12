import React from 'react'

const Providers = ({children} : {children: React.ReactNode}) => {
  const providers: any = [
    
  ]
  
  return (
    <>
      {providers.reduceRight((acc: object, Comp: any) => <Comp>{acc}</Comp>, children)}
    </>
  )
}

export default Providers