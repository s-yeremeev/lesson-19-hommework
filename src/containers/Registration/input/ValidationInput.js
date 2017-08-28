export const firstNameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]{1,20}$/
    
    if (!regExp.test(value)) return "First Name is not valid!"
  }
  
  export const lastnameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]{1,20}$/
  
    if (!regExp.test(value)) return "Last Name is not valid!"
  }

  export const phoneIsValid = async function (value) {
    const regExp = /\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/
  
    if (!regExp.test(value)) return "Phone is not valid!"
  }
  
  export const emailIsValid = async function (value) {
    const regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i
  
    if (!regExp.test(value)) return "Email is not valid!"
  }
  
  export const passwordIsValid = async function (value) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i
  
    if (!regExp.test(value)) return "Password is not valid!"
  }
  
  export const confirmPasswordIsValid = async function (passwordValue, value) {
    if (!passwordValue || !value || passwordValue != value) return "Confirm password is not equal with Password!"
  }