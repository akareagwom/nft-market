import { Box, Flex, VStack, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const Market: React.FC<Props> = ({  }) => {
  return (
    <Flex border={'0.5px solid grey'} borderRadius={'10px'} justifyContent={'space-between'}>
      <VStack w='33%' >
        <Image src=''/>
        <Flex>
            <Text>Support</Text>
            <Text>Terms of service</Text>
            <Text>License</Text>
        </Flex>
      </VStack>
      <VStack w='33%' borderLeft={'0.5px solid grey'}>
            <Text>Auctions</Text>
            <Text>Roadmap</Text>
            <Text>Discover</Text>
            <Text>Community</Text>
            <Button>My account</Button>
            <Flex>
                {/* icons here */}
            </Flex>
      </VStack>
      <VStack w='33%' borderLeft={'0.5px solid grey'} p={6}>
        <Text>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </Text>

        <Button bg='white'>Signin</Button>
      </VStack>
    </Flex>
  );
};

export default Market;