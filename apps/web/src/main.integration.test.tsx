import { render } from '@testing-library/react';

import { App } from './app';

describe('main.tsx', () => {
  it('should render App', () => {
    render(<App />);
  });
});
