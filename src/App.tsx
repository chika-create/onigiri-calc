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
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Tooltip,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState(0);
  const [alignmentRed, setAlignmentRed] = useState(0);
  const [alignmentBlue, setAlignmentBlue] = useState(0);
  const [alignmentGold, setAlignmentGold] = useState(0);

  // 計算機能用
  const inputRefNum = useRef(null);
  const inputRefSec = useRef(null);
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

  // どの城種別で計算するか
  const castleKinds = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ): void => {
    castleKindsSwitch(newAlignment);
    calculator();
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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={tabChange}
          aria-label="basic tabs example"
        >
          <Tab label="傾国" {...tabMenu(0)} />
          <Tab label="群雄・天下" {...tabMenu(1)} disabled />
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              赤城
            </Typography>
            <ToggleButtonGroup
              // label="alignmentRed"
              value={alignmentRed}
              onChange={castleChangeRed}
              exclusive
              sx={{
                ml: 2,
              }}
            >
              <ToggleButton
                value="1"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                1
              </ToggleButton>
              <ToggleButton
                value="2"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                2
              </ToggleButton>
              <ToggleButton
                value="3"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                3
              </ToggleButton>
              <ToggleButton
                value="4"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                4
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              青城
            </Typography>
            <ToggleButtonGroup
              // label="alignmentBlue"
              value={alignmentBlue}
              onChange={castleChangeBlue}
              exclusive
              sx={{
                ml: 2,
              }}
            >
              <ToggleButton
                value="1"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                1
              </ToggleButton>
              <ToggleButton
                value="2"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                2
              </ToggleButton>
              <ToggleButton
                value="3"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                3
              </ToggleButton>
              <ToggleButton
                value="4"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                4
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              青城
            </Typography>
            <ToggleButtonGroup
              // label="alignmentGold"
              value={alignmentGold}
              onChange={castleChangeGold}
              exclusive
              sx={{
                ml: 2,
              }}
            >
              <ToggleButton
                value="1"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                1
              </ToggleButton>
              <ToggleButton
                value="2"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                2
              </ToggleButton>
              <ToggleButton
                value="3"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                3
              </ToggleButton>
              <ToggleButton
                value="4"
                aria-label="left aligned"
                sx={{
                  width: 1 / 4,
                }}
              >
                4
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, auto 1fr)",
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              1分の駐屯数
            </Typography>
            <TextField
              // error={inputDeckError}
              inputRef={inputRefDeck}
              // defaultValue=""
              id="outlined-basic"
              type="number"
              // label="Number"
              variant="outlined"
              // helperText={inputRefDeck?.current?.validationMessage}
              // label="deckNum"
              {...register("deckNum")}
              sx={{
                ml: 2,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <TabPanel value={tabValue} index={0}>
        <Typography
          sx={{
            mb: 2,
          }}
        >
          傾国のおにぎり計算エリア
        </Typography>

        {/* handleSubmit はフォームの入力を確かめた上引数に渡した関数（onSubmit）を呼び出す */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto 1fr auto",
          }}
        >
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            守る時間
          </Typography>
          <TextField
            // error={inputNumError}
            inputRef={inputRefNum}
            // defaultValue=""
            id="outlined-basic"
            type="number"
            variant="outlined"
            // helperText={inputRefNum?.current?.validationMessage}
            label="minNum"
            {...register("minNum")}
            sx={{
              ml: 2,
            }}
          />
          <Typography
            sx={{
              alignSelf: "center",
              ml: 2,
            }}
          >
            分
          </Typography>
          <TextField
            // error={inputSecError}
            inputRef={inputRefSec}
            // defaultValue=""
            id="outlined-basic"
            type="number"
            label="secNum"
            variant="outlined"
            // helperText={inputRefSec?.current?.validationMessage}
            {...register("secNum")}
            sx={{
              ml: 2,
            }}
          />

          <Typography
            sx={{
              alignSelf: "center",
              ml: 2,
            }}
          >
            秒
          </Typography>
        </Box>
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
        <Typography>群雄のおにぎり計算エリア</Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Typography>おにぎり一覧表を表示</Typography>
      </TabPanel>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          p: 3,
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
          }}
        >
          城種別
        </Typography>

        <ToggleButtonGroup
          // label="castleKinds"
          // value={castleKinds}
          onChange={castleKinds}
          aria-label="text alignment"
          exclusive
          sx={{
            ml: 2,
          }}
        >
          <ToggleButton
            value="red"
            aria-label="left aligned"
            sx={{
              width: 1 / 3,
            }}
          >
            赤城
          </ToggleButton>
          <ToggleButton
            value="blue"
            aria-label="left aligned"
            sx={{
              width: 1 / 3,
            }}
          >
            青城
          </ToggleButton>
          <ToggleButton
            value="gold"
            aria-label="left aligned"
            sx={{
              width: 1 / 3,
            }}
          >
            金城
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
          }}
        >
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            積み切り駐屯
          </Typography>
          <Typography
            sx={{
              fontWeight: "medium",
              fontSize: 30,
            }}
          >
            {numNumer}
          </Typography>
          <Tooltip title="ContentCopyIcon" onClick={handleClickButton}>
            <IconButton>
              <ContentCopyIcon
                sx={{
                  width: "0.8em",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
          }}
        >
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            再駐屯込み
          </Typography>
          <Typography
            sx={{
              fontWeight: "medium",
              fontSize: 30,
            }}
          >
            {Math.ceil(numNumer / 2)}
          </Typography>
          <Tooltip title="ContentCopyIcon" onClick={handleClickButton2}>
            <IconButton>
              <ContentCopyIcon
                sx={{
                  width: "0.8em",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
          }}
        >
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            必要おにぎり
          </Typography>
          <Typography
            sx={{
              fontWeight: "medium",
              fontSize: 30,
            }}
          >
            {numNumer * alignmentNum}
          </Typography>
          <Tooltip title="ContentCopyIcon">
            <IconButton>
              <ContentCopyIcon
                sx={{
                  width: "0.8em",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
