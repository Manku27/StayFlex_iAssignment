import { Box } from "@mui/material";
import { PlayerForm } from "../DataEntry/PlayerForm";
import { useNavigate } from "react-router-dom";
import { SHOW_PLAYERS_ROUTE } from "../../constants/routes";

export const FormPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    // append form data in local storage's existing data
    // remove location based state
    navigate(SHOW_PLAYERS_ROUTE, { state: data });
  };

  return (
    <Box>
      <h1>Here is the player form</h1>
      <PlayerForm onSubmit={handleFormSubmit} />
    </Box>
  );
};
