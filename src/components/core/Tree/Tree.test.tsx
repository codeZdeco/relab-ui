import { cleanup, render, screen } from '@testing-library/react';

afterEach(cleanup);

test('Component rendered', () => {
  render(<div />);

  expect(screen.getAllByText('tree')).toBeTruthy();
});
