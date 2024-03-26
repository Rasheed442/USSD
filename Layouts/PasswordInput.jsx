import React from "react";
import styles from "../styles/LayoutStyle/InputLayout.module.css";

function PasswordInput({
  label,
  placeholder,
  onChange,
  style,
  inputstyle,
  disabled,
  value,
  content,
}) {
  return (
    <div className={styles.labels} style={style}>
      <label>{label}</label>
      <input
        value={value}
        type="password"
        disabled={disabled}
        style={inputstyle}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span>{content}</span>
    </div>
  );
}

export default PasswordInput;
