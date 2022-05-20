import { Box, Button } from "@mui/material";
import { Fragment } from "react";
import { AppLogo } from "../utils/AppLogo";
import { useNavigate } from "react-router-dom";
import { PLAYER_FORM_ROUTE, SHOW_PLAYERS_ROUTE } from "../../constants/routes";

export const LandingPage = () => {
  const navigate = useNavigate();

  const onShowButtonClick = () => {
    navigate(SHOW_PLAYERS_ROUTE);
  };

  const onAddButtonClick = () => {
    navigate(PLAYER_FORM_ROUTE);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <AppLogo height="10vh" width="10vw" />
        <Box
          sx={{
            disply: "flex",
            flexDirection: "row",
            border: "2px solid ",
            borderRadius: "10px",
            width: "70vw",
            justifyContent: "space-evenly"
          }}
        >
          <Button onClick={onShowButtonClick}>Show Player List</Button>
          <Button onClick={onAddButtonClick}>Add Player</Button>
        </Box>
      </Box>
    </>
  );
};
