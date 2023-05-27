import { useRef } from "react";
import AlignmentNum from "./AlignmentNum";
import DeckNum from "./DeckNum";

export default function InitialSetting(props: any) {
  const alignmentRed = props.alignmentRed;
  const alignmentBlue = props.alignmentBlue;
  const alignmentGold = props.alignmentGold;

  const castleChangeRed = props.castleChangeRed;
  const castleChangeBlue = props.castleChangeBlue;
  const castleChangeGold = props.castleChangeGold;

  const register = props.register;

  // デッキ数計算用
  const inputRefDeck = useRef(null);

  return (
    <>
      <AlignmentNum
        alignmentRed={alignmentRed}
        alignmentBlue={alignmentBlue}
        alignmentGold={alignmentGold}
        castleChangeRed={castleChangeRed}
        castleChangeBlue={castleChangeBlue}
        castleChangeGold={castleChangeGold}
      />

      <DeckNum register={register} inputRefDeck={inputRefDeck} />
    </>
  );
}
