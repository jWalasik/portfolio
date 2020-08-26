import React, { Suspense } from 'react'
import logo from './logo.svg';
import {ReactComponent as Filters} from './assets/filters.svg'

import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyle'
import Loader from './components/Loader'
import FourOhFour from './pages/FourOhFour'
import Home from './pages/Home'
import Providers from './Providers';

function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{
    setLoading(false)
  })
  if(loading) return <Loader size={150}  />
  return (
      <Suspense fallback={Loader}>
        <Filters />
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

export default App;
