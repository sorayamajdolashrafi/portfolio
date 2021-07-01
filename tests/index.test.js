/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('app test', () => {
    it('renders app', () => {
        render(<Index/>)
        screen.getByText('software engineer here.')
    })
})