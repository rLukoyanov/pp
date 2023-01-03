import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Component';

describe('Input', () => {
  it('should render component', () => {
    render(<Input />);
  });

  it('should render error component', () => {
    render(<Input status="error" />);
    const component = screen.getByTestId('input');

    expect(component.classList.contains('error')).toBe(true);
  });

  it('should render success component', () => {
    render(<Input status="success" placeholder="test" />);
    const component = screen.getByTestId('input');

    expect(component.classList.contains('success')).toBe(true);
  });

  it('should check onChange prop', () => {
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} placeholder="input" />);
    const component = screen.getByPlaceholderText('input');

    fireEvent.change(component, {
      target: {
        value: '123',
      },
    });
    expect(onChangeMock).toBeCalledTimes(1);
  });

  it('should check disabled prop', () => {
    render(<Input disabled={true} placeholder="input" />);
    const component = screen.getByPlaceholderText('input');

    expect(component).toBeDisabled();
  });

  it('should check leftIcon prop', () => {
    render(<Input leftIcon />);
    const component = screen.getByTestId('leftIcon');
    expect(component).toBeInTheDocument();
  });

  it('should check rightIcon prop', () => {
    render(<Input rightIcon />);
    const component = screen.getByTestId('rightIcon');
    expect(component).toBeInTheDocument();
  });

  it('should check label prop', () => {
    render(<Input label="123" />);
    const component = screen.getByText('123');
    expect(component.textContent).toBe('123');
  });
});
