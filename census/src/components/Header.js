import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  APPROVED,
  DECLINE,
  HOUSE_LISTING,
  NATIONAL_POPULATION_REGISTER,
  PENDING_REQUESTS,
} from "../context/tabs/stringConstants";
import TabContext from "../context/tabs/TabContext";
import { userLogout } from "../redux/actions/userActions";

function Header() {
  const initialState = {
    [PENDING_REQUESTS]: "",
    [APPROVED]: "",
    [DECLINE]: "",
    [HOUSE_LISTING]: "",
    [NATIONAL_POPULATION_REGISTER]: "",
  };

  const [active, setActive] = useState(initialState);

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  const { setSelectedTab } = useContext(TabContext);

  const renderAdminTabs = () => {
    return (
      <>
        <Link
          to="/admin"
          onClick={() => {
            setSelectedTab(PENDING_REQUESTS);
            setActive({ ...initialState, [PENDING_REQUESTS]: "active" });
          }}
          className={`item ${active[PENDING_REQUESTS]}`}
        >
          Pending Requests
        </Link>
        <Link
          to="/admin"
          onClick={() => {
            setSelectedTab(DECLINE);
            setActive({ ...initialState, [DECLINE]: "active" });
          }}
          className={`item ${active[DECLINE]}`}
        >
          Declined
        </Link>
        <Link
          to="/admin"
          onClick={() => {
            setSelectedTab(APPROVED);
            setActive({ ...initialState, [APPROVED]: "active" });
          }}
          className={`item ${active[APPROVED]}`}
        >
          Approved
        </Link>
      </>
    );
  };

  const renderVolunteerTabs = () => {
    return (
      <>
        <Link
          to="/volunteer"
          onClick={() => {
            setSelectedTab(HOUSE_LISTING);
            setActive({ ...initialState, [HOUSE_LISTING]: "active" });
          }}
          className={`item ${active[HOUSE_LISTING]}`}
        >
          House Listing
        </Link>
        <Link
          to="/volunteer"
          onClick={() => {
            setSelectedTab(NATIONAL_POPULATION_REGISTER);
            setActive({
              ...initialState,
              [NATIONAL_POPULATION_REGISTER]: "active",
            });
          }}
          className={`item ${active[NATIONAL_POPULATION_REGISTER]}`}
        >
          National Population Register
        </Link>
      </>
    );
  };

  return (
    <div className="ui pointing menu">
      <div className="item">
        <i style={{ padding: 0 }} className="users large icon"></i>Census
      </div>

      {currentUser && currentUser.userRole === "admin" && renderAdminTabs()}
      {currentUser &&
        currentUser.userRole === "volunteer" &&
        currentUser.user.request === "approved" &&
        renderVolunteerTabs()}

      <div className="right menu">
        {!currentUser.isLoggedIn ? (
          <>
            <Link to="/register" className="item">
              Sign Up
            </Link>
            <Link to="/login" className="item">
              Login
            </Link>
          </>
        ) : (
          <div className="item">
            <div onClick={onLogout} className="ui red button">
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
