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

// この interface を any の代わりに型宣言で設定してもエラーになる
// ServerCastle の any も同様

// ERROR in src/components/views/AppContent.tsx:32:29
// TS2322: Type 'Dispatch<SetStateAction<{ red: number; blue: number; gold: number; }>>' is not assignable to type '(newAlignmentNum: number, castleColor: string) => void'.
//   Types of parameters 'value' and 'newAlignmentNum' are incompatible.
//     Type 'number' is not assignable to type 'SetStateAction<{ red: number; blue: number; gold: number; }>'.
interface InitialSettingProps {
  setAlignmentNum: (newAlignmentNum: number, castleColor: string) => void;
}

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
