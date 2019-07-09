import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle /> 
        <Iconfont />
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact render={()=><div>home</div>}></Route>
            <Route path='/page' exact render={()=><div>page</div>}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
