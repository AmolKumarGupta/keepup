import { create } from "zustand";
import uniqid from "./uniqid";

export function getTrack() {
  let mock = [
    {
      id: uniqid(),
      name: "Late night code",
      description: "Fix a refmini #45 bug, and some ML code",
      category: "coding-session",
      time: 3660,
      created_at: Date.now(),
    },
  ];

  return new Map(mock.map((t) => [t.id, t]));
}

function saveState(key, value) {
  console.log(`saving...${key} ${value}`);
}

const useTrackStore = create((set) => ({
  tracks: getTrack(),
  saveTrack: (value) =>
    set((state) => {
      saveState("", "");
      return { tracks: new Map(state.tracks).set(uniqid(), value) };
    }),
}));

export default useTrackStore;
