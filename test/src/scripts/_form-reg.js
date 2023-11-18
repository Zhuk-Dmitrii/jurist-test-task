import { validateName, validatePhone, validateEmail, validatePassword } from './_validate-form.js'
import { togglePassword } from './_toggle-password.js'

export function formRegistration() {
   const formRegistration = document.querySelector('.tab__registration')
   const inputNameReg = document.getElementById('name-reg')
   const inputPhoneReg = document.getElementById('phone-reg')
   const inputEmailReg = document.getElementById('email-reg')
   const inputPasswordReg = document.getElementById('password-reg')
   const inputPasswordToggle = document.getElementById('toggle-password-reg')
   const inputInfoName = document.getElementById('info-name-reg')
   const inputInfoPhone = document.getElementById('info-phone-reg')
   const inputInfoEmail = document.getElementById('info-email-reg')
   const inputInfoPassword = document.getElementById('info-password-reg')
   const inputConfirmReg = document.getElementById('confirm')
   const inputAcceptReg = document.getElementById('accept')
   const modalAuth = document.querySelector('.modal')
   const modalSuccess = document.querySelector('.modal-success')
   const nameError = document.getElementById('name-error-reg')
   const phoneError = document.getElementById('phone-error-reg')
   const emailError = document.getElementById('email-error-reg')
   const passwordError = document.getElementById('password-error-reg')
   const confirmError = document.getElementById('confirm-error-reg')
   const acceptError = document.getElementById('accept-error-reg')

   formRegistration.addEventListener('submit', handleSubmitFormReg)
   inputPasswordToggle.addEventListener('click', handleTogglePassword)
   inputNameReg.addEventListener('change', handleChangeInput)
   inputPhoneReg.addEventListener('change', handleChangeInput)
   inputEmailReg.addEventListener('change', handleChangeInput)
   inputPasswordReg.addEventListener('change', handleChangeInput)
   inputConfirmReg.addEventListener('change', handleChangeConfirm)
   inputAcceptReg.addEventListener('change', handleChangeAccept)

   function handleSubmitFormReg(event) {
      event.preventDefault()
      clearErrors()

      const name = inputNameReg.value
      const phone = inputPhoneReg.value
      const email = inputEmailReg.value
      const password = inputPasswordReg.value

      if (!validateName(name)) {
         nameError.textContent = 'Введите корректное имя'
      }

      if (!validatePhone(phone)) {
         phoneError.textContent = 'Введите корректный номер телефона'
      }

      if (!validateEmail(email)) {
         emailError.textContent = 'Введите корректный email'
      }

      if (!validatePassword(password)) {
         passwordError.textContent = 'Введен некорректный пароль'
      }

      if (!handleChangeConfirm()) {
         confirmError.textContent = 'Нажмите принять'
      }

      if (!handleChangeAccept()) {
         acceptError.textContent = 'Подтвердите согласие'
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('email', email)
      formData.append('password', password)

      const formValues = {};
      formData.forEach(function (value, key) {
         formValues[key] = value;
      });

      if (validateName(formValues.name)
         && validatePhone(formValues.phone)
         && validateEmail(formValues.email)
         && validatePassword(formValues.password)
         && handleChangeConfirm()
         && handleChangeAccept()) {
         setTimeout(function () {
            console.log(formValues)
            modalAuth.classList.remove('open')
            modalSuccess.classList.add('open')
            formRegistration.reset()
            inputInfoName.classList.remove('filled')
            inputInfoPhone.classList.remove('filled')
            inputInfoEmail.classList.remove('filled')
            inputInfoPassword.classList.remove('filled')
         }, 1000)
      }
   }

   function handleChangeConfirm() {
      return inputConfirmReg.checked
   }

   function handleChangeAccept() {
      return inputAcceptReg.checked
   }

   function handleTogglePassword() {
      togglePassword(inputPasswordReg, inputPasswordToggle)
   }

   function handleChangeInput() {
      if (inputNameReg.value) {
         inputInfoName.classList.add('filled')
      } else {
         inputInfoName.classList.remove('filled')
      }

      if (inputPhoneReg.value) {
         inputInfoPhone.classList.add('filled')
      } else {
         inputInfoPhone.classList.remove('filled')
      }

      if (inputEmailReg.value) {
         inputInfoEmail.classList.add('filled')
      } else {
         inputInfoEmail.classList.remove('filled')
      }

      if (inputPasswordReg.value) {
         inputInfoPassword.classList.add('filled')
      } else {
         inputInfoPassword.classList.remove('filled')
      }
   }

   function clearErrors() {
      nameError.textContent = ''
      phoneError.textContent = ''
      emailError.textContent = ''
      passwordError.textContent = ''
      confirmError.textContent = ''
      acceptError.textContent = ''
   }
}