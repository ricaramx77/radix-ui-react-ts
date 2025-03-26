import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import AlertComponent from "./Alert";
import "./App.css";
import Contact from "./Contact";
import MyDropdownMenu from "./DropDownMenu";
import Home from "./Home";
import SelectComponent from "./Select";
import TableComponent from "./Table";

function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Heading size={{
            initial: "3",
            md: "5",
            xl: "7",
          }}>Welcome to my Radix app</Heading>
        <Text>Hello from Radix Themes:</Text>
        <Button>Let's go</Button>
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          <Box width="100%" height="64px">
            <Text>This is the content of my box</Text>
          </Box>
          <Box width="100%" height="64px">
            <Text>This is another boxx</Text>
          </Box>
        </Grid>
        <AlertComponent />
        <br></br>
        <Text>Select an element: </Text>
        <SelectComponent />
        <Text>Data table </Text>
        <TableComponent />
      </Flex>
      <BrowserRouter>
      <MyDropdownMenu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
