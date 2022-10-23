const timeframes = document.querySelector(".timeframes");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const dailyTracker = document.querySelector("#daily-tracker");
const weeklyTracker = document.querySelector("#weekly-tracker");
const monthlyTracker = document.querySelector("#monthly-tracker");
const trackerSections = document.querySelectorAll(".trackerSection");
const buttons = document.querySelectorAll("button");
let asyncFetch = async () => {
  const requestURL = "data.json";
  const response = await fetch(requestURL);
  const data = await response.json();
  return data;
};

asyncFetch().then((data) => {
  data.map((trackerEl) => {
    let title = trackerEl.title;
    let img = trackerEl.img;
    let background = trackerEl.background;
    let dailyStats = trackerEl.timeframes.daily;
    let weeklyStats = trackerEl.timeframes.weekly;
    let monthlyStats = trackerEl.timeframes.monthly;

    dailyTracker.innerHTML += renderTrackerBox(
      title,
      img,
      background,
      dailyStats.current,
      dailyStats.previous,
      "day"
    );

    weeklyTracker.innerHTML += renderTrackerBox(
      title,
      img,
      background,
      weeklyStats.current,
      weeklyStats.previous,
      "week"
    );

    monthlyTracker.innerHTML += renderTrackerBox(
      title,
      img,
      background,
      monthlyStats.current,
      monthlyStats.previous,
      "month"
    );
    // keep weekly-tracker as default open
    weekly.click();
  });
});

let timeFormat = (time) => {
  return time > 1 ? "hrs" : "hr";
};

let renderTrackerBox = (
  title,
  img,
  background,
  currentStats,
  previousStats,
  period
) => {
  let trackerBox = `<div class="tracker-box ${background}">
          <div class="icon-wrapper "><img src= ${img} alt="">
          </div>
          <div class="tracker-info">
            <section class="tracker-nav">
              <div class="title">${title}</div>
              <div class="option-icon">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></div>
            </section>
            <section class="tracker-stats">
              <h2>${currentStats}${timeFormat(currentStats)}</h2>
              <div>Last <span>${period}</span> - <span>${previousStats}${timeFormat(
    previousStats
  )}</span></div>
            </section>
          </div>
        </div>`;
  return trackerBox;
};

let hideAllTrackerbox = () => {
  trackerSections.forEach((section) => section.classList.add("hide"));
};

let removeInactiveState = () => {
  buttons.forEach((button) => (button.style.color = "hsl(236, 100%, 87%)"));
};

daily.addEventListener("click", (e) => {
  removeInactiveState();
  hideAllTrackerbox();
  dailyTracker.classList.remove("hide");
  e.target.style.color = "white";
});
weekly.addEventListener("click", (e) => {
  removeInactiveState();
  hideAllTrackerbox();
  weeklyTracker.classList.remove("hide");
  e.target.style.color = "white";
});
monthly.addEventListener("click", (e) => {
  removeInactiveState();
  hideAllTrackerbox();
  monthlyTracker.classList.remove("hide");
  e.target.style.color = "white";
});
