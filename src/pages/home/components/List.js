import React, { Component } from 'react';
import { 
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  

  render() { 
    return (
      <div>
        <ListItem>
          <span
            className="list-img"
          ></span>
          <ListInfo
            className="have-img"
          >
            <h3 className="title">【原来时间真的能改变很多东西】</h3>
            <p className="abstract">那个曾经和我一起信誓旦旦的说以后不谈恋爱，要将单身进行到底的大学室友A，竟然告诉我今年下半年就要结婚了。 我惊讶于她的速度之快觉得不可思议的同时... </p>
            <div className="meta">
              <span className="meta-info score">
                <i className="iconfont">&#xe63c;</i>
                10.6
              </span>
              <span className="meta-info nickname">
                仲维宇
              </span>
              <span className="meta-info">
                <i className="iconfont">&#xe601;</i>
                10
              </span>
              <span className="meta-info">
                <i className="iconfont">&#xe602;</i>
                25
              </span>
            </div>
          </ListInfo>
        </ListItem>
      </div>
      
    );
  }
}
 
export default List;