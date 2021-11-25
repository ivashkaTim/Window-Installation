const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.days');
  const timerHours = document.querySelectorAll('.hours');
  const timerMinutes = document.querySelectorAll('.minutes');
  const timerSeconds = document.querySelectorAll('.seconds');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, days, hours, minutes, seconds };
  };
  const updateClock = () => {
    const getTime = getTimeRemaining();
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
    const getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    }
  };
  startTimer();
};

export default timer;
