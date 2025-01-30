'use client';
import { Box, Flex, Tabs, Text, Button, Image } from '@chakra-ui/react';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosClose, IoIosMenu } from "react-icons/io";
import React, { useState } from 'react';
// import  {useState} from 'react';

interface Props {
//   variant: any;
}

const TopBar: React.FC<Props> = ({  }) => {
  const [showProduct, setShowProduct] = useState(false);
const [showmobile,setShowMobile] = useState(false)


const handleProduct =()=>{
  setShowProduct(!showProduct);
  
}

const handleMobileView=()=>{
  setShowMobile(!showmobile)
}
  return (
    <Flex 
    justifyContent='space-between'
    p={4}
    alignItems={'baseline'}
    >
      <Image src='assets/Sygnet.png'/>
      <Flex 
      display={{base:'none',lg:'flex'}}
      justifyContent='space-between'
    p={4}
    alignItems={'baseline'}>
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
        <Button display={{base:'block',lg:'none'}} fontSize={'30px'} bg={'transparent'} onClick={handleMobileView}>
            {showmobile?  <IoIosClose/>:<IoIosMenu/>} 
          </Button>
      {showmobile &&
      <Box pos={'absolute'} left='50%' bg={'black'} display={{base:'block',lg:'none'}}>
        <Tabs.Root  defaultValue="members" variant={'plain'}>
        <Tabs.List display={{base:'block',lg:'flex'}} >
            <Tabs.Trigger value='' px={2}>Auctions</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Roadmap</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Discover</Tabs.Trigger>
            <Tabs.Trigger value='' px={2}>Community</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Flex display={{base:'block',lg:'flex'}} justifyContent='space-between'>
        <Button border={'1px solid grey'} borderRadius={'10px'} bg='transparent'p={2}>Contact</Button>
        <Button borderRadius={'10px'} bg='#2A27C9' p={2} bgGradient={'linear(to-r, #4745D0, #2A27C9)'}>My Account</Button>
        </Flex>
      </Box>
      
      }
    </Flex>
  );
};

export default TopBar;