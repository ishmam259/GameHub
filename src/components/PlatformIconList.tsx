import {FaWindows, FaPlaystation,FaXbox,FaApple, FaLinux,FaAndroid} from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'
import {Platform} from '../hooks/useGames'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from 'react-icons';
import { HStack } from '@chakra-ui/react';

interface Props{
  platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap: { [key:string] : IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack>
    {platforms.map((platform)=>(
      <Icon as={iconMap[platform.slug]} color='gray.500'/>
    ))}
    </HStack>
  );
};

export default PlatformIconList;