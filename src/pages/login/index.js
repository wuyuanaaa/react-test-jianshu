import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { 
  LoginWrapper,
  LoginInner
} from './style'

class Login extends PureComponent {
  
  render() {
    const { isLogin, handleLogin } = this.props;
    return isLogin ? 
      <Redirect to='/' />
      : 
      <LoginWrapper>
        <LoginInner>
          <input 
            className="input" 
            placeholder="帐号"
            ref={(input) => {this.account = input}}
          />
          <input 
            className="input" 
            placeholder="密码" 
            type="password" 
            ref={(input) => {this.password = input}}
          />
          <button
            className="btn"
            onClick={() => handleLogin(this.account, this.password)}
          >
            登录
          </button>
        </LoginInner>
      </LoginWrapper>
  }



}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = (dispatch) => ({
  handleLogin(account, password) {

    dispatch(actionCreators.login(account.value, password.value))
  }
})


export default connect(mapState, mapDispatch)(Login)