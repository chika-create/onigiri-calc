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

interface InitialSettingProps {
  setAlignmentNum: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

export default function InitialSetting({
  setAlignmentNum,
}: InitialSettingProps) {
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
              key={castleColor.en}
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
