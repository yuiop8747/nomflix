import React from "react";
import {
  Link,
  withRouter,
} from "react-router-dom"; /*withRouter : 다른 컴포넌트를 감싸는 컴포넌트 */
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition : border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`; // 이런식으로 Link 태그에 스타일을 추가할 수 있다.

export default withRouter(( // 헤더 컴포넌트는 withRouter를 사용했기 때문에 우리의 라우터의 위치를 알고있다. 원래 Header는 Route가 아니기때문에 알 수 없었다.
  {
    location: { pathname },
  } /* export 하는건 다른 컴포넌트가 안에있는 "withRouter" 컴포넌트임. 
    withRouter로 감쌌기 때문에, props를 사용할 수 있게됨. 즉, withRouter를 사용하면 어떤 컴포넌트와도 연결할 수 있음. 
    props를 왜쓰는가? => 이전에 어느 페이지에서, 어느 URL에서 왔는지 알 수 있음. 즉, 분기에따라 처리할 수 있게됨.
    */
) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

/*
아래의 코드와 위의 코드는 동일한 의미임.

const Header = () => ( 
<Header>
  <List>
    <Item current={true}>
      <SLink to="/">Movies</SLink>
    </Item>
    <Item current={true}>
      <SLink to="/tv">TV</SLink>
    </Item >
    <Item current={true}>
      <SLink to="/search">Search</SLink>
    </Item>
  </List>
</Header>
);
export default withRouter(Header);  

*/
