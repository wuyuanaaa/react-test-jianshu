import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login/loadable';
import Detail from './pages/detail/loadable';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle /> 
        <Iconfont />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
