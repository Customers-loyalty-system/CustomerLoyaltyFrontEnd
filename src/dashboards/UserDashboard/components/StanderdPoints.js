import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const StanderdPoints = ({ membership }) => {
  const configurations = membership.company.Configurations;
  let maxValue;
  configurations.map((config) => {
    if (config.key === "Minimum exchange points") {
      maxValue = config.value;
    }
    return maxValue;
  });

  return (
    <>
      <div className="text-center font-medium text-black">Standard points</div>
      <div className="text-sm">
        {" "}
        Balance : {membership.standardPoints} / Exchange on : {maxValue}
      </div>

      <div
        style={{ width: 100, height: 100 }}
        className="self-center mt-5 mb-3"
      >
        <CircularProgressbar
          backgroundPadding={0}
          styles={buildStyles({
            rotation: 0.63,
            pathColor: `#1d4ed8`,
            textColor: "black",
            textSize: "12px",
          })}
          strokeWidth={7}
          circleRatio={0.75}
          value={membership.standardPoints}
          maxValue={
            membership.standardPoints > maxValue
              ? (maxValue = membership.standardPoints)
              : maxValue
          }
          text={`
          ${
            membership.standardPoints !== 0
              ? Math.round((membership.standardPoints * 100) / maxValue)
              : 0
          }%`}
        />
      </div>
    </>
  );
};

export default StanderdPoints;
