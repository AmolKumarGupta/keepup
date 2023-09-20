import PropTypes from "prop-types";

function Calender({ date }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const daysInMonth = Array.from(
    { length: new Date(year, date.getMonth() + 1, 0).getDate() },
    (_, i) => i + 1
  );

  const firstDay = new Date(year, date.getMonth(), 1).getDay();
  const emptyFirstCells = Array.from({ length: firstDay }, (_, i) => (
    <div key={`empty-${i}`} className="empty-cell bg-red-100" />
  ));

  const prevMonth = () => {
    // this.setState(prevState => ({
    //   date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() - 1),
    // }));
  };

  const nextMonth = () => {
    // this.setState(prevState => ({
    //   date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() + 1),
    // }));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>Previous</button>
        <h2>{`${month} ${year}`}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-header-cell">
            {day}
          </div>
        ))}
        {emptyFirstCells}
        {daysInMonth.map((day) => (
          <div key={day} className="calendar-cell">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

Calender.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Calender;
