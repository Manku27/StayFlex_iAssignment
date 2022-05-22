import { AllPlayerCardGrid } from "./AllPlayerCardGrid";
import { PLAYER_DATA } from "../utils/mockPlayerList";
import { useState } from "react";
import { Box, Switch, Typography } from "@mui/material";
import { AllPlayerGrid } from "./AllPlayerGrid";
import { useLocation } from "react-router";

export const ListPage = () => {
  const { state } = useLocation();

  // GET DATA FROM LOCALSTORAGE, not location state
  const playerData = state ? PLAYER_DATA.push(state) : PLAYER_DATA;

  const [isViewCard, setIsViewCard] = useState(true);

  const handleViewChange = () => {
    setIsViewCard(!isViewCard);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <h1>Here are player details</h1>
        <Box>
          <Typography
            as="span"
            sx={{ fontWeight: !isViewCard ? "bold" : "normal" }}
          >
            {" "}
            Table{" "}
          </Typography>
          <Switch
            checked={isViewCard}
            onChange={handleViewChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography
            as="span"
            sx={{ fontWeight: isViewCard ? "bold" : "normal" }}
          >
            {" "}
            Card{" "}
          </Typography>
        </Box>
      </Box>
      {isViewCard ? (
        <AllPlayerCardGrid playerInfo={playerData} />
      ) : (
        <AllPlayerGrid playerInfo={playerData} />
      )}
    </>
  );
};
