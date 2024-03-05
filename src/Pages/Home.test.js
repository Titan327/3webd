import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: "1",
                    changes: [
                        {
                            key: "/works/OL37911092W",

                        },
                        {
                            key: "/works/OL51172789M",

                        }
                    ]
                }
            ]),
    })
);

test('renders Header', () => {
    render(<Home />);
    const headerElement = screen.getByTestId('Header');
    expect(headerElement).toBeInTheDocument();
});

test('renders DisplayBook', async () => {
    render(<Home />);
    const displayBookElement = await screen.findByTestId('DisplayBook');
    expect(displayBookElement).toBeInTheDocument();
});

test('renders Footer', () => {
    render(<Home />);
    const footerElement = screen.getByTestId('Footer');
    expect(footerElement).toBeInTheDocument();
});

test('renders Spinner while loading', () => {
    render(<Home />);
    const spinnerElement = screen.getByTestId('Spinner');
    expect(spinnerElement).toBeInTheDocument();
});

test('no render Spinner after loading', async () => {
    render(<Home />);
    await waitFor(() => {
        const spinnerElement = screen.queryByTestId('Spinner');
        expect(spinnerElement).not.toBeInTheDocument();
    });
});

test('fetches & display book', async () => {
    render(<Home />);
    await waitFor(() => {
        const displayBookElement = screen.getByTestId('BookCell-book');
        expect(displayBookElement).toBeInTheDocument();
        //expect(screen.getByText('Book 1')).toBeInTheDocument();
    });
});
