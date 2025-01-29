import { Box, Flex, Tabs, Text, Button } from '@chakra-ui/react';
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
      <Text>hello</Text>
      <Tabs.Root  defaultValue="members" variant={'plain'}>
        <Tabs.List  >
            <Tabs.Trigger value='' px={2}>Auctions</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Roadmap</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Discover</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Community</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Flex>
        <Button>Contact</Button>
        <Button>My Account</Button>
      </Flex>
    </Flex>
  );
};

export default TopBar;