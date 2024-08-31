import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { authLogin } from "../firebase/auth";
import { LogedContext } from "../../context/isLoged";
// import { auth } from "../firebase/firebase";
function Login() {
  const navigate = useNavigate();
  const language = useSelector((state) => state.lang.language);

  // const { handleSubmit } = useForm({ mode: "onChange" });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: " ",
    passwordError: " ",
  });
  // const nav = useNavigate();

  const validationInput = (eve) => {
    if (eve.target.name == "email") {
      setUser({ ...user, email: eve.target.value });
      setErrors({
        ...errors,
        emailError:
          eve.target.value.length == 0
            ? "Email is required"
            : eve.target.value.includes("@")
            ? ""
            : "Invalid Email",
      });
    } else if (eve.target.name == "password") {
      setUser({ ...user, password: eve.target.value });
      setErrors({
        ...errors,
        passwordError:
          eve.target.value.length == 0
            ? "Password is required"
            : eve.target.value.length < 8
            ? "Invalid Password"
            : "",
      });
    }
  };
  const { setLoged } = useContext(LogedContext);
  const submit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await authLogin(email, password);
    if (res.email) {
      console.log(res);
      setLoged(true);
      navigate("/movies");
    }
  };

  const showPassword = () => {
    const input = document.getElementsByName("password")[0];
    input.type = input.type == "password" ? "text" : "password";
    const eye = document.getElementsByName("IoEye")[0];
    const eyeOff = document.getElementsByName("IoMdEyeOff")[0];
    eye.classList == "d-block"
      ? (eye.classList = "d-none")
      : (eye.classList = "d-block");
    eyeOff.classList == "d-none"
      ? (eyeOff.classList = "d-block")
      : (eyeOff.classList = "d-none");
  };


  const goToReg=()=>{
    navigate("/register");
  }


  return (
    <>
      <Form
        onSubmit={(e) => {
          submit(e);
        }}
        className="col-4 border m-5"
      >
        <div className="m-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              {language == "en" ? "Email address" : " البريد الالكتنرونى "}{" "}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              className={`${errors.emailError ? "invalid" : ""}`}
              onChange={(e) => {
                validationInput(e);
              }}
            />
            {errors.emailError && (
              <p className="text-danger">{errors.emailError}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label>
                {language == "en" ? " Password " : "  كلمة المرور "}
              </Form.Label>
              <IoEye
                name="IoEye"
                className="d-block"
                onClick={() => {
                  showPassword();
                }}
              />
              <IoMdEyeOff
                name="IoMdEyeOff"
                className="d-none"
                onClick={() => {
                  showPassword();
                }}
              />
            </div>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => {
                validationInput(e);
              }}
            />
            {errors.passwordError && (
              <p className="text-danger">{errors.passwordError}</p>
            )}
          </Form.Group>
          <p className="m-0">
            {language == "en" ?"Dont have an account ? ":" لا تمتلك حساب ؟"}
            <p
            onClick={goToReg}
              className="d-inline-block text-decoration-underline text-primary"
              style={{ cursor: "pointer"}}
            >
              {language == "en" ?"register now":" سجل الان "}
            </p>
          </p>
          <Button className="w-100" variant="primary" type="submit">
            {language == "en" ? "Login" : " دخول "}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Login;
