// import Image from "next/image";
// import styles from "./page.module.css";
import {Box} from "@chakra-ui/react"
import TopBar from "./components/TopBar";

export default function Home() {
  return (
 <Box 
 bg = '#060714'
 color= 'white'
 h={'100vh'}
 >
  <TopBar/>
 </Box>
  );
}
