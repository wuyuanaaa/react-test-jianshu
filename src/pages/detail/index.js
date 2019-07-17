import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    
    const { title, content, match } = this.props;
    console.log(match.params.id);
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>

        <Content 
          dangerouslySetInnerHTML={{__html: content}} 
        />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
 
export default connect(mapState, mapDispatch)(Detail);