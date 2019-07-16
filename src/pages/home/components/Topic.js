import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store'
import {
  TopicWrapper,
  TopicItem,
} from '../style'

class Topic extends PureComponent {
  

  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((val) => {
            return (
              <TopicItem
                key={val.get('title')}
              >
                <span className="item-icon"></span>
                {val.get('title')}
              </TopicItem>
            )
          })
        }
        
      </TopicWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
}


export default connect(mapStateToProps, null)(Topic);