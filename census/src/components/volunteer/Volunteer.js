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
      return (
        <div class="ui raised blue segment">
          <div className="ui large header">Your request is Pending...</div>
        </div>
      );
    } else if (currentVolunteer.request === "declined") {
      return (
        <div class="ui raised red segment">
          <div className="ui large header">Your request is Declined.</div>
        </div>
      );
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
