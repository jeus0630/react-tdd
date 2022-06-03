import { render, screen, fireEvent } from '@testing-library/react';
import { ContactModal } from './';

test('Initializes empty form', () => {
    render(<ContactModal/>);

    const nameInput = screen.getByPlaceholderText('Name');
    const phoneInput = screen.getByPlaceholderText('Phone Number');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByRole('button',/Submit/);

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(nameInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
 
    expect(submitButton).toBeDisabled();
});

test('Disables submit button until form is valid', () => {
    render(<ContactModal/>);

    const nameInput = screen.getByPlaceholderText('Name');
    const phoneInput = screen.getByPlaceholderText('Phone Number');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByRole('button',/Submit/);  

    fireEvent.change(nameInput, {target: {value: 'Port Exe'}});
    fireEvent.change(phoneInput, {target: {value: '123-456-7890'}}); 
    fireEvent.change(emailInput, {target: {value: 'portexeofficial@gmail.com'}});
    
    expect(nameInput).toHaveValue('Port Exe');
   
    expect(submitButton).not.toBeDisabled();

}) 