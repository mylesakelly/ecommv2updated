import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Home from './home'; 

test('the app can be accessed on server 3000', () => {
    render(<Home />);
  });

  test('the hero section is rendered with correct content', () => {
    render(<Home />);
    expect(screen.getByText('Fresh Finds For The Summer')).toBeInTheDocument();
    expect(screen.getByText('Rediscover the joy of plants')).toBeInTheDocument();
    expect(screen.getByText('Shop New Arrivals!')).toBeInTheDocument();
  });
  
  test('the philosophy section is rendered with correct content', () => {
    render(<Home />);
    expect(screen.getByText('Our Plant Philosophy')).toBeInTheDocument();
    expect(screen.getByText('At our plant shop, we believe in the transformative power of plants')).toBeVisible();
  });

  test('the "Shop New Arrivals!" button should route to the products page', () => {
    render(<Home />);
    const shopButton = screen.getByText('Shop New Arrivals!');
    expect(shopButton).toBeInTheDocument();
  });
  
  
