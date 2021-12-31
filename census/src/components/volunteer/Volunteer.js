import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  HOUSE_LISTING,
  NATIONAL_POPULATION_REGISTER,
} from "../../context/tabs/stringConstants";
import TabContext from "../../context/tabs/TabContext";
import HouseListing from "./HouseListing";
import NationalPopulationRegister from "./NationalPopulationRegister";

function Volunteer() {
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const currentUser = useSelector((state) => state.user);
  const currentVolunteer = currentUser.user;

  useEffect(() => {
    setSelectedTab(HOUSE_LISTING);
  }, []);

  const renderMainVolunteerComponent = () => {
    if (currentVolunteer.request === "pending") {
      return <h3>Your request is Pending...</h3>;
    } else if (currentVolunteer.request === "declined") {
      return <h3>Your request is Declined.</h3>;
    } else {
      switch (selectedTab) {
        case HOUSE_LISTING:
          return <HouseListing />;
        case NATIONAL_POPULATION_REGISTER:
          return <NationalPopulationRegister />;
        default:
          return null;
      }
    }
  };

  return (
    <div className="ui two column centered grid">
      <div className="column">{renderMainVolunteerComponent()}</div>
    </div>
  );
}

export default Volunteer;
