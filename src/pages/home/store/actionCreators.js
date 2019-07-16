import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeList = (data) => ({
  type: constants.CHANGE_HOME_LIST,
  data: fromJS(data)
})


export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json')
      .then(res => {
        const data = res.data;
        dispatch(changeHomeList(data.data))
      })
      .catch(e => console.log(e))
  }
}

export const toggleBackTopShow = (data) => ({
  type: constants.TOGGLE_BACKTOP_SHOW,
  data: fromJS(data)
})