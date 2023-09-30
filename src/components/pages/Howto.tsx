import Container from "@mui/material/Container";
import InitialSetting from "../templates/InitialSetting";

export default function Howto() {
  function castleChange() {}
  const register = "";
  return (
    <Container maxWidth="sm">
      <InitialSetting castleChange={castleChange} register={register} />
    </Container>
  );
}
