import { useState, SyntheticEvent } from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";

import { TabPanelProps } from "./types";
import {
  numNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "./SettingUseContext";
import { CalcFunc } from "./CalcFunc";

import ServerCastle from "./components/pages/ServerCastle";
import UniversalCastle from "./components/pages/UniversalCastle";
import OnigiriTable from "./components/pages/OnigiriTable";
import InitialSetting from "./components/templates/InitialSetting";
import CastleKinds from "./components/parts/CastleKinds";
import CalcTime from "./components/parts/CalcTime";
import CountOutput from "./components/templates/CountOutput";
import TabBox from "./components/views/TabBox";

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

function AppContent() {
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
  } = CalcFunc();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabBox tabValue={tabValue} tabChange={tabChange} />
        <InitialSetting castleChange={castleChange} register={register} />

        <TabPanel value={tabValue} index={0}>
          <ServerCastle />

          <CalcTime register={register} />
          <CastleKinds onClick={updateSelectCastleKind} />
          {/* <Box>
            <FormControlLabel
              control={<Checkbox />}
              label="今から終了まで（まだ使えません）"
            />
          </Box> */}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <UniversalCastle />
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

export default AppContent;
