import { Fragment } from "react";
import { configName } from "../hooks/useShortcut";

function Shortcuts() {
  const shortcut = Object.entries(configName).map(([cmd, name]) => (
    <Fragment key={name}>
      <div>
        <kbd className="px-1 py-1/2 bg-[#eee] border border-2 border-gray-700 shadow rounded">
          {cmd}
        </kbd>
      </div>
      <div>{name}</div>
    </Fragment>
  ));

  return (
    <>
      <h1 className="text-lg bold mb-4">Shortcuts</h1>
      <section className="grid grid-cols-2 max-w-[15rem] mx-auto">
        {shortcut}
      </section>
    </>
  );
}

export default Shortcuts;
