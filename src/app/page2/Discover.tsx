import { Box, Card, Flex, Heading, Image, Text, VStack, Button } from '@chakra-ui/react';
import { Avatar } from "@/components/ui/avatar";
import React from 'react';
import LineChart from './components/LineBar';
import Author from './components/Autor';


interface Props {
  
}

const Discover: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <Flex display={{lg:'flex', base:'block'}} justifyContent={{lg:'space-between', base:'center'}} alignItems={'center'} py={'20'} px={'5%'}>
        <Image borderRadius={'10px'} w='550px' src='assets/page/page.png'/>
        <VStack w={{lg:'50%', base:'100%'}}>
            <Heading fontWeight={'bolder'} my={{base:4,lg:2}} lineHeight={{base:'24px', lg:'32px'}} fontSize={{lg:'4xl', base:'3xl'}}>Dui accumsan leo vestibulum ornare</Heading>
            <Text>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</Text>
            <Flex my={{base:4,lg:2}}  display={{lg:'flex', base:'block'}} justifyContent={{lg:'space-between', base:'center'}} alignItems={'center'} w={{base:'100%', lg:'60%'}}>
                <Flex alignItems={'center'}>
                <Avatar size={'xs'} name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Box>
                    <Text>Creator</Text>
                    <Text>@brook_sim</Text>
                    </Box>
                </Flex>
                <Flex alignItems={'center'} my={{base:4,lg:2}}>
                <Avatar   size={'xs'} name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Box>
                    <Text>Collection</Text>
                    <Text>Afterlife</Text>
                    </Box>
                </Flex>
            </Flex>
            <Card.Root display={'flex'} p={8} flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={{lg:'80%'}} color='white' bgGradient="to-b" border='none' gradientFrom="#262840" gradientTo="#060714" >
                <Card.Body>
                    <Flex justifyContent={'space-between'} w={'100%'}>
                        <VStack>
                            <Text fontSize={{base:'', lg:'12px'}}>Current Price</Text>
                            <Heading fontWeight={'bolder'} fontSize={{lg:'2xl', base:'xl'}}>5.25 ETH</Heading>
                        </VStack>
                        <VStack ml={{lg:'10px', base:'15px'}} textAlign={{base:'start'}}>
                            <Text fontSize={{base:'', lg:'12px'}}>Time Left</Text>
                            <Heading fontWeight={'bolder'} fontSize={{lg:'2xl', base:'xl'}}>22:59 min</Heading>
                            <Text fontSize={{base:'', lg:'12px'}}>(01.01.2022 - 01:40:47)</Text>
                        </VStack>
                    </Flex>
                    <Button my={4} w={{lg:'100%', base:'100%'}}  bgGradient="to-b" border='0.5px solid grey' gradientFrom="#4745D0" gradientTo="#2A27C9" > Place a bid</Button>
                </Card.Body>
            </Card.Root>
            <LineChart/>
        </VStack>
      </Flex>
            <Author/>
    </Box>
  );
};

export default Discover;