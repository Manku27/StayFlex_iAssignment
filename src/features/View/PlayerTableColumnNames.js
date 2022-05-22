import { LABELS } from "../../constants/fieldLabels";

export const PLAYER_TABLE_COLUMNS = [
  { field: "name", headerName: LABELS.name, flex: 1.6 },
  { field: "currentClub", headerName: LABELS.currentClub, flex: 1 },
  { field: "age", headerName: LABELS.age, flex: 0.6 },
  { field: "debutYear", headerName: LABELS.debutYear, flex: 0.8 },
  { field: "previousClub", headerName: LABELS.previousClub, flex: 1.2 },
  { field: "goals", headerName: LABELS.goals, flex: 0.8 },
  { field: "assists", headerName: LABELS.assists, flex: 1 },
  { field: "position", headerName: LABELS.position, flex: 1.5 },
  { field: "freekickScored", headerName: LABELS.freekickScored, flex: 1.2 }
];
