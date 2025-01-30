import { Box,Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const Register: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <Flex>
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
            <Text></Text>
        </VStack>
        <VStack>
            <Heading>35.58</Heading>
            <Text></Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Register;