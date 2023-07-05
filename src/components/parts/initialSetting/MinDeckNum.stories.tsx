// Storybook用の型インポート
// import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
// カタログ化対象のコンポーネントインポート

// import React, { useState, useContext } from "react";
// import { useForm } from "react-hook-form";

import MinDeckNum from './MinDeckNum'
// import { TabPanelProps, CalcFormInput } from "../../../types";

// const { register } = useForm<CalcFormInput>();
const register = "hoge"

export default {
  title: 'Button',
  component: MinDeckNum,
};

export const Desktop: Story = {
  register: register
}

// 1: メタデータ記述
// export default {
//   component: MinDeckNum
// } as ComponentMeta<typeof MinDeckNum>

// // 2: ストーリー型定義
// type Story = ComponentStoryObj<typeof MinDeckNum>

// // 3: ストーリー（複数記述可）
// export const Primary: Story = {
//   args: {
//     label: '決定',
//     backgroundColor: 'light-blue',
//   },
// }

// export const Disable: Story = {
//   args: {
//     label: 'キャンセル',
//     backgroundColor: 'gray',
//   },
// }
