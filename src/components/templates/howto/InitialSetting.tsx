import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { castelColors } from "../../../constants/constants";
import AlignmentNum from "../../parts/howto/initialSetting/AlignmentNum";
import MinDeckNum from "../../parts/howto/initialSetting/MinDeckNum";

export default function InitialSetting(props: any) {
  const castleChange = props.castleChange;
  const register = props.register;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>初期設定</Typography>
      </AccordionSummary>
      <AccordionDetails>hoge</AccordionDetails>
    </Accordion>
  );
}
