import React from "react";
import styles from "./InputControl.module.css"

function InputControl({label, ...props}) {

    // Agar label pass hoa to wohi label dikhana hy, nahi tou no label
    return(<div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props} />
        </div>) 
        
   

}

export default InputControl;    