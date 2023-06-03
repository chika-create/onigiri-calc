export default function InterfaceDefinition() {
  // フォームの型
  interface CalcFormInput {
    minNum: number;
    secNum: number;
    deckNum: number;
  }

  interface CastleData {
    name: string;
    num: number;
  }

  interface DeckData {
    num: number;
  }

  interface LocalDate {
    castleNum: CastleData[];
    minDeckNum: DeckData;
  }

  const KEY = "settingDate";
}
