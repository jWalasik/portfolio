import React, { Suspense } from 'react'
import {ReactComponent as Filters} from './assets/filters.svg'

import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyle'
import Loader from './components/Loader'
import FourOhFour from './pages/FourOhFour'
import Home from './pages/Home'
import Providers from './Providers';
import styled from 'styled-components';

function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{
    setLoading(false)
  })
  if(loading) return <Loader />
  return (
      <Suspense fallback={Loader}>
        <SVGDefs />
        <Providers>
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/' component={FourOhFour} />
          </Switch>
        </Providers>
      </Suspense>
  );
}
const SVGDefs = styled(Filters)`
  position: absolute;
`

export default App;
