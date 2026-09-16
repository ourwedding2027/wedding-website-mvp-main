export function initFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const answerId = button.getAttribute("aria-controls");
      if (!answerId) {
        return;
      }

      const answer = document.getElementById(answerId);
      const toggle = button.querySelector(".faq-toggle");
      if (!answer || !toggle) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;
      toggle.textContent = isExpanded ? "+" : "-";
    });
  });
}
