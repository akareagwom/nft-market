import { Flex, Button,  Heading, Image, Text, Box, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const Nft: React.FC<Props> = ({  }) => {
  return (
    <Flex px={28} py={10} alignItems="center" justifyContent="space-between">
          <Image w='450px' src='assets/Right - Image.png'/>
          <Box lineHeight='24px' w='450px'>
            <Text py={4} fontSize={'12px'}  textTransform={'uppercase'}>Overline</Text>
            <Heading lineHeight='48px' fontSize={'6xl'}>Habitant tristique aliquam in vel scelerisque</Heading>
            <Text py={4} fontSize={'12px'}>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</Text>
            <Flex>
                <VStack>
                    <Heading>Sollicitudin sapien</Heading>
                    <Text>Cursus fermentum</Text>
                </VStack>
                <VStack>
                    <Heading>Pulvinar metus</Heading>
                    <Text>Nunc sed</Text>
                </VStack>
            </Flex>
            <Flex justifyContent='space-between' w='30%'>
                <Button borderRadius="10px" p={4} bg={'#4745D0'}>Get started</Button>
                <Button borderRadius="10px" border='0.5px solid grey' p={4} bg='transparent'>Learn more</Button>
            </Flex>
          </Box>
        </Flex>
  );
};

export default Nft;