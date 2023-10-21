import { Container, Box, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { castelColors } from "../../constants/constants";

import Text from "../parts/typography/Text";
import InitialSetting from "../templates/howto/InitialSetting";
import AlignmentNum from "../parts/howto/initialSetting/AlignmentNum";
import MinDeckNum from "../parts/howto/initialSetting/MinDeckNum";
import CalcTime from "../parts/howto/CalcTime";
import CastelKinds from "../parts/howto/CastleKinds";
import CalcButton from "../parts/howto/CalcButton";
import CountOutput from "../templates/howto/CountOutput";

export default function Howto() {
  return (
    <Container maxWidth="sm">
      <Text>① 初期設定のアコーディオンを開きます</Text>
      <InitialSetting />

      <Text>② 各城の最低駐屯数を設定します</Text>
      <Box sx={{ mb: 5 }}>
        {castelColors.map((castleColor, i) => {
          i++;
          return (
            <AlignmentNum selectedNumber={i} castleColorJa={castleColor.ja} />
          );
        })}
      </Box>

      <Text>
        ③ 一分で消費する駐屯数を設定します
        <br />
        （例：38、42）
      </Text>
      <MinDeckNum />

      <Text>④ 守る時間を設定します</Text>
      <CalcTime />

      <Text>⑤ 計算したい城の種類を選択します</Text>
      <CastelKinds />

      <Text>⑥ 「計算する」ボタンを押します</Text>
      <CalcButton />

      <Text>
        ⑦ 設定した城を守るのに必要な駐屯数・おにぎり数が算出されます
        <br />
        （小数点を扱う結果は切り上げで計算されます。メモ：ここは切り捨てに変更予定）
      </Text>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <IconButton sx={{ mr: 1, p: 0 }}>
          <ContentCopyIcon sx={{ width: "0.8em" }} />
        </IconButton>
        <Text>アイコンをクリックして計算結果をコピーできます</Text>
      </Box>
      <CountOutput />
    </Container>
  );
}
