export default (criteria, isReversed = false) => {
  const directionCoef = isReversed ? -1 : 1;
  return (a, b) => {
    if (a[criteria] < b[criteria]) return -1 * directionCoef;
    if (a[criteria] > b[criteria]) return 1 * directionCoef;
    return 0;
  };
};
