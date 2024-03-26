import React from "react";
import styles from "../styles/LayoutStyle/InputLayout.module.css";

function TextAreaInput({
  label,
  placeholder,
  onChange,
  style,
  inputstyle,
  disabled,
  value,
}) {
  return (
    <div className={styles.labels} style={style}>
      <label>{label}</label>
      <textarea
        value={value}
        disabled={disabled}
        style={inputstyle}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextAreaInput;
