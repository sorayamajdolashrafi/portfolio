/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom';
 import { render, screen } from '@testing-library/react';
 import About from '../pages/about';
 
 describe('app test', () => {
     it('renders app', () => {
         render(<About/>)
         screen.getByText('oh, hello!')
     })
 })