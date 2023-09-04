import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function Track({ id, name, description, category, time, created_at }) {
  return (
    <>
      <div>
        <div>
          <h3>{name}</h3>
          <span>{time}</span>
        </div>
        <div>{description}</div>
      </div>
    </>
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
