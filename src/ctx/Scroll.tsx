import React, { useEffect } from 'react'

type ContextProps = {
  addRef: any,
  refList: object,
  scrollTo: any
}

export const ScrollContext = React.createContext<Partial<ContextProps>>({})

export const ScrollProvider = ({children}: {children: React.ReactNode}) => {
  let refList = {}
  useEffect(()=>{
    document.addEventListener('scroll', debounce(handleScroll, 100, false), true)

    return () => document.removeEventListener('scroll', handleScroll, true);
  }, [])

  const handleScroll = () => {
    console.log('scrolling', refList)
  }
  
  const addRef = (id: string) => {
    const ref = React.createRef<HTMLDivElement>()
    refList = {...refList, [id]: ref}
    return ref
  }

  const scrollTo = (id: string) => {
    console.log('scroll to', id)
  }

  const debounce = (func: any, time: number, immediate:boolean) => {
    let timeout: any;
    return function(this: any) {
      let context = this, 
          args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, time);
      if (callNow) func.apply(context, args);
    };
  }
  
  return (
    <ScrollContext.Provider value={{
      addRef,
      refList,
      scrollTo      
    }}>
      {children}
    </ScrollContext.Provider> 
  )
}