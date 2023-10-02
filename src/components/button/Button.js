import React from 'react'
import style from './Button.module.scss';

export default function Button({
  value = "Button Component",
  onClickOutside = () => null
}) {
  
  const onClickButton = (event) => {
    console.log(event);
    if (onClickOutside) {
      onClickOutside(event)
    }
  }

  return (
    <button onClick={onClickButton} className={style['button-demo']}>
      {value}
    </button>
  )
}
