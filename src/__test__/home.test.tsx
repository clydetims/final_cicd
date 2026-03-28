import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactForm } from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<h1>Hello Next.js</h1>)
    const heading = screen.getByText(/Hello Next.js/i)
    expect(heading).toBeInTheDocument()
  })
})

describe('ContactForm', () => {
  it('submits the form and shows thank you message', () => {
    render(<ContactForm />);
    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(input, { target: { value: 'Alice' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByRole('alert')).toHaveTextContent('Thank you, Alice!');
  });
});

describe('Home', () => {
    it('should fail this test on purpose', () => {
    expect(true).toBe(false);
    });
})
