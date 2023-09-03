import React from "react";
import { Box } from "@mui/material";
import TitleH1 from "../parts/typography/TitleH1";
import TitleH2 from "../parts/typography/TitleH2";
import Text from "../parts/typography/Text";

function Term() {
  return (
    <Box>
      <TitleH1>プライバシーポリシー</TitleH1>
      <TitleH2>当サイトが使用しているアクセス解析ツールについて</TitleH2>
      <Text>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
      </Text>

      <Text>
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。
      </Text>

      <Text>2023年9月15日　制定</Text>
    </Box>
  );
}

export default Term;
