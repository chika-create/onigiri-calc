import { useReducer } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../context/SettingUseContext";
import { CalcFormInput, alignmentNumData } from "../../types/types";

import CastleKinds from "../parts/CastleKinds";
import CalcTime from "../parts/CalcTime";
import CalcButton from "../parts/CalcButton";
import CountOutput from "../templates/CountOutput";

// アクションの型定義
type Action =
  | { type: "SET_STACK_NUMBER"; payload: number }
  | { type: "SET_CASTLE_KIND"; payload: string };

// 状態の型定義
type State = {
  stackNumber: number;
  selectCastleKind: string;
};

// Reducer関数
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_STACK_NUMBER":
      return {
        ...state,
        stackNumber: action.payload,
      };
    case "SET_CASTLE_KIND":
      return {
        ...state,
        selectCastleKind: action.payload,
      };
    default:
      return state;
  }
};

// 状態の初期値
const initialState: State = {
  stackNumber: 0,
  selectCastleKind: "red",
};

export default function ServerCastle({ alignmentNum }: alignmentNumData) {
  // 選択した城種別（赤など）
  // const [selectCastleKind, setSelectCastleKind] = useState("red");

  // Reducerの使用
  const [state, dispatch] = useReducer(reducer, initialState);

  // 城種別を変更した場合、どのトグルボタンがアクティブかを管理する State
  // const [selectedToggleButton, setSelectedToggleButton] = useState<
  //   string | null
  // >("left");

  // const toggleChange = (value: string) => {
  //   setSelectedToggleButton(value);
  //   setSelectCastleKind(value);
  // };

  // 計算機能用
  const { register, getValues } = useForm<CalcFormInput>();
  // const [stackNumber, setStackNumber] = useState(0);
  // const setStackNumberFunction = (requireStackNum: number) =>
  //   setStackNumber(requireStackNum);

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
