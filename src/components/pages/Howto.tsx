import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";

import { CalcFormInput } from "../../types";
import { castelColors } from "../../constants/constants";

import Text from "../parts/typography/Text";
import InitialSetting from "../templates/howto/InitialSetting";
import AlignmentNum from "../parts/howto/initialSetting/AlignmentNum";
import MinDeckNum from "../parts/howto/initialSetting/MinDeckNum";
import CalcTime from "../parts/CalcTime";
import CastelKinds from "../parts/CastleKinds";

export default function Howto() {
  const { register } = useForm<CalcFormInput>();
  return (
    <Container maxWidth="sm">
      <Text>① 初期設定のアコーディオンを開きます</Text>
      <InitialSetting />

      <Text>② 各城の最低駐屯数を設定します</Text>
      {castelColors.map((castleColor, i) => {
        i++;
        return (
          <AlignmentNum selectedNumber={i} castleColorJa={castleColor.ja} />
        );
      })}

      <Text>
        ③ 一分で消費する駐屯数を設定します
        <br />
        （例：38、42）
      </Text>

      <MinDeckNum />

      <Text>④ 守る時間を設定します</Text>
      <CalcTime register={register} />

      <Text>⑤ 計算したい城の種類を選択します</Text>
      <CastelKinds />

      <Text>
        ⑥ 設定した城を守るのに必要な駐屯数・おにぎり数が算出されます
        <br />
        （小数点を扱う結果は切り上げで計算されます。）
      </Text>
    </Container>
  );
}
