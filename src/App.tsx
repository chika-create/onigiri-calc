import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";
import ServerCastel from "./components/views/ServerCastel";
import UniversalCastel from "./components/views/UniversalCastel";
import OnigiriTable from "./components/views/OnigiriTable";
import InitialAccordion from "./components/templates/initialSetting/InitialAccordion";
import CastelKinds from "./components/templates/CastelKinds";
import CalcTime from "./components/templates/CalcTime";
import CountOutput from "./components/templates/countOutput/CountOutput";
import TabBox from "./components/templates/TabBox";

// タブ切り替え管理
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): any {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

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

function setValue(data: LocalDate): void {
  localStorage.setItem(KEY, JSON.stringify(data));
}

function getValue(): LocalDate | null {
  const data = localStorage.getItem(KEY);
  if (data) {
    return JSON.parse(data) as LocalDate;
  }
  return null;
}

// 例：値を取得する
// const retrievedData = getValue();

type ToggleSelectedType = {
  [key: number]: boolean;
};

export function useToggleSelected() {
  const [alignmentRedNum, setAlignmentRedNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
  });

  const [alignmentBlueNum, setAlignmentBlueNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
  });

  const [alignmentGoldNum, setAlignmentGoldNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
  });

  return {
    alignmentRedNum,
    setAlignmentRedNum,
    alignmentBlueNum,
    setAlignmentBlueNum,
    alignmentGoldNum,
    setAlignmentGoldNum,
  };
}

// メモ：alignmentRedNumなどトグルボタンのデフォルト値を使用するには、コンポーネント内で呼び出す必要があるため、コンポーネント分けをした際に実装する
function App() {
  // タブ管理
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  // 計算機能用
  const [numNumer, setNumNumer] = useState(0);

  const { register, getValues } = useForm<CalcFormInput>();

  // 城種別ごとのデッキ数の取得
  const castleChange = (value: number, string: string): void => {
    const newData = {
      value: value,
      string: string,
    };
    if (newData.string === "blue") {
      setAlignmentBlue(newData.value);
    } else if (newData.string === "gold") {
      setAlignmentGold(newData.value);
    } else {
      setAlignmentRed(newData.value);
    }
  };

  const [toggleStr, setToggleStr] = React.useState<string | null>("left");

  const toggleTest = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setToggleStr(newAlignment);
  };

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState(0);
  const [alignmentRed, setAlignmentRed] = useState(0);
  const [alignmentBlue, setAlignmentBlue] = useState(0);
  const [alignmentGold, setAlignmentGold] = useState(0);

  // どの城種別で計算するか
  const castleKinds = (
    event: React.MouseEvent<HTMLElement>,
    newCastelAlignment: string
  ): void => {
    castleKindsSwitch(newCastelAlignment);
    calculator();
  };

  // どの城種別を選択したかによって、デッキ数を取得
  const castleKindsSwitch = (item: string): void => {
    switch (item) {
      case "blue":
        setAlignmentNum(alignmentBlue);
        break;
      case "gold":
        setAlignmentNum(alignmentGold);
        break;
      default:
        setAlignmentNum(alignmentRed);
    }
  };

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    let secNum = Number(getValues(["secNum"]));
    let deckNum = Number(getValues(["deckNum"]));
    let totalNum = 0;

    secNum = secNum / 60;
    totalNum = minNum + secNum;
    deckNum = 60 / deckNum;
    setNumNumer(Math.ceil((totalNum * 60) / deckNum));
  };

  // 例：値を設定する
  const settingDate: LocalDate = {
    castleNum: [
      { name: "red", num: alignmentRed },
      { name: "blue", num: alignmentBlue },
      { name: "gold", num: alignmentGold },
    ],
    minDeckNum: { num: 38 },
  };
  setValue(settingDate);
  console.log("hoge: " + settingDate);

  return (
    <Box sx={{ width: "100%" }}>
      <TabBox tabValue={tabValue} tabChange={tabChange} />
      <InitialAccordion
        alignmentRed={alignmentRed}
        alignmentBlue={alignmentBlue}
        alignmentGold={alignmentGold}
        castleChange={castleChange}
        register={register}
      />

      <TabPanel value={tabValue} index={0}>
        <ServerCastel />

        <CalcTime register={register} />
        <CastelKinds
          onChange={toggleTest}
          onClick={castleKinds}
          toggleStr={toggleStr}
        />
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="今から終了まで（まだ使えません）"
          />
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <UniversalCastel />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <OnigiriTable />
      </TabPanel>
      <CountOutput numNumer={numNumer} alignmentNum={alignmentNum} />
    </Box>
  );
}

export default App;
