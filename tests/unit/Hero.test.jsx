/* eslint-env jest */
import { render, screen, fireEvent, act } from '@testing-library/react';
import Hero from '../../src/components/Hero';
import companyData from '../../src/data/companyData';

jest.useFakeTimers();

describe('Hero component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test('renders title, mission and description', () => {
    expect(screen.getByText(/Xây dựng giải pháp/i)).toBeInTheDocument();
    expect(screen.getByText(companyData.mission)).toBeInTheDocument();
    expect(screen.getByText(companyData.description)).toBeInTheDocument();
  });

  test('renders call-to-action buttons', () => {
    expect(screen.getByRole('link', { name: /Khám phá dự án/i })).toHaveAttribute('href', '#dự án');
    expect(screen.getByRole('link', { name: /Liên hệ ngay/i })).toHaveAttribute('href', '#liên hệ');
  });

  test('renders background images and dots', () => {
    const dots = screen.getAllByRole('button');
    expect(dots.length).toBeGreaterThan(0); // should equal number of backgroundImages
  });

  test('changes background image automatically over time', () => {
    const firstDot = screen.getAllByRole('button')[0];
    const secondDot = screen.getAllByRole('button')[1];

    // ban đầu, dot 0 được chọn
    expect(firstDot).toHaveClass('bg-[#a03039]');

    act(() => {
      jest.advanceTimersByTime(3000); // chạy interval
    });

    // sau 3s, chuyển sang dot 1
    expect(secondDot).toHaveClass('bg-[#a03039]');
  });

  test('clicking dot changes background image manually', () => {
    const thirdDot = screen.getAllByRole('button')[2];
    fireEvent.click(thirdDot);

    expect(thirdDot).toHaveClass('bg-[#a03039]');
  });
});
