import React from "react";
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
    <Container maxWidth="sm" sx={{ p: 3 }}>
      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>① 初期設定のアコーディオンを開きます</Text>
        <InitialSetting />
      </Box>

      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>② 各城の最低駐屯数を設定します</Text>
        <Box sx={{ mb: 3 }}>
          {castelColors.map((castleColor, i) => {
            i++;
            return (
              <AlignmentNum
                key={i}
                selectedNumber={i}
                castleColorJa={castleColor.ja}
              />
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>
          ③ 一分で消費する駐屯数を設定します
          <br />
          （1 駐屯にかかる時間が約 1.5 秒の場合は「38」駐屯、 約 1.4
          秒の場合は「42」駐屯）
        </Text>
        <MinDeckNum />
      </Box>

      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>④ 守る時間を設定します</Text>
        <CalcTime />
      </Box>

      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>⑤ 計算したい城の種類を選択します</Text>
        <CastelKinds />
      </Box>

      <Box
        sx={{
          mb: 3,
          borderBottom: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        <Text>⑥「計算する」ボタンを押します</Text>
        <CalcButton />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Text>
          ⑦ 設定した城を守るのに必要な駐屯数・おにぎり数が算出されます
          <br />
          （小数点を扱う結果は切り捨てで計算されます。）
        </Text>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <IconButton sx={{ mr: 1, p: 0 }}>
            <ContentCopyIcon sx={{ width: "0.8em" }} />
          </IconButton>
          <Text>アイコンをクリックして計算結果をコピーできます</Text>
        </Box>
        <CountOutput />
      </Box>
    </Container>
  );
}
