import React from 'react';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <Iconfont />
      <Header />
    </div>
  );
}

export default App;
