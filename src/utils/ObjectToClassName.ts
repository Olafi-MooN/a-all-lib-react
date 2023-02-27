const objectToClassName = <T = Record<string, any>>(obj: T): string => {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const classNameParts = Object.entries(obj)
    .map(([key, value]) => `a-all_${key}-${value}`);

  return classNameParts.join(' ');
};

export { objectToClassName };