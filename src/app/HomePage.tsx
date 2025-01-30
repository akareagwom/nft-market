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
      <Flex mr='5%' alignItems={'center'} py={{lg:4, base:2}}>
        <Heading fontSize={{lg:'8xl', base:'3xl'}}>A new NFT</Heading>
        <Image w={{lg:'auto',base:'15px'}} src='assets/Vector.png'/>
      </Flex>
      <Flex ml={'10%'} alignItems={'baseline'} py={{lg:4, base:2}}>
        <Image w={{lg:'auto',base:'20px'}} src='assets/Frame.png'/>
        <Heading fontSize={{lg:'8xl', base:'3xl'}}>Experience</Heading>
      </Flex>
      <Text py={4}>Discover, collect and sell</Text>

      <SearchBar/>

      <Flex w={{lg:'40%',base:'20%'}} justifyContent={'space-between'} pt={20}>
        <Image src='assets/Ritter Sport.png'/>
        <Image src='assets/Nike.png'/>
        <Image src='assets/Adidas.png'/>
        <Image src='assets/New Holland.png'/>
      </Flex>
    </Box>
  );
};

export default HomePage;