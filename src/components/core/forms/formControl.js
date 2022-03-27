import * as React from "react"
import classnames from "classnames";

const FormControl = ({
  type,
  name,
  id,
  placeholder,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <label htmlFor={id} error={error}>
        {label}
      </label>
      <input
        id={id}
        className="text-input"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      <p>{error}</p>
    </div>
  );
};

export default FormControl