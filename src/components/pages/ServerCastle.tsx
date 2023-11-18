import { useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../context/SettingUseContext";
import { CalcFormInput } from "../../types/types";

import CastleKinds from "../parts/CastleKinds";
import CalcTime from "../parts/CalcTime";
import CalcButton from "../parts/CalcButton";
import CountOutput from "../templates/CountOutput";

export default function ServerCastle({ alignmentNum }: any) {
  const [selectCastleKind, setSelectCastleKind] = useState("red");
  // 計算機能用
  const { register, getValues } = useForm<CalcFormInput>();
  const [stackNumber, setStackNumber] = useState(0);

  const [selectedToggleButton, setSelectedToggleButton] = useState<
    string | null
  >("left");

  const toggleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setSelectedToggleButton(newAlignment);
    console.log("CastleKinds_newAlignment: ", newAlignment);
    setSelectCastleKind(newAlignment);
  };

  return (
    <Box maxWidth="sm" sx={{ mb: 1.5 }}>
      <CalcTime register={register} />
      <CastleKinds
        selectedToggleButton={selectedToggleButton}
        toggleChange={toggleChange}
      />
      <CalcButton getValues={getValues} setStackNumber={setStackNumber} />
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
