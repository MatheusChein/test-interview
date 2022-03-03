import { useCallback, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { Photo } from '../../components/Photo';
import { Container, PhotosContainer } from "./styles";
import { useQuery } from "react-query";

interface IPhoto {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export function Photos() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const params = useParams();
  const { id } = params;
  
  const navigate = useNavigate();

  const { isFetching } = useQuery('photos', async () => {
    const { data } = await api.get('/photos');

    if (!id) return;
    const albumPhotos = data.filter((photo: IPhoto) => photo.albumId === +id);
    setPhotos(albumPhotos);
  });

  const handleAlbumClick = useCallback(() => {
    navigate('/');
  }, [id])

  return (
    <Container>
      <header>
        <h1>Photos of album {id}</h1>
        <button onClick={handleAlbumClick}>⬅️ go back</button>
      </header>
      <PhotosContainer>
        {photos.map(photo => (
          <Photo
            key={photo.id}
            id={photo.id}
            thumbnailUrl={photo.thumbnailUrl}
            title={photo.title}
            isLoading={isFetching}
          />
        ))}
      </PhotosContainer>
    </Container>
  )
}