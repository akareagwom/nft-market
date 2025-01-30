// import Image from "next/image";
// import styles from "./page.module.css";
import {Box} from "@chakra-ui/react"
import TopBar from "./components/TopBar";
import { url } from "inspector";
import HomePage from "./HomePage";
import SliderItem from "./Slider";
import About from "./About";
import Carousel from "./components/Carousel"
import Nft from "./Nft";
import Popular from "./Popular";

export default function Home() {
  return (
 <Box 
 bg = '#060714'
 color= 'white'
//  h='100vh'
 
 >
  <Box
  bgImg={'url(assets/Circles.png)'}
  bgRepeat={'no-repeat'}
  backgroundPosition={'center'}
  // bgPosition={'center'}
  bgSize={'cover'}
  >
    <TopBar/>
    <HomePage/>
  </Box>
    <SliderItem/>
    <About/>
    <Carousel/>
    <Nft/>
    <Popular/>
 </Box>
  );
}
