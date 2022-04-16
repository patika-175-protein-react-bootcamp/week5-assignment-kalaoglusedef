import Input from "../Input";
import Checkbox from "../Checkbox";
import "./index.scss";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
const RightSide = ({ isDarkMode }) => {
  return (
    <div className={`RightContainer ${isDarkMode ? "dark" : ""}`}>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          userName: "",
          password: "",
          passwordConfirmation: "",
          isAccept: false,
        }}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={yup.object().shape({
          name: yup.string(),
          userName: yup.string().required("Kullanıcı adı alanı zorunludur"),
          password: yup.string().required("Şifre alanı zorunludur"),
          passwordConfirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "Şifreler eşleşmemektedir")
            .required("Şifreni tekrar gir alanı zorunludur"),
          email: yup
            .string()
            .email("Email tipinde giriniz")
            .required("Lütfen doldurunuz"),
          isAccept: yup
            .boolean()
            .oneOf([true], "Sözleşmeyi kabul etmek zorundasınız"),
        })}
        onSubmit={(values) => {
          debugger;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => {
          return (
            <form>
              <h3>Kayıt</h3>
              <div className="nameContainer">
                <Input
                  label="İSİM"
                  placeholder={"İsmini gir"}
                  isRequired={false}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  darkMode={isDarkMode}
                />
                <Input
                  label="SOYİSİM"
                  placeholder={"Soyismini gir"}
                  isRequired={false}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  darkMode={isDarkMode}
                />
              </div>
              <div>
                <Input
                  label={"E-POSTA"}
                  isRequired={true}
                  placeholder="E-posta adresini gir"
                  error={errors.email && touched.email ? errors.email : ""}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  darkMode={isDarkMode}
                ></Input>
              </div>
              <div>
                <Input
                  label={"Kullanıcı Adı"}
                  isRequired={true}
                  placeholder="Kullanıcı adını gir"
                  error={
                    errors.userName && touched.userName ? errors.userName : ""
                  }
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  darkMode={isDarkMode}
                ></Input>
              </div>
              <div>
                <Input
                  label={"ŞİFRE"}
                  isRequired={true}
                  placeholder="Şifreni gir"
                  error={
                    errors.password && touched.password ? errors.password : ""
                  }
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  darkMode={isDarkMode}
                ></Input>
              </div>
              <div>
                <Input
                  label={"ŞİFRENİ TEKRAR GİR"}
                  isRequired={true}
                  placeholder="Şifreni doğrula"
                  error={
                    errors.passwordConfirmation && touched.passwordConfirmation
                      ? errors.passwordConfirmation
                      : ""
                  }
                  type="password"
                  name="passwordConfirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                  darkMode={isDarkMode}
                ></Input>
              </div>
              <div>
                <Checkbox
                  error={errors.isAccept}
                  checked={values.isAccept}
                  darkMode={isDarkMode}
                  onChange={(e) => {
                    setFieldValue("isAccept", e.target.checked);
                  }}
                ></Checkbox>
              </div>
              <button onClick={handleSubmit}>KAYIT OL</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RightSide;
