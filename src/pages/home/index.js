import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
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
      </HomeWrapper>
    );
  }
}
 
export default Home;