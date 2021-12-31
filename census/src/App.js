import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./components/admin/Admin";
import RequireAuth from "./components/auth/RequireAuth";
import RequireAuthAdmin from "./components/auth/RequireAuthAdmin";
import RequireAuthVolunteer from "./components/auth/RequireAuthVolunteer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Volunteer from "./components/volunteer/Volunteer";
import TabState from "./context/tabs/TabState";

function App() {
  return (
    <>
      <TabState>
        <Router>
          <Header />
          <div className="ui container">
            <Routes>
              <Route path="/" element={<Navigate replace to="/volunteer" />} />
              <Route
                path="/admin"
                element={
                  <RequireAuth>
                    <RequireAuthAdmin>
                      <Admin />
                    </RequireAuthAdmin>
                  </RequireAuth>
                }
              />
              <Route
                path="/volunteer"
                element={
                  <RequireAuth>
                    <RequireAuthVolunteer>
                      <Volunteer />
                    </RequireAuthVolunteer>
                  </RequireAuth>
                }
              />
              <Route path="/register" element={<Register />} end />
              <Route path="/login" element={<Login />} />
            </Routes>
            <ToastContainer />
          </div>
        </Router>
      </TabState>
    </>
  );
}

export default App;
