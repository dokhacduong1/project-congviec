import { Button, Card, Checkbox, Form, Input, notification } from "antd";
import "./Register.scss"
import login from "./images/login.gif"
import { NavLink, useNavigate } from "react-router-dom";
import {
    EditOutlined,
    KeyOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { registerAccount } from "../../services/usersApi";

function Register() {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const onFinishForm = async (valueForm) => {
        const result = await registerAccount(valueForm)
        if (result.success) {
            api.success({
                message: `Success`,
                description: (
                    <>
                        <i>{result.success}</i>
                    </>
                ),
            });
            setTimeout(()=>{
                navigate("/login")
            },2500)
            
        }else{
            api.error({
                message: <span style={{color:"red"}}>Failed</span>,
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

                                <div className="col-6 login_box-image-login">
                                    <div className="login_box-image-loginBox">
                                        <Form
                                            name="basic"
                                            layout="vertical"
                                            autoComplete="off"
                                            onFinish={onFinishForm}
                                        >
                                            <Form.Item
                                                label="Full Name"
                                                name="fullName"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: <span style={{ color: "rgb(145 68 251)", fontWeight: "600", background: "#fff", padding: "1px", borderRadius: "5px" }}>Please input your full name!</span>,
                                                    },
                                                ]}
                                            >
                                                <Input addonBefore={<EditOutlined />} placeholder="Full Name" />
                                            </Form.Item>
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
                                                <button type="submit">
                                                    Register
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
export default Register;
