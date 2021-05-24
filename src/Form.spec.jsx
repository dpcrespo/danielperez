import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from './Form';


describe('login form', () => {
    it('should be able to introduce the username', () => {
        render(<Form />);
        const usernameInput = screen.getByLabelText('username');
        userEvent.type(usernameInput, 'DanDan');
        expect(usernameInput).toHaveValue('DanDan');
    });
})