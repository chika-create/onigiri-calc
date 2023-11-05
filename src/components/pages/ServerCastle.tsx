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
  const { selectCastleKind, setSelectCastleKind } = useUpdateSelectCastleKind();
  // const [selectCastleKind, setSelectCastleKind] = useState("red");
  const { alignmentNum, stackNumber, register, calculator } = CalcFunc();

  return (
    <Box maxWidth="sm" sx={{ mb: 1.5 }}>
      <CalcTime register={register} />
      <CastleKinds
        selectCastleKind={selectCastleKind}
        setSelectCastleKind={setSelectCastleKind}
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
            <CountOutput stackNumber={stackNumber} />
          </alignmentNumbersContext.Provider>
        </selectCastleKindContext.Provider>
      </stackNumberContext.Provider>
    </Box>
  );
}
