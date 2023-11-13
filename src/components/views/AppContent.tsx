import { useState, SyntheticEvent } from "react";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

import ServerCastle from "../pages/ServerCastle";
import UniversalCastle from "../pages/UniversalCastle";
import OnigiriTable from "../pages/OnigiriTable";
import InitialSetting from "../templates/InitialSetting";
import TabBox from "./TabBox";

function AppContent() {
  const [tabSelectNo, setTabSelectNo] = useState("1");

  const tabToChange = (event: SyntheticEvent, newValue: string) => {
    setTabSelectNo(newValue);
  };

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState({
    red: 1,
    blue: 2,
    gold: 3,
  });

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabContext value={tabSelectNo}>
          <TabBox tabToChange={tabToChange} />

          <TabPanel value="1" sx={{ p: 0 }}>
            <InitialSetting setAlignmentNum={setAlignmentNum} />
            <Box sx={{ p: 2 }}>
              <ServerCastle alignmentNum={alignmentNum} />
            </Box>
          </TabPanel>

          <TabPanel value="2" sx={{ p: 0 }}>
            <UniversalCastle />
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
