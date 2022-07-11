export default (minutes) => {
  return Math.floor(minutes / 60) + 'h ' + (minutes % 60) + 'm';
};
