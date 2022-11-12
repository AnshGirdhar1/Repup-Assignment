import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";
import AddContact from "./components/AddContact";
import ContactsListing from "./components/ContactsListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Flex w="90%" m="auto" p="40px 0" justifyContent="space-between">
        <AddContact />
        <ContactsListing />
      </Flex>
    </div>
  );
}

export default App;
