import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  APPROVED,
  DECLINE,
  PENDING_REQUESTS,
} from "../../context/tabs/stringConstants";
import TabContext from "../../context/tabs/TabContext";
import { fetchVolunteersRequested } from "../../redux/actions/volunteerActions";
import LoadingSpinner from "../shared/LoadingSpinner";
import VolunteerCard from "./VolunteerCard";

function Admin() {
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const { volunteers, error, loading } = useSelector(
    (state) => state.volunteers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVolunteersRequested());
    setSelectedTab(PENDING_REQUESTS);
  }, []);

  const renderVolunteers = (volunteerRequest) => {
    return volunteers
      .filter((volunteer) => volunteer.request === volunteerRequest)
      .map((volunteer) => {
        return <VolunteerCard key={volunteer.id} volunteer={volunteer} />;
      });
  };

  const renderAdmin = () => {
    switch (selectedTab) {
      case PENDING_REQUESTS:
        return volunteers && renderVolunteers("pending");
      case DECLINE:
        return volunteers && renderVolunteers("declined");
      case APPROVED:
        return volunteers && renderVolunteers("approved");
      default:
        return null;
    }
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="ui centered cards">{renderAdmin()}</div>
  );
}

export default Admin;
