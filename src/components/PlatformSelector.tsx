import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms, { Platform } from '../hooks/usePaltforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  selectedPlatformId?: number;
  onPlatformSelect: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onPlatformSelect }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find(p=>p.id===selectedPlatformId)?.name ||'Platform' }
      </MenuButton>
      <MenuList>
        {data &&
          data.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => onPlatformSelect(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
