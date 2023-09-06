import { create } from "zustand";

export function getTrack(key) {
  let tracksJson = localStorage.getItem(key);
  if (tracksJson == null) {
    return new Map();
  }

  let tracks = JSON.parse(tracksJson);
  return new Map(tracks.map((t) => [t.id, t]));
}

function saveState(key, value) {
  console.log(`saving at ${key} ...`);

  const tracks = Array.from(value, ([, track]) => track);
  localStorage.setItem(key, JSON.stringify(tracks));
}

const useTrackStore = create((set) => ({
  cur: new Date(),
  tracks: getTrack(new Date().toLocaleDateString()),
  saveTrack: (value) =>
    set((state) => {
      const freshTracks = {
        tracks: new Map(state.tracks).set(value.id, value),
      };

      saveState(state.cur.toLocaleDateString(), freshTracks.tracks);
      return freshTracks;
    }),
}));

export default useTrackStore;
