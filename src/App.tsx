import "./App.css";
import React from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Term from "./components/pages/Term";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

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

function TabPanel(props: TabPanelProps): any {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/term" element={<Term />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <nav>
        <Link to="/">ホーム</Link> / <Link to="/term">利用規約</Link> /
        <Link to="/privacypolicy">プライバシーポリシー</Link>
      </nav>
    </BrowserRouter>
  );
}

function AppContent() {
  // タブ管理
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  const {
    alignmentNum,
    castleChange,
    castleKinds,
    selectCastleKind,
    numNumber,
    register,
  } = CalcFunc();
  console.log("App selectCastleKind: ", selectCastleKind);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabBox tabValue={tabValue} tabChange={tabChange} />

        <TabPanel value={tabValue} index={0}>
          <InitialSetting castleChange={castleChange} register={register} />

          <ServerCastel />

          <CalcTime register={register} />
          <CastelKinds onClick={castleKinds} />
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
          <UniversalCastel />
        </TabPanel>
        {/* <TabPanel value={tabValue} index={2}>
          <OnigiriTable />
        </TabPanel> */}
      </Box>
    </>
  );
}

export default App;
