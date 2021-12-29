import React from 'react'
import Icon from '../components/Icon'
function IconSection(props) {
  const {icon} = props
  return <div className="iconbox">
    <Icon icon={icon}/>
  </div>
}
export default IconSection 