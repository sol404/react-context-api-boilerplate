import React from 'react';
import { Switch, Route } from 'react-router-dom';
import route from './routes';

import GlobalStyle from '../../global-styles';

export function App() {
  return (
    <div>
      <Switch>
        {route.map(r => (
          <Route exact key={r.path} path={r.path} component={r.component} />
        ))}
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
