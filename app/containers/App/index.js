import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Context as ContextApp } from './Context';
import routes from './routes';

import GlobalStyle from '../../global-styles';

export function App() {
  return (
    <ContextApp>
      <div>
        <Switch>
          {routes().map(r => (
            <Route key={r.path} {...r} />
          ))}
        </Switch>
        <GlobalStyle />
      </div>
    </ContextApp>
  );
}

export default App;
