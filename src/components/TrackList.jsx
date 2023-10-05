import Track from "./Track";
import useTrackStore from "../store/trackStore";
import { useMemo } from "react";

function TrackList() {
  const trackMap = useTrackStore((s) => s.tracks);
  const tracks = useMemo(() => {
    return Array.from(trackMap, ([, value]) => value);
  }, [trackMap]);

  const NoTrackEle = () => (
    <div className="text-lg font-medium text-gray-500 text-center mt-[150px]">
      No track found, Type{" "}
      <kbd className="bg-gray-200 p-1/2 px-1 rounded-md">n</kbd>
    </div>
  );

  return (
    <>
      <section className="my-3 space-y-2">
        {tracks.length > 0 ? (
          tracks.map((t) => <Track key={t.id} {...t} />)
        ) : (
          <NoTrackEle />
        )}
      </section>
    </>
  );
}

export default TrackList;
