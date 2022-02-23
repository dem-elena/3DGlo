const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const timerDays = document.createElement("span");
  timerDays.textContent = "00";
  const timerDottes = document.createElement("span");
  timerDottes.textContent = ":";

  timerHours.insertAdjacentElement("beforebegin", timerDottes);
  timerDottes.insertAdjacentElement("beforebegin", timerDays);

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return { timeRemaining, hours, minutes, seconds, days };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.textContent = getTime.days;
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining > 0) {
    } else {
      clearInterval(timeStart);
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  let timeStart = setInterval(updateClock, 1000);

}
export default timer