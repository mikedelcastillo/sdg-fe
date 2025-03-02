import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown, type Option } from './Dropdown';

describe('Dropdown Component', () => {
  const mockOnChange = jest.fn();
  const options: Option[] = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
  ];

  test('renders with placeholder', () => {
    render(
      <Dropdown
        options={options}
        value=""
        onChange={mockOnChange}
        placeholder="Select an option"
      />
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Select an option' })
    ).toBeDisabled();
  });

  test('renders options correctly', () => {
    render(<Dropdown options={options} value="1" onChange={mockOnChange} />);

    expect(
      screen.getByRole('option', { name: 'Option 1' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Option 2' })
    ).toBeInTheDocument();
  });

  test('calls onChange when an option is selected', () => {
    render(<Dropdown options={options} value="1" onChange={mockOnChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
    expect(mockOnChange).toHaveBeenCalledWith('2');
  });
});
