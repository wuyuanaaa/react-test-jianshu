import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends Component {

  
  render() { 
    const { list } = this.props;

    return (
      <RecommendWrapper>
        {
          list.map(val => {
            return (
              <RecommendItem
                key={val.get('id')}
              >
                <img
                  className="recommend-img"
                  src={val.get('url')}
                  alt=""
                />
              </RecommendItem>
            )
          })
        }
        
      </RecommendWrapper>
    );
  }
}



const mapState = (state) => {
  return {
    list: state.getIn(['home','recommendList']),
  }
}


const mapDispatch = (dispatch) => {
  return {

  }
}
 
export default connect(mapState, mapDispatch)(Recommend);