/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPage } from 'next-page-tester';
import App from '../pages/_app';

describe('app test', () => {
    it('renders header and tests link to projects', async () => {
        const { render } = await getPage({
            route: '/index',
            route: '/projects',
        })
        render(<App />);
        screen.getByText('SORAYA BENSON');
        screen.getByRole('link', { name: 'home' });

        const projects = screen.getByRole('link', { name: 'projects' });

        userEvent.click(projects);
        screen.getByText('oh no, projects');
    });

    it('renders header and tests link to about', async () => {
        const { render } = await getPage({
            route: '/index',
            route: '/about',
        })
        render(<App />);

        const about = screen.getByRole('link', { name: 'about' });

        userEvent.click(about);
        screen.getByText('yikes, about');
    });

    it('renders header and tests link to connect', async () => {
        const { render } = await getPage({
            route: '/index',
            route: '/connect',
        })
        render(<App />);
        
        const connect = screen.getByRole('link', { name: 'connect' });

        userEvent.click(connect);
        screen.getByText('ahhh connect!');
    });

    it('renders header and tests link to projects', async () => {
        const { render } = await getPage({
            route: '/index',
            route: '/resume',
        })
        render(<App />);

        const cv = screen.getByRole('link', { name: 'cv' });

        userEvent.click(cv);
        screen.getByText('resumaaaaay');
    })
})