import { SyntheticEvent } from "react";

// export type AlignmentNum = number;
// type CastleColorEn = string;

// フォームの型
export interface CalcFormInput {
  minNum: number;
  secNum: number;
  deckNum: number;
}

export interface CastleData {
  name: string;
  num: number;
}

export interface minDeckData {
  minDeckNum: number;
}

export interface LocalDate {
  castleNum: CastleData[];
  minDeckNum: minDeckData;
}

// interface castleChange {
//   alignmentNum: AlignmentNum;
//   castleColorEn: CastleColorEn;
// }

export interface AlignmentNumProps {
  castleColorJa: string;
  castleColorEn: string;
  setAlignmentNum: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

export type TabBoxProps = {
  tabToChange: (event: SyntheticEvent, newValue: string) => void;
};
