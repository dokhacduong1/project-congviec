import { Button, Card, Checkbox, Form, Input, notification } from "antd";
import "./Login.scss"
import login from "./images/login.gif"
import { NavLink, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {  loginAccount } from "../../services/usersApi";
import { setCookie } from "../../Helpers/cookie";
import { authentication } from "../../Action/auth";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const onFinishForm = async (valueForm) => {
    const result = await loginAccount(valueForm);
    const time = 1;
    if (result.success) {
      setCookie("token", result.token, time);
      dispatch(authentication(true));
      navigate("/")
    } else {
      api.error({
        message: <span style={{ color: "red" }}>Failed</span>,
        description: (
          <>
            <i>{result.error}</i>
          </>
        ),
      });
    }
  }
  return (
    <>
      {contextHolder}
      <Card className="login">
        <div className="container">
          <div className="row col-12 justify-content-end align-items-center">
            <div className="login_box-image col-12">
              <div className="row col-12 justify-content-center align-items-center">
                <div className="col-6 login_box-image-title">
                  <h1>Sign In To <br /> Adorable World! </h1>
                  <p>If you don't an account you can  <NavLink to={"/register"}>Register here</NavLink> </p>
                </div>
                <div className="col-6 login_box-image-login">
                  <div className="login_box-image-loginBox">
                    <Form
                      name="basic"
                      layout="vertical"
                      autoComplete="off"
                      onFinish={onFinishForm}
                    >
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: 'email',
                            message: <span style={{ color: "rgb(145 68 251)", fontWeight: "600", background: "#fff", padding: "1px", borderRadius: "5px" }}>Please input your email!</span>,
                          },
                        ]}
                      >


                        <Input addonBefore={<UserOutlined />} placeholder="Email" />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: <span style={{ color: "rgb(145 68 251)", fontWeight: "600", background: "#fff", padding: "2px", borderRadius: "5px" }}>Please input your password!</span>,

                          },
                        ]}
                      >
                        <Input type="password" addonBefore={<KeyOutlined />} placeholder="Password" />
                      </Form.Item>

                      <Form.Item
                      >
                        <button type="submit" >
                          Sign In
                        </button>
                      </Form.Item>
                    </Form>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </Card>
    </>
  );
}
export default Login;
