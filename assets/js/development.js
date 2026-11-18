// Animated progress bar (fake compilation)
const fill = document.getElementById("progress-fill");
const percentLabel = document.getElementById("progress-percent");

let progress = 0;
const target = 70; // 70% — under construction

const interval = setInterval(() => {
  if (progress >= target) {
    clearInterval(interval);
    return;
  }
  // Random step for realistic feel
  progress += Math.random() * 2;
  if (progress > target) progress = target;

  fill.style.width = progress + "%";
  percentLabel.textContent = Math.floor(progress) + "%";
}, 120);