import round from './round';
import checkDecimalRating from './checkDecimalRating';

const determineFillType = (position: number, rating: number): string => {
  const positionRating = round(rating - position + 1, 2);

  if (positionRating <= 0) {
    return 'zero-fill';
  }
  if (positionRating >= 1) {
    return 'full-fill';
  }
  if (positionRating > 0 && positionRating < 1) {
    return checkDecimalRating(positionRating);
  }

  return 'unexpected determineFillType Error';
};

export default determineFillType;
