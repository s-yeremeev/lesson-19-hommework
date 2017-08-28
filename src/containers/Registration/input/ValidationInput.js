export const firstNameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]{1,20}$/
    
    if (!regExp.test(value)) throw new Error("First Name is not valid!")
  }
  
  export const lastnameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]{1,20}$/
  
    if (!regExp.test(value)) throw new Error("Last Name is not valid!")
  }

  export const phoneIsValid = async function (value) {
    const regExp = /\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/
  
    if (!regExp.test(value)) throw new Error("Last Name is not valid!")
  }
  
  export const emailIsValid = async function (value) {
    const regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i
  
    if (!regExp.test(value)) throw new Error("Email is not valid!")
  }
  
  export const passwordIsValid = async function (value) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i
  
    if (!regExp.test(value)) throw new Error("Password is not valid!")
  }
  
  export const confirmPasswordIsValid = async function (passwordValue, value) {
    if (!passwordValue || !value || passwordValue != value) throw new Error("Confirm password is not equal with Password!")
  }