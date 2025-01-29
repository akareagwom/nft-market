import { Box, Card, Image,Flex, Text} from '@chakra-ui/react';
// import React, { useState } from 'react';

interface Props {
  
}

const SliderItem: React.FC<Props> = ({  }) => {
    const user = [
        { time:'2:41 min left', price: "2.55 ETH", content: 'Tristique diam a, enim, eros tellus. Viverra etiam', image:'/assets/Image.png', people:'14 people are bidding' },
        { time:'22:59 min left', price: "3.19 ETH", content: 'Vulputate felis purus viverra morbi facilisi eget', image:'/assets/Image1.png', people:'35 people are bidding' },
        { time:'2:41 min left', price: "1.11 ETH", content: 'Dui accumsan leo vestibulum ornare eu', image:'/assets/Image2.png', people:'101 people are bidding' },
        { time:'2:41 min left', price: "1.63 ETH", content: 'Senectus adipiscing nascetur accumsan etiam', image:'/assets/Image3.png', people:'12 people are bidding' },
        { time:'2:41 min left', price: "2.55 ETH", content: 'Mattis at diam lorem nisl nam sed sociis', image:'/assets/Image4.png', people:'19 people are bidding' },
    ]

  return (
    <Box>
            {user.map((use)=>(
                <Flex>
                    <Card.Root display={'flex'} w={'300px'} bg='#262840'>
                        <Card.Body >
                                <Box>
                                    <Image h={'200px'}  src={use.image}
                                    borderRadius={'10px'}
                                    />
                                    <Flex>
                                        <Text>{use.content}</Text>
                                        <Text>{use.price}</Text>
                                    </Flex>
                                    <Flex>
                                        <Text>{use.time}</Text>
                                    </Flex>
                                </Box>
                        </Card.Body>
                    </Card.Root>

                </Flex>
            ))}
    </Box>
  );
};

export default SliderItem;