/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom';
 import { render, screen } from '@testing-library/react';
 import Resume from '../pages/resume';
 
 describe('app test', () => {
     it('renders app', () => {
         render(<Resume/>)
         screen.getByText('resumaaaaay')
     })
 })