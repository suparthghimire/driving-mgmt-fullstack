import { Form, FormControl, Button } from "react-bootstrap";
import Head from "next/head";
import * as yup from "yup";
import { useFormik, validateYupSchema } from "formik";
import { LOGIN, REGISTER } from "../../utils/queries";
import { useState } from "react";
import FormWrapper from "../../components/FormWrapper";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState([]);
  const [file, setFile] = useState(null);
  const validation_schema = yup.object().shape({
    full_name: yup.string().required("Full Name is Required"),
    phone_number: yup.string().required("Phoen Number is Required"),
    email: yup
      .string()
      .email("Email Format Invalid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
    re_password: yup
      .string()
      .required("Password Confirmation is Required")
      .oneOf([yup.ref("password"), null], "Passwords Donot match"),
    address: yup.string().required("Address Comfirmation is Required"),
    citizenship_no: yup.string().required("Citizenshup Number is Required"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      re_password: "",
      address: "",
      citizenship_no: "",
      image: "",
    },
    validationSchema: validation_schema,
    onSubmit: (values) => {
      delete values["re_password"];
      values.image = file;
      const registerPromise = new Promise(async (res, rej) => {
        try {
          const register = await REGISTER(values);
          if (register.status === "error") throw register;

          const login = await LOGIN({
            email: values.email,
            password: values.password,
          });
          if (login.status === "error") throw login;

          setServerErrors([]);
          res("Registered and Logged In Successfully!");
          router.push(
            router.query.redirect ? router.query.redirect : "/user/profile"
          );
        } catch (error) {
          setServerErrors(error.detail.errors);
          rej("Error While Registering");
        } finally {
          formik.resetForm();
          setFile(null);
        }
      });
      toast.promise(registerPromise, {
        success: "Registration Successful Please Login",
        error: "Error During Regestration",
        pending: "Wait.. We Are Registering You...",
      });
    },
  });
  return (
    <div className="d-grid">
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormWrapper
        form_title="Free Sign Up"
        form_subtext="Don't have an account? Create your account, it takes less than a minute"
        card_footer_title="Already have account?"
        card_footer_link_text="Log In"
        card_footer_link="/auth/login"
      >
        {serverErrors.length > 0 && (
          <div className="alert alert-danger pb-0">
            <ul className="pb-0">
              {serverErrors.map((item, index) => {
                return (
                  <li className="p-0 pb-0" key={`login-error-${index}`}>
                    {item.msg}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <FormControl
              type="text"
              name="full_name"
              value={formik.values.full_name}
              isInvalid={!!formik.errors.full_name}
              isValid={formik.touched.full_name && !formik.errors.full_name}
              placeholder="Enter Full Name"
              onChange={formik.handleChange}
            />
            {formik.errors.full_name && (
              <small className="text-danger fst-italic">
                {formik.errors.full_name}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Phone Number</Form.Label>
            <FormControl
              type="tel"
              name="phone_number"
              isInvalid={!!formik.errors.phone_number}
              isValid={
                formik.touched.phone_number && !formik.errors.phone_number
              }
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              placeholder="Enter Phone Number"
            />
            {formik.errors.phone_number && (
              <small className="text-danger fst-italic">
                {formik.errors.phone_number}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <FormControl
              type="email"
              name="email"
              isInvalid={!!formik.errors.email}
              isValid={formik.touched.email && !formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Email"
            />
            {formik.errors.email && (
              <small className="text-danger fst-italic">
                {formik.errors.email}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              name="password"
              isInvalid={!!formik.errors.password}
              isValid={formik.touched.password && !formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Password"
            />
            {formik.errors.password && (
              <small className="text-danger fst-italic">
                {formik.errors.password}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Re-Type Password</Form.Label>
            <FormControl
              type="password"
              name="re_password"
              isInvalid={!!formik.errors.re_password}
              isValid={formik.touched.re_password && !formik.errors.re_password}
              value={formik.values.re_password}
              onChange={formik.handleChange}
              placeholder="Re Enter Password"
            />
            {formik.errors.re_password && (
              <small className="text-danger fst-italic">
                {formik.errors.re_password}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label>Address</Form.Label>
            <FormControl
              type="text"
              name="address"
              isInvalid={!!formik.errors.address}
              isValid={formik.touched.address && !formik.errors.address}
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Enter Address"
            />
            {formik.errors.address && (
              <small className="text-danger fst-italic">
                {formik.errors.address}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
            <Form.Label>Citizenship Number</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter Citizenship Number"
              name="citizenship_no"
              isInvalid={!!formik.errors.citizenship_no}
              isValid={
                formik.touched.citizenship_no && !formik.errors.citizenship_no
              }
              value={formik.values.citizenship_no}
              onChange={formik.handleChange}
            />
            {formik.errors.citizenship_no && (
              <small className="text-danger fst-italic">
                {formik.errors.citizenship_no}
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
            <Form.Label>Upload Profile Image</Form.Label>
            <FormControl
              type="file"
              name="image"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              accept="image/*"
              placeholder="Enter Citizenship Number"
            />
            {file === null && (
              <small className="text-danger fst-italic">
                Image is Required
              </small>
            )}
          </Form.Group>
          <Form.Group className="text-center">
            <Button type="submit">Register</Button>
          </Form.Group>
        </Form>
      </FormWrapper>
    </div>
  );
}
