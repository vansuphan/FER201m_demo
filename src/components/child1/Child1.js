import React from 'react'

export default function Child1({ content, setContent, onView }) {
  
  const onClick = () => {
    setContent("child 1");
    onView("Alo")
  }
  return (
    <div
      onClick={onClick}
    >{content + "_child_1"}</div>
  )
}
