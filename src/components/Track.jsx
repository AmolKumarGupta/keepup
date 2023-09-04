import PropTypes from "prop-types";
import useTime from "../hooks/useTime";

// eslint-disable-next-line no-unused-vars
function Track({ id, name, description, category, time, created_at }) {
  const { toHuman } = useTime();

  return (
    <div className="bg-white rounded p-2 shadow">
      <div className="flex items-center justify-between">
        <h3 className="capitalize text-lg">{name}</h3>
        <span className="text-gray-500">{toHuman(time)}</span>
      </div>
      <div className="text-gray-700 text-sm">{description}</div>
    </div>
  );
}

Track.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  created_at: PropTypes.number.isRequired,
};

export default Track;
