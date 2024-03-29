import { useReducer } from "react";

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

export default function useCalcReducer() {
  // Reducerの使用
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
