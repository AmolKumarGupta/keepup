import { useMemo } from "react";
import TrackList from "../components/TrackList";
import TrackForm from "../components/forms/TrackForm";
import Calender from "../components/Calender";
import useTrackStore from "../store/trackStore";
import useAppStore from "../store/appStore";

export default function Index() {
  const showComponent = useAppStore((s) => s.component);
  const setComponent = useAppStore((s) => s.setComponent);
  const selectedDate = useTrackStore((s) => s.cur);
  const setDate = useTrackStore((s) => s.setDate);

  const selectComponent = useMemo(() => {
    if (showComponent == "form") {
      return <TrackForm onSave={() => setComponent("list")} />;
    } else if (showComponent == "calender") {
      return (
        <Calender
          date={selectedDate}
          onBack={() => setComponent("list")}
          onSelecting={(d) => {
            setDate(d);
            setComponent("list");
          }}
          changeMonth={(d) => setDate(d)}
        />
      );
    }
    return <TrackList />;
  }, [showComponent, selectedDate, setDate, setComponent]);

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
              showComponent == "form"
                ? setComponent("list")
                : setComponent("form")
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
