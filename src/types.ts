// タブ切り替え管理
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
