import { Box, Heading, Text, Flex,Image } from '@chakra-ui/react';
import React from 'react';
import SearchBar from './components/SearchBar';

interface Props {
  
}

const HomePage: React.FC<Props> = ({  }) => {
  return (
    <Box
    py='30px'
    bgImg={'url(assets/Squares.png)'}
    bgRepeat={'no-repeat'}
    bgSize={'cover'}
    display={'flex'}
    justifyContent={'center'}
    flexDir={'column'}
    alignItems={'center'}
    >
      <Text>Non Fungible Tokens</Text>
      <Flex mr='5%' alignItems={'center'} py={4}>
        <Heading fontSize='8xl'>A new NFT</Heading>
        <Image src='assets/Vector.png'/>
      </Flex>
      <Flex ml={'10%'} alignItems={'baseline'} py={4}>
        <Image src='assets/Frame.png'/>
        <Heading fontSize='8xl'>Experience</Heading>
      </Flex>
      <Text py={4}>Discover, collect and sell</Text>

      <SearchBar/>

      <Flex w='40%' justifyContent={'space-between'} pt={20}>
        <Image src='assets/Ritter Sport.png'/>
        <Image src='assets/Nike.png'/>
        <Image src='assets/Adidas.png'/>
        <Image src='assets/New Holland.png'/>
      </Flex>
    </Box>
  );
};

export default HomePage;