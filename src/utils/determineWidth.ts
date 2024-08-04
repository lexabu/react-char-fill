// determineWidth.ts
const determineWidth = (position: number, rating: number, step: number) => {
  const full = Math.floor(rating);
  const partial = rating - full;

  if (position <= full) {
    return '100%';
  }

  if (position === full + 1) {
    return `${(partial / step) * step * 100}%`;
  }

  return '0%';
};

export default determineWidth;
