import React from "react";
import styles from "../styles/LayoutStyle/InputLayout.module.css";

function LabelinputLayout({
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
      <input
        value={value}
        type="text"
        disabled={disabled}
        style={inputstyle}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default LabelinputLayout;
