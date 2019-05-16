import React from 'react';
import AsyncComponent from '@utils/AsyncLoad';
import {Route, Switch} from 'react-router-dom';
import {createNotFoundRoute} from '../utils/router';

const Home = AsyncComponent(() => import('@views/Main/Home'));

const getRouter = () => (
  <div>
    <Switch>
      {/*<Route exact path='/' component={ShopAdd}/>*/}
      {createNotFoundRoute()}
    </Switch>
  </div>
);
export default getRouter;
