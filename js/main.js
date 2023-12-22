// MENU
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const menu = document.querySelector(".nav_items");

// open nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

// close nav menu function
const closeNavMenu = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

closeBtn.addEventListener("click", () => {
  closeNavMenu();
});

// COUNTDOWN
// const endDate = new Date("2024-01-01T00:00:00");
// let days, hours, minutes, seconds;

// function countdownTimer() {
//   const currentDate = new Date();
//   const remainingTime = (endDate - currentDate) / 1000;

//   days = Math.floor(remainingTime / 86400);
//   hours = Math.floor((remainingTime % 86400) / 3600);
//   minutes = Math.floor((remainingTime % 3600) / 60);
//   seconds = Math.floor(remainingTime % 60);

//   document.getElementById("days").textContent = days
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("hours").textContent = hours
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("minutes").textContent = minutes
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("seconds").textContent = seconds
//     .toString()
//     .padStart(2, "0");

//   setTimeout(countdownTimer, 1000);
// }

// countdownTimer();

// COUNT UP
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});

// SWIPER JS

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// NEW COUNTDOWN

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000)
}

