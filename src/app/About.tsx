import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const About: React.FC<Props> = ({  }) => {
  return (
    <Flex px={{lg:28,base:10}} py={10} alignItems="center" justifyContent="space-between">
      <Box lineHeight='24px' w='450px'>
        <Text py={4} fontSize={'12px'}  textTransform={'uppercase'}>Overline</Text>
        <Heading lineHeight='48px' fontSize={{lg:'6xl',base:'2xl'}}>Sapien ipsum scelerisque convallis fusce</Heading>
        <Text py={4} fontSize={'12px'}>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</Text>
        <Flex justifyContent='space-between' w='30%'>
            <Button borderRadius="10px" p={4} bg={'#4745D0'}>Get started</Button>
            <Button borderRadius="10px" border='0.5px solid grey' p={4} bg='transparent'>Learn more</Button>
        </Flex>
      </Box>
      <Image w='450px' src='assets/Right - Image.png'/>
    </Flex>
  );
};

export default About;