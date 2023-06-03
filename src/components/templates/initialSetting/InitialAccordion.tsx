import { useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AlignmentNum from "./AlignmentNum";
import DeckNum from "./DeckNum";

export default function InitialAccordion(props: any) {
  const alignmentRed = props.alignmentRed;
  const alignmentBlue = props.alignmentBlue;
  const alignmentGold = props.alignmentGold;

  const castleChange = props.castleChange;

  const register = props.register;

  // デッキ数計算用
  const inputRefDeck = useRef(null);

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
        <AlignmentNum
          alignmentRed={alignmentRed}
          alignmentBlue={alignmentBlue}
          alignmentGold={alignmentGold}
          castleChange={castleChange}
        />

        <DeckNum register={register} inputRefDeck={inputRefDeck} />
      </AccordionDetails>
    </Accordion>
  );
}
