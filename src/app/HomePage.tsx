import { Box, Heading, Text, Flex,Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const HomePage: React.FC<Props> = ({  }) => {
  return (
    <Box
    bgImg={'url(assets/Squares.png)'}
    display={'flex'}
    justifyContent={'center'}
    flexDir={'column'}
    alignItems={'center'}
    >
      <Text>Non Fungible Tokens</Text>
      <Flex>
        <Heading fontSize='6xl'>A new NFT</Heading>
        <Image src='assets/Vector.png'/>
      </Flex>
      <Flex>
        <Image src='assets/Frame.png'/>
        <Heading fontSize='6xl'>Experience</Heading>
      </Flex>
      <Text>Discover, collect and sell</Text>
    </Box>
  );
};

export default HomePage;