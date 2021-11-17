const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.days');
  const timerHours = document.querySelectorAll('.hours');
  const timerMinutes = document.querySelectorAll('.minutes');
  const timerSeconds = document.querySelectorAll('.seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, days, hours, minutes, seconds };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();
    const getZero = (num) => {
      if (num >= 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    };

    const addTimer = (span, timeKey) => {
      span.forEach((item) => {
        item.textContent = getZero(timeKey);
      });
    };

    addTimer(timerDays, getTime.days);
    addTimer(timerHours, getTime.hours);
    addTimer(timerMinutes, getTime.minutes);
    addTimer(timerSeconds, getTime.seconds);
  };
  const startTimer = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    }
  };
  startTimer();
};

export default timer;
