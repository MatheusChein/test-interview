import { render, screen } from '@testing-library/react';
import { Photo } from './index'

describe('Photo component', () => {
  it('should render Photo component', () => {
    render(
      <Photo
        id={1}
        isLoading={false}
        title='Test title'
        thumbnailUrl='testThumbnail'
      />
    );

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('should render the Loading component if isLoading is true', () => {
    render(
      <Photo
        id={1}
        isLoading={true}
        title='Test title'
        thumbnailUrl='testThumbnail'
      />
    );

    expect(screen.queryByText('Test title')).not.toBeInTheDocument()
  })
})