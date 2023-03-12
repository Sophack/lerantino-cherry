const loginFormHandler = async function(event) {
  event.preventDefault();

  //retrieve variables from login.handlebars 
  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  // send POST req to API endpoint
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  // if login successful, redirect browser to dashboard 
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
