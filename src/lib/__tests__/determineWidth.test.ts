import { describe, it, expect } from 'vitest';
import determineWidth from '../utils/determineWidth';

describe('determineWidth', () => {
  describe('fully filled positions', () => {
    it('returns 100% for positions at or below the integer part of the rating', () => {
      expect(determineWidth(1, 3.5, 0.5)).toBe('100%');
      expect(determineWidth(2, 3.5, 0.5)).toBe('100%');
      expect(determineWidth(3, 3.5, 0.5)).toBe('100%');
    });

    it('returns 100% for position equal to a whole number rating', () => {
      expect(determineWidth(3, 3, 0.5)).toBe('100%');
      expect(determineWidth(1, 1, 0.25)).toBe('100%');
    });
  });

  describe('partially filled positions', () => {
    it('returns correct percentage for half-step rating', () => {
      expect(determineWidth(4, 3.5, 0.5)).toBe('50%');
    });

    it('returns correct percentage for quarter-step rating', () => {
      expect(determineWidth(3, 2.25, 0.25)).toBe('25%');
      expect(determineWidth(3, 2.5, 0.25)).toBe('50%');
      expect(determineWidth(3, 2.75, 0.25)).toBe('75%');
    });

    it('returns correct percentage for 0.1 step', () => {
      expect(determineWidth(4, 3.3, 0.1)).toBe('30%');
      expect(determineWidth(4, 3.7, 0.1)).toBe('70%');
    });
  });

  describe('empty positions', () => {
    it('returns 0% for positions beyond the rating', () => {
      expect(determineWidth(5, 3.5, 0.5)).toBe('0%');
      expect(determineWidth(6, 3.5, 0.5)).toBe('0%');
    });
  });

  describe('floating-point precision', () => {
    it('does not produce floating-point artifacts', () => {
      // This was the original bug: (0.1 / 0.1) * 0.1 * 100 = 10.000000000000002
      const result = determineWidth(1, 0.1, 0.1);
      expect(result).not.toContain('10.0000000');
      expect(result).toBe('10%');
    });

    it('handles 0.25 step without artifacts', () => {
      const result = determineWidth(3, 2.25, 0.25);
      expect(result).toBe('25%');
    });

    it('handles 0.3 rating with 0.1 step', () => {
      const result = determineWidth(1, 0.3, 0.1);
      expect(result).toBe('30%');
    });
  });

  describe('step=0 guard', () => {
    it('returns 0% when step is 0', () => {
      expect(determineWidth(1, 3.5, 0)).toBe('0%');
    });

    it('returns 0% when step is negative', () => {
      expect(determineWidth(1, 3.5, -1)).toBe('0%');
    });
  });

  describe('edge cases', () => {
    it('handles zero rating', () => {
      expect(determineWidth(1, 0, 0.5)).toBe('0%');
    });

    it('handles integer ratings with no partial fill', () => {
      expect(determineWidth(4, 3, 0.5)).toBe('0%');
      expect(determineWidth(3, 3, 0.5)).toBe('100%');
    });

    it('handles position 1 with small ratings', () => {
      expect(determineWidth(1, 0.5, 0.5)).toBe('50%');
      expect(determineWidth(1, 0.25, 0.25)).toBe('25%');
    });
  });
});
