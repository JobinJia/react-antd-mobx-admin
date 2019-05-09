import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@com/App';
import * as serviceWorker from './serviceWorker';
import {LocaleProvider} from "antd";
import {Provider} from "mobx-react";
import {BrowserRouter as Router} from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';

import * as stores from '@/mobx'


ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider {...stores}>
      <Router>{<App/>}</Router>
    </Provider>
  </LocaleProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
