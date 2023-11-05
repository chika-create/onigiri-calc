import { Box } from "@mui/material";

import FullStack from "../parts/countOutput/FullStack";
import FullOnigiri from "../parts/countOutput/FullOnigiri";

export default function CountOutput(props: any) {
  // クリップボードにコピー
  async function copyToClipboard(num: number | string) {
    try {
      await navigator.clipboard.writeText(num.toString());
    } catch (error) {
      console.log(error || "コピーに失敗しました");
    }
  }

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <FullOnigiri
        copyToClipboard={copyToClipboard}
        // selectCastleKind2={props.selectCastleKind2}
      />
      <FullStack copyToClipboard={copyToClipboard} />
    </Box>
  );
}
