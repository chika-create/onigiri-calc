import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      // Google Analytics 測定 ID を入力して設定
      ReactGA.initialize("G-MZR8XTHGPP");
      ReactGA.send({
        hitType: "pageview",
        // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
        page: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
