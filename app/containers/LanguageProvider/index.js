import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Context, Consumer } from './Context';

export const LanguageProvider = props => {
  const { children, messages } = props;

  return (
    <Context>
      <Consumer>
        {ctx => (
          <IntlProvider
            locale={ctx.state.locale}
            key={ctx.state.locale}
            messages={messages[ctx.state.locale]}
          >
            {React.Children.only(children)}
          </IntlProvider>
        )}
      </Consumer>
    </Context>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
