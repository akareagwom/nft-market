import { Box, Flex, Tabs, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
//   variant: any;
}

const TopBar: React.FC<Props> = ({  }) => {
  return (
    <Flex 
    justifyContent='space-between'
    p={4}
    alignItems={'baseline'}
    >
        <Image src='assets/Sygnet.png'/>
      <Tabs.Root  defaultValue="members" variant={'plain'}>
        <Tabs.List  >
            <Tabs.Trigger value='' px={2}>Auctions</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Roadmap</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Discover</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Community</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Flex justifyContent='space-between'>
        <Button border={'1px solid grey'} borderRadius={'10px'} bg='transparent'p={2}>Contact</Button>
        <Button borderRadius={'10px'} bg='#2A27C9' p={2} bgGradient={'linear(to-r, #4745D0, #2A27C9)'}>My Account</Button>
      </Flex>
    </Flex>
  );
};

export default TopBar;