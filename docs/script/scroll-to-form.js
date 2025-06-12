document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.main-button');
  const formWrapper = document.getElementById('signup-form');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (formWrapper) {
        formWrapper.scrollIntoView({ behavior: 'smooth' });

        formWrapper.classList.add('form--highlight');

        setTimeout(() => {
          formWrapper.classList.remove('form--highlight');
        }, 2000);
      }
    });
  });
})
