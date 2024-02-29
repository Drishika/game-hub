import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import usePlatforms from '../hooks/usePaltforms';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';

interface Props {
  selectedPlatform: Platform | null;
  onPlatformSelect: (platform: Platform) => void;
}

const PlatformSelector = ({selectedPlatform, onPlatformSelect }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data &&
          data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={()=>onPlatformSelect(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
