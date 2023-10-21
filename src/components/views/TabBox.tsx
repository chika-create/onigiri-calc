import { Box, Tab } from "@mui/material";
import { TabList } from "@mui/lab";

export default function TabBox(props: any) {
  const tabToChange = props.tabToChange;

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList onChange={tabToChange} aria-label="lab API tabs example">
        <Tab label="城戦" value="1" />
        <Tab label="test" value="2" />
        <Tab label="おにぎり表" value="3" />
      </TabList>
    </Box>
  );
}
