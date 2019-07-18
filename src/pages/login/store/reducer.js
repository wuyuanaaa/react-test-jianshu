import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isLogin: false
});


export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.LOGOUT:
      return state.set('isLogin', false);
    case constants.CHANGE_LOGIN_STATUS:
      return state.set('isLogin', action.status)
    default:
      return state;
  }
}


