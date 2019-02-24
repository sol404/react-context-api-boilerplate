import React from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from './reducer';

const { Provider, Consumer } = React.createContext('languageProvider');

export const Context = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <Provider value={{ state, dispatch }}>
      {React.Children.only(children)}
    </Provider>
  );
};

Context.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Consumer };
