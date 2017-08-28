import React from "react"
import InputComponent from "./input/InputComponent"
import * as validation from "./input/ValidationInput"
import * as constant from "./const"

const inputArr = [
  {
    placeholderText: "First Name",
    name: "Name",
    classNameInput: "name",
    type: "text",
    classNameSpan: "icon1",
    classNameI: "fa fa-user",
    inputId: constant.ID_LASTNAME,
    validation: validation.firstNameIsValid
  },
  {
    placeholderText: "Last Name",
    name: "Name",
    classNameInput: "name2",
    type: "text",
    classNameSpan: "icon2",
    classNameI: "fa fa-user",
    inputId: constant.ID_FIRSTNAME,
    validation: validation.lastnameIsValid
  },
  {
    placeholderText: "Phone Number",
    name: "Number",
    classNameInput: "number",
    type: "text",
    classNameSpan: "icon3",
    classNameI: "fa fa-phone",
    inputId: constant.ID_PHONE,
    validation: validation.phoneIsValid
  },
  {
    placeholderText: "Email",
    name: "mail",
    classNameInput: "mail",
    type: "text",
    classNameSpan: "icon4",
    classNameI: "fa fa-envelope",
    inputId: constant.ID_EMAIL,
    validation: validation.emailIsValid
  },
  {
    placeholderText: "Password",
    name: "Password",
    classNameInput: "pass",
    type: "password",
    classNameSpan: "icon5",
    classNameI: "fa fa-unlock",
    inputId: constant.ID_PASSWORD,
    validation: validation.passwordIsValid
  },
  {
    placeholderText: "Confirm Password",
    name: "Password",
    classNameInput: "pass",
    type: "password",
    classNameSpan: "icon6",
    classNameI: "fa fa-unlock",
    inputId: constant.ID_CONFIRM_PASSWORD,
    validation: validation.confirmPasswordIsValid
  }
]

export default class RegistrationContainer extends React.PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          errors: {}
        }       
      }

      functionBlur(value, inputId, errorValidation) {
        try {
          switch (inputId) {
            // case `${constants.ID_CONFIRM_PASSWORD}`: {
              case constants.ID_CONFIRM_PASSWORD: {
               const passwordValue = this[constants.ID_PASSWORD].value
                errorValidation(passwordValue, value)
               break
           }
            default:  errorValidation(value)
          }
          this.setState(({ errors }) => {
            delete errors[inputId]
            return {
              errors: { ...errors }
            }
          })
        } catch ({ message }) {         
          this.setState(({ errors }) => ({
            errors: {
              ...errors,
              [inputId]: message
            }
          }))
        }
      }
      
        render () {
          const { errors } = this.state

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
                  inputArr.map(({ placeholderText, name, classNameInput, type, classNameSpan, classNameI, inputId, validation }, index) => (
                      <span key={index}>
                        <InputComponent
                          functionref={input => this[inputId] = input}
                          blur={this.functionBlur.bind(this)}
                          errorValidation = {errors[inputId]}
                          placeholderText={placeholderText}
                          name={name}
                          classNameInput={classNameInput}
                          type={type}
                          classNameSpan={classNameSpan}
                          classNameI={classNameI}
                          inputId={inputId}
                          validation={validation}
                        />
                      </span>
                    ))
                  }                
                  <input type="submit" value="sign up"/>
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