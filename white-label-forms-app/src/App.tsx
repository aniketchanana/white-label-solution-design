import { Button, Grid, GridItem } from '@chakra-ui/react';
import { data } from './constant';
import FormField from './formRenderer';

function App() {
  return (
    <form>
      <Grid gap={4}>
        {data.fields.map((field) => (
          <GridItem rowSpan={1}>
            <FormField {...field} />
          </GridItem>
        ))}
        <GridItem rowSpan={1}>
          <Button variant='solid'>{data.submitButtonLabel}</Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default App;
