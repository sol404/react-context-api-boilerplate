import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n'; // eslint-disable-line

export const initialState = {
  locale: DEFAULT_LOCALE,
};

export function reducer(state, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}
