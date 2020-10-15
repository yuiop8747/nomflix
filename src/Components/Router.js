import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        {" "}
        {/* 두개의 컴포넌트가 동시에 rendering 되는것을 방지해주는 element */}
        <Route path="/" exact={true} component={Home}></Route> {/* router는 route에게 기본적으로 1개의 컴포넌트만 렌더링할 수 있다. */}
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/show/:id" component={Detail}/>
        <Redirect from="*" to="/" />
        {/* 일치하는 url이 하나도 없다면, to로 보낸다. */}
      </Switch>
    </>
  </Router>
);
