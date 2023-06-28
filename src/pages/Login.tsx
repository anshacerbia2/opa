import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputError from "../components/error/InputError";
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
import { useAuthenticateMutation } from "../redux/apis/auth/authApi";

const Login = () => {
  const auth = useAppSelector((state: RootState) => state.auth);
  const [authenticate, { isLoading, isSuccess, isError, error, data }] =
    useAuthenticateMutation();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errorField, setErrorField] = useState({
    username: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && auth.idToken) {
      navigate("/");
    }
  }, [isSuccess, auth.idToken]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    let errField = { username: false, password: false };
    let errMessage = { username: "", password: "" };
    if (!credentials.username.trim()) {
      errField.username = true;
      errMessage.username = "Username is required!";
    }
    if (!credentials.password.trim()) {
      errField.password = true;
      errMessage.password = "Password is required!";
    }
    setErrorField(errField);
    setErrorMessage(errMessage);
    if (!errField.username && !errField.password) {
      try {
        await authenticate(credentials);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="c-login-container">
        <div className="container-login">
          {/* Image */}
          <div className="left-login">
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <span className="bokeh"></span>
            <div className="caption-login">
              <div className="caption-content">
                <span className="logo-span">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="550 243 124 123"
                    className="logo"
                  >
                    <g
                      data-item-type="text"
                      data-item="Business"
                      id="logo__item--business"
                      className="logo__item"
                    >
                      <g
                        className="logo__item__inner"
                        transform="translate(628 313.5) scale(1 1) rotate(0 0 0)"
                      >
                        <text
                          data-part-id="logo__item--business"
                          dy="0"
                          dominantBaseline="auto"
                          alignmentBaseline="auto"
                          fontFamily="Montserrat"
                          fontSize="32px"
                          fill="#000000"
                          letterSpacing="0"
                          fontWeight="bold"
                          fontStyle="normal"
                          data-font-family="Montserrat"
                          data-font-weight="bold"
                          data-font-style="normal"
                          data-ttf-url="/builder_assets/fontsttf/font-montserrat-bold-normal.ttf"
                        ></text>
                      </g>
                    </g>
                    <g
                      data-item-type="shape"
                      data-item="Shape"
                      data-logo-item=""
                      id="logo__item--shape_1"
                      className="logo__item"
                    >
                      <g
                        className="logo__item__inner"
                        transform="translate(589.4500007629395 273.95000076293945) scale(1 1) rotate(0 0 0)"
                      >
                        <g>
                          <rect
                            x="4.5"
                            y="12.5"
                            fill="#01CCFF"
                            width="77.1"
                            height="77.1"
                            data-part-id="logo__item--shape_1__0"
                          ></rect>
                        </g>
                      </g>
                    </g>
                    <g
                      data-item-type="shape"
                      data-item="Shape"
                      data-logo-item=""
                      id="logo__item--shape_2"
                      className="logo__item"
                      data-item-clone="true"
                    >
                      <g
                        className="logo__item__inner"
                        transform="translate(569.4500007629395 253.95000076293945) scale(1 1) rotate(0 0 0)"
                      >
                        <g>
                          <rect
                            x="4.5"
                            y="12.5"
                            fill="#0095FE"
                            width="77.1"
                            height="77.1"
                            data-part-id="logo__item--shape_2__0"
                          ></rect>
                        </g>
                      </g>
                    </g>
                    <g
                      data-item-type="shape"
                      data-item="Shape"
                      data-logo-item=""
                      id="logo__item--shape_3"
                      className="logo__item"
                      data-item-clone="true"
                    >
                      <g
                        className="logo__item__inner"
                        transform="translate(549.4500007629395 233.95000076293945) scale(1 1) rotate(0 0 0)"
                      >
                        <g>
                          <rect
                            x="4.5"
                            y="12.5"
                            fill="#0050FF"
                            width="77.1"
                            height="77.1"
                            data-part-id="logo__item--shape_3__0"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                online <br />
                payment <br />
                <span>agent.</span>
              </div>
              <div className="caption-desc">
                The simplest way to book your flight. <br /> The easiest way to
                pay.
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="right-login">
            <div className="login-form-wrapper">
              <form onSubmit={handleSubmit}>
                <img src="img/logo_garuda.png" className="logo-agent" />
                <div className="say-hello">
                  Hey, Hello{" "}
                  <span>
                    <img src="img/waving.svg" />
                  </span>
                </div>
                <div className="gray fz12 mb2">
                  Please login to your account.
                </div>
                <div className="error-login mb2" style={{ display: "none" }}>
                  Email and password is incorrect. <br /> Please try again.
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email Address</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={credentials.username}
                    className="c-form-control"
                    onChange={handleChange}
                  />
                  <InputError
                    isError={errorField.username}
                    message={errorMessage.username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={credentials.password}
                    className="c-form-control"
                    onChange={handleChange}
                  />
                  <InputError
                    isError={errorField.password}
                    message={errorMessage.password}
                  />
                </div>
                <div className="inline-space mb1">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="checkbox5" />
                    <label htmlFor="checkbox5" className="semibold">
                      <span className="mr5px">
                        <img src="img/ic_checklist.png" />
                      </span>{" "}
                      Remember me
                    </label>
                  </div>
                  <a href="javascript:void(0)" className="forgot-psw">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="btn btn-default fz16 mb2">
                  Login
                </button>
                {/* <div className="text-center gray fz12 mb1">
                  Dont have an account?
                </div>
                <a href="javascript:void(0)" className="btn btn-default fz16">
                  Register
                </a> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
