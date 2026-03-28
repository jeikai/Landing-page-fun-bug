/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import Hero from '../../src/components/Hero';
import companyData from '../../src/data/companyData';

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

  test('renders 3D model showcase area', () => {
    expect(screen.getByRole('img', { name: /3D laptop model showcase/i })).toBeInTheDocument();
  });

  test('renders slogan in 3D card', () => {
    expect(screen.getByText(companyData.slogan)).toBeInTheDocument();
  });
});
