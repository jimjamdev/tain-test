export const formatClassnames = (classNames: string) => {
  return Array.from(new Set(classNames.split(' '))).toString();
};
