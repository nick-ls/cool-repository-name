// Set the target date and time (in UTC)
const targetDate = new Date(Date.UTC(2023, 4, 6, 0, 0, 0)); // May 6, 2023 at 00:00:00 UTC

// Get the HTML elements for the countdown timer
const cdElem = document.getElementById("cd");
const chElem = document.getElementById("ch");
const cmElem = document.getElementById("cm");
const csElem = document.getElementById("cs");

// Update the countdown timer every second
setInterval(() => {
  // Get the current date and time (in UTC)
  const now = new Date();

  // Calculate the time remaining until the target date and time
  let diff = Math.max(targetDate - now, 0);

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  diff -= days * 24 * 60 * 60 * 1000;
  const hours = Math.floor(diff / (60 * 60 * 1000));
  diff -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(diff / (60 * 1000));
  diff -= minutes * 60 * 1000;
  const seconds = Math.floor(diff / 1000);

  // Update the HTML elements with the new values
  cdElem.innerText = days.toString().padStart(2, "0");
  chElem.innerText = hours.toString().padStart(2, "0");
  cmElem.innerText = minutes.toString().padStart(2, "0");
  csElem.innerText = seconds.toString().padStart(2, "0");
}, 1000); // Update every second
