import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  
  render() { 

    const { showBackTop } = this.props;

    return ( 
      <HomeWrapper>
        <HomeLeft>
          <img 
            className="banner-img" 
            src="https://upload.jianshu.io/admin_banners/web_images/4678/1a394b3d5db36759b404d224eba778d753b6d629.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          showBackTop ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
        
      </HomeWrapper>
    );
  }


  componentDidMount() {
    this.props.getHomeList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

}

const mapState = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})


const mapDispatch = (dispatch) => {
  return {
    getHomeList() {
      dispatch(actionCreators.getHomeList());
    },
    changeScrollTopShow() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 400) {
        dispatch(actionCreators.toggleBackTopShow(true))
      } else {
        dispatch(actionCreators.toggleBackTopShow(false))
      }

    }
  }
}
 
export default connect(mapState, mapDispatch)(Home);