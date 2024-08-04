const getWidth = (className: string): string => {
  switch (className) {
    case 'zero-fill':
      return '0%';
    case 'quarter-fill':
      return '30%';
    case 'half-fill':
      return '50%';
    case 'three-quarter-fill':
      return '69%';
    case 'full-fill':
    default:
      return '100%';
  }
};

export default getWidth;
