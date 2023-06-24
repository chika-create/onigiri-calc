import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";

import { TabPanelProps, CalcFormInput } from "./types";
import ServerCastel from "./components/pages/ServerCastel";
import UniversalCastel from "./components/pages/UniversalCastel";
import OnigiriTable from "./components/pages/OnigiriTable";
import InitialSetting from "./components/templates/InitialSetting";
import CastelKinds from "./components/parts/CastelKinds";
import CalcTime from "./components/parts/CalcTime";
import CountOutput from "./components/templates/CountOutput";
import TabBox from "./components/views/TabBox";

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

// メモ：alignmentRedNumなどトグルボタンのデフォルト値を使用するには、コンポーネント内で呼び出す必要があるため、コンポーネント分けをした際に実装する
function App() {
  // タブ管理
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  // 計算機能用
  const [numNumer, setNumNumer] = useState(0);

  const { register, watch, getValues } = useForm<CalcFormInput>();
  //const deckNum = watch("deckNum");

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

  return (
    <Box sx={{ width: "100%" }}>
      <TabBox tabValue={tabValue} tabChange={tabChange} />
      <InitialSetting castleChange={castleChange} register={register} />

      <TabPanel value={tabValue} index={0}>
        <ServerCastel />

        <CalcTime register={register} />
        <CastelKinds onClick={castleKinds} />
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
