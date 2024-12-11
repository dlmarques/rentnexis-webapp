export const mapEnum = (_enum: Record<string, any>) => {
  const array = Object.keys(_enum).map((key) => {
    return _enum[key];
  });

  return array;
};
