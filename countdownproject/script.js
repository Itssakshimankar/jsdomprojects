const eventDateElement = document.querySelector('.event-date');
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

const futureDate = new Date(2024, 6, 1, 9, 0, 0);


const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

eventDateElement.textContent = `Event starts on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = futureTime - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let days = Math.floor(timeDifference / oneDay);
  let hours = Math.floor((timeDifference % oneDay) / oneHour);
  let minutes = Math.floor((timeDifference % oneHour) / oneMinute);
  let seconds = Math.floor((timeDifference % oneMinute) / oneSecond);
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  
  if (timeDifference < 0) {
    clearInterval(countdown);
    eventDateElement.textContent = 'Event has started!';
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
  }
}

// Initialize the countdown
updateCountdown();
// Update the countdown every second
let countdown = setInterval(updateCountdown, 1000);
