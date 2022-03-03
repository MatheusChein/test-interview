import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 48px;

  header {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      color: #000;
      text-decoration: none;
      border: none;
      background: transparent;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const PhotosContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 75%;
`;