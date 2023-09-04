import Track from "./Track";
import uid from "../store/uniqid";

function TrackList() {
  const tracks = [
    {
      id: uid(),
      name: "Late night code",
      description: "Fix a refmini #45 bug, and some ML code",
      category: "coding-session",
      time: 3660,
      created_at: Date.now(),
    },
    {
      id: uid(),
      name: "Go for shopping",
      description: "Need to buy some new clothes.",
      category: "shopping",
      time: 1800,
      created_at: Date.now(),
    },
  ];

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
