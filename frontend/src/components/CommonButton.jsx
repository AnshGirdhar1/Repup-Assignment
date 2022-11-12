import { Button } from "@chakra-ui/react";
import React from "react";

const CommonButton = ({ Name, buttonText, click, data }) => {
  return (
    <Button
      colorScheme="blue"
      leftIcon={<Name size="22px" />}
      onClick={click}
      disabled={data.length === 0}
    >
      {buttonText}
    </Button>
  );
};

export default CommonButton;
