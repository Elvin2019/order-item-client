import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationMenu from '../pages/navigation-menu';

describe('NavigationMenu', () => {
  it('renders the correct number of links', () => {
    render(
        <MemoryRouter>
          <NavigationMenu />
        </MemoryRouter>
      );
      

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('renders the correct link text', () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>
    );

    const linkTexts = [
      'Customer List',
      'Sale Order',
      'Sale Order Items'
    ];
    linkTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
