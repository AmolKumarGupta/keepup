import { useState } from "react";
import TrackList from "../components/TrackList";
import TrackForm from "../components/forms/TrackForm";
import useTrackStore from "../store/trackStore";

export default function Index() {
  const [showTracks, setShowTracks] = useState(true);
  const selectedDate = useTrackStore((s) => s.cur);

  return (
    <>
      <main className="flex items-center justify-between">
        <div className="text-gray-500 px-1 py-1 cursor-pointer rounded active:bg-neutral-200">
          {selectedDate.toDateString()}
        </div>
        <button
          onClick={() => setShowTracks((prev) => !prev)}
          className="bg-white px-3 py-1 rounded shadow active:shadow-neutral-200"
        >
          New
        </button>
      </main>

      {showTracks ? (
        <TrackList />
      ) : (
        <TrackForm onSave={() => setShowTracks(true)} />
      )}
    </>
  );
}
