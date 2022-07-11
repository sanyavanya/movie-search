export default (object) => {
  const output = {};
  Object.keys(object).forEach((key) => {
    if (object[key]) {
      output[key] = object[key];
    }
  });
  return output;
};
