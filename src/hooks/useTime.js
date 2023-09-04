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

  return { toHuman };
}

export default useTime;
