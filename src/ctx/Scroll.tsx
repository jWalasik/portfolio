import React, {useState, useEffect, useRef, MutableRefObject, RefObject } from 'react'

interface refList {
  current: {
    [string:string]: any
  }
}

type ContextProps = {
  activeLink: string,
  addRef: any,
  refList: refList,
  scrollTo: any
}

export const ScrollContext = React.createContext<Partial<ContextProps>>({})

export const ScrollProvider = ({children}: {children: React.ReactNode}) => {
  const refList: refList = useRef({})
  const [activeLink, setActiveLink] = useState('hero')
  
  useEffect(()=>{
    document.addEventListener('scroll', debounce(handleScroll, 50, false), true)

    return () => document.removeEventListener('scroll', handleScroll, true);
  }, [])

  const handleScroll = () => {
    let first: number = 0
    Object.entries(refList.current).forEach(([id, ref]: [string, any])=>{
      const rect = ref.current.getBoundingClientRect()
      first = rect.top&&first
      if(rect.top - window.innerHeight/2 <= 0 && rect.bottom - window.innerHeight/2 >= 0 ) {
        setActiveLink(id)
      }      
    })
  }
  
  const addRef = (id: string) => {
    const ref = React.createRef<RefObject<{}>>()
    refList.current = {...refList.current, [id]:ref}
    return ref
  }

  const scrollTo = (e: {target: HTMLElement}) => {
    console.log(e.target)
    const target = refList.current[e.target.id]
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
      scrollTo,
      activeLink
    }}>
      {children}
    </ScrollContext.Provider> 
  )
}