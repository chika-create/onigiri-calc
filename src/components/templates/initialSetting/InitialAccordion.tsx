import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AlignmentNumRed from "./AlignmentNumRed";
import AlignmentNumBlue from "./AlignmentNumBlue";
import AlignmentNumGold from "./AlignmentNumGold";
import MinDeckNum from "./MinDeckNum";

export default function InitialAccordion(props: any) {
  const castleChange = props.castleChange;
  // const alignmentRed = props.alignmentRed;
  // const alignmentBlue = props.alignmentBlue;
  // const alignmentGold = props.alignmentGold;
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
      <AccordionDetails>
        <AlignmentNumRed castleChange={castleChange} />
        <AlignmentNumBlue castleChange={castleChange} />
        <AlignmentNumGold castleChange={castleChange} />
        <MinDeckNum register={register} />
      </AccordionDetails>
    </Accordion>
  );
}
