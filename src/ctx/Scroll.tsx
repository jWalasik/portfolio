import React, {useState, useEffect } from 'react'
interface refList {
  [key: string]: any
}
type ContextProps = {
  addRef: any,
  refList: refList,
  scrollTo: any
}

export const ScrollContext = React.createContext<Partial<ContextProps>>({})

export const ScrollProvider = ({children}: {children: React.ReactNode}) => {
  let refList: refList = {}
  useEffect(()=>{
    document.addEventListener('scroll', debounce(handleScroll, 50, false), true)

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

  const scrollTo = (e: {target: HTMLElement}) => {
    const target = refList[e.target.id]
    window.scrollTo(0, target.current.offsetTop)
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