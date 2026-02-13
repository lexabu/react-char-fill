import { describe, it, expect } from 'vitest';
import { characters } from '../utils/characters';

describe('characters', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(characters)).toBe(true);
    expect(characters.length).toBeGreaterThan(0);
  });

  it('each entry has required fields', () => {
    for (const char of characters) {
      expect(char).toHaveProperty('name');
      expect(char).toHaveProperty('character');
      expect(char).toHaveProperty('categories');
      expect(typeof char.name).toBe('string');
      expect(typeof char.character).toBe('string');
      expect(Array.isArray(char.categories)).toBe(true);
    }
  });

  it('no entry has an empty name', () => {
    for (const char of characters) {
      expect(char.name.trim().length).toBeGreaterThan(0);
    }
  });

  it('no entry has an empty character', () => {
    for (const char of characters) {
      expect(char.character.length).toBeGreaterThan(0);
    }
  });

  it('no entry has empty categories', () => {
    for (const char of characters) {
      expect(char.categories.length).toBeGreaterThan(0);
      for (const cat of char.categories) {
        expect(cat.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('contains expected categories', () => {
    const allCategories = new Set(characters.flatMap(c => c.categories));
    expect(allCategories.has('Stars')).toBe(true);
    expect(allCategories.has('Currency')).toBe(true);
    expect(allCategories.has('Shapes')).toBe(true);
    expect(allCategories.has('Cards')).toBe(true);
    expect(allCategories.has('Chess')).toBe(true);
    expect(allCategories.has('Music')).toBe(true);
    expect(allCategories.has('Other')).toBe(true);
  });

  it('contains star characters', () => {
    const stars = characters.filter(c => c.categories.includes('Stars'));
    expect(stars.length).toBeGreaterThanOrEqual(4);
  });
});
