import { useState, SyntheticEvent } from "react";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

import { CalcFunc } from "../../CalcFunc";

import ServerCastle from "../pages/ServerCastle";
import OnigiriTable from "../pages/OnigiriTable";
import InitialSetting from "../templates/InitialSetting";
import TabBox from "./TabBox";
import Howto from "../pages/Howto";

function AppContent() {
  const [tabSelectNo, setTabSelectNo] = useState("1");

  const tabToChange = (event: SyntheticEvent, newValue: string) => {
    setTabSelectNo(newValue);
  };

  const { castleChange } = CalcFunc();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabContext value={tabSelectNo}>
          <TabBox tabToChange={tabToChange} />

          <TabPanel value="1" sx={{ p: 0 }}>
            <InitialSetting castleChange={castleChange} />
            <Box sx={{ p: 2 }}>
              <ServerCastle />
            </Box>
          </TabPanel>

          <TabPanel value="2" sx={{ p: 0 }}>
            <Howto />
          </TabPanel>

          <TabPanel value="3" sx={{ p: 0 }}>
            <OnigiriTable />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default AppContent;
