import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NoCollectionMessage from './NoCollectionMessage';

vi.mock('src/components/forms', () => ({
  SearchForm: () => <div>Mock form</div>,
}));

test('renders NoCollectionMessage', () => {
  //   render(<NoCollectionMessage />);
});
