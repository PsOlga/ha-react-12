import React from "react";
import { useRef, useEffect } from "react";

function ValueDisplay({ value }){
  

const prevValueRef = useRef();
useEffect(() => {
    prevValueRef.current = value;
}, [value]);

const prevValue = prevValueRef.current;

return (
    <div>
        <p >current value: {value}</p>
        <p> Previous value: {prevValue}</p>
    </div>
)}
export default ValueDisplay;











