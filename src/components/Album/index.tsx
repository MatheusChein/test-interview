import { memo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { Loading } from "../Loading";
import { AlbumContainer } from "./styles";

interface IAlbumProps {
  id: number;
  title: string;
  isLoading: boolean;
}

function AlbumComponent({ id, title, isLoading }: IAlbumProps) {
  const navigate = useNavigate();

  const handleAlbumClick = useCallback(() => {
    navigate(`/album/${id}`);
  }, [id])

  return (
    <AlbumContainer key={id}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <span>{title}</span>
          <button onClick={handleAlbumClick}>See pictures</button>
        </>
      )}
    </AlbumContainer>
  )
}

export const Album = memo(AlbumComponent);