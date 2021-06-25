/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Projects from '../pages/projects';

describe('app test', () => {
    it('renders app', () => {
        render(<Projects/>)
        screen.getByText('oh no, projects')
    })
})