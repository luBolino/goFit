$(document).ready(function () {
  $('#date').mask('00/00/0000');

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    const nameInput = $('#name');
    const emailInput = $('#email');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');
    const dateInput = $('#date');

    // mensagens
    $('#name-error').text('');
    $('#email-error').text('');
    $('#password-error').text('');
    $('#confirmPassword-error').text('');
    $('#date-error').text('');

    nameInput.removeClass('error');
    emailInput.removeClass('error');
    passwordInput.removeClass('error');
    confirmPasswordInput.removeClass('error');
    dateInput.removeClass('error');

    // nome
    const name = nameInput.val().trim();
    if (name === '') {
      $('#name-error').text('PLEASE, ENTER YOUR NAME');
      nameInput.addClass('error');
      return;
    }

    // e-mail
    const email = emailInput.val();
    if (!validateEmail(email)) {
      $('#email-error').text('INVALID EMAIL');
      emailInput.addClass('error');
      return;
    }

    // senha
    const password = passwordInput.val();
    if (password === '') {
      $('#password-error').text('ENTER A PASSWORD');
      passwordInput.addClass('error');
      return;
    }
    if (password.length !== 8) {
      $('#password-error').text('PASSWORD MUST BE 8 DIGITS');
      passwordInput.addClass('error');
      return;
    }

    // confirmação de senha
    const confirmPassword = confirmPasswordInput.val();
    if (confirmPassword !== password) {
      $('#confirmPassword-error').text('PASSWORDS DO NOT MATCH');
      confirmPasswordInput.addClass('error');
      return;
    }

    // data de nascimento
    const date = dateInput.val();
    if (date.length !== 10) {
      $('#date-error').text('ENTER YOUR DATE OF BIRTH');
      dateInput.addClass('error');
      return;
    }

    showModal();
  }

  function showModal() {
    const modal = $('#signModal');
    modal.css('display', 'block');
    $('.close').on('click', function() {
      modal.css('display', 'none');
    });
  }

  $('.btn-green').on('click', function () {
    validateForm();
  });
});

$(document).ready(function () {
  const showPasswordCheckbox = $('#showPasswordCheckbox');
  const passwordInput = $('#password');
  showPasswordCheckbox.on('click', function () {
    const passwordType = passwordInput.attr('type');
    passwordInput.attr('type', passwordType === 'password' ? 'text' : 'password');
  });
});
