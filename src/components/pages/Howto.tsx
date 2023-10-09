import { useForm } from "react-hook-form";
import { CalcFormInput } from "../../types";

import Container from "@mui/material/Container";
import InitialSetting from "../templates/howto/InitialSetting";
import CalcTime from "../parts/CalcTime";
import CastelKinds from "../parts/CastelKinds";

import { castelColors } from "../../constants/constants";
import AlignmentNum from "../parts/howto/initialSetting/AlignmentNum";
import MinDeckNum from "../parts/howto/initialSetting/MinDeckNum";

import Text from "../parts/typography/Text";

export default function Howto() {
  function castleChange() {}
  const { register } = useForm<CalcFormInput>();
  return (
    <Container maxWidth="sm">
      <Text>① 初期設定のアコーディオンを開きます</Text>
      <InitialSetting />

      <Text>② 各城の最低駐屯数を設定します</Text>
      <div>
        {castelColors.map((castleColor) => {
          return (
            <AlignmentNum
              castleColorJa={castleColor.ja}
              castleColorEn={castleColor.en}
              castleChange={castleChange}
            />
          );
        })}
        <MinDeckNum register={register} />
      </div>
      <CalcTime register={register} />
      <CastelKinds />
    </Container>
  );
}
