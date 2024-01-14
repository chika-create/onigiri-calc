import ReactGA from "react-ga4";
import { CustomEventData } from "../types/types";

// GA4へのイベントトラッキング
export const calcButtonClick = (data: CustomEventData): void => {
  ReactGA.event(data);
};
