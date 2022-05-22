import { FormHelperText, Autocomplete, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { LABELS } from "../../constants/fieldLabels";

export const SelectField = ({ control, name, options }) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error }
  } = useController({
    name,
    control
  });
  const handleChange = (event, eventValue) => {
    onChange(eventValue);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        options={options}
        fullWidth
        selectOnFocus
        clearOnBlur
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
        getOptionLabel={(option) => String(option)}
        renderInput={(params) => <TextField {...params} label={LABELS[name]} />}
        sx={{ mt: 1 }}
      />

      {error && <FormHelperText error={true}>{error?.message}</FormHelperText>}
    </>
  );
};
