import React, { Suspense } from 'react'
import logo from './logo.svg';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyle'
import Loader from './components/Loader'
import FourOhFour from './pages/FourOhFour'
import Home from './pages/Home'
import Providers from './Providers';

function App() {
  return (
      <Suspense fallback={Loader}>
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
