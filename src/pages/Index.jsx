import { useState } from "react";
import TrackList from "../components/TrackList";

export default function Index() {
  const [showTracks, setShowTracks] = useState(true);

  return (
    <>
      <main className="flex items-center justify-between">
        <div className="text-gray-500 px-1 py-1 cursor-pointer rounded active:bg-neutral-200">
          Sep 1, 2023
        </div>
        <button
          onClick={() => setShowTracks((prev) => !prev)}
          className="bg-white px-3 py-1 rounded shadow active:shadow-neutral-200"
        >
          {showTracks ? "New" : "Back"}
        </button>
      </main>

      {showTracks ? (
        <TrackList />
      ) : (
        <section className="mt-1 text-center">New Track Form</section>
      )}
    </>
  );
}
