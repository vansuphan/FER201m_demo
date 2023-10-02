import React, { useEffect, useState } from "react";

export default function Child1({ content, setContent, onView }) {
  const [loading, setLoading] = useState(true);
  const onClick = () => {
    setContent("child 1");
    onView("Alo");
    setLoading(false);
  };
  return (
    <div onClick={onClick}>
      <h3>{content + "_child_1"}</h3>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div> Content </div>
      )}
    </div>
  );
}
