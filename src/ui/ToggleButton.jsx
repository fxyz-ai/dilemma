import React, { useEffect, useState } from "react";

export default function ToggleButton({ id, onSelect }) {
  const [ans, setAns] = useState(null);

  useEffect(() => {
    setAns(null);
  }, [id]);

  function handleClick(val) {
    setAns(val);
    // console.log(ans)
    onSelect(val);
  }

  return (
    <div className="flex gap-6">
      <button
        onClick={() => handleClick(true)}
        className={`px-4 text-lg py-2 rounded-md border-2 ${
          ans === true
            ? "border-amber-500 bg-amber-500 text-white"
            : "bg-transparent text-black border-amber-500"
        }`}
      >
        True
      </button>

      <button
        onClick={() => handleClick(false)}
        className={`px-4 text-lg py-2 rounded-md border-2 ${
          ans === false
            ? "border-amber-500 bg-amber-500 text-white"
            : "bg-transparent text-black border-amber-500"
        }`}
      >
        False
      </button>
    </div>
  );
}
