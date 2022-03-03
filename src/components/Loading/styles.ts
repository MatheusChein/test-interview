import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #fff;
  border-top: 0.5rem solid #fb1;
  border-bottom: 0.5rem solid #fb1;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
`;