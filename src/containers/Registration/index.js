import React from "react"
import InputComponent from "./input/InputComponent"
import ButtonComponent from "./button/ButtonComponent"
import * as validation from "./input/ValidationInput"
import * as constant from "./const"

const inputArr = [
  {
    placeholderText: constant.FIRST_NAME,
    name: constant.FIRST_NAME,
    classNameInput: "name",
    type: constant.TYPE_FIELDS_TEXT,
    classNameSpan: "icon1",
    classNameI: "fa fa-user",
    inputId: constant.ID_FIRSTNAME,
    validations: validation.validate
  },
  {
    placeholderText: constant.LAST_NAME,
    name: constant.LAST_NAME,
    classNameInput: "name2",
    type: constant.TYPE_FIELDS_TEXT,
    classNameSpan: "icon2",
    classNameI: "fa fa-user",
    inputId: constant.ID_LASTNAME,
    validations: validation.validate
  },
  {
    placeholderText: constant.PHONE_NUMBER,
    name: constant.PHONE_NUMBER,
    classNameInput: "number",
    type: constant.TYPE_FIELDS_TEXT,
    classNameSpan: "icon3",
    classNameI: "fa fa-phone",
    inputId: constant.ID_PHONE,
    validations: validation.validate
  },
  {
    placeholderText: constant.EMAIL,
    name: constant.EMAIL,
    classNameInput: "mail",
    type: constant.TYPE_FIELDS_TEXT,
    classNameSpan: "icon4",
    classNameI: "fa fa-envelope",
    inputId: constant.ID_EMAIL,
    validations: validation.validate
  },
  {
    placeholderText: constant.PASSWORD,
    name: constant.PASSWORD,
    classNameInput: "pass",
    type: constant.TYPE_FIELDS_PASSWORD,
    classNameSpan: "icon5",
    classNameI: "fa fa-unlock",
    inputId: constant.ID_PASSWORD,
    validations: validation.validate
  },
  {
    placeholderText: constant.CONFIRM_PASSWORD,
    name: constant.CONFIRM_PASSWORD,
    classNameInput: "pass",
    type: constant.TYPE_FIELDS_PASSWORD,
    classNameSpan: "icon6",
    classNameI: "fa fa-unlock",
    inputId: constant.ID_CONFIRM_PASSWORD,
    validations: validation.validate
  }
]

export default class RegistrationContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    };       
  }

   /**
   * @param {value}
   * @param {inputId}
   * @function {errorValidation}
   */
  functionBlur = function (value, inputId, errorValidation) {
      const passwordValue = this[constant.ID_PASSWORD].value   
      const message = errorValidation(inputId, passwordValue, value);
      if(message) {
        this.setState(({ errors }) => ({
          errors: {
            ...errors,
            [inputId]: message
          }
        }))
      } else {
          this.setState(({ errors }) => {
            delete errors[inputId]
            return {
              errors: { ...errors }
            }
          })
        }       
    }

    clickSignUp = function (event) {
      event.preventDefault()
      const _errors = inputArr.map(({ inputId, validations }) => {
        const value = this[inputId].value
        this.functionBlur(value, inputId, validations)
      })
    }
      
        render () {
          const { errors } = this.state
          const registerIsDisabled = Object.keys(errors).length
          return (
            <section>
            <div> 
              <h1>Flat Sign Up Form</h1>
            </div>
            <div className="main-agileits">
              <h2 className="sub-head">Sign Up</h2>
              <div className="sub-main">	
                <form action="#" method="post">
                {
                  inputArr.map(({ placeholderText, name, classNameInput, type, classNameSpan, classNameI, inputId, validations }, index) => (
                      <span key={index}>
                        <InputComponent
                          functionref={(input) => { this[inputId] = input; }}
                          blur={this.functionBlur.bind(this)}
                          errorValidation = {errors[inputId]}
                          placeholderText={placeholderText}
                          name={name}
                          classNameInput={classNameInput}
                          type={type}
                          classNameSpan={classNameSpan}
                          classNameI={classNameI}
                          inputId={inputId}
                          validations={validations}
                        />
                      </span>
                    ))
                  }                
                  <p> 
                  <ButtonComponent 
                    clickButton={this.clickSignUp.bind(this)} 
                    buttonText ={"sign up"}
                    isDisabled={registerIsDisabled}
                    errorValidation = {errors}
                  />
                  </p>
                </form>
              </div>
              <div className="clear"></div>
          </div>

          <div className="footer-w3">
            <p>&copy; 2016 Flat Sign Up Form . All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
        </div>
        </section>
      )
    }
}