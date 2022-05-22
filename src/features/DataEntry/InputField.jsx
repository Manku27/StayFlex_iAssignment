import { FormHelperText, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { LABELS } from "../../constants/fieldLabels";

export const InputField = ({ control, name, type = "text" }) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error }
  } = useController({
    name,
    control
  });

  return (
    <>
      <TextField
        type={type}
        placeholder={LABELS[name]}
        variant="outlined"
        fullWidth
        error={!!error?.message}
        sx={{ mt: 1 }}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <FormHelperText error={true}>{error?.message}</FormHelperText>}
    </>
  );
};
