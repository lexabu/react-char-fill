import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CharacterRating from '../CharacterRating/CharacterRating';

describe('CharacterRating', () => {
  const defaultProps = {
    rating: 3.5,
    character: '★',
    maxRating: 5,
    step: 0.5,
  };

  describe('rendering', () => {
    it('renders the correct number of character positions', () => {
      const { container } = render(<CharacterRating {...defaultProps} />);
      const symbols = container.querySelectorAll('.rating-symbol');
      expect(symbols.length).toBe(5);
    });

    it('renders with custom maxRating', () => {
      const { container } = render(
        <CharacterRating {...defaultProps} maxRating={10} />,
      );
      const symbols = container.querySelectorAll('.rating-symbol');
      expect(symbols.length).toBe(10);
    });
  });

  describe('ARIA attributes', () => {
    it('has role="slider"', () => {
      render(<CharacterRating {...defaultProps} />);
      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('has correct aria-valuenow', () => {
      render(<CharacterRating {...defaultProps} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('aria-valuenow')).toBe('3.5');
    });

    it('has correct aria-valuemin and aria-valuemax', () => {
      render(<CharacterRating {...defaultProps} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('aria-valuemin')).toBe('0');
      expect(slider.getAttribute('aria-valuemax')).toBe('5');
    });

    it('has aria-label', () => {
      render(<CharacterRating {...defaultProps} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('aria-label')).toBe('Character rating');
    });
  });

  describe('focusability', () => {
    it('has tabIndex=0 for keyboard access', () => {
      render(<CharacterRating {...defaultProps} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('tabindex')).toBe('0');
    });
  });

  describe('interactive mode', () => {
    it('shows pointer cursor when interactive', () => {
      render(<CharacterRating {...defaultProps} interactive={true} />);
      const slider = screen.getByRole('slider');
      expect(slider.style.cursor).toBe('pointer');
    });

    it('shows default cursor when not interactive', () => {
      render(<CharacterRating {...defaultProps} interactive={false} />);
      const slider = screen.getByRole('slider');
      expect(slider.style.cursor).toBe('default');
    });

    it('calls onClick when interactive', () => {
      const onClick = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={true}
          onClick={onClick}
        />,
      );
      fireEvent.click(screen.getByRole('slider'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when not interactive', () => {
      const onClick = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={false}
          onClick={onClick}
        />,
      );
      fireEvent.click(screen.getByRole('slider'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('calls onMouseMove when interactive', () => {
      const onMouseMove = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={true}
          onMouseMove={onMouseMove}
        />,
      );
      fireEvent.mouseMove(screen.getByRole('slider'));
      expect(onMouseMove).toHaveBeenCalledTimes(1);
    });

    it('does not call onMouseMove when not interactive', () => {
      const onMouseMove = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={false}
          onMouseMove={onMouseMove}
        />,
      );
      fireEvent.mouseMove(screen.getByRole('slider'));
      expect(onMouseMove).not.toHaveBeenCalled();
    });

    it('calls onMouseLeave when interactive', () => {
      const onMouseLeave = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={true}
          onMouseLeave={onMouseLeave}
        />,
      );
      fireEvent.mouseLeave(screen.getByRole('slider'));
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    });

    it('does not call onMouseLeave when not interactive', () => {
      const onMouseLeave = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={false}
          onMouseLeave={onMouseLeave}
        />,
      );
      fireEvent.mouseLeave(screen.getByRole('slider'));
      expect(onMouseLeave).not.toHaveBeenCalled();
    });

    it('calls onKeyDown when interactive', () => {
      const onKeyDown = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={true}
          onKeyDown={onKeyDown}
        />,
      );
      fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('does not call onKeyDown when not interactive', () => {
      const onKeyDown = vi.fn();
      render(
        <CharacterRating
          {...defaultProps}
          interactive={false}
          onKeyDown={onKeyDown}
        />,
      );
      fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
      expect(onKeyDown).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('handles maxRating=0 by falling back to 1', () => {
      const { container } = render(
        <CharacterRating {...defaultProps} maxRating={0} />,
      );
      const symbols = container.querySelectorAll('.rating-symbol');
      expect(symbols.length).toBe(1);
    });

    it('handles step=0 by falling back to safe default', () => {
      const { container } = render(
        <CharacterRating {...defaultProps} step={0} />,
      );
      // Should render without crashing
      const symbols = container.querySelectorAll('.rating-symbol');
      expect(symbols.length).toBe(5);
    });

    it('clamps negative rating to 0', () => {
      render(<CharacterRating {...defaultProps} rating={-2} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('aria-valuenow')).toBe('0');
    });

    it('clamps rating above maxRating', () => {
      render(<CharacterRating {...defaultProps} rating={10} maxRating={5} />);
      const slider = screen.getByRole('slider');
      expect(slider.getAttribute('aria-valuenow')).toBe('5');
    });

    it('defaults interactive to true', () => {
      render(<CharacterRating {...defaultProps} />);
      const slider = screen.getByRole('slider');
      expect(slider.style.cursor).toBe('pointer');
    });
  });
});
