import { Card, Flex, Image, Heading, Text, Button,Box } from '@chakra-ui/react';
import React from 'react';
import { RiTimerLine } from "react-icons/ri";
interface Props {
  
}

const Carousel: React.FC<Props> = ({  }) => {

    const info = [
        { time:'2:41 min left', price: "2.55 ETH", content: 'Tristique diam a, enim, eros tellus. Viverra etiam', image:'/assets/Image.png', people:'14 people are bidding', src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke", },
        { time:'22:59 min left', price: "3.19 ETH", content: 'Vulputate felis purus viverra morbi facilisi eget', image:'/assets/Image1.png', people:'35 people are bidding' , src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke",},
        { time:'2:41 min left', price: "1.11 ETH", content: 'Dui accumsan leo vestibulum ornare eu', image:'/assets/Image2.png', people:'101 people are bidding' , src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke",},
        { time:'37:01 min left', price: "1.63 ETH", content: 'Senectus adipiscing nascetur accumsan etiam', image:'/assets/Image3.png', people:'12 people are bidding',  src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke", },
        { time:'2:41 min left', price: "2.55 ETH", content: 'Mattis at diam lorem nisl nam sed sociis', image:'/assets/Image4.png', people:'19 people are bidding',  src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke", },
    ];

  return (
    <Flex alignItems={'baseline'} justifyContent={'center'} w='100%'>
      <Card.Root py={4} border='1px solid grey' color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} bg='transparent'>
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
            <Button bg='transparent' border={'0.5px solid grey'} borderRadius={'10px'}>Show me more</Button>
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

            {/* box 3 */}
                <Card.Root py={4} bg={'transparent'} color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} >
                    <Card.Header>
                        Top NFT at a lower price
                    </Card.Header>
                    <Card.Body>
                        
                                    
                                    {info.map((inform)=>(
                                        <Box display={'flex'} justifyContent={'space-between'} p={2} alignItems={'center'} key={inform.price}>
                                        <Image my={2} w={'200'} h={'100px'}  src={inform.image}
                                                borderRadius={'10px'}/>
                                    <Box w='60%'>

                                            <Text fontSize="14px">{inform.content}</Text>
                                        <Flex justifyContent={'space-between'}>
                                            <Flex>
                                                <RiTimerLine />
                                                <Text fontSize="10px">{inform.time}</Text>
                                            </Flex>
                                                <Button bg="#514CFF26" color="#514CFF" fontSize="10px">{inform.price}</Button>
                                        </Flex>
                                    </Box>

                            </Box>
                ))}
                <Button bg='transparent' border={'0.5px solid grey'} borderRadius={'10px'}>Show me more</Button>
                    </Card.Body>
                </Card.Root>
    </Flex>
  );
};

export default Carousel;