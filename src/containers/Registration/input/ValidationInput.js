import * as constant from "../const"

export const validate = function (inputId, passwordValue, value) {
  if (inputId == constant.ID_CONFIRM_PASSWORD) {
    if (passwordValue != value) return constant.CONFIRM_PASSWORD + " is not equal with " + constant.PASSWORD + "!"
  } else if (inputId == constant.ID_PASSWORD) {
    if (!constant.REG_PASS.test(value)) return constant.PASSWORD + " is not valid!"
  } else if (inputId == constant.ID_EMAIL) {
    if (!constant.REG_MAIL.test(value)) return constant.EMAIL + " is not valid!"
  } else if (inputId == constant.ID_PHONE) {
    if (!constant.REG_PHONE.test(value)) return constant.PHONE_NUMBER + "  is not valid!"
  } else if (inputId == constant.ID_FIRSTNAME) {
    if (!constant.REG_NAME.test(value)) return constant.FIRST_NAME + "  is not valid!"
  } else if (inputId == constant.ID_LASTNAME) {
    if (!constant.REG_NAME.test(value)) return constant.LAST_NAME + "  is not valid!"
  }
}
