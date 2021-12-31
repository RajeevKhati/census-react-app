import { useState } from "react";
import TabContext from "./TabContext";

const TabState = (props) => {
  const [selectedTab, setThisSelectedTab] = useState("");

  const setSelectedTab = (selectedTabValue) => {
    setThisSelectedTab(selectedTabValue);
  };

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {props.children}
    </TabContext.Provider>
  );
};

export default TabState;
