import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  AllWriter
} from '../style'


class Writer extends PureComponent {
  

  render() { 

    const { list } = this.props;

    return (
      <WriterWrapper>
        <WriterTitle>
          <span
            className="title"
          >推荐作者</span>
          <span
            className="switch"
          >
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
            换一换
          </span>
        </WriterTitle>
        {
          list.map(val => {
            return (
              <WriterItem
                key={val.get('id')}
              >
                <span className="img"></span>
                <span
                  className="follow"
                >+关注</span>
                <span className="nickName">{val.get('nickname')}</span>
                <span className="des">{val.get('des')}</span>
                
              </WriterItem>
            )
          })
        }

        <AllWriter>
          查看全部 >
        </AllWriter>
        
      </WriterWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home','writerList'])
  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}
 
export default connect(mapState, mapDispatch)(Writer);