import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { castelColors } from "../../constants/constants";
import AlignmentNum from "../parts/initialSetting/AlignmentNum";
import AlignmentNumRed from "../parts/initialSetting/AlignmentNumRed";
import AlignmentNumBlue from "../parts/initialSetting/AlignmentNumBlue";
import AlignmentNumGold from "../parts/initialSetting/AlignmentNumGold";
import MinDeckNum from "../parts/initialSetting/MinDeckNum";

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
      <AccordionDetails>
        <AlignmentNumRed castleChange={castleChange} />
        <AlignmentNumBlue castleChange={castleChange} />
        <AlignmentNumGold castleChange={castleChange} />
        {castelColors.map((castleColor) => {
          return (
            <AlignmentNum
              castelColor={castleColor}
              castleChange={castleChange}
            />
          );
        })}
        <MinDeckNum register={register} />
      </AccordionDetails>
    </Accordion>
  );
}
