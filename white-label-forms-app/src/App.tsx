import { Box } from '@chakra-ui/react';
import { fields } from './constant';
import FormField from './formRenderer';

function App() {
  return (
    <Box>
      {fields.map((field) => (
        <FormField {...field} />
      ))}
    </Box>
  );
}

export default App;
