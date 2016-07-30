import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default handleActions({
  [LOCATION_CHANGE]: (state, { payload }) => state.set('locationBeforeTransitions', payload),
}, new Map({ locationBeforeTransitions: null }));
