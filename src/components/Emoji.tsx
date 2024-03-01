import { ImageProps, Image } from '@chakra-ui/react';
import bull from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbs_up from '../assets/thumbs-up.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // Map of key => number and value => Image Props
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbs_up, alt: 'recommended', boxSize: '25px' },
    5: { src: bull, alt: 'exceptional', boxSize: '35px' },
  };
  return <Image {...emojiMap[rating]} marginTop={2}></Image>;
};

export default Emoji;
