import { memo } from "react"
import { LoadingContainer } from "./styles";

function LoadingComponent() {
  return (
    <LoadingContainer />
  )
};

export const Loading = memo(LoadingComponent);
