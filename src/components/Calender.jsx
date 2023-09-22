import PropTypes from "prop-types";
import leftIcon from "../assets/left.svg";
import rightIcon from "../assets/right.svg";

function Calender({ date, onBack }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const curDate = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  const daysInMonth = Array.from(
    { length: new Date(year, date.getMonth() + 1, 0).getDate() },
    (_, i) => i + 1
  );

  const firstDay = new Date(year, date.getMonth(), 1).getDay();
  const emptyFirstCells = Array.from({ length: firstDay }, (_, i) => (
    <div key={`empty-${i}`} className="" />
  ));

  const prevMonth = () => {
    //   date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() - 1),
  };

  const nextMonth = () => {
    //   date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() + 1),
  };

  return (
    <div className="w-[300px] mx-auto text-center">
      <div className="flex gap-4">
        <button onClick={onBack} className="cursor-pointer">
          Back
        </button>

        <div className="flex justify-between items-center flex-grow hidden">
          <button onClick={prevMonth} className="cursor-pointer">
            <img src={leftIcon} alt="previous" />
          </button>
          <h2>{`${month} ${year}`}</h2>
          <button onClick={nextMonth} className="cursor-pointer">
            <img src={rightIcon} alt="next" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 mt-4">
        {daysOfWeek.map((day, i) => (
          <div key={day} className={`p-1 ${i == 0 ? "" : "text-gray-600"}`}>
            {day}
          </div>
        ))}
        {emptyFirstCells}
        {daysInMonth.map((day, i) => (
          <div
            key={day}
            className={`p-1 ${
              (i + emptyFirstCells.length) % 7 == 0 ? "" : "text-gray-600"
            } cursor-pointer transition border-none hover:border rounded-full  ${
              curDate == day ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

Calender.propTypes = {
  date: PropTypes.instanceOf(Date),
  onBack: PropTypes.func.isRequired,
};

export default Calender;
