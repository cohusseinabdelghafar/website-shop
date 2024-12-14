document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      // Hide all open answers
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      answer.style.display = 'block';
    }
  });
});
