import pencils from "../../assets/images/pencils.png";
import error_icon from "../../assets/icons/error-24px.svg";
import "./SignUp.scss";
import BubbleBackground from "../../Components/BubbleBackground/BubbleBackground";


function SignUp() {
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
            <input type="submit" value="Sign Up" className="CTA" />
          </form>
          <p>
            Already have an account? <a href="">login</a>
          </p>
        </section>
      </main>
    </>
  );
}

export default SignUp;
