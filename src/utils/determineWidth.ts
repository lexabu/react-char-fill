const round = (value: number, precision: number): number => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const determineWidth = (position: number, rating: number): string => {
  const positionRating = round(rating - position + 1, 2);

  if (positionRating <= 0) {
    return '0%';
  }
  if (positionRating >= 1) {
    return '100%';
  }
  if (positionRating > 0 && positionRating <= 0.25) {
    return '30%';
  }
  if (positionRating > 0.25 && positionRating <= 0.5) {
    return '50%';
  }
  if (positionRating > 0.5 && positionRating <= 0.75) {
    return '69%';
  }
  if (positionRating > 0.75 && positionRating <= 1) {
    return '100%';
  }
  return '0%';
};

export default determineWidth;
