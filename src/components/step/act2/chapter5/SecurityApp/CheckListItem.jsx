import React from "react"

const CheckListItem = ({ name, id, changeHandler }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={(e) => changeHandler(e.target.checked, id)}
      />
      <label htmlFor={id}>{name}</label>
    </li>
  )
}

export default CheckListItem
