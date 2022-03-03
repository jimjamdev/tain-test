export const truncateText = (str: string, max: number, suffix: string) => {
  return str.split(` `).splice(0, max).join(` `) + suffix;
};
