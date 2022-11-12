import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postContacts } from "../store/contacts/action";

const AddContact = () => {
  const [formData, setFormData] = useState({});
  const postLoading = useSelector((state) => state.contact.post.loading);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(postContacts(formData));
    setFormData({
      name: "",
      email: "",
      mobile_number: "",
      note: "",
    });
  };
  return (
    <Box textAlign="left" w="35%">
      <Heading fontSize="30px">Add New Contact</Heading>
      <Text p="10px 0">Add New Contact</Text>
      <form onSubmit={(e) => formSubmit(e)}>
        <FormControl isRequired>
          <FormLabel>Contact Name</FormLabel>
          <Input
            type="text"
            placeholder="Contact Name"
            onChange={(e) => handleInputChange(e)}
            name="name"
            value={formData.name}
          />
          <FormLabel mt="10px">Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
            name="email"
            value={formData.email}
          />
          <FormLabel mt="10px">Phone</FormLabel>
          <Input
            type="number"
            placeholder="Phone"
            onChange={(e) => handleInputChange(e)}
            name="mobile_number"
            value={formData.mobile_number}
          />
          <FormLabel mt="10px">Note</FormLabel>
          <Textarea
            placeholder="Note"
            resize="none"
            onChange={(e) => handleInputChange(e)}
            name="note"
            value={formData.note}
          ></Textarea>
          <Button
            type="submit"
            bg="#3182ce"
            color="#fff"
            mt="20px"
            isLoading={postLoading}
          >
            Save Contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
export default AddContact;
