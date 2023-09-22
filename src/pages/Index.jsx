import { useMemo, useState } from "react";
import TrackList from "../components/TrackList";
import TrackForm from "../components/forms/TrackForm";
import Calender from "../components/Calender";
import useTrackStore from "../store/trackStore";

export default function Index() {
  const [showComponent, setComponent] = useState("list");
  const selectedDate = useTrackStore((s) => s.cur);

  const selectComponent = useMemo(() => {
    if (showComponent == "form") {
      return <TrackForm onSave={() => setComponent("list")} />;
    } else if (showComponent == "calender") {
      return (
        <Calender date={selectedDate} onBack={() => setComponent("list")} />
      );
    }
    return <TrackList />;
  }, [showComponent, selectedDate]);

  return (
    <>
      {showComponent != "calender" && (
        <main className="flex items-center justify-between">
          <div
            onClick={() => setComponent("calender")}
            className="text-gray-500 px-1 py-1 cursor-pointer rounded active:bg-neutral-200"
          >
            {selectedDate.toDateString()}
          </div>
          <button
            onClick={() =>
              setComponent((prev) => (prev == "form" ? "list" : "form"))
            }
            className="bg-white px-3 py-1 rounded shadow active:shadow-neutral-200"
          >
            New
          </button>
        </main>
      )}

      {selectComponent}
    </>
  );
}
