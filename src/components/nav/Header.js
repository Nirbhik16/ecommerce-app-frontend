import React, { useState } from "react";
import { Menu ,Badge} from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Search from "../forms/Search";


const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let {user,cart} = useSelector((state)=>({...state}));
  const navigate = useNavigate();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type:"LOGOUT",
      payload:null,
    });
    navigate('/login');
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="shop" icon={<ShoppingOutlined />}>
        <Link to="/shop">Shop</Link>
      </Item>

      <Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>

      {!user && (
      <Item key="register" icon={<UserAddOutlined />} className="float-end">
      <Link to="/register">Register</Link>
      </Item>
      )}

      {!user && (
      <Item key="login" icon={<UserOutlined />} className="float-end">
      <Link to="/login">Login</Link>
      </Item>
      )}
      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-end"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
      <span className="p-2">
        <Search />
      </span>
    </Menu>
  );
};

export default Header;