const eventBtn = document.querySelector(".event--btn");
const jobBtn = document.querySelector(".job--btn");
const corruptionBtn = document.querySelector(".corruption--btn");
const notifications = document.querySelector(".notifications");
const jobsContainer = document.querySelector(".jobs--container");
const reportContainer = document.querySelector(".report--container");

eventBtn.addEventListener("click", function () {
  window.location.href = "home/notifications.html";
});
jobBtn.addEventListener("click", function () {
  window.location.href = "home/jobs.html";
});
corruptionBtn.addEventListener("click", function () {
  window.location.href = "home/report.html";
});
