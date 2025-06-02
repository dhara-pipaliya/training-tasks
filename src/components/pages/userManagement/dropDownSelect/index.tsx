import { MenuItem, Select } from "@mui/material";
import styles from "../model/Model.module.scss";

export interface IOptionType {
  label: string;
  value: string;
}

export interface IOptionDropdown {
  name?: string;
  options: IOptionType[];
  value: string;
  onChange: any;
  onBlur?: any;
  className?: string;
  label?: string;
  showCheckIcon?: boolean;
}

const DropDownSelect = ({
  name,
  label,
  options,
  value,
  onChange,
  onBlur,
  className = "",
}: IOptionDropdown) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        displayEmpty
        renderValue={(selected) =>
          selected ? (
            selected
          ) : (
            <span style={{ color: "#B0B0B0" }}>{label}</span>
          )
        }
        className={className}
        sx={{
          "& .MuiSelect-select": {
            textTransform: "capitalize",
            paddingRight: 2,
            paddingLeft: 1,
            paddingTop: 1,
            paddingBottom: 1,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#B0B0B0",
            },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDownSelect;
