import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import { getAllFieldsName } from './communicationUtils/common';
import { useMessageHandler } from './communicationUtils/useMessageHandler';
import { data } from './constant';
import FormField from './fieldRenderer';

function App() {
  const formFields = data.fields;
  const fieldsName = getAllFieldsName(formFields);
  // const requiredFields = getAllRequiredFieldsName(formFields);
  useMessageHandler();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const fieldValues = fieldsName.map((fieldName: string) => ({
      key: fieldName,
      value: formData.get(fieldName),
    }));
    console.log(fieldValues);
  };
  const appName = 'Forms app';
  return (
    <Box padding={4}>
      <Text fontSize='x-large' marginBottom={4}>
        {appName}
      </Text>
      <form onSubmit={onSubmit}>
        <Grid gap={4}>
          {formFields.map((field, index) => (
            <GridItem rowSpan={1} key={index}>
              <FormField {...field} />
            </GridItem>
          ))}
          <GridItem rowSpan={1}>
            <Button type='submit' variant='solid'>
              {data.submitButtonLabel}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
}

export default App;
