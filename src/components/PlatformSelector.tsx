import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePaltforms';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';


const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s=>s.setPlatformId);
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
              onClick={() => setSelectedPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
