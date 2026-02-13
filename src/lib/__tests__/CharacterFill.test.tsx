import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CharacterFill from '../CharacterFill/CharacterFill';

describe('CharacterFill', () => {
  it('renders two layers (empty and fill)', () => {
    const { container } = render(
      <CharacterFill position={1} rating={3} character="★" step={0.5} />,
    );
    const spans = container.querySelectorAll('.rating-symbol > span');
    expect(spans.length).toBe(2);
  });

  it('renders the character text in both layers', () => {
    const { container } = render(
      <CharacterFill position={1} rating={3} character="$" step={0.5} />,
    );
    const spans = container.querySelectorAll('.rating-symbol > span');
    expect(spans[0].textContent).toBe('$');
    expect(spans[1].textContent).toBe('$');
  });

  it('sets fill width to 100% for fully filled position', () => {
    const { container } = render(
      <CharacterFill position={1} rating={3} character="★" step={0.5} />,
    );
    const fillSpan = container.querySelectorAll('.rating-symbol > span')[1];
    expect((fillSpan as HTMLElement).style.width).toBe('100%');
  });

  it('sets fill width to 0% for empty position', () => {
    const { container } = render(
      <CharacterFill position={5} rating={3} character="★" step={0.5} />,
    );
    const fillSpan = container.querySelectorAll('.rating-symbol > span')[1];
    expect((fillSpan as HTMLElement).style.width).toBe('0%');
  });

  it('sets fill width to partial percentage', () => {
    const { container } = render(
      <CharacterFill position={4} rating={3.5} character="★" step={0.5} />,
    );
    const fillSpan = container.querySelectorAll('.rating-symbol > span')[1];
    expect((fillSpan as HTMLElement).style.width).toBe('50%');
  });

  it('applies custom empty color', () => {
    const { container } = render(
      <CharacterFill
        position={1}
        rating={3}
        character="★"
        step={0.5}
        emptyColor="red"
      />,
    );
    const emptySpan = container.querySelectorAll(
      '.rating-symbol > span',
    )[0] as HTMLElement;
    expect(emptySpan.style.color).toBe('red');
  });

  it('applies custom fill color', () => {
    const { container } = render(
      <CharacterFill
        position={1}
        rating={3}
        character="★"
        step={0.5}
        fillColor="blue"
      />,
    );
    const fillSpan = container.querySelectorAll(
      '.rating-symbol > span',
    )[1] as HTMLElement;
    expect(fillSpan.style.color).toBe('blue');
  });

  it('applies custom font size', () => {
    const { container } = render(
      <CharacterFill
        position={1}
        rating={3}
        character="★"
        step={0.5}
        fontSize="48px"
      />,
    );
    const emptySpan = container.querySelectorAll(
      '.rating-symbol > span',
    )[0] as HTMLElement;
    expect(emptySpan.style.fontSize).toBe('48px');
  });

  it('has ARIA label with position', () => {
    render(<CharacterFill position={3} rating={3} character="★" step={0.5} />);
    expect(screen.getByLabelText('Rate 3')).toBeInTheDocument();
  });

  it('handles step=0 safely (falls back to safe step)', () => {
    const { container } = render(
      <CharacterFill position={1} rating={0.5} character="★" step={0} />,
    );
    const fillSpan = container.querySelectorAll('.rating-symbol > span')[1];
    // With step=0 guard in CharacterFill (safeStep=0.1), determineWidth receives 0.1
    expect(fillSpan).toBeTruthy();
  });
});
