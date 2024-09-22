import React from "react";
import { useRef, useEffect } from "react";
import styles from "./styles.module.css"

function ValueDisplay({ value }){
  

const prevValueRef = useRef();
useEffect(() => {
    prevValueRef.current = value;
}, [value]);

const prevValue = prevValueRef.current;

return (
    <div className={styles.container}>
        <p className={styles.paragraph}>Current value:   {value}</p>
        <p className={styles.paragraph}> Previous value:   {prevValue}</p>
    </div>
)}
export default ValueDisplay;











