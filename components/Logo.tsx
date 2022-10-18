import { Player } from "../utils/Player";

export const Logo = () => {
  const NUMBER_OF_DISKS = 4;

  const disk = (color: string) => {
    let classes = "w-6 h-6 rounded-full border-3 border-solid ";

    if (color === Player.PLAYER_ONE) {
      classes += "bg-red-500 border-red-800";
    }

    if (color === Player.PLAYER_TWO) {
      classes += "bg-blue-500 border-blue-800";
    }

    return <div className={classes}></div>;
  };

  return (
    <div className="grid-container">
      {Array.from(Array(NUMBER_OF_DISKS), (_, i) => {
        const diskClass = `disk${i + 1}`;
        return (
          <div key={i} className={diskClass}>
            {disk(i % 2 ? Player.PLAYER_TWO : Player.PLAYER_ONE)}
          </div>
        );
      })}
    </div>
  );
};
