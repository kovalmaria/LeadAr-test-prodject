document.addEventListener('DOMContentLoaded', () => {
  const radioOptions = document.querySelectorAll('.form__radio-option');

  radioOptions.forEach(option => {
    option.addEventListener('click', () => {
      radioOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      const input = option.querySelector('input');
      input.checked = true;
    });
  });

  const tabButtons = document.querySelectorAll('.form__tab-button');
  const forms = document.querySelectorAll('.form');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetFormId = button.dataset.tab;

      tabButtons.forEach(btn => btn.classList.remove('active'));
      forms.forEach(form => form.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetFormId).classList.add('active');
    });
  });

  document.querySelector('.form__tab-button[data-tab="form1"]').classList.add('active');
  document.getElementById('form1').classList.add('active');

  const togglePassword = document.querySelector('.form__toggle-password');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });
})