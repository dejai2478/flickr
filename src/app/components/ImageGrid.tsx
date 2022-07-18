import Image from "./Image";
import {FLICKR_LARGE_IMG_SIZE, TEST_IDS} from "../utils/Constants";
import { Container, Grid } from "./StyledComponents";

type Props = {
  images: Array<ImageProps>;
  handleScroll: (e: any) => void;
};

type ImageProps = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

const ImageGrid = ({ images, handleScroll }: Props) => {
  let flickrImages
  if (!!images.length) {
    flickrImages = images.map((img: ImageProps) => (
        <Image
            server={img.server}
            imageId={img.id}
            secret={img.secret}
            size={FLICKR_LARGE_IMG_SIZE}
            title={img.title}
        />
    ));
  }
  return (
    <Container>
      <Grid data-testid={TEST_IDS.imageGrid} onScroll={handleScroll}>{flickrImages}</Grid>
    </Container>
  );
};

export default ImageGrid;
