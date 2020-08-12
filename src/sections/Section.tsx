import React, { useContext } from 'react'
import { ScrollContext } from '../ctx/Scroll'

const Section = ({id, children} : {id: string, children: React.ReactNode}) => {
  const {addRef} = React.useContext(ScrollContext)
  const ref = React.useMemo(()=>addRef(id), [id])

  return (
    <section ref={ref} id={id} >
      {children}
    </section>
  )
}

export default Section