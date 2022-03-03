import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useNavigate, useParams } from 'react-router-dom';
import { Photos } from '.';

jest.mock('react-query', () => {
  return {
    useQuery() {
      return {
        isFecthing: false
      }
    }
  }
});

jest.mock('react-router-dom');


describe('Photos page', () => {
  it('should render Photos page', () => {
    const useParamsMocked = mocked(useParams);
    const paramsMocked = jest.fn().mockReturnValueOnce({
      params: {
        id: 1
      }
    });
    useParamsMocked.mockReturnValueOnce(paramsMocked as any);

    const useNavigateMocked = mocked(useNavigate);
    const navigateMocked = jest.fn();
    useNavigateMocked.mockReturnValueOnce(navigateMocked);


    render(<Photos />);

    expect(screen.getByText('⬅️ go back')).toBeInTheDocument();
  });

  it('should redirect the user to the home page by clicking to go back', () => {
    const useParamsMocked = mocked(useParams);
    const paramsMocked = jest.fn().mockReturnValueOnce({
      params: {
        id: 1
      }
    });
    useParamsMocked.mockReturnValueOnce(paramsMocked as any);
    
    const useNavigateMocked = mocked(useNavigate);
    const navigateMocked = jest.fn();
    useNavigateMocked.mockReturnValueOnce(navigateMocked);

    render(<Photos />);

    const goBackButton = screen.getByText('⬅️ go back');

    fireEvent.click(goBackButton);

    expect(navigateMocked).toHaveBeenCalled();
  })

  // it('should load the album photos when rendering the page', async () => {
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