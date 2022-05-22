import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { LABELS } from "../../constants/fieldLabels";

export const PlayerCard = ({ playerData }) => {
  const keysToExcludeFromCardContent = [
    "id",
    "photo",
    "name",
    "currentClub",
    "position"
  ];

  const fieldsInCard = Object.keys(playerData).filter(
    (key) => !keysToExcludeFromCardContent.includes(key)
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<Typography variant="h5">{playerData.name} </Typography>}
        subheader={
          <Typography sx={{ fontWeight: "bold" }}>
            {playerData.currentClub} ,{" "}
            <Typography as="span" sx={{ fontWeight: "bold", color: "red" }}>
              {playerData.position}{" "}
            </Typography>
          </Typography>
        }
      />
      <CardMedia
        component={playerData.photo}
        height="194"
        image="image of player"
        alt={playerData.name}
      />
      <CardContent>
        <Box display="flex" flexDirection="column">
          {fieldsInCard
            .filter((field) => playerData[field])
            .map((field) => (
              <Typography sx={{ mr: "10px" }} key={field}>
                {LABELS[field]} :{" "}
                <Typography paragraph as="span">
                  {playerData[field]}
                </Typography>
              </Typography>
            ))}
        </Box>
      </CardContent>
    </Card>
  );
};
