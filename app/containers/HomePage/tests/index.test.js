import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  afterEach(cleanup);

  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <HomePage />
      </IntlProvider>,
    );
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull();
  });
});
