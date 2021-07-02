/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom';
 import { render, screen } from '@testing-library/react';
 import About from '../pages/about';
 
 describe('about test', () => {
     it('renders about', () => {
         render(<About/>);
         
         screen.getByText('oh, hello!');
         screen.getByAltText('black and white photobooth strip with 4 portraits of soraya');
         screen.getAllByText('tech:');
         
        const about = screen.getByTestId('moon');
        expect(about).toMatchSnapshot();
     })
 })