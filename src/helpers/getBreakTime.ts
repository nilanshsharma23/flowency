export const getBreakTime = (focusMinutes: number) => {
  if (focusMinutes < 25) {
    return 5;
  } else if (focusMinutes > 25 && focusMinutes < 50) {
    return 8;
  } else if (focusMinutes > 50 && focusMinutes < 90) {
    return 10;
  } else {
    return 15;
  }
};
