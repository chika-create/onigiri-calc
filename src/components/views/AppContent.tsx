import { useState, SyntheticEvent } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

import { TabContext, TabPanel } from "@mui/lab";
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
  const [tabSelectNo, setTabSelectNo] = useState("1");

  const tabToChange = (event: SyntheticEvent, newValue: string) => {
    setTabSelectNo(newValue);
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
        <TabContext value={tabSelectNo}>
          <TabBox tabToChange={tabToChange} />

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
      </Box>
    </>
  );
}

export default AppContent;
