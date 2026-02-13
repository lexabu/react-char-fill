import { describe, it, expect } from 'vitest';
import { ensureTextPresentation } from '../utils/characters';

const VS15 = '\uFE0E';

describe('ensureTextPresentation', () => {
  it('appends VS15 to emoji-prone characters', () => {
    // ⚙ (U+2699) is in the emoji-prone range
    expect(ensureTextPresentation('⚙')).toBe('⚙' + VS15);
  });

  it('appends VS15 to star characters in emoji range', () => {
    // ★ (U+2605) is in the Miscellaneous Symbols range
    expect(ensureTextPresentation('★')).toBe('★' + VS15);
  });

  it('appends VS15 to card suit characters', () => {
    // ♠ (U+2660) is in the emoji-prone range
    expect(ensureTextPresentation('♠')).toBe('♠' + VS15);
  });

  it('does not modify safe ASCII characters', () => {
    expect(ensureTextPresentation('$')).toBe('$');
    expect(ensureTextPresentation('#')).toBe('#');
    expect(ensureTextPresentation('A')).toBe('A');
  });

  it('does not modify characters outside emoji ranges', () => {
    // ₽ (U+20BD) is not in any emoji-prone range
    expect(ensureTextPresentation('₽')).toBe('₽');
  });

  it('does not double-append VS15', () => {
    const alreadyFixed = '★' + VS15;
    expect(ensureTextPresentation(alreadyFixed)).toBe(alreadyFixed);
  });

  it('handles empty string', () => {
    expect(ensureTextPresentation('')).toBe('');
  });

  it('handles single safe character', () => {
    expect(ensureTextPresentation('.')).toBe('.');
  });
});
