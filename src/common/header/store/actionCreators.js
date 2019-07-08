import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) 
})


export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        const data = res.data;
        const action = changeList(data.data)
        dispatch(action);
      })
      .catch((e) => {
        console.log(e);
      })
  }
}

export const infoEnter = () => ({
  type: constants.INFO_ENTER
})

export const infoLeave = () => ({
  type: constants.INFO_LEAVE
})


export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})