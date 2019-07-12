import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})


export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.merge({
        topicList: action.data.get('topic'),
        articleList: action.data.get('article'),
        recommendList: action.data.get('recommend'),
        writerList: action.data.get('writer')
      })
      
    default: 
      return state;
  }
}