export const snakeToCamel = (s) => s.replace(/_./g, (x) => x[1].toUpperCase());

export const camelToSnake = (s) =>
  s
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
