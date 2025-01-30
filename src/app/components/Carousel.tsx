import { Card, Flex, Image, Heading, Text, Button,Box } from '@chakra-ui/react';
import React from 'react';
import { RiTimerLine } from "react-icons/ri";
interface Props {
  
}

const Carousel: React.FC<Props> = ({  }) => {
  return (
    <Flex>
      <Card.Root border='1px solid grey' color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} bg='transparent'>
        <Card.Header fontSize={'3xl'}>Check out the hottest Sale offers</Card.Header>
        <Card.Body>
            <Flex>
                <Card.Root border='none' color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} bg='transparent'>
                    <Card.Body>
                        <Image borderRadius={'10px'} src="https://picsum.photos/200/300" />
                        <Heading>Fames habitasse risus ultricies tortor sit</Heading>
                        <Flex>
                            <RiTimerLine/>
                            <Text>22:59</Text>
                        </Flex>
                        <Button bg="#514CFF26" color="#514CFF" fontSize="10px">2.55 ETH</Button>
                        <Flex borderTop={'0.5px solid grey'}>
                            <Text fontSize='10px'>101 people are biding</Text>
                        </Flex>
                    </Card.Body>
                </Card.Root>
                <Card.Root border='none' color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} bg='transparent'>
                    <Card.Body>
                        <Image borderRadius={'10px'} src="https://picsum.photos/200/300" />
                        <Heading>Fames habitasse risus ultricies tortor sit</Heading>
                        <Flex>
                            <RiTimerLine/>
                            <Text>22:59</Text>
                        </Flex>
                        <Button bg="#514CFF26" color="#514CFF" fontSize="10px">2.55 ETH</Button>
                        <Flex borderTop={'0.5px solid grey'}>
                            <Text fontSize='10px'>101 people are biding</Text>
                        </Flex>
                    </Card.Body>
                </Card.Root>
            </Flex>
            <Button>Show me more</Button>
        </Card.Body>
      </Card.Root>

      {/* document card */}
            <Box>
                <Card.Root bgGradient="to-b" border='none' gradientFrom="rgb(35, 40, 43)" gradientTo="#060714"  color='white' borderRadius={'10px'} borderTopLeftRadius={'none'} px={2} mx={4} w={'300px'}>
                <Box fontSize={'3xl'} bg='rgb(35, 40, 43)' pos={'relative'} left={-2} right={2} top={-5} px={4} w='40%' borderTopRadius={'10px'}>
                    ...
                </Box>
                    <Card.Body pos='relative'>
                        <Box>
                        <Image  w='300px' pos={'relative'} left={0} top={-20} src='assets/hands.png' />
                            <Heading>Get started creating & selling your NFTs</Heading>
                            <Text>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</Text>
                        </Box>
                        <Button>Show me more</Button>
                    </Card.Body>
                </Card.Root>
            </Box>

    </Flex>
  );
};

export default Carousel;