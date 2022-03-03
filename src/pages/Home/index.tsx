import { useState } from 'react';
import { useQuery } from 'react-query';
import { Album } from '../../components/Album';
import { api } from '../../services/api';
import { AlbumsContainer, HomeContainer } from './styles';

interface IAlbumData {
  id: number;
  title: string;
}
export function Home() {
  const [albums, setAlbums] = useState<IAlbumData[]>([]);

  const { isFetching } = useQuery('albums', async () => {
    const response = await api.get('/albums');
    setAlbums(response.data);
  });

  return (
    <HomeContainer>
      <h1>App test</h1>

      <AlbumsContainer>
        {albums.map(album => (
          <Album
            key={album.id}
            id={album.id}
            title={album.title}
            isLoading={isFetching}
          />
        ))}
      </AlbumsContainer>
    </HomeContainer>
  )
}