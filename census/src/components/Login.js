import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginRequested } from "../redux/actions/userActions";
import LoadingSpinner from "./shared/LoadingSpinner";

function Login(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser.isLoggedIn && currentUser.userRole === "admin") {
      navigate("/admin");
    } else if (currentUser.isLoggedIn && currentUser.userRole === "volunteer") {
      navigate("/volunteer");
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(userLoginRequested(formValues));
    }
  }, [formErrors]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
  };

  const validate = (formValues) => {
    const errors = {};
    if (!formValues.email) {
      errors.email = "Email is required";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const renderErrorMessage = (fieldName) => {
    return formErrors[fieldName] ? (
      <div className="ui error message">
        <p>{formErrors[fieldName]}</p>
      </div>
    ) : (
      ""
    );
  };

  return currentUser.loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="ui two column centered grid">
        <div className="column">
          <h1 className="ui header">Login</h1>
          <form onSubmit={handleSubmit} className="ui form error" noValidate>
            <div className={formErrors.email ? "field error" : "field"}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("email")}

            <div className={formErrors.password ? "field error" : "field"}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("password")}

            <button className="ui primary button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
