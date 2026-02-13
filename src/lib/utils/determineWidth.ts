// determineWidth.ts
const determineWidth = (position: number, rating: number, step: number) => {
  if (step <= 0) {
    return '0%';
  }

  const full = Math.floor(rating);
  const partial = rating - full;

  if (position <= full) {
    return '100%';
  }

  if (position === full + 1) {
    return `${Math.round((partial / step) * step * 100 * 1e8) / 1e8}%`;
  }

  return '0%';
};

export default determineWidth;
