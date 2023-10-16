import { useState } from "react";

// 城種別ごとのデッキ数
const [alignmentNum, setAlignmentNum] = useState({
  red: 1,
  blue: 2,
  gold: 3,
});

// 受け取ったデータを「城種別ごとのデッキ数を登録」に流す
const castleChange = (value: number, string: string): void => {
  const newData = {
    value: value,
    string: string,
  };
  // 城種別ごとのデッキ数を登録
  setAlignmentNum((prevAlignmentNum) => ({
    ...prevAlignmentNum,
    [newData.string]: newData.value,
  }));
};
