import PropTypes from "prop-types";
import { useRef, useState } from "react";
import useTrackStore from "../../store/trackStore";
import uniqid from "../../store/uniqid";
import useTime from "../../hooks/useTime";

function TrackForm({ onSave }) {
  const { toTime } = useTime();
  const saveTrack = useTrackStore((s) => s.saveTrack);
  const form = useRef(null);
  const [error, setError] = useState({
    name: false,
    description: false,
    time: false,
  });

  const category = [
    "exercise",
    "coding-session",
    "work-from-home",
    "office-work",
    "entertainment",
    "shopping",
    "visits-people",
    "morning-routine",
    "visitors",
  ];

  function save(e) {
    e.preventDefault();

    const fd = new FormData(form.current);
    let hasError = false;
    let data = {};
    for (const [key, val] of fd.entries()) {
      if (!val) {
        setError((prev) => ({ ...prev, [key]: true }));
        hasError = true;
        continue;
      }
      data[key] = val;
    }

    if (hasError) return false;
    setError({
      name: false,
      description: false,
      time: false,
    });

    saveTrack({
      id: uniqid(),
      name: fd.get("name"),
      description: fd.get("description"),
      category: fd.get("category"),
      time: toTime(fd.get("time")),
      created_at: Date.now(),
    });
    onSave();
  }

  return (
    <section className="mt-3">
      <form ref={form} onSubmit={save}>
        <label htmlFor="name" className="block px-1 pb-0 cursor-pointer">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`w-full p-2 rounded cursor-pointer ${
            error?.name ? "text-red-400 border-2 border-red-400" : ""
          }`}
          placeholder="Working on dev.to"
          autoComplete="off"
        />

        <label
          htmlFor="description"
          className={`block px-1 pt-2 pb-0 cursor-pointer`}
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          className={`w-full p-2 rounded cursor-pointer ${
            error?.description ? "text-red-400 border-2 border-red-400" : ""
          }`}
          placeholder="Write briefly..."
          autoComplete="off"
        />

        <label
          htmlFor="category"
          className="block px-1 pt-2 pb-0 cursor-pointer"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          className="w-full p-2 rounded bg-white capitalize"
          autoComplete="off"
        >
          {category.map((c) => (
            <option value={c} key={c}>
              {c.replaceAll("-", " ")}
            </option>
          ))}
        </select>

        <label htmlFor="time" className="block px-1 pt-2 pb-0 cursor-pointer">
          Time
        </label>
        <input
          id="time"
          name="time"
          type="time"
          className={`w-full p-2 rounded cursor-pointer ${
            error?.time ? "text-red-400 border-2 border-red-400" : ""
          }`}
        />
        <button className="mt-3 px-3 py-1 rounded shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
          Save
        </button>
      </form>
    </section>
  );
}

TrackForm.propTypes = {
  onSave: PropTypes.func,
};

export default TrackForm;
