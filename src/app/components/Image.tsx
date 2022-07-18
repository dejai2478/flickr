import { getFlickrImageSrc } from "../utils/Utils";
import { FlickrResponsiveImage } from "./StyledComponents";

type Props = {
  server: string;
  imageId: string;
  secret: string;
  size: string;
  title: string;
};

const Image = ({ server, imageId, secret, size, title }: Props) => {
  return (
    <FlickrResponsiveImage
      src={getFlickrImageSrc(server, imageId, secret, size)}
      alt={title}
      title={title}
      key={`${server}-${imageId}`}
    />
  );
};

export default Image;
