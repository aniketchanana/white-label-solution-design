import { Button, Grid, GridItem } from '@chakra-ui/react';
import { data } from './constant';
import FormField from './fieldRenderer';
import { getAllFieldsName } from './utils/common';
import { useMessageHandler } from './utils/useMessageHandler';

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
  return (
    <form onSubmit={onSubmit}>
      <Grid gap={4} padding={4}>
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
  );
}

export default App;
