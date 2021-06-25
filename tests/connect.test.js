/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom';
 import { render, screen } from '@testing-library/react';
 import Connect from '../pages/connect';
 
 describe('app test', () => {
     it('renders app', () => {
         render(<Connect/>)
         screen.getByText('ahhh connect!')
     })
 })