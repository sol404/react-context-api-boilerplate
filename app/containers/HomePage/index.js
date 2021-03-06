import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const HomePage = () => (
  <div>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  </div>
);

export default HomePage;
