import {
  Box,
  Button,
  ChakraProvider,
  Grid,
  GridItem,
  Text,
  extendTheme,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ErrorDialog from './ErrorDialog';
import FormField from './fieldRenderer';
import { IFormField } from './fields.type';
import { getAllFieldsName, getAllRequiredFieldsName } from './utils/common';
import { useMessageHandler } from './utils/useMessageHandler';

function App() {
  const { appConfig } = useMessageHandler();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    appHeading = 'Forms app',
    fields = [],
    submitButtonLabel = 'Save',
    theme = {},
  } = appConfig as {
    appHeading: string;
    fields: IFormField[];
    submitButtonLabel: string;
    theme: Record<string, string>;
  };
  console.log(theme);
  if (fields.length <= 0) {
    return <Text>No fields available on this form</Text>;
  }
  const requiredFields = getAllRequiredFieldsName(fields);
  const allFields = getAllFieldsName(fields);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.currentTarget);

    const fieldValues = {};
    allFields.forEach((fieldKey: string) => {
      fieldValues[fieldKey] = formData.get(fieldKey);
    });
    const missingValueFields = requiredFields.filter(
      (fieldKey) => !fieldValues[fieldKey]
    );
    if (missingValueFields.length > 0) {
      return setErrorMessage(
        `${missingValueFields.join(
          ', '
        )} are required fields and should be filled.`
      );
    }
  };
  console.log(appConfig);
  return (
    <ChakraProvider
      theme={extendTheme({
        components: {
          ...theme,
        },
      })}
    >
      <Box padding={4}>
        <Text fontSize='x-large' marginBottom={4}>
          {appHeading as string}
        </Text>
        <form onSubmit={onSubmit}>
          <Grid gap={4}>
            {fields.map((field, index) => (
              <GridItem rowSpan={1} key={index}>
                <FormField {...field} />
              </GridItem>
            ))}
            <GridItem rowSpan={1}>
              <Button type='submit' variant='solid'>
                {submitButtonLabel}
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
      <ErrorDialog
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        title='Required fields are missing'
      />
    </ChakraProvider>
  );
}

export default App;
