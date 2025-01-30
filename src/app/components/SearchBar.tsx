import { Box,Input } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const SearchBar: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <Input  placeholder="Items, collections and creators "
      bg='white'
      borderRadius={'10px'}
      p={6}
      w={{lg:'500px',base:'200px'}}
/>
    </Box>
  );
};

export default SearchBar;