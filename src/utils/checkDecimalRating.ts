const checkDecimalRating = (decimalRating: number): string => {
  if (decimalRating > 0 && decimalRating <= 0.25) {
    return 'quarter-fill';
  }
  if (decimalRating > 0.25 && decimalRating <= 0.5) {
    return 'half-fill';
  }
  if (decimalRating > 0.5 && decimalRating <= 0.75) {
    return 'three-quarter-fill';
  }
  if (decimalRating > 0.75 && decimalRating <= 1) {
    return 'full-fill';
  }
  return 'checkDecimalRating error';
};

export default checkDecimalRating;
