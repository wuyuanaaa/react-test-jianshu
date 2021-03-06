import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { 
  ListItem,
  ListInfo
} from '../style'

class List extends PureComponent {
  

  render() { 
    const { list } = this.props;

    const newList = list.toJS();

    return (
      <div>
        {
          newList.map(val => {
            return (
              <Link
                key={val.id}
                to={'/detail/' + val.id}
              >
                <ListItem>
                  <span
                    className={val.img && val.img.length ? 'list-img' : 'list-img list-img-hide'}
                  ></span>
                  <ListInfo
                    className={val.img && val.img.length ? 'have-img' : ''}
                  >
                    <h3 className="title">{val.title}</h3>
                    <p className="abstract">{val.abstract}</p>
                    <div className="meta">
                      <span className="meta-info score">
                        <i className="iconfont">&#xe63c;</i>
                        {val.score}
                      </span>
                      <span className="meta-info nickname">
                        {val.nickname}
                      </span>
                      <span className="meta-info">
                        <i className="iconfont">&#xe601;</i>
                        {val.comment}
                      </span>
                      <span className="meta-info">
                        <i className="iconfont">&#xe602;</i>
                        {val.like}
                      </span>
                    </div>
                  </ListInfo>
                </ListItem>
              </Link>
              
            )
          })
        }
      </div>
      
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
  }
}
 
export default connect(mapState, null)(List);