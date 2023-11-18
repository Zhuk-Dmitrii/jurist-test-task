export function togglePassword (inputPassword, toggle) {
   if (inputPassword.type === 'password') {
      inputPassword.type = 'text'
      toggle.classList.add('view')
   } else {
      inputPassword.type = 'password'
      toggle.classList.remove('view')
   }
}