import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { castelColors } from "../../constants/constants";

import AlignmentNum from "../parts/initialSetting/AlignmentNum";
import MinDeckNum from "../parts/initialSetting/MinDeckNum";

export default function InitialSetting({ setAlignmentNum }: any) {
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
        {castelColors.map((castleColor) => {
          return (
            <AlignmentNum
              castleColorJa={castleColor.ja}
              castleColorEn={castleColor.en}
              setAlignmentNum={setAlignmentNum}
            />
          );
        })}
        <MinDeckNum />
      </AccordionDetails>
    </Accordion>
  );
}
