/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('app test', () => {
    it('renders app', () => {
        render(<Index />)
        screen.getByText('wut up rat bastards')
    })
})