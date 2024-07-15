import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PhotoAndTags from './PhotoAndTags';

vi.mock('./components', () => ({
  PhotoTags: () => <div>Mock photo tags</div>,
}));

test('renders PhotoAndtags', () => {
  render(
    <PhotoAndTags
      altDescription='test description'
      base64Result='testBase64'
      isPortrait={true}
      photoLink='https://test.png'
      photoTags={[{ title: 'test1' }, { title: 'test2' }, { title: 'test3' }]}
    />
  );
  const image = screen.getByRole('img');

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('alt', 'test description');
  expect(image).toHaveAttribute('height', '720');

  expect(screen.getByText(/^mock photo tags$/i)).toBeInTheDocument();
});

test('renders PhotoAndtags without tags', () => {
  render(
    <PhotoAndTags
      altDescription='test description'
      base64Result='testBase64'
      isPortrait={false}
      photoLink='https://test.png'
      photoTags={[]}
    />
  );

  expect(screen.getByRole('img')).toHaveAttribute('height', '450');

  expect(screen.queryByText(/^mock photo tags$/i)).not.toBeInTheDocument();
});
