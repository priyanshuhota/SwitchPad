import React, { useState } from "react";

const Slider = () => {
  const [intensity, setIntensity] = useState(50);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={intensity}
        className={`slider absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full  `}
        onChange={(e) => setIntensity(e.target.value)}
        orient="vertical"
      />
      <div className="slider-light absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full" style={{ opacity: intensity / 100 }}></div>
      
    </div>
  );
};

export default Slider;
