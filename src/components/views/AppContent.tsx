import { useState, SyntheticEvent } from "react";
import {
  Box,
  Tab,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";

import { TabPanelProps } from "../../types";
import {
  numNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../SettingUseContext";
import { CalcFunc } from "../../CalcFunc";

import ServerCastle from "../pages/ServerCastle";
import UniversalCastle from "../pages/UniversalCastle";
import OnigiriTable from "../pages/OnigiriTable";
import InitialSetting from "../templates/InitialSetting";
import CastleKinds from "../parts/CastleKinds";
import CalcTime from "../parts/CalcTime";
import CalcButton from "../parts/CalcButton";
import CountOutput from "../templates/CountOutput";
import TabBox from "./TabBox";

function AppContent() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const {
    alignmentNum,
    castleChange,
    updateSelectCastleKind,
    selectCastleKind,
    numNumber,
    register,
    calculator,
  } = CalcFunc();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="城戦" value="1" />
              <Tab label="test" value="2" />
              <Tab label="おにぎり表" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1" sx={{ p: 0 }}>
            <InitialSetting castleChange={castleChange} register={register} />
            <ServerCastle />

            <CalcTime register={register} />
            <CastleKinds onClick={updateSelectCastleKind} />
            <CalcButton calculator={calculator} />
            {/* <Box>
            <FormControlLabel
              control={<Checkbox />}
              label="今から終了まで（まだ使えません）"
            />
            </Box> */}
            <numNumberContext.Provider value={numNumber}>
              <selectCastleKindContext.Provider value={selectCastleKind}>
                <alignmentNumbersContext.Provider value={alignmentNum}>
                  <CountOutput numNumber={numNumber} />
                </alignmentNumbersContext.Provider>
              </selectCastleKindContext.Provider>
            </numNumberContext.Provider>
          </TabPanel>
          <TabPanel value="2">
            <UniversalCastle />
          </TabPanel>
          <TabPanel value="3">
            <OnigiriTable />
          </TabPanel>
        </TabContext>

        <TabBox />
      </Box>
    </>
  );
}

export default AppContent;
