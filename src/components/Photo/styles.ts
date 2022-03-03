import styled from "styled-components";

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  width: 300px;

  img {
    width: 150px;
    border-radius: 50%;
  }
`;