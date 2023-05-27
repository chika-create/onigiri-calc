import "./App.css";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Tooltip,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ServerCastel from "./components/views/ServerCastel";
import UniversalCastel from "./components/views/UniversalCastel";
import OnigiriTable from "./components/views/OnigiriTable";
import CastelKinds from "./components/templates/CastelKinds";
import CalcTime from "./components/templates/CalcTime";
import AlignmentNum from "./components/templates/setting/AlignmentNum";
import DeckNum from "./components/templates/setting/DeckNum";
import FullStack from "./components/templates/FullStack";
import HarfStack from "./components/templates/HarfStack";
import FullOnigiri from "./components/templates/FullOnigiri";
// import TabBox from "./components/templates/TabBox";

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

function tabMenu(index: number): object {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

// フォームの型
interface CalcFormInput {
  minNum: number;
  secNum: number;
  deckNum: number;
}

// クリップボードにコピー
async function copyToClipboard(num: any) {
  try {
    await navigator.clipboard.writeText(num);
  } catch (error) {
    console.log(error || "コピーに失敗しました");
  }
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
const retrievedData = getValue();
// console.log(retrievedData?.castleNum[0].name); // "red"
// console.log(retrievedData?.minDeckNum.num); // 38

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
  // export default function App(): object {
  // タブ管理
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };
  // const tabChange = (newValue: number): number => {
  //   setTabValue(newValue);
  // };
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // デッキ数計算用
  const inputRefDeck = useRef(null);

  // 計算機能用
  // const [inputNumError, setInputNumError] = useState(false);
  // const [inputSecError, setInputSecError] = useState(false);
  const [numNumer, setNumNumer] = useState(0);

  const {
    register,
    // handleSubmit,
    getValues,
    // formState: { errors },
  } = useForm<CalcFormInput>();

  // 城種別ごとのデッキ数の取得
  const castleChangeRed = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ): void => {
    setAlignmentRed(newAlignment);
  };

  const castleChangeBlue = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ): void => {
    setAlignmentBlue(newAlignment);
  };

  const castleChangeGold = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ): void => {
    setAlignmentGold(newAlignment);
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
    // newToggleAlignment: string | null,
    newCastelAlignment: string
  ): void => {
    // setToggleStr(newToggleAlignment);
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

  // クリップボードにコピー
  const anyText = "copy hoge";
  const [openTip, setOpenTip] = useState<boolean>(false);

  // const handleCloseTip = (): void => {
  //   setOpenTip(false);
  // };

  const handleClickButton = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumer);
  };

  const handleClickButton2 = (): void => {
    setOpenTip(true);
    copyToClipboard(Math.ceil(numNumer / 2));
  };

  const handleClickButton3 = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumer * alignmentNum);
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
  console.log(settingDate);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={tabChange}
          aria-label="basic tabs example"
        >
          <Tab label="傾国" {...tabMenu(0)} />
          <Tab label="群雄・天下" {...tabMenu(1)} />
          <Tab label="おにぎり表" {...tabMenu(2)} />
        </Tabs>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>初期設定</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlignmentNum
            alignmentRed={alignmentRed}
            alignmentBlue={alignmentBlue}
            alignmentGold={alignmentGold}
            castleChangeRed={castleChangeRed}
            castleChangeBlue={castleChangeBlue}
            castleChangeGold={castleChangeGold}
          />

          <DeckNum register={register} inputRefDeck={inputRefDeck} />
        </AccordionDetails>
      </Accordion>

      <TabPanel value={tabValue} index={0}>
        <ServerCastel />

        {/* handleSubmit はフォームの入力を確かめた上引数に渡した関数（onSubmit）を呼び出す */}
        <CalcTime register={register} />
        <CastelKinds
          onChange={toggleTest}
          onClick={castleKinds}
          toggleStr={toggleStr}
        />
        {/* {errors.numMin && <span>This field is required 1</span>}
        {errors.numSec && <span>This field is required 2</span>} */}
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

      <Box
        sx={{
          p: 3,
        }}
      >
        <FullStack numNumer={numNumer} handleClickButton={handleClickButton} />
        <HarfStack
          numNumer={numNumer}
          handleClickButton2={handleClickButton2}
        />
        <FullOnigiri
          numNumer={numNumer}
          alignmentNum={alignmentNum}
          handleClickButton3={handleClickButton3}
        />
      </Box>
    </Box>
  );
}

export default App;
