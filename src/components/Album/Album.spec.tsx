import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useNavigate } from 'react-router-dom';
import { Album } from '.';

jest.mock('react-router-dom');

describe('Album component', () => {
  it('should render Album component', () => {
    render(
      <Album
        id={1}
        isLoading={false}
        title='Test title'
      />
    );

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('should render the Loading component if isLoading is true', () => {
    render(
      <Album
        id={1}
        isLoading={true}
        title='Test title'
      />
    );

    expect(screen.queryByText('Test title')).not.toBeInTheDocument()
  });

  it(`should call the navigate function by clicking on 'See Pictures' button`, () => {
    const useNavigateMocked = mocked(useNavigate);
    const navigateMocked = jest.fn();
    useNavigateMocked.mockReturnValueOnce(navigateMocked);

    render(
      <Album
        id={1}
        isLoading={false}
        title='Test title'
      />
    );

    const seePicturesButton = screen.getByText('See pictures');

    fireEvent.click(seePicturesButton);

    expect(navigateMocked).toHaveBeenCalledWith('/album/1')
  });
})