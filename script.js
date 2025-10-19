// selects all questions
const questions = document.querySelectorAll('.faq-question');

// loop through buttons and add click event
questions.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // close answers and reset aria
    questions.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      document.getElementById(btn.getAttribute('aria-controls')).hidden = true;
    });

    // expand clicked one to show answer and update aria
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      document.getElementById(button.getAttribute('aria-controls')).hidden = false;
    }
  });
})