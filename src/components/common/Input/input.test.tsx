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
});
