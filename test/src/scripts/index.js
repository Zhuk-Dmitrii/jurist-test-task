import '../styles/index.scss'
import { toggleModalAuth } from './_modal-auth.js'
import { formLogin } from './_form-log.js'
import { formRegistration } from './_form-reg.js'
import { toggleModalSuccess } from './_modal-success.js'

toggleModalAuth()
formLogin()
formRegistration()
toggleModalSuccess()