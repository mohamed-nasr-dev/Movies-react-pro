
import { useForm } from "react-hook-form";
// import React from 'react'

import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRegister } from "../firebase/auth";

export default function Register() {
  const nav = useNavigate();
  const language = useSelector((state)=>state.lang.language)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    authRegister(email,password)
    nav('/login')
  };
 
  const password = watch('password')
  const email = watch('email')

  const goToLog = () => {
    nav('/login')
  }


  return (
    <>
      <Form className="col-4 border m-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>{(language=='en')?'name':' الاسم '}</Form.Label>
            <Form.Control type="text" {...register("name", {
                required: true,
              })} placeholder={(language=='en')?'Enter name':' ادحل الاسم '} />
              {errors.name?.type == "required" && (
              <p className="text-danger">Name is required</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>{(language=='en')?'Email address':' البريد الالكتنرونى '}</Form.Label>
            <Form.Control
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z]{3,8}[0-9]{0,5}(@)(gmail|outlook)(.com)$/,
              })}
              placeholder={(language=='en')?'Enter email':'ادخل البريد الالكتنرونى'}
            />
            {errors.email?.type == "required" && (
              <p className="text-danger">Email is required</p>
            )}
            {errors.email?.type == "pattern" && (
              <p className="text-danger">Invalid Email</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label> {(language=='en')?'User Name':' اسم المستخدم '} </Form.Label>
            <Form.Control type="text" placeholder={(language=='en')?'Enter name':'ادخل اسم المستخدم '} {...register("userName", {
                required: true,
                pattern:  /^\S+$/
              })}/>
            {errors.userName?.type == "required" && (
              <p className="text-danger">User Name is required</p>
            )}
             {errors.userName?.type == "pattern" && (
              <p className="text-danger"> No space</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>{(language=='en')?'Password':' كلمة المرور '}</Form.Label>
            <Form.Control type="password" name='password' placeholder={(language=='en')?'Password':' كلمة المرور '} {...register("password", {
                required: true,
                pattern: /[a-zA-z]{1,}[0-9]{8,}[!@#$%^&*]{1,}/

              })} />
              {errors.password?.type == "required" && (
              <p className="text-danger">password is required</p>
            )}
             {errors.password?.type == "pattern" && (
              <p className="text-danger"> Password must contain at least one uppercase letter, one lowercase letter, and one special character</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>{(language=='en')?' Confirm Password':' تأكيد كلمة المرور '}</Form.Label>
            <Form.Control type="password" {...register("confirmPassword", {
                required: true,
                validate: (value) =>value == password
              })} placeholder={(language=='en')?'Confirm Password':' تأكيد كلمة المرور '} />
              {errors.confirmPassword?.type == "required" && (
              <p className="text-danger">password is required</p>
            )}
             {errors.confirmPassword?.type == "validate" && (
              <p className="text-danger"> Pasword Not match </p>
            )}
          </Form.Group>
          <p className="m-0">
            {language=='en'?'Do you have account ? ':" هل تمتلك حساب؟ "}
            <p
            onClick={goToLog}
              className="d-inline-block text-decoration-underline text-primary"
              style={{ cursor: "pointer" }}
            >
              {(language=='en')?'Login now' :'تسجيل الدخول'}
            </p>
          </p>
          <Button variant="success" type="submit">
          {(language=='en')?'Register':' تسجيل '}
          </Button>
        </div>
      </Form>
    </>
  );
}
