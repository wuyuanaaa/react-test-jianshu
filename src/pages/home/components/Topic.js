import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import {
  TopicWrapper,
  TopicItem,
} from '../style'

class Topic extends Component {
  
  componentDidMount() {
    this.props.getTopicList();
  }


  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((val, index) => {
            return (
              <TopicItem
                key={index}
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

const mapDispathToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch(actionCreators.getList());
    }
  }
}

 
export default connect(mapStateToProps, mapDispathToProps)(Topic);