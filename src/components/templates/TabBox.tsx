import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function TabBox(props: any) {
  const [tabValue, setTabValue] = React.useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  function tabMenu(index: number): object {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={tabValue}
        onChange={tabChange}
        aria-label="basic tabs example"
      >
        <Tab label="傾国" {...tabMenu(0)} />
        <Tab label="群雄・天下" {...tabMenu(1)} />
        <Tab label="おにぎり表" {...tabMenu(2)} />
      </Tabs>
    </Box>
  );
}
