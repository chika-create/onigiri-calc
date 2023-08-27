import React from "react";
import { Box } from "@mui/material";
import TitleH1 from "../parts/typography/TitleH1";
import TitleH2 from "../parts/typography/TitleH2";
import Text from "../parts/typography/Text";

function Term() {
  const mainTitle = "利用規約";
  const leadText =
    "本規約は、（以下「当社」といいます。）が提供する「鹿Toolz」（以下「本サービス」といいます。）を利用される際に適用されます。ご利用にあたっては、本規約をお読みいただき、内容をご承諾の上でご利用ください。";
  const subTitle = {
    application: "規約の適用",
  };
  const ApplicationText = [
    "本規約は、当社が本サービスを提供する上で、利用者が本サービスの提供を受けるにあたっての諸条件を定めたものです。",
    "当社は、本サービスの提供に関して、本規約のほか、本サービスの利用に関する個別規約その他のガイドライン等を定めることがあります。この場合、当該個別規約その他のガイドライン等は、本規約の一部として利用者による本サービスの利用に優先して適用されるものとします。",
    "利用者が本サービスを利用された場合、利用者が本規約に同意したものとみなします。",
    "利用者が、未成年の場合、利用者は、本サービスの利用について、親権者等法定代理人の同意を得なければなりません。当社は、未成年者の利用者による本サービスの利用については、親権者等法定代理人の同意を得て行為されたものとみなします。",
  ];

  return (
    <Box>
      <TitleH1 text={mainTitle} />
      <Text text={leadText} />
      <TitleH2 text={subTitle.application} />
      {ApplicationText.map((text) => {
        return <Text text={text} />;
      })}
    </Box>
  );
}

export default Term;
