import { Card, Grid, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { POSITTION_OPTIONS } from "../../constants/formConstants";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

export const PlayerForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();
  const [isEmpty, setIsEmpty] = useState(false);
  const handleDataSubmit = (formData) => {
    if (Object.values(formData).some((x) => x)) {
      if (isEmpty) {
        setIsEmpty(false);
      }
      onSubmit(formData);
    } else {
      setIsEmpty(true);
    }
  };

  /**
   * TODO : Handle Image
   * 1. Use firebase for storage and retrival
   * 2. Use google api
   * 3. Use localstorage after base64 encoding (not recommended)
   */

  return (
    <>
      <Card sx={{ p: 2 }}>
        <form onSubmit={handleSubmit(handleDataSubmit)}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            
            <Grid item xs={6}>
              <InputField control={control} name="age" type="number" />
            </Grid>
            <Grid item xs={6}>
              <InputField control={control} name="currentClub" />
            </Grid>

            <Grid item xs={6}>
              <InputField control={control} name="debutYear" type="number" />
            </Grid>
            <Grid item xs={6}>
              <InputField control={control} name="previousClub" />
            </Grid>
            <Grid item xs={6}>
              <InputField control={control} name="goals" type="number" />
            </Grid>
            <Grid item xs={6}>
              <InputField control={control} name="assists" type="number" />
            </Grid>
            <Grid item xs={6}>
              <InputField
                control={control}
                name="freekickScored"
                type="number"
              />
            </Grid>
            <Grid item xs={6}>
              <SelectField
                control={control}
                name="position"
                options={POSITTION_OPTIONS}
              />
            </Grid>
            <Grid item xs={6}>
              {isEmpty && (
                <Alert severity="warning">Please add some data</Alert>
              )}{" "}
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};
