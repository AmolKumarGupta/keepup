import Mousetrap from "mousetrap";
import { useNavigate } from "react-router-dom";

function useShortcode() {
  const navigate = useNavigate();

  Mousetrap.bind("g e", function () {
    navigate("/export");
  });
}

export default useShortcode;
