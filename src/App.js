import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle /> 
        <Iconfont />
        <Header />
      </div>
    </Provider>
    
  );
}

export default App;
