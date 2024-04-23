import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className="switch"
        style={{ boxShadow: isOn ? "inset 0 0 10px #00f" : "none" }}
      ></div>
    </div>
  );
};

export default Switch;
