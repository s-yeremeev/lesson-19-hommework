import React from "react"

export default ({ 
  buttonText,
  isDisabled,
  clickButton,
  className
}) => {
  return (
    <button
      onClick={clickButton}
      disabled={isDisabled}
      className="button"
    >
      {buttonText}
    </button>
  )
}