import React from "react";

export default ({
    placeholderText,
    name,
    classNameInput,
    type,
    classNameSpan,
    classNameI,
    inputId,
    validations,
    functionref,
    errorValidation,
    blur
}) => {

return(
    <div>
        <input 
                ref={functionref}
                placeholder={placeholderText}
                name={name}
                className={`input ${!errorValidation ? null : "is-danger"}`}
                type={type} 
                required=""
                onBlur={({ target: { value }}) => blur(value, inputId, validations)}
        />
        {
            !errorValidation ? null : (<p className="help is-danger">{errorValidation}</p>)
        }
            <span 
                className={classNameSpan}
            >
                <i 
                    className={classNameI}
                    aria-hidden="true"
                >
                </i>
            </span>
            <br/>
    </div>
    )
}