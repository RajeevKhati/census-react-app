import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerVolunteerRequested } from "../redux/actions/volunteerActions";
import LoadingSpinner from "./shared/LoadingSpinner";

function Register(props) {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    imageLink: "",
    aadhar: "",
    address: "",
    state: "",
    age: "",
  };

  const { loading } = useSelector((state) => state.volunteers);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(registerVolunteerRequested(formValues));
    }
  }, [formErrors]);

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser.isLoggedIn) {
      navigate("/volunteer");
    }
  }, [currentUser]);

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
    const {
      email,
      password,
      firstName,
      lastName,
      imageLink,
      aadhar,
      address,
      state,
      age,
    } = formValues;
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegexp.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else {
      const atleastOneSpecialChar = new RegExp(/(?=.*[!@#$%^&*])/);
      const atleastOneDigit = new RegExp(/(?=.*\d)/);
      const atleastOneAlpha = new RegExp(/(?=.*[a-zA-Z])/);
      if (password.length < 8) {
        errors.password = "Password minimum length should be 8";
      } else if (!atleastOneDigit.test(password)) {
        console.log(atleastOneDigit.test(password), password);
        errors.password = "Password must contain atleast one number";
      } else if (!atleastOneAlpha.test(password)) {
        errors.password = "Password must contain atleast one alphabet letter";
      } else if (!atleastOneSpecialChar.test(password)) {
        errors.password = "Password must contain atleast one special char";
      }
    }

    if (!firstName) {
      errors.firstName = "First Name is required";
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!imageLink) {
      errors.imageLink = "Image URL is required";
    }

    if (!aadhar) {
      errors.aadhar = "Aadhar is required";
    } else if (aadhar.length < 12) {
      errors.aadhar = "Valid aadhar contains 8 digits";
    }

    if (!address) {
      errors.address = "Address is required";
    }

    if (!state) {
      errors.state = "State is required";
    }

    if (!age) {
      errors.age = "Age is required";
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

  return loading || currentUser.loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="ui two column centered grid">
        <div className="column">
          <h1 className="ui header">Register</h1>
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

            <div className={formErrors.firstName ? "field error" : "field"}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("firstName")}

            <div className={formErrors.lastName ? "field error" : "field"}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("lastName")}

            <div className={formErrors.imageLink ? "field error" : "field"}>
              <label>Enter Image URL</label>
              <input
                type="url"
                name="imageLink"
                placeholder="Image URL"
                value={formValues.imageLink}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("imageLink")}

            <div className={formErrors.aadhar ? "field error" : "field"}>
              <label>Aadhar Number</label>
              <input
                type="number"
                name="aadhar"
                placeholder="Enter Aadhar Number"
                value={formValues.aadhar}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("aadhar")}

            <div className={formErrors.address ? "field error" : "field"}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formValues.address}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("address")}

            <div className={formErrors.state ? "field error" : "field"}>
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={formValues.state}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("state")}

            <div className={formErrors.age ? "field error" : "field"}>
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={formValues.age}
                onChange={handleChange}
              />
            </div>
            {renderErrorMessage("age")}

            <button className="ui primary button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
