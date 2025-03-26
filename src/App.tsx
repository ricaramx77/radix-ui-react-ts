import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import AlertComponent from "./Alert";
import "./App.css";
import SelectComponent from "./Select";
import TableComponent from "./Table";

function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Heading>Welcome to my Radix app</Heading>
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
    </>
  );
}

export default App;
