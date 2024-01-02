import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../constants/constants";
import { AlignmentNumProps } from "../../../types/types";

export default function AlignmentNum({
  castleColorEn,
  castleColorJa,
  setAlignmentNum,
}: AlignmentNumProps) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  // 受け取ったデータを「城種別ごとのデッキ数を登録」に流す
  const castleChange = useCallback(
    (value: number, string: string): void => {
      const newData = {
        value: value,
        string: string,
      };
      setAlignmentNum((prevAlignmentNum: { [key: string]: number }) => ({
        ...prevAlignmentNum,
        [newData.string]: newData.value,
      }));
    },
    [setAlignmentNum]
  );

  useEffect(() => {
    const savedAlignmentNum = localStorage.getItem(castleColorEn);
    if (savedAlignmentNum) {
      const alignmentNum = JSON.parse(savedAlignmentNum);
      setSelectedNumber(alignmentNum);
      castleChange(alignmentNum, castleColorEn);
    }
  }, [castleChange, castleColorEn]);

  const handleButtonClick = (value: number) => {
    setSelectedNumber(value);
    console.log(
      "AlignmentNum_value: " + value + "   / castleColorEn: " + castleColorEn
    );
    castleChange(value, castleColorEn);
    localStorage.setItem(castleColorEn, JSON.stringify(value));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        mb: 3,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        {castleColorJa}城
      </Typography>
      <ToggleButtonGroup
        exclusive
        sx={{
          ml: 2,
        }}
      >
        {castleNumber.map((item: number) => {
          return (
            <ToggleButton
              value={item}
              selected={selectedNumber === item}
              onClick={() => handleButtonClick(item)}
              sx={{
                width: 1 / 5,
              }}
            >
              {item}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
}
