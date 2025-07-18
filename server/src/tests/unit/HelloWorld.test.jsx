import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../../../client/src/components/HelloWorld';

test('renders HelloWorld component', () => {
    render(<HelloWorld />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});