/* eslint-disable consistent-return,no-param-reassign */
import produce from 'immer';

export const initialState = {};

export const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
