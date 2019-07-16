import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showBackTop: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.data.get('topic'),
    articleList: action.data.get('article'),
    recommendList: action.data.get('recommend'),
    writerList: action.data.get('writer')
  })
}

const toggleBackTopShow = (state, action) => {
  return state.set('showBackTop', action.data)
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_LIST:
      return changeHomeData(state, action);
    case constants.TOGGLE_BACKTOP_SHOW:
      return toggleBackTopShow(state, action);

    default: 
      return state;
  }
}