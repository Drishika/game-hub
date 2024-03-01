import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Prop {
   // searchText? : string
    onSearchSubmit: (searchText?: string ) => void;
}
const Navbar = ({onSearchSubmit}: Prop) => {
  return (
    <div>
      <HStack padding='10px'>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearchSubmit={onSearchSubmit}/>
        <ColorModeSwitch/>
      </HStack>
    </div>
  );
};

export default Navbar;
