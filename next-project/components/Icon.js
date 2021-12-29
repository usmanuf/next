import React from 'react'
function Icon(props) {
  const {icon, clickEvent} = props

  return (
    <i className={icon +' icon'} onClick={()=>clickEvent && clickEvent()}></i>
  )
}
export default Icon