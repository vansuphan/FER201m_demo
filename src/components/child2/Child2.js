import React from 'react'

export default function Child2({ content, setContent }) {
  const onClick = () => {
    setContent("child 2");
  }
  return (
    <div onClick={onClick}>{content + "_child_2"}</div>
  )
}
