import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import styles from "../inputField/InputField.module.scss";

interface InputFieldProps {
  name?: string;
  type?: string;
  value: any;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  showSearchIcon?: boolean;
  disabled?: boolean;
}

const InputField = ({
  name = "",
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder = "",
  error,
  touched,
  className = "",
  showSearchIcon = false,
  disabled = false,
}: InputFieldProps) => {
  return (
    <TextField
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      error={Boolean(touched && error)}
      helperText={touched && error ? error : ""}
      className={`${styles.textField} ${className}`}
      inputProps={{
        style: {
          padding: 8,
        },
      }}
      variant="outlined"
      InputProps={{
        startAdornment: showSearchIcon ? (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ) : undefined,
        sx: {
          "& input": {
            padding: 1,
          },
        },
      }}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "5px",
          "&.Mui-focused fieldset": {
            borderColor: "#B0B0B0",
          },
        },
      }}
    />
  );
};

export default InputField;
