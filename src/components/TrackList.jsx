import Track from "./Track";
import uid from "../store/uniqid";

function TrackList() {
  const tracks = [
    {
      id: uid(),
      name: "test1",
      description: "this is a test. it is only for test purpose.",
      category: "coding-session",
      time: 3660,
      created_at: Date.now(),
    },
    {
      id: uid(),
      name: "test2",
      description: "this is a test 2",
      category: "coding-session",
      time: 1800,
      created_at: Date.now(),
    },
  ];

  return (
    <>
      <section className="my-1">
        {tracks.map((t) => (
          <Track key={t.id} {...t} />
        ))}
      </section>
    </>
  );
}

export default TrackList;
