// Storybook用の型インポート
// import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
// カタログ化対象のコンポーネントインポート
import MinDeckNum from './MinDeckNum'

export default {
  title: 'Button',
  component: MinDeckNum,
};

export const Desktop: Story = {}

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
