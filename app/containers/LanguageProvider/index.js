import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import {
  Context as ContextLanguageProvider,
  Consumer as ConsumerLanguageProvider,
} from './Context';

export const LanguageProvider = props => {
  const { children, messages } = props;

  return (
    <ContextLanguageProvider>
      <ConsumerLanguageProvider>
        {ctx => (
          <IntlProvider
            locale={ctx.state.locale}
            key={ctx.state.locale}
            messages={messages[ctx.state.locale]}
          >
            {React.Children.only(children)}
          </IntlProvider>
        )}
      </ConsumerLanguageProvider>
    </ContextLanguageProvider>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
