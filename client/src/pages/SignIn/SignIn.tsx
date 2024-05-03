import error_icon from "../../assets/icons/error-24px.svg";
import BubbleBackground from "../../Components/BubbleBackground/BubbleBackground";
import "./SignIn.scss";
import axios, { AxiosError } from "axios";
import { SERVER_ENDPOINT } from "../../util";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SignInProps {
  setToken: (token: string) => void;
}
function SignIn({ setToken }: SignInProps) {
  const navigate = useNavigate();
  const [loginErrorMsg, setLoginErrorMsg] = useState(null);
  function errorMsgElement() {
    return (
      <div className="form__field-error-msg">
        <img src={error_icon} alt="error icon" />
        This field is required
      </div>
    );
  }

  const changeHandler = async (event: any) => {
    event.preventDefault();
    if (event.target.value && event.target.value !== "") {
      event.target.classList.remove("invalid");
    }
  };
  const submitHandler = async (event: any) => {
    event.preventDefault();

    for (const item of ["email", "password"]) {
      if (!event.target[item].value || event.target[item].value === "") {
        event.target[item].classList.add("invalid");
        return;
      }
    }
    setLoginErrorMsg(null);
    try {
      const response = await axios.post(SERVER_ENDPOINT + "/auth/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      setToken(token);
      navigate("/");
    } catch (err: any) {
      console.log(err);
      setLoginErrorMsg(err.response.data);
    }
  };

  return (
    <>
      <BubbleBackground />
      <main className="page-main">
        <div className="signin">
          <h1>Log in</h1>
          <form className="form" onSubmit={submitHandler} onChange={changeHandler}>
            <div className="form__field-wrapper">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form__field" />
              {errorMsgElement()}
            </div>
            <div className="form__field-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="form__field" />
              {errorMsgElement()}
            </div>
            <div
              className="form__login-error-message"
              style={{ display: loginErrorMsg ? "block" : "none" }}
            >
              <img src={error_icon} alt="error icon" />
              {loginErrorMsg}
            </div>
            <input type="submit" value="Sign In" className="CTA" />
          </form>
          <p>
            Don't have an account? <Link to="/SignUp">Sign up</Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default SignIn;
