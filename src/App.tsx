
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";
import './App.css';

function App() {

  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
  
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
	      <Box width="100%" height="64px">
           <Text>This is the content of my box</Text>
        </Box>
        <Box width="100%" height="64px">
           <Text>This is another boxx</Text>
        </Box>
</Grid>

		</Flex>    
    </>
  )
}

export default App
