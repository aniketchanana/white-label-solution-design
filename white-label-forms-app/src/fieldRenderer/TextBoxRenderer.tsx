import { Input } from '@chakra-ui/react';
import { validateProperties } from '../communicationUtils/common';
import { ETextBoxType, TFieldProperties } from '../fields.type';

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
