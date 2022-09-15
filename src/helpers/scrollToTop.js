import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTo(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, props.to);
  }, [pathname]);

  return null;
}