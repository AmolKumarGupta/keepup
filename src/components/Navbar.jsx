import { useRef } from "react";
import settingIcon from "../assets/settings.svg";
import useAppStore from "../store/appStore";
import { Link } from "react-router-dom";

function Navbar() {
  const settingBtn = useRef(null);
  const toggleOptionPage = useAppStore((s) => s.toggleOptionPage);

  function openSetting() {
    if (!settingBtn.current) return;

    toggleOptionPage();
    settingBtn.current.classList.add("animate-spin");
    const timer = setTimeout(() => {
      settingBtn.current.classList.remove("animate-spin");
      clearInterval(timer);
    }, 500);
  }

  return (
    <>
      <header className="container mx-auto flex justify-between items-center p-3">
        <Link to="/">
          <h1 className="text-xl bold">{import.meta.env.VITE_APP_NAME}</h1>
        </Link>
        <span
          ref={settingBtn}
          onClick={openSetting}
          className={`cursor-pointer`}
        >
          <img src={settingIcon} alt="setting" />
        </span>
      </header>
    </>
  );
}

export default Navbar;
