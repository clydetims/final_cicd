import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import '@testing-library/jest-dom';

describe('Common Components', () => {
  test('renders Navbar with links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Realtime App/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('renders Footer copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Realtime App/i)).toBeInTheDocument();
  });

  test('renders Hero heading', () => {
    render(<Hero />);
    expect(screen.getByText(/Experience Real-Time Connectivity/i)).toBeInTheDocument();
  });

  test('renders Features list', () => {
    render(<Features />);
    expect(screen.getByText(/Our Core Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time Sync/i)).toBeInTheDocument();
  });
});
