import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
      style={{ width: '100%' }} // Ensure the form takes full width
    >
      <InputGroup width="100%"> {/* Ensure the InputGroup takes full width */}
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          width="100%" // Ensure the input takes full width
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;