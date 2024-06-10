import React, { useState } from "react";

function Box({ children }: any) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((prev) => !prev)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

export default Box;
