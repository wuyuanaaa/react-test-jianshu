import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/topicList.json')
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data))
      })
      .catch(e => console.log(e))
  }
}