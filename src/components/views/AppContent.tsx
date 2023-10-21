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

function TabPanel2(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function AppContent() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // タブ管理
  const [tabValue, setTabValue] = useState(0);
  const tabChange = (event: SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
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
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>

        <TabBox tabValue={tabValue} tabChange={tabChange} />

        <TabPanel value={tabValue} index={0}>
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
        <TabPanel value={tabValue} index={1}>
          <UniversalCastle />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <OnigiriTable />
        </TabPanel>
      </Box>
    </>
  );
}

export default AppContent;
