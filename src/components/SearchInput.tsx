import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Prop {
   // searchText? : string
    onSearchSubmit: (searchText?: string ) => void;
}
const SearchInput = ({ onSearchSubmit}: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchSubmit(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search Games ..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
