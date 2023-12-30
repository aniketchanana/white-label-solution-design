import { Input } from '@chakra-ui/react';
import React from 'react';
import { ETextBoxType, TFieldProperties } from '../fields.type';
import { validateProperties } from '../utils/common';

const allowedKeys = ['type', 'placeholder', 'name'];

function TextBoxRenderer(props: TFieldProperties) {
  return (
    <Input
      type={ETextBoxType.TEXT}
      {...validateProperties({ props, allowedKeys })}
    />
  );
}

export default TextBoxRenderer;
