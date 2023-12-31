function useTime() {
  function toHuman(number) {
    let hrs = parseInt(number / 3600);
    let mins = parseInt((number % 3600) / 60);

    let string = "";
    if (hrs) {
      string = `${hrs}hr${hrs > 1 ? "s" : ""}`;
    }
    if (mins) {
      string = `${string} ${mins}m`;
    }
    return string.trim();
  }

  function toTime(timeString) {
    let [hrStr, minStr] = timeString.split(":");
    let hr = Number(hrStr);
    let min = Number(minStr);

    return parseInt(hr) * 3600 + parseInt(min) * 60;
  }

  return { toHuman, toTime };
}

export default useTime;
