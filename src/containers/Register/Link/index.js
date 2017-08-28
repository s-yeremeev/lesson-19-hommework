import React from "react"

export default ({
  linkHref,
  linkText
}) => {
  return (
    <a 
      href={linkHref}
    >
      {linkText}
    </a>
  )
}