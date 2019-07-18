import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'

const changeLoginStatus = (status) => ({
  type: constants.CHANGE_LOGIN_STATUS,
  status: fromJS(status)
})

export const logout = () => ({
  type: constants.LOGOUT
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then(res => {
        const status = res.data.data.status;
        console.log(status)
        dispatch(changeLoginStatus(status))
      })
  }
}