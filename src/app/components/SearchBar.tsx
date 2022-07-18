import { SearchInput, Container } from "./StyledComponents";
import {TEST_IDS} from "../utils/Constants";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
};

const SearchBar = ({ value, setValue, placeholder }: Props) => {
  return (
    <Container>
      <SearchInput
          data-testid={TEST_IDS.searchbar}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default SearchBar;
