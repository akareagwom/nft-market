import { Box, Card, Image,Flex, Text, Button, Stack, Heading} from '@chakra-ui/react';
import { Avatar, AvatarGroup } from "@/components/ui/avatar"
// import React, { useState } from 'react';
import { RiTimerLine } from "react-icons/ri";


interface Props {
  
}

const SliderItem: React.FC<Props> = ({  }) => {
    const user = [
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
    <Box py={8}>
        <Heading color='white' textAlign={'center'}>Latest live auctions</Heading>
        <Flex  display={{base:'block', lg:'flex'}} lineHeight={'24px'} justifyContent={'space-between'} overflow={'auto'} >
            {user.map((use)=>(
                    <Card.Root key={use.price} border='1px solid grey' color={'white'} borderRadius={'10px'} px={2} mx={4} w={'300px'} bg='transparent'>
                        <Card.Body >
                                <Box my={2} display={'flex'} flexDir={'column'} alignItems={'center'}>
                                    <Image my={2} h={'300px'}  src={use.image}
                                    borderRadius={'10px'}
                                    />
                                    <Flex>
                                        <Text fontSize="12px">{use.content}</Text>
                                        <Button bg="#514CFF26" color="#514CFF" fontSize="10px">{use.price}</Button>
                                    </Flex>
                                </Box>
                                    <Flex>
                                        <RiTimerLine />
                                        <Text fontSize="10px">{use.time}</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} my={2} borderTop={'0.5px solid grey'}>
                                        <Stack my={2}>
                                        <AvatarGroup size="xs" stacking="last-on-top">
                                            <Avatar key={use.name} src={use.src} name={use.name} />
                                        
                                            <Avatar  fallback="+3" />
                                         </AvatarGroup>
                                         
                                        </Stack>
                                        <Text fontSize="10px">{use.people}</Text>
                                        <Flex>
                                            <Text fontSize='10px'>100</Text>
                                        </Flex>

                                    </Flex>
                        </Card.Body>
                    </Card.Root>

))}
</Flex>
    </Box>
  );
};

export default SliderItem;