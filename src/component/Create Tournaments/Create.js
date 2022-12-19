import { Box } from "@mui/material";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./styles/create.scss";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  Date: "",
};

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required "),
  Date: yup.string().required("Your Tournament time"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required email"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required Phone number"),
});

const Create = () => {
  const [sent, setSent] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFormSumbit = (values) => {
    console.log(values);
    setSent(true);
  };

  return (
    <>
      <Box className="Main_box">
        <div className="Co">
          <h1 className="Co">NEW TOURNAMENT</h1>
        </div>
        <div className="Info">
          <h1 className="Infoo">BASIC INFO</h1>
        </div>
        <Formik
          onSumbit={handleFormSumbit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box className="Box">
                <div class="input-block">
                  <input
                    class="input-block-el"
                    variant="filled"
                    type="text"
                    label="first Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    placeholder="Your name"
                  />
                  <div class="input-block-line"></div>
                  <p className="Erros">
                    {!!touched.lastName && !!errors.firstName}
                  </p>
                  <p className="Erros">
                    {touched.firstName && errors.firstName}
                  </p>
                </div>
                <div class="input-block">
                  <input
                    class="input-block-el"
                    variant="filled"
                    type="text"
                    label="last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    placeholder="Your Tournament Name"
                  />
                  <div class="input-block-line"></div>
                  <p className="Erros">
                    {!!touched.lastName && !!errors.lastName}
                  </p>
                  <p className="Erros">{touched.lastName && errors.lastName}</p>
                </div>
                <div class="input-block">
                  <input
                    class="input-block-el"
                    variant="filled"
                    type="text"
                    label="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    placeholder="Your Email"
                  />
                  <div class="input-block-line"></div>
                  <p className="Erros">{!!touched.email && !!errors.email}</p>
                  <p className="Erros">{touched.email && errors.email}</p>
                </div>
                <div class="input-block">
                  <input
                    class="input-block-el"
                    variant="filled"
                    type="text"
                    label="contact"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    placeholder="Your Phone Number"
                  />
                  <div class="input-block-line"></div>
                  <p className="Erros">
                    {!!touched.contact && !!errors.contact}
                  </p>
                  <p className="Erros">{touched.contact && errors.contact}</p>
                </div>
                <div class="input-block">
                  <input
                    class="input-block-el"
                    variant="filled"
                    type="date"
                    label="Date"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Date}
                    name="Date"
                    placeholder="Your Tournament Time"
                  />
                  <div class="input-block-line"></div>
                  <p className="Erros">{!!touched.Date && !!errors.Date}</p>
                  <p className="Erros">{touched.Date && errors.Date}</p>
                </div>
                <div class="button_Creat">
                  <button type="submit" class="btn_Creat">
                    <span>SAVE AND CONTINUE</span>
                  </button>
                </div>
                {sent && <p>your email sent</p>}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Create;
