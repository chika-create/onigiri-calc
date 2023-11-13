import { SyntheticEvent } from "react";

type AlignmentNum = number;
type CastleColorEn = string;

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

export interface DeckData {
  num: number;
}

export interface LocalDate {
  castleNum: CastleData[];
  minDeckNum: DeckData;
}

interface castleChange {
  alignmentNum: AlignmentNum;
  castleColorEn: CastleColorEn;
}

export interface AlignmentNumProps {
  castleColorJa: string;
  castleColorEn: string;
  setAlignmentNum: any;
  castleChange: castleChange;
}

export type TabBoxProps = {
  tabToChange: (event: SyntheticEvent, newValue: string) => void;
};
