import React from 'react';

import {GlobalStyle1,Middle} from './style'
import {BrowserRouter,Route} from 'react-router-dom'
import {GlobalStyle} from './statics/iconfont/iconfont'
import {Provider} from 'react-redux';
import store from './store/store'
import Home from './page/home/index'
import detail from './page/detail/index';
import signUp from './page/signUp/signUp'
function App() {
  
  
  return (
    <Provider store={store} >
    <div>
    <Middle>
    <GlobalStyle />
    <GlobalStyle1 />
    <BrowserRouter>
    <Route path='/' exact component={Home}></Route>
    <Route path='/detail/:id' exact component={detail}></Route>
    <Route path='/signUp' exact component={signUp} ></Route>
    </BrowserRouter>
    </Middle>
    </div>
    </Provider>
  );
}

export default App;
