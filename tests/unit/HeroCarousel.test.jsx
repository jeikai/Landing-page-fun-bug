/* eslint-env jest */
import { act, fireEvent, render, screen } from '@testing-library/react';
import HeroCarousel from '../../src/components/HeroCarousel';

jest.useFakeTimers();

describe('HeroCarousel component', () => {
  beforeEach(() => {
    render(<HeroCarousel />);
  });

  test('renders section heading', () => {
    expect(screen.getByText(/Khoảnh khắc sản phẩm & dự án/i)).toBeInTheDocument();
  });

  test('renders dots for image navigation', () => {
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  test('changes image automatically over time', () => {
    const firstDot = screen.getAllByRole('button')[0];
    const secondDot = screen.getAllByRole('button')[1];

    expect(firstDot).toHaveClass('bg-[#a03039]');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(secondDot).toHaveClass('bg-[#a03039]');
  });

  test('clicking dot changes image manually', () => {
    const thirdDot = screen.getAllByRole('button')[2];
    fireEvent.click(thirdDot);

    expect(thirdDot).toHaveClass('bg-[#a03039]');
  });
});
