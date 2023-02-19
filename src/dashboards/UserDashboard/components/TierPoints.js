import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TierPoints = ({ membership }) => {
  const configurations = membership.company.Configurations;
  let maxValue = 0;
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1].value < arr[j].value) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    return arr;
  }
  bubbleSort(configurations);
  const nextTier = () => {
    for (const config of configurations) {
      if (
        config.key !== "Minimum exchange points" &&
        config.key !== membership.membershipTier &&
        config.value >= membership.tiersPoints
      ) {
        maxValue = config.value;
        return maxValue;
      }
    }
  };
  nextTier();
  const colors = {
    Bronze: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    Silver: "#9ca3af",
    Gold: "#facc15",
    Platinum: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  };
  return (
    <>
      <div className="text-center font-medium text-black">Tier points</div>
      <div className="text-sm">
        {maxValue == 0
          ? `You reached the highst Tier`
          : ` Balance : ${membership.tiersPoints} / Upgrade on : ${maxValue}`}
      </div>

      <div
        className="text-center mt-2 font-medium"
        style={{ color: colors[membership.membershipTier] }}
      >
        {membership.membershipTier}
      </div>

      <div
        style={{ width: 100, height: 100 }}
        className="self-center mt-2 mb-3"
      >
        <CircularProgressbar
          styles={buildStyles({
            rotation: 0.63,
            pathColor: colors[membership.membershipTier],
            textColor: colors[membership.membershipTier],
            textSize: "12px",
          })}
          strokeWidth={5}
          circleRatio={0.75}
          value={membership.tiersPoints}
          maxValue={
            membership.tiersPoints > maxValue
              ? (maxValue = membership.tiersPoints)
              : maxValue
          }
          text={`${
            membership.tiersPoints !== 0
              ? Math.round((membership.tiersPoints * 100) / maxValue)
              : 0
          }%`}
        />
      </div>
    </>
  );
};

export default TierPoints;
