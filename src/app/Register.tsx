import { Box,Flex, Heading, Text, VStack, Card, Image, Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const Register: React.FC<Props> = ({  }) => {
  return (
    <Box display={'flex'} flexDir={'column'} py={6} justifyContent={'center'} alignItems={'center'}>
      <Flex w='50%' alignItems={'center'} justifyContent={'space-between'}>
        <VStack>
            <Heading>300k</Heading>
            <Text>Users Active</Text>
        </VStack>
        <VStack>
            <Heading>52,5k</Heading>
            <Text>Artworks</Text>
        </VStack>
        <VStack>
            <Heading>17,5k</Heading>
            <Text>Artists</Text>
        </VStack>
        <VStack>
            <Heading>35.58</Heading>
            <Text>ETH Spent</Text>
        </VStack>
      </Flex>
      <Card.Root  mt={'10%'}  bgGradient="to-b" border='none' gradientFrom="#262840" gradientTo="#060714"   color='white' borderRadius={'10px'} borderTopLeftRadius={'none'} px={2} mx={4} w={'80%'}>
                      <Box fontSize={'3xl'} bg='rgb(35, 40, 43)' pos={'relative'} left={-2} right={2} top={-5} px={4} w='40%' borderTopRadius={'10px'}>
                          ...
                      </Box>
            <Card.Body pos='relative'>
                <Flex p={4}>
                    <Box>
                        <Text my={4}>OVERLINE </Text>
                        <Heading fontSize={'6xl'} lineHeight={'48px'}>Cursus vitae sollicitudin donec nascetur. Join now</Heading>
                        <Text my={4}>Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</Text>
                        <Flex my={4}>
                            <Button w={'30%'} ml='4' borderRadius={'10px'} bgGradient="to-r" gradientFrom="#4745D0" gradientTo="#2A27C9">Get started</Button>
                            <Button w={'30%'}  bg='transparent' borderRadius={'10px'} border={'0.5px solid grey'}>Learn more</Button>
                        </Flex>
                    </Box>
                        <Image  w='500px' src='assets/spiral/Users.png' />
                </Flex>
            </Card.Body>
        </Card.Root>
    </Box>
  );
};

export default Register;