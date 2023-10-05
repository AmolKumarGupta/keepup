import Mousetrap from "mousetrap";
import { useNavigate } from "react-router-dom";
import useAppStore from "../store/appStore";

export const configName = {
  "g e": "Go to Export",
  "g h": "Go to Export",
  c: "Show Calendar",
  t: "Show Tasks",
  n: "New Task",
};

function useShortcut() {
  const navigate = useNavigate();
  const setComponent = useAppStore((s) => s.setComponent);

  const config = {
    "g e": () => navigate("/export"),
    "g h": () => {
      setComponent("list");
      navigate("/");
    },
    c: () => setComponent("calender"),
    t: () => setComponent("list"),
    n: () => setComponent("form"),
  };

  Object.entries(config).forEach(([cmd, run]) => {
    Mousetrap.bind(cmd, run);
  });
}

export default useShortcut;
