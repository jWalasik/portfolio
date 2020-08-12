import React from 'react';
import { useHistory } from 'react-router-dom'

const FourOhFour = () => {
  let history = useHistory()
  return (
    <main>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={()=>history.goBack()}>Take me back</button>
    </main>
  )
}

export default FourOhFour;
