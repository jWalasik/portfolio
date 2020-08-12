import React, { Suspense } from 'react'
import logo from './logo.svg';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loader from './components/Loader'
import FourOhFour from './pages/FourOhFour'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/' component={FourOhFour} />
        </Switch>
      </Suspense>    
    </BrowserRouter>
  );
}

export default App;
