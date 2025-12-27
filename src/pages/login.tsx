import { Button, Input, Form } from "antd";
import { useFormik } from "formik";
import { login } from '../reducer/api'

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../utils/token";

const LogIn = () => {

  const dispatch = useDispatch<any>();
  const navigate = useNavigate()
  const { handleSubmit, handleChange, resetForm, values} = useFormik({
    initialValues: { 
      email: "",
      password: "" 
    },
    onSubmit: (values) => {
      dispatch( login ({ email: values.email, password: values.password}))
    }
  });

  return (
    <div className="min-h-screen w-full flex justify-center bg-white">
      <div className="w-full max-w-[420px] mt-[80px]">
        <Form layout="vertical" onFinish={handleSubmit} className="[&_.ant-form-item]:mb-3">
          <h1 className="text-[36px] font-bold mb-1">Log in to Exclusive</h1>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <Form.Item name="email" rules={[{ required: true, message: "Please enter your email" }]}>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please enter password" }]}>
            <Input.Password
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <div className="flex justify-end mb-3">
            <Button type="link" className="p-0 text-[#DB4444]">
              Forget Password?
            </Button>
          </div>

          <Form.Item className="mb-0">
            <Button type="primary" htmlType="submit" className="w-full h-[50px]">
              Log In
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            Don't have account? <NavLink to="/signUp" className="text-blue-600">Sign Up</NavLink>
          </div>
          <Outlet/>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;