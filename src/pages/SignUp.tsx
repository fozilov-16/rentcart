import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../reducer/api";

  const SignUp = () => {
    const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password"),
  });

  const { handleSubmit, handleChange, resetForm, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register({email: values.email, password: values.password, confirmPassword: values.confirmPassword}))
      resetForm()
    },
  });

  return (
    <div className="mt-[50px] flex items-center justify-center bg-white">

      <form onSubmit={handleSubmit} className="w-[420px]">
        <Input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
        size="large"
        autoComplete="email"
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}


        <Input.Password
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          size="large"
          className="mt-4"
          autoComplete="new-password"
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}


        <Input.Password
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          size="large"
          className="mt-4"
          autoComplete="new-password"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword}
          </p>
        )}

        <Button
          htmlType="submit"
          type="primary"
          className="w-full h-[48px] mt-6"
        >
          Create Account
        </Button>

        <div className="text-center text-sm mt-4">
          Already have account?{" "}
          <Link to="/logIn" className="text-blue-600">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
