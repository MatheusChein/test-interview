import { Loading } from "../Loading";
import { PhotoContainer } from "./styles";

interface IPhotoProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  isLoading: boolean;
}

export function Photo({ id, title, thumbnailUrl, isLoading }: IPhotoProps) {
  return (
    <PhotoContainer key={id}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <p>{title}</p>
          <img src={thumbnailUrl} alt={title} />
        </>
      )}

      
    </PhotoContainer>
  )
}