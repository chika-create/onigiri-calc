import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../context/SettingUseContext";
import { CalcFormInput, alignmentNumData } from "../../types/types";
import useCalcReducer from "../../helper/useCalcReducer";

import CastleKinds from "../parts/CastleKinds";
import CalcTime from "../parts/CalcTime";
import CalcButton from "../parts/CalcButton";
import CountOutput from "../templates/CountOutput";

export default function ServerCastle({ alignmentNum }: alignmentNumData) {
  const { state, dispatch } = useCalcReducer();

  // 計算機能用
  const { register, getValues } = useForm<CalcFormInput>();

  return (
    <Box maxWidth="sm" sx={{ mb: 1.5 }}>
      <CalcTime register={register} />
      <CastleKinds
        selectedToggleButton={state.selectCastleKind}
        toggleChange={(value) =>
          dispatch({ type: "SET_CASTLE_KIND", payload: value })
        }
      />
      <CalcButton
        getValues={getValues}
        setStackNumberFunction={(requireStackNum) =>
          dispatch({ type: "SET_STACK_NUMBER", payload: requireStackNum })
        }
      />
      {/* <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="今から終了まで（まだ使えません）"
              />
              </Box> */}
      <stackNumberContext.Provider value={state.stackNumber}>
        <selectCastleKindContext.Provider value={state.selectCastleKind}>
          <alignmentNumbersContext.Provider value={alignmentNum}>
            <CountOutput />
          </alignmentNumbersContext.Provider>
        </selectCastleKindContext.Provider>
      </stackNumberContext.Provider>
    </Box>
  );
}
