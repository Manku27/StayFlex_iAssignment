import { PLAYER_TABLE_COLUMNS } from "./PlayerTableColumnNames";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export const AllPlayerGrid = ({ playerInfo }) => {
  return (
    <Box sx={{ height: "70vh" }}>
      <DataGrid
        rows={playerInfo}
        columns={PLAYER_TABLE_COLUMNS}
        pageSize={5}
        autoHeight={true}
        rowsPerPageOptions={[5, 10]}
        disableColumnMenu={true}
        getRowId={(row) => row.id}
      />
    </Box>
  );
};
