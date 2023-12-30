import { Input } from '@chakra-ui/react';
import React from 'react';
import { ETextBoxType, TFieldProperties } from '../fields.type';
import { validateProperties } from '../utils/common';

const allowedKeys = ['type', 'placeholder', 'min', 'max', 'name'];
function NumberInputRenderer(props: TFieldProperties) {
  return (
    <Input
      {...validateProperties({ props, allowedKeys })}
      type={ETextBoxType.NUMBER}
    />
  );
}

export default NumberInputRenderer;
