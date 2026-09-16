export function initCountdown(weddingDateIso) {
  function updateCountdown() {
    const target = new Date(weddingDateIso).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");

    if (!daysEl || !hoursEl || !minsEl || !secsEl) {
      return;
    }

    daysEl.textContent = String(days);
    hoursEl.textContent = String(hours);
    minsEl.textContent = String(mins);
    secsEl.textContent = String(secs);
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
