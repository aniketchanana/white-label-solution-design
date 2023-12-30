import { Grid, GridItem, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';
import { TFieldProperties } from '../fields.type';
import { validateProperties } from '../utils/common';

function RadioFieldRenderer(props: TFieldProperties) {
  validateProperties({
    props,
    allowedKeys: [],
    mustHaveKeys: ['name', 'radioOptions'],
  });
  const radioOptions = props.radioOptions as string[];
  const name = props.name as string;
  return (
    <RadioGroup name={name}>
      <Grid gap={2} templateColumns='repeat(12, 1fr)' flexDirection='row'>
        {radioOptions.map((radioOption, index) => {
          return (
            <GridItem key={index}>
              <Radio value={radioOption}>{radioOption}</Radio>
            </GridItem>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
export default RadioFieldRenderer;
