function isValid(obj) {
  return (
    obj &&
    Object.keys(obj).length !== 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

export default (paramsObj) => {
  if (!isValid(paramsObj)) {
    return '';
  }

  return (
    '?' +
    Object.keys(paramsObj)
      .map((key) => key + '=' + paramsObj[key])
      .join('&')
  );
};
