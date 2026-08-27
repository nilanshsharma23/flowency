import { ResUseStopwatch, UseTimer } from "vue-timer-hook";

export const formatSecondsFromStopwatch = (
  stopwatch: ResUseStopwatch | UseTimer,
) => {
  const paddedHours = String(stopwatch.hours.value).padStart(2, "0");
  const paddedMinutes = String(stopwatch.minutes.value).padStart(2, "0");
  const paddedSeconds = String(stopwatch.seconds.value).padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};

export const formatSecondsFromTotalSeconds = (totalSeconds: number) => {
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${paddedMinutes}:${paddedSeconds}`;
};
