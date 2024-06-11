export const Conditional = ({ player = "" }) => {
  return <>{player ? <GoalBy player={player} /> : <Missed />}</>;
};

export const Missed = () => {
  return <>Goal missed!</>;
};

export const GoalBy = ({ player }) => {
  return <>Goal by {player}</>;
};
