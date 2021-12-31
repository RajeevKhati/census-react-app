import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonRequested } from "../../redux/actions/censusActions";

function NationalPopulationRegister(props) {
  const initialValues = {
    fullName: "",
    censusHouseNumber: "",
    relationToHead: "",
    gender: "",
    dob: "",
    marritalStatus: "",
    ageAtMarriage: "",
    occupationStatus: "",
    natureOfOccupationIndustry: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(addPersonRequested(formValues));
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
    if (!formValues.fullName) {
      errors.fullName = "fullName is required";
    }

    if (!formValues.censusHouseNumber) {
      errors.censusHouseNumber = "censusHouseNumber is required";
    }

    if (!formValues.relationToHead) {
      errors.relationToHead = "relationToHead is required";
    }

    if (!formValues.gender) {
      errors.gender = "Head of house is required";
    }

    if (!formValues.dob) {
      errors.dob = "Ownership status is required";
    }

    if (!formValues.marritalStatus) {
      errors.marritalStatus = "marritalStatus is required";
    }

    if (!formValues.ageAtMarriage) {
      errors.ageAtMarriage = "ageAtMarriage is required";
    }

    if (!formValues.occupationStatus) {
      errors.occupationStatus = "occupationStatus is required";
    }

    if (!formValues.natureOfOccupationIndustry) {
      errors.natureOfOccupationIndustry =
        "natureOfOccupationIndustry is required";
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
      <h2 className="ui header">National Population Register</h2>
      <form onSubmit={handleSubmit} className="ui form error" noValidate>
        <div className={formErrors.fullName ? "field error" : "field"}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter FullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("fullName")}

        <div className={formErrors.censusHouseNumber ? "field error" : "field"}>
          <label>Census House Number</label>
          <input
            type="number"
            name="censusHouseNumber"
            placeholder="Enter valid census house number"
            value={formValues.censusHouseNumber}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("censusHouseNumber")}

        <div className={formErrors.relationToHead ? "field error" : "field"}>
          <label>Relationship To Head</label>
          <select
            value={formValues.relationToHead}
            onChange={handleChange}
            className="ui fluid dropdown"
            name="relationToHead"
            id=""
          >
            <option hidden={true} value="">
              Select Relationship to head
            </option>
            <option value="self">Self</option>
            <option value="spouse">Spouse</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="sibling">Sibling</option>
            <option value="grandson">Grandson</option>
            <option value="granddaughter">Granddaughter</option>
          </select>
        </div>
        {renderErrorMessage("relationToHead")}

        <div className={formErrors.gender ? "field error" : "field"}>
          <label>Gender</label>
          <select
            value={formValues.gender}
            onChange={handleChange}
            className="ui fluid dropdown"
            name="gender"
          >
            <option hidden={true} value="">
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {renderErrorMessage("gender")}

        <div className={formErrors.dob ? "field error" : "field"}>
          <label>Date of birth</label>
          <input
            type="Date"
            name="dob"
            placeholder="Enter Date Of Birth"
            value={formValues.dob}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("dob")}

        <div className={formErrors.marritalStatus ? "field error" : "field"}>
          <label>Marrital Status</label>
          <select
            value={formValues.marritalStatus}
            onChange={handleChange}
            className="ui fluid dropdown"
            name="marritalStatus"
          >
            <option hidden={true} value="">
              Select Marrital status
            </option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
          </select>
        </div>
        {renderErrorMessage("marritalStatus")}

        <div className={formErrors.ageAtMarriage ? "field error" : "field"}>
          <label>Age At Marriage</label>
          <input
            type="number"
            name="ageAtMarriage"
            placeholder="Enter Age At Marriage"
            value={formValues.ageAtMarriage}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("ageAtMarriage")}

        <div className={formErrors.occupationStatus ? "field error" : "field"}>
          <label>Occupation Status</label>
          <select
            value={formValues.occupationStatus}
            onChange={handleChange}
            className="ui fluid dropdown"
            name="occupationStatus"
          >
            <option hidden={true} value="">
              Select Occupation Status
            </option>
            <option value="employed">Employed</option>
            <option value="selfEmployed">Self Employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        {renderErrorMessage("occupationStatus")}

        <div
          className={
            formErrors.natureOfOccupationIndustry ? "field error" : "field"
          }
        >
          <label>Nature Of Occupation Industry</label>
          <input
            type="text"
            name="natureOfOccupationIndustry"
            placeholder="Enter Nature Of Occupation Industry"
            value={formValues.natureOfOccupationIndustry}
            onChange={handleChange}
          />
        </div>
        {renderErrorMessage("natureOfOccupationIndustry")}

        <button className="ui primary button" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default NationalPopulationRegister;
