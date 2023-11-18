export function validateName(nameInput) {
   return nameInput.trim() !== ''
}

export function validatePhone(phoneInput) {
   return phoneInput.replace(/\D/g, '').length === 12
}

export function validateEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return emailRegex.test(email)
}

export function validatePassword(password) {
   if (password.length < 8) {
      return false
   }

   if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return false
   }

   if (!/\d/.test(password)) {
      return false
   }

   return true
}