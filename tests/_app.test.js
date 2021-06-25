/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import App from '../pages/_app';

describe('app test', () => {
    it('renders header and tests links', async () => {
        const { render } = await getPage({
            route: '/index',
        })
        render(<App />);
        screen.getByText('SORAYA BENSON');

        const home = screen.getByRole('link', { name: 'home' })
        const projects = screen.getByRole('link', { name: 'projects' })
        const about = screen.getByRole('link', { name: 'about' })
        const connect = screen.getByRole('link', { name: 'connect' })
        const cv = screen.getByRole('link', { name: 'cv' })

        
    })
})