import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHouseListingRequested } from "../../redux/actions/censusActions";

function HouseListing(props) {
  const initialValues = {
    building: "",
    address: "",
    state: "",
    headFullName: "",
    ownershipStatus: "",
    rooms: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   dispatch(registerVolunteerRequested(formValues));
      dispatch(addHouseListingRequested(formValues));
      console.log(formValues);
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
    if (!formValues.building) {
      errors.building = "Building is required";
    }

    if (!formValues.address) {
      errors.address = "Address is required";
    }

    if (!formValues.state) {
      errors.state = "State is required";
    }

    if (!formValues.headFullName) {
      errors.headFullName = "Head of house is required";
    }

    if (!formValues.ownershipStatus) {
      errors.ownershipStatus = "Ownership status is required";
    }

    if (!formValues.rooms) {
      errors.rooms = "Number of Rooms is required";
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

  return (
    <>
      <h2 className="ui header">House Listing</h2>
      <form onSubmit={handleSubmit} className="ui form error" noValidate>
        <div className={formErrors.building ? "field error" : "field"}>
          <label>Building</label>
          <input
            type="text"
            name="building"
            placeholder="Enter building/apartment number"
            value={formValues.building}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("building")}

        <div className={formErrors.address ? "field error" : "field"}>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Street name, city"
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

        <div className={formErrors.headFullName ? "field error" : "field"}>
          <label>Full Name of Head</label>
          <input
            type="text"
            name="headFullName"
            placeholder="Enter name of head"
            value={formValues.headFullName}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("headFullName")}

        <div className={formErrors.ownershipStatus ? "field error" : "field"}>
          <label>Ownership status</label>
          <select
            value={formValues.ownershipStatus}
            onChange={handleChange}
            className="ui fluid dropdown"
            name="ownershipStatus"
          >
            <option hidden={true} value="">
              Select ownership status
            </option>
            <option value="owner">Owner</option>
            <option value="rented">Rented</option>
          </select>
        </div>
        {renderErrorMessage("ownershipStatus")}

        <div className={formErrors.rooms ? "field error" : "field"}>
          <label>Number of Rooms</label>
          <input
            type="text"
            name="rooms"
            placeholder="Enter Number of rooms"
            value={formValues.rooms}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("rooms")}

        <button className="ui primary button" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default HouseListing;
