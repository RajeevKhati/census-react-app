import React from "react";
import { useDispatch } from "react-redux";
import { editVolunteerRequested } from "../../redux/actions/volunteerActions";

/**
 *
 * @param {volunteerObject} props
 * @returns
 */
function VolunteerCard({ volunteer }) {
  const { id, firstName, lastName, age, imageLink, address, state, request } =
    volunteer;
  const dispatch = useDispatch();

  const handleRequest = (requestType) => {
    dispatch(
      editVolunteerRequested(id, { ...volunteer, request: requestType })
    );
  };

  return (
    <div className="ui raised card">
      <div className="content">
        <img className="right floated mini ui image" src={imageLink} />
        <div className="header">
          {firstName} {lastName}
        </div>
        <div className="meta">{age}</div>
        <div className="description">
          {address}, {state}
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          {(request === "declined" || request === "pending") && (
            <div
              onClick={() => handleRequest("approved")}
              className="ui basic green button"
            >
              Approve
            </div>
          )}
          {(request === "approved" || request === "pending") && (
            <div
              onClick={() => handleRequest("declined")}
              className="ui basic red button"
            >
              Decline
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
