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
  }}
  nextTier()
  const colors = { 
    Bronze:'#f59e0b',
    Silver:'#52525b',
    Gold:'#facc15',
    Platinum:'#9ca3af'
  }
  return (
    <>
      <div className="text-center font-medium text-black">Tier points</div>
      <div className="text-center font-medium" style={{color: colors[membership.membershipTier]}}>{membership.membershipTier}</div>
      <div
        style={{ width: 100, height: 100 }}
        className="self-center mt-5 mb-3"
      >
        <CircularProgressbar
          styles={buildStyles({
            rotation: 0.63,
            pathColor: colors[membership.membershipTier],
            textColor: "black",
            textSize: "12px",
          })}
          strokeWidth={5}
          circleRatio={0.75}
          value={membership.tiersPoints}
          maxValue={maxValue}
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
