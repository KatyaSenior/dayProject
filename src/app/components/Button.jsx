"use client";
import { useState } from "react";

export default function Button({ formattedDate, formattedTime }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && (
        <p>
          Posted on {formattedDate} at {formattedTime}
        </p>
      )}
    </div>
  );
}
