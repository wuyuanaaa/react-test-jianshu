import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends PureComponent {

  
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

 
export default connect(mapState, null)(Recommend);