import { Platform } from '../services/games-service';
import { HStack, Icon, Text } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Prop {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Prop) => {
  const iconMap : {[key: string]: IconType}= {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
