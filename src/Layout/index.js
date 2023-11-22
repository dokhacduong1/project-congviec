/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import FooterMain from "./Footer";
import Sider from "antd/es/layout/Sider";
import "./Layout.scss"
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import SliderHome from "../Components/SliderHome";
import { deleteAllCookies, getCookie } from "../Helpers/cookie";
import { authentication } from "../Action/auth";
import {  checkAuthenAccount } from "../services/usersApi";


const { Content } = Layout;
function LayoutMain() {
  const authenMain = useSelector((status) => status.authenticationReducer);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useState("");
 
  const checkToken =getCookie("token");
  useEffect(() => {
    const checkAuthen = async () => {
      const obj = {
        token:checkToken
      }
      const authenAccount = await checkAuthenAccount(obj);
      //if check token đúng thì gán lại token không rỗng
      if (authenAccount.success) {
        dispatch(authentication(true));
        setToken(checkToken);
      }else{
        //nếu không thì sẽ xóa token và sẽ dispath thành false
        dispatch(authentication(false));
        deleteAllCookies();
        navigate("/login");
      }
    }
    checkAuthen()

  }, [])
  return (
    <>
      <Layout>
        <Header className="layout__header" setCollapsed={setCollapsed} collapsed={collapsed} />
        <Layout>
          {(authenMain) && (
            <>
           
              <Sider collapsed = {collapsed}>
                  <SliderHome collapsed = {collapsed} setCollapsed = {setCollapsed} />
              </Sider>
                     
            </>
          )}
          <Content className="layout__main">
            <Outlet />
          </Content>
        </Layout>
        <FooterMain />
      </Layout>
    </>
  );
}
export default LayoutMain;
