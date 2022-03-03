import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { Home } from '.';
import { api } from '../../services/api';

jest.mock('react-query', () => {
  return {
    useQuery() {
      return {
        isFecthing: false
      }
    }
  }
});

const albums = [
  {
    id: 1,
    title: 'test title'
  }
]

describe('Home page', () => {
  it('should render Home page', () => {
    render(<Home />);

    expect(screen.getByText('App test')).toBeInTheDocument();
  });

  // it('should load the albums when rendering the page', async () => {
  //   render(<Home />);

  //   const apiMocked = mocked(api.get);

  //   const response = apiMocked.mockResolvedValueOnce({
  //     data: albums
  //   })

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       data: albums
  //     })
  //   )
  // });

  
})