import error_icon from "../../assets/icons/error-24px.svg";
import "./SignUp.scss";
import BubbleBackground from "../../Components/BubbleBackground/BubbleBackground";
import axios from "axios";
import { SERVER_ENDPOINT } from "../../util";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const [signupErrorMsg, setSignupErrorMsg] = useState(null);
  const navigate = useNavigate();

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

    setSignupErrorMsg(null);
    try {
      const response = await axios.post(SERVER_ENDPOINT + "/auth/signup", {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      navigate("/signin");
    } catch (err: any) {
      console.log(err);
      setSignupErrorMsg(err.response.data);
    }
  };

  return (
    <>
      <BubbleBackground />
      <main className="page-main">
        <section className="signup">
          <h1>Create an account</h1>
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
              className="form__signup-error-message"
              style={{ display: signupErrorMsg ? "block" : "none" }}
            >
              <img src={error_icon} alt="error icon" />
              {signupErrorMsg}
            </div>
            <input type="submit" value="Sign Up" className="CTA" />
          </form>
          <p>
            Already have an account? <Link to="/SignIn">Login</Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default SignUp;
