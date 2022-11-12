import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import CommonButton from "./CommonButton";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllContacts,
  editContact,
  getContacts,
} from "../store/contacts/action";
import { AiOutlineUser } from "react-icons/ai";
import { deleteContact } from "../store/contacts/action";

const ContactsListing = () => {
  const data = useSelector((state) => state.contact.get.data);
  const getLoading = useSelector((state) => state.contact.get.loading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const refreshListing = () => {
    dispatch(getContacts());
  };

  const deleteAll = () => {
    dispatch(deleteAllContacts());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e, id) => {
    e.preventDefault();
    dispatch(editContact(id, formData));
  };

  const editCall = (item) => {
    onOpen();
    setModalData({ ...item });
  };
  return (
    <Box w="60%" textAlign="left">
      <Heading fontSize="30px">Contacts Listing</Heading>
      <Text pt="10px">List of your contacts in your directory</Text>
      <Flex m="20px 0" gap="30px">
        <CommonButton
          Name={BiRefresh}
          buttonText={"Refresh This Listing"}
          click={refreshListing}
          data={data}
        />
        <CommonButton
          Name={MdDeleteOutline}
          buttonText={"Delete All"}
          click={deleteAll}
          data={data}
        />
      </Flex>
      <Box
        h="345px"
        borderColor="gray.200"
        borderWidth="1px"
        overflowY="scroll"
      >
        {getLoading && (
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <Spinner emptyColor="black" color="blue.500" size="xl" />
            <Text>Please Wait Loading...</Text>
          </Flex>
        )}
        {data?.map((item) => {
          return (
            <Box key={item._id}>
              <Box padding="10px 30px" borderWidth="1px" borderColor="gray.200">
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex gap="10px" justifyContent="center" height="100%">
                    <AiOutlineUser size="25px" />
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.mobile_number}</Text>
                  </Flex>
                  <Flex gap="20px">
                    <Button colorScheme="blue" onClick={() => editCall(item)}>
                      Edit
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={() => dispatch(deleteContact(item._id))}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalBody>
            <form onSubmit={(e) => formSubmit(e, modalData._id)}>
              <FormControl>
                <FormLabel>Contact Name</FormLabel>
                <Input
                  type="text"
                  placeholder={modalData.name}
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                />
                <FormLabel mt="10px">Email</FormLabel>
                <Input
                  type="email"
                  placeholder={modalData.email}
                  onChange={(e) => handleInputChange(e)}
                  name="email"
                />
                <FormLabel mt="10px">Phone</FormLabel>
                <Input
                  type="number"
                  placeholder={modalData.mobile_number}
                  onChange={(e) => handleInputChange(e)}
                  name="mobile_number"
                />
                <FormLabel mt="10px">Note</FormLabel>
                <Textarea
                  placeholder={modalData.note}
                  resize="none"
                  onChange={(e) => handleInputChange(e)}
                  name="note"
                ></Textarea>
                <Button
                  type="submit"
                  bg="#3182ce"
                  color="#fff"
                  mt="20px"
                  onClick={onClose}
                >
                  Save Contact
                </Button>
              </FormControl>
            </form>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ContactsListing;
