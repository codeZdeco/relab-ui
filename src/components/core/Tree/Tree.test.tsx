import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Tree from './Tree';

afterEach(cleanup);

test('Component rendered', () => {
  render(<Tree />);

  expect(screen.getAllByText('tree')).toBeTruthy();
});
