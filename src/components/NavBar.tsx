import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "C:/Users/LENOVO/GameHub/src/assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
