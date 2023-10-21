import { Box } from "@mui/material";

import FullStack from "../parts/countOutput/FullStack";
import FullOnigiri from "../parts/countOutput/FullOnigiri";

export default function CountOutput(props: any) {
  // クリップボードにコピー
  async function copyToClipboard(num: any) {
    try {
      await navigator.clipboard.writeText(num);
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
      <FullStack copyToClipboard={copyToClipboard} />
      <FullOnigiri copyToClipboard={copyToClipboard} />
    </Box>
  );
}
