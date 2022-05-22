import { PlayerCard } from "./PlayerCard";

export const AllPlayerCardGrid = ({ playerInfo }) => {
  return (
    <>
      {playerInfo.map((player) => (
        <PlayerCard playerData={player} key={player.id} />
      ))}
    </>
  );
};
