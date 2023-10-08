import { useForm } from "react-hook-form";
import { CalcFormInput } from "../../types";

import Container from "@mui/material/Container";
import InitialSetting from "../templates/howto/InitialSetting";
import CalcTime from "../parts/CalcTime";
import CastelKinds from "../parts/CastelKinds";

export default function Howto() {
  function castleChange() {}
  const { register } = useForm<CalcFormInput>();
  return (
    <Container maxWidth="sm">
      <InitialSetting castleChange={castleChange} register={register} />
      <CalcTime register={register} />
      <CastelKinds />
    </Container>
  );
}
