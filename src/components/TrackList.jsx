import Track from "./Track";
import useTrackStore from "../store/trackStore";
import { useMemo } from "react";

function TrackList() {
  const trackMap = useTrackStore((s) => s.tracks);
  const tracks = useMemo(() => {
    return Array.from(trackMap, ([, value]) => value);
  }, [trackMap]);

  return (
    <>
      <section className="my-3 space-y-2">
        {tracks.map((t) => (
          <Track key={t.id} {...t} />
        ))}
      </section>
    </>
  );
}

export default TrackList;
