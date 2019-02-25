/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import App from 'containers/App';
import LanguageProvider from 'containers/LanguageProvider';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { translationMessages } from './i18n';
import theme from './material';

const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme()}>
      <LanguageProvider messages={messages}>
        <Router>
          <App />
        </Router>
      </LanguageProvider>
    </MuiThemeProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
