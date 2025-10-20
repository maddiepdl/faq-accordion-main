// selects all questions
const questions = document.querySelectorAll('.faq-question');

// loop through buttons and add click event
questions.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // close answers
    questions.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      const answer = document.getElementById(btn.getAttribute('aria-controls'));
      answer.classList.remove('visible'); 
    });

    // expand to show answer now with visible class
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      answer.classList.add('visible');
    }
  });
});