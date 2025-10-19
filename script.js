// selects all questions
const questions = document.querySelectorAll(".faq-question");

// loop through each button
questions.forEach((btn) => {
  btn.addEventListener("click", () => toggleFAQ(btn));

  // keydown event for enter or space
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); 
      toggleFAQ(btn);     
    }
  });
});

// open/close function for accordion 
function toggleFAQ(button) {
  const expanded = button.getAttribute("aria-expanded") === "true";

  const answer = document.getElementById(button.getAttribute("aria-controls"));

  questions.forEach((q) => {
    q.setAttribute("aria-expanded", "false");
    document.getElementById(q.getAttribute("aria-controls")).hidden = true; 
  });

  if (!expanded) {
    button.setAttribute("aria-expanded", "true"); 
    answer.hidden = false; // shows answer
  }
}