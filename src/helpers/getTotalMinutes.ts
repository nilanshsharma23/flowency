import { ResUseStopwatch } from "vue-timer-hook";

export const getTotalMinutes = (stopwatch: ResUseStopwatch) => {
  return stopwatch.minutes.value + stopwatch.hours.value * 60;
};
