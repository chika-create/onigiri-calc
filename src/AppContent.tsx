import "./App.css";
import React from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";

import FooterNav from "./components/templates/FooteNav";

import { TabPanelProps } from "./types";
import {
  numNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "./SettingUseContext";
import { CalcFunc } from "./CalcFunc";

import ServerCastel from "./components/pages/ServerCastel";
import UniversalCastel from "./components/pages/UniversalCastel";
import OnigiriTable from "./components/pages/OnigiriTable";
import InitialSetting from "./components/templates/InitialSetting";
import CastelKinds from "./components/parts/CastelKinds";
import CalcTime from "./components/parts/CalcTime";
import CountOutput from "./components/templates/CountOutput";
import TabBox from "./components/views/TabBox";

import usePageTracking from "./useTracking";

function TabPanel(props: TabPanelProps) {
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

function App() {
  return <FooterNav />;
}

export function AppContent() {
  // タブ管理
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  const {
    alignmentNum,
    castleChange,
    updateSelectCastleKind,
    selectCastleKind,
    numNumber,
    register,
  } = CalcFunc();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabBox tabValue={tabValue} tabChange={tabChange} />
        <InitialSetting castleChange={castleChange} register={register} />

        <TabPanel value={tabValue} index={0}>
          <ServerCastel />

          <CalcTime register={register} />
          <CastelKinds onClick={updateSelectCastleKind} />
          {/* <Box>
            <FormControlLabel
              control={<Checkbox />}
              label="今から終了まで（まだ使えません）"
            />
          </Box> */}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <UniversalCastel />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <OnigiriTable />
        </TabPanel>
        <numNumberContext.Provider value={numNumber}>
          <selectCastleKindContext.Provider value={selectCastleKind}>
            <alignmentNumbersContext.Provider value={alignmentNum}>
              <CountOutput numNumber={numNumber} />
            </alignmentNumbersContext.Provider>
          </selectCastleKindContext.Provider>
        </numNumberContext.Provider>
      </Box>
    </>
  );
}

export default App;
