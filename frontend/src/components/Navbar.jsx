import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      background="#000"
      h="60px"
      display="flex"
      color="#fff"
      alignItems="center"
      p="0 50px"
    >
      <Heading fontSize="25px" fontWeight="500">
        Contacts App
      </Heading>
    </Box>
  );
};

export default Navbar;
