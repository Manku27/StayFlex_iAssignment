import { PlayerCard } from "./PlayerCard";

export const ListPage = () => {
  const data = [
    {
      id: 1,
      photo: "pic",
      name: "name1",
      currentClub: "Barcelona",
      age: 10,
      debutYear: 2022,
      previousClub: "arsenal",
      goals: 223,
      assists: 400,
      position: "forward",
      freekickScored: 12
    },
    {
      id: 2,
      photo: "pic",
      name: "name2",
      currentClub: "Barcelona2",
      age: 102,
      debutYear: 20222,
      previousClub: "arsenal2",
      goals: 2223,
      assists: 4002,
      position: "forward2",
      freekickScored: 122
    }
  ];

  return (
    <>
      <h1>here are player details</h1>
      {data.map((playerInfo) => (
        <PlayerCard data={playerInfo} key={playerInfo.id} />
      ))}
    </>
  );
};
