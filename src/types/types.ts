import { SyntheticEvent, ReactNode } from "react";
import { TypographyProps } from "@mui/material";

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

export interface alignmentListData {
  red: number;
  blue: number;
  gold: number;
}

export interface alignmentNumData {
  alignmentNum: alignmentListData;
}

export interface AlignmentNumProps {
  castleColorJa: string;
  castleColorEn: string;
  setAlignmentNum: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

export interface copyToClipboardData {
  copyToClipboard: (num: number | string) => Promise<void>;
}

export interface TextData extends TypographyProps {
  children: ReactNode;
}

// GA送信用
export interface CustomEventData {
  category: string;
  action: string;
}

export type TabBoxProps = {
  tabToChange: (event: SyntheticEvent, newValue: string) => void;
};
