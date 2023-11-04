import { useState } from "react";
import Box from "@mui/material/Box";

import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../context/SettingUseContext";
import { CalcFunc } from "../../CalcFunc";
import useUpdateSelectCastleKind from "../../hooks/useUpdateSelectCastleKind";

import CastleKinds from "../parts/CastleKinds";
import CalcTime from "../parts/CalcTime";
import CalcButton from "../parts/CalcButton";
import CountOutput from "../templates/CountOutput";

export default function ServerCastle() {
  const {
    alignmentNum,
    // updateSelectCastleKind,
    selectCastleKind,
    stackNumber,
    register,
    calculator,
  } = CalcFunc();

  const [selectCastleKind2, setSelectCastleKind2] = useState("gold");

  return (
    <Box maxWidth="sm" sx={{ mb: 1.5 }}>
      <CalcTime register={register} />
      <CastleKinds
        // updateSelectCastleKind={updateSelectCastleKind}
        useUpdateSelectCastleKind={useUpdateSelectCastleKind}
      />
      <CalcButton calculator={calculator} />
      {/* <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="今から終了まで（まだ使えません）"
              />
              </Box> */}
      <stackNumberContext.Provider value={stackNumber}>
        <selectCastleKindContext.Provider value={selectCastleKind}>
          <alignmentNumbersContext.Provider value={alignmentNum}>
            <CountOutput
              stackNumber={stackNumber}
              selectCastleKind2={selectCastleKind2}
            />
          </alignmentNumbersContext.Provider>
        </selectCastleKindContext.Provider>
      </stackNumberContext.Provider>
    </Box>
  );
}
