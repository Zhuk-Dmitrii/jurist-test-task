import { validateEmail, validatePassword } from './_validate-form.js'
import { togglePassword } from './_toggle-password.js'

export function formLogin() {
   const formLogin = document.querySelector('.tab__login')
   const inputEmailLog = document.getElementById('email-log')
   const inputPasswordLog = document.getElementById('password-log')
   const inputPasswordToggle = document.getElementById('toggle-password-log')
   const inputInfoEmail = document.getElementById('info-email-log')
   const inputInfoPassword = document.getElementById('info-password-log')
   const modal = document.querySelector('.modal')
   const error = document.getElementById('error-log')

   formLogin.addEventListener('submit', handleSubmitFormLogin)
   inputPasswordToggle.addEventListener('click', handleTogglePassword)
   inputEmailLog.addEventListener('change', handleChangeInput)
   inputPasswordLog.addEventListener('change', handleChangeInput)

   function handleSubmitFormLogin(event) {
      event.preventDefault()
      clearErrors()

      const email = inputEmailLog.value
      const password = inputPasswordLog.value

      if (!validateEmail(email) || !validatePassword(password)) {
         error.textContent = 'Неправильный логин или пароль'
      }

      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)

      const formValues = {};
      formData.forEach(function (value, key) {
         formValues[key] = value;
      });

      if (validateEmail(formValues.email) && validatePassword(formValues.password)) {
         setTimeout(function () {
            console.log(formValues)
            modal.classList.remove('open')
            formLogin.reset()
            inputInfoEmail.classList.remove('filled')
            inputInfoPassword.classList.remove('filled')
         }, 1000)
      }
   }

   function handleTogglePassword() {
      togglePassword(inputPasswordLog, inputPasswordToggle)
   }

   function handleChangeInput() {
      if (inputEmailLog.value) {
         inputInfoEmail.classList.add('filled')
      } else {
         inputInfoEmail.classList.remove('filled')
      }
      
      if (inputPasswordLog.value) {
         inputInfoPassword.classList.add('filled')
      } else {
         inputInfoPassword.classList.remove('filled')
      }
   }

   function clearErrors() {
      error.textContent = ''
   }
}