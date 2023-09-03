import { useRef } from "react";
import settingIcon from "../assets/settings.svg";

function Navbar() {
  const settingBtn = useRef(null);

  function openSetting() {
    if (!settingBtn.current) return;

    settingBtn.current.classList.add("animate-spin");
    const timer = setTimeout(() => {
      settingBtn.current.classList.remove("animate-spin");
      clearInterval(timer);
    }, 500);
  }

  return (
    <>
      <header className="container mx-auto flex justify-between items-center p-3">
        <h1 className="text-xl bold">{import.meta.env.VITE_APP_NAME}</h1>
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
